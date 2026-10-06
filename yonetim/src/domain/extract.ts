// Kural tabanlı veri çıkarımı. Bölüm 12.3'teki çıkarım sözleşmesini üretir.
// Çıktı yalnızca bir ÖNERİDİR: iş kuralları doğrular, müşteri özetle onaylar.
// Mesaj metni talimat değil veridir; burada hiçbir komut çalıştırılmaz.
import { addDays, dayRange, localDate, parseIsoDate, zonedParts } from '../core/time.js';

export type ServiceType = 'CHINA_INTERPRETER' | 'MACHINE_INSTALLATION' | 'FACTORY_VISIT' | 'FAIR_VISIT' | 'INTERPRETING';

export const SERVICE_LABELS: Record<ServiceType, string> = {
  CHINA_INTERPRETER: "Çin'de tercümanlık",
  MACHINE_INSTALLATION: 'Makine kurulumu / teknik saha tercümanlığı',
  FACTORY_VISIT: 'Fabrika ziyareti tercümanlığı',
  FAIR_VISIT: 'Fuar ziyareti tercümanlığı',
  INTERPRETING: 'Sözlü tercümanlık',
};

export type Intent = 'NEW_INTERPRETING_REQUEST' | 'OUT_OF_SCOPE' | 'UNKNOWN';

export interface Extraction {
  schema_version: '1.0';
  source_message_id: string | null;
  candidate_job_code: string | null;
  intent: Intent;
  extracted_fields: {
    service_type: ServiceType | null;
    country_code: string | null;
    city: string | null;
    city_key: string | null;
    start_date: string | null;
    end_date: string | null;
    service_days: string[] | null;
    customer_name: string | null;
    technical_subject: string | null;
  };
  evidence: Record<string, string>;
  ambiguities: string[];
  missing_fields: string[];
  requires_customer_summary_confirmation: true;
  suggested_next_action: 'ASK_MISSING_FIELDS' | 'CONFIRM_SUMMARY' | 'EXPLAIN_SCOPE';
}

