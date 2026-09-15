// Contact / quote request — /iletisim/ and /zh/contact/. Plan §16.
// No backend, no request logging; message prepared client-side, user sends it.
export const contact = {
  id: "contact",
  primaryService: null,
  locales: {
    tr: {
      path: "/iletisim/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman Talebi | WhatsApp'tan Uygunluk ve Teklif",
      description: "Hizmet türünü, şehri, tarihleri ve ihtiyacınızı paylaşın. Çince tercüman için WhatsApp, telefon veya e-posta üzerinden uygunluk ve günlük teklif sorun.",
      jsonld: { "@context": "https://schema.org", "@type": "ContactPage", name: "İletişim", inLanguage: "tr" },
      blocks: [
        { type: "hero", eyebrow: "İletişim", h1: "Şehrinizi ve tarihlerinizi paylaşın, uygunluğu birlikte netleştirelim", lead: "Aşağıdaki bilgilerle WhatsApp mesajınızı hazırlayabilir veya doğrudan bize yazabilirsiniz. Hizmet günlük ücretlendirilir; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır." },
        { type: "contactCards" },
        { type: "quoteForm" },
        { type: "priceNote" }
      ]
    },
    "zh-Hans": {
      path: "/zh/contact/",
      status: "published",
      indexable: true,
      title: "联系中土口译｜咨询档期与每日报价",
      description: "请提供服务类型、城市、日期及简要需求，通过 WhatsApp、电话或邮件咨询中土口译档期与每日报价。",
      jsonld: { "@context": "https://schema.org", "@type": "ContactPage", name: "联系我们", inLanguage: "zh-Hans" },
      blocks: [
        { type: "hero", eyebrow: "联系我们", h1: "告诉我们城市与日期，咨询档期和报价", lead: "填写以下信息以准备 WhatsApp 咨询内容，也可直接通过邮件或电话联系。服务按天计费，交通、住宿及餐饮费用另计。" },
        { type: "contactCards" },
        { type: "quoteForm" },
        { type: "priceNote" }
      ]
    }
  }
};
