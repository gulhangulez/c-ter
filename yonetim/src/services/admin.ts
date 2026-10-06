// Yönetici komutları: tercüman havuzu, komisyon anlaşmaları, istisna çözümü.
import { many, one } from '../core/db.js';
import { fold } from '../domain/extract.js';
import { parseAmount } from '../domain/money.js';
import { audit, CommandError, recordConsent, type C, type Ctx } from './core.js';
import { resumeReferralsForInterpreter } from './matching.js';

export interface InterpreterInput {
  name: string;
  whatsapp: string;               // E.164 veya rakamlar
  email?: string;
  timezone: string;
  cities: string[];
  travelCountries: string[];
  services: string[];
  priority?: number;
  specialties?: string;
  dailyRateNote?: string;
  messagingConsent: boolean;      // tercümandan WhatsApp bildirim izni alındı mı
}

export async function createInterpreter(c: C, ctx: Ctx, i: InterpreterInput, actor: string): Promise<string> {
  const wa = i.whatsapp.replace(/[^\d]/g, '');
  if (wa.length < 8) throw new CommandError('PHONE', 'Geçerli bir WhatsApp numarası girin (ülke koduyla)');
  if (!i.services.length) throw new CommandError('SERVICES', 'En az bir hizmet seçin');
  const existing = await one(c, `SELECT party_id FROM contact_endpoints WHERE kind='WHATSAPP' AND value=$1`, [wa]);
  let partyId: string;
  if (existing) {
    partyId = existing.party_id;
    if (await one(c, 'SELECT 1 FROM interpreter_profiles WHERE party_id=$1', [partyId])) throw new CommandError('EXISTS', 'Bu numarayla kayıtlı tercüman var');
    await c.query(`UPDATE parties SET is_interpreter=true, display_name=$2 WHERE id=$1`, [partyId, i.name]);
  } else {
    partyId = (await one(c, `INSERT INTO parties (display_name, is_interpreter, timezone, created_at) VALUES ($1,true,$2,$3) RETURNING id`, [i.name, i.timezone, ctx.clock.now()])).id;
    await c.query(`INSERT INTO contact_endpoints (party_id, kind, value, verified, preferred) VALUES ($1,'WHATSAPP',$2,false,true)`, [partyId, wa]);
  }
  if (i.email) await c.query(`INSERT INTO contact_endpoints (party_id, kind, value) VALUES ($1,'EMAIL',$2) ON CONFLICT DO NOTHING`, [partyId, i.email.trim().toLowerCase()]);
  await c.query(
    `INSERT INTO interpreter_profiles (party_id, cities, travel_countries, services, timezone, priority, specialties, daily_rate_note)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
    [partyId, i.cities.map((x) => fold(x).trim()).filter(Boolean), i.travelCountries.map((x) => x.trim().toUpperCase()).filter(Boolean), i.services, i.timezone, i.priority ?? 100, i.specialties ?? null, i.dailyRateNote ?? null],
  );
  if (i.messagingConsent) await recordConsent(c, ctx, { partyId, purpose: 'OPERATIONAL_MESSAGES', granted: true, source: `admin:${actor}`, channel: 'WHATSAPP' });
  await audit(c, ctx, { actor, command: 'CreateInterpreter', entityType: 'party', entityId: partyId });
  return partyId;
}

export interface AgreementInput {
  interpreterId: string;
  payerPartyType: 'INTERPRETER' | 'CUSTOMER' | 'OTHER';
  commissionType: 'FIXED_JOB' | 'FIXED_SERVICE_DAY' | 'PERCENT_OF_BASE';
  currency: string;
  amount?: string;                 // FIXED_* için
  percent?: string;                // PERCENT_OF_BASE için ("10" ya da "12,5")
  accrualEvent: 'REFERRAL_ACCEPTED' | 'BOOKING_CONFIRMED' | 'SERVICE_COMPLETED';
  dueOffsetDays: number;
  dueDayType: 'CALENDAR' | 'BUSINESS';
  cancellationPolicy?: string;
  acceptanceEvidence: string;      // tercümanın şartları nasıl kabul ettiği (ör. imzalı sözleşme tarihi)
}

/** Yeni anlaşma sürümü; önceki sürüm SUPERSEDED olur. Mevcut işlerin geçmiş hesabı yeniden yazılmaz (anlık kopya). */
export async function activateAgreement(c: C, ctx: Ctx, a: AgreementInput, actor: string): Promise<string> {
  if (!a.acceptanceEvidence.trim()) throw new CommandError('EVIDENCE', 'Tercümanın şartları kabul ettiğine dair kanıtı yazın');
  const cur = a.currency.toUpperCase();
  let fixed: number | null = null, perDay: number | null = null, bp: number | null = null;
  if (a.commissionType === 'FIXED_JOB') fixed = parseAmount(a.amount ?? '', cur);
  if (a.commissionType === 'FIXED_SERVICE_DAY') perDay = parseAmount(a.amount ?? '', cur);
  if (a.commissionType === 'PERCENT_OF_BASE') {
    const p = Number(String(a.percent ?? '').replace(',', '.'));
    if (!(p > 0 && p <= 100)) throw new CommandError('PERCENT', 'Oran 0–100 arasında olmalı');
    bp = Math.round(p * 100);
  }
  const n = (await one(c, `SELECT coalesce(max(agreement_version),0)+1 AS n FROM commission_agreements WHERE interpreter_id=$1`, [a.interpreterId])).n;
  await c.query(`UPDATE commission_agreements SET status='SUPERSEDED' WHERE interpreter_id=$1 AND status='ACTIVE'`, [a.interpreterId]);
  const r = await one(
    c,
    `INSERT INTO commission_agreements (interpreter_id, agreement_version, payer_party_type, commission_type, currency, fixed_amount_minor, per_day_amount_minor,
       percentage_basis_points, accrual_event, due_offset_days, due_day_type, cancellation_policy, status, accepted_at, acceptance_evidence, created_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,coalesce($12,'İptalde tahakkuk etmemiş komisyon doğmaz'),'ACTIVE',$13,$14,$13) RETURNING id`,
    [a.interpreterId, n, a.payerPartyType, a.commissionType, cur, fixed, perDay, bp, a.accrualEvent, a.dueOffsetDays, a.dueDayType, a.cancellationPolicy || null, ctx.clock.now(), a.acceptanceEvidence],
  );
  await audit(c, ctx, { actor, command: 'ActivateCommissionAgreement', entityType: 'commission_agreement', entityId: r.id, newState: `v${n}` });
  await resumeReferralsForInterpreter(c, ctx, a.interpreterId);
  return r.id;
}

export async function resolveCase(c: C, ctx: Ctx, caseId: string, resolution: string, actor: string): Promise<void> {
  if (!resolution.trim()) throw new CommandError('REASON_REQUIRED', 'Çözüm notu zorunlu');
  const r = await one(c, `UPDATE cases SET status='RESOLVED', resolution=$2, resolved_at=$3 WHERE id=$1 AND status='OPEN' RETURNING *`, [caseId, resolution, ctx.clock.now()]);
  if (r) await audit(c, ctx, { actor, command: 'ResolveCase', jobId: r.job_id, entityType: 'case', entityId: r.id, newState: 'RESOLVED', evidence: resolution });
}

export async function retryMatching(c: C, ctx: Ctx, jobId: string, actor: string): Promise<void> {
  const { lockJob, transition } = await import('./core.js');
  const { continueMatching } = await import('./matching.js');
  const job = await lockJob(c, jobId);
  if (job.status !== 'UNFULFILLED') throw new CommandError('STATE', 'Yalnızca "uygun tercüman bulunamadı" durumundaki işler için');
  const j = await one(c, `UPDATE jobs SET version=version+1 WHERE id=$1 RETURNING *`, [job.id]);
  const m = await transition(c, ctx, j, 'MATCHING', actor, 'Yönetici yeniden aramayı başlattı');
  await continueMatching(c, ctx, m);
}

export async function listInterpreters(c: C | any): Promise<any[]> {
  return many(c, `SELECT p.id, p.display_name, ip.*, e.value AS whatsapp,
      (SELECT row_to_json(a) FROM commission_agreements a WHERE a.interpreter_id=p.id AND a.status='ACTIVE') AS agreement,
      (SELECT count(*)::int FROM assignments a WHERE a.interpreter_id=p.id AND a.status='COMPLETED') AS completed
    FROM interpreter_profiles ip JOIN parties p ON p.id=ip.party_id
    LEFT JOIN contact_endpoints e ON e.party_id=p.id AND e.kind='WHATSAPP'
    ORDER BY ip.active DESC, ip.priority, p.display_name`);
}
