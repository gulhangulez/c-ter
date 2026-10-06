// Webhook gelen kutusu işleyicisi: kimlik/iş eşleştirme ve yanıtların doğru işe bağlanması.
import { many, one, tx } from '../core/db.js';
import { classifyAvailability, isOptOut, reportsPayment, wantsCancel, wantsHuman, type Availability } from '../domain/extract.js';
import type { InboundEvent } from '../adapters/whatsapp.js';
import type { PaymentEvent } from '../adapters/payments.js';
import {
  audit, cancelTasks, OPEN_STATUSES, openCase, recordConsent, sendWa, type C, type Ctx,
} from './core.js';
import { createJob, handleIntakeMessage } from './intake.js';
import { recordAvailability, onHandoffDelivered, onHandoffFailed, inquiryDeliveryFailed } from './matching.js';
import { answerChange, cancelJob, recordAgreement, recordContact, recordStart, setAutomationMode } from './workflow.js';
import { handlePaymentEvent, reportPayment } from './finance.js';
import { transition } from './core.js';

const STATUS_RANK: Record<string, number> = { ACCEPTED: 1, SENT: 2, DELIVERED: 3, READ: 4, FAILED: 5 };

export async function storeInbox(ctx: Ctx, provider: string, dedupeKey: string, body: unknown, signatureOk: boolean): Promise<boolean> {
  const r = await one(
    ctx.db,
    `INSERT INTO webhook_inbox (provider, dedupe_key, signature_ok, body, status, received_at) VALUES ($1,$2,$3,$4,$5,$6)
     ON CONFLICT (provider, dedupe_key) DO NOTHING RETURNING id`,
    [provider, dedupeKey, signatureOk, JSON.stringify(body), signatureOk ? 'RECEIVED' : 'REJECTED', ctx.clock.now()],
  );
  return !!r;
}

export function waDedupeKey(ev: InboundEvent): string {
  return ev.kind === 'message' ? `msg:${ev.externalId}` : `status:${ev.externalMessageId}:${ev.status}`;
}

/** Bekleyen gelen kutusu kayıtlarını işler. Her kayıt kendi veritabanı işleminde. */
export async function processInbox(ctx: Ctx, limit = 50): Promise<number> {
  let n = 0;
  for (;;) {
    const row = await tx(ctx.db, async (c) => {
      const r = await one(c, `SELECT * FROM webhook_inbox WHERE status='RECEIVED' AND attempts < 5 ORDER BY received_at, id LIMIT 1 FOR UPDATE SKIP LOCKED`);
      if (!r) return null;
      await c.query(`UPDATE webhook_inbox SET attempts=attempts+1 WHERE id=$1`, [r.id]);
      return r;
    });
    if (!row) break;
    try {
      await tx(ctx.db, async (c) => {
        await handleInboxRow(c, ctx, row);
        await c.query(`UPDATE webhook_inbox SET status='PROCESSED', processed_at=$2, error=NULL WHERE id=$1`, [row.id, ctx.clock.now()]);
      });
    } catch (e: any) {
      await ctx.db.query(`UPDATE webhook_inbox SET status=CASE WHEN attempts>=5 THEN 'FAILED' ELSE 'RECEIVED' END, error=$2 WHERE id=$1`, [row.id, String(e?.stack || e).slice(0, 2000)]);
      if (process.env.NODE_ENV !== 'test') console.error('[inbox]', e);
    }
    if (++n >= limit) break;
  }
  return n;
}

async function handleInboxRow(c: C, ctx: Ctx, row: any): Promise<void> {
  if (row.provider === 'whatsapp') {
    const ev = row.body as any;
    if (ev.kind === 'message') return handleMessage(c, ctx, { ...ev, at: new Date(ev.at) });
    if (ev.kind === 'status') return handleStatus(c, ctx, { ...ev, at: new Date(ev.at) });
  } else if (row.provider.startsWith('payments:')) {
    return handlePaymentEvent(c, ctx, row.provider.slice('payments:'.length), row.body as PaymentEvent);
  } else if (row.provider === 'telephony') {
    return handleCall(c, ctx, row.body);
  }
}

