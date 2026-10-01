// City pages — preserved/clean URLs per plan §5.1 & §6.4–6.5, §6.23–6.24.
// User-confirmed network: İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep;
// Guangzhou, Shanghai, Beijing. Kocaeli, Gebze and Shenzhen keep their URLs but are
// conditional nearby locations (evaluated by location/date; no office/ready team).
// A city being listed never implies an office or standing team there.

const sec = (heading, html, surface = false) => ({ type: "richtext", heading, html, surface });
const ctaRow = (html) => `<div class="button-row">${html}</div>`;

const CITY_CRUMB = {
  tr: { name: "Hizmet bölgeleri", path: "/hizmet-bolgeleri/" },
  "zh-Hans": { name: "服务地区", path: "/zh/service-areas/" }
};

// `country` decides the related service used as the WebPage `about`:
// Turkish cities → machine installation, Chinese cities → interpreter in China.
function city({ id, faqId, country, tr, zh }) {
  const mk = (locale, d) => {
    const body = d.sections
      ? d.sections
      : [{ type: "priceNote" }, { type: "richtext", surface: true, html: d.body }];
    return {
      path: d.path, status: "published", indexable: true,
      title: d.title, description: d.description,
      schema: {
        type: "WebPage",
        service: country === "TR" ? "machine" : "china",
        crumbs: [CITY_CRUMB[locale], { name: d.crumb || d.eyebrow.split(" / ")[0], path: d.path }]
      },
      blocks: [
        {
          type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead,
          ctas: locale === "zh-Hans" ? ["quote", "email"] : ["quote", "whatsapp"]
        },
        ...body,
        ...(faqId ? [{ type: "faq", ids: [faqId] }] : []),
        { type: "finalCta" }
      ]
    };
  };
  return { id, primaryService: null, locales: { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) } };
}

