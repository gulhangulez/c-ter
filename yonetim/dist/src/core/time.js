// Saat dilimi yardımcıları. Operasyon zaman damgaları UTC tutulur; kurallar alıcının yerel saatine göre uygulanır.
const fmtCache = new Map();
function fmt(tz) {
    let f = fmtCache.get(tz);
    if (!f) {
        f = new Intl.DateTimeFormat('en-US', {
            timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
        });
        fmtCache.set(tz, f);
    }
    return f;
}
export function zonedParts(t, tz) {
    const p = {};
    for (const x of fmt(tz).formatToParts(t))
        if (x.type !== 'literal')
            p[x.type] = Number(x.value);
    return { y: p.year, m: p.month, d: p.day, h: p.hour, mi: p.minute, s: p.second };
}
/** Yerel saat (tz) -> UTC Date. */
export function zonedTime(y, m, d, h, mi, tz) {
    let guess = Date.UTC(y, m - 1, d, h, mi);
    for (let i = 0; i < 3; i++) {
        const p = zonedParts(new Date(guess), tz);
        const asUtc = Date.UTC(p.y, p.m - 1, p.d, p.h, p.mi);
        const diff = asUtc - Date.UTC(y, m - 1, d, h, mi);
        if (diff === 0)
            break;
        guess -= diff;
    }
    return new Date(guess);
}
export function localDate(t, tz) {
    const p = zonedParts(t, tz);
    return `${p.y}-${String(p.m).padStart(2, '0')}-${String(p.d).padStart(2, '0')}`;
}
export function parseIsoDate(s) {
    const [y, m, d] = s.split('-').map(Number);
    return { y, m, d };
}
export function addDays(iso, n) {
    const { y, m, d } = parseIsoDate(iso);
    const t = new Date(Date.UTC(y, m - 1, d + n));
    return t.toISOString().slice(0, 10);
}
export function dayRange(start, end) {
    const out = [];
    for (let d = start; d <= end; d = addDays(d, 1))
        out.push(d);
    return out;
}
export function isWeekend(iso) {
    const { y, m, d } = parseIsoDate(iso);
    const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
    return wd === 0 || wd === 6;
}
export function addBusinessDays(iso, n) {
    let d = iso;
    let left = n;
    while (left > 0) {
        d = addDays(d, 1);
        if (!isWeekend(d))
            left--;
    }
    return d;
}
export function atLocal(iso, hour, tz, minute = 0) {
    const { y, m, d } = parseIsoDate(iso);
    return zonedTime(y, m, d, hour, minute, tz);
}
export const DEFAULT_WINDOW = { startHour: 9, endHour: 20 };
/** Gönderim penceresi dışındaysa bir sonraki pencere başlangıcına kaydırır. */
export function clampToWindow(t, tz, w = DEFAULT_WINDOW) {
    const p = zonedParts(t, tz);
    const today = localDate(t, tz);
    if (p.h < w.startHour)
        return atLocal(today, w.startHour, tz);
    if (p.h >= w.endHour)
        return atLocal(addDays(today, 1), w.startHour, tz);
    return t;
}
export function inWindow(t, tz, w = DEFAULT_WINDOW) {
    return clampToWindow(t, tz, w).getTime() === t.getTime();
}
/** Çalışma saati penceresi (varsayılan her gün 09–20 yerel) içinde `hours` saat ilerletir. */
export function addWorkingHours(from, hours, tz, w = DEFAULT_WINDOW) {
    let t = clampToWindow(from, tz, w);
    let left = hours * 60;
    while (left > 0) {
        const day = localDate(t, tz);
        const end = atLocal(day, w.endHour, tz);
        const avail = (end.getTime() - t.getTime()) / 60000;
        if (left <= avail)
            return new Date(t.getTime() + left * 60000);
        left -= avail;
        t = atLocal(addDays(day, 1), w.startHour, tz);
    }
    return t;
}
/** Sonraki uygun sabah (yarın 09:00 yerel; zaten gece yarısından sonra ve 09:00 öncesiyse bugün 09:00). */
export function nextMorning(from, tz, hour = 9) {
    const p = zonedParts(from, tz);
    const today = localDate(from, tz);
    if (p.h < hour)
        return atLocal(today, hour, tz);
    return atLocal(addDays(today, 1), hour, tz);
}
export function formatDateTr(iso) {
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    const { y, m, d } = parseIsoDate(iso);
    return `${d} ${months[m - 1]} ${y}`;
}
export function formatRangeTr(start, end) {
    if (!start)
        return '—';
    if (!end || end === start)
        return formatDateTr(start);
    const a = parseIsoDate(start);
    const b = parseIsoDate(end);
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    if (a.y === b.y && a.m === b.m)
        return `${a.d}–${b.d} ${months[a.m - 1]} ${a.y}`;
    if (a.y === b.y)
        return `${a.d} ${months[a.m - 1]} – ${b.d} ${months[b.m - 1]} ${a.y}`;
    return `${formatDateTr(start)} – ${formatDateTr(end)}`;
}
export function formatDateTimeTr(t, tz) {
    if (!t)
        return '—';
    const d = typeof t === 'string' ? new Date(t) : t;
    const p = zonedParts(d, tz);
    return `${formatDateTr(localDate(d, tz))} ${String(p.h).padStart(2, '0')}:${String(p.mi).padStart(2, '0')}`;
}
