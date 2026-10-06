// Kalıcı görev motoru: vadesi gelen görevler veritabanından alınır (FOR UPDATE SKIP LOCKED → aynı görevi iki işçi çalıştırmaz).
// Her görev çalışmadan önce güncel iş sürümünü, durumunu ve otomasyon modunu yeniden kontrol eder.
import { one, tx } from '../core/db.js';
import { atLocal, addDays, localDate, formatRangeTr } from '../core/time.js';
import { balanceOf, formatAmount } from '../domain/money.js';
import { JOB_STATUS_TR } from '../domain/labels.js';
import { CommandError, enqueue, openCase, scheduleTask, sendWa, transition, loadPolicy, createActionToken, type C, type Ctx } from './core.js';
import { askSummary } from './intake.js';
import { expireInquiry } from './matching.js';
import { ledger } from './finance.js';
import { beginCompletion, completionFollowup, handleHoldExpiry, sendAgreementCheck, sendContactCheck } from './workflow.js';
import { reconcileCalendar } from './dispatch.js';

type Handler = (c: C, ctx: Ctx, task: any, job: any) => Promise<string | void>;

/** Görev çalıştırılmadan önce geçerliliği: dönen metin iptal nedenidir. */
function stale(task: any, job: any, allowed: string[]): string | null {
  if (!job) return null;
  if (job.automation_mode !== 'AUTO') return `Otomasyon: ${job.automation_mode}`;
  if (!allowed.includes(job.status)) return `İş durumu artık ${job.status}`;
  if (task.business_version != null && task.business_version !== job.version) return 'İş sürümü değişti';
  return null;
}

