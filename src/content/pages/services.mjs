// Services overview — /cince-tercuman/ (kept URL) and /zh/interpreting-services/. Plan §7.
export const services = {
  id: "services",
  primaryService: null,
  locales: {
    tr: {
      path: "/cince-tercuman/",
      status: "published",
      indexable: true,
      title: "Çince Tercümanlık Hizmetleri | Çin'de Tercüman, Kurulum, Fabrika, Fuar",
      description: "Çin'de tercüman, makine kurulumu, fabrika ve fuar ziyaretleri için sözlü tercümanlık seçeneklerini karşılaştırın. Günlük hizmet için uygunluk sorun.",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Çince Tercümanlık Hizmetleri",
        inLanguage: "tr",
        url: "https://www.cince-tercuman.com/cince-tercuman/"
      },
      blocks: [
        { type: "hero", eyebrow: "Dört hizmet", h1: "Hangi Çince tercümanlık hizmetine ihtiyacınız var?", lead: "Çalışma yeriniz ve görüşmenin konusu, ihtiyacınız olan sözlü tercümanlık hizmetini belirler. Aşağıdaki dört başlık arasından programınıza uygun olanı seçin.", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "Programınıza göre karar tablosu",
          columns: ["Programınız", "Hizmet", "İlk paylaşılacak bilgi"],
          rows: [
            ["Çin'de planlanmış görüşmeler", "Çin'de tercüman", "Şehirler, tarihler ve görüşme konusu"],
            ["Çinli teknik ekiple kurulum", "Makine kurulumu tercümanlığı", "Makine türü, tesis konumu, tarihler"],
            ["Çin'de belirlenmiş fabrika ziyareti", "Fabrika ziyareti tercümanlığı", "Fabrika konumu ve ziyaret gündemi"],
            ["Çin'de fuara katılım", "Fuar tercümanlığı", "Fuar adı, şehir ve katılım günleri"]
          ]
        },
        {
          type: "cards",
          heading: "Dört hizmet",
          columns: 4,
          items: [
            { title: "Çin'de tercüman", href: "/cinde-tercuman/", cta: "Hizmeti incele" },
            { title: "Makine kurulumu", href: "/makine-kurulumu-cince-tercuman/", cta: "Hizmeti incele" },
            { title: "Fabrika ziyareti", href: "/cinde-fabrika-ziyareti-tercuman/", cta: "Hizmeti incele" },
            { title: "Fuar ziyareti", href: "/cinde-fuar-tercumani/", cta: "Hizmeti incele" }
          ]
        },
        { type: "richtext", heading: "Her hizmette ortak olan yaklaşım", html: `<p>Önce şehir, tarih ve kapsamı netleştiriyoruz. Ardından tercüman uygunluğunu ve günlük ücret teklifini değerlendiriyoruz. Ulaşım, konaklama ve yeme-içme giderleri günlük hizmet bedelinden ayrı ele alınır.</p>` },
        { type: "faq", ids: ["Q001", "Q003", "Q004"] },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/interpreting-services/",
      status: "published",
      indexable: true,
      title: "中土口译服务｜设备安装、中国现场、工厂参访与展会",
      description: "了解中土现场口译的四类服务：设备安装、中国现场会面、工厂参访和展会交流。按天计费，可咨询档期与报价。",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "中土口译服务",
        inLanguage: "zh-Hans",
        url: "https://www.cince-tercuman.com/zh/interpreting-services/"
      },
      blocks: [
        { type: "hero", eyebrow: "四项服务", h1: "您的行程需要哪一种中土口译？", lead: "工作地点与沟通内容决定口译安排。请从下面四类服务中选择与行程相符的一项。", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "按您的安排选择",
          columns: ["您的安排", "对应服务", "咨询时请提供"],
          rows: [
            ["在中国进行既定会面", "中国现场口译", "城市、日期、会面主题"],
            ["中国技术团队进行设备安装", "设备安装口译", "设备类型、工厂地点、日期"],
            ["参访已选定的中国工厂", "工厂参访口译", "工厂地点与沟通议题"],
            ["在中国参加展会", "展会口译", "展会名称、城市、参会日期"]
          ]
        },
        {
          type: "cards",
          heading: "四项服务",
          columns: 4,
          items: [
            { title: "设备安装口译", href: "/zh/machine-installation-interpreter/", cta: "查看服务详情" },
            { title: "中国现场口译", href: "/zh/interpreter-in-china/", cta: "查看服务详情" },
            { title: "工厂参访口译", href: "/zh/factory-visit-interpreter/", cta: "查看服务详情" },
            { title: "展会口译", href: "/zh/trade-fair-interpreter/", cta: "查看服务详情" }
          ]
        },
        { type: "richtext", heading: "所有服务共同遵循的安排方式", html: `<p>先确认城市、日期和口译范围，再确认译员档期与每日费用。交通、住宿及餐饮费用与口译日费分别计算。</p>` },
        { type: "faq", ids: ["Q001", "Q003", "Q004"] },
        { type: "finalCta" }
      ]
    }
  }
};
