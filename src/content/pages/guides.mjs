// Preparation guides: collection + 4 guides. Plan §9 (full guide texts) and
// §10 (working templates). Same URLs as before; existing FAQ id lists kept.
// No fabricated read-time / author / publish date. JSON-LD (WebPage /
// CollectionPage + BreadcrumbList) is generated centrally from `schema`.
// Copy buttons: <button data-copy-target="ID"> copies the element with that id.

const HUB = {
  tr: { name: "Hazırlık rehberleri", path: "/hazirlik-rehberleri/" },
  "zh-Hans": { name: "准备指南", path: "/zh/preparation-guides/" }
};

const COPY_LABEL = { tr: "Şablonu kopyala", "zh-Hans": "复制模板" };

function copyButton(id, locale) {
  return `<div class="button-row"><button class="button-ghost" type="button" data-copy-target="${id}">${COPY_LABEL[locale]}</button></div>`;
}

// Plain-text template (one line per entry), copyable.
function lineTemplate(id, locale, lines) {
  return `<div class="callout" id="${id}">${lines.join("<br>")}</div>${copyButton(id, locale)}`;
}

// Checklist rendered with empty boxes, copyable.
function checklist(id, locale, items) {
  return `<ul id="${id}" style="list-style:none;padding-left:0">${items.map((i) => `<li>☐ ${i}</li>`).join("")}</ul>${copyButton(id, locale)}`;
}

// Fillable table, copyable.
function fillTable(id, locale, columns, rows) {
  return `<div class="table-wrap" id="${id}"><table class="data">
    <thead><tr>${columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>${copyButton(id, locale)}`;
}

// [heading, html] pairs -> richtext blocks with alternating surface.
function sections(list) {
  return list.map(([heading, html], i) => ({ type: "richtext", surface: i % 2 === 1, heading, html }));
}