const HANDLERS: Record<string, { statuses?: string[]; run: Handler }> = {
  info_reminder: {
    statuses: ['INFO_PENDING'],
    async run(c, ctx, _t, job) {
      if (job.pending_question === 'SUMMARY') return void (await askSummary(c, ctx, job));
      await sendWa(c, ctx, { partyId: job.customer_id, jobId: job.id, jobVersion: job.version, key: 'missing_info', proactive: true, requireVersion: true, vars: { job_code: job.code, missing_field_label: 'eksik kalan' } });
    },
  },
  info_dormant: {
    statuses: ['INFO_PENDING'],
    async run(c, ctx, _t, job) {
      // Sessizlik ret değildir: DORMANT + özet kaydı.
      await transition(c, ctx, job, 'DORMANT', 'system:scheduler', '72 saat yanıt yok');
    },
  },
  inquiry_reminder: {
    statuses: ['MATCHING'],
    async run(c, ctx, t, job) {
      const q = await one(c, 'SELECT * FROM interpreter_inquiries WHERE id=$1', [t.entity_id]);
      if (!q || q.status !== 'SENT') return 'Sorgu artık yanıt beklemiyor';
      await sendWa(c, ctx, { partyId: q.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'availability_reminder', proactive: true, requireVersion: true, vars: { job_code: job.code },
        buttons: [{ id: `av:yes:${q.id}:${job.version}`, title: 'Müsaitim' }, { id: `av:no:${q.id}:${job.version}`, title: 'Uygun değilim' }, { id: `av:cond:${q.id}:${job.version}`, title: 'Şartım var' }] });
    },
  },
  inquiry_expire: {
    statuses: ['MATCHING', 'HANDOFF_PENDING', 'NEGOTIATING', 'CONFIRMED', 'IN_PROGRESS'],
    async run(c, ctx, t) { await expireInquiry(c, ctx, t.entity_id); },
  },
  contact_check: { statuses: ['NEGOTIATING'], async run(c, ctx, _t, job) { await sendContactCheck(c, ctx, job, 1); } },
  contact_reminder: { statuses: ['NEGOTIATING'], async run(c, ctx, _t, job) { await sendContactCheck(c, ctx, job, 2); } },
  contact_escalate: {
    statuses: ['NEGOTIATING'],
    async run(c, ctx, _t, job) {
      const ok = await one(c, `SELECT 1 FROM confirmations WHERE job_id=$1 AND subject='CONTACT' AND value='contacted'`, [job.id]);
      if (ok) return 'Görüşme doğrulanmış';
      await openCase(c, ctx, { type: 'CONTACT_PROBLEM', jobId: job.id, severity: 'HIGH', summary: `${job.code}: devirden sonra tercümanın müşteriye ulaştığı doğrulanamadı` });
    },
  },
  agreement_check: { statuses: ['NEGOTIATING'], async run(c, ctx, t, job) { await sendAgreementCheck(c, ctx, job, t.occurrence > 1000 ? 1 : t.occurrence); } },
  outcome_unverified: {
    statuses: ['NEGOTIATING'],
    async run(c, ctx, _t, job) {
      // Yanıt gelmemesi anlaşma veya iptal sayılmaz.
      await openCase(c, ctx, { type: 'OUTCOME_UNVERIFIED', jobId: job.id, summary: `${job.code}: iki takipten sonra işin sonucu doğrulanamadı` });
    },
  },
  hold_expiry: { statuses: ['NEGOTIATING'], async run(c, ctx, _t, job) { await handleHoldExpiry(c, ctx, job); } },
  service_reminder: {
    statuses: ['CONFIRMED'],
    async run(c, ctx, _t, job) {
      const a = await one(c, 'SELECT interpreter_id FROM assignments WHERE id=$1', [job.current_assignment_id]);
      for (const pid of [a.interpreter_id, job.customer_id]) {
        await sendWa(c, ctx, { partyId: pid, jobId: job.id, jobVersion: job.version, key: 'service_reminder', proactive: true, critical: true, requireVersion: true, vars: { job_code: job.code, start_date: formatRangeTr(job.start_date, job.start_date) } });
      }
    },
  },
  start_check: {
    statuses: ['CONFIRMED'],
    async run(c, ctx, _t, job) {
      const a = await one(c, 'SELECT interpreter_id FROM assignments WHERE id=$1', [job.current_assignment_id]);
      await sendWa(c, ctx, { partyId: a.interpreter_id, jobId: job.id, jobVersion: job.version, key: 'start_check', proactive: true, requireVersion: true, vars: { job_code: job.code },
        buttons: [{ id: `start:yes:${job.id}:${job.version}`, title: 'Evet, başladı' }, { id: `start:no:${job.id}:${job.version}`, title: 'Hayır' }] });
    },
  },
  completion_start: { statuses: ['CONFIRMED', 'IN_PROGRESS'], async run(c, ctx, _t, job) { await beginCompletion(c, ctx, job); } },
  completion_followup: { statuses: ['COMPLETION_PENDING'], async run(c, ctx, t, job) { await completionFollowup(c, ctx, job, t.occurrence > 1000 ? 1 : t.occurrence); } },

  // --- Finans ---
  commission_due_soon: {
    async run(c, ctx, t) {
      const acc = await one(c, 'SELECT a.*, j.code, j.version FROM commission_accounts a JOIN jobs j ON j.id=a.job_id WHERE a.id=$1', [t.entity_id]);
      const b = balanceOf(await ledger(c, acc.id));
      if (b.balance <= 0) return 'Bakiye kapalı';
      if (acc.payment_notice === 'REPORTED_UNVERIFIED') return 'Ödeme bildirimi doğrulanıyor';
      const disputed = await one(c, `SELECT 1 FROM cases WHERE status='OPEN' AND job_id=$1 AND case_type IN ('PAYMENT_MISMATCH','AGREEMENT_CONFLICT','COMPLETION_DISPUTE')`, [acc.job_id]);
      if (disputed) return 'Açık uyuşmazlık var; rutin hatırlatma durdu';
      const link = await createActionToken(c, ctx, { partyId: acc.payer_party_id, jobId: acc.job_id, jobVersion: acc.version, action: 'statement', entityId: acc.id, ttlHours: 24 * 30 });
      await sendWa(c, ctx, { partyId: acc.payer_party_id, jobId: acc.job_id, key: 'commission_due_soon', proactive: true, vars: { job_code: acc.code, secure_statement_link: link } });
    },
  },
  commission_due: {
    async run(c, ctx, t) {
      const acc = await one(c, 'SELECT * FROM commission_accounts WHERE id=$1', [t.entity_id]);
      const b = balanceOf(await ledger(c, acc.id));
      if (b.balance <= 0) return 'Bakiye kapalı';
      // Vade günü: panelde "vadesi bugün" görünür; WhatsApp'ta tekrarlayan baskı mesajı gönderilmez.
    },
  },
  commission_overdue: {
    async run(c, ctx, t) {
      const acc = await one(c, 'SELECT a.*, j.code FROM commission_accounts a JOIN jobs j ON j.id=a.job_id WHERE a.id=$1', [t.entity_id]);
      const b = balanceOf(await ledger(c, acc.id));
      if (b.balance <= 0) return 'Bakiye kapalı';
      await openCase(c, ctx, { type: 'COMMISSION_OVERDUE', jobId: acc.job_id, partyId: acc.payer_party_id, summary: `${acc.code}: ${formatAmount(b.balance, acc.currency)} komisyonun vadesi geçti (${acc.due_date})` });
    },
  },
  payment_report_check: {
    async run(c, ctx, t) {
      const acc = await one(c, 'SELECT a.*, j.code FROM commission_accounts a JOIN jobs j ON j.id=a.job_id WHERE a.id=$1', [t.entity_id]);
      const b = balanceOf(await ledger(c, acc.id));
      if (b.balance <= 0) return 'Bakiye kapalı';
      if (acc.payment_notice !== 'REPORTED_UNVERIFIED') return 'Bildirim durumu değişti';
      await openCase(c, ctx, { type: 'PAYMENT_REPORTED_UNVERIFIED', jobId: acc.job_id, partyId: acc.payer_party_id, summary: `${acc.code}: "ödedim" bildirimi var fakat sağlayıcı/banka kaydı yok; tahsilat kapanmadı` });
    },
  },

  // --- Sistem ---
  daily_summary: {
    async run(c, ctx) {
      const s = await one(c, `SELECT
          (SELECT count(*) FROM cases WHERE status='OPEN')::int AS open_cases,
          (SELECT count(*) FROM jobs WHERE status IN ('INFO_PENDING','MATCHING','HANDOFF_PENDING','NEGOTIATING','CONFIRMED','IN_PROGRESS','COMPLETION_PENDING'))::int AS active_jobs,
          (SELECT count(*) FROM outbox WHERE status IN ('FAILED','UNKNOWN') AND updated_at > now() - interval '1 day')::int AS failed_sends`);
      await enqueue(c, ctx, { action: 'email.notify', payload: {
        subject: `Günlük özet: ${s.open_cases} müdahale, ${s.active_jobs} aktif iş`,
        text: `Müdahale gereken: ${s.open_cases}\nAktif iş: ${s.active_jobs}\nSon 24 saatte başarısız/belirsiz gönderim: ${s.failed_sends}\nPanel: ${ctx.config.baseUrl}/`,
      } });
      const { policy } = await loadPolicy(c);
      const tz = ctx.config.adminTimezone;
      const next = atLocal(addDays(localDate(ctx.clock.now(), tz), 1), policy.dailySummaryHour, tz);
      await scheduleTask(c, ctx, { type: 'daily_summary', dueAt: next, occurrence: Math.floor(next.getTime() / 1000) });
    },
  },
  calendar_reconcile: {
    async run(c, ctx) {
      await reconcileCalendar(ctx);
      const next = new Date(ctx.clock.now().getTime() + 6 * 3600_000);
      await scheduleTask(c, ctx, { type: 'calendar_reconcile', dueAt: next, occurrence: Math.floor(next.getTime() / 1000) });
    },
  },
};

