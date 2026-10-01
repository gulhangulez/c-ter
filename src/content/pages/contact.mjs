// Contact / quote request — /iletisim/ and /zh/contact/. Plan §6.18–6.19.
// No backend, no request logging; message prepared client-side, user sends it.
// The price/expense note is part of the "after request" text, so no separate
// priceNote block (one price note per page).

function copyBlock(id, inner, label) {
  return `<div class="callout" id="${id}">${inner}</div>
    <div class="button-row"><button class="button-ghost" type="button" data-copy-target="${id}">${label}</button></div>`;
}

export const contact = {
  id: "contact",
  primaryService: null,
  locales: {
    tr: {
      path: "/iletisim/",
      status: "published",
      indexable: true,
      title: "Çince Tercüman İletişim | Uygunluk ve Günlük Teklif",
      description: "Hizmet, şehir, tarihler ve kısa ihtiyacınızı paylaşın. WhatsApp, telefon veya e-postayla Çince–Türkçe sözlü tercümanlık için uygunluk ve teklif sorun.",
      schema: { type: "ContactPage", crumbs: [{ name: "İletişim", path: "/iletisim/" }] },
      blocks: [
        { type: "hero", eyebrow: "İletişim", h1: "Şehrinizi ve tarihlerinizi paylaşın, uygunluğu netleştirelim", lead: "Çin'deki görüşmeniz veya Türkiye'deki teknik ekip programınız için hizmet türünü, çalışma şehrini, tarihleri ve kısa ihtiyacınızı yazın. Tarihler henüz kesin değilse bunu belirtmeniz yeterli. İlk mesajda gizli teknik dosya göndermeniz gerekmez." },
        { type: "richtext", heading: "Bize ulaşın" },
        { type: "contactCards" },
        {
          type: "richtext",
          heading: "Talep mesajınızı hazırlayın",
          html: `<p>Hizmeti, çalışma ülkesini, şehri ve gerçek çalışma noktasını, tarihleri ve kısa ihtiyacınızı belirtin. Adınızı veya şirketinizi paylaşmanız isteğe bağlıdır. Çin'de görüşme, fabrika ziyareti veya fuar için Çin'deki çalışma yerini; makine kurulumu için tesisin bulunduğu ülkeyi ve şehri yazın.</p>
          <p>Aşağıdaki bilgilerle size ait bir talep metni hazırlanır. Metni kontrol edip WhatsApp veya e-posta uygulamanızda kendiniz gönderirsiniz. Formu doldurmak ya da uygulamayı açmak tek başına talebin gönderildiği veya rezervasyonun kesinleştiği anlamına gelmez.</p>`
        },
        { type: "quoteForm" },
        {
          type: "richtext",
          html: `<h3>Kopyalanabilir talep</h3>
          ${copyBlock("talep-metni-tr", "Merhaba, Çince–Türkçe sözlü tercümanlık için uygunluk ve teklif sormak istiyorum. Hizmet: [hizmet]. Ülke/şehir ve çalışma bölgesi: [konum]. Tarihler: [tarih]. Kısa ihtiyaç: [konu]. Günlük tercümanlık ücretini; şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme masraflarından ayrı paylaşabilir misiniz? Kaynak sayfa: [ziyaret edilen herkese açık sayfa yolu].", "Mesajı kopyala")}`
        },
        {
          type: "richtext",
          surface: true,
          heading: "Talep sonrası ne olur?",
          html: `<p>Programınızı ve iş dilini değerlendirdikten sonra tarihlerin uygunluğunu, günlük ücreti ve ek masrafları görüşürüz. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Program karşılıklı teyit edilir; talep göndermek tek başına rezervasyon oluşturmaz.</p>
          <p><a href="/sik-sorulan-sorular/#q-q041">Rezervasyonun kesinleşmesi için hangi adımları tamamlamamız gerekiyor?</a></p>
          <p><a href="/cince-tercuman/">Hizmet seçimi</a> · <a href="/cince-tercuman-fiyatlari/">Günlük ücret</a> · <a href="/sik-sorulan-sorular/">SSS</a></p>`
        }
      ]
    },
    "zh-Hans": {
      path: "/zh/contact/",
      status: "published",
      indexable: true,
      title: "咨询中土口译｜设备、城市、日期与每日报价",
      description: "需要土耳其设备安装口译或中国境内土耳其语口译？请发送服务类型、工作城市、日期和简要需求，可通过邮件、电话或 WhatsApp 联系。",
      schema: { type: "ContactPage", crumbs: [{ name: "联系我们", path: "/zh/contact/" }] },
      blocks: [
        { type: "hero", eyebrow: "联系我们", h1: "请告诉我们工作城市、日期与口译需求", lead: "中国工程师赴土耳其，或土耳其客户来中国会面，都需要先明确实际工作地点与沟通内容。请提供服务类型、城市、日期和简要需求。日期尚未确定时，可以注明预计时间。首次咨询无需发送机密技术文件。" },
        { type: "richtext", heading: "选择方便的联系方式" },
        { type: "contactCards" },
        {
          type: "richtext",
          html: `<p>无法使用 WhatsApp 时，可以发送邮件、拨打电话，或复制下方文本后通过您方便的已列联系方式发送。我们没有在本页公布 WeChat 账号。</p>`
        },
        {
          type: "richtext",
          heading: "准备咨询文本",
          html: `<p>字段：服务类型；工作国家；城市及实际工作地点；日期；简要需求；姓名或公司名称（选填）。中国境内口译、工厂访问及中国展会服务对应工作国家“中国”。</p>
          <p>表单用于整理您的咨询内容。请核对预览，再到自己的 WhatsApp 或邮件应用中完成发送。填写表单或打开应用，不代表消息已发送，也不代表预订成功。</p>`
        },
        { type: "quoteForm" },
        {
          type: "richtext",
          html: `<h3>可复制文本</h3>
          ${copyBlock("talep-metni-zh", "您好，我想咨询中文—土耳其语现场口译的档期与报价。服务类型：[服务]。国家、城市及实际工作地点：[地点]。日期：[日期]。简要需求：[内容]。请将每日口译服务费与市内交通、城际交通、住宿及餐饮费用分别说明。来源页面：[公开页面路径]。", "复制咨询文本")}`
        },
        {
          type: "richtext",
          surface: true,
          heading: "发送后如何确认？",
          html: `<p>收到您实际发送的咨询后，我们会结合工作内容、语言要求和日期沟通是否能够安排，并确认每日服务费及额外支出。市内交通、城际交通、住宿和餐饮费用另行计算。具体安排需双方确认，发送咨询不等于预订成功。</p>
          <p><a href="/zh/faq/#q-q041">完成哪些步骤后，预约才算确定？</a></p>
          <p><a href="/zh/interpreting-services/">服务选择</a> · <a href="/zh/daily-rates/">每日费用</a> · <a href="/zh/faq/">咨询常见问题</a></p>`
        }
      ]
    }
  }
};