async function findOrCreateParty(c: C, ctx: Ctx, waId: string, profileName: string | null): Promise<any> {
  const e = await one(c, `SELECT p.* FROM contact_endpoints e JOIN parties p ON p.id=e.party_id WHERE e.kind='WHATSAPP' AND e.value=$1`, [waId]);
  if (e) return e;
  const p = await one(c, `INSERT INTO parties (display_name, is_customer, timezone, created_at) VALUES ($1,true,NULL,$2) RETURNING *`, [profileName, ctx.clock.now()]);
  await c.query(`INSERT INTO contact_endpoints (party_id, kind, value, verified, preferred) VALUES ($1,'WHATSAPP',$2,true,true)`, [p.id, waId]);
  await c.query(`INSERT INTO contact_endpoints (party_id, kind, value, verified) VALUES ($1,'PHONE',$2,false) ON CONFLICT DO NOTHING`, [p.id, '+' + waId]);
  return p;
}

// ---------- Gelen mesaj ----------

async function handleMessage(c: C, ctx: Ctx, ev: Extract<InboundEvent, { kind: 'message' }>): Promise<void> {
  const party = await findOrCreateParty(c, ctx, ev.from, ev.profileName);
  const msg = await one(
    c,
    `INSERT INTO messages (external_id, direction, party_id, kind, body, payload, status, created_at)
     VALUES ($1,'IN',$2,$3,$4,$5,'RECEIVED',$6) ON CONFLICT (direction, external_id) WHERE external_id IS NOT NULL DO NOTHING RETURNING id`,
    [ev.externalId, party.id, ev.replyId ? 'button_reply' : ev.type, ev.text, JSON.stringify({ replyId: ev.replyId }), ev.at],
  );
  if (!msg) return;                                                    // T05: aynı mesaj ikinci etki yaratmaz
  await c.query(
    `INSERT INTO conversations (party_id, channel, last_inbound_at, created_at) VALUES ($1,'WHATSAPP',$2,$2)
     ON CONFLICT (party_id, channel) DO UPDATE SET last_inbound_at = GREATEST(conversations.last_inbound_at, EXCLUDED.last_inbound_at)`,
    [party.id, ev.at],
  );
  const setJob = (jobId: string, ver: number) => c.query(`UPDATE messages SET job_id=$2, job_version=$3 WHERE id=$1`, [msg.id, jobId, ver]);
  const text = ev.text ?? '';

  // İletişimi durdurma: ilgili WhatsApp gönderimleri durur; borç silinmez (T33).
  if (!ev.replyId && isOptOut(text)) {
    await recordConsent(c, ctx, { partyId: party.id, purpose: 'OPERATIONAL_MESSAGES', granted: false, source: `message:${msg.id}` });
    await cancelTasks(c, { partyId: party.id }, 'Kişi iletişimi durdurdu');
    await c.query(`UPDATE outbox SET status='SKIPPED', last_error='Opt-out' WHERE target_party_id=$1 AND status='PENDING' AND action='whatsapp.send'`, [party.id]);
    await sendWa(c, ctx, { partyId: party.id, key: 'opt_out_ack', bypassAutomation: true });
    await openCase(c, ctx, { type: 'OPT_OUT', partyId: party.id, summary: `${party.display_name ?? 'Bir kişi'} WhatsApp mesajlarını durdurdu; açık işler varsa alternatif kanal gerekir` });
    return;
  }

  const p = await one(c, 'SELECT * FROM parties WHERE id=$1', [party.id]);
  if (p.is_interpreter) {
    const handled = await handleInterpreterMessage(c, ctx, p, text, ev.replyId, msg.id, setJob);
    if (handled) return;
  }
  await handleCustomerMessage(c, ctx, p, text, ev.replyId, msg.id, setJob);
}

type SetJob = (jobId: string, ver: number) => Promise<unknown>;

async function jobForReply(c: C, replyId: string): Promise<{ kind: string; ans: string; id: string; ver: number } | null> {
  const parts = replyId.split(':');
  if (parts.length < 3) return null;
  return { kind: parts[0], ans: parts[1], id: parts[2], ver: Number(parts[3] ?? 0) };
}

