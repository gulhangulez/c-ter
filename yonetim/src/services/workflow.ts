// Bölüm 5.6–5.7: görüşme/kesinleşme takibi, iş şartları, başlangıç, tamamlanma, iptal, devralma, değişiklik.
import { many, one } from '../core/db.js';
import { addDays, addWorkingHours, atLocal, dayRange, formatRangeTr, nextMorning } from '../core/time.js';
import { parseAmount } from '../domain/money.js';
import { serviceTimezone } from '../domain/extract.js';
import {
  audit, cancelTasks, CommandError, createActionToken, enqueueCalendarSync, loadPolicy, lockJob, openCase, partyName,
  resolveCases, scheduleTask, sendWa, transition, type C, type Ctx,
} from './core.js';
import { accrueCommission, voidOrFlagOnCancel } from './finance.js';
import { askSummary } from './intake.js';
import { continueMatching } from './matching.js';

async function assignmentOf(c: C, job: any): Promise<any> {
  return job.current_assignment_id ? one(c, 'SELECT * FROM assignments WHERE id=$1', [job.current_assignment_id]) : null;
}

async function confirm(c: C, ctx: Ctx, job: any, subject: string, ver: number, partyId: string, value: string, source: string, detail: unknown = {}) {
  await c.query(
    `INSERT INTO confirmations (job_id, subject, subject_version, party_id, value, detail, source, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
    [job.id, subject, ver, partyId, value, JSON.stringify(detail), source, ctx.clock.now()],
  );
  await audit(c, ctx, { actor: `party:${partyId}`, command: `Record${subject}`, jobId: job.id, newState: value, jobVersion: job.version, evidence: source });
}

async function latest(c: C, jobId: string, subject: string, partyId: string, ver?: number): Promise<any> {
  return one(
    c,
    `SELECT * FROM confirmations WHERE job_id=$1 AND subject=$2 AND party_id=$3 ${ver != null ? 'AND subject_version=$4' : ''} ORDER BY created_at DESC LIMIT 1`,
    ver != null ? [jobId, subject, partyId, ver] : [jobId, subject, partyId],
  );
}

// ---------- Görüşme kontrolü (5.6 ilk kontrol) ----------

export async function sendContactCheck(c: C, ctx: Ctx, job: any, occurrence: number): Promise<void> {
  const a = await assignmentOf(c, job);
  if (!a) return;
  for (const pid of [a.interpreter_id, job.customer_id]) {
    if (occurrence > 1 && (await latest(c, job.id, 'CONTACT', pid))) continue;
    await sendWa(c, ctx, {
      partyId: pid, jobId: job.id, jobVersion: job.version, key: 'contact_check', proactive: true, requireVersion: true,
      vars: { job_code: job.code },
      buttons: [
        { id: `contact:yes:${job.id}:${job.version}`, title: 'Görüştük' },
        { id: `contact:no:${job.id}:${job.version}`, title: 'Henüz görüşmedik' },
        { id: `contact:problem:${job.id}:${job.version}`, title: 'Sorun var' },
      ],
    });
  }
  const { policy, version } = await loadPolicy(c);
  const prof = await one(c, 'SELECT timezone FROM interpreter_profiles WHERE party_id=$1', [a.interpreter_id]);
  const tz = prof?.timezone ?? 'Europe/Istanbul';
  if (occurrence === 1) {
    await scheduleTask(c, ctx, { type: 'contact_reminder', jobId: job.id, businessVersion: job.version, policyVersion: version, dueAt: addWorkingHours(ctx.clock.now(), policy.contactReminderWorkingHours - policy.contactCheckWorkingHours, tz) });
    await scheduleTask(c, ctx, { type: 'contact_escalate', jobId: job.id, businessVersion: job.version, policyVersion: version, dueAt: addWorkingHours(ctx.clock.now(), policy.contactEscalateWorkingHours - policy.contactCheckWorkingHours, tz) });
  }
}

export async function recordContact(c: C, ctx: Ctx, jobIn: any, partyId: string, value: 'contacted' | 'not_contacted' | 'contact_problem', source: string): Promise<void> {
  const job = await lockJob(c, jobIn.id);
  const a = await assignmentOf(c, job);
  if (!a || !['NEGOTIATING', 'CONFIRMED'].includes(job.status)) return;
  const isInterp = partyId === a.interpreter_id;
  await confirm(c, ctx, job, 'CONTACT', job.version, partyId, value, source);
  await c.query(`UPDATE jobs SET ${isInterp ? 'contact_status_interpreter' : 'contact_status_customer'}=$2 WHERE id=$1`, [job.id, value]);
  const other = await latest(c, job.id, 'CONTACT', isInterp ? job.customer_id : a.interpreter_id);
  if (value === 'contact_problem') {
    await openCase(c, ctx, { type: 'CONTACT_PROBLEM', jobId: job.id, partyId, summary: `${job.code}: ${isInterp ? 'tercüman' : 'müşteri'} görüşmede sorun bildirdi` });
    return;
  }
  if (other && other.value !== value && [other.value, value].includes('contacted')) {
    // Çelişki: açıklama istenir; çözülemezse istisna.
    await openCase(c, ctx, { type: 'CONTACT_PROBLEM', jobId: job.id, summary: `${job.code}: taraflar görüşme konusunda farklı yanıt verdi` });
  }
  if (value === 'contacted') {
    await cancelTasks(c, { jobId: job.id, types: ['contact_reminder', 'contact_escalate'] }, 'Görüşme doğrulandı');
    const { version } = await loadPolicy(c);
    const prof = await one(c, 'SELECT timezone FROM interpreter_profiles WHERE party_id=$1', [a.interpreter_id]);
    await scheduleTask(c, ctx, { type: 'agreement_check', jobId: job.id, businessVersion: job.version, policyVersion: version, dueAt: nextMorning(ctx.clock.now(), prof?.timezone ?? 'Europe/Istanbul') });
  }
}

// ---------- Kesinleşme kontrolü (5.6 ikinci kontrol) ----------

export async function sendAgreementCheck(c: C, ctx: Ctx, job: any, occurrence: number): Promise<void> {
  const a = await assignmentOf(c, job);
  if (!a) return;
  for (const pid of [a.interpreter_id, job.customer_id]) {
    const prev = await latest(c, job.id, 'AGREEMENT', pid);
    if (prev && prev.value !== 'talking') continue;
    await sendWa(c, ctx, {
      partyId: pid, jobId: job.id, jobVersion: job.version, key: 'agreement_check', proactive: true, requireVersion: true,
      vars: { job_code: job.code },
      buttons: [
        { id: `agree:yes:${job.id}:${job.version}`, title: 'Kesinleşti' },
        { id: `agree:talking:${job.id}:${job.version}`, title: 'Görüşüyoruz' },
        { id: `agree:no:${job.id}:${job.version}`, title: 'Vazgeçildi' },
      ],
    });
  }
  const { version } = await loadPolicy(c);
  const prof = await one(c, 'SELECT timezone FROM interpreter_profiles WHERE party_id=$1', [a.interpreter_id]);
  const tz = prof?.timezone ?? 'Europe/Istanbul';
  if (occurrence < 2) {
    await scheduleTask(c, ctx, { type: 'agreement_check', jobId: job.id, businessVersion: job.version, policyVersion: version, occurrence: occurrence + 1, dueAt: nextMorning(addDays2(ctx.clock.now()), tz) });
  } else {
    await scheduleTask(c, ctx, { type: 'outcome_unverified', jobId: job.id, businessVersion: job.version, policyVersion: version, dueAt: nextMorning(addDays2(ctx.clock.now()), tz) });
  }
}

function addDays2(d: Date): Date {
  return new Date(d.getTime() + 24 * 3600_000);
}

export async function recordAgreement(c: C, ctx: Ctx, jobIn: any, partyId: string, value: 'yes' | 'talking' | 'no', source: string): Promise<void> {
  const job = await lockJob(c, jobIn.id);
  const a = await assignmentOf(c, job);
  if (!a || job.status !== 'NEGOTIATING') return;
  const isInterp = partyId === a.interpreter_id;
  await confirm(c, ctx, job, 'AGREEMENT', job.version, partyId, value, source);
  const other = await latest(c, job.id, 'AGREEMENT', isInterp ? job.customer_id : a.interpreter_id);
  if (other && ((other.value === 'yes' && value === 'no') || (other.value === 'no' && value === 'yes'))) {
    await openCase(c, ctx, { type: 'AGREEMENT_CONFLICT', jobId: job.id, severity: 'HIGH', summary: `${job.code}: bir taraf "kesinleşti", diğeri "vazgeçildi" dedi; iş kesinleşmedi` });
    return;                                                                                   // T16
  }
  if (value === 'no') {
    if (other?.value === 'no') {
      await cancelJob(c, ctx, job.id, 'system', 'İki taraf da işin gerçekleşmeyeceğini bildirdi');
    } else {
      await openCase(c, ctx, { type: 'AGREEMENT_CONFLICT', jobId: job.id, summary: `${job.code}: ${isInterp ? 'tercüman' : 'müşteri'} işin gerçekleşmeyeceğini bildirdi; karşı taraf yanıtı bekleniyor` });
    }
    return;
  }
  if (value === 'yes') {
    const terms = await one(c, `SELECT * FROM booking_terms WHERE job_id=$1 ORDER BY terms_version DESC LIMIT 1`, [job.id]);
    if (isInterp && !terms) {
      const link = await createActionToken(c, ctx, { partyId, jobId: job.id, jobVersion: job.version, action: 'propose_terms', entityId: a.id, ttlHours: 24 * 7 });
      await sendWa(c, ctx, { partyId, jobId: job.id, jobVersion: job.version, key: 'terms_request', vars: { job_code: job.code, secure_link: link } });
    } else if (!isInterp && terms) {
      await sendTermsConfirmation(c, ctx, job, terms);
    } else if (!isInterp) {
      await sendWa(c, ctx, { partyId, jobId: job.id, key: 'status_update', vars: { job_code: job.code, status_text: 'Teşekkürler. Tercümanın bildireceği tarih ve ücret özetini onayınıza göndereceğiz.' } });
    }
  }
}

// ---------- İş şartları (ProposeBookingTerms / ConfirmBookingTerms) ----------

export async function proposeTerms(c: C, ctx: Ctx, tokenRow: any, input: { dailyRate: string; currency: string; days: string[]; expenses: string }): Promise<void> {
  const job = await lockJob(c, tokenRow.job_id);
  if (job.version !== tokenRow.job_version) throw new CommandError('STALE', 'İş bilgileri değişti; bu bağlantı eski sürüme ait.');
  if (job.status !== 'NEGOTIATING') throw new CommandError('STATE', 'Bu iş için şart bildirimi şu anda beklenmiyor.');
  const a = await assignmentOf(c, job);
  if (!a || a.interpreter_id !== tokenRow.party_id) throw new CommandError('FORBIDDEN', 'Bu bağlantı size ait değil.');
  const currency = input.currency.toUpperCase();
  const rate = parseAmount(input.dailyRate, currency);
  const days = [...new Set(input.days.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort();
  if (!days.length) throw new CommandError('DAYS', 'En az bir hizmet günü seçin.');
  const n = (await one(c, `SELECT coalesce(max(terms_version),0)+1 AS n FROM booking_terms WHERE job_id=$1`, [job.id])).n;
  const terms = await one(
    c,
    `INSERT INTO booking_terms (job_id, assignment_id, terms_version, daily_rate_minor, currency, service_days, expenses_note, proposed_by, created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
    [job.id, a.id, n, rate, currency, days, input.expenses.slice(0, 500), tokenRow.party_id, ctx.clock.now()],
  );
  await confirm(c, ctx, job, 'BOOKING_TERMS', n, tokenRow.party_id, 'YES', `action_token:${tokenRow.id}`, { daily_rate_minor: rate, currency, days });
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [tokenRow.id, ctx.clock.now()]);
  await sendTermsConfirmation(c, ctx, job, terms);
}

