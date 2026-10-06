import type { Config } from './core/config.js';
import { systemClock, type Clock } from './core/clock.js';
import { createPool, one } from './core/db.js';
import { decrypt } from './core/crypto.js';
import { createWhatsApp } from './adapters/whatsapp.js';
import { FakeCalendar, GoogleCalendar, type CalendarAdapter } from './adapters/calendar.js';
import { createPayments } from './adapters/payments.js';
import { createNotifier } from './adapters/notifier.js';
import type { Ctx } from './services/core.js';

export function createContext(config: Config, clock: Clock = systemClock): Ctx {
  const db = createPool(config.databaseUrl);
  let calendar: CalendarAdapter | null = null;
  if (config.calendar.mode === 'FAKE') calendar = new FakeCalendar();
  else if (config.calendar.mode === 'LIVE') {
    if (!config.calendar.clientId || !config.calendar.clientSecret) throw new Error('CALENDAR_MODE=LIVE için GOOGLE_CLIENT_ID ve GOOGLE_CLIENT_SECRET gerekli');
    calendar = new GoogleCalendar({
      clientId: config.calendar.clientId,
      clientSecret: config.calendar.clientSecret,
      getRefreshToken: async () => {
        const r = await one(db, 'SELECT refresh_token_enc FROM google_oauth_tokens WHERE id=1');
        return r ? decrypt(config.appSecret, r.refresh_token_enc) : null;
      },
      getCalendarId: async () => {
        const r = await one(db, 'SELECT calendar_id FROM google_oauth_tokens WHERE id=1');
        return r?.calendar_id ?? config.calendar.calendarId ?? null;
      },
    });
  }
  return {
    db, clock, config,
    wa: createWhatsApp(config.whatsapp),
    calendar,
    payments: createPayments(config.payments.mode, config.payments.webhookSecret),
    notifier: createNotifier(config.email),
  };
}
