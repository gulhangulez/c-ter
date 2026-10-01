// Service detail pages: china, machine, factory, fair, canton.
// Content per plan §6.6–6.15; FAQ pulled from extracted Q&A by id (faq.data.json).
// The common price/process text is already part of each page body, so no separate
// priceNote block is rendered here (§6.1: one cost note per page).

const sec = (heading, html, surface = false) => ({ type: "richtext", heading, html, surface });
const cta = (label, href) => `<div class="button-row"><a class="button-primary" href="${href}">${label}</a></div>`;

const SERVICES_CRUMB = {
  tr: { name: "Hizmetler", path: "/cince-tercuman/" },
  "zh-Hans": { name: "口译服务", path: "/zh/interpreting-services/" }
};

function page({ id, tr, zh, faqIds, parent }) {
  const mk = (locale, d) => ({
    path: d.path,
    status: "published",
    indexable: true,
    title: d.title,
    description: d.description,
    schema: {
      type: "WebPage",
      service: id,
      crumbs: [
        SERVICES_CRUMB[locale],
        ...(parent ? [parent[locale]] : []),
        { name: d.crumb, path: d.path }
      ]
    },
    blocks: [
      {
        type: "hero", eyebrow: d.eyebrow, h1: d.h1, lead: d.lead,
        ctas: locale === "zh-Hans" ? ["quote", "email"] : ["quote", "whatsapp"]
      },
      ...d.sections,
      { type: "faq", ids: faqIds },
      { type: "finalCta" }
    ]
  });
  return { id, primaryService: id, locales: { tr: mk("tr", tr), "zh-Hans": mk("zh-Hans", zh) } };
}