async function sendTermsConfirmation(c: C, ctx: Ctx, job: any, terms: any): Promise<void> {
  const link = await createActionToken(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, action: 'confirm_terms', entityId: terms.id, ttlHours: 24 * 7 });
  await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'terms_confirm_request', vars: { job_code: job.code, secure_confirmation_link: link } });
}

export async function confirmTerms(c: C, ctx: Ctx, tokenRow: any, yes: boolean): Promise<void> {
  const job = await lockJob(c, tokenRow.job_id);
  if (job.version !== tokenRow.job_version) throw new CommandError('STALE', 'İş bilgileri değişti; bu onay eski sürüme ait.');
  const terms = await one(c, 'SELECT * FROM booking_terms WHERE id=$1', [tokenRow.entity_id]);
  const latestTerms = await one(c, `SELECT id FROM booking_terms WHERE job_id=$1 ORDER BY terms_version DESC LIMIT 1`, [job.id]);
  if (!terms || latestTerms.id !== terms.id) throw new CommandError('STALE', 'Bu özetin daha yeni bir sürümü var.');
  if (job.status !== 'NEGOTIATING') throw new CommandError('STATE', 'Bu iş için onay şu anda beklenmiyor.');
  await confirm(c, ctx, job, 'BOOKING_TERMS', terms.terms_version, tokenRow.party_id, yes ? 'YES' : 'NO', `action_token:${tokenRow.id}`);
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [tokenRow.id, ctx.clock.now()]);
  if (!yes) {
    await openCase(c, ctx, { type: 'AGREEMENT_CONFLICT', jobId: job.id, severity: 'HIGH', summary: `${job.code}: müşteri tercümanın bildirdiği şartları onaylamadı` });
    return;
  }
  const interp = await latest(c, job.id, 'BOOKING_TERMS', terms.proposed_by, terms.terms_version);
  if (interp?.value === 'YES') await confirmBooking(c, ctx, job, terms);
}

