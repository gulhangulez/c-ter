// Bölüm 5.1: WhatsApp'tan talep alma, eksik bilgi, özet doğrulaması, paylaşım izni.
import { one } from '../core/db.js';
import { addWorkingHours, dayRange, formatRangeTr, localDate } from '../core/time.js';
import {
  FIELD_QUESTIONS, SERVICE_LABELS, classifyYesNo, extract, mergeDraft, requiredMissing, serviceTimezone,
  type DraftFields, type ServiceType,
} from '../domain/extract.js';
import {
  audit, cancelTasks, enqueueCalendarSync, loadPolicy, newJobCode, openCase, recordConsent, scheduleTask, sendWa, transition,
  type C, type Ctx,
} from './core.js';
import { startMatching } from './matching.js';

const CUSTOMER_TZ = 'Europe/Istanbul';

export function draftOf(job: any): DraftFields {
  return {
    service_type: job.service_type, country_code: job.country_code, city: job.city, city_key: job.city_key,
    start_date: job.start_date, end_date: job.end_date, service_days: job.service_days, customer_name: job.customer_name,
    technical_subject: job.technical_subject,
  };
}

export function summaryText(job: any): string {
  const days = job.service_days?.length ?? (job.start_date && job.end_date ? dayRange(job.start_date, job.end_date).length : 0);
  const svc = job.service_type ? SERVICE_LABELS[job.service_type as ServiceType] : 'hizmet';
  const parts = [
    job.city || job.country_code || 'yer belirtilmedi',
    days && job.service_days && job.service_days.length !== dayRange(job.start_date, job.end_date).length
      ? job.service_days.map((d: string) => formatRangeTr(d, d)).join(', ')
      : formatRangeTr(job.start_date, job.end_date),
    `${days} gün`,
    `${svc} (Çince–Türkçe)`,
  ];
  if (job.technical_subject) parts.push(`konu: ${job.technical_subject}`);
  if (job.customer_name) parts.push(`ad: ${job.customer_name}`);
  return parts.join(', ');
}

export async function createJob(c: C, ctx: Ctx, customerId: string, channel = 'WHATSAPP'): Promise<any> {
  const now = ctx.clock.now();
  const { version } = await loadPolicy(c);
  const seq = (await one(c, `SELECT nextval('job_code_seq') AS n`)).n;
  const year = Number(localDate(now, ctx.config.adminTimezone).slice(0, 4));
  const job = await one(
    c,
    `INSERT INTO jobs (code, customer_id, status, source_channel, policy_version, created_at, updated_at)
     VALUES ($1,$2,'NEW',$3,$4,$5,$5) RETURNING *`,
    [newJobCode(year, Number(seq)), customerId, channel, version, now],
  );
  await audit(c, ctx, { actor: 'system', command: 'CreateRequest', jobId: job.id, entityType: 'job', entityId: job.id, newState: 'NEW', jobVersion: 1 });
  return transition(c, ctx, job, 'INFO_PENDING', 'system', 'İlk temas');
}

async function scheduleInfoReminders(c: C, ctx: Ctx, job: any): Promise<void> {
  const { policy, version } = await loadPolicy(c);
  const now = ctx.clock.now();
  await cancelTasks(c, { jobId: job.id, types: ['info_reminder', 'info_dormant'] }, 'Müşteri yanıt verdi');
  const occ = Math.floor(now.getTime() / 1000);
  await scheduleTask(c, ctx, {
    type: 'info_reminder', jobId: job.id, targetPartyId: job.customer_id, businessVersion: job.version, occurrence: occ,
    policyVersion: version, dueAt: addWorkingHours(now, policy.customerInfoReminderWorkingHours, CUSTOMER_TZ),
  });
  await scheduleTask(c, ctx, {
    type: 'info_dormant', jobId: job.id, targetPartyId: job.customer_id, businessVersion: job.version, occurrence: occ,
    policyVersion: version, dueAt: new Date(now.getTime() + policy.customerDormantHours * 3600_000),
  });
}

