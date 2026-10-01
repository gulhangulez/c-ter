// Blog archive — old TR blog URLs kept at the same path (owner decision 2026-10-01).
// The original texts were not available, so each post was rewritten within the
// current scope: oral Chinese–Turkish interpreting only. No salary figures, no
// recruitment, import, inspection, sourcing, tour or hotel promises.
// TR-only pages: no ZH counterpart, so no hreflang group (single alternate).

const BLOG = { name: "Blog", path: "/blog/" };

const sec = (heading, html, surface = false) => ({ type: "richtext", heading, html, surface });

function post({ id, path, crumb, title, description, eyebrow = "Blog", h1, lead, sections }) {
  return {
    id, primaryService: null,
    locales: {
      tr: {
        path, status: "published", indexable: true,
        title, description,
        schema: { type: "WebPage", crumbs: [BLOG, { name: crumb, path }] },
        blocks: [
          { type: "hero", eyebrow, h1, lead },
          ...sections.map(([heading, html], i) => sec(heading, html, i % 2 === 0)),
          { type: "finalCta" }
        ]
      }
    }
  };
}

const POSTS = [
  {
    id: "blog-chinese-speaking-staff",
    path: "/cince-bilen-eleman/",
    crumb: "Çince bilen eleman mı, tercüman mı?",
    title: "Çince Bilen Eleman mı, Günlük Tercüman mı? | Karar Rehberi",
    description: "Çince bilen kadrolu eleman ile proje bazlı günlük tercüman arasındaki farklar: süreklilik, maliyet kalemleri ve saha ihtiyacına göre karar verme.",
    h1: "Çince bilen eleman mı, günlük tercüman mı?",
    lead: "Çinli tedarikçilerle sürekli yazışan bir firma ile birkaç günlük kurulum veya fabrika ziyareti planlayan bir firmanın ihtiyacı aynı değildir. Bu yazı, iki seçeneği hangi durumda düşünmeniz gerektiğini anlatır.",
    sections: [
      ["Kadrolu Çince bilen eleman ne zaman mantıklıdır?", `<p>Her gün Çinli firmalarla yazışma, telefon görüşmesi, sipariş ve belge takibi yapıyorsanız iş sürekli bir rol gerektirir. Bu durumda Çince bilen bir çalışan firmanın iç süreçlerini öğrenir ve iletişimi kesintisiz yürütür. İşe alım, eğitim ve izin dönemlerinde yerine kimin bakacağı ayrıca planlanmalıdır.</p>`],
      ["Günlük tercüman ne zaman daha uygundur?", `<p>Çin'den gelen teknik ekibin birkaç günlük makine kurulumu, Çin'de belirli tarihlerde fabrika ziyareti veya fuar görüşmeleri gibi dönemsel işlerde ihtiyaç tarih ve yerle sınırlıdır. Bu işler için gün bazında sözlü tercümanlık talep etmek daha esnektir. Hizmet günlük ücretlendirilir; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.</p>`],
      ["Karar verirken sorulacak sorular", `<ul>
        <li>Çince iletişim haftada kaç gün gerekiyor?</li>
        <li>İhtiyaç yazışma mı, yoksa sahada yüz yüze sözlü iletişim mi?</li>
        <li>Görüşmeler teknik bir konu mu içeriyor (kurulum, test, kullanım eğitimi)?</li>
        <li>Görüşmeler Türkiye'de mi, Çin'de mi yapılacak?</li>
      </ul>
      <p>Biz işe alım veya personel temini yapmıyoruz. Sahada belirli günler için Çince–Türkçe sözlü tercümanlık sağlıyoruz. <a href="/rehber/cince-tercuman-nasil-secilir/">Uygun tercümanı nasıl seçeceğinizi okuyun</a> veya <a href="/cince-tercuman-fiyatlari/">günlük ücret kapsamına bakın</a>.</p>`]
    ]
  },
  {
    id: "blog-interpreter-pay",
    path: "/cince-tercuman-maaslari/",
    crumb: "Çince tercüman ücretleri neye göre değişir?",
    title: "Çince Tercüman Maaşları ve Günlük Ücretler Neye Göre Değişir?",
    description: "Çince tercüman maaşı ve günlük tercümanlık ücretini etkileyen etkenler: iş türü, teknik konu, şehir, süre ve ayrıca karşılanan masraflar. Güncel teklif nasıl istenir?",
    h1: "Çince tercüman ücretleri neye göre değişir?",
    lead: "İnternette dolaşan maaş rakamları çoğu zaman tarih, şehir ve iş türü belirtilmeden paylaşılır. Bu yüzden burada rakam vermek yerine, kadrolu maaşı ve günlük tercümanlık ücretini neyin belirlediğini açıklıyoruz.",
    sections: [
      ["Kadrolu maaş ile günlük ücret aynı şey değildir", `<p>Bir firmada çalışan Çince bilen personelin maaşı; görev tanımına, deneyime, şehre ve işverenin koşullarına göre belirlenir. Proje bazlı sözlü tercümanlıkta ise ücret gün üzerinden konuşulur ve hizmet verilen günlere bağlıdır. İki rakamı birbiriyle doğrudan karşılaştırmak yanıltıcı olabilir.</p>`],
      ["Günlük tercümanlık ücretini etkileyen etkenler", `<ul>
        <li><strong>İş türü:</strong> makine kurulumu, fabrika ziyareti, fuar veya toplantı.</li>
        <li><strong>Konu:</strong> teknik terim yoğunluğu ve hazırlık ihtiyacı.</li>
        <li><strong>Yer ve süre:</strong> şehir, çalışma noktası, gün sayısı ve günlük çalışma saatleri.</li>
        <li><strong>Ayrı masraflar:</strong> şehir içi ve şehir dışı ulaşım, konaklama, yeme-içme.</li>
      </ul>`],
      ["Güncel teklif nasıl alınır?", `<p>Hizmet türünü, şehir veya tesis konumunu, tarihleri ve kısa ihtiyacınızı paylaşın. Uygunluğu ve günlük ücreti bu bilgilerle değerlendirip size yazılı olarak iletelim. <a href="/cince-tercuman-fiyatlari/">Günlük ücret sayfası</a> fiyatın nasıl oluştuğunu ve neyin ayrıca hesaplandığını anlatır.</p>`]
    ]
  },
  {
    id: "blog-check-chinese-level",
    path: "/cince-tercuman-arayanlar-adaylarin-cinceyi-iyi-bildiginden-nasil-emin-olacaklar/",
    crumb: "Adayın Çince seviyesini nasıl anlarsınız?",
    title: "Çince Tercüman Adayının Dil Seviyesinden Nasıl Emin Olunur?",
    description: "Çince tercüman ararken adayın Çince ve Türkçe seviyesini, konu bilgisini ve saha deneyimini anlamak için uygulanabilir kontrol adımları.",
    h1: "Çince tercüman arayanlar adayın Çinceyi iyi bildiğinden nasıl emin olur?",
    lead: "Bir belge veya sertifika tek başına sahadaki performansı göstermez. Görüşmeden önce birkaç basit kontrol, adayın gerçek ihtiyacınıza uygun olup olmadığını anlamanıza yardımcı olur.",
    sections: [
      ["İki yönlü kısa bir deneme yapın", `<p>Çince bilen bir iş ortağınız varsa adayla kısa bir görüşme yapmasını isteyin. Aday hem Çinceden Türkçeye hem Türkçeden Çinceye aktarım yapsın. Sahadaki iş iki yönlüdür; yalnızca bir yönde akıcı olmak yetmez.</p>`],
      ["Konunuzla ilgili terimleri sorun", `<p>Makine kurulumu, kalıp, elektrik panosu veya tekstil gibi bir alanda çalışacaksanız işinizde geçen beş on terimi önceden belirleyin ve adaydan bunları açıklamasını isteyin. Bilmediği bir terimi sormayı ve teyit etmeyi bilmesi de önemli bir işarettir.</p>`],
      ["Saha deneyimini somut sorularla anlayın", `<ul>
        <li>Daha önce hangi tür programlarda sözlü tercümanlık yaptı?</li>
        <li>Teknik ekiple uzun çalışma günlerinde nasıl ara verildi?</li>
        <li>Anlaşılmayan bir açıklama olduğunda ne yapıyor?</li>
      </ul>
      <p>Daha ayrıntılı kontrol listesi için <a href="/rehber/cince-tercuman-nasil-secilir/">Çince tercüman nasıl seçilir rehberini</a> okuyun. Belirli tarihler için sözlü tercümanlık ihtiyacınız varsa <a href="/iletisim/">talebinizi paylaşın</a>.</p>`]
    ]
  },
  {
    id: "blog-china-cities",
    path: "/cinin-sehirleri/",
    crumb: "Çin'in iş şehirleri",
    title: "Çin'in Şehirleri: İş Ziyareti Planlarken Bilinmesi Gerekenler",
    description: "Guangzhou, Shenzhen, Yiwu, Shanghai ve Beijing gibi Çin şehirlerine iş ziyareti planlarken program, ulaşım ve tercüman talebinde dikkat edilecek noktalar.",
    h1: "Çin'in şehirleri: iş ziyareti planlarken bilinmesi gerekenler",
    lead: "Çin'e iş ziyareti genellikle birden fazla şehri kapsar. Fuar bir şehirde, fabrika başka bir şehirde olabilir. Programı şehirlere göre ayırmak hem ulaşımı hem tercüman planlamasını kolaylaştırır.",
    sections: [
      ["Sık ziyaret edilen iş şehirleri", `<ul>
        <li><strong>Guangzhou (广州):</strong> Kanton Fuarı'nın yapıldığı şehirdir; fuar günleri ile fabrika ziyaretleri çoğu zaman aynı seyahate sığdırılır. <a href="/cince-tercuman-guangzhou/">Guangzhou sayfası</a></li>
        <li><strong>Shenzhen (深圳):</strong> elektronik ve teknoloji üreticileriyle görüşmeler için sık tercih edilir. <a href="/cince-tercuman-shenzhen/">Shenzhen sayfası</a></li>
        <li><strong>Yiwu (义乌):</strong> küçük ev eşyası ve tüketim ürünleri pazarıyla bilinir. <a href="/cince-tercuman-yiwu/">Yiwu sayfası</a></li>
        <li><strong>Shanghai (上海):</strong> büyük liman ve ticaret merkezi; çevre şehirlerdeki fabrikalara geçiş yaygındır. <a href="/cince-tercuman-shanghai-sanghay/">Shanghai sayfası</a></li>
        <li><strong>Beijing (北京):</strong> başkent; kurumsal toplantılar ve merkez ofis görüşmeleri burada olabilir. <a href="/cince-tercuman-beijing-pekin/">Beijing sayfası</a></li>
      </ul>`],
      ["Şehirler arası geçişi programa yazın", `<p>Şehirler arası mesafeler uzun olabilir; hızlı tren veya uçakla geçilen gün çoğu zaman tam bir çalışma günü değildir. Tercüman talebinde her şehirdeki çalışma günlerini, buluşma noktalarını ve geçiş günlerini ayrı belirtin. Seyahat, vize, otel ve tur organizasyonu kapsamımızda değildir.</p>`],
      ["Tercüman talebinde ne paylaşmalı?", `<p>Şehir, görüşme adresi, tarih ve gündemi paylaşın. Guangzhou, Shanghai ve Beijing hizmet ağımızdadır; diğer şehirler tarih ve konuma göre ayrıca değerlendirilir. <a href="/hizmet-bolgeleri/">Hizmet bölgelerine</a> ve <a href="/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/">fabrika ve fuar hazırlık rehberine</a> bakın.</p>`]
    ]
  },
  {
    id: "blog-machine-from-china",
    path: "/cinden-makina-almak-getirmek/",
    crumb: "Çin'den makine alırken iletişim",
    title: "Çin'den Makine Almak: Görüşme ve Kurulumda İletişim",
    description: "Çin'den makine alırken fabrika görüşmesi, teknik şartname ve Türkiye'de kurulum aşamalarında iletişimi planlamak için pratik notlar.",
    h1: "Çin'den makine almak: görüşme ve kurulumda iletişim",
    lead: "Çin'den makine alımında en çok sorun çıkan noktalardan biri iletişimdir: teknik şartnamenin karşılıklı aynı anlaşılması ve kurulum sırasında ekipler arasındaki konuşma. Bu yazı, iletişimi hangi aşamada nasıl planlayabileceğinizi anlatır.",
    sections: [
      ["Önce kapsam: biz neyi yapıyoruz, neyi yapmıyoruz?", `<p>Biz Çince–Türkçe sözlü tercümanlık yapıyoruz. Tedarikçi bulma, makine seçimi, kalite denetimi, satın alma, ithalat, gümrük veya nakliye işlemleri kapsamımızda değildir. Bu işler için yetkili firmalar ve gümrük müşavirinizle çalışmanız gerekir.</p>`],
      ["Fabrika görüşmesinde iletişim", `<p>Makineyi üretici fabrikada görmeye gidiyorsanız görüşme gündemini, sormak istediğiniz teknik soruları ve makinenin kullanılacağı ürün bilgisini önceden yazın. Tercüman görüşmedeki sözlü iletişimi aktarır; teknik değerlendirme ve satın alma kararı sizindir. <a href="/cinde-fabrika-ziyareti-tercuman/">Çin'de fabrika ziyareti tercümanlığı</a></p>`],
      ["Türkiye'de kurulum ve devreye alma", `<p>Makine geldikten sonra üreticinin teknik ekibi kurulum için Türkiye'ye gelebilir. Bu aşamada kurulum adımları, test soruları ve operatör eğitimi sırasında sözlü tercümanlık talep edebilirsiniz. Kurulum ve güvenlik kararları yetkili teknik ekiplerdedir. <a href="/makine-kurulumu-cince-tercuman/">Makine kurulumu tercümanlığı</a> · <a href="/rehber/makine-kurulumu-tercuman-hazirligi/">kurulum hazırlık rehberi</a></p>`]
    ]
  }
];