async function confirmBooking(c: C, ctx: Ctx, job: any, terms: any): Promise<void> {
  const a = await assignmentOf(c, job);
  const days: string[] = terms.service_days;
  const start = days[0];
  const end = days[days.length - 1];
  let j = job;
  if (start !== job.start_date || end !== job.end_date || JSON.stringify(days) !== JSON.stringify(job.service_days)) {
    j = await one(c, `UPDATE jobs SET start_date=$2, end_date=$3, service_days=$4, updated_at=$5 WHERE id=$1 RETURNING *`, [job.id, start, end, days, ctx.clock.now()]);
    await c.query(`UPDATE reservations SET status='RELEASED' WHERE assignment_id=$1 AND status IN ('HOLD','BOOKED')`, [a.id]);
    await c.query('SAVEPOINT book');
    try {
      await c.query(`INSERT INTO reservations (interpreter_id, assignment_id, period, status, created_at) VALUES ($1,$2,daterange($3::date,$4::date,'[]'),'BOOKED',$5)`, [a.interpreter_id, a.id, start, end, ctx.clock.now()]);
      await c.query('RELEASE SAVEPOINT book');
    } catch (e: any) {
      await c.query('ROLLBACK TO SAVEPOINT book');
      if (e.code !== '23P01') throw e;
      await openCase(c, ctx, { type: 'RESERVATION_CONFLICT', jobId: job.id, severity: 'HIGH', summary: `${job.code}: kesinleşen tarihler tercümanın başka bir rezervasyonuyla çakışıyor` });
      return;
    }
  } else {
    await c.query(`UPDATE reservations SET status='BOOKED', hold_expires_at=NULL WHERE assignment_id=$1 AND status='HOLD'`, [a.id]);
  }
  await c.query(`UPDATE assignments SET status='BOOKED' WHERE id=$1`, [a.id]);
  j = await transition(c, ctx, j, 'CONFIRMED', 'system', `booking_terms:v${terms.terms_version} iki tarafça doğrulandı`);
  await resolveCases(c, ctx, { jobId: job.id, type: 'AGREEMENT_CONFLICT' }, 'Şartlar iki tarafça doğrulandı');
  await cancelTasks(c, { jobId: job.id, types: ['agreement_check', 'outcome_unverified', 'hold_expiry'] }, 'İş kesinleşti');
  for (const pid of [a.interpreter_id, job.customer_id]) {
    await sendWa(c, ctx, { partyId: pid, jobId: job.id, key: 'booking_confirmed', critical: true, vars: { job_code: job.code, date_range: formatRangeTr(start, end) } });
  }
  await scheduleServiceTasks(c, ctx, j);
  const acc = await one(c, `SELECT id FROM commission_accounts WHERE assignment_id=$1`, [a.id]);
  if (acc) await accrueCommission(c, ctx, acc.id, 'BOOKING_CONFIRMED');
}

