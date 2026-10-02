// AZ trilingual deliverable — /az/, /az/suallar/, /az/elaqe/. Plan §6.20–6.22.
// Language honesty: an AZ site does NOT guarantee an Azerbaijani-speaking
// interpreter. Core pair is Chinese–Turkish. AZ is a customer market, not a
// service location (no Baku office / local number / standing team).
// One price note per page: where the page text already states the daily fee
// and separate expenses, no extra priceNote block is used.

// Mandatory language note (§6.1) — identical on all three AZ pages.
const AZ_LANGUAGE_NOTE = "Əsas iş dillərimiz Çin dili və türk dilidir. Saytın Azərbaycan dilində olması tərcüməçinin Azərbaycan dilini bildiyi anlamına gəlmir. Türk dilində ünsiyyətin sizin üçün uyğun olduğunu açıq şəkildə təsdiqləməlisiniz. Azərbaycan dili mütləq lazımdırsa, bunu ayrıca qeyd edin; dil uyğunluğu təsdiqlənmədən sifariş verilmiş sayılmır.";

const azIds = Array.from({ length: 30 }, (_, i) => "AZ" + String(i + 1).padStart(3, "0"));

const AZ_CTAS = [
  { kind: "quote", label: "Uyğunluq və qiymət təklifi soruşun" },
  { kind: "whatsapp", label: "WhatsApp-da yazın" }
];

