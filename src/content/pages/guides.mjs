// Preparation guides: collection + 4 guides. Plan §18.1–18.5.
// Q&A answers form the real body; no fabricated read-time / author / publish date.

const collection = {
  id: "guides",
  primaryService: null,
  locales: {
    tr: {
      path: "/hazirlik-rehberleri/",
      status: "published", indexable: true,
      title: "Çince Tercümanlık İçin Hazırlık Rehberleri",
      description: "Tercüman talebinde paylaşılacak bilgiler, makine kurulumu ve Çin'de fabrika/fuar programları için kısa hazırlık rehberleri.",
      jsonld: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Hazırlık rehberleri", inLanguage: "tr" },
      blocks: [
        { type: "hero", eyebrow: "Hazırlık rehberleri", h1: "Tercümanlık talebinizi ve saha programınızı hazırlayın", lead: "Kısa rehberlerimiz, ilk mesajda hangi bilgileri paylaşmanız ve çalışma öncesinde hangi konuları netleştirmeniz gerektiğini anlatır." },
        {
          type: "cards", heading: "Dört rehber", columns: 2,
          items: [
            { icon: "chat", title: "Tercüman talebi için gerekli bilgiler", href: "/rehber/tercuman-talebi-icin-gerekli-bilgiler/", cta: "Rehberi oku" },
            { icon: "wrench", title: "Makine kurulumu öncesi tercüman hazırlığı", href: "/rehber/makine-kurulumu-tercuman-hazirligi/", cta: "Rehberi oku" },
            { icon: "booth", title: "Fabrika ve fuar programı hazırlığı", href: "/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/", cta: "Rehberi oku" },
            { icon: "book", title: "Çince tercüman nasıl seçilir?", href: "/rehber/cince-tercuman-nasil-secilir/", cta: "Rehberi oku" }
          ]
        },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/preparation-guides/",
      status: "published", indexable: true,
      title: "中土口译准备指南｜咨询与现场行程",
      description: "了解口译咨询需要的信息，以及设备安装、中国工厂参访和展会行程的准备要点。",
      jsonld: { "@context": "https://schema.org", "@type": "CollectionPage", name: "准备指南", inLanguage: "zh-Hans" },
      blocks: [
        { type: "hero", eyebrow: "准备指南", h1: "为口译咨询和现场行程做好准备", lead: "通过这些简短指南，了解首次咨询应提供什么信息，以及服务前需要确认哪些安排。" },
        {
          type: "cards", heading: "四份指南", columns: 2,
          items: [
            { icon: "chat", title: "咨询口译时需要提供哪些信息", href: "/zh/guides/information-for-interpreter-request/", cta: "阅读指南" },
            { icon: "wrench", title: "设备安装前如何准备口译信息", href: "/zh/guides/prepare-machine-installation-interpreting/", cta: "阅读指南" },
            { icon: "booth", title: "为工厂与展会行程准备口译信息", href: "/zh/guides/prepare-factory-and-fair-interpreting/", cta: "阅读指南" },
            { icon: "book", title: "如何选择中土口译？", href: "/zh/guides/how-to-choose-a-turkish-chinese-interpreter/", cta: "阅读指南" }
          ]
        },
        { type: "finalCta" }
      ]
    }
  }
};

function guide({ id, faqIds = [], tr, zh }) {
  const mk = (locale, d) => ({
    path: d.path, status: "published", indexable: true,
    title: d.title, description: d.description,
    jsonld: { "@context": "https://schema.org", "@type": "Article", headline: d.h1, inLanguage: locale, author: { "@type": "Organization", name: "Çince Tercüman" } },
    blocks: [
      { type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead },
      { type: "richtext", surface: true, html: d.body },
      ...(faqIds.length ? [{ type: "faq", ids: faqIds }] : []),
      { type: "finalCta" }
    ]
  });
  return { id, primaryService: null, locales: { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) } };
}

