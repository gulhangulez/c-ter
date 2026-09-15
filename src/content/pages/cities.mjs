// City pages — preserved/clean URLs per plan §17 & §44.3. One primary Q&A each.
// A city being listed never implies an office or standing team there.

function city({ id, faqId, tr, zh }) {
  const mk = (locale, d, related) => ({
    path: d.path, status: "published", indexable: true,
    title: d.title, description: d.description,
    jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: d.h1, inLanguage: locale },
    blocks: [
      { type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead, ctas: ["quote", "whatsapp"] },
      { type: "priceNote" },
      { type: "richtext", surface: true, html: d.body },
      { type: "faq", ids: [faqId] },
      { type: "finalCta" }
    ]
  });
  return { id, primaryService: null, locales: { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) } };
}

export const cityPages = [
  city({
    id: "istanbul", faqId: "Q069",
    tr: { path: "/cince-tercuman-istanbul/", title: "İstanbul'da Çince Tercüman | Kurulum ve Saha Tercümanlığı", description: "İstanbul'da makine kurulumu ve Çinli teknik ekiple görüşmeler için Çince–Türkçe sözlü tercümanlık. Yaka ve çalışma noktasıyla uygunluk sorun.", eyebrow: "İstanbul", h1: "İstanbul'da Çince–Türkçe tercüman", lead: "Makine kurulumu ve Çinli teknik ekiple yapılacak saha görüşmeleri için İstanbul'da sözlü tercümanlık.", body: `<p>Makine kurulumu için İstanbul'un hangi yakasında ve hangi çalışma noktasında bulunacağınızı belirtin. Tesis konumu ile günlük programı birlikte değerlendirelim. Kadıköy, Beşiktaş, Üsküdar ve diğer ilçelerdeki çalışma noktalarını da bu sayfadan iletebilirsiniz; bu aşamada ayrı ilçe sayfaları açılmaz.</p><p>Yakın bölgeler: <a href="/cince-tercuman-kocaeli/">Kocaeli</a> · <a href="/cince-tercuman-gebze/">Gebze</a>. İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a>.</p>` },
    zh: { path: "/zh/istanbul-interpreter/", title: "伊斯坦布尔中文口译｜设备安装与调试现场翻译", description: "在伊斯坦布尔为设备安装及与中国技术团队的现场会面提供中土口译。请说明区域与工厂实际位置咨询档期。", eyebrow: "伊斯坦布尔", h1: "伊斯坦布尔中文—土耳其语设备安装口译", lead: "为设备安装及与中国技术团队的现场沟通，在伊斯坦布尔提供中土口译。", body: `<p>请说明设备安装地点位于伊斯坦布尔哪一区域，并提供工厂实际位置，结合每日行程确认安排。卡德柯伊、贝西克塔什、于斯屈达尔等地区的现场需求也可在此咨询，此阶段不单独开设区页面。</p><p>邻近地区：<a href="/zh/kocaeli-interpreter/">科贾埃利</a> · <a href="/zh/gebze-interpreter/">盖布泽</a>。相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</p>` }
  }),
  city({
    id: "ankara", faqId: "Q074",
    tr: { path: "/cince-tercuman-ankara/", title: "Ankara'da Çince Tercüman | Kurulum ve Teknik Görüşme", description: "Ankara'da makine kurulumu ve teknik görüşmeler için Çince–Türkçe sözlü tercümanlık. Tesis konumu ve tarihle günlük uygunluk sorun.", eyebrow: "Ankara", h1: "Ankara'da Çince–Türkçe tercüman", lead: "Ankara'daki kurulum ve teknik saha görüşmeleri için sözlü tercümanlık.", body: `<p>Ankara'daki fabrika veya kurulum sahasının merkezden bağımsız gerçek konumunu paylaşın. Başlangıç ve bitiş saatlerini ulaşım planıyla birlikte netleştirelim.</p><p>İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/ankara-interpreter/", title: "安卡拉中文口译｜设备安装与技术沟通", description: "在安卡拉为设备安装及技术会面提供中土口译。请提供工厂实际位置和日期咨询档期。", eyebrow: "安卡拉", h1: "安卡拉中文—土耳其语口译", lead: "为安卡拉的安装及技术现场沟通提供中土口译。", body: `<p>请提供安卡拉工厂或安装现场的实际位置，并结合交通安排确认每日开始与结束时间。</p><p>相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  }),
  city({
    id: "kocaeli", faqId: "Q071",
    tr: { path: "/cince-tercuman-kocaeli/", title: "Kocaeli'de Çince Tercüman | Sanayi Bölgesi Kurulumu", description: "Kocaeli'deki fabrika ve kurulum programları için Çince–Türkçe sözlü tercümanlık. Tesis konumu ve tarihle uygunluk sorun.", eyebrow: "Kocaeli", h1: "Kocaeli'de Çince–Türkçe tercüman", lead: "Kocaeli'deki kurulum ve fabrika görüşmeleri için sözlü tercümanlık.", body: `<p>Kocaeli'deki çalışma noktaları için şehir, tesis konumu ve tarih bilgisiyle uygunluk sorabilirsiniz. Gebze programları için <a href="/cince-tercuman-gebze/">ilgili sayfayı</a> da inceleyin.</p><p>İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a>.</p>` },
    zh: { path: "/zh/kocaeli-interpreter/", title: "科贾埃利中文口译｜工业区设备安装", description: "在科贾埃利为工厂及设备安装行程提供中土口译。请提供工厂位置和日期咨询档期。", eyebrow: "科贾埃利", h1: "科贾埃利中文—土耳其语口译", lead: "为科贾埃利的安装及工厂沟通提供中土口译。", body: `<p>科贾埃利的现场需求，可按城市、工厂位置和日期咨询。盖布泽行程请查看<a href="/zh/gebze-interpreter/">对应页面</a>。</p><p>相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</p>` }
  }),
  city({
    id: "gebze", faqId: "Q070",
    tr: { path: "/cince-tercuman-gebze/", title: "Gebze'de Çince Tercüman | Fabrika Kurulum Tercümanlığı", description: "Gebze'deki fabrika ve kurulum programları için Çince–Türkçe sözlü tercümanlık. Sanayi bölgesi ve tarihle uygunluk sorun.", eyebrow: "Gebze", h1: "Gebze'de Çince–Türkçe tercüman", lead: "Gebze'deki kurulum ve fabrika görüşmeleri için sözlü tercümanlık.", body: `<p>Gebze'deki tesisin sanayi bölgesini, ekipman konusunu ve çalışma tarihlerini paylaşın. Buradaki hizmet, kurulum sırasındaki sözlü iletişim desteğidir; fabrika inşası veya teknik kurulum işlerini üstlenmek değildir.</p><p>Yakın bölge: <a href="/cince-tercuman-kocaeli/">Kocaeli</a>. İlgili hizmet: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a>.</p>` },
    zh: { path: "/zh/gebze-interpreter/", title: "盖布泽中文口译｜工厂设备安装口译", description: "在盖布泽为工厂及设备安装提供中土口译。请提供工业区和日期咨询档期。", eyebrow: "盖布泽", h1: "盖布泽中文—土耳其语口译", lead: "为盖布泽的安装及工厂沟通提供中土口译。", body: `<p>请提供盖布泽工厂所在工业区、设备内容及日期。这里的服务是安装相关的语言沟通，不承包厂房建设或技术安装工作。</p><p>邻近地区：<a href="/zh/kocaeli-interpreter/">科贾埃利</a>。相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</p>` }
  }),
  city({
    id: "guangzhou", faqId: "Q063",
    tr: { path: "/cince-tercuman-guangzhou/", title: "Guangzhou'da Çince Tercüman | Fuar ve Fabrika", description: "Guangzhou'da fuar ve fabrika programlarınız için Çince–Türkçe sözlü tercümanlık. Kanton Fuarı ve çalışma noktasıyla uygunluk sorun.", eyebrow: "Guangzhou / 广州", h1: "Guangzhou'da Çince–Türkçe tercüman", lead: "Guangzhou'daki fuar ve fabrika görüşmeleriniz için sözlü tercümanlık.", body: `<p>Fuar günlerini ve varsa farklı günlerdeki fabrika ziyaretlerini ayrı belirtin. Her çalışma noktasını kendi tarihiyle değerlendirelim.</p><p>İlgili: <a href="/kanton-fuari-tercuman/">Kanton Fuarı tercümanı</a> · <a href="/cinde-fuar-tercumani/">Fuar tercümanlığı</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a>.</p>` },
    zh: { path: "/zh/guangzhou-interpreter/", title: "广州中文口译｜展会与工厂参访", description: "在广州为展会和工厂参访提供中土口译。可咨询广交会及实际工作地点的档期。", eyebrow: "广州", h1: "广州中文—土耳其语口译", lead: "为广州的展会与工厂参访提供中土口译。", body: `<p>请分别说明展会日期及其他日期的工厂参访，为每个地点标注对应日期。</p><p>相关：<a href="/zh/canton-fair-interpreter/">广交会口译</a> · <a href="/zh/trade-fair-interpreter/">展会口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a>。</p>` }
  }),
  city({
    id: "shanghai", faqId: "Q065",
    tr: { path: "/cince-tercuman-shanghai-sanghay/", title: "Shanghai (Şanghay) Çince Tercüman | Görüşme ve Fabrika", description: "Shanghai'da planlanmış görüşmeler ve fabrika ziyaretleri için Çince–Türkçe sözlü tercümanlık. Buluşma ve çalışma noktasıyla uygunluk sorun.", eyebrow: "Shanghai / 上海", h1: "Shanghai'da Çince–Türkçe tercüman", lead: "Shanghai'daki görüşme ve fabrika programlarınız için sözlü tercümanlık.", body: `<p>Shanghai'da konaklamak ile aynı gün görüşmeye gideceğiniz nokta farklı olabilir. Buluşma ve çalışma yerini ayrı yazın.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a>.</p>` },
    zh: { path: "/zh/shanghai-interpreter/", title: "上海中文口译｜会面与工厂参访", description: "在上海为既定会面和工厂参访提供中土口译。请分别提供集合地点与实际工作位置。", eyebrow: "上海", h1: "上海中文—土耳其语口译", lead: "为上海的会面与工厂行程提供中土口译。", body: `<p>住宿地点与会面地点可能不同，请分别提供在上海的集合地点及实际工作位置。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a>。</p>` }
  }),
  city({
    id: "beijing", faqId: "Q066",
    tr: { path: "/cince-tercuman-beijing-pekin/", title: "Beijing (Pekin) Çince Tercüman | Toplantı ve Saha", description: "Beijing'de toplantı ve saha programlarınız için Çince–Türkçe sözlü tercümanlık. Gündem ve adresle günlük uygunluk sorun.", eyebrow: "Beijing / 北京", h1: "Beijing'de Çince–Türkçe tercüman", lead: "Beijing'deki toplantı ve saha görüşmeleriniz için sözlü tercümanlık.", body: `<p>Beijing'de toplantı veya saha programınızın gündemini ve adresini paylaşın. Şehir dışındaki bir çalışma noktasına geçiş varsa ayrıca belirtin.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a>.</p>` },
    zh: { path: "/zh/beijing-interpreter/", title: "北京中文口译｜会议与现场行程", description: "在北京为会议和现场行程提供中土口译。请提供议题与地址咨询每日安排。", eyebrow: "北京", h1: "北京中文—土耳其语口译", lead: "为北京的会议与现场行程提供中土口译。", body: `<p>请提供北京会面或现场行程的议题与地址，如需前往市外地点，请另外注明。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/service-areas/">服务地区</a>。</p>` }
  }),
  city({
    id: "shenzhen", faqId: "Q064",
    tr: { path: "/cince-tercuman-shenzhen/", title: "Shenzhen'de Çince Tercüman | Fabrika ve Görüşme", description: "Shenzhen'de fabrika ve iş görüşmeleriniz için Çince–Türkçe sözlü tercümanlık. Çalışma noktası ve tarihle uygunluk sorun.", eyebrow: "Shenzhen / 深圳", h1: "Shenzhen'de Çince–Türkçe tercüman", lead: "Shenzhen'deki fabrika ve iş görüşmeleriniz için sözlü tercümanlık.", body: `<p>Ziyaret edeceğiniz fabrikanın veya görüşme noktasının gerçek konumunu ve tarihleri paylaşın. Uygunluk konum, tarih ve konuya göre değerlendirilir.</p><p>İlgili: <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a>.</p>` },
    zh: { path: "/zh/shenzhen-interpreter/", title: "深圳中文口译｜工厂与商务会面", description: "在深圳为工厂参访和商务会面提供中土口译。请提供实际地点和日期咨询档期。", eyebrow: "深圳", h1: "深圳中文—土耳其语口译", lead: "为深圳的工厂与商务会面提供中土口译。", body: `<p>请提供要访问的工厂或会面地点的实际位置及日期。是否能安排结合地点、日期与主题确认。</p><p>相关：<a href="/zh/interpreter-in-china/">中国现场口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a>。</p>` }
  })
];
