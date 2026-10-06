// Bölüm 16.1 — uçtan uca ana kabul testi. Yönetici hiçbir adımda statü değiştirmez, takvim girmez, "tahsil edildi" işaretlemez.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TEMPLATES } from '../src/domain/templates.js';
import { act, addAgreement, addInterpreter, advance, inbound, job, lastLink, payWebhook, press, q, world } from './helpers.js';
const ALL_TEMPLATES = Object.fromEntries(Object.keys(TEMPLATES).map((k) => [k, `ct_${k}_v1`]));
const CUSTOMER = '905321112233';
const A = '8613800000001';
const B = '8613800000002';
test('Ana kabul senaryosu: talep → zaman aşımı → ikinci aday → devir → kesinleşme → tamamlanma → komisyon → doğrulanmış ödeme', async () => {
    const w = await world('2026-10-06T07:00:00Z', ALL_TEMPLATES);
    try {
        const a = await addInterpreter(w, { name: 'Tercüman A', whatsapp: A, priority: 1 });
        const b = await addInterpreter(w, { name: 'Tercüman B', whatsapp: B, priority: 2 });
        await addAgreement(w, a);
        await addAgreement(w, b);
        await inbound(w, CUSTOMER, "12–14 Ekim 2026 Mersin'de makine kurulumu için Çince tercüman lazım.");
        let j = await job(w);
        assert.equal(j.status, 'INFO_PENDING');
        assert.equal(j.city, 'Mersin');
        assert.equal(j.start_date, '2026-10-12');
        assert.equal(j.end_date, '2026-10-14');
        assert.equal(j.service_type, 'MACHINE_INSTALLATION');
        assert.match(j.code, /^CT-2026-\d{6}$/);
        // Yalnızca eksik alan sorulur
        assert.match(w.wa.last(CUSTOMER).text, /adınız/);
        await inbound(w, CUSTOMER, 'Ahmet Yılmaz');
        assert.match(w.wa.last(CUSTOMER).text, /teknik konu/);
        await inbound(w, CUSTOMER, 'CNC torna tezgâhı kurulumu');
        assert.match(w.wa.last(CUSTOMER).text, /Mersin, 12–14 Ekim 2026, 3 gün/);
        await press(w, CUSTOMER, 'Evet, doğru');
        await press(w, CUSTOMER, 'Evet, izin veriyorum');
        j = await job(w);
        assert.equal(j.status, 'MATCHING');
        // İlk aday A: müşteri telefonu olmadan anonim özet
        const askA = w.wa.last(A);
        assert.match(askA.text, /müsait misiniz/);
        assert.ok(!askA.text.includes(CUSTOMER) && !askA.text.includes('Ahmet'));
        assert.equal(w.wa.to(B).length, 0);
        // A yanıt vermiyor: hatırlatmalar, zaman aşımı, sıradaki aday
        for (let i = 0; i < 12; i++)
            await advance(w, 6);
        const [qa] = await q(w, `SELECT status FROM interpreter_inquiries WHERE interpreter_id=$1`, [a]);
        assert.equal(qa.status, 'EXPIRED');
        const reminders = w.wa.to(A).filter((m) => m.text.includes('müsaitlik yanıtınızı bekliyoruz'));
        assert.equal(reminders.length, 2, 'en fazla iki hatırlatma');
        assert.ok(w.wa.to(B).some((m) => /müsait misiniz/.test(m.text)), 'sıradaki aday B soruldu');
        await press(w, B, 'Müsaitim');
        const acceptToken = lastLink(w, B);
        const r = await act(w, acceptToken, { decision: 'accept' });
        assert.ok(r.ok, r.message);
        j = await job(w);
        assert.equal(j.status, 'NEGOTIATING', 'teslim olayı sonrası devir tamamlandı');
        assert.match(w.wa.last(CUSTOMER).text, /Tercüman B yönlendirmeyi kabul etti/);
        const [share] = await q(w, `SELECT result, data_scope FROM sharing_records WHERE job_id=$1`, [j.id]);
        assert.equal(share.result, 'SHARED');
        // Müşteri telefonunu tercüman yalnızca kimlik doğrulamalı sayfada görür
        const contactToken = lastLink(w, B);
        const bad = await act(w, contactToken, { last4: '9999' });
        assert.equal(bad.ok, false);
        const good = await act(w, contactToken, { last4: B.slice(-4) });
        assert.equal(good.data?.phone, '+' + CUSTOMER);
        let ev = [...w.cal.events.values()][0];
        assert.match(ev.summary, /^\[GÖRÜŞME BEKLENİYOR\] CT-2026-\d+ \| Mersin \| Makine kurulumu/);
        assert.ok(!ev.description.includes(CUSTOMER));
        // Görüşme ve kesinleşme takibi
        await advance(w, 3);
        await press(w, B, 'Görüştük');
        await press(w, CUSTOMER, 'Görüştük');
        await advance(w, 20);
        await press(w, B, 'Kesinleşti');
        const termsToken = lastLink(w, B);
        const pt = await act(w, termsToken, { daily_rate: '250', currency: 'USD', days: ['2026-10-12', '2026-10-13', '2026-10-14'], expenses: 'Ulaşım ve konaklama ayrıca; matraha dahil değil (60 USD)' });
        assert.ok(pt.ok, pt.message);
        await press(w, CUSTOMER, 'Kesinleşti');
        const confirmToken = lastLink(w, CUSTOMER);
        const ct = await act(w, confirmToken, { decision: 'yes' });
        assert.ok(ct.ok, ct.message);
        j = await job(w);
        assert.equal(j.status, 'CONFIRMED');
        ev = [...w.cal.events.values()][0];
        assert.equal(ev.status, 'confirmed');
        assert.match(ev.summary, /^\[KESİNLEŞTİ\]/);
        assert.equal(ev.end.date, '2026-10-15', 'tüm gün etkinlik bitişi hariç');
        const [res] = await q(w, `SELECT status FROM reservations WHERE interpreter_id=$1 AND status<>'RELEASED'`, [b]);
        assert.equal(res.status, 'BOOKED');
        // Başlangıç ve tamamlanma
        w.clock.set('2026-10-12T09:30:00Z');
        await advance(w, 0);
        await press(w, B, 'Evet, başladı');
        assert.equal((await job(w)).status, 'IN_PROGRESS');
        w.clock.set('2026-10-15T06:30:00Z');
        await advance(w, 0);
        assert.equal((await job(w)).status, 'COMPLETION_PENDING');
        const rep = await act(w, lastLink(w, B), { happened: 'yes', days: ['2026-10-12', '2026-10-13', '2026-10-14'], note: 'Kurulum tamamlandı' });
        assert.ok(rep.ok, rep.message);
        const cc = await act(w, lastLink(w, CUSTOMER), { decision: 'yes' });
        assert.ok(cc.ok, cc.message);
        j = await job(w);
        assert.equal(j.status, 'COMPLETED');
        // Komisyon: %10 × 750 USD = 75 USD (60 USD masraf hariç)
        const [acc] = await q(w, `SELECT * FROM commission_accounts WHERE job_id=$1`, [j.id]);
        assert.equal(acc.accrual_status, 'ACCRUED');
        assert.equal(acc.payer_party_id, b);
        const [accr] = await q(w, `SELECT amount_minor, currency FROM financial_entries WHERE account_id=$1 AND kind='ACCRUAL'`, [acc.id]);
        assert.equal(accr.amount_minor, 7500);
        assert.match(w.wa.last(B).text, /komisyon hesap özetiniz hazır/);
        // Kısmi ödeme 30 USD → 45 USD bakiye; sonra 45 USD → kapanış
        await payWebhook(w, { transactionId: 'tx-1', reference: acc.reference, amountMinor: 3000, currency: 'USD' });
        let [bal] = await q(w, `SELECT sum(CASE WHEN kind IN ('ACCRUAL','ADJUSTMENT_INCREASE') THEN amount_minor WHEN kind IN ('COLLECTION','ADJUSTMENT_DECREASE','WAIVER','CANCELLATION') THEN -amount_minor ELSE amount_minor END)::int AS b FROM financial_entries WHERE account_id=$1`, [acc.id]);
        assert.equal(bal.b, 4500);
        assert.match(w.wa.last(B).text, /Güncel bakiye: 45.00 USD/);
        await payWebhook(w, { transactionId: 'tx-2', reference: acc.reference, amountMinor: 4500, currency: 'USD' });
        [bal] = await q(w, `SELECT sum(CASE WHEN kind='ACCRUAL' THEN amount_minor ELSE -amount_minor END)::int AS b FROM financial_entries WHERE account_id=$1`, [acc.id]);
        assert.equal(bal.b, 0);
        const pendingFin = await q(w, `SELECT task_type FROM tasks WHERE entity_id=$1 AND status='PENDING'`, [acc.id]);
        assert.deepEqual(pendingFin, [], 'ödeme sonrası finans hatırlatmaları iptal');
        // Tek takvim kaydı, iki doğrulanmış ödeme, hiç yönetici istisnası yok
        assert.equal(w.cal.inserts, 1);
        assert.equal((await q(w, `SELECT count(*)::int AS n FROM payments WHERE verification='VERIFIED'`))[0].n, 2);
        const cases = await q(w, `SELECT case_type, summary FROM cases WHERE status='OPEN'`);
        assert.deepEqual(cases, []);
        const adminActions = await q(w, `SELECT command FROM audit_log WHERE actor LIKE 'user:%' OR actor='admin'`);
        assert.deepEqual(adminActions, []);
    }
    finally {
        await w.close();
    }
});
