// Takip, değişiklik, iptal, takvim ve komisyon senaryoları (T17–T31).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TEMPLATES } from '../src/domain/templates.js';
import { tx } from '../src/core/db.js';
import { cancelJob, requestJobChange } from '../src/services/workflow.js';
import { reconcileCalendar } from '../src/services/dispatch.js';
import { settle } from '../src/services/engine.js';
import { applyBasisPoints, balanceOf, computeCommission, dueState, parseAmount, paymentState } from '../src/domain/money.js';
import { act, acceptBy, addAgreement, addInterpreter, advance, CUSTOMER, inbound, job, lastLink, payWebhook, press, q, toMatching, world } from './helpers.js';
const ALL = Object.fromEntries(Object.keys(TEMPLATES).map((k) => [k, `ct_${k}_v1`]));
const A = '8613800000001';
async function toConfirmed(w) {
    const a = await addInterpreter(w, { whatsapp: A });
    await addAgreement(w, a);
    await toMatching(w);
    const r = await acceptBy(w, A);
    assert.ok(r.ok, r.message);
    await advance(w, 3);
    await press(w, A, 'Görüştük');
    await press(w, CUSTOMER, 'Görüştük');
    await advance(w, 20);
    await press(w, A, 'Kesinleşti');
    const pt = await act(w, lastLink(w, A), { daily_rate: '250', currency: 'USD', days: ['2026-10-12', '2026-10-13', '2026-10-14'], expenses: '' });
    assert.ok(pt.ok, pt.message);
    await press(w, CUSTOMER, 'Kesinleşti');
    const ct = await act(w, lastLink(w, CUSTOMER), { decision: 'yes' });
    assert.ok(ct.ok, ct.message);
    assert.equal((await job(w)).status, 'CONFIRMED');
    return a;
}
async function toCompleted(w) {
    const a = await toConfirmed(w);
    w.clock.set('2026-10-12T09:30:00Z');
    await advance(w, 0);
    await press(w, A, 'Evet, başladı');
    w.clock.set('2026-10-15T06:30:00Z');
    await advance(w, 0);
    assert.ok((await act(w, lastLink(w, A), { happened: 'yes', days: ['2026-10-12', '2026-10-13', '2026-10-14'], note: '' })).ok);
    assert.ok((await act(w, lastLink(w, CUSTOMER), { decision: 'yes' })).ok);
    const j = await job(w);
    assert.equal(j.status, 'COMPLETED');
    const [acc] = await q(w, `SELECT * FROM commission_accounts WHERE job_id=$1`, [j.id]);
    return { a, j, acc };
}
const balance = async (w, accId) => balanceOf(await q(w, `SELECT kind, amount_minor FROM financial_entries WHERE account_id=$1`, [accId]));
test('T24/T25 komisyon matematiği: yüzde, gün başı, kuruş yuvarlama, farklı para birimi', () => {
    assert.equal(parseAmount('1.234,56', 'TRY'), 123456);
    assert.equal(parseAmount('250', 'USD'), 25000);
    assert.equal(parseAmount('1.250', 'TRY'), 125000);
    assert.equal(parseAmount('250,5', 'USD'), 25050);
    assert.equal(parseAmount('1,234.56', 'USD'), 123456);
    assert.equal(applyBasisPoints(33333, 1000), 3333);
    assert.equal(applyBasisPoints(33335, 1000), 3334);
    const pct = computeCommission({ commission_type: 'PERCENT_OF_BASE', currency: 'USD', fixed_amount_minor: null, per_day_amount_minor: null, percentage_basis_points: 1250 }, { verifiedDays: 3, dailyRateMinor: 25000, rateCurrency: 'USD' });
    assert.deepEqual(pct.ok && [pct.amountMinor, pct.base], [9375, 75000]);
    const day = computeCommission({ commission_type: 'FIXED_SERVICE_DAY', currency: 'TRY', fixed_amount_minor: null, per_day_amount_minor: 50000, percentage_basis_points: null }, { verifiedDays: 2 });
    assert.equal(day.ok && day.amountMinor, 100000);
    const fx = computeCommission({ commission_type: 'PERCENT_OF_BASE', currency: 'TRY', fixed_amount_minor: null, per_day_amount_minor: null, percentage_basis_points: 1000 }, { verifiedDays: 3, dailyRateMinor: 25000, rateCurrency: 'USD' });
    assert.equal(fx.ok, false, 'kur çevrimi yapılmaz');
    const b = balanceOf([{ kind: 'ACCRUAL', amount_minor: 7500 }, { kind: 'COLLECTION', amount_minor: 7500 }, { kind: 'REFUND', amount_minor: 2000 }]);
    assert.deepEqual(b, { receivable: 7500, collected: 5500, balance: 2000 });
    assert.equal(paymentState(b), 'PARTIAL');
    assert.equal(dueState(2000, '2026-10-22', '2026-10-23'), 'OVERDUE');
    assert.equal(dueState(0, '2026-10-22', '2026-10-23'), null);
});
test('T17a atama öncesi tarih değişikliği: özet yeniden onaylanır, eski sorgular kapanır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        let j = await toMatching(w);
        assert.equal(j.status, 'MATCHING');
        await tx(w.ctx.db, (c) => requestJobChange(c, w.ctx, j.id, { start_date: '2026-10-19', end_date: '2026-10-20' }, 'user:test'));
        await settle(w.ctx);
        j = await job(w);
        assert.equal(j.status, 'INFO_PENDING');
        assert.equal(j.start_date, '2026-10-19');
        assert.match(w.wa.last(CUSTOMER).text, /19–20 Ekim 2026/);
        const [inq] = await q(w, `SELECT status FROM interpreter_inquiries WHERE job_id=$1`, [j.id]);
        assert.equal(inq.status, 'CLOSED');
        // Eski sürümün butonu artık iş değiştirmez
        await press(w, A, 'Müsaitim');
        assert.equal((await q(w, `SELECT count(*)::int n FROM assignments`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T17b kesinleşmiş işte tarih değişikliği: iki taraf onaylamadan rezervasyon değişmez', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await toConfirmed(w);
        let j = await job(w);
        await tx(w.ctx.db, (c) => requestJobChange(c, w.ctx, j.id, { start_date: '2026-10-20', end_date: '2026-10-21' }, 'user:test'));
        await settle(w.ctx);
        j = await job(w);
        assert.equal(j.start_date, '2026-10-12', 'onay öncesi eski tarih geçerli');
        await press(w, CUSTOMER, 'Evet, doğru');
        assert.match(w.wa.last(A).text, /DEĞİŞİKLİK/);
        assert.equal((await job(w)).start_date, '2026-10-12', 'tercüman onayı bekleniyor');
        await press(w, A, 'Müsaitim');
        j = await job(w);
        assert.equal(j.start_date, '2026-10-20');
        assert.equal(j.status, 'CONFIRMED');
        const res = await q(w, `SELECT lower(period)::text AS s, status FROM reservations WHERE status<>'RELEASED'`);
        assert.deepEqual(res, [{ s: '2026-10-20', status: 'BOOKED' }]);
        const ev = [...w.cal.events.values()][0];
        assert.equal(ev.start.date, '2026-10-20');
        assert.equal(ev.end.date, '2026-10-22');
        assert.equal(w.cal.inserts, 1, 'aynı etkinlik güncellenir');
    }
    finally {
        await w.close();
    }
});
test('T31 iptal: görevler durur, rezervasyon serbest kalır, takvim iptal, komisyon tahakkuk etmez', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await toConfirmed(w);
        const j = await job(w);
        await tx(w.ctx.db, (c) => cancelJob(c, w.ctx, j.id, 'user:test', 'Müşteri vazgeçti'));
        await settle(w.ctx);
        assert.equal((await job(w)).status, 'CANCELLED');
        assert.equal((await q(w, `SELECT count(*)::int n FROM tasks WHERE job_id=$1 AND status='PENDING'`, [j.id]))[0].n, 0);
        assert.equal((await q(w, `SELECT count(*)::int n FROM reservations WHERE status<>'RELEASED'`))[0].n, 0);
        assert.equal([...w.cal.events.values()][0].status, 'cancelled');
        assert.ok(w.wa.to(A).some((m) => /iptal/i.test(m.text)));
        assert.equal((await q(w, `SELECT count(*)::int n FROM financial_entries WHERE kind='ACCRUAL'`))[0].n, 0);
        // Sonradan gelen eski bir buton işi geri açmaz
        await press(w, A, 'Evet, başladı').catch(() => undefined);
        assert.equal((await job(w)).status, 'CANCELLED');
    }
    finally {
        await w.close();
    }
});
test('T19 takvim kapalıyken iş ilerler, bağlantı gelince tek etkinlik yazılır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        w.cal.down = true;
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        await acceptBy(w, A);
        assert.equal((await job(w)).status, 'NEGOTIATING', 'takvim hatası iş akışını durdurmaz');
        assert.equal(w.cal.events.size, 0);
        const [ob] = await q(w, `SELECT status, attempts FROM outbox WHERE action='calendar.sync' ORDER BY created_at DESC LIMIT 1`);
        assert.notEqual(ob.status, 'DONE');
        w.cal.down = false;
        for (let i = 0; i < 6; i++)
            await advance(w, 1);
        assert.equal(w.cal.events.size, 1);
        assert.equal(w.cal.inserts, 1);
    }
    finally {
        await w.close();
    }
});
test('T20 Google’da elle silinen etkinlik işi iptal etmez, uyuşmazlık açar', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await toConfirmed(w);
        const [id] = [...w.cal.events.keys()];
        w.cal.manualDelete(id);
        assert.equal(await reconcileCalendar(w.ctx), 1);
        assert.equal((await job(w)).status, 'CONFIRMED');
        const cases = await q(w, `SELECT case_type FROM cases WHERE status='OPEN'`);
        assert.deepEqual(cases.map((c) => c.case_type), ['CALENDAR_DRIFT']);
        await reconcileCalendar(w.ctx);
        assert.equal((await q(w, `SELECT count(*)::int n FROM cases WHERE case_type='CALENDAR_DRIFT'`))[0].n, 1, 'tekrar açılmaz');
    }
    finally {
        await w.close();
    }
});
test('T26–T30 ödeme: "ödedim" kapatmaz, mükerrer webhook tek kayıt, yanlış para birimi reddedilir, iade bakiyeyi açar', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const { acc } = await toCompleted(w);
        assert.equal((await balance(w, acc.id)).balance, 7500);
        await inbound(w, A, 'ödedim');
        let [a2] = await q(w, `SELECT payment_notice FROM commission_accounts WHERE id=$1`, [acc.id]);
        assert.equal(a2.payment_notice, 'REPORTED_UNVERIFIED');
        assert.equal((await balance(w, acc.id)).balance, 7500, 'beyan tahsilat sayılmaz');
        await payWebhook(w, { transactionId: 'tx-eur', reference: acc.reference, amountMinor: 7500, currency: 'EUR' });
        assert.equal((await balance(w, acc.id)).balance, 7500);
        assert.equal((await q(w, `SELECT verification FROM payments WHERE external_id='tx-eur'`))[0].verification, 'REJECTED');
        assert.ok((await q(w, `SELECT 1 FROM cases WHERE case_type='PAYMENT_MISMATCH' AND status='OPEN'`)).length);
        await payWebhook(w, { transactionId: 'tx-ok', reference: acc.reference, amountMinor: 7500, currency: 'USD' });
        await payWebhook(w, { transactionId: 'tx-ok', reference: acc.reference, amountMinor: 7500, currency: 'USD', eventId: 'evt-dup-2' });
        assert.equal((await balance(w, acc.id)).balance, 0, 'mükerrer bildirim iki kez düşmez');
        assert.equal((await q(w, `SELECT count(*)::int n FROM payments WHERE external_id='tx-ok'`))[0].n, 1);
        [a2] = await q(w, `SELECT payment_notice FROM commission_accounts WHERE id=$1`, [acc.id]);
        assert.equal(a2.payment_notice, 'VERIFIED');
        await payWebhook(w, { transactionId: 'tx-ok', reference: acc.reference, amountMinor: 2500, currency: 'USD', type: 'payment.refunded' });
        assert.equal((await balance(w, acc.id)).balance, 2500);
        // Kayıtlar yalnızca eklenir
        await assert.rejects(w.ctx.db.query(`UPDATE financial_entries SET amount_minor=1 WHERE account_id=$1`, [acc.id]));
        await assert.rejects(w.ctx.db.query(`DELETE FROM financial_entries WHERE account_id=$1`, [acc.id]));
    }
    finally {
        await w.close();
    }
});
test('T22 vade: hatırlatma vadeden önce, gecikme vadeden sonra; ödeme sonrası durur', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const { acc } = await toCompleted(w);
        assert.ok(acc.due_date, 'vade tarihi atandı');
        const due = (await q(w, `SELECT task_type FROM tasks WHERE entity_id=$1 AND status='PENDING' ORDER BY due_at`, [acc.id])).map((t) => t.task_type);
        assert.ok(due.length >= 2, `finans görevleri: ${due.join(',')}`);
        for (let i = 0; i < 12; i++)
            await advance(w, 24);
        assert.ok(w.wa.to(A).some((m) => /vade/i.test(m.text)), 'vade hatırlatması gönderildi');
        await payWebhook(w, { transactionId: 'tx-late', reference: acc.reference, amountMinor: 7500, currency: 'USD' });
        assert.equal((await q(w, `SELECT count(*)::int n FROM tasks WHERE entity_id=$1 AND status='PENDING'`, [acc.id]))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T16 bir taraf "kesinleşti", diğeri "vazgeçildi": iş kesinleşmez, uyuşmazlık açılır', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        await acceptBy(w, A);
        await advance(w, 3);
        await press(w, A, 'Görüştük');
        await press(w, CUSTOMER, 'Görüştük');
        await advance(w, 20);
        await press(w, A, 'Kesinleşti');
        await press(w, CUSTOMER, 'Vazgeçildi');
        assert.equal((await job(w)).status, 'NEGOTIATING');
        assert.ok((await q(w, `SELECT 1 FROM cases WHERE case_type='AGREEMENT_CONFLICT' AND status='OPEN'`)).length);
        assert.equal((await q(w, `SELECT count(*)::int n FROM reservations WHERE status='BOOKED'`))[0].n, 0);
    }
    finally {
        await w.close();
    }
});
test('T21 bitiş geçti, kimse yanıtlamıyor: COMPLETION_PENDING kalır, komisyon varsayılmaz', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        await toConfirmed(w);
        w.clock.set('2026-10-15T06:30:00Z');
        await advance(w, 0);
        for (let i = 0; i < 10; i++)
            await advance(w, 12);
        assert.equal((await job(w)).status, 'COMPLETION_PENDING');
        assert.equal((await q(w, `SELECT count(*)::int n FROM financial_entries`))[0].n, 0);
        assert.ok((await q(w, `SELECT 1 FROM cases WHERE status='OPEN'`)).length, 'yönetici istisnası açıldı');
    }
    finally {
        await w.close();
    }
});
test('T35 yeniden başlatma: yeni süreç aynı veritabanından görevleri sürdürür', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL);
    try {
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        const before = w.wa.to(A).length;
        // Yeni bağlam = yeniden başlayan süreç (bellekte durum yok, yalnızca veritabanı)
        const { createPool } = await import('../src/core/db.js');
        const restarted = { ...w.ctx, db: createPool(w.ctx.config.databaseUrl) };
        try {
            w.clock.advanceHours(19);
            await settle(restarted);
        }
        finally {
            await restarted.db.end();
        }
        assert.ok(w.wa.to(A).length > before, 'hatırlatma yeni süreçte gönderildi');
        assert.equal((await job(w)).status, 'MATCHING');
    }
    finally {
        await w.close();
    }
});
