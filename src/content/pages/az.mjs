// AZ trilingual deliverable — /az/, /az/suallar/, /az/elaqe/. Plan §54–58.
// Language honesty: an AZ site does NOT guarantee an Azerbaijani-speaking
// interpreter. Core pair is Chinese–Turkish. AZ is a customer market, not a
// service location (no Baku office / local number / standing team).

const AZ_LANGUAGE_NOTE = "Əsas iş dillərimiz Çin dili və türk dilidir. Türk dilində ünsiyyət sizin üçün uyğundursa, bu qaydada işləyə bilərik. Tərcüməçinin mütləq azərbaycanca danışmasını istəyirsinizsə, bunu əvvəlcədən bildirin; həmin dil üzrə uyğunluğu ayrıca dəqiqləşdirməliyik.";

const azIds = Array.from({ length: 30 }, (_, i) => "AZ" + String(i + 1).padStart(3, "0"));

const landing = {
  id: "az-home",
  primaryService: null,
  locales: {
    az: {
      path: "/az/",
      status: "published",
      indexable: true,
      title: "Çində tərcüməçi | Sərgi, zavod və texniki görüşlər",
      description: "Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması üçün şifahi tərcümə. İş dilini, tarixləri və günlük qiyməti dəqiqləşdirin.",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "Çində tərcüməçi", inLanguage: "az", url: "https://www.cince-tercuman.com/az/" },
      blocks: [
        {
          type: "hero",
          eyebrow: "Azərbaycandan Çin və Türkiyəyə işgüzar səfər edənlər üçün",
          h1: "Çində tərcüməçi: zavod və sərgi görüşlərində dil dəstəyi",
          lead: "Çində zavod və sərgi ziyarətləri, Türkiyədə isə Çinli texniki heyətlə avadanlıq quraşdırılması zamanı şifahi tərcümə dəstəyi göstəririk. Səfərinizin məqsədini, şəhəri və tarixləri bildirin; iş dilini və tərcüməçinin həmin günlərdə işləyə biləcəyini əvvəlcədən dəqiqləşdirək.",
          ctas: ["quote", "whatsapp"],
          card: {
            title: "Görüşməniz harada və nə vaxtdır?",
            intro: "Hansı şəhərə gedirsiniz? Zavod ziyarəti, sərgi, yoxsa avadanlıq quraşdırılması üçün tərcüməçi lazımdır? Tarixləri və hansı dildə rahat ünsiyyət qurduğunuzu bildirin.",
            ctas: [{ kind: "quote", label: "Müraciətinizi hazırlayın" }]
          }
        },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        { type: "priceNote" },
        {
          type: "cards",
          heading: "Hansı iş üçün tərcüməçi axtarırsınız?",
          columns: 4,
          items: [
            { icon: "chat", title: "Çində şifahi tərcümə", text: "Əvvəlcədən planlaşdırdığınız görüş və səfər proqramında Çin dilində ünsiyyət üçün tərcüməçi dəstəyi. Şəhəri, görüşün mövzusunu və iş dilini əvvəlcədən dəqiqləşdiririk." },
            { icon: "wrench", title: "Avadanlıq quraşdırılması zamanı tərcümə", text: "Çinli mühəndislərlə müəssisənizin əməkdaşları arasında quraşdırma, sınaq və istismara vermə mərhələlərində şifahi ünsiyyət. Tərcüməçi texniki heyətin yerini tutmur." },
            { icon: "factory", title: "Çində zavod ziyarəti", text: "Seçdiyiniz zavodda istehsal prosesi, məhsul və sifariş şərtləri barədə görüşlərə tərcüməçi ilə qatılın. Ziyarətin məqsədini və görüşəcəyiniz müəssisəni əvvəlcədən paylaşın." },
            { icon: "booth", title: "Çində sərgi ziyarəti", text: "Canton Fair və Çindəki digər sərgilərdə stend görüşmələri üçün şifahi tərcümə. Məhsul qrupunu, iştirak edəcəyiniz sərgini və günləri bildirin." }
          ]
        },
        {
          type: "richtext",
          surface: true,
          heading: "Çində Azərbaycan dilli tərcüməçi axtarırsınız?",
          html: `<p>Əvvəlcə sizin üçün uyğun iş dilini müəyyənləşdirək. Əsas xidmətimiz Çin dili ilə türk dili arasında şifahi tərcümədir. Türk dilində görüşməni rahat izləyə bilirsinizsə, ünsiyyəti bu qaydada qura bilərik.</p>
          <p>Tərcüməçinin azərbaycanca danışması sizin üçün mütləq şərtdirsə, bunu müraciətdə ayrıca seçin. Belə bir tərcüməçinin mövcudluğunu və dil uyğunluğunu yoxlamadan sifarişi təsdiqləmirik. Saytın Azərbaycan dilində olması hər tərcüməçinin bu dili bildiyi mənasına gəlmir.</p>
          <p><a class="button-ghost" href="/az/elaqe/#is-dili">Dil tələbinizi bildirin</a></p>`
        },
        {
          type: "richtext",
          heading: "Çində görüşmələrinizə aydın proqramla gedin",
          html: `<p>Çin dili tərcüməçisi axtararkən yalnız şəhəri deyil, görüşün mövzusunu da bildirmək vacibdir. Məhsulu müzakirə edəcəksiniz, istehsal xəttinə baxacaqsınız, yoxsa texniki izahları dinləyəcəksiniz? Bu məlumatlar uyğun tərcüməçinin seçilməsinə və hazırlığına kömək edir.</p>
          <p>Görüşəcəyiniz tərəfi və proqramı siz müəyyən edirsiniz. Biz razılaşdırılmış görüşlərdə Çin dili ilə türk dili arasında şifahi ünsiyyətə dəstək veririk; iş dilinin sizin üçün uyğunluğunu əvvəlcədən yoxlayırıq.</p>
          <h3>Çində zavod ziyarəti üçün tərcüməçi</h3>
          <p>Ziyarət edəcəyiniz zavodun yerini, məhsul qrupunu və görüşdə soruşmaq istədiyiniz əsas sualları paylaşın. İstehsal xəttinin izahı, minimum sifariş miqdarı, nümunə, qiymət və çatdırılma müddəti barədə danışarkən qarşılıqlı ünsiyyətə kömək edirik.</p>
          <p>Bu xidmət zavod auditi və ya məhsul keyfiyyətinə zəmanət deyil. Ticarət qərarları sizə aiddir; tərcüməçi tərəflərin dediklərini və suallarını bir-birinə çatdırır.</p>
          <p class="muted">Zavodun yeri · Məhsul qrupu · Görüş tarixi · Əsas suallar</p>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Guangzhou səfəriniz və Canton Fair",
          html: `<p>Guangzhou səfərinizdə sərgi ilə yanaşı zavod görüşləri də planlaşdırırsınızsa, hər işin yerini və gününü ayrıca bildirin. Sərgi salonu, zavod və qalacağınız yer arasındakı gediş-gəlişi nəzərə alaraq tərcüməçinin proqramını dəqiqləşdirək.</p>
          <h3>Canton Fair üçün tərcüməçi dəstəyi</h3>
          <p>Kanton Sərgisində — Canton Fair — stendləri gəzərkən məhsulun xüsusiyyətləri, sifariş miqdarı, nümunə və təhvil müddəti barədə suallarınızı qarşı tərəfə çatdırmağa kömək edirik. İştirak edəcəyiniz mərhələni, tarixləri və məhsul qruplarını əvvəlcədən paylaşın.</p>
          <p>Komandanız eyni vaxtda müxtəlif stendlərdə görüşəcəksə, bunu da bildirin. Bir tərcüməçi ayrı yerlərdə keçirilən eyni vaxtlı görüşlərə birlikdə qatıla bilməz.</p>
          <p class="muted">Xidmət sərgi görüşmələrində şifahi tərcüməni əhatə edir. Səfər və sərgi iştirakının təşkili bu xidmətə daxil deyil.</p>`
        },
        {
          type: "richtext",
          heading: "Çindən gələn mühəndislər üçün tərcüməçi",
          html: `<p>Türkiyədəki müəssisənizə Çindən texniki heyət gəlirsə, avadanlığın quraşdırılması və istismara verilməsi zamanı Çin dili ilə türk dili arasında şifahi tərcümə üçün müraciət edə bilərsiniz. Avadanlığın növünü, işin mərhələsini, şəhəri və tarixləri bildirin.</p>
          <p>Tərcüməçi mühəndislərin izahlarını, müəssisə əməkdaşlarının suallarını və qarşılıqlı cavabları çatdırır. Avadanlığı özü quraşdırmır, texniki qərar vermir və işin təhlükəsizliyinə dair mühəndislik məsuliyyəti daşımır.</p>
          <div class="callout"><strong>Ölkə sərhədi:</strong> Hazırkı xidmət planımız Türkiyə və Çini əhatə edir. İş Azərbaycanda görüləcəksə, məkanı əvvəlcədən bildirin; bu, ayrıca qiymətləndirilməli olan müraciətdir və xidmətin həmin ölkədə mövcudluğu hələ təsdiqlənmiş sayılmır.</div>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Şəhəri deyil, işin görüləcəyi yeri də bildirin",
          html: `<p><strong>Çində:</strong> Guangzhou, Şanxay (Shanghai) və Pekin (Beijing) üzrə tərcüməçi şəbəkəmiz var. Bu mərkəzlərə yaxın şəhərlərdəki müraciətləri tarix, məsafə və tərcüməçi uyğunluğuna görə qiymətləndiririk.</p>
          <p><strong>Türkiyədə:</strong> İstanbul, Tekirdağ, Düzce, Ankara, Kayseri və Gaziantepdə, eləcə də yaxın bölgələrdəki işlər üçün müraciət edə bilərsiniz. Tərcüməçinin faktiki uyğunluğu iş yeri və tarixlər dəqiqləşdikdən sonra təsdiqlənir.</p>
          <p class="muted">Şəbəkəmizin olması hər şəhərdə ayrıca ofisimiz və ya daim hazır tərcüməçimiz olduğu demək deyil.</p>`
        },
        {
          type: "steps",
          heading: "Tərcüməçi sifarişini necə planlaşdırırıq?",
          items: [
            { title: "Proqramınızı paylaşın", text: "Xidməti, ölkəni, şəhəri və tarixləri bildirin. Görüşün məqsədini qısaca yazın." },
            { title: "İş dilini və uyğunluğu dəqiqləşdirək", text: "Türk dilində ünsiyyətin sizin üçün uyğun olub-olmadığını və ya mütləq Azərbaycan dilində danışan tərcüməçiyə ehtiyacınızı qeyd edin." },
            { title: "Günlük şərtləri razılaşdıraq", text: "Tərcüməçinin uyğunluğu, günlük iş saatları, xidmət haqqı və ayrıca xərclər dəqiqləşdikdən sonra sifarişin təsdiq qaydasını razılaşdırırıq. Sadəcə mesaj göndərmək sifarişi avtomatik təsdiqləmir." }
          ]
        },
        {
          type: "richtext",
          heading: "Günlük qiymət nəyə əsasən müəyyən olunur?",
          html: `<p>Qiymət işin görüləcəyi şəhərə, tarixlərə, mövzuya və tərcüməçinin uyğunluğuna görə dəqiqləşdirilir. Bir neçə günlük proqramda da xidmət haqqı gün hesabı ilə verilir.</p>
          <p>Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri ayrıca hesablanır. Günlük iş müddəti, əlavə vaxt və ödəniş qaydası təklifdə aydınlaşdırılır. Saytda göstərilməyən saat, məbləğ və ya valyutanı əvvəlcədən qəbul etməyin.</p>`
        },
        { type: "faq", heading: "Qısa suallar", intro: "Tam cavabların tək mənbəyi suallar səhifəsidir.", ids: ["AZ002", "AZ004", "AZ007", "AZ017", "AZ015"] },
        { type: "finalCta" }
      ]
    }
  }
};