const requestGuide = guide({
  id: "guide-request", faqIds: ["Q018"],
  tr: {
    path: "/rehber/tercuman-talebi-icin-gerekli-bilgiler/",
    title: "Çince tercüman talebi için hangi bilgileri paylaşmalısınız?",
    description: "Çince tercüman talebinde hizmet, şehir, tarih ve görüşme konusunu nasıl paylaşacağınızı öğrenin. Günlük ücret ve masrafları önceden netleştirin.",
    eyebrow: "Hazırlık rehberi",
    h1: "Çince tercüman talebi için hangi bilgileri paylaşmalısınız?",
    lead: "İlk mesajda uzun bir dosya hazırlamanız gerekmez. Hizmet türü, şehir, çalışma tarihleri ve kısa görüşme konusu, talebin değerlendirilebilmesi için iyi bir başlangıçtır.",
    body: `<h3>1. Yapılacak işi tek cümleyle anlatın</h3><p>"Çinli teknik ekip fabrikamızda makine kuracak" veya "Guangzhou'da iki gün fuara katılacağım" gibi açık bir ifade kullanın. Görüşmenin sözlü tercümanlık gerektiren kısmını belirtin.</p>
    <h3>2. Şehir ile gerçek çalışma noktasını ayırın</h3><p>Otelinizin veya şirket merkezinizin bulunduğu şehir tek başına yeterli olmayabilir. Fabrikanın ya da fuarın konumunu belirtin. Henüz kesin adres yoksa bilinen ilçe veya bölgeyi yazın.</p>
    <h3>3. Tarihleri ve belirsizlikleri açıkça yazın</h3><p>Başlangıç gününüz belli ama bitiş günü belirsizse bunu söyleyin. Farklı günlerde farklı şehirler varsa her günü ayrı satırda belirtin. Kesinleşmeyen bilgiyi kesinmiş gibi yazmayın.</p>
    <p><a href="/iletisim/">Talep formundan</a> bu bilgileri hazır bir mesaja dönüştürebilirsiniz.</p>`
  },
  zh: {
    path: "/zh/guides/information-for-interpreter-request/",
    title: "咨询中土口译时，需要提供哪些信息？",
    description: "了解中土口译咨询需要的服务类型、城市、日期和沟通内容，便于分别确认每日费用及相关支出。",
    eyebrow: "准备指南",
    h1: "咨询中土口译时，需要提供哪些信息？",
    lead: "首次咨询无需准备冗长的文件。服务类型、城市、工作日期和简要沟通内容，就是一个良好的开始。",
    body: `<h3>1. 用一句话说明要做的事</h3><p>例如"中国技术团队将在我们工厂安装设备"或"我将在广州参加两天展会"。请指出需要口译的环节。</p>
    <h3>2. 区分城市与实际工作地点</h3><p>酒店或公司总部所在城市未必足够，请说明工厂或展馆位置。若暂无确切地址，可提供已知的区域。</p>
    <h3>3. 清楚写明日期与不确定之处</h3><p>如果开始日期确定但结束日期未定，请说明。不同日期涉及不同城市时，请逐行列出，不要把未定信息写成确定。</p>
    <p>可在<a href="/zh/contact/">咨询表单</a>中把这些信息整理成一条消息。</p>`
  }
});

