// Daily rates — /cince-tercuman-fiyatlari/ and /zh/daily-rates/. Plan §14.
// No fixed price / currency / "starting from" is ever emitted (business rule).
export const rates = {
  id: "rates",
  primaryService: null,
  locales: {
    tr: {
      path: "/cince-tercuman-fiyatlari/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman Ücretleri | Günlük Çalışma ve Masraflar",
      description: "Çince tercümanlık günlük ücretlendirilir. Ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Şehir, tarih ve hizmet bilgisiyle size uygun teklifi sorun.",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "Günlük ücret ve masraflar", inLanguage: "tr" },
      blocks: [
        { type: "hero", eyebrow: "Günlük ücret", h1: "Çince tercümanlıkta günlük ücret ve ayrıca alınan masraflar", lead: "Hizmetlerimizi günlük çalışma üzerinden planlıyoruz. Teklif; ihtiyaç duyulan hizmet, şehir, tarihler ve çalışma düzeni netleştirildikten sonra oluşturulur.", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "Ücret kalemleri",
          columns: ["Kalem", "Açıklama"],
          rows: [
            ["Günlük tercümanlık", "Belirlenen çalışma günü için sözlü tercümanlık bedeli."],
            ["Şehir içi ulaşım", "Günlük tercümanlık bedeline dahil değildir; ayrıca hesaplanır."],
            ["Şehir dışı ulaşım", "Programın gerektirdiği ulaşım ayrıca değerlendirilir."],
            ["Konaklama", "Günlük tercümanlık bedelinden ayrı değerlendirilir."],
            ["Yeme-içme", "Günlük tercümanlık bedeline dahil değildir."]
          ]
        },
        { type: "richtext", heading: "Tek bir fiyat yerine programınıza uygun teklif", html: `<p>Şehir ve tarih aynı olsa bile çalışma noktası, günlük saatler ve teknik konu farklı olabilir. Talebinizi bu bilgilerle değerlendirelim; günlük hizmet bedelini ve ayrıca alınan giderleri ayrı ayrı görelim.</p>` },
        { type: "faq", ids: ["Q007", "Q013", "Q060", "Q055", "Q056", "Q057", "Q058", "Q059", "Q008", "Q009", "Q011", "Q012", "Q010", "Q061", "Q062", "Q014"] },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/daily-rates/",
      status: "published",
      indexable: true,
      title: "中土口译日费说明｜按天计费与相关费用",
      description: "中土现场口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。请提供服务类型、城市及日期，咨询具体报价。",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "日费说明", inLanguage: "zh-Hans" },
      blocks: [
        { type: "hero", eyebrow: "日费说明", h1: "中土口译按天计费，相关费用分别确认", lead: "服务以每日工作安排为基础。明确服务类型、城市、日期及每日工作要求后，再确认具体报价。", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "费用项目",
          columns: ["项目", "说明"],
          rows: [
            ["口译日费", "已确认工作日的现场口译费用。"],
            ["市内交通", "不含在口译日费内，另行计算。"],
            ["城际交通", "根据行程所需的城际交通另行确认。"],
            ["住宿", "与每日口译费用分开确认。"],
            ["餐饮", "不含在每日口译费用内。"]
          ]
        },
        { type: "richtext", heading: "根据具体行程报价，而不是套用统一数字", html: `<p>即使城市和日期相同，实际地点、每日时段与技术内容也可能不同。请提供这些信息，以便分别确认日费及相关支出。</p>` },
        { type: "faq", ids: ["Q007", "Q013", "Q060", "Q055", "Q056", "Q057", "Q058", "Q059", "Q008", "Q009", "Q011", "Q012", "Q010", "Q061", "Q062", "Q014"] },
        { type: "finalCta" }
      ]
    }
  }
};
