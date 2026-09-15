// Trilingual contact-message preparation (plan §58.6). Pure, framework-free:
// no network request, no request logging. Imported by the browser app and by
// the test suite so there is a single source of truth.

export const SITE_V13 = Object.freeze({
  origin: "https://www.cince-tercuman.com",
  whatsapp: "905550441141",
  phone: "+905075286187",
  email: "info@cince-tercuman.com"
});

export function normalizeLocale(value) {
  if (value === "zh") return "zh-Hans"; // legacy folder/interface key
  if (["tr", "zh-Hans", "az"].includes(value)) return value;
  throw new Error("invalid_locale"); // AZ never silently falls back to TR
}

export const SERVICE_V13 = {
  china: { tr: "Çin’de tercüman", "zh-Hans": "中国现场口译", az: "Çində şifahi tərcümə" },
  machine: { tr: "Makine kurulumu tercümanlığı", "zh-Hans": "设备安装口译", az: "Avadanlıq quraşdırılması zamanı tərcümə" },
  factory: { tr: "Çin’de fabrika ziyareti tercümanlığı", "zh-Hans": "中国工厂参访口译", az: "Çində zavod ziyarəti" },
  fair: { tr: "Çin’de fuar tercümanlığı", "zh-Hans": "中国展会口译", az: "Çində sərgi ziyarəti" },
  unsure: { tr: "Emin değilim", "zh-Hans": "尚不确定", az: "Hələ dəqiqləşdirməmişəm" }
};

export const LANGUAGE_V13 = {
  "turkish-ok": {
    tr: "Türkçe sözlü iletişim benim için uygundur.",
    "zh-Hans": "我可以使用土耳其语进行口头沟通。",
    az: "Türk dilində şifahi ünsiyyət mənim üçün uyğundur."
  },
  "azerbaijani-required": {
    tr: "Azerbaycanca sözlü iletişim şartım var; uygunluk ayrıca teyit edilmelidir.",
    "zh-Hans": "我需要使用阿塞拜疆语进行口头沟通，须另行确认译员是否符合要求。",
    az: "Azərbaycan dilində şifahi ünsiyyət tələb edirəm; uyğunluq ayrıca təsdiqlənməlidir."
  },
  "confirm-first": {
    tr: "Önce dil uygunluğunu teyit etmek istiyorum; Türkçe iletişime henüz onay vermedim.",
    "zh-Hans": "我希望先确认沟通语言是否合适，尚未同意使用土耳其语沟通。",
    az: "Əvvəlcə dil uyğunluğunu dəqiqləşdirmək istəyirəm; türk dilində işləməyə hələ razılıq verməmişəm."
  }
};

export const CONTACT_COPY_V13 = {
  tr: {
    intro: "Merhaba, Çince–Türkçe sözlü tercümanlık için uygunluk ve günlük teklif sormak istiyorum.",
    service: "Hizmet", country: "Çalışma ülkesi", city: "Şehir / çalışma bölgesi",
    dates: "Tarih", language: "Dil gereksinimi", need: "Kısa ihtiyaç", name: "Ad / şirket",
    countryNames: { TR: "Türkiye", CN: "Çin" }, source: "Kaynak sayfa",
    expenses: "Günlük tercümanlık ücretini; şehir içi / şehir dışı ulaşım, konaklama ve yeme-içme giderlerinden ayrı olarak paylaşabilir misiniz?",
    subject: "Çince tercüman uygunluk ve teklif talebi",
    condition: "Dil gereksiniminin karşılanması ayrıca teyit edilmelidir. Bu mesaj rezervasyon onayı değildir."
  },
  "zh-Hans": {
    intro: "您好，我想咨询中土现场口译的档期与每日报价。",
    service: "服务类型", country: "工作所在国家", city: "城市 / 工作区域",
    dates: "日期", language: "沟通语言要求", need: "简要需求", name: "姓名 / 公司",
    countryNames: { TR: "土耳其", CN: "中国" }, source: "来源页面",
    expenses: "请将口译日费与市内交通、城际交通、住宿及餐饮费用分别说明。",
    subject: "中土口译档期与报价咨询",
    condition: "是否满足语言要求须另行确认。本消息不代表预约已确认。"
  },
  az: {
    intro: "Salam. Şifahi Çin dili tərcüməsi üçün tarixləri və günlük qiyməti dəqiqləşdirmək istəyirəm.",
    service: "Xidmət", country: "İşin görüləcəyi ölkə", city: "Şəhər / iş yeri",
    dates: "Tarixlər", language: "Dil tələbi", need: "Qısa məlumat", name: "Ad / şirkət",
    countryNames: { TR: "Türkiyə", CN: "Çin" }, source: "Mənbə səhifə",
    expenses: "Günlük xidmət haqqını şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərclərindən ayrıca bildirməyinizi xahiş edirəm.",
    subject: "Çin dili tərcüməçisi — tarix və qiymət sorğusu",
    condition: "Dil tələbinin qarşılanması ayrıca təsdiqlənməlidir. Bu mesaj sifarişin təsdiqi deyil."
  }
};

