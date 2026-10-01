// Service areas — /hizmet-bolgeleri/ and /zh/service-areas/. Plan §11 / DEV14.
// User-confirmed network (listed in the main tables): İstanbul, Tekirdağ, Düzce, Ankara,
// Kayseri, Gaziantep; Guangzhou, Shanghai, Beijing.
// Kocaeli, Gebze, Shenzhen and other nearby places are conditional: evaluated by
// location/date only, never presented as offices or ready teams.
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
      description: "İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep; Guangzhou, Shanghai ve Beijing için Çince tercümanlık. Yakın bölgelerde konum ve tarihe göre değerlendirme.",
      schema: { type: "WebPage", crumbs: [{ name: "Hizmet bölgeleri", path: "/hizmet-bolgeleri/" }] },
      blocks: [
        { type: "hero", eyebrow: "Hizmet bölgeleri", h1: "Tercümana ihtiyaç duyduğunuz şehirden başlayalım", lead: "Türkiye ve Çin'de farklı şehirlerdeki tercüman ağımızla saha programlarını günlük esasla değerlendiriyoruz. Şehir merkezi dışındaki tesisler ve yakın şehirler için gerçek çalışma konumunu paylaşın.", ctas: ["quote", "whatsapp"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "Türkiye'de makine kurulumu sırasında tercümanlık",
          intro: "Türkiye'deki hizmet ağımız: İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep.",
          columns: ["Şehir", "Açıklama"],
          rows: [
            ["İstanbul", "Makine kurulumu için İstanbul'un hangi yakasında ve hangi çalışma noktasında bulunacağınızı belirtin. Tesis konumu ile günlük programı birlikte değerlendirelim."],
            ["Tekirdağ", "Tekirdağ'daki tesisin ilçe veya bölgesini, kurulum tarihlerini ve teknik ekibin çalışma planını paylaşın. Günlük ulaşım ihtiyacı konuma göre değerlendirilir."],
            ["Düzce", "Düzce'deki çalışma noktasını ve hangi kurulum aşamalarında dil desteği gerektiğini yazın. Birden fazla tesis varsa her konumu ayrı belirtin."],
            ["Ankara", "Ankara'daki fabrika veya kurulum sahasının merkezden bağımsız gerçek konumunu paylaşın. Başlangıç ve bitiş saatlerini ulaşım planıyla birlikte netleştirelim."],
            ["Kayseri", "Kayseri'de makine türünü, çalışma günlerini ve sahada görüşülecek konuları belirterek talep iletin. Teknik kapsam tercüman planlamasında dikkate alınır."],
            ["Gaziantep", "Gaziantep'te kurulum yapılacak tesisin konumunu ve günlük çalışma düzenini paylaşın. Şehir merkezi dışındaki noktaların ulaşım ihtiyacı ayrıca değerlendirilir."]
          ]
        },
        { type: "richtext", surface: true, html: `<p>Şehir sayfaları: <a href="/cince-tercuman-istanbul/">İstanbul</a> (<a href="/cince-tercuman-istanbul/#istanbul-ilceleri">Kadıköy, Beşiktaş, Üsküdar</a>) · <a href="/cince-tercuman-tekirdag/">Tekirdağ</a> · <a href="/cince-tercuman-ankara/">Ankara</a>. Hizmet kapsamı: <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a>.</p>` },
        {
          type: "table",
          heading: "Çin'de görüşme, fabrika ve fuar programları",
          intro: "Çin'deki hizmet ağımız: Guangzhou, Shanghai ve Beijing.",
          columns: ["Şehir", "Açıklama"],
          rows: [
            ["Guangzhou / 广州", "Fuar günlerini ve varsa farklı günlerdeki fabrika ziyaretlerini ayrı belirtin. Her çalışma noktasını kendi tarihiyle değerlendirelim."],
            ["Shanghai / 上海", "Shanghai'da konaklamak ile aynı gün görüşmeye gideceğiniz nokta farklı olabilir. Buluşma ve çalışma yerini ayrı yazın."],
            ["Beijing / 北京", "Beijing'de toplantı veya saha programınızın gündemini ve adresini paylaşın. Şehir dışındaki bir çalışma noktasına geçiş varsa ayrıca belirtin."]
          ]
        },
        { type: "richtext", html: `<p>Şehir sayfaları: <a href="/cince-tercuman-guangzhou/">Guangzhou</a> · <a href="/cince-tercuman-shanghai-sanghay/">Shanghai</a> · <a href="/cince-tercuman-beijing-pekin/">Beijing</a>. Hizmet kapsamı: <a href="/cinde-tercuman/">Çin'de tercüman</a>.</p>
        <p class="muted">Bir şehrin sitede anılması, o şehirde bir ofis veya sürekli hazır tercüman bulunduğu anlamına gelmez. Uygunluk her talep için tarih ve gerçek çalışma noktasına göre teyit edilir.</p>` },
        { type: "richtext", surface: true, heading: "Yakın bölgeler: konum ve tarihe göre değerlendirme", html: `<p>Kocaeli, Gebze, İzmir, Shenzhen, Yiwu veya yukarıdaki listede olmayan başka bir yerde tercümana ihtiyaç duyuyorsanız şehir adı, çalışma noktası ve tarihleri yazın. Bu yerler teyitli hizmet ağımızın parçası değildir; talebin karşılanıp karşılanamayacağı tercüman ve ulaşım uygunluğuyla birlikte ayrıca değerlendirilir. Bu bölgelerde ofis veya hazır ekip bulunduğu varsayılmaz.</p>
        <p>Mevcut bölge sayfaları: <a href="/cince-tercuman-kocaeli/">Kocaeli</a> · <a href="/cince-tercuman-gebze/">Gebze</a> · <a href="/cince-tercuman-izmir/">İzmir</a> · <a href="/cince-tercuman-shenzhen/">Shenzhen</a> · <a href="/cince-tercuman-yiwu/">Yiwu</a>.</p>` },
        { type: "faq", ids: ["Q002", "Q072", "Q073"] },
        { type: "finalCta" }
      ]
    },
    "zh-Hans": {
      path: "/zh/service-areas/",
      status: "published",
      indexable: true,
      title: "中土口译服务地区｜土耳其与中国城市安排",
      description: "了解土耳其与中国的中土口译服务地区。服务网络城市及邻近地区的安排需结合日期、实际地点和译员档期确认。",
      schema: { type: "WebPage", crumbs: [{ name: "服务地区", path: "/zh/service-areas/" }] },
      blocks: [
        { type: "hero", eyebrow: "服务地区", h1: "先告诉我们，您需要哪个城市的口译", lead: "依托土耳其与中国多座城市的译员网络，按日评估现场服务安排。市区外的工厂及附近城市，请提供实际工作位置。", ctas: ["quote", "email"] },
        { type: "priceNote" },
        {
          type: "table",
          surface: true,
          heading: "土耳其设备安装现场口译",
          intro: "土耳其服务网络：伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利、加济安泰普。",
          columns: ["城市", "说明"],
          rows: [
            ["伊斯坦布尔", "请说明设备安装地点位于伊斯坦布尔哪一区域，并提供工厂实际位置，结合每日行程确认安排。"],
            ["泰基尔达", "请提供泰基尔达工厂所在区域、安装日期及技术团队计划，根据实际位置评估每日交通需求。"],
            ["迪兹杰", "请说明迪兹杰的实际地点及需要口译的安装环节。如涉及多处工厂，请分别提供位置。"],
            ["安卡拉", "请提供安卡拉工厂或安装现场的实际位置，并结合交通安排确认每日开始与结束时间。"],
            ["开塞利", "咨询开塞利现场口译时，请提供设备类型、工作日期及沟通议题，以便评估技术内容。"],
            ["加济安泰普", "请提供加济安泰普安装工厂的位置与每日安排。市区外地点的交通需求需单独评估。"]
          ]
        },
        { type: "richtext", surface: true, html: `<p>城市页面：<a href="/zh/istanbul-interpreter/">伊斯坦布尔</a>（<a href="/zh/istanbul-interpreter/#istanbul-ilceleri">Kadıköy、Beşiktaş、Üsküdar</a>）· <a href="/zh/tekirdag-interpreter/">泰基尔达</a> · <a href="/zh/ankara-interpreter/">安卡拉</a>。相关服务：<a href="/zh/machine-installation-interpreter/">设备安装口译</a>。</p>` },
        {
          type: "table",
          heading: "中国会面、工厂及展会行程口译",
          intro: "中国服务网络：广州、上海、北京。",
          columns: ["城市", "说明"],
          rows: [
            ["广州", "请分别说明展会日期及其他日期的工厂参访，为每个地点标注对应日期。"],
            ["上海", "住宿地点与会面地点可能不同，请分别提供在上海的集合地点及实际工作位置。"],
            ["北京", "请提供北京会面或现场行程的议题与地址，如需前往市外地点，请另外注明。"]
          ]
        },
        { type: "richtext", html: `<p>城市页面：<a href="/zh/guangzhou-interpreter/">广州</a> · <a href="/zh/shanghai-interpreter/">上海</a> · <a href="/zh/beijing-interpreter/">北京</a>。相关服务：<a href="/zh/interpreter-in-china/">中国境内口译</a>。</p>
        <p class="muted">网站列出某座城市，并不代表当地设有办公室或始终有译员待命。每项需求均需按日期和实际工作地点确认。</p>` },
        { type: "richtext", surface: true, heading: "邻近地区：按地点和日期另行评估", html: `<p>如需要科贾埃利、盖布泽、伊兹密尔、深圳、义乌或列表之外其他地点的服务，请提供城市、实际地点及日期。这些地点不属于已确认的服务网络，能否安排需结合译员档期与交通情况另行确认，不代表当地设有办公室或常驻人员。</p>
        <p>现有地区页面：<a href="/zh/kocaeli-interpreter/">科贾埃利</a> · <a href="/zh/gebze-interpreter/">盖布泽</a> · <a href="/zh/izmir-interpreter/">伊兹密尔</a> · <a href="/zh/shenzhen-interpreter/">深圳</a> · <a href="/zh/yiwu-interpreter/">义乌</a>。</p>` },
        { type: "faq", ids: ["Q002", "Q072", "Q073"] },
        { type: "finalCta" }
      ]
    }
  }
};