const suallar = {
  id: "az-faq",
  primaryService: null,
  locales: {
    az: {
      path: "/az/suallar/",
      status: "published",
      indexable: true,
      title: "Çində tərcüməçi: suallar və cavablar | Çince Tercüman",
      description: "Çində tərcüməçi, zavod və sərgi ziyarəti, avadanlıq quraşdırılması, iş dili, günlük qiymət və əlavə xərclər barədə suallarınıza cavablar.",
      jsonld: { "@context": "https://schema.org", "@type": "WebPage", name: "Suallar və cavablar", inLanguage: "az" },
      blocks: [
        { type: "hero", eyebrow: "Suallar və cavablar", h1: "Çin dili tərcüməçisi barədə suallar və cavablar", lead: "Səfərinizə və ya texniki görüşünüzə başlamazdan əvvəl xidmətin sərhədlərini, iş dilini və ayrıca xərcləri bilmək vacibdir. Burada ən çox dəqiqləşdirilən mövzuları bir araya topladıq.", ctas: ["quote", "whatsapp"] },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        { type: "faq", heading: "Xidmət və iş dili", ids: azIds.slice(0, 5) },
        { type: "faq", heading: "Çində şəhərlər, zavodlar və sərgilər", ids: azIds.slice(5, 10) },
        { type: "faq", heading: "Avadanlıq quraşdırılması və xidmət yeri", ids: azIds.slice(10, 15) },
        { type: "faq", heading: "Günlük qiymət və əlavə xərclər", ids: azIds.slice(15, 21) },
        { type: "faq", heading: "Sifariş və proqram dəyişikliyi", ids: azIds.slice(21, 26) },
        { type: "faq", heading: "Hazırlıq və əlaqə", ids: azIds.slice(26, 30) },
        { type: "finalCta" }
      ]
    }
  }
};