async function scheduleServiceTasks(c: C, ctx: Ctx, j: any): Promise<void> {
  const { version } = await loadPolicy(c);
  const tz = serviceTimezone(j);
  const now = ctx.clock.now();
  const reminder = atLocal(addDays(j.start_date, -1), 10, tz);
  if (reminder > now) await scheduleTask(c, ctx, { type: 'service_reminder', jobId: j.id, businessVersion: j.version, policyVersion: version, dueAt: reminder });
  await scheduleTask(c, ctx, { type: 'start_check', jobId: j.id, businessVersion: j.version, policyVersion: version, dueAt: atLocal(j.start_date, 12, tz) });
  await scheduleTask(c, ctx, { type: 'completion_start', jobId: j.id, businessVersion: j.version, policyVersion: version, dueAt: atLocal(addDays(j.end_date, 1), 9, tz) });
}

// ---------- Başlangıç ve tamamlanma ----------

export async function recordStart(c: C, ctx: Ctx, jobIn: any, partyId: string, yes: boolean, source: string): Promise<void> {
  const job = await lockJob(c, jobIn.id);
  await confirm(c, ctx, job, 'SERVICE_START', job.version, partyId, yes ? 'YES' : 'NO', source);
  if (yes && job.status === 'CONFIRMED') await transition(c, ctx, job, 'IN_PROGRESS', `party:${partyId}`, source);
  if (!yes) await openCase(c, ctx, { type: 'COMPLETION_UNVERIFIED', jobId: job.id, summary: `${job.code}: planlanan başlangıç gününde hizmetin başlamadığı bildirildi` });
}

export async function beginCompletion(c: C, ctx: Ctx, jobIn: any): Promise<void> {
  const job = await lockJob(c, jobIn.id);
  if (!['CONFIRMED', 'IN_PROGRESS'].includes(job.status)) return;
  // Takvim tarihinin geçmesi gerçekleşme kanıtı değildir (T21).
  const j = await transition(c, ctx, job, 'COMPLETION_PENDING', 'system:scheduler', 'Planlanan bitiş geçti');
  await requestCompletionReport(c, ctx, j);
  const { policy, version } = await loadPolicy(c);
  await scheduleTask(c, ctx, { type: 'completion_followup', jobId: j.id, businessVersion: j.version, policyVersion: version, dueAt: new Date(ctx.clock.now().getTime() + policy.completionSecondFollowupHours * 3600_000) });
}

async function requestCompletionReport(c: C, ctx: Ctx, j: any): Promise<void> {
  const a = await assignmentOf(c, j);
  const link = await createActionToken(c, ctx, { partyId: a.interpreter_id, jobId: j.id, jobVersion: j.version, action: 'report_completion', entityId: a.id, ttlHours: 24 * 14 });
  await sendWa(c, ctx, { partyId: a.interpreter_id, jobId: j.id, jobVersion: j.version, key: 'completion_report_request', proactive: true, vars: { job_code: j.code, secure_link: link } });
}

export async function completionFollowup(c: C, ctx: Ctx, job: any, occurrence: number): Promise<void> {
  if (job.status !== 'COMPLETION_PENDING') return;
  if (occurrence === 1) {
    const reported = await one(c, `SELECT 1 FROM confirmations WHERE job_id=$1 AND subject='COMPLETION'`, [job.id]);
    if (!reported) await requestCompletionReport(c, ctx, job);
    const { policy, version } = await loadPolicy(c);
    await scheduleTask(c, ctx, { type: 'completion_followup', jobId: job.id, businessVersion: job.version, policyVersion: version, occurrence: 2, dueAt: new Date(ctx.clock.now().getTime() + policy.completionSecondFollowupHours * 3600_000) });
  } else {
    await openCase(c, ctx, { type: 'COMPLETION_UNVERIFIED', jobId: job.id, summary: `${job.code}: hizmetin gerçekleştiği iki takipten sonra doğrulanamadı` });
  }
}

