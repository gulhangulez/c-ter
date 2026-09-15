// Render helpers: HTML escaping, layout, and content-block renderers.
// Content stays as data (blocks); this module turns blocks into static HTML.

export function esc(s = "") {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Attribute helper
function attr(obj = {}) {
  return Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${esc(v)}"`))
    .join("");
}

const HTML_LANG = { tr: "tr", "zh-Hans": "zh-Hans", az: "az" };

// ---- CTA links -------------------------------------------------------------
function ctaHref(kind, site, locale, contactPath) {
  switch (kind) {
    case "quote": return contactPath;
    case "whatsapp": return site.contact.whatsappUrl;
    case "phone": return site.contact.phoneUrl;
    case "email": return site.contact.emailUrl;
    default: return "#";
  }
}

function renderCtas(ctas, ctx) {
  if (!ctas || !ctas.length) return "";
  const { site, microcopy, locale, contactPath } = ctx;
  const parts = ctas.map((c) => {
    const kind = typeof c === "string" ? c : c.kind;
    const label = (typeof c === "object" && c.label) || microcopy.cta[kind]?.[locale] || kind;
    const href = (typeof c === "object" && c.href) || ctaHref(kind, site, locale, contactPath);
    const cls = kind === "quote" ? "button-primary" : (kind === "whatsapp" ? "button-secondary" : "button-ghost");
    const ext = kind === "whatsapp";
    return `<a class="${cls}" href="${esc(href)}"${ext ? ' rel="nofollow"' : ""}>${esc(label)}</a>`;
  });
  return `<div class="button-row">${parts.join("")}</div>`;
}

// ---- Block renderers -------------------------------------------------------
const blocks = {
  hero(b, ctx) {
    const card = b.card
      ? `<aside class="hero__card">
           <h2>${esc(b.card.title)}</h2>
           ${b.card.intro ? `<p class="muted">${esc(b.card.intro)}</p>` : ""}
           ${b.card.items ? `<ul>${b.card.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
           ${renderCtas(b.card.ctas, ctx)}
         </aside>`
      : "";
    return `<section class="hero"><div class="container"><div class="hero__grid">
      <div>
        ${b.eyebrow ? `<p class="eyebrow">${esc(b.eyebrow)}</p>` : ""}
        <h1>${esc(b.h1)}</h1>
        ${b.lead ? `<p class="lead">${esc(b.lead)}</p>` : ""}
        ${b.bullets ? `<ul>${b.bullets.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
        ${renderCtas(b.ctas, ctx)}
      </div>
      ${card}
    </div></div></section>`;
  },

  richtext(b) {
    return `<section class="section${b.surface ? " section--surface" : ""}"><div class="container section-intro">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      ${b.html || ""}
    </div></section>`;
  },

  cards(b, ctx) {
    const cols = b.columns || Math.min(b.items.length, 4);
    const items = b.items.map((it) => `
      <article class="card${b.surface ? " card--surface" : ""}">
        <h3>${it.href ? `<a href="${esc(it.href)}">${esc(it.title)}</a>` : esc(it.title)}</h3>
        ${it.text ? `<p class="card__scope">${esc(it.text)}</p>` : ""}
        ${it.cta ? `<p><a href="${esc(it.href || "#")}">${esc(it.cta)} →</a></p>` : ""}
      </article>`).join("");
    return `<section class="section${b.surface ? " section--surface" : ""}"><div class="container">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      ${b.intro ? `<p class="lead">${esc(b.intro)}</p>` : ""}
      <div class="card-grid card-grid--${cols}">${items}</div>
    </div></section>`;
  },

  steps(b) {
    return `<section class="section"><div class="container">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      ${b.intro ? `<p class="lead">${esc(b.intro)}</p>` : ""}
      <ol class="steps">${b.items.map((i) => `<li><strong>${esc(i.title)}</strong>${i.text ? `<br>${esc(i.text)}` : ""}</li>`).join("")}</ol>
    </div></section>`;
  },

  table(b) {
    return `<section class="section${b.surface ? " section--surface" : ""}"><div class="container">
      ${b.heading ? `<h2>${esc(b.heading)}</h2>` : ""}
      ${b.intro ? `<p class="lead">${esc(b.intro)}</p>` : ""}
      <div class="table-wrap"><table class="data">
        <thead><tr>${b.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      ${b.note ? `<p class="muted">${esc(b.note)}</p>` : ""}
    </div></section>`;
  },

  callout(b) {
    return `<section class="section--tight"><div class="container">
      <div class="callout${b.variant ? ` callout--${b.variant}` : ""}">${b.html || esc(b.text)}</div>
    </div></section>`;
  },

  priceNote(_b, ctx) {
    return `<div class="container"><div class="price-note"><strong>i</strong><span>${esc(ctx.site.priceNote[ctx.locale])}</span></div></div>`;
  },

  faq(b, ctx) {
    const entries = ctx.faqFor(b.ids).map((f) => `
      <details${f.open ? " open" : ""} id="${esc("q-" + f.id.toLowerCase())}">
        <summary>${esc(f.q)}</summary>
        <div class="faq__body"><p>${f.a.split("\n\n").map(esc).join("</p><p>")}</p></div>
      </details>`).join("");
    return `<section class="section"><div class="container">
      <h2>${esc(b.heading || ctx.microcopy.ui.faqHeading[ctx.locale])}</h2>
      ${b.intro ? `<p class="lead">${esc(b.intro)}</p>` : ""}
      <div class="faq">${entries}</div>
    </div></section>`;
  },

  finalCta(_b, ctx) {
    const c = ctx.site.finalCta[ctx.locale];
    return `<section class="section section--surface"><div class="container section-intro">
      <h2>${esc(c.title)}</h2>
      <p class="lead">${esc(c.text)}</p>
      <div class="button-row">
        <a class="button-primary" href="${esc(ctx.contactPath)}">${esc(c.primary)}</a>
        <a class="button-secondary" rel="nofollow" href="${esc(ctx.site.contact.whatsappUrl)}">${esc(c.whatsapp)}</a>
      </div>
    </div></section>`;
  },

  contactCards(_b, ctx) {
    const { site, microcopy, locale } = ctx;
    const c = [
      { label: microcopy.cta.whatsapp[locale], href: site.contact.whatsappUrl, sub: site.contact.whatsappDisplay, nofollow: true },
      { label: locale === "zh-Hans" ? microcopy.cta.email[locale] : microcopy.cta.phone[locale], href: locale === "zh-Hans" ? site.contact.emailUrl : site.contact.phoneUrl, sub: locale === "zh-Hans" ? site.contact.email : site.contact.phoneDisplay },
      { label: locale === "zh-Hans" ? microcopy.cta.phone[locale] : microcopy.cta.email[locale], href: locale === "zh-Hans" ? site.contact.phoneUrl : site.contact.emailUrl, sub: locale === "zh-Hans" ? site.contact.phoneDisplay : site.contact.email }
    ];
    return `<div class="container"><div class="contact-cards">
      ${c.map((x) => `<article class="card"><h3>${esc(x.label)}</h3><p><a${x.nofollow ? ' rel="nofollow"' : ""} href="${esc(x.href)}">${esc(x.sub)}</a></p></article>`).join("")}
    </div></div>`;
  },

  quoteForm(b, ctx) {
    const { locale } = ctx;
    const t = QUOTE_FORM_I18N[locale];
    const err = QUOTE_ERRORS[locale];
    const errAttrs = Object.entries(err).map(([k, v]) => `data-error-${k}="${esc(v)}"`).join(" ");
    const services = [
      ["china", t.services.china], ["machine", t.services.machine], ["factory", t.services.factory],
      ["fair", t.services.fair], ["unsure", t.services.unsure]
    ];
    const langRadios = b.languageRadios ? `
      <fieldset class="field field--radios" id="is-dili">
        <legend>${esc(t.languageLegend)}</legend>
        ${LANG_OPTIONS.map((o) => `<label class="radio-row"><input type="radio" name="languageRequirement" value="${o}" required> <span>${esc(t.language[o])}</span></label>`).join("")}
      </fieldset>` : "";
    return `<section class="section" id="muraciet"><div class="container">
      <div class="form-grid" style="max-width:none;display:grid;grid-template-columns:1fr;gap:32px">
      <form class="form-grid" data-quote-form data-locale="${locale}" ${errAttrs} data-error-generic="${esc(err.generic)}" action="${esc(ctx.site.contact.whatsappUrl)}" method="get" novalidate>
        <div class="form-error-summary" data-error-summary role="alert" hidden></div>
        <div class="field">
          <label for="qf-service">${esc(t.service)}</label>
          <select id="qf-service" name="service" required>
            <option value="" disabled${b.defaultService ? "" : " selected"}>${esc(t.choose)}</option>
            ${services.map(([v, l]) => `<option value="${v}"${b.defaultService === v ? " selected" : ""}>${esc(l)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="qf-country">${esc(t.country)}</label>
          <select id="qf-country" name="country" required>
            <option value="TR"${b.defaultCountry === "TR" ? " selected" : ""}>${esc(t.countryNames.TR)}</option>
            <option value="CN"${b.defaultCountry === "CN" || !b.defaultCountry ? " selected" : ""}>${esc(t.countryNames.CN)}</option>
          </select>
        </div>
        <div class="field">
          <label for="qf-city">${esc(t.city)}</label>
          <input id="qf-city" name="city" type="text" required minlength="2" maxlength="100" autocomplete="off">
        </div>
        <div class="field">
          <label for="qf-dates">${esc(t.dates)}</label>
          <input id="qf-dates" name="dateLabel" type="text" required maxlength="160" placeholder="${esc(t.datesPlaceholder)}">
          <span class="hint">${esc(t.datesHint)}</span>
        </div>
        ${langRadios}
        <div class="field">
          <label for="qf-need">${esc(t.need)}</label>
          <textarea id="qf-need" name="need" required minlength="10" maxlength="600"></textarea>
          <span class="hint">${esc(t.needHint)}</span>
        </div>
        <div class="field">
          <label for="qf-name">${esc(t.name)} <span class="muted">(${esc(t.optional)})</span></label>
          <input id="qf-name" name="nameCompany" type="text" maxlength="120" autocomplete="off">
        </div>
        <div class="callout" data-lang-note hidden><strong>${esc(t.langNoteTitle)}</strong> ${esc(t.langNote)}</div>
        <div>
          <h3>${esc(t.previewTitle)}</h3>
          <div class="preview" data-preview aria-live="polite"></div>
          <p class="muted">${esc(t.previewNote)}</p>
        </div>
        <div class="button-row">
          <a class="button-primary" data-wa rel="nofollow" href="${esc(ctx.site.contact.whatsappUrl)}">${esc(t.openWhatsapp)}</a>
          <a class="button-ghost" data-mail href="${esc(ctx.site.contact.emailUrl)}">${esc(t.sendEmail)}</a>
          <button class="button-ghost" type="button" data-copy data-copied="${esc(QUOTE_ERRORS[locale].copied)}">${esc(t.copy)}</button>
        </div>
      </form>
      </div>
    </div></section>`;
  },

  raw(b) { return b.html || ""; }
};

const QUOTE_FORM_I18N = {
  tr: {
    service: "Hangi hizmete ihtiyacınız var?", choose: "Seçin",
    services: { china: "Çin'de tercüman", machine: "Makine kurulumu tercümanlığı", factory: "Çin'de fabrika ziyareti tercümanlığı", fair: "Çin'de fuar tercümanlığı", unsure: "Emin değilim" },
    country: "Çalışma ülkesi", countryNames: { TR: "Türkiye", CN: "Çin" },
    city: "Şehir ve çalışma bölgesi",
    dates: "Tarih", datesPlaceholder: "Örn. 10–14 Mart veya 'henüz belli değil'", datesHint: "Birden fazla şehir veya aralıklı gün varsa aşağıdaki açıklamaya ekleyin.",
    need: "İhtiyacınızı kısaca anlatın", needHint: "Makine türünü, fabrika veya fuarın adını ve konuşulacak konuları yazabilirsiniz. İlk mesajda kişisel veya gizli belgeler paylaşmayın.",
    name: "Ad / şirket", optional: "isteğe bağlı",
    previewTitle: "Göndereceğiniz mesaj", previewNote: "Bu form sitede rezervasyon oluşturmaz. Mesaj WhatsApp'ta açılır; göndermek için oradaki gönder düğmesine basmanız gerekir.",
    openWhatsapp: "WhatsApp'ta mesajı aç", sendEmail: "E-postayla gönder", copy: "Mesajı kopyala",
    languageLegend: "Dil gereksinimi", language: {}, langNoteTitle: "", langNote: ""
  },
  "zh-Hans": {
    service: "您需要哪种服务？", choose: "请选择",
    services: { china: "中国现场口译", machine: "设备安装口译", factory: "中国工厂参访口译", fair: "中国展会口译", unsure: "尚不确定" },
    country: "工作所在国家", countryNames: { TR: "土耳其", CN: "中国" },
    city: "城市及工作区域",
    dates: "日期", datesPlaceholder: "如 3月10–14日 或 '尚未确定'", datesHint: "如涉及多个城市或不连续日期，请在需求说明中注明。",
    need: "简要说明需求", needHint: "可说明设备类型、工厂或展会名称及沟通主题。首次咨询请勿提交个人证件或保密文件。",
    name: "姓名 / 公司", optional: "选填",
    previewTitle: "将发送的咨询内容", previewNote: "此表单不会在网站中创建预约。消息将在 WhatsApp 中打开，您需要在 WhatsApp 内确认发送。",
    openWhatsapp: "在 WhatsApp 中打开咨询", sendEmail: "通过邮件发送", copy: "复制咨询内容",
    languageLegend: "沟通语言要求", language: {}, langNoteTitle: "", langNote: ""
  },
  az: {
    service: "Hansı xidmətə ehtiyacınız var?", choose: "Seçin",
    services: { china: "Çində şifahi tərcümə", machine: "Avadanlıq quraşdırılması zamanı tərcümə", factory: "Çində zavod ziyarəti", fair: "Çində sərgi ziyarəti", unsure: "Hələ dəqiqləşdirməmişəm" },
    country: "İşin görüləcəyi ölkə", countryNames: { TR: "Türkiyə", CN: "Çin" },
    city: "Şəhər və iş yeri",
    dates: "Tarixlər", datesPlaceholder: "Məs. 10–14 mart və ya 'hələ dəqiq deyil'", datesHint: "Birdən çox şəhər və ya fasiləli günlər varsa, aşağıdakı izahda qeyd edin.",
    need: "Ehtiyacınızı qısaca yazın", needHint: "Avadanlığın növünü, zavod və ya sərginin adını və müzakirə mövzularını yaza bilərsiniz. İlk mesajda şəxsi və ya məxfi sənəd paylaşmayın.",
    name: "Ad / şirkət", optional: "istəyə bağlı",
    previewTitle: "Göndərəcəyiniz mesaj", previewNote: "Bu forma saytda sifariş yaratmır. Mesaj WhatsApp-da açılır; göndərmək üçün orada göndər düyməsinə basmalısınız.",
    openWhatsapp: "WhatsApp-da mesajı aç", sendEmail: "E-poçtla göndər", copy: "Mesajı kopyala",
    languageLegend: "Dil tələbi", language: {
      "turkish-ok": "Türk dilində şifahi ünsiyyət mənim üçün uyğundur.",
      "azerbaijani-required": "Azərbaycan dilində şifahi ünsiyyət tələb edirəm; uyğunluq ayrıca təsdiqlənməlidir.",
      "confirm-first": "Əvvəlcə dil uyğunluğunu dəqiqləşdirmək istəyirəm; türk dilində işləməyə hələ razılıq verməmişəm."
    },
    langNoteTitle: "Dil qeydi:", langNote: "Dil tələbinin qarşılanması ayrıca təsdiqlənməlidir. Bu mesaj sifarişin təsdiqi deyil."
  }
};

const LANG_OPTIONS = ["turkish-ok", "azerbaijani-required", "confirm-first"];

const QUOTE_ERRORS = {
  tr: { invalid_service: "Lütfen bir hizmet seçin.", invalid_city: "Lütfen çalışma şehrini veya bölgesini yazın.", invalid_dates: "Başlangıç tarihini seçin veya tarihlerin henüz belli olmadığını yazın.", invalid_need: "İhtiyacınızı en az 10 karakterle açıklayın (en çok 600).", invalid_country: "Lütfen çalışma ülkesini seçin.", service_country_mismatch: "Çin fabrika/fuar hizmeti için çalışma ülkesi Çin olmalıdır.", invalid_language_requirement: "Lütfen dil gereksiniminizi seçin.", invalid_name_company: "Ad / şirket alanını kısaltın (en çok 120 karakter).", generic: "Lütfen işaretli alanları kontrol edin.", copied: "Kopyalandı" },
  "zh-Hans": { invalid_service: "请选择服务类型。", invalid_city: "请填写工作城市或区域。", invalid_dates: "请填写日期，或注明日期尚未确定。", invalid_need: "请用至少 10 个字符说明需求（不超过 600）。", invalid_country: "请选择工作所在国家。", service_country_mismatch: "中国工厂/展会服务的工作所在国家应为中国。", invalid_language_requirement: "请选择沟通语言要求。", invalid_name_company: "姓名/公司请控制在 120 个字符以内。", generic: "请检查标注的字段。", copied: "已复制" },
  az: { invalid_service: "Zəhmət olmasa, xidmət seçin.", invalid_city: "Zəhmət olmasa, şəhər və ya iş yerini yazın.", invalid_dates: "Tarixləri yazın və ya hələ dəqiq olmadığını qeyd edin.", invalid_need: "Ehtiyacınızı ən azı 10 simvolla izah edin (ən çox 600).", invalid_country: "Zəhmət olmasa, işin görüləcəyi ölkəni seçin.", service_country_mismatch: "Çində zavod/sərgi xidməti üçün ölkə Çin olmalıdır.", invalid_language_requirement: "Zəhmət olmasa, dil tələbini seçin.", invalid_name_company: "Ad / şirkət sahəsini qısaldın (ən çox 120 simvol).", generic: "Zəhmət olmasa, işarələnmiş sahələri yoxlayın.", copied: "Kopyalandı" }
};

export function renderBlocks(list, ctx) {
  return (list || []).map((b) => {
    const fn = blocks[b.type];
    if (!fn) throw new Error(`Unknown block type: ${b.type}`);
    return fn(b, ctx);
  }).join("\n");
}

// ---- Header / Footer / Layout ---------------------------------------------
function wordmark(site, locale, homeHref) {
  return `<a class="wordmark" href="${esc(homeHref)}" aria-label="${esc(site.brand.name)} — ${locale === "zh-Hans" ? "首页" : locale === "az" ? "Ana səhifə" : "Ana sayfa"}">
    <span class="wordmark__main"><strong>Çince</strong> <span>Tercüman</span></span>
    <small>${esc(site.brand.tagline[locale])}</small>
  </a>`;
}

function langSwitch(alternates, locale, microcopy) {
  const order = ["tr", "zh-Hans", "az"];
  const items = order.map((l) => {
    const current = l === locale;
    if (alternates[l]) {
      return `<a href="${esc(alternates[l])}" hreflang="${HTML_LANG[l]}"${current ? ' aria-current="true"' : ""}>${esc(microcopy.langSwitch[l])}</a>`;
    }
    // §57.2: AZ pages without an equivalent fall back to a plain link to /az/,
    // labelled as the AZ start page and deliberately kept out of hreflang.
    if (l === "az") {
      return `<a href="/az/" title="Azərbaycan dili — başlanğıc səhifəsi">${esc(microcopy.langSwitch.az)}</a>`;
    }
    return "";
  }).filter(Boolean);
  return `<nav class="lang-switch" aria-label="${esc(microcopy.ui.languageLabel[locale])}">${items.join("")}</nav>`;
}

function header(ctx) {
  const { site, nav, locale, microcopy, alternates, currentPath, homeHref, contactPath } = ctx;
  const items = (nav.main[locale] || []).map((n) => {
    const current = n.href === currentPath;
    return `<li><a href="${esc(n.href)}"${current ? ' aria-current="page"' : ""}>${esc(n.label)}</a></li>`;
  }).join("");
  const mobItems = (nav.main[locale] || []).map((n) => `<li><a href="${esc(n.href)}">${esc(n.label)}</a></li>`).join("");
  return `<header class="site-header">
    <div class="container site-header__inner">
      ${wordmark(site, locale, homeHref)}
      <nav class="nav-primary" aria-label="${esc(microcopy.ui.menu[locale])}"><ul>${items}</ul></nav>
      <div class="header-tools">
        ${langSwitch(alternates, locale, microcopy)}
        <a class="button-primary header-cta" href="${esc(contactPath)}">${esc(microcopy.cta.quote[locale])}</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu-toggle aria-label="${esc(microcopy.ui.menu[locale])}">☰</button>
      </div>
    </div>
    <div class="container"><nav class="mobile-nav" id="mobile-nav" aria-label="${esc(microcopy.ui.menu[locale])}" hidden><ul>${mobItems}</ul></nav></div>
  </header>`;
}

function footer(ctx) {
  const { site, nav, locale, year } = ctx;
  const desc = {
    tr: "Türkiye'de makine kurulumu, Çin'de fabrika ve fuar ziyaretleri için Çince–Türkçe sözlü tercümanlık.",
    "zh-Hans": "为土耳其设备安装及中国工厂、展会参访提供中土双向现场口译。",
    az: "Türkiyədə avadanlıq quraşdırılması, Çində zavod və sərgi ziyarətləri üçün Çin dili–türk dili şifahi tərcümə."
  };
  const contactHeading = { tr: "İletişim", "zh-Hans": "联系方式", az: "Əlaqə" };
  const linksHeading = { tr: "Bağlantılar", "zh-Hans": "链接", az: "Keçidlər" };
  const rights = {
    tr: `© ${year} Çince Tercüman. Tüm hakları saklıdır.`,
    "zh-Hans": `© ${year} Çince Tercüman. 保留所有权利。`,
    az: `© ${year} Çince Tercüman. Bütün hüquqlar qorunur.`
  };
  const links = (nav.footerLinks[locale] || []).map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join("");
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="wordmark__main" style="color:#fff"><strong>Çince</strong> <span style="color:var(--color-brand)">Tercüman</span></p>
        <p style="color:#c7cfcb;max-width:40ch">${esc(desc[locale])}</p>
      </div>
      <div>
        <h4>${esc(contactHeading[locale])}</h4>
        <ul>
          <li>WhatsApp: <a rel="nofollow" href="${esc(site.contact.whatsappUrl)}">${esc(site.contact.whatsappDisplay)}</a></li>
          <li>${locale === "zh-Hans" ? "电话" : locale === "az" ? "Telefon" : "Telefon"}: <a href="${esc(site.contact.phoneUrl)}">${esc(site.contact.phoneDisplay)}</a></li>
          <li>${locale === "zh-Hans" ? "邮箱" : "E-poçt".replace("E-poçt", locale === "az" ? "E-poçt" : "E-posta")}: <a href="${esc(site.contact.emailUrl)}">${esc(site.contact.email)}</a></li>
        </ul>
      </div>
      <div>
        <h4>${esc(linksHeading[locale])}</h4>
        <ul>${links}</ul>
      </div>
    </div>
    <div class="container footer-bottom">${esc(rights[locale])}</div>
  </footer>`;
}

function mobileBar(ctx) {
  const { site, locale, microcopy, contactPath } = ctx;
  // TR/AZ: WhatsApp + Ara ; ZH: WhatsApp + E-posta (per §4.4)
  const second = locale === "zh-Hans"
    ? `<a class="button-ghost" href="${esc(site.contact.emailUrl)}">${esc(microcopy.cta.email[locale])}</a>`
    : `<a class="button-ghost" href="${esc(site.contact.phoneUrl)}">${esc(microcopy.cta.phone[locale])}</a>`;
  return `<nav class="mobile-bar" aria-label="${esc(microcopy.cta.quote[locale])}">
    <a class="button-primary" rel="nofollow" href="${esc(site.contact.whatsappUrl)}">WhatsApp</a>
    ${second}
  </nav>
  <div class="dock"><a class="button-primary" rel="nofollow" href="${esc(site.contact.whatsappUrl)}">${esc(microcopy.cta.whatsapp[locale])}</a></div>`;
}

function hreflangTags(alternates, origin) {
  const order = ["tr", "zh-Hans", "az"];
  const tags = order.filter((l) => alternates[l]).map((l) =>
    `<link rel="alternate" hreflang="${HTML_LANG[l]}" href="${esc(origin + alternates[l])}">`);
  if (alternates.tr) tags.push(`<link rel="alternate" hreflang="x-default" href="${esc(origin + alternates.tr)}">`);
  return tags.join("\n  ");
}

export function layout(page, ctx) {
  const { site, locale, microcopy, alternates, currentPath } = ctx;
  const canonical = site.origin + currentPath;
  const robots = page.indexable === false || page.status === "draft" ? "noindex,follow" : "index,follow";
  const jsonld = page.jsonld ? `<script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>` : "";
  const body = renderBlocks(page.blocks, ctx);
  return `<!doctype html>
<html lang="${HTML_LANG[locale]}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description || "")}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${esc(canonical)}">
  ${hreflangTags(alternates, site.origin)}
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description || "")}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${esc(canonical)}">
  <link rel="stylesheet" href="/assets/main.css">
  ${jsonld}
</head>
<body>
  <a class="skip-link" href="#main">${esc(microcopy.ui.skipToContent[locale])}</a>
  ${header(ctx)}
  <main id="main">
    ${body}
  </main>
  ${footer(ctx)}
  ${mobileBar(ctx)}
  <script type="module" src="/assets/app.js"></script>
</body>
</html>`;
}
