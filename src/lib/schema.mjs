// Single JSON-LD graph per page (content/SEO plan 2026-10, §12 T5).
// Stable @id contract: /#organization, /#website, <url>#webpage, <url>#breadcrumb,
// /#service-{china,machine,factory,fair,canton}. Organization/WebSite come from
// site.json only. No LocalBusiness, address, logo, rating, Person, Offer/price
// or FAQPage — none of those are verified (§12 T2/T5).

const HOME_NAME = { tr: "Ana sayfa", "zh-Hans": "首页", az: "Ana səhifə" };
const HOME_PATH = { tr: "/", "zh-Hans": "/zh/", az: "/az/" };

// Service nodes. areaServed follows the page's real scope: machine installation
// is the Türkiye service, factory/fair/general work is in China, the Canton page
// is Guangzhou-specific. Visible text keeps the city/date availability caveat.
const SERVICES = {
  china: {
    area: { "@type": "Country", name: { tr: "Çin", "zh-Hans": "中国" } },
    name: { tr: "Çin'de Çince–Türkçe sözlü tercümanlık", "zh-Hans": "中国境内中土双语现场口译" },
    description: {
      tr: "Çin'de önceden planlanmış yüz yüze görüşmeler için Çince–Türkçe sözlü iletişim desteği. Uygunluk şehir, tarih ve ihtiyaçla değerlendirilir. Günlük hizmet bedeli ile ulaşım, konaklama ve yeme-içme giderleri ayrı değerlendirilir.",
      "zh-Hans": "为土耳其客户在中国已安排的面对面会谈提供中文与土耳其语双向现场口译。是否可安排需结合城市、日期和需求确认。按天计费，交通、住宿和餐饮费用另计。"
    }
  },
  machine: {
    area: { "@type": "Country", name: { tr: "Türkiye", "zh-Hans": "土耳其" } },
    name: { tr: "Makine kurulumu sırasında Çince–Türkçe sözlü tercümanlık", "zh-Hans": "土耳其设备安装与调试中土现场口译" },
    description: {
      tr: "Türkiye'de Çinli teknik ekiplerle kurulum, devreye alma ve ilgili teknik açıklamalar sırasında sözlü iletişim desteği. Uygunluk şehir, tarih ve ihtiyaçla değerlendirilir. Teknik uygulama ve güvenlik kararları yetkili ekiplerdedir. Günlük hizmet bedeli ile ulaşım, konaklama ve yeme-içme giderleri ayrı değerlendirilir.",
      "zh-Hans": "为赴土耳其安装、调试设备的中国技术团队提供中土双语现场口译。是否可安排需结合城市、日期和需求确认。技术实施与安全决定由获授权的技术团队负责。按天计费，交通、住宿和餐饮费用另计。"
    }
  },
  factory: {
    area: { "@type": "Country", name: { tr: "Çin", "zh-Hans": "中国" } },
    name: { tr: "Çin'de fabrika ziyareti için Çince–Türkçe sözlü tercümanlık", "zh-Hans": "中国工厂参访中土现场口译" },
    description: {
      tr: "Müşterinin belirlediği Çin fabrikalarındaki görüşmelerde sözlü tercümanlık. Fabrika seçimi, denetim veya kalite garantisi kapsamda değildir. Günlük hizmet bedeli ile ulaşım, konaklama ve yeme-içme giderleri ayrı değerlendirilir.",
      "zh-Hans": "为客户已确定的中国工厂访问提供中土现场口译。服务不包括寻找工厂、验厂或产品质量保证。按天计费，交通、住宿和餐饮费用另计。"
    }
  },
  fair: {
    area: { "@type": "Country", name: { tr: "Çin", "zh-Hans": "中国" } },
    name: { tr: "Çin'de fuar ve stant görüşmeleri için Çince–Türkçe sözlü tercümanlık", "zh-Hans": "中国展会与展位洽谈中土现场口译" },
    description: {
      tr: "Çin'deki fuarlarda firma tanışmaları, ürün açıklamaları ve stant görüşmeleri için sözlü tercümanlık. Tur veya seyahat organizasyonu içermez. Günlük hizmet bedeli ile ulaşım, konaklama ve yeme-içme giderleri ayrı değerlendirilir.",
      "zh-Hans": "为中国展会中的企业洽谈、产品介绍及展位沟通提供中土现场口译，不包含旅游或行程安排。按天计费，交通、住宿和餐饮费用另计。"
    }
  },
  canton: {
    area: { "@type": "City", name: { tr: "Guangzhou", "zh-Hans": "广州" } },
    name: { tr: "Kanton Fuarı görüşmeleri için Çince–Türkçe sözlü tercümanlık", "zh-Hans": "广交会中土现场口译" },
    description: {
      tr: "Guangzhou'daki Kanton Fuarı (Canton Fair) ziyaret günlerinde stant görüşmeleri için sözlü tercümanlık. Fuar tercümanlığı hizmetinin belirli kullanım sayfasıdır; resmi organizatör hizmeti değildir.",
      "zh-Hans": "在广州广交会参展或参观期间提供展位洽谈中土现场口译。此为展会口译服务的具体应用，并非主办方官方服务。"
    }
  }
};