export async function reportCompletion(c: C, ctx: Ctx, tokenRow: any, input: { days: string[]; note: string; happened: boolean }): Promise<void> {
  const job = await lockJob(c, tokenRow.job_id);
  if (job.status !== 'COMPLETION_PENDING') throw new CommandError('STATE', 'Bu iş için sonuç bildirimi şu anda beklenmiyor.');
  if (job.version !== tokenRow.job_version) throw new CommandError('STALE', 'Bu bağlantı eski sürüme ait.');
  const days = [...new Set(input.days.filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort();
  if (input.happened && !days.length) throw new CommandError('DAYS', 'Çalışılan en az bir gün seçin.');
  const n = (await one(c, `SELECT count(*)::int AS n FROM confirmations WHERE job_id=$1 AND subject='COMPLETION' AND party_id=$2`, [job.id, tokenRow.party_id])).n + 1;
  await confirm(c, ctx, job, 'COMPLETION', n, tokenRow.party_id, input.happened ? 'YES' : 'NO', `action_token:${tokenRow.id}`, { days, note: input.note.slice(0, 500) });
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [tokenRow.id, ctx.clock.now()]);
  if (!input.happened) {
    await openCase(c, ctx, { type: 'COMPLETION_DISPUTE', jobId: job.id, severity: 'HIGH', summary: `${job.code}: tercüman hizmetin gerçekleşmediğini bildirdi` });
    return;
  }
  const link = await createActionToken(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, action: 'confirm_completion', entityId: tokenRow.entity_id, ttlHours: 24 * 14 });
  await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'completion_check', proactive: true, vars: { job_code: job.code, secure_link: link } });
}

export async function latestCompletionReport(c: C | any, jobId: string): Promise<any> {
  return one(c, `SELECT cf.* FROM confirmations cf JOIN assignments a ON a.interpreter_id = cf.party_id AND a.job_id = cf.job_id AND a.active
                  WHERE cf.job_id=$1 AND cf.subject='COMPLETION' ORDER BY cf.created_at DESC LIMIT 1`, [jobId]);
}

export async function confirmCompletion(c: C, ctx: Ctx, tokenRow: any, yes: boolean, note: string): Promise<void> {
  const job = await lockJob(c, tokenRow.job_id);
  if (job.status !== 'COMPLETION_PENDING') throw new CommandError('STATE', 'Bu iş için onay şu anda beklenmiyor.');
  const report = await latestCompletionReport(c, job.id);
  if (!report) throw new CommandError('STATE', 'Tercümanın bildirimi bulunamadı.');
  await confirm(c, ctx, job, 'COMPLETION', report.subject_version, tokenRow.party_id, yes ? 'YES' : 'NO', `action_token:${tokenRow.id}`, { days: report.detail.days, note: note.slice(0, 500) });
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [tokenRow.id, ctx.clock.now()]);
  if (!yes) {
    await openCase(c, ctx, { type: 'COMPLETION_DISPUTE', jobId: job.id, severity: 'HIGH', summary: `${job.code}: müşteri tercümanın bildirdiği çalışılan günleri onaylamadı${note ? ': ' + note.slice(0, 120) : ''}` });
    return;
  }
  const days: string[] = report.detail.days;
  const seg = await one(c, `SELECT id FROM service_segments WHERE job_id=$1 ORDER BY created_at DESC LIMIT 1`, [job.id]);
  if (seg) await c.query(`UPDATE service_segments SET verified_days=$2 WHERE id=$1`, [seg.id, days]);
  const a = await assignmentOf(c, job);
  await c.query(`UPDATE assignments SET status='COMPLETED' WHERE id=$1`, [a.id]);
  await transition(c, ctx, job, 'COMPLETED', `party:${tokenRow.party_id}`, `Gerçekleşen ${days.length} gün iki tarafça doğrulandı`);
  await cancelTasks(c, { jobId: job.id, types: ['completion_followup', 'start_check', 'service_reminder'] }, 'Tamamlandı');
  await resolveCases(c, ctx, { jobId: job.id, type: 'COMPLETION_UNVERIFIED' }, 'Tamamlanma doğrulandı');
  const acc = await one(c, `SELECT * FROM commission_accounts WHERE assignment_id=$1`, [a.id]);
  if (acc) {
    if (acc.accrual_status === 'ACCRUED') {
      // Gün sayısı değiştiyse otomatik yeniden yazılmaz; finans düzeltmesi için istisna (T22).
      const planned = job.service_days?.length ?? 0;
      if (planned !== days.length) {
        await openCase(c, ctx, { type: 'COMPLETION_DISPUTE', jobId: job.id, summary: `${job.code}: gerçekleşen gün (${days.length}) planlanandan (${planned}) farklı; tahakkuk düzeltmesi gerekebilir` });
      }
    } else {
      await accrueCommission(c, ctx, acc.id, 'SERVICE_COMPLETED');
    }
  }
}

// ---------- İptal, devralma, değişiklik ----------