/** INFO_PENDING aşamasındaki müşteri mesajı. */
export async function handleIntakeMessage(c: C, ctx: Ctx, job: any, text: string, replyId: string | null, messageId: string): Promise<void> {
  const send = (key: string, vars: Record<string, string> = {}, buttons?: { id: string; title: string }[]) =>
    sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key, vars: { job_code: job.code, ...vars }, buttons });

  // Buton yanıtları
  if (replyId) {
    const [kind, ans, jobId, ver] = replyId.split(':');
    if (jobId !== job.id || Number(ver) !== job.version) {
      await send('stale_action');
      return;
    }
    if (kind === 'sum') return answerSummary(c, ctx, job, ans === 'yes' ? 'YES' : 'NO', `button:${messageId}`);
    if (kind === 'share') return answerShare(c, ctx, job, ans === 'yes', `button:${messageId}`);
  }

  if (job.pending_question === 'SUMMARY') {
    const yn = classifyYesNo(text);
    if (yn) return answerSummary(c, ctx, job, yn, `text:${messageId}`);
  }
  if (job.pending_question === 'SHARE') {
    const yn = classifyYesNo(text);
    if (yn) return answerShare(c, ctx, job, yn === 'YES', `text:${messageId}`);
  }

  const ex = extract(text, ctx.clock.now(), CUSTOMER_TZ, { messageId, pendingField: job.pending_field, country: job.country_code });
  if (ex.intent === 'OUT_OF_SCOPE' && !job.service_type) {
    await send('out_of_scope');
    return;
  }
  const next = mergeDraft(draftOf(job), ex.extracted_fields);
  if (next.start_date && next.end_date && !ex.extracted_fields.service_days && (next.start_date !== job.start_date || next.end_date !== job.end_date)) {
    next.service_days = dayRange(next.start_date, next.end_date);
  }
  const changed = JSON.stringify(next) !== JSON.stringify(draftOf(job));
  const extraction = { ...(job.extraction || {}), last: ex };
  const missing = requiredMissing(next);
  let updated = await one(
    c,
    `UPDATE jobs SET service_type=$2, country_code=$3, city=$4, city_key=$5, start_date=$6, end_date=$7, service_days=$8,
       customer_name=$9, technical_subject=$10, extraction=$11, updated_at=$12,
       summary_confirmed_at = CASE WHEN $13 THEN NULL ELSE summary_confirmed_at END
     WHERE id=$1 RETURNING *`,
    [job.id, next.service_type, next.country_code, next.city, next.city_key, next.start_date, next.end_date, next.service_days,
      next.customer_name, next.technical_subject, JSON.stringify(extraction), ctx.clock.now(), changed],
  );
  if (changed) {
    await audit(c, ctx, { actor: 'system:extractor', command: 'UpdateRequestDraft', jobId: job.id, jobVersion: job.version, evidence: `message:${messageId}`, detail: { evidence: ex.evidence, ambiguities: ex.ambiguities } });
    if (next.start_date) await enqueueCalendarSync(c, ctx, job.id);
  }
  // Müşterinin adı taraf kaydına da yazılır (WhatsApp profil adı doğrulanmış kimlik değildir).
  if (next.customer_name && next.customer_name !== job.customer_name) {
    await c.query(`UPDATE parties SET display_name=$2 WHERE id=$1`, [job.customer_id, next.customer_name]);
  }

  if (missing.length) {
    const field = missing[0];
    const note = ex.ambiguities.length ? `(${ex.ambiguities.join('; ')}) ` : '';
    updated = await one(c, `UPDATE jobs SET pending_question='FIELD', pending_field=$2 WHERE id=$1 RETURNING *`, [job.id, field]);
    await sendWa(c, ctx, {
      partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'missing_info',
      vars: { job_code: job.code, missing_field_label: note + FIELD_QUESTIONS[field] },
    });
    await scheduleInfoReminders(c, ctx, updated);
    return;
  }
  updated = await one(c, `UPDATE jobs SET pending_question='SUMMARY', pending_field=NULL WHERE id=$1 RETURNING *`, [job.id]);
  await askSummary(c, ctx, updated);
  await scheduleInfoReminders(c, ctx, updated);
}

export async function askSummary(c: C, ctx: Ctx, job: any): Promise<void> {
  await sendWa(c, ctx, {
    partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'request_summary',
    vars: { job_code: job.code, summary: summaryText(job) },
    buttons: [
      { id: `sum:yes:${job.id}:${job.version}`, title: 'Evet, doğru' },
      { id: `sum:no:${job.id}:${job.version}`, title: 'Düzeltme var' },
    ],
  });
}

