// Service detail pages: china, machine, factory, fair, canton.
// Real bilingual content per plan §8–12; FAQ pulled from extracted Q&A by id.

function page({ id, tr, zh, faqIds, jsonldType = "Service" }) {
  const mk = (locale, d, homeInfo) => ({
    path: d.path,
    status: "published",
    indexable: true,
    title: d.title,
    description: d.description,
    jsonld: {
      "@context": "https://schema.org",
      "@type": jsonldType,
      name: d.title,
      serviceType: d.serviceType,
      areaServed: locale === "zh-Hans" ? ["土耳其", "中国"] : ["Türkiye", "Çin"],
      inLanguage: locale,
      provider: { "@type": "Organization", name: "Çince Tercüman", url: "https://www.cince-tercuman.com/" }
    },
    blocks: [
      { type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead, ctas: ["quote", "whatsapp"] },
      { type: "priceNote" },
      { type: "richtext", surface: true, heading: d.scope.heading, html: d.scope.html },
      d.info ? { type: "richtext", heading: d.info.heading, html: d.info.html } : null,
      { type: "faq", ids: faqIds },
      { type: "finalCta" }
    ].filter(Boolean)
  });
  const locales = { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) };
  return { id, primaryService: id, locales };
}

export const serviceDetail = [
  page({
    id: "china",
    faqIds: ["Q049", "Q050", "Q051", "Q067", "Q068"],
    tr: {
      path: "/cinde-tercuman/",
      title: "Çin'de Tercüman | Çince–Türkçe Sözlü Tercümanlık",
      description: "Guangzhou, Shanghai ve Beijing başta olmak üzere Çin'de planlanmış görüşmeleriniz için Türkçe–Çince tercüman. Günlük uygunluk ve teklif sorun.",
      serviceType: "Interpreting",
      eyebrow: "Çin'de tercüman",
      h1: "Çin'deki görüşmeleriniz için Çince–Türkçe tercüman",
      lead: "Guangzhou, Shanghai ve Beijing başta olmak üzere Çin'deki planlanmış görüşmelerinizde sözlü iletişim desteği alın. Ziyaret edeceğiniz şehirleri, tarihleri ve konuşulacak konuları paylaşın.",
      scope: {
        heading: "Görüşmenin her iki tarafını da anlayarak ilerleyin",
        html: `<p>Planladığınız yüz yüze görüşmelerde sorularınızın ve karşı tarafın açıklamalarının sözlü olarak aktarılmasına destek oluyoruz. Birden fazla şehir veya çalışma noktası varsa her günü ayrı değerlendiriyoruz.</p>
        <p>Fabrika ve fuar programları için ayrıntıları ilgili hizmet sayfalarından inceleyebilirsiniz: <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/cinde-fuar-tercumani/">Fuar ziyareti</a>.</p>`
      },
      info: {
        heading: "Şehir adı kadar çalışma noktası da önemli",
        html: `<p>Bulunduğunuz şehir, görüşme yapılacak adres veya bölge, tarih aralığı ve görüşmenin konusunu yazın. Bir gün içinde farklı noktalara geçilecekse sıralamayı da ekleyin. Henüz kesinleşmeyen durakları belirtmeniz yeterlidir.</p>
        <p>Şehir sayfaları: <a href="/cince-tercuman-guangzhou/">Guangzhou</a> · <a href="/cince-tercuman-shanghai-sanghay/">Shanghai</a> · <a href="/cince-tercuman-beijing-pekin/">Beijing</a>. Diğer şehirler için programınızı paylaşın.</p>`
      }
    },
    zh: {
      path: "/zh/interpreter-in-china/",
      title: "中国现场中土口译｜广州、上海、北京及周边行程",
      description: "为在中国的既定会面及现场行程提供中土双向口译。可咨询广州、上海、北京及周边地区，按城市和日期确认档期。",
      serviceType: "Interpreting",
      eyebrow: "中国现场口译",
      h1: "为在中国的会面提供中土双向现场口译",
      lead: "在广州、上海、北京及可安排的周边地区，协助土耳其来访人员与中方沟通。请提供会面城市、日期及讨论内容。",
      scope: {
        heading: "让双方的提问与说明得到清楚传达",
        html: `<p>我们在既定的面对面会谈中提供双向口译，传达提问、回答与现场说明。若行程涉及多个城市或地点，将按每天的安排分别确认。</p>
        <p>工厂和展会行程可查看相应服务页面：<a href="/zh/factory-visit-interpreter/">工厂参访口译</a> · <a href="/zh/trade-fair-interpreter/">展会口译</a>。</p>`
      },
      info: {
        heading: "除了城市名称，也请说明实际地点",
        html: `<p>请告知会面地址或区域、日期和沟通主题。同一天如需前往多个地点，也请说明先后顺序；尚未确定的安排可以注明。</p>
        <p>城市页面：<a href="/zh/guangzhou-interpreter/">广州</a> · <a href="/zh/shanghai-interpreter/">上海</a> · <a href="/zh/beijing-interpreter/">北京</a>。其他城市请提供具体行程咨询。</p>`
      }
    }
  }),

  page({
    id: "machine",
    faqIds: ["Q084", "Q022", "Q023", "Q024", "Q025", "Q026", "Q027", "Q028"],
    tr: {
      path: "/makine-kurulumu-cince-tercuman/",
      title: "Makine Kurulumu İçin Çince Teknik Tercüman",
      description: "Çinli teknik ekip ile işletmeniz arasında makine kurulumu ve devreye alma sırasında Çince–Türkçe sözlü tercümanlık. Şehir ve tarihle günlük teklif sorun.",
      serviceType: "TechnicalInterpreting",
      eyebrow: "Makine kurulumu tercümanlığı",
      h1: "Makine kurulumu için Çince teknik tercüman",
      lead: "Çinli teknik ekip ile işletmenizin aynı bilgiyi doğru anlaması için kurulum sahasında sözlü tercümanlık desteği. Makine türünü, tesisin bulunduğu şehri ve çalışma tarihlerini paylaşın.",
      scope: {
        heading: "Hangi iletişime destek oluyoruz?",
        html: `<ul>
          <li><strong>Kurulum adımları:</strong> Teknik ekibin açıkladığı işlem sırası, saha ihtiyaçları ve tarafların sorularının aktarılması.</li>
          <li><strong>Devreye alma görüşmeleri:</strong> Yapılan testler ve gözlenen durumlar hakkında taraflar arasındaki sözlü iletişim.</li>
          <li><strong>Kullanım açıklamaları:</strong> Kurulum programına bağlı operatör bilgilendirmelerinde sözlü dil desteği.</li>
        </ul>
        <div class="callout"><strong>Teknik ekip uygular, tercüman iletişimi destekler.</strong> Kurulum, teknik uygulama ve güvenlik kararları yetkili teknik ekiplerin sorumluluğundadır. Tercüman, bu ekipler ile işletmeniz arasındaki açıklamaları ve soruları sözlü olarak aktarır. İşin teknik konusu talep aşamasında paylaşılmalıdır.</div>`
      },
      info: {
        heading: "Teklif için dört bilgiyle başlayalım",
        html: `<p>Makine veya üretim hattının türü; fabrikanın şehir ve çalışma noktası; planlanan başlangıç ve bitiş tarihleri; teknik ekibin hangi aşamalarda tercümana ihtiyaç duyacağı. Varsa günlük çalışma saatlerinizi de belirtin.</p>
        <p class="muted">Terminoloji hazırlığı için gerekli bilgiler çalışma planı netleşirken konuşulur. İlk talep formuna gizli teknik dosya yüklemeniz gerekmez.</p>
        <p>Hizmet bölgeleri: İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep ve çevresi. <a href="/cince-tercuman-kocaeli/">Kocaeli</a> ve <a href="/cince-tercuman-gebze/">Gebze</a> programları için ilgili sayfalara bakın. Hazırlık: <a href="/rehber/makine-kurulumu-tercuman-hazirligi/">Makine kurulumu tercüman hazırlığı</a>.</p>`
      }
    },
    zh: {
      path: "/zh/machine-installation-interpreter/",
      title: "土耳其设备安装翻译｜中国技术团队现场口译",
      description: "为中国技术团队在土耳其进行设备安装、调试及使用说明提供中土现场口译。请告知设备类型、工厂地点和日期，按天确认服务。",
      serviceType: "TechnicalInterpreting",
      eyebrow: "设备安装口译",
      h1: "中国技术团队赴土耳其安装设备，需要现场口译？",
      lead: "协助中国技术人员与土耳其工厂沟通安装步骤、调试说明及使用要求。请提供设备类型、现场城市和计划日期。",
      scope: {
        heading: "我们协助哪些沟通？",
        html: `<ul>
          <li><strong>安装步骤：</strong>传达技术团队说明的操作顺序、现场需求及双方提问。</li>
          <li><strong>调试沟通：</strong>协助双方交流测试过程与现场观察情况。</li>
          <li><strong>使用说明：</strong>在安装行程相关的操作人员说明环节提供口译。</li>
        </ul>
        <div class="callout"><strong>技术人员负责操作，译员协助沟通。</strong>设备安装、技术操作及安全决定由有权限的技术团队负责。译员传达技术团队与工厂之间的口头说明和提问。咨询时请明确设备及技术内容。</div>`
      },
      info: {
        heading: "咨询时先提供四项信息",
        html: `<p>设备或产线类型、工厂城市及实际位置、计划开始和结束日期、需要口译配合的技术环节。如已确定每日工作时段，也请一并说明。</p>
        <p class="muted">术语准备所需的信息可在确认安排时讨论。首次咨询无需上传保密技术文件。</p>
        <p>可咨询伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利、加济安泰普及周边工厂。<a href="/zh/kocaeli-interpreter/">科贾埃利</a>、<a href="/zh/gebze-interpreter/">盖布泽</a>行程也可按日期与地点咨询。</p>`
      }
    }
  }),

  page({
    id: "factory",
    faqIds: ["Q029", "Q030", "Q031", "Q034", "Q032", "Q033", "Q088", "Q089", "Q085", "Q086", "Q087", "Q090", "Q091", "Q092"],
    tr: {
      path: "/cinde-fabrika-ziyareti-tercuman/",
      title: "Çin'de Fabrika Ziyareti İçin Türkçe–Çince Tercüman",
      description: "Çin'de belirlediğiniz fabrikalara yapacağınız ziyaretlerde Çince–Türkçe sözlü tercümanlık. Fabrika konumu ve tarihle günlük uygunluk ve teklif sorun.",
      serviceType: "Interpreting",
      eyebrow: "Fabrika ziyareti tercümanlığı",
      h1: "Çin'de fabrika ziyaretinizde sorularınızı doğrudan iletin",
      lead: "Belirlediğiniz fabrikalarda üretim akışı, ürün özellikleri ve çalışma koşulları üzerine yapacağınız görüşmeler için Çince–Türkçe sözlü tercümanlık. Fabrikanın konumunu ve ziyaret gündeminizi paylaşın.",
      scope: {
        heading: "Toplantıdan saha gezisine aynı iletişim akışı",
        html: `<ul>
          <li><strong>Açılış görüşmesi:</strong> Ziyaret amacınızı ve konuşulacak başlıkları karşı tarafa aktarın.</li>
          <li><strong>Fabrika içindeki açıklamalar:</strong> Yetkililerin üretim akışı ve ürünler hakkında anlattıklarını takip edin, sorularınızı iletin.</li>
          <li><strong>Kapanış görüşmesi:</strong> Günün sonunda tarafların açıklamalarını ve sonraki görüşme ihtiyaçlarını sözlü olarak netleştirin.</li>
        </ul>
        <div class="callout"><strong>Ziyaret sizden, dil desteği bizden.</strong> Görüşeceğiniz fabrikaları ve ziyaret amacınızı siz belirlersiniz. Tercüman, sahada iki tarafın birbirini anlamasına destek olur. Üretim, kalite ve satın alma konusundaki değerlendirmeler ilgili firma yetkililerine aittir. Fabrika ziyareti bir denetim değildir.</div>`
      },
      info: {
        heading: "Teklif için bilgiler",
        html: `<p>Fabrikanın açık konumu veya harita bağlantısı, ziyaret tarihi, görüşülecek ürün veya üretim konusu ve aynı gün başka tesis olup olmadığı. Program kesinleştiğinde bu bilgileri çalışma planına dönüştürelim.</p>`
      }
    },
    zh: {
      path: "/zh/factory-visit-interpreter/",
      title: "中国工厂参访口译｜中土双向现场交流",
      description: "为土耳其来访人员与中国工厂之间的参访交流提供双向口译。请提供已确定的工厂位置、日期和议题，咨询每日服务安排。",
      serviceType: "Interpreting",
      eyebrow: "工厂参访口译",
      h1: "让中国工厂与土耳其来访人员面对面沟通",
      lead: "在已选定的工厂参访中，为生产流程、产品参数和相关安排的讨论提供中土双向口译。请提供工厂地点与沟通议题。",
      scope: {
        heading: "从见面讨论到车间参访，保持清楚沟通",
        html: `<ul>
          <li><strong>开场会面：</strong>说明参访目的和计划讨论的内容。</li>
          <li><strong>现场讲解：</strong>传达厂方关于生产流程及产品的介绍，并协助双方提问。</li>
          <li><strong>结束沟通：</strong>在当天行程结束前，口头确认双方说明及后续需要讨论的问题。</li>
        </ul>
        <div class="callout"><strong>参访由您确定，语言支持由我们提供。</strong>由您确定参访工厂及目的。译员协助双方在现场理解彼此；生产、质量及采购判断由相关企业负责人作出。工厂参访不是质量审核。</div>`
      },
      info: {
        heading: "咨询时请提供的信息",
        html: `<p>请提供工厂实际位置或地图链接、参访日期、产品或生产议题，以及同一天是否还有其他工厂。行程明确后，再确认具体工作安排。</p>`
      }
    }
  }),

  page({
    id: "fair",
    faqIds: ["Q035", "Q036", "Q037", "Q038", "Q097", "Q098", "Q039", "Q040", "Q099"],
    tr: {
      path: "/cinde-fuar-tercumani/",
      title: "Çin'de Fuar Tercümanı | Çince–Türkçe Sözlü Destek",
      description: "Çin'de katılacağınız fuarda stant görüşmeleri ve ürün açıklamaları için Çince–Türkçe tercüman. Fuar adı ve katılım günleriyle günlük uygunluk sorun.",
      serviceType: "Interpreting",
      eyebrow: "Fuar tercümanlığı",
      h1: "Çin'de fuar görüşmelerinizi dil engeline takılmadan yapın",
      lead: "Stant ziyaretlerinde ürün açıklamalarını anlamak ve sorularınızı karşı tarafa iletmek için Çince–Türkçe sözlü tercümanlık. Katılacağınız fuarı, şehri ve günleri paylaşın.",
      scope: {
        heading: "Stant başında konuşulanları netleştirelim",
        html: `<p>Firma tanışmaları, ürün özelliklerinin açıklanması, tarafların fiyat ve teslim koşulları hakkındaki soruları ve sonraki görüşme planlarının sözlü aktarımı. Ziyaret edeceğiniz stantları ve ticari kararları siz belirlersiniz; tercüman iletişimi destekler.</p>
        <div class="callout--info callout"><strong>Kanton Fuarı için tercüman mı arıyorsunuz?</strong> Guangzhou'daki fuar programınızın tarihlerini ve ilgilendiğiniz ürün gruplarını paylaşın. <a href="/kanton-fuari-tercuman/">Kanton Fuarı tercümanlığını incele →</a></div>`
      },
      info: {
        heading: "Fuarın adı kadar katılacağınız günler de önemli",
        html: `<p>Fuar adı, ziyaret tarihi, sektörünüz ve varsa görüşeceğiniz firma veya stantlar teklif değerlendirmesinin temelidir. Bir fuarın farklı bölümlerine veya dönemlerine katılacaksanız her günü belirtin.</p>`
      }
    },
    zh: {
      path: "/zh/trade-fair-interpreter/",
      title: "中国展会中土口译｜展位交流与产品介绍",
      description: "为中国展会中的中土交流、展位会谈、产品介绍及问答提供现场口译。请告知展会名称、城市和参会日期，咨询档期。",
      serviceType: "Interpreting",
      eyebrow: "展会口译",
      h1: "在中国展会现场，让中土交流更顺畅",
      lead: "为展位会谈、产品介绍和问答提供中文与土耳其语双向口译。请提供展会名称、城市及参会日期。",
      scope: {
        heading: "在展位现场，把说明与问题传达清楚",
        html: `<p>协助双方进行公司介绍、产品参数说明、价格与交付条件问答，以及后续会面的口头沟通。展位选择和商业决定由您负责，译员提供语言支持。</p>
        <div class="callout--info callout"><strong>需要广交会中土口译吗？</strong>请提供广州参会日期及关注的产品类别。<a href="/zh/canton-fair-interpreter/">查看广交会口译服务 →</a></div>`
      },
      info: {
        heading: "除了展会名称，也请明确参会日期",
        html: `<p>请提供展会名称、日期、行业，以及已计划交流的企业或展位。如涉及不同展区或展期，请逐日说明。</p>`
      }
    }
  }),

  page({
    id: "canton",
    faqIds: ["Q093", "Q094", "Q095", "Q096", "Q100"],
    tr: {
      path: "/kanton-fuari-tercuman/",
      title: "Kanton Fuarı Tercümanı | Guangzhou Çince–Türkçe",
      description: "Kanton Fuarı ziyaretinizde Çince–Türkçe sözlü tercümanlık. Katılacağınız günleri ve ürün gruplarını paylaşın; günlük uygunluk ve teklif sorun.",
      serviceType: "Interpreting",
      eyebrow: "Kanton Fuarı tercümanı",
      h1: "Kanton Fuarı için Çince–Türkçe tercüman",
      lead: "Guangzhou'daki Kanton Fuarı ziyaretinizde stant görüşmeleri ve ürün açıklamaları için sözlü tercümanlık desteği. Katılacağınız günleri, biliyorsanız fazı ve ürün grubunu paylaşın.",
      scope: {
        heading: "Programı fuar adından daha ayrıntılı tarif edin",
        html: `<p>Yalnızca "Kanton Fuarı" demek, çalışma günlerini ve görüşme içeriğini belirlemeye yetmez. Tarihlerinizi ve ilgilendiğiniz ürünleri yazın. Görüşeceğiniz firmaları önceden belirlediyseniz bu bilgiyi de ekleyin.</p>
        <p>Tercüman, belirlediğiniz stant görüşmelerinde açıklamaları ve sorularınızı karşılıklı olarak aktarır. Günün görüşme sırası, çalışma saatleri ve buluşma noktası hizmet öncesinde teyit edilir. Günlük ulaşım ve diğer giderler ayrı hesaplanır.</p>
        <p class="muted">Bu sayfa bir fuar takvimi değildir; fuar tarih ve bölüm bilgilerini resmi fuar kaynaklarından kontrol edin.</p>`
      },
      info: {
        heading: "İlgili sayfalar",
        html: `<p><a href="/cince-tercuman-guangzhou/">Guangzhou tercümanı</a> · <a href="/cinde-fuar-tercumani/">Genel fuar tercümanlığı</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a></p>`
      }
    },
    zh: {
      path: "/zh/canton-fair-interpreter/",
      title: "广交会中土口译｜广州展会现场沟通",
      description: "为广交会中的土耳其客户交流、产品介绍与展位问答提供中土口译。请提供参会日期、展期和产品类别，咨询译员档期。",
      serviceType: "Interpreting",
      eyebrow: "广交会口译",
      h1: "广交会现场中土双向口译",
      lead: "为广州广交会现场的展位交流和产品说明提供中文与土耳其语口译。请提供参会日期、已确定的展期及产品类别。",
      scope: {
        heading: "请提供比展会名称更具体的安排",
        html: `<p>仅说明"广交会"还不足以确认工作日期与沟通内容。请告知参会日期和关注产品；如已确定会面的企业，也请一并提供。</p>
        <p>译员在您安排的展位会谈中双向传达说明与提问。当天会面顺序、工作时间及集合地点需提前确认，交通与其他相关费用另计。</p>
        <p class="muted">本页不是展会日历；展期与展区信息请以官方发布为准。</p>`
      },
      info: {
        heading: "相关页面",
        html: `<p><a href="/zh/guangzhou-interpreter/">广州口译</a> · <a href="/zh/trade-fair-interpreter/">展会口译</a> · <a href="/zh/factory-visit-interpreter/">工厂参访口译</a> · <a href="/zh/daily-rates/">日费说明</a></p>`
      }
    }
  })
];
