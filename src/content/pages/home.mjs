// Home page — TR "/" and ZH "/zh/". Real content per plan §6 (+ §34.2 ZH card).
export const home = {
  id: "home",
  primaryService: null,
  locales: {
    tr: {
      path: "/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman | Türkiye ve Çin'de Sözlü Tercümanlık",
      description: "Türkiye'de makine kurulumu, Çin'de fabrika ve fuar ziyaretleri için Çince tercüman. Şehir ve tarihinizi paylaşın, günlük hizmet için uygunluk ve teklif sorun.",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Çince Tercüman",
        url: "https://www.cince-tercuman.com/",
        inLanguage: "tr"
      },
      blocks: [
        {
          type: "hero",
          eyebrow: "Çince–Türkçe sözlü tercümanlık",
          h1: "Türkiye ve Çin'de profesyonel Çince tercüman desteği",
          lead: "Makine kurulumu, Çin'de fabrika ve fuar ziyaretleriniz için sözlü tercümanlık. Şehrinizi, tarihlerinizi ve ihtiyacınızı paylaşın; programınıza uygun desteği birlikte planlayalım.",
          bullets: ["Günlük çalışma", "Çok şehirli tercüman ağı", "Açık masraf bilgisi"],
          ctas: ["quote", "whatsapp"],
          card: {
            title: "Tercümana nerede ihtiyacınız var?",
            intro: "Hizmet, şehir, tarih ve kısa ihtiyacınızı yazın. Hizmet seçmeden de doğrudan WhatsApp'a geçebilirsiniz.",
            items: ["Hizmet türü", "Şehir / çalışma bölgesi", "Tarih aralığı", "Kısa ihtiyaç"],
            ctas: [{ kind: "quote", label: "Talep formuna git" }, "whatsapp"]
          }
        },
        { type: "priceNote" },
        {
          type: "cards",
          heading: "Programınıza uygun tercümanlık hizmetini seçin",
          intro: "Kurulum sahasında, fabrika ziyaretinde veya fuar görüşmesinde ihtiyaç farklıdır. Hizmet kapsamını programınıza göre netleştiriyoruz.",
          columns: 4,
          items: [
            { icon: "chat", title: "Çin'de tercüman", text: "Çin'deki planlanmış görüşmelerinizde Çince–Türkçe sözlü iletişim desteği. Şehir ve tarihlerinize göre tercüman uygunluğunu sorun.", href: "/cinde-tercuman/", cta: "Hizmeti incele" },
            { icon: "wrench", title: "Makine kurulumu", text: "Çinli teknik ekip ile işletmeniz arasındaki kurulum, devreye alma ve kullanım açıklamalarını anlaşılır biçimde aktaralım.", href: "/makine-kurulumu-cince-tercuman/", cta: "Hizmeti incele" },
            { icon: "factory", title: "Fabrika ziyareti", text: "Belirlediğiniz fabrikalarda üretim akışı, ürün özellikleri ve çalışma koşulları hakkındaki görüşmelere sözlü tercümanlık.", href: "/cinde-fabrika-ziyareti-tercuman/", cta: "Hizmeti incele" },
            { icon: "booth", title: "Fuar ziyareti", text: "Çin'de katılacağınız fuarda stant görüşmeleri, ürün açıklamaları ve soru-cevaplar için yanınızdayız.", href: "/cinde-fuar-tercumani/", cta: "Hizmeti incele" }
          ]
        },
        {
          type: "richtext",
          surface: true,
          heading: "Şu durumlardan biri sizin programınıza uyuyor mu?",
          html: `<ul>
            <li>"Çin'den gelen teknik ekip makineyi kuracak." → <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu sayfası</a>.</li>
            <li>"Çin'de görüşeceğim fabrikaları belirledim." → <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti sayfası</a>.</li>
            <li>"Çin'de bir fuara katılacağım." → <a href="/cinde-fuar-tercumani/">Fuar tercümanlığı sayfası</a>.</li>
            <li>"Çin'de birden fazla görüşmem var." → <a href="/cinde-tercuman/">Çin'de tercüman sayfası</a>.</li>
          </ul>
          <p class="muted">Bunlar gerçek müşteri vaka çalışmaları değil, ziyaretçinin hizmet seçmesine yardımcı olan senaryo metinleridir.</p>`
        },
        {
          type: "richtext",
          heading: "Türkiye ve Çin'de birçok şehirde tercüman ağı",
          html: `<p>Türkiye'de İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep; Çin'de Guangzhou, Shanghai ve Beijing başta olmak üzere farklı şehirlerdeki tercüman ağımızla talepleri değerlendiriyoruz. Yakın şehirler ve merkez dışındaki çalışma noktaları için programınızı paylaşabilirsiniz.</p>
          <p class="muted">Listelenen şehirler hizmet bölgelerini belirtir. Tercüman uygunluğu tarih ve çalışma konumuna göre teyit edilir.</p>
          <p><a class="button-ghost" href="/hizmet-bolgeleri/">Hizmet bölgelerini incele</a></p>`
        },
        {
          type: "steps",
          heading: "Üç adımda çalışma planını netleştirelim",
          items: [
            { title: "İhtiyacınızı paylaşın.", text: "Hizmeti, şehri, tarihleri ve görüşmenin konusunu yazın." },
            { title: "Uygunluk ve günlük teklifi görüşelim.", text: "Programınıza göre tercüman uygunluğunu, günlük çalışma aralığını ve ayrıca alınan masrafları netleştirelim." },
            { title: "Programı karşılıklı teyit edelim.", text: "Çalışma yeri, buluşma saati ve hizmet kapsamı teyit edildikten sonra saha programına geçelim." }
          ]
        },
        {
          type: "callout",
          html: `<strong>Not:</strong> WhatsApp mesajı göndermek tek başına rezervasyon oluşturmaz.`
        },
        {
          type: "cards",
          heading: "Önce beklentileri netleştiriyoruz",
          columns: 3,
          surface: true,
          items: [
            { icon: "compass", title: "Kapsam belli", text: "Tercümanın hangi görüşmelere katılacağını ve hangi konuların konuşulacağını önceden belirleyelim." },
            { icon: "map", title: "Konum belli", text: "Şehir adı kadar fabrika veya fuar alanının gerçek konumu da önemli. Çalışma noktasını programın başında paylaşın." },
            { icon: "tag", title: "Ücret kalemleri belli", text: "Günlük tercümanlık ücreti ile ulaşım, konaklama ve yeme-içme giderlerini ayrı değerlendirelim." }
          ]
        },
        { type: "faq", heading: "İlk sorularınıza kısa cevaplar", ids: ["Q001", "Q002", "Q007", "Q013", "Q072"] },
        { type: "finalCta" }
      ]
    },

    "zh-Hans": {
      path: "/zh/",
      status: "published",
      indexable: true,
      title: "中土口译服务｜土耳其设备安装与中国工厂、展会参访",
      description: "提供土耳其设备安装、中国工厂参访和展会现场的中土双向口译。按天计费，请告知城市、日期和需求，咨询档期与报价。",
      jsonld: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Çince Tercüman",
        url: "https://www.cince-tercuman.com/zh/",
        inLanguage: "zh-Hans"
      },
      blocks: [
        {
          type: "hero",
          eyebrow: "中文与土耳其语双向口译",
          h1: "在土耳其与中国，清楚沟通每一步",
          lead: "为前往土耳其进行设备安装的技术团队，以及在中国参访工厂和展会的企业提供现场口译。请告知城市、日期和沟通内容，我们将据此确认合适的服务安排。",
          bullets: ["按天计费", "多城市译员网络", "费用项目清晰"],
          ctas: ["quote", "whatsapp"],
          card: {
            title: "您需要哪里的口译服务？",
            intro: "请填写服务类型、城市、日期和简要需求。也可以不选服务，直接通过 WhatsApp 咨询。",
            items: ["服务类型", "城市 / 工作区域", "日期", "简要需求"],
            ctas: [{ kind: "quote", label: "前往咨询表单" }, "whatsapp"]
          }
        },
        { type: "priceNote" },
        {
          type: "callout",
          variant: "info",
          html: `<strong>中国技术团队赴土耳其安装设备？</strong> 我们协助中国工程师与土耳其工厂在<a href="/zh/machine-installation-interpreter/">设备安装、调试</a>及现场沟通中使用中土双向口译，常见工作地点包括<a href="/zh/service-areas/">伊斯坦布尔及周边</a>。`
        },
        {
          type: "cards",
          heading: "按您的行程选择口译服务",
          intro: "设备安装、工厂参访和展会交流的沟通重点各不相同。请先选择与您行程相符的服务。",
          columns: 4,
          items: [
            { icon: "wrench", title: "设备安装口译", text: "协助中国技术团队与土耳其工厂沟通设备安装、调试及使用说明。", href: "/zh/machine-installation-interpreter/", cta: "查看服务详情" },
            { icon: "chat", title: "中国现场口译", text: "为在中国的既定会面与现场行程提供中土双向口译。请根据城市及日期咨询译员档期。", href: "/zh/interpreter-in-china/", cta: "查看服务详情" },
            { icon: "factory", title: "工厂参访口译", text: "在您选定的工厂，协助双方沟通生产流程、产品参数及相关安排。", href: "/zh/factory-visit-interpreter/", cta: "查看服务详情" },
            { icon: "booth", title: "展会口译", text: "在中国展会现场，协助双方进行展位交流、产品介绍与问答。", href: "/zh/trade-fair-interpreter/", cta: "查看服务详情" }
          ]
        },
        {
          type: "richtext",
          surface: true,
          heading: "哪一种情况符合您的安排？",
          html: `<ul>
            <li>"我们的技术团队将前往土耳其安装设备。" → <a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</li>
            <li>"我们将接待或陪同土耳其客户参访中国工厂。" → <a href="/zh/factory-visit-interpreter/">工厂参访口译</a>。</li>
            <li>"我们将在中国展会现场与土耳其客户交流。" → <a href="/zh/trade-fair-interpreter/">展会口译</a>。</li>
            <li>"我们在中国有多场需要中土口译的会面。" → <a href="/zh/interpreter-in-china/">中国现场口译</a>。</li>
          </ul>`
        },
        {
          type: "richtext",
          heading: "覆盖土耳其与中国多座城市的译员网络",
          html: `<p>我们的服务网络涉及土耳其的伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利、加济安泰普，以及中国的广州、上海和北京。附近城市及市区以外的现场需求，可根据具体行程咨询。</p>
          <p class="muted">城市列表表示服务范围，并不代表每座城市均设有办公室。译员档期需根据日期和实际地点确认。</p>
          <p><a class="button-ghost" href="/zh/service-areas/">查看服务地区</a></p>`
        },
        {
          type: "steps",
          heading: "用三个步骤确认服务安排",
          items: [
            { title: "说明需求。", text: "请告知服务类型、城市、日期和沟通主题。" },
            { title: "确认档期与日费。", text: "根据行程确认译员档期、每日工作时段及另计费用。" },
            { title: "双方确认行程。", text: "明确工作地点、见面时间及口译范围后，再落实现场安排。" }
          ]
        },
        { type: "callout", html: `<strong>提示：</strong>发送咨询消息并不代表预约已确认。` },
        { type: "faq", heading: "常见问题，先了解这些", ids: ["Q001", "Q002", "Q007", "Q013", "Q072"] },
        { type: "finalCta" }
      ]
    }
  }
};
