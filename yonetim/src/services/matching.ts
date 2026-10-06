// Bölüm 5.3–5.5: aday sıralaması, sırayla müsaitlik sorgusu, yönlendirme kabulü, tek atama, iletişim devri.
import { many, one } from '../core/db.js';
import { addWorkingHours, addDays, formatRangeTr, localDate } from '../core/time.js';
import { SERVICE_LABELS, type ServiceType } from '../domain/extract.js';
import {
  audit, cancelTasks, CommandError, createActionToken, hasConsent, loadPolicy, lockJob, openCase, partyName,
  resolveCases, scheduleTask, sendWa, transition, type C, type Ctx,
} from './core.js';
import { openCommissionAccount } from './finance.js';
import { applyJobChange, rejectJobChange } from './workflow.js';

export interface Candidate {
  id: string;
  name: string;
  timezone: string;
  cityMatch: boolean;
  priority: number;
  completed: number;
  avgResponseMinutes: number | null;
  reason: string;
}

/** Zorunlu uygunluk filtresi + anlaşılır öncelik sırası (Bölüm 5.3). Eksik veriye puan uydurulmaz. */
export async function rankCandidates(c: C, job: any): Promise<Candidate[]> {
  const rows = await many(
    c,
    `SELECT p.id, p.display_name, ip.timezone, ip.priority,
            ($2::text = ANY(ip.cities)) AS city_match,
            (SELECT count(*)::int FROM assignments a WHERE a.interpreter_id=p.id AND a.status='COMPLETED') AS completed,
            (SELECT avg(extract(epoch FROM (q.responded_at - q.sent_at))/60)::int FROM interpreter_inquiries q
              WHERE q.interpreter_id=p.id AND q.responded_at IS NOT NULL) AS avg_resp
       FROM interpreter_profiles ip JOIN parties p ON p.id = ip.party_id
      WHERE ip.active
        AND $1::text = ANY(ip.services)
        AND ($2::text = ANY(ip.cities) OR $3::text = ANY(ip.travel_countries))
        AND NOT EXISTS (SELECT 1 FROM reservations r WHERE r.interpreter_id=p.id AND r.status IN ('HOLD','BOOKED')
                          AND r.period && daterange($4::date, $5::date, '[]'))
        AND NOT EXISTS (SELECT 1 FROM interpreter_blocks b WHERE b.interpreter_id=p.id AND b.period && daterange($4::date, $5::date, '[]'))
        AND NOT EXISTS (SELECT 1 FROM interpreter_inquiries q WHERE q.job_id=$6 AND q.job_version=$7 AND q.interpreter_id=p.id)
        AND NOT EXISTS (SELECT 1 FROM consents cs WHERE cs.party_id=p.id AND cs.purpose='OPERATIONAL_MESSAGES' AND cs.withdrawn_at IS NULL
                          AND cs.granted = false AND cs.recorded_at = (SELECT max(recorded_at) FROM consents x WHERE x.party_id=p.id AND x.purpose='OPERATIONAL_MESSAGES'))
        AND EXISTS (SELECT 1 FROM contact_endpoints e WHERE e.party_id=p.id AND e.kind='WHATSAPP')`,
    [job.service_type, job.city_key, job.country_code, job.start_date, job.end_date, job.id, job.version],
  );
  const list: Candidate[] = rows.map((r) => ({
    id: r.id, name: r.display_name, timezone: r.timezone, cityMatch: r.city_match, priority: r.priority,
    completed: r.completed, avgResponseMinutes: r.avg_resp,
    reason: [r.city_match ? 'şehir uyumu' : 'seyahat bölgesi', `öncelik ${r.priority}`, `${r.completed} doğrulanmış iş`,
      r.avg_resp != null ? `ort. yanıt ${r.avg_resp} dk` : 'yanıt verisi yok'].join(', '),
  }));
  // doğrudan şehir/hizmet uyumu → yönetici tercihi → doğrulanmış güvenilirlik → yanıt süresi
  list.sort((a, b) =>
    Number(b.cityMatch) - Number(a.cityMatch) || a.priority - b.priority || b.completed - a.completed ||
    (a.avgResponseMinutes ?? Infinity) - (b.avgResponseMinutes ?? Infinity) || a.name.localeCompare(b.name));
  return list;
}