const landing = {
  id: "az-home",
  primaryService: null,
  locales: {
    az: {
      path: "/az/",
      status: "published",
      indexable: true,
      title: "Çində Tərcüməçi | Çin–Türk Dili üzrə Şifahi Tərcümə",
      description: "Çində görüş, zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması üçün Çin–türk dili üzrə şifahi tərcümə. Dil uyğunluğunu, tarixləri və günlük haqqı soruşun.",
      schema: { type: "WebPage", crumbs: [] },
      blocks: [
        {
          type: "hero",
          eyebrow: "Azərbaycandan Çin və Türkiyəyə işgüzar səfər edənlər üçün",
          h1: "Çində görüş, zavod və sərgi ziyarətləri üçün tərcüməçi",
          lead: "Çində əvvəlcədən planlaşdırdığınız görüşlərdə və Türkiyədə Çinli texniki heyətlə avadanlıq quraşdırılması zamanı şifahi ünsiyyət üçün müraciət edə bilərsiniz. Xidməti, şəhəri, tarixləri və qısa ehtiyacınızı bildirin. İş dilinin sizin üçün uyğunluğunu xidmət təsdiqlənməzdən əvvəl ayrıca dəqiqləşdirək.",
          ctas: AZ_CTAS
        },
        { type: "logos", heading: "Əvvəllər şifahi tərcümə dəstəyi verdiyimiz şirkətlərdən bəziləri" },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        {
          type: "cards",
          heading: "Hansı işlər üçün müraciət edə bilərsiniz?",
          columns: 4,
          items: [
            { icon: "chat", title: "Çində planlaşdırılmış görüşlər", text: "Əvvəlcədən müəyyən etdiyiniz görüşlərdə Çin dili ilə türk dili arasında şifahi ünsiyyət. Məhsul və ya tərəfdaş axtarışı, ticarət məsləhəti və idxal xidməti təqdim etmirik." },
            { icon: "wrench", title: "Türkiyədə avadanlıq quraşdırılması", text: "Çinli texniki heyətin quraşdırma, sınaq və istifadə ilə bağlı izahlarının, müəssisə əməkdaşlarının isə suallarının qarşılıqlı çatdırılması. Avadanlığı tərcüməçi quraşdırmır və texniki qərar vermir." },
            { icon: "factory", title: "Çində zavod ziyarəti", text: "Sizin seçdiyiniz zavodda məhsul, istehsal prosesi və görüş gündəmi barədə şifahi tərcümə. Bu xidmət zavod auditi, keyfiyyət yoxlaması və ya məhsula zəmanət deyil." },
            { icon: "booth", title: "Sərgi və stend görüşləri", text: "Müəyyən etdiyiniz sərgidə məhsul təqdimatı və stend danışıqları üçün dil dəstəyi. Bilet, otel, transfer və tur təşkili xidmətə daxil deyil." }
          ]
        },
        {
          type: "richtext",
          surface: true,
          heading: "Çində Azərbaycan dilli tərcüməçi axtarırsınız?",
          html: `<p>Azərbaycan dili görüşün mütləq iş dili olmalıdırsa, bunu əlaqə formasında ayrıca seçin. Türk dilində işləməyə razılığınızı avtomatik qəbul etmirik. Türk dilində sualları və cavabları rahat izləyə biləcəyinizi açıq şəkildə təsdiqləməyiniz lazımdır. Azərbaycan dili üzrə uyğunluq ayrıca təsdiqlənməyibsə, həmin tələbin qarşılanacağına söz vermirik.</p>
          <p><a class="button-ghost" href="/az/elaqe/#is-dili">Dil tələbinizi bildirin</a></p>`
        },
        {
          type: "richtext",
          heading: "Guangzhou və Canton Fair proqramı",
          html: `<p>Sərginin mərhələsini, iştirak günlərinizi və məhsul qrupunu qeyd edin. Eyni gün zavoda da gedəcəksinizsə, onun ünvanını ayrıca yazın. Komandanız müxtəlif stendlərdə eyni vaxtda görüşəcəksə, bir tərcüməçi hər iki yerdə ola bilməz; paralel görüşləri əvvəlcədən bildirin.</p>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Xidmət harada planlaşdırılır?",
          html: `<p>Çində Guangzhou, Şanxay (Shanghai) və Pekin (Beijing); Türkiyədə İstanbul, Tekirdağ, Düzce, Ankara, Kayseri və Gaziantep xidmət şəbəkəsində olan şəhərlərdir. Hər müraciət tarixə, faktiki iş yerinə və uyğunluğa görə qiymətləndirilir. Şəhər siyahısı hər şəhərdə ofis və ya daim hazır tərcüməçi olduğu demək deyil. Yaxın bölgələr üçün də konkret konumu paylaşa bilərsiniz.</p>
          <p>Azərbaycandakı müəssisədə görüləcək iş ayrıca qiymətləndirilməlidir. Azərbaycanda ofis və ya hazır heyət vədi vermirik; saytın Azərbaycan dilində olması belə bir mövcudluğu təsdiqləmir.</p>`
        },
        {
          type: "richtext",
          heading: "Günlük haqq və müraciət qaydası",
          html: `<p>Xidmət günlük əsasda planlaşdırılır. Nəqliyyat, qalma və yemək-içmək ayrıca hesablanır. Proqramı paylaşın, iş dilini dəqiqləşdirək, sonra uyğunluq və günlük şərtləri qarşılıqlı təsdiqləyək. İlkin mesaj sifariş təsdiqi deyil.</p>
          <p><a class="button-primary" href="/az/elaqe/">Uyğunluq və qiymət təklifi soruşun</a></p>
          <p><a href="/az/suallar/">Suallar və cavablar</a> · <a href="/az/elaqe/#is-dili">Əlaqə və dil tələbi</a></p>`
        },
        { type: "faq", heading: "Qısa suallar", ids: ["AZ002", "AZ004", "AZ007", "AZ017", "AZ015"] },
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
      title: "Çin Dili Tərcüməçisi Haqqında Suallar | Dil, Xərc və Proqram",
      description: "Çində və Türkiyədə şifahi tərcümə, Azərbaycan dili tələbi, günlük haqq, əlavə xərclər və görüş proqramı haqqında suallar. Əsas iş dilləri Çin dili və türk dilidir.",
      schema: { type: "WebPage", crumbs: [{ name: "Suallar və cavablar", path: "/az/suallar/" }] },
      blocks: [
        { type: "hero", eyebrow: "Suallar və cavablar", h1: "Tərcüməçi sorğusundan əvvəl suallarınız", lead: "Hansı iş üçün müraciət edə biləcəyinizi, iş dilinin necə dəqiqləşdirildiyini və günlük haqqdan ayrıca hansı xərclərin hesablandığını bu səhifədə tapa bilərsiniz. Müraciətinizə uyğun cavab üçün şəhəri, tarixləri və ehtiyacınızı yazın.", ctas: AZ_CTAS },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        { type: "richtext", html: `<p>Aşağıdakı bölmələrdə xidmətin əhatəsi, iş dili, Çin proqramı, texniki heyətlə iş, günlük xərc və müraciət qaydası üzrə cavabları tapa bilərsiniz. Öz proqramınıza aid məsələ aydın deyilsə, şəhəri, tarixləri və dil tələbinizi bizə yazın.</p>` },
        { type: "faq", heading: "Xidmət və iş dili", intro: "Çin dili ilə türk dili arasında şifahi tərcümənin hansı işləri əhatə etdiyini və iş dilinin sizin üçün uyğunluğunu necə dəqiqləşdirəcəyinizi öyrənin. Azərbaycan dili mütləq lazımdırsa, bunu ayrıca bildirin.", ids: azIds.slice(0, 5) },
        { type: "faq", heading: "Çində şəhərlər, zavodlar və sərgilər", intro: "Çində görüş, seçdiyiniz zavoda ziyarət və sərgi proqramı üçün hansı məlumatların lazım olduğunu öyrənin. Bir neçə ünvan varsa, onları günlər üzrə paylaşın; tərcüməçiliyin audit və keyfiyyət yoxlamasından fərqini nəzərə alın.", ids: azIds.slice(5, 10) },
        { type: "faq", heading: "Avadanlıq quraşdırılması və xidmət yeri", intro: "Türkiyədə Çinli texniki heyətlə iş üçün avadanlığı, faktiki iş yerini və tarixləri bildirin. Tərcüməçi şifahi ünsiyyəti dəstəkləyir; avadanlığı quraşdırmır və texniki qərar vermir. Azərbaycandakı iş yeri ayrıca qiymətləndirilməlidir.", ids: azIds.slice(10, 15) },
        { type: "faq", heading: "Günlük qiymət və əlavə xərclər", intro: "Günlük tərcüməçi haqqını şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərclərindən ayrıca qiymətləndirin. İş saatlarını, əlavə gün ehtimalını və ödəniş şərtlərini proqramınıza uyğun dəqiqləşdirin.", ids: azIds.slice(15, 21) },
        { type: "faq", heading: "Sifariş və proqram dəyişikliyi", intro: "Müraciət göndərmək sifarişi təsdiqləmir. Tarix dəyişməsi, əlavə gün və eyni vaxtda keçiriləcək görüşlər barədə əvvəlcədən məlumat verin; uyğunluq və şərtlər ayrıca dəqiqləşdirilir.", ids: azIds.slice(21, 26) },
        { type: "faq", heading: "Hazırlıq və əlaqə", intro: "Qısa iş məlumatı, faktiki görüş yeri və dil tələbi ilə başlayın. Hazırladığınız mesajı özünüz göndərirsiniz. Azərbaycan dilində yazışma seçimi tərcüməçinin Azərbaycan dilində danışacağına zəmanət vermir.", ids: azIds.slice(26, 30) },
        {
          type: "richtext",
          surface: true,
          heading: "Öz proqramınız üçün cavab alın",
          html: `<p>Xidmət, şəhər, tarixlər, iş dili və qısa ehtiyacınızı <a href="/az/elaqe/">əlaqə formasında</a> paylaşın. Günlük haqq və ayrıca xərclər proqram əsasında dəqiqləşdirilir. Sorğu göndərmək sifarişi təsdiqləmir.</p>`
        },
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
      title: "Çin Dili Tərcüməçisi ilə Əlaqə | Şəhər, Tarix və Dil Tələbi",
      description: "Xidməti, şəhəri, tarixləri və dil tələbinizi bildirin. WhatsApp, telefon və e-poçtla günlük tərcüməçi üçün uyğunluq və qiymət təklifi soruşun.",
      schema: { type: "ContactPage", crumbs: [{ name: "Əlaqə", path: "/az/elaqe/" }] },
      blocks: [
        { type: "hero", eyebrow: "Əlaqə", h1: "Şəhəri, tarixləri və iş dili tələbinizi bildirin", lead: "Çində görüşünüz və ya Türkiyədə texniki heyətlə işiniz üçün qısa proqramı paylaşın. Tarixlər tam müəyyən deyilsə, bunu yazın. Azərbaycan dilində danışan tərcüməçi mütləq lazımdırsa, bunu ayrıca seçin; türk dilində işləməyə uyğunluğunuzu avtomatik qəbul etmirik." },
        { type: "callout", html: `<strong>Dil qeydi:</strong> ${AZ_LANGUAGE_NOTE}` },
        { type: "callout", text: "Xidmət günlük əsasda hesablanır. Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri günlük tərcüməçi haqqına daxil deyil, ayrıca hesablanır." },
        { type: "richtext", heading: "Əlaqə vasitələri", html: `<p>Nömrələrimiz Türkiyə nömrələridir. Azərbaycanda yerli ofis göstərmirik.</p>` },
        { type: "contactCards" },
        {
          type: "richtext",
          heading: "Sorğu mətninizi hazırlayın",
          html: `<p>Məcburi sahələr: xidmət; iş ölkəsi; şəhər və faktiki iş yeri; tarix; dil tələbi; qısa ehtiyac. Ad/şirkət könüllüdür. İlk mesajda məxfi texniki sənəd paylaşmayın.</p>
          <h3>İş dili</h3>
          <p>Görüşməni hansı dildə izləyə biləcəyinizi aşağıdakı seçimlərdən biri ilə bildirin.</p>
          <p>Daxil etdiyiniz məlumatlarla mesaj mətni hazırlanır. Mətnə baxıb WhatsApp və ya e-poçt tətbiqində özünüz göndərirsiniz. Formanı doldurmaq və tətbiqi açmaq mesajın göndərildiyi və ya sifarişin təsdiqləndiyi demək deyil.</p>`
        },
        { type: "quoteForm", languageRadios: true, defaultCountry: "CN" },
        {
          type: "richtext",
          html: `<h3>Kopyalana bilən mətn</h3>
          <div class="callout" id="sorgu-metni-az">Salam. Şifahi tərcümə üçün uyğunluq və qiymət təklifi soruşmaq istəyirəm. Xidmət: [xidmət]. Ölkə, şəhər və iş yeri: [konum]. Tarixlər: [tarix]. Dil tələbi: [açıq seçiminiz]. Qısa ehtiyac: [mövzu]. Günlük tərcüməçi haqqını şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərclərindən ayrı bildirə bilərsinizmi? Bu mesaj sifariş təsdiqi deyil. Mənbə səhifə: [açıq səhifə yolu].</div>
          <div class="button-row"><button class="button-ghost" type="button" data-copy-target="sorgu-metni-az">Mesajı kopyala</button></div>`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Sorğudan sonra",
          html: `<p>Əvvəl proqramı və iş dilini, sonra uyğunluğu, günlük haqqı və ayrıca xərcləri dəqiqləşdiririk. Xidmət yalnız qarşılıqlı təsdiqdən sonra planlaşdırılır.</p>
          <p><a href="/az/">Xidmətə baxın</a> · <a href="/az/suallar/">Bütün suallar</a></p>`
        },
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