const machineGuide = guide({
  id: "guide-machine", faqIds: ["Q075", "Q076", "Q077", "Q078", "Q079", "Q080", "Q081", "Q082", "Q083"],
  tr: {
    path: "/rehber/makine-kurulumu-tercuman-hazirligi/",
    title: "Makine kurulumu öncesinde tercüman için nasıl hazırlık yapılır?",
    description: "Makine kurulumu öncesinde cihaz türü, saha konumu, çalışma günleri ve teknik iletişim başlıklarını netleştirmek için tercüman hazırlık rehberi.",
    eyebrow: "Hazırlık rehberi",
    h1: "Makine kurulumu öncesinde tercüman için nasıl hazırlık yapılır?",
    lead: "Kurulum öncesi hazırlığın amacı, tercümanın hangi konuşmalara katılacağını açıkça belirlemektir. Teknik uygulama ve güvenlik kararları yetkili ekiplerin sorumluluğunda kalır.",
    body: `<h3>Makineyi ve konuşulacak işi tarif edin</h3><p>Makinenin veya hattın türünü, kurulumun hangi aşamasında olunduğunu ve tercümanın hangi görüşmelere katılacağını yazın. "Makine tercümanı gerekiyor" demek yerine kısa bir teknik çerçeve verin.</p>
    <p>Aşağıdaki sık sorulan sorular, farklı üretim alanları (CNC, plastik enjeksiyon, ambalaj, tekstil, otomasyon) için hazırlık yaklaşımını koşullu olarak açıklar. Doğrulanmamış sektör uzmanlığı sözü verilmez.</p>
    <p>İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a>.</p>`
  },
  zh: {
    path: "/zh/guides/prepare-machine-installation-interpreting/",
    title: "设备安装前，如何准备现场口译信息？",
    description: "设备安装前，如何说明设备类型、现场地点、工作日期与技术沟通环节，为中土现场口译做好准备。",
    eyebrow: "准备指南",
    h1: "设备安装前，如何准备现场口译信息？",
    lead: "安装前准备的目的是明确译员参加哪些沟通。技术操作与安全决定仍由有权限的团队负责。",
    body: `<h3>描述设备与要沟通的工作</h3><p>请说明设备或产线类型、安装处于哪个阶段，以及译员将参加哪些沟通。与其只说"需要设备口译"，不如提供简要的技术范围。</p>
    <p>以下常见问题按不同生产领域（CNC、注塑、包装、纺织、自动化）说明准备方式，不承诺未经核实的行业专长。</p>
    <p>相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</p>`
  }
});

const factoryFairGuide = guide({
  id: "guide-factory-fair",
  tr: {
    path: "/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/",
    title: "Çin'de fabrika ve fuar programınız için tercüman bilgilerini hazırlayın",
    description: "Çin'de fabrika ve fuar ziyaretleri için tarih, konum, gündem ve günlük çalışma bilgilerini tercüman talebinde nasıl paylaşacağınızı öğrenin.",
    eyebrow: "Hazırlık rehberi",
    h1: "Çin'de fabrika ve fuar programınız için tercüman bilgilerini hazırlayın",
    lead: "Fabrika ile fuar ziyaretinde paylaşılacak bilgiler kısmen farklıdır. Ortak nokta, her çalışma günü için gerçek konum ve görüşme gündemini açıkça belirtmektir.",
    body: `<h3>Fuar günü için</h3><p>Fuar adı, katılım tarihi, ürün grubu ve varsa planlanmış stant görüşmelerini yazın. Kanton Fuarı programında biliyorsanız faz bilgisini ekleyin. Güncel katılım tarihlerini ve giriş koşullarını resmi fuar kaynağından kontrol edin.</p>
    <h3>Fabrika günü için</h3><p>Önceden belirlediğiniz fabrikanın adresini veya konumunu paylaşın. Görüşme amacını ve üzerinde konuşulacak üretim ya da ürün başlıklarını kısaca yazın. Firma seçimi ve teknik/ticari değerlendirmeler size aittir; tercüman sözlü iletişimi destekler.</p>
    <h3>İki programı birleştirirken</h3><p>Hangi gün fuarda, hangi gün fabrikada olacağınızı ayrı satırlara yazın. Birden fazla şehir varsa geçişleri ayrıca belirtin. Yolculuk için gereken süre görülmeden günlük görüşme sayısını kesinleştirmeyin.</p>
    <h3>Teklifte neleri ayrı görmelisiniz?</h3><p>Günlük tercümanlık bedeli ile şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme kalemleri ayrı değerlendirilir. Fuar ve fabrika günlerinde konumlar değiştiğinden günlük gider düzenini de açıkça konuşun.</p>
    <p><strong>Sonraki adım:</strong> <a href="/cinde-fuar-tercumani/">Fuar tercümanlığı</a> veya <a href="/cinde-fabrika-ziyareti-tercuman/">fabrika ziyareti</a> sayfasından programınızı paylaşın.</p>`
  },
  zh: {
    path: "/zh/guides/prepare-factory-and-fair-interpreting/",
    title: "为中国工厂与展会行程准备口译信息",
    description: "了解中国工厂参访与展会行程中，应如何提供日期、地点、议题和每日安排，以咨询中土口译服务。",
    eyebrow: "准备指南",
    h1: "为中国工厂与展会行程准备口译信息",
    lead: "工厂参访与展会行程需要的信息略有不同。共同点是：为每个工作日明确实际地点与沟通议题。",
    body: `<h3>展会日需要提供的信息</h3><p>请说明展会名称、日期、产品类别和已计划的展位会面。广交会行程如已确定展期，也请注明。最新日期和入场要求请通过展会官方渠道核实。</p>
    <h3>工厂参访日需要提供的信息</h3><p>请提供已选定工厂的地址或位置，简要说明沟通目的及生产或产品议题。企业选择及技术、商业判断由您负责，译员协助口头沟通。</p>
    <h3>合并两种行程时</h3><p>请分行写明哪天在展会、哪天在工厂。涉及多个城市时，请另外说明转场。未确认交通时间前，不要固定每天的会面数量。</p>
    <h3>报价中应分别确认的项目</h3><p>口译日费与市内/城际交通、住宿及餐饮分别确认。展会日与工厂日地点不同，请明确每日费用安排。</p>
    <p><strong>下一步：</strong>可从<a href="/zh/trade-fair-interpreter/">展会口译</a>或<a href="/zh/factory-visit-interpreter/">工厂参访口译</a>页面说明行程。</p>`
  }
});