export async function cancelJob(c: C, ctx: Ctx, jobId: string, actor: string, reason: string): Promise<void> {
  const job = await lockJob(c, jobId);
  if (job.status === 'CANCELLED' || job.status === 'COMPLETED') throw new CommandError('STATE', 'Bu iş iptal edilemez.');
  await cancelTasks(c, { jobId: job.id }, `İptal: ${reason}`);
  await c.query(`UPDATE outbox SET status='SKIPPED', last_error='İş iptal edildi' WHERE job_id=$1 AND status='PENDING' AND action='whatsapp.send'`, [job.id]);
  await c.query(`UPDATE interpreter_inquiries SET status='CLOSED', close_reason='İş iptal edildi' WHERE job_id=$1 AND status IN ('QUEUED','SENT','AVAILABLE')`, [job.id]);
  const a = await assignmentOf(c, job);
  if (a) {
    await c.query(`UPDATE assignments SET status='CANCELLED', active=false WHERE id=$1`, [a.id]);
    await c.query(`UPDATE reservations SET status='RELEASED' WHERE assignment_id=$1 AND status IN ('HOLD','BOOKED')`, [a.id]);
  }
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE job_id=$1 AND used_at IS NULL`, [job.id, ctx.clock.now()]);
  const j = await transition(c, ctx, job, 'CANCELLED', actor, reason);
  await audit(c, ctx, { actor, command: 'CancelJob', jobId: job.id, evidence: reason });
  await voidOrFlagOnCancel(c, ctx, j);
  const notify = [job.customer_id, ...(a ? [a.interpreter_id] : [])];
  for (const pid of notify) await sendWa(c, ctx, { partyId: pid, jobId: job.id, key: 'cancelled', vars: { job_code: job.code }, critical: true, bypassAutomation: true });
}

export async function setAutomationMode(c: C, ctx: Ctx, jobId: string, mode: 'AUTO' | 'HUMAN_TAKEOVER' | 'PAUSED', actor: string, reason: string): Promise<void> {
  const job = await lockJob(c, jobId);
  if (job.automation_mode === mode) return;
  await c.query(`UPDATE jobs SET automation_mode=$2, updated_at=$3 WHERE id=$1`, [job.id, mode, ctx.clock.now()]);
  await audit(c, ctx, { actor, command: mode === 'AUTO' ? 'ResumeAutomation' : 'PauseAutomation', jobId: job.id, oldState: job.automation_mode, newState: mode, evidence: reason });
  if (mode !== 'AUTO') {
    // Bot yanıtları ve proaktif görevler bu iş için durur (T34).
    await cancelTasks(c, { jobId: job.id }, `Otomasyon durduruldu: ${mode}`);
    await c.query(`UPDATE outbox SET status='SKIPPED', last_error='Otomasyon durduruldu' WHERE job_id=$1 AND status='PENDING' AND action='whatsapp.send' AND NOT (payload->>'bypassAutomation')::boolean IS TRUE`, [job.id]);
    return;
  }
  // Devralma geri alınırken geçmiş mesajlar yeniden gönderilmez; yalnızca hâlâ gerekli SONRAKİ eylem planlanır.
  const j = await one(c, 'SELECT * FROM jobs WHERE id=$1', [job.id]);
  await rescheduleNextAction(c, ctx, j);
}

export async function rescheduleNextAction(c: C, ctx: Ctx, j: any): Promise<void> {
  const { version } = await loadPolicy(c);
  const now = ctx.clock.now();
  const occ = Math.floor(now.getTime() / 1000);
  const t = (type: string, dueAt: Date) => scheduleTask(c, ctx, { type, jobId: j.id, businessVersion: j.version, policyVersion: version, occurrence: occ, dueAt });
  switch (j.status) {
    case 'INFO_PENDING': await t('info_reminder', addWorkingHours(now, 1, 'Europe/Istanbul')); break;
    case 'MATCHING': {
      const qs = await many(c, `SELECT * FROM interpreter_inquiries WHERE job_id=$1 AND job_version=$2 AND status IN ('SENT','AVAILABLE')`, [j.id, j.version]);
      for (const q of qs) {
        if (new Date(q.deadline_at) <= now) await scheduleTask(c, ctx, { type: 'inquiry_expire', jobId: j.id, entityId: q.id, businessVersion: j.version, policyVersion: version, occurrence: occ, dueAt: now });
        else await scheduleTask(c, ctx, { type: 'inquiry_expire', jobId: j.id, entityId: q.id, businessVersion: j.version, policyVersion: version, occurrence: occ, dueAt: new Date(q.deadline_at) });
      }
      await continueMatching(c, ctx, j);
      break;
    }
    case 'NEGOTIATING': await t('agreement_check', nextMorning(now, 'Europe/Istanbul')); break;
    case 'CONFIRMED': case 'IN_PROGRESS': {
      const tz = serviceTimezone(j);
      await t('completion_start', new Date(Math.max(now.getTime(), atLocal(addDays(j.end_date, 1), 9, tz).getTime())));
      break;
    }
    case 'COMPLETION_PENDING': await t('completion_followup', addWorkingHours(now, 2, 'Europe/Istanbul')); break;
  }
}

/**
 * RequestJobChange (T17). Atama yoksa talep güncellenir ve müşteriye yeniden doğrulatılır.
 * Atama varsa değişiklik TASLAĞI açılır: sürüm artar (eski bağlantılar geçersiz), mevcut tarihler ve rezervasyon
 * değişiklik iki tarafça onaylanana kadar korunur.
 */
export async function requestJobChange(c: C, ctx: Ctx, jobId: string, change: { start_date?: string; end_date?: string; city?: string }, actor: string): Promise<void> {
  const job = await lockJob(c, jobId);
  if (!['INFO_PENDING', 'MATCHING', 'HANDOFF_PENDING', 'NEGOTIATING', 'CONFIRMED'].includes(job.status)) {
    throw new CommandError('STATE', 'Bu aşamada değişiklik başlatılamaz.');
  }
  const start = change.start_date || job.start_date;
  const end = change.end_date || job.end_date;
  if (!start || !end || end < start) throw new CommandError('DATES', 'Geçersiz tarih aralığı');
  const now = ctx.clock.now();
  if (!job.current_assignment_id) {
    let j = await one(
      c,
      `UPDATE jobs SET start_date=$2, end_date=$3, service_days=$4, city=coalesce($5, city), version=version+1, summary_confirmed_at=NULL,
         pending_question='SUMMARY', updated_at=$6 WHERE id=$1 RETURNING *`,
      [job.id, start, end, dayRange(start, end), change.city ?? null, now],
    );
    await audit(c, ctx, { actor, command: 'RequestJobChange', jobId: job.id, oldState: `v${job.version}`, newState: `v${j.version}`, jobVersion: j.version, detail: change });
    await cancelTasks(c, { jobId: job.id, types: ['inquiry_reminder', 'inquiry_expire'] }, 'İş değişikliği');
    await c.query(`UPDATE interpreter_inquiries SET status='CLOSED', close_reason='İş sürümü değişti' WHERE job_id=$1 AND job_version<$2 AND status IN ('QUEUED','SENT','AVAILABLE')`, [job.id, j.version]);
    if (j.status === 'MATCHING') j = await transition(c, ctx, j, 'INFO_PENDING', actor, 'Değişiklik müşteri doğrulaması bekliyor');
    await enqueueCalendarSync(c, ctx, job.id);
    await askSummary(c, ctx, j);
    return;
  }
  const draft = { start_date: start, end_date: end, city: change.city ?? null, requested_by: actor, requested_at: now.toISOString() };
  const j = await one(
    c,
    `UPDATE jobs SET version=version+1, extraction = extraction || jsonb_build_object('change_draft', $2::jsonb), updated_at=$3 WHERE id=$1 RETURNING *`,
    [job.id, JSON.stringify(draft), now],
  );
  await audit(c, ctx, { actor, command: 'RequestJobChange', jobId: job.id, oldState: `v${job.version}`, newState: `v${j.version}`, jobVersion: j.version, detail: draft });
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE job_id=$1 AND used_at IS NULL AND job_version < $3`, [job.id, now, j.version]);
  const summary = `${change.city ?? job.city}, ${formatRangeTr(start, end)}, ${dayRange(start, end).length} gün`;
  await sendWa(c, ctx, {
    partyId: job.customer_id, jobId: job.id, jobVersion: j.version, key: 'job_change_summary', vars: { job_code: job.code, summary },
    buttons: [{ id: `chg:yes:${job.id}:${j.version}`, title: 'Evet, doğru' }, { id: `chg:no:${job.id}:${j.version}`, title: 'Hayır' }],
  });
}