/** Türkçe karakterleri sadeleştirip küçük harfe çevirir (eşleştirme anahtarı). */
export function fold(s: string): string {
  return s
    .toLocaleLowerCase('tr')
    .replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i').replace(/[öÖ]/g, 'o')
    .replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u').replace(/[âÂ]/g, 'a').replace(/[îÎ]/g, 'i').replace(/[ûÛ]/g, 'u')
    .replace(/[’`´]/g, "'");
}

interface CityInfo { label: string; country: string; tz: string }
const TR = (label: string): CityInfo => ({ label, country: 'TR', tz: 'Europe/Istanbul' });
const CN = (label: string): CityInfo => ({ label, country: 'CN', tz: 'Asia/Shanghai' });

export const CITIES: Record<string, CityInfo> = {
  istanbul: TR('İstanbul'), ankara: TR('Ankara'), izmir: TR('İzmir'), bursa: TR('Bursa'), kocaeli: TR('Kocaeli'),
  gebze: TR('Gebze'), izmit: TR('İzmit'), sakarya: TR('Sakarya'), adapazari: TR('Adapazarı'), tekirdag: TR('Tekirdağ'),
  corlu: TR('Çorlu'), cerkezkoy: TR('Çerkezköy'), edirne: TR('Edirne'), kirklareli: TR('Kırklareli'), balikesir: TR('Balıkesir'),
  manisa: TR('Manisa'), aydin: TR('Aydın'), denizli: TR('Denizli'), mugla: TR('Muğla'), antalya: TR('Antalya'),
  isparta: TR('Isparta'), konya: TR('Konya'), kayseri: TR('Kayseri'), eskisehir: TR('Eskişehir'), afyon: TR('Afyon'),
  kutahya: TR('Kütahya'), usak: TR('Uşak'), bilecik: TR('Bilecik'), bolu: TR('Bolu'), duzce: TR('Düzce'),
  zonguldak: TR('Zonguldak'), karabuk: TR('Karabük'), kastamonu: TR('Kastamonu'), samsun: TR('Samsun'), trabzon: TR('Trabzon'),
  rize: TR('Rize'), ordu: TR('Ordu'), giresun: TR('Giresun'), corum: TR('Çorum'), amasya: TR('Amasya'), tokat: TR('Tokat'),
  sivas: TR('Sivas'), erzurum: TR('Erzurum'), erzincan: TR('Erzincan'), malatya: TR('Malatya'), elazig: TR('Elazığ'),
  diyarbakir: TR('Diyarbakır'), gaziantep: TR('Gaziantep'), antep: TR('Gaziantep'), sanliurfa: TR('Şanlıurfa'), urfa: TR('Şanlıurfa'),
  adana: TR('Adana'), mersin: TR('Mersin'), hatay: TR('Hatay'), iskenderun: TR('İskenderun'), osmaniye: TR('Osmaniye'),
  kahramanmaras: TR('Kahramanmaraş'), maras: TR('Kahramanmaraş'), adiyaman: TR('Adıyaman'), mardin: TR('Mardin'), batman: TR('Batman'),
  van: TR('Van'), aksaray: TR('Aksaray'), nigde: TR('Niğde'), nevsehir: TR('Nevşehir'), karaman: TR('Karaman'),
  kirikkale: TR('Kırıkkale'), kirsehir: TR('Kırşehir'), yozgat: TR('Yozgat'), canakkale: TR('Çanakkale'), yalova: TR('Yalova'),
  // Çin
  guangzhou: CN('Guangzhou'), kanton: CN('Guangzhou'), shanghai: CN('Şanghay'), sanghay: CN('Şanghay'), shenzhen: CN('Shenzhen'),
  yiwu: CN('Yiwu'), ningbo: CN('Ningbo'), hangzhou: CN('Hangzhou'), beijing: CN('Pekin'), pekin: CN('Pekin'),
  foshan: CN('Foshan'), dongguan: CN('Dongguan'), xiamen: CN('Xiamen'), qingdao: CN('Qingdao'), tianjin: CN('Tianjin'),
  suzhou: CN('Suzhou'), wuxi: CN('Wuxi'), jinan: CN('Jinan'), zhengzhou: CN('Zhengzhou'), chengdu: CN('Chengdu'),
  chongqing: CN('Chongqing'), wuhan: CN('Wuhan'), changzhou: CN('Changzhou'), wenzhou: CN('Wenzhou'), zhongshan: CN('Zhongshan'),
  shantou: CN('Shantou'), nanjing: CN('Nanjing'), hefei: CN('Hefei'), xian: CN("Xi'an"), shenyang: CN('Shenyang'),
};

export function cityInfo(key: string | null | undefined): CityInfo | null {
  return key ? CITIES[key] ?? null : null;
}

const MONTHS: Record<string, number> = {
  ocak: 1, subat: 2, mart: 3, nisan: 4, mayis: 5, haziran: 6, temmuz: 7, agustos: 8, eylul: 9, ekim: 10, kasim: 11, aralik: 12,
};
const MONTH_RE = '(ocak|subat|mart|nisan|mayis|haziran|temmuz|agustos|eylul|ekim|kasim|aralik)[a-z]*';

function iso(y: number, m: number, d: number): string | null {
  const t = new Date(Date.UTC(y, m - 1, d));
  if (t.getUTCFullYear() !== y || t.getUTCMonth() !== m - 1 || t.getUTCDate() !== d) return null;
  return t.toISOString().slice(0, 10);
}

/** Yıl verilmemişse bugünden önce kalmayacak ilk yıl seçilir; özet müşteriye gösterilip doğrulatılır. */
function inferYear(m: number, d: number, today: string): number {
  const { y } = parseIsoDate(today);
  const cand = iso(y, m, d);
  return cand && cand >= today ? y : y + 1;
}

export interface DateResult {
  start: string | null;
  end: string | null;
  days: string[] | null;
  evidence: string | null;
  ambiguities: string[];
  yearInferred: boolean;
}

export function extractDates(text: string, now: Date, tz: string): DateResult {
  const t = fold(text);
  const today = localDate(now, tz);
  const res: DateResult = { start: null, end: null, days: null, evidence: null, ambiguities: [], yearInferred: false };
  let m: RegExpMatchArray | null;

  // 12.10.2026 - 14.10.2026 / 12/10/2026
  m = t.match(/(\d{1,2})[./](\d{1,2})[./](\d{4})(?:\s*[-–—]\s*(\d{1,2})[./](\d{1,2})[./](\d{4}))?/);
  if (m) {
    const a = iso(+m[3], +m[2], +m[1]);
    const b = m[4] ? iso(+m[6], +m[5], +m[4]) : a;
    if (a && b) Object.assign(res, { start: a, end: b, evidence: m[0] });
  }
  // 12 Ekim - 3 Kasım 2026
  if (!res.start && (m = t.match(new RegExp(`(\\d{1,2})\\s+${MONTH_RE}\\s*[-–—]\\s*(\\d{1,2})\\s+${MONTH_RE}(?:\\s+(\\d{4}))?`)))) {
    const m1 = MONTHS[m[2]], m2 = MONTHS[m[4]];
    const y2 = m[5] ? +m[5] : inferYear(m2, +m[3], today);
    const y1 = m1 > m2 ? y2 - 1 : y2;
    res.yearInferred = !m[5];
    const a = iso(y1, m1, +m[1]), b = iso(y2, m2, +m[3]);
    if (a && b) Object.assign(res, { start: a, end: b, evidence: m[0] });
  }
  // 12, 14 ve 16 Ekim (kesintili günler)
  if (!res.start && (m = t.match(new RegExp(`((?:\\d{1,2}\\s*(?:,|ve)\\s*)+\\d{1,2})\\s+${MONTH_RE}(?:\\s+(\\d{4}))?`)))) {
    const nums = m[1].split(/\s*(?:,|ve)\s*/).map(Number);
    const mo = MONTHS[m[2]];
    const y = m[3] ? +m[3] : inferYear(mo, nums[0], today);
    res.yearInferred = !m[3];
    const days = nums.map((d) => iso(y, mo, d)).filter((x): x is string => !!x).sort();
    if (days.length === nums.length) Object.assign(res, { start: days[0], end: days[days.length - 1], days, evidence: m[0] });
  }
  // 12-14 Ekim 2026
  if (!res.start && (m = t.match(new RegExp(`(\\d{1,2})\\s*[-–—]\\s*(\\d{1,2})\\s+${MONTH_RE}(?:\\s+(\\d{4}))?`)))) {
    const mo = MONTHS[m[3]];
    const y = m[4] ? +m[4] : inferYear(mo, +m[1], today);
    res.yearInferred = !m[4];
    const a = iso(y, mo, +m[1]), b = iso(y, mo, +m[2]);
    if (a && b) Object.assign(res, { start: a, end: b, evidence: m[0] });
  }
  // 15 Ekim (2026)
  if (!res.start && (m = t.match(new RegExp(`(\\d{1,2})\\s+${MONTH_RE}(?:\\s+(\\d{4}))?`)))) {
    const mo = MONTHS[m[2]];
    const y = m[3] ? +m[3] : inferYear(mo, +m[1], today);
    res.yearInferred = !m[3];
    const a = iso(y, mo, +m[1]);
    if (a) Object.assign(res, { start: a, end: a, evidence: m[0] });
  }
  // Göreli ifadeler: mesajın alındığı zaman ve bilinen saat dilimiyle kesin tarihe çevrilir (T03).
  if (!res.start) {
    if ((m = t.match(/\b(yarindan sonra|obur gun|ertesi gun)\b/))) {
      Object.assign(res, { start: addDays(today, 2), end: addDays(today, 2), evidence: m[0] });
    } else if ((m = t.match(/\byarin\b/))) {
      Object.assign(res, { start: addDays(today, 1), end: addDays(today, 1), evidence: m[0] });
    } else if ((m = t.match(/\bbugun\b/))) {
      Object.assign(res, { start: today, end: today, evidence: m[0] });
    } else if ((m = t.match(/\bayin (\d{1,2})/))) {
      const { y, m: mo } = parseIsoDate(today);
      const a = iso(y, mo, +m[1]);
      if (a && a >= today) Object.assign(res, { start: a, end: a, evidence: m[0] });
      else res.ambiguities.push('Hangi ayın kastedildiği belirsiz');
    } else if (/\b(gelecek|onumuzdeki|haftaya)\b.*\bhafta|\bhaftaya\b|\bay sonu|\bayin sonu/.test(t)) {
      res.ambiguities.push('Kesin günler belirtilmemiş');
    }
  }
  // "3 gün" gibi süre: tek başlangıç günü verilmişse bitiş hesaplanır.
  const dur = t.match(/(\d{1,2})\s*gun(?:luk|luk)?\b/);
  if (res.start && res.start === res.end && dur && +dur[1] > 1 && +dur[1] <= 60) {
    res.end = addDays(res.start, +dur[1] - 1);
  }
  if (res.start && res.end) {
    if (res.end < res.start) {
      res.ambiguities.push('Bitiş tarihi başlangıçtan önce');
      res.start = res.end = null;
    } else if (res.start < today) {
      res.ambiguities.push('Tarih geçmişte kalıyor');
      res.start = res.end = null;
    } else if (dayRange(res.start, res.end).length > 60) {
      res.ambiguities.push('Gün sayısı olağan dışı uzun');
      res.start = res.end = null;
    }
  }
  if (res.start && res.end && !res.days) res.days = dayRange(res.start, res.end);
  return res;
}

export function extractCity(text: string): { key: string; info: CityInfo; evidence: string } | null {
  const t = fold(text);
  for (const key of Object.keys(CITIES)) {
    const m = t.match(new RegExp(`(?:^|[^a-z])(${key})(?:'?(?:da|de|ta|te|dan|den|tan|ten|ya|ye|a|e|i|u|in|un|nin|nun|daki|deki|taki|teki|li|lu))?(?![a-z])`));
    if (m) return { key, info: CITIES[key], evidence: m[0].trim() };
  }
  return null;
}

export function extractService(text: string): { type: ServiceType; evidence: string } | null {
  const t = fold(text);
  const rules: [RegExp, ServiceType][] = [
    [/(makine|kurulum|montaj|devreye alma|teknik servis|teknik destek|saha)/, 'MACHINE_INSTALLATION'],
    [/(fuar|canton|kanton fuar)/, 'FAIR_VISIT'],
    [/(fabrika|tedarikci|uretici ziyaret)/, 'FACTORY_VISIT'],
  ];
  for (const [re, type] of rules) {
    const m = t.match(re);
    if (m) return { type, evidence: m[0] };
  }
  return null;
}

const OUT_OF_SCOPE_RE = /(yazili ceviri|belge cevir|noter|yeminli|evrak cevir|urun arastir|urun getir|tur paketi)/;

export function extractName(text: string): string | null {
  const m = text.match(/(?:ad[ıi]m|ismim|ben)\s+([A-ZÇĞİÖŞÜ][a-zçğıöşü]+(?:\s+[A-ZÇĞİÖŞÜ][a-zçğıöşü]+){0,2})/);
  return m ? m[1] : null;
}

export interface DraftFields {
  service_type: ServiceType | null;
  country_code: string | null;
  city: string | null;
  city_key: string | null;
  start_date: string | null;
  end_date: string | null;
  service_days: string[] | null;
  customer_name: string | null;
  technical_subject: string | null;
}

export function requiredMissing(f: DraftFields): string[] {
  const miss: string[] = [];
  if (!f.city && !f.country_code) miss.push('city');
  else if (!f.city) miss.push('city');
  if (!f.start_date || !f.end_date) miss.push('dates');
  if (!f.service_type) miss.push('service_type');
  if (!f.customer_name) miss.push('customer_name');
  if (f.service_type === 'MACHINE_INSTALLATION' && !f.technical_subject) miss.push('technical_subject');
  return miss;
}

export const FIELD_QUESTIONS: Record<string, string> = {
  city: 'hizmetin yapılacağı şehir',
  dates: 'kesin hizmet tarihleri (örneğin 12–14 Ekim 2026)',
  service_type: 'hizmet türü (makine kurulumu, fabrika ziyareti, fuar ziyareti veya genel tercümanlık)',
  customer_name: 'adınız ve varsa firma adınız',
  technical_subject: 'kurulacak makine veya teknik konu (kısaca)',
};

/**
 * Mesajdan alan çıkarır. `pendingField` verilmişse (sistem az önce o alanı sorduysa) serbest metin o alana yazılabilir.
 */
export function extract(text: string, now: Date, tz: string, opts: { messageId?: string; pendingField?: string | null; country?: string | null } = {}): Extraction {
  const t = fold(text);
  const out: Extraction = {
    schema_version: '1.0',
    source_message_id: opts.messageId ?? null,
    candidate_job_code: (text.match(/CT-\d{4}-\d{6}/i) || [null])[0]?.toUpperCase() ?? null,
    intent: 'UNKNOWN',
    extracted_fields: {
      service_type: null, country_code: null, city: null, city_key: null, start_date: null, end_date: null,
      service_days: null, customer_name: null, technical_subject: null,
    },
    evidence: {},
    ambiguities: [],
    missing_fields: [],
    requires_customer_summary_confirmation: true,
    suggested_next_action: 'ASK_MISSING_FIELDS',
  };
  if (OUT_OF_SCOPE_RE.test(t) && !/sozlu|tercuman/.test(t)) {
    out.intent = 'OUT_OF_SCOPE';
    out.suggested_next_action = 'EXPLAIN_SCOPE';
    return out;
  }
  const f = out.extracted_fields;
  const city = extractCity(text);
  if (city) {
    f.city = city.info.label; f.city_key = city.key; f.country_code = city.info.country; out.evidence.city = city.evidence;
  } else if (/\bcin(de|'de|e|'e)?\b/.test(t)) {
    f.country_code = 'CN'; out.evidence.country = 'Çin';
  }
  const dates = extractDates(text, now, tz);
  if (dates.start) {
    f.start_date = dates.start; f.end_date = dates.end; f.service_days = dates.days; out.evidence.dates = dates.evidence || '';
  }
  out.ambiguities.push(...dates.ambiguities);
  const svc = extractService(text);
  if (svc) { f.service_type = svc.type; out.evidence.service_type = svc.evidence; }
  else if (/tercuman|cevirmen|terciman/.test(t) && (f.country_code === 'CN' || opts.country === 'CN')) f.service_type = 'CHINA_INTERPRETER';
  else if (/tercuman|cevirmen/.test(t) && f.country_code === 'TR') f.service_type = 'INTERPRETING';
  const name = extractName(text);
  if (name) { f.customer_name = name; out.evidence.customer_name = name; }

  // Sistem bir alanı sorduysa ve metinden başka bir şey çıkmadıysa yanıtı o alana yaz.
  const clean = text.trim();
  if (opts.pendingField === 'customer_name' && !f.customer_name && clean.length >= 2 && clean.length <= 80 && !/\d{3}/.test(clean)) {
    f.customer_name = clean.replace(/^(ad[ıi]m|ismim|ben)\s+/i, '');
  }
  if (opts.pendingField === 'technical_subject' && !f.technical_subject && clean.length >= 2) {
    f.technical_subject = clean.slice(0, 300);
  }
  if (Object.values(f).some((v) => v !== null) || /tercuman|cevirmen/.test(t)) out.intent = 'NEW_INTERPRETING_REQUEST';
  return out;
}

export function mergeDraft(cur: DraftFields, ex: Extraction['extracted_fields']): DraftFields {
  const next = { ...cur };
  for (const k of Object.keys(ex) as (keyof DraftFields)[]) {
    const v = ex[k];
    if (v !== null && v !== undefined) (next as any)[k] = v;
  }
  if (ex.city_key && !ex.country_code) next.country_code = CITIES[ex.city_key]?.country ?? next.country_code;
  return next;
}

export function serviceTimezone(f: { city_key: string | null; country_code: string | null }): string {
  const c = cityInfo(f.city_key);
  if (c) return c.tz;
  return f.country_code === 'CN' ? 'Asia/Shanghai' : 'Europe/Istanbul';
}

// --- Yanıt sınıflandırma ---

export function classifyYesNo(text: string): 'YES' | 'NO' | null {
  const t = fold(text).trim();
  if (/^(evet|dogru|tamam|onayliyorum|onay|ok|olur|aynen|evet dogru|dogru evet|kabul)\b/.test(t)) return 'YES';
  if (/^(hayir|yanlis|degil|duzelt|hatali)\b/.test(t)) return 'NO';
  return null;
}

export type Availability = 'AVAILABLE' | 'DECLINED' | 'CONDITIONAL' | 'AMBIGUOUS';

export function classifyAvailability(text: string): Availability {
  const t = fold(text).trim();
  if (/(sadece|yalniz(ca)?|sartim|sartli|sart var|ama |ancak|konaklama|ilk gun|son gun|bir kismi)/.test(t)) return 'CONDITIONAL';
  if (/(uygun degil|musait degil|degilim|dolu|yapamam|gelemem|hayir|maalesef)/.test(t)) return 'DECLINED';
  if (/(olabilir|belki|bakarim|bakayim|sanirim|muhtemelen|teyit edeyim)/.test(t)) return 'AMBIGUOUS';
  if (/(musaitim|uygunum|musait|evet|bosum|yapabilirim|gelebilirim)/.test(t)) return 'AVAILABLE';
  return 'AMBIGUOUS';
}

export function isOptOut(text: string): boolean {
  const t = fold(text).trim();
  return /^(stop|dur|durdur)$/.test(t) || /(mesaj istemiyorum|iletisimi durdur|bana yazmayin|mesaj gondermeyin|abonelikten cik)/.test(t);
}

export function wantsHuman(text: string): boolean {
  const t = fold(text);
  return /(yetkili|insanla|gercek kisi|temsilci|musteri hizmetleri|gulhan)/.test(t);
}

export function reportsPayment(text: string): boolean {
  const t = fold(text);
  return /(odedim|odeme yaptim|havale ettim|eft yaptim|gonderdim parayi|dekont)/.test(t);
}

export function wantsCancel(text: string): boolean {
  return /(iptal|vazgectik|vazgectim|gerek kalmadi)/.test(fold(text));
}

export function zonedHour(now: Date, tz: string): number {
  return zonedParts(now, tz).h;
}
