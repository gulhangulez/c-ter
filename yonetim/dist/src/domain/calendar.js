// Bölüm 9: uygulama durumu -> Google Calendar etkinliği. Veritabanı asıl kayıttır.
import { addDays } from '../core/time.js';
import { SERVICE_LABELS } from './extract.js';
const PREFIX = {
    INFO_PENDING: '[BEKLEMEDE]', MATCHING: '[BEKLEMEDE]', HANDOFF_PENDING: '[YÖNLENDİRİLİYOR]', NEGOTIATING: '[GÖRÜŞME BEKLENİYOR]',
    CONFIRMED: '[KESİNLEŞTİ]', IN_PROGRESS: '[KESİNLEŞTİ]', COMPLETION_PENDING: '[SONUÇ BEKLENİYOR]', COMPLETED: '[TAMAMLANDI]',
};
export function calendarDecision(j) {
    if (['CANCELLED', 'UNFULFILLED', 'DORMANT'].includes(j.status))
        return { kind: 'cancel' };
    if (!j.start_date || !j.end_date)
        return { kind: 'none' };
    const prefix = PREFIX[j.status];
    if (!prefix)
        return { kind: 'none' };
    const confirmed = ['CONFIRMED', 'IN_PROGRESS', 'COMPLETION_PENDING', 'COMPLETED'].includes(j.status);
    const parts = [prefix + ' ' + j.code, j.city || '—', j.service_type ? SERVICE_LABELS[j.service_type] ?? j.service_type : '—'];
    if (j.interpreter_name)
        parts.push(j.interpreter_name);
    return {
        kind: 'upsert',
        event: {
            summary: parts.join(' | '),
            // Müşteri telefonu, komisyon veya görüşme içeriği takvime yazılmaz.
            description: `İş kodu: ${j.code}\nPanel (giriş gerekir): ${j.panel_url}`,
            start: { date: j.start_date },
            end: { date: addDays(j.end_date, 1) }, // tüm gün etkinlikte bitiş hariçtir (T18)
            status: confirmed ? 'confirmed' : 'tentative',
            transparency: confirmed ? 'opaque' : 'transparent',
            visibility: 'private',
            extendedProperties: { private: { job_id: j.id, job_version: String(j.version), event_kind: 'service' } },
        },
    };
}