const posts = POSTS.map(post);

const index = {
  id: "blog",
  primaryService: null,
  locales: {
    tr: {
      path: "/blog/", status: "published", indexable: true,
      title: "Blog | Çince Tercümanlık Yazıları",
      description: "Çince tercüman seçimi, ücretlerin neye göre değiştiği, Çin'in iş şehirleri ve Çin'den makine alımında iletişim üzerine yazılar.",
      schema: { type: "CollectionPage", crumbs: [BLOG] },
      blocks: [
        { type: "hero", eyebrow: "Blog", h1: "Çince tercümanlık üzerine yazılar", lead: "Tercüman seçimi, saha programı ve Çin ile iş görüşmeleri hakkında kısa yazılar. Talep hazırlığı için adım adım listeler arıyorsanız hazırlık rehberlerine bakın." },
        {
          type: "cards", heading: "Yazılar", columns: 2,
          items: POSTS.map((p) => ({ icon: "book", title: p.h1, href: p.path, cta: "Yazıyı oku" }))
        },
        { type: "richtext", surface: true, html: `<p><a href="/hazirlik-rehberleri/">Hazırlık rehberleri</a>: tercüman talebi, makine kurulumu, fabrika ve fuar ziyareti için kopyalanabilir şablonlar.</p>` },
        { type: "finalCta" }
      ]
    }
  }
};

export const blog = [index, ...posts];
