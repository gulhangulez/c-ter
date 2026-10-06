// Google Calendar adaptörü (OAuth, tek yönlü senkron) + test adaptörü.
import type { CalendarEventBody } from '../domain/calendar.js';
import { ProviderError, classifyHttp, fetchWithTimeout } from './errors.js';

export interface RemoteEvent { id: string; status: string; summary: string; etag?: string }

export interface CalendarAdapter {
  readonly mode: 'FAKE' | 'LIVE' | 'DISABLED';
  calendarId(): Promise<string>;
  get(calendarId: string, eventId: string): Promise<RemoteEvent | null>;
  insert(calendarId: string, eventId: string, body: CalendarEventBody): Promise<RemoteEvent>;
  patch(calendarId: string, eventId: string, body: Partial<CalendarEventBody>): Promise<RemoteEvent>;
}

/** Deterministik etkinlik kimliği (base32hex: a–v, 0–9). Zaman aşımında ikinci kayıt açılmasını önler. */
export function eventIdFor(jobId: string, segmentKey: string, kind: string): string {
  return `ct${jobId.replace(/-/g, '')}${segmentKey}${kind}`.toLowerCase().replace(/[^a-v0-9]/g, '0');
}

export class FakeCalendar implements CalendarAdapter {
  readonly mode = 'FAKE' as const;
  events = new Map<string, CalendarEventBody & { id: string }>();
  inserts = 0;
  down = false;
  async calendarId() { return 'fake-operasyon-takvimi'; }
  private check() { if (this.down) throw new ProviderError('Test: takvim bağlantısı yok', { retryable: true, status: 503 }); }
  async get(_c: string, id: string) {
    this.check();
    const e = this.events.get(id);
    return e ? { id, status: e.status, summary: e.summary } : null;
  }
  async insert(_c: string, id: string, body: CalendarEventBody) {
    this.check();
    if (this.events.has(id)) throw new ProviderError('Test: etkinlik zaten var', { retryable: false, permanent: true, status: 409 });
    this.inserts++;
    this.events.set(id, { ...body, id });
    return { id, status: body.status, summary: body.summary };
  }
  async patch(_c: string, id: string, body: Partial<CalendarEventBody>) {
    this.check();
    const cur = this.events.get(id);
    if (!cur) throw new ProviderError('Test: etkinlik yok', { retryable: false, permanent: true, status: 404 });
    const next = { ...cur, ...body } as CalendarEventBody & { id: string };
    this.events.set(id, next);
    return { id, status: next.status, summary: next.summary };
  }
  /** Test: Google'da elle silme. */
  manualDelete(id: string) {
    const e = this.events.get(id);
    if (e) this.events.set(id, { ...e, status: 'cancelled' });
  }
}

export interface GoogleCreds { clientId: string; clientSecret: string; getRefreshToken: () => Promise<string | null>; getCalendarId: () => Promise<string | null> }

export class GoogleCalendar implements CalendarAdapter {
  readonly mode = 'LIVE' as const;
  private token: { value: string; exp: number } | null = null;
  constructor(private creds: GoogleCreds) {}

  async calendarId(): Promise<string> {
    const id = await this.creds.getCalendarId();
    if (!id) throw new ProviderError('Google takvim kimliği ayarlanmamış', { retryable: false, permanent: true });
    return id;
  }

  private async accessToken(): Promise<string> {
    if (this.token && this.token.exp > Date.now() + 60_000) return this.token.value;
    const refresh = await this.creds.getRefreshToken();
    if (!refresh) throw new ProviderError('Google bağlantısı kurulmamış (yenileme token yok)', { retryable: false, permanent: true });
    const res = await fetchWithTimeout('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: this.creds.clientId, client_secret: this.creds.clientSecret, refresh_token: refresh, grant_type: 'refresh_token' }),
    });
    const txt = await res.text();
    if (!res.ok) throw classifyHttp(res.status, txt);
    const j = JSON.parse(txt);
    this.token = { value: j.access_token, exp: Date.now() + (j.expires_in ?? 3600) * 1000 };
    return this.token.value;
  }

  private async call(method: string, path: string, body?: unknown): Promise<any> {
    const res = await fetchWithTimeout(`https://www.googleapis.com/calendar/v3${path}`, {
      method,
      headers: { Authorization: `Bearer ${await this.accessToken()}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    const txt = await res.text();
    if (res.status === 404 && method === 'GET') return null;
    if (!res.ok) throw classifyHttp(res.status, txt);
    return txt ? JSON.parse(txt) : null;
  }

  async get(c: string, id: string) {
    const e = await this.call('GET', `/calendars/${encodeURIComponent(c)}/events/${id}`);
    return e ? { id: e.id, status: e.status, summary: e.summary, etag: e.etag } : null;
  }
  async insert(c: string, id: string, body: CalendarEventBody) {
    const e = await this.call('POST', `/calendars/${encodeURIComponent(c)}/events`, { ...body, id });
    return { id: e.id, status: e.status, summary: e.summary, etag: e.etag };
  }
  async patch(c: string, id: string, body: Partial<CalendarEventBody>) {
    const e = await this.call('PATCH', `/calendars/${encodeURIComponent(c)}/events/${id}`, body);
    return { id: e.id, status: e.status, summary: e.summary, etag: e.etag };
  }
}

export const GOOGLE_SCOPE = 'https://www.googleapis.com/auth/calendar.app.created';