export async function answerChange(c: C, ctx: Ctx, jobIn: any, yes: boolean, version: number, source: string): Promise<void> {
  const job = await lockJob(c, jobIn.id);
  const draft = job.extraction?.change_draft;
  if (!draft || job.version !== version) {
    await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, key: 'stale_action', vars: { job_code: job.code } });
    return;
  }
  await confirm(c, ctx, job, 'JOB_CHANGE', job.version, job.customer_id, yes ? 'YES' : 'NO', source, draft);
  if (!yes) {
    await c.query(`UPDATE jobs SET extraction = extraction - 'change_draft' WHERE id=$1`, [job.id]);
    await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, key: 'status_update', vars: { job_code: job.code, status_text: 'Değişiklik uygulanmadı; mevcut tarihler geçerli.' } });
    return;
  }
  const a = await assignmentOf(c, job);
  const now = ctx.clock.now();
  const prof = await one(c, 'SELECT timezone FROM interpreter_profiles WHERE party_id=$1', [a.interpreter_id]);
  const { policy, version: pv } = await loadPolicy(c);
  const deadline = addWorkingHours(now, policy.interpreterExpireWorkingHours, prof?.timezone ?? 'Europe/Istanbul');
  const q = await one(
    c,
    `INSERT INTO interpreter_inquiries (job_id, job_version, interpreter_id, rank, status, sent_at, deadline_at, created_at)
     VALUES ($1,$2,$3,0,'SENT',$4,$5,$4) ON CONFLICT (job_id, job_version, interpreter_id) DO NOTHING RETURNING *`,
    [job.id, job.version, a.interpreter_id, now, deadline],
  );
  if (!q) return;
  await sendWa(c, ctx, {
    partyId: a.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'availability_request', requireVersion: true,
    vars: { job_code: job.code, city: draft.city ?? job.city ?? '—', date_range: formatRangeTr(draft.start_date, draft.end_date), service_type: 'DEĞİŞİKLİK: aynı iş, yeni tarih', detail: `Eski tarihler: ${formatRangeTr(job.start_date, job.end_date)}.` },
    buttons: [
      { id: `av:yes:${q.id}:${job.version}`, title: 'Müsaitim' },
      { id: `av:no:${q.id}:${job.version}`, title: 'Uygun değilim' },
      { id: `av:cond:${q.id}:${job.version}`, title: 'Şartım var' },
    ],
  });
  await scheduleTask(c, ctx, { type: 'inquiry_expire', jobId: job.id, entityId: q.id, businessVersion: job.version, policyVersion: pv, dueAt: deadline });
}