function isUrgent(job: any, ctx: Ctx): boolean {
  const today = localDate(ctx.clock.now(), 'Europe/Istanbul');
  return !!job.start_date && job.start_date <= addDays(today, 1);
}

export async function startMatching(c: C, ctx: Ctx, job: any): Promise<void> {
  await continueMatching(c, ctx, job);
}

/** Gerekli sayıda aktif sorgu yoksa sıradaki adayı sorgular; aday kalmadıysa UNFULFILLED. */
export async function continueMatching(c: C, ctx: Ctx, jobIn: any): Promise<void> {
  const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [jobIn.id]);
  if (job.status !== 'MATCHING' || job.automation_mode !== 'AUTO') return;
  const { policy } = await loadPolicy(c);
  const want = isUrgent(job, ctx) ? policy.urgentParallelInquiries : policy.parallelInquiries;
  const active = await one(
    c,
    `SELECT count(*)::int AS n FROM interpreter_inquiries WHERE job_id=$1 AND job_version=$2 AND status IN ('QUEUED','SENT','AVAILABLE')`,
    [job.id, job.version],
  );
  let open = active.n;
  if (open >= want) return;
  const cands = await rankCandidates(c, job);
  for (const cand of cands) {
    if (open >= want) break;
    await createInquiry(c, ctx, job, cand, open + 1);
    open++;
  }
  if (open === 0) {
    const j = await transition(c, ctx, job, 'UNFULFILLED', 'system', 'Tanımlı aday havuzu tükendi');
    await openCase(c, ctx, {
      type: 'NO_CANDIDATE', jobId: job.id, severity: 'HIGH',
      summary: `${job.code}: ${job.city ?? '—'} / ${formatRangeTr(job.start_date, job.end_date)} için uygun tercüman bulunamadı`,
    });
    await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: j.version, key: 'unfulfilled', vars: { job_code: job.code }, critical: true });
  }
}

async function createInquiry(c: C, ctx: Ctx, job: any, cand: Candidate, rank: number): Promise<void> {
  const { policy, version: pv } = await loadPolicy(c);
  const now = ctx.clock.now();
  const urgent = isUrgent(job, ctx);
  const deadline = addWorkingHours(now, urgent ? policy.urgentInterpreterExpireWorkingHours : policy.interpreterExpireWorkingHours, cand.timezone);
  const q = await one(
    c,
    `INSERT INTO interpreter_inquiries (job_id, job_version, interpreter_id, rank, status, sent_at, deadline_at, created_at)
     VALUES ($1,$2,$3,$4,'SENT',$5,$6,$5) RETURNING *`,
    [job.id, job.version, cand.id, rank, now, deadline],
  );
  await audit(c, ctx, {
    actor: 'system', command: 'CreateInterpreterInquiry', jobId: job.id, entityType: 'inquiry', entityId: q.id, newState: 'SENT',
    jobVersion: job.version, detail: { candidate: cand.name, reason: cand.reason },
  });
  // Müsaitlik sorgusunda müşteri telefonu/adı YOK; yalnızca anonim iş özeti.
  await sendWa(c, ctx, {
    partyId: cand.id, jobId: job.id, jobVersion: job.version, key: 'availability_request', proactive: true, requireVersion: true,
    vars: {
      job_code: job.code, city: job.city ?? job.country_code ?? '—', date_range: formatRangeTr(job.start_date, job.end_date),
      service_type: SERVICE_LABELS[job.service_type as ServiceType] ?? job.service_type,
      detail: job.technical_subject ? `Konu: ${job.technical_subject}.` : '',
    },
    buttons: [
      { id: `av:yes:${q.id}:${job.version}`, title: 'Müsaitim' },
      { id: `av:no:${q.id}:${job.version}`, title: 'Uygun değilim' },
      { id: `av:cond:${q.id}:${job.version}`, title: 'Şartım var' },
    ],
    onFailed: { type: 'inquiry_failed', inquiryId: q.id },
  });
  for (const [occ, h] of [[1, policy.interpreterReminder1WorkingHours], [2, policy.interpreterReminder2WorkingHours]] as const) {
    const due = addWorkingHours(now, h, cand.timezone);
    if (due < deadline) {
      await scheduleTask(c, ctx, { type: 'inquiry_reminder', jobId: job.id, entityId: q.id, targetPartyId: cand.id, businessVersion: job.version, occurrence: occ, policyVersion: pv, dueAt: due });
    }
  }
  await scheduleTask(c, ctx, { type: 'inquiry_expire', jobId: job.id, entityId: q.id, targetPartyId: cand.id, businessVersion: job.version, policyVersion: pv, dueAt: deadline });
}

