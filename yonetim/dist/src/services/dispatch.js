// Outbox gönderici: dış eylemler ayrı işçide yürür. Gönderim anında güncel durum yeniden kontrol edilir (Bölüm 7.1, 8.2).
import { many, one, tx } from '../core/db.js';
import { clampToWindow } from '../core/time.js';
import { ProviderError } from '../adapters/errors.js';
import { FakeWhatsApp } from '../adapters/whatsapp.js';
import { eventIdFor } from '../adapters/calendar.js';
import { calendarDecision } from '../domain/calendar.js';
import { render, TEMPLATES } from '../domain/templates.js';
import { hasConsent, loadPolicy, messagingBlocked, openCase, partyName, partyWa } from './core.js';
const MAX_ATTEMPTS = 6;
function backoff(attempt) {
    // Artan bekleme + rastgele gecikme (429 / geçici hatalar)
    return Math.min(3600, 30 * 2 ** (attempt - 1)) * 1000 + Math.floor(Math.random() * 5000);
}
export async function markIntegration(ctx, name, mode, ok, err) {
    await ctx.db.query(`INSERT INTO integration_connections (name, mode, healthy, last_success_at, last_error, last_error_at)
     VALUES ($1,$2,$3,CASE WHEN $3 THEN $5::timestamptz END,CASE WHEN NOT $3 THEN $4 END,CASE WHEN NOT $3 THEN $5::timestamptz END)
     ON CONFLICT (name) DO UPDATE SET mode=EXCLUDED.mode, healthy=EXCLUDED.healthy,
       last_success_at = CASE WHEN $3 THEN $5::timestamptz ELSE integration_connections.last_success_at END,
       last_error = CASE WHEN NOT $3 THEN $4 ELSE integration_connections.last_error END,
       last_error_at = CASE WHEN NOT $3 THEN $5::timestamptz ELSE integration_connections.last_error_at END`, [name, mode, ok, err ?? null, ctx.clock.now()]);
}
export async function dispatchOutbox(ctx, limit = 100) {
    // Çökme sonrası RUNNING'de kalan kayıtlar: sonucu belirsiz; kör tekrar yok (T38).
    await ctx.db.query(`UPDATE outbox SET status='UNKNOWN', last_error='İşçi gönderim sırasında durdu; sonuç belirsiz' WHERE status='RUNNING' AND updated_at < $1`, [new Date(ctx.clock.now().getTime() - 10 * 60_000)]);
    let n = 0;
    for (; n < limit; n++) {
        const row = await tx(ctx.db, async (c) => {
            const r = await one(c, `SELECT * FROM outbox WHERE status='PENDING' AND next_attempt_at <= $1 ORDER BY next_attempt_at, created_at LIMIT 1 FOR UPDATE SKIP LOCKED`, [ctx.clock.now()]);
            if (!r)
                return null;
            await c.query(`UPDATE outbox SET status='RUNNING', attempts=attempts+1, updated_at=$2 WHERE id=$1`, [r.id, ctx.clock.now()]);
            return { ...r, attempts: r.attempts + 1 };
        });
        if (!row)
            break;
        try {
            if (row.action === 'whatsapp.send')
                await sendWhatsApp(ctx, row);
            else if (row.action === 'calendar.sync')
                await syncCalendar(ctx, row);
            else if (row.action === 'email.notify') {
                await ctx.notifier.notifyAdmin(row.payload.subject, row.payload.text);
                await finish(ctx, row.id, 'DONE');
            }
            else
                await finish(ctx, row.id, 'FAILED', `Bilinmeyen eylem: ${row.action}`);
        }
        catch (e) {
            await handleError(ctx, row, e);
        }
    }
    return n;
}
async function finish(ctx, id, status, error, result, nextAt) {
    await ctx.db.query(`UPDATE outbox SET status=$2, last_error=$3, result=$4, updated_at=$5, next_attempt_at=coalesce($6, next_attempt_at) WHERE id=$1`, [id, status, error ?? null, result ? JSON.stringify(result) : null, ctx.clock.now(), nextAt ?? null]);
}
async function handleError(ctx, row, e) {
    const pe = e instanceof ProviderError ? e : new ProviderError(String(e?.message || e), { retryable: true });
    const integ = row.action === 'whatsapp.send' ? 'whatsapp' : row.action === 'calendar.sync' ? 'google_calendar' : 'email';
    await markIntegration(ctx, integ, row.action === 'whatsapp.send' ? ctx.wa.mode : ctx.calendar?.mode ?? 'DISABLED', false, pe.message);
    if (pe.opts.uncertain) {
        await finish(ctx, row.id, 'UNKNOWN', pe.message);
        await tx(ctx.db, async (c) => {
            if (row.action === 'whatsapp.send') {
                await c.query(`INSERT INTO messages (direction, party_id, job_id, job_version, kind, template_key, body, payload, status, error, created_at)
           VALUES ('OUT',$1,$2,$3,'unknown',$4,NULL,$5,'UNKNOWN',$6,$7)`, [row.target_party_id, row.job_id, row.job_version, row.payload.key, JSON.stringify({ outbox_id: row.id }), pe.message, ctx.clock.now()]);
            }
            await openCase(c, ctx, {
                type: 'DELIVERY_UNKNOWN', jobId: row.job_id, partyId: row.target_party_id, severity: 'HIGH',
                summary: `Gönderim sonucu belirsiz (${row.payload.key ?? row.action}); sağlayıcı olaylarıyla mutabakat bekleniyor, otomatik tekrar yapılmadı`,
                detail: { outbox_id: row.id },
            });
        });
        return;
    }
    if (pe.opts.retryable && row.attempts < MAX_ATTEMPTS) {
        await finish(ctx, row.id, 'PENDING', pe.message, undefined, new Date(ctx.clock.now().getTime() + backoff(row.attempts)));
        if (row.action === 'calendar.sync' && row.attempts === 3) {
            await tx(ctx.db, (c) => openCase(c, ctx, { type: 'CALENDAR_SYNC_FAILED', jobId: row.job_id, summary: `Takvim senkronu tekrar tekrar başarısız: ${pe.message.slice(0, 160)}` }).then(() => undefined));
        }
        return;
    }
    await finish(ctx, row.id, 'FAILED', pe.message);
    await tx(ctx.db, async (c) => {
        if (row.action === 'whatsapp.send') {
            const after = row.payload;
            const { onHandoffFailed, inquiryDeliveryFailed } = await import('./matching.js');
            if (after.onFailed?.type === 'handoff_failed')
                await onHandoffFailed(c, ctx, after.onFailed.sharingId, pe.message);
            else if (after.onFailed?.type === 'inquiry_failed')
                await inquiryDeliveryFailed(c, ctx, after.onFailed.inquiryId);
            else
                await openCase(c, ctx, { type: 'INTEGRATION_FAILED', jobId: row.job_id, partyId: row.target_party_id, summary: `WhatsApp mesajı gönderilemedi (${after.key}): ${pe.message.slice(0, 160)}` });
        }
        else {
            await openCase(c, ctx, { type: row.action === 'calendar.sync' ? 'CALENDAR_SYNC_FAILED' : 'INTEGRATION_FAILED', jobId: row.job_id, summary: `${row.action} başarısız: ${pe.message.slice(0, 160)}` });
        }
    });
}
async function proactiveCount(c, partyId, since) {
    const r = await one(c, `SELECT count(*)::int AS n FROM messages WHERE direction='OUT' AND party_id=$1 AND created_at > $2 AND (payload->>'proactive')::boolean IS TRUE`, [partyId, since]);
    return r.n;
}
async function sendWhatsApp(ctx, row) {
    const o = row.payload;
    const db = ctx.db;
    const now = ctx.clock.now();
    const skip = (why) => finish(ctx, row.id, 'SKIPPED', why);
    const job = row.job_id ? await one(db, 'SELECT * FROM jobs WHERE id=$1', [row.job_id]) : null;
    const { policy, automationEnabled } = await loadPolicy(db);
    if (!o.adminInitiated && !o.bypassAutomation) {
        if (!automationEnabled)
            return skip('Otomasyon genel olarak kapalı');
        if (job && job.automation_mode !== 'AUTO')
            return skip(`İş otomasyonu: ${job.automation_mode}`);
        if (job && job.status === 'CANCELLED')
            return skip('İş iptal edilmiş');
        if (job && o.requireVersion && o.jobVersion != null && job.version !== o.jobVersion)
            return skip('İş sürümü değişti; içerik eskidi');
    }
    if (o.key !== 'opt_out_ack' && !o.adminInitiated && (await messagingBlocked(db, o.partyId)))
        return skip('Alıcı WhatsApp iletişimini durdurdu');
    const to = await partyWa(db, o.partyId);
    if (!to) {
        await finish(ctx, row.id, 'FAILED', 'Alıcının WhatsApp kimliği yok');
        return;
    }
    const party = await one(db, `SELECT p.*, ip.timezone AS interp_tz FROM parties p LEFT JOIN interpreter_profiles ip ON ip.party_id=p.id WHERE p.id=$1`, [o.partyId]);
    const tz = party.interp_tz || party.timezone || 'Europe/Istanbul';
    if (o.proactive) {
        // Proaktif bildirim: alıcının yerel saatinde gönderim penceresi ve 24 saatlik üst sınır.
        const w = { startHour: policy.sendWindowStartHour, endHour: policy.sendWindowEndHour };
        const at = clampToWindow(now, tz, w);
        if (at.getTime() !== now.getTime())
            return finish(ctx, row.id, 'PENDING', 'Sessiz saat; pencere başında gönderilecek', undefined, at);
        if (!o.critical && (await proactiveCount(db, o.partyId, new Date(now.getTime() - 24 * 3600_000))) >= policy.maxProactivePer24h) {
            return finish(ctx, row.id, 'PENDING', 'Kişi başı 24 saatlik bildirim sınırı', undefined, new Date(now.getTime() + 3 * 3600_000));
        }
        if (party.is_customer && !party.is_interpreter && job && !(await hasConsent(db, o.partyId, 'OPERATIONAL_MESSAGES', job.id))) {
            const conv0 = await one(db, `SELECT last_inbound_at FROM conversations WHERE party_id=$1 AND channel='WHATSAPP'`, [o.partyId]);
            const open = conv0?.last_inbound_at && now.getTime() - new Date(conv0.last_inbound_at).getTime() < 24 * 3600_000;
            if (!open && !(await hasConsent(db, o.partyId, 'OPERATIONAL_MESSAGES')))
                return skip('Müşterinin operasyon mesajı izni yok');
        }
    }
    const vars = o.vars ?? {};
    const text = render(o.key, vars);
    const conv = await one(db, `SELECT last_inbound_at FROM conversations WHERE party_id=$1 AND channel='WHATSAPP'`, [o.partyId]);
    const windowOpen = !!conv?.last_inbound_at && now.getTime() - new Date(conv.last_inbound_at).getTime() < 24 * 3600_000;
    let out;
    if (windowOpen) {
        out = o.buttons?.length ? { to, kind: 'interactive', text, buttons: o.buttons } : { to, kind: 'text', text };
    }
    else {
        // Pencere kapalı: amaca uygun onaylı şablon; yoksa serbest mesajla kural aşılmaz (T32).
        const approved = ctx.config.whatsapp.approvedTemplates[o.key];
        if (!approved || o.adminInitiated) {
            await finish(ctx, row.id, 'FAILED', 'Pencere kapalı ve onaylı şablon yok');
            await tx(db, (c) => openCase(c, ctx, {
                type: 'TEMPLATE_MISSING', jobId: row.job_id, partyId: o.partyId, severity: 'HIGH',
                summary: `"${o.key}" mesajı gönderilemedi: 24 saatlik pencere kapalı ve onaylı WhatsApp şablonu tanımlı değil`,
            }).then(() => undefined));
            return;
        }
        const def = TEMPLATES[o.key];
        out = { to, kind: 'template', text, buttons: o.buttons, template: { name: approved, language: ctx.config.whatsapp.templateLanguage, params: def.params.map((p) => vars[p] ?? '') } };
    }
    const res = await ctx.wa.send(out);
    await markIntegration(ctx, 'whatsapp', ctx.wa.mode, true);
    await tx(db, async (c) => {
        await c.query(`INSERT INTO messages (external_id, direction, party_id, job_id, job_version, kind, template_key, body, payload, status, status_rank, created_at)
       VALUES ($1,'OUT',$2,$3,$4,$5,$6,$7,$8,'ACCEPTED',1,$9)`, [res.externalId, o.partyId, row.job_id, row.job_version, out.kind, o.key, text,
            JSON.stringify({ outbox_id: row.id, buttons: o.buttons ?? [], proactive: !!o.proactive, onDelivered: o.onDelivered ?? null, onFailed: o.onFailed ?? null, adminInitiated: !!o.adminInitiated }), now]);
        await c.query(`UPDATE outbox SET status='DONE', result=$2, updated_at=$3 WHERE id=$1`, [row.id, JSON.stringify({ externalId: res.externalId, kind: out.kind }), now]);
    });
    // Test sağlayıcısı: teslim olayını webhook üzerinden gelmiş gibi gelen kutusuna yazar.
    if (ctx.wa instanceof FakeWhatsApp && ctx.wa.autoDeliver) {
        const { storeInbox } = await import('./inbox.js');
        await storeInbox(ctx, 'whatsapp', `status:${res.externalId}:DELIVERED`, { kind: 'status', externalMessageId: res.externalId, status: 'DELIVERED', at: now, recipient: to, error: null }, true);
    }
}
export async function syncCalendar(ctx, row) {
    if (!ctx.calendar || ctx.calendar.mode === 'DISABLED')
        return finish(ctx, row.id, 'SKIPPED', 'Takvim bağlantısı kapalı');
    const db = ctx.db;
    const job = await one(db, 'SELECT * FROM jobs WHERE id=$1', [row.job_id]);
    const a = job.current_assignment_id ? await one(db, 'SELECT interpreter_id FROM assignments WHERE id=$1', [job.current_assignment_id]) : null;
    const decision = calendarDecision({
        ...job, interpreter_name: a ? await partyName(db, a.interpreter_id) : null, panel_url: `${ctx.config.baseUrl}/isler/${job.id}`,
    });
    const link = await one(db, `SELECT * FROM calendar_links WHERE job_id=$1 AND segment_key='main' AND event_kind='service'`, [job.id]);
    if (decision.kind === 'none' || (decision.kind === 'cancel' && !link))
        return finish(ctx, row.id, 'DONE', undefined, { decision: decision.kind });
    const calId = link?.calendar_id ?? (await ctx.calendar.calendarId());
    const eventId = link?.event_id ?? eventIdFor(job.id, 'main', 'service');
    let state;
    if (decision.kind === 'cancel') {
        await ctx.calendar.patch(calId, eventId, { status: 'cancelled' });
        state = 'cancelled';
    }
    else {
        // Zaman aşımında körlemesine yeni etkinlik açılmaz: deterministik kimlikle önce varlık kontrolü (T18).
        const existing = link ? await ctx.calendar.get(calId, eventId) : await ctx.calendar.get(calId, eventId);
        if (existing)
            await ctx.calendar.patch(calId, eventId, decision.event);
        else
            await ctx.calendar.insert(calId, eventId, decision.event);
        state = decision.event.status;
    }
    await db.query(`INSERT INTO calendar_links (job_id, segment_key, event_kind, calendar_id, event_id, synced_version, synced_state, updated_at)
     VALUES ($1,'main','service',$2,$3,$4,$5,$6)
     ON CONFLICT (job_id, segment_key, event_kind) DO UPDATE SET synced_version=EXCLUDED.synced_version, synced_state=EXCLUDED.synced_state, last_error=NULL, updated_at=EXCLUDED.updated_at`, [job.id, calId, eventId, job.version, state, ctx.clock.now()]);
    await markIntegration(ctx, 'google_calendar', ctx.calendar.mode, true);
    await finish(ctx, row.id, 'DONE', undefined, { decision: decision.kind, eventId });
}
/** Periyodik mutabakat: Google'da elle silinen/değiştirilen kayıt işin iptali sayılmaz; uyuşmazlık açılır (T20). */
export async function reconcileCalendar(ctx) {
    if (!ctx.calendar || ctx.calendar.mode === 'DISABLED')
        return 0;
    const links = await many(ctx.db, `SELECT l.*, j.status, j.code FROM calendar_links l JOIN jobs j ON j.id=l.job_id WHERE l.synced_state <> 'cancelled'`);
    let drift = 0;
    for (const l of links) {
        try {
            const ev = await ctx.calendar.get(l.calendar_id, l.event_id);
            if (!ev || ev.status === 'cancelled') {
                drift++;
                await tx(ctx.db, (c) => openCase(c, ctx, { type: 'CALENDAR_DRIFT', jobId: l.job_id, summary: `${l.code}: takvim etkinliği Google'da silinmiş/iptal edilmiş; iş iptal SAYILMADI` }).then(() => undefined));
            }
        }
        catch (e) {
            await markIntegration(ctx, 'google_calendar', ctx.calendar.mode, false, e.message);
        }
    }
    return drift;
}