/** ConfirmJobChange: atanmış tercüman yeni tarihlere müsait dediğinde. */
export async function applyJobChange(c: C, ctx: Ctx, job: any, q: any): Promise<void> {
  const draft = job.extraction.change_draft;
  const a = await assignmentOf(c, job);
  const now = ctx.clock.now();
  const kind = a.status === 'BOOKED' ? 'BOOKED' : 'HOLD';
  await c.query(`UPDATE reservations SET status='RELEASED' WHERE assignment_id=$1 AND status IN ('HOLD','BOOKED')`, [a.id]);
  await c.query('SAVEPOINT chg');
  try {
    await c.query(
      `INSERT INTO reservations (interpreter_id, assignment_id, period, status, hold_expires_at, created_at) VALUES ($1,$2,daterange($3::date,$4::date,'[]'),$5,$6,$7)`,
      [a.interpreter_id, a.id, draft.start_date, draft.end_date, kind, kind === 'HOLD' ? new Date(now.getTime() + 7 * 86400_000) : null, now],
    );
    await c.query('RELEASE SAVEPOINT chg');
  } catch (e: any) {
    await c.query('ROLLBACK TO SAVEPOINT chg');
    if (e.code !== '23P01') throw e;
    await c.query(`UPDATE reservations SET status=$2 WHERE id = (SELECT id FROM reservations WHERE assignment_id=$1 ORDER BY created_at DESC LIMIT 1)`, [a.id, kind]);
    await openCase(c, ctx, { type: 'CHANGE_DECLINED', jobId: job.id, severity: 'HIGH', summary: `${job.code}: yeni tarihler tercümanın başka bir rezervasyonuyla çakışıyor; eski rezervasyon korunuyor` });
    return;
  }
  await c.query(`UPDATE interpreter_inquiries SET status='CLOSED', close_reason='Değişiklik uygulandı' WHERE id=$1`, [q.id]);
  const j = await one(
    c,
    `UPDATE jobs SET start_date=$2, end_date=$3, service_days=$4, city=coalesce($5, city), version=version+1,
       extraction = extraction - 'change_draft', updated_at=$6 WHERE id=$1 RETURNING *`,
    [job.id, draft.start_date, draft.end_date, dayRange(draft.start_date, draft.end_date), draft.city, now],
  );
  await c.query(`INSERT INTO service_segments (job_id, job_version, city, timezone, planned_days, created_at) VALUES ($1,$2,$3,$4,$5,$6)`, [j.id, j.version, j.city, serviceTimezone(j), j.service_days, now]);
  await audit(c, ctx, { actor: `party:${q.interpreter_id}`, command: 'ConfirmJobChange', jobId: job.id, oldState: `v${job.version}`, newState: `v${j.version}`, jobVersion: j.version, detail: draft });
  await cancelTasks(c, { jobId: job.id, types: ['service_reminder', 'start_check', 'completion_start', 'inquiry_expire'] }, 'Tarih değişti');
  if (['CONFIRMED', 'IN_PROGRESS'].includes(j.status)) await scheduleServiceTasks(c, ctx, j);
  await enqueueCalendarSync(c, ctx, j.id);
  for (const pid of [job.customer_id, q.interpreter_id]) {
    await sendWa(c, ctx, { partyId: pid, jobId: j.id, key: 'status_update', critical: true, vars: { job_code: j.code, status_text: `Tarih değişikliği iki tarafça onaylandı. Yeni tarihler: ${formatRangeTr(j.start_date, j.end_date)}.` } });
  }
}

export async function rejectJobChange(c: C, ctx: Ctx, job: any, q: any, text: string): Promise<void> {
  await c.query(`UPDATE jobs SET extraction = extraction - 'change_draft' WHERE id=$1`, [job.id]);
  await openCase(c, ctx, { type: 'CHANGE_DECLINED', jobId: job.id, severity: 'HIGH', summary: `${job.code}: tercüman yeni tarihleri kabul etmedi${text ? ` ("${text.slice(0, 100)}")` : ''}; eski rezervasyon korunuyor` });
  await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, key: 'status_update', critical: true, vars: { job_code: job.code, status_text: 'Tercümanımız yeni tarihleri henüz onaylamadı; mevcut tarihler geçerli. Yetkilimiz sizinle iletişime geçecek.' } });
}

export async function sendAdminMessage(c: C, ctx: Ctx, jobId: string, partyId: string, body: string, actor: string): Promise<void> {
  const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [jobId]);
  const conv = await one(c, `SELECT last_inbound_at FROM conversations WHERE party_id=$1 AND channel='WHATSAPP'`, [partyId]);
  if (!conv?.last_inbound_at || ctx.clock.now().getTime() - new Date(conv.last_inbound_at).getTime() > 24 * 3600_000) {
    throw new CommandError('WINDOW_CLOSED', '24 saatlik mesaj penceresi kapalı; serbest metin gönderilemez. Onaylı şablon gerekir.');
  }
  await sendWa(c, ctx, { partyId, jobId, key: 'free_text', vars: { body }, adminInitiated: true, bypassAutomation: true });
  await audit(c, ctx, { actor, command: 'AdminMessage', jobId: job.id, entityType: 'party', entityId: partyId, evidence: body.slice(0, 200) });
}

export async function handleHoldExpiry(c: C, ctx: Ctx, job: any): Promise<void> {
  if (job.status !== 'NEGOTIATING') return;
  await openCase(c, ctx, { type: 'HOLD_EXPIRED', jobId: job.id, summary: `${job.code}: geçici rezervasyon süresi doldu; iş hâlâ kesinleşmedi. Rezervasyon kesin sayılmadı.` });
}

export async function interpreterLabel(c: C, job: any): Promise<string | null> {
  const a = await assignmentOf(c, job);
  return a ? partyName(c, a.interpreter_id) : null;
}