const elaqe = {
  id: "az-contact",
  primaryService: null,
  locales: {
    az: {
      path: "/az/elaqe/",
      status: "published",
      indexable: true,
      title: "Çin dili tərcüməçisi üçün müraciət | Çince Tercüman",
      description: "Şəhəri, tarixləri, xidmət növünü və dil tələbinizi bildirin. Çin dili tərcüməçisi üçün günlük şərtləri WhatsApp və ya e-poçtla dəqiqləşdirin.",
      jsonld: { "@context": "https://schema.org", "@type": "ContactPage", name: "Əlaqə", inLanguage: "az" },
      blocks: [
        { type: "hero", eyebrow: "Əlaqə", h1: "Proqramınızı yazın, iş dilini və qiyməti dəqiqləşdirək", lead: "Hansı ölkədə və şəhərdə, hansı tarixlərdə tərcüməçiyə ehtiyacınız var? Görüşün məqsədini və hansı dildə rahat ünsiyyət qurduğunuzu bildirin. Müraciətiniz əsasında tərcüməçinin uyğunluğunu və günlük şərtləri dəqiqləşdirək." },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        { type: "priceNote" },
        { type: "contactCards" },
        { type: "callout", html: `Formadan istifadə etmədən də yaza bilərsiniz. Mesajınızda şəhəri, tarixləri və iş dilinə dair tələbinizi qeyd edin. Nömrələrimiz Türkiyə nömrələridir; Azərbaycanda yerli ofis və ya yerli telefon nömrəsi göstərmirik.` },
        { type: "quoteForm", languageRadios: true, defaultCountry: "CN" },
        { type: "faq", heading: "Qısa suallar", ids: ["AZ029", "AZ023", "AZ030"] }
      ]
    }
  }
};

// The AZ landing and AZ contact are true hreflang alternates of the home and
// contact groups (§61: 3-way hreflang on entry + contact). They are merged into
// those groups in pages.mjs. The AZ FAQ has no TR/ZH equivalent and stays standalone.
export const azHomeLocale = landing.locales.az;
export const azContactLocale = elaqe.locales.az;
export const azFaqPage = suallar;

// Standalone list (kept for reference / tests). pages.mjs performs the merge.
export const azPages = [suallar];