export const TASK_LABELS: Record<string, string> = {
  info_reminder: 'Müşteriye eksik bilgi hatırlatması', info_dormant: 'Yanıt yoksa "yanıt alınamıyor" işaretle',
  inquiry_reminder: 'Tercümana müsaitlik hatırlatması', inquiry_expire: 'Sorgu süresi dolunca sıradaki adaya geç',
  contact_check: 'İki tarafa "görüşebildiniz mi?" sorusu', contact_reminder: 'Görüşme hatırlatması', contact_escalate: 'Görüşme doğrulanamazsa istisna',
  agreement_check: 'İki tarafa "iş kesinleşti mi?" sorusu', outcome_unverified: 'Sonuç doğrulanamazsa istisna', hold_expiry: 'Geçici rezervasyon süresi kontrolü',
  service_reminder: 'Başlangıçtan bir gün önce hatırlatma', start_check: 'Başlangıç günü "başladı mı?" sorusu', completion_start: 'Bitiş sonrası gerçekleşme sorusu',
  completion_followup: 'Gerçekleşme takibi', commission_due_soon: 'Komisyon vadesinden bir gün önce bilgilendirme', commission_due: 'Komisyon vade günü kontrolü',
  commission_overdue: 'Vadesi geçen komisyon için iç görev', payment_report_check: '"Ödedim" bildirimi doğrulama kontrolü',
  daily_summary: 'Günlük yönetici özeti', calendar_reconcile: 'Takvim mutabakatı',
};

