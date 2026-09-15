// General FAQ — /sik-sorulan-sorular/ and /zh/faq/. Plan §15.4.
// FAQPage JSON-LD intentionally omitted (Google dropped FAQ rich results, §2.4/G2).
export const faqPage = {
  id: "faq",
  primaryService: null,
  locales: {
    tr: {
      path: "/sik-sorulan-sorular/",
      status: "published",
      indexable: true,
      title: "Çince Tercümanlık Hakkında Sık Sorulan Sorular",
      description: "Çince sözlü tercümanlıkta günlük çalışma, hizmet bölgeleri, teklif için gerekli bilgiler ve program değişiklikleri hakkında sık sorulan sorular.",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "Sık sorulan sorular", inLanguage: "tr" },
      blocks: [
        { type: "hero", eyebrow: "Sık sorulan sorular", h1: "Tercümanlık talebi öncesinde merak edilenler", lead: "İhtiyacınızı doğru tarif etmek ve çalışma koşullarını önceden netleştirmek için en sık karşılaşılabilecek soruları yanıtladık.", ctas: ["quote", "whatsapp"] },
        {
          type: "cards", heading: "Konuya göre ayrıntılı cevaplar", columns: 3,
          items: [
            { icon: "chat", title: "Hizmetler", href: "/cince-tercuman/", cta: "Dört hizmeti gör" },
            { icon: "tag", title: "Günlük ücret", href: "/cince-tercuman-fiyatlari/", cta: "Ücret sayfası" },
            { icon: "map", title: "Hizmet bölgeleri", href: "/hizmet-bolgeleri/", cta: "Şehirler" }
          ]
        },
        { type: "faq", heading: "Sık sorulan sorular", ids: ["Q005", "Q006", "Q041", "Q042", "Q043", "Q044", "Q046"] },
        { type: "richtext", heading: "WhatsApp kullanamıyorsam nasıl ulaşırım?", html: `<p>info@cince-tercuman.com adresine hizmet, şehir, tarih ve kısa ihtiyaç bilgilerinizi gönderebilirsiniz. Telefonla ulaşmak için +90 507 528 61 87 numarasını kullanabilirsiniz.</p><p class="muted">Sorunuz programınıza özel mi? Şehir ve tarihleri paylaşarak bize ulaşın.</p>` },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/faq/",
      status: "published",
      indexable: true,
      title: "中土口译常见问题｜档期、费用与行程",
      description: "了解中土现场口译的按日安排、服务地区、咨询信息、费用及行程变更相关问题。",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "常见问题", inLanguage: "zh-Hans" },
      blocks: [
        { type: "hero", eyebrow: "常见问题", h1: "咨询口译前，您可能想了解的问题", lead: "以下内容帮助您说明需求，并在安排服务前明确工作条件。", ctas: ["quote", "whatsapp"] },
        {
          type: "cards", heading: "按主题查看详细回答", columns: 3,
          items: [
            { icon: "chat", title: "口译服务", href: "/zh/interpreting-services/", cta: "四项服务" },
            { icon: "tag", title: "日费说明", href: "/zh/daily-rates/", cta: "费用页面" },
            { icon: "map", title: "服务地区", href: "/zh/service-areas/", cta: "城市" }
          ]
        },
        { type: "faq", heading: "常见问题", ids: ["Q005", "Q006", "Q041", "Q042", "Q043", "Q044", "Q046"] },
        { type: "richtext", heading: "无法使用 WhatsApp，如何联系？", html: `<p>您可以将服务类型、城市、日期及简要需求发送至 info@cince-tercuman.com，也可以拨打 +90 507 528 61 87。</p><p class="muted">您的问题与具体行程有关吗？请提供城市与日期联系我们。</p>` },
        { type: "finalCta" }
      ]
    }
  }
};
