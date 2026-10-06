import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tx } from '../src/core/db.js';
import { findToken } from '../src/services/core.js';
import { acceptReferral } from '../src/services/matching.js';
import { loadAction } from '../src/services/actions.js';
import { settle } from '../src/services/engine.js';
import { TEMPLATES } from '../src/domain/templates.js';
import { CUSTOMER, act, acceptBy, addAgreement, addInterpreter, advance, inbound, job, lastLink, press, q, toMatching, world } from './helpers.js';
const A = '8613800000001';
const B = '8613800000002';
const ALL = Object.fromEntries(Object.keys(TEMPLATES).map((k) => [k, `ct_${k}`]));
async function twoInterpreters(w) {
    const a = await addInterpreter(w, { name: 'Tercüman A', whatsapp: A, priority: 1 });
    const b = await addInterpreter(w, { name: 'Tercüman B', whatsapp: B, priority: 2 });
    await addAgreement(w, a);
    await addAgreement(w, b);
    return { a, b };
}
test('T06 "müsaitim": müsaitlik kaydolur; kesin iş, atama veya ödeme varsayılmaz', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await inbound(w, A, 'Müsaitim');
        const [inq] = await q(w, `SELECT status FROM interpreter_inquiries`);
        assert.equal(inq.status, 'AVAILABLE');
        assert.equal((await job(w)).status, 'MATCHING');
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments`))[0].n, 0);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM commission_accounts`))[0].n, 0);
        assert.match(w.wa.last(A).text, /gösterilen şartlarla kabul/);
    }
    finally {
        await w.close();
    }
});
test('Belirsiz "olabilir" yanıtı kabul sayılmaz; açık seçim istenir', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await inbound(w, A, 'olabilir, bakarım');
        const [inq] = await q(w, `SELECT status FROM interpreter_inquiries`);
        assert.equal(inq.status, 'SENT');
        assert.match(w.wa.last(A).text, /kesin olarak işaretleyebilir/);
    }
    finally {
        await w.close();
    }
});
test('T07 "sadece ilk gün": şartlı yanıt; tüm tarihler kabul sayılmaz, sıradaki adaya geçilir', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await inbound(w, A, 'Sadece 12 Ekim uygunum');
        const rows = await q(w, `SELECT p.display_name, q.status FROM interpreter_inquiries q JOIN parties p ON p.id=q.interpreter_id ORDER BY rank`);
        assert.deepEqual(rows.map((r) => r.status), ['CONDITIONAL', 'SENT']);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='CONDITIONAL_RESPONSE'`))[0].n, 1);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T08 ret: yalnızca aday sorgusu kapanır, sıradaki adaya geçilir', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await press(w, A, 'Uygun değilim');
        assert.equal((await job(w)).status, 'MATCHING');
        const rows = await q(w, `SELECT q.status FROM interpreter_inquiries q ORDER BY rank`);
        assert.deepEqual(rows.map((r) => r.status), ['DECLINED', 'SENT']);
    }
    finally {
        await w.close();
    }
});
test('T09 + UNFULFILLED: yanıtsız adaylar sonrası aday kalmazsa yönetici istisnası ve müşteriye dürüst bilgi', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        for (let i = 0; i < 14; i++)
            await advance(w, 6);
        assert.equal((await job(w)).status, 'UNFULFILLED');
        assert.equal(w.wa.to(A).filter((m) => /yanıtınızı bekliyoruz/.test(m.text)).length, 2);
        assert.match(w.wa.last(CUSTOMER).text, /uygun tercüman bulamadık/);
        const [k] = await q(w, `SELECT severity FROM cases WHERE case_type='NO_CANDIDATE'`);
        assert.equal(k.severity, 'HIGH');
    }
    finally {
        await w.close();
    }
});
test('T10 iki aday aynı anda kabul ediyor: veritabanında yalnızca bir aktif atama', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        // Acil olmayan işte de iki paralel sorgu açılabilsin
        await w.ctx.db.query(`UPDATE organization_settings SET policy='{"parallelInquiries":2}'`);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        await press(w, B, 'Müsaitim');
        const ta = await findToken(w.ctx.db, lastLink(w, A));
        const tb = await findToken(w.ctx.db, lastLink(w, B));
        const results = await Promise.all([
            tx(w.ctx.db, (c) => acceptReferral(c, w.ctx, ta)),
            tx(w.ctx.db, (c) => acceptReferral(c, w.ctx, tb)),
        ]);
        assert.equal(results.filter((r) => r.ok).length, 1);
        assert.equal(results.filter((r) => !r.ok)[0].ok === false && results.find((r) => !r.ok).code, 'TAKEN');
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments WHERE active`))[0].n, 1);
    }
    finally {
        await w.close();
    }
});
test('T11 aynı tercüman çakışan iki işi kabul ediyor: ikinci rezervasyon engellenir, alternatif aranır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const { a } = await twoInterpreters(w);
        await w.ctx.db.query(`UPDATE organization_settings SET policy='{"parallelInquiries":2}'`);
        const C2 = '905329998877';
        await toMatching(w, CUSTOMER);
        await toMatching(w, C2, "13–15 Ekim 2026 Mersin'de makine kurulumu. Adım Ayşe Demir");
        // A her iki işe de müsait der; iki bağlantı alır
        const aMsgs = w.wa.to(A).filter((m) => m.buttons?.some((b) => b.title === 'Müsaitim'));
        for (const m of aMsgs)
            await inbound(w, A, 'Müsaitim', m.buttons.find((b) => b.title === 'Müsaitim').id);
        const links = w.wa.to(A).map((m) => m.text.match(/\/actions\/([A-Za-z0-9_-]+)/)?.[1]).filter(Boolean);
        assert.equal(links.length, 2);
        const r1 = await act(w, links[0], { decision: 'accept' });
        const r2 = await act(w, links[1], { decision: 'accept' });
        assert.ok(r1.ok);
        assert.equal(r2.ok, false);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM reservations WHERE interpreter_id=$1 AND status IN ('HOLD','BOOKED')`, [a]))[0].n, 1);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='RESERVATION_CONFLICT'`))[0].n, 1);
    }
    finally {
        await w.close();
    }
});
test('T12 kabul bağlantısı süre dolduktan sonra: yeni atama yapılmaz; güncel durum açıklanır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        const link = lastLink(w, A);
        for (let i = 0; i < 10; i++)
            await advance(w, 6);
        const v = await loadAction(w.ctx, link);
        assert.equal(v.state, 'EXPIRED');
        const r = await act(w, link, { decision: 'accept' });
        assert.equal(r.ok, false);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments`))[0].n, 0);
        // Süresi dolmuş sorguya sonradan gelen "müsaitim" atama yapmaz
        await inbound(w, A, 'Müsaitim', `av:yes:${(await q(w, `SELECT id FROM interpreter_inquiries ORDER BY rank LIMIT 1`))[0].id}:1`);
        assert.match(w.wa.last(A).text, /süresi dolmuş/);
    }
    finally {
        await w.close();
    }
});
test('T13 müşteri paylaşım izni vermezse telefon gönderilmez; istisna açılır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await inbound(w, CUSTOMER, "12–14 Ekim 2026 Mersin'de makine kurulumu, adım Ahmet Yılmaz");
        await inbound(w, CUSTOMER, 'CNC');
        await press(w, CUSTOMER, 'Evet, doğru');
        await press(w, CUSTOMER, 'Hayır');
        assert.equal((await job(w)).status, 'INFO_PENDING');
        assert.equal(w.wa.to(A).length, 0, 'izin yokken tercümana gidilmez');
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='SHARE_CONSENT_MISSING'`))[0].n, 1);
        // İzin sonradan geri çekilirse kabul sonrası devir yapılmaz
        await press(w, CUSTOMER, 'Evet, izin veriyorum');
        const [p] = await q(w, `SELECT party_id FROM contact_endpoints WHERE value=$1`, [CUSTOMER]);
        await w.ctx.db.query(`UPDATE consents SET withdrawn_at=now() WHERE party_id=$1 AND purpose='CONTACT_SHARING'`, [p.party_id]);
        const r = await acceptBy(w, A);
        assert.ok(r.ok);
        assert.equal((await job(w)).status, 'HANDOFF_PENDING');
        assert.ok(!w.wa.to(A).some((m) => m.text.includes(CUSTOMER)));
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM sharing_records`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T14 iletişim mesajı teslim edilemiyor: devir tamamlanmış sayılmaz, müşteriye iddia gönderilmez', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        w.wa.autoDeliver = false;
        const r = await act(w, lastLink(w, A), { decision: 'accept' });
        assert.ok(r.ok);
        const handoff = w.wa.last(A);
        const { storeInbox } = await import('../src/services/inbox.js');
        await storeInbox(w.ctx, 'whatsapp', `status:${handoff.externalId}:FAILED`, { kind: 'status', externalMessageId: handoff.externalId, status: 'FAILED', at: w.clock.now(), recipient: A, error: '131026 undeliverable' }, true);
        await settle(w.ctx);
        assert.equal((await job(w)).status, 'HANDOFF_PENDING');
        assert.ok(!w.wa.to(CUSTOMER).some((m) => /İletişim bilginizi kendisiyle paylaştık/.test(m.text)));
        const [s] = await q(w, `SELECT result FROM sharing_records`);
        assert.equal(s.result, 'FAILED');
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='HANDOFF_FAILED'`))[0].n, 1);
        // Eski bir "sent" olayı sonucu geri almaz
        await storeInbox(w.ctx, 'whatsapp', `status:${handoff.externalId}:SENT`, { kind: 'status', externalMessageId: handoff.externalId, status: 'SENT', at: w.clock.now(), recipient: A, error: null }, true);
        await settle(w.ctx);
        const [m] = await q(w, `SELECT status FROM messages WHERE external_id=$1`, [handoff.externalId]);
        assert.equal(m.status, 'FAILED');
    }
    finally {
        await w.close();
    }
});
test('T38 API mesajı aldı fakat yanıt zaman aşımı: UNKNOWN + mutabakat; kontrolsüz ikinci devir mesajı yok', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        w.wa.failNext('uncertain');
        await act(w, lastLink(w, A), { decision: 'accept' });
        await advance(w, 2);
        const handoffs = w.wa.to(A).filter((m) => /müşteri iletişimi/.test(m.text));
        assert.equal(handoffs.length, 1, 'tek deneme; kör tekrar yok');
        const [o] = await q(w, `SELECT status FROM outbox WHERE payload->>'key'='interpreter_handoff'`);
        assert.equal(o.status, 'UNKNOWN');
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='DELIVERY_UNKNOWN'`))[0].n, 1);
        assert.equal((await job(w)).status, 'HANDOFF_PENDING');
    }
    finally {
        await w.close();
    }
});
test('Geçici hata (429/5xx): artan beklemeyle yeniden denenir', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        w.wa.failNext('retryable');
        await inbound(w, CUSTOMER, "Mersin'de makine kurulumu");
        const [o] = await q(w, `SELECT status, attempts FROM outbox WHERE payload->>'key'='intake_welcome'`);
        assert.equal(o.status, 'PENDING');
        await advance(w, 1);
        const [o2] = await q(w, `SELECT status, attempts FROM outbox WHERE payload->>'key'='intake_welcome'`);
        assert.equal(o2.status, 'DONE');
    }
    finally {
        await w.close();
    }
});
test('T36 bağlantı önizlemesi (GET) kabul/ret oluşturmaz, token tüketmez', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await twoInterpreters(w);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        const link = lastLink(w, A);
        for (let i = 0; i < 3; i++)
            await loadAction(w.ctx, link);
        const [t] = await q(w, `SELECT used_at FROM action_tokens WHERE action='accept_referral'`);
        assert.equal(t.used_at, null);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments`))[0].n, 0);
        // Nonce olmadan POST reddedilir
        const { performAction } = await import('../src/services/actions.js');
        const bad = await performAction(w.ctx, link, { decision: 'accept', nonce: 'yanlis' });
        assert.equal(bad.ok, false);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM assignments`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T23 komisyon kuralı eksik: borç oluşmaz, sıfır sayılmaz, devir öncesi istisna', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        assert.match(w.wa.last(A).text, /Komisyon şartlarınız netleştiğinde/);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='COMMISSION_RULE_MISSING'`))[0].n, 1);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM commission_accounts`))[0].n, 0);
        assert.ok(!w.wa.to(A).some((m) => /\/actions\//.test(m.text)), 'kabul bağlantısı gönderilmedi');
        // Yönetici anlaşmayı tanımlayınca bekleyen yönlendirme kendiliğinden sürer
        await addAgreement(w, a);
        assert.match(w.wa.last(A).text, /gösterilen şartlarla kabul/);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM cases WHERE case_type='COMMISSION_RULE_MISSING' AND status='OPEN'`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T32 24 saatlik pencere kapalı ve şablon yok: serbest mesajla kural aşılmaz, istisna açılır', async () => {
    const w = await world('2026-10-06T07:00:00Z', {});
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        assert.equal(w.wa.to(A).length, 0, 'tercüman hiç yazmadığı için pencere kapalı');
        const [k] = await q(w, `SELECT summary FROM cases WHERE case_type='TEMPLATE_MISSING'`);
        assert.match(k.summary, /availability_request/);
    }
    finally {
        await w.close();
    }
});
test('Pencere kapalıyken onaylı şablon kullanılır (butonlar şablon hızlı yanıtı olarak)', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        const m = w.wa.last(A);
        assert.equal(m.kind, 'template');
        assert.equal(m.template?.name, 'ct_availability_request');
        assert.equal(m.buttons?.length, 3);
    }
    finally {
        await w.close();
    }
});
test('Sessiz saat: tercümana gece proaktif mesaj gönderilmez, pencere başında gönderilir', async () => {
    const w = await world('2026-10-06T14:00:00Z', ALL); // Şanghay 22:00
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        assert.equal(w.wa.to(A).length, 0);
        w.clock.set('2026-10-07T01:00:00Z'); // Şanghay 09:00
        await settle(w.ctx);
        assert.equal(w.wa.to(A).length, 1);
    }
    finally {
        await w.close();
    }
});
