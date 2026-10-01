// Daily rates — /cince-tercuman-fiyatlari/ and /zh/daily-rates/. Plan §6.16–6.17.
// No fixed price / currency / "starting from" is ever emitted (business rule).
// The cost table is this page's single cost note, so no separate priceNote block.

const FAQ_IDS = ["Q007", "Q013", "Q060", "Q055", "Q056", "Q057", "Q058", "Q059", "Q008", "Q009", "Q011", "Q012", "Q010", "Q061", "Q062", "Q014", "Q015"];
const cta = (label, href) => `<div class="button-row"><a class="button-primary" href="${href}">${label}</a></div>`;

export const rates = {
  id: "rates",
  primaryService: null,
  locales: {
    tr: {
      path: "/cince-tercuman-fiyatlari/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman Günlük Ücreti | Kapsam ve Ek Masraflar",
      description: "Günlük Çince tercümanlık ücretini etkileyen bilgiler ve ayrıca hesaplanan ulaşım, konaklama, yeme-içme masrafları. Şehir, tarih ve programınızla teklif sorun.",
      schema: { type: "WebPage", crumbs: [{ name: "Günlük ücret", path: "/cince-tercuman-fiyatlari/" }] },
      blocks: [
        { type: "hero", eyebrow: "Günlük ücret", h1: "Çince tercümanlıkta günlük ücret ve ek masraflar", lead: "Tercümanlık hizmetimizi günlük çalışma esasına göre değerlendiriyoruz. Günlük teklif; hizmetin konusu, şehir, tarihler, gerçek çalışma noktası ve program netleştiğinde hazırlanır. Bu nedenle tüm işler için geçerli tek bir rakam yayımlamıyoruz.", ctas: ["quote", "whatsapp"] },
        {
          type: "table",
          surface: true,
          heading: "Teklifte hangi kalemler ayrı gösterilmeli?",
          columns: ["Kalem", "Nasıl değerlendirilir?"],
          rows: [
            ["Günlük sözlü tercümanlık", "Hizmet konusu ve günlük program için teklif edilir."],
            ["Şehir içi ulaşım", "Günlük tercümanlık ücretine dahil değildir; ayrıca hesaplanır."],
            ["Şehir dışı ulaşım", "Şehirler arası program varsa ayrıca hesaplanır."],
            ["Konaklama", "Ayrıca hesaplanır."],
            ["Yeme-içme", "Günlük tercümanlık ücretine dahil değildir; ayrıca hesaplanır."]
          ]
        },
        { type: "richtext", heading: "Teklif için ne paylaşmalısınız?", html: `<p>Hizmet türü, ülke ve şehir, gerçek çalışma noktası, tarihler ve kısa ihtiyaçla başlayın. Günlük başlangıç/bitiş planı, ürün veya makine konusu, kişi sayısı ve şehir değişiklikleri biliniyorsa ekleyin. Bu bilgiler, farklı teklifleri aynı program ve masraf kapsamı üzerinden karşılaştırmanıza yardımcı olur.</p>
        <p><a href="/rehber/tercuman-talebi-icin-gerekli-bilgiler/">Talep hazırlık rehberi</a> · <a href="/rehber/cince-tercuman-nasil-secilir/">Çince tercüman nasıl seçilir?</a></p>` },
        { type: "richtext", surface: true, heading: "“Günlük” çalışma ne anlama gelir?", html: `<p>Hizmet modeli günlüktür; saatlik veya yarım günlük paket sunmuyoruz. Gün içindeki başlangıç ve bitiş saatleri, molalar ve ulaşım düzeni teklif aşamasında netleştirilir. Günlük çalışma ifadesi sınırsız süre anlamına gelmez; burada tüm işler için geçerli sabit bir saat sayısı ilan etmiyoruz.</p>` },
        { type: "richtext", heading: "Ek gün, ödeme ve değişiklik koşulları", html: `<p>İş uzarsa ek tarihlerin uygunluğu ve ücret koşulları yeniden görüşülür. Ödeme yöntemi, para birimi, zamanı ve varsa ön ödeme koşulları somut teklif aşamasında teyit edilmelidir. İptal veya tarih değişikliği için herkese uygulanacak bir süre ya da iade oranı ilan etmiyoruz; hizmeti teyit etmeden ilgili koşulları açıkça netleştirin.</p>` },
        { type: "richtext", surface: true, heading: "Programınızı gönderin, kalemleri birlikte netleştirelim", html: `<p>Hizmeti, çalışma şehrini, tarihleri ve kısa ihtiyacınızı paylaşın. İş dilini, uygunluğu, günlük ücreti ve ek masrafları görüşelim; programı karşılıklı teyit edelim. Talep göndermek tek başına rezervasyon oluşturmaz.</p>
        <p><a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu</a> · <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/kanton-fuari-tercuman/">Kanton Fuarı</a></p>
        ${cta("Günlük ücret ve ek masraflar için teklif sor", "/iletisim/")}` },
        { type: "faq", ids: FAQ_IDS },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/daily-rates/",
      status: "published",
      indexable: true,
      title: "中土口译每日费用｜交通、住宿与餐饮另计",
      description: "中文—土耳其语口译按天计费。了解报价所需信息，以及市内交通、城际交通、住宿和餐饮费用的区分。请发送城市、日期与工作安排。",
      schema: { type: "WebPage", crumbs: [{ name: "每日费用", path: "/zh/daily-rates/" }] },
      blocks: [
        { type: "hero", eyebrow: "每日费用", h1: "中土口译每日费用与另计支出", lead: "我们的现场口译按天计费。报价需要结合服务主题、城市、日期、实际工作地点及每日安排确定，因此不公布适用于所有需求的统一价格。", ctas: ["quote", "email"] },
        {
          type: "table",
          surface: true,
          heading: "报价中分别确认哪些项目？",
          columns: ["项目", "说明"],
          rows: [
            ["每日口译服务费", "根据沟通内容与当日安排报价。"],
            ["市内交通", "不包含在每日口译服务费内，另行计算。"],
            ["城际交通", "涉及跨城市安排时，另行计算。"],
            ["住宿", "另行计算。"],
            ["餐饮", "不包含在每日口译服务费内，另行计算。"]
          ]
        },
        { type: "richtext", heading: "获得报价需要提供的信息", html: `<p>请先写明服务类型、国家和城市、实际工作地点、日期及简要需求。若已确定起止时段、设备或产品主题、参加人数及跨城市安排，也请一并提供。比较不同报价时，应使用同一工作安排，并确认额外费用的范围。</p>
        <p><a href="/zh/guides/information-for-interpreter-request/">咨询信息准备</a> · <a href="/zh/guides/how-to-choose-a-turkish-chinese-interpreter/">如何选择中土口译</a></p>` },
        { type: "richtext", surface: true, heading: "按天服务不等于无限时工作", html: `<p>我们采用按天服务方式，不提供按小时或半天的套餐。每天的起止时间、休息及出行安排，应在报价阶段明确。本页未公布适用于所有工作的固定小时数，也不表示超出约定时段可以无限延长。</p>` },
        { type: "richtext", heading: "新增日期、付款及改期", html: `<p>工作需要延长时，应重新确认新增日期是否能安排及相应费用。付款币种、方式、时间和可能涉及的预付款条件，应在具体报价中确认。本页不公布统一订金比例、免费取消期限或退款比例；确认服务前应把这些条件说明清楚。</p>` },
        { type: "richtext", surface: true, heading: "发送安排，逐项确认费用", html: `<p>请先说明服务类型、工作城市、日期和简要需求，再沟通工作语言、人员是否可安排、每日服务费及额外费用，最后由双方确认具体安排。发送咨询不等于预订成功。</p>
        <p><a href="/zh/machine-installation-interpreter/">设备安装口译</a> · <a href="/zh/interpreter-in-china/">中国境内口译</a> · <a href="/zh/canton-fair-interpreter/">广交会口译</a></p>
        ${cta("咨询每日服务费与额外支出", "/zh/contact/")}` },
        { type: "faq", ids: FAQ_IDS },
        { type: "finalCta" }
      ]
    }
  }
};