const selectionGuide = guide({
  id: "guide-selection", faqIds: ["Q047", "Q048", "Q052", "Q053", "Q054", "Q101", "Q102", "Q103", "Q104", "Q105", "Q106", "Q108", "Q109", "Q110"],
  tr: {
    path: "/rehber/cince-tercuman-nasil-secilir/",
    title: "Çince Tercüman Nasıl Seçilir? Deneyim, Ücret ve Güven",
    description: "Çince tercüman seçerken dil, teknik deneyim, günlük ücret, bağımsızlık ve doğruluk kontrolünü değerlendirin. İşinize uygun soruları görün.",
    eyebrow: "Rehber",
    h1: "Çince tercüman seçerken neleri değerlendirmelisiniz?",
    lead: "Doğru tercümanı seçmek, yalnızca Çince bilen birini bulmak değildir. İşinizin konusunu, dil ihtiyacını, çalışma günlerini ve sorumluluk sınırlarını birlikte değerlendirmeniz gerekir. Bu rehberde bize teklif sorarken de kullanabileceğiniz soruları bir araya getirdik.",
    body: `<p>Aşağıdaki soru-cevaplar rehberin gerçek ana içeriğidir. Dört ana başlıkta ihtiyacı ve dil çiftini belirleme, teknik deneyim, ücret kapsamı ve bağımsızlık/doğruluk konularını ele alır.</p>
    <p>İlgili sayfalar: <a href="/cince-tercuman/">Hizmet karşılaştırması</a> · <a href="/makine-kurulumu-cince-tercuman/">Teknik tercümanlık</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a> · <a href="/cinde-tercuman/">Çin'de tercüman</a>.</p>`
  },
  zh: {
    path: "/zh/guides/how-to-choose-a-turkish-chinese-interpreter/",
    title: "如何选择中土口译？经验、费用与合作边界",
    description: "了解选择中土口译时需核实的语言、技术经验、日费、独立性及信息准确性。用具体问题明确适合您行程的服务。",
    eyebrow: "指南",
    h1: "选择中文与土耳其语口译时，应确认什么？",
    lead: "选择译员不只是寻找一位会中文的人，还需要一起评估工作主题、语言需求、工作日期及职责边界。本指南整理了您向我们咨询时也可以使用的问题。",
    body: `<p>以下问答是本指南的主要内容，围绕四个主题：明确需求与语言组合、技术经验、费用范围以及独立性与信息准确性。</p>
    <p>相关页面：<a href="/zh/interpreting-services/">服务对比</a> · <a href="/zh/machine-installation-interpreter/">技术口译</a> · <a href="/zh/daily-rates/">日费说明</a> · <a href="/zh/interpreter-in-china/">中国现场口译</a>。</p>`
  }
});

export const guides = [collection, requestGuide, machineGuide, factoryFairGuide, selectionGuide];