async function handleInterpreterMessage(c: C, ctx: Ctx, p: any, text: string, replyId: string | null, msgId: string, setJob: SetJob): Promise<boolean> {
  if (replyId) {
    const r = await jobForReply(c, replyId);
    if (r?.kind === 'av') {
      const q = await one(c, 'SELECT * FROM interpreter_inquiries WHERE id=$1 AND interpreter_id=$2', [r.id, p.id]);
      if (!q) return true;
      await setJob(q.job_id, q.job_version);
      const ans: Availability = r.ans === 'yes' ? 'AVAILABLE' : r.ans === 'no' ? 'DECLINED' : 'CONDITIONAL';
      await recordAvailability(c, ctx, q.id, r.ver, ans, text, `button:${msgId}`);
      return true;
    }
    if (r && ['contact', 'agree', 'start'].includes(r.kind)) return routeJobButton(c, ctx, p, r, msgId, setJob);
    return false;
  }
  if (wantsHuman(text)) return false;
  if (reportsPayment(text)) {
    if (await reportPayment(c, ctx, p.id, `message:${msgId}`)) return true;
  }
  // Serbest metin yalnızca tek açık sorgu varsa ona bağlanır; birden fazlaysa yanlış işe bağlanmaz (T04).
  const open = await many(
    c,
    `SELECT q.*, j.code FROM interpreter_inquiries q JOIN jobs j ON j.id=q.job_id
      WHERE q.interpreter_id=$1 AND q.status='SENT' AND q.job_version=j.version`,
    [p.id],
  );
  const mentioned = text.match(/CT-\d{4}-\d{6}/i)?.[0]?.toUpperCase();
  const target = mentioned ? open.filter((q) => q.code === mentioned) : open;
  if (target.length === 1) {
    await setJob(target[0].job_id, target[0].job_version);
    await recordAvailability(c, ctx, target[0].id, null, classifyAvailability(text), text, `text:${msgId}`);
    return true;
  }
  if (target.length > 1) {
    await sendWa(c, ctx, {
      partyId: p.id, key: 'status_update',
      vars: { job_code: target.map((q) => q.code).join(', '), status_text: 'Birden fazla açık sorgu var. Lütfen ilgili mesajdaki butonu kullanın veya iş kodunu yazın.' },
    });
    return true;
  }
  // Atanmış olduğu bir işle ilgili serbest metin: kayda geçer, yetkiliye iletilir.
  const assigned = await many(c, `SELECT j.* FROM assignments a JOIN jobs j ON j.id=a.job_id WHERE a.interpreter_id=$1 AND a.active AND j.status = ANY($2)`, [p.id, OPEN_STATUSES]);
  if (assigned.length) {
    const j = mentioned ? assigned.find((x) => x.code === mentioned) : assigned.length === 1 ? assigned[0] : null;
    if (j) {
      await setJob(j.id, j.version);
      await openCase(c, ctx, { type: 'UNHANDLED_MESSAGE', jobId: j.id, partyId: p.id, severity: 'LOW', summary: `${j.code}: tercümandan serbest mesaj: "${text.slice(0, 160)}"` });
      await sendWa(c, ctx, { partyId: p.id, jobId: j.id, key: 'message_noted', vars: { job_code: j.code } });
      return true;
    }
  }
  return !p.is_customer;
}

async function routeJobButton(c: C, ctx: Ctx, p: any, r: { kind: string; ans: string; id: string; ver: number }, msgId: string, setJob: SetJob): Promise<boolean> {
  const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [r.id]);
  if (!job) return true;
  const a = job.current_assignment_id ? await one(c, 'SELECT * FROM assignments WHERE id=$1', [job.current_assignment_id]) : null;
  // Başkasının işine ait buton işlenmez.
  if (p.id !== job.customer_id && p.id !== a?.interpreter_id) return true;
  await setJob(job.id, job.version);
  if (r.ver !== job.version) {
    await sendWa(c, ctx, { partyId: p.id, jobId: job.id, key: 'stale_action', vars: { job_code: job.code } });
    return true;
  }
  const src = `button:${msgId}`;
  if (r.kind === 'contact') await recordContact(c, ctx, job, p.id, r.ans === 'yes' ? 'contacted' : r.ans === 'no' ? 'not_contacted' : 'contact_problem', src);
  else if (r.kind === 'agree') await recordAgreement(c, ctx, job, p.id, r.ans as 'yes' | 'talking' | 'no', src);
  else if (r.kind === 'start') await recordStart(c, ctx, job, p.id, r.ans === 'yes', src);
  else if (r.kind === 'chg' && p.id === job.customer_id) await answerChange(c, ctx, job, r.ans === 'yes', r.ver, src);
  else if (r.kind === 'cancel' && p.id === job.customer_id) {
    if (r.ans === 'confirm') await cancelJob(c, ctx, job.id, `party:${p.id}`, 'Müşteri iptal etti');
  }
  return true;
}