export async function runDueTasks(ctx: Ctx, limit = 100): Promise<number> {
  let n = 0;
  for (; n < limit; n++) {
    const task = await tx(ctx.db, async (c) => {
      const t = await one(c, `SELECT * FROM tasks WHERE status='PENDING' AND due_at <= $1 AND (next_attempt_at IS NULL OR next_attempt_at <= $1) ORDER BY due_at LIMIT 1 FOR UPDATE SKIP LOCKED`, [ctx.clock.now()]);
      if (!t) return null;
      await c.query(`UPDATE tasks SET status='RUNNING', claimed_at=$2, attempt_count=attempt_count+1 WHERE id=$1`, [t.id, ctx.clock.now()]);
      return t;
    });
    if (!task) break;
    const h = HANDLERS[task.task_type];
    try {
      await tx(ctx.db, async (c) => {
        if (!h) {
          await c.query(`UPDATE tasks SET status='FAILED', last_error='Bilinmeyen görev türü' WHERE id=$1`, [task.id]);
          return;
        }
        const job = task.job_id ? await one(c, 'SELECT * FROM jobs WHERE id=$1 FOR UPDATE', [task.job_id]) : null;
        const why = h.statuses ? stale(task, job, h.statuses) : null;
        if (why) {
          await c.query(`UPDATE tasks SET status='CANCELLED', cancel_reason=$2 WHERE id=$1`, [task.id, why]);
          return;
        }
        const r = await h.run(c, ctx, task, job);
        await c.query(`UPDATE tasks SET status=$2, cancel_reason=$3 WHERE id=$1`, [task.id, r ? 'CANCELLED' : 'DONE', r ?? null]);
      });
    } catch (e: any) {
      const permanent = e instanceof CommandError;
      await ctx.db.query(
        `UPDATE tasks SET status=CASE WHEN $3 OR attempt_count >= 5 THEN 'FAILED' ELSE 'PENDING' END, last_error=$2, next_attempt_at=$4 WHERE id=$1`,
        [task.id, String(e?.message || e).slice(0, 1000), permanent, new Date(ctx.clock.now().getTime() + 60_000 * 2 ** task.attempt_count)],
      );
      if (process.env.NODE_ENV !== 'test') console.error('[task]', task.task_type, e);
    }
  }
  return n;
}

export async function ensureSystemTasks(ctx: Ctx): Promise<void> {
  await tx(ctx.db, async (c) => {
    const has = await one(c, `SELECT 1 FROM tasks WHERE task_type='daily_summary' AND status IN ('PENDING','RUNNING')`);
    if (!has) {
      const tz = ctx.config.adminTimezone;
      const { policy } = await loadPolicy(c);
      let at = atLocal(localDate(ctx.clock.now(), tz), policy.dailySummaryHour, tz);
      if (at <= ctx.clock.now()) at = atLocal(addDays(localDate(ctx.clock.now(), tz), 1), policy.dailySummaryHour, tz);
      await scheduleTask(c, ctx, { type: 'daily_summary', dueAt: at, occurrence: Math.floor(at.getTime() / 1000) });
    }
    const rec = await one(c, `SELECT 1 FROM tasks WHERE task_type='calendar_reconcile' AND status IN ('PENDING','RUNNING')`);
    if (!rec) await scheduleTask(c, ctx, { type: 'calendar_reconcile', dueAt: new Date(ctx.clock.now().getTime() + 3600_000), occurrence: Math.floor(ctx.clock.now().getTime() / 1000) });
  });
}

export { JOB_STATUS_TR };