export type AvailabilityAnswer = 'AVAILABLE' | 'DECLINED' | 'CONDITIONAL' | 'AMBIGUOUS';

/** RecordAvailabilityResponse. */
export async function recordAvailability(c: C, ctx: Ctx, inquiryId: string, version: number | null, answer: AvailabilityAnswer, text: string, source: string): Promise<void> {
  const q0 = await one(c, 'SELECT * FROM interpreter_inquiries WHERE id=$1', [inquiryId]);
  if (!q0) return;
  const job = await lockJob(c, q0.job_id);
  const q = await one(c, 'SELECT * FROM interpreter_inquiries WHERE id=$1 FOR UPDATE', [inquiryId]);
  const reply = (key: string) => sendWa(c, ctx, { partyId: q.interpreter_id, jobId: job.id, key, vars: { job_code: job.code } });

  if (q.status === 'EXPIRED') return void (await reply('assignment_expired'));         // T12
  if (q.status === 'CLOSED' || job.version !== q.job_version || (version != null && version !== q.job_version)) {
    return void (await reply(job.version !== q.job_version ? 'stale_action' : 'inquiry_closed'));
  }
  if (q.status !== 'SENT') return; // aynı yanıtın tekrarı
  const now = ctx.clock.now();
  if (answer === 'AMBIGUOUS') {
    await sendWa(c, ctx, {
      partyId: q.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'availability_clarify', vars: { job_code: job.code },
      buttons: [
        { id: `av:yes:${q.id}:${job.version}`, title: 'Müsaitim' },
        { id: `av:no:${q.id}:${job.version}`, title: 'Uygun değilim' },
        { id: `av:cond:${q.id}:${job.version}`, title: 'Şartım var' },
      ],
    });
    return;
  }
  await c.query(`UPDATE interpreter_inquiries SET status=$2, responded_at=$3, response_text=$4 WHERE id=$1`, [q.id, answer, now, text.slice(0, 1000)]);
  await audit(c, ctx, {
    actor: `party:${q.interpreter_id}`, command: 'RecordAvailabilityResponse', jobId: job.id, entityType: 'inquiry', entityId: q.id,
    oldState: 'SENT', newState: answer, jobVersion: job.version, evidence: source,
  });
  await cancelTasks(c, { entityId: q.id, types: ['inquiry_reminder'] }, `Yanıt: ${answer}`);

  if (job.extraction?.change_draft && job.current_assignment_id) {
    await cancelTasks(c, { entityId: q.id, types: ['inquiry_expire'] }, `Değişiklik yanıtı: ${answer}`);
    if (answer === 'AVAILABLE') await applyJobChange(c, ctx, job, q);
    else await rejectJobChange(c, ctx, job, q, text);
    return;
  }

  if (answer === 'DECLINED') {
    await cancelTasks(c, { entityId: q.id, types: ['inquiry_expire'] }, 'Reddedildi');
    await continueMatching(c, ctx, job);                                                  // T08
  } else if (answer === 'CONDITIONAL') {
    // Şartlı yanıt ayrı bir tekliftir; eski tarih ve ücretle sürdürülmez (T07).
    await cancelTasks(c, { entityId: q.id, types: ['inquiry_expire'] }, 'Şartlı yanıt');
    await openCase(c, ctx, {
      type: 'CONDITIONAL_RESPONSE', jobId: job.id, partyId: q.interpreter_id,
      summary: `${job.code}: ${await partyName(c, q.interpreter_id)} şartlı yanıt verdi: "${text.slice(0, 200)}"`,
    });
    await sendWa(c, ctx, {
      partyId: q.interpreter_id, jobId: job.id, key: 'status_update',
      vars: { job_code: job.code, status_text: 'Şartlı yanıtınızı kaydettik; bu yanıt tüm tarihlerin kabulü sayılmadı. Yetkili değerlendirip size dönecek.' },
    });
    await continueMatching(c, ctx, job);
  } else {
    // Müsaitlik kesin iş, yönlendirme kabulü veya ödeme anlamına gelmez (T06).
    await offerReferral(c, ctx, job, q);
  }
}