async function handleCustomerMessage(c: C, ctx: Ctx, p: any, text: string, replyId: string | null, msgId: string, setJob: SetJob): Promise<void> {
  if (!p.is_customer) await c.query(`UPDATE parties SET is_customer=true WHERE id=$1`, [p.id]);
  const open = await many(c, `SELECT * FROM jobs WHERE customer_id=$1 AND status = ANY($2) ORDER BY created_at`, [p.id, OPEN_STATUSES]);
  let job: any = null;
  let effectiveText = text;
  let effectiveReply = replyId;

  if (replyId) {
    const r = await jobForReply(c, replyId);
    if (r?.kind === 'pick') {
      job = open.find((j) => j.id === r.id) ?? null;
      const conv = await one(c, `SELECT pending_text FROM conversations WHERE party_id=$1 AND channel='WHATSAPP'`, [p.id]);
      effectiveText = conv?.pending_text ?? '';
      effectiveReply = null;
      await c.query(`UPDATE conversations SET pending_job_choice=NULL, pending_text=NULL WHERE party_id=$1 AND channel='WHATSAPP'`, [p.id]);
      if (!job) return;
    } else if (r && ['contact', 'agree', 'start', 'chg', 'cancel'].includes(r.kind)) {
      await routeJobButton(c, ctx, p, r, msgId, setJob);
      return;
    } else if (r) {
      job = (await one(c, 'SELECT * FROM jobs WHERE id=$1 AND customer_id=$2', [r.id, p.id])) ?? null;
      if (!job) return;
    }
  }

  if (!job) {
    const mentioned = text.match(/CT-\d{4}-\d{6}/i)?.[0]?.toUpperCase();
    if (mentioned) job = open.find((j) => j.code === mentioned) ?? null;
  }
  if (!job && open.length > 1) {
    // Belirsiz "evet" yanlış işe bağlanmaz (T04): kısa iş seçimi sorusu.
    await c.query(`UPDATE conversations SET pending_job_choice=$2, pending_text=$3 WHERE party_id=$1 AND channel='WHATSAPP'`, [p.id, open.map((j) => j.id), text]);
    await sendWa(c, ctx, {
      partyId: p.id, key: 'job_choice',
      buttons: open.slice(-3).map((j) => ({ id: `pick:x:${j.id}:${j.version}`, title: j.code.slice(-10) })),
    });
    return;
  }
  if (!job && open.length === 1) job = open[0];

  if (wantsHuman(effectiveText) && !effectiveReply) {
    if (job) {
      await setJob(job.id, job.version);
      await setAutomationMode(c, ctx, job.id, 'HUMAN_TAKEOVER', `party:${p.id}`, 'Kişi yetkiliyle görüşmek istedi');
    }
    await sendWa(c, ctx, { partyId: p.id, jobId: job?.id, key: 'human_support', bypassAutomation: true });
    await openCase(c, ctx, { type: 'HUMAN_REQUESTED', jobId: job?.id ?? null, partyId: p.id, severity: 'HIGH', summary: `${job?.code ?? 'Yeni kişi'}: yetkiliyle görüşmek istiyor` });
    return;
  }

  if (!job) {
    job = await createJob(c, ctx, p.id);
    await setJob(job.id, job.version);
    await sendWa(c, ctx, { partyId: p.id, jobId: job.id, key: 'intake_welcome' });
    await handleIntakeMessage(c, ctx, job, effectiveText, null, msgId);
    return;
  }
  await setJob(job.id, job.version);

  if (job.automation_mode !== 'AUTO') return;                          // T34: devralınan işte bot yanıt vermez

  if (job.status === 'DORMANT') job = await transition(c, ctx, job, 'INFO_PENDING', `party:${p.id}`, 'Müşteri yeniden yazdı');
  if (job.status === 'INFO_PENDING' || job.pending_question === 'SUMMARY') {
    await handleIntakeMessage(c, ctx, job, effectiveText, effectiveReply, msgId);
    return;
  }
  if (reportsPayment(effectiveText) && (await reportPayment(c, ctx, p.id, `message:${msgId}`))) return;
  if (wantsCancel(effectiveText)) {
    await sendWa(c, ctx, {
      partyId: p.id, jobId: job.id, jobVersion: job.version, key: 'cancel_confirm', vars: { job_code: job.code },
      buttons: [{ id: `cancel:confirm:${job.id}:${job.version}`, title: 'İptal et' }, { id: `cancel:keep:${job.id}:${job.version}`, title: 'Vazgeç' }],
    });
    return;
  }
  if (job.status === 'MATCHING' || job.status === 'HANDOFF_PENDING') {
    await sendWa(c, ctx, { partyId: p.id, jobId: job.id, key: 'status_update', vars: { job_code: job.code, status_text: 'Uygun tercümanları sırayla soruyoruz; bir tercüman kabul ettiğinde buradan bilgi vereceğiz.' } });
    return;
  }
  await openCase(c, ctx, { type: 'UNHANDLED_MESSAGE', jobId: job.id, partyId: p.id, severity: 'LOW', summary: `${job.code}: müşteriden serbest mesaj: "${effectiveText.slice(0, 160)}"` });
  await sendWa(c, ctx, { partyId: p.id, jobId: job.id, key: 'message_noted', vars: { job_code: job.code } });
}