const collection = {
  id: "guides",
  primaryService: null,
  locales: {
    tr: {
      path: "/hazirlik-rehberleri/",
      status: "published", indexable: true,
      title: "Çince Tercümanlık İçin Hazırlık Rehberleri",
      description: "Tercüman talebinde paylaşılacak bilgiler, makine kurulumu ve Çin'de fabrika/fuar programları için kısa hazırlık rehberleri.",
      schema: { type: "CollectionPage", crumbs: [HUB.tr] },
      blocks: [
        { type: "hero", eyebrow: "Hazırlık rehberleri", h1: "Tercümanlık talebinizi ve saha programınızı hazırlayın", lead: "Kısa rehberlerimiz, ilk mesajda hangi bilgileri paylaşmanız ve çalışma öncesinde hangi konuları netleştirmeniz gerektiğini anlatır." },
        {
          type: "cards", heading: "Dört rehber", columns: 2,
          items: [
            { icon: "chat", title: "Çince tercüman talebi için hangi bilgileri paylaşmalısınız?", href: "/rehber/tercuman-talebi-icin-gerekli-bilgiler/", cta: "Rehberi oku" },
            { icon: "wrench", title: "Makine kurulumu öncesinde tercüman için hazırlık", href: "/rehber/makine-kurulumu-tercuman-hazirligi/", cta: "Rehberi oku" },
            { icon: "booth", title: "Çin'de fabrika ve fuar görüşmelerini tercümanla nasıl hazırlarsınız?", href: "/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/", cta: "Rehberi oku" },
            { icon: "book", title: "İşiniz için uygun Çince tercümanı nasıl seçersiniz?", href: "/rehber/cince-tercuman-nasil-secilir/", cta: "Rehberi oku" }
          ]
        },
        { type: "richtext", surface: true, html: `<p>Daha genel yazılar için <a href="/blog/">bloga</a> bakın: tercüman adayının dil seviyesi, ücretleri etkileyen etkenler, Çin'in iş şehirleri ve Çin'den makine alımında iletişim.</p>` },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/preparation-guides/",
      status: "published", indexable: true,
      title: "中土口译准备指南｜咨询与现场行程",
      description: "了解口译咨询需要的信息，以及设备安装、中国工厂参访和展会行程的准备要点。",
      schema: { type: "CollectionPage", crumbs: [HUB["zh-Hans"]] },
      blocks: [
        { type: "hero", eyebrow: "准备指南", h1: "为口译咨询和现场行程做好准备", lead: "通过这些简短指南，了解首次咨询应提供什么信息，以及服务前需要确认哪些安排。" },
        {
          type: "cards", heading: "四份指南", columns: 2,
          items: [
            { icon: "chat", title: "咨询中土口译时，需要提供哪些信息？", href: "/zh/guides/information-for-interpreter-request/", cta: "阅读指南" },
            { icon: "wrench", title: "中国工程师赴土耳其前，如何准备现场口译需求", href: "/zh/guides/prepare-machine-installation-interpreting/", cta: "阅读指南" },
            { icon: "booth", title: "接待土耳其客户前，如何准备工厂与展会口译？", href: "/zh/guides/prepare-factory-and-fair-interpreting/", cta: "阅读指南" },
            { icon: "book", title: "如何为您的工作选择合适的中文—土耳其语口译？", href: "/zh/guides/how-to-choose-a-turkish-chinese-interpreter/", cta: "阅读指南" }
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
    schema: { type: "WebPage", crumbs: [HUB[locale], { name: d.crumb, path: d.path }] },
    blocks: [
      { type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead },
      ...d.blocks,
      ...(faqIds.length ? [{ type: "faq", ids: faqIds }] : []),
      { type: "finalCta" }
    ]
  });
  return { id, primaryService: null, locales: { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) } };
}

// ---- 1. Request information (body kept; §8 row 4 adds contact/service links) ----
const requestGuide = guide({
  id: "guide-request", faqIds: ["Q018"],
  tr: {
    path: "/rehber/tercuman-talebi-icin-gerekli-bilgiler/",
    crumb: "Talep için gerekli bilgiler",
    title: "Çince tercüman talebi için hangi bilgileri paylaşmalısınız?",
    description: "Çince tercüman talebinde hizmet, şehir, tarih ve görüşme konusunu nasıl paylaşacağınızı öğrenin. Günlük ücret ve masrafları önceden netleştirin.",
    eyebrow: "Hazırlık rehberi",
    h1: "Çince tercüman talebi için hangi bilgileri paylaşmalısınız?",
    lead: "İlk mesajda uzun bir dosya hazırlamanız gerekmez. Hizmet türü, şehir, çalışma tarihleri ve kısa görüşme konusu, talebin değerlendirilebilmesi için iyi bir başlangıçtır.",
    blocks: [{
      type: "richtext", surface: true,
      html: `<h3>1. Yapılacak işi tek cümleyle anlatın</h3><p>"Çinli teknik ekip fabrikamızda makine kuracak" veya "Guangzhou'da iki gün fuara katılacağım" gibi açık bir ifade kullanın. Görüşmenin sözlü tercümanlık gerektiren kısmını belirtin.</p>
    <h3>2. Şehir ile gerçek çalışma noktasını ayırın</h3><p>Otelinizin veya şirket merkezinizin bulunduğu şehir tek başına yeterli olmayabilir. Fabrikanın ya da fuarın konumunu belirtin. Henüz kesin adres yoksa bilinen ilçe veya bölgeyi yazın.</p>
    <h3>3. Tarihleri ve belirsizlikleri açıkça yazın</h3><p>Başlangıç gününüz belli ama bitiş günü belirsizse bunu söyleyin. Farklı günlerde farklı şehirler varsa her günü ayrı satırda belirtin. Kesinleşmeyen bilgiyi kesinmiş gibi yazmayın.</p>
    <p><a href="/iletisim/">Talep formundan</a> bu bilgileri hazır bir mesaja dönüştürebilirsiniz.</p>
    <p><a class="button-primary" href="/iletisim/">Uygunluk ve teklif sor</a></p>
    <p><a href="/cince-tercuman/">Hizmet seçimi</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a></p>`
    }]
  },
  zh: {
    path: "/zh/guides/information-for-interpreter-request/",
    crumb: "咨询所需信息",
    title: "咨询中土口译时，需要提供哪些信息？",
    description: "了解中土口译咨询需要的服务类型、城市、日期和沟通内容，便于分别确认每日费用及相关支出。",
    eyebrow: "准备指南",
    h1: "咨询中土口译时，需要提供哪些信息？",
    lead: "首次咨询无需准备冗长的文件。服务类型、城市、工作日期和简要沟通内容，就是一个良好的开始。",
    blocks: [{
      type: "richtext", surface: true,
      html: `<h3>1. 用一句话说明要做的事</h3><p>例如"中国技术团队将在我们工厂安装设备"或"我将在广州参加两天展会"。请指出需要口译的环节。</p>
    <h3>2. 区分城市与实际工作地点</h3><p>酒店或公司总部所在城市未必足够，请说明工厂或展馆位置。若暂无确切地址，可提供已知的区域。</p>
    <h3>3. 清楚写明日期与不确定之处</h3><p>如果开始日期确定但结束日期未定，请说明。不同日期涉及不同城市时，请逐行列出，不要把未定信息写成确定。</p>
    <p>可在<a href="/zh/contact/">咨询表单</a>中把这些信息整理成一条消息。</p>
    <p><a class="button-primary" href="/zh/contact/">咨询档期与报价</a></p>
    <p><a href="/zh/interpreting-services/">服务选择</a> · <a href="/zh/daily-rates/">每日费用</a></p>`
    }]
  }
});

// ---- 2. Machine installation (§9.1 / §9.2 + §10.1) ----
const MACHINE_FORM_TR = [
  ["Hizmet", "Makine kurulumu, devreye alma veya ilgili kullanım açıklamaları: ____", "İstenen sözlü iletişim aşamasını belirler."],
  ["Ülke, şehir", "____", "Hizmet yeri ve uygunluk değerlendirmesi."],
  ["Gerçek tesis noktası", "İlçe/alan, paylaşılabilir harita bağlantısı: ____", "Merkez ofis yerine gerçek çalışma noktasını belirtir."],
  ["Makine veya hat", "Genel ad; paylaşılabiliyorsa marka/model: ____", "Hazırlık konusunu tanımlar; deneyim garantisi değildir."],
  ["Tarihler", "Kesin: ____; tahmini: ____", "Belirsiz tarihler rezervasyon sayılmaz."],
  ["Günlük plan", "Biliniyorsa başlangıç-bitiş ve önemli aşamalar: ____", "Sabit saat taahhüdü oluşturmaz; teklif girdisidir."],
  ["Ekipler", "Görevler ve yaklaşık katılımcı sayısı: ____", "İlk genel talepte kişisel ad/telefon gerekmez."],
  ["Paralel çalışma", "Aynı anda kaç ayrı yerde iletişim gerekiyor? ____", "Tek tercümanın birden fazla yerde olma beklentisini önler."],
  ["İletişim dilleri", "Çince–Türkçe; özel dil/lehçe ihtiyacı: ____", "Ek dil uygunluğu ayrıca teyit edilir."],
  ["Ana teknik sorular", "1. ____ 2. ____ 3. ____", "Tercüman, açıklamayı yetkili teknik kişiye aktarır."],
  ["Gerekli terimler", "Terim / bağlam / açıklayacak teknik rol: ____", "Belirsiz karşılık tahmin edilmez."],
  ["Saha girişi", "Bilinen giriş koşulları; ayrıca teyit edilecekler: ____", "Giriş düzenlemesi hizmette otomatik dahil sayılmaz."],
  ["Koruyucu ekipman", "Sahanın gerektirdiği ekipman; temin edecek taraf teyidi: ____", "Mühendislik sorumluluğu devredilmez."],
  ["Konum değişikliği", "Başka tesis veya şehir varsa gün gün: ____", "Ulaşım, konaklama ve diğer giderler ayrı değerlendirilir."],
  ["Açık noktalar", "____", "Talep sonunda kalan belirsizlikleri görünür tutar."]
];
const MACHINE_FORM_ZH = [
  ["服务", "安装、调试或相关操作说明：____", "明确需要口译的环节。"],
  ["国家、城市", "____", "评估服务地点与安排。"],
  ["实际工厂地点", "区域、可分享地图链接：____", "区分总部与工作地点。"],
  ["设备或生产线", "通用名称；如可分享，可填品牌型号：____", "说明准备主题，不代表经验保证。"],
  ["日期", "已定：____；预计：____", "未定日期不视为已预留。"],
  ["每日安排", "已知起止时段与主要阶段：____", "用于报价沟通，不构成统一时长承诺。"],
  ["参与团队", "角色与大致人数：____", "首次一般咨询无需姓名与个人电话。"],
  ["并行作业", "同时有几个独立交流地点？____", "明确是否有同时口译需求。"],
  ["工作语言", "中文—土耳其语；特殊语言或方言：____", "额外语言需求须另行确认。"],
  ["技术重点问题", "1. ____ 2. ____ 3. ____", "由相关技术人员说明，口译负责传达。"],
  ["主要术语", "术语、语境、说明人角色：____", "不猜测不明确含义。"],
  ["入场要求", "已知要求与待确认事项：____", "不默认全部入场安排已包含。"],
  ["防护用品", "所需用品及提供方待确认：____", "不转移技术或安全职责。"],
  ["地点变化", "其他工厂或城市，请按日期填写：____", "交通、住宿等另行评估。"],
  ["待确认事项", "____", "保留尚待确认的问题。"]
];

const machineGuide = guide({
  id: "guide-machine", faqIds: ["Q075", "Q076", "Q077", "Q078", "Q079", "Q080", "Q081", "Q082", "Q083"],
  tr: {
    path: "/rehber/makine-kurulumu-tercuman-hazirligi/",
    crumb: "Makine kurulumu hazırlığı",
    title: "Çinli Teknik Ekip İçin Tercüman Hazırlığı | Makine Kurulumu",
    description: "Makine kurulumu tercümanı için cihaz, tesis, tarihler, görevler ve temel terimleri nasıl hazırlayacağınızı öğrenin. Kullanılabilir teknik ekip ön bilgi formu.",
    eyebrow: "Hazırlık rehberi",
    h1: "Makine kurulumu öncesinde tercüman için hazırlık",
    lead: "Kurulum programını yalnızca “Çinli mühendis geliyor” cümlesiyle anlatmak, ihtiyaç duyulan dil desteğini tanımlamak için yeterli olmayabilir. Hangi makinenin, hangi sahada ve hangi aşamada konuşulacağını açıklayan kısa bir ön bilgi; uygunluğun ve hazırlık ihtiyacının değerlendirilmesine yardımcı olur. Bunun için ilk mesajda kapsamlı veya gizli teknik dosya göndermeniz gerekmez.",
    blocks: [
      ...sections([
        ["1. Makineyi ve yapılacak işi ayrı tarif edin", `<p>Önce makine veya üretim hattının genel adını yazın. Sonra o gün ne yapılacağını belirtin: parçaların yerleşimi mi konuşulacak, kurulum adımları mı açıklanacak, test mi yapılacak, yoksa operatörlerin soruları mı yanıtlanacak? Marka ve model paylaşılabiliyorsa eklenebilir; fakat yalnızca model numarası görüşme gündeminin yerini tutmaz.</p>
        <p>CNC, plastik enjeksiyon, ambalaj, tekstil veya otomasyon gibi sektör adları bir başlangıçtır. Her işin aynı teknik bilgiyle yürütülebileceği varsayılmaz. İlgili makine ve konuşulacak işlemler üzerinden tercümanın uygunluğu ayrıca değerlendirilir.</p>`],
        ["2. Gerçek çalışma noktasını ve ekibi açıklayın", `<p>Şirketinizin merkez adresi yerine makinenin bulunduğu tesisin konumunu yazın. Şehir, ilçe ve paylaşılabilen harita bağlantısı yeterli başlangıç olabilir. Gün içinde ikinci bir tesise geçilecekse onu ayrı satırda gösterin.</p>
        <p>Çinli teknik ekip, Türk teknik ekip ve operatörlerden kimlerin görüşmelere katılacağını görevleriyle belirtin. Ad-soyad gibi kişisel bilgileri ilk genel talepte paylaşmanız gerekmez. Ayrı gruplar aynı anda farklı bölümlerde çalışacaksa bir tercümanın iki yerde bulunamayacağını göz önünde bulundurun; paralel iletişim ihtiyacını açıkça yazın.</p>`],
        ["3. Tarihleri ve belirsizlikleri birlikte paylaşın", `<p>Başlangıç ve öngörülen bitiş tarihini belirtin. Uçuş, makine teslimi veya saha hazırlığı henüz kesin değilse bunu ayrıca yazın. Tercümanlık programını, kesinleşmemiş bir kurulum tarihine dayanarak kesin rezervasyon gibi kabul etmeyin.</p>
        <p>Günlük başlangıç ve bitiş planı biliniyorsa paylaşın. Sitemiz sabit bir günlük saat paketi ilan etmez; çalışma aralığı, molalar ve gerekli yolculuk düzeni teklif aşamasında netleştirilir. Program uzayabilecekse ek günlerin uygunluğunu da ayrıca değerlendirmek gerekir.</p>`],
        ["4. Kısa terim ve soru listesi hazırlayın", `<p>Sık tekrarlanacak parça adları, ekran uyarıları veya işlem adımlarını basit bir listede toplayın. Yetkiniz varsa genel bir şema ya da gerekli belge bölümleri hazırlığa yardımcı olabilir. Paylaşma yetkiniz olmayan veya ilk talep için gereksiz teknik dosyaları göndermeyin.</p>
        <p>Hazırlık materyali vermek, yazılı belge çevirisi sipariş etmek anlamına gelmez. Hizmetimiz sözlü tercümanlıktır. Teknik bir ifadenin karşılığı belirsizse, tahmin edilerek işlem yapılması yerine yetkili teknik kişiden açıklama istenmelidir.</p>`],
        ["5. Teknik kararlarla dil aktarımını ayırın", `<p>Tercüman, teknik ekibin açıklamalarını ve karşı tarafın sorularını aktarır. Montaj, bağlantı, ayar, test, arıza giderme ve iş güvenliği kararları yetkili teknik ekiplerindir. Operatöre bilgi aktarılması sırasında da teknik anlatımı yapan kişi, kendi açıklamasının içeriğinden sorumludur.</p>
        <p>Sahanın giriş ve koruyucu ekipman gerekliliklerini önceden bildirin. Hangi ekipmanın gerektiği, kim tarafından sağlanacağı ve giriş hazırlığının nasıl tamamlanacağı somut program için teyit edilir. Bu rehber, işletmenizin güvenlik prosedürünün yerine geçmez.</p>`],
        ["6. Günlük ücret ile saha giderlerini ayrı görün", `<p>Tercümanlık günlük esasla değerlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Tesis adresi, gün sayısı veya çalışma programı değişirse gider ihtiyacı da değişebilir. <a href="/cince-tercuman-fiyatlari/">Günlük ücret açıklamasında</a> kalemleri karşılaştırabilir, teklif sırasında hangi bilgiye ihtiyaç duyulduğunu görebilirsiniz.</p>`],
        ["Kopyalayıp doldurabileceğiniz kısa ön bilgi", `${lineTemplate("on-bilgi-tr", "tr", [
          "Makine veya hat: …",
          "Çalışma şehri ve gerçek tesis konumu: …",
          "Planlanan tarihler ve belirsiz kısımlar: …",
          "Tercüman gereken aşamalar: kurulum / test-devreye alma / kullanım açıklamaları / ilgili teknik sorular.",
          "Katılacak ekipler ve paralel çalışma ihtiyacı: …",
          "Biliniyorsa günlük çalışma planı: …",
          "Önceden açıklanması gereken terimler veya sorular: …",
          "Saha girişine ilişkin bilinen gereklilikler: …"
        ])}
        <p>Kısa bilgilerinizi <a href="/iletisim/">iletişim sayfasından</a> gönderebilirsiniz. <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığının kapsamını</a> inceleyin; uygunluğu, günlük ücreti ve ek giderleri gerçek programınız üzerinden netleştirelim. Mesaj göndermek tek başına rezervasyon değildir.</p>`],
        ["Teknik ekip ön bilgi formu", `${fillTable("teknik-ekip-formu-tr", "tr", ["Alan", "Doldurulacak bilgi", "Nasıl kullanılır?"], MACHINE_FORM_TR)}
        <p>Bu bilgileri sözlü tercümanlık ihtiyacını değerlendirmek için kullanın. İlk mesajda gizli belge göndermeniz gerekmez. Paylaşılacak teknik materyalin kapsamını ayrıca görüşün. Bu form kurulum, teknik eğitim teslimi veya makinenin çalışacağına ilişkin garanti oluşturmaz. <a href="/iletisim/">Uygunluk ve teklif sorun</a>.</p>`]
      ])
    ]
  },
  zh: {
    path: "/zh/guides/prepare-machine-installation-interpreting/",
    crumb: "设备安装口译准备",
    title: "中国工程师赴土耳其：设备安装口译准备清单",
    description: "派工程师到土耳其前，如何准备设备、工厂位置、日期、技术主题与口译需求。附可复制的技术团队工作说明模板，便于咨询档期与报价。",
    eyebrow: "准备指南",
    h1: "中国工程师赴土耳其前，如何准备现场口译需求",
    lead: "只写“工程师去土耳其安装机器”，往往还不足以说明口译工作的内容。设备是什么、实际工厂在哪里、哪些环节需要中土双语交流，都会影响服务安排与准备。首次咨询可以从一份简短的工作说明开始，无需提交完整或机密技术文件。",
    blocks: [
      ...sections([
        ["1. 设备名称与工作内容分开写", `<p>先写设备或生产线的通用名称，再说明本次工作的阶段。例如，现场要讨论部件安装顺序、进行调试测试，还是向操作人员讲解使用方式？如可分享品牌和型号，可一并提供，但型号不能替代具体会谈内容。</p>
        <p>数控、注塑、包装、纺织或自动化只是主题分类，不能据此认定任何口译人员都具备所有相关经验。应按实际设备及需要交流的内容评估适配度，并确认需要提前准备哪些术语。</p>`],
        ["2. 使用实际工厂地址", `<p>土耳其客户的总部、仓库和安装工厂可能不在同一位置。请写工程师实际工作的城市、区及可提供的地图链接。如果同一天需要到第二个工作点，应把地点与顺序列出。</p>
        <p>同时说明中国工程师、土耳其技术人员和操作人员的角色。首次一般咨询可以写岗位而无需提供个人姓名。如果工程师会分组、同时在不同区域工作，请说明并行沟通需求；一位口译人员不能同时在两个地点服务。</p>`],
        ["3. 把已确定和未确定的日期分开", `<p>请提供计划开始与结束日期，并注明航班、设备到场或场地准备是否仍待确认。尚未确定的日期不能自动视为口译已预留。</p>
        <p>如已知每日起止安排，可一并发送。网站没有公布适用于所有工作的统一小时套餐；每天的工作时段、休息及必要出行，应在具体报价中明确。预计可能增加日期时，也应提前提出，新增日期仍需确认是否能安排。</p>`],
        ["4. 提供简短术语与问题清单", `<p>可整理经常出现的部件名称、屏幕提示和操作步骤。只分享有权提供、且与本次口译准备有关的资料部分。初次表单不需要提交敏感技术文件。</p>
        <p>准备资料是为了现场口译，不代表委托书面文件翻译。遇到术语或指令含义不明确时，应请获授权的技术人员解释，不应靠猜测继续操作。</p>`],
        ["5. 事先明确技术与语言职责", `<p>工程师负责技术说明和实施，口译人员负责传达双方的口头交流。安装、接线、调整、测试、故障处理及安全判断由相关获授权的技术人员负责。为操作人员解释使用方法时，讲解者仍需确认技术内容。</p>
        <p>请提前说明工厂入场要求、必要安全说明和所需防护用品。装备由谁提供、如何完成进场准备，应针对实际行程明确。本指南不替代工厂的安全制度。</p>`],
        ["6. 将每日费用与出行支出分开确认", `<p>口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另计。实际地址、天数或日程发生变化时，相关支出也可能需要重新确认。可先阅读<a href="/zh/daily-rates/">每日费用说明</a>，再按同一工作安排沟通报价。</p>`],
        ["可复制的技术团队工作说明", `${lineTemplate("on-bilgi-zh", "zh-Hans", [
          "设备或生产线：…",
          "土耳其工作城市与实际工厂位置：…",
          "计划日期及待确认事项：…",
          "需要口译的环节：安装 / 测试与调试 / 操作说明 / 相关技术问答。",
          "参与团队及是否有并行作业：…",
          "已知的每日工作安排：…",
          "需要提前说明的术语或问题：…",
          "已知入场及防护要求：…"
        ])}
        <p>请通过<a href="/zh/contact/">联系页面</a>发送简要说明，也可先查看<a href="/zh/machine-installation-interpreter/">设备安装口译服务</a>。人员是否可安排、每日服务费和额外支出，应按实际计划共同确认。发送咨询不等于预订成功。</p>`],
        ["技术团队工作说明表", `${fillTable("teknik-ekip-formu-zh", "zh-Hans", ["字段", "填写内容", "用途"], MACHINE_FORM_ZH)}
        <p>本表用于说明现场口译需求。首次咨询无需发送机密文件，所需技术资料的分享范围可另行沟通。本表不构成设备安装、技术培训交付或设备运行保证。<a href="/zh/contact/">咨询档期与报价</a>。</p>`]
      ])
    ]
  }
});

// ---- 3. Factory & fair (§9.3 / §9.4 + §10.2) ----
const FAIR_CHECK_TR = [
  ["Müşterinin belirlediği fuar/fabrika ve gerçek çalışma adresi yazıldı.", "☐ Hazır ☐ Bekliyor: ____"],
  ["Günler ayrı; ziyaret sırası ve adres geçişleri açık.", "☐ / ____"],
  ["Ürün konusu ve görüşmenin amacı belirtildi.", "☐ / ____"],
  ["Öncelikli sorular sıralandı.", "☐ / ____"],
  ["Numune, miktar, fiyat ve teslim konularında sorulacaklar hazır; karar yetkisi müşteride.", "☐ / ____"],
  ["Ekip birlikte mi ayrı mı hareket edecek, belli.", "☐ / ____"],
  ["Paralel görüşmeler ve dil desteği gereken grup sayısı açık.", "☐ / ____"],
  ["Özel dil/lehçe ihtiyacı belirtildi; AZ için Türkçe uygunluğu açıkça teyit edilecek.", "☐ / ____"],
  ["Fuarın güncel giriş kuralları ve tercüman kaydı gerçek organizatör bilgisinden teyit edilecek.", "☐ / ____"],
  ["Canton Fair ise dönem, faz, tarih ve ürün grubu yazıldı.", "☐ / ____"],
  ["Buluşma noktası ayrı, çalışma noktası ayrı değerlendirildi.", "☐ / ____"],
  ["Fabrika/fuar günleri ile şehirler arası geçişler ayrıldı.", "☐ / ____"],
  ["Günlük ücret ve şehir içi/dışı ulaşım, konaklama, yeme-içme ayrı görüşüldü.", "☐ / ____"],
  ["Tercümanlık denetim/kalite garantisi/satın alma danışmanlığı/tur organizasyonu olarak değerlendirilmedi.", "☐ / ____"],
  ["Sonradan eklenen fabrika veya gün için uygunluğun yeniden teyit edileceği biliniyor.", "☐ / ____"],
  ["Karşılıklı hizmet teyidi ayrı alındı; yalnız mesajın açılması rezervasyon sayılmadı.", "☐ / ____"]
];
const FAIR_CHECK_ZH = [
  ["已写明客户确定的展会或工厂及实际地址。", "☐ 已准备 ☐ 待确认：____"],
  ["日期分开列出，访问顺序与地点变化清楚。", "☐ / ____"],
  ["已说明产品主题与会谈目标。", "☐ / ____"],
  ["已按优先级列出问题。", "☐ / ____"],
  ["样品、数量、价格、交期问题已准备，决策由客户作出。", "☐ / ____"],
  ["已明确团队共同或分组行动。", "☐ / ____"],
  ["并行会面及独立口译小组需求清楚。", "☐ / ____"],
  ["已说明特殊语言需求；阿塞拜疆客户需明确确认土耳其语是否适用。", "☐ / ____"],
  ["将按主办方当期信息确认入场规则与译员登记。", "☐ / ____"],
  ["如为广交会，已写明期间、期别、日期与产品主题。", "☐ / ____"],
  ["已分别考虑会合地点与实际工作地点。", "☐ / ____"],
  ["工厂日、展会日与跨城交通安排已分开。", "☐ / ____"],
  ["已分别沟通日费、交通、住宿与餐饮。", "☐ / ____"],
  ["已明确口译不等于验厂、质量保证、采购咨询或旅行组织。", "☐ / ____"],
  ["已知新增工厂或日期须重新确认。", "☐ / ____"],
  ["另行取得明确服务确认，不将打开消息视为预订成功。", "☐ / ____"]
];
const BLANK_ROWS = Array.from({ length: 3 }, () => ["____", "____", "____", "____", "____"]);

const factoryFairGuide = guide({
  id: "guide-factory-fair",
  tr: {
    path: "/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/",
    crumb: "Fabrika ve fuar hazırlığı",
    title: "Çin'de Fabrika ve Fuar Görüşmeleri İçin Hazırlık Listesi",
    description: "Çin'de fabrika ve fuar görüşmeleri öncesinde gündem, adres, ekip ve tercüman ihtiyacını planlayın. Kopyalanabilir görüşme hazırlık ve günlük program listesi.",
    eyebrow: "Hazırlık rehberi",
    h1: "Çin'de fabrika ve fuar görüşmelerini tercümanla nasıl hazırlarsınız?",
    lead: "Bir fabrika ziyaretiyle fuar günü, aynı dil çiftini gerektirse de farklı programlara sahiptir. Fabrikada tek bir ürün veya üretim süreci ayrıntılı konuşulabilir; fuarda farklı stantlar ve kısa görüşmeler peş peşe gelebilir. Tercümanlık talebinizi gün, gerçek konum ve görüşme amacı bakımından ayırmak; hangi iletişim desteğine ihtiyaç olduğunu daha açık gösterir.",
    blocks: [
      ...sections([
        ["Önce yanıt aradığınız soruları yazın", `<p>“Ürünleri göreceğiz” yerine hangi konuları konuşacağınızı belirtin. Ürün ölçüleri, malzeme, kullanım alanı, numune, minimum sipariş miktarı veya teslim süresi gibi başlıklar, ziyaret gündeminizle ilgili olabilir. Bunlar tercümanın satın alma danışmanlığı vereceği anlamına gelmez; tercüman sorularınızı ve yanıtları aktarır.</p>
        <p>Soruları üç gruba ayırabilirsiniz: mutlaka görüşülecekler, zaman kalırsa sorulacaklar ve yalnız belirli bir firma için geçerli olanlar. Bu, başka bir kişinin önceliğinizi tahmin etmesini beklemek yerine gündemi sizin belirlemenizi sağlar.</p>`],
        ["Fabrika günü için gerçek tesis adresini kullanın", `<p>Ziyaret edeceğiniz fabrikayı siz belirleyin. Şirket adıyla birlikte tesisin adresini veya paylaşılabilir harita bağlantısını yazın. Satış ofisi ile üretim tesisi farklıysa ziyaret edilecek noktayı açıkça ayırın.</p>
        <p>Birden fazla fabrikaya gidilecekse görüşme sırasını ve planlanan saatleri yazın. Ulaşım süreleri ve giriş işlemleri görüşme zamanından ayrıdır. Her noktayı aynı güne eklemek, programın mutlaka gerçekleşebileceği anlamına gelmez; uygunluk ve geçişler ayrıca değerlendirilir.</p>`],
        ["Fuar günü için stant ve ekip planını belirleyin", `<p>Fuarın adını, şehrini ve ziyaret günlerini paylaşın. Önceden belirlenen stantları veya firmaları listeleyin. Ekibiniz birlikte mi hareket edecek, yoksa farklı stantlarda aynı anda görüşecek mi? Bir tercüman aynı anda ayrı yerlerde olamaz; paralel gruplar için ihtiyacı ayrıca belirtin.</p>
        <p>Fuar giriş kaydı, tercüman kartı ve olası giriş giderleri; ilgili organizatörün güncel koşullarına göre önceden netleştirilmelidir. Tercümanın otomatik giriş hakkı bulunduğunu varsaymayın. Hizmetimiz fuar turu, seyahat, otel veya transfer organizasyonu içermez.</p>`],
        ["Kanton Fuarı için fazları ayırın", `<p>Canton Fair programında dönem, faz, ziyaret günleri ve ürün grubu birlikte belirtilmelidir. Güncel tarih ve faz bilgisini resmi fuar kaynağından kontrol edin. Farklı fazlarda aynı tercümanla çalışmak isterseniz bütün tarihleri baştan paylaşın; uygunluk her gün için teyit edilir. Fazlar arasındaki boş günler otomatik olarak ayrılmış veya ücretsiz değildir.</p>`],
        ["Fabrika ziyaretini denetim gibi değerlendirmeyin", `<p>Tercüman fabrikanın açıklamasını ilettiğinde, bu açıklamayı doğrulamış olmaz. Kapasite, kalite veya güvenilirlik konusunda bağımsız inceleme gerekiyorsa ilgili uzmanlık hizmeti ayrıca ele alınmalıdır. Bizim sunduğumuz hizmet sözlü iletişimdir; fabrika denetimi, ürün testi veya kalite garantisi değildir.</p>
        <p>Görüşme sonunda iki tarafın üzerinde konuştuğu önemli noktaları yeniden sözlü olarak teyit etmek isteyebilirsiniz. Bu işlem, yazılı sözleşme çevirisi, rapor veya hukuki görüş teslimi anlamına gelmez.</p>`],
        ["Günlük program ve masraf kalemlerini birlikte gözden geçirin", `<p>Her gün için şehir, adres, görüşme amacı ve katılımcı grubu yeterli başlangıçtır. Günlük tercümanlık ücreti ile şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme ayrıca değerlendirilir. Sonradan fabrika ziyareti eklenecekse yeni konum ve tarihin uygunluğu tekrar teyit edilmelidir.</p>`],
        ["Kullanılabilir kısa kontrol listesi", `${checklist("kontrol-listesi-tr", "tr", [
          "Fuar/fabrika adı ve gerçek adresler hazır.",
          "Günler ve görüşme sırası ayrı yazıldı.",
          "Ana sorular ve ürün konusu belirtildi.",
          "Katılımcı sayısı ve paralel gruplar açık.",
          "Fuar giriş şartları için güncel organizatör bilgisi kontrol edilecek kişi belirlendi.",
          "Günlük ücret ile ulaşım, konaklama ve yeme-içme ayrı görüşüldü.",
          "Tercümanlık ile denetim/satın alma/tur hizmetleri ayrıldı.",
          "Program ve uygunluk karşılıklı teyit edildi."
        ])}
        <p>Liste bir çalışma şablonudur; gerçekleşmiş ziyaretin kaydı veya müşterinin aldığı hizmetin kanıtı değildir. Programınızı <a href="/iletisim/">iletişim sayfasına</a> taşıyabilir; <a href="/cinde-fabrika-ziyareti-tercuman/">fabrika ziyareti</a>, <a href="/cinde-fuar-tercumani/">fuar tercümanlığı</a> veya <a href="/kanton-fuari-tercuman/">Kanton Fuarı</a> kapsamını inceleyebilirsiniz.</p>`],
        ["Fuar/fabrika görüşmesi hazırlık kontrol listesi", `${fillTable("hazirlik-tablosu-tr", "tr", ["Kontrol", "Durum ve not"], FAIR_CHECK_TR)}
        <h3>Günlük program için boş şablon</h3>
        ${fillTable("gunluk-program-tr", "tr", ["Gün/tarih", "Şehir ve gerçek adres", "Fuar/fabrika ve amaç", "Grup", "Bilinen belirsizlik"], BLANK_ROWS)}
        <p><a class="button-primary" href="/iletisim/">Programınızla uygunluk sorun</a></p>`]
      ])
    ]
  },
  zh: {
    path: "/zh/guides/prepare-factory-and-fair-interpreting/",
    crumb: "工厂与展会口译准备",
    title: "接待土耳其客户：工厂与展会口译准备清单",
    description: "如何为土耳其客户的工厂参观和展会洽谈准备议程、地址、日期与口译安排。附可复制清单，明确语言服务、交通费用与技术商业职责。",
    eyebrow: "准备指南",
    h1: "接待土耳其客户前，如何准备工厂与展会口译？",
    lead: "工厂访问与展会会谈使用相同的语言，不代表安排方式也相同。工厂访问可能围绕同一产品深入交流；展会一天内可能涉及多个展位和不同主题。按日期、实际地点和会面目标说明需求，有助于明确每个环节需要的语言支持。",
    blocks: [
      ...sections([
        ["先写出需要回答的问题", `<p>不要只写“介绍产品”，可以说明本次会谈涉及哪些产品特点、材料、用途、样品、起订量或交期。口译人员传达双方的问题与回答，不替代任何一方提供采购建议或作商业决定。</p>
        <p>问题可分成三组：必须讨论的内容、有时间再补充的内容、仅适用于某一家企业的内容。客户和接待方各自明确重点，比让口译人员猜测会谈目标更便于准备。</p>`],
        ["工厂访问请使用实际厂址", `<p>工厂由客户自行确定。请提供工厂名称和实际地址或可分享的地图链接。如果销售办公室与生产场所不同，应明确究竟访问哪里。</p>
        <p>同一天有多家工厂时，请列出顺序和计划会面时段。交通与入场流程会占用时间，不能把全部时间都视为会谈时间。是否能完成行程，以及能否由同一位口译人员参与，需要共同确认。</p>`],
        ["展会安排要区分共同会面与并行会面", `<p>请提供展会名称、城市及需要口译的日期，并列出已确定的展位或客户会面。团队是否始终一起行动？是否会在不同展位同时谈不同事项？一位口译人员不能同时在两个地点服务，因此并行小组的需求需要分别说明。</p>
        <p>口译人员的入场登记、证件及可能费用，应依据主办方当时的要求明确。不能默认已有入场资格。我们的服务是现场口译，不包含旅行团、酒店、机票或接送组织。</p>`],
        ["广交会要补充期别与产品主题", `<p>请同时说明展会期间、期别、具体日期及产品类别。出行前按主办方当期官方信息核对日期和展品范围。如需同一位口译人员参与不同期别，应一次性列出全部日期，逐日确认是否能安排。期别之间的空档日不能默认已保留或免费。</p>`],
        ["工厂参观与工厂审核分开理解", `<p>口译人员转达工厂的说明，不代表独立核实了该项信息。产能、质量或可靠性如需专业验证，应另行安排相应服务。我们的服务不包括验厂、产品测试或质量保证。</p>
        <p>会谈结束时，您可以要求双方口头复核重要事项，但这不等于委托书面合同翻译、报告制作或法律意见。技术和商业决定仍由相关负责人作出。</p>`],
        ["按天整理安排，逐项确认支出", `<p>每一天列出城市、地址、会面目的及参与小组。每日口译服务费与市内交通、城际交通、住宿和餐饮费用应分开确认。临时增加工厂访问时，新地点、日期及人员安排也需要重新评估。</p>`],
        ["可复制的准备清单", `${checklist("kontrol-listesi-zh", "zh-Hans", [
          "已写明展会或工厂名称及实际地址。",
          "已按日期列出会面顺序。",
          "已准备产品主题与重点问题。",
          "已说明参加人数及并行会面。",
          "已明确由谁核对主办方当期入场要求。",
          "已分别沟通每日服务费、交通、住宿与餐饮。",
          "已区分口译与验厂、采购决策及旅行组织。",
          "已与服务方共同确认行程与人员安排。"
        ])}
        <p>这是一份工作模板，不是已完成访问的记录或案例。您可以通过<a href="/zh/contact/">联系页面</a>发送安排，并查看<a href="/zh/factory-visit-interpreter/">工厂访问口译</a>、<a href="/zh/trade-fair-interpreter/">展会口译</a>或<a href="/zh/canton-fair-interpreter/">广交会口译</a>。</p>`],
        ["展会与工厂会谈准备检查表", `${fillTable("hazirlik-tablosu-zh", "zh-Hans", ["检查项", "状态与备注"], FAIR_CHECK_ZH)}
        <h3>每日安排模板</h3>
        ${fillTable("gunluk-program-zh", "zh-Hans", ["日期", "城市与地址", "展会或工厂及目的", "小组", "待确认事项"], BLANK_ROWS)}
        <p><a class="button-primary" href="/zh/contact/">按行程咨询安排</a></p>`]
      ])
    ]
  }
});

// ---- 4. Choosing an interpreter (§9.5 / §9.6) ----
const selectionGuide = guide({
  id: "guide-selection", faqIds: ["Q047", "Q048", "Q052", "Q053", "Q054", "Q101", "Q102", "Q103", "Q104", "Q105", "Q106", "Q107", "Q108", "Q109", "Q110"],
  tr: {
    path: "/rehber/cince-tercuman-nasil-secilir/",
    crumb: "Tercüman nasıl seçilir",
    title: "Çince Tercüman Nasıl Seçilir? Dil, Kapsam ve Günlük Teklif",
    description: "Çince tercüman seçerken dil uyumu, işe uygun deneyim, şehir ve tarih, hizmet sınırları ve günlük ücret kapsamını nasıl değerlendireceğinizi inceleyin.",
    eyebrow: "Rehber",
    h1: "İşiniz için uygun Çince tercümanı nasıl seçersiniz?",
    lead: "Çince tercüman seçimini yalnızca şehir adına, bir özgeçmişteki genel ifadelere veya en düşük günlük teklife dayandırmayın. Sizin programınızda hangi iletişimin kurulacağı, hangi dilin kullanılacağı ve hangi hizmetin satın alındığı açık olmalıdır. Aşağıdaki soruları bizimle görüşürken de kullanabilirsiniz.",
    blocks: [
      ...sections([
        ["Önce işin türünü belirleyin", `<p>Çin'de stant görüşmelerine katılacak tercüman ile Türkiye'de makine kurulumu sırasında teknik konuşmaları aktaracak tercümanın hazırlık ihtiyacı aynı olmayabilir. Makineyi, ürün grubunu veya görüşme gündemini kısa bir cümleyle açıklayın. “Ticari görüşme” gibi geniş bir tanımın yanına gerçek konuşma konularını ekleyin.</p>
        <p>Hizmetin sözlü tercümanlık olduğunu teyit edin. Fabrika denetimi, ürün araştırması, ticari danışmanlık veya yazılı belge çevirisi arıyorsanız bunlar bu sitede sunulan hizmetlerin kapsamında değildir.</p>`],
        ["Dil çiftini ve konuşma ihtiyacını doğrulayın", `<p>Esas hizmetimiz Çince ile Türkçe arasında sözlü tercümanlıktır. Görüşmede kullanılacak dil veya lehçe için özel bir gereksinim varsa bunu ayrıca belirtin. “Çince” ifadesi her tercümanın Mandarin ve Kantonca dahil bütün konuşma çeşitlerinde çalışabileceği anlamına gelmez; somut ihtiyacın uygunluğu teyit edilmelidir.</p>
        <p>Azerbaycanlı müşteriler için sitenin Azerbaycanca olması, görevlendirilecek tercümanın Azerbaycanca bildiğinin kanıtı değildir. Türkçe üzerinden iletişimin uygun olduğu açıkça teyit edilmeli; Azerbaycanca şartı ayrıca kaydedilmelidir.</p>`],
        ["Deneyimi işle ilgili sorularla değerlendirin", `<p>Benzer makine, üretim ortamı veya ürün görüşmesi konusunda hangi deneyimin açıklanabildiğini sorun. Genel “çok tecrübeli” ifadesi yerine sizin işinizde konuşulacak işlemler üzerine görüşün. Referans sunuluyorsa onun paylaşılmasına izin bulunması gerekir; erişemediğiniz bir referansın doğrulandığını varsaymayın.</p>
        <p>Kısa bir ön görüşme talep etmek, iletişim biçimini anlamanıza yardımcı olabilir; ancak yapılabileceği ayrıca teyit edilir. Böyle bir görüşme her teknik konuda kusursuz çeviri garantisi vermez. Anlaşılmayan bir terimin nasıl açıklığa kavuşturulacağını da konuşun.</p>`],
        ["Gerçek konum ve programı karşılaştırın", `<p>Tercümanın bir şehirde bulunması, sizin tarihinizde ve gerçek çalışma noktanızda uygun olduğu anlamına gelmez. Şirket merkezi, fuar alanı ve fabrika adresi farklıysa hepsini ayrı yazın. Birden fazla gün veya şehirde aynı kişiyle çalışma talebiniz varsa bütün program üzerinden uygunluk sorun.</p>
        <p>Ekibiniz aynı anda iki ayrı görüşme yapacaksa bir tercüman iki yerde birden olamaz. Teklifleri kişi sayısı yerine aynı anda dil desteği isteyen görüşme gruplarıyla birlikte değerlendirin.</p>`],
        ["Günlük ücrette aynı kapsamı kıyaslayın", `<p>Günlük tercümanlık bedelini, şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme giderlerinden ayrı görün. Bir teklifi diğerinden düşük yapan unsur hizmetin kendisi kadar masraf kapsamı da olabilir; kalemleri açıkça sorun. Biz bu masrafları günlük ücretten ayrı hesaplıyoruz.</p>
        <p>Başlangıç/bitiş saatlerini ve olası uzama koşullarını belirleyin. Ödeme, iptal veya tarih değişikliğini varsayımlarla tamamlamayın; somut teklifle birlikte teyit edin. <a href="/cince-tercuman-fiyatlari/">Günlük ücret sayfasındaki</a> sorular aynı kapsamı karşılaştırmak için kullanılabilir.</p>`],
        ["Taraflarla ilişkiyi sorun, cevabı varsaymayın", `<p>Tercümanın görüşülecek firma ile varsa ilişkisini ve rolünün sınırlarını doğrudan sorabilirsiniz. Bu rehber bütün adaylar veya kendi hizmetimiz için verilmiş bir bağımsızlık, komisyonsuzluk ya da NDA taahhüdü değildir. İhtiyacınız olan işletme koşulları somut olarak açıklanıp teyit edilmelidir; sitede yayımlanmamış bir politikayı var kabul etmeyin.</p>`],
        ["Uygulama veya cihaz kullanacaksanız gerçek konuşmayı değerlendirin", `<p>Basit ifadeler için çeviri araçları yardımcı olabilir. Teknik terimlerin, sayıların, birimlerin ve ortam koşullarının önemli olduğu bir görüşmede ise araç seçimini gerçek ihtiyacınıza göre değerlendirin. Bu rehber belirli bir ürünü test etmez ve hata oranı vermez. İnsan tercüman kullanmak da sıfır hata garantisi değildir; kritik noktalar iki tarafça teyit edilmelidir.</p>`],
        ["Talebinizi kısa ve karşılaştırılabilir gönderin", `<p>Hizmet + şehir ve gerçek konum + tarihler + kısa iş konusu ile başlayın. Dil gereksinimini ve paralel görüşmelerinizi ekleyin. <a href="/iletisim/">İletişim sayfasından</a> uygunluk ve teklif sorabilir; <a href="/makine-kurulumu-cince-tercuman/">makine kurulumu</a>, <a href="/cinde-fabrika-ziyareti-tercuman/">fabrika ziyareti</a> ve <a href="/cinde-fuar-tercumani/">fuar</a> sayfalarında hizmet sınırlarını inceleyebilirsiniz. Mesaj göndermek, kendiliğinden rezervasyon veya ödeme işlemi başlatmaz.</p>`]
      ])
    ]
  },
  zh: {
    path: "/zh/guides/how-to-choose-a-turkish-chinese-interpreter/",
    crumb: "如何选择中土口译",
    title: "如何选择中土口译？工作语言、专业准备与每日报价",
    description: "中国企业如何为土耳其项目或土耳其客户来访选择口译？核实工作语言、相关经验、实际地点、日期、服务边界和每日费用范围。",
    eyebrow: "指南",
    h1: "如何为您的工作选择合适的中文—土耳其语口译？",
    lead: "为土耳其项目派工程师，或在中国接待土耳其客户时，不能只看口译人员所在城市、笼统的经验描述或最低日费。先说明需要进行什么交流，再核实语言、准备、日期和费用范围。您向我们咨询时，也可以使用以下问题。",
    blocks: [
      ...sections([
        ["先说明工作类型", `<p>展会上的产品介绍，与设备安装现场的技术问答，对准备内容的要求可能不同。请用一句话写明设备、产品或会谈主题，再补充实际要谈的事项。只写“商务翻译”，可能无法表达真正的口译需求。</p>
        <p>同时确认购买的是现场口译。本网站不提供验厂、产品调查、商业咨询或书面文件翻译；这些工作不应因为现场有口译人员而被默认包含。</p>`],
        ["核实语言组合与具体口语需求", `<p>我们的主要工作语言为中文与土耳其语。若会面涉及特定语言或方言，应单独说明并确认是否适合。网站使用“中文”，不代表每位口译人员均可满足普通话、粤语及其他全部口语需求。</p>
        <p>如客户来自阿塞拜疆，也不能从网站有阿塞拜疆语页面，就推定现场人员会说该语言。客户是否能用土耳其语进行实际问答，需要明确确认；必须使用阿塞拜疆语的需求应单独登记。</p>`],
        ["用实际工作问题了解经验", `<p>可以询问候选人能够说明哪些相关设备、生产环境或产品会谈经验，而不仅接受“经验丰富”的概括。如果提供参考案例或客户信息，需有相应分享许可；没有核实的信息不应当作已验证事实。</p>
        <p>您可以提出简短的提前沟通需求，是否能安排需要另行确认。预先交谈有助于理解沟通方式，但不保证对所有技术内容都能无误处理。还应询问遇到不清楚的术语时，会怎样向技术人员确认。</p>`],
        ["用实际地点和完整日期确认安排", `<p>某位口译人员在一个城市，不代表一定能在您的日期前往实际工作地点。总部、工厂和展馆不同，应分别写明。如果希望同一人参与多天或多城市行程，需要一次性提供完整安排。</p>
        <p>团队若会在不同地点同时会谈，一人无法同时服务两组。评估人数时，应看同时需要独立语言支持的会面，而不仅是参加者总数。</p>`],
        ["比较同一范围的费用", `<p>每日口译服务费，与市内交通、城际交通、住宿和餐饮费用应分开看。一个报价更低，可能涉及费用范围不同，不能只比较一个总数字。我们的这些支出不包含在每日口译服务费内。</p>
        <p>每日起止时间、可能延长的条件、付款安排和改期规则，都应在具体报价中确认，不要自行补全未说明的条件。<a href="/zh/daily-rates/">每日费用页面</a>可帮助您整理需要询问的项目。</p>`],
        ["询问有关关系与职责，不预设答案", `<p>可以直接询问口译人员与将会见的企业是否存在相关联系，并明确其工作职责。本指南不是对全部候选人或本服务作出的独立性、无佣金或保密协议承诺。您需要的具体业务条件应逐项说明并确认，未公布的政策不能视为已存在。</p>`],
        ["使用应用或翻译设备时，按真实场景评估", `<p>简单表达可以借助翻译工具。涉及技术术语、数字、单位和现场条件时，应按真实工作需求判断是否适用。本指南没有测试具体产品，也没有提供错误率。人工口译同样不代表零错误，重要事项仍需双方明确核对。</p>`],
        ["把需求写成可比较的简要说明", `<p>服务类型、城市与实际地点、日期、简要主题，是咨询的基本信息。请补充工作语言及并行会面需求。您可以在<a href="/zh/contact/">联系页面</a>咨询安排与报价，并查看<a href="/zh/machine-installation-interpreter/">设备安装</a>、<a href="/zh/factory-visit-interpreter/">工厂访问</a>或<a href="/zh/trade-fair-interpreter/">展会口译</a>的服务范围。发送咨询本身不会完成预订或付款。</p>`]
      ])
    ]
  }
});

export const guides = [collection, requestGuide, machineGuide, factoryFairGuide, selectionGuide];
