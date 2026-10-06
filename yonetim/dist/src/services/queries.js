// Panel ve API için okuma sorguları. "Bekliyor" tek başına yazılmaz: kimden, neyi, ne zamana kadar.
import { many, one } from '../core/db.js';
import { localDate, formatRangeTr } from '../core/time.js';
import { balanceOf, dueState, paymentState, formatAmount } from '../domain/money.js';
import { TASK_LABELS } from './tasks.js';
import { partyName } from './core.js';
import { FIELD_QUESTIONS } from '../domain/extract.js';
export async function waitingOn(db, job, now) {
    const nextTask = await one(db, `SELECT * FROM tasks WHERE job_id=$1 AND status='PENDING' ORDER BY due_at LIMIT 1`, [job.id]);
    switch (job.status) {
        case 'INFO_PENDING': {
            const what = job.pending_question === 'SUMMARY' ? 'talep özetinin onayı' : job.pending_question === 'SHARE' ? 'iletişim paylaşım izni' : `eksik bilgi${job.pending_field ? `: ${FIELD_QUESTIONS[job.pending_field] ?? job.pending_field}` : ''}`;
            return { from: 'Müşteri', what, until: nextTask?.due_at ?? null };
        }
        case 'MATCHING': {
            const q = await one(db, `SELECT q.*, p.display_name FROM interpreter_inquiries q JOIN parties p ON p.id=q.interpreter_id
        WHERE q.job_id=$1 AND q.job_version=$2 AND q.status IN ('SENT','AVAILABLE') ORDER BY q.sent_at LIMIT 1`, [job.id, job.version]);
            if (q)
                return { from: q.display_name, what: q.status === 'SENT' ? 'müsaitlik yanıtı' : 'yönlendirme kabulü', until: q.deadline_at };
            return { from: 'Sistem', what: 'sıradaki aday', until: null };
        }
        case 'HANDOFF_PENDING': return { from: 'WhatsApp', what: 'tercümana iletişim devri mesajının teslimi', until: null };
        case 'NEGOTIATING': {
            const terms = await one(db, `SELECT 1 FROM booking_terms WHERE job_id=$1`, [job.id]);
            return { from: 'Müşteri ve tercüman', what: terms ? 'iş şartlarının müşteri onayı' : 'görüşme / kesinleşme yanıtı', until: nextTask?.due_at ?? null };
        }
        case 'CONFIRMED': {
            const today = localDate(now, 'Europe/Istanbul');
            if (job.start_date && job.start_date <= today)
                return { from: 'Tercüman', what: 'planlanan başlangıç geçti, doğrulama bekliyor', until: nextTask?.due_at ?? null };
            return { from: '—', what: `hizmet başlangıcı (${formatRangeTr(job.start_date, job.start_date)})`, until: null };
        }
        case 'IN_PROGRESS': return { from: '—', what: `hizmetin bitişi (${formatRangeTr(job.end_date, job.end_date)})`, until: null };
        case 'COMPLETION_PENDING': {
            const rep = await one(db, `SELECT 1 FROM confirmations WHERE job_id=$1 AND subject='COMPLETION'`, [job.id]);
            return { from: rep ? 'Müşteri' : 'Tercüman', what: rep ? 'gerçekleşen günlerin onayı' : 'gerçekleşen gün bildirimi', until: nextTask?.due_at ?? null };
        }
        case 'COMPLETED': {
            const acc = await one(db, `SELECT * FROM commission_accounts WHERE job_id=$1 AND accrual_status='ACCRUED' LIMIT 1`, [job.id]);
            if (acc) {
                const b = balanceOf(await many(db, `SELECT kind, amount_minor FROM financial_entries WHERE account_id=$1`, [acc.id]));
                if (b.balance > 0)
                    return { from: acc.payer_party_id ? await partyName(db, acc.payer_party_id) : 'Borçlu', what: `komisyon ödemesi (${formatAmount(b.balance, acc.currency)})`, until: acc.due_date };
            }
            return null;
        }
    }
    return null;
}
export async function nextAction(db, jobId) {
    const t = await one(db, `SELECT task_type, due_at FROM tasks WHERE job_id=$1 AND status='PENDING' ORDER BY due_at LIMIT 1`, [jobId]);
    return t ? { label: TASK_LABELS[t.task_type] ?? t.task_type, at: t.due_at } : null;
}
export async function financeLabel(db, jobId, today) {
    const accs = await many(db, `SELECT * FROM commission_accounts WHERE job_id=$1`, [jobId]);
    if (!accs.length)
        return '—';
    const parts = [];
    for (const a of accs) {
        if (a.accrual_status !== 'ACCRUED') {
            parts.push(a.accrual_status);
            continue;
        }
        const b = balanceOf(await many(db, `SELECT kind, amount_minor FROM financial_entries WHERE account_id=$1`, [a.id]));
        const ds = dueState(b.balance, a.due_date, today);
        parts.push([paymentState(b), ds].filter(Boolean).join(' / '));
    }
    return parts.join(', ');
}
export async function jobRows(db, now, where = `j.status <> 'CANCELLED'`, params = [], limit = 200) {
    const rows = await many(db, `SELECT j.*, c.display_name AS customer, ip.display_name AS interpreter,
       (SELECT max(occurred_at) FROM audit_log a WHERE a.job_id=j.id) AS last_event_at,
       (SELECT command FROM audit_log a WHERE a.job_id=j.id ORDER BY occurred_at DESC, id DESC LIMIT 1) AS last_event
     FROM jobs j JOIN parties c ON c.id=j.customer_id
     LEFT JOIN assignments a ON a.id=j.current_assignment_id LEFT JOIN parties ip ON ip.id=a.interpreter_id
     WHERE ${where} ORDER BY j.updated_at DESC LIMIT ${limit}`, params);
    const today = localDate(now, 'Europe/Istanbul');
    for (const r of rows) {
        r.waiting = await waitingOn(db, r, now);
        r.next = await nextAction(db, r.id);
        r.finance = await financeLabel(db, r.id, today);
    }
    return rows;
}
export async function dashboard(db, now) {
    const cases = await many(db, `SELECT k.*, j.code FROM cases k LEFT JOIN jobs j ON j.id=k.job_id WHERE k.status='OPEN'
    ORDER BY CASE k.severity WHEN 'HIGH' THEN 0 WHEN 'NORMAL' THEN 1 ELSE 2 END, k.created_at`);
    const following = await jobRows(db, now, `j.status IN ('INFO_PENDING','MATCHING','HANDOFF_PENDING','NEGOTIATING','COMPLETION_PENDING')`);
    const upcoming = await jobRows(db, now, `j.status IN ('CONFIRMED','IN_PROGRESS')`);
    const finance = await financeTotals(db, now);
    const health = await integrationHealth(db);
    return { cases, following, upcoming, finance, health };
}
export async function financeTotals(db, now) {
    const today = localDate(now, 'Europe/Istanbul');
    const accs = await many(db, `SELECT a.*, j.code FROM commission_accounts a JOIN jobs j ON j.id=a.job_id`);
    const by = {};
    let rulePending = 0;
    let estimated = 0;
    for (const a of accs) {
        if (a.accrual_status === 'RULE_PENDING') {
            rulePending++;
            continue;
        }
        if (a.accrual_status !== 'ACCRUED') {
            if (a.accrual_status === 'ESTIMATED')
                estimated++;
            continue;
        }
        const b = balanceOf(await many(db, `SELECT kind, amount_minor FROM financial_entries WHERE account_id=$1`, [a.id]));
        const t = (by[a.currency] ??= { accrued: 0, collected: 0, open: 0, overdue: 0 });
        t.accrued += b.receivable;
        t.collected += b.collected;
        t.open += Math.max(0, b.balance);
        if (dueState(b.balance, a.due_date, today) === 'OVERDUE')
            t.overdue += b.balance;
    }
    return { byCurrency: by, rulePending, estimated };
}
export async function integrationHealth(db) {
    const conns = await many(db, `SELECT * FROM integration_connections ORDER BY name`);
    const q = await one(db, `SELECT
      (SELECT count(*) FROM outbox WHERE status='PENDING')::int AS outbox_pending,
      (SELECT count(*) FROM outbox WHERE status='FAILED')::int AS outbox_failed,
      (SELECT count(*) FROM outbox WHERE status='UNKNOWN')::int AS outbox_unknown,
      (SELECT count(*) FROM webhook_inbox WHERE status='RECEIVED')::int AS inbox_pending,
      (SELECT count(*) FROM webhook_inbox WHERE status='FAILED')::int AS inbox_failed,
      (SELECT count(*) FROM tasks WHERE status='PENDING' AND due_at < now() - interval '10 minutes')::int AS tasks_late,
      (SELECT count(*) FROM tasks WHERE status='FAILED')::int AS tasks_failed`);
    return { conns, queue: q };
}
export async function jobDetail(db, id, now) {
    const job = await one(db, `SELECT j.*, c.display_name AS customer FROM jobs j JOIN parties c ON c.id=j.customer_id WHERE j.id=$1`, [id]);
    if (!job)
        return null;
    const [inquiries, assignments, confirmations, messages, tasks, cases, timeline, accounts, terms, calendar, sharing] = await Promise.all([
        many(db, `SELECT q.*, p.display_name FROM interpreter_inquiries q JOIN parties p ON p.id=q.interpreter_id WHERE q.job_id=$1 ORDER BY q.created_at`, [id]),
        many(db, `SELECT a.*, p.display_name FROM assignments a JOIN parties p ON p.id=a.interpreter_id WHERE a.job_id=$1 ORDER BY a.created_at`, [id]),
        many(db, `SELECT cf.*, p.display_name FROM confirmations cf JOIN parties p ON p.id=cf.party_id WHERE cf.job_id=$1 ORDER BY cf.created_at`, [id]),
        many(db, `SELECT m.*, p.display_name FROM messages m LEFT JOIN parties p ON p.id=m.party_id WHERE m.job_id=$1 ORDER BY m.created_at`, [id]),
        many(db, `SELECT * FROM tasks WHERE job_id=$1 AND status IN ('PENDING','RUNNING','FAILED') ORDER BY due_at`, [id]),
        many(db, `SELECT * FROM cases WHERE job_id=$1 ORDER BY status, created_at DESC`, [id]),
        many(db, `SELECT * FROM audit_log WHERE job_id=$1 ORDER BY occurred_at, id`, [id]),
        many(db, `SELECT * FROM commission_accounts WHERE job_id=$1 ORDER BY created_at`, [id]),
        many(db, `SELECT * FROM booking_terms WHERE job_id=$1 ORDER BY terms_version`, [id]),
        many(db, `SELECT * FROM calendar_links WHERE job_id=$1`, [id]),
        many(db, `SELECT s.*, p.display_name FROM sharing_records s JOIN parties p ON p.id=s.recipient_id WHERE s.job_id=$1 ORDER BY s.created_at`, [id]),
    ]);
    const today = localDate(now, 'Europe/Istanbul');
    for (const a of accounts) {
        a.entries = await many(db, `SELECT * FROM financial_entries WHERE account_id=$1 ORDER BY created_at, id`, [a.id]);
        const b = balanceOf(a.entries);
        Object.assign(a, b, { payment_state: a.accrual_status === 'ACCRUED' || b.collected > 0 ? paymentState(b) : null, due_state: a.accrual_status === 'ACCRUED' ? dueState(b.balance, a.due_date, today) : null });
    }
    const assigned = assignments.find((a) => a.active);
    return { job, inquiries, assignments, assigned, confirmations, messages, tasks, cases, timeline, accounts, terms, calendar, sharing, waiting: await waitingOn(db, job, now) };
}