export async function activeAgreement(c: C, interpreterId: string): Promise<any> {
  return one(c, `SELECT * FROM commission_agreements WHERE interpreter_id=$1 AND status='ACTIVE'`, [interpreterId]);
}

export async function offerReferral(c: C, ctx: Ctx, job: any, q: any): Promise<void> {
  const agr = await activeAgreement(c, q.interpreter_id);
  if (!agr) {
    // Eksik komisyon kuralı sıfır komisyon değildir; mali taahhüt ve iletişim devri öncesinde istisna.
    await openCase(c, ctx, {
      type: 'COMMISSION_RULE_MISSING', jobId: job.id, partyId: q.interpreter_id, severity: 'HIGH',
      summary: `${job.code}: ${await partyName(c, q.interpreter_id)} müsait, fakat geçerli komisyon anlaşması yok`,
    });
    await sendWa(c, ctx, { partyId: q.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'referral_waiting_terms', vars: { job_code: job.code } });
    return;
  }
  const hours = Math.max(1, Math.ceil((new Date(q.deadline_at).getTime() - ctx.clock.now().getTime()) / 3600_000));
  const link = await createActionToken(c, ctx, { partyId: q.interpreter_id, jobId: job.id, jobVersion: job.version, action: 'accept_referral', entityId: q.id, ttlHours: hours });
  await sendWa(c, ctx, {
    partyId: q.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'referral_acceptance', requireVersion: true,
    vars: { job_code: job.code, secure_terms_link: link },
  });
}

/** Komisyon anlaşması etkinleştiğinde bekleyen müsait sorgulara yönlendirme daveti gönderilir. */
export async function resumeReferralsForInterpreter(c: C, ctx: Ctx, interpreterId: string): Promise<void> {
  const qs = await many(
    c,
    `SELECT q.* FROM interpreter_inquiries q JOIN jobs j ON j.id=q.job_id
      WHERE q.interpreter_id=$1 AND q.status='AVAILABLE' AND q.job_version=j.version AND j.status='MATCHING' AND q.deadline_at > $2`,
    [interpreterId, ctx.clock.now()],
  );
  for (const q of qs) {
    const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [q.job_id]);
    await resolveCases(c, ctx, { jobId: job.id, type: 'COMMISSION_RULE_MISSING' }, 'Komisyon anlaşması etkinleştirildi');
    await offerReferral(c, ctx, job, q);
  }
}

export type AcceptResult = { ok: true; assignmentId: string } | { ok: false; code: string; message: string };

/**
 * AcceptReferral — tek veritabanı işleminde: iş → tercüman sırasıyla kilit, sürüm/süre/çakışma son kontrolü,
 * tek aktif atama, geçici rezervasyon, finans takip kaydı, diğer sorguların kapatılması (T10, T11, T12).
 */
