import { ProviderError, classifyHttp, fetchWithTimeout } from './errors.js';
/** Deterministik etkinlik kimliği (base32hex: a–v, 0–9). Zaman aşımında ikinci kayıt açılmasını önler. */
export function eventIdFor(jobId, segmentKey, kind) {
    return `ct${jobId.replace(/-/g, '')}${segmentKey}${kind}`.toLowerCase().replace(/[^a-v0-9]/g, '0');
}
export class FakeCalendar {
    mode = 'FAKE';
    events = new Map();
    inserts = 0;
    down = false;
    async calendarId() { return 'fake-operasyon-takvimi'; }
    check() { if (this.down)
        throw new ProviderError('Test: takvim bağlantısı yok', { retryable: true, status: 503 }); }
    async get(_c, id) {
        this.check();
        const e = this.events.get(id);
        return e ? { id, status: e.status, summary: e.summary } : null;
    }
    async insert(_c, id, body) {
        this.check();
        if (this.events.has(id))
            throw new ProviderError('Test: etkinlik zaten var', { retryable: false, permanent: true, status: 409 });
        this.inserts++;
        this.events.set(id, { ...body, id });
        return { id, status: body.status, summary: body.summary };
    }
    async patch(_c, id, body) {
        this.check();
        const cur = this.events.get(id);
        if (!cur)
            throw new ProviderError('Test: etkinlik yok', { retryable: false, permanent: true, status: 404 });
        const next = { ...cur, ...body };
        this.events.set(id, next);
        return { id, status: next.status, summary: next.summary };
    }
    /** Test: Google'da elle silme. */
    manualDelete(id) {
        const e = this.events.get(id);
        if (e)
            this.events.set(id, { ...e, status: 'cancelled' });
    }
}
export class GoogleCalendar {
    creds;
    mode = 'LIVE';
    token = null;
    constructor(creds) {
        this.creds = creds;
    }
    async calendarId() {
        const id = await this.creds.getCalendarId();
        if (!id)
            throw new ProviderError('Google takvim kimliği ayarlanmamış', { retryable: false, permanent: true });
        return id;
    }
    async accessToken() {
        if (this.token && this.token.exp > Date.now() + 60_000)
            return this.token.value;
        const refresh = await this.creds.getRefreshToken();
        if (!refresh)
            throw new ProviderError('Google bağlantısı kurulmamış (yenileme token yok)', { retryable: false, permanent: true });
        const res = await fetchWithTimeout('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ client_id: this.creds.clientId, client_secret: this.creds.clientSecret, refresh_token: refresh, grant_type: 'refresh_token' }),
        });
        const txt = await res.text();
        if (!res.ok)
            throw classifyHttp(res.status, txt);
        const j = JSON.parse(txt);
        this.token = { value: j.access_token, exp: Date.now() + (j.expires_in ?? 3600) * 1000 };
        return this.token.value;
    }
    async call(method, path, body) {
        const res = await fetchWithTimeout(`https://www.googleapis.com/calendar/v3${path}`, {
            method,
            headers: { Authorization: `Bearer ${await this.accessToken()}`, 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : undefined,
        });
        const txt = await res.text();
        if (res.status === 404 && method === 'GET')
            return null;
        if (!res.ok)
            throw classifyHttp(res.status, txt);
        return txt ? JSON.parse(txt) : null;
    }
    async get(c, id) {
        const e = await this.call('GET', `/calendars/${encodeURIComponent(c)}/events/${id}`);
        return e ? { id: e.id, status: e.status, summary: e.summary, etag: e.etag } : null;
    }
    async insert(c, id, body) {
        const e = await this.call('POST', `/calendars/${encodeURIComponent(c)}/events`, { ...body, id });
        return { id: e.id, status: e.status, summary: e.summary, etag: e.etag };
    }
    async patch(c, id, body) {
        const e = await this.call('PATCH', `/calendars/${encodeURIComponent(c)}/events/${id}`, body);
        return { id: e.id, status: e.status, summary: e.summary, etag: e.etag };
    }
}
export const GOOGLE_SCOPE = 'https://www.googleapis.com/auth/calendar.app.created';