export const serviceDetail = [
  // ---------------------------------------------------------------- china
  page({
    id: "china",
    faqIds: ["Q049", "Q050", "Q051", "Q067", "Q068"],
    tr: {
      path: "/cinde-tercuman/",
      crumb: "Çin'de tercüman",
      title: "Çin'de Türkçe Bilen Tercüman | Görüşme, Fabrika ve Fuar",
      description: "Çin'de planladığınız görüşmeler, fabrika ve fuar ziyaretleri için Çince–Türkçe sözlü tercümanlık. Şehirleri, tarihleri ve çalışma noktalarını paylaşın.",
      eyebrow: "Çin'de tercüman",
      h1: "Çin'deki görüşmeleriniz için Çince–Türkçe tercüman",
      lead: "Çin'de kiminle, nerede ve hangi tarihlerde görüşeceğiniz belli olduğunda tercümanlık ihtiyacınızı daha açık planlayabilirsiniz. Önceden belirlediğiniz görüşmelerde sorularınızı ve karşı tarafın açıklamalarını Çince ile Türkçe arasında sözlü olarak aktarıyoruz.",
      sections: [
        sec("Görüşmenin türüne göre doğru kapsamı belirleyin", `<p>Fabrikaya gidecekseniz tesisin konumunu ve ziyaret gündemini; fuara katılacaksanız fuar adını, günleri ve görüşmek istediğiniz stantları paylaşın. Tercümanlık hizmeti ürün araştırma, tedarikçi bulma, satın alma danışmanlığı veya seyahat organizasyonu içermez.</p>
        <p><a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/cinde-fuar-tercumani/">Fuar tercümanı</a></p>`, true),
        sec("Şehir adıyla birlikte gerçek çalışma noktasını yazın", `<p>Guangzhou, Shanghai ve Beijing hizmet ağındaki şehirlerdir. Her talep adres, tarih ve uygunlukla değerlendirilir. Başka bir bölgede çalışma gerekiyorsa kesin konumu paylaşın. Şehir merkezindeki konaklama adresiniz ile ziyaret edeceğiniz fabrika farklı yerlerde olabilir; teklif için tercümanın çalışacağı nokta esas alınır.</p>
        <p><a href="/cince-tercuman-guangzhou/">Guangzhou</a> · <a href="/cince-tercuman-shanghai-sanghay/">Shanghai</a> · <a href="/cince-tercuman-beijing-pekin/">Beijing</a></p>
        <h3>Birden fazla şehir veya gün</h3>
        <p>Programı gün, şehir ve görüşme noktası olarak ayırın. Aynı tercümanın bütün programa katılacağı varsayılmaz; süreklilik talebinizi başta belirtin ve uygunluğu ayrıca teyit edin. Şehirler arası ulaşım da günlük tercümanlık ücretinden ayrı değerlendirilir.</p>`),
        sec("Talebinizi gönderin", `<p>Hizmet, şehir, tarihler ve kısa görüşme konusu ile başlayın. İş dilini, uygunluğu ve günlük teklifi görüştükten sonra programı karşılıklı teyit edelim. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme günlük tercümanlık ücretinden ayrı hesaplanır. İlk mesajınız rezervasyon onayı değildir.</p>
        <p><a href="/cince-tercuman-fiyatlari/">Günlük ücret</a></p>
        ${cta("Çin programımı paylaşmak istiyorum", "/iletisim/")}`, true)
      ]
    },
    zh: {
      path: "/zh/interpreter-in-china/",
      crumb: "中国境内口译",
      title: "中国境内土耳其语口译｜工厂与展会现场沟通",
      description: "土耳其客户来中国会面、参观工厂或参加展会，可咨询中文—土耳其语口译。请提供城市、日期、实际地点和会谈主题，确认安排与日费。",
      eyebrow: "中国境内口译",
      h1: "土耳其客户来中国，现场沟通可安排中土双语口译",
      lead: "您已与土耳其客户约好会面，或需要为已确定的工厂、展会行程安排口译时，请提供工作地点、日期和交流主题。我们协助双方用中文和土耳其语沟通，让问题与说明能够直接传达。",
      sections: [
        sec("根据会面内容确定服务", `<p>工厂访问可说明产品、生产环节及客户希望确认的问题；展会访问可围绕已选展位、产品介绍和洽谈安排提供口译。服务不包括寻找客户或供应商、产品调查、商业咨询、进口代理或行程组织。</p>
        <p><a href="/zh/factory-visit-interpreter/">工厂访问口译</a> · <a href="/zh/trade-fair-interpreter/">展会口译</a></p>`, true),
        sec("城市名称之外，还需要实际地址", `<p>中国服务网络涉及广州、上海和北京。是否能够安排，需要结合工作地址和日期确认。客户住宿地点未必接近工厂，请提供实际会面地点。其他邻近地区可提交具体安排评估，不能据此理解为全国所有城市均有常驻人员。</p>
        <p><a href="/zh/guangzhou-interpreter/">广州</a> · <a href="/zh/shanghai-interpreter/">上海</a> · <a href="/zh/beijing-interpreter/">北京</a></p>
        <h3>多城市或多日行程</h3>
        <p>请按日期列出城市和工作地点。如希望同一位口译人员全程参与，请在咨询时说明并确认是否可安排。不要把城市之间的交通时间当作可同时进行会面的时间。城际交通等费用需与每日口译服务费分开说明。</p>`),
        sec("发送简要需求，确认安排", `<p>请写明服务类型、城市、日期和会面主题。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。</p>
        <p><a href="/zh/daily-rates/">每日费用</a></p>
        ${cta("发送中国境内口译需求", "/zh/contact/")}`, true)
      ]
    }
  }),

  // -------------------------------------------------------------- machine
  page({
    id: "machine",
    faqIds: ["Q084", "Q022", "Q023", "Q024", "Q025", "Q026", "Q027", "Q028"],
    tr: {
      path: "/makine-kurulumu-cince-tercuman/",
      crumb: "Makine kurulumu tercümanlığı",
      title: "Makine Kurulumu İçin Çince Teknik Tercüman",
      description: "Çinli teknik ekiple makine kurulumu, devreye alma ve kullanım açıklamalarında Çince–Türkçe sözlü tercümanlık. Tesis, makine türü ve tarihlerle teklif sorun.",
      eyebrow: "Makine kurulumu tercümanlığı",
      h1: "Makine kurulumu için Çince teknik tercüman",
      lead: "Çin'den gelen teknik ekibin açıklamalarını Türk saha ekibine, Türk ekibin sorularını Çinli mühendislere aktarmak için sözlü tercümanlık sunuyoruz. Talebinizi makine veya hat türü, tesis konumu, çalışma tarihleri ve ihtiyaç duyulan aşamalarla birlikte paylaşın.",
      sections: [
        sec("Kurulumun hangi aşamalarında iletişim gerekir?", `<h3>Kurulum adımlarının açıklanması</h3>
        <p>Teknik ekibin işlem sırasını, görev dağılımını ve sahadan gelen soruları iki dil arasında aktarma.</p>
        <h3>Devreye alma ve test görüşmeleri</h3>
        <p>Test sırasında gözlenen durumların, teknik ekibin açıklamalarının ve teyit edilmesi gereken soruların sözlü aktarımı. Arıza teşhisi veya çözüm kararı tercümanın görevi değildir.</p>
        <h3>Kullanım açıklamaları</h3>
        <p>Yetkili teknik ekibin operatörlere yaptığı açıklamalar ile operatörlerin sorularının çevrilmesi. Teknik eğitim içeriğini teknik ekip belirler; tercüman eğitmen veya uygulayıcı rolünü üstlenmez.</p>`, true),
        sec("Teknik ekip uygular, tercüman iletişimi destekler", `<div class="callout"><p>Makinenin kurulması, ayarlanması, işletilmesi ve güvenliğine ilişkin kararlar yetkili teknik ekiplerce verilir. Tercüman bu kararları üretmez; açıklama ve soruları iki dil arasında aktarır. Belirsiz bir teknik ifade varsa, yetkili kişiye yeniden açıklatılması gerekir.</p></div>`),
        sec("Talep öncesinde dört bilgiyi hazırlayın", `<ol>
          <li>Makine veya hat türü ve görüşülecek iş.</li>
          <li>Tesisin gerçek konumu; şehir, ilçe ve varsa harita bağlantısı.</li>
          <li>Planlanan tarihler ve henüz belli olmayan kısımlar.</li>
          <li>Kurulum, test veya kullanım açıklaması gibi tercüman gereken aşamalar.</li>
        </ol>
        <p>İlk talepte gizli teknik dosya göndermeniz gerekmez. Teknik terimler veya erişim koşulları için neyin paylaşılabileceği ayrıca görüşülebilir. <a href="/rehber/makine-kurulumu-tercuman-hazirligi/">Teknik ekip ön bilgi formunu ve hazırlık rehberini kullanın</a>.</p>`, true),
        sec("Şehir, program ve günlük ücret", `<p>Türkiye'deki hizmet ağımız İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep'tir. Yakın bölgelerdeki talepler de tarih ve gerçek çalışma noktasıyla değerlendirilir; Kocaeli veya Gebze için hazır ekip bulunduğu varsayılmaz. Hizmet günlük ücretlendirilir; şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Programınızı aldıktan sonra iş dilini, uygunluğu ve ücretleri görüşür, çalışma düzenini karşılıklı teyit ederiz. Talep göndermek tek başına rezervasyon oluşturmaz. Program uzayabilecekse ilk talepte belirtin; ek günlerin uygunluğu ve koşulları ayrıca teyit edilir.</p>
        <p><a href="/cince-tercuman-istanbul/">İstanbul'da Çince tercüman</a> · <a href="/cince-tercuman-tekirdag/">Tekirdağ'da Çince tercüman</a> · <a href="/hizmet-bolgeleri/">Hizmet bölgeleri</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret ve masraflar</a></p>
        <p class="muted">Yakın bölgeler (konum ve tarihe göre ayrıca değerlendirilir): <a href="/cince-tercuman-kocaeli/">Kocaeli</a> · <a href="/cince-tercuman-gebze/">Gebze</a></p>
        ${cta("Makine ve çalışma programını paylaşın", "/iletisim/")}`)
      ]
    },
    zh: {
      path: "/zh/machine-installation-interpreter/",
      crumb: "设备安装口译",
      title: "土耳其设备安装翻译｜中文—土耳其语现场口译",
      description: "为中国工程师赴土耳其安装、调试设备及说明操作流程提供现场口译。请提供设备类型、工厂位置、日期和需要口译的环节，咨询每日费用。",
      eyebrow: "设备安装口译",
      h1: "中国技术团队赴土耳其安装设备，需要现场口译？",
      lead: "我们协助中国技术人员与土耳其现场团队沟通安装步骤、调试情况和操作问题。口译服务围绕双方的实际交流展开，不承担设备安装、维修、验收或安全判断。",
      sections: [
        sec("出发前先明确需要口译的环节", `<h3>安装步骤与现场分工</h3>
        <p>传达中国工程师的操作说明、工作顺序以及土耳其现场人员提出的问题。现场由谁作决定、由谁执行，应由相关负责人明确。</p>
        <h3>调试与测试沟通</h3>
        <p>协助双方描述测试现象、确认问题及说明下一步安排。口译人员转达技术内容，不替代工程师判断故障原因或选择解决方案。</p>
        <h3>操作说明与问答</h3>
        <p>技术人员向操作人员说明使用方式时，口译人员协助传达内容和问题。讲解内容与技术正确性由负责讲解的技术团队确认。</p>`, true),
        sec("请提供一份简明的工作说明", `<p>写明设备或生产线类型、土耳其实际工厂位置、计划工作日期以及需要口译的环节。若多组工程师会同时在不同位置工作，请同时说明。只写土耳其客户的总部城市，可能不足以判断实际行程。</p>
        <p>首次咨询无需提交机密技术文件。可先用通用名称描述设备、工作阶段和沟通需求。<a href="/zh/guides/prepare-machine-installation-interpreting/">使用技术团队准备表</a>。</p>`),
        sec("口译人员与技术人员如何分工？", `<div class="callout"><p>技术人员负责技术解释和实施，口译人员负责中土双语沟通。遇到含义不明确的术语或指令，应请相关技术人员重新说明，再确认双方是否理解。现场进入要求、防护要求及负责人信息也应提前告知；具体安排须逐项确认。</p></div>`, true),
        sec("工作城市、日期与费用", `<p>土耳其服务网络包括 İstanbul、Tekirdağ、Düzce、Ankara、Kayseri 和 Gaziantep。邻近地区的需求可提交位置和日期进行评估，不能据此理解为每个地区都有常驻人员。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。若预计可能增加工作日，请在初次咨询时说明，新增日期和费用需另行确认。</p>
        <p><a href="/zh/istanbul-interpreter/">伊斯坦布尔现场口译</a> · <a href="/zh/tekirdag-interpreter/">泰基尔达现场口译</a> · <a href="/zh/service-areas/">服务地区</a> · <a href="/zh/daily-rates/">每日费用说明</a></p>
        <p class="muted">邻近地区（按地点和日期另行评估）：<a href="/zh/kocaeli-interpreter/">科贾埃利</a> · <a href="/zh/gebze-interpreter/">盖布泽</a></p>
        ${cta("发送设备与工作安排", "/zh/contact/")}`)
      ]
    }
  }),

  // -------------------------------------------------------------- factory
  page({
    id: "factory",
    faqIds: ["Q029", "Q030", "Q031", "Q034", "Q032", "Q033", "Q088", "Q089", "Q085", "Q086", "Q087", "Q090", "Q091", "Q092"],
    tr: {
      path: "/cinde-fabrika-ziyareti-tercuman/",
      crumb: "Fabrika ziyareti tercümanlığı",
      title: "Çin'de Fabrika Ziyareti İçin Çince–Türkçe Tercüman",
      description: "Belirlediğiniz Çin fabrikalarında ürün, üretim, numune ve teslim görüşmeleri için sözlü tercümanlık. Fabrika denetimi değildir. Konum ve tarihle teklif sorun.",
      eyebrow: "Fabrika ziyareti tercümanlığı",
      h1: "Çin'de fabrika ziyaretinizde sorularınızı doğrudan iletin",
      lead: "Ziyaret edeceğiniz fabrikayı siz belirleyin; görüşme sırasında sorularınızın ve fabrikanın açıklamalarının Çince–Türkçe sözlü aktarımı için tercümanlık talebinizi bize iletin. Gerçek tesis konumu, tarih ve ürün konusu; uygunluk ve hazırlığın başlangıç noktasıdır.",
      sections: [
        sec("Ziyaret boyunca hangi konuşmalara destek verilir?", `<h3>Açılış görüşmesi</h3>
        <p>Ziyaret amacınız, gündeminiz ve görüşmeye katılan kişilerin açıklamaları karşılıklı aktarılır. Ürün grubu ve yanıt almak istediğiniz sorular önceden belirliyse görüşmenin sırası daha açık kurulabilir.</p>
        <h3>Tesis içindeki açıklamalar</h3>
        <p>Üretim hattına veya ürüne ilişkin açıklamalarla sorularınız sözlü olarak çevrilir. Tercümanın bir açıklamayı aktarması, anlatılan üretim kapasitesini veya ürün özelliğini bağımsız olarak doğruladığı anlamına gelmez.</p>
        <h3>Kapanış görüşmesi</h3>
        <p>Numune, minimum sipariş miktarı, fiyat, teslim süresi ve ödeme koşulları hakkında tarafların söyledikleri aktarılabilir. Ticari şartları kabul etme ve satın alma kararı size aittir; tercüman bu kararları sizin adınıza almaz.</p>`, true),
        sec("Ziyaret sizden, dil desteği bizden", `<div class="callout"><p>Bu hizmet fabrika denetimi, ürün testi, kalite kontrolü veya tedarikçinin güvenilirliğine ilişkin garanti içermez. Fabrika veya ürün araştırması da sunmuyoruz. Fabrikanın ileri sürdüğü bir bilgiyi doğrulamak istiyorsanız gereken inceleme ile tercümanlık ihtiyacını ayrı değerlendirmelisiniz.</p></div>`),
        sec("Aynı gün birden fazla fabrika varsa", `<p>Tesisleri ziyaret sırasına göre, adresleri ve planlanan görüşme saatleriyle paylaşın. Farklı şehirler veya uzak çalışma noktaları aynı gün içindeki kullanılabilir görüşme zamanını etkiler. Aynı tercümanın tüm programa katılacağı ve her ziyaretin planlanan güne sığacağı ayrıca teyit edilmelidir.</p>`, true),
        sec("Talebinizi hazırlayın", `<p>Fabrikanın konumu veya harita bağlantısı, tarih, ürün grubu, önemli sorularınız ve aynı gün başka ziyaret olup olmadığıyla başlayın. Bu bilgilerle iş dilini, uygunluğu ve günlük teklifi görüşüp ziyaret programını karşılıklı teyit edebiliriz. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme günlük tercümanlık ücretinden ayrı hesaplanır. Talep göndermek tek başına rezervasyon oluşturmaz.</p>
        <p><a href="/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/">Fabrika ve fuar görüşmesi hazırlığı</a> · <a href="/cinde-tercuman/">Çin'de tercüman</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a></p>
        ${cta("Fabrika ziyaretimin konumunu ve tarihini paylaş", "/iletisim/")}`)
      ]
    },
    zh: {
      path: "/zh/factory-visit-interpreter/",
      crumb: "工厂访问口译",
      title: "中国工厂访问土耳其语口译｜产品与生产现场沟通",
      description: "为已确定的中国工厂访问提供中文—土耳其语口译，协助产品介绍、生产说明及样品、起订量和交期问答。服务不含验厂或质量保证。",
      eyebrow: "工厂访问口译",
      h1: "接待土耳其客户参观工厂，安排中土双语现场沟通",
      lead: "土耳其客户已确定访问您的工厂，或客户需要口译人员陪同前往已选定的工厂时，可提供地址、日期和产品主题咨询安排。我们协助传达双方的问题与说明，让工厂介绍和客户提问能够用中文与土耳其语进行。",
      sections: [
        sec("从开场到结束，围绕实际会谈提供口译", `<h3>开场介绍</h3>
        <p>双方介绍访问目的、与会人员及当天议程。客户希望了解哪些产品、生产环节或合作条件，可以提前列出。</p>
        <h3>现场讲解</h3>
        <p>传达生产线、产品特点及工厂人员的说明，并将客户问题译给相关人员。口译人员转达一项说法，不等于独立核实该项生产能力或产品性能。</p>
        <h3>会谈结束前的确认</h3>
        <p>样品、起订量、价格、交期和付款条件等讨论可纳入现场口译。采购决定及商业条件由双方自行确认，口译人员不代替任何一方作交易决定。</p>`, true),
        sec("工厂访问口译不等于验厂", `<div class="callout"><p>本服务不提供工厂审核、质量检验、产品测试、供应商可靠性担保或产品质量保证，也不负责寻找工厂和产品。若需要核实工厂或产品的某项信息，请把相应专业检查与语言沟通需求分开安排。</p></div>`),
        sec("多家工厂的访问安排如何说明？", `<p>请按顺序列出工厂地址、日期和预计会面时段。若地点跨城市或距离较远，需要评估交通与会面能否衔接。是否能由同一位口译人员参与全部行程，应提前确认。</p>`, true),
        sec("咨询时请提供", `<p>工厂位置或地图链接、日期、产品类别、重点问题及同一天是否还有其他访问。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。</p>
        <p><a href="/zh/guides/prepare-factory-and-fair-interpreting/">工厂与展会口译准备清单</a> · <a href="/zh/interpreter-in-china/">中国境内口译</a> · <a href="/zh/daily-rates/">每日费用说明</a></p>
        ${cta("发送工厂访问安排", "/zh/contact/")}`)
      ]
    }
  }),

  // ----------------------------------------------------------------- fair
  page({
    id: "fair",
    faqIds: ["Q035", "Q036", "Q037", "Q038", "Q097", "Q098", "Q039", "Q040", "Q099"],
    tr: {
      path: "/cinde-fuar-tercumani/",
      crumb: "Fuar tercümanlığı",
      title: "Çin'de Fuar Tercümanı | Çince–Türkçe Stant Görüşmeleri",
      description: "Çin'de fuar ve stant görüşmeleriniz için Çince–Türkçe sözlü tercümanlık. Fuar adını, ziyaret günlerini ve ürün grubunu paylaşın. Tur organizasyonu sunulmaz.",
      eyebrow: "Fuar tercümanlığı",
      h1: "Çin'de fuar ve stant görüşmeleri için Çince tercüman",
      lead: "Çin'deki bir fuarda belirlediğiniz firmalarla görüşürken ürün açıklamalarını, sorularınızı ve karşı tarafın yanıtlarını Çince–Türkçe arasında aktarıyoruz. Fuarın adını, katılacağınız günleri ve görüşme konularını paylaşarak uygunluk ve günlük teklif sorabilirsiniz.",
      sections: [
        sec("Stant görüşmelerinde kapsam", `<p>Firma tanışmaları, ürün özelliklerinin açıklanması ve fiyat, numune veya teslim sorularının konuşulması sırasında sözlü iletişime destek verilir. Görüşeceğiniz firmaları veya stantları önceden belirlediyseniz programınıza ekleyin. Ürün araştırması, satın alma danışmanlığı ve ticari kararlar bu hizmetin kapsamında değildir.</p>
        <div class="callout callout--info"><strong>Kanton Fuarı'na katılıyorsanız</strong> Guangzhou'daki fuar programınızın tarihlerini ve ilgilendiğiniz ürün gruplarını paylaşın. <a href="/kanton-fuari-tercuman/">Kanton Fuarı tercümanı →</a></div>`, true),
        sec("Ekibiniz birlikte mi, farklı stantlarda mı görüşecek?", `<p>Birlikte hareket eden ekip ile aynı anda farklı stantlarda görüşen ekiplerin dil desteği ihtiyacı farklıdır. Tek tercüman aynı anda iki ayrı görüşmede bulunamaz. Katılımcı sayısını ve paralel görüşmeleri talepte belirtin; ihtiyaç duyulan tercüman sayısı ve uygunluk ayrı değerlendirilsin.</p>`),
        sec("“Fuar gezisi” için tercüman arıyorsanız", `<p>Hizmetimiz, fuardaki görüşmeler için size özel planlanan sözlü tercümanlıktır. Uçak, otel, transfer, fuar turu veya gezi organizasyonu sunmuyoruz. Fuar giriş işlemleri ve tercümanın hangi kayıtla gireceği ilgili organizatörün koşullarına göre önceden netleştirilmelidir; otomatik giriş hakkı varsayılmaz.</p>`, true),
        sec("Fuardan fabrikaya geçiş planı", `<p>Fuarda tanışılan bir firmanın fabrikasına gitmek gündeme gelirse adresi ve ziyaret tarihini paylaşın. Mevcut programa eklenmesi, ulaşım ve yeni çalışma günleri bakımından ayrıca değerlendirilir. <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti tercümanlığını inceleyin</a>.</p>`),
        sec("Fuar talebi için gerekli bilgiler", `<p>Fuar adı, şehir, ziyaret günleri, ürün veya sektör konusu ve varsa görüşülecek stantlar yeterli başlangıç bilgisidir. İş dilini ve tarihler için uygunluğu değerlendirelim; günlük ücret ile ek masrafları görüştükten sonra programı karşılıklı teyit edelim. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme günlük tercümanlık ücretinden ayrı hesaplanır. Talep göndermek tek başına rezervasyon oluşturmaz.</p>
        <p><a href="/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/">Fuar/fabrika hazırlık kontrol listesi</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a></p>
        ${cta("Fuar günlerimi ve görüşme konularımı paylaş", "/iletisim/")}`, true)
      ]
    },
    zh: {
      path: "/zh/trade-fair-interpreter/",
      crumb: "展会口译",
      title: "中国展会土耳其语口译｜展位介绍与客户洽谈",
      description: "为中国展商与土耳其客户的产品介绍、展位洽谈提供中土双语口译。请提供展会、城市、日期和产品主题，确认人员安排与每日费用。",
      eyebrow: "展会口译",
      h1: "中国展会上的土耳其语口译与展位洽谈",
      lead: "您需要在展位向土耳其客户介绍产品，或陪同土耳其客户按计划访问展位时，可咨询中文—土耳其语现场口译。请提供展会名称、城市、所需日期和主要产品主题。",
      sections: [
        sec("现场可以沟通哪些内容？", `<p>企业介绍、产品说明，以及价格、样品和交期等问题，可以通过口译进行双向沟通。已确定的客户会面或展位清单有助于说明每日安排。服务不包括产品调查、寻找供应商、采购咨询或代替双方作商业决定。</p>
        <div class="callout callout--info"><strong>需要广交会中土口译吗？</strong>请提供广州参会日期及关注的产品类别。<a href="/zh/canton-fair-interpreter/">广交会土耳其语口译 →</a></div>`, true),
        sec("同时进行的会面要分别安排", `<p>如果团队始终一起参加同一场会面，可按该行程评估口译需求。如果成员会在不同展位同时洽谈，一位口译人员无法同时在两个地点服务。请列出各组的时间和地点，以便确认人数及档期。</p>`),
        sec("这是展会现场口译服务", `<p>服务不包括机票、酒店、接送、旅游或展会旅行团组织。口译人员的入场登记或证件，应根据具体展会当时的要求提前明确，不能默认已有入场资格或相关费用已包含在日费内。</p>`, true),
        sec("展会后临时增加工厂访问", `<p>若需要前往展商工厂，请提供工厂地址和拟访问日期。新增访问是否能安排，以及交通和工作日的变化，需另行确认。<a href="/zh/factory-visit-interpreter/">查看工厂访问口译</a>。</p>`),
        sec("发送展会与会面安排", `<p>展会名称、城市、日期、产品类别及已确定的展位或会面，是初次咨询所需的核心信息。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。</p>
        <p><a href="/zh/guides/prepare-factory-and-fair-interpreting/">展会与工厂准备清单</a> · <a href="/zh/daily-rates/">每日费用说明</a></p>
        ${cta("咨询展会口译安排", "/zh/contact/")}`, true)
      ]
    }
  }),

  // --------------------------------------------------------------- canton
  page({
    id: "canton",
    faqIds: ["Q093", "Q094", "Q095", "Q096", "Q100"],
    parent: {
      tr: { name: "Fuar tercümanlığı", path: "/cinde-fuar-tercumani/" },
      "zh-Hans": { name: "展会口译", path: "/zh/trade-fair-interpreter/" }
    },
    tr: {
      path: "/kanton-fuari-tercuman/",
      crumb: "Kanton Fuarı tercümanlığı",
      title: "Kanton Fuarı Tercümanı | Canton Fair Türkçe–Çince",
      description: "Canton Fair görüşmeleriniz için Çince–Türkçe tercümanlık. Fuar dönemi, faz, ziyaret günleri ve ürün grubunu paylaşın; uygunluğu ve günlük teklifi görüşelim.",
      eyebrow: "Kanton Fuarı tercümanı",
      h1: "Kanton Fuarı için Çince–Türkçe tercüman",
      lead: "Kanton Fuarı'nda ürün ve firma görüşmelerinizi Çince–Türkçe yürütmek için, katılacağınız günleri ve görüşme konularını paylaşın. Tercümanlık talebini yalnızca “Kanton'a gidiyorum” bilgisiyle değil, gerçek çalışma programıyla değerlendirelim.",
      sections: [
        sec("Dönem, faz ve ziyaret günlerini birlikte yazın", `<p>Fuar dönemi, katılacağınız faz, ziyaret tarihleri ve ürün grubunu belirtin. Önceden belirlediğiniz firmalar veya stantlar varsa listeye ekleyin. Fazların tarihlerini ve ürün kapsamlarını seyahatinizden önce fuarın güncel resmi bilgisinden doğrulayın. Bu sayfa fuar takvimi olarak kullanılmaz.</p>`, true),
        sec("Stant görüşmelerinde tercümanın rolü", `<p>Ürün özellikleri, numune, fiyat, sipariş miktarı ve teslim sorularının sözlü aktarımı için dil desteği sağlanır. Tercüman ürün seçimini veya satın alma kararını üstlenmez. Hizmet, organizatörün resmi tercüman hizmeti ya da fuar tur paketi olarak sunulmaz.</p>
        <p><a href="/cinde-fuar-tercumani/">Çin'de fuar tercümanlığı</a></p>`),
        sec("Birden fazla faz veya eş zamanlı görüşme", `<p>Aynı tercümanla birden fazla fazda çalışma istiyorsanız bütün tarihleri birlikte belirtin. Fazlar arasındaki boş günlerin, ulaşımın ve diğer giderlerin nasıl ele alınacağı ayrıca teyit edilir. Ekibiniz farklı stantlarda aynı anda görüşecekse bunu da paylaşın; bir kişi iki noktada eş zamanlı bulunamaz.</p>`, true),
        sec("Guangzhou'da fuar ve fabrika günlerini ayırın", `<p>Fuar günleriyle fabrika ziyaretlerini günlük programda ayrı gösterin. Fabrikalar için gerçek adresleri, fuar için görüşme günlerini paylaşın. Tercümanlık; otel, uçak, transfer veya fuar giriş organizasyonu içermez. Hizmet günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. İş dilini, uygunluğu ve teklifi görüştükten sonra programı karşılıklı teyit edelim; talep göndermek tek başına rezervasyon oluşturmaz.</p>
        <p><a href="/cince-tercuman-guangzhou/">Guangzhou'da tercüman</a> · <a href="/cinde-fabrika-ziyareti-tercuman/">Fabrika ziyareti</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a> · <a href="/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/">Görüşme hazırlık rehberi</a></p>
        ${cta("Kanton Fuarı tarihlerimi ve ürün grubumu paylaş", "/iletisim/")}`)
      ]
    },
    zh: {
      path: "/zh/canton-fair-interpreter/",
      crumb: "广交会口译",
      title: "广交会土耳其语口译｜展位洽谈与客户沟通",
      description: "广交会期间接待土耳其客户，可咨询中文—土耳其语现场口译。请提供届次或展会期间、期别、日期和产品类别；每日服务费与额外费用分开确认。",
      eyebrow: "广交会口译",
      h1: "广交会土耳其语口译：为展位洽谈做好语言准备",
      lead: "如果您将在广交会接待土耳其客户，或按既定计划陪同客户进行展位访问，请提供所需日期、期别和产品类别。我们根据实际会谈内容评估中土双语口译安排。",
      sections: [
        sec("不只写“参加广交会”", `<p>请说明展会期间、期别、具体日期及产品主题。已确定的展位、客户会面或访问顺序，也可以一并提供。出行前应通过主办方当期官方信息核对期别、日期和展品范围；本页不作为展会日历使用。</p>`, true),
        sec("围绕产品介绍与客户问题提供口译", `<p>产品特点、样品、价格、起订量及交期等讨论可进行双向口译。服务不包括产品选择、采购决策或交易保证，也不以主办方官方口译服务或参观套餐的名义提供。</p>
        <p><a href="/zh/trade-fair-interpreter/">其他中国展会口译</a></p>`),
        sec("多期别和并行会面需要提前说明", `<p>如希望同一位口译人员参与不同期别，请一次性提供全部日期。是否能连续安排，以及期别之间的空档日、交通和相关费用，需要单独确认。若团队在不同展位同时洽谈，请列出并行安排；一位口译人员不能同时服务两个地点。</p>`, true),
        sec("广州的展会日与工厂日分开列出", `<p>展会安排请写明日期和会谈主题；工厂访问请写明实际地址和会面时段。服务不包含酒店、机票、接送或展会入场组织。口译服务按天计费，市内交通、城际交通、住宿和餐饮费用另行计算。收到您实际发送的需求后，我们会沟通工作语言、人员是否可安排及具体费用，再由双方确认工作安排。发送咨询不等于预订成功。</p>
        <p><a href="/zh/guangzhou-interpreter/">广州口译</a> · <a href="/zh/factory-visit-interpreter/">工厂访问</a> · <a href="/zh/daily-rates/">每日费用</a> · <a href="/zh/guides/prepare-factory-and-fair-interpreting/">会谈准备指南</a></p>
        ${cta("发送广交会口译需求", "/zh/contact/")}`)
      ]
    }
  })
];