export async function acceptReferral(c: C, ctx: Ctx, tokenRow: any): Promise<AcceptResult> {
  const job = await lockJob(c, tokenRow.job_id);
  await c.query('SELECT id FROM parties WHERE id=$1 FOR UPDATE', [tokenRow.party_id]);
  const q = await one(c, 'SELECT * FROM interpreter_inquiries WHERE id=$1 FOR UPDATE', [tokenRow.entity_id]);
  const now = ctx.clock.now();
  if (!q || q.interpreter_id !== tokenRow.party_id) return { ok: false, code: 'FORBIDDEN', message: 'Bu bağlantı size ait değil.' };
  if (job.version !== tokenRow.job_version || q.job_version !== job.version) {
    return { ok: false, code: 'STALE', message: 'İşin bilgileri değişti; bu onay eski sürüme ait olduğu için işlenmedi.' };
  }
  if (q.status === 'EXPIRED' || new Date(q.deadline_at) <= now) {
    return { ok: false, code: 'EXPIRED', message: 'Bu sorgunun süresi dolmuş. Bu yanıtla atama yapılmadı.' };
  }
  if (job.current_assignment_id || job.status !== 'MATCHING') {
    return { ok: false, code: 'TAKEN', message: 'Bu iş için başka bir tercümanla ilerlendi; atama yapılmadı.' };
  }
  if (job.automation_mode !== 'AUTO') return { ok: false, code: 'PAUSED', message: 'Bu iş şu anda yetkili tarafından inceleniyor. Size ayrıca dönülecek.' };
  if (q.status !== 'AVAILABLE') return { ok: false, code: 'NOT_AVAILABLE', message: 'Önce müsaitlik yanıtı gerekli.' };
  const agr = await activeAgreement(c, q.interpreter_id);
  if (!agr) return { ok: false, code: 'NO_AGREEMENT', message: 'Geçerli komisyon şartı bulunmadığı için kabul alınamadı.' };

  await c.query('SAVEPOINT accept');
  let assignment: any;
  try {
    assignment = await one(
      c,
      `INSERT INTO assignments (job_id, job_version, interpreter_id, inquiry_id, status, active, acceptance_evidence, agreement_id, accepted_at, created_at)
       VALUES ($1,$2,$3,$4,'REFERRAL_ACCEPTED',true,$5,$6,$7,$7) RETURNING *`,
      [job.id, job.version, q.interpreter_id, q.id, `action_token:${tokenRow.id}`, agr.id, now],
    );
    const { policy } = await loadPolicy(c);
    await c.query(
      `INSERT INTO reservations (interpreter_id, assignment_id, period, status, hold_expires_at, created_at)
       VALUES ($1,$2,daterange($3::date,$4::date,'[]'),'HOLD',$5,$6)`,
      [q.interpreter_id, assignment.id, job.start_date, job.end_date, new Date(now.getTime() + policy.holdExpiryDays * 86400_000), now],
    );
    await c.query('RELEASE SAVEPOINT accept');
  } catch (e: any) {
    await c.query('ROLLBACK TO SAVEPOINT accept');
    if (e.code === '23P01') {
      // Aynı tercümanın çakışan rezervasyonu: ikinci rezervasyon engellenir, alternatif aranır (T11).
      await c.query(`UPDATE interpreter_inquiries SET status='CLOSED', close_reason='Rezervasyon çakışması' WHERE id=$1`, [q.id]);
      await openCase(c, ctx, { type: 'RESERVATION_CONFLICT', jobId: job.id, partyId: q.interpreter_id, summary: `${job.code}: tercümanın aynı tarihlerde başka kesin/geçici işi var` });
      await continueMatching(c, ctx, job);
      return { ok: false, code: 'CONFLICT', message: 'Bu tarihlerde sistemde başka bir işiniz görünüyor; atama yapılmadı.' };
    }
    if (e.code === '23505') return { ok: false, code: 'TAKEN', message: 'Bu iş için başka bir tercümanla ilerlendi.' };
    throw e;
  }
  await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [tokenRow.id, now]);
  await c.query(`UPDATE jobs SET current_assignment_id=$2 WHERE id=$1`, [job.id, assignment.id]);
  await audit(c, ctx, {
    actor: `party:${q.interpreter_id}`, command: 'AcceptReferral', jobId: job.id, entityType: 'assignment', entityId: assignment.id,
    newState: 'REFERRAL_ACCEPTED', jobVersion: job.version, evidence: `action_token:${tokenRow.id}`, detail: { agreement_version: agr.agreement_version },
  });
  // Diğer sorgular kapanır, bekleyen hatırlatmalar iptal edilir.
  const others = await many(c, `SELECT * FROM interpreter_inquiries WHERE job_id=$1 AND id<>$2 AND status IN ('QUEUED','SENT','AVAILABLE')`, [job.id, q.id]);
  for (const o of others) {
    await c.query(`UPDATE interpreter_inquiries SET status='CLOSED', close_reason='Başka tercüman kabul etti' WHERE id=$1`, [o.id]);
    await sendWa(c, ctx, { partyId: o.interpreter_id, jobId: job.id, key: 'inquiry_closed', vars: { job_code: job.code } });
  }
  await cancelTasks(c, { jobId: job.id, types: ['inquiry_reminder', 'inquiry_expire'] }, 'Atama yapıldı');
  await c.query(`UPDATE action_tokens SET used_at=$3 WHERE job_id=$1 AND action='accept_referral' AND id<>$2 AND used_at IS NULL`, [job.id, tokenRow.id, now]);
  await openCommissionAccount(c, ctx, job, assignment, agr);
  {
    const { policy, version } = await loadPolicy(c);
    await scheduleTask(c, ctx, { type: 'hold_expiry', jobId: job.id, entityId: assignment.id, businessVersion: job.version, policyVersion: version, dueAt: new Date(now.getTime() + policy.holdExpiryDays * 86400_000) });
  }
  const j = await transition(c, ctx, job, 'HANDOFF_PENDING', `party:${q.interpreter_id}`, `action_token:${tokenRow.id}`);
  await startHandoff(c, ctx, j, assignment);
  return { ok: true, assignmentId: assignment.id };
}

