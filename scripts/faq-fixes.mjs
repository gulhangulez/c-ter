// Post-extraction FAQ fixes (content/SEO plan 2026-10, §7). Applied after
// scripts/extract-faq.mjs so that re-extracting from the spec can never bring
// internal notes or superseded answers back into public output.
//  1. Internal notes embedded in answers ("İç uygulama notu", "Yayın kapısı")
//     move to a separate `editorialNote` field that is never rendered.
//  2. Q002 is narrowed to the confirmed service network.
//  3. Q005 drops an unconfirmed fixed booking policy.
//  4. The six owner-review answers (Q015, Q019, Q020, Q021, Q045, Q107) were
//     confirmed by the site owner on 2026-10-01; they are rewritten from the
//     owner's answers and published.
const NOTE_RE = /\n\n(?:>\s*)?\*\*(?:İç uygulama notu|Yayın kapısı)[^]*$/;

export const OWNER_APPROVED = new Set(["Q015", "Q019", "Q020", "Q021", "Q045", "Q107"]);

const OVERRIDES = {
  Q015: {
    tr: "Evet. Hizmet bedeli için şirketiniz adına fatura düzenliyoruz. Fatura için gereken şirket bilgilerini teklifi onaylarken paylaşmanız yeterlidir.",
    "zh-Hans": "可以。我们可以为贵公司开具服务费发票。请在确认报价时提供开票所需的公司信息。"
  },
  Q019: {
    tr: "Gizlilik beklentilerinizi işe başlamadan önce bizimle paylaşın. İsterseniz çalışma öncesinde gizlilik sözleşmesi (NDA) imzalayabiliriz. İlk talepte yalnızca ihtiyaç özetini göndermeniz yeterlidir; ayrıntılı ticari veya teknik belgeleri gizlilik koşulları netleştikten sonra paylaşabilirsiniz.",
    "zh-Hans": "请在工作开始前告知您的保密要求。如有需要，我们可以在服务开始前签署保密协议（NDA）。首次咨询只需简要说明需求；详细的商业或技术资料，可在保密安排确认后再提供。"
  },
  Q020: {
    tr: "Evet. Şirketinizin gizlilik sözleşmesini (NDA) hizmet başlamadan önce imzalayabiliriz. Sözleşme metnini teklif aşamasında iletirseniz imza süreci, gizli belgeler paylaşılmadan önce tamamlanır.",
    "zh-Hans": "可以。我们可以在服务开始前签署贵公司的保密协议（NDA）。请在报价阶段提供协议文本，以便在分享保密资料前完成签署。"
  },
  Q021: {
    tr: "Hayır. Tercümanlarımızın görüşeceğiniz Çinli firma veya tedarikçiyle ticari bir ilişkisi yoktur. Tercüman sizin talebinizle görevlendirilir ve görüşmede iki taraf arasındaki sözlü iletişimi aktarır.",
    "zh-Hans": "没有。我们的译员与您将会面的中国企业或供应商不存在商业关系。译员根据您的需求安排，在会面中负责双方之间的口头沟通。"
  },
  Q045: {
    tr: "Bugüne kadar böyle bir durum yaşanmadı. Görevlendirilen tercüman beklenmedik bir nedenle gelemeyecek olursa sizi mutlaka önceden bilgilendirir ve yerine başka bir tercüman sağlamak için çalışırız. Alternatif tercümanın uygunluğu şehir, tarih ve işin konusuna göre sizinle birlikte teyit edilir.",
    "zh-Hans": "到目前为止尚未发生过这种情况。如已安排的译员因突发原因无法到场，我们一定会提前通知您，并尽力安排其他译员。替补译员能否安排，需结合城市、日期和工作内容与您共同确认。"
  },
  Q107: {
    tr: "Şirket içi kurallarımız, tercümanlarımızın görüşülen tedarikçilerden komisyon, yönlendirme bedeli veya benzeri bir menfaat almasını yasaklar. Bu kurala aykırı davrandığı tespit edilen tercümanla çalışmaya son verilir. Bu konuda özel bir beklentiniz varsa talebinizde yazılı olarak da belirtebilirsiniz.",
    "zh-Hans": "根据我们的内部规定，译员不得从会面的供应商处收取佣金、介绍费或其他利益。一经发现违反此规定，将终止与该译员的合作。如您对此有特别要求，也可在咨询时书面说明。"
  },
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
    if (OWNER_APPROVED.has(e.id)) e.publish = true;
    for (const l of ["tr", "zh-Hans", "az"]) {
      const loc = e[l];
      if (!loc) continue;
      const m = loc.a.match(NOTE_RE);
      if (m) {
        loc.editorialNote = [loc.editorialNote, m[0].trim()].filter(Boolean).join("\n\n");
        loc.a = loc.a.slice(0, m.index).trim();
      }
      // The publish gate no longer applies once the owner has answered.
      if (OWNER_APPROVED.has(e.id)) delete loc.editorialNote;
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
