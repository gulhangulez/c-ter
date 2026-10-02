// Home page — TR "/" and ZH "/zh/". Content per plan §6.2–6.3.

const svcCards = (heading, items) => ({
  type: "raw",
  html: `<section class="section"><div class="container">
      <h2>${heading}</h2>
      <div class="card-grid card-grid--4">${items.map((it) => `
        <article class="card" style="display:flex;flex-direction:column">
          <h3><a href="${it.href}">${it.title}</a></h3>
          <p class="card__scope">${it.text}</p>
          <p>${it.links}</p>
        </article>`).join("")}
      </div>
    </div></section>`
});

export const home = {
  id: "home",
  primaryService: null,
  locales: {
    tr: {
      path: "/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman | Türkiye ve Çin'de Sözlü Tercümanlık",
      description: "Çin'de görüşme, fabrika ve fuar ziyaretleri; Türkiye'de Çinli teknik ekiplerle makine kurulumu için Çince–Türkçe sözlü tercümanlık. Günlük teklif sorun.",
      schema: { type: "WebPage", crumbs: [] },
      blocks: [
        {
          type: "hero",
          h1: "Çince tercüman: Türkiye'de makine kurulumu, Çin'de fabrika ve fuar ziyaretleri",
          lead: "Çin'de planladığınız görüşmelerde veya Türkiye'de Çinli teknik ekiple yürüteceğiniz makine kurulumu sırasında, iki tarafın birbirini anlamasına yardımcı oluyoruz. Şehri, tarihleri ve görüşmenin konusunu paylaşın; ihtiyacınıza uygun sözlü tercümanlık için uygunluk ve günlük teklifi değerlendirelim.",
          ctas: ["quote", "whatsapp"],
          card: {
            title: "Tercümana nerede ihtiyacınız var?",
            intro: "Hizmet, şehir, tarih ve kısa ihtiyacınızı yazın. Hizmet seçmeden de doğrudan WhatsApp'a geçebilirsiniz.",
            items: ["Hizmet türü", "Şehir / çalışma bölgesi", "Tarih aralığı", "Kısa ihtiyaç"],
            ctas: [{ kind: "quote", label: "Talep formuna git" }, "whatsapp"]
          }
        },
        { type: "logos", heading: "Daha önce sözlü tercümanlık desteği verdiğimiz firmalardan bazıları" },
        svcCards("Programınıza uygun hizmeti seçin", [
          {
            title: "Çin'de tercüman", href: "/cinde-tercuman/",
            text: "Çin'de önceden planladığınız yüz yüze görüşmeler için Çince–Türkçe sözlü iletişim desteği. Birden fazla şehir veya çalışma noktası varsa programınızı gün gün paylaşın.",
            links: `<a class="arrow-link" href="/cinde-tercuman/">Çin'de tercümanlık hizmetini inceleyin →</a>`
          },
          {
            title: "Makine kurulumu ve devreye alma", href: "/makine-kurulumu-cince-tercuman/",
            text: "Çinli teknik ekibin kurulum adımlarını, test sürecini ve kullanım açıklamalarını Türk tarafına; Türk ekibin sorularını Çinli teknik ekibe aktaran sözlü tercümanlık.",
            links: `<a class="arrow-link" href="/makine-kurulumu-cince-tercuman/">Makine kurulumu için tercümanlık →</a>`
          },
          {
            title: "Çin'de fabrika ziyareti", href: "/cinde-fabrika-ziyareti-tercuman/",
            text: "Sizin belirlediğiniz fabrikalarda üretim açıklamalarını, ürün sorularını ve görüşme gündeminizi iki dil arasında aktarırız. Fabrika seçimi, denetim veya kalite garantisi hizmetin kapsamında değildir.",
            links: `<a class="arrow-link" href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti tercümanlığı →</a>`
          },
          {
            title: "Çin'de fuar ve stant görüşmeleri", href: "/cinde-fuar-tercumani/",
            text: "Belirlediğiniz fuarlarda firma tanışmaları, ürün açıklamaları ve stant görüşmeleri için sözlü tercümanlık. Hizmet tur veya seyahat organizasyonu içermez.",
            links: `<a class="arrow-link" href="/cinde-fuar-tercumani/">Fuar tercümanlığı →</a><br><a class="arrow-link" href="/kanton-fuari-tercuman/">Kanton Fuarı tercümanlığı →</a>`
          }
        ]),
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
          heading: "Hangi şehirlerde çalışıyoruz?",
          html: `<p>Türkiye'deki hizmet ağımız İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep; Çin'deki hizmet ağımız Guangzhou, Shanghai ve Beijing şehirlerini kapsar. Her talep gerçek çalışma noktası, tarih ve uygunluk bakımından değerlendirilir. Şehir listesi o şehirde ofis veya her tarihte hazır tercüman bulunduğu anlamına gelmez. Yakın bölgeler için de konum ve tarih bilgisiyle talep gönderebilirsiniz. <a href="/hizmet-bolgeleri/">Hizmet bölgelerine bakın</a>.</p>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Talebinizi dört bilgiyle başlatın",
          html: `<p>İhtiyacınız olan hizmeti, şehri ve çalışma bölgesini, tarihleri ve kısa iş tanımını yazmanız yeterli. İlk mesajda gizli teknik dosya paylaşmanız gerekmez.</p>
          <ol class="steps">
            <li><strong>Hizmeti, çalışma şehrini, tarihleri ve kısa ihtiyacınızı paylaşın.</strong></li>
            <li><strong>Dil gereksinimini ve uygunluğu, günlük tercümanlık ücreti ile ek masrafları birlikte değerlendirelim.</strong></li>
            <li><strong>Programı karşılıklı teyit edelim.</strong></li>
          </ol>
          <p>Talep göndermek tek başına rezervasyon oluşturmaz.</p>
          <p><a href="/cince-tercuman-fiyatlari/">Günlük ücret ve ek masraflar</a> · <a href="/rehber/tercuman-talebi-icin-gerekli-bilgiler/">Talep için gerekli bilgiler</a></p>`
        },
        { type: "priceNote" },
        {
          type: "richtext",
          heading: "Hizmetin sınırları açıktır",
          html: `<p>Yalnızca Çince–Türkçe sözlü tercümanlık sunuyoruz. Yazılı belge çevirisi, ürün araştırma, ithalat veya ticari danışmanlık vermiyoruz. Teknik uygulamalar yetkili teknik ekiplerin, satın alma kararları müşterinin sorumluluğundadır.</p>`
        },
        { type: "faq", heading: "İlk sorularınıza kısa cevaplar", ids: ["Q001", "Q002", "Q007", "Q013", "Q072"] },
        { type: "finalCta" }
      ]
    },

    "zh-Hans": {
      path: "/zh/",
      status: "published",
      indexable: true,
      title: "土耳其中文口译｜设备安装与中土商务现场沟通",
      description: "为赴土耳其安装、调试设备的中国技术团队提供中土双语现场口译，也承接中国境内土耳其客户的工厂与展会口译。按天计费，咨询档期与报价。",
      schema: { type: "WebPage", crumbs: [] },
      blocks: [
        {
          type: "hero",
          h1: "为赴土耳其的中国技术团队提供现场口译",
          lead: "设备安装现场的一个问题，往往需要工程师、操作人员和负责人共同确认。我们提供中文与土耳其语之间的现场口译，协助双方沟通安装步骤、调试情况和使用说明。请告知设备类型、土耳其工作城市及日期，以便确认服务安排。",
          ctas: ["quote", "email"],
          card: {
            title: "您需要哪里的口译服务？",
            intro: "请填写服务类型、城市、日期和简要需求。也可以不选服务，直接通过 WhatsApp 或邮件咨询。",
            items: ["服务类型", "城市 / 工作地点", "日期", "简要需求"],
            ctas: [{ kind: "quote", label: "前往咨询表单" }, "email"]
          }
        },
        { type: "logos", heading: "我们曾为以下企业提供口译服务（部分）" },
        svcCards("您需要哪一种现场口译？", [
          {
            title: "土耳其设备安装与调试口译", href: "/zh/machine-installation-interpreter/",
            text: "协助中国工程师与土耳其现场团队沟通安装步骤、测试结果和操作问题。口译人员负责语言沟通，不承担设备安装、维修或安全决策。",
            links: `<a class="arrow-link" href="/zh/machine-installation-interpreter/">查看设备安装口译 →</a>`
          },
          {
            title: "中国境内的中土双语口译", href: "/zh/interpreter-in-china/",
            text: "土耳其客户来中国进行已安排好的会面，需要现场口译时，请提供城市、日期、地点和会面主题。",
            links: `<a class="arrow-link" href="/zh/interpreter-in-china/">查看中国境内口译 →</a>`
          },
          {
            title: "中国工厂参观与会谈口译", href: "/zh/factory-visit-interpreter/",
            text: "为客户已确定的工厂访问提供口译，协助介绍产品、说明生产环节并传达双方的问题。服务不包括寻找工厂、验厂或产品质量保证。",
            links: `<a class="arrow-link" href="/zh/factory-visit-interpreter/">查看工厂访问口译 →</a>`
          },
          {
            title: "展会与展位洽谈口译", href: "/zh/trade-fair-interpreter/",
            text: "协助中国展商与土耳其客户进行产品介绍及现场洽谈，也可根据客户的展位访问安排提供口译。",
            links: `<a class="arrow-link" href="/zh/trade-fair-interpreter/">查看展会口译 →</a><br><a class="arrow-link" href="/zh/canton-fair-interpreter/">广交会口译 →</a>`
          }
        ]),
        {
          type: "richtext",
          surface: true,
          heading: "派工程师之前，先确认四项信息",
          html: `<p>请提供服务类型、实际工作城市及地点、日期、简要需求。土耳其客户的办公地址可能与设备安装地点不同，请以实际工作地点为准。日期尚未确定时，可以注明预计时间和待确认事项。无需在首次咨询时发送机密技术文件。</p>`
        },
        {
          type: "richtext",
          heading: "服务地区与工作安排",
          html: `<p>土耳其服务网络涉及伊斯坦布尔（İstanbul）、泰基尔达（Tekirdağ）、迪兹杰（Düzce）、安卡拉（Ankara）、开塞利（Kayseri）和加济安泰普（Gaziantep）；中国服务网络涉及广州、上海和北京。每项需求均需按地点、日期和人员是否可安排单独确认。列出城市不代表当地设有办公室或随时有人员待命。其他邻近地区可提交具体地点进行评估。<a href="/zh/service-areas/">查看服务地区</a>。</p>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "按天报价，额外费用单独说明",
          html: `<p>口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。请先发送城市、日期和简要需求，再沟通工作语言、人员是否可安排及具体费用，最后由双方确认工作安排。发送咨询不等于预订成功。<a href="/zh/daily-rates/">查看每日费用说明</a>。无法使用 WhatsApp 时，请通过 <a href="mailto:info@cince-tercuman.com">info@cince-tercuman.com</a> 或 <a href="tel:+905075286187">+90 507 528 61 87</a> 联系，也可在<a href="/zh/contact/">联系页面</a>复制咨询内容。</p>`
        },
        { type: "faq", heading: "常见问题，先了解这些", ids: ["Q001", "Q002", "Q007", "Q013", "Q072"] },
        { type: "finalCta" }
      ]
    }
  }
};
