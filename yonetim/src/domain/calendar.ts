// Bölüm 9: uygulama durumu -> Google Calendar etkinliği. Veritabanı asıl kayıttır.
import { addDays } from '../core/time.js';
import { SERVICE_LABELS, ServiceType } from './extract.js';

export interface CalendarJobView {
  id: string;
  code: string;
  version: number;
  status: string;
  city: string | null;
  service_type: string | null;
  start_date: string | null;
  end_date: string | null;
  interpreter_name?: string | null;
  panel_url: string;
}

export interface CalendarEventBody {
  summary: string;
  description: string;
  start: { date: string };
  end: { date: string };
  status: 'tentative' | 'confirmed' | 'cancelled';
  transparency: 'opaque' | 'transparent';
  visibility: 'private';
  extendedProperties: { private: Record<string, string> };
}

export type CalendarDecision = { kind: 'none' } | { kind: 'upsert'; event: CalendarEventBody } | { kind: 'cancel' };

const PREFIX: Record<string, string> = {
  INFO_PENDING: '[BEKLEMEDE]', MATCHING: '[BEKLEMEDE]', HANDOFF_PENDING: '[YÖNLENDİRİLİYOR]', NEGOTIATING: '[GÖRÜŞME BEKLENİYOR]',
  CONFIRMED: '[KESİNLEŞTİ]', IN_PROGRESS: '[KESİNLEŞTİ]', COMPLETION_PENDING: '[SONUÇ BEKLENİYOR]', COMPLETED: '[TAMAMLANDI]',
};

export function calendarDecision(j: CalendarJobView): CalendarDecision {
  if (['CANCELLED', 'UNFULFILLED', 'DORMANT'].includes(j.status)) return { kind: 'cancel' };
  if (!j.start_date || !j.end_date) return { kind: 'none' };
  const prefix = PREFIX[j.status];
  if (!prefix) return { kind: 'none' };
  const confirmed = ['CONFIRMED', 'IN_PROGRESS', 'COMPLETION_PENDING', 'COMPLETED'].includes(j.status);
  const parts = [prefix + ' ' + j.code, j.city || '—', j.service_type ? SERVICE_LABELS[j.service_type as ServiceType] ?? j.service_type : '—'];
  if (j.interpreter_name) parts.push(j.interpreter_name);
  return {
    kind: 'upsert',
    event: {
      summary: parts.join(' | '),
      // Müşteri telefonu, komisyon veya görüşme içeriği takvime yazılmaz.
      description: `İş kodu: ${j.code}\nPanel (giriş gerekir): ${j.panel_url}`,
      start: { date: j.start_date },
      end: { date: addDays(j.end_date, 1) },   // tüm gün etkinlikte bitiş hariçtir (T18)
      status: confirmed ? 'confirmed' : 'tentative',
      transparency: confirmed ? 'opaque' : 'transparent',
      visibility: 'private',
      extendedProperties: { private: { job_id: j.id, job_version: String(j.version), event_kind: 'service' } },
    },
  };
}