function readText(value, min, max, code) {
  if (typeof value !== "string") throw new TypeError(code);
  const text = value.trim();
  if (Array.from(text).length < min || Array.from(text).length > max) throw new Error(code);
  return text;
}

export function prepareContactV13(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new TypeError("input_required");
  const locale = normalizeLocale(input.locale);
  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  if (!hasOwn(SERVICE_V13, input.service)) throw new Error("invalid_service");
  if (!["TR", "CN"].includes(input.country)) throw new Error("invalid_country");
  if (["china", "factory", "fair"].includes(input.service) && input.country !== "CN") {
    throw new Error("service_country_mismatch");
  }
  const language = input.languageRequirement;
  if ((locale === "az" || language !== undefined) && !hasOwn(LANGUAGE_V13, language)) {
    throw new Error("invalid_language_requirement");
  }
  const city = readText(input.city, 2, 100, "invalid_city");
  const dates = readText(input.dateLabel, 1, 160, "invalid_dates");
  const need = readText(input.need, 10, 600, "invalid_need");
  const name = input.nameCompany == null || input.nameCompany === ""
    ? null : readText(input.nameCompany, 1, 120, "invalid_name_company");
  const defaultPath = locale === "az" ? "/az/elaqe/" : locale === "zh-Hans" ? "/zh/contact/" : "/iletisim/";
  const source = new URL(input.sourcePath || defaultPath, SITE_V13.origin);
  if (source.origin !== SITE_V13.origin) throw new Error("invalid_source");
  const copy = CONTACT_COPY_V13[locale];
  const lines = [
    copy.intro, "",
    `${copy.service}: ${SERVICE_V13[input.service][locale]}`,
    `${copy.country}: ${copy.countryNames[input.country]}`,
    `${copy.city}: ${city}`, `${copy.dates}: ${dates}`
  ];
  if (language !== undefined) lines.push(`${copy.language}: ${LANGUAGE_V13[language][locale]}`);
  lines.push(`${copy.need}: ${need}`);
  if (name !== null) lines.push(`${copy.name}: ${name}`);
  if (language !== undefined) lines.push("", copy.condition);
  lines.push("", copy.expenses, "", `${copy.source}: ${source.pathname}`);
  const text = lines.join("\n");
  const whatsapp = new URL(`https://wa.me/${SITE_V13.whatsapp}`);
  whatsapp.searchParams.set("text", text);
  return {
    text,
    whatsapp: whatsapp.href,
    mailto: `mailto:${SITE_V13.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(text)}`,
    phone: `tel:${SITE_V13.phone}`,
    locale,
    requiresLanguageConfirmation: language === "azerbaijani-required" || language === "confirm-first"
  };
}

// Progressive enhancement: expose on window when running in a browser.
if (typeof window !== "undefined") window.prepareContactV13 = prepareContactV13;
