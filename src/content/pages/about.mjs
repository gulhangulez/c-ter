// About — /hakkimizda/ and /zh/about/. Plan §15.1–15.3.
// No founding year, staff count, certificate, client brand, or unproven claims.
export const about = {
  id: "about",
  primaryService: null,
  locales: {
    tr: {
      path: "/hakkimizda/",
      status: "published",
      indexable: true,
      title: "Hakkımızda | Türkiye ve Çin'de Çince Tercüman",
      description: "Çin'de görüşmeler, fabrika ve fuar ziyaretleri; Türkiye'de makine kurulumu için sözlü tercümanlık yaklaşımımızı ve çalışma biçimimizi inceleyin.",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Çince Tercüman",
        url: "https://www.cince-tercuman.com/",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+905075286187",
          email: "info@cince-tercuman.com",
          availableLanguage: ["tr", "zh-Hans"]
        }
      },
      blocks: [
        { type: "hero", eyebrow: "Hakkımızda", h1: "İki dil arasında, işin yapıldığı yerde", lead: "Çince Tercüman, Türkiye ve Çin'deki saha programları için Çince–Türkçe sözlü tercümanlık desteği sunar. Çalışma odağımız; makine kurulumu, Çin'de planlanmış görüşmeler, fabrika ziyaretleri ve fuar programlarıdır.", ctas: ["quote", "whatsapp"] },
        { type: "richtext", surface: true, heading: "Programınıza göre planlanan bir tercüman ağı", html: `<p>Türkiye ve Çin'in birçok şehrindeki tercüman ağımızla talepleri değerlendiriyoruz. Şehir ve tarih kadar, görüşmenin konusu ve çalışma noktasının konumu da planlamanın bir parçası. Önce bu bilgileri netleştiriyor, ardından uygunluk ve günlük çalışma koşullarını görüşüyoruz.</p>` },
        {
          type: "cards", heading: "Sahaya çıkmadan önce aynı beklentide buluşalım", columns: 3,
          items: [
            { icon: "compass", title: "Hizmet kapsamı", text: "Tercümanın katılacağı görüşmeleri ve konuşulacak konuları belirleyelim." },
            { icon: "map", title: "Çalışma düzeni", text: "Buluşma noktası, günlük saatler ve varsa şehir geçişlerini konuşalım." },
            { icon: "tag", title: "Ücret bilgisi", text: "Günlük tercümanlık ile ulaşım, konaklama ve yeme-içme giderlerini ayrı netleştirelim." }
          ]
        },
        { type: "faq", ids: ["Q016", "Q017"] },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/about/",
      status: "published",
      indexable: true,
      title: "关于我们｜土耳其与中国中土现场口译",
      description: "了解我们为土耳其设备安装及中国会面、工厂和展会行程提供中土口译的服务范围与安排方式。",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Çince Tercüman",
        url: "https://www.cince-tercuman.com/",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+905075286187",
          email: "info@cince-tercuman.com",
          availableLanguage: ["tr", "zh-Hans"]
        }
      },
      blocks: [
        { type: "hero", eyebrow: "关于我们", h1: "在工作现场，连接中文与土耳其语", lead: "Çince Tercüman 为土耳其与中国的现场行程提供中土双向口译。服务重点包括设备安装、中国既定会面、工厂参访及展会交流。", ctas: ["quote", "whatsapp"] },
        { type: "richtext", surface: true, heading: "根据具体行程安排译员网络", html: `<p>我们通过土耳其与中国多个城市的译员网络评估需求。除城市及日期外，议题和实际地点同样影响安排。先明确这些信息，再沟通档期与每日工作条件。</p>` },
        {
          type: "cards", heading: "进入现场前，先确认彼此的预期", columns: 3,
          items: [
            { icon: "compass", title: "服务范围", text: "明确译员参加的会面和沟通内容。" },
            { icon: "map", title: "工作安排", text: "确认集合地点、每日时段和城市之间的转场。" },
            { icon: "tag", title: "费用说明", text: "分别明确日费与交通、住宿及餐饮支出。" }
          ]
        },
        { type: "faq", ids: ["Q016", "Q017"] },
        { type: "finalCta" }
      ]
    }
  }
};
