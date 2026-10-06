// Bağımlılıksız HTTP sunucusu: panel (giriş korumalı), güvenli yanıt sayfaları, webhook'lar, JSON API.
import http from 'node:http';
import { URL } from 'node:url';
import { many, one, tx } from '../core/db.js';
import { encrypt, randomToken, sha256, safeEqual, verifyPassword, hmacSha256Hex } from '../core/crypto.js';
import { parseWebhook } from '../adapters/whatsapp.js';
import { GOOGLE_SCOPE } from '../adapters/calendar.js';
import { FakePayments } from '../adapters/payments.js';
import { parseAmount } from '../domain/money.js';
import { DEFAULT_POLICY } from '../domain/policy.js';
import { CommandError, hasConsent, loadPolicy } from '../services/core.js';
import { storeInbox, waDedupeKey } from '../services/inbox.js';
import { loadAction, performAction, agreementSummary } from '../services/actions.js';
import { dashboard, integrationHealth, jobDetail, jobRows, financeTotals } from '../services/queries.js';
import { activateAgreement, createInterpreter, listInterpreters, resolveCase, retryMatching, updateInterpreter } from '../services/admin.js';
import { cancelJob, requestJobChange, sendAdminMessage, setAutomationMode } from '../services/workflow.js';
import { adjust, accountView } from '../services/finance.js';
import { localDate } from '../core/time.js';
import { page } from '../views/html.js';
import * as V from '../views/pages.js';
const SEC_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; form-action 'self'; frame-ancestors 'none'",
};
const html = (body, status = 200, extra = {}) => ({ status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', ...extra }, body });
const json = (data, status = 200) => ({ status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, body: JSON.stringify(data) });
const redirect = (to, extra = {}) => ({ status: 303, headers: { Location: to, ...extra }, body: '' });
const text = (s, status = 200) => ({ status, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: s });
function parseForm(body) {
    const out = {};
    for (const [k, v] of new URLSearchParams(body)) {
        if (k in out)
            out[k] = [].concat(out[k], v);
        else
            out[k] = v;
    }
    return out;
}
function parseCookies(h) {
    const out = {};
    for (const p of (h ?? '').split(';')) {
        const i = p.indexOf('=');
        if (i > 0)
            out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
    }
    return out;
}
const f = (r, k) => (Array.isArray(r.form[k]) ? r.form[k][0] : r.form[k]) ?? '';
const fa = (r, k) => (Array.isArray(r.form[k]) ? r.form[k] : r.form[k] ? [r.form[k]] : []);
const loginAttempts = new Map();
export function createHandler(ctx) {
    const secureCookie = ctx.config.baseUrl.startsWith('https://');
    const testMode = ctx.wa.mode === 'FAKE';
    async function currentUser(r) {
        const sid = r.cookies.ct_sid;
        if (!sid)
            return null;
        const s = await one(ctx.db, `SELECT s.csrf_token, u.* FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.id_hash=$1 AND s.expires_at > $2 AND u.active`, [sha256(sid), ctx.clock.now()]);
        return s ? { id: s.id, email: s.email, display_name: s.display_name, roles: s.roles, csrf: s.csrf_token } : null;
    }
    const render = (title, body, user, nav, flash, error) => html(page({ title, body, user, nav, testMode, flash, error, csrf: user?.csrf }));
    function can(u, role) {
        return u.roles.includes('ADMIN') || u.roles.includes(role);
    }
    async function route(r) {
        const { method, path } = r;
        // --- Genel ---
        if (path === '/health')
            return json({ ok: true });
        // --- Webhook'lar ---
        if (path === '/webhooks/whatsapp' && method === 'GET') {
            const mode = r.url.searchParams.get('hub.mode');
            const token = r.url.searchParams.get('hub.verify_token') ?? '';
            const challenge = r.url.searchParams.get('hub.challenge') ?? '';
            const expected = ctx.config.whatsapp.verifyToken ?? '';
            if (mode === 'subscribe' && expected && safeEqual(token, expected))
                return text(challenge);
            return text('forbidden', 403);
        }
        if (path === '/webhooks/whatsapp' && method === 'POST') {
            // İmza ham gövde üzerinde, JSON dönüştürmeden önce doğrulanır.
            const ok = ctx.wa.verifySignature(r.raw, r.headers['x-hub-signature-256']);
            if (!ok) {
                await storeInbox(ctx, 'whatsapp', 'rejected:' + sha256(r.raw.toString('utf8')), { note: 'imza geçersiz' }, false);
                return text('invalid signature', 401);
            }
            let body;
            try {
                body = JSON.parse(r.raw.toString('utf8'));
            }
            catch {
                return text('bad json', 400);
            }
            for (const ev of parseWebhook(body))
                await storeInbox(ctx, 'whatsapp', waDedupeKey(ev), ev, true);
            return text('ok');
        }
        let m = path.match(/^\/webhooks\/payments\/([a-z0-9_-]+)$/);
        if (m && method === 'POST') {
            if (!ctx.payments || ctx.payments.name !== m[1])
                return text('unknown provider', 404);
            const ok = ctx.payments.verifySignature(r.raw, r.headers['x-signature'] ?? undefined);
            if (!ok)
                return text('invalid signature', 401);
            const ev = ctx.payments.parse(JSON.parse(r.raw.toString('utf8')));
            await storeInbox(ctx, `payments:${ctx.payments.name}`, ev.eventId, ev, true);
            return text('ok');
        }
        if (path === '/webhooks/telephony' && method === 'POST') {
            const secret = ctx.config.telephony.webhookSecret;
            if (ctx.config.telephony.mode === 'DISABLED' || !secret)
                return text('telephony disabled', 404);
            const sig = r.headers['x-signature'] ?? '';
            if (!safeEqual(sig, hmacSha256Hex(secret, r.raw)))
                return text('invalid signature', 401);
            const body = JSON.parse(r.raw.toString('utf8'));
            await storeInbox(ctx, 'telephony', String(body.call_id), body, true);
            return text('ok');
        }
        // --- Güvenli yanıt sayfaları ---
        m = path.match(/^\/actions\/([A-Za-z0-9_-]{20,64})$/);
        if (m) {
            const token = m[1];
            if (method === 'GET') {
                const v = await loadAction(ctx, token);
                return html(page({ title: 'Yanıt', body: V.actionPage(v), testMode }), v.state === 'INVALID' ? 404 : 200, { 'X-Robots-Tag': 'noindex' });
            }
            if (method === 'POST') {
                if (r.url.searchParams.get('test_payment') && ctx.payments instanceof FakePayments) {
                    const v = await loadAction(ctx, token);
                    if (v.state !== 'OK' || v.action !== 'statement' || !safeEqual(f(r, 'nonce'), v.nonce ?? ''))
                        return html(page({ title: 'Yanıt', body: V.actionPage(v, { ok: false, message: 'Geçersiz istek' }), testMode }), 400);
                    const s = v.data.statement;
                    const sim = ctx.payments.simulate({ transactionId: 'test-' + randomToken(8), reference: s.reference, amountMinor: s.balance, currency: s.currency });
                    const ev = ctx.payments.parse(JSON.parse(sim.body));
                    await storeInbox(ctx, 'payments:fake', ev.eventId, ev, true);
                    return html(page({ title: 'Yanıt', body: V.actionPage(v, { ok: true, message: 'Test ödemesi sağlayıcıya iletildi; doğrulandığında bakiye güncellenecek.' }), testMode }));
                }
                const v = await loadAction(ctx, token);
                const result = await performAction(ctx, token, r.form);
                return html(page({ title: 'Yanıt', body: V.actionPage(v, result), testMode }), result.ok ? 200 : 400);
            }
        }
        // --- Giriş ---
        if (path === '/giris' && method === 'GET')
            return render('Giriş', V.loginPage(), null);
        if (path === '/giris' && method === 'POST') {
            const lim = loginAttempts.get(r.ip);
            if (lim && lim.n >= 5 && lim.until > Date.now())
                return render('Giriş', V.loginPage('Çok fazla deneme. Birkaç dakika sonra tekrar deneyin.'), null);
            const u = await one(ctx.db, `SELECT * FROM users WHERE email=$1 AND active`, [f(r, 'email').trim().toLowerCase()]);
            if (!u || !verifyPassword(f(r, 'password'), u.password_hash)) {
                loginAttempts.set(r.ip, { n: (lim?.n ?? 0) + 1, until: Date.now() + 10 * 60_000 });
                return render('Giriş', V.loginPage('E-posta veya şifre hatalı.'), null);
            }
            loginAttempts.delete(r.ip);
            const sid = randomToken(32);
            await ctx.db.query(`INSERT INTO sessions (id_hash, user_id, csrf_token, expires_at) VALUES ($1,$2,$3,$4)`, [sha256(sid), u.id, randomToken(24), new Date(Date.now() + 12 * 3600_000)]);
            await ctx.db.query(`UPDATE users SET last_login_at=now() WHERE id=$1`, [u.id]);
            return redirect('/', { 'Set-Cookie': `ct_sid=${sid}; Path=/; HttpOnly; SameSite=Lax; Max-Age=43200${secureCookie ? '; Secure' : ''}` });
        }
        // --- Bundan sonrası giriş ister ---
        const user = await currentUser(r);
        const isApi = path.startsWith('/api/');
        if (!user)
            return isApi ? json({ error: 'unauthorized' }, 401) : redirect('/giris');
        if (method === 'POST') {
            const token = isApi ? r.headers['x-csrf-token'] ?? '' : f(r, 'csrf');
            if (!safeEqual(token, user.csrf))
                return isApi ? json({ error: 'csrf' }, 403) : text('CSRF doğrulaması başarısız. Sayfayı yenileyin.', 403);
        }
        const actor = `user:${user.email}`;
        const now = ctx.clock.now();
        const back = (to, msg) => redirect(`${to}${to.includes('?') ? '&' : '?'}ok=${encodeURIComponent(msg)}`);
        const flash = r.url.searchParams.get('ok');
        const err = r.url.searchParams.get('hata');
        const fail = (to, msg) => redirect(`${to}${to.includes('?') ? '&' : '?'}hata=${encodeURIComponent(msg)}`);
        if (path === '/cikis' && method === 'POST') {
            await ctx.db.query(`DELETE FROM sessions WHERE id_hash=$1`, [sha256(r.cookies.ct_sid)]);
            return redirect('/giris', { 'Set-Cookie': 'ct_sid=; Path=/; Max-Age=0' });
        }
        if (path === '/' && method === 'GET')
            return render('Bugün', V.dashboardPage(await dashboard(ctx.db, now), user.csrf), user, '/', flash, err);
        if (path === '/isler' && method === 'GET') {
            const st = r.url.searchParams.get('durum') ?? '';
            const rows = st ? await jobRows(ctx.db, now, `j.status = $1`, [st]) : await jobRows(ctx.db, now);
            return render('İşler', V.jobsPage(rows, st), user, '/isler', flash, err);
        }
        m = path.match(/^\/isler\/([0-9a-f-]{36})$/);
        if (m && method === 'GET') {
            const d = await jobDetail(ctx.db, m[1], now);
            if (!d)
                return render('Bulunamadı', V.loginPage(), user);
            return render(d.job.code, V.jobPage(d, user.csrf, []), user, '/isler', flash, err);
        }
        m = path.match(/^\/isler\/([0-9a-f-]{36})\/komut$/);
        if (m && method === 'POST') {
            if (!can(user, 'OPERATIONS'))
                return fail(`/isler/${m[1]}`, 'Operasyon yetkiniz yok');
            const jobId = m[1];
            try {
                await tx(ctx.db, async (c) => {
                    switch (f(r, 'komut')) {
                        case 'takeover': return setAutomationMode(c, ctx, jobId, 'HUMAN_TAKEOVER', actor, f(r, 'reason'));
                        case 'resume': return setAutomationMode(c, ctx, jobId, 'AUTO', actor, f(r, 'reason'));
                        case 'cancel':
                            if (!f(r, 'reason').trim())
                                throw new CommandError('REASON', 'Gerekçe zorunlu');
                            return cancelJob(c, ctx, jobId, actor, f(r, 'reason'));
                        case 'change': return requestJobChange(c, ctx, jobId, { start_date: f(r, 'start_date'), end_date: f(r, 'end_date') }, actor);
                        case 'message': return sendAdminMessage(c, ctx, jobId, f(r, 'party_id'), f(r, 'body'), actor);
                        case 'retry': return retryMatching(c, ctx, jobId, actor);
                        default: throw new CommandError('UNKNOWN', 'Bilinmeyen komut');
                    }
                });
            }
            catch (e) {
                if (e instanceof CommandError)
                    return fail(`/isler/${jobId}`, e.message);
                throw e;
            }
            return back(`/isler/${jobId}`, 'İşlem kaydedildi');
        }
        if (path === '/tercumanlar' && method === 'GET')
            return render('Tercümanlar', V.interpretersPage(await listInterpreters(ctx.db), user.csrf), user, '/tercumanlar', flash, err);
        if (path === '/tercumanlar' && method === 'POST') {
            if (!can(user, 'OPERATIONS'))
                return fail('/tercumanlar', 'Operasyon yetkiniz yok');
            try {
                const id = await tx(ctx.db, (c) => createInterpreter(c, ctx, {
                    name: f(r, 'name'), whatsapp: f(r, 'whatsapp'), email: f(r, 'email') || undefined, timezone: f(r, 'timezone'),
                    cities: f(r, 'cities').split(','), travelCountries: f(r, 'travel').split(','), services: fa(r, 'services'),
                    priority: Number(f(r, 'priority') || 100), specialties: f(r, 'specialties') || undefined, messagingConsent: f(r, 'consent') === '1',
                }, actor));
                return back(`/tercumanlar/${id}`, 'Tercüman eklendi. Yönlendirme için komisyon anlaşmasını tanımlayın.');
            }
            catch (e) {
                if (e instanceof CommandError)
                    return fail('/tercumanlar', e.message);
                throw e;
            }
        }
        m = path.match(/^\/tercumanlar\/([0-9a-f-]{36})$/);
        if (m && method === 'GET') {
            const i = (await listInterpreters(ctx.db)).find((x) => x.id === m[1]);
            if (!i)
                return redirect('/tercumanlar');
            const ags = await many(ctx.db, `SELECT * FROM commission_agreements WHERE interpreter_id=$1 ORDER BY agreement_version DESC`, [i.id]);
            i.email = (await one(ctx.db, `SELECT value FROM contact_endpoints WHERE party_id=$1 AND kind='EMAIL' ORDER BY created_at LIMIT 1`, [i.id]))?.value ?? '';
            i.consent = await hasConsent(ctx.db, i.id, 'OPERATIONAL_MESSAGES');
            return render(i.display_name, V.interpreterPage(i, ags, user.csrf, agreementSummary), user, '/tercumanlar', flash, err);
        }
        m = path.match(/^\/tercumanlar\/([0-9a-f-]{36})\/duzenle$/);
        if (m && method === 'POST') {
            if (!can(user, 'OPERATIONS'))
                return fail(`/tercumanlar/${m[1]}`, 'Operasyon yetkiniz yok');
            try {
                await tx(ctx.db, (c) => updateInterpreter(c, ctx, m[1], {
                    name: f(r, 'name'), whatsapp: f(r, 'whatsapp'), email: f(r, 'email') || undefined, timezone: f(r, 'timezone'),
                    cities: f(r, 'cities').split(','), travelCountries: f(r, 'travel').split(','), services: fa(r, 'services'),
                    priority: Number(f(r, 'priority') || 100), specialties: f(r, 'specialties') || undefined, messagingConsent: f(r, 'consent') === '1',
                }, actor));
            }
            catch (e) {
                if (e instanceof CommandError)
                    return fail(`/tercumanlar/${m[1]}`, e.message);
                throw e;
            }
            return back(`/tercumanlar/${m[1]}`, 'Tercüman bilgileri güncellendi');
        }
        m = path.match(/^\/tercumanlar\/([0-9a-f-]{36})\/anlasma$/);
        if (m && method === 'POST') {
            if (!can(user, 'FINANCE'))
                return fail(`/tercumanlar/${m[1]}`, 'Finans yetkiniz yok');
            try {
                await tx(ctx.db, (c) => activateAgreement(c, ctx, {
                    interpreterId: m[1], payerPartyType: f(r, 'payer'), commissionType: f(r, 'type'), currency: f(r, 'currency'),
                    amount: f(r, 'amount'), percent: f(r, 'percent'), accrualEvent: f(r, 'accrual'), dueOffsetDays: Number(f(r, 'due_days')),
                    dueDayType: f(r, 'due_type'), cancellationPolicy: f(r, 'cancellation') || undefined, acceptanceEvidence: f(r, 'evidence'),
                }, actor));
            }
            catch (e) {
                if (e instanceof CommandError || /Geçersiz tutar|ondalık/.test(e.message))
                    return fail(`/tercumanlar/${m[1]}`, e.message);
                throw e;
            }
            return back(`/tercumanlar/${m[1]}`, 'Anlaşma etkinleştirildi; bekleyen yönlendirmeler sürdürüldü');
        }
        m = path.match(/^\/tercumanlar\/([0-9a-f-]{36})\/durum$/);
        if (m && method === 'POST') {
            await ctx.db.query(`UPDATE interpreter_profiles SET active=$2 WHERE party_id=$1`, [m[1], f(r, 'active') === '1']);
            return back(`/tercumanlar/${m[1]}`, 'Güncellendi');
        }
        if (path === '/komisyonlar' && method === 'GET') {
            const today = localDate(now, 'Europe/Istanbul');
            const accs = await many(ctx.db, `SELECT a.*, j.code, p.display_name AS payer FROM commission_accounts a JOIN jobs j ON j.id=a.job_id LEFT JOIN parties p ON p.id=a.payer_party_id ORDER BY a.created_at DESC`);
            for (const a of accs)
                Object.assign(a, await accountView(ctx.db, a, today));
            return render('Komisyon', V.commissionsPage(accs), user, '/komisyonlar', flash, err);
        }
        m = path.match(/^\/komisyonlar\/([0-9a-f-]{36})\/duzeltme$/);
        if (m && method === 'POST') {
            const acc = await one(ctx.db, 'SELECT * FROM commission_accounts WHERE id=$1', [m[1]]);
            if (!acc)
                return redirect('/komisyonlar');
            if (!can(user, 'FINANCE'))
                return fail(`/isler/${acc.job_id}`, 'Finans yetkiniz yok');
            try {
                await tx(ctx.db, (c) => adjust(c, ctx, acc.id, f(r, 'kind'), parseAmount(f(r, 'amount'), acc.currency), f(r, 'reason'), actor));
            }
            catch (e) {
                return fail(`/isler/${acc.job_id}`, e.message);
            }
            return back(`/isler/${acc.job_id}`, 'Düzeltme deftere eklendi');
        }
        if (path === '/istisnalar' && method === 'GET') {
            const cases = await many(ctx.db, `SELECT k.*, j.code FROM cases k LEFT JOIN jobs j ON j.id=k.job_id ORDER BY k.status, k.created_at DESC LIMIT 300`);
            return render('Müdahale', V.casesTable(cases, user.csrf), user, '/istisnalar', flash, err);
        }
        m = path.match(/^\/istisnalar\/([0-9a-f-]{36})\/coz$/);
        if (m && method === 'POST') {
            try {
                await tx(ctx.db, (c) => resolveCase(c, ctx, m[1], f(r, 'resolution'), actor));
            }
            catch (e) {
                return fail('/istisnalar', e.message);
            }
            return back('/istisnalar', 'İstisna kapatıldı');
        }
        if (path === '/ayarlar' && method === 'GET') {
            const s = await one(ctx.db, 'SELECT * FROM organization_settings WHERE id=1');
            const { policy } = await loadPolicy(ctx.db);
            const googleUrl = ctx.config.calendar.mode === 'LIVE' && ctx.config.calendar.clientId ? '/integrations/google/connect' : null;
            return render('Ayarlar', V.settingsPage(s, policy, await integrationHealth(ctx.db), user.csrf, googleUrl, ctx.config), user, '/ayarlar', flash, err);
        }
        if (path === '/ayarlar/otomasyon' && method === 'POST') {
            if (!user.roles.includes('ADMIN'))
                return fail('/ayarlar', 'Yönetici yetkisi gerekli');
            await ctx.db.query(`UPDATE organization_settings SET automation_enabled=$1, updated_at=now() WHERE id=1`, [f(r, 'enabled') === '1']);
            return back('/ayarlar', 'Kaydedildi');
        }
        if (path === '/ayarlar/politika' && method === 'POST') {
            if (!user.roles.includes('ADMIN'))
                return fail('/ayarlar', 'Yönetici yetkisi gerekli');
            const next = {};
            for (const k of Object.keys(DEFAULT_POLICY)) {
                const v = Number(f(r, k));
                if (!Number.isFinite(v) || v < 0)
                    return fail('/ayarlar', `Geçersiz değer: ${k}`);
                next[k] = v;
            }
            if (next.urgentParallelInquiries > 2)
                return fail('/ayarlar', 'Acil işte en fazla iki paralel sorgu açılabilir');
            await ctx.db.query(`UPDATE organization_settings SET policy=$1, policy_version=policy_version+1, updated_at=now() WHERE id=1`, [JSON.stringify(next)]);
            return back('/ayarlar', 'Yeni politika sürümü kaydedildi');
        }
        if (path === '/integrations/google/connect' && method === 'GET') {
            if (!ctx.config.calendar.clientId)
                return fail('/ayarlar', 'GOOGLE_CLIENT_ID tanımlı değil');
            const state = randomToken(16);
            const u = new URL('https://accounts.google.com/o/oauth2/v2/auth');
            u.search = new URLSearchParams({ client_id: ctx.config.calendar.clientId, redirect_uri: `${ctx.config.baseUrl}/integrations/google/callback`, response_type: 'code', scope: GOOGLE_SCOPE, access_type: 'offline', prompt: 'consent', state }).toString();
            return redirect(u.toString(), { 'Set-Cookie': `ct_gstate=${state}; Path=/integrations/google; HttpOnly; SameSite=Lax; Max-Age=600${secureCookie ? '; Secure' : ''}` });
        }
        if (path === '/integrations/google/callback' && method === 'GET') {
            const state = r.url.searchParams.get('state') ?? '';
            if (!r.cookies.ct_gstate || !safeEqual(state, r.cookies.ct_gstate))
                return fail('/ayarlar', 'Google bağlantısı doğrulanamadı');
            const code = r.url.searchParams.get('code') ?? '';
            const res = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ code, client_id: ctx.config.calendar.clientId, client_secret: ctx.config.calendar.clientSecret, redirect_uri: `${ctx.config.baseUrl}/integrations/google/callback`, grant_type: 'authorization_code' }) });
            const tok = await res.json();
            if (!res.ok || !tok.refresh_token)
                return fail('/ayarlar', 'Google yenileme token alınamadı');
            // calendar.app.created kapsamı: uygulama kendi özel operasyon takvimini oluşturur.
            const cal = await fetch('https://www.googleapis.com/calendar/v3/calendars', { method: 'POST', headers: { Authorization: `Bearer ${tok.access_token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ summary: 'Çince Tercüman Operasyon', timeZone: 'Europe/Istanbul' }) });
            const calJson = await cal.json();
            if (!cal.ok)
                return fail('/ayarlar', 'Operasyon takvimi oluşturulamadı');
            await ctx.db.query(`INSERT INTO google_oauth_tokens (id, refresh_token_enc, calendar_id, updated_at) VALUES (1,$1,$2,now())
        ON CONFLICT (id) DO UPDATE SET refresh_token_enc=EXCLUDED.refresh_token_enc, calendar_id=EXCLUDED.calendar_id, updated_at=now()`, [encrypt(ctx.config.appSecret, tok.refresh_token), calJson.id]);
            return back('/ayarlar', 'Google Calendar bağlandı; özel operasyon takvimi oluşturuldu');
        }
        // --- JSON API (Bölüm 14.1) ---
        if (isApi)
            return api(r, user, actor);
        return text('Bulunamadı', 404);
    }
    async function api(r, user, actor) {
        const now = ctx.clock.now();
        const { method, path } = r;
        if (path === '/api/dashboard' && method === 'GET')
            return json(await dashboard(ctx.db, now));
        if (path === '/api/jobs' && method === 'GET')
            return json(await jobRows(ctx.db, now));
        let m = path.match(/^\/api\/jobs\/([0-9a-f-]{36})$/);
        if (m && method === 'GET') {
            const d = await jobDetail(ctx.db, m[1], now);
            return d ? json(d) : json({ error: 'not_found' }, 404);
        }
        m = path.match(/^\/api\/jobs\/([0-9a-f-]{36})\/timeline$/);
        if (m && method === 'GET')
            return json(await many(ctx.db, `SELECT * FROM audit_log WHERE job_id=$1 ORDER BY occurred_at, id`, [m[1]]));
        m = path.match(/^\/api\/jobs\/([0-9a-f-]{36})\/commands$/);
        if (m && method === 'POST') {
            if (!can(user, 'OPERATIONS'))
                return json({ error: 'forbidden' }, 403);
            const b = r.json ?? {};
            const cur = await one(ctx.db, 'SELECT version FROM jobs WHERE id=$1', [m[1]]);
            if (!cur)
                return json({ error: 'not_found' }, 404);
            if (b.expected_version != null && b.expected_version !== cur.version)
                return json({ error: 'version_conflict', current_version: cur.version }, 409);
            try {
                await tx(ctx.db, async (c) => {
                    switch (b.command) {
                        case 'PauseAutomation': return setAutomationMode(c, ctx, m[1], b.mode === 'HUMAN_TAKEOVER' ? 'HUMAN_TAKEOVER' : 'PAUSED', actor, b.reason ?? '');
                        case 'ResumeAutomation': return setAutomationMode(c, ctx, m[1], 'AUTO', actor, b.reason ?? '');
                        case 'CancelJob': return cancelJob(c, ctx, m[1], actor, b.reason ?? '');
                        case 'RequestJobChange': return requestJobChange(c, ctx, m[1], b.change ?? {}, actor);
                        default: throw new CommandError('UNKNOWN', 'Desteklenmeyen komut');
                    }
                });
            }
            catch (e) {
                if (e instanceof CommandError)
                    return json({ error: e.code, message: e.message }, 422);
                throw e;
            }
            return json({ ok: true });
        }
        if (path === '/api/interpreters' && method === 'GET')
            return json(await listInterpreters(ctx.db));
        if (path === '/api/commissions' && method === 'GET')
            return json(await financeTotals(ctx.db, now));
        if (path === '/api/integrations/health' && method === 'GET')
            return json(await integrationHealth(ctx.db));
        return json({ error: 'not_found' }, 404);
    }
    return async function handler(req, res) {
        const chunks = [];
        let size = 0;
        for await (const ch of req) {
            size += ch.length;
            if (size > 1_000_000) {
                res.writeHead(413).end();
                return;
            }
            chunks.push(ch);
        }
        const raw = Buffer.concat(chunks);
        const url = new URL(req.url ?? '/', 'http://local');
        const ctype = req.headers['content-type'] ?? '';
        const r = {
            method: req.method ?? 'GET', url, path: url.pathname.replace(/\/$/, '') || '/', headers: req.headers, raw,
            form: ctype.includes('application/x-www-form-urlencoded') ? parseForm(raw.toString('utf8')) : {},
            json: ctype.includes('application/json') && raw.length ? safeJson(raw) : null,
            cookies: parseCookies(req.headers.cookie), ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || '',
        };
        let out;
        try {
            out = await route(r);
        }
        catch (e) {
            console.error('[http]', r.method, r.path, e);
            out = text('Sunucu hatası', 500);
        }
        res.writeHead(out.status, { ...SEC_HEADERS, ...out.headers });
        res.end(out.body);
    };
}
function safeJson(b) {
    try {
        return JSON.parse(b.toString('utf8'));
    }
    catch {
        return null;
    }
}
export function startServer(ctx, port) {
    const s = http.createServer(createHandler(ctx));
    s.listen(port);
    return s;
}