export const cityPages = [
  // ------------------------------------------------------------ İstanbul
  city({
    id: "istanbul", faqId: "Q069", country: "TR",
    tr: {
      path: "/cince-tercuman-istanbul/",
      title: "İstanbul Çince Tercüman | Makine Kurulumu ve Teknik Ekip",
      description: "İstanbul'da Çinli teknik ekiplerle makine kurulumu, devreye alma ve kullanım açıklamaları için Çince–Türkçe sözlü tercümanlık. Konum ve tarihleri paylaşın.",
      eyebrow: "İstanbul",
      h1: "İstanbul'da Çince–Türkçe teknik tercümanlık",
      lead: "Çin'den gelen teknik ekibiniz İstanbul'da makine kurulumu veya devreye alma çalışması yapacaksa, gerçek tesis konumunu ve tarihleri paylaşarak tercümanlık talebinizi başlatabilirsiniz. Kurulum adımlarının, test sorularının ve kullanım açıklamalarının iki ekip arasında sözlü aktarımını destekliyoruz.",
      sections: [
        sec("İlçe adı kadar tesisin konumu da önemlidir", `<p>İstanbul programı için tesisin hangi yakada bulunduğunu, ilçesini ve mümkünse harita bağlantısını belirtin. Şirket merkezi ile çalışma noktası farklıysa tercümanın gideceği adresi ayrıca yazın. Gün içinde başka tesise geçilecekse durak sırasını da paylaşın; ulaşım ve hizmet planı bu gerçek programa göre değerlendirilsin.</p>
        <h3 id="istanbul-ilceleri">Kadıköy, Beşiktaş ve Üsküdar için talepler</h3>
        <p>Bu ilçelerde Çince tercüman arıyorsanız hizmet türünü de belirtin. Önceliğimiz makine kurulumu, devreye alma ve bunlarla ilgili teknik açıklamalarda sözlü tercümanlıktır. İlçe adının burada bulunması o ilçede bir ofis veya hazır tercüman bulunduğu anlamına gelmez. Tarih ve çalışma noktası için uygunluk ayrıca teyit edilir.</p>`, true),
        sec("Teknik ekip uygular, tercüman iletişimi destekler", `<p>Tercüman, mühendislerin açıklamalarını ve Türk ekibin sorularını aktarır. Montaj, elektrik bağlantısı, devreye alma, test veya iş güvenliği kararları yetkili teknik ekiplerin sorumluluğundadır. <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu hizmetinin kapsamını inceleyin</a>.</p>`),
        sec("İstanbul talebi için ne paylaşmalısınız?", `<p>Makine veya hat türü, tesis konumu, çalışma tarihleri ve tercümanın hangi aşamalarda bulunmasını istediğinizi yazın. Birden fazla ekibin aynı anda farklı alanlarda çalışması bekleniyorsa bunu başlangıçta belirtin. Önce iş dilini ve uygunluğu, sonra günlük ücret ile ek masrafları görüşelim; programı karşılıklı teyit edelim. Hizmet günlük ücretlendirilir; şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Talep göndermek tek başına rezervasyon oluşturmaz.</p>
        <p><a href="/rehber/makine-kurulumu-tercuman-hazirligi/">Teknik ekip için hazırlık rehberi</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a></p>
        ${ctaRow(`<a class="button-primary" href="/iletisim/">İstanbul'daki çalışma yerini ve tarihleri gönderin</a>`)}`, true)
      ]
    },
    zh: {
      path: "/zh/istanbul-interpreter/",
      title: "伊斯坦布尔中文口译｜设备安装与调试现场沟通",
      description: "中国技术团队赴伊斯坦布尔安装或调试设备，可咨询中文—土耳其语现场口译。请提供实际工厂地址、设备类型和工作日期；服务按天计费。",
      eyebrow: "伊斯坦布尔",
      h1: "伊斯坦布尔设备安装现场的中文—土耳其语口译",
      lead: "中国工程师到伊斯坦布尔开展设备安装、调试或操作说明时，需要与土耳其客户的技术人员直接沟通。我们提供现场口译，协助双方传达步骤、问题和说明。请先告知实际工作地址、设备类型和日期。",
      sections: [
        sec("请提供工作地点，而不仅是客户公司名称", `<p>客户的办公室、仓库和生产场所可能不在同一地点。请写明工程师实际工作的工厂或车间地址，并注明欧洲一侧或亚洲一侧、所在区及可分享的地图链接。若同一天需要前往多个地点，请列出先后顺序，便于评估安排和交通费用。</p>
        <h3 id="istanbul-ilceleri">Kadıköy、Beşiktaş 或 Üsküdar 的需求</h3>
        <p>如果工作地点位于这些地区，请在咨询中写明具体地点与工作内容。列出地区名称不代表当地设有办公室或有人员随时待命。是否能够安排，需要结合日期和实际工作地点确认。</p>`, true),
        sec("明确口译与技术工作的分工", `<p>口译人员协助传达安装步骤、调试反馈和操作问题。设备安装、维修、测试及安全判断仍由双方获授权的技术人员负责。发生术语或指令不清楚的情况时，应请技术人员解释后再继续沟通。<a href="/zh/machine-installation-interpreter/">查看设备安装口译服务</a>。</p>`),
        sec("咨询时需要哪些信息？", `<p>请提供设备或生产线类型、工作地址、日期以及需要口译的环节。若有多个团队同时在不同区域作业，也请提前说明。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。无法使用 WhatsApp 时，可发送邮件或复制联系页中的咨询文本。</p>
        <p><a href="/zh/guides/prepare-machine-installation-interpreting/">技术团队口译准备清单</a> · <a href="/zh/daily-rates/">每日费用说明</a> · <a href="/zh/service-areas/">服务地区</a></p>
        ${ctaRow(`<a class="button-primary" href="/zh/contact/">发送伊斯坦布尔工作安排</a>`)}`, true)
      ]
    }
  }),

  // ------------------------------------------------------------ Tekirdağ
  city({
    id: "tekirdag", country: "TR",
    tr: {
      path: "/cince-tercuman-tekirdag/",
      title: "Tekirdağ Çince Tercüman | Makine Kurulumu ve Devreye Alma",
      description: "Tekirdağ'da Çinli teknik ekiple makine kurulumu için Çince–Türkçe sözlü tercümanlık. Tesis konumu ve tarihleri paylaşın; günlük ücret ve masrafları görüşelim.",
      eyebrow: "Tekirdağ",
      h1: "Tekirdağ'da makine kurulumu için Çince tercüman",
      lead: "Çinli teknik ekibin makine kurulumu, devreye alma veya kullanım açıklamaları sırasında Türk ekiple iletişimi için Çince–Türkçe sözlü tercümanlık talep edebilirsiniz. Tekirdağ hizmet ağımızdadır; görevlendirme, çalışma noktası ve tarihler için uygunluk değerlendirmesinden sonra netleşir.",
      sections: [
        sec("Tesisin konumunu ve çalışma günlerini birlikte paylaşın", `<p>Tekirdağ merkez, Çorlu veya Çerkezköy gibi bir ilçe adı ilk yönlendirme için yardımcı olur. Teklif değerlendirmesinde tesisin açık konumu, buluşma noktası ve hangi günlerde tercüman gerektiği de önemlidir. Konaklama adresi ile fabrikanın adresi farklıysa ikisini ayrı belirtin. İlçe adını paylaşmak tercümanın o ilçede sürekli bulunduğu anlamına gelmez.</p>`, true),
        sec("Teknik ekip uygular, tercüman iletişimi aktarır", `<p>Tercüman; kurulum sırası, test sırasında sorulan sorular ve operatöre yapılan açıklamalar arasında sözlü iletişimi destekler. Makinenin kurulması, güvenlik kararı, arıza giderme ve teknik kabul yetkili teknik ekiplerin sorumluluğundadır. Makine veya hat türünü ve hangi aşamada destek istediğinizi talebinize ekleyin.</p>`),
        sec("Günlük çalışma ve ayrı masraflar", `<p>Hizmet günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme bedelleri ayrıca hesaplanır. Çalışma saatleri ve program değişikliği ihtimali teklif görüşmesinde netleştirilir.</p>`, true),
        sec("Talep nasıl ilerler?", `<ol class="steps">
          <li><strong>Hizmet, tesisin bulunduğu ilçe/konum, tarihler ve kısa ihtiyacınızı paylaşın.</strong></li>
          <li><strong>Programınıza göre uygunluk ve günlük teklif değerlendirilsin.</strong></li>
          <li><strong>Günler, görev kapsamı ve ayrıca karşılanacak giderler karşılıklı teyit edilsin.</strong></li>
        </ol>
        <p><a href="/hizmet-bolgeleri/#q-q072">Tekirdağ ve Çerkezköy sorularına bakın</a>. <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığını inceleyin</a>, <a href="/rehber/makine-kurulumu-tercuman-hazirligi/">teknik ekip hazırlık listesini kullanın</a> ve <a href="/cince-tercuman-fiyatlari/">günlük ücret kapsamını görün</a>.</p>
        ${ctaRow(`<a class="button-primary" href="/iletisim/">Tekirdağ için uygunluk ve teklif sorun</a><a class="button-whatsapp" rel="nofollow" href="https://wa.me/905550441141">WhatsApp'tan yazın</a>`)}
        <p class="muted">Mesaj göndermek tek başına rezervasyon oluşturmaz.</p>`)
      ]
    },
    zh: {
      path: "/zh/tekirdag-interpreter/",
      title: "泰基尔达中土口译｜设备安装与调试现场沟通",
      description: "中国工程师赴土耳其泰基尔达安装或调试设备？请提供工厂位置、日期和设备情况，咨询中土现场口译安排、日费及另计费用。",
      eyebrow: "泰基尔达",
      h1: "赴泰基尔达安装设备的中土现场口译",
      lead: "如果贵公司的工程师计划前往土耳其泰基尔达（Tekirdağ）安装、调试设备，或向当地操作人员说明使用方法，可以向我们咨询中文与土耳其语之间的现场口译。泰基尔达在我们的服务网络范围内，具体安排仍需根据工厂位置、日期及译员档期确认。",
      sections: [
        sec("提供工厂位置，而不只是城市名称", `<p>请写明工厂位于泰基尔达市区、Çorlu、Çerkezköy 或其他地点，并分别说明实际工作地点与集合地点。如果工程师住宿地点和工厂不同，也请分开列出。城市或地区名称并不表示当地设有办公室或随时有译员待命。</p>`, true),
        sec("先说明设备和沟通环节", `<p>请提供设备或生产线类型，以及安装、调试、测试说明、操作培训中哪些环节需要口译。译员负责双方口头交流，不负责安装设备、排除故障、作出安全决定或签署技术验收。技术操作和决定由有权限的技术团队负责。</p>`),
        sec("按日计费，相关支出另计", `<p>口译按日计费。市内和跨城交通、住宿、餐饮费用另行计算。每天的工作安排及可能的日期变更，请在报价沟通时一并说明。</p>`, true),
        sec("咨询安排", `<p>请先发送服务类型、工厂位置、日期和简要需求。我们根据这些信息确认是否可以安排，并沟通日费与另计费用；具体工作计划需双方确认。发送咨询消息不等于预订成功。</p>
        <p><a href="/zh/machine-installation-interpreter/">查看设备安装口译服务</a> · <a href="/zh/guides/prepare-machine-installation-interpreting/">准备工程师现场信息</a> · <a href="/zh/daily-rates/">了解日费和相关支出</a> · <a href="/zh/service-areas/#q-q072">查看泰基尔达常见问题</a></p>
        ${ctaRow(`<a class="button-primary" href="/zh/contact/">发送泰基尔达口译需求</a>`)}
        <p>也可发送邮件至 <a href="mailto:info@cince-tercuman.com">info@cince-tercuman.com</a>。电话：<a href="tel:+905075286187">+90 507 528 61 87</a>。</p>`)
      ]
    }
  }),

  // -------------------------------------------------------------- Ankara
  city({
    id: "ankara", faqId: "Q074", country: "TR",
    tr: { path: "/cince-tercuman-ankara/", title: "Ankara'da Çince Tercüman | Kurulum ve Teknik Görüşme", description: "Ankara'da makine kurulumu ve teknik görüşmeler için Çince–Türkçe sözlü tercümanlık. Tesis konumu ve tarihle günlük uygunluk sorun.", eyebrow: "Ankara", h1: "Ankara'da Çince–Türkçe tercüman", lead: "Ankara'daki kurulum ve teknik saha görüşmeleri için sözlü tercümanlık.", body: `<p>Ankara'daki fabrika veya kurulum sahasının merkezden bağımsız gerçek konumunu paylaşın. Başlangıç ve bitiş saatlerini ulaşım planıyla birlikte netleştirelim. Ankara hizmet ağımızdadır; uygunluk tarih ve çalışma noktasına göre teyit edilir, şehir adı ofis veya her tarihte hazır tercüman anlamına gelmez.</p><p>İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a>.</p>` },
    zh: { path: "/zh/ankara-interpreter/", title: "安卡拉中文口译｜设备安装与技术沟通", description: "在安卡拉为设备安装及技术会面提供中土口译。请提供工厂实际位置和日期咨询档期。", eyebrow: "安卡拉", h1: "安卡拉中文—土耳其语口译", lead: "为安卡拉的安装及技术现场沟通提供中土口译。", body: `<p>请提供安卡拉工厂或安装现场的实际位置，并结合交通安排确认每日开始与结束时间。安卡拉在我们的服务网络范围内；是否能够安排需结合日期和实际地点确认，列出城市不代表当地设有办公室。</p><p>相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a> · <a href="/zh/service-areas/">服务地区</a> · <a href="/zh/daily-rates/">每日费用说明</a>。</p>` }
  }),

  // ---------------------------------------- Kocaeli (conditional nearby)
  city({
    id: "kocaeli", faqId: "Q071", country: "TR",
    tr: { path: "/cince-tercuman-kocaeli/", title: "Kocaeli'de Çince Tercüman | Sanayi Bölgesi Kurulumu", description: "Kocaeli'deki fabrika ve kurulum programları için Çince–Türkçe sözlü tercümanlık. Tesis konumu ve tarihle uygunluk değerlendirmesi isteyin.", eyebrow: "Kocaeli", h1: "Kocaeli'de Çince–Türkçe tercüman", lead: "Kocaeli'deki kurulum ve fabrika görüşmeleri için sözlü tercümanlık talebinizi konum ve tarihle değerlendirelim.", body: `<p>Kocaeli, teyitli hizmet ağımızdaki şehirlerden biri değildir; buradaki talepler yakın bölge programı olarak tarih ve gerçek çalışma noktasıyla ayrıca değerlendirilir. Kocaeli için hazır ekip veya ofis bulunduğu varsayılmaz. Şehir, tesis konumu ve tarih bilgisiyle uygunluk sorabilirsiniz. Gebze programları için <a href="/cince-tercuman-gebze/">ilgili sayfayı</a> da inceleyin.</p><p>İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/kocaeli-interpreter/", title: "科贾埃利中文口译｜工业区设备安装", description: "科贾埃利的工厂及设备安装行程，可提交工厂位置和日期，评估中土口译是否可以安排。", eyebrow: "科贾埃利", h1: "科贾埃利中文—土耳其语口译", lead: "科贾埃利的安装及工厂沟通需求，可按地点和日期提交评估。", body: `<p>科贾埃利不属于我们已确认的服务网络城市，相关需求按邻近地区处理，需结合日期和实际工作地点另行评估，不代表当地设有办公室或常驻人员。请提供城市、工厂位置和日期。盖布泽行程请查看<a href="/zh/gebze-interpreter/">对应页面</a>。</p><p>相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  }),

  // ------------------------------------------ Gebze (conditional nearby)
  city({
    id: "gebze", faqId: "Q070", country: "TR",
    tr: { path: "/cince-tercuman-gebze/", title: "Gebze'de Çince Tercüman | Fabrika Kurulum Tercümanlığı", description: "Gebze'deki fabrika ve kurulum programları için Çince–Türkçe sözlü tercümanlık. Sanayi bölgesi ve tarihle uygunluk değerlendirmesi isteyin.", eyebrow: "Gebze", h1: "Gebze'de Çince–Türkçe tercüman", lead: "Gebze'deki kurulum ve fabrika görüşmeleri için sözlü tercümanlık talebinizi konum ve tarihle değerlendirelim.", body: `<p>Gebze, teyitli hizmet ağımızdaki şehirlerden biri değildir; talepler yakın bölge programı olarak tarih ve gerçek çalışma noktasıyla ayrıca değerlendirilir, hazır ekip bulunduğu varsayılmaz. Tesisin sanayi bölgesini, ekipman konusunu ve çalışma tarihlerini paylaşın. Buradaki hizmet, kurulum sırasındaki sözlü iletişim desteğidir; fabrika inşası veya teknik kurulum işlerini üstlenmek değildir.</p><p>Yakın bölge: <a href="/cince-tercuman-kocaeli/">Kocaeli</a>. İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/gebze-interpreter/", title: "盖布泽中文口译｜工厂设备安装口译", description: "盖布泽的工厂及设备安装行程，可提交工业区和日期，评估中土口译是否可以安排。", eyebrow: "盖布泽", h1: "盖布泽中文—土耳其语口译", lead: "盖布泽的安装及工厂沟通需求，可按地点和日期提交评估。", body: `<p>盖布泽不属于我们已确认的服务网络城市，相关需求按邻近地区处理，需结合日期和实际工作地点另行评估，不代表当地有常驻人员。请提供盖布泽工厂所在工业区、设备内容及日期。这里的服务是安装相关的语言沟通，不承包厂房建设或技术安装工作。</p><p>邻近地区：<a href="/zh/kocaeli-interpreter/">科贾埃利</a>。相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  }),

  // ----------------------------------------------------------- Guangzhou
  city({
    id: "guangzhou", faqId: "Q063", country: "CN",
    tr: { path: "/cince-tercuman-guangzhou/", title: "Guangzhou'da Çince Tercüman | Fuar ve Fabrika", description: "Guangzhou'da fuar ve fabrika programlarınız için Çince–Türkçe sözlü tercümanlık. Kanton Fuarı ve çalışma noktasıyla uygunluk sorun.", eyebrow: "Guangzhou / 广州", h1: "Guangzhou'da Çince–Türkçe tercüman", lead: "Guangzhou'daki fuar ve fabrika görüşmeleriniz için sözlü tercümanlık.", body: `<p>Fuar günlerini ve varsa farklı günlerdeki fabrika ziyaretlerini ayrı belirtin. Her çalışma noktasını kendi tarihiyle değerlendirelim. Guangzhou hizmet ağımızdadır; uygunluk tarih ve çalışma noktasına göre teyit edilir.</p><p>İlgili: <a href="/kanton-fuari-tercuman/">Kanton Fuarı görüşmeleri için tercüman</a> · <a href="/cinde-fuar-tercumani/">Diğer Çin fuarlarında tercümanlık</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a>.</p>` },
    zh: { path: "/zh/guangzhou-interpreter/", title: "广州中文口译｜展会与工厂参访", description: "在广州为展会和工厂参访提供中土口译。可咨询广交会及实际工作地点的档期。", eyebrow: "广州", h1: "广州中文—土耳其语口译", lead: "为广州的展会与工厂参访提供中土口译。", body: `<p>请分别说明展会日期及其他日期的工厂参访，为每个地点标注对应日期。广州在我们的服务网络范围内，是否能够安排需结合日期和实际地点确认。</p><p>相关：<a href="/zh/canton-fair-interpreter/">广交会口译</a> · <a href="/zh/trade-fair-interpreter/">展会口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a> · <a href="/zh/daily-rates/">每日费用</a>。</p>` }
  }),

  // ------------------------------------------------------------ Shanghai
  city({
    id: "shanghai", faqId: "Q065", country: "CN",
    tr: { path: "/cince-tercuman-shanghai-sanghay/", title: "Shanghai (Şanghay) Çince Tercüman | Görüşme ve Fabrika", description: "Shanghai'da planlanmış görüşmeler ve fabrika ziyaretleri için Çince–Türkçe sözlü tercümanlık. Buluşma ve çalışma noktasıyla uygunluk sorun.", eyebrow: "Shanghai / 上海", h1: "Shanghai'da Çince–Türkçe tercüman", lead: "Shanghai'daki görüşme ve fabrika programlarınız için sözlü tercümanlık.", body: `<p>Shanghai'da konaklamak ile aynı gün görüşmeye gideceğiniz nokta farklı olabilir. Buluşma ve çalışma yerini ayrı yazın. Shanghai hizmet ağımızdadır; uygunluk tarih ve çalışma noktasına göre teyit edilir.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a>.</p>` },
    zh: { path: "/zh/shanghai-interpreter/", title: "上海中文口译｜会面与工厂参访", description: "在上海为既定会面和工厂参访提供中土口译。请分别提供集合地点与实际工作位置。", eyebrow: "上海", h1: "上海中文—土耳其语口译", lead: "为上海的会面与工厂行程提供中土口译。", body: `<p>住宿地点与会面地点可能不同，请分别提供在上海的集合地点及实际工作位置。上海在我们的服务网络范围内，是否能够安排需结合日期和实际地点确认。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a>。</p>` }
  }),

  // ------------------------------------------------------------- Beijing
  city({
    id: "beijing", faqId: "Q066", country: "CN",
    tr: { path: "/cince-tercuman-beijing-pekin/", title: "Beijing (Pekin) Çince Tercüman | Toplantı ve Saha", description: "Beijing'de toplantı ve saha programlarınız için Çince–Türkçe sözlü tercümanlık. Gündem ve adresle günlük uygunluk sorun.", eyebrow: "Beijing / 北京", h1: "Beijing'de Çince–Türkçe tercüman", lead: "Beijing'deki toplantı ve saha görüşmeleriniz için sözlü tercümanlık.", body: `<p>Beijing'de toplantı veya saha programınızın gündemini ve adresini paylaşın. Şehir dışındaki bir çalışma noktasına geçiş varsa ayrıca belirtin. Beijing hizmet ağımızdadır; uygunluk tarih ve çalışma noktasına göre teyit edilir.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/beijing-interpreter/", title: "北京中文口译｜会议与现场行程", description: "在北京为会议和现场行程提供中土口译。请提供议题与地址咨询每日安排。", eyebrow: "北京", h1: "北京中文—土耳其语口译", lead: "为北京的会议与现场行程提供中土口译。", body: `<p>请提供北京会面或现场行程的议题与地址，如需前往市外地点，请另外注明。北京在我们的服务网络范围内，是否能够安排需结合日期和实际地点确认。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  }),

  // --------------------------------------- Shenzhen (conditional nearby)
  city({
    id: "shenzhen", faqId: "Q064", country: "CN",
    tr: { path: "/cince-tercuman-shenzhen/", title: "Shenzhen'de Çince Tercüman | Fabrika ve Görüşme", description: "Shenzhen'deki fabrika ve iş görüşmeleriniz için Çince–Türkçe sözlü tercümanlık. Çalışma noktası ve tarihle uygunluk değerlendirmesi isteyin.", eyebrow: "Shenzhen / 深圳", h1: "Shenzhen'de Çince–Türkçe tercüman", lead: "Shenzhen'deki fabrika ve iş görüşmeleriniz için sözlü tercümanlık talebinizi konum ve tarihle değerlendirelim.", body: `<p>Shenzhen, teyitli hizmet ağımızdaki şehirlerden biri değildir; talepler tarih, gerçek çalışma noktası ve konuya göre ayrıca değerlendirilir. Shenzhen'de ofis veya hazır ekip bulunduğu varsayılmaz. Ziyaret edeceğiniz fabrikanın veya görüşme noktasının gerçek konumunu ve tarihleri paylaşın.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/shenzhen-interpreter/", title: "深圳中文口译｜工厂与商务会面", description: "深圳的工厂参访和商务会面，可提交实际地点和日期，评估中土口译是否可以安排。", eyebrow: "深圳", h1: "深圳中文—土耳其语口译", lead: "深圳的工厂与商务会面需求，可按地点和日期提交评估。", body: `<p>深圳不属于我们已确认的服务网络城市，相关需求需结合日期、实际地点与主题另行评估，不代表当地设有办公室或常驻人员。请提供要访问的工厂或会面地点的实际位置及日期。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  })
];
