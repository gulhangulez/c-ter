// Bölüm 10: komisyon takip kaydı, tahakkuk, vade, append-only defter, doğrulanmış tahsilat.
import { many, one } from '../core/db.js';
import { addBusinessDays, addDays, atLocal, localDate } from '../core/time.js';
import { balanceOf, computeCommission, dueState, formatAmount, paymentState } from '../domain/money.js';
import { audit, cancelTasks, CommandError, createActionToken, loadPolicy, openCase, scheduleTask, sendWa, } from './core.js';
const FIN_TASKS = ['commission_due_soon', 'commission_due', 'commission_overdue', 'payment_report_check'];
function payerOf(agr, job, assignment) {
    if (agr.payer_party_type === 'INTERPRETER')
        return assignment.interpreter_id;
    if (agr.payer_party_type === 'CUSTOMER')
        return job.customer_id;
    return agr.payer_party_id ?? null;
}
/** Yönlendirme kabul edildiğinde finans takip kaydı (henüz hak ediş değil). */
export async function openCommissionAccount(c, ctx, job, assignment, agr) {
    const now = ctx.clock.now();
    const n = (await one(c, `SELECT count(*)::int AS n FROM commission_accounts WHERE job_id=$1`, [job.id])).n + 1;
    let status = 'RULE_PENDING';
    let estimate = null;
    if (agr) {
        status = 'ESTIMATED';
        const days = job.service_days?.length ?? 0;
        const r = computeCommission(agr, { verifiedDays: days });
        if (r.ok)
            estimate = r.amountMinor;
    }
    const acc = await one(c, `INSERT INTO commission_accounts (job_id, assignment_id, agreement_id, agreement_snapshot, payer_party_id, reference, accrual_status, currency, estimated_minor, due_timezone, created_at, updated_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$11) RETURNING *`, [job.id, assignment.id, agr?.id ?? null, agr ? JSON.stringify(agr) : null, agr ? payerOf(agr, job, assignment) : null,
        `${job.code}-K${n}`, status, agr?.currency ?? null, estimate, agr?.due_timezone ?? null, now]);
    await audit(c, ctx, { actor: 'system', command: 'OpenCommissionAccount', jobId: job.id, entityType: 'commission_account', entityId: acc.id, newState: status, jobVersion: job.version });
    if (agr?.accrual_event === 'REFERRAL_ACCEPTED')
        await accrueCommission(c, ctx, acc.id, 'REFERRAL_ACCEPTED');
    return acc;
}
export async function ledger(c, accountId) {
    return many(c, `SELECT * FROM financial_entries WHERE account_id=$1 ORDER BY created_at, id`, [accountId]);
}
export async function accountView(c, acc, todayLocal) {
    const entries = await ledger(c, acc.id);
    const b = balanceOf(entries);
    return {
        ...b,
        payment_state: acc.accrual_status === 'ACCRUED' || b.collected > 0 ? paymentState(b) : null,
        due_state: acc.accrual_status === 'ACCRUED' ? dueState(b.balance, acc.due_date, todayLocal) : null,
        entries,
    };
}
/** AccrueCommission — sözleşmedeki hak ediş olayı kanıtlandığında. Kural yoksa borç oluşmaz (T23). */
export async function accrueCommission(c, ctx, accountId, event) {
    const acc = await one(c, 'SELECT * FROM commission_accounts WHERE id=$1 FOR UPDATE', [accountId]);
    if (!acc || ['ACCRUED', 'VOIDED', 'DISPUTED'].includes(acc.accrual_status))
        return;
    const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [acc.job_id]);
    if (acc.accrual_status === 'RULE_PENDING' || !acc.agreement_snapshot) {
        await openCase(c, ctx, { type: 'COMMISSION_RULE_MISSING', jobId: job.id, severity: 'HIGH', summary: `${job.code}: hak ediş olayı gerçekleşti fakat komisyon kuralı yok; borç oluşturulmadı` });
        return;
    }
    const agr = acc.agreement_snapshot;
    if (agr.accrual_event !== event)
        return;
    const terms = await one(c, `SELECT * FROM booking_terms WHERE job_id=$1 ORDER BY terms_version DESC LIMIT 1`, [job.id]);
    const seg = await one(c, `SELECT * FROM service_segments WHERE job_id=$1 ORDER BY created_at DESC LIMIT 1`, [job.id]);
    const days = seg?.verified_days?.length ?? terms?.service_days?.length ?? job.service_days?.length ?? 0;
    const r = computeCommission(agr, { verifiedDays: days, dailyRateMinor: terms?.daily_rate_minor ?? null, rateCurrency: terms?.currency ?? null });
    if (!r.ok) {
        await openCase(c, ctx, { type: 'ACCRUAL_BLOCKED', jobId: job.id, summary: `${job.code}: komisyon hesaplanamadı — ${r.reason}` });
        return;
    }
    const now = ctx.clock.now();
    const tz = agr.due_timezone || 'Europe/Istanbul';
    const today = localDate(now, tz);
    const due = agr.due_day_type === 'BUSINESS' ? addBusinessDays(today, agr.due_offset_days) : addDays(today, agr.due_offset_days);
    await c.query(`INSERT INTO financial_entries (account_id, kind, amount_minor, currency, reason, source_ref, actor, created_at)
     VALUES ($1,'ACCRUAL',$2,$3,$4,$5,'system',$6)`, [acc.id, r.amountMinor, r.currency, `${r.explanation} (anlaşma v${agr.agreement_version}, olay ${event})`, `event:${event}`, now]);
    await c.query(`UPDATE commission_accounts SET accrual_status='ACCRUED', currency=$2, due_date=$3, updated_at=$4 WHERE id=$1`, [acc.id, r.currency, due, now]);
    await audit(c, ctx, { actor: 'system', command: 'AccrueCommission', jobId: job.id, entityType: 'commission_account', entityId: acc.id, oldState: acc.accrual_status, newState: 'ACCRUED', detail: { amount: r.amountMinor, currency: r.currency, due } });
    const { version } = await loadPolicy(c);
    const sched = (type, at) => scheduleTask(c, ctx, { type, jobId: job.id, entityId: acc.id, targetPartyId: acc.payer_party_id, policyVersion: version, dueAt: at });
    await sched('commission_due_soon', atLocal(addDays(due, -1), 10, tz));
    await sched('commission_due', atLocal(due, 10, tz));
    await sched('commission_overdue', atLocal(addDays(due, 1), 10, tz));
    if (acc.payer_party_id) {
        const link = await createActionToken(c, ctx, { partyId: acc.payer_party_id, jobId: job.id, jobVersion: job.version, action: 'statement', entityId: acc.id, ttlHours: 24 * 60 });
        await sendWa(c, ctx, { partyId: acc.payer_party_id, jobId: job.id, key: 'commission_notice', proactive: true, vars: { job_code: job.code, secure_statement_link: link } });
    }
}
export async function voidOrFlagOnCancel(c, ctx, job) {
    const accs = await many(c, `SELECT * FROM commission_accounts WHERE job_id=$1`, [job.id]);
    for (const a of accs) {
        if (a.accrual_status === 'ACCRUED') {
            // Tahakkuk etmiş komisyon iptal şartlarına göre ele alınır; geçmiş silinmez.
            await openCase(c, ctx, { type: 'CANCELLED_WITH_ACCRUAL', jobId: job.id, summary: `${job.code}: iptal edilen işte tahakkuk etmiş komisyon var; iptal şartına göre düzeltme gerekebilir` });
        }
        else if (a.accrual_status !== 'VOIDED') {
            await c.query(`UPDATE commission_accounts SET accrual_status='VOIDED', accrual_outcome_note='İş iptal edildi; hak ediş olayı gerçekleşmedi', updated_at=$2 WHERE id=$1`, [a.id, ctx.clock.now()]);
        }
    }
    await cancelTasks(c, { jobId: job.id, types: FIN_TASKS }, 'İş iptal edildi');
}
/** Finans yetkisiyle gerekçeli düzeltme. Defter append-only; ters kayıtla düzeltilir. */
export async function adjust(c, ctx, accountId, kind, amountMinor, reason, actor) {
    if (!reason.trim())
        throw new CommandError('REASON_REQUIRED', 'Gerekçe zorunlu');
    if (!(amountMinor > 0))
        throw new CommandError('AMOUNT', 'Tutar pozitif olmalı');
    const acc = await one(c, 'SELECT * FROM commission_accounts WHERE id=$1 FOR UPDATE', [accountId]);
    if (!acc?.currency)
        throw new CommandError('NO_CURRENCY', 'Hesabın para birimi yok (kural bekleniyor)');
    await c.query(`INSERT INTO financial_entries (account_id, kind, amount_minor, currency, reason, actor, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7)`, [acc.id, kind, amountMinor, acc.currency, reason, actor, ctx.clock.now()]);
    await audit(c, ctx, { actor, command: 'FinancialAdjustment', jobId: acc.job_id, entityType: 'commission_account', entityId: acc.id, detail: { kind, amountMinor, reason } });
    await afterBalanceChange(c, ctx, acc);
}
async function afterBalanceChange(c, ctx, acc) {
    const b = balanceOf(await ledger(c, acc.id));
    if (b.balance <= 0)
        await cancelTasks(c, { entityId: acc.id, types: FIN_TASKS }, b.balance === 0 ? 'Bakiye kapandı' : 'Fazla ödeme');
    if (b.balance < 0) {
        const job = await one(c, 'SELECT code FROM jobs WHERE id=$1', [acc.job_id]);
        await openCase(c, ctx, { type: 'OVERPAYMENT', jobId: acc.job_id, summary: `${job.code}: ${formatAmount(-b.balance, acc.currency)} fazla ödeme / iade edilecek tutar` });
    }
    return b;
}
/** VerifyAndAllocatePayment — imzası doğrulanmış sağlayıcı olayı + sunucu taraflı sorgu. */
export async function handlePaymentEvent(c, ctx, provider, ev) {
    const now = ctx.clock.now();
    if (ev.type === 'payment.refunded') {
        const p = await one(c, `SELECT * FROM payments WHERE provider=$1 AND external_id=$2 FOR UPDATE`, [provider, ev.transactionId]);
        if (!p || p.verification !== 'VERIFIED')
            return;
        const allocs = await many(c, `SELECT * FROM payment_allocations WHERE payment_id=$1`, [p.id]);
        let left = Math.min(ev.amountMinor, p.amount_minor - p.refunded_minor);
        if (left <= 0)
            return;
        await c.query(`UPDATE payments SET refunded_minor = refunded_minor + $2 WHERE id=$1`, [p.id, left]);
        for (const a of allocs) {
            if (left <= 0)
                break;
            const amt = Math.min(left, a.amount_minor);
            left -= amt;
            await c.query(`INSERT INTO financial_entries (account_id, kind, amount_minor, currency, reason, source_ref, actor, created_at) VALUES ($1,'REFUND',$2,$3,'Sağlayıcı iade/ters ibraz bildirimi',$4,'system:payments',$5)`, [a.account_id, amt, a.currency, `${provider}:${ev.eventId}`, now]);
            const acc = await one(c, 'SELECT * FROM commission_accounts WHERE id=$1', [a.account_id]);
            const job = await one(c, 'SELECT code FROM jobs WHERE id=$1', [acc.job_id]);
            await openCase(c, ctx, { type: 'PAYMENT_MISMATCH', jobId: acc.job_id, summary: `${job.code}: ${formatAmount(amt, a.currency)} ödeme iade edildi; bakiye yeniden açıldı` });
        }
        return;
    }
    if (ev.type !== 'payment.succeeded')
        return;
    // Webhook gövdesine körü körüne güvenilmez: sağlayıcıdan sunucu taraflı sorgu.
    const looked = ctx.payments ? await ctx.payments.lookup(ev.transactionId) : null;
    const acc = await one(c, `SELECT * FROM commission_accounts WHERE reference=$1 FOR UPDATE`, [ev.reference]);
    let rejection = null;
    if (!looked)
        rejection = 'Sağlayıcıda işlem bulunamadı';
    else if (looked.status !== 'SUCCESS')
        rejection = `Sağlayıcı durumu nihai değil: ${looked.status}`;
    else if (looked.amountMinor !== ev.amountMinor || looked.currency !== ev.currency || looked.reference !== ev.reference)
        rejection = 'Bildirim ile sağlayıcı kaydı uyuşmuyor';
    else if (!acc)
        rejection = `Referansa ait komisyon hesabı yok: ${ev.reference}`;
    else if (acc.currency !== ev.currency)
        rejection = `Para birimi uyuşmuyor (${ev.currency} ≠ ${acc.currency}); döviz işlemi yapılmaz`;
    const p = await one(c, `INSERT INTO payments (provider, external_id, reference, amount_minor, currency, provider_status, verification, rejection_reason, evidence, received_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT (provider, external_id) DO NOTHING RETURNING *`, [provider, ev.transactionId, ev.reference, ev.amountMinor, ev.currency, ev.status, rejection ? 'REJECTED' : 'VERIFIED', rejection,
        JSON.stringify({ event_id: ev.eventId, lookup: looked }), now]);
    if (!p)
        return; // T27: aynı işlem ikinci kez yazılmaz
    if (rejection) {
        if (acc)
            await c.query(`UPDATE commission_accounts SET payment_notice='REJECTED', updated_at=$2 WHERE id=$1`, [acc.id, now]);
        await openCase(c, ctx, { type: 'PAYMENT_MISMATCH', jobId: acc?.job_id ?? null, severity: 'HIGH', summary: `Ödeme otomatik işlenmedi: ${rejection}`, detail: { payment_id: p.id } });
        return; // T28
    }
    const b0 = balanceOf(await ledger(c, acc.id));
    await c.query(`INSERT INTO payment_allocations (payment_id, account_id, amount_minor, currency, created_at) VALUES ($1,$2,$3,$4,$5)`, [p.id, acc.id, ev.amountMinor, ev.currency, now]);
    await c.query(`INSERT INTO financial_entries (account_id, kind, amount_minor, currency, reason, source_ref, actor, created_at) VALUES ($1,'COLLECTION',$2,$3,'Doğrulanmış ödeme',$4,'system:payments',$5)`, [acc.id, ev.amountMinor, ev.currency, `${provider}:${ev.transactionId}`, now]);
    await c.query(`UPDATE commission_accounts SET payment_notice='VERIFIED', updated_at=$2 WHERE id=$1`, [acc.id, now]);
    await audit(c, ctx, { actor: `provider:${provider}`, command: 'VerifyAndAllocatePayment', jobId: acc.job_id, entityType: 'commission_account', entityId: acc.id, detail: { amount: ev.amountMinor, before: b0.balance } });
    const b = await afterBalanceChange(c, ctx, acc);
    const job = await one(c, 'SELECT code FROM jobs WHERE id=$1', [acc.job_id]);
    if (acc.payer_party_id) {
        await sendWa(c, ctx, {
            partyId: acc.payer_party_id, jobId: acc.job_id, key: 'payment_received',
            vars: { job_code: job.code, remaining_amount: formatAmount(Math.max(0, b.balance), acc.currency) },
        });
    }
}
/** "Ödedim" mesajı: REPORTED_UNVERIFIED; tahsilat kapanmaz (T26). */
export async function reportPayment(c, ctx, partyId, source) {
    const accs = await many(c, `SELECT * FROM commission_accounts WHERE payer_party_id=$1 AND accrual_status='ACCRUED'`, [partyId]);
    let any = false;
    const { policy, version } = await loadPolicy(c);
    for (const a of accs) {
        const b = balanceOf(await ledger(c, a.id));
        if (b.balance <= 0)
            continue;
        any = true;
        await c.query(`UPDATE commission_accounts SET payment_notice='REPORTED_UNVERIFIED', updated_at=$2 WHERE id=$1`, [a.id, ctx.clock.now()]);
        await audit(c, ctx, { actor: `party:${partyId}`, command: 'RecordPaymentNotification', jobId: a.job_id, entityType: 'commission_account', entityId: a.id, evidence: source });
        await scheduleTask(c, ctx, {
            type: 'payment_report_check', jobId: a.job_id, entityId: a.id, targetPartyId: partyId, policyVersion: version,
            occurrence: Math.floor(ctx.clock.now().getTime() / 1000), dueAt: new Date(ctx.clock.now().getTime() + policy.paymentReportGraceDays * 86400_000),
        });
        const job = await one(c, 'SELECT code FROM jobs WHERE id=$1', [a.job_id]);
        await sendWa(c, ctx, { partyId, jobId: a.job_id, key: 'payment_report_ack', vars: { job_code: job.code } });
    }
    return any;
}
export async function statementData(c, accountId, todayLocal) {
    const acc = await one(c, `SELECT a.*, j.code AS job_code FROM commission_accounts a JOIN jobs j ON j.id=a.job_id WHERE a.id=$1`, [accountId]);
    if (!acc)
        return null;
    return { acc, view: await accountView(c, acc, todayLocal) };
}