/** ShareContactDetails — Bölüm 5.5'teki koşulların tamamı sağlanmadan iletişim paylaşılmaz. */
export async function startHandoff(c: C, ctx: Ctx, job: any, assignment: any): Promise<void> {
  if (!job.summary_confirmed_at) throw new CommandError('PRECONDITION', 'Talep özeti doğrulanmamış');
  if (job.automation_mode !== 'AUTO' || job.status !== 'HANDOFF_PENDING') return;
  const consentRow = await one(
    c,
    `SELECT id, granted FROM consents WHERE party_id=$1 AND purpose='CONTACT_SHARING' AND job_id=$2 AND withdrawn_at IS NULL ORDER BY recorded_at DESC LIMIT 1`,
    [job.customer_id, job.id],
  );
  if (!consentRow?.granted) {
    await openCase(c, ctx, { type: 'SHARE_CONSENT_MISSING', jobId: job.id, partyId: job.customer_id, severity: 'HIGH', summary: `${job.code}: paylaşım izni olmadığı için iletişim devri yapılmadı` });
    return;                                                                                 // T13
  }
  const link = await createActionToken(c, ctx, { partyId: assignment.interpreter_id, jobId: job.id, jobVersion: job.version, action: 'view_contact', entityId: assignment.id, ttlHours: 24 * 21 });
  const now = ctx.clock.now();
  const share = await one(
    c,
    `INSERT INTO sharing_records (job_id, job_version, assignment_id, recipient_id, data_scope, purpose, consent_id, result, created_at, updated_at)
     VALUES ($1,$2,$3,$4,$5,'Tercümanın müşteriyle iş ayrıntılarını görüşmesi',$6,'PENDING',$7,$7) RETURNING id`,
    [job.id, job.version, assignment.id, assignment.interpreter_id, ['customer_name', 'customer_phone', 'job_summary'], consentRow.id, now],
  );
  await sendWa(c, ctx, {
    partyId: assignment.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'interpreter_handoff', critical: true, requireVersion: true,
    vars: { job_code: job.code, secure_contact_link: link },
    onDelivered: { type: 'handoff_delivered', sharingId: share.id },
    onFailed: { type: 'handoff_failed', sharingId: share.id },
    dedupeKey: `handoff:${share.id}`,
  });
}