// Mirrors the visible home-page scope; no office, team size or price claims.
const ORG_DESCRIPTION = {
  tr: "Türkiye'de Çinli teknik ekiplerle makine kurulumu, Çin'de fabrika ziyaretleri, fuar ve iş görüşmeleri için Çince–Türkçe sözlü tercümanlık. Hizmet günlük ücretlendirilir; uygunluk şehir ve tarihe göre değerlendirilir.",
  "zh-Hans": "提供中文与土耳其语现场口译：在土耳其协助中国技术团队安装调试设备，在中国陪同工厂参访、展会及商务洽谈。按天计费，档期视城市和日期确认。",
  az: "Türkiyədə Çinli texniki komandalarla avadanlıq quraşdırılması, Çində zavod ziyarətləri, sərgi və işgüzar görüşlər üçün Çin–Türk dili şifahi tərcüməsi. Xidmət gün hesabı ilə ödənilir; uyğunluq şəhər və tarixə görə qiymətləndirilir."
};
const COUNTRY = {
  tr: { tr: "Türkiye", "zh-Hans": "土耳其", az: "Türkiyə" },
  cn: { tr: "Çin", "zh-Hans": "中国", az: "Çin" }
};

const SERVICE_LOCALE = (locale) => (locale === "zh-Hans" ? "zh-Hans" : "tr");

export function buildGraph(page, ctx) {
  const { site, locale, currentPath } = ctx;
  const origin = site.origin;
  const abs = (p) => new URL(p, origin).href;
  const orgId = abs("/#organization");
  const siteId = abs("/#website");
  const pageUrl = abs(currentPath);
  const schema = page.schema || {};
  const crumbs = Array.isArray(schema.crumbs) ? schema.crumbs : [];
  const graph = [];

  graph.push({
    "@type": "Organization",
    "@id": orgId,
    name: site.brand.name,
    url: abs("/"),
    description: ORG_DESCRIPTION[locale],
    // Working languages of the service (not of the site UI): the AZ site
    // does not mean Azerbaijani interpreting, so az is deliberately absent.
    knowsLanguage: ["tr", "zh"],
    areaServed: [
      { "@type": "Country", name: COUNTRY.tr[locale] },
      { "@type": "Country", name: COUNTRY.cn[locale] }
    ],
    email: site.contact.email,
    telephone: site.contact.phone,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: { tr: "Hizmet uygunluğu ve teklif", "zh-Hans": "档期与报价咨询", az: "Uyğunluq və qiymət sorğusu" }[locale],
        telephone: site.contact.phone,
        email: site.contact.email,
        url: abs(ctx.contactPath)
      },
      {
        "@type": "ContactPoint",
        contactType: { tr: "WhatsApp hizmet talebi", "zh-Hans": "WhatsApp 咨询", az: "WhatsApp sorğusu" }[locale],
        telephone: "+" + site.contact.whatsapp,
        url: site.contact.whatsappUrl
      }
    ]
  });
  graph.push({
    "@type": "WebSite",
    "@id": siteId,
    url: abs("/"),
    name: site.brand.name,
    inLanguage: ["tr", "zh-Hans", "az"],
    publisher: { "@id": orgId }
  });

  const type = ["WebPage", "CollectionPage", "AboutPage", "ContactPage"].includes(schema.type) ? schema.type : "WebPage";
  const webPage = {
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.h1 || firstH1(page) || page.title,
    description: page.description || undefined,
    inLanguage: locale,
    isPartOf: { "@id": siteId }
  };

  const svcKey = schema.service && SERVICES[schema.service] ? schema.service : null;
  // The service's own page carries it as mainEntity; city pages point at it via about.
  const serviceIsMain = svcKey && ctx.pageId === svcKey;
  if (svcKey) {
    const s = SERVICES[svcKey];
    const sl = SERVICE_LOCALE(locale);
    const svcId = abs(`/#service-${svcKey}`);
    graph.push({
      "@type": "Service",
      "@id": svcId,
      name: s.name[sl],
      serviceType: sl === "zh-Hans" ? "中文—土耳其语现场口译" : "Çince–Türkçe sözlü tercümanlık",
      description: s.description[sl],
      provider: { "@id": orgId },
      areaServed: { "@type": s.area["@type"], name: s.area.name[sl] },
      url: serviceIsMain ? pageUrl : undefined
    });
    if (serviceIsMain) webPage.mainEntity = { "@id": svcId };
    else webPage.about = { "@id": svcId };
  } else if (type === "AboutPage" || type === "ContactPage") {
    webPage.mainEntity = { "@id": orgId };
  } else if (currentPath === HOME_PATH[locale]) {
    webPage.about = { "@id": orgId };
  }

  if (crumbs.length) {
    const items = [{ name: HOME_NAME[locale], path: HOME_PATH[locale] }, ...crumbs];
    webPage.breadcrumb = { "@id": `${pageUrl}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) }))
    });
  }
  graph.splice(2, 0, webPage);
  return { "@context": "https://schema.org", "@graph": graph.map(clean) };
}

export function breadcrumbItems(page, locale) {
  const crumbs = page.schema && Array.isArray(page.schema.crumbs) ? page.schema.crumbs : [];
  if (!crumbs.length) return [];
  return [{ name: HOME_NAME[locale], path: HOME_PATH[locale] }, ...crumbs];
}

function firstH1(page) {
  const hero = (page.blocks || []).find((b) => b && b.type === "hero");
  return hero ? hero.h1 : null;
}

function clean(obj) {
  return JSON.parse(JSON.stringify(obj));
}
