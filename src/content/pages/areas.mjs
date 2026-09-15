// Service areas — /hizmet-bolgeleri/ and /zh/service-areas/. Plan §13.
// City list = service reach, NOT offices/standing teams (business rule).
export const areas = {
  id: "areas",
  primaryService: null,
  locales: {
    tr: {
      path: "/hizmet-bolgeleri/",
      status: "published",
      indexable: true,
      title: "Türkiye ve Çin'de Çince Tercüman Hizmet Bölgeleri",
      description: "İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep; Guangzhou, Shanghai ve Beijing için Çince tercümanlık. Yakın şehirlerde program bazlı uygunluk.",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "Hizmet bölgeleri", inLanguage: "tr" },
      blocks: [
        { type: "hero", eyebrow: "Hizmet bölgeleri", h1: "Tercümana ihtiyaç duyduğunuz şehirden başlayalım", lead: "Türkiye ve Çin'de farklı şehirlerdeki tercüman ağımızla saha programlarını günlük esasla değerlendiriyoruz. Şehir merkezi dışındaki tesisler ve yakın şehirler için gerçek çalışma konumunu paylaşın.", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "Türkiye'de makine kurulumu sırasında tercümanlık",
          columns: ["Şehir", "Yayımlanacak açıklama"],
          rows: [
            ["İstanbul", "Makine kurulumu için İstanbul'un hangi yakasında ve hangi çalışma noktasında bulunacağınızı belirtin. Tesis konumu ile günlük programı birlikte değerlendirelim."],
            ["Tekirdağ", "Tekirdağ'daki tesisin ilçe veya bölgesini, kurulum tarihlerini ve teknik ekibin çalışma planını paylaşın. Günlük ulaşım ihtiyacı konuma göre değerlendirilir."],
            ["Düzce", "Düzce'deki çalışma noktasını ve hangi kurulum aşamalarında dil desteği gerektiğini yazın. Birden fazla tesis varsa her konumu ayrı belirtin."],
            ["Ankara", "Ankara'daki fabrika veya kurulum sahasının merkezden bağımsız gerçek konumunu paylaşın. Başlangıç ve bitiş saatlerini ulaşım planıyla birlikte netleştirelim."],
            ["Kayseri", "Kayseri'de makine türünü, çalışma günlerini ve sahada görüşülecek konuları belirterek talep iletin. Teknik kapsam tercüman planlamasında dikkate alınır."],
            ["Gaziantep", "Gaziantep'te kurulum yapılacak tesisin konumunu ve günlük çalışma düzenini paylaşın. Şehir merkezi dışındaki noktaların ulaşım ihtiyacı ayrıca değerlendirilir."],
            ["Kocaeli / Gebze", "Kocaeli ve Gebze'deki çalışma noktaları için şehir, tesis konumu ve tarih bilgisiyle uygunluk sorabilirsiniz. Bu bölgeler için mevcut detay sayfalarımızı da inceleyin."]
          ]
        },
        {
          type: "table",
          heading: "Çin'de görüşme, fabrika ve fuar programları",
          columns: ["Şehir", "Açıklama"],
          rows: [
            ["Guangzhou / 广州", "Fuar günlerini ve varsa farklı günlerdeki fabrika ziyaretlerini ayrı belirtin. Her çalışma noktasını kendi tarihiyle değerlendirelim."],
            ["Shanghai / 上海", "Shanghai'da konaklamak ile aynı gün görüşmeye gideceğiniz nokta farklı olabilir. Buluşma ve çalışma yerini ayrı yazın."],
            ["Beijing / 北京", "Beijing'de toplantı veya saha programınızın gündemini ve adresini paylaşın. Şehir dışındaki bir çalışma noktasına geçiş varsa ayrıca belirtin."]
          ],
          note: "Bir şehrin sitede anılması, o şehirde bir ofis veya sürekli hazır tercüman bulunduğu anlamına gelmez."
        },
        { type: "richtext", heading: "Yakın şehirler için de programınızı paylaşın", html: `<p>Hizmet listesinde olmayan bir şehirde tercümana ihtiyaç duyuyorsanız şehir adı, çalışma noktası ve tarihleri yazın. Talebin karşılanıp karşılanamayacağı tercüman ve ulaşım uygunluğuyla birlikte değerlendirilir.</p><p>Şehir sayfaları: <a href="/cince-tercuman-istanbul/">İstanbul</a> · <a href="/cince-tercuman-ankara/">Ankara</a> · <a href="/cince-tercuman-kocaeli/">Kocaeli</a> · <a href="/cince-tercuman-gebze/">Gebze</a> · <a href="/cince-tercuman-guangzhou/">Guangzhou</a> · <a href="/cince-tercuman-shanghai-sanghay/">Shanghai</a> · <a href="/cince-tercuman-beijing-pekin/">Beijing</a> · <a href="/cince-tercuman-shenzhen/">Shenzhen</a>.</p>` },
        { type: "faq", ids: ["Q002", "Q072", "Q073"] },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/service-areas/",
      status: "published",
      indexable: true,
      title: "中土口译服务地区｜土耳其与中国城市安排",
      description: "了解土耳其与中国的中土口译服务地区。主要城市及附近地区的安排需结合日期、实际地点和译员档期确认。",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "服务地区", inLanguage: "zh-Hans" },
      blocks: [
        { type: "hero", eyebrow: "服务地区", h1: "先告诉我们，您需要哪个城市的口译", lead: "依托土耳其与中国多座城市的译员网络，按日评估现场服务安排。市区外的工厂及附近城市，请提供实际工作位置。", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "土耳其设备安装现场口译",
          columns: ["城市", "说明"],
          rows: [
            ["伊斯坦布尔", "请说明设备安装地点位于伊斯坦布尔哪一区域，并提供工厂实际位置，结合每日行程确认安排。"],
            ["泰基尔达", "请提供泰基尔达工厂所在区域、安装日期及技术团队计划，根据实际位置评估每日交通需求。"],
            ["迪兹杰", "请说明迪兹杰的实际地点及需要口译的安装环节。如涉及多处工厂，请分别提供位置。"],
            ["安卡拉", "请提供安卡拉工厂或安装现场的实际位置，并结合交通安排确认每日开始与结束时间。"],
            ["开塞利", "咨询开塞利现场口译时，请提供设备类型、工作日期及沟通议题，以便评估技术内容。"],
            ["加济安泰普", "请提供加济安泰普安装工厂的位置与每日安排。市区外地点的交通需求需单独评估。"],
            ["科贾埃利 / 盖布泽", "科贾埃利及盖布泽的现场需求，可按城市、工厂位置和日期咨询，并查看对应地区页面。"]
          ]
        },
        {
          type: "table",
          heading: "中国会面、工厂及展会行程口译",
          columns: ["城市", "说明"],
          rows: [
            ["广州", "请分别说明展会日期及其他日期的工厂参访，为每个地点标注对应日期。"],
            ["上海", "住宿地点与会面地点可能不同，请分别提供在上海的集合地点及实际工作位置。"],
            ["北京", "请提供北京会面或现场行程的议题与地址，如需前往市外地点，请另外注明。"]
          ],
          note: "网站列出某座城市，并不代表当地设有办公室或始终有译员待命。"
        },
        { type: "richtext", heading: "附近城市也可以提供行程咨询", html: `<p>如需要列表之外的城市服务，请提供城市、实际地点及日期。能否安排需结合译员档期与交通情况确认。</p><p>城市页面：<a href="/zh/istanbul-interpreter/">伊斯坦布尔</a> · <a href="/zh/ankara-interpreter/">安卡拉</a> · <a href="/zh/kocaeli-interpreter/">科贾埃利</a> · <a href="/zh/gebze-interpreter/">盖布泽</a> · <a href="/zh/guangzhou-interpreter/">广州</a> · <a href="/zh/shanghai-interpreter/">上海</a> · <a href="/zh/beijing-interpreter/">北京</a> · <a href="/zh/shenzhen-interpreter/">深圳</a>。</p>` },
        { type: "faq", ids: ["Q002", "Q072", "Q073"] },
        { type: "finalCta" }
      ]
    }
  }
};