export async function onHandoffDelivered(c: C, ctx: Ctx, sharingId: string, messageId: string): Promise<void> {
  const s = await one(c, 'SELECT * FROM sharing_records WHERE id=$1', [sharingId]);
  if (!s || s.result === 'SHARED') return;
  const job = await lockJob(c, s.job_id);
  await c.query(`UPDATE sharing_records SET result='SHARED', message_id=$2, updated_at=$3 WHERE id=$1`, [s.id, messageId, ctx.clock.now()]);
  if (job.status !== 'HANDOFF_PENDING') return;
  await c.query(`UPDATE assignments SET status='INTRODUCED' WHERE id=$1 AND status='REFERRAL_ACCEPTED'`, [s.assignment_id]);
  const j = await transition(c, ctx, job, 'NEGOTIATING', 'system', `message_delivered:${messageId}`);
  await resolveCases(c, ctx, { jobId: job.id, type: 'HANDOFF_FAILED' }, 'Devir mesajı teslim edildi');
  // Müşteriye gerçekte gerçekleşen durum söylenir; "kesin rezervasyon" veya kesin arama zamanı vaat edilmez.
  await sendWa(c, ctx, {
    partyId: job.customer_id, jobId: job.id, jobVersion: j.version, key: 'customer_handoff', critical: true,
    vars: { job_code: job.code, interpreter_name: await partyName(c, s.recipient_id) },
  });
  const { policy, version } = await loadPolicy(c);
  const prof = await one(c, 'SELECT timezone FROM interpreter_profiles WHERE party_id=$1', [s.recipient_id]);
  await scheduleTask(c, ctx, {
    type: 'contact_check', jobId: job.id, businessVersion: j.version, policyVersion: version,
    dueAt: addWorkingHours(ctx.clock.now(), policy.contactCheckWorkingHours, prof?.timezone ?? 'Europe/Istanbul'),
  });
}

export async function onHandoffFailed(c: C, ctx: Ctx, sharingId: string, error: string): Promise<void> {
  const s = await one(c, 'SELECT * FROM sharing_records WHERE id=$1', [sharingId]);
  if (!s || s.result !== 'PENDING') return;
  await c.query(`UPDATE sharing_records SET result='FAILED', updated_at=$2 WHERE id=$1`, [s.id, ctx.clock.now()]);
  const job = await one(c, 'SELECT code FROM jobs WHERE id=$1', [s.job_id]);
  // Devir tamamlandı sayılmaz; müşteriye tamamlanmış devir iddiası gönderilmez (T14).
  await openCase(c, ctx, { type: 'HANDOFF_FAILED', jobId: s.job_id, partyId: s.recipient_id, severity: 'HIGH', summary: `${job.code}: iletişim devri mesajı tercümana iletilemedi (${error.slice(0, 120)})` });
}

export async function inquiryDeliveryFailed(c: C, ctx: Ctx, inquiryId: string): Promise<void> {
  const q = await one(c, `UPDATE interpreter_inquiries SET status='DELIVERY_FAILED' WHERE id=$1 AND status='SENT' RETURNING *`, [inquiryId]);
  if (!q) return;
  await cancelTasks(c, { entityId: q.id }, 'Mesaj iletilemedi');
  const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [q.job_id]);
  await continueMatching(c, ctx, job);
}

export async function expireInquiry(c: C, ctx: Ctx, inquiryId: string): Promise<void> {
  const q0 = await one(c, 'SELECT job_id FROM interpreter_inquiries WHERE id=$1', [inquiryId]);
  if (!q0) return;
  const job = await lockJob(c, q0.job_id);
  const q = await one(c, `SELECT * FROM interpreter_inquiries WHERE id=$1 FOR UPDATE`, [inquiryId]);
  if (!['SENT', 'AVAILABLE'].includes(q.status)) return;
  await c.query(`UPDATE interpreter_inquiries SET status='EXPIRED', close_reason='Süre doldu' WHERE id=$1`, [q.id]);
  await audit(c, ctx, { actor: 'system:scheduler', command: 'ExpireInquiry', jobId: job.id, entityType: 'inquiry', entityId: q.id, oldState: q.status, newState: 'EXPIRED', jobVersion: job.version });
  await cancelTasks(c, { entityId: q.id }, 'Süre doldu');
  if (job.version === q.job_version) await continueMatching(c, ctx, job);                  // T09
}
