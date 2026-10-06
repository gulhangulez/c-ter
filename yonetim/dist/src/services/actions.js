// Güvenli yanıt bağlantıları (Bölüm 15.1). GET hiçbir durumu değiştirmez ve token tüketmez (T36);
// durum değişikliği yalnızca nonce doğrulamalı POST ile olur. Hassas veri için ek kimlik kontrolü yapılır.
import { one, tx } from '../core/db.js';
import { safeEqual } from '../core/crypto.js';
import { dayRange, formatRangeTr, localDate } from '../core/time.js';
import { SERVICE_LABELS } from '../domain/extract.js';
import { formatAmount } from '../domain/money.js';
import { audit, CommandError, findToken, partyName, partyWa } from './core.js';
import { acceptReferral } from './matching.js';
import { confirmCompletion, confirmTerms, latestCompletionReport, proposeTerms, reportCompletion } from './workflow.js';
import { statementData } from './finance.js';
const REUSABLE = new Set(['view_contact', 'statement']);
export async function loadAction(ctx, token) {
    const t = await findToken(ctx.db, token);
    if (!t)
        return { state: 'INVALID', message: 'Bağlantı geçersiz.' };
    const job = await one(ctx.db, 'SELECT * FROM jobs WHERE id=$1', [t.job_id]);
    const now = ctx.clock.now();
    if (new Date(t.expires_at) <= now)
        return { state: 'EXPIRED', message: 'Bu bağlantının süresi dolmuş. Bu bağlantıyla işlem yapılmadı.', job: pub(job) };
    if (t.used_at && !REUSABLE.has(t.action))
        return { state: 'USED', message: 'Bu bağlantı zaten kullanılmış veya geçersiz kılınmış.', job: pub(job) };
    if (t.job_version !== job.version && t.action !== 'statement') {
        return { state: 'STALE', message: 'İşin bilgileri değişti; bu bağlantı eski sürüme ait olduğu için kullanılamaz. Güncel bilgi ayrıca gönderilecek.', job: pub(job) };
    }
    const data = {};
    if (t.action === 'accept_referral') {
        const agr = await one(ctx.db, `SELECT * FROM commission_agreements WHERE interpreter_id=$1 AND status='ACTIVE'`, [t.party_id]);
        const q = await one(ctx.db, 'SELECT * FROM interpreter_inquiries WHERE id=$1', [t.entity_id]);
        data.terms = agr ? agreementSummary(agr) : null;
        data.deadline = q?.deadline_at;
        data.inquiryStatus = q?.status;
    }
    else if (t.action === 'propose_terms' || t.action === 'report_completion') {
        data.plannedDays = job.service_days ?? (job.start_date ? dayRange(job.start_date, job.end_date) : []);
        if (t.action === 'report_completion') {
            const terms = await one(ctx.db, `SELECT * FROM booking_terms WHERE job_id=$1 ORDER BY terms_version DESC LIMIT 1`, [job.id]);
            if (terms)
                data.plannedDays = terms.service_days;
        }
    }
    else if (t.action === 'confirm_terms') {
        const terms = await one(ctx.db, 'SELECT * FROM booking_terms WHERE id=$1', [t.entity_id]);
        data.terms = terms && {
            version: terms.terms_version, dailyRate: formatAmount(terms.daily_rate_minor, terms.currency), days: terms.service_days,
            total: formatAmount(terms.daily_rate_minor * terms.service_days.length, terms.currency), expenses: terms.expenses_note,
            interpreter: await partyName(ctx.db, terms.proposed_by),
        };
    }
    else if (t.action === 'confirm_completion') {
        const rep = await latestCompletionReport(ctx.db, job.id);
        data.reportedDays = rep?.detail?.days ?? [];
        data.note = rep?.detail?.note ?? '';
    }
    else if (t.action === 'statement') {
        const s = await statementData(ctx.db, t.entity_id, localDate(now, 'Europe/Istanbul'));
        if (s) {
            data.statement = {
                reference: s.acc.reference, currency: s.acc.currency, receivable: s.view.receivable, collected: s.view.collected, balance: s.view.balance,
                receivableText: s.acc.currency ? formatAmount(s.view.receivable, s.acc.currency) : '—',
                collectedText: s.acc.currency ? formatAmount(s.view.collected, s.acc.currency) : '—',
                balanceText: s.acc.currency ? formatAmount(s.view.balance, s.acc.currency) : '—',
                dueDate: s.acc.due_date, paymentState: s.view.payment_state, dueState: s.view.due_state, notice: s.acc.payment_notice,
                entries: s.view.entries.map((e) => ({ kind: e.kind, amount: formatAmount(e.amount_minor, e.currency), reason: e.reason, at: e.created_at })),
            };
            data.fakePayments = ctx.payments?.mode === 'FAKE';
        }
    }
    return { state: 'OK', action: t.action, nonce: t.nonce, job: pub(job), data };
}
function pub(job) {
    // Bağlantı sayfasında müşteri telefonu YOK; yalnızca iş özeti.
    return job && {
        code: job.code, city: job.city, dateRange: formatRangeTr(job.start_date, job.end_date), status: job.status,
        service: job.service_type ? SERVICE_LABELS[job.service_type] : '—', technical: job.technical_subject,
    };
}
export function agreementSummary(a) {
    const out = [];
    const payer = a.payer_party_type === 'INTERPRETER' ? 'Tercüman' : a.payer_party_type === 'CUSTOMER' ? 'Müşteri' : 'Sözleşmede belirtilen taraf';
    if (a.commission_type === 'FIXED_JOB')
        out.push(`İş başına sabit komisyon: ${formatAmount(a.fixed_amount_minor, a.currency)}`);
    if (a.commission_type === 'FIXED_SERVICE_DAY')
        out.push(`Gerçekleşen gün başına komisyon: ${formatAmount(a.per_day_amount_minor, a.currency)}`);
    if (a.commission_type === 'PERCENT_OF_BASE')
        out.push(`Komisyon oranı: %${(a.percentage_basis_points / 100).toLocaleString('tr-TR')} — matrah: ${a.commission_base_definition}`);
    out.push(`Komisyonu ödeyecek taraf: ${payer}`);
    const ev = { REFERRAL_ACCEPTED: 'yönlendirme kabulü', BOOKING_CONFIRMED: 'işin iki tarafça kesinleşmesi', SERVICE_COMPLETED: 'hizmetin tamamlandığının doğrulanması' }[a.accrual_event];
    out.push(`Hak ediş: ${ev}; vade: ${a.due_offset_days} ${a.due_day_type === 'BUSINESS' ? 'iş' : 'takvim'} günü sonra`);
    out.push(`Masraflar (ulaşım, konaklama, yeme-içme): ${a.expense_inclusion_policy === 'EXCLUDED' ? 'matraha dahil değil' : a.expense_inclusion_policy}`);
    out.push(`İptal: ${a.cancellation_policy}`);
    out.push(`Anlaşma sürümü: v${a.agreement_version}`);
    return out;
}
function check(t, ctx, nonce) {
    if (!t)
        return 'Bağlantı geçersiz.';
    if (!nonce || !safeEqual(nonce, t.nonce))
        return 'Form doğrulaması başarısız. Sayfayı yenileyip tekrar deneyin.';
    if (new Date(t.expires_at) <= ctx.clock.now())
        return 'Bu bağlantının süresi dolmuş. İşlem yapılmadı.';
    if (t.used_at && !REUSABLE.has(t.action))
        return 'Bu bağlantı zaten kullanılmış veya geçersiz kılınmış.';
    return null;
}
export async function performAction(ctx, token, form) {
    const str = (k) => (Array.isArray(form[k]) ? form[k][0] : form[k]) ?? '';
    const arr = (k) => (Array.isArray(form[k]) ? form[k] : form[k] ? [form[k]] : []);
    const t0 = await findToken(ctx.db, token);
    const err = check(t0, ctx, str('nonce'));
    if (err)
        return { ok: false, message: err };
    try {
        return await tx(ctx.db, async (c) => {
            const t = await one(c, 'SELECT * FROM action_tokens WHERE id=$1 FOR UPDATE', [t0.id]);
            const again = check(t, ctx, str('nonce'));
            if (again)
                return { ok: false, message: again };
            switch (t.action) {
                case 'accept_referral': {
                    if (str('decision') === 'decline') {
                        const { recordAvailability } = await import('./matching.js');
                        await c.query(`UPDATE interpreter_inquiries SET status='SENT' WHERE id=$1 AND status='AVAILABLE'`, [t.entity_id]);
                        await recordAvailability(c, ctx, t.entity_id, t.job_version, 'DECLINED', 'Yönlendirmeyi kabul etmedi', `action_token:${t.id}`);
                        await c.query(`UPDATE action_tokens SET used_at=$2 WHERE id=$1`, [t.id, ctx.clock.now()]);
                        return { ok: true, message: 'Yanıtınız kaydedildi. Bu iş için sizinle ilerlenmeyecek.' };
                    }
                    const r = await acceptReferral(c, ctx, t);
                    return r.ok
                        ? { ok: true, message: 'Yönlendirmeyi kabul ettiniz. Müşterinin iletişim bilgisi ayrı bir mesajla size iletilecek. Bu kabul, müşteriyle fiyat anlaşmasının tamamlandığı anlamına gelmez.' }
                        : { ok: false, message: r.message };
                }
                case 'view_contact': {
                    // Bağlantı tek başına telefon göstermez: alıcının kendi numarasının son 4 hanesi istenir.
                    const own = (await partyWa(c, t.party_id)) ?? '';
                    const last4 = str('last4').replace(/\D/g, '');
                    if (last4.length !== 4 || !own.endsWith(last4))
                        return { ok: false, message: 'Doğrulama başarısız. WhatsApp numaranızın son 4 hanesini girin.' };
                    const job = await one(c, 'SELECT * FROM jobs WHERE id=$1', [t.job_id]);
                    const a = await one(c, 'SELECT * FROM assignments WHERE id=$1', [t.entity_id]);
                    if (!a?.active || a.interpreter_id !== t.party_id)
                        return { ok: false, message: 'Bu işe artık atanmış görünmüyorsunuz.' };
                    await audit(c, ctx, { actor: `party:${t.party_id}`, command: 'ViewContact', jobId: job.id, evidence: `action_token:${t.id}` });
                    const phone = await partyWa(c, job.customer_id);
                    return { ok: true, message: 'Müşteri iletişim bilgisi', data: { customerName: job.customer_name ?? (await partyName(c, job.customer_id)), phone: phone ? '+' + phone : '—' } };
                }
                case 'propose_terms':
                    await proposeTerms(c, ctx, t, { dailyRate: str('daily_rate'), currency: str('currency') || 'USD', days: [...arr('days'), ...str('extra_days').split(/[,\s]+/).filter(Boolean)], expenses: str('expenses') });
                    return { ok: true, message: 'Şartlar kaydedildi ve müşterinin onayına gönderildi. İki taraf da onayladığında iş kesinleşmiş sayılır.' };
                case 'confirm_terms':
                    await confirmTerms(c, ctx, t, str('decision') === 'yes');
                    return { ok: true, message: str('decision') === 'yes' ? 'Onayınız kaydedildi.' : 'Yanıtınız kaydedildi; yetkilimiz sizinle iletişime geçecek.' };
                case 'report_completion':
                    await reportCompletion(c, ctx, t, { days: [...arr('days'), ...str('extra_days').split(/[,\s]+/).filter(Boolean)], note: str('note'), happened: str('happened') !== 'no' });
                    return { ok: true, message: 'Bildiriminiz kaydedildi ve müşterinin onayına gönderildi.' };
                case 'confirm_completion':
                    await confirmCompletion(c, ctx, t, str('decision') === 'yes', str('note'));
                    return { ok: true, message: 'Yanıtınız kaydedildi. Teşekkürler.' };
                case 'statement':
                    return { ok: false, message: 'Bu sayfada değiştirilecek bir şey yok.' };
            }
            return { ok: false, message: 'Bilinmeyen işlem.' };
        });
    }
    catch (e) {
        if (e instanceof CommandError)
            return { ok: false, message: e.message };
        throw e;
    }
}
