// Post-extraction FAQ fixes (content/SEO plan 2026-10, §7). Applied after
// scripts/extract-faq.mjs so that re-extracting from the spec can never bring
// internal notes or superseded answers back into public output.
//  1. Internal notes embedded in answers ("İç uygulama notu", "Yayın kapısı")
//     move to a separate `editorialNote` field that is never rendered.
//  2. Q002 is narrowed to the confirmed service network.
//  3. Q005 drops an unconfirmed fixed booking policy.
const NOTE_RE = /\n\n(?:>\s*)?\*\*(?:İç uygulama notu|Yayın kapısı)[^]*$/;

const OVERRIDES = {
  Q002: {
    tr: "Türkiye'deki hizmet ağımız İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep; Çin'deki hizmet ağımız Guangzhou, Shanghai ve Beijing şehirlerini kapsar. Yakın bölgeler için gerçek çalışma noktasını ve tarihleri paylaşabilirsiniz. Her talep şehir, tarih ve konu birlikte değerlendirilerek teyit edilir. Şehir listesi her şehirde ofis veya her tarihte hazır tercüman bulunduğu anlamına gelmez.",
    "zh-Hans": "土耳其服务网络包括伊斯坦布尔（İstanbul）、泰基尔达（Tekirdağ）、迪兹杰（Düzce）、安卡拉（Ankara）、开塞利（Kayseri）和加济安泰普（Gaziantep）；中国服务网络包括广州、上海和北京。邻近地区可提供实际工作地点及日期咨询。每项需求都需结合城市、日期和内容确认。列出城市不代表当地设有办公室或任何日期都有人员待命。"
  },
  Q005: {
    tr: (a) => a.replace(/Her iş için geçerli sabit bir son başvuru süremiz yok;[^.]*\./, "Ne kadar önceden başvurulması gerektiği konu, şehir ve tarihlerle birlikte değerlendirilir; son dakika talebinde uygunluk ayrıca teyit edilir."),
    "zh-Hans": (a) => a.replace(/我们不设适用于所有工作的统一提前天数；[^。]*。/, "需要提前多久联系，应结合主题、城市和日期评估；临时需求须另行确认档期。")
  }
};

export function applyFaqFixes(entries) {
  for (const e of entries) {
    for (const l of ["tr", "zh-Hans", "az"]) {
      const loc = e[l];
      if (!loc) continue;
      const m = loc.a.match(NOTE_RE);
      if (m) {
        loc.editorialNote = [loc.editorialNote, m[0].trim()].filter(Boolean).join("\n\n");
        loc.a = loc.a.slice(0, m.index).trim();
      }
      const o = OVERRIDES[e.id]?.[l];
      if (typeof o === "string") loc.a = o;
      else if (typeof o === "function") {
        const next = o(loc.a);
        if (next === loc.a && !loc.a.includes("son dakika talebinde") && !loc.a.includes("临时需求须另行确认")) {
          throw new Error(`FAQ fix for ${e.id}/${l} did not apply`);
        }
        loc.a = next;
      }
    }
  }
  return entries;
}
