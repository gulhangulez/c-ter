import { many, one } from '../core/db.js';
import { randomToken, sha256 } from '../core/crypto.js';
import { DEFAULT_POLICY, policyFrom } from '../domain/policy.js';
export class CommandError extends Error {
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
export async function loadPolicy(c) {
    const s = await one(c, 'SELECT policy, policy_version, automation_enabled FROM organization_settings WHERE id=1');
    return { policy: policyFrom(s?.policy), version: s?.policy_version ?? 1, automationEnabled: s?.automation_enabled ?? true };
}
export { DEFAULT_POLICY };
// --- Denetim kaydı ---
export async function audit(c, ctx, a) {
    await c.query(`INSERT INTO audit_log (actor, command, job_id, entity_type, entity_id, old_state, new_state, job_version, evidence, detail, occurred_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, [a.actor, a.command, a.jobId ?? null, a.entityType ?? null, a.entityId ?? null, a.oldState ?? null, a.newState ?? null,
        a.jobVersion ?? null, a.evidence ?? null, JSON.stringify(a.detail ?? {}), ctx.clock.now()]);
}
// --- İş durumu (koşullu geçiş; serbest "statü değiştir" yok) ---
const TRANSITIONS = {
    NEW: ['INFO_PENDING', 'CANCELLED'],
    INFO_PENDING: ['MATCHING', 'DORMANT', 'CANCELLED'],
    DORMANT: ['INFO_PENDING', 'CANCELLED'],
    MATCHING: ['HANDOFF_PENDING', 'UNFULFILLED', 'INFO_PENDING', 'CANCELLED'],
    UNFULFILLED: ['MATCHING', 'CANCELLED'],
    HANDOFF_PENDING: ['NEGOTIATING', 'MATCHING', 'CANCELLED'],
    NEGOTIATING: ['CONFIRMED', 'MATCHING', 'CANCELLED'],
    CONFIRMED: ['IN_PROGRESS', 'COMPLETION_PENDING', 'NEGOTIATING', 'CANCELLED'],
    IN_PROGRESS: ['COMPLETION_PENDING', 'CANCELLED'],
    COMPLETION_PENDING: ['COMPLETED', 'CANCELLED'],
    COMPLETED: [],
    CANCELLED: [],
};
export const OPEN_STATUSES = ['NEW', 'INFO_PENDING', 'MATCHING', 'HANDOFF_PENDING', 'NEGOTIATING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETION_PENDING', 'DORMANT'];
export async function lockJob(c, jobId) {
    const j = await one(c, 'SELECT * FROM jobs WHERE id=$1 FOR UPDATE', [jobId]);
    if (!j)
        throw new CommandError('NOT_FOUND', 'İş bulunamadı');
    return j;
}
export async function transition(c, ctx, job, to, actor, evidence, opts = {}) {
    if (job.status === to && !opts.bumpVersion)
        return job;
    if (job.status !== to && !TRANSITIONS[job.status]?.includes(to)) {
        throw new CommandError('INVALID_TRANSITION', `${job.status} → ${to} geçişine izin yok`);
    }
    const r = await one(c, `UPDATE jobs SET status=$2, version = version + $3, updated_at=$4 WHERE id=$1 RETURNING *`, [job.id, to, opts.bumpVersion ? 1 : 0, ctx.clock.now()]);
    await audit(c, ctx, {
        actor, command: 'TRANSITION', jobId: job.id, entityType: 'job', entityId: job.id,
        oldState: job.status, newState: to, jobVersion: r.version, evidence,
    });
    await enqueueCalendarSync(c, ctx, job.id);
    return r;
}
// --- İstisnalar ---
export async function openCase(c, ctx, k) {
    const existing = await one(c, `SELECT id FROM cases WHERE status='OPEN' AND case_type=$1 AND job_id IS NOT DISTINCT FROM $2 AND party_id IS NOT DISTINCT FROM $3`, [k.type, k.jobId ?? null, k.partyId ?? null]);
    if (existing) {
        await c.query(`UPDATE cases SET summary=$2, detail = detail || $3::jsonb WHERE id=$1`, [existing.id, k.summary, JSON.stringify(k.detail ?? {})]);
        return existing.id;
    }
    const r = await one(c, `INSERT INTO cases (case_type, job_id, party_id, severity, summary, detail, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`, [k.type, k.jobId ?? null, k.partyId ?? null, k.severity ?? 'NORMAL', k.summary, JSON.stringify(k.detail ?? {}), ctx.clock.now()]);
    await audit(c, ctx, { actor: 'system', command: 'OPEN_CASE', jobId: k.jobId, entityType: 'case', entityId: r.id, newState: k.type, evidence: k.summary });
    if (k.severity === 'HIGH') {
        await enqueue(c, ctx, { action: 'email.notify', payload: { subject: `Müdahale gerekiyor: ${k.summary}`, text: k.summary } });
    }
    return r.id;
}
export async function resolveCases(c, ctx, where, resolution) {
    await c.query(`UPDATE cases SET status='RESOLVED', resolution=$3, resolved_at=$4 WHERE status='OPEN' AND job_id=$1 AND case_type=$2`, [where.jobId, where.type, resolution, ctx.clock.now()]);
}
// --- Kalıcı görevler ---
export async function scheduleTask(c, ctx, t) {
    const policyVersion = t.policyVersion ?? 1;
    const occ = t.occurrence ?? 1;
    // dedupe_key = job_id + entity_id + task_type + policy_version + business_version + occurrence (Bölüm 7.2)
    const key = [t.jobId ?? '-', t.entityId ?? '-', t.type, policyVersion, t.businessVersion ?? '-', occ].join(':');
    await c.query(`INSERT INTO tasks (task_type, job_id, entity_id, target_party_id, business_version, policy_version, occurrence, dedupe_key, payload, due_at, created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (dedupe_key) DO NOTHING`, [t.type, t.jobId ?? null, t.entityId ?? null, t.targetPartyId ?? null, t.businessVersion ?? null, policyVersion, occ, key,
        JSON.stringify(t.payload ?? {}), t.dueAt, ctx.clock.now()]);
}
export async function cancelTasks(c, filter, reason) {
    const conds = [`status='PENDING'`];
    const params = [reason];
    if (filter.jobId) {
        params.push(filter.jobId);
        conds.push(`job_id=$${params.length}`);
    }
    if (filter.entityId) {
        params.push(filter.entityId);
        conds.push(`entity_id=$${params.length}`);
    }
    if (filter.partyId) {
        params.push(filter.partyId);
        conds.push(`target_party_id=$${params.length}`);
    }
    if (filter.types) {
        params.push(filter.types);
        conds.push(`task_type = ANY($${params.length})`);
    }
    const r = await c.query(`UPDATE tasks SET status='CANCELLED', cancel_reason=$1 WHERE ${conds.join(' AND ')}`, params);
    return r.rowCount ?? 0;
}
// --- Outbox ---
export async function enqueue(c, ctx, o) {
    const now = ctx.clock.now();
    const r = await one(c, `INSERT INTO outbox (action, job_id, job_version, target_party_id, payload, dedupe_key, next_attempt_at, created_at, updated_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$8) ON CONFLICT (dedupe_key) DO NOTHING RETURNING id`, [o.action, o.jobId ?? null, o.jobVersion ?? null, o.targetPartyId ?? null, JSON.stringify(o.payload), o.dedupeKey ?? null, o.notBefore ?? now, now]);
    return r?.id ?? null;
}
export async function enqueueCalendarSync(c, ctx, jobId) {
    // Bekleyen bir senkron varsa yenisi gerekmez: gönderici işin GÜNCEL halini okur.
    const pending = await one(c, `SELECT 1 FROM outbox WHERE action='calendar.sync' AND job_id=$1 AND status='PENDING'`, [jobId]);
    if (!pending)
        await enqueue(c, ctx, { action: 'calendar.sync', jobId, payload: {} });
}
export async function sendWa(c, ctx, o) {
    return enqueue(c, ctx, {
        action: 'whatsapp.send', jobId: o.jobId ?? null, jobVersion: o.jobVersion ?? null, targetPartyId: o.partyId,
        dedupeKey: o.dedupeKey ?? null, payload: o,
    });
}
// --- Güvenli yanıt bağlantıları (Bölüm 15.1) ---
export async function createActionToken(c, ctx, t) {
    const token = randomToken(24);
    await c.query(`INSERT INTO action_tokens (token_hash, party_id, job_id, job_version, action, entity_id, nonce, expires_at, created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [sha256(token), t.partyId, t.jobId, t.jobVersion, t.action, t.entityId ?? null, randomToken(16),
        new Date(ctx.clock.now().getTime() + t.ttlHours * 3600_000), ctx.clock.now()]);
    return `${ctx.config.baseUrl}/actions/${token}`;
}
export async function findToken(c, token) {
    return one(c, 'SELECT * FROM action_tokens WHERE token_hash=$1', [sha256(token)]);
}
// --- Taraflar ---
export async function partyWa(c, partyId) {
    const r = await one(c, `SELECT value FROM contact_endpoints WHERE party_id=$1 AND kind='WHATSAPP' ORDER BY preferred DESC LIMIT 1`, [partyId]);
    return r?.value ?? null;
}
export async function partyName(c, partyId) {
    const r = await one(c, 'SELECT display_name, company_name FROM parties WHERE id=$1', [partyId]);
    return r?.display_name || r?.company_name || 'İsimsiz';
}
export async function hasConsent(c, partyId, purpose, jobId) {
    const r = await one(c, `SELECT granted FROM consents WHERE party_id=$1 AND purpose=$2 AND withdrawn_at IS NULL
       AND (job_id IS NULL OR job_id IS NOT DISTINCT FROM $3) ORDER BY recorded_at DESC LIMIT 1`, [partyId, purpose, jobId ?? null]);
    return !!r?.granted;
}
export async function messagingBlocked(c, partyId) {
    const r = await one(c, `SELECT granted FROM consents WHERE party_id=$1 AND purpose='OPERATIONAL_MESSAGES' AND channel IN ('WHATSAPP','ANY') AND withdrawn_at IS NULL
     ORDER BY recorded_at DESC LIMIT 1`, [partyId]);
    return r ? !r.granted : false;
}
export async function recordConsent(c, ctx, k) {
    const r = await one(c, `INSERT INTO consents (party_id, channel, purpose, job_id, granted, text_version, source, recorded_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, [k.partyId, k.channel ?? 'WHATSAPP', k.purpose, k.jobId ?? null, k.granted, k.textVersion ?? 'v1', k.source, ctx.clock.now()]);
    return r.id;
}
export async function jobsByIds(c, ids) {
    return many(c, 'SELECT * FROM jobs WHERE id = ANY($1)', [ids]);
}
export function newJobCode(year, seq) {
    return `CT-${year}-${String(seq).padStart(6, '0')}`;
}