async function answerSummary(c: C, ctx: Ctx, job: any, yn: 'YES' | 'NO', source: string): Promise<void> {
  if (!job.start_date || !job.city || !job.service_type) {
    await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, key: 'status_update', vars: { job_code: job.code, status_text: 'Önce eksik bilgileri tamamlayalım.' } });
    return;
  }
  await c.query(
    `INSERT INTO confirmations (job_id, subject, subject_version, party_id, value, source, created_at) VALUES ($1,'REQUEST_SUMMARY',$2,$3,$4,$5,$6)`,
    [job.id, job.version, job.customer_id, yn, source, ctx.clock.now()],
  );
  if (yn === 'NO') {
    await c.query(`UPDATE jobs SET pending_question='FIELD', pending_field=NULL WHERE id=$1`, [job.id]);
    await sendWa(c, ctx, {
      partyId: job.customer_id, jobId: job.id, key: 'status_update',
      vars: { job_code: job.code, status_text: 'Lütfen düzeltmek istediğiniz bilgiyi (şehir, tarih, hizmet veya ad) yazın.' },
    });
    return;
  }
  const now = ctx.clock.now();
  const j = await one(c, `UPDATE jobs SET summary_confirmed_at=$2, pending_question='SHARE', updated_at=$2 WHERE id=$1 RETURNING *`, [job.id, now]);
  await c.query(`DELETE FROM service_segments WHERE job_id=$1 AND job_version=$2`, [job.id, job.version]);
  await c.query(
    `INSERT INTO service_segments (job_id, job_version, city, timezone, planned_days, created_at) VALUES ($1,$2,$3,$4,$5,$6)`,
    [job.id, job.version, job.city, serviceTimezone(job), job.service_days ?? dayRange(job.start_date, job.end_date), now],
  );
  await audit(c, ctx, { actor: `party:${job.customer_id}`, command: 'ConfirmRequestSummary', jobId: job.id, jobVersion: job.version, evidence: source });
  if (await shareAlreadyGranted(c, job)) {
    // Sürüm değişikliği sonrası yeniden doğrulama: aynı iş için verilmiş paylaşım izni geçerli.
    await enqueueCalendarSync(c, ctx, j.id);
    return proceedToMatching(c, ctx, j, source);
  }
  await sendWa(c, ctx, {
    partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'share_consent', vars: { job_code: job.code },
    buttons: [
      { id: `share:yes:${job.id}:${job.version}`, title: 'Evet, izin veriyorum' },
      { id: `share:no:${job.id}:${job.version}`, title: 'Hayır' },
    ],
  });
  await enqueueCalendarSync(c, ctx, j.id);
}

async function shareAlreadyGranted(c: C, job: any): Promise<boolean> {
  const r = await one(c, `SELECT granted FROM consents WHERE party_id=$1 AND purpose='CONTACT_SHARING' AND job_id=$2 AND withdrawn_at IS NULL ORDER BY recorded_at DESC LIMIT 1`, [job.customer_id, job.id]);
  return !!r?.granted;
}

async function answerShare(c: C, ctx: Ctx, job: any, yes: boolean, source: string): Promise<void> {
  if (!job.summary_confirmed_at) {
    await askSummary(c, ctx, job);
    return;
  }
  await recordConsent(c, ctx, { partyId: job.customer_id, purpose: 'CONTACT_SHARING', granted: yes, jobId: job.id, source });
  await recordConsent(c, ctx, { partyId: job.customer_id, purpose: 'OPERATIONAL_MESSAGES', granted: yes, jobId: job.id, source });
  if (!yes) {
    await c.query(`UPDATE jobs SET pending_question='SHARE' WHERE id=$1`, [job.id]);
    await openCase(c, ctx, {
      type: 'SHARE_CONSENT_MISSING', jobId: job.id, partyId: job.customer_id,
      summary: `${job.code}: müşteri iletişim bilgisinin tercümanla paylaşılmasına izin vermedi`,
    });
    await sendWa(c, ctx, {
      partyId: job.customer_id, jobId: job.id, key: 'status_update',
      vars: { job_code: job.code, status_text: 'Anlaşıldı; iletişim bilginizi kimseyle paylaşmayacağız. Bu durumda tercüman yönlendirmesi yapamıyoruz; talebinizi yetkilimize aktardım.' },
    });
    return;
  }
  await proceedToMatching(c, ctx, job, source);
}

async function proceedToMatching(c: C, ctx: Ctx, job: any, source: string): Promise<void> {
  await cancelTasks(c, { jobId: job.id, types: ['info_reminder', 'info_dormant'] }, 'Talep doğrulandı');
  let j = await one(c, `UPDATE jobs SET pending_question=NULL, pending_field=NULL WHERE id=$1 RETURNING *`, [job.id]);
  j = await transition(c, ctx, j, 'MATCHING', `party:${job.customer_id}`, source);
  await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: j.version, key: 'matching_started', vars: { job_code: job.code } });
  await startMatching(c, ctx, j);
}