// ---------- Teslim durumu ----------

async function handleStatus(c: C, ctx: Ctx, ev: Extract<InboundEvent, { kind: 'status' }>): Promise<void> {
  const m = await one(c, `SELECT * FROM messages WHERE direction='OUT' AND external_id=$1 FOR UPDATE`, [ev.externalMessageId]);
  const ins = await one(
    c,
    `INSERT INTO message_events (message_id, external_message_id, event_key, status, error, occurred_at, received_at) VALUES ($1,$2,$3,$4,$5,$6,$7)
     ON CONFLICT (event_key) DO NOTHING RETURNING id`,
    [m?.id ?? null, ev.externalMessageId, `${ev.externalMessageId}:${ev.status}`, ev.status, ev.error, ev.at, ctx.clock.now()],
  );
  if (!ins || !m) return;
  const rank = STATUS_RANK[ev.status] ?? 0;
  // Sonradan gelen eski teslim olayı daha yeni sonucu geriye almaz.
  if (rank > m.status_rank) await c.query(`UPDATE messages SET status=$2, status_rank=$3, error=$4 WHERE id=$1`, [m.id, ev.status, rank, ev.error]);
  const after = m.payload ?? {};
  if ((ev.status === 'DELIVERED' || ev.status === 'READ') && after.onDelivered?.type === 'handoff_delivered') {
    await onHandoffDelivered(c, ctx, after.onDelivered.sharingId, m.id);
  }
  if (ev.status === 'FAILED') {
    if (after.onFailed?.type === 'handoff_failed') await onHandoffFailed(c, ctx, after.onFailed.sharingId, ev.error ?? 'FAILED');
    if (after.onFailed?.type === 'inquiry_failed') await inquiryDeliveryFailed(c, ctx, after.onFailed.inquiryId);
  }
}

// ---------- Telefon (Bölüm 5.2) ----------

async function handleCall(c: C, ctx: Ctx, b: any): Promise<void> {
  const callId = String(b.call_id);
  const caller = b.from ? String(b.from).replace(/[^\d]/g, '') : null;
  const waConsent = b.whatsapp_consent === true;
  const wa = b.whatsapp_number ? String(b.whatsapp_number).replace(/[^\d]/g, '') : caller;
  await audit(c, ctx, { actor: 'provider:telephony', command: 'InboundCall', evidence: `call:${callId}`, detail: { hidden: !caller, consent: waConsent } });
  if (!wa || !waConsent) {
    // Gizli numara veya izin yok: izinsiz mesaj gönderilmez; talep kaybolmaz (T40).
    await openCase(c, ctx, { type: 'PHONE_INTAKE', severity: 'HIGH', summary: `Telefon talebi (çağrı ${callId}): ${caller ? 'WhatsApp izni verilmedi' : 'gizli numara'}; sesli/alternatif kanal gerekiyor`, detail: { call_id: callId } });
    return;
  }
  let party = await one(c, `SELECT p.* FROM contact_endpoints e JOIN parties p ON p.id=e.party_id WHERE e.kind='WHATSAPP' AND e.value=$1`, [wa]);
  if (!party) {
    party = await one(c, `INSERT INTO parties (is_customer, created_at) VALUES (true,$1) RETURNING *`, [ctx.clock.now()]);
    await c.query(`INSERT INTO contact_endpoints (party_id, kind, value, verified, preferred) VALUES ($1,'WHATSAPP',$2,false,true)`, [party.id, wa]);
  }
  await recordConsent(c, ctx, { partyId: party.id, purpose: 'OPERATIONAL_MESSAGES', granted: true, source: `call:${callId}`, channel: 'WHATSAPP', textVersion: 'ivr-v1' });
  const job = await createJob(c, ctx, party.id, 'PHONE');
  await c.query(`UPDATE jobs SET pending_question='FIELD', extraction = extraction || $2::jsonb WHERE id=$1`, [job.id, JSON.stringify({ call_id: callId })]);
  // Telefon araması WhatsApp'ta serbest mesaj penceresi açmaz: onaylı başlangıç şablonu gerekir (T39).
  await sendWa(c, ctx, { partyId: party.id, jobId: job.id, jobVersion: job.version, key: 'intake_start', proactive: true, critical: true });
}
