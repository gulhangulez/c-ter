# Çince Tercüman — Türkçe, Çince ve Azərbaycan dili · Tek Dosya Site Planı

**Güncel sürüm:** 1.3 · **Güncelleme:** 15 Eylül 2026  
**Alan adı:** `https://www.cince-tercuman.com/`  
**Dil kapsamı:** Türkçe (`tr`) + basitleştirilmiş Çince (`zh-Hans`) + Azerbaycanca (`az`, Latin yazımı)  
**AZ ilk yayın kapsamı:** Karşılama sayfası + soru-cevap sayfası + iletişim sayfası.  
**Teslimat:** Tasarım, gerçek içerik ve uygulama belgesi. Canlı site veya çalışan uygulama teslimi değildir.

## v1.3 — Önce okunacak güncel uygulama kararı

**Önceki kapsam eksiltilmedi.** Aşağıdaki ana metinde v1.2 belgesinin 1–51. bölümleri, mevcut Türkçe–Çince sayfalar, Q001–Q110 soru-cevapları, SEO/GEO stratejisi ve geçiş kuralları korunur. Bu sürüm 52–62. bölümlerle AZ pazarını ekler. Önceki belgenin gerekli noktalarındaki kısa v1.3 yönlendirme notları yeni kararlara bağlanır; eski metinleri silmez.

**Yeni yayın kapsamı:** Türkçe ve Çince tam kapsamlarına devam eder. Azerbaycanca ilk aşamada yalnızca `/az/`, `/az/suallar/` ve `/az/elaqe/` adreslerinde yayımlanır. Üç dilde aynı sayfa sayısını oluşturmak veya mevcut 110 sorunun tamamını Azerbaycancaya çevirmek bu aşamanın şartı değildir. AZ için 30 özgün/uyarlanmış soru-cevap ve üç sayfanın yayımlanabilir metinleri bu dosyada hazırdır.

**Önemli iş ayrımı:** Azerbaycanca içerik sunmak, Azerbaycanca bilen bir tercüman veya Çin dili–Azerbaycanca sözlü tercümanlık garantisi vermek değildir. Esas çalışma çifti Çin dili–Türkçedir. Türkçe üzerinden iletişim, ancak müşteri için uygun olduğu açıkça teyit edilirse kullanılır. Azerbaycanca sözlü iletişim şartı ayrı kaydedilir ve adayın gerçek dil yeterliliği doğrulanmadan hizmet uygunluğu onaylanmaz. Dillerin yakınlığı müşterinin teknik görüşmeyi Türkçe takip edebildiğinin kanıtı sayılmaz.

**Pazar ≠ hizmet yeri:** Azerbaycan, kullanıcının belirlediği ikincil müşteri pazarıdır. Bu karar Azerbaycan'da ofis, yerleşik ekip veya hazır saha hizmeti bulunduğunu göstermez. Teyit edilmiş hizmet coğrafyası Türkiye ve Çin olarak kalır. Azerbaycan'da gerçekleşecek işler ayrıca değerlendirilmeden mevcut hizmet gibi yayımlanmaz.

**Öncelik sırası:** Kesinleşen dört hizmet ve günlük çalışma modeli → v1.3 önsözü ve 52–62. bölümlerdeki AZ/çok dillilik kuralları → önceki uyumlu uygulama hükümleri. Önceki metinde “ilk sürüm iki dil”, yalnız TR/ZH alan kodu, iki dilli menü veya eski “tek güncel kodlama talimatı” geçen yerler kapsam tarihçesidir. Bunların üç dillilikle ilgili güncel karşılığı bu önsöz, bölüm 58 ve bölüm 61'dir. Önceki Türkçe–Çince içerikler yürürlükte kalır.

**Aynen korunan iş kararları:** Günlük ücret; ayrıca alınan şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme; aynı alan adı ve uygun eski URL'ler; yönetim panelsiz başlangıç; ikonsuz yazı logosu ve mevcut responsive tasarım; WhatsApp `+90 555 044 11 41`, telefon `+90 507 528 61 87`, e-posta `info@cince-tercuman.com`. Altı işletme teyidi bekleyen cevap için yayın kapıları da korunur. AZ çevirisiyle bu kapılar aşılmaz.

**İç not / site metni:** Türkçe uygulama açıklamaları, sürüm notları, kaynaklar ve AZ soru kimlikleri ziyaretçiye gösterilmez. “AZ — site metni” olarak verilen içerik yalnızca Azerbaycanca sayfalarda yayımlanır. Bu dosyanın kendisi sitenin `public` dizinine konulmaz.

### Güncel hızlı erişim

[AZ kapsam ve dil uygunluğu](#v13-scope) · [Üç yeni URL ve sorgu haritası](#v13-routes) · [AZ karşılama sayfası](#v13-landing) · [30 AZ soru-cevap](#v13-faq) · [AZ iletişim ve WhatsApp akışı](#v13-contact) · [AZ menü ve arayüz metinleri](#v13-ui) · [Üç dilli teknik yapı](#v13-technical) · [AZ büyüme ve ölçüm](#v13-growth) · [Kabul testleri](#v13-tests) · [Güncel kodlama talimatı](#v13-build) · [Kaynak ve bütünlük kontrolü](#v13-provenance)

---

## Korunan v1.2 ana metin — AZ hükümleri için yukarıdaki öncelik sırasını uygulayın

Aşağıdaki önceki sürüm başlığı ve önsöz kaynak tarihçesi olarak korunur. Bu teslimatın etkin sürümü **1.3**, etkin dil kapsamı **TR + ZH + AZ**'dir.

<!-- V13_PRESERVED_BASE_BEGIN -->
# Çince Tercüman — Tek Dosya Nihai Site Planı ve İçerikleri

**Birleştirilmiş sürüm:** 1.2 · **Tarih:** 15 Eylül 2026  
**Alan adı:** `https://www.cince-tercuman.com/`  
**Diller:** Türkçe + basitleştirilmiş Çince (`zh-Hans`)  
**Amaç:** Mevcut tasarım ve SEO/GEO önerilerini silmeden tek uygulama belgesinde toplamak; yüklenen 110 müşteri sorusunu ilgili sayfalara gerçek cevaplarıyla yerleştirmek.

## Önce bu sürümün uygulama kurallarını okuyun

Bu dosya tek başına kullanılabilir. Önceki ana tasarımın **1–29. bölümleri** ile SEO/GEO ekinin **30–43. bölümlerindeki bütün metinler korunmuştur**. Yeni soru-cevaplar yalnızca dosyanın sonuna bırakılmadı: hizmet, ücret, hakkımızda, şehir ve rehber sayfalarının ilgili bölümlerine **“v1.2 sayfa eki”** başlıklarıyla yerleştirildi. Yeni yönetim kuralları ve izleme tabloları 44–51. bölümlerdedir.

**110 kaynak sorunun tamamı cevaplandı:** Her sorunun özgün numarası Q001–Q110 kimliğiyle korunur; Türkçe sorusu, sitenin ağzından Türkçe cevabı, basitleştirilmiş Çince sorusu ve cevabı birlikte bulunur. Bu, 110 bağımsız soru için iki dilde içeriktir; 110 ayrı URL açılacağı anlamına gelmez. Soruların birincil konumu 21 sayfa/rehber eşleniğine dağıtılmıştır. Önceki dosyadaki uyumlu yardımcı sorular da korunur.

**Öncelik sırası:** Kullanıcının kesinleşmiş dört hizmeti ve günlük çalışma modeli → bu sürümün güncel uygulama kararları → Q kimlikli cevaplar → bunlarla çelişmeyen önceki sayfa metinleri ve teknik hükümler. Önceki metinlerdeki sürüm numarası veya başlık alternatifleri kaynak tarihçesidir; dosyanın geçerli sürümü 1.2’dir.

**İçeriği korumak, tekrarı yayımlamak değildir.** Aynı soruyu karşılayan eski bir SSS ile yeni Q cevabını ziyaretçiye art arda iki kez göstermeyin. Yeni cevabı etkin sürüm olarak kullanın; eski metni proje içindeki kaynak/arşiv içeriğinde saklayın. Eski içerikteki farklı ve gerekli bilgiler güncel blokla çelişmiyorsa ilgili bölümde kalır. Bölüm 46 bu eşleştirmeyi açıklar.

**Yayımlanmadan önce işletme teyidi gereken altı taslak:** Q015 (fatura), Q019 (gizlilik işleyişi), Q020 (gizlilik sözleşmesi), Q021 (ticari bağlantı), Q045 (tercümanın gelememesi), Q107 (komisyon ilişkisi). Bunların cevapları dosyada vardır; bilinmeyen politikalar kesin vaatlere dönüştürülmemiştir. İlgili işletme süreci teyit edilmeden canlı sayfaya eklenmez. Günlük saat, ödeme, iptal ve benzeri diğer cevaplarda ise sabit rakam veya koşul uydurulmadan teklif bazında teyit dili kullanılmıştır.

**Sayfa metni / iç not ayrımı:** “Türkçe cevap — site metni” ve “简体中文 — 回答” ziyaretçi içeriğidir. Q numaraları, yayın durumu, teknik notlar, kaynakça ve bu önsöz ziyaretçiye gösterilmez. Türkçe sayfada yalnız Türkçe, Çince sayfada yalnız Çince içerik görüntülenir; bu belgede iki dil birlikte yalnızca geliştirme kolaylığı için yer alır.

**Sabit iş kararları değişmedi:** Dört hizmet; günlük ücret; ayrıca alınan şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme; mevcut alan adı ve uygun eski URL’lerin korunması; ilk sürümde yönetim paneli olmaması. WhatsApp `+90 555 044 11 41`, arama `+90 507 528 61 87`, e-posta `info@cince-tercuman.com` olarak kalır. Eski Taksim adresi, 600+ ekip iddiası ve kaldırılmış hizmetler canlı içeriğe geri eklenmez.

### Dosya içinde hızlı erişim

[Genel hizmet soruları](#v12-page-services) · [Çin’de tercüman](#v12-page-china) · [Makine kurulumu](#v12-page-machine) · [Fabrika ziyareti](#v12-page-factory) · [Fuar ziyareti](#v12-page-fair) · [Kanton Fuarı](#v12-page-canton) · [Ücretler](#v12-page-rates) · [Rezervasyon](#v12-page-faq) · [Şehirler](#v12-page-areas) · [Tercüman seçimi rehberi](#v12-page-selection_guide) · [Sayfa yerleşim tablosu](#v12-placement) · [110 sorunun indeksi](#v12-question-index) · [Yayın öncesi teyitler](#v12-approvals) · [Kodlama talimatı](#v12-build-instruction)

---

<a id="preserved-specification"></a>
## Korunan tasarım, içerik ve SEO/GEO belgesi — ilgili sayfalara işlenmiş eklerle

Aşağıda önceki dosyanın tüm metni yer alır. Ekleme işaretleri kaynak korunma kontrolü içindir; web sayfasının HTML çıktısına taşınmaz.

<!-- V12_BASE_BEGIN -->
# Çince Tercüman — Yeni Site Tasarımı, Gerçek Metinler ve Güvenli Geçiş Planı

**Sürüm:** 1.0 — 15 Eylül 2026  
**Alan adı:** https://www.cince-tercuman.com/  
**İlk sürüm:** Türkçe + basitleştirilmiş Çince / 简体中文  
**Teslimat:** Tasarım ve uygulama belgesi; yayımlanmış veya kodlanmış bir site değildir.

> **Uygulayıcı için öncelik sırası:** Kullanıcının bu belgedeki güncel hizmet kapsamı → mevcut URL’leri koruma → gerçek sayfa metinleri → tasarım ve teknik gereksinimler. Eski sitedeki veya ilk araştırma promptundaki daha geniş hizmet listesini yeni siteye geri taşımayın.

Bu belge bir araştırma promptu değildir. Ana sayfadan başlayarak sayfa düzenlerini, Türkçe ve Çince yayımlanabilir metinleri, ortak bileşenleri, WhatsApp akışını ve yayına geçiş kararlarını tanımlar. “Uygulama notu”, “araştırma notu”, “yayın kapısı” ve kaynakça ziyaretçiye gösterilecek metinler değildir.

### Belgeyi kullanma

Önce 1–5 arasındaki kararları okuyun. 6–19 arasındaki metinleri sayfalara yerleştirin. 20–26 arasındaki teknik ve geçiş kurallarını uygulayın. 27’deki kabul testleri geçmeden eski siteyi kapatmayın. Bölüm 28’deki uygulama talimatını kodlama aracına bu dosyayla birlikte verin.

### Kanıt ve sınırlar

- **Kullanıcı kararı:** Hizmet kapsamı, günlük çalışma, ayrıca alınan masraflar, dil seçimi, şehirler ve iletişim tercihleri son konuşmadaki yanıtlara dayanır.
- **Kaynak dosya:** Yüklenen “Çince-Tercüman.com Derin Araştırma ve Yeniden Tasarım Promptu.md”, araştırma kapsamını tanımlar; tamamlanmış rakip araştırması veya trafik raporu değildir.
- **Web incelemesi:** 15 Eylül 2026’da erişilebilen mevcut sayfalar, arama bulguları, seçili rakiplerin kendi sayfaları ve resmi teknik dokümantasyon incelendi. Kaynaklar belgenin sonundadır.
- **Ölçülmemiş:** Organik trafik, kelime hacmi, tam backlink envanteri, Core Web Vitals, mevcut canonical/robots yapılandırmasının tamamı ve farklı AI motorlarındaki gerçek önerilme oranı. Bu alanlarda sayı veya sıralama uydurulmadı.
- Ana sayfa ve bazı alt sayfalara erişim sırasında bot doğrulama ekranı görüldü. Bu, bu inceleme aracının karşılaştığı durumdur; Googlebot’un da engellendiğinin veya sitenin tüm kullanıcılara kapalı olduğunun kanıtı değildir. Sunucu kayıtlarıyla kontrol edilmelidir. [S1]
- Bu çalışma hedefli bir tasarım araştırmasıdır; ilk prompttaki “10 doğrudan + 10 SERP rakibi” kapsamının tamamlandığı iddia edilmez.


## 1. Kesinleşen iş modeli

### 1.1 Sunulacak dört hizmet

| Hizmet | Sitedeki adı | Kapsam sınırı |
|---|---|---|
| Çin’de tercüman | Çin’de Çince–Türkçe tercüman | Çin’de planlanmış görüşmelerde ve saha programlarında sözlü dil desteği. |
| Makina kurulumu | Makine kurulumu için Çince teknik tercüman | Kurulum, devreye alma ve bunlara bağlı kullanım açıklamalarında teknik ekip ile işletme arasındaki sözlü iletişim. Makineyi tercüman kurmaz. |
| Çin’de fabrika ziyareti | Çin’de fabrika ziyareti tercümanlığı | Müşterinin belirlediği fabrika ve görüşme programında Çince–Türkçe sözlü tercümanlık. |
| Çin’de fuar ziyareti | Çin’de fuar tercümanlığı | Müşterinin katılacağı fuarda stant ve firma görüşmelerinde Çince–Türkçe sözlü tercümanlık. |

**Yalnızca iç uygulama için kaldırılacaklar:** Yazılı çeviri, ürün araştırma, ticari danışmanlık, Çin’den ürün getirme, şirket yazışmaları ve belge çevirisi teklifleri. Pasaport, evlilik cüzdanı, ürün kataloğu ve sözleşme çevirisi için hizmet kartı, form seçeneği, satış sayfası veya reklam metni üretilmeyecek. Eski tur, otel, araç kiralama ve havalimanı transferi vaatleri de bu dört hizmetin yanına eklenmeyecek.

Bu iç listeyi müşteri karşısında uzun bir “yapmadığımız işler” bölümüne dönüştürmeyin. Ziyaretçi yalnızca mevcut hizmetleri görsün.

### 1.2 Çalışma ve fiyatlandırma

- Ücretlendirme **günlük** yapılır. Yarım günlük, saatlik ve proje paketleri oluşturulmaz.
- **Şehir içi ulaşım, şehir dışı ulaşım, konaklama ve yeme-içme ayrıca ücretlendirilir.**
- Günlük mesai aralığı, seyahat günleri, fazla süre, ödeme, iptal ve değişiklik koşulları henüz sabit bir politika olarak verilmedi. Sitede 8 saat, yüzde kapora, ücretsiz iptal veya indirim oranı uydurulmaz; bunlar teklif sırasında açıklığa kavuşturulur.
- Site fiyat hesaplamaz, kesin müsaitlik göstermez, otomatik rezervasyon oluşturmaz ve ödeme almaz.

### 1.3 İletişim — tek kaynaktan yönetilecek

| Kullanım | Değer |
|---|---|
| WhatsApp | **+90 555 044 11 41** |
| WhatsApp bağlantısı | `https://wa.me/905550441141` |
| Telefon araması | **+90 507 528 61 87** |
| Telefon bağlantısı | `tel:+905075286187` |
| E-posta | **info@cince-tercuman.com** |
| E-posta bağlantısı | `mailto:info@cince-tercuman.com` |

WhatsApp numarası kullanıcının daha önce verdiği numara ve son onayı esas alınarak seçildi; telefon/e-posta mevcut sitede de görüldü. İki numara farklı işlevlerle etiketlenecek. Yayından önce gerçek cihazda hedef hesabın işletmeye ait olduğu test edilecek. [S2]

### 1.4 Hizmet ağı

**Doğrudan bildirilen Türkiye şehirleri:** İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep.  
**Doğrudan bildirilen Çin şehirleri:** Guangzhou, Shanghai (Şanghay), Beijing (Pekin).  
**Yakın bölge talepleri:** Şehir, tarih, ulaşım ve tercüman uygunluğu birlikte değerlendirilir. Kocaeli/Gebze gibi mevcut sayfalar bu çerçevede güncellenir.

“Her şehirde ofis”, “Türkiye’nin tamamında yerleşik ekip”, “600+ tercüman”, “her zaman hazır” veya “aynı gün kesin dönüş” ifadeleri kullanılmaz. Kullanıcının artık bulunmadığı Taksim adresi ve doğrulanmamış diğer eski ofis adresleri yeni siteden kaldırılır. Yeni adres icat edilmez.

### 1.5 Güven yaklaşımı

İlk sürümde gerçek saha fotoğrafı, izinli müşteri logosu veya onaylı değerlendirme bulunmuyor. Bu nedenle müşteri logosu şeridi, sahte yorum, yıldız puanı, ekip portresi, iş sayacı ve başarı oranı kullanılmaz. Güven; net kapsam, açık masraflar, gerçek iletişim bilgileri ve anlaşılır işleyişle kurulur.


## 2. Araştırmadan çıkan tasarım kararları

### 2.1 Mevcut sitedeki korunacak varlıklar

Mevcut `/cince-tercuman/` sayfası genel tercümanlık ihtiyacını karşılıyor; İstanbul, Kocaeli, Gebze ve Çin şehirlerine bağlantı veriyor. Guangzhou, Shanghai ve Beijing için ayrı URL’ler bulunuyor. Bu URL’leri sırf daha yeni görünen bir isim için değiştirmek gerekmiyor. [S3][S4][S5][S6][S7]

**Öneri:** Alan adı, marka yazımı, telefon/e-posta sürekliliği ve hizmetle uyumlu eski URL’ler korunacak. Değişen şey, sayfaların tasarımı ve sunulan hizmetlerin açıklığı olacak.

### 2.2 Düzeltilmesi gereken gözlemler

Eski “Hakkımızda” sayfasında artık verilmeyen yazılı hizmetler, eski adres ve ekip sayısı yer alıyor. Genel hizmet sayfasında seyahat organizasyonu gibi kapsam dışı vaatler bulunuyor. Shanghai sayfasındaki şehir listesinde Shanghai, Türkiye şehirleri arasında da geçiyor; yeni içerikte kopyalanmış şehir listeleri kullanılmamalı. [S2][S3][S5]

**Öneri:** Önce yanlış işletme bilgilerini temizleyin. Yeni sayfa üretimini, eski yanlışları aynı anda çoğaltacak bir şablon çalışmasına dönüştürmeyin.

### 2.3 Seçili rakip örnekleri — gözlem ve karşılık

Bu tablo sıralama veya trafik sırası değildir. Rakiplerin kendi sayfalarında görülen sunum biçimleri incelenmiştir; operasyonel iddiaları bağımsız olarak doğrulanmamıştır.

| İncelenen örnek | Görülen güçlü sunum | Bizde uygulanacak karşılık |
|---|---|---|
| `cincetercumesi.com` | Hizmet kartları, ihtiyaç–plan–uygulama akışı ve WhatsApp bağlantısı görünür. | Dört hizmet, daha kısa teklif akışı ve günlük masraf açıklaması; geniş danışmanlık paketini kopyalamadan. [R1] |
| `cincedanismanlik.com` | Makine kurulumu ayrı bir ihtiyaç olarak ele alınıyor; adımlı süreç ve sayfa içi SSS var. | Kurulum tercümanlığını bağımsız sayfada anlatmak; tercüman ile teknik uygulayıcının rolünü açıkça ayırmak. [R2] |
| `cincetercuman.org` üzerindeki hazırlık yazısı | Türk ziyaretçilere pratik hazırlık içeriği ve hizmete geçiş CTA’sı sunuluyor. | Genel gezi blogu yerine tercüman talebini hazırlatan üç kısa rehber. Yalnızca incelenen yazıya ilişkin gözlem. [R3] |
| `cinithalatihracat.com` üzerindeki fuar sayfası | Şehir + fuar ihtiyacını aynı sayfada somutlaştırıyor. | Guangzhou/Kanton sayfasında müşterinin fuar ve görüşme programını temel almak; tur/ithalat hizmeti eklememek. İncelenen yazı eski tarihli olduğundan güncel hizmet kanıtı sayılmadı. [R4] |

**Konumlandırma önerisi:** “Türkiye’de makine kurulumu, Çin’de fabrika ve fuar programları için; şehir, tarih ve günlük çalışma koşulları netleştirilerek planlanan Çince–Türkçe sözlü tercümanlık.”

Bu bir rakiplerde hiç bulunmadığı kanıtlanmış “benzersizlik” iddiası değildir. Mevcut kapsamınıza uygun, müşterinin karar vermesini kolaylaştıracak odak önerisidir.

### 2.4 SEO ve AI için temel karar

İçerik önce kullanıcının sorusunu yanıtlayacak, sonra ayrıntı verecek. Başlıklar açık, hizmet sınırları görünür, iletişim bilgileri tutarlı olacak. Google’ın AI sonuçları için ayrı bir zorunlu şema veya özel AI dosyası gerekmiyor; görünürlük garantisi de bulunmuyor. [G1]

**Güncel düzeltme:** Google’ın güncelleme kaydına göre FAQ zengin sonuçları 7 Mayıs 2026’dan itibaren gösterilmiyor. SSS blokları kullanıcı ve okunabilir içerik için kullanılacak; `FAQPage` etiketiyle Google’da özel görünüm sözü verilmeyecek. `llms.txt`, Google görünürlüğü için bir öncelik veya zorunluluk değil. [G2]


<!-- V13_BRIDGE_BEGIN:routes -->
**v1.3 ek kararı:** Aşağıdaki TR/ZH sayfa tablosu korunur. AZ başlangıç sayfaları ve sorgu haritası [bölüm 53](#v13-routes), gerçek dil eşlemesi [bölüm 58](#v13-technical) ile eklenir; bütün satırlara otomatik AZ URL üretmeyin.
<!-- V13_BRIDGE_END:routes -->

## 3. Site mimarisi ve arama niyeti

### 3.1 Temel sayfalar — iki dilde yayımlanacak

Türkçe sayfalar mevcut kök URL düzeninde kalır; Türkçe içerikleri topluca `/tr/` altına taşımayın. Yeni Çince sürüm `/zh/` altında çalışır. Bu, URL değişimini azaltmaya yönelik tasarım kararıdır.

| ID | Türkçe URL | Çince URL | Sayfa rolü / temel hedef |
|---|---|---|---|
| home | `/` | `/zh/` | Marka ve genel “Çince tercüman” aramaları |
| services | `/cince-tercuman/` | `/zh/interpreting-services/` | Çince sözlü tercümanlık hizmetlerini karşılaştırma |
| china | `/cinde-tercuman/` | `/zh/interpreter-in-china/` | Çin’de Türkçe–Çince tercüman ihtiyacı |
| machine | `/makine-kurulumu-cince-tercuman/` | `/zh/machine-installation-interpreter/` | Çince teknik tercüman / makine kurulum tercümanı |
| factory | `/cinde-fabrika-ziyareti-tercuman/` | `/zh/factory-visit-interpreter/` | Çin fabrika ziyareti sırasında tercüman |
| fair | `/cinde-fuar-tercumani/` | `/zh/trade-fair-interpreter/` | Çin fuar tercümanı |
| canton | `/kanton-fuari-tercuman/` | `/zh/canton-fair-interpreter/` | Kanton Fuarı / Canton Fair Türkçe tercüman |
| areas | `/hizmet-bolgeleri/` | `/zh/service-areas/` | Türkiye ve Çin hizmet ağı / yakın bölge talepleri |
| rates | `/cince-tercuman-fiyatlari/` | `/zh/daily-rates/` | Günlük tercüman ücreti ve masraflar |
| about | `/hakkimizda/` | `/zh/about/` | İşletmeyi ve çalışma yaklaşımını tanıma |
| faq | `/sik-sorulan-sorular/` | `/zh/faq/` | Genel operasyon soruları |
| contact | `/iletisim/` | `/zh/contact/` | Şehir/tarih/hizmet ile uygunluk ve teklif talebi |
| guides | `/blog/` | `/zh/guides/` | Hazırlık rehberleri koleksiyonu |

Yukarıdaki “yeni” URL’ler tasarım önerisidir. Yayın öncesi tam eski envanterde aynı ihtiyacı karşılayan bir URL bulunursa yeni adres açmak yerine mevcut uygun adres kullanılır ve bütün eşleştirmeler birlikte güncellenir.

### 3.2 Mevcut şehir URL’lerini koruma

İstanbul, Ankara, Kocaeli, Gebze, Guangzhou, Shanghai, Beijing, Shenzhen ve Yiwu sayfalarının URL’leri bölüm 17’de ele alındı. Bunları bir gecede tek bir bölge sayfasına yönlendirmeyin.

**Tekirdağ, Düzce, Kayseri, Gaziantep:** İlk sürümde hizmet bölgeleri sayfasında kendilerine ait anlamlı bölümler bulunacak. Aynı metinde şehir adını değiştirerek dört yeni sayfa üretmek yerine bu şehirler için gelen talepler ve gerçek operasyon bilgileri ölçülecek. Özgün yerel içerik oluştuğunda ayrı sayfa açılacak. Bu tercih talebi dışlamak değil, kopya sayfa yığınından kaçınmaktır. [G3]

### 3.3 Sayfalar arasındaki fark

- **Ana sayfa:** Ne yapıyoruz, nerede, nasıl ulaşılır?
- **Genel hizmet sayfası:** İhtiyacım hangi hizmete giriyor?
- **Hizmet sayfası:** Benim programımda tercüman ne yapacak, hangi bilgiler gerekli?
- **Şehir sayfası:** Bu lokasyondaki program nasıl tarif edilmeli, merkez dışı nokta nasıl bildirilir?
- **Ücret sayfası:** Günlük ücret ve ayrıca alınan masraflar nasıl ayrılır?
- **Rehber:** Talep öncesi hazırlanacak bilgiler.

Ana sayfa ile `/cince-tercuman/` aynı başlıkları ve aynı uzun paragrafları paylaşmayacak. `/cince-teknik-tercuman/` gibi aynı ihtiyaca ikinci bir yeni satış sayfası açılmayacak.


## 4. Görsel sistem ve responsive kurallar

### 4.1 Görsel yön

Beyaz ve sıcak açık gri zemin, koyu metin, ölçülü turuncu vurgu. Teknik hizmete uygun ciddi bir tipografi; bol boşluk, ince ayırıcı çizgiler ve sınırlı kart kullanımı. Çin bayrağı, ejderha, stok toplantı fotoğrafı ve yapay ekip portresi kullanılmaz.

Gerçek fotoğraf olmadığı için ana sayfanın sağ yarısında dekoratif görsel yerine **işlevsel “Tercüman talebi” kartı** bulunur. Hizmet sayfalarında yine gerçek içerik, süreç adımları ve bilgi kartları kullanılır.

<!-- V13_BRIDGE_BEGIN:wordmark -->
**v1.3 AZ karşılığı:** Marka adı ve renkler değişmez; Azerbaycanca alt açıklama, dil seçici ve arayüz sözlüğü [bölüm 57](#v13-ui) içindedir.
<!-- V13_BRIDGE_END:wordmark -->

### 4.2 Yazı logosu

**Ana yazım:** `Çince Tercüman`  
**TR küçük açıklama:** `Türkiye ve Çin’de sözlü tercümanlık`  
**ZH küçük açıklama:** `中土口译服务`

İkon yok. “Çince” koyu ve 700 ağırlık, “Tercüman” koyu turuncu ve 600 ağırlık. Header’da açıklama yalnızca alan uygunsa görünür; dar mobilde sadece marka yazısı kalır. Çince sürümde marka adı aynı kalır, alt açıklama yerelleşir. Bu, yeni bir Çin şirket unvanı değildir.

```html
<a class="wordmark" href="/" aria-label="Çince Tercüman — Ana sayfa">
  <span class="wordmark__main"><strong>Çince</strong> <span>Tercüman</span></span>
  <small>Türkiye ve Çin’de sözlü tercümanlık</small>
</a>
```

### 4.3 Tasarım değişkenleri

`#F37321` marka vurgusu olarak korunur. Beyaz yazılı ana butonda daha koyu turuncu kullanılır; marka turuncusu her küçük metin ve arka plan birleşiminde otomatik olarak kullanılmaz.

```css
:root {
  --color-bg: #FFFFFF;
  --color-surface: #F8F7F4;
  --color-text: #17211E;
  --color-muted: #52605A;
  --color-line: #DCE1DC;
  --color-brand: #F37321;
  --color-action: #A64009;
  --color-action-hover: #823106;
  --color-action-soft: #FFF2E8;
  --color-focus: #1649A0;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --container: 1184px;
  --space-unit: 4px;
}
body {
  margin: 0;
  color: var(--color-text);
  background: var(--color-bg);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 17px;
  line-height: 1.65;
}
html[lang="zh-Hans"] body {
  font-family: system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
  line-height: 1.8;
}
.container { width: min(calc(100% - 40px), var(--container)); margin-inline: auto; }
h1 { font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.14; letter-spacing: -.025em; }
h2 { font-size: clamp(1.6rem, 2.8vw, 2.4rem); line-height: 1.25; }
html[lang="zh-Hans"] h1 { line-height: 1.3; letter-spacing: 0; }
.button-primary { background: var(--color-action); color: #fff; min-height: 48px; }
.button-primary:hover { background: var(--color-action-hover); }
a:focus-visible, button:focus-visible, input:focus-visible,
select:focus-visible, textarea:focus-visible, summary:focus-visible {
  outline: 3px solid var(--color-focus); outline-offset: 4px;
}
.wordmark { display: inline-flex; flex-direction: column; text-decoration: none; color: var(--color-text); }
.wordmark__main { font-size: 24px; line-height: 1.2; letter-spacing: -.035em; white-space: nowrap; }
.wordmark__main > span { color: var(--color-action); font-weight: 600; }
.wordmark small { font-size: 11px; letter-spacing: .02em; }
@media (max-width: 767px) {
  .section { padding-block: 48px; }
  body { padding-bottom: calc(76px + env(safe-area-inset-bottom)); }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

Bu CSS temel token tanımıdır; tam site stili değildir. 320, 375, 390, 768, 1024 ve 1440 piksel ekranlarda taşma, kontrast ve etkileşim ayrıca test edilir.

### 4.4 Ortak responsive davranışlar

| Alan | Masaüstü | Mobil |
|---|---|---|
| Header | Marka, az sayıda menü, dil seçimi, CTA | Marka, Türkçe/中文, menü düğmesi |
| Hero | Metin 7 kolon, talep kartı 5 kolon | Önce H1 ve CTA, ardından kart |
| Hizmet kartları | Dört kart, gerektiğinde 2×2 | Tek kolon; yatay carousel yok |
| İçerik + özet | İçerik ve 320 px özet kartı | Kart içerik altına iner |
| SSS | İki kolon kullanmadan okunabilir tek akış | Native details/summary; sorular rahat dokunulur |
| Şehirler | Ülkeye göre iki panel | Önce Türkiye, ardından Çin; dil bazında sıra değişebilir |
| Kalıcı iletişim | Sağ alt, metinli tek WhatsApp düğmesi | Alt barda WhatsApp + TR’de Ara / ZH’de E-posta |

Dokunma alanları tasarım hedefi olarak en az 44×44 px olacak. Mobil alt bar formu, footer’ı ve klavye açıkken giriş alanlarını kapatmayacak; form görünürken veya klavye açıldığında gerektiğinde gizlenecek. Animasyon, pop-up ve otomatik açılan sohbet penceresi olmayacak.


<!-- V13_BRIDGE_BEGIN:nav -->
**v1.3 navigasyon eklemesi:** Mevcut iki dil metinleri kalır. Header’a `Azərbaycan dili`, AZ menü/CTA/footer ve açık etiketli dil fallback davranışı [bölüm 57](#v13-ui) uyarınca eklenir.
<!-- V13_BRIDGE_END:nav -->

## 5. Ortak navigasyon, CTA ve footer metinleri

### 5.1 Üst menü

| Türkçe | 简体中文 | Hedef |
|---|---|---|
| Hizmetler | 口译服务 | Genel hizmet sayfası; alt menüde dört hizmet |
| Hizmet bölgeleri | 服务地区 | Bölgeler |
| Günlük ücret | 日费说明 | Ücret sayfası |
| Hakkımızda | 关于我们 | Hakkımızda |
| İletişim | 联系我们 | Talep formu |
| Türkçe / 中文 | Türkçe / 中文 | Bulunulan sayfanın dil eşleniği |
| Uygunluk ve teklif sor | 咨询档期与报价 | İletişim sayfasındaki form |

Hazırlık rehberleri ve genel SSS footer’da, ilgili içeriklerin içinde de bağlantılıdır. Header’a her şehir eklenmez. Hizmet alt menüsü dört ana hizmeti gösterir; Kanton sayfası fuar sayfasından erişilir.

### 5.2 Ortak CTA sözlüğü

| Kimlik | TR | ZH | Davranış |
|---|---|---|---|
| quote | Uygunluk ve teklif sor | 咨询档期与报价 | Sayfa bağlamını koruyarak talep formuna git |
| whatsapp | WhatsApp’tan yaz | WhatsApp 咨询 | İlgili hizmete ait kısa hazır mesajla doğrudan WhatsApp aç |
| details | Hizmeti incele | 查看服务详情 | Gerçek hizmet URL’sine git |
| phone | Ara | 拨打电话 | `tel:` bağlantısı |
| email | E-posta gönder | 发送邮件 | `mailto:` bağlantısı |
| copy | Mesajı kopyala | 复制咨询内容 | Hazırlanan metni panoya kopyala |

Ana CTA ile doğrudan WhatsApp alternatifi birlikte bulunur. Kullanıcı iletişime geçmek için mutlaka form doldurmak zorunda bırakılmaz. CTA’lar “Rezervasyon yap”, “Tercümanın hazır” veya “Anında fiyat al” demez.

### 5.3 Tekrarlanan fiyat notu — PRICE-NOTE

**TR:** “Hizmet günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme bedelleri ayrıca hesaplanır.”

**ZH:** “口译服务按天计费。市内交通、城际交通、住宿及餐饮费用另计。”

Bu kısa not her hizmet sayfasında CTA yakınında görünür. Ek ücret bilgileri yalnızca footer veya kapalı SSS içinde bırakılmaz.

### 5.4 Ortak kapanış — FINAL-CTA

**TR başlık:** “Şehir ve tarih belli mi?”  
**TR metin:** “Hangi hizmete ihtiyaç duyduğunuzu ve programınızı kısaca paylaşın. Tercüman uygunluğunu ve günlük çalışma koşullarını birlikte netleştirelim.”  
**TR butonlar:** “Uygunluk ve teklif sor” · “WhatsApp’tan yaz”

**ZH başlık:** “已经确定城市和日期了吗？”  
**ZH metin:** “请简要说明所需服务和行程。我们将根据城市、日期和具体内容确认译员档期及每日服务安排。”  
**ZH butonlar:** “咨询档期与报价” · “WhatsApp 咨询”

### 5.5 Footer

**TR marka açıklaması:** “Türkiye’de makine kurulumu, Çin’de fabrika ve fuar ziyaretleri için Çince–Türkçe sözlü tercümanlık.”

**ZH marka açıklaması:** “为土耳其设备安装及中国工厂、展会参访提供中土双向现场口译。”

**İletişim / 联系方式:**
- WhatsApp: +90 555 044 11 41
- Telefon / 电话: +90 507 528 61 87
- E-posta / 邮箱: info@cince-tercuman.com

**Bağlantılar:** Dört hizmet · Hizmet bölgeleri · Günlük ücret · Hazırlık rehberleri · Sık sorulan sorular · Hakkımızda · İletişim. Gizlilik bağlantısı ancak gerçek veri işleme düzenine göre tamamlanmış metne gider.

**TR alt satır:** “© {yıl} Çince Tercüman. Tüm hakları saklıdır.”  
**ZH alt satır:** “© {year} Çince Tercüman. 保留所有权利。”

Eski adres, harita iframe’i ve gerçekliği onaylanmamış sosyal medya bağlantıları eklenmez. İletişim sayfasında herhangi bir doğrulanmamış ofis adresi gösterilmez.


## 6. Ana sayfa — bölüm bölüm

**Türkçe URL:** `/`  
**Çince URL:** `/zh/`  
**Sayfanın görevi:** Yeni ziyaretçinin dört hizmeti ayırt etmesi ve doğru talebe ilerlemesi.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çince Tercüman \| Türkiye ve Çin’de Sözlü Tercümanlık | 中土口译服务｜土耳其设备安装与中国工厂、展会参访 |
| Meta description | Türkiye’de makine kurulumu, Çin’de fabrika ve fuar ziyaretleri için Çince tercüman. Şehir ve tarihinizi paylaşın, günlük hizmet için uygunluk ve teklif sorun. | 提供土耳其设备安装、中国工厂参访和展会现场的中土双向口译。按天计费，请告知城市、日期和需求，咨询档期与报价。 |

### 6.1 Ekran 1 — Hero

**Düzen:** Header altında, solda kısa açıklama ve CTA; sağda dört alanlı talep kartı. Büyük stok fotoğraf yok. TR’de Çin ve Türkiye dengeli, ZH’de Türkiye’ye gelen teknik ekibin ihtiyacı ilk paragrafta görünür.

**TR üst etiket:** “Çince–Türkçe sözlü tercümanlık”

# Türkiye ve Çin’de profesyonel Çince tercüman desteği

“Makine kurulumu, Çin’de fabrika ve fuar ziyaretleriniz için sözlü tercümanlık. Şehrinizi, tarihlerinizi ve ihtiyacınızı paylaşın; programınıza uygun desteği birlikte planlayalım.”

**Ana CTA:** “Uygunluk ve teklif sor”  
**İkinci CTA:** “WhatsApp’tan yaz”  
**Kısa satır:** “Günlük çalışma · Çok şehirli tercüman ağı · Açık masraf bilgisi”

**ZH üst etiket:** “中文与土耳其语双向口译”

# 在土耳其与中国，清楚沟通每一步

“为前往土耳其进行设备安装的技术团队，以及在中国参访工厂和展会的企业提供现场口译。请告知城市、日期和沟通内容，我们将据此确认合适的服务安排。”

**Ana CTA:** “咨询档期与报价”  
**İkinci CTA:** “WhatsApp 咨询”  
**Kısa satır:** “按天计费 · 多城市译员网络 · 费用项目清晰”

**Talep kartı başlığı TR / ZH:** “Tercümana nerede ihtiyacınız var?” / “您需要哪里的口译服务？”

Kart alanları: hizmet, şehir, tarih, kısa ihtiyaç. Tam alan ve hata metinleri bölüm 16’dadır. PRICE-NOTE kartın altında gösterilir. Hizmet seçmeden de doğrudan WhatsApp’a geçilebilir.

### 6.2 Ekran 2 — Dört hizmet

**TR H2:** “Programınıza uygun tercümanlık hizmetini seçin”  
**TR giriş:** “Kurulum sahasında, fabrika ziyaretinde veya fuar görüşmesinde ihtiyaç farklıdır. Hizmet kapsamını programınıza göre netleştiriyoruz.”

**ZH H2:** “按您的行程选择口译服务”  
**ZH giriş:** “设备安装、工厂参访和展会交流的沟通重点各不相同。请先选择与您行程相符的服务。”

| Kart | TR gerçek metin | ZH gerçek metin |
|---|---|---|
| Çin’de tercüman / 中国现场口译 | Çin’deki planlanmış görüşmelerinizde Çince–Türkçe sözlü iletişim desteği. Şehir ve tarihlerinize göre tercüman uygunluğunu sorun. | 为在中国的既定会面与现场行程提供中土双向口译。请根据城市及日期咨询译员档期。 |
| Makine kurulumu / 设备安装口译 | Çinli teknik ekip ile işletmeniz arasındaki kurulum, devreye alma ve kullanım açıklamalarını anlaşılır biçimde aktaralım. | 协助中国技术团队与土耳其工厂沟通设备安装、调试及使用说明。 |
| Fabrika ziyareti / 工厂参访口译 | Belirlediğiniz fabrikalarda üretim akışı, ürün özellikleri ve çalışma koşulları hakkındaki görüşmelere sözlü tercümanlık. | 在您选定的工厂，协助双方沟通生产流程、产品参数及相关安排。 |
| Fuar ziyareti / 展会口译 | Çin’de katılacağınız fuarda stant görüşmeleri, ürün açıklamaları ve soru-cevaplar için yanınızdayız. | 在中国展会现场，协助双方进行展位交流、产品介绍与问答。 |

Kartların her biri kendi hizmet sayfasına “Hizmeti incele / 查看服务详情” bağlantısı verir. ZH ana sayfasında makine kurulumu kartı ilk sıraya alınabilir.

### 6.3 Ekran 3 — İhtiyaçtan hizmete kısa yönlendirme

**TR H2:** “Şu durumlardan biri sizin programınıza uyuyor mu?”

- “Çin’den gelen teknik ekip makineyi kuracak.” → Makine kurulumu sayfası.
- “Çin’de görüşeceğim fabrikaları belirledim.” → Fabrika ziyareti sayfası.
- “Çin’de bir fuara katılacağım.” → Fuar tercümanlığı sayfası.
- “Çin’de birden fazla görüşmem var.” → Çin’de tercüman sayfası.

**ZH H2:** “哪一种情况符合您的安排？”

- “我们的技术团队将前往土耳其安装设备。” → 设备安装口译。
- “我们将接待或陪同土耳其客户参访中国工厂。” → 工厂参访口译。
- “我们将在中国展会现场与土耳其客户交流。” → 展会口译。
- “我们在中国有多场需要中土口译的会面。” → 中国现场口译。

Bunlar gerçek müşteri vaka çalışmaları değil, ziyaretçinin hizmet seçmesine yardımcı olan senaryo metinleridir. Şirket ismi veya sonuç sayısı eklenmez.

### 6.4 Ekran 4 — Nerelerde hizmet veriyoruz?

**TR H2:** “Türkiye ve Çin’de birçok şehirde tercüman ağı”

“Türkiye’de İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep; Çin’de Guangzhou, Shanghai ve Beijing başta olmak üzere farklı şehirlerdeki tercüman ağımızla talepleri değerlendiriyoruz. Yakın şehirler ve merkez dışındaki çalışma noktaları için programınızı paylaşabilirsiniz.”

“Listelenen şehirler hizmet bölgelerini belirtir. Tercüman uygunluğu tarih ve çalışma konumuna göre teyit edilir.”

**ZH H2:** “覆盖土耳其与中国多座城市的译员网络”

“我们的服务网络涉及土耳其的伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利、加济安泰普，以及中国的广州、上海和北京。附近城市及市区以外的现场需求，可根据具体行程咨询。”

“城市列表表示服务范围，并不代表每座城市均设有办公室。译员档期需根据日期和实际地点确认。”

**CTA:** “Hizmet bölgelerini incele” / “查看服务地区”

### 6.5 Ekran 5 — Nasıl çalışıyoruz?

**TR H2:** “Üç adımda çalışma planını netleştirelim”

1. **İhtiyacınızı paylaşın.** “Hizmeti, şehri, tarihleri ve görüşmenin konusunu yazın.”
2. **Uygunluk ve günlük teklifi görüşelim.** “Programınıza göre tercüman uygunluğunu, günlük çalışma aralığını ve ayrıca alınan masrafları netleştirelim.”
3. **Programı karşılıklı teyit edelim.** “Çalışma yeri, buluşma saati ve hizmet kapsamı teyit edildikten sonra saha programına geçelim.”

**ZH H2:** “用三个步骤确认服务安排”

1. **说明需求。** “请告知服务类型、城市、日期和沟通主题。”
2. **确认档期与日费。** “根据行程确认译员档期、每日工作时段及另计费用。”
3. **双方确认行程。** “明确工作地点、见面时间及口译范围后，再落实现场安排。”

**Ortak alt not TR:** “WhatsApp mesajı göndermek tek başına rezervasyon oluşturmaz.”  
**ZH:** “发送咨询消息并不代表预约已确认。”

### 6.6 Ekran 6 — Neden bu çalışma biçimi?

**TR H2:** “Önce beklentileri netleştiriyoruz”

**Kapsam belli:** “Tercümanın hangi görüşmelere katılacağını ve hangi konuların konuşulacağını önceden belirleyelim.”

**Konum belli:** “Şehir adı kadar fabrika veya fuar alanının gerçek konumu da önemli. Çalışma noktasını programın başında paylaşın.”

**Ücret kalemleri belli:** “Günlük tercümanlık ücreti ile ulaşım, konaklama ve yeme-içme giderlerini ayrı değerlendirelim.”

**ZH H2:** “先把安排说清楚，再进入现场”

**范围清楚：** “提前明确译员参加哪些会面、沟通哪些内容。”

**地点清楚：** “除了城市名称，还需要工厂或展馆的实际位置。”

**费用清楚：** “每日口译费用与交通、住宿及餐饮费用分别确认。”

### 6.7 Ekran 7 — Ana sayfa SSS

**TR H2:** “İlk sorularınıza kısa cevaplar”  
**ZH H2:** “常见问题，先了解这些”

**Hangi hizmetleri veriyorsunuz?**  
“Çin’de sözlü tercümanlık, makine kurulumu sırasında teknik tercümanlık, Çin’de fabrika ziyareti ve fuar tercümanlığı sunuyoruz.”

**提供哪些服务？**  
“我们提供中国现场口译、设备安装口译、中国工厂参访口译以及展会口译。”

**Hizmet nasıl ücretlendiriliyor?**  
“Günlük ücret üzerinden çalışıyoruz. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme bedelleri ayrıca hesaplanır.”

**如何计费？**  
“口译服务按天计费，市内交通、城际交通、住宿及餐饮费用另计。”

**Talep oluşturmak için hangi bilgiler gerekli?**  
“Hangi hizmete ihtiyaç duyduğunuzu, şehri, tarihleri ve kısa görüşme konusunu paylaşmanız yeterlidir. Kesinleşmeyen bilgileri ayrıca belirtebilirsiniz.”

**咨询时需要提供什么信息？**  
“请提供服务类型、城市、日期和简要沟通内容。尚未确定的信息可以注明。”

**Listede olmayan bir şehir için sorabilir miyim?**  
“Evet. Şehri ve çalışma noktasını paylaşın; programı tercüman ve ulaşım uygunluğuna göre değerlendirelim.”

**列表之外的城市可以咨询吗？**  
“可以。请告知城市和实际地点，我们会结合译员档期及交通安排评估。”

### 6.8 Ekran 8 — Son CTA

FINAL-CTA ve PRICE-NOTE bileşenlerini kullanın. Footer’dan hemen önce görünür. Rehberlere küçük bir metin bağlantısı ekleyin: “Talep öncesi neleri hazırlamalıyım?” / “咨询前需要准备什么？”

**İç linkler:** Dört hizmet, bölgeler, fiyatlar, SSS, iletişim ve ilk hazırlık rehberi. **Şema:** Organization + WebSite + WebPage; ayrıntılar bölüm 23.



<!-- V12_INSERT_BEGIN:home-summary -->
<a id="v12-home-summary"></a>
### v1.2 ana sayfa eki — kısa cevaplar ve doğru sayfaya geçiş

**Yerleşim:** Bölüm 6’daki mevcut kısa SSS alanı. Ana sayfaya 110 soru eklenmez. Aynı niyetli eski cevaplar aşağıdaki kısa sürümlerle tekilleştirilir; soru ayrıntısı ilgili ana sayfa/rehber kaynağında kalır. Bu dört kart “110 soru” sayımına yeniden dahil edilmez.

| Ana sayfadaki soru | Kısa Türkçe cevap | 简体中文 | Ayrıntı |
|---|---|---|---|
| Hangi hizmetleri veriyorsunuz? | Çin’de planlanmış görüşmeler, fabrika ve fuar ziyaretleri; Türkiye’de makine kurulumu ve buna bağlı teknik görüşmeler için Çince–Türkçe sözlü tercümanlık sunuyoruz. | 提供中国既定会面、工厂及展会参访，以及土耳其设备安装和相关技术沟通的中土口译。 | Genel hizmet sayfasında Q001 |
| Hangi şehirlerde hizmet alabilirim? | Türkiye ve Çin’deki tercüman ağımızla şehir, tarih ve konuya göre uygunluk değerlendiriyoruz. Gerçek çalışma konumunuzu paylaşın. | 通过土耳其与中国的译员网络，根据城市、日期及主题评估档期。请提供实际地点。 | Hizmet bölgelerinde Q002 |
| Hizmet nasıl ücretlendiriliyor? | Günlük ücretlendirme yapıyoruz. Şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır. | 按天计费，市内及城际交通、住宿和餐饮另计。 | Günlük ücret sayfasında Q007 ve Q010 |
| Teklif için ne göndermeliyim? | Hizmet türünü, şehir ve çalışma noktasını, tarihleri ve kısa ihtiyacınızı paylaşın. | 请提供服务类型、城市及实际地点、日期和简要需求。 | Günlük ücret sayfasında Q013; CTA mevcut teklif formuna |

**Çince ana sayfa ilavesi:** Bölüm 34.2’deki “中国技术团队赴土耳其安装设备？” giriş kartı aynen uygulanır. Kurulum ve İstanbul bağlantıları Çince eşleniklere gider. Kart yeni bir hizmet veya ikinci bir ana sayfa oluşturmaz.
<!-- V12_INSERT_END:home-summary -->

## 7. Genel hizmet seçimi — mevcut /cince-tercuman/ korunur

**Türkçe URL:** `/cince-tercuman/`  
**Çince URL:** `/zh/interpreting-services/`  
**Sayfanın görevi:** Dört ihtiyacı karşılaştırmak; ana sayfayı tekrarlamadan mevcut genel hizmet URL’sini yaşatmak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çince Sözlü Tercümanlık Hizmetleri \| Çince Tercüman | 中土口译服务范围｜设备安装、工厂与展会 |
| Meta description | Çin’de tercüman, makine kurulumu, fabrika ve fuar ziyaretleri için sözlü tercümanlık seçeneklerini karşılaştırın. Günlük hizmet için uygunluk sorun. | 了解中土现场口译的四类服务：设备安装、中国现场会面、工厂参访和展会交流。按天计费，可咨询档期与报价。 |

### Ekran 1 — Hero

**TR H1:** “Hangi Çince tercümanlık hizmetine ihtiyacınız var?”  
“Çalışma yeriniz ve görüşmenin konusu, ihtiyacınız olan sözlü tercümanlık hizmetini belirler. Aşağıdaki dört başlık arasından programınıza uygun olanı seçin.”

**ZH H1:** “您的行程需要哪一种中土口译？”  
“工作地点与沟通内容决定口译安排。请从下面四类服务中选择与行程相符的一项。”

### Ekran 2 — Karar tablosu

| Programınız | Hizmet | İlk paylaşılacak bilgi |
|---|---|---|
| Çin’de planlanmış görüşmeler | Çin’de tercüman | Şehirler, tarihler ve görüşme konusu |
| Çinli teknik ekiple kurulum | Makine kurulumu tercümanlığı | Makine türü, tesis konumu, tarihler |
| Çin’de belirlenmiş fabrika ziyareti | Fabrika ziyareti tercümanlığı | Fabrika konumu ve ziyaret gündemi |
| Çin’de fuara katılım | Fuar tercümanlığı | Fuar adı, şehir ve katılım günleri |

| 您的安排 | 对应服务 | 咨询时请提供 |
|---|---|---|
| 在中国进行既定会面 | 中国现场口译 | 城市、日期、会面主题 |
| 中国技术团队进行设备安装 | 设备安装口译 | 设备类型、工厂地点、日期 |
| 参访已选定的中国工厂 | 工厂参访口译 | 工厂地点与沟通议题 |
| 在中国参加展会 | 展会口译 | 展会名称、城市、参会日期 |

Mobilde tablo kartlara dönüşür. Satırlar aynı dört hizmet URL’sine bağlanır.

### Ekran 3 — Ortak çalışma biçimi

**TR H2:** “Her hizmette ortak olan yaklaşım”  
“Önce şehir, tarih ve kapsamı netleştiriyoruz. Ardından tercüman uygunluğunu ve günlük ücret teklifini değerlendiriyoruz. Ulaşım, konaklama ve yeme-içme giderleri günlük hizmet bedelinden ayrı ele alınır.”

**ZH H2:** “所有服务共同遵循的安排方式”  
“先确认城市、日期和口译范围，再确认译员档期与每日费用。交通、住宿及餐饮费用与口译日费分别计算。”

### Ekran 4 — SSS

**Bir programda fabrika ve fuar ziyareti birlikte olabilir mi?**  
“Evet, aynı talepte iki ihtiyacı da belirtebilirsiniz. Her günün yeri ve gündemi ayrı değerlendirilir; hizmet yine günlük esasla planlanır.”

**一个行程可以同时包含工厂和展会吗？**  
“可以，请在同一条咨询中说明两种需求。我们会逐日确认地点与内容，仍按天安排服务。”

**Hangi hizmeti seçmem gerektiğinden emin değilim.**  
“İletişim ekranında ‘Emin değilim’ seçeneğini kullanın veya WhatsApp’tan programınızı kısaca yazın. Bu seçenek ayrı bir hizmet değil, doğru başlığa yönlendirme içindir.”

**不确定应该选哪一种服务怎么办？**  
“可以选择‘尚不确定’，或通过 WhatsApp 简要说明行程。该选项用于确认需求，并不代表新增服务。”

### Ekran 5 — Kapanış

FINAL-CTA. **Şema:** CollectionPage + ItemList, görünür dört hizmeti listeler. Ayrı bir `/hizmetler/` kopyası açılmaz.



<!-- V12_INSERT_BEGIN:qa-services -->
<a id="v12-page-services"></a>
### v1.2 sayfa eki — Genel Çince tercümanlık hizmetleri

**TR hedef:** `/cince-tercuman/`  
**ZH hedef:** `/zh/interpreting-services/`
**Ekrana yerleştirme:** Son açıklama bölümünden sonra, kapanış teklif CTA’sından önce
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** İhtiyacınızı doğru hizmetle eşleştirelim. Nerede, hangi tarihlerde ve hangi konuda sözlü iletişim desteği gerektiğini paylaşmanız yeterli.

**ZH bölüm girişi:** 先明确适合您需求的服务。请说明地点、日期及需要现场语言支持的内容。

#### Bölüm başlığı TR: Hizmet kapsamı ve günlük çalışma
**ZH başlık:** 服务范围与按天安排

<a id="doc-q001"></a>
#### Q001 — Hangi işler için Çince tercümanlık hizmeti alabilirim?

**Türkçe cevap — site metni**
Çin’de planladığınız görüşmeler, fabrika ziyaretleri ve fuar programları için Çince–Türkçe sözlü tercümanlık sunuyoruz. Türkiye’de ise makine kurulumu, devreye alma ve bunlara bağlı teknik eğitim sırasında ekipler arasındaki iletişime destek veriyoruz. Hizmetinizi, şehrinizi ve tarihlerinizi paylaşarak programınıza uygun tercümanlık desteğini sorabilirsiniz.

**简体中文 — 问题**
哪些工作可以安排中土口译服务？

**简体中文 — 回答**
我们为您在中国已安排的会面、工厂参访及展会行程提供中文与土耳其语双向口译。在土耳其，服务重点是设备安装、调试及相关技术培训中的现场沟通。请提供服务类型、城市与日期，以便确认适合您行程的口译安排。

**Bileşen kimliği:** `Q001` · **Canlı HTML ankrajı:** `faq-001`

<a id="doc-q003"></a>
#### Q003 — Tercüman hem Çince’den Türkçe’ye hem Türkçe’den Çince’ye çeviri yapıyor mu?

**Türkçe cevap — site metni**
Evet. Hizmetimiz, aynı görüşmede Çince’den Türkçe’ye ve Türkçe’den Çince’ye sözlü iletişim desteğini kapsar. Kullanılacak dil veya lehçeye ilişkin özel bir ihtiyacınız varsa talep sırasında belirtin. Tercümanın bu ihtiyaca uygunluğu hizmet teyidinden önce netleştirilir.

**简体中文 — 问题**
口译是否同时包含中文译成土耳其语和土耳其语译成中文？

**简体中文 — 回答**
是的，我们提供中文与土耳其语双向现场口译。如果对使用的语言或方言有特殊要求，请在咨询时说明，并在确认服务前核实译员是否符合该要求。

**Bileşen kimliği:** `Q003` · **Canlı HTML ankrajı:** `faq-003`

<a id="doc-q004"></a>
#### Q004 — Yalnızca bir gün için tercüman tutabilir miyim?

**Türkçe cevap — site metni**
Evet, uygunluk bulunması hâlinde yalnızca bir gün için tercümanlık talep edebilirsiniz. Çalışma modelimiz günlüktür; görüşmeniz daha kısa sürse de yarım günlük veya saatlik bir paket sunmuyoruz. Talebinizde o günün şehrini, çalışma noktasını ve yaklaşık programını belirtmeniz yeterli.

**简体中文 — 问题**
只需要一天，也可以预约口译吗？

**简体中文 — 回答**
可以，确认档期后可安排单日服务。我们的计费方式为按天，不提供半天或按小时的套餐，即使实际会面较短也按日服务方式评估。请提供当天的城市、实际地点及大致行程。

**Bileşen kimliği:** `Q004` · **Canlı HTML ankrajı:** `faq-004`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Şehir ve tarihlerinizi paylaşın
**ZH CTA:** 提供城市与日期，咨询安排
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-services -->

## 8. Çin’de tercüman

**Türkçe URL:** `/cinde-tercuman/`  
**Çince URL:** `/zh/interpreter-in-china/`  
**Sayfanın görevi:** Genel Çin programlarını yakalamak ve fabrika/fuar ihtiyacını ilgili alt hizmete yönlendirmek.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çin’de Tercüman \| Çince–Türkçe Sözlü Tercümanlık | 中国现场中土口译｜广州、上海、北京及周边行程 |
| Meta description | Guangzhou, Shanghai ve Beijing başta olmak üzere Çin’de planlanmış görüşmeleriniz için Türkçe–Çince tercüman. Günlük uygunluk ve teklif sorun. | 为在中国的既定会面及现场行程提供中土双向口译。可咨询广州、上海、北京及周边地区，按城市和日期确认档期。 |

### Ekran 1 — Hero

**TR H1:** “Çin’deki görüşmeleriniz için Çince–Türkçe tercüman”  
“Guangzhou, Shanghai ve Beijing başta olmak üzere Çin’deki planlanmış görüşmelerinizde sözlü iletişim desteği alın. Ziyaret edeceğiniz şehirleri, tarihleri ve konuşulacak konuları paylaşın.”

**ZH H1:** “为在中国的会面提供中土双向现场口译”  
“在广州、上海、北京及可安排的周边地区，协助土耳其来访人员与中方沟通。请提供会面城市、日期及讨论内容。”

CTA: “Çin programım için uygunluk sor” / “咨询中国行程口译档期”。 PRICE-NOTE görünür.

### Ekran 2 — Kapsam

**TR H2:** “Görüşmenin her iki tarafını da anlayarak ilerleyin”  
“Planladığınız yüz yüze görüşmelerde sorularınızın ve karşı tarafın açıklamalarının sözlü olarak aktarılmasına destek oluyoruz. Birden fazla şehir veya çalışma noktası varsa her günü ayrı değerlendiriyoruz. Fabrika ve fuar programları için aşağıdaki hizmet sayfalarından ayrıntıları inceleyebilirsiniz.”

**ZH H2:** “让双方的提问与说明得到清楚传达”  
“我们在既定的面对面会谈中提供双向口译，传达提问、回答与现场说明。若行程涉及多个城市或地点，将按每天的安排分别确认。工厂和展会行程可查看相应服务页面。”

İki bağlantı kartı: Fabrika ziyareti / 工厂参访口译; Fuar ziyareti / 展会口译.

### Ekran 3 — Teklif öncesi gereken bilgiler

**TR H2:** “Şehir adı kadar çalışma noktası da önemli”  
“Bulunduğunuz şehir, görüşme yapılacak adres veya bölge, tarih aralığı ve görüşmenin konusunu yazın. Bir gün içinde farklı noktalara geçilecekse sıralamayı da ekleyin. Henüz kesinleşmeyen durakları belirtmeniz yeterlidir.”

**ZH H2:** “除了城市名称，也请说明实际地点”  
“请告知会面地址或区域、日期和沟通主题。同一天如需前往多个地点，也请说明先后顺序；尚未确定的安排可以注明。”

### Ekran 4 — Şehir bağlantıları

Guangzhou, Shanghai ve Beijing eski şehir URL’lerine bağlantı. “Diğer şehirler için programınızı paylaşın.” / “其他城市请提供具体行程咨询。” Bölgeler sayfasına ek bağlantı.

### Ekran 5 — SSS

**Çin’de her şehirde tercümanınız var mı?**  
“Birçok şehirde tercüman ağımız bulunuyor; ancak her şehir ve tarih için yerleşik ya da hazır tercüman sözü vermiyoruz. Çalışma noktasını ve tarihleri paylaşınca uygunluğu değerlendiriyoruz.”

**中国每座城市都能立即安排译员吗？**  
“我们有多城市译员网络，但不承诺每座城市、每个日期均有驻地译员可立即安排。请提供实际地点和日期以确认。”

**Birden fazla şehir için tek talep gönderebilir miyim?**  
“Evet. Her şehri ve ilgili çalışma günlerini belirtin. Tercüman ve ulaşım planı bu programa göre değerlendirilir.”

**多城市行程可以一起咨询吗？**  
“可以。请分别列出每座城市及对应日期，我们将据此评估译员与交通安排。”

**Tarihlerim henüz kesinleşmedi.**  
“Yaklaşık dönemi yazabilirsiniz. Kesin uygunluk ve çalışma planı tarihler netleştiğinde teyit edilir.”

**日期还没有确定，可以先咨询吗？**  
“可以先说明大致时间，最终档期及工作安排需在日期确定后再次确认。”

**Görüşmelerde kararları tercüman mı verir?**  
“Tercüman taraflar arasındaki sözlü iletişimi destekler. Görüşmeye ilişkin ticari ve teknik kararlar ilgili taraflara aittir.”

**译员会代替双方作出决定吗？**  
“译员负责协助口头沟通，商业及技术决定由相关各方自行作出。”

### Ekran 6 — Kapanış

FINAL-CTA + PRICE-NOTE. **İç link:** Çin şehirleri, fabrika, fuar, ücret, iletişim. **Şema:** Service + BreadcrumbList.



<!-- V12_INSERT_BEGIN:qa-china -->
<a id="v12-page-china"></a>
### v1.2 sayfa eki — Çin’de tercüman

**TR hedef:** `/cinde-tercuman/`  
**ZH hedef:** `/zh/interpreter-in-china/`
**Ekrana yerleştirme:** Son açıklama bölümünden sonra, kapanış teklif CTA’sından önce
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Çin programınızda tercüman ihtiyacını, ortak dil ve ziyaret edeceğiniz gerçek noktalara göre değerlendirelim.

**ZH bölüm girişi:** 根据双方沟通语言及实际访问地点，评估中国行程的口译需求。

#### Bölüm başlığı TR: Çin’de doğru dil desteğini seçmek
**ZH başlık:** 选择适合中国行程的语言支持

<a id="doc-q049"></a>
#### Q049 — Çin’de Türkçe bilen tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Çin’de tercüman ararken yalnızca bulunduğu şehri değil, Türkçe–Çince iletişim becerisini, konuya uygunluğunu ve programınızdaki ulaşım ihtiyacını da değerlendirin. Guangzhou, Shanghai ve Beijing başta olmak üzere ağımız üzerinden talepleri inceliyoruz. Ziyaret edeceğiniz yerleri ve tarihleri paylaşırsanız sizin programınız için uygunluk araştırılabilir.

**简体中文 — 问题**
在中国如何寻找会土耳其语的口译员？

**简体中文 — 回答**
除所在城市外，还应确认译员的中土沟通能力、主题适配度及行程中的交通需求。我们主要通过广州、上海、北京等城市的译员网络评估需求。请提供访问地点与日期，以便核实具体档期。

**Bileşen kimliği:** `Q049` · **Canlı HTML ankrajı:** `faq-049`

<a id="doc-q050"></a>
#### Q050 — Çin’e iş için giderken tercüman tutmak gerekir mi?

**Türkçe cevap — site metni**
Her Çin iş seyahati için tercüman zorunludur demiyoruz. İhtiyacınızı, görüşeceğiniz kişilerin ortak diline, konuşmaların teknik ayrıntısına ve aynı gün ziyaret edeceğiniz noktalara göre değerlendirin. Üretim, numune, fiyat veya teslim koşullarını ayrıntılı konuşacaksanız programınızı bizimle paylaşın; hangi görüşmelerde sözlü dil desteği istediğinizi netleştirelim.

**简体中文 — 问题**
去中国出差一定需要口译吗？

**简体中文 — 回答**
并非所有中国商务行程都必须安排口译。应根据双方能否使用共同语言、技术细节及访问安排评估。如果需要深入讨论生产、样品、价格或交付条件，可向我们说明行程，明确哪些会面需要语言支持。

**Bileşen kimliği:** `Q050` · **Canlı HTML ankrajı:** `faq-050`

<a id="doc-q051"></a>
#### Q051 — İngilizce biliyorum, Çin’de yine de Çince tercümana ihtiyacım olur mu?

**Türkçe cevap — site metni**
İngilizce bilmeniz tek başına bütün görüşmelerin İngilizce yürüyebileceği anlamına gelmez; karşı tarafta kimlerle ve hangi konularda konuşacağınız da önemlidir. Görüşmeleri İngilizce rahatça yürütebiliyorsanız ayrıca tercüman gerekmeyebilir. Üretim sahası, operatörler veya teknik ayrıntılar için ortak dilin yeterli olup olmadığını önceden teyit etmenizi öneriyoruz.

**简体中文 — 问题**
我会英语，在中国仍然需要中文口译吗？

**简体中文 — 回答**
是否需要取决于对方人员及沟通主题，不能只根据您会英语来判断。如果双方能顺畅使用英语，未必需要额外口译。涉及生产现场、操作人员或技术细节时，建议提前确认共同语言是否足够。

**Bileşen kimliği:** `Q051` · **Canlı HTML ankrajı:** `faq-051`

#### Bölüm başlığı TR: Şehirler ve çalışma noktaları
**ZH başlık:** 城市与实际工作地点

<a id="doc-q067"></a>
#### Q067 — Çin’de birden fazla şehirde çalışabilecek tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Talebinizi yalnızca ilk şehir için değil, bütün güzergâh için iletin. Her günün şehrini, çalışma noktasını ve planlanan geçişleri paylaşın; tek tercümanla devam etme ihtiyacı ile farklı şehirlerde ayrı görevlendirme seçenekleri uygunluğa göre değerlendirilebilir. Hiçbir seçeneği tüm programlarda otomatik olarak sağlayacağımızı söylemiyoruz.

**简体中文 — 问题**
如何寻找能在中国多个城市工作的译员？

**简体中文 — 回答**
请提交完整路线，而不只是首个城市。逐日说明城市、工作地点及转场计划，再根据实际档期评估同一译员随行或不同城市分别安排的可能性。我们不承诺所有行程都能自动采用某一种方案。

**Bileşen kimliği:** `Q067` · **Canlı HTML ankrajı:** `faq-067`

<a id="doc-q068"></a>
#### Q068 — Çin’de ziyaret edeceğim fabrikaya yakın bir tercüman bulabilir miyim?

**Türkçe cevap — site metni**
Fabrikanın tam adresini veya harita konumunu paylaşırsanız tercümanınızın ulaşımını gerçek çalışma noktasına göre değerlendirebiliriz. Yalnızca şehir adı, fabrikanın merkezden ne kadar uzakta olduğunu anlamak için yeterli olmayabilir. Yakında uygun bir tercüman bulunacağı garanti değildir; konum, tarih ve konuya uygunluk birlikte ele alınır.

**简体中文 — 问题**
可以安排靠近我要访问工厂的译员吗？

**简体中文 — 回答**
提供准确地址或地图位置后，可按实际工作地点评估译员交通。仅有城市名称不一定足以判断工厂距离市中心多远。我们不能保证附近一定有合适译员，需要同时考虑地点、日期及主题。

**Bileşen kimliği:** `Q068` · **Canlı HTML ankrajı:** `faq-068`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Şehir ve tarihlerinizi paylaşın
**ZH CTA:** 提供城市与日期，咨询安排
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-china -->

## 9. Makine kurulumu için Çince teknik tercüman

**Türkçe URL:** `/makine-kurulumu-cince-tercuman/`  
**Çince URL:** `/zh/machine-installation-interpreter/`  
**Sayfanın görevi:** Türkiye’de Çinli teknik ekiple çalışacak firmaları ve Türkiye’ye ekip gönderen Çinli üreticileri aynı hizmette buluşturmak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Makine Kurulumu İçin Çince Teknik Tercüman | 土耳其设备安装口译｜中土技术现场沟通 |
| Meta description | Çinli teknik ekip ile işletmeniz arasında makine kurulumu ve devreye alma sırasında Çince–Türkçe sözlü tercümanlık. Şehir ve tarihle günlük teklif sorun. | 为中国技术团队在土耳其进行设备安装、调试及使用说明提供中土现场口译。请告知设备类型、工厂地点和日期，按天确认服务。 |

### Ekran 1 — Hero

**TR H1:** “Makine kurulumu için Çince teknik tercüman”  
“Çinli teknik ekip ile işletmenizin aynı bilgiyi doğru anlaması için kurulum sahasında sözlü tercümanlık desteği. Makine türünü, tesisin bulunduğu şehri ve çalışma tarihlerini paylaşın.”

**ZH H1:** “为中国技术团队赴土耳其安装设备提供现场口译”  
“协助中国技术人员与土耳其工厂沟通安装步骤、调试说明及使用要求。请提供设备类型、现场城市和计划日期。”

CTA: “Kurulum için uygunluk sor” / “咨询安装口译档期”。 PRICE-NOTE.

### Ekran 2 — Hangi iletişime destek oluyoruz?

| TR başlık ve metin | ZH başlık ve metin |
|---|---|
| **Kurulum adımları:** Teknik ekibin açıkladığı işlem sırası, saha ihtiyaçları ve tarafların sorularının aktarılması. | **安装步骤：** 传达技术团队说明的操作顺序、现场需求及双方提问。 |
| **Devreye alma görüşmeleri:** Yapılan testler ve gözlenen durumlar hakkında taraflar arasındaki sözlü iletişim. | **调试沟通：** 协助双方交流测试过程与现场观察情况。 |
| **Kullanım açıklamaları:** Kurulum programına bağlı operatör bilgilendirmelerinde sözlü dil desteği. | **使用说明：** 在安装行程相关的操作人员说明环节提供口译。 |

### Ekran 3 — Rol ayrımı

**TR H2:** “Teknik ekip uygular, tercüman iletişimi destekler”  
“Kurulum, teknik uygulama ve güvenlik kararları yetkili teknik ekiplerin sorumluluğundadır. Tercüman, bu ekipler ile işletmeniz arasındaki açıklamaları ve soruları sözlü olarak aktarır. İşin teknik konusu talep aşamasında paylaşılmalıdır.”

**ZH H2:** “技术人员负责操作，译员协助沟通”  
“设备安装、技术操作及安全决定由有权限的技术团队负责。译员传达技术团队与工厂之间的口头说明和提问。咨询时请明确设备及技术内容。”

### Ekran 4 — Talep kontrol listesi

**TR H2:** “Teklif için dört bilgiyle başlayalım”

“Makine veya üretim hattının türü; fabrikanın şehir ve çalışma noktası; planlanan başlangıç ve bitiş tarihleri; teknik ekibin hangi aşamalarda tercümana ihtiyaç duyacağı. Varsa günlük çalışma saatlerinizi de belirtin.”

**ZH H2:** “咨询时先提供四项信息”

“设备或产线类型、工厂城市及实际位置、计划开始和结束日期、需要口译配合的技术环节。如已确定每日工作时段，也请一并说明。”

**TR destek notu:** “Terminoloji hazırlığı için gerekli bilgiler çalışma planı netleşirken konuşulur. İlk talep formuna gizli teknik dosya yüklemeniz gerekmez.”

**ZH destek notu:** “术语准备所需的信息可在确认安排时讨论。首次咨询无需上传保密技术文件。”

### Ekran 5 — Hizmet bölgeleri

**TR:** “İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep başta olmak üzere, çevre şehirlerdeki tesisler için de tarih ve çalışma konumuna göre uygunluk değerlendirmesi yapıyoruz. Kocaeli ve Gebze programları için ilgili bölge sayfalarına bakabilirsiniz.”

**ZH:** “可咨询伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利、加济安泰普及周边工厂的现场需求。科贾埃利和盖布泽行程也可按具体日期与地点咨询。”

### Ekran 6 — SSS

**Tercüman makineyi kuruyor mu?**  
“Hayır. Kurulumu yetkili teknik ekip yapar. Biz kurulum sırasındaki Çince–Türkçe sözlü iletişime destek oluruz.”

**译员负责安装设备吗？**  
“不负责。设备由有权限的技术人员安装，我们提供安装过程中的中土口译。”

**Kurulum birkaç gün sürerse nasıl ücretlendirilir?**  
“Her çalışma günü günlük esasla değerlendirilir. Tarih aralığı, günlük çalışma düzeni ve ayrıca alınan giderler teklif sırasında netleştirilir.”

**安装持续多天，如何计费？**  
“每个工作日按天安排。日期、每日工作安排及另计费用在报价时分别确认。”

**Fabrikamız şehir merkezinin dışında.**  
“Talep sırasında tesisin gerçek konumunu paylaşın. Şehir içi veya şehir dışı ulaşım ihtiyacı bu bilgiye göre değerlendirilir ve ayrıca hesaplanır.”

**工厂位于市区外，可以安排吗？**  
“请提供工厂实际位置。市内或城际交通安排将据此评估，相关费用另计。”

**Teknik konuya uygunluk nasıl değerlendiriliyor?**  
“Makine türü ve görüşülecek konular önceden paylaşılır. Tercüman planlaması bu bilgiler ve tarihler dikkate alınarak yapılır; her teknik alan için otomatik uygunluk sözü verilmez.”

**如何评估译员是否适合技术内容？**  
“请提前说明设备类型和沟通议题，再结合日期确认安排。不会在不了解技术内容时承诺适用于所有专业领域。”

**Günlük çalışma süresi kaç saat?**  
“Başlangıç ve bitiş saatleri saha programınıza göre teklif sırasında netleştirilir. Sitede tüm işler için geçerli tek bir saat sınırı ilan etmiyoruz.”

**每天工作多少小时？**  
“每日开始和结束时间需结合现场行程在报价时确认，本站不对所有工作统一承诺同一时长。”

### Ekran 7 — Kapanış

FINAL-CTA + PRICE-NOTE. **İç link:** İstanbul/Kocaeli/Gebze, diğer bölgeler, ücretler, kurulum hazırlık rehberi, iletişim. **Şema:** Service + BreadcrumbList.



<!-- V12_INSERT_BEGIN:qa-machine -->
<a id="v12-page-machine"></a>
### v1.2 sayfa eki — Makine kurulumu için Çince tercüman

**TR hedef:** `/makine-kurulumu-cince-tercuman/`  
**ZH hedef:** `/zh/machine-installation-interpreter/`
**Ekrana yerleştirme:** Q084: “Tercüman ne yapar?” açıklamasında açık metin. Diğer sorular: hizmet kapsamından sonra gruplu SSS; kapanış CTA’sından önce.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Teknik açıklamaların doğru anlaşılması için önce tercümanın görevini, hazırlık ihtiyacını ve çalışma programını netleştirelim.

**ZH bölüm girişi:** 先明确译员职责、准备要求及工作安排，再开展现场技术沟通。

#### Bölüm başlığı TR: Önce görev sınırını netleştirelim
**ZH başlık:** 先明确职责边界

<a id="doc-q084"></a>
#### Q084 — Çince tercüman makineyi kurar mı, yoksa teknik ekibin söylediklerini mi çevirir?

**Türkçe cevap — site metni**
Tercüman makineyi kurmaz. Çinli teknik ekibin açıklamalarını, işletmenizin sorularını ve taraflar arasındaki sözlü iletişimi aktarır. Montaj, bağlantı, ayar, arıza giderme ve teknik onay ilgili yetkili teknik ekiplerin sorumluluğundadır. Tercümanlık satın almak, teknik kurulum hizmeti veya makinenin çalışacağına ilişkin bir garanti satın almak değildir.

**简体中文 — 问题**
译员负责安装设备，还是只翻译技术团队的说明？

**简体中文 — 回答**
译员不负责安装设备，而是传达中国技术团队的说明、工厂方的问题及双方口头交流。安装、接线、设置、故障处理和技术确认由相关授权技术团队负责。购买口译服务不等于购买安装服务或设备运行保证。

**Bileşen kimliği:** `Q084` · **Canlı HTML ankrajı:** `faq-084`

#### Bölüm başlığı TR: Teknik ekip ve deneyim
**ZH başlık:** 技术团队与相关经验

<a id="doc-q022"></a>
#### Q022 — Makine kurulumu sırasında Çinli teknik ekiple iletişim için tercüman sağlayabiliyor musunuz?

**Türkçe cevap — site metni**
Evet. Makine kurulumu sırasında Çinli teknik ekip ile işletmenizdeki ekip arasındaki Çince–Türkçe sözlü iletişim için tercümanlık talep edebilirsiniz. Makine türünü, çalışma konumunu, tarihleri ve günlük programı paylaşın. Tercümanın görevi teknik açıklamaları ve soruları aktarmaktır; montajı gerçekleştirmek veya teknik uygulamaya karar vermek değildir.

**简体中文 — 问题**
设备安装期间，可以安排译员协助中国技术团队沟通吗？

**简体中文 — 回答**
可以。您可为中国技术团队与土耳其现场团队之间的沟通申请中土口译。请提供设备类型、实际地点、日期及每日安排。译员负责传达技术说明与问题，不负责实施安装或作出技术操作决策。

**Bileşen kimliği:** `Q022` · **Canlı HTML ankrajı:** `faq-022`

<a id="doc-q023"></a>
#### Q023 — Tercüman makine, elektrik, mekanik ve otomasyon terimlerine hâkim mi?

**Türkçe cevap — site metni**
Makine, elektrik, mekanik veya otomasyon ihtiyacınızı tek bir genel başlık altında değerlendirmiyoruz. Konuşulacak sistemleri, makine modelini ve örnek terimleri paylaşın; uygun tercüman ve hazırlık ihtiyacını buna göre değerlendirelim. Bir tercümanın her teknik alana hazır olduğunu varsaymak yerine, işinize özgü terminolojiyi önceden netleştirmek istiyoruz.

**简体中文 — 问题**
译员是否熟悉设备、电气、机械和自动化术语？

**简体中文 — 回答**
我们不会将所有技术内容视为同一类需求。请提供涉及的系统、设备型号及术语示例，以便评估合适的译员和准备要求。不应默认一位译员熟悉所有技术领域，而应提前明确本次工作的具体术语。

**Bileşen kimliği:** `Q023` · **Canlı HTML ankrajı:** `faq-023`

<a id="doc-q024"></a>
#### Q024 — Daha önce benzer bir makinenin veya üretim hattının kurulumunda görev aldı mı?

**Türkçe cevap — site metni**
Bu bilgi, görevlendirilebilecek tercümanın geçmiş çalışmalarına bağlıdır. Makinenizin türünü, marka ve modelini ya da üretim hattının işlevini paylaşın; benzer bir çalışmaya ilişkin deneyim olup olmadığını seçim aşamasında teyit edelim. Doğrulanmamış makine markaları veya geçmiş proje sayıları üzerinden deneyim iddiasında bulunmuyoruz.

**简体中文 — 问题**
译员之前参与过类似设备或生产线的安装口译吗？

**简体中文 — 回答**
这取决于拟安排译员的具体经历。请提供设备类型、品牌型号或生产线用途，以便在选择阶段核实是否有相关经验。我们不会以未经核实的设备品牌或项目数量作出经验承诺。

**Bileşen kimliği:** `Q024` · **Canlı HTML ankrajı:** `faq-024`

#### Bölüm başlığı TR: Eğitim, test ve devreye alma görüşmeleri
**ZH başlık:** 培训、测试与调试沟通

<a id="doc-q025"></a>
#### Q025 — Kurulumun yanında operatör eğitimi sırasında da tercümanlık yapıyor mu?

**Türkçe cevap — site metni**
Kuruluma bağlı operatör eğitimi ve kullanım açıklamaları, önceden belirlenen program içinde sözlü tercümanlık kapsamına alınabilir. Eğitim konularını, katılımcı sayısını ve uygulamalı bölümleri önceden paylaşın. Eğitimi veren ve teknik yetkinliği değerlendiren taraf teknik ekiptir; tercüman, anlatımı ve katılımcıların sorularını iki dil arasında aktarır.

**简体中文 — 问题**
除了安装，操作人员培训也可以提供口译吗？

**简体中文 — 回答**
与安装相关的操作培训及使用说明，可在事先确认的行程中纳入口译范围。请提前提供培训主题、参加人数及实操环节。培训内容及技术能力评估由技术团队负责，译员负责双向传达讲解和提问。

**Bileşen kimliği:** `Q025` · **Canlı HTML ankrajı:** `faq-025`

<a id="doc-q026"></a>
#### Q026 — Arıza, test ve devreye alma aşamalarındaki teknik görüşmelerde destek verebiliyor mu?

**Türkçe cevap — site metni**
Kurulum programına bağlı arıza değerlendirmesi, test ve devreye alma görüşmelerinde sözlü iletişim desteği talep edebilirsiniz. Konuyu ve gerekli teknik hazırlığı önceden değerlendirelim. Tercüman açıklamaları aktarır; arıza teşhisi koymaz, test sonucunu onaylamaz ve ekipmanın güvenli çalışmasına ilişkin teknik sorumluluk üstlenmez.

**简体中文 — 问题**
故障讨论、测试和调试阶段也可以提供口译吗？

**简体中文 — 回答**
与已安排安装工作相关的故障讨论、测试和调试沟通，可提出口译需求，并提前评估主题及准备要求。译员负责传达信息，不负责诊断故障、批准测试结果或承担设备安全运行的技术责任。

**Bileşen kimliği:** `Q026` · **Canlı HTML ankrajı:** `faq-026`

#### Bölüm başlığı TR: Saha hazırlığı ve uzayan program
**ZH başlık:** 入场准备与行程延长

<a id="doc-q027"></a>
#### Q027 — Fabrikamızın iş güvenliği kurallarına uyum ve gerekli koruyucu ekipmanlar nasıl organize ediliyor?

**Türkçe cevap — site metni**
Tesisin giriş koşullarını, zorunlu iş güvenliği bilgilendirmesini ve gereken koruyucu ekipmanları çalışma öncesinde paylaşın. Ekipmanı kimin sağlayacağı ve giriş hazırlığının nasıl yapılacağı program teyidinde netleştirilsin. Tercümanlık planını tesisin kurallarıyla uyumlu kurmak gerekir; tercümanın bulunması teknik ekibin veya işyerinin güvenlik sorumluluklarını devraldığı anlamına gelmez.

**简体中文 — 问题**
工厂安全要求及个人防护用品如何安排？

**简体中文 — 回答**
请提前提供工厂入场要求、必要的安全说明及所需防护用品清单，并在确认行程时明确由谁提供装备及如何完成入场准备。口译安排应符合现场规则；译员在场不代表其接替技术团队或工厂承担安全职责。

**İç uygulama notu — ziyaretçiye gösterilmez:** Koruyucu ekipmanın mevcut olduğu veya tamamının tercüman tarafından sağlanacağı iddia edilmez. İş güvenliği mevzuatı yorumu değil, planlama metnidir.

**Bileşen kimliği:** `Q027` · **Canlı HTML ankrajı:** `faq-027`

<a id="doc-q028"></a>
#### Q028 — Kurulum planlanandan uzun sürerse tercümanlık süresini uzatabilir miyiz?

**Türkçe cevap — site metni**
Kurulumun uzayabileceğini gördüğünüzde yeni tarih ve saatleri mümkün olduğunca erken bildirin. Aynı tercümanın devam edebilmesi, sonraki günlerdeki uygunluğuna bağlıdır. Ek çalışma günleri, günlük ücretler ve ulaşım, konaklama, yeme-içme giderleri yeniden teyit edilmeden programın otomatik uzadığını varsaymayın.

**简体中文 — 问题**
安装超出原计划时，可以延长口译安排吗？

**简体中文 — 回答**
发现安装可能延期时，请尽早提供新增日期及时间。同一译员能否继续取决于后续档期。新增工作日、日费及交通、住宿、餐饮费用需重新确认，不能默认原安排自动延长。

**Bileşen kimliği:** `Q028` · **Canlı HTML ankrajı:** `faq-028`


#### Çinli üretici için ek iletişim bölümü — önceki önerilerin iki dilde tamamlanmış uygulaması

Bölüm 34.2’deki Çince ana sayfa müşteri giriş kartını uygulayın. Bölüm 34.3’teki çok gün ve buluşma konumu soruları, Q042 ve İstanbul yerel ekleriyle tekilleştirilir. Aşağıdaki iki madde ek olarak kalır; kullanıcı listesindeki 110 soruya dahil değildir.

**TR — Çinli makine üreticisiyiz. Sizinle doğrudan Çince iletişim kurabilir miyiz?**
Evet. Makine veya üretim hattı türünü, Türkiye’deki fabrikanın gerçek konumunu, çalışma tarihlerini ve tercümanlık gereken teknik aşamaları Çince olarak iletebilirsiniz. İlk mesajda gizli teknik doküman göndermeniz gerekmez. WhatsApp kullanamıyorsanız e-posta adresimiz üzerinden ulaşabilirsiniz.

**ZH — 我们是中国设备厂家，可以直接用中文咨询吗？**
可以。请用中文提供设备或产线类型、土耳其工厂的实际地点、工作日期及需要口译的技术环节。首次咨询无需发送保密技术资料；无法使用 WhatsApp 时，也可通过我们的邮箱联系。

**TR — Kurulumdaki her teknik aşama için ayrı rezervasyon mu yapmalıyız?**
Aynı program içindeki kurulum, devreye alma ve ilgili kullanım eğitimi görüşmelerini tek talepte, günleriyle birlikte açıklayabilirsiniz. Hangi bölümlerin karşılanabileceği teknik konu ve tercüman uygunluğuyla teyit edilir; tüm aşamalar otomatik olarak kapsama alınmaz.

**ZH — 同一安装行程的每个技术环节都需要单独预约吗？**
可以在同一次咨询中列明安装、调试及相关使用培训的沟通内容，并注明各自日期。可覆盖的环节须结合技术主题与译员档期确认，不会自动保证所有环节均可安排。

#### Bu bölümün iletişim kapanışı
**TR CTA:** Makinenizi, şehrinizi ve tarihlerinizi paylaşın
**ZH CTA:** 提供设备类型、城市与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-machine -->

## 10. Çin’de fabrika ziyareti tercümanlığı

**Türkçe URL:** `/cinde-fabrika-ziyareti-tercuman/`  
**Çince URL:** `/zh/factory-visit-interpreter/`  
**Sayfanın görevi:** Müşterinin seçtiği fabrikaya ziyaretini dil desteğiyle kolaylaştırmak; tedarikçi bulma veya denetim vaat etmemek.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çin’de Fabrika Ziyareti İçin Türkçe–Çince Tercüman | 中国工厂参访口译｜中土双向现场交流 |
| Meta description | Çin’de belirlediğiniz fabrikalara yapacağınız ziyaretlerde Çince–Türkçe sözlü tercümanlık. Fabrika konumu ve tarihle günlük uygunluk ve teklif sorun. | 为土耳其来访人员与中国工厂之间的参访交流提供双向口译。请提供已确定的工厂位置、日期和议题，咨询每日服务安排。 |

### Ekran 1 — Hero

**TR H1:** “Çin’de fabrika ziyaretinizde sorularınızı doğrudan iletin”  
“Belirlediğiniz fabrikalarda üretim akışı, ürün özellikleri ve çalışma koşulları üzerine yapacağınız görüşmeler için Çince–Türkçe sözlü tercümanlık. Fabrikanın konumunu ve ziyaret gündeminizi paylaşın.”

**ZH H1:** “让中国工厂与土耳其来访人员面对面沟通”  
“在已选定的工厂参访中，为生产流程、产品参数和相关安排的讨论提供中土双向口译。请提供工厂地点与沟通议题。”

CTA: “Fabrika ziyaretim için uygunluk sor” / “咨询工厂参访口译”。 PRICE-NOTE.

### Ekran 2 — Ziyaretin üç bölümü

**TR H2:** “Toplantıdan saha gezisine aynı iletişim akışı”

**Açılış görüşmesi:** “Ziyaret amacınızı ve konuşulacak başlıkları karşı tarafa aktarın.”  
**Fabrika içindeki açıklamalar:** “Yetkililerin üretim akışı ve ürünler hakkında anlattıklarını takip edin, sorularınızı iletin.”  
**Kapanış görüşmesi:** “Günün sonunda tarafların açıklamalarını ve sonraki görüşme ihtiyaçlarını sözlü olarak netleştirin.”

**ZH H2:** “从见面讨论到车间参访，保持清楚沟通”

**开场会面：** “说明参访目的和计划讨论的内容。”  
**现场讲解：** “传达厂方关于生产流程及产品的介绍，并协助双方提问。”  
**结束沟通：** “在当天行程结束前，口头确认双方说明及后续需要讨论的问题。”

### Ekran 3 — Ziyaret sizden, dil desteği bizden

**TR H2:** “Belirlediğiniz fabrika ve gündeme göre planlayalım”  
“Görüşeceğiniz fabrikaları ve ziyaret amacınızı siz belirlersiniz. Tercüman, sahada iki tarafın birbirini anlamasına destek olur. Üretim, kalite ve satın alma konusundaki değerlendirmeler ilgili firma yetkililerine aittir.”

**ZH H2:** “按照您确定的工厂与议程安排”  
“由您确定参访工厂及目的。译员协助双方在现场理解彼此；生产、质量及采购判断由相关企业负责人作出。”

### Ekran 4 — Teklif için bilgiler

**TR:** “Fabrikanın açık konumu veya harita bağlantısı, ziyaret tarihi, görüşülecek ürün veya üretim konusu ve aynı gün başka tesis olup olmadığı. Program kesinleştiğinde bu bilgileri çalışma planına dönüştürelim.”

**ZH:** “请提供工厂实际位置或地图链接、参访日期、产品或生产议题，以及同一天是否还有其他工厂。行程明确后，再确认具体工作安排。”

### Ekran 5 — SSS

**Bir günde birden fazla fabrikaya gidebilir miyiz?**  
“Konumlara, görüşme sürelerine ve ulaşım planına göre değerlendirilir. Her fabrikanın yerini paylaşmadan bir günde belirli sayıda ziyaret sözü vermiyoruz.”

**一天可以参访多家工厂吗？**  
“需要结合地点、交流时长及交通安排评估。在不了解各工厂位置前，不承诺一天可完成固定数量的参访。”

**Fabrika ziyareti için nerelerde talep iletebilirim?**  
“Guangzhou, Shanghai ve Beijing başta olmak üzere çalışma noktası ve tarihinizi paylaşabilirsiniz. Yakın şehirler için de program bazında uygunluk değerlendirilir.”

**哪些地区的工厂参访可以咨询？**  
“可提供广州、上海、北京及周边地区的实际地点和日期咨询，安排需根据具体行程确认。”

**Görüşme gündemini önceden göndermeli miyim?**  
“Evet. Kısa bir gündem ve konuşulacak teknik başlıklar, tercüman ihtiyacını değerlendirmemize yardımcı olur.”

**需要提前发送参访议题吗？**  
“建议提前提供简要议程和技术主题，以便评估口译需求。”

**Ulaşım giderleri günlük ücrete dahil mi?**  
“Hayır. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.”

**交通费用包含在日费中吗？**  
“不包含。市内交通、城际交通、住宿及餐饮费用另计。”

### Ekran 6 — Kapanış

FINAL-CTA + PRICE-NOTE. İlgili bağlantılar: Çin’de tercüman, üç Çin şehri, fabrika/fuar hazırlık rehberi, ücret ve iletişim. **Şema:** Service + BreadcrumbList.



<!-- V12_INSERT_BEGIN:qa-factory -->
<a id="v12-page-factory"></a>
### v1.2 sayfa eki — Çin’de fabrika ziyareti tercümanlığı

**TR hedef:** `/cinde-fabrika-ziyareti-tercuman/`  
**ZH hedef:** `/zh/factory-visit-interpreter/`
**Ekrana yerleştirme:** Planlama ve görüşme soruları ilgili içerik başlıklarında. Q091/Q092: hizmet sınırı kutusunda açık; kapanış CTA’sından önce.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Ziyaret edeceğiniz fabrikaları ve gündeminizi siz belirleyin; sözlü iletişim desteğinin nasıl planlanacağını birlikte netleştirelim.

**ZH bölüm girişi:** 请先确定拟访问工厂与议程，再共同明确现场口译安排。

#### Bölüm başlığı TR: Ziyaret ve buluşma planı
**ZH başlık:** 参访与集合安排

<a id="doc-q029"></a>
#### Q029 — Çin’de fabrika ziyaretlerimiz sırasında bize eşlik edecek bir tercüman sağlayabiliyor musunuz?

**Türkçe cevap — site metni**
Evet. Çin’de sizin belirlediğiniz fabrikalara yapacağınız ziyaretlerde Çince–Türkçe sözlü tercümanlık için talep oluşturabilirsiniz. Fabrikanın adını, tam konumunu, ziyaret tarihini ve görüşme konularını paylaşın. Hizmetimiz ziyaret sırasında iletişim desteğidir; sizin yerinize üretici bulma, satın alma organizasyonu veya fabrika denetimi yapma taahhüdü içermez.

**简体中文 — 问题**
在中国参观工厂时，可以安排译员同行吗？

**简体中文 — 回答**
可以。您可为已选定工厂的参访申请中土现场口译。请提供工厂名称、准确地点、访问日期及沟通主题。服务是参访中的语言沟通，不包含代找制造商、采购组织或工厂审核承诺。

**Bileşen kimliği:** `Q029` · **Canlı HTML ankrajı:** `faq-029`

<a id="doc-q030"></a>
#### Q030 — Aynı gün içinde birden fazla fabrikayı aynı tercümanla ziyaret edebilir miyiz?

**Türkçe cevap — site metni**
Fabrikaların konumları, randevu saatleri ve yolculuk süreleri uygunsa aynı gün birden fazla ziyaret planlanabilir. Programı değerlendirebilmemiz için ziyaretleri sırayla ve tam adresleriyle paylaşın. Her görüşmeye ayrılacak süre ile ulaşımı birlikte ele alalım; yalnızca fabrika sayısına bakarak yetişme garantisi vermiyoruz.

**简体中文 — 问题**
同一天能由同一位译员陪同参观多家工厂吗？

**简体中文 — 回答**
如果工厂位置、预约时间和路程允许，可以评估同日多家参访。请按访问顺序提供准确地址，并为每次会面及交通预留时间。我们不会仅根据工厂数量保证行程一定能完成。

**Bileşen kimliği:** `Q030` · **Canlı HTML ankrajı:** `faq-030`

<a id="doc-q031"></a>
#### Q031 — Farklı şehirlerdeki fabrika ziyaretlerinde aynı tercüman bizimle gelebilir mi?

**Türkçe cevap — site metni**
Aynı tercümanla farklı şehirlere geçme talebinizi değerlendirebiliriz; bunu her program için önceden garanti etmiyoruz. Şehir sırasını, ulaşım planını ve her günün çalışma noktasını paylaşın. Tercüman uygunluğu, seyahat günlerinin nasıl değerlendirileceği ve ayrıca alınacak giderler birlikte netleştirilir.

**简体中文 — 问题**
跨城市参观工厂时，同一位译员能全程同行吗？

**简体中文 — 回答**
可以评估由同一位译员跨城市同行的需求，但不能预先保证所有行程都能如此安排。请提供城市顺序、交通计划及每天的工作地点，并共同确认档期、旅行日如何计费及相关支出。

**Bileşen kimliği:** `Q031` · **Canlı HTML ankrajı:** `faq-031`

<a id="doc-q034"></a>
#### Q034 — Tercümanla otelimizde mi, fabrikada mı, yoksa başka bir noktada mı buluşacağız?

**Türkçe cevap — site metni**
Buluşma noktasını programınıza göre önceden netleştirelim. Otel, fabrika girişi veya başka bir nokta tercih ediliyorsa açık adresi, saati ve iletişim kurulacak kişiyi paylaşın. Otelde buluşma kararlaştırılması araç veya transfer hizmeti sağladığımız anlamına gelmez; tercümanın ulaşım giderleri ayrıca değerlendirilir.

**简体中文 — 问题**
应在酒店、工厂还是其他地点与译员会合？

**简体中文 — 回答**
集合点需根据行程提前明确。如选择酒店、工厂入口或其他地点，请提供准确地址、时间及联系人。约定在酒店会合不代表我们提供车辆或接送服务；译员交通支出另行确认。

**Bileşen kimliği:** `Q034` · **Canlı HTML ankrajı:** `faq-034`

#### Bölüm başlığı TR: Üretim ve ticari görüşmelerde iletişim
**ZH başlık:** 生产及交易会面的沟通

<a id="doc-q032"></a>
#### Q032 — Üretim hattını gezerken teknik açıklamaları ve sorularımızı karşı tarafa aktarabiliyor mu?

**Türkçe cevap — site metni**
Üretim hattı gezisinde fabrikanın açıklamalarını ve sizin sorularınızı Çince–Türkçe olarak aktarmak, ziyaret tercümanlığının kapsamına alınabilir. Üretim sürecini ve özellikle konuşulacak teknik konuları önceden paylaşmanız hazırlığı kolaylaştırır. Tercüman, anlatılan bilgiyi aktarır; üretim kapasitesini doğrulayan veya teknik uygunluğu onaylayan denetçi rolünde değildir.

**简体中文 — 问题**
参观生产线时，译员可以传达技术说明和问题吗？

**简体中文 — 回答**
可以在参访口译中安排生产线讲解及提问的双向传达。提前提供生产流程和重点技术主题，有助于准备。译员传达对方说明，不承担核实产能或确认技术合规的审核员角色。

**Bileşen kimliği:** `Q032` · **Canlı HTML ankrajı:** `faq-032`

<a id="doc-q033"></a>
#### Q033 — Fiyat, minimum sipariş miktarı, numune, teslim süresi ve ödeme koşulları konuşulurken tercümanlık yapabiliyor mu?

**Türkçe cevap — site metni**
Evet. Fabrika ziyaretiniz sırasında fiyat, minimum sipariş miktarı, numune, teslim süresi ve ödeme koşulları gibi konuşulan başlıklarda sözlü tercümanlık talep edebilirsiniz. Bu hizmet, tarafların söylediklerini karşılıklı aktarmayı kapsar. Satın alma kararı vermek, ödeme koşullarını sizin adınıza kabul etmek veya ticari sonuç garantilemek tercümanlık kapsamına girmez.

**简体中文 — 问题**
价格、起订量、样品、交期和付款条件的讨论也可以口译吗？

**简体中文 — 回答**
可以。工厂参访中的价格、最低订购量、样品、交期及付款条件讨论，可纳入双向口译。服务是传达双方表达，不包括代您作出采购决定、接受付款条件或保证交易结果。

**Bileşen kimliği:** `Q033` · **Canlı HTML ankrajı:** `faq-033`

<a id="doc-q088"></a>
#### Q088 — Çin’de fiyat pazarlığında tercüman ne yapar?

**Türkçe cevap — site metni**
Fiyat görüşmesinde tercüman, sizin teklifinizi ve sorularınızı karşı tarafa; karşı tarafın yanıtını da size aktarır. Birim fiyat, miktar, teslim kapsamı ve konuşulan koşulların ne anlama geldiği belirsizse açıklama istenmesine yardımcı olur. Sizin adınıza pazarlık kararı almak, en düşük fiyatı sağlamak veya ticari anlaşmayı onaylamak tercümanlığın görevi değildir.

**简体中文 — 问题**
在中国谈价格时，译员具体做什么？

**简体中文 — 回答**
译员双向传达您的报价、问题及对方答复。单价、数量、交付范围或讨论条件存在歧义时，可帮助提出澄清问题。译员不代您作议价决策，不保证最低价格，也不代为批准交易。

**Bileşen kimliği:** `Q088` · **Canlı HTML ankrajı:** `faq-088`

<a id="doc-q089"></a>
#### Q089 — Minimum sipariş miktarı ve üretim süresi görüşmelerinde tercüman nasıl yardımcı olur?

**Türkçe cevap — site metni**
Minimum sipariş miktarı ve üretim süresi konuşulurken sorularınızı ve üreticinin açıklamalarını iki dil arasında aktarabiliriz. Miktarın hangi ürün veya varyant için geçerli olduğu, sürenin ne zaman başladığı ve hangi koşullara bağlı olduğu gibi noktaları görüşmede açıkça sordurabilirsiniz. Tercüman, üreticinin taahhüdünü aktarır; siparişin gerçekten o sürede üretileceğini garanti etmez.

**简体中文 — 问题**
讨论起订量和生产周期时，口译如何帮助我们？

**简体中文 — 回答**
可双向传达您的问题与制造商说明，例如起订量适用于哪种产品或型号、生产周期从何时开始及附带条件。译员传达制造商的表述，不保证订单实际一定按该时间生产。

**Bileşen kimliği:** `Q089` · **Canlı HTML ankrajı:** `faq-089`

#### Bölüm başlığı TR: Dil ihtiyacı ve hazırlık
**ZH başlık:** 语言需求与准备

<a id="doc-q085"></a>
#### Q085 — Çin’de fabrika ziyareti için tercüman gerekli mi?

**Türkçe cevap — site metni**
Fabrika ziyaretinde tercüman ihtiyacını, görüşeceğiniz kişilerin ortak diline ve konuşmanın ayrıntısına göre değerlendirin. Üretim süreci, teknik sorular ve ticari koşulları Türkçe olarak ayrıntılı konuşmak istiyorsanız sözlü tercümanlık talep edebilirsiniz. Her ziyaret için zorunluluk iddiasında bulunmuyoruz; programınızı ve iletişim beklentinizi birlikte netleştirelim.

**简体中文 — 问题**
参观中国工厂一定需要口译吗？

**简体中文 — 回答**
应根据双方共同语言及讨论深度评估。如果希望用土耳其语深入讨论生产流程、技术问题及交易条件，可申请口译。我们不声称所有参访都必须使用译员，而是先明确您的行程与沟通预期。

**Bileşen kimliği:** `Q085` · **Canlı HTML ankrajı:** `faq-085`

<a id="doc-q086"></a>
#### Q086 — Çinli üreticiyle görüşürken bağımsız tercüman tutmalı mıyım?

**Türkçe cevap — site metni**
Bu kararı görüşmenin kapsamı ve tercümandan beklediğiniz rol üzerinden verebilirsiniz. Kendi seçtiğiniz bir tercümanla çalışırken hangi konuların aktarılacağını ve taraflarla varsa bağlantısını önceden netleştirme imkânınız olur. Bizden talep oluştururken bağımsızlık beklentinizi ve görüşeceğiniz firmayı belirtin; ilgili görevlendirme bu bilgilerle değerlendirilsin.

**简体中文 — 问题**
与中国制造商会面时，是否应自行安排独立译员？

**简体中文 — 回答**
可根据会面范围及对译员角色的预期判断。自行选择译员时，可以提前明确沟通内容及其与相关企业的关系。向我们提交需求时，请说明独立性要求和对方企业名称，以便具体评估安排。

**Bileşen kimliği:** `Q086` · **Canlı HTML ankrajı:** `faq-086`

<a id="doc-q087"></a>
#### Q087 — Fabrikanın kendi İngilizce bilen çalışanı yerine neden ayrı tercüman tutayım?

**Türkçe cevap — site metni**
Fabrikanın İngilizce bilen çalışanı ortak iletişim için yeterliyse ayrıca tercüman gerekmeyebilir. Fakat görüşmelerinizi Türkçe yürütmek, birden fazla üreticiyi aynı iletişim düzeniyle ziyaret etmek veya size ayrılmış dil desteği istemek farklı bir ihtiyaçtır. Tercihi, fabrika çalışanı hakkında peşin bir güvensizlik varsayımına değil, dil ve program gereksiniminize göre değerlendirmenizi öneriyoruz.

**简体中文 — 问题**
工厂已有会英语的员工，为什么还要单独安排译员？

**简体中文 — 回答**
如果工厂员工能满足双方沟通需要，未必需要另请译员。但希望用土耳其语沟通、连续访问多家制造商或获得专门语言支持，属于不同需求。建议根据语言和行程选择，而不是预先假定工厂员工不可信。

**Bileşen kimliği:** `Q087` · **Canlı HTML ankrajı:** `faq-087`

<a id="doc-q090"></a>
#### Q090 — Fabrika ziyaretine gelecek tercümana önceden hangi ürün bilgilerini göndermeliyim?

**Türkçe cevap — site metni**
Ürün grubunu, ziyaret edeceğiniz firmanın bilgilerini ve özellikle konuşmak istediğiniz teknik veya ticari başlıkları paylaşın. Varsa model adları, temel özellikler ve sık kullanılacak terimleri ekleyebilirsiniz. Gereksiz veya paylaşma yetkiniz olmayan gizli bilgileri göndermeyin. Bu hazırlık, görüşmedeki sözlü iletişimi destekler; ürün araştırması veya katalog çevirisi hizmeti değildir.

**简体中文 — 问题**
工厂参访前，应向译员提供哪些产品信息？

**简体中文 — 回答**
请提供产品类别、访问企业资料及重点技术或交易主题。可补充型号、基本特性及常用术语，但不要发送不必要或未经授权的保密信息。这是口译准备，不属于产品研究或目录书面翻译服务。

**Bileşen kimliği:** `Q090` · **Canlı HTML ankrajı:** `faq-090`

#### Bölüm başlığı TR: Tercümanlık neyi garanti etmez?
**ZH başlık:** 口译不保证什么？

<a id="doc-q091"></a>
#### Q091 — Tercümanla Çin’de fabrika gezmek, fabrika denetimi yaptırmakla aynı şey mi?

**Türkçe cevap — site metni**
Hayır. Tercümanla fabrika ziyaret etmek, fabrika denetimi yaptırmakla aynı şey değildir. Biz ziyaret sırasında açıklamaların ve soruların Çince–Türkçe aktarılmasına destek veririz. Üretim kapasitesini doğrulama, kalite kontrol yapma, uygunluk raporu hazırlama veya tedarikçi denetleme ayrı uzmanlık ve hizmetlerdir; bu site üzerinden bunları sunmuyoruz.

**简体中文 — 问题**
由译员陪同参观工厂，等于工厂审核吗？

**简体中文 — 回答**
不等于。我们负责参访中的中土沟通，包括讲解及提问的传达。核实产能、质量检验、出具合规报告或供应商审核属于其他专业服务，本网站不提供这些服务。

**Bileşen kimliği:** `Q091` · **Canlı HTML ankrajı:** `faq-091`

<a id="doc-q092"></a>
#### Q092 — Çince tercüman üreticinin güvenilirliğini veya ürün kalitesini garanti eder mi?

**Türkçe cevap — site metni**
Hayır. Tercümanlık hizmetimiz, üreticinin güvenilirliği, ürün kalitesi, teslimat veya ödeme güvenliği için garanti içermez. Tercüman, görüşmede söylenenleri aktarır; açıklamaların gerçekliğini bağımsız bir denetimle doğrulamış sayılmaz. Satın alma ve tedarikçi değerlendirme kararlarınızı tercümanın görüşmeye katılmasından ayrı ele almalısınız.

**简体中文 — 问题**
口译服务能保证制造商可靠或产品质量吗？

**简体中文 — 回答**
不能。口译服务不保证制造商可靠性、产品质量、交付或付款安全。译员传达会面中的表述，不代表已通过独立审核确认其真实性。采购及供应商评估决定，应与译员是否在场分开考虑。

**Bileşen kimliği:** `Q092` · **Canlı HTML ankrajı:** `faq-092`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Fabrika konumlarını ve ziyaret tarihlerinizi paylaşın
**ZH CTA:** 提供工厂位置与参访日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-factory -->

## 11. Çin’de fuar tercümanlığı

**Türkçe URL:** `/cinde-fuar-tercumani/`  
**Çince URL:** `/zh/trade-fair-interpreter/`  
**Sayfanın görevi:** Fuar programındaki sözlü iletişimi anlatmak; tur veya satın alma organizasyonu sunmamak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çin’de Fuar Tercümanı \| Çince–Türkçe Sözlü Destek | 中国展会中土口译｜展位交流与产品介绍 |
| Meta description | Çin’de katılacağınız fuarda stant görüşmeleri ve ürün açıklamaları için Çince–Türkçe tercüman. Fuar adı ve katılım günleriyle günlük uygunluk sorun. | 为中国展会中的中土交流、展位会谈、产品介绍及问答提供现场口译。请告知展会名称、城市和参会日期，咨询档期。 |

### Ekran 1 — Hero

**TR H1:** “Çin’de fuar görüşmelerinizi dil engeline takılmadan yapın”  
“Stant ziyaretlerinde ürün açıklamalarını anlamak ve sorularınızı karşı tarafa iletmek için Çince–Türkçe sözlü tercümanlık. Katılacağınız fuarı, şehri ve günleri paylaşın.”

**ZH H1:** “在中国展会现场，让中土交流更顺畅”  
“为展位会谈、产品介绍和问答提供中文与土耳其语双向口译。请提供展会名称、城市及参会日期。”

CTA: “Fuar tarihim için uygunluk sor” / “咨询展会口译档期”。 PRICE-NOTE.

### Ekran 2 — Fuarda hangi anlarda?

**TR H2:** “Stant başında konuşulanları netleştirelim”  
“Firma tanışmaları, ürün özelliklerinin açıklanması, tarafların fiyat ve teslim koşulları hakkındaki soruları ve sonraki görüşme planlarının sözlü aktarımı. Ziyaret edeceğiniz stantları ve ticari kararları siz belirlersiniz; tercüman iletişimi destekler.”

**ZH H2:** “在展位现场，把说明与问题传达清楚”  
“协助双方进行公司介绍、产品参数说明、价格与交付条件问答，以及后续会面的口头沟通。展位选择和商业决定由您负责，译员提供语言支持。”

### Ekran 3 — Katılım bilgisini önceden paylaşın

**TR H2:** “Fuarın adı kadar katılacağınız günler de önemli”  
“Fuar adı, ziyaret tarihi, sektörünüz ve varsa görüşeceğiniz firma veya stantlar teklif değerlendirmesinin temelidir. Bir fuarın farklı bölümlerine veya dönemlerine katılacaksanız her günü belirtin.”

**ZH H2:** “除了展会名称，也请明确参会日期”  
“请提供展会名称、日期、行业，以及已计划交流的企业或展位。如涉及不同展区或展期，请逐日说明。”

### Ekran 4 — Kanton Fuarı kartı

**TR başlık:** “Kanton Fuarı için tercüman mı arıyorsunuz?”  
“Guangzhou’daki fuar programınızın tarihlerini ve ilgilendiğiniz ürün gruplarını paylaşarak talep iletin.”  
**CTA:** “Kanton Fuarı tercümanlığını incele”

**ZH başlık:** “需要广交会中土口译吗？”  
“请提供广州参会日期及关注的产品类别，咨询现场口译安排。”  
**CTA:** “查看广交会口译服务”

### Ekran 5 — SSS

**Tercüman tüm gün benimle mi olacak?**  
“Hizmet günlük esasla planlanır. O günün başlangıç ve bitiş saatleri ile katılınacak görüşmeler teklif sırasında teyit edilir.”

**译员会提供全天服务吗？**  
“服务按天安排，当天开始与结束时间及参加的会面需在报价时确认。”

**Fuar programımda fabrika ziyareti de var.**  
“Her günün programını aynı talepte paylaşabilirsiniz. Fuar ve fabrika günleri, konumları ve ulaşım ihtiyaçları ayrı değerlendirilir.”

**参展行程中还有工厂参访，可以一起安排吗？**  
“可以在同一条咨询中逐日说明。展会日与工厂参访日的地点和交通需求将分别确认。”

**Fuar giriş işlemleri günlük ücretin parçası mı?**  
“Günlük teklif tercümanlık içindir. Katılım ve giriş koşullarını fuarın resmi kanallarından kontrol edin; tercümanın girişine ilişkin gerekli düzenlemeler program teyidinde ayrıca konuşulur.”

**展会入场安排包含在口译日费中吗？**  
“日费对应口译服务。请通过展会官方渠道确认入场要求；译员进场所需安排应在确认行程时另行沟通。”

**Hangi fuarlarda hizmet alabilirim?**  
“Fuar adını, şehri, tarihleri ve görüşme konusunu paylaşın. Belirli fuarlar için otomatik uygunluk sözü vermeden programınızı değerlendirelim.”

**哪些展会可以咨询口译？**  
“请提供展会名称、城市、日期及沟通主题。具体安排需确认，不对某一展会的所有日期自动承诺档期。”

### Ekran 6 — Kapanış

FINAL-CTA + PRICE-NOTE. **İç link:** Kanton, Guangzhou, Shanghai, fabrika hizmeti, günlük ücret, rehber ve iletişim. **Şema:** Service + BreadcrumbList; tur paketi veya etkinlik organizatörü şeması değil.



<!-- V12_INSERT_BEGIN:qa-fair -->
<a id="v12-page-fair"></a>
### v1.2 sayfa eki — Çin’de fuar tercümanlığı

**TR hedef:** `/cinde-fuar-tercumani/`  
**ZH hedef:** `/zh/trade-fair-interpreter/`
**Ekrana yerleştirme:** Son açıklama bölümünden sonra, kapanış teklif CTA’sından önce
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Fuar tercümanlığını tur programından ayıralım: hangi günlerde, hangi görüşmelerde ve kaç ayrı ekibe dil desteği gerektiğini belirleyelim.

**ZH bölüm girişi:** 将展会口译与旅游行程区分开，明确日期、会面及需要独立语言支持的小组数量。

#### Bölüm başlığı TR: Fuar ve görüşme kapsamı
**ZH başlık:** 展会与会面范围

<a id="doc-q035"></a>
#### Q035 — Kanton Fuarı ve Çin’deki diğer fuarlar için Çince tercüman sağlayabiliyor musunuz?

**Türkçe cevap — site metni**
Kanton Fuarı ve Çin’de katılmayı planladığınız diğer fuarlar için Çince–Türkçe sözlü tercümanlık talep edebilirsiniz. Fuarın adını, şehri, ziyaret tarihlerinizi ve ürün grubunuzu paylaşın; uygunluğu buna göre değerlendirelim. Sunduğumuz hizmet, fuardaki stant ve firma görüşmelerinde tercümanlıktır; fuar turu veya seyahat paketi değildir.

**简体中文 — 问题**
广交会及中国其他展会可以安排中土口译吗？

**简体中文 — 回答**
可以为广交会及您计划参加的中国其他展会咨询中土口译。请提供展会名称、城市、参观日期及产品类别，以便确认档期。服务重点是展位和企业会面中的语言沟通，不是展会旅游或旅行套餐。

**Bileşen kimliği:** `Q035` · **Canlı HTML ankrajı:** `faq-035`

<a id="doc-q036"></a>
#### Q036 — Tercüman fuar boyunca bizimle stantları gezerek görüşmelere katılıyor mu?

**Türkçe cevap — site metni**
Önceden belirlenen fuar programında tercümanınız, ekibinizle stant ziyaretlerine ve görüşmelere katılabilir. Öncelikli ürün gruplarını, görüşmek istediğiniz firmaları ve günlük çalışma aralığını paylaşın. “Fuar boyunca” ifadesi, fuarın bütün günleri için otomatik hizmet değil, birlikte teyit edilen çalışma günleri ve saatleri anlamına gelir.

**简体中文 — 问题**
译员会陪同我们走访展位并参加洽谈吗？

**简体中文 — 回答**
在事先确认的展会行程内，译员可以随团队走访展位并参加会面。请提供优先产品类别、拟会面企业及每天时段。“展会期间”指双方确认的工作日期和时间，不代表自动覆盖整届展会。

**Bileşen kimliği:** `Q036` · **Canlı HTML ankrajı:** `faq-036`

#### Bölüm başlığı TR: Ekip ve tercüman sayısı
**ZH başlık:** 团队与译员人数

<a id="doc-q037"></a>
#### Q037 — Bir tercüman şirketimizden birden fazla kişiye eşlik edebilir mi?

**Türkçe cevap — site metni**
Ekibiniz aynı görüşmelere birlikte katılıyorsa bir tercümanın birden fazla kişiye eşlik etmesi değerlendirilebilir. Katılımcı sayısını, konuşma düzenini ve herkesin aynı programı takip edip etmeyeceğini belirtin. Tek tercüman, farklı noktalarda aynı anda yapılan görüşmeleri eş zamanlı olarak yürütemez.

**简体中文 — 问题**
一位译员可以陪同我们公司多位人员吗？

**简体中文 — 回答**
如果团队共同参加同一场会面，可以评估由一位译员陪同多人的安排。请说明人数、发言方式及是否全程一起行动。一位译员不能同时承担不同地点的多场会面。

**Bileşen kimliği:** `Q037` · **Canlı HTML ankrajı:** `faq-037`

<a id="doc-q038"></a>
#### Q038 — Ekibimiz farklı stantlarda eş zamanlı görüşme yapacaksa kaç tercümana ihtiyacımız olur?

**Türkçe cevap — site metni**
İhtiyaç duyulan tercüman sayısını, aynı anda ayrı dil desteği gerektiren görüşme gruplarına göre belirleyelim. Örneğin iki ekip farklı stantlarda aynı anda görüşecekse tek tercüman iki noktada birden bulunamaz. Ekiplerinizin günlük programını paylaşın; eş zamanlı ihtiyaçları ve her grup için uygunluğu ayrı değerlendirelim.

**简体中文 — 问题**
团队在不同展位同时会谈时，需要几位译员？

**简体中文 — 回答**
应按同时需要独立口译的会面小组评估人数。例如，两组人员在不同展位同时洽谈，一位译员无法兼顾两个地点。请提供各组行程，以便分别确认并行需求及译员档期。

**Bileşen kimliği:** `Q038` · **Canlı HTML ankrajı:** `faq-038`

<a id="doc-q097"></a>
#### Q097 — Fuar turuna katılırsam ayrıca özel tercüman tutmam gerekir mi?

**Türkçe cevap — site metni**
Katıldığınız turun tercümanlık kapsamını tur sağlayıcınızdan öğrenin. Grup içinde genel bilgilendirme bulunması, sizin özel stant görüşmeleriniz için ayrı tercüman ayrıldığı anlamına gelmeyebilir. Kendi görüşme gündeminiz veya ayrı programınız varsa günlük özel tercümanlık ihtiyacını değerlendirebiliriz. Bizim bu hizmetimiz tur organizasyonu içermez.

**简体中文 — 问题**
参加展会团后，还需要单独安排私人译员吗？

**简体中文 — 回答**
请先向旅行团提供方确认口译范围。团队的一般说明不一定包含专门陪同您的展位会谈。若有自己的议程或独立行程，可评估按天安排专属口译的需要。我们的该项服务不包含旅游团组织。

**Bileşen kimliği:** `Q097` · **Canlı HTML ankrajı:** `faq-097`

<a id="doc-q098"></a>
#### Q098 — Grup tercümanı ile bana özel çalışan fuar tercümanı arasında ne fark vardır?

**Türkçe cevap — site metni**
Farkı hizmetin adı değil, tercümanın kimin programına ve hangi görüşmelere ayrıldığı belirler. Grup tercümanı birden fazla katılımcının ortak ihtiyacını takip ederken, size ayrılmış tercüman teyit edilen çalışma gününde sizin programınıza göre görev yapar. Yine de tek kişi farklı yerlerdeki eş zamanlı görüşmeleri yürütemez; kapsamı rezervasyon öncesinde açıkça netleştirin.

**简体中文 — 问题**
团体口译与专门为我安排的展会口译有何区别？

**简体中文 — 回答**
关键在于译员服务谁的行程及哪些会面。团体口译跟进多位参加者的共同需求；为您安排的译员则在确认工作日内按您的行程服务。但同一人仍无法同时处理不同地点的会面，预约前应明确范围。

**Bileşen kimliği:** `Q098` · **Canlı HTML ankrajı:** `faq-098`

#### Bölüm başlığı TR: Giriş ve program değişikliği
**ZH başlık:** 入场与行程调整

<a id="doc-q039"></a>
#### Q039 — Tercümanın fuar giriş kaydı veya kartı için bizim bir işlem yapmamız gerekiyor mu?

**Türkçe cevap — site metni**
Gerekli giriş işlemleri fuara ve katılım biçimine göre değişebilir. Fuarın adını ve tarihini paylaştığınızda tercümanın hangi kayıt veya kartla giriş yapacağını, başvuruyu kimin tamamlayacağını ve varsa ücretini önceden netleştirelim. Tercümanın otomatik olarak giriş hakkı bulunduğunu veya kart bedelinin günlük ücrete dahil olduğunu varsaymayın.

**简体中文 — 问题**
译员的展会入场登记或证件需要我们办理吗？

**简体中文 — 回答**
入场要求可能因展会及参与身份而异。请提供展会名称和日期，提前明确译员所需登记或证件、办理方及可能的费用。不要默认译员自动具备入场资格，也不要默认证件费用已包含在日费内。

**İç uygulama notu — ziyaretçiye gösterilmez:** Belirli fuarın kayıt kuralı veya kart ücreti verilmedi. Güncel organizatör koşulları gerçek etkinlik için ayrıca kontrol edilir; bu metin somut kural iddiası taşımaz.

**Bileşen kimliği:** `Q039` · **Canlı HTML ankrajı:** `faq-039`

<a id="doc-q040"></a>
#### Q040 — Fuarda tanıştığımız bir firmanın fabrikasını ziyaret etmek istersek tercümanlık programını buna göre değiştirebilir miyiz?

**Türkçe cevap — site metni**
Fuar sırasında yeni bir fabrika ziyareti planladığınızda firmanın konumunu, önerilen randevuyu ve kalan programınızı paylaşın. Değişiklik, tercümanın uygunluğu, yolculuk süresi ve günlük çalışma koşulları elverdiğinde değerlendirilebilir. Ek günler ve giderler ayrıca teyit edilir; fabrika randevusunun veya ulaşımın kendiliğinden organize edildiğini varsaymayın.

**简体中文 — 问题**
想参观展会上认识的企业工厂，可以调整口译行程吗？

**简体中文 — 回答**
请提供工厂位置、拟定预约时间及剩余行程。是否能调整，须结合译员档期、路程和每日工作条件评估。新增日期及费用需另行确认，不代表工厂预约或交通会自动由我们安排。

**Bileşen kimliği:** `Q040` · **Canlı HTML ankrajı:** `faq-040`

<a id="doc-q099"></a>
#### Q099 — Fuarın yalnızca belirli günleri için tercüman ayarlanabilir mi?

**Türkçe cevap — site metni**
Evet, uygunluk bulunması hâlinde fuarın yalnızca belirli günleri için tercümanlık talep edebilirsiniz. Hangi günleri istediğinizi ve o günlerin yaklaşık çalışma programını paylaşın. Seçtiğiniz günler günlük ücretlendirilir; birkaç saatlik görüşme için yarım günlük veya saatlik paket oluşturulmaz.

**简体中文 — 问题**
只在展会的部分日期需要译员，可以吗？

**简体中文 — 回答**
可以，确认档期后可只安排指定日期。请提供所需日期及每天的大致行程。选定工作日按天计费，即使只安排数小时会面，也不提供半天或小时套餐。

**Bileşen kimliği:** `Q099` · **Canlı HTML ankrajı:** `faq-099`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Fuarınızı ve ziyaret günlerinizi paylaşın
**ZH CTA:** 提供展会名称与参观日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-fair -->

## 12. Kanton Fuarı tercümanı — özel ihtiyaç sayfası

**Türkçe URL:** `/kanton-fuari-tercuman/`  
**Çince URL:** `/zh/canton-fair-interpreter/`  
**Sayfanın görevi:** Genel fuar sayfasından farklı olarak Guangzhou, katılım dönemi ve ürün grubu bilgisini talebe taşımak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Kanton Fuarı Tercümanı \| Guangzhou Çince–Türkçe | 广交会中土口译｜广州展会现场沟通 |
| Meta description | Kanton Fuarı ziyaretinizde Çince–Türkçe sözlü tercümanlık. Katılacağınız günleri ve ürün gruplarını paylaşın; günlük uygunluk ve teklif sorun. | 为广交会中的土耳其客户交流、产品介绍与展位问答提供中土口译。请提供参会日期、展期和产品类别，咨询译员档期。 |

### Ekran 1 — Hero

**TR H1:** “Kanton Fuarı için Çince–Türkçe tercüman”  
“Guangzhou’daki Kanton Fuarı ziyaretinizde stant görüşmeleri ve ürün açıklamaları için sözlü tercümanlık desteği. Katılacağınız günleri, biliyorsanız fazı ve ürün grubunu paylaşın.”

**ZH H1:** “广交会现场中土双向口译”  
“为广州广交会现场的展位交流和产品说明提供中文与土耳其语口译。请提供参会日期、已确定的展期及产品类别。”

CTA: “Kanton programım için uygunluk sor” / “咨询广交会口译档期”。 PRICE-NOTE.

### Ekran 2 — Neden ayrı bilgi istiyoruz?

**TR H2:** “Programı fuar adından daha ayrıntılı tarif edin”  
“Yalnızca ‘Kanton Fuarı’ demek, çalışma günlerini ve görüşme içeriğini belirlemeye yetmez. Tarihlerinizi ve ilgilendiğiniz ürünleri yazın. Görüşeceğiniz firmaları önceden belirlediyseniz bu bilgiyi de ekleyin.”

**ZH H2:** “请提供比展会名称更具体的安排”  
“仅说明‘广交会’还不足以确认工作日期与沟通内容。请告知参会日期和关注产品；如已确定会面的企业，也请一并提供。”

### Ekran 3 — Sahadaki çalışma

**TR:** “Tercüman, belirlediğiniz stant görüşmelerinde açıklamaları ve sorularınızı karşılıklı olarak aktarır. Günün görüşme sırası, çalışma saatleri ve buluşma noktası hizmet öncesinde teyit edilir. Günlük ulaşım ve diğer giderler ayrı hesaplanır.”

**ZH:** “译员在您安排的展位会谈中双向传达说明与提问。当天会面顺序、工作时间及集合地点需提前确认，交通与其他相关费用另计。”

### Ekran 4 — SSS

**Hangi faza katılacağımı bilmiyorum.**  
“Talepte ‘Faz henüz belli değil’ yazabilirsiniz. Ürün grubunuzu ve yaklaşık tarihleri belirtin; kesin tercüman planı katılım günleriniz netleşince teyit edilir. Fuar tarih ve bölüm bilgilerini resmi fuar kaynaklarından kontrol edin.”

**还没有确定参加哪一期，怎么办？**  
“可以注明‘展期待定’，并提供产品类别和大致日期。最终口译安排需在参会日期明确后确认，展期与展区信息请以官方发布为准。”

**Fuar sonrası fabrika ziyaretine de tercüman gerekir.**  
“Fabrika adreslerini ve planlanan günleri aynı mesajda paylaşın. Her çalışma gününü konum ve süre açısından ayrı değerlendirelim.”

**展会之后还需要工厂参访口译。**  
“请在同一条消息中提供工厂地址和日期，我们会逐日评估地点与工作安排。”

**Fuar dönemi için sabit fiyat var mı?**  
“Sitede sabit bir fiyat açıklamıyoruz. Tarih, çalışma düzeni ve ayrıca alınan giderler üzerinden günlük teklif verilir.”

**广交会期间有固定公开价格吗？**  
“本站不公布统一固定价格。每日报价根据日期、工作安排及另计费用确认。”

### Ekran 5 — Kapanış

FINAL-CTA + PRICE-NOTE. **İç link:** Guangzhou, genel fuar hizmeti, fabrika, ücret, iletişim. **Şema:** Service + BreadcrumbList. Bu sayfa bir fuar takvimi değildir; değişebilen fuar tarihlerini bakım sorumlusu olmadan metne sabitlemeyin.



<!-- V12_INSERT_BEGIN:qa-canton -->
<a id="v12-page-canton"></a>
### v1.2 sayfa eki — Kanton Fuarı tercümanı

**TR hedef:** `/kanton-fuari-tercuman/`  
**ZH hedef:** `/zh/canton-fair-interpreter/`
**Ekrana yerleştirme:** Son açıklama bölümünden sonra, kapanış teklif CTA’sından önce
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Kanton Fuarı ve Canton Fair aynı fuarın farklı adlarıdır. Ziyaret edeceğiniz günleri ve ürün grubunu belirterek tercümanlık ihtiyacını görüşebiliriz.

**ZH bölüm girişi:** “Kanton Fuarı”与“Canton Fair”均指广交会。请提供计划参观的日期与产品类别，以便讨论口译需求。

#### Bölüm başlığı TR: Dil ihtiyacı ve görüşme hazırlığı
**ZH başlık:** 语言需求与会面准备

<a id="doc-q093"></a>
#### Q093 — Kanton Fuarı’na tercümansız gidilir mi?

**Türkçe cevap — site metni**
Görüşmelerinizi ortak bir dilde yürütebiliyor ve programınızı kendiniz takip edebiliyorsanız tercümansız ziyaret edebilirsiniz. Tercüman ihtiyacı, kaç firmayla görüşeceğiniz ve hangi ayrıntıları konuşacağınızla ilgilidir. Ürün, fiyat veya teslim koşullarını Türkçe üzerinden netleştirmek istiyorsanız ziyaret edeceğiniz günler için size ayrılmış sözlü dil desteği talep edebilirsiniz.

**简体中文 — 问题**
不带译员也可以参观广交会吗？

**简体中文 — 回答**
如果双方能使用共同语言，且您能自行跟进行程，可以不带译员参观。是否需要取决于会面数量和讨论细节。如希望以土耳其语明确产品、价格或交付条件，可为计划参观的日期咨询专门口译。

**Bileşen kimliği:** `Q093` · **Canlı HTML ankrajı:** `faq-093`

<a id="doc-q094"></a>
#### Q094 — Kanton Fuarı’nda İngilizce yeterli olur mu?

**Türkçe cevap — site metni**
İngilizcenin yeterli olup olmayacağını, görüşeceğiniz firmalar ve konular belirler. Her stantta, her ekip üyesiyle ve her teknik ayrıntıda aynı iletişim imkânı bulunacağını varsaymayın. Önceden belirlediğiniz firmalara görüşme dilini sorabilirsiniz. İlave Türkçe–Çince destek gerekiyorsa tercümanlık talebini bu ihtiyaç üzerinden planlayalım.

**简体中文 — 问题**
参观广交会只会英语够用吗？

**简体中文 — 回答**
是否足够取决于拟会面的企业和主题，不能默认每个展位、每位人员及所有技术细节都具备相同沟通条件。可提前向目标企业确认会面语言；如果还需中土支持，再按实际需求规划口译。

**Bileşen kimliği:** `Q094` · **Canlı HTML ankrajı:** `faq-094`

#### Bölüm başlığı TR: Tercümanı ayarlama ve faz planı
**ZH başlık:** 译员安排与期别规划

<a id="doc-q095"></a>
#### Q095 — Canton Fair için Türkçe bilen tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Canton Fair için Türkçe–Çince tercüman arıyorsanız fuar dönemini, ziyaret günlerinizi, ürün grubunu ve ekibinizin nasıl hareket edeceğini bize iletin. Kanton Fuarı tercümanlığı sayfamız üzerinden uygunluk ve günlük teklif talep edebilirsiniz. Bu hizmet, fuar organizatörünün resmî tercüman hizmeti veya ziyaret paketi olarak sunulmaz.

**简体中文 — 问题**
Canton Fair 如何寻找会土耳其语的译员？

**简体中文 — 回答**
请向我们提供展会期别、参观日期、产品类别及团队行动方式，可通过广交会口译页面咨询档期和日费。我们的服务不以展会主办方官方口译或参观套餐名义提供。

**Bileşen kimliği:** `Q095` · **Canlı HTML ankrajı:** `faq-095`

<a id="doc-q096"></a>
#### Q096 — Kanton Fuarı için tercümanı Türkiye’den mi ayarlamalıyım, Çin’e gidince mi bulmalıyım?

**Türkçe cevap — site metni**
Türkiye’deyken tarih ve ihtiyaçlarınız netleştiğinde tercümanlık planını görüşmenizi öneriyoruz; bunun için Çin’e varmayı beklemeniz gerekmez. Böylece konuya hazırlık, günlük program ve ücret koşulları önceden konuşulabilir. Çin’e vardıktan sonra da talep iletebilirsiniz, ancak o tarihler için uygun tercüman bulunacağını garanti etmiyoruz.

**简体中文 — 问题**
广交会口译应在出发前安排，还是到中国后再找？

**简体中文 — 回答**
日期和需求明确后，建议在出发前沟通，无需等到抵达中国。这样可提前讨论准备内容、每日行程和费用条件。抵达后仍可咨询，但我们不保证相关日期一定有合适译员。

**Bileşen kimliği:** `Q096` · **Canlı HTML ankrajı:** `faq-096`

<a id="doc-q100"></a>
#### Q100 — Kanton Fuarı’nın farklı fazlarında aynı tercümanla çalışılabilir mi?

**Türkçe cevap — site metni**
Kanton Fuarı’nın farklı fazlarında aynı tercümanla çalışma talebinizi, bütün tarihleri birlikte bildirerek iletin. Aynı kişinin devam edebilmesi, tüm günlerdeki uygunluğuna ve konuşulacak ürün gruplarına bağlıdır. Fazlar arasındaki boş günler, olası şehir geçişleri ve giderler ayrıca teyit edilir; bunların otomatik olarak ücretsiz veya rezerve olduğunu varsaymayın.

**简体中文 — 问题**
广交会不同期别能安排同一位译员吗？

**简体中文 — 回答**
请一次性提供所有所需日期。能否由同一人服务，取决于全部日期的档期及产品主题。期别之间的空档日、可能的转场和支出需另行确认，不应默认这些日期免费或已被保留。

**Bileşen kimliği:** `Q100` · **Canlı HTML ankrajı:** `faq-100`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Kanton Fuarı günleriniz için uygunluk sorun
**ZH CTA:** 咨询广交会所需日期的档期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-canton -->

## 13. Hizmet bölgeleri — şehir ağı ve gerçek kapsam

**Türkçe URL:** `/hizmet-bolgeleri/`  
**Çince URL:** `/zh/service-areas/`  
**Sayfanın görevi:** Tüm hizmet şehirlerini görünür kılmak; ofis varmış izlenimi yaratmadan yerel talepleri toplamak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Türkiye ve Çin’de Çince Tercüman Hizmet Bölgeleri | 中土口译服务地区｜土耳其与中国城市安排 |
| Meta description | İstanbul, Tekirdağ, Düzce, Ankara, Kayseri, Gaziantep; Guangzhou, Shanghai ve Beijing için Çince tercümanlık. Yakın şehirlerde program bazlı uygunluk. | 了解土耳其与中国的中土口译服务地区。主要城市及附近地区的安排需结合日期、实际地点和译员档期确认。 |

### Ekran 1 — Hero

**TR H1:** “Tercümana ihtiyaç duyduğunuz şehirden başlayalım”  
“Türkiye ve Çin’de farklı şehirlerdeki tercüman ağımızla saha programlarını günlük esasla değerlendiriyoruz. Şehir merkezi dışındaki tesisler ve yakın şehirler için gerçek çalışma konumunu paylaşın.”

**ZH H1:** “先告诉我们，您需要哪个城市的口译”  
“依托土耳其与中国多座城市的译员网络，按日评估现场服务安排。市区外的工厂及附近城市，请提供实际工作位置。”

### Ekran 2 — Türkiye paneli

**TR H2:** “Türkiye’de makine kurulumu sırasında tercümanlık”  
“Çinli teknik ekiplerle yapılacak kurulum ve buna bağlı saha açıklamalarında şehir, tarih ve teknik konuya göre uygunluk sorabilirsiniz.”

**ZH H2:** “土耳其设备安装现场口译”  
“针对中国技术团队的安装行程及相关现场说明，可根据城市、日期和技术内容咨询档期。”

| Şehir ve sabit bölüm kimliği | TR yayımlanacak açıklama | ZH yayımlanacak açıklama |
|---|---|---|
| İstanbul `#istanbul` | Makine kurulumu için İstanbul’un hangi yakasında ve hangi çalışma noktasında bulunacağınızı belirtin. Tesis konumu ile günlük programı birlikte değerlendirelim. | 请说明设备安装地点位于伊斯坦布尔哪一区域，并提供工厂实际位置，结合每日行程确认安排。 |
| Tekirdağ `#tekirdag` | Tekirdağ’daki tesisin ilçe veya bölgesini, kurulum tarihlerini ve teknik ekibin çalışma planını paylaşın. Günlük ulaşım ihtiyacı konuma göre değerlendirilir. | 请提供泰基尔达工厂所在区域、安装日期及技术团队计划，根据实际位置评估每日交通需求。 |
| Düzce `#duzce` | Düzce’deki çalışma noktasını ve hangi kurulum aşamalarında dil desteği gerektiğini yazın. Birden fazla tesis varsa her konumu ayrı belirtin. | 请说明迪兹杰的实际地点及需要口译的安装环节。如涉及多处工厂，请分别提供位置。 |
| Ankara `#ankara` | Ankara’daki fabrika veya kurulum sahasının merkezden bağımsız gerçek konumunu paylaşın. Başlangıç ve bitiş saatlerini ulaşım planıyla birlikte netleştirelim. | 请提供安卡拉工厂或安装现场的实际位置，并结合交通安排确认每日开始与结束时间。 |
| Kayseri `#kayseri` | Kayseri’de makine türünü, çalışma günlerini ve sahada görüşülecek konuları belirterek talep iletin. Teknik kapsam tercüman planlamasında dikkate alınır. | 咨询开塞利现场口译时，请提供设备类型、工作日期及沟通议题，以便评估技术内容。 |
| Gaziantep `#gaziantep` | Gaziantep’te kurulum yapılacak tesisin konumunu ve günlük çalışma düzenini paylaşın. Şehir merkezi dışındaki noktaların ulaşım ihtiyacı ayrıca değerlendirilir. | 请提供加济安泰普安装工厂的位置与每日安排。市区外地点的交通需求需单独评估。 |
| Kocaeli / Gebze `#kocaeli-gebze` | Kocaeli ve Gebze’deki çalışma noktaları için şehir, tesis konumu ve tarih bilgisiyle uygunluk sorabilirsiniz. Bu bölgeler için mevcut detay sayfalarımızı da inceleyin. | 科贾埃利及盖布泽的现场需求，可按城市、工厂位置和日期咨询，并查看对应地区页面。 |

### Ekran 3 — Çin paneli

**TR H2:** “Çin’de görüşme, fabrika ve fuar programları”  
“Guangzhou, Shanghai ve Beijing başta olmak üzere bulunduğunuz şehri ve programın gerçek duraklarını yazın. Yakın şehirler için ayrıca uygunluk değerlendirelim.”

**ZH H2:** “中国会面、工厂及展会行程口译”  
“可从广州、上海和北京等城市开始说明需求。请列出实际行程地点，附近城市的安排另行确认。”

| Şehir | TR açıklama | ZH açıklama |
|---|---|---|
| Guangzhou / 广州 | Fuar günlerini ve varsa farklı günlerdeki fabrika ziyaretlerini ayrı belirtin. Her çalışma noktasını kendi tarihiyle değerlendirelim. | 请分别说明展会日期及其他日期的工厂参访，为每个地点标注对应日期。 |
| Shanghai / 上海 | Shanghai’da konaklamak ile aynı gün görüşmeye gideceğiniz nokta farklı olabilir. Buluşma ve çalışma yerini ayrı yazın. | 住宿地点与会面地点可能不同，请分别提供在上海的集合地点及实际工作位置。 |
| Beijing / 北京 | Beijing’de toplantı veya saha programınızın gündemini ve adresini paylaşın. Şehir dışındaki bir çalışma noktasına geçiş varsa ayrıca belirtin. | 请提供北京会面或现场行程的议题与地址，如需前往市外地点，请另外注明。 |

### Ekran 4 — Listede olmayan konumlar

**TR H2:** “Yakın şehirler için de programınızı paylaşın”  
“Hizmet listesinde olmayan bir şehirde tercümana ihtiyaç duyuyorsanız şehir adı, çalışma noktası ve tarihleri yazın. Talebin karşılanıp karşılanamayacağı tercüman ve ulaşım uygunluğuyla birlikte değerlendirilir. Bir şehrin sitede anılması, o şehirde bir ofis veya sürekli hazır tercüman bulunduğu anlamına gelmez.”

**ZH H2:** “附近城市也可以提供行程咨询”  
“如需要列表之外的城市服务，请提供城市、实际地点及日期。能否安排需结合译员档期与交通情况确认。网站列出某座城市，并不代表当地设有办公室或始终有译员待命。”

### Ekran 5 — Bölge SSS

**Aynı şehirde konaklama masrafı olmayacağı garanti mi?**  
“Hayır. Günlük tercümanlık ücretinden ayrı olan ulaşım, konaklama ve yeme-içme kalemleri çalışma planına göre netleştirilir. Sadece şehir adına bakarak masraf sözü vermiyoruz.”

**同一城市就一定不产生住宿费用吗？**  
“不一定。交通、住宿及餐饮与口译日费分开确认，不能只根据城市名称承诺相关费用。”

**Yakın şehirleri aynı gün programa ekleyebilir miyim?**  
“Konumları ve görüşme saatlerini paylaşın. Uygunluk, günlük çalışma düzeni ve ulaşım birlikte değerlendirilir.”

**同一天可以加入附近城市吗？**  
“请提供各地点与会面时间，再共同评估档期、每日工作安排及交通。”

FINAL-CTA + PRICE-NOTE. **Şema:** WebPage + BreadcrumbList; gerçek hizmet alanları, adres uydurmadan Service verisinde kullanılabilir.



<!-- V12_INSERT_BEGIN:qa-areas -->
<a id="v12-page-areas"></a>
### v1.2 sayfa eki — Hizmet bölgeleri

**TR hedef:** `/hizmet-bolgeleri/`  
**ZH hedef:** `/zh/service-areas/`
**Ekrana yerleştirme:** Q002: ülke ve şehir ağı panellerinin ardından. Q072/Q073: mevcut Tekirdağ bölümü içinde; ayrı şehir/ilçe URL’si açılmaz.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Listede yalnızca bir şehir adına bakmayın; gerçek çalışma konumunuzu ve tarihlerinizi paylaşın.

**ZH bölüm girişi:** 请不要只根据城市名称判断，而应提供实际工作地点及日期。

#### Bölüm başlığı TR: Hizmet ağı
**ZH başlık:** 服务网络

<a id="doc-q002"></a>
#### Q002 — Hangi şehirlerde Çince tercüman sağlayabiliyorsunuz?

**Türkçe cevap — site metni**
Türkiye’de İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep; Çin’de Guangzhou, Shanghai ve Beijing başta olmak üzere birçok şehirdeki tercüman ağımızla talepleri değerlendiriyoruz. Gebze, Kocaeli ve bu merkezlere yakın bölgeler için de gerçek çalışma konumunu paylaşabilirsiniz. Hizmet uygunluğu şehir, tarih ve konu birlikte değerlendirilerek teyit edilir; bu liste her şehirde ofisimiz olduğu anlamına gelmez.

**简体中文 — 问题**
哪些城市可以咨询中土口译服务？

**简体中文 — 回答**
我们通过多个城市的译员网络评估需求，主要包括土耳其的伊斯坦布尔、泰基尔达、迪兹杰、安卡拉、开塞利和加济安泰普，以及中国的广州、上海和北京。盖布泽、科贾埃利及邻近地区也可提供实际工作地点咨询。是否能安排服务须结合城市、日期及内容确认；服务地区不代表当地设有办公室。

**Bileşen kimliği:** `Q002` · **Canlı HTML ankrajı:** `faq-002`

#### Bölüm başlığı TR: Tekirdağ ve Çerkezköy talepleri
**ZH başlık:** 泰基尔达及 Çerkezköy 需求

<a id="doc-q072"></a>
#### Q072 — Tekirdağ’da makine montajı için Çince tercüman var mı?

**Türkçe cevap — site metni**
Tekirdağ’daki makine montajı sırasında ekipler arası sözlü iletişim için talebinizi değerlendirebiliriz. Yalnızca il adını değil, Çorlu, Çerkezköy veya başka bir çalışma noktasının tam konumunu ve tarihleri paylaşın. Uygunluk konu ve programa göre teyit edilir; şehirde her gün hazır ekip veya ayrı ofis bulunduğu iddiasında bulunmuyoruz.

**简体中文 — 问题**
泰基尔达设备安装可以咨询中文口译吗？

**简体中文 — 回答**
可以评估泰基尔达设备安装期间的中土沟通需求。请不要只提供省名，还应说明 Çorlu、Çerkezköy 或其他实际工作点的准确位置及日期。是否能安排须结合主题和行程确认，不代表当地每天都有待命团队或独立办公室。

**Bileşen kimliği:** `Q072` · **Canlı HTML ankrajı:** `faq-072`

<a id="doc-q073"></a>
#### Q073 — Çerkezköy’de fabrika kurulumu için Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Çerkezköy’de fabrikanıza kurulacak makine veya üretim hattı için teknik ekipler arasındaki iletişime yönelik tercümanlık talep edebilirsiniz. Sanayi bölgesi, tesis girişi, ekipman konusu ve çalışma tarihlerini paylaşın. Buradaki hizmet, makine ve hat kurulumundaki sözlü iletişim desteğidir; fabrikanın inşasını veya teknik kurulum işlerini üstlenmek değildir.

**简体中文 — 问题**
Çerkezköy 工厂安装工作如何寻找中文口译？

**简体中文 — 回答**
可为 Çerkezköy 工厂设备或生产线安装中的团队沟通申请口译。请提供工业区、工厂入口、设备内容及日期。这里的服务是安装相关的语言沟通，不是承包厂房建设或技术安装工作。

**Bileşen kimliği:** `Q073` · **Canlı HTML ankrajı:** `faq-073`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Şehir ve tarihlerinizi paylaşın
**ZH CTA:** 提供城市与日期，咨询安排
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-areas -->

## 14. Günlük ücret ve masraflar

**Türkçe URL:** `/cince-tercuman-fiyatlari/`  
**Çince URL:** `/zh/daily-rates/`  
**Sayfanın görevi:** Fiyat arayan kullanıcıya sayı uydurmadan yararlı cevap vermek ve nitelikli teklif talebi almak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çince Tercüman Fiyatları \| Günlük Ücret ve Masraflar | 中土口译日费与费用说明｜按天安排服务 |
| Meta description | Çince tercümanlık günlük ücretlendirilir. Ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Şehir, tarih ve hizmet bilgisiyle size uygun teklifi sorun. | 中土现场口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。请提供服务类型、城市及日期，咨询具体报价。 |

### Ekran 1 — Hero

**TR H1:** “Çince tercümanlıkta günlük ücret ve ayrıca alınan masraflar”  
“Hizmetlerimizi günlük çalışma üzerinden planlıyoruz. Teklif; ihtiyaç duyulan hizmet, şehir, tarihler ve çalışma düzeni netleştirildikten sonra oluşturulur.”

**ZH H1:** “中土口译按天计费，相关费用分别确认”  
“服务以每日工作安排为基础。明确服务类型、城市、日期及每日工作要求后，再确认具体报价。”

### Ekran 2 — Ücret tablosu

| Kalem | TR açıklama | ZH açıklama |
|---|---|---|
| Günlük tercümanlık / 口译日费 | Belirlenen çalışma günü için sözlü tercümanlık bedeli. | 已确认工作日的现场口译费用。 |
| Şehir içi ulaşım / 市内交通 | Günlük tercümanlık bedeline dahil değildir; ayrıca hesaplanır. | 不含在口译日费内，另行计算。 |
| Şehir dışı ulaşım / 城际交通 | Programın gerektirdiği ulaşım ayrıca değerlendirilir. | 根据行程所需的城际交通另行确认。 |
| Konaklama / 住宿 | Günlük tercümanlık bedelinden ayrı değerlendirilir. | 与每日口译费用分开确认。 |
| Yeme-içme / 餐饮 | Günlük tercümanlık bedeline dahil değildir. | 不含在每日口译费用内。 |

### Ekran 3 — Net teklif için

**TR H2:** “Tek bir fiyat yerine programınıza uygun teklif”  
“Şehir ve tarih aynı olsa bile çalışma noktası, günlük saatler ve teknik konu farklı olabilir. Talebinizi bu bilgilerle değerlendirelim; günlük hizmet bedelini ve ayrıca alınan giderleri ayrı ayrı görelim.”

**ZH H2:** “根据具体行程报价，而不是套用统一数字”  
“即使城市和日期相同，实际地点、每日时段与技术内容也可能不同。请提供这些信息，以便分别确认日费及相关支出。”

### Ekran 4 — Ücret SSS

**Neden sitede sabit bir günlük rakam yok?**  
“Çalışma yeri, tarih ve hizmetin içeriği görülmeden bütün taleplere aynı rakamı vermek istemiyoruz. Bilgilerinizi paylaştığınızda günlük teklif ve masraf kalemleri netleşir.”

**为什么网站没有统一日费数字？**  
“在了解地点、日期及内容前，不为所有需求套用同一个价格。提供行程后，再确认每日费用和相关支出。”

**Yarım günlük hizmet alabilir miyim?**  
“Çalışma modelimiz günlüktür. Daha kısa bir görüşme planınız varsa süreyi belirtin; teklif yine günlük hizmet esasına göre değerlendirilir.”

**可以按半天计费吗？**  
“我们的计费方式为按天安排。若会面时间较短，请说明实际时长，仍按日服务方式评估。”

**Birden fazla gün için teklif alabilir miyim?**  
“Evet. Her günün şehrini, çalışma noktasını ve yaklaşık programını paylaşın. Her çalışma günü günlük esasla değerlendirilir.”

**可以咨询连续多天的安排吗？**  
“可以。请逐日提供城市、地点及大致安排，每个工作日按天确认。”

**Çalışma saatleri veya tarihler değişirse ne olur?**  
“Değişikliği mümkün olduğunca erken paylaşın. Yeni uygunluk, çalışma düzeni ve giderler yeniden teyit edilir. Değişiklik koşulları teklif görüşmesinde netleştirilir.”

**工作时段或日期变更怎么办？**  
“请尽早告知，以便重新确认档期、工作安排及费用。具体变更条件应在报价沟通时明确。”

**Teklif sormak rezervasyon anlamına gelir mi?**  
“Hayır. Tarih, kapsam ve çalışma koşulları karşılıklı teyit edilmeden rezervasyon kesinleşmez.”

**咨询报价就代表预约成功了吗？**  
“不代表。日期、范围与工作条件须经双方确认后，预约才算落实。”

### Ekran 5 — Kapanış

**TR:** “Günlük teklif için şehrinizi ve tarihlerinizi paylaşın.”  
**ZH:** “请提供城市与日期，咨询每日费用。”  
CTA: quote + whatsapp. Sitede `Offer` içine sıfır fiyat, “başlangıç fiyatı” veya boş para birimi yazılmaz.



<!-- V12_INSERT_BEGIN:qa-rates -->
<a id="v12-page-rates"></a>
### v1.2 sayfa eki — Günlük ücret ve masraflar

**TR hedef:** `/cince-tercuman-fiyatlari/`  
**ZH hedef:** `/zh/daily-rates/`
**Ekrana yerleştirme:** Teklif ve ücret tablosundan sonra beş gruplu açıklama; tekrar eden eski ücret SSS’leriyle tekilleştirilir. Fatura cevabı onay kapısına bağlıdır.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Günlük tercümanlık bedelini ve ayrıca karşılanacak giderleri ayrı değerlendirin. Rakamdan önce teklifin neleri kapsadığını netleştirelim.

**ZH bölüm girişi:** 请将口译日费与另计支出分开考虑。在比较金额之前，先明确报价范围。

#### Bölüm başlığı TR: Teklifin temeli
**ZH başlık:** 报价依据

<a id="doc-q007"></a>
#### Q007 — Çince tercümanlık için günlük ücret ne kadar ve neye göre belirleniyor?

**Türkçe cevap — site metni**
Günlük ücret; hizmetin konusu, şehir, tarihler, çalışma noktası ve günlük program netleştirildikten sonra belirlenir. Bu nedenle bütün talepler için tek bir rakam yayımlamıyoruz. Teklifte günlük tercümanlık bedeli ile şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme giderlerini ayrı değerlendirelim.

**简体中文 — 问题**
中土口译一天多少钱，费用如何确定？

**简体中文 — 回答**
日费需结合服务内容、城市、日期、实际地点及每日安排确定，因此网站不公布适用于所有需求的统一价格。报价时应将口译日费与市内交通、城际交通、住宿及餐饮费用分别确认。

**Bileşen kimliği:** `Q007` · **Canlı HTML ankrajı:** `faq-007`

<a id="doc-q013"></a>
#### Q013 — Net fiyat teklifi alabilmek için size hangi bilgileri iletmeliyim?

**Türkçe cevap — site metni**
Hizmet türünü, ülke ve şehri, gerçek çalışma noktasını, tarihleri ve kısa ihtiyacınızı iletin. Yaklaşık günlük çalışma saatleri, makine veya ürün grubu, katılımcı sayısı ve şehir değişiklikleri belli ise bunları da ekleyin. İlk mesajda hassas teknik dosyalar göndermeniz gerekmez; hazırlık için gerekli ayrıntıları sonrasında konuşabiliriz.

**简体中文 — 问题**
获得明确报价需要提供哪些信息？

**简体中文 — 回答**
请提供服务类型、国家和城市、实际工作地点、日期及简要需求。若已确定每日时段、设备或产品类别、参加人数及跨城市安排，也请一并说明。首次咨询不必发送敏感技术文件，准备所需的细节可随后沟通。

**Bileşen kimliği:** `Q013` · **Canlı HTML ankrajı:** `faq-013`

<a id="doc-q060"></a>
#### Q060 — Çince tercüman fiyat teklifleri neden farklı oluyor?

**Türkçe cevap — site metni**
Teklifleri karşılaştırırken aynı günlük saatleri, aynı hizmet kapsamını ve aynı gider kalemlerini karşılaştırmanızı öneriyoruz. Bir teklifte dahil görünen gider başka birinde ayrı olabilir; teknik hazırlık ve şehirler arası çalışma da farklı değerlendirilmiş olabilir. Bizden teklif alırken günlük bedeli ve ayrıca karşılanacak masrafları ayrı netleştirin; yalnızca en alttaki rakama bakmayın.

**简体中文 — 问题**
为什么不同中土口译报价差别较大？

**简体中文 — 回答**
建议在相同工作时段、服务范围及费用项目基础上比较。一个报价包含的支出，另一个可能另计；技术准备及跨城市安排也可能不同。向我们询价时，请分别确认日费和额外支出，不要只比较总数字。

**Bileşen kimliği:** `Q060` · **Canlı HTML ankrajı:** `faq-060`

#### Bölüm başlığı TR: Çin, Türkiye ve özel programlar
**ZH başlık:** 中国、土耳其与具体行程

<a id="doc-q055"></a>
#### Q055 — Çin’de günlük tercüman ücreti ne kadar?

**Türkçe cevap — site metni**
Çin’de günlük tercüman ücretini şehir, tarih, görüşme konusu ve günlük programınıza göre belirliyoruz. Guangzhou’daki bir fuar günü ile başka bir şehirdeki teknik fabrika ziyareti aynı koşulları taşımayabilir. Programınızı paylaşın; günlük bedeli ve ayrıca karşılanacak ulaşım, konaklama, yeme-içme giderlerini ayrı gösteren bir teklif değerlendirelim.

**简体中文 — 问题**
在中国安排中土口译，一天多少钱？

**简体中文 — 回答**
中国口译日费需结合城市、日期、会面主题及每天安排确定。广州展会的一天与其他城市的技术工厂参访，不一定具有相同条件。请提供行程，并分别确认日费及另计的交通、住宿、餐饮支出。

**Bileşen kimliği:** `Q055` · **Canlı HTML ankrajı:** `faq-055`

<a id="doc-q056"></a>
#### Q056 — Türkiye’de günlük Çince tercüman ücreti ne kadar?

**Türkçe cevap — site metni**
Türkiye’de makine kurulumu için günlük Çince tercümanlık teklifini, tesisin konumu, ekipman konusu, tarihler ve çalışma düzeni üzerinden hazırlıyoruz. Teklif, yalnızca şehir adına bakılarak kesinleşmez. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içmenin günlük ücrete dahil olmadığını bütçenizde ayrıca dikkate alın.

**简体中文 — 问题**
在土耳其安排中文口译，一天多少钱？

**简体中文 — 回答**
土耳其设备安装口译的日费需根据工厂位置、设备内容、日期及工作安排评估，不能仅凭城市名称确定。市内交通、城际交通、住宿及餐饮不包含在日费内，应在预算中另行考虑。

**Bileşen kimliği:** `Q056` · **Canlı HTML ankrajı:** `faq-056`

<a id="doc-q057"></a>
#### Q057 — Guangzhou’da Türkçe Çince tercüman fiyatları ne kadar?

**Türkçe cevap — site metni**
Guangzhou için fiyat sorarken fuar, fabrika ziyareti veya planlanmış görüşme ihtiyacınızı; tarihlerinizi ve gerçek çalışma noktasını belirtin. Aynı şehirdeki farklı programların ulaşım ve günlük çalışma ihtiyacı değişebilir. Sabit bir şehir fiyatı yerine, sizin programınıza ait günlük ücret ve giderleri birlikte netleştirelim.

**简体中文 — 问题**
广州中土口译的价格是多少？

**简体中文 — 回答**
咨询广州费用时，请说明是展会、工厂参访还是已安排会面，并提供日期及实际地点。同一城市内，不同行程的交通和工作时段也可能不同。我们根据具体安排确认日费及支出，而不是套用统一城市价格。

**Bileşen kimliği:** `Q057` · **Canlı HTML ankrajı:** `faq-057`

<a id="doc-q058"></a>
#### Q058 — Kanton Fuarı için tercüman tutmanın maliyeti nedir?

**Türkçe cevap — site metni**
Kanton Fuarı tercümanlığının maliyetini belirlemek için ziyaret edeceğiniz günleri, ürün grubunu, ekip düzenini ve günlük saatleri paylaşın. Günlük tercümanlık bedelinin yanında ulaşım, konaklama ve yeme-içme ayrıca değerlendirilir. Giriş kartı veya kayıtla ilgili bir gider oluşacaksa kimin karşılayacağını da önceden teyit edelim.

**简体中文 — 问题**
广交会中土口译的费用如何计算？

**简体中文 — 回答**
请提供参观日期、产品类别、团队安排及每日时段，以便确认广交会口译费用。日费之外，交通、住宿和餐饮另计。若涉及入场证件或登记费用，也应事先明确由谁承担。

**Bileşen kimliği:** `Q058` · **Canlı HTML ankrajı:** `faq-058`

<a id="doc-q059"></a>
#### Q059 — Makine kurulumu için Çince teknik tercüman ücreti ne kadar?

**Türkçe cevap — site metni**
Makine kurulumu için teklif; ekipmanın türü, teknik hazırlık ihtiyacı, tesisin konumu, tarihler ve günlük çalışma düzeni görülerek hazırlanır. İlk talebinizde makinenin marka ve modelini veya üretim hattının kısa açıklamasını paylaşabilirsiniz. Günlük tercümanlık ile ulaşım, konaklama ve yeme-içme kalemleri ayrı değerlendirilir; teknik konu görülmeden kesin fiyat söylemiyoruz.

**简体中文 — 问题**
设备安装中土技术口译的日费是多少？

**简体中文 — 回答**
报价需结合设备类型、术语准备需求、工厂位置、日期及每日安排确定。首次咨询可提供设备品牌型号或生产线简述。口译日费与交通、住宿、餐饮分别评估，在不了解技术内容前不报确定价格。

**Bileşen kimliği:** `Q059` · **Canlı HTML ankrajı:** `faq-059`

#### Bölüm başlığı TR: Günlük süre ve tarih koşulları
**ZH başlık:** 每日时段与日期条件

<a id="doc-q008"></a>
#### Q008 — Günlük tercümanlık hizmeti kaç saatlik çalışmayı kapsıyor?

**Türkçe cevap — site metni**
Günlük hizmetin başlangıç ve bitiş saatlerini, molaları ve varsa yolculuk düzenini teklif aşamasında birlikte netleştiriyoruz. “Bir gün” ifadesini sınırsız çalışma olarak değerlendirmeyin. Tüm işler için geçerli, bu sayfada ilan edilmiş sabit bir saat paketi bulunmadığından planladığınız çalışma aralığını talebinizde belirtin.

**简体中文 — 问题**
按天计费具体包含多少小时？

**简体中文 — 回答**
每天的起止时间、休息及必要的出行安排需在报价阶段共同明确。“一天”不代表无限时工作。网站没有公布适用于所有工作的统一小时套餐，请在需求中写明计划工作时段。

**İç uygulama notu — ziyaretçiye gösterilmez:** Sabit günlük saat, mola veya seyahat süresinin mesaiye sayılması kullanıcı tarafından belirlenmedi. 8/9/10 saat gibi sayılar eklenmez.

**Bileşen kimliği:** `Q008` · **Canlı HTML ankrajı:** `faq-008`

<a id="doc-q009"></a>
#### Q009 — Belirlenen çalışma süresinin aşılması durumunda ek ücret alınıyor mu?

**Türkçe cevap — site metni**
Programın kararlaştırılan çalışma aralığını aşma ihtimalini mümkün olduğunca erken bildirin. Uzatma için tercümanın uygunluğu ve varsa ek ücret koşulları ayrıca teyit edilmelidir. Günlük ücretin sınırsız çalışma içerdiğini veya her uzatmanın ücretsiz olduğunu varsaymayın; uygulanacak koşulları hizmet başlamadan netleştirelim.

**简体中文 — 问题**
超过约定工作时段会产生额外费用吗？

**简体中文 — 回答**
如果可能超过约定时段，请尽早告知。是否可以延长及相应费用须另行确认。日费不等于无限时工作，也不能默认延时免费；具体条件应在服务开始前明确。

**Bileşen kimliği:** `Q009` · **Canlı HTML ankrajı:** `faq-009`

<a id="doc-q011"></a>
#### Q011 — Birden fazla gün için tercümanlık aldığımda fiyat değişiyor mu?

**Türkçe cevap — site metni**
Birden fazla gün için programınızın tamamını birlikte değerlendirebiliriz; fiyatlandırma yine günlük yapılır. Toplam gün sayısı, şehir geçişleri, günlük çalışma düzeni ve giderler teklifin kapsamını etkiler. Çok günlük her işte otomatik indirim veya sabit bir indirim oranı uygulandığını söylemiyoruz; geçerli teklif, programınıza göre netleşir.

**简体中文 — 问题**
连续多天使用口译服务，价格会变化吗？

**简体中文 — 回答**
可以将多天行程一并评估，但计费仍以工作日为基础。总天数、城市间转场、每日安排及相关支出会影响整体报价。我们不承诺多日服务自动享有折扣或固定优惠比例，具体费用以行程报价为准。

**Bileşen kimliği:** `Q011` · **Canlı HTML ankrajı:** `faq-011`

<a id="doc-q012"></a>
#### Q012 — Hafta sonu veya resmî tatillerde ücret farklı oluyor mu?

**Türkçe cevap — site metni**
Hafta sonu veya resmî tatil tarihlerini talebinizde açıkça belirtin. Bu günler için tercüman uygunluğunu ve uygulanacak günlük ücret koşullarını ayrıca değerlendirelim. Tüm tarihler için aynı ücretin geçerli olduğunu ya da mutlaka belirli bir tatil farkı alındığını varsaymayın.

**简体中文 — 问题**
周末或法定节假日的口译费用是否不同？

**简体中文 — 回答**
请明确说明涉及的周末或法定节假日日期，以便单独确认档期及当日费用条件。不要默认所有日期价格相同，也不要默认一定收取某个固定比例的节假日附加费。

**Bileşen kimliği:** `Q012` · **Canlı HTML ankrajı:** `faq-012`

#### Bölüm başlığı TR: Ayrıca karşılanan giderler
**ZH başlık:** 另行承担的支出

<a id="doc-q010"></a>
#### Q010 — Tercümanın ulaşım, konaklama ve yemek masraflarını kim karşılıyor?

**Türkçe cevap — site metni**
Şehir içi ulaşım, şehir dışı ulaşım, konaklama ve yeme-içme günlük tercümanlık bedeline dahil değildir; bu giderler ayrıca karşılanır. Giderleri doğrudan sizin mi sağlayacağınız yoksa ayrıca mı ödeyeceğiniz teklif sırasında netleştirilir. Bütçenizi oluştururken yalnızca tercümanlık günlüğünü değil, programınızın gerektirdiği bu kalemleri de değerlendirin.

**简体中文 — 问题**
译员的交通、住宿和餐饮费用由谁承担？

**简体中文 — 回答**
市内交通、城际交通、住宿及餐饮不包含在口译日费内，需要另行承担。由您直接安排还是另行支付，应在报价时明确。制定预算时，请同时考虑行程所需的这些费用，而不只计算译员日费。

**Bileşen kimliği:** `Q010` · **Canlı HTML ankrajı:** `faq-010`

<a id="doc-q061"></a>
#### Q061 — Çince tercüman ücretine hangi masraflar dâhil değildir?

**Türkçe cevap — site metni**
Şehir içi ulaşım, şehir dışı ulaşım, konaklama ve yeme-içme günlük tercümanlık ücretine dahil değildir. Programınıza bağlı giriş, kayıt veya benzeri ek giderler oluşabilecekse bunların durumu ayrıca konuşulur. Teklifinizi onaylamadan önce her giderin kim tarafından ve nasıl karşılanacağını netleştirelim; belirsiz bir “her şey dahil” paket sunmuyoruz.

**简体中文 — 问题**
中土口译日费不包含哪些费用？

**简体中文 — 回答**
市内交通、城际交通、住宿及餐饮不包含在日费内。若行程还可能涉及入场、登记等其他费用，也应另行明确。确认报价前，请核实各项支出由谁以及如何承担；我们不提供范围不明的“全包”承诺。

**Bileşen kimliği:** `Q061` · **Canlı HTML ankrajı:** `faq-061`

<a id="doc-q062"></a>
#### Q062 — Türkiye’den tercüman götürmek mi, Çin’de tercüman tutmak mı daha ekonomik?

**Türkçe cevap — site metni**
Bunu yalnızca günlük ücreti karşılaştırarak söylemek doğru olmaz. Tercümanın bulunduğu yer, uluslararası veya şehirler arası ulaşım, konaklama, seyahat günleri ve bütün program boyunca aynı kişiyle çalışma ihtiyacı toplam maliyeti etkileyebilir. İki seçenek de gerçekten uygulanabiliyorsa, aynı kapsam ve gider kalemleri üzerinden değerlendirelim; Çin’de tercüman tutmanın her durumda daha ucuz olduğunu söylemiyoruz.

**简体中文 — 问题**
从土耳其带译员去中国，还是在中国安排译员更经济？

**简体中文 — 回答**
不能仅比较日费。译员所在地、国际或城际交通、住宿、旅行日及全程由同一人服务的要求，都可能影响总费用。如果两种方案确实可行，应按相同范围及费用项目比较；我们不声称在中国安排译员一定更便宜。

**Bileşen kimliği:** `Q062` · **Canlı HTML ankrajı:** `faq-062`

#### Bölüm başlığı TR: Ödeme ve şirket belgesi
**ZH başlık:** 付款及公司所需凭证

<a id="doc-q014"></a>
#### Q014 — Ödeme ne zaman, hangi para biriminde ve nasıl yapılıyor?

**Türkçe cevap — site metni**
Ödeme zamanı, kullanılacak para birimi, ödeme yöntemi ve varsa ön ödeme koşulları teklifinizde netleştirilir. Bu sayfada bütün işler için geçerli bir kapora oranı veya ödeme kanalı ilan etmiyoruz. Hizmeti onaylamadan önce ödeme bilgilerini ve ödeme yapılacak tarafı doğrudan iletişim kanalımızdan teyit edin.

**简体中文 — 问题**
什么时候付款，使用什么币种和方式？

**简体中文 — 回答**
付款时间、币种、方式及可能涉及的预付款条件，需在具体报价中明确。网站不公布适用于所有工作的统一订金比例或支付渠道。确认服务前，请通过我们的直接联系方式核实付款信息及收款方。

**İç uygulama notu — ziyaretçiye gösterilmez:** Gerçek ödeme kanalları, para birimleri ve ödeme alacak taraf belirlendikten sonra somutlaştırılır. Web sitesine ödeme altyapısı eklendiği anlamına gelmez.

**Bileşen kimliği:** `Q014` · **Canlı HTML ankrajı:** `faq-014`

<a id="doc-q015"></a>
#### Q015 — Şirketimiz adına fatura düzenleyebiliyor musunuz?

**Türkçe cevap — site metni**
Şirket adına fatura düzenlenmesi sizin için gerekli ise bunu teklif talebinizde belirtin. Fatura düzenleme imkânı ve düzenleyici işletme bilgileri teyit edilmeden bu konuda kesin bir onay vermiyoruz. Rezervasyonunuzu kesinleştirmeden önce ihtiyaç duyduğunuz fatura veya ödeme belgesi koşullarını birlikte netleştirelim.

**简体中文 — 问题**
可以向我们公司开具发票吗？

**简体中文 — 回答**
如果公司发票是您的必要条件，请在询价时说明。在确认开票安排及开票主体之前，我们不会作出确定承诺。请在落实预约前，将所需发票或付款凭证的条件确认清楚。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> Fatura düzenleyen gerçek işletme, ülke ve belge türü kullanıcı tarafından verilmedi. Bu cevap taslaktır; yayımdan önce işletme doğrulaması gerekir. Çince 发票 sözcüğü Çin vergi sistemiyle uyumlu özel fatura taahhüdü olarak kullanılmaz.

**Bileşen kimliği:** `Q015` · **Canlı HTML ankrajı:** `faq-015`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Günlük ücret ve masraflar için teklif sorun
**ZH CTA:** 咨询日费与相关支出的报价
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-rates -->

## 15. Hakkımızda ve genel SSS

**Türkçe URL:** `/hakkimizda/`  
**Çince URL:** `/zh/about/`  
**Sayfanın görevi:** Kanıtlanmamış büyüklük iddiaları yerine gerçek çalışma modelini açıklamak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Hakkımızda \| Türkiye ve Çin’de Çince Tercüman | 关于我们｜土耳其与中国中土现场口译 |
| Meta description | Çin’de görüşmeler, fabrika ve fuar ziyaretleri; Türkiye’de makine kurulumu için sözlü tercümanlık yaklaşımımızı ve çalışma biçimimizi inceleyin. | 了解我们为土耳其设备安装及中国会面、工厂和展会行程提供中土口译的服务范围与安排方式。 |

### 15.1 Hakkımızda — Ekran 1

**TR H1:** “İki dil arasında, işin yapıldığı yerde”  
“Çince Tercüman, Türkiye ve Çin’deki saha programları için Çince–Türkçe sözlü tercümanlık desteği sunar. Çalışma odağımız; makine kurulumu, Çin’de planlanmış görüşmeler, fabrika ziyaretleri ve fuar programlarıdır.”

**ZH H1:** “在工作现场，连接中文与土耳其语”  
“Çince Tercüman 为土耳其与中国的现场行程提供中土双向口译。服务重点包括设备安装、中国既定会面、工厂参访及展会交流。”

### 15.2 Hakkımızda — Ekran 2

**TR H2:** “Programınıza göre planlanan bir tercüman ağı”  
“Türkiye ve Çin’in birçok şehrindeki tercüman ağımızla talepleri değerlendiriyoruz. Şehir ve tarih kadar, görüşmenin konusu ve çalışma noktasının konumu da planlamanın bir parçası. Önce bu bilgileri netleştiriyor, ardından uygunluk ve günlük çalışma koşullarını görüşüyoruz.”

**ZH H2:** “根据具体行程安排译员网络”  
“我们通过土耳其与中国多个城市的译员网络评估需求。除城市及日期外，议题和实际地点同样影响安排。先明确这些信息，再沟通档期与每日工作条件。”

### 15.3 Hakkımızda — Ekran 3

**TR H2:** “Sahaya çıkmadan önce aynı beklentide buluşalım”

**Hizmet kapsamı:** “Tercümanın katılacağı görüşmeleri ve konuşulacak konuları belirleyelim.”  
**Çalışma düzeni:** “Buluşma noktası, günlük saatler ve varsa şehir geçişlerini konuşalım.”  
**Ücret bilgisi:** “Günlük tercümanlık ile ulaşım, konaklama ve yeme-içme giderlerini ayrı netleştirelim.”

**ZH H2:** “进入现场前，先确认彼此的预期”

**服务范围：** “明确译员参加的会面和沟通内容。”  
**工作安排：** “确认集合地点、每日时段和城市之间的转场。”  
**费用说明：** “分别明确日费与交通、住宿及餐饮支出。”

FINAL-CTA. Kuruluş yılı, personel sayısı, sertifika, kişisel unvan, müşteri markası ve kanıtlanmamış sonuç eklenmez. Eski sayfada yer alan tarihçe yeni sürüme otomatik aktarılmaz.


<!-- V12_INSERT_BEGIN:qa-about -->
<a id="v12-page-about"></a>
### v1.2 sayfa eki — Hakkımızda: deneyim ve çalışma yaklaşımı

**TR hedef:** `/hakkimizda/`  
**ZH hedef:** `/zh/about/`
**Ekrana yerleştirme:** Son açıklama bölümünden sonra, kapanış teklif CTA’sından önce
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Çalışmadan önce, konuya uygunluk ve iletişim beklentinizi netleştirelim. Doğrulanmamış referans veya genel garantiler yerine işinize ait somut koşulları konuşalım.

**ZH bölüm girişi:** 开始前，先明确主题适配度及沟通预期。应讨论本次工作的具体条件，而不是依赖未经核实的推荐或笼统保证。

#### Bölüm başlığı TR: Deneyim ve ön görüşme
**ZH başlık:** 相关经验与事前沟通

<a id="doc-q016"></a>
#### Q016 — Tercümanınızın benim sektörümde deneyimi var mı?

**Türkçe cevap — site metni**
Sektörünüzü ve görüşmelerde ele alınacak teknik konuları paylaşın; görevlendirilebilecek tercümanın ilgili deneyimini buna göre değerlendirelim. Bütün tercümanların her sektörde aynı deneyime sahip olduğunu iddia etmiyoruz. Özellikle makine kurulumu ve üretim hattı çalışmalarında ekipman türü ile konuşulacak işlemleri önceden bilmemiz önemlidir.

**简体中文 — 问题**
译员是否具有我们行业的相关经验？

**简体中文 — 回答**
请提供行业及需要沟通的技术主题，以便评估拟安排译员的相关经验。我们不会声称所有译员都熟悉所有行业。设备安装或生产线工作尤其需要提前说明设备类型及涉及的操作内容。

**Bileşen kimliği:** `Q016` · **Canlı HTML ankrajı:** `faq-016`

<a id="doc-q017"></a>
#### Q017 — Görevlendirilecek tercümanla hizmet öncesinde tanışabilir veya kısa bir görüşme yapabilir miyim?

**Türkçe cevap — site metni**
Hizmet öncesinde kısa bir tanışma veya ihtiyaç görüşmesi talep edebilirsiniz. Bunun yapılıp yapılamayacağı, tercümanın uygunluğu ve planlamanın hangi aşamada olduğuna göre teyit edilir. Görüşmenin amacı çalışma konusunu, iletişim beklentinizi ve hazırlık ihtiyacını netleştirmektir; her talep için otomatik veya anlık görüşme sözü vermiyoruz.

**简体中文 — 问题**
服务开始前可以与拟安排的译员简单沟通吗？

**简体中文 — 回答**
可以提出简短的介绍或需求沟通请求，是否能够安排取决于译员档期及当前安排进度。沟通重点是工作主题、交流预期及准备需求；我们不承诺每次咨询都能立即安排会面。

**Bileşen kimliği:** `Q017` · **Canlı HTML ankrajı:** `faq-017`

#### Bölüm başlığı TR: Gizlilik ve taraflarla ilişkiler
**ZH başlık:** 保密与各方关系

<a id="doc-q019"></a>
#### Q019 — Görüşmelerde paylaşılan ticari ve teknik bilgilerin gizliliğini nasıl koruyorsunuz?

**Türkçe cevap — site metni**
Gizlilik gereksinimlerinizi işe başlamadan önce paylaşın. Hangi bilgilerin tercümana aktarılabileceğini, kimlerle paylaşılabileceğini ve saklama veya silme beklentilerinizi çalışma öncesinde netleştirelim. İlk talepte yalnızca ihtiyaç özeti gönderin; paylaşma yetkiniz olmayan dosyaları iletmeyin. Özel bir gizlilik protokolü gerekiyorsa belge paylaşımından önce bu koşulları konuşalım.

**简体中文 — 问题**
如何处理会面中的商业和技术保密要求？

**简体中文 — 回答**
请在工作开始前说明保密要求，并事先明确哪些资料可提供给译员、可向谁共享，以及保存或删除方面的要求。首次咨询只需简要说明需求，请勿发送未经授权的资料。如需专门的保密安排，应在分享文件前讨论并确认。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> Bu metin önerilen süreçtir; mevcut sertifikalı güvenlik, saklama süresi, üçüncü taraf kullanmama veya imzalı NDA politikası kanıtı değildir. İşletmenin gerçek veri akışıyla kontrol edilir.

**Bileşen kimliği:** `Q019` · **Canlı HTML ankrajı:** `faq-019`

<a id="doc-q020"></a>
#### Q020 — Şirketimizin gizlilik sözleşmesini imzalayabiliyor musunuz?

**Türkçe cevap — site metni**
Gizlilik sözleşmesi talebinizi hizmet başlamadan önce iletebilirsiniz. Metnin taraflarını, imza yetkisini ve çalışma koşullarıyla uyumunu değerlendirdikten sonra imzalama imkânını teyit etmemiz gerekir. Her sözleşmeyi incelemeden imzalayacağımızı söylemiyoruz; gizli belge paylaşımından önce bu konuyu netleştirelim.

**简体中文 — 问题**
可以签署我们公司的保密协议吗？

**简体中文 — 回答**
可以在服务开始前提出保密协议要求。我们需要先确认协议当事方、签署权限及条款与本次工作的适配情况，再答复是否可以签署。不会承诺未经审阅即签署所有协议；请在提供保密资料前明确相关安排。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> NDA imzalayacak kişi/kuruluş ve uygulanacak süreç doğrulanmadan kesin imza vaadi yayımlanmaz.

**Bileşen kimliği:** `Q020` · **Canlı HTML ankrajı:** `faq-020`

<a id="doc-q021"></a>
#### Q021 — Tercümanın görüşeceğimiz Çinli firma veya tedarikçiyle herhangi bir ticari ilişkisi bulunuyor mu?

**Türkçe cevap — site metni**
Görüşeceğiniz firmanın adını ve varsa bağımsızlık beklentinizi önceden paylaşın. Görevlendirilecek tercümanın bu firmayla geçmiş çalışma, ticari bağlantı veya komisyon ilişkisi bulunup bulunmadığını seçim aşamasında açıklığa kavuşturalım. Tüm tercümanlar için kontrol yapılmadan “hiçbir bağlantısı yoktur” şeklinde genel bir güvence vermiyoruz.

**简体中文 — 问题**
译员与我们将会面的中国企业或供应商存在商业关系吗？

**简体中文 — 回答**
请提前提供对方企业名称及独立性要求。在选择译员时，应明确其是否与该企业有过合作、商业联系或佣金关系。在未进行具体核实前，我们不会对所有译员作出“绝无任何联系”的笼统保证。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> Görevlendirme öncesi çıkar ilişkisi beyanı ve kontrol süreci işletme tarafından kabul edilmelidir; mevcut tüm ağ için araştırılmış ilişkisizlik iddiası yoktur.

**Bileşen kimliği:** `Q021` · **Canlı HTML ankrajı:** `faq-021`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Şehir ve tarihlerinizi paylaşın
**ZH CTA:** 提供城市与日期，咨询安排
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-about -->

### 15.4 Genel SSS sayfası — ayrı URL, gerçek içerik

**TR URL:** `/sik-sorulan-sorular/`  
**ZH URL:** `/zh/faq/`

**TR title:** “Çince Tercümanlık Hakkında Sık Sorulan Sorular”  
**ZH title:** “中土口译常见问题｜档期、费用与行程”

**TR description:** “Çince sözlü tercümanlıkta günlük çalışma, hizmet bölgeleri, teklif için gerekli bilgiler ve program değişiklikleri hakkında sık sorulan sorular.”  
**ZH description:** “了解中土现场口译的按日安排、服务地区、咨询信息、费用及行程变更相关问题。”

**TR H1:** “Tercümanlık talebi öncesinde merak edilenler”  
“İhtiyacınızı doğru tarif etmek ve çalışma koşullarını önceden netleştirmek için en sık karşılaşılabilecek soruları yanıtladık.”

**ZH H1:** “咨询口译前，您可能想了解的问题”  
“以下内容帮助您说明需求，并在安排服务前明确工作条件。”

Aşağıdaki soru-cevapları tek kaynaklı içerik bileşenleri olarak kullanın; metinler önceki bölümlerde tam olarak yazılmıştır. Genel SSS, her hizmet sayfasındaki bütün soruları kopyalamaz.

| Bölüm | Kullanılacak tam soru-cevap |
|---|---|
| Hizmetler | 6.7 “Hangi hizmetleri veriyorsunuz?” / “提供哪些服务？” |
| Planlama | 6.7 “Talep oluşturmak için hangi bilgiler gerekli?” / “咨询时需要提供什么信息？” |
| Yer | 6.7 “Listede olmayan bir şehir için sorabilir miyim?” / “列表之外的城市可以咨询吗？” |
| Ücret | 6.7 “Hizmet nasıl ücretlendiriliyor?” / “如何计费？” |
| Çalışma biçimi | 14 “Yarım günlük hizmet alabilir miyim?” / “可以按半天计费吗？” |
| Değişiklik | 14 “Çalışma saatleri veya tarihler değişirse ne olur?” / “工作时段或日期变更怎么办？” |
| Onay | 14 “Teklif sormak rezervasyon anlamına gelir mi?” / “咨询报价就代表预约成功了吗？” |

**Ek soru — TR:** “WhatsApp kullanamıyorsam nasıl ulaşırım?”  
“info@cince-tercuman.com adresine hizmet, şehir, tarih ve kısa ihtiyaç bilgilerinizi gönderebilirsiniz. Telefonla ulaşmak için +90 507 528 61 87 numarasını kullanabilirsiniz.”

**Ek soru — ZH:** “无法使用 WhatsApp，如何联系？”  
“您可以将服务类型、城市、日期及简要需求发送至 info@cince-tercuman.com，也可以拨打 +90 507 528 61 87。”

**Son satır TR:** “Sorunuz programınıza özel mi? Şehir ve tarihleri paylaşarak bize ulaşın.”  
**ZH:** “您的问题与具体行程有关吗？请提供城市与日期联系我们。”

Her kategori ilgili hizmet veya ücret sayfasına link verir. **Şema:** WebPage + BreadcrumbList. İlk sürümde FAQPage JSON-LD zorunlu değildir ve Google zengin sonucu hedefi olarak kullanılmaz. [G2]



<!-- V12_INSERT_BEGIN:qa-faq -->
<a id="v12-page-faq"></a>
### v1.2 sayfa eki — Genel SSS ve rezervasyon

**TR hedef:** `/sik-sorulan-sorular/`  
**ZH hedef:** `/zh/faq/`
**Ekrana yerleştirme:** Kısa genel giriş ve konu bağlantıları ardından. Bütün hizmet sayfalarının soruları buraya kopyalanmaz.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Talep göndermek, yer ayırmak ve programı değiştirmek aynı işlem değildir. Hangi aşamada nelerin teyit edileceğini burada açıklıyoruz.

**ZH bölüm girişi:** 提交需求、确认预约和修改行程不是同一操作。以下说明各阶段应确认的内容。

**Konu geçişleri — sayfanın başında altı bağlantı:** Hizmet ve günlük çalışma → genel hizmet sayfası; ücret ve giderler → fiyat sayfası; makine kurulumu → kurulum sayfası; fabrika ziyareti → fabrika sayfası; fuar/Kanton → ilgili fuar sayfası; tercüman seçimi → yeni rehber. Çince etiketler: 服务与按天安排 / 费用与支出 / 设备安装 / 工厂参访 / 展会与广交会 / 如何选择译员。

**Korunacak yardımcı soru:** Bölüm 15.4’teki “WhatsApp kullanamıyorsam nasıl ulaşırım?” sorusu ve iki dilli cevabı kalır. Diğer sayfaların 110 cevabının tamamı bu sayfaya taşınmaz; konu bağlantıları esas alınır.

#### Bölüm başlığı TR: Tarih ve uygunluk
**ZH başlık:** 日期与档期

<a id="doc-q005"></a>
#### Q005 — Tercüman rezervasyonunu ne kadar önceden yapmalıyım?

**Türkçe cevap — site metni**
Şehir ve tarih aralığınız belli olduğunda bizimle iletişime geçmenizi öneriyoruz. Teknik uzmanlık gerektiren işler, birden fazla şehir içeren programlar ve belirli fuar günleri için hazırlık ve uygunluk kontrolüne zaman ayırmak gerekir. Her iş için geçerli sabit bir son başvuru süremiz yok; son dakika talebinizi de mevcut uygunluğa göre değerlendirebiliriz.

**简体中文 — 问题**
应提前多久联系并预约口译？

**简体中文 — 回答**
城市和日期范围确定后，建议尽早联系我们。涉及技术内容、多城市行程或特定展会日期的需求，需要预留准备及档期确认时间。我们不设适用于所有工作的统一提前天数；临时需求也可咨询，但须根据实际档期评估。

**Bileşen kimliği:** `Q005` · **Canlı HTML ankrajı:** `faq-005`

<a id="doc-q006"></a>
#### Q006 — Acil veya ertesi gün için Çince tercüman bulabilir misiniz?

**Türkçe cevap — site metni**
Acil veya ertesi gün başlayacak bir iş için talebinizi iletebilirsiniz; ancak tercüman bulunacağını önceden garanti etmiyoruz. Şehri, tam çalışma noktasını, başlangıç saatini ve konuşulacak konuyu birlikte paylaşın. Uygunluk teyidi gelmeden tercümanınızın kesinleştiğini varsaymayın.

**简体中文 — 问题**
紧急需求或第二天开始的工作，可以安排口译吗？

**简体中文 — 回答**
可以提交紧急或次日开始的需求，但我们不能预先保证一定有译员。请同时提供城市、准确地点、开始时间及沟通主题。在收到档期确认前，请不要将译员安排视为已经落实。

**Bileşen kimliği:** `Q006` · **Canlı HTML ankrajı:** `faq-006`

#### Bölüm başlığı TR: Rezervasyonu kesinleştirme
**ZH başlık:** 确认预约

<a id="doc-q041"></a>
#### Q041 — Rezervasyonun kesinleşmesi için hangi adımları tamamlamamız gerekiyor?

**Türkçe cevap — site metni**
Önce hizmet, şehir, tarihler, gerçek çalışma noktası ve günlük programı netleştiriyoruz. Ardından tercüman uygunluğu, günlük ücret, ayrıca karşılanacak giderler ve çalışma koşulları karşılıklı teyit edilir. Varsa ödeme veya belge adımları da tamamlanıp size açık bir hizmet teyidi verilmeden rezervasyonun kesinleştiğini varsaymayın. Form doldurmak veya WhatsApp mesajı göndermek tek başına rezervasyon değildir.

**简体中文 — 问题**
完成哪些步骤后，预约才算确定？

**简体中文 — 回答**
先明确服务、城市、日期、实际地点及每天行程，再共同确认译员档期、日费、另计支出及工作条件。如有付款或文件要求，也须完成相应步骤并收到明确服务确认。填写表单或发送 WhatsApp 消息，本身不等于预约成功。

**Bileşen kimliği:** `Q041` · **Canlı HTML ankrajı:** `faq-041`

<a id="doc-q042"></a>
#### Q042 — Birden fazla gün süren işlerde aynı tercümanla çalışabilecek miyiz?

**Türkçe cevap — site metni**
Birden fazla günlük işte aynı tercümanla devam etme tercihinizi baştan belirtin. Bunun mümkün olup olmadığı bütün tarih aralığındaki uygunluğa bağlıdır; yalnızca ilk günün teyit edilmesi sonraki günlerin de ayrıldığı anlamına gelmez. Program değişirse devamlılık ve olası alternatifler yeniden değerlendirilir.

**简体中文 — 问题**
多日工作能安排同一位译员吗？

**简体中文 — 回答**
请在开始时说明希望由同一位译员连续服务。能否安排取决于整个日期范围的档期；确认首日并不代表后续日期也已保留。行程变更时，连续服务及可能的替代方案需重新评估。

**Bileşen kimliği:** `Q042` · **Canlı HTML ankrajı:** `faq-042`

#### Bölüm başlığı TR: Değişiklik ve hizmet sırasında iletişim
**ZH başlık:** 变更与服务期间联系

<a id="doc-q043"></a>
#### Q043 — Uçuşumuz, fabrika randevumuz veya iş programımız değişirse rezervasyonu güncelleyebilir miyiz?

**Türkçe cevap — site metni**
Uçuş, fabrika randevusu veya iş programınız değiştiğinde yeni bilgileri mümkün olduğunca erken iletin. Yeni tarihler, tercüman uygunluğu ve ulaşım veya konaklama gibi giderler yeniden değerlendirilir. Değişikliğin ücretsiz ya da otomatik kabul edildiğini varsaymayın; rezervasyonunuza ilişkin koşullar üzerinden karşılıklı teyit alalım.

**简体中文 — 问题**
航班、工厂预约或工作计划变化后，可以修改预约吗？

**简体中文 — 回答**
请尽早提供变更信息，以便重新评估日期、译员档期及交通住宿等支出。不要默认修改免费或自动获批，应按该次预约约定的条件重新确认。

**Bileşen kimliği:** `Q043` · **Canlı HTML ankrajı:** `faq-043`

<a id="doc-q044"></a>
#### Q044 — Rezervasyonu iptal etmemiz veya tarih değiştirmemiz gerekirse hangi koşullar geçerli?

**Türkçe cevap — site metni**
İptal ve tarih değişikliği koşulları, rezervasyonunuzu kesinleştirmeden önce teklifinizle birlikte netleştirilmelidir. Bildirim zamanı, ayrılan günler ve önceden oluşmuş giderler değerlendirmede önem taşıyabilir. Her rezervasyon için geçerli ücretsiz iptal süresi veya sabit iade oranı ilan etmiyoruz; işlem yapmadan önce size teyit edilen koşulları kontrol edin.

**简体中文 — 问题**
取消预约或更改日期适用什么条件？

**简体中文 — 回答**
应在确认预约前，与报价一起明确取消及改期条件。通知时间、已预留日期及已发生支出可能影响处理。我们不公布适用于所有预约的统一免费取消期限或退款比例，请以已向您确认的条件为准。

**İç uygulama notu — ziyaretçiye gösterilmez:** Bu cevap hukuki iptal/iade politikası değildir. Gerçek sözleşme ve uygun hukuki inceleme olmadan yeni bağlayıcı kesinti/iade oranı üretilmez.

**Bileşen kimliği:** `Q044` · **Canlı HTML ankrajı:** `faq-044`

<a id="doc-q045"></a>
#### Q045 — Görevlendirilen tercüman beklenmedik bir nedenle gelemezse nasıl bir çözüm sunuyorsunuz?

**Türkçe cevap — site metni**
Böyle bir durum oluşursa mevcut iletişim kanalımız üzerinden programı ve mümkün olan alternatifleri birlikte değerlendirelim. Başka bir tercümanın bulunması şehir, tarih ve işin konusuna bağlıdır; koşulsuz veya anlık yedek tercüman garantisi vermiyoruz. Bir değişiklik gerekiyorsa yeni görevlendirme ve çalışma koşulları ayrıca teyit edilmelidir.

**简体中文 — 问题**
已安排的译员因突发情况无法到场，怎么办？

**简体中文 — 回答**
出现这种情况时，请通过现有联系渠道共同评估行程及可行替代方案。是否能找到其他译员取决于城市、日期和工作内容；我们不承诺无条件或即时替补。若需变更人员，应另行确认新的安排及工作条件。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> İşletme, aksama iletişim süreci ve alternatif araştırma sorumluluğunu onaylamalıdır. 24/7 destek, ücretsiz yedek veya kesintisizlik garantisi yoktur.

**Bileşen kimliği:** `Q045` · **Canlı HTML ankrajı:** `faq-045`

<a id="doc-q046"></a>
#### Q046 — Hizmet sırasında bir sorun yaşarsak kiminle iletişime geçeceğiz?

**Türkçe cevap — site metni**
Hizmet sırasında bir sorun yaşarsanız WhatsApp üzerinden +90 555 044 11 41 numarasına, telefonla +90 507 528 61 87 numarasına veya info@cince-tercuman.com adresine ulaşabilirsiniz. Mesajınızda çalışma tarihini, konumu ve sorunun kısa açıklamasını belirtin. Sahadaki acil güvenlik durumlarında ise önce tesisin yetkili sorumlusuna haber verin.

**简体中文 — 问题**
服务过程中出现问题，应联系谁？

**简体中文 — 回答**
可通过 WhatsApp 联系 +90 555 044 11 41，拨打 +90 507 528 61 87，或发送邮件至 info@cince-tercuman.com。请说明工作日期、地点及问题概要。现场紧急安全情况应先通知工厂的负责人员。

**Bileşen kimliği:** `Q046` · **Canlı HTML ankrajı:** `faq-046`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Programınızı paylaşarak bize ulaşın
**ZH CTA:** 提供行程，联系我们
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-faq -->

<!-- V13_BRIDGE_BEGIN:contact -->
**v1.3 iletişim eklemesi:** Aşağıdaki TR/ZH formu korunur. AZ formu, zorunlu ve ön seçimsiz dil gereksinimi, AZ hata/önizleme mesajları ve aynı iletişim hedefleri [bölüm 56](#v13-contact) içindedir.
<!-- V13_BRIDGE_END:contact -->

## 16. İletişim ve WhatsApp talep ekranı

**Türkçe URL:** `/iletisim/`  
**Çince URL:** `/zh/contact/`  
**Sayfanın görevi:** Veritabanı ve yönetim paneli olmadan, doğru numaraya bağlanan anlaşılır bir talep hazırlama akışı sunmak.

| SEO alanı | Türkçe | 简体中文 |
|---|---|---|
| Title | Çince Tercüman Talebi \| WhatsApp’tan Uygunluk ve Teklif | 联系中土口译｜咨询档期与每日报价 |
| Meta description | Hizmet türünü, şehri, tarihleri ve ihtiyacınızı paylaşın. Çince tercüman için WhatsApp, telefon veya e-posta üzerinden uygunluk ve günlük teklif sorun. | 请提供服务类型、城市、日期及简要需求，通过 WhatsApp、电话或邮件咨询中土口译档期与每日报价。 |

### 16.1 Ekran 1 — Hero ve iletişim kartları

**TR H1:** “Şehrinizi ve tarihlerinizi paylaşın, uygunluğu birlikte netleştirelim”  
“Aşağıdaki bilgilerle WhatsApp mesajınızı hazırlayabilir veya doğrudan bize yazabilirsiniz. Hizmet günlük ücretlendirilir; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.”

**ZH H1:** “告诉我们城市与日期，咨询档期和报价”  
“填写以下信息以准备 WhatsApp 咨询内容，也可直接通过邮件或电话联系。服务按天计费，交通、住宿及餐饮费用另计。”

**TR iletişim kartları:** “WhatsApp’tan yaz” · “Telefonla ara” · “E-posta gönder”  
**ZH iletişim kartları:** “WhatsApp 咨询” · “发送邮件” · “拨打电话”

Çince sürümde e-posta bağlantısı küçük footer yazısına saklanmaz; WhatsApp ile aynı görünür grupta bulunur. Ağ veya uygulama erişimi sorunu yaşayan kullanıcı alternatif iletişim kurabilir. WeChat hesabı verilmediği için WeChat butonu, QR kodu veya uydurma hesap eklenmez.

### 16.2 Ekran 2 — Form

| Alan / key | TR etiket | ZH etiket | Kural |
|---|---|---|---|
| service | Hangi hizmete ihtiyacınız var? | 您需要哪种服务？ | Zorunlu; dört hizmet + Emin değilim |
| country | Çalışma ülkesi | 工作所在国家 | Hizmete göre varsayılan; makine için Türkiye, Çin hizmetleri için Çin |
| city | Şehir ve çalışma bölgesi | 城市及工作区域 | Zorunlu serbest metin; 2–100 karakter |
| start | Başlangıç tarihi | 开始日期 | Tarih kesin ise zorunlu |
| end | Son çalışma tarihi | 最后工作日期 | İsteğe bağlı; aynı gün seçilebilir; başlangıçtan önce olamaz |
| datesUnknown | Tarihlerim henüz kesin değil | 日期尚未确定 | İşaretlenince kesin tarih zorunluluğu kalkar |
| approximate | Yaklaşık tarih veya dönem | 大致日期或时间段 | Tarih belirsizse görünür; isteğe bağlı |
| need | İhtiyacınızı kısaca anlatın | 简要说明需求 | Zorunlu; 10–600 karakter |

**Hizmet seçenekleri:**

| key | TR | ZH |
|---|---|---|
| china | Çin’de tercüman | 中国现场口译 |
| machine | Makine kurulumu tercümanlığı | 设备安装口译 |
| factory | Çin’de fabrika ziyareti tercümanlığı | 中国工厂参访口译 |
| fair | Çin’de fuar tercümanlığı | 中国展会口译 |
| unsure | Emin değilim | 尚不确定 |

“Emin değilim” yeni bir hizmet değil, yönlendirme seçeneğidir. Hizmet-country tutarsızlığı olduğunda form kullanıcıyı bilgilendirir; Çin fabrika/fuar hizmeti seçiliyken Türkiye sessizce kabul edilmez. Makine hizmetinin Türkiye dışındaki bir çalışma talebi için uygunluğu ayrıca değerlendirilir; varsayılan ülke kullanıcıdan gizlenmez.

**TR alan yardımı:** “Makine türünü, fabrika veya fuarın adını ve konuşulacak konuları yazabilirsiniz. İlk mesajda kişisel veya gizli belgeler paylaşmayın.”

**ZH alan yardımı:** “可说明设备类型、工厂或展会名称及沟通主题。首次咨询请勿提交个人证件或保密文件。”

**TR tarih yardımı:** “Birden fazla şehir veya aralıklı gün varsa aşağıdaki açıklamaya ekleyin.”  
**ZH:** “如涉及多个城市或不连续日期，请在需求说明中注明。”

**Ad, e-posta, telefon, şirket unvanı ve dosya yükleme ilk formda zorunlu değil.** WhatsApp sohbetinde iletişim kanalı zaten oluşur. Böylece ilk adım kısa kalır.

### 16.3 Ekran 3 — Mesaj önizleme ve eylem

Form dolduruldukça aynı ekranda düzenlenebilir, salt metin bir mesaj önizlemesi gösterilir. Mobilde formun altındadır; masaüstünde yan panel olabilir.

**TR başlık:** “Göndereceğiniz mesaj”  
**ZH başlık:** “将发送的咨询内容”

**TR ana düğme:** “WhatsApp’ta mesajı aç”  
**ZH ana düğme:** “在 WhatsApp 中打开咨询”

**TR açıklama:** “Bu form sitede rezervasyon oluşturmaz. Mesaj WhatsApp’ta açılır; göndermek için oradaki gönder düğmesine basmanız gerekir.”

**ZH açıklama:** “此表单不会在网站中创建预约。消息将在 WhatsApp 中打开，您需要在 WhatsApp 内确认发送。”

Alternatifler: “Mesajı kopyala / 复制咨询内容” ve “E-postayla gönder / 通过邮件发送”。

### 16.4 Gerçek mesaj şablonları

**Türkçe:**

```text
Merhaba, Çince–Türkçe sözlü tercümanlık için uygunluk ve günlük teklif sormak istiyorum.

Hizmet: {hizmet}
Ülke: {ulke}
Şehir / çalışma bölgesi: {sehir}
Tarih: {tarih_araligi_veya_belirsiz}
Kısa ihtiyaç: {ihtiyac}

Günlük tercümanlık ücretini; şehir içi / şehir dışı ulaşım, konaklama ve yeme-içme giderlerinden ayrı olarak paylaşabilir misiniz?
Kaynak sayfa: {yalniz_sayfa_yolu}
```

**简体中文：**

```text
您好，我想咨询中土现场口译的档期与每日报价。

服务类型：{service}
国家：{country}
城市 / 工作区域：{city}
日期：{date_range_or_pending}
简要需求：{need}

请将口译日费与市内交通、城际交通、住宿及餐饮费用分别说明。
来源页面：{path_only}
```

Bu değişkenler formun gerçekten girilen değerleridir; örnek isim, firma, tarih veya fiyat kullanıcıya önceden doldurulmaz. Kanton sayfasından gelen formda hizmet “Fuar” seçilir; ihtiyaç alanına yalnızca “Kanton Fuarı / 广交会” bağlamı eklenebilir.

### 16.5 Hata ve durum metinleri

| Durum | TR | ZH |
|---|---|---|
| Hizmet boş | Lütfen bir hizmet seçin. | 请选择服务类型。 |
| Şehir boş | Lütfen çalışma şehrini veya bölgesini yazın. | 请填写工作城市或区域。 |
| Tarih boş | Başlangıç tarihini seçin veya tarihlerin henüz belli olmadığını işaretleyin. | 请选择开始日期，或勾选日期尚未确定。 |
| Geçmiş tarih | Başlangıç tarihini bugün veya sonraki bir gün olarak seçin. | 开始日期请选择今天或之后的日期。 |
| Tarih sırası yanlış | Son çalışma tarihi başlangıçtan önce olamaz. | 最后工作日期不能早于开始日期。 |
| İhtiyaç kısa | İhtiyacınızı en az 10 karakterle açıklayın. | 请用至少 10 个字符说明需求。 |
| İhtiyaç uzun | Açıklamayı 600 karakter içinde tutun. | 需求说明请控制在 600 个字符以内。 |
| Kopyalandı | Mesaj panoya kopyalandı. | 咨询内容已复制。 |
| Kopyalama başarısız | Mesajı seçip kopyalayın veya e-posta bağlantısını kullanın. | 请选中内容手动复制，或使用邮件链接。 |
| WhatsApp’a geçiş | Mesajınız WhatsApp’ta açılacak. Göndermeyi orada tamamlayın. | 咨询内容将在 WhatsApp 中打开，请在那里完成发送。 |

“Asistan talebinizi aldı”, “Kaydınız oluşturuldu” veya “Rezervasyonunuz onaylandı” durumu **gösterilmez**. Site WhatsApp mesajının gönderildiğini bilemez.

### 16.6 Etkileşim kuralları

Formu kapatan kullanıcı girdileri aynı sayfa oturumunda kaybetmesin; kalıcı kayıt için localStorage kullanmak gerekmez. Kişisel veya serbest metinli alanlar site URL’sine/query string’ine eklenmez. E-posta/WhatsApp adresi önceden kodlanan sabit bir konfigürasyondan gelir; kullanıcının sağlayacağı bir numaraya yönlenmez.

Tarih kıyasında çalışma ülkesinin takvim günü kullanılır: Türkiye için Europe/Istanbul, Çin için Asia/Shanghai. Tarihi UTC’ye çevirirken günü kaydıracak `toISOString().slice(0, 10)` yaklaşımı kullanılmaz.

JavaScript çalışmadığında form mesaj üretimi için açık bilgi gösterilir ve normal `https://wa.me/905550441141`, `mailto:` ve `tel:` bağlantıları çalışmaya devam eder. Form yanlışlıkla varsayılan GET ile özel metinleri site URL’sine göndermemelidir.



<!-- V12_INSERT_BEGIN:contact-supplement -->
<a id="v12-contact-supplement"></a>
### v1.2 iletişim eki — açıklama, güvenlik ve hazırlık

Mevcut hizmet + şehir + tarihler + kısa ihtiyaç akışı korunur. Bu 110 soruyu cevaplayabilmek için yeni bir üyelik, sohbet botu, ödeme ekranı veya yönetim paneli gerekmez. İlk ekranda uzun form üretilmez.

**Form yakınında üç konu bağlantısı:** Günlük ücret ve ayrıca alınan masraflar → Q007/Q010; rezervasyonun ne zaman kesinleştiği → Q041; paylaşılacak hazırlık bilgileri → Q013/Q018. Gerçek bağlantı, bölüm 45’te belirtilen birincil sayfadaki soru ankrajına gider.

**TR kısa bildirim:** “Teklif istemek rezervasyon oluşturmaz. Günlük çalışma saatleri, ödeme ve değişiklik koşulları hizmet teyidinden önce netleştirilir. Lütfen ilk mesajda hassas teknik dosyalar veya paylaşma yetkiniz olmayan bilgiler göndermeyin.”

**ZH kısa bildirim:** “询价不等于预约成功。每日时段、付款及变更条件应在确认服务前明确。首次消息请勿发送敏感技术文件或未经授权的信息。”

**Sorunuzla devam edin:** Kullanıcı bir soru üzerinden iletişime geçtiğinde mesaj taslağına yalnızca o sorunun kamusal kısa başlığı veya Q kimliği, onayıyla eklenebilir. Soru başlığını eklemek isteğe bağlıdır; kullanıcıya sorunun cevabını okumak için iletişim zorunluluğu getirilmez.

**Çince iletişim:** WhatsApp + e-posta + e-posta/metin kopyalama alternatifi görünür. Doğrulanmış WeChat hesabı verilmediği için WeChat butonu/QR kapalı kalır. Çin ana karası gerçek ağ testi tamamlanmış sayılmaz.
<!-- V12_INSERT_END:contact-supplement -->

## 17. Mevcut şehir sayfaları — korunacak URL’ler ve gerçek metinler

### 17.0 Ortak şablon

Her şehir sayfasında sıralama: **Hero → konuma özgü planlama açıklaması → ilgili hizmet bağlantıları → PRICE-NOTE → iki yerel soru-cevap → şehir seçili teklif CTA’sı**. Türkçe URL’ler değiştirilmez; Çince eşlenikleri yeni eklenir.

Bu sayfalar sahte yerel şube sayfası değildir. Yerel adres, harita iğnesi, ofis çalışma saati ve şehir başına ayrı Organization üretilmez. Özellikle Shenzhen ve Yiwu, kullanıcının doğrudan teyit ettiği merkezler arasında değildir; aşağıdaki metinler yalnızca program bazlı talep değerlendirmesini ifade eder. Fiilen hizmet sağlanamayacak bir konum için yanıltıcı satış sayfası korunmaz; geçiş matrisindeki inceleme kuralı uygulanır.

Aşağıda her sayfanın ortak bileşenler dışında kullanılacak özgün metinleri yer alır. Şehir metinleri sırf kelime sayısına ulaşmak için uzatılmaz. Yeni şehir sayfası üretiminde de aynı yaklaşım korunur.


### 17.1 İstanbul / 伊斯坦布尔

**TR URL:** `/cince-tercuman-istanbul/`  
**ZH URL:** `/zh/istanbul-interpreter/`  
**TR title:** İstanbul Çince Tercüman | Makine Kurulumu  
**ZH title:** 伊斯坦布尔设备安装口译｜中土现场沟通

**TR meta description:** İstanbul’da Çinli teknik ekiple yapılacak makine kurulumu ve buna bağlı saha açıklamaları için Çince–Türkçe sözlü tercümanlık. Tesisin hangi bölgede olduğunu ve çalışma günlerini paylaşın.  
**ZH meta description:** 为中国技术团队在伊斯坦布尔进行设备安装及相关现场说明提供中土口译。请告知工厂所在区域及工作日期。

#### Ekran 1 — Hero

**TR H1:** İstanbul Çince Tercüman — Makine Kurulumu  
İstanbul’da Çinli teknik ekiple yapılacak makine kurulumu ve buna bağlı saha açıklamaları için Çince–Türkçe sözlü tercümanlık. Tesisin hangi bölgede olduğunu ve çalışma günlerini paylaşın.

**ZH H1:** 伊斯坦布尔设备安装口译：中土现场沟通  
为中国技术团队在伊斯坦布尔进行设备安装及相关现场说明提供中土口译。请告知工厂所在区域及工作日期。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** İstanbul’da çalışma noktasını doğru tarif edin  
Konaklama veya şirket merkeziniz ile makinenin kurulacağı tesis aynı yerde olmayabilir. Teklifte fabrikanın ilçesini ve gerçek çalışma konumunu esas alalım. Gün içinde farklı bir noktaya geçilecekse bu bilgiyi de günlük programa ekleyin.

**ZH H2:** 请明确伊斯坦布尔的实际工作地点  
住宿地点、公司地址与设备安装工厂可能不同。咨询时请以工厂所在区域及实际位置为准；同一天如需前往其他地点，也请在行程中注明。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Makine kurulumu, günlük ücret, ilgili hazırlık rehberi ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**İstanbul’da hangi bölgelerde uygunluk sorabilirim?**  
Tesisin bulunduğu ilçe ve konumu paylaşabilirsiniz. Tercüman uygunluğu ve şehir içi ulaşım ihtiyacı çalışma tarihleriyle birlikte değerlendirilir.

**伊斯坦布尔哪些区域可以咨询？**  
请提供工厂所在区域及具体位置，译员档期和市内交通需求将结合日期确认。

**Teknik ekip farklı bir adreste konaklıyorsa ne yazmalıyım?**  
Çalışma yapılacak fabrika adresini ve varsa ayrı buluşma noktasını belirtin. Günlük ulaşım planı buna göre netleşir.

**技术团队住在其他地点，需要说明吗？**  
请分别提供安装工厂与集合地点，以便确认每日交通安排。

#### Ekran 5 — CTA

**TR:** “İstanbul için uygunluk sor”  
**ZH:** “咨询伊斯坦布尔口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-istanbul -->
<a id="v12-page-istanbul"></a>
### v1.2 sayfa eki — İstanbul yerel soru-cevap

**TR hedef:** `/cince-tercuman-istanbul/`  
**ZH hedef:** `/zh/istanbul-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q069"></a>
#### Q069 — İstanbul’da makine kurulumu için Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
İstanbul’da makine kurulumu için Çince tercümanlık talebinizi, şirket merkezinizden çok makinenin bulunduğu gerçek tesis konumuyla iletin. Şirketiniz Kadıköy, Beşiktaş veya Üsküdar’da; kurulum başka bir ilçede ya da Gebze’de olabilir. Tesis konumu, tarihler, makine türü ve günlük program netleştiğinde uygun tercümanlık planını değerlendirelim.

**简体中文 — 问题**
伊斯坦布尔设备安装如何咨询中文口译？

**简体中文 — 回答**
请优先提供设备所在工厂的实际地点，而不仅是公司总部地址。公司可能位于 Kadıköy、Beşiktaş 或 Üsküdar，而安装地点在其他城区或盖布泽。明确工厂位置、日期、设备类型及每天安排后，再评估合适的中土口译。

**Bileşen kimliği:** `Q069` · **Canlı HTML ankrajı:** `faq-069`


#### İstanbul yerel ekleri — önceki önerilerin iki dilde tamamlanmış uygulaması

Bölüm 33.1’deki yerel açıklamaları mevcut İstanbul sayfasına ekleyin. Aşağıdaki üç soru, o bölümdeki örneklerin tekilleştirilmiş ve iki dile tamamlanmış sürümüdür; eski örneklerle birlikte tekrar gösterilmez. Bu maddeler kullanıcı listesindeki 110 soruya dahil değildir.

**TR — Kadıköy, Üsküdar veya Beşiktaş için ayrı bir ofise mi başvurmalıyım?**
Hayır. Tek iletişim kanalımızdan ilçenizi, gerçek çalışma noktasını ve tarihlerinizi paylaşabilirsiniz. Tercüman uygunluğunu bu bilgilerle değerlendiriyoruz; bu ilçelerde ayrı bir ofisimiz olduğu anlamına gelmez.

**ZH — Kadıköy、Üsküdar 或 Beşiktaş 的需求需要联系不同办公室吗？**
不需要。您可以通过同一个联系渠道提供区域、实际工作地点和日期，以便确认档期。这不代表我们在这些区域分别设有办公室。

**TR — Şirketimiz İstanbul’da, makine kurulumu Gebze’de. Hangi şehri belirtmeliyiz?**
Çalışma yeri olarak makinenin kurulacağı tesisin bulunduğu şehri belirtin. İstanbul’daki şirket, konaklama veya ayrı buluşma noktası bilgilerini açıklama kısmına ekleyin. Tercümanlık ve ulaşım, gerçek çalışma programına göre ayrı değerlendirilir.

**ZH — 公司在伊斯坦布尔，安装工厂在盖布泽，应填写哪个城市？**
工作地点请填写安装工厂所在城市。伊斯坦布尔的公司、住宿或集合地点，可另行补充。口译与交通按照实际工作行程分别确认。

**TR — İstanbul’da konaklayan Çinli teknik ekip için hangi adresi yazmalıyım?**
Öncelikle çalışma yapılacak tesisin konumunu yazın. Oteli veya başka bir buluşma noktasını ayrıca belirtin; yalnızca otel adresi makinenin kurulum yerini anlatmayabilir.

**ZH — 中国技术团队住在伊斯坦布尔，应该提供哪个地址？**
请先提供实际工作工厂的位置，再单独注明酒店或其他集合地点。只提供酒店地址，不一定能说明设备安装地点。

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-istanbul -->

### 17.2 Ankara / 安卡拉

**TR URL:** `/cince-tercuman-ankara/`  
**ZH URL:** `/zh/ankara-interpreter/`  
**TR title:** Ankara Çince Tercüman | Teknik Saha Tercümanlığı  
**ZH title:** 安卡拉设备安装口译｜中土技术沟通

**TR meta description:** Ankara’da Çinli teknik ekip ile işletmeniz arasındaki kurulum ve kullanım açıklamalarına Çince–Türkçe sözlü tercümanlık desteği. Fabrikanın konumunu, makine türünü ve tarihleri paylaşın.  
**ZH meta description:** 为安卡拉的中国技术团队与土耳其工厂提供安装及使用说明相关口译。请提供工厂位置、设备类型和日期。

#### Ekran 1 — Hero

**TR H1:** Ankara Çince Tercüman — Teknik Saha Tercümanlığı  
Ankara’da Çinli teknik ekip ile işletmeniz arasındaki kurulum ve kullanım açıklamalarına Çince–Türkçe sözlü tercümanlık desteği. Fabrikanın konumunu, makine türünü ve tarihleri paylaşın.

**ZH H1:** 安卡拉设备安装口译：中土技术沟通  
为安卡拉的中国技术团队与土耳其工厂提供安装及使用说明相关口译。请提供工厂位置、设备类型和日期。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Şehir adıyla birlikte tesisin yerini de paylaşın  
Ankara olarak belirtilen bir programda merkezdeki görüşme yeri ile kurulum sahası farklı olabilir. Tercümanın katılacağı çalışma noktasını ve günlük başlangıç–bitiş saatlerini ayrı yazın. Ulaşım ve varsa konaklama gereksinimi bu program üzerinden değerlendirilir.

**ZH H2:** 除城市名称外，也请提供工厂位置  
在安卡拉的会面地点与安装现场可能不同。请明确译员需要到达的工作地点及每日开始、结束时间，并据此评估交通与可能的住宿安排。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Makine kurulumu, günlük ücret, ilgili hazırlık rehberi ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Şehir merkezi dışındaki bir fabrikaya hizmet sorabilir miyim?**  
Evet. İlçe veya bölge ile mümkünse fabrikanın konumunu paylaşın. Uygunluk ve ulaşım ayrıca değerlendirilir.

**市区外的工厂可以咨询吗？**  
可以。请提供区域及工厂实际位置，档期与交通安排需另行确认。

**Kurulumun bitiş günü henüz belli değilse?**  
Bilinen başlangıç tarihini ve tahmini çalışma günlerini belirtin. Kesinleşen günlere göre uygunluk yeniden teyit edilir.

**安装结束日期尚未确定怎么办？**  
请说明已知的开始日期及预计工作日数。日期明确后需再次确认档期。

#### Ekran 5 — CTA

**TR:** “Ankara için uygunluk sor”  
**ZH:** “咨询安卡拉口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-ankara -->
<a id="v12-page-ankara"></a>
### v1.2 sayfa eki — Ankara yerel soru-cevap

**TR hedef:** `/cince-tercuman-ankara/`  
**ZH hedef:** `/zh/ankara-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q074"></a>
#### Q074 — Ankara’da üretim hattı kurulumu için Çince tercüman nereden bulunur?

**Türkçe cevap — site metni**
Ankara’daki üretim hattı kurulumu için tesis konumu, hattın ne ürettiği, Çinli teknik ekibin programı ve tarihleriyle bize ulaşabilirsiniz. Hat üzerindeki başlıca sistemleri kısaca belirtmeniz, tercümanın hazırlık ihtiyacını değerlendirmemize yardımcı olur. Merkez dışı tesislerdeki ulaşımı ve günlük çalışma saatlerini tekliften önce ayrıca netleştirelim.

**简体中文 — 问题**
安卡拉生产线安装如何咨询中文口译？

**简体中文 — 回答**
请提供安卡拉工厂位置、生产线用途、中国技术团队安排及日期。简要说明主要系统，有助于评估译员准备需求。市区外工厂的交通与每日时段，应在报价前单独明确。

**Bileşen kimliği:** `Q074` · **Canlı HTML ankrajı:** `faq-074`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-ankara -->

### 17.3 Kocaeli / 科贾埃利

**TR URL:** `/cince-tercuman-kocaeli/`  
**ZH URL:** `/zh/kocaeli-interpreter/`  
**TR title:** Kocaeli Çince Tercüman | Makine Kurulumunda Dil Desteği  
**ZH title:** 科贾埃利设备安装口译｜中土现场服务

**TR meta description:** Kocaeli’de Çinli teknik ekiple makine kurulumu ve devreye alma görüşmeleri için günlük Çince–Türkçe tercümanlık uygunluğu sorun. Tesisin ilçesi ve gerçek konumuyla başlayalım.  
**ZH meta description:** 可咨询科贾埃利设备安装与调试沟通中的中土口译档期。请提供工厂所在区域与实际位置，按日评估安排。

#### Ekran 1 — Hero

**TR H1:** Kocaeli Çince Tercüman — Makine Kurulumunda Dil Desteği  
Kocaeli’de Çinli teknik ekiple makine kurulumu ve devreye alma görüşmeleri için günlük Çince–Türkçe tercümanlık uygunluğu sorun. Tesisin ilçesi ve gerçek konumuyla başlayalım.

**ZH H1:** 科贾埃利设备安装口译：中土现场服务  
可咨询科贾埃利设备安装与调试沟通中的中土口译档期。请提供工厂所在区域与实际位置，按日评估安排。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Kocaeli’de bölgeye göre çalışma planı  
Bu sayfa Kocaeli genelindeki saha taleplerini toplar. Tek bir şehir adının altında farklı çalışma noktaları bulunabileceği için tesis konumu, buluşma yeri ve günlük program birlikte değerlendirilir. Özellikle Gebze’deki bir çalışma için Gebze sayfasındaki saha bilgi listesini de kullanabilirsiniz.

**ZH H2:** 根据科贾埃利的实际区域确认安排  
本页用于科贾埃利各区域的现场需求。同一城市名称下可能有不同工作地点，因此需结合工厂位置、集合点及每日行程确认。盖布泽的具体工作也可查看盖布泽页面。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Makine kurulumu, günlük ücret, ilgili hazırlık rehberi ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Kocaeli ve Gebze için ayrı ekip garantisi var mı?**  
Hayır. Sayfalar farklı konumlarda talep oluşturmayı kolaylaştırır. Tercüman görevlendirmesi tarih ve çalışma noktasına göre teyit edilir.

**科贾埃利与盖布泽页面代表各有固定团队吗？**  
不代表。页面用于说明不同地点的需求，译员安排仍需根据日期和现场位置确认。

**Aynı gün iki farklı tesiste çalışma olabilir mi?**  
Her iki tesisin konumunu ve saatlerini paylaşın. Günlük çalışma ile ulaşım uygunluğu birlikte değerlendirilir.

**同一天可以在两个工厂工作吗？**  
请分别提供两个地点和时段，再评估每日工作及交通是否适合。

#### Ekran 5 — CTA

**TR:** “Kocaeli için uygunluk sor”  
**ZH:** “咨询科贾埃利口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-kocaeli -->
<a id="v12-page-kocaeli"></a>
### v1.2 sayfa eki — Kocaeli yerel soru-cevap

**TR hedef:** `/cince-tercuman-kocaeli/`  
**ZH hedef:** `/zh/kocaeli-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q071"></a>
#### Q071 — Kocaeli’nde Çinli mühendisler için tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Kocaeli’nde Çinli mühendislerin makine kurulumu ve buna bağlı teknik görüşmeleri için Çince–Türkçe tercümanlık talep edebilirsiniz. İlçe, tesis veya sanayi bölgesi konumunu; ekipman konusunu ve günlük saatleri belirtin. Teknik ekibin konakladığı yer ile çalışma noktası farklıysa bu bilgileri ayrı paylaşmanız ulaşım planlamasını kolaylaştırır.

**简体中文 — 问题**
科贾埃利如何为中国工程师安排口译？

**简体中文 — 回答**
可为科贾埃利的设备安装及相关技术会面申请中土口译。请说明区县、工厂或工业区位置、设备主题及每日时段。如果技术团队住宿地与工作地点不同，请分别提供，便于评估交通安排。

**Bileşen kimliği:** `Q071` · **Canlı HTML ankrajı:** `faq-071`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-kocaeli -->

### 17.4 Gebze / 盖布泽

**TR URL:** `/cince-tercuman-gebze/`  
**ZH URL:** `/zh/gebze-interpreter/`  
**TR title:** Gebze Çince Tercüman | Kurulum Sahasında Sözlü Destek  
**ZH title:** 盖布泽设备安装口译｜现场行程咨询

**TR meta description:** Gebze’deki tesisinizde Çinli teknik ekiple yapılacak kurulum için Çince–Türkçe sözlü tercümanlık talebinizi iletin. Makine, çalışma noktası ve tarih bilgisini birlikte paylaşın.  
**ZH meta description:** 可咨询盖布泽工厂与中国技术团队之间的安装现场口译。请同时提供设备、工作地点及日期。

#### Ekran 1 — Hero

**TR H1:** Gebze Çince Tercüman — Kurulum Sahasında Sözlü Destek  
Gebze’deki tesisinizde Çinli teknik ekiple yapılacak kurulum için Çince–Türkçe sözlü tercümanlık talebinizi iletin. Makine, çalışma noktası ve tarih bilgisini birlikte paylaşın.

**ZH H1:** 盖布泽设备安装口译：现场行程咨询  
可咨询盖布泽工厂与中国技术团队之间的安装现场口译。请同时提供设备、工作地点及日期。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Kurulum günü için saha bilgisini tamamlayın  
Tesise hangi girişten ulaşılacağını, buluşulacak kişiyi ve tercümanın katılacağı teknik aşamaları çalışma öncesinde netleştirin. Gerekli saha giriş ve iş güvenliği bilgilendirmeleri tesis yetkililerince açıklanmalıdır. Bu sayfa, Kocaeli genelinden farklı olarak belirli bir Gebze çalışma gününün hazırlanmasına odaklanır.

**ZH H2:** 提前准备安装当天的现场信息  
工作前请明确工厂入口、现场联系人及需要口译的技术环节。必要的入场与安全说明应由工厂负责人提供。与科贾埃利地区总页不同，本页侧重盖布泽具体工作日的现场准备。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Makine kurulumu, günlük ücret, ilgili hazırlık rehberi ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Tesisin giriş bilgilerini ne zaman paylaşmalıyım?**  
Çalışma planı teyit edilirken giriş noktası ve saha irtibatını belirtin. İlk teklif için şehir, tarih ve kısa ihtiyaç bilgisi yeterli bir başlangıçtır.

**什么时候提供入场信息？**  
确认工作计划时，请提供入口与现场联系人。首次咨询可先提供城市、日期和简要需求。

**Kurulumla birlikte operatör açıklamaları da var.**  
Kurulum programına bağlı bu açıklamaları talebinizde belirtin. Günlük kapsam ve çalışma saatleri buna göre görüşülür.

**安装中还包含操作人员说明环节。**  
请在咨询中注明与安装行程相关的说明环节，以便确认每日范围和工作时间。

#### Ekran 5 — CTA

**TR:** “Gebze için uygunluk sor”  
**ZH:** “咨询盖布泽口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-gebze -->
<a id="v12-page-gebze"></a>
### v1.2 sayfa eki — Gebze yerel soru-cevap

**TR hedef:** `/cince-tercuman-gebze/`  
**ZH hedef:** `/zh/gebze-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q070"></a>
#### Q070 — Gebze’de fabrikaya gelebilecek Çince teknik tercüman var mı?

**Türkçe cevap — site metni**
Gebze’deki fabrikanız için talep oluşturabilirsiniz. Tesisin açık konumunu, varsa organize sanayi bölgesi ve giriş bilgilerini, makine türünü ve tarihleri paylaşın. Talep, yakındaki hizmet ağımız ve tercüman uygunluğu üzerinden değerlendirilir; günlük hizmet bedeli ile şehir içi veya şehir dışı ulaşım giderleri ayrı teyit edilir.

**简体中文 — 问题**
盖布泽的工厂可以咨询中文技术口译上门吗？

**简体中文 — 回答**
可以提交盖布泽工厂需求。请提供准确地点、所在工业区及入场信息（如适用）、设备类型和日期。我们根据邻近服务网络及译员档期评估，并分别确认日费与市内或城际交通支出。

**Bileşen kimliği:** `Q070` · **Canlı HTML ankrajı:** `faq-070`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-gebze -->

### 17.5 Guangzhou / 广州

**TR URL:** `/cince-tercuman-guangzhou/`  
**ZH URL:** `/zh/guangzhou-interpreter/`  
**TR title:** Guangzhou Türkçe–Çince Tercüman | Fuar ve Fabrika  
**ZH title:** 广州中土口译｜展会与工厂参访

**TR meta description:** Guangzhou’daki planlanmış görüşmeleriniz, fuar ve fabrika ziyaretleriniz için Çince–Türkçe sözlü tercümanlık. Katılım günlerinizi ve çalışma noktalarını paylaşın.  
**ZH meta description:** 为广州的既定会面、展会交流和工厂参访提供中土现场口译。请说明参会日期及实际工作地点。

#### Ekran 1 — Hero

**TR H1:** Guangzhou Türkçe–Çince Tercüman — Fuar ve Fabrika  
Guangzhou’daki planlanmış görüşmeleriniz, fuar ve fabrika ziyaretleriniz için Çince–Türkçe sözlü tercümanlık. Katılım günlerinizi ve çalışma noktalarını paylaşın.

**ZH H1:** 广州中土口译：展会与工厂参访  
为广州的既定会面、展会交流和工厂参访提供中土现场口译。请说明参会日期及实际工作地点。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Fuar ve fabrika günlerini birbirinden ayırın  
Guangzhou programınızda fuar ve fabrika ziyareti birlikte yer alıyorsa her günün yerini ayrı yazın. Kanton Fuarı için katılım günleri ve ürün grupları; fabrika ziyareti için tesis konumu ve görüşme gündemi gerekir. Günlük ulaşım ile şehirler arası geçişler ayrıca değerlendirilir.

**ZH H2:** 请分别说明展会日与工厂参访日  
如果广州行程同时包括展会和工厂，请逐日列出地点。广交会行程需提供日期和产品类别；工厂参访需提供实际位置与议题。每日交通及跨城市转场另行评估。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Çin’de tercüman, fabrika ziyareti, fuar tercümanlığı, günlük ücret ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Kanton Fuarı için hangi bilgileri göndereyim?**  
Katılacağınız günleri, biliyorsanız fazı, ürün grubunuzu ve planladığınız görüşmeleri paylaşın.

**广交会口译咨询需要哪些信息？**  
请提供参会日期、已确定的展期、产品类别及计划会面的安排。

**Guangzhou dışında bir fabrikaya geçeceğim.**  
Diğer şehrin adını ve fabrikanın gerçek konumunu belirtin. Aynı tercümanın devam edip edemeyeceği ve ulaşım program bazında teyit edilir.

**还需要前往广州以外的工厂。**  
请提供另一城市及工厂实际位置。是否由同一译员继续陪同及交通安排，需按行程确认。

#### Ekran 5 — CTA

**TR:** “Guangzhou için uygunluk sor”  
**ZH:** “咨询广州口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-guangzhou -->
<a id="v12-page-guangzhou"></a>
### v1.2 sayfa eki — Guangzhou yerel soru-cevap

**TR hedef:** `/cince-tercuman-guangzhou/`  
**ZH hedef:** `/zh/guangzhou-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q063"></a>
#### Q063 — Guangzhou’da Türkçe bilen tercüman nereden bulunur?

**Türkçe cevap — site metni**
Guangzhou’da fuar, fabrika ziyareti veya önceden planlanmış görüşmeleriniz için Türkçe–Çince tercümanlık talebinizi bize iletebilirsiniz. Fuar adı veya fabrika konumu, tarihler ve konuşulacak ürün grubu uygunluğu değerlendirmemizi kolaylaştırır. Guangzhou sayfamızdan başlayabilir, programınızı WhatsApp veya e-posta üzerinden paylaşabilirsiniz.

**简体中文 — 问题**
在广州哪里可以咨询会土耳其语的译员？

**简体中文 — 回答**
可向我们咨询广州展会、工厂参访或既定会面的中土口译。提供展会名称或工厂位置、日期和产品类别，有助于评估安排。您可通过广州服务页面了解范围，再以 WhatsApp 或邮件发送行程。

**Bileşen kimliği:** `Q063` · **Canlı HTML ankrajı:** `faq-063`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-guangzhou -->

### 17.6 Shanghai (Şanghay) / 上海

**TR URL:** `/cince-tercuman-shanghai-sanghay/`  
**ZH URL:** `/zh/shanghai-interpreter/`  
**TR title:** Shanghai (Şanghay) Türkçe–Çince Tercüman  
**ZH title:** 上海中土口译｜会面、工厂与展会行程

**TR meta description:** Shanghai’daki görüşmeleriniz ve fuar programlarınız için Çince–Türkçe sözlü tercümanlık. Fabrika ziyareti de varsa fabrikanın gerçek şehrini ve konumunu ayrıca paylaşın.  
**ZH meta description:** 为上海的会面和展会行程提供中土现场口译。若同时安排工厂参访，请另行提供工厂所在城市和实际位置。

#### Ekran 1 — Hero

**TR H1:** Shanghai (Şanghay) Türkçe–Çince Tercüman  
Shanghai’daki görüşmeleriniz ve fuar programlarınız için Çince–Türkçe sözlü tercümanlık. Fabrika ziyareti de varsa fabrikanın gerçek şehrini ve konumunu ayrıca paylaşın.

**ZH H1:** 上海中土口译：会面、工厂与展会行程  
为上海的会面和展会行程提供中土现场口译。若同时安排工厂参访，请另行提供工厂所在城市和实际位置。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Konakladığınız şehir ile çalışma yerini ayrı yazın  
Shanghai’da konaklayıp başka bir şehirde görüşmeye gidecekseniz talebi yalnızca Shanghai olarak bırakmayın. Her durak için çalışma günü, görüşme konusu ve adresi belirtin. Böylece günlük tercümanlık ile ulaşım ihtiyaçları birbirinden ayrılarak değerlendirilir.

**ZH H2:** 请区分住宿城市与实际工作地点  
如果住在上海但需要前往其他城市会面，请不要只填写上海。请为每个地点列出日期、主题和地址，以便分别评估每日口译与交通需求。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Çin’de tercüman, fabrika ziyareti, fuar tercümanlığı, günlük ücret ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Shanghai’dan yakın bir şehre aynı gün geçebilir miyiz?**  
İki konum ve görüşme saatleri bilinmeden kesin program sözü vermiyoruz. Bilgileri paylaşınca günlük çalışma ve ulaşım uygunluğu değerlendirilir.

**可以当天从上海前往附近城市吗？**  
在明确两个地点和会面时段前，不承诺确定安排。提供信息后再评估工作与交通。

**Fuar ve toplantı farklı adreslerde olacak.**  
Fuar alanını, toplantı adresini ve gün içindeki sıralamayı talebinize ekleyin. Tercüman planı bu gündeme göre görüşülür.

**展会和会面在不同地址怎么办？**  
请提供展馆、会面地址及当天先后顺序，再确认口译安排。

#### Ekran 5 — CTA

**TR:** “Shanghai (Şanghay) için uygunluk sor”  
**ZH:** “咨询上海口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-shanghai -->
<a id="v12-page-shanghai"></a>
### v1.2 sayfa eki — Shanghai / Şanghay yerel soru-cevap

**TR hedef:** `/cince-tercuman-shanghai-sanghay/`  
**ZH hedef:** `/zh/shanghai-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q065"></a>
#### Q065 — Şanghay’da iş görüşmesine katılacak Türkçe bilen tercüman var mı?

**Türkçe cevap — site metni**
Shanghai’de önceden planladığınız firma veya fabrika görüşmesine katılacak Türkçe–Çince tercümanlık için bize ulaşabilirsiniz. Toplantı konusunu, çalışma noktasını ve tarihleri paylaşın; konuya ve programa uygunluğu birlikte değerlendirelim. Görüşmeye eşlik etmek, sizin adınıza ticari karar alma veya danışmanlık verme anlamına gelmez.

**简体中文 — 问题**
上海商务会面可以安排会土耳其语的译员吗？

**简体中文 — 回答**
可为您在上海已安排的企业或工厂会面咨询中土口译。请说明议题、实际地点及日期，以便评估主题适配度和档期。译员参加会面不代表代您作商业决定或提供商业咨询。

**Bileşen kimliği:** `Q065` · **Canlı HTML ankrajı:** `faq-065`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-shanghai -->

### 17.7 Beijing (Pekin) / 北京

**TR URL:** `/cince-tercuman-beijing-pekin/`  
**ZH URL:** `/zh/beijing-interpreter/`  
**TR title:** Beijing (Pekin) Türkçe–Çince Tercüman  
**ZH title:** 北京中土现场口译｜会面与参访安排

**TR meta description:** Beijing’de planlanmış görüşmeleriniz, fabrika veya fuar programlarınız için Çince–Türkçe sözlü tercümanlık uygunluğu sorun. Tarihleri, adresi ve görüşme konusunu paylaşın.  
**ZH meta description:** 可咨询北京既定会面、工厂或展会行程的中土口译档期。请提供日期、实际地址与沟通内容。

#### Ekran 1 — Hero

**TR H1:** Beijing (Pekin) Türkçe–Çince Tercüman  
Beijing’de planlanmış görüşmeleriniz, fabrika veya fuar programlarınız için Çince–Türkçe sözlü tercümanlık uygunluğu sorun. Tarihleri, adresi ve görüşme konusunu paylaşın.

**ZH H1:** 北京中土现场口译：会面与参访安排  
可咨询北京既定会面、工厂或展会行程的中土口译档期。请提供日期、实际地址与沟通内容。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Gündem ve katılımcı rollerini önceden netleştirin  
Programınızda kimin hangi konuda konuşacağını ve hangi açıklamalarda tercümana ihtiyaç duyacağını belirtin. Aynı gün farklı bir sahaya geçilecekse yeni adresi ekleyin. Teknik içerik varsa genel toplantı bilgisiyle yetinmeden konu başlıklarını da yazın.

**ZH H2:** 提前明确议题与参与人员角色  
请说明参与人员各自的沟通主题，以及哪些环节需要口译。同一天如需转往另一现场，请补充地址；涉及技术内容时，也请列出具体议题。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Çin’de tercüman, fabrika ziyareti, fuar tercümanlığı, günlük ücret ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Toplantının süresi henüz kesin değil.**  
Bilinen başlangıç saatini ve yaklaşık gündemi paylaşın. Günlük çalışma aralığı teklif sırasında karşılıklı netleştirilir.

**会面时长还没有确定。**  
请提供已知的开始时间与大致议程，每日工作时段在报价时共同确认。

**Beijing dışındaki bir çalışma noktası için sorabilir miyim?**  
Evet. Şehrin adını ve gerçek konumu belirtin; tercüman ve ulaşım uygunluğuna göre değerlendirelim.

**北京以外的现场可以咨询吗？**  
可以。请提供城市和实际位置，再结合译员档期及交通评估。

#### Ekran 5 — CTA

**TR:** “Beijing (Pekin) için uygunluk sor”  
**ZH:** “咨询北京口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-beijing -->
<a id="v12-page-beijing"></a>
### v1.2 sayfa eki — Beijing / Pekin yerel soru-cevap

**TR hedef:** `/cince-tercuman-beijing-pekin/`  
**ZH hedef:** `/zh/beijing-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q066"></a>
#### Q066 — Pekin’de günlük Türkçe Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Beijing’de günlük Türkçe–Çince tercümanlık için görüşme veya ziyaret programınızı paylaşabilirsiniz. Günlük çalışma noktalarını, saatleri ve konuşulacak konuyu belirttiğinizde uygunluk değerlendirmesi yapılabilir. Şehir içindeki ulaşım ile varsa merkez dışı çalışma noktalarını günlük tercümanlık ücretinden ayrı ele alıyoruz.

**简体中文 — 问题**
北京如何咨询按天安排的中土口译？

**简体中文 — 回答**
可提供您在北京的会面或参访行程，咨询按天安排的中土口译。请说明每日地点、时段及沟通主题，以便评估档期。市内交通及市区外工作地点涉及的出行费用，与口译日费分开确认。

**Bileşen kimliği:** `Q066` · **Canlı HTML ankrajı:** `faq-066`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-beijing -->

### 17.8 Shenzhen / 深圳

**TR URL:** `/cince-tercuman-shenzhen/`  
**ZH URL:** `/zh/shenzhen-interpreter/`  
**TR title:** Shenzhen Türkçe–Çince Tercüman Talebi  
**ZH title:** 深圳中土口译需求｜按行程确认安排

**TR meta description:** Shenzhen’deki planlanmış görüşme, fabrika veya fuar ziyaretiniz için Çince–Türkçe tercümanlık talebinizi paylaşın. Uygunluk, tarih ve çalışma konumuna göre değerlendirilir.  
**ZH meta description:** 可提交深圳会面、工厂或展会行程的中土口译需求。能否安排需结合日期与实际工作地点评估。

#### Ekran 1 — Hero

**TR H1:** Shenzhen Türkçe–Çince Tercüman Talebi  
Shenzhen’deki planlanmış görüşme, fabrika veya fuar ziyaretiniz için Çince–Türkçe tercümanlık talebinizi paylaşın. Uygunluk, tarih ve çalışma konumuna göre değerlendirilir.

**ZH H1:** 深圳中土口译需求：按行程确认安排  
可提交深圳会面、工厂或展会行程的中土口译需求。能否安排需结合日期与实际工作地点评估。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Önce Shenzhen programının uygunluğunu teyit edelim  
Bu sayfa Shenzhen taleplerinin değerlendirilmesi içindir; şehirde her tarihte yerleşik veya hazır tercüman bulunduğu anlamına gelmez. Guangzhou ile birlikte bir programınız varsa iki şehirdeki çalışma günlerini ve geçiş planını ayrı yazın.

**ZH H2:** 先确认深圳行程能否安排  
本页用于评估深圳需求，并不代表当地每个日期都有驻地译员。若与广州行程相连，请分别列出两座城市的工作日期与转场计划。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Çin’de tercüman, fabrika ziyareti, fuar tercümanlığı, günlük ücret ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Shenzhen için tercüman kesin olarak bulunur mu?**  
Tarih ve çalışma konusu görülmeden kesin uygunluk sözü vermiyoruz. Talep, ağdaki uygunluk ve ulaşım olanaklarıyla birlikte değerlendirilir.

**深圳一定能安排译员吗？**  
在了解日期及内容前，不承诺确定档期。需求需结合译员网络与交通情况评估。

**Guangzhou’daki programdan sonra Shenzhen’e geçeceğim.**  
Geçiş tarihini ve Shenzhen’deki çalışma noktasını yazın. Her günün hizmeti ve ulaşımı ayrı teyit edilir.

**广州行程之后还要前往深圳。**  
请说明转场日期及深圳的工作地点，各日服务与交通需分别确认。

#### Ekran 5 — CTA

**TR:** “Shenzhen için uygunluk sor”  
**ZH:** “咨询深圳口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.



<!-- V12_INSERT_BEGIN:qa-shenzhen -->
<a id="v12-page-shenzhen"></a>
### v1.2 sayfa eki — Shenzhen yerel soru-cevap

**TR hedef:** `/cince-tercuman-shenzhen/`  
**ZH hedef:** `/zh/shenzhen-interpreter/`
**Ekrana yerleştirme:** Mevcut şehir sayfasındaki yerel planlama açıklamasından sonra; aynı niyetli eski sorunun güncel sürümü olarak.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Şehrinizdeki çalışma noktası
**ZH başlık:** 所在城市的实际工作地点

<a id="doc-q064"></a>
#### Q064 — Shenzhen’de fabrika ziyareti için Türkçe Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Shenzhen’de fabrika ziyareti için talebinizi değerlendirebiliriz; şehirde her tarihte hazır tercüman bulunduğunu garanti etmiyoruz. Fabrikanın adını, harita konumunu, ziyaret tarihini ve teknik konuyu paylaşın. Tercümanın hangi noktadan geleceği, ulaşım ihtiyacı ve günlük çalışma koşulları uygunlukla birlikte teyit edilir.

**简体中文 — 问题**
深圳工厂参访如何咨询中土口译？

**简体中文 — 回答**
可以提交深圳工厂参访需求，但我们不保证当地所有日期都有现成译员。请提供工厂名称、地图位置、日期及技术主题，并共同确认译员出发地、交通需要、档期及每日工作条件。

**Bileşen kimliği:** `Q064` · **Canlı HTML ankrajı:** `faq-064`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Çalışma konumunuzu ve tarihlerinizi paylaşın
**ZH CTA:** 提供实际地点与日期
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-shenzhen -->

### 17.9 Yiwu / 义乌

**TR URL:** `/cince-tercuman-yiwu/`  
**ZH URL:** `/zh/yiwu-interpreter/`  
**TR title:** Yiwu Türkçe–Çince Tercüman Talebi  
**ZH title:** 义乌中土口译需求｜会面行程咨询

**TR meta description:** Yiwu’da önceden belirlediğiniz görüşmeler veya saha ziyaretleri için Çince–Türkçe tercümanlık talebinizi iletin. Program, tercüman ve ulaşım uygunluğuna göre değerlendirilir.  
**ZH meta description:** 可提交义乌既定会面或现场参访的中土口译需求。具体安排需结合行程、译员档期与交通评估。

#### Ekran 1 — Hero

**TR H1:** Yiwu Türkçe–Çince Tercüman Talebi  
Yiwu’da önceden belirlediğiniz görüşmeler veya saha ziyaretleri için Çince–Türkçe tercümanlık talebinizi iletin. Program, tercüman ve ulaşım uygunluğuna göre değerlendirilir.

**ZH H1:** 义乌中土口译需求：会面行程咨询  
可提交义乌既定会面或现场参访的中土口译需求。具体安排需结合行程、译员档期与交通评估。

#### Ekran 2 — Yerel program açıklaması

**TR H2:** Belirlenmiş görüşme noktalarıyla talep oluşturun  
Görüşeceğiniz firma veya fabrikanın adresini, tarihini ve gündemini paylaşın. Bu sayfa sürekli yerleşik Yiwu ekibi vaadi içermez. Başka bir şehirden geçiş varsa çalışma gününü ve seyahat düzenini ayrı belirtin.

**ZH H2:** 请提供已确定的会面地点  
请提供已安排的企业或工厂地址、日期及议题。本页不承诺义乌常驻团队。如从其他城市前往，请分别注明工作日期与转场安排。

#### Ekran 3 — Hizmet ve ücret

İlgili hizmet bağlantıları: Çin’de tercüman, fabrika ziyareti, fuar tercümanlığı, günlük ücret ve hizmet bölgeleri. PRICE-NOTE tam metni eklenir. İki dilde de aynı ücret modeli kullanılır.

#### Ekran 4 — SSS

**Yiwu’da sürekli hazır tercüman var mı?**  
Bu yönde bir garanti vermiyoruz. Belirli tarih ve çalışma noktası için uygunluk sorabilirsiniz.

**义乌始终有译员待命吗？**  
我们不作此承诺。请根据具体日期及地点咨询是否可以安排。

**Birden fazla görüşme adresi paylaşabilir miyim?**  
Evet. Her adresi ve planlanan saati belirtin; günlük çalışma düzenini bu bilgilerle değerlendirelim.

**可以提供多个会面地址吗？**  
可以。请列出每个地址及计划时间，再据此评估每日工作安排。

#### Ekran 5 — CTA

**TR:** “Yiwu için uygunluk sor”  
**ZH:** “咨询义乌口译档期”

İletişim formunda şehir önceden seçilir; doğrudan WhatsApp alternatifi de vardır. **Şema:** WebPage + BreadcrumbList; hizmet sağlayıcısı aynı Organization’dır. Yerel ofis şeması oluşturulmaz.


## 18. Hazırlık rehberleri — koleksiyon ve üç tam içerik

### 18.1 Koleksiyon ekranı

**URL:** `/blog/` / `/zh/guides/`  
**TR title:** “Çince Tercümanlık İçin Hazırlık Rehberleri”  
**ZH title:** “中土口译准备指南｜咨询与现场行程”  
**TR meta:** “Tercüman talebinde paylaşılacak bilgiler, makine kurulumu ve Çin’de fabrika/fuar programları için kısa hazırlık rehberleri.”  
**ZH meta:** “了解口译咨询需要的信息，以及设备安装、中国工厂参访和展会行程的准备要点。”

**TR H1:** “Tercümanlık talebinizi ve saha programınızı hazırlayın”  
“Kısa rehberlerimiz, ilk mesajda hangi bilgileri paylaşmanız ve çalışma öncesinde hangi konuları netleştirmeniz gerektiğini anlatır.”

**ZH H1:** “为口译咨询和现场行程做好准备”  
“通过这些简短指南，了解首次咨询应提供什么信息，以及服务前需要确认哪些安排。”

Üç kart gösterilir. Kart başlığı aşağıdaki gerçek rehber başlığıdır; açıklaması ilk özet paragrafıdır. Kartlarda hayali okuma süresi, yazılmamış güncelleme tarihi veya başka birinin fotoğrafı kullanılmaz. Mevcut blog URL’leri otomatik silinmez; bölüm 21’deki envanter kararı uygulanır.


### 18.2 Rehber — Çince tercüman talebi için hangi bilgileri paylaşmalısınız?

**TR URL:** `/rehber/tercuman-talebi-icin-gerekli-bilgiler/`  
**ZH URL:** `/zh/guides/information-for-interpreter-request/`  
**TR title:** Çince tercüman talebi için hangi bilgileri paylaşmalısınız?  
**ZH title:** 咨询中土口译时，需要提供哪些信息？  
**TR meta description:** Çince tercüman talebinde hizmet, şehir, tarih ve görüşme konusunu nasıl paylaşacağınızı öğrenin. Günlük ücret ve masrafları önceden netleştirin.  
**ZH meta description:** 了解中土口译咨询需要的服务类型、城市、日期和沟通内容，便于分别确认每日费用及相关支出。

**TR H1:** Çince tercüman talebi için hangi bilgileri paylaşmalısınız?

İlk mesajda uzun bir dosya hazırlamanız gerekmez. Hizmet türü, şehir, çalışma tarihleri ve kısa görüşme konusu, talebin değerlendirilebilmesi için iyi bir başlangıçtır.

#### 1. Yapılacak işi tek cümleyle anlatın
“Çinli teknik ekip fabrikamızda makine kuracak” veya “Guangzhou’da iki gün fuara katılacağım” gibi açık bir ifade kullanın. Görüşmenin sözlü tercümanlık gerektiren kısmını belirtin.

#### 2. Şehir ile gerçek çalışma noktasını ayırın
Otelinizin veya şirket merkezinizin bulunduğu şehir tek başına yeterli olmayabilir. Fabrikanın ya da fuarın konumunu belirtin. Henüz kesin adres yoksa bilinen ilçe veya bölgeyi yazın.

#### 3. Tarihleri ve belirsizlikleri açıkça yazın
Başlangıç gününüz belli ama bitiş günü belirsizse bunu söyleyin. Farklı günlerde farklı şehirler varsa her günü ayrı satırda belirtin. Kesinleşmeyen bilgiyi kesinmiş gibi yazmayın.

#### 4. Konuşulacak konuya kısa bir çerçeve verin
Makine türünü, ziyaret edilecek üretim alanını veya fuarda görüşülecek ürün grubunu ekleyin. İlk talepte gizli evrak veya kişisel belge göndermeniz gerekmez.

#### 5. Günlük bedel ile giderleri ayrı sorun
Hizmet günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır. Teklifte bu kalemlerin ayrı açıklanmasını isteyin.

#### Kullanabileceğiniz kısa mesaj
“Merhaba. [Hizmet] için [şehir/çalışma noktası] bölgesinde [tarihler] arasında Çince–Türkçe tercümana ihtiyacım var. Görüşme konusu: [kısa açıklama]. Günlük uygunluk ve masrafları ayrı gösteren teklif paylaşabilir misiniz?”

**Tarihim belli değilse de yazabilir miyim?** Evet. Yaklaşık dönemi veya “tarih henüz belli değil” bilgisini paylaşabilirsiniz; kesin uygunluk daha sonra teyit edilir.

**Sonraki adım:** İletişim sayfasında mesajınızı hazırlayın veya doğrudan WhatsApp’tan yazın.

**ZH H1:** 咨询中土口译时，需要提供哪些信息？

首次咨询不需要准备一份很长的文件。服务类型、城市、日期和简要议题，是评估口译需求的基本信息。

#### 1. 用一句话说明工作内容
例如：“中国技术团队将在土耳其工厂安装设备”，或“将在广州参加两天展会”。请明确需要口头语言支持的环节。

#### 2. 区分城市与实际工作地点
酒店或公司总部所在城市不一定就是工作地点。请提供工厂或展馆位置；具体地址尚未确定时，可先说明已知区域。

#### 3. 明确日期与尚未确定的信息
如果开始日期已知、结束日期待定，请直接注明。不同日期涉及不同城市时，请逐日列出。不要把暂定信息写成已确认安排。

#### 4. 简要说明沟通主题
可以提供设备类型、生产环节或展会产品类别。首次咨询无需提交保密文件或个人证件。

#### 5. 将日费与相关支出分开确认
口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。请在沟通报价时分别确认这些项目。

#### 可参考的咨询消息
“您好。我需要在［日期］于［城市／地点］安排［服务类型］的中土口译。沟通内容为［简要说明］。请问是否有档期？能否分别说明日费与相关支出？”

**日期尚未确定，也可以咨询吗？** 可以。请说明大致时间或日期待定，最终档期再行确认。

**下一步：** 前往联系页面准备咨询内容，或直接通过 WhatsApp 联系。

**Tasarım:** 760 px okuma genişliği, üstte kısa özet, içerik içi alt başlıklar, sonda ilgili hizmet ve iletişim CTA’sı. Yazar kişisi uydurulmaz; kurumsal editör adı kullanılacaksa gerçek sorumlu atanır. Article / BlogPosting şeması yalnızca görünür gerçek yazar ve yayın bilgileriyle üretilir; bilgi yoksa WebPage + BreadcrumbList yeterlidir.



<!-- V12_INSERT_BEGIN:qa-request_guide -->
<a id="v12-page-request_guide"></a>
### v1.2 sayfa eki — Tercüman talebi hazırlık rehberi

**TR hedef:** `/rehber/tercuman-talebi-icin-gerekli-bilgiler/`  
**ZH hedef:** `/zh/guides/information-for-interpreter-request/`
**Ekrana yerleştirme:** Mevcut rehberde teknik konu özetinden sonra. Bir hizmet kartı veya yazılı çeviri teklifi oluşturulmaz.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Hazırlık bilgileri ve belge paylaşımı
**ZH başlık:** 准备资料与文件分享

<a id="doc-q018"></a>
#### Q018 — Tercümanın hazırlık yapabilmesi için önceden hangi bilgileri ve teknik dokümanları göndermeliyim?

**Türkçe cevap — site metni**
Kısa iş özeti, gündem, makine marka ve modeli, ilgili teknik başlıklar, ürün grubu ve sık kullanılacak terimler hazırlık için yararlıdır. Yalnızca paylaşma yetkiniz olan ve iş için gerekli bölümleri gönderin; hassas dosyaları ilk form mesajına eklemeyin. Bu belgeler sözlü tercümanlık hazırlığı içindir; ayrıca yazılı belge çevirisi teslimi anlamına gelmez.

**简体中文 — 问题**
为便于译员准备，应提前提供哪些资料？

**简体中文 — 回答**
可提供工作概述、议程、设备品牌及型号、技术主题、产品类别和常用术语。请只分享有权提供且与本次工作有关的部分，不要在首次表单消息中提交敏感文件。这些资料用于口译准备，不代表另行交付书面翻译。

**Bileşen kimliği:** `Q018` · **Canlı HTML ankrajı:** `faq-018`

#### Bu bölümün iletişim kapanışı
**TR CTA:** İhtiyaç özetinizi paylaşın
**ZH CTA:** 提供简要需求
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-request_guide -->

### 18.3 Rehber — Makine kurulumu öncesinde tercüman için nasıl hazırlık yapılır?

**TR URL:** `/rehber/makine-kurulumu-tercuman-hazirligi/`  
**ZH URL:** `/zh/guides/prepare-machine-installation-interpreting/`  
**TR title:** Makine kurulumu öncesinde tercüman için nasıl hazırlık yapılır?  
**ZH title:** 设备安装前，如何准备现场口译信息？  
**TR meta description:** Makine kurulumu öncesinde cihaz türü, saha konumu, çalışma günleri ve teknik iletişim başlıklarını netleştirmek için tercüman hazırlık rehberi.  
**ZH meta description:** 设备安装前，如何说明设备类型、现场地点、工作日期与技术沟通环节，为中土现场口译做好准备。

**TR H1:** Makine kurulumu öncesinde tercüman için nasıl hazırlık yapılır?

Kurulum öncesi hazırlığın amacı, tercümanın hangi konuşmalara katılacağını açıkça belirlemektir. Teknik uygulama ve güvenlik kararları yetkili ekiplerin sorumluluğunda kalır.

#### Makineyi ve konuşulacak işi tarif edin
Makinenin veya hattın türünü, kurulumun hangi aşamasında olunduğunu ve tercümanın hangi görüşmelere katılacağını yazın. “Makine tercümanı gerekiyor” demek yerine kısa bir teknik çerçeve verin.

#### Çalışma noktasını ve buluşmayı ayırın
Fabrikanın gerçek konumu, giriş noktası ve saha irtibatı hizmet öncesinde netleşmelidir. İlk teklif için şehir ve çalışma bölgesiyle başlayabilir, ayrıntıları program teyidinde tamamlayabilirsiniz.

#### Günlük programı paylaşın
Teknik ekibin tahmini çalışma başlangıcı ve bitişini belirtin. Kurulum ve operatör açıklamaları farklı günlerde olacaksa bunu ayrıca yazın. Tercümanlık günlük modelde değerlendirilir; sabit saat veya ek süre koşulu varsaymayın.

#### Terminoloji hazırlığını konuşun
Konu başlıkları ve tekrar eden temel terimler, ihtiyacın değerlendirilmesini kolaylaştırabilir. Hangi bilginin kimle paylaşılacağı program netleşirken görüşülmelidir. İlk formda gizli teknik dosya yüklemeniz gerekmez.

#### Ücret ve masrafları ayrı teyit edin
Günlük tercümanlık bedelini; şehir içi/şehir dışı ulaşım, konaklama ve yeme-içmeden ayrı değerlendirin. Çalışma noktası veya saatler değişirse güncel düzeni tekrar konuşun.

**Tercüman teknik kararı verir mi?** Hayır. Tercüman sözlü iletişime destek olur. Teknik değerlendirme, uygulama ve güvenlik kararları yetkili kişilere aittir.

**Sonraki adım:** Makine kurulumu tercümanlığı sayfasından şehir ve tarihinizle uygunluk sorun.

**ZH H1:** 设备安装前，如何准备现场口译信息？

安装前准备口译信息，是为了明确译员将参加哪些沟通环节。技术操作与安全决定仍由有权限的团队负责。

#### 说明设备及沟通内容
请提供设备或产线类型、当前安装阶段以及需要译员参加的讨论。比起只写“需要设备翻译”，简要技术背景更有助于评估需求。

#### 区分工作地点与集合安排
服务前应明确工厂实际位置、入口和现场联系人。首次报价咨询可先提供城市与工作区域，再在确认行程时补充细节。

#### 提供每日工作计划
请说明预计的开始和结束时间。如安装与操作人员说明安排在不同日期，请分别注明。口译按日评估，不应预设统一时长或额外时段规则。

#### 沟通术语准备
议题和经常使用的基本术语，有助于确认需求。哪些信息将提供给谁，应在落实安排时讨论。首次表单无需上传保密技术文件。

#### 分别确认费用
请将每日口译费与市内交通、城际交通、住宿及餐饮支出分开确认。地点或时段变更时，再次沟通新的安排。

**译员负责技术决定吗？** 不负责。译员协助口头沟通，技术判断、操作与安全决定属于有权限的相关人员。

**下一步：** 前往设备安装口译页面，按城市与日期咨询档期。

**Tasarım:** 760 px okuma genişliği, üstte kısa özet, içerik içi alt başlıklar, sonda ilgili hizmet ve iletişim CTA’sı. Yazar kişisi uydurulmaz; kurumsal editör adı kullanılacaksa gerçek sorumlu atanır. Article / BlogPosting şeması yalnızca görünür gerçek yazar ve yayın bilgileriyle üretilir; bilgi yoksa WebPage + BreadcrumbList yeterlidir.



<!-- V12_INSERT_BEGIN:qa-machine_guide -->
<a id="v12-page-machine_guide"></a>
### v1.2 sayfa eki — Makine kurulumu öncesi hazırlık rehberi

**TR hedef:** `/rehber/makine-kurulumu-tercuman-hazirligi/`  
**ZH hedef:** `/zh/guides/prepare-machine-installation-interpreting/`
**Ekrana yerleştirme:** Mevcut rehberin makineyi tarif etme ve terminoloji hazırlığı bölümlerine açık metin olarak entegre. Beş sektör için beş yeni URL açılmaz.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

#### Bölüm başlığı TR: Doğru tercümanlık hazırlığı
**ZH başlık:** 正确的口译准备

<a id="doc-q075"></a>
#### Q075 — Çin’den aldığım makinenin kurulumu için nasıl bir tercüman seçmeliyim?

**Türkçe cevap — site metni**
Makinenizin türünü ve kurulumda konuşulacak işlemleri anlayabilecek bir tercümanlık hazırlığını esas alın. Yalnızca dil bilgisine değil, ilgili teknik deneyime, açıklama isteme yöntemine ve günlük programla uyuma da bakın. Bize makine bilgilerinizi gönderin; uygunluk değerlendirmesinde hangi teknik başlıkların önceden hazırlanması gerektiğini netleştirelim.

**简体中文 — 问题**
从中国购买的设备安装时，应如何选择译员？

**简体中文 — 回答**
应重视针对设备类型及安装沟通内容的准备，而不只是语言水平。还需考虑相关技术经验、澄清问题的方法及每日安排。可向我们提供设备资料，以便评估适配度及需要提前准备的技术主题。

**Bileşen kimliği:** `Q075` · **Canlı HTML ankrajı:** `faq-075`

<a id="doc-q076"></a>
#### Q076 — Çinli teknik ekip İngilizce bilmiyorsa kurulum sırasında nasıl iletişim kurabilirim?

**Türkçe cevap — site metni**
Çinli teknik ekip ile fabrikanızdaki ekip arasında ortak dil yeterli değilse Türkçe–Çince sözlü tercümanlık planlayabiliriz. Teknik ekip gelmeden önce makine konusunu, sorumlu kişileri ve günlük gündemi paylaşın. Sahada kısa ve anlaşılır açıklamalarla ilerlemek, belirsiz terimleri durup teyit etmek ve teknik kararları yetkili ekibe bırakmak çalışma düzeninin parçası olmalıdır.

**简体中文 — 问题**
中国技术团队不会英语，安装期间如何沟通？

**简体中文 — 回答**
如果中国技术团队与土耳其工厂团队缺少足够的共同语言，可评估中土口译安排。团队抵达前，请提供设备主题、负责人及每日议程。现场应采用清晰、分段的说明，遇到模糊术语及时核实，并由授权技术人员作决策。

**Bileşen kimliği:** `Q076` · **Canlı HTML ankrajı:** `faq-076`

<a id="doc-q077"></a>
#### Q077 — Çince makine tercümanının teknik bilgi sahibi olması gerekir mi?

**Türkçe cevap — site metni**
Teknik konuya hazırlık ve ilgili terimleri doğru kavrama, makine kurulumundaki tercümanlık için önemlidir. Ancak teknik terimleri anlamak, tercümanın mühendis veya yetkili montaj personeli olduğu anlamına gelmez. Bizimle talebinizi paylaşırken makine türünü ve işlem adımlarını belirtin; dil desteğinin kapsamını teknik uygulama sorumluluğundan ayrı netleştirelim.

**简体中文 — 问题**
设备口译员需要技术知识吗？

**简体中文 — 回答**
理解相关术语并做好主题准备，对设备安装口译很重要。但理解技术术语不等于译员具备工程师或授权安装人员身份。请提供设备类型及沟通环节，将语言支持范围与技术实施责任明确区分。

**Bileşen kimliği:** `Q077` · **Canlı HTML ankrajı:** `faq-077`

#### Bölüm başlığı TR: Makinenize özgü talep bilgileri
**ZH başlık:** 设备特定的需求信息

<a id="doc-q078"></a>
#### Q078 — CNC makine kurulumu için Çince tercüman bulunabilir mi?

**Türkçe cevap — site metni**
CNC makine kurulumu için talebinizi değerlendirebiliriz. Makinenin türünü, marka ve modelini, kontrol sistemiyle ilgili konuşulacak konuları, tesis konumunu ve tarihleri paylaşın. İlgili deneyime sahip uygun tercüman bulunması ayrıca teyit edilir; her CNC markasında geçmiş iş deneyimi veya makinenin devreye alınması konusunda teknik yetki iddia etmiyoruz.

**简体中文 — 问题**
CNC 设备安装可以咨询中文口译吗？

**简体中文 — 回答**
可提交 CNC 设备安装需求。请提供设备类型、品牌型号、需要讨论的控制系统内容、地点及日期。是否有相关经验且有档期的译员须具体确认；我们不声称具备所有 CNC 品牌的项目经历或设备调试技术授权。

**Bileşen kimliği:** `Q078` · **Canlı HTML ankrajı:** `faq-078`

<a id="doc-q079"></a>
#### Q079 — Plastik enjeksiyon makinesi kurulumu için Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Plastik enjeksiyon makinesi için makine bilgilerini ve kurulumda konuşulacak başlıkları paylaşarak bize ulaşabilirsiniz. Kalıp, makine ayarlarının açıklanması veya operatör eğitimi gibi bölümleri talepte belirtin. Bunlar tercümanın hazırlık konularıdır; proses parametrelerini belirlemek veya üretim ayarlarını onaylamak tercümanın görevi değildir. Uygunluk, ilgili teknik deneyimle birlikte değerlendirilir.

**简体中文 — 问题**
注塑机安装如何咨询中土口译？

**简体中文 — 回答**
可提供设备资料及安装沟通主题联系我们，并说明是否涉及模具、设置讲解或操作培训。这些信息用于口译准备；确定工艺参数或批准生产设置不属于译员职责。是否适合安排需结合相关技术经验确认。

**Bileşen kimliği:** `Q079` · **Canlı HTML ankrajı:** `faq-079`

<a id="doc-q080"></a>
#### Q080 — Ambalaj ve paketleme makineleri için Çince teknik tercüman var mı?

**Türkçe cevap — site metni**
Ambalaj veya paketleme makinesi kurulumuna yönelik talebinizi, makine türü ve ürün grubu bilgisiyle değerlendirebiliriz. Tek bir makine mi, birbirine bağlı bir hat mı olduğunu; konuşulacak kontrol ve operatör eğitimi başlıklarını belirtin. Her marka veya hatta hazır uzmanlık iddiası yerine, işinize uygun tercümanı ve hazırlık gereksinimini önceden teyit edelim.

**简体中文 — 问题**
包装机械安装可以咨询中文技术口译吗？

**简体中文 — 回答**
可以结合设备类型及产品类别评估需求。请说明是单机还是联动生产线，以及涉及的控制和操作培训主题。我们不承诺熟悉所有品牌或生产线，而是事先核实具体译员及准备要求。

**Bileşen kimliği:** `Q080` · **Canlı HTML ankrajı:** `faq-080`

<a id="doc-q081"></a>
#### Q081 — Tekstil makinelerinin kurulumunda çalışabilecek Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Tekstil makinesinin türünü ve hangi kurulum veya kullanım açıklamalarının yapılacağını belirterek tercümanlık talep edebilirsiniz. Makine marka ve modeli, üretim süreci ve teknik ekibin gündemi hazırlık için önemlidir. Uygun tercüman, tarih ve çalışma koşulları birlikte teyit edilir; bütün tekstil makinelerinde doğrulanmış deneyim bulunduğunu söylemiyoruz.

**简体中文 — 问题**
纺织机械安装如何寻找适合的中文口译？

**简体中文 — 回答**
请说明纺织设备类型及涉及的安装或使用讲解内容。品牌型号、生产流程和技术团队议程有助于准备。译员、日期及工作条件需一起确认；我们不会声称已核实所有纺织设备领域的经验。

**Bileşen kimliği:** `Q081` · **Canlı HTML ankrajı:** `faq-081`

<a id="doc-q082"></a>
#### Q082 — Endüstriyel otomasyon ve robot sistemleri için Çince tercüman bulunabilir mi?

**Türkçe cevap — site metni**
Endüstriyel otomasyon veya robot sistemi için talebinizi öncelikle teknik kapsamıyla değerlendirelim. Sistem, kontrol birimleri, konuşulacak entegrasyon konuları ve saha programını paylaşın. İlgili tercüman uygunluğu ayrıca doğrulanır. Tercümanlık; programlama, güvenlik değerlendirmesi, sistemi çalıştırma veya teknik onay verme hizmeti olarak sunulmaz.

**简体中文 — 问题**
工业自动化和机器人系统可以咨询中文口译吗？

**简体中文 — 回答**
请先提供系统、控制单元、集成沟通主题及现场安排，以便评估技术范围和译员适配度。口译服务不等于编程、安全评估、系统操作或技术验收服务。

**Bileşen kimliği:** `Q082` · **Canlı HTML ankrajı:** `faq-082`

#### Bölüm başlığı TR: Operatör eğitimi
**ZH başlık:** 操作人员培训

<a id="doc-q083"></a>
#### Q083 — Fabrika operatörlerine verilecek Çince eğitim için hangi tür tercüman gerekir?

**Türkçe cevap — site metni**
Kuruluma bağlı operatör eğitiminde hem teknik terimleri hem de soru-cevap akışını takip edebilecek sözlü tercümanlık gerekir. Eğitim içeriğini, katılımcı sayısını ve uygulama düzenini önceden paylaşın. Tercüman açıklamaları aktarır; eğitimi hazırlayan, makine kullanımına izin veren veya operatör yeterliliğini onaylayan kişi yerine geçmez.

**简体中文 — 问题**
中国团队给工厂操作人员培训，需要什么样的口译？

**简体中文 — 回答**
与安装相关的操作培训，需要能跟进技术术语和问答交流的口译。请提前提供培训内容、人数及实操安排。译员传达讲解，不代替培训设计者、设备使用授权人或操作能力评估人员。

**Bileşen kimliği:** `Q083` · **Canlı HTML ankrajı:** `faq-083`

#### Bu bölümün iletişim kapanışı
**TR CTA:** Makine bilgilerinizi ve teknik gündemi paylaşın
**ZH CTA:** 提供设备资料与技术议程
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-machine_guide -->

### 18.4 Rehber — Çin’de fabrika ve fuar programınız için tercüman bilgilerini hazırlayın

**TR URL:** `/rehber/cin-fabrika-fuar-ziyareti-tercuman-hazirligi/`  
**ZH URL:** `/zh/guides/prepare-factory-and-fair-interpreting/`  
**TR title:** Çin’de fabrika ve fuar programınız için tercüman bilgilerini hazırlayın  
**ZH title:** 为中国工厂与展会行程准备口译信息  
**TR meta description:** Çin’de fabrika ve fuar ziyaretleri için tarih, konum, gündem ve günlük çalışma bilgilerini tercüman talebinde nasıl paylaşacağınızı öğrenin.  
**ZH meta description:** 了解中国工厂参访与展会行程中，应如何提供日期、地点、议题和每日安排，以咨询中土口译服务。

**TR H1:** Çin’de fabrika ve fuar programınız için tercüman bilgilerini hazırlayın

Fabrika ile fuar ziyaretinde paylaşılacak bilgiler kısmen farklıdır. Ortak nokta, her çalışma günü için gerçek konum ve görüşme gündemini açıkça belirtmektir.

#### Fuar günü için
Fuar adı, katılım tarihi, ürün grubu ve varsa planlanmış stant görüşmelerini yazın. Kanton Fuarı programında biliyorsanız faz bilgisini ekleyin. Güncel katılım tarihlerini ve giriş koşullarını resmi fuar kaynağından kontrol edin.

#### Fabrika günü için
Önceden belirlediğiniz fabrikanın adresini veya konumunu paylaşın. Görüşme amacını ve üzerinde konuşulacak üretim ya da ürün başlıklarını kısaca yazın. Firma seçimi ve teknik/ticari değerlendirmeler size aittir; tercüman sözlü iletişimi destekler.

#### İki programı birleştirirken
Hangi gün fuarda, hangi gün fabrikada olacağınızı ayrı satırlara yazın. Birden fazla şehir varsa geçişleri ayrıca belirtin. Yolculuk için gereken süre görülmeden günlük görüşme sayısını kesinleştirmeyin.

#### Gün sonunda hangi konular netleşmeli?
Tarafların açıklamalarını, varsa açık kalan soruları ve bir sonraki görüşme ihtiyacını sözlü olarak teyit edin. Görüşmenin iş kararları ilgili firma yetkililerine aittir.

#### Teklifte neleri ayrı görmelisiniz?
Günlük tercümanlık bedeli ile şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme kalemleri ayrı değerlendirilir. Fuar ve fabrika günlerinde konumlar değiştiğinden günlük gider düzenini de açıkça konuşun.

**Aynı gün fuar ve fabrika ziyareti yapılabilir mi?** Konum ve saatler bilinmeden kesin plan sözü verilmez. İki çalışma noktasını ve görüşme saatlerini paylaşarak uygunluğu sorun.

**Sonraki adım:** Fuar tercümanlığı veya fabrika ziyareti sayfasından programınızı paylaşın.

**ZH H1:** 为中国工厂与展会行程准备口译信息

工厂参访与展会行程需要的信息略有不同。共同点是：为每个工作日明确实际地点与沟通议题。

#### 展会日需要提供的信息
请说明展会名称、日期、产品类别和已计划的展位会面。广交会行程如已确定展期，也请注明。最新日期和入场要求请通过展会官方渠道核实。

#### 工厂参访日需要提供的信息
请提供已选定工厂的地址或位置，以及参访目的和讨论的生产、产品主题。企业选择及技术、商业判断由您负责，译员协助口头交流。

#### 合并两种行程时
请分别列出展会日与工厂参访日，多城市转场也应单独说明。在了解交通安排前，不宜确定一天能完成多少场会面。

#### 当天结束前需要确认什么？
可口头确认双方的说明、尚未解决的问题及下一次会面的需求。业务决定由相关企业负责人作出。

#### 报价中哪些费用应分开？
每日口译费与市内交通、城际交通、住宿及餐饮支出应分别确认。不同日期的地点变化时，也应明确各日费用安排。

**同一天可以同时参加展会和参访工厂吗？** 在了解地点和时段前，不承诺确定计划。请提供两处地点与会面时间，咨询是否能够安排。

**下一步：** 前往展会口译或工厂参访页面，提交您的具体行程。

**Tasarım:** 760 px okuma genişliği, üstte kısa özet, içerik içi alt başlıklar, sonda ilgili hizmet ve iletişim CTA’sı. Yazar kişisi uydurulmaz; kurumsal editör adı kullanılacaksa gerçek sorumlu atanır. Article / BlogPosting şeması yalnızca görünür gerçek yazar ve yayın bilgileriyle üretilir; bilgi yoksa WebPage + BreadcrumbList yeterlidir.



<!-- V12_INSERT_BEGIN:qa-selection_guide -->
<a id="v12-page-selection_guide"></a>
### 18.5 Yeni rehber — Çince tercüman nasıl seçilir?

**Durum:** Yeni editoryal rehber; bağımsız bir yeni hizmet değildir. Aynı ihtiyacı karşılayan mevcut bir rehber URL’si bulunursa o adres korunur; otomatik yönlendirme uygulanmaz.

| Alan | Türkçe | 简体中文 |
|---|---|---|
| URL | `/rehber/cince-tercuman-nasil-secilir/` | `/zh/guides/how-to-choose-a-turkish-chinese-interpreter/` |
| Title | Çince Tercüman Nasıl Seçilir? Deneyim, Ücret ve Güven | 如何选择中土口译？经验、费用与合作边界 |
| H1 | Çince tercüman seçerken neleri değerlendirmelisiniz? | 选择中文与土耳其语口译时，应确认什么？ |
| Meta description | Çince tercüman seçerken dil, teknik deneyim, günlük ücret, bağımsızlık ve doğruluk kontrolünü değerlendirin. İşinize uygun soruları görün. | 了解选择中土口译时需核实的语言、技术经验、日费、独立性及信息准确性。用具体问题明确适合您行程的服务。 |

**Yerleşim:** Hero ve kısa giriş → dört başlıklı okunabilir rehber → ilgili hizmet bağlantıları → kısa talep CTA’sı. Soru cevapları rehberin gerçek ana içeriğidir; yalnızca açılır SSS görünümüne hapsedilmez. Tüm metin burada yazılmıştır; doldurulacak boş rehber şablonu değildir.

**İç bağlantılar:** Hizmet karşılaştırmasından `/cince-tercuman/`; teknik hazırlıktan `/makine-kurulumu-cince-tercuman/` ve mevcut kurulum hazırlık rehberi; ücret başlığından `/cince-tercuman-fiyatlari/`; Çin programından `/cinde-tercuman/`. Çince sürüm aynı sayfaların Çince karşılıklarına bağlanır.

**Rehber kartı TR:** “Çince tercüman nasıl seçilir?” — “Dil bilgisi, teknik hazırlık, ücret kapsamı ve bağımsızlık beklentinizi doğru sorularla netleştirin.”

**Rehber kartı ZH:** “如何选择中土口译？” — “用具体问题核实语言能力、技术准备、费用范围与独立性要求。”

**Koleksiyon güncellemesi:** Bölüm 18.1’deki ilk üç rehber korunur ve bu kart eklenir; ilk sürümde dört rehber kartı gösterilir. Eski “üç kart” metni kaynak tarihçesi olarak saklanır; canlıdaki uygulanacak sayı dörttür. Yayın tarihi, yazar kimliği veya kişisel uzmanlık unvanı icat edilmez.

**TR hedef:** `/rehber/cince-tercuman-nasil-secilir/`  
**ZH hedef:** `/zh/guides/how-to-choose-a-turkish-chinese-interpreter/`
**Ekrana yerleştirme:** Yeni, tek ve iki dilli rehber. Dört ana bölüm, ilgili soruların açık H3 başlıkları ve hizmetlere bağlamsal bağlantılar. Her soruya yeni URL açılmaz.
**Uygulama kuralı:** Aşağıdaki Q kimlikleri bu sayfanın tam cevap kaynağıdır. Aynı niyetli eski SSS ile yan yana ikinci kez gösterilmez; güncel cevap olarak kullanılır. İlgisiz eski içerikler silinmez. İç notlar ziyaretçiye gösterilmez.

**TR bölüm girişi:** Doğru tercümanı seçmek, yalnızca Çince bilen birini bulmak değildir. İşinizin konusunu, dil ihtiyacını, çalışma günlerini ve sorumluluk sınırlarını birlikte değerlendirmeniz gerekir. Bu rehberde bize teklif sorarken de kullanabileceğiniz soruları bir araya getirdik.

**ZH bölüm girişi:** 选择译员不只是寻找一位会中文的人，还需要一起评估工作主题、语言需求、工作日期及职责边界。本指南整理了您向我们咨询时也可以使用的问题。

#### Bölüm başlığı TR: İhtiyacı ve dil çiftini belirleyin
**ZH başlık:** 明确需求与语言组合

<a id="doc-q047"></a>
#### Q047 — Çince tercüman nasıl bulunur?

**Türkçe cevap — site metni**
Önce tercümana hangi iş için ihtiyaç duyduğunuzu, nerede ve hangi tarihlerde çalışılacağını belirleyin. Ardından dil çifti, konuya uygun deneyim, günlük çalışma kapsamı ve toplam giderleri birlikte değerlendirin. Bizimle çalışmayı düşünüyorsanız hizmetinizi, şehrinizi ve kısa programınızı iletin; ihtiyacınızı dört hizmetimizden uygun olanıyla eşleştirelim.

**简体中文 — 问题**
如何寻找合适的中文与土耳其语口译？

**简体中文 — 回答**
先明确需要口译的工作、地点及日期，再核对语言组合、相关经验、每天的服务范围及总支出。如考虑我们的服务，请提供服务类型、城市及简要行程，以便判断是否符合我们的四类服务范围。

**Bileşen kimliği:** `Q047` · **Canlı HTML ankrajı:** `faq-047`

<a id="doc-q048"></a>
#### Q048 — Çince Türkçe tercüman nereden bulunur?

**Türkçe cevap — site metni**
Çince–Türkçe sözlü tercüman arıyorsanız bize WhatsApp, telefon veya e-posta üzerinden ulaşabilirsiniz. Türkiye’de makine kurulumu; Çin’de planlanmış görüşme, fabrika ve fuar ziyaretleri için talep değerlendiriyoruz. Sadece “tercüman lazım” demek yerine şehir, tarihler ve konuşulacak konuyu paylaşmanız uygunluğun değerlendirilmesini kolaylaştırır.

**简体中文 — 问题**
在哪里可以咨询中文与土耳其语口译？

**简体中文 — 回答**
可通过 WhatsApp、电话或邮件联系我们。我们评估土耳其设备安装，以及中国既定会面、工厂参访和展会行程的口译需求。请提供城市、日期与沟通主题，而不只是说明“需要译员”，以便确认是否适合安排。

**Bileşen kimliği:** `Q048` · **Canlı HTML ankrajı:** `faq-048`

<a id="doc-q052"></a>
#### Q052 — Çince tercüman seçerken Mandarin veya Kantonca ayrımı önemli mi?

**Türkçe cevap — site metni**
Evet; görüşeceğiniz kişilerin hangi dili veya lehçeyi kullanacağını önceden belirtmeniz gerekir. Mandarin ve Kantonca ihtiyacını aynı kabul edip her tercümanın ikisini de karşılayacağını varsaymayın. Talebinizde Türkçe ile birlikte ihtiyaç duyulan konuşma dilini yazın; bu kapsam ve tercümanın uygunluğu ayrıca teyit edilsin. Sitedeki “Çince” ifadesi bütün lehçelerde otomatik hizmet garantisi değildir.

**简体中文 — 问题**
选择译员时，普通话与粤语的区别重要吗？

**简体中文 — 回答**
重要。请提前说明会面人员使用的语言或方言，不要默认每位译员都能同时满足普通话和粤语需求。咨询时写明土耳其语之外所需的口语种类，并单独确认译员是否适合。网站使用“中文”一词，不代表自动保证所有方言服务。

**İç uygulama notu — ziyaretçiye gösterilmez:** Mandarin/Kantonca hizmet envanteri kullanıcı tarafından verilmedi; iki dil/lehçenin de kesin sunulduğu söylenmez.

**Bileşen kimliği:** `Q052` · **Canlı HTML ankrajı:** `faq-052`

#### Bölüm başlığı TR: Dil bilgisi, teknik hazırlık ve deneyim
**ZH başlık:** 语言能力、技术准备与经验

<a id="doc-q053"></a>
#### Q053 — Çince bilen biriyle profesyonel Çince tercüman arasında ne fark vardır?

**Türkçe cevap — site metni**
Biz tercüman seçimini yalnızca “Çince biliyor” bilgisine dayandırmıyoruz. İki dilde konuşmayı takip edebilme, eksik noktada açıklama isteme, terimleri hazırlama ve tarafların söylediklerini kendi yorumundan ayırabilme becerilerini de önemsiyoruz. Özellikle teknik işlerde kişinin ilgili konudaki deneyimini ve çalışma yöntemini görüşme öncesinde değerlendirmek gerekir.

**简体中文 — 问题**
会中文的人与专业中土口译员有什么区别？

**简体中文 — 回答**
我们不只依据“会中文”选择译员，还关注双向跟进交流、遇到不清楚内容时提问、准备术语，以及区分原话和个人意见的能力。技术工作尤其应在开始前评估相关经验及沟通方法。

**Bileşen kimliği:** `Q053` · **Canlı HTML ankrajı:** `faq-053`

<a id="doc-q054"></a>
#### Q054 — Çince teknik tercüman ile fuar tercümanı arasındaki fark nedir?

**Türkçe cevap — site metni**
Teknik tercümanlık talebinde makine, süreç ve teknik terimlere hazırlık öne çıkar. Fuar tercümanlığında ise planlanan ürün grupları, stant görüşmeleri ve ziyaret akışı önemlidir. Fuar görüşmesi de teknik ayrıntı içerebilir; bu nedenle iki hizmeti birbirinden tamamen kopuk görmüyoruz. Size uygun tercümanı hizmet adı kadar konuşulacak konuya göre değerlendirelim.

**简体中文 — 问题**
设备技术口译与展会口译有什么区别？

**简体中文 — 回答**
技术口译更侧重设备、流程及技术术语准备；展会口译更侧重产品类别、展位会面和参观安排。展会洽谈也可能涉及技术细节，因此不能完全割裂两者。应根据实际沟通内容，而不只是服务名称评估译员。

**Bileşen kimliği:** `Q054` · **Canlı HTML ankrajı:** `faq-054`

<a id="doc-q101"></a>
#### Q101 — Güvenilir Çince tercüman nasıl seçilir?

**Türkçe cevap — site metni**
Güvenilirlik değerlendirmesini yalnızca “çok tecrübeli” veya “çok sayıda tercüman” gibi genel ifadelere dayandırmayın. İşinize uygun deneyimi, iletişim biçimini, taraflarla varsa bağlantıyı ve ücretin kapsamını sorgulayın. Bizimle görüşürken de aynı soruları sorabilirsiniz; özellikle hizmet sınırları, günlük program ve giderlerin açıkça netleşmesini önemsiyoruz.

**简体中文 — 问题**
如何选择可靠的中土口译？

**简体中文 — 回答**
不要仅依据“经验丰富”或“译员很多”等笼统表述判断。应核实相关经验、沟通方式、与有关企业的联系及费用范围。向我们咨询时也欢迎提出同样的问题，尤其应明确服务边界、每日行程和支出。

**Bileşen kimliği:** `Q101` · **Canlı HTML ankrajı:** `faq-101`

<a id="doc-q102"></a>
#### Q102 — Çince tercüman tutmadan önce hangi bilgileri doğrulamalıyım?

**Türkçe cevap — site metni**
Dil çifti ve varsa lehçe ihtiyacını, çalışma tarihlerini, gerçek konumu, konuya uygun deneyimi ve günlük saatleri doğrulayın. Ardından ulaşım, konaklama, yeme-içme, ödeme ve program değişikliği koşullarını netleştirin. Teklif sormanızın rezervasyon olmadığını unutmayın; kimle ve hangi kapsamda çalışacağınızı açık teyitle kesinleştirin.

**简体中文 — 问题**
聘请中土口译前，应核实哪些信息？

**简体中文 — 回答**
应确认语言组合及方言要求、工作日期、实际地点、相关经验和每日时段，再明确交通、住宿、餐饮、付款及改期条件。询价不等于预约，应收到关于服务人员和工作范围的明确确认。

**Bileşen kimliği:** `Q102` · **Canlı HTML ankrajı:** `faq-102`

<a id="doc-q103"></a>
#### Q103 — Çince tercümanın deneyimini ve referanslarını nasıl kontrol edebilirim?

**Türkçe cevap — site metni**
Genel bir “teknik tercüman” tanımı yerine, sizin ekipmanınız veya görüşme konunuzla benzer deneyimi sorun. Paylaşılabilecek ve izinli bir referans varsa bunun konuyla ilgisini değerlendirin; kişisel veya ticari gizlilik içeren bilgilerin izinsiz paylaşılmasını beklemeyin. Biz de doğrulanmamış referans, müşteri logosu veya geçmiş proje sayısı üzerinden güven iddiası üretmiyoruz.

**简体中文 — 问题**
如何核实译员的经验和客户参考信息？

**简体中文 — 回答**
应询问与您的设备或主题相近的具体经验，而不是只看“技术译员”标签。如有获准分享的参考信息，可评估其相关性；不要要求未经授权披露个人或商业机密。我们也不以未经核实的客户标志、推荐或项目数量制造信任。

**Bileşen kimliği:** `Q103` · **Canlı HTML ankrajı:** `faq-103`

#### Bölüm başlığı TR: Çalışma modeli ve bağımsızlık
**ZH başlık:** 合作方式与独立性

<a id="doc-q104"></a>
#### Q104 — Serbest çalışan bir Çince tercüman mı, tercümanlık firması mı tercih etmeliyim?

**Türkçe cevap — site metni**
Tek başına serbest çalışma veya firma üzerinden hizmet alma modeli kaliteyi belirlemez. Size kimin tercümanlık yapacağını, işi kimin planladığını, ücret ve değişiklik koşullarını kimin teyit ettiğini değerlendirin. Bizimle çalışmada da yalnızca marka adına değil, sizin programınız için somutlaştırılmış tercümanlık kapsamına ve iletişim düzenine bakmanızı öneriyoruz.

**简体中文 — 问题**
应选择自由译员，还是口译服务机构？

**简体中文 — 回答**
服务形式本身不能决定质量。应确认实际由谁口译、谁协调安排，以及谁确认费用和变更条件。选择我们的服务时，也建议关注为您行程明确的服务范围和沟通机制，而不只是品牌名称。

**Bileşen kimliği:** `Q104` · **Canlı HTML ankrajı:** `faq-104`

<a id="doc-q105"></a>
#### Q105 — Türk tercüman mı, Türkçe bilen Çinli tercüman mı tercih etmeliyim?

**Türkçe cevap — site metni**
Milliyet tek başına tercümanın sizin işinize uygunluğunu göstermez. Türkçe ve Çinceyi karşılıklı kullanabilmesi, ilgili konuyu takip etmesi, terminoloji hazırlığı ve iletişim tarzı daha belirleyici değerlendirme başlıklarıdır. Tercihiniz varsa talebinizde belirtin; ancak görevlendirmeyi yalnızca milliyet üzerinden değil, programınızın gerçek ihtiyaçlarıyla birlikte ele alalım.

**简体中文 — 问题**
应该选择土耳其籍译员，还是会土耳其语的中国籍译员？

**简体中文 — 回答**
国籍本身不能说明是否适合您的工作。更应关注中土双向沟通能力、主题理解、术语准备和交流方式。如有人员偏好可说明，但应结合实际行程需求评估，而不是只根据国籍决定。

**Bileşen kimliği:** `Q105` · **Canlı HTML ankrajı:** `faq-105`

<a id="doc-q106"></a>
#### Q106 — Tedarikçinin önerdiği tercümanla çalışmak mı, kendi tercümanımı bulmak mı daha doğru?

**Türkçe cevap — site metni**
Tedarikçinin önerdiği tercümanı da kendi bulduğunuz tercümanı da aynı sorularla değerlendirin: Dil ve konuya uygunluğu nedir, kimin programına göre çalışacak ve taraflarla nasıl bir ilişkisi var? Bir önerinin kendisini otomatik risk veya güvence saymıyoruz. Bağımsızlık beklentinizi ve varsa ilişkiyi önceden açıkça konuşmanızı öneriyoruz.

**简体中文 — 问题**
供应商推荐的译员与自己寻找的译员，哪个更合适？

**简体中文 — 回答**
两种方式都应采用相同标准：语言和主题是否合适、按谁的行程工作、与双方有何关系。推荐来源本身既不是自动风险，也不是可靠保证。建议提前明确独立性要求和可能的联系。

**Bileşen kimliği:** `Q106` · **Canlı HTML ankrajı:** `faq-106`

<a id="doc-q107"></a>
#### Q107 — Çince tercümanın tedarikçiden komisyon alıp almadığını nasıl öğrenebilirim?

**Türkçe cevap — site metni**
Görüşeceğiniz firmanın adını belirtip doğrudan komisyon, yönlendirme bedeli veya başka bir ticari ilişki bulunup bulunmadığını sorun. Bizden tercüman talep ederken de bu beklentinizi yazılı olarak iletebilirsiniz. İlgili tercüman için teyit alınmadan tüm ağımız adına “hiç kimse komisyon almaz” şeklinde genel bir iddiada bulunmuyoruz.

**简体中文 — 问题**
如何了解译员是否从供应商收取佣金？

**简体中文 — 回答**
请明确对方企业名称，直接询问是否涉及佣金、转介费或其他商业关系。向我们申请译员时，也可书面说明这项要求。在核实具体译员前，我们不会笼统声称整个网络中任何人都不收取佣金。

> **Yayın kapısı — ziyaretçiye gösterilmez:** İŞLETME ONAYI BEKLİYOR — cevap taslağı dosyada saklanır; ilgili süreç teyit edilmeden canlıda gösterilmez.
> Mevcut komisyon/çıkar çatışması politikası verilmedi. İlgili kişi ve firma düzeyinde beyan ve kontrol süreci onaylanmalıdır; bağımsızlık garantisi eklenmez.

**Bileşen kimliği:** `Q107` · **Canlı HTML ankrajı:** `faq-107`

#### Bölüm başlığı TR: Çeviri araçları ve doğruluk kontrolü
**ZH başlık:** 翻译工具与准确性核实

<a id="doc-q108"></a>
#### Q108 — Google Çeviri, yüz yüze ticari görüşmede Çince tercümanın yerini tutar mı?

**Türkçe cevap — site metni**
Basit ifadeler için bir çeviri uygulamasından destek alabilirsiniz; ancak bunu bütün yüz yüze ticari görüşmeler için otomatik olarak yeterli saymıyoruz. Seçiminizi teknik ayrıntı, görüşme akışı, yanlış anlaşılmanın sonucu ve gizlilik ihtiyacınıza göre yapın. İnsan tercüman kullanılması da sıfır hata garantisi değildir; kritik noktaları konuşma sırasında karşılıklı teyit etmek gerekir.

**简体中文 — 问题**
Google 翻译可以替代面对面商务会谈中的中土口译吗？

**简体中文 — 回答**
简单表达可以借助翻译应用，但不能自动认定它适合所有面对面商务会谈。应根据技术细节、交流节奏、误解后果及保密需求选择。使用人工口译同样不代表零错误，关键内容仍应当场由双方核实。

**İç uygulama notu — ziyaretçiye gösterilmez:** Belirli uygulama sürümüne ilişkin test, doğruluk oranı veya güncel yetenek karşılaştırması yapılmadı. Metin koşullu seçim yaklaşımıdır.

**Bileşen kimliği:** `Q108` · **Canlı HTML ankrajı:** `faq-108`

<a id="doc-q109"></a>
#### Q109 — Yapay zekâ çeviri cihazları makine kurulumu ve fabrika görüşmeleri için yeterli mi?

**Türkçe cevap — site metni**
Bir çeviri cihazını veya yapay zekâ uygulamasını, işinizdeki gerçek konuşmalarla değerlendirmeden makine kurulumu ve fabrika görüşmelerinin tamamı için yeterli kabul etmiyoruz. Teknik terimler, sayılar, birimler, ortam koşulları ve gizli bilginin işlenmesi ayrıca dikkate alınmalıdır. Hangi araç kullanılırsa kullanılsın, teknik kararları yetkili ekip vermeli; belirsiz açıklamalar teyit edilmeden uygulamaya geçilmemelidir.

**简体中文 — 问题**
AI 翻译设备足以应对设备安装和工厂会面吗？

**简体中文 — 回答**
未用实际工作交流进行评估前，不宜认定某个设备或 AI 应用能够满足整个安装或参访过程。需要考虑术语、数字、单位、现场条件及保密信息处理。无论使用何种工具，技术决策均应由授权团队作出，说明存在歧义时应先核实再操作。

**İç uygulama notu — ziyaretçiye gösterilmez:** Cihaz önerisi, ölçülmüş hata oranı veya AI sistemlerinin tümü hakkında deneysel iddia yoktur. Genel iş akışı değerlendirmesidir.

**Bileşen kimliği:** `Q109` · **Canlı HTML ankrajı:** `faq-109`

<a id="doc-q110"></a>
#### Q110 — Çince bilmeden tercümanın söylediklerimi doğru aktardığını nasıl anlayabilirim?

**Türkçe cevap — site metni**
Tek bir yöntemle bütün çevirinin doğruluğunu garanti etmek mümkün değildir. Görüşmeleri kısa bölümler hâlinde yürütmenizi; önemli sayı, birim, miktar ve tarihleri tekrar ettirmenizi; karşı taraftan anladığını kendi sözleriyle açıklamasını istemenizi öneriyoruz. Anlaşılmayan terimlerde tercümanın durup açıklama istemesi de önemlidir. Teknik uygulama ve ticari kararları bu karşılıklı teyitlerden ayrı olarak yetkili kişiler onaylamalıdır.

**简体中文 — 问题**
我不懂中文，如何判断译员是否准确传达了我的意思？

**简体中文 — 回答**
没有单一方法能保证所有口译都完全准确。建议分段交流，重复核对重要数字、单位、数量和日期，并请对方用自己的话说明理解内容。遇到不清楚的术语，译员应提出澄清。技术操作及商业决定仍须由授权人员另行确认。

**Bileşen kimliği:** `Q110` · **Canlı HTML ankrajı:** `faq-110`

#### Bu bölümün iletişim kapanışı
**TR CTA:** İhtiyacınıza uygun tercümanlığı birlikte değerlendirelim
**ZH CTA:** 共同评估适合您需求的口译安排
**TR masraf notu:** Tercümanlık günlük ücretlendirilir. Şehir içi ve şehir dışı ulaşım, konaklama ve yeme-içme ayrıca karşılanır.
**ZH masraf notu:** 口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。
**Uygulama:** CTA mevcut teklif formuna gider; hizmet/şehir biliniyorsa seçili başlar. Kullanıcının yazdığı hassas metin URL’ye eklenmez. WhatsApp mesajını kullanıcı gönderir; Çince sayfada e-posta ve metni kopyalama alternatifi görünür.
<!-- V12_INSERT_END:qa-selection_guide -->

## 19. 404, kaldırılmış sayfa ve dil geçişi ekranları

### 19.1 Bulunamayan URL — gerçek HTTP 404

**TR H1:** “Bu sayfayı bulamadık”  
“Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Mevcut tercümanlık hizmetlerini inceleyebilir ya da ihtiyacınızı doğrudan paylaşabilirsiniz.”

**TR CTA:** “Hizmetleri incele” · “WhatsApp’tan yaz”

**ZH H1:** “未找到此页面”  
“链接可能已更改，或页面已移除。您可以查看现有口译服务，或直接说明需求。”

**ZH CTA:** “查看口译服务” · “WhatsApp 咨询”

Sayfa kullanılabilir bağlantılar içerir ama yanıt kodu 404 kalır. Her bilinmeyen URL’yi ana sayfaya 200 ile döndüren SPA fallback kurulmaz.

### 19.2 Bilinçli kaldırılan eski URL — gerçek HTTP 410 veya 404

**TR H1:** “Bu sayfa artık yayında değil”  
“Güncel sözlü tercümanlık hizmetlerimize hizmetler sayfasından ulaşabilirsiniz.”

**ZH H1:** “此页面已下线”  
“请通过服务页面了解目前提供的现场口译服务。”

Eski hizmetin satış metni yeniden gösterilmez. Sayfa otomatik olarak ana sayfaya yönlenmez; ziyaretçi tercih ederse ilgili güncel hizmete gider. Kaldırılmış URL sitemap ve navigasyonda yer almaz.

### 19.3 Dil eşleniği yoksa

İlk sürümde yeni ana sayfaların eşlenikleri birlikte yayımlanır. Envanterden korunacak eski bir yazının Çince çevirisi henüz yoksa var olmayan adrese `hreflang` verilmez. Dil bağlantısı açıkça “中文首页 / Çince ana sayfa” olarak etiketlenebilir; eşdeğer makaleymiş gibi davranmaz.

Bütün arayüzü Türkçe ve Çince yan yana tek sayfada yayımlamayın. Bu belge iki dili yan yana karşılaştırmak içindir; gerçek sitede her URL’de yalnızca ilgili dilin içeriği görünür.


<!-- V13_BRIDGE_BEGIN:code -->
**v1.3 teknik eklemesi:** Statik ve yönetim panelsiz yaklaşım korunur. AZ içerik klasörü, çoklu locale/rota modeli ve `prepareContactV13` [bölüm 58](#v13-technical) ile eklenir. Aşağıdaki iki dilli örnek fonksiyon AZ için etkin kod olarak kullanılmaz.
<!-- V13_BRIDGE_END:code -->

## 20. İlk sürümün teknik yapısı — yönetim paneli olmadan

### 20.1 Önerilen mimari

**Öneri:** Statik üretilmiş HTML + küçük bir etkileşim katmanı + içerikleri koddan ayıran dosyalar. Astro bu iş için uygun bir seçenek; varsayılan olarak sayfaları derleme sırasında statik HTML üretir. Bu, kullanıcı tarafından seçilmiş zorunlu bir teknoloji değil, mevcut kapsam için tasarım önerisidir. [T1]

İlk sürümde veritabanı, üye girişi, yönetim paneli, canlı tercüman takvimi, ödeme veya sunucu taraflı talep kaydı yok. Temel metinler HTML’de; JavaScript sadece menü, form önizleme ve iletişim bağlantılarını hazırlamada kullanılır. Düz HTML ile de aynı çıktı üretilebilir.

### 20.2 Dosya düzeni önerisi

```text
src/
  content/
    tr/                     # Yayımlanacak Türkçe içerikler
    zh/                     # Yayımlanacak Çince içerikler
  data/
    site.json               # Telefon, WhatsApp, e-posta, marka
    routes.json             # Eski URL + yeni URL + dil eşlenikleri
    navigation.json         # İki dilde menü
    service-areas.json      # Teyitli ve talep bazlı şehirler ayrı
    faq.json                # Tek kaynaklı, hizmete göre soru-cevaplar
  components/
    Header / Footer / Hero / ServiceCard / FAQ / QuoteForm
  layouts/
    Base / Service / City / Guide
public/
  robots.txt
  assets/
redirects/                  # Hostingin gerçek HTTP kuralları
migration/
  old-url-inventory.csv     # Uygulayıcının çıkaracağı tam envanter
  mapping.csv              # Onaylı URL kararları
  test-results.csv
```

CSV adları teslim edilmiş bir analiz dosyasını değil, uygulamada oluşturulacak kayıtları belirtir. Bu çalışma yalnızca Markdown belge teslimidir.

### 20.3 İçerik veri modeli

```json
{
  "id": "machine",
  "locale": "tr",
  "path": "/makine-kurulumu-cince-tercuman/",
  "alternatePath": "/zh/machine-installation-interpreter/",
  "status": "draft",
  "title": "Makine Kurulumu İçin Çince Teknik Tercüman",
  "description": "Çinli teknik ekip ile işletmeniz arasında makine kurulumu ve devreye alma sırasında Çince–Türkçe sözlü tercümanlık.",
  "primaryService": "machine",
  "faqIds": ["machine-role", "daily-billing", "outside-city"],
  "indexable": true,
  "reviewedAt": null,
  "publishedAt": null
}
```

`status: draft` ve `indexable: true` birlikteyse derleme yalnızca `status: published` olan sayfaları yayına alır. Taslaklar sitemap’e eklenmez. Gerçek yayın ve inceleme tarihi girilmeden tarih şeması üretilmez.

### 20.4 Hosting seçimi için zorunlu ölçütler

Seçilecek hosting aynı alan adında gerçek HTTP 301/308, gerçek 404 ve gerekiyorsa 410 yanıtlarını desteklemeli. Dosya yedeği ve önceki sürüme dönüş mümkün olmalı. Statik sayfa içindeki meta refresh, gerçek sunucu yönlendirmesinin yerine sessizce geçirilmemeli. Desteklenmeyen bir 410 yerine gerçek 404 kabul edilebilir; 200 kodlu hata ekranı kabul edilmez. [G5]

Alan adı veya hosting hesabı bu belge hazırlanırken değiştirilmedi. Fiyat/ürün paketi karşılaştırması yapılmadı. Hosting değişikliği ayrı bir yayın işlemi olarak planlanır. [G6]

### 20.5 İletişim bağlantısı için bağımsız JavaScript örneği

Aşağıdaki kod form bileşeninin tamamı değildir. Doğrulanmış girdilerden iki dilli mesaj ve sabit hedefli bağlantı üretir. Form doğrulaması, erişilebilir hata sunumu ve tarih kuralları bölüm 16’ya göre ayrıca uygulanır. WhatsApp numarası ülke koduyla ve işaretsiz olarak kullanılır. [T2]

```js
const SITE = Object.freeze({
  origin: "https://www.cince-tercuman.com",
  whatsapp: "905550441141",
  phone: "+905075286187",
  email: "info@cince-tercuman.com"
});

const SERVICES = Object.freeze({
  china: {tr: "Çin’de tercüman", zh: "中国现场口译"},
  machine: {tr: "Makine kurulumu tercümanlığı", zh: "设备安装口译"},
  factory: {tr: "Çin’de fabrika ziyareti tercümanlığı", zh: "中国工厂参访口译"},
  fair: {tr: "Çin’de fuar tercümanlığı", zh: "中国展会口译"},
  unsure: {tr: "Emin değilim", zh: "尚不确定"}
});

/**
 * Ön koşul: Formdaki tarih ve ülke/hizmet tutarlılığı doğrulanmış olmalı.
 * Bu fonksiyon ağ isteği atmaz veya talep kaydetmez.
 */
function prepareContact(input) {
  if (!input || typeof input !== "object") throw new TypeError("input_required");
  const locale = input.locale === "zh" ? "zh" : "tr";
  if (!Object.prototype.hasOwnProperty.call(SERVICES, input.service)) {
    throw new Error("invalid_service");
  }
  const readText = (value, min, max, code) => {
    if (typeof value !== "string") throw new TypeError(code);
    const text = value.trim();
    const length = Array.from(text).length;
    if (length < min || length > max) throw new Error(code);
    return text;
  };
  const city = readText(input.city, 2, 100, "invalid_city");
  const need = readText(input.need, 10, 600, "invalid_need");
  const dates = readText(input.dateLabel, 1, 160, "invalid_dates");
  if (!["TR", "CN"].includes(input.country)) throw new Error("invalid_country");
  if (["china", "factory", "fair"].includes(input.service) && input.country !== "CN") {
    throw new Error("service_country_mismatch");
  }
  const country = locale === "zh"
    ? (input.country === "TR" ? "土耳其" : "中国")
    : (input.country === "TR" ? "Türkiye" : "Çin");
  const source = new URL(input.sourcePath || "/", SITE.origin);
  if (source.origin !== SITE.origin) throw new Error("invalid_source");
  const path = source.pathname; // Sorgu parametreleri ve hash bilerek taşınmaz.
  const service = SERVICES[input.service][locale];
  const text = locale === "zh"
    ? [
        "您好，我想咨询中土现场口译的档期与每日报价。", "",
        `服务类型：${service}`, `国家：${country}`,
        `城市 / 工作区域：${city}`, `日期：${dates}`,
        `简要需求：${need}`, "",
        "请将口译日费与市内交通、城际交通、住宿及餐饮费用分别说明。",
        `来源页面：${path}`
      ].join("\n")
    : [
        "Merhaba, Çince–Türkçe sözlü tercümanlık için uygunluk ve günlük teklif sormak istiyorum.", "",
        `Hizmet: ${service}`, `Ülke: ${country}`,
        `Şehir / çalışma bölgesi: ${city}`, `Tarih: ${dates}`,
        `Kısa ihtiyaç: ${need}`, "",
        "Günlük tercümanlık ücretini; şehir içi / şehir dışı ulaşım, konaklama ve yeme-içme giderlerinden ayrı olarak paylaşabilir misiniz?",
        `Kaynak sayfa: ${path}`
      ].join("\n");
  const whatsapp = new URL(`https://wa.me/${SITE.whatsapp}`);
  whatsapp.searchParams.set("text", text);
  const subject = locale === "zh" ? "中土口译档期与报价咨询" : "Çince tercüman uygunluk ve teklif talebi";
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  return {text, whatsapp: whatsapp.href, mailto, phone: `tel:${SITE.phone}`};
}
```

Önizlemeye `innerHTML` ile kullanıcı metni basmayın; `textContent` veya güvenli metin bağlama kullanın. Nihai bağlantıya geçiş kullanıcı tıklamasıyla olsun. Mesaj URL’si uzunluğu cihaz/uygulama üzerinde sınanır; sorun olduğunda “mesajı kopyala” ve sade iletişim bağlantıları görünür kalır.

### 20.6 Performans ve erişilebilirlik

Tasarım hedefleri: mobil ve masaüstünde gerçek kullanıcı verisinin 75. yüzdelik diliminde **LCP ≤ 2,5 saniye, INP ≤ 200 ms, CLS ≤ 0,1**. Bunlar mevcut sitede ölçülmüş değerler değildir. Lighthouse laboratuvar sonucu gerçek kullanıcı verisinin yerine geçmez. [T3]

Uygulama önerileri: sistem fontları, küçük JavaScript, ölçüsü önceden belli bileşenler, ilk ekranda video olmaması, klavyeyle çalışan menü, gerçek label’lar ve erişilebilir hata özeti. Temel içeriği yüklemek için dış font, harita, CAPTCHA veya sosyal medya iframe’i gerekmesin. Çince sayfalar Türkiye’den ve Çin’deki gerçek bir ağdan ayrıca erişim testine alınsın.


## 21. Eski trafik ve bağlantıları koruyan yayın planı

### 21.1 Öncelikli ilke

**Aynı alan adı + aynı ilgili URL + güncellenmiş doğru içerik** varsayılan yaklaşımımızdır. Yalnızca gerçek karşılığı olan taşınmış içeriklerde kalıcı yönlendirme kullanılır. Kaldırılan her sayfayı ana sayfaya göndermek uygun değildir. Google da alakasız toplu yönlendirmelerin soft 404 olarak değerlendirilebileceğini belirtir. [G4]

Sıfır trafik kaybı garantisi verilemez. Özellikle artık satılmayacak hizmetleri arayan ziyaretçilerle, devam eden tercümanlık hizmetlerinin ziyaretçileri ayrı izlenmelidir. Hedef, kapsam daralırken ilgisiz trafiği yapay biçimde tutmak değil; ilgili geçmiş bağlantıları ve nitelikli talepleri korumaktır.

### 21.2 Yayından önce çıkarılacak envanter

Kullanıcıda Search Console/Analytics erişimi bulunmadığından tam geçmiş trafik tablosu bu belgede yoktur. Önce alan adı sahipliği doğrulanıp kullanılabilir raporlar incelenir. Hosting/CMS erişimiyle bütün eski URL’ler, dosyalar, sitemap’ler ve varsa erişim kayıtları dışa aktarılır. Arama motorundaki `site:` sonuçları tek başına tam envanter değildir. Google’ın geçiş rehberi de sitemap, CMS, loglar ve bağlantı raporlarının birlikte incelenmesini önerir. [G4][G7]

**Envanter sütunları:**

```text
old_url, http_status, canonical, page_title, content_intent,
current_service_relevance, internal_links, known_referring_pages,
available_clicks, available_impressions, server_visits,
proposed_action, target_url, reason, verification_status
```

Bilinmeyen trafik veya backlink alanına `0` değil `unknown` yazılır. Yeni kurulmuş Analytics geçmiş oturumları kendiliğinden yeniden oluşturmuş gibi kullanılmaz. Mevcut sayfa çıktılarında Google etiket alan adlarına işaretler görüldü; bunlar çalışan bir ölçüm hesabının veya erişimin kanıtı değildir. Eski etiketler sahipliği incelenmeden yeni siteye kopyalanmaz. [S3]

### 21.3 Gözlemlenen eski URL’ler için karar taslağı

Aşağıdaki liste tam tarama değil, bu incelemede bulunan başlangıç envanteridir. “Koru” URL’yi korumayı ifade eder; yanlış eski metinleri korumayı değil. Başlangıç listesindeki bütün işlemler tam envanter ve gerçek yanıt kodu testinden geçirilir.

| Eski URL | Gözlem düzeyi | Taslak işlem | Hedef / açıklama |
|---|---|---|---|
| `/` | Erişimde bot doğrulaması görüldü | 200, aynı URL | Yeni ana sayfa; gerçek tarayıcı ve bot erişimi ayrıca test. [S1] |
| `/cince-tercuman/` | İçerik okundu | 200, koru | Dört hizmeti karşılaştıran sayfa. [S3] |
| `/hakkimizda/` | İçerik okundu | 200, koru | Eski adres, hizmetler ve ekip iddiaları kaldırılır. [S2] |
| `/iletisim/` | Arama bulgusu; doğrudan erişimde doğrulama | 200, koru | Güncel iletişim ve talep formu; eski ofisler kaldırılır. [S17] |
| `/sik-sorulan-sorular/` | Mevcut URL görüldü | 200, koru | Yeni günlük çalışma ve kapsam soruları. [S13] |
| `/blog/` | Arama bulgusu; doğrulama ekranı | 200, koru | Hazırlık rehberleri koleksiyonu. [S12] |
| `/cince-tercuman-istanbul/` | İçerik okundu | 200, koru | İstanbul çalışma noktası ve kurulum odağı. [S8] |
| `/cince-tercuman-ankara/` | İç bağlantı bulundu; erişimde doğrulama | 200, koru | Gerçek eski canonical/slash biçimi yayın testinde teyit. [S3] |
| `/cince-tercuman-kocaeli/` | İçerik okundu | 200, koru | Bölge genelindeki teknik saha talebi. [S6] |
| `/cince-tercuman-gebze/` | İçerik okundu | 200, koru | Tesis giriş ve saha hazırlığına özgü içerik. [S9] |
| `/cince-tercuman-guangzhou/` | Arama çıktısında içerik görüldü | 200, koru | Fuar/fabrika günlerini ayıran içerik. [S4] |
| `/cince-tercuman-shanghai-sanghay/` | İçerik okundu | 200, koru | Şehir ve fiili çalışma noktası ayrımı. [S5] |
| `/cince-tercuman-beijing-pekin/` | İçerik okundu | 200, koru | Görüşme gündemi ve çalışma konumu. [S7] |
| `/cince-tercuman-shenzhen/` | İçerik okundu | Kapsam teyidiyle 200 | Bölüm 17’deki program bazlı metin; kesin yerel ekip iddiası yok. Hizmet fiilen sağlanamıyorsa yeniden karar. [S11] |
| `/cince-tercuman-yiwu/` | Arama çıktısında içerik görüldü | Kapsam teyidiyle 200 | Mevcut URL’de talep değerlendirme; yerleşik ekip veya kapsam dışı hizmet yok. [S10] |
| `/cince-ceviri/` | URL/başlık arama bulgusu; tam içerik teyidi gerekli | Kaldırılacak içerik için 410/404 | Yazılı çeviriyle ilgiliyse ana sayfaya zorunlu 301 yok. Tam içerik son kez incelenir. [S14] |
| `/cinden-makina-almak-getirmek/` | Başlık ve eski makale görüldü | 410/404 önerisi | Kullanıcının kaldırdığı kapsamla ilişkili. Kurulum sayfasına alakasız otomatik yönlendirme yapılmaz. [S15] |
| `/cinin-sehirleri/` | Şehir listesi içeriği okundu | Envanter incelemesiyle 200 koruma adayı | Hizmet dışı satış vaatlerini temizle; şehir bilgi niyetini koru. Yeni bölgeler sayfasına körlemesine yönlendirme yok. Coğrafi listenin güncelliği ayrıca kontrol edilmeli. [S16] |
| `/cince-tercumani-olarak-kayit-olun/` | İç bağlantı bulundu; doğrulama ekranı | Ayrı karar gerekli | İşe/tercüman ağına başvuru niyeti müşteri teklif formuyla aynı değil. Başvuru alınmıyorsa 410/404; müşteriye yönelik iletişime kör 301 yok. [S18] |
| Envanterde çıkacak diğer URL’ler | Henüz incelenmedi | Otomatik silme yok | Yazı, kategori, etiket, sayfalama ve dosyalar niyetlerine göre tek tek değerlendirilir. |

Kaldırılan hizmet adları yalnızca bu iç geçiş matrisinde bulunur; yeni ana menü veya satış sayfalarına konmaz.

### 21.4 Yönlendirme kuralları

Gerçek bir sayfa taşınırsa mümkün olduğunca **tek atlamada** son ve ilgili URL’ye 301/308 kullanılır. Aynı içerikte yalnızca adres sadeleştirme için gereksiz yeni URL yaratmayın. Dil sürümleri birbirine 301 yapılmaz. HTTP/HTTPS, www ve slash varyasyonları tercih edilen son adreste tutarlı biçimde birleşir. Kalıcı yönlendirmeler en az bir yıl, mümkünse daha uzun korunur. [G4][G5]

Bu belge `www` adresini mevcut görünen biçimiyle kullanıyor; tam canonical taraması tamamlanmadan farklı bir host standardına geçme kararı verilmemeli. İç linkler doğrudan son URL’ye gider. Query parametreleri sayfanın işlevini etkiliyorsa körlemesine silinmez; takip parametreleri için canonical temiz URL’de kalır.

`noindex`, bir sayfanın link değerini başka sayfaya taşıma yöntemi değildir. `robots.txt` ile engellemek de içeriğin kaldırıldığının okunmasını engelleyebilir; silinecek URL’lerin gerçek durum kodları taranabilir kalmalıdır. [G8]

### 21.5 Domain, DNS ve e-postayı koruma

**Alan adı kayıt hesabı değiştirilmek zorunda değildir.** Hosting değişecekse önce mevcut site ve dosyaların yedeği alınır, yeni ortam test edilir, sonra DNS geçişi planlanır. Alan adı kaydı, DNS barındırma ve web hosting birbirine karıştırılmaz. [G6]

**Bu proje için operasyonel kontrol listesi:**

- Mevcut DNS kayıtlarını dışa aktarın: web kayıtlarının yanında MX ve e-postaya ait TXT kayıtlarını da kaydedin.
- Web sitesi taşınırken `info@cince-tercuman.com` posta kutusunu yanlışlıkla kapatmayın. E-posta eski hosting paketindeyse ayrı taşıma veya hizmeti devam ettirme planı yapın.
- Yeni sunucuda hem tercih edilen host hem yönlendirilecek host için HTTPS çalışsın.
- E-posta gönderme/alma ve WhatsApp hedef hesabı gerçek cihazlarda test edilsin.
- Eski medya ve indirilebilir dosyalara verilen ilgili dış bağlantılar envantere alınsın; yolu korunabilenler korunsun.
- DNS geçişinden önce geri dönüş için önceki çalışan sürüm ve kayıtlar hazır olsun.

Aynı domain ve URL yapısı korunurken Search Console’daki “adres değişikliği” aracı fiziksel ofis adresini güncellemek için kullanılmaz. Site alan adı taşınmıyorsa sırf tasarım değişti diye bu araç gerekmez. [G4]

### 21.6 Dış bağlantılar ve eski işletme bilgileri

Tüm backlinklerin nerelerde olduğunu bu açık web taramasıyla kesin listeleyemedik. XING ve bazı forum/dizin sonuçlarında alan adınıza ilişkin ön işaretler görüldü; tam sayfa URL’si ve gerçek link hedefi doğrulanmadığı için bunlar “doğrulanmış backlink” olarak sayılmadı.

Uygulamada şu kayıt tutulur:

```text
referring_page, linked_old_url, link_still_present, business_name,
phone_displayed, old_address_present, owner_access,
update_requested_at, verification_date, final_status
```

Önce sahip olduğunuz sosyal profiller ve işletme kayıtları, sonra gerçek link veren kurum/dizin sayfaları kontrol edilir. Doğru çalışan kök alan adı bağlantıları sırf tasarım yenilendi diye değiştirilmez. Eski hizmet sayfasına giden linkler için ilgili güncel içerik varsa hedef güncelleme talep edilir; yoksa hizmetin sona erdiği konusunda doğru bilgi verilir.

Eski Taksim adresinin yayımlandığı kayıtlarda adres düzeltmesi ayrı takip edilir. Müşteri kabul edilmeyen bir konum, Google işletme kaydında sahte ofis gibi gösterilmez. Hizmet bölgesi işletmesi uygunluğu gerçek faaliyet düzenine göre değerlendirilir; Google adresin gizlenmesine bu kapsamda izin verir. [G9]

Google işletme profilinin yerel hizmet alanı tanımı, web sitesindeki uluslararası tercüman ağıyla aynı şey değildir. Tek bir yerel profili Türkiye ve Çin’in tamamında ofis varmış gibi genişletmeyin; mevcut profil bulunursa yetkili erişimle düzeltin, sahte çoklu profiller üretmeyin. [G10]


<!-- V13_BRIDGE_BEGIN:seo -->
**v1.3 dil kapsamı:** Bu bölümdeki mevcut TR/ZH kuralları korunur; üç dilli home/contact eşlemeleri ve AZ’ye özgü sayfaların bağımsızlığı için [bölüm 58](#v13-technical) geçerlidir.
<!-- V13_BRIDGE_END:seo -->

## 22. İki dilli SEO, içerik ve iç bağlantı sistemi

### 22.1 Dil kuralları

Türkçe sayfada `lang="tr"`, basitleştirilmiş Çince sayfada `lang="zh-Hans"` kullanılır. Her dil sürümü kendisine canonical verir; Çince sayfalar Türkçe sayfaya canonical edilmez. Dil eşlenikleri karşılıklı ve tam URL’lerle tanımlanır. Var olmayan veya yönlenen sayfaya `hreflang` verilmez. [G11]

İçeriği yalnızca tarayıcı diline göre aynı URL’de değiştirmeyin. IP, konum veya dil tahminiyle zorunlu yönlendirme yapılmaz; ziyaretçi dil seçimini kendisi yapabilir. Her sayfanın içeriği, menüsü, formu ve hataları aynı dilde olmalıdır. [G12]

**Makine sayfası Türkçe `<head>` örneği:**

```html
<link rel="canonical" href="https://www.cince-tercuman.com/makine-kurulumu-cince-tercuman/">
<link rel="alternate" hreflang="tr" href="https://www.cince-tercuman.com/makine-kurulumu-cince-tercuman/">
<link rel="alternate" hreflang="zh-Hans" href="https://www.cince-tercuman.com/zh/machine-installation-interpreter/">
<link rel="alternate" hreflang="x-default" href="https://www.cince-tercuman.com/makine-kurulumu-cince-tercuman/">
```

Çince eşleniğinde alternate kümesi aynı kalır, canonical Çince URL’ye döner. `x-default` burada eşdeğer Türkçe sayfayı seçen proje tercihidir; bütün alt sayfalarda koşulsuz ana sayfaya verilmez. Bu kod yeni rota gerçekten yayımlandıktan sonra kullanılır.

### 22.2 Sorgu → tek birincil sayfa

Bunlar araştırmadan ve hizmet kapsamından türetilmiş hedefleme önerileridir; ölçülmüş arama hacimleri veya gerçekleşmiş sıralamalar değildir.

| Niyet | Türkçe örnekler | Çince örnekler | Birincil sayfa |
|---|---|---|---|
| Genel hizmet | Çince tercüman, Çince Türkçe tercüman | 中土口译, 中文土耳其语口译 | Ana sayfa |
| Hizmet karşılaştırma | Çince sözlü tercümanlık hizmetleri | 中土口译服务范围 | Genel hizmet sayfası |
| Çin’de görüşme | Çin’de tercüman, Çin Türkçe tercüman | 中国土耳其语口译, 土耳其客户陪同口译 | Çin’de tercüman |
| Teknik saha | Çince teknik tercüman, makine kurulum tercümanı, makina kurulumu Çince | 土耳其设备安装口译, 土耳其工厂中文口译, 设备调试中土口译 | Makine kurulumu |
| Fabrika | Çin fabrika ziyareti tercüman | 中国工厂参访土耳其语口译 | Fabrika |
| Fuar | Çin fuar tercümanı | 中国展会土耳其语口译 | Fuar |
| Kanton | Kanton Fuarı tercüman, Canton Fair Türkçe tercüman | 广交会土耳其语口译, 广交会中土口译 | Kanton |
| Ücret | Çince tercüman günlük fiyat, Çince tercüman ücretleri | 中土口译一天多少钱, 土耳其中文口译日费 | Günlük ücret |
| Yerel Türkiye | İstanbul / Ankara / Kocaeli Çince tercüman | 伊斯坦布尔 / 安卡拉 中文口译 | İlgili eski şehir URL’si |
| Yerel Çin | Guangzhou / Şanghay / Pekin Türkçe tercüman | 广州 / 上海 / 北京 土耳其语口译 | İlgili eski şehir URL’si |

“Makina” ve “makine” için iki ayrı sayfa açılmaz; doğal metinde standart “makine” yazımı kullanılır. Shanghai/Şanghay ve Beijing/Pekin eşadları aynı sayfada açıklanır.

### 22.3 İç bağlantı kuralları

Ana sayfa dört hizmete; hizmet sayfaları ilgili şehirlere, ücret sayfasına ve hazırlık rehberine; şehirler uygun hizmetlere ve bölge sayfasına; rehberler ilgili hizmet ve iletişime bağlanır. Kanton sayfası genel fuar ve Guangzhou ile çift yönlü ilişkilidir. Bütün bağlantılar normal HTML `<a href>` olur.

Her sayfanın başlığı ana ihtiyacını tek cümlede açıklasın. H1 bir tane olsun; bölüm başlıkları H2, alt başlıklar H3 kullanılsın. SEO title ile H1 birebir aynı olmak zorunda değil. Meta description, gerçek hizmeti ve günlük modeli özetlesin; olmayan fiyat, hız veya garanti eklenmesin.

Sayfa gövdelerine rastgele bütün şehirleri ve anahtar kelimeleri eklemeyin. Şehir ekleme kararı gerçek talep, hizmet sağlayabilme ve özgün bilgiye dayanır. [G3]

### 22.4 Sitemap, canonical ve indexlenme

Sitemap yalnızca yayımlanmış, 200 dönen, indekslenmesi istenen canonical URL’leri içerir. İki dildeki gerçek sayfalar eklenir; 301, 404, 410 ve taslaklar eklenmez. `lastmod` yalnızca gerçek içerik değişikliğini yansıtır; her derlemede tüm sayfalar “güncellendi” yapılmaz. [G13]

Başlangıç `robots.txt` örneği:

```text
User-agent: *
Allow: /

Sitemap: https://www.cince-tercuman.com/sitemap.xml
```

Bu örnek yalnızca herkese açık statik site içindir. İleride yönetim paneli gelirse erişim kontrolü ayrıca kurulmalı; robots.txt gizlilik veya yetkilendirme aracı değildir. [G8]

Staging parola/erişim kontrolüyle korunur. Canlıya çıkarken taslak `noindex` veya test robots kuralları yanlışlıkla taşınmamalı. Mevcut robots/sitemap’in gerçek içeriği bu taramada tam doğrulanamadığı için yukarıdaki örnek “eski dosyanın aynısı” olarak sunulmaz.


<!-- V13_BRIDGE_BEGIN:schema -->
**v1.3 schema eklemesi:** Azerbaycanca içerik dili tercümanın çalışma dili değildir. `inLanguage`, `availableLanguage` ve doğrulanmış hizmet coğrafyası ayrımı [bölüm 58.4](#v13-technical) içinde açıklanmıştır.
<!-- V13_BRIDGE_END:schema -->

## 23. Yapısal veri ve AI tarafından anlaşılabilirlik

### 23.1 Şema seçimi

| Sayfa | Şema |
|---|---|
| Ana sayfa | Organization + WebSite + WebPage |
| Hizmet seçimi | CollectionPage + ItemList |
| Dört ana hizmet ve Kanton | Service + WebPage + BreadcrumbList |
| Şehir / bölgeler | WebPage + BreadcrumbList; gerçek Service bağlantıları |
| Ücret | WebPage + BreadcrumbList; gerçek fiyat yoksa Offer yok |
| Rehber | WebPage + BreadcrumbList; gerçek yazar/yayın bilgisi varsa Article veya BlogPosting |
| SSS | WebPage + BreadcrumbList; FAQPage Google zengin sonucu için zorunlu değil |
| Hakkımızda / iletişim | AboutPage / ContactPage + aynı Organization kimliği |

Organization kullanımı işletmeyi tanımlamaya yardımcı olabilir, ancak Google’da belirli bir görünüm garantisi değildir. Görünür sayfa ve işaretleme aynı bilgiyi taşır. `Service`, hizmet açıklamak için schema.org türüdür; tek başına Google’da özel kart veya üst sıra garantisi değildir. [G14][T4]

### 23.2 Ana sayfa için örnek JSON-LD

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.cince-tercuman.com/#organization",
      "name": "Çince Tercüman",
      "url": "https://www.cince-tercuman.com/",
      "telephone": "+905075286187",
      "email": "info@cince-tercuman.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "service enquiries",
          "telephone": "+905075286187",
          "email": "info@cince-tercuman.com",
          "availableLanguage": ["Turkish", "Chinese"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "WhatsApp enquiries",
          "telephone": "+905550441141",
          "url": "https://wa.me/905550441141",
          "availableLanguage": ["Turkish", "Chinese"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.cince-tercuman.com/#website",
      "url": "https://www.cince-tercuman.com/",
      "name": "Çince Tercüman",
      "publisher": {"@id": "https://www.cince-tercuman.com/#organization"},
      "inLanguage": ["tr", "zh-Hans"]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cince-tercuman.com/#webpage",
      "url": "https://www.cince-tercuman.com/",
      "name": "Türkiye ve Çin’de profesyonel Çince tercüman desteği",
      "inLanguage": "tr",
      "isPartOf": {"@id": "https://www.cince-tercuman.com/#website"},
      "about": {"@id": "https://www.cince-tercuman.com/#organization"}
    }
  ]
}
```

Logo sadece HTML yazı olarak kullanıldığı için örnekte mevcut olmayan `logo.png` veya `logo.svg` URL’si yok. Gerçek logo dosyası oluşturulup erişilebilir olduğunda uygun URL eklenebilir. `legalName`, `address`, `foundingDate`, `numberOfEmployees`, `sameAs`, yorum ve puan alanları doğrulanmadan doldurulmaz.

### 23.3 Makine hizmeti için örnek

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.cince-tercuman.com/makine-kurulumu-cince-tercuman/#service",
  "name": "Makine kurulumu için Çince–Türkçe sözlü tercümanlık",
  "serviceType": "Makine kurulumu sırasında Çince–Türkçe sözlü tercümanlık",
  "url": "https://www.cince-tercuman.com/makine-kurulumu-cince-tercuman/",
  "description": "Çinli teknik ekip ile işletme arasındaki kurulum, devreye alma ve kullanım açıklamalarında sözlü iletişim desteği. Hizmet günlük ücretlendirilir; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.",
  "provider": {"@id": "https://www.cince-tercuman.com/#organization"},
  "areaServed": [
    {"@type": "City", "name": "İstanbul"},
    {"@type": "City", "name": "Tekirdağ"},
    {"@type": "City", "name": "Düzce"},
    {"@type": "City", "name": "Ankara"},
    {"@type": "City", "name": "Kayseri"},
    {"@type": "City", "name": "Gaziantep"}
  ]
}
```

Bu liste hizmet verilebildiği belirtilen şehirleri gösterir; altı ofis iddiası değildir. Diğer şehirler için garanti içermeyen görünür metni, JSON-LD’de sınırsız kesin kapsama çevirmeyin. Çince sayfada ad ve açıklama Çince olur; sağlayıcının Organization kimliği değişmez.

### 23.4 AI için somut içerik biçimi

Her hizmet sayfasında ilk görünür paragraf şu bilgileri taşısın: **ne hizmet, nerede, kimin hangi ihtiyacı, hangi dil, nasıl teklif alınır**. Kapsam, günlük fiyatlandırma ve ayrıca alınan masraflar HTML metni olsun. Cevaplar görselin içine gömülmesin, sadece JavaScript isteği sonrasında gelmesin.

**Örnek kısa cevap — TR:** “Makine kurulumu tercümanlığı, Çinli teknik ekip ile işletme arasında kurulum ve devreye alma açıklamalarının Çince–Türkçe sözlü aktarımıdır. Kurulum işini teknik ekip yapar. Hizmet günlük planlanır; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.”

**ZH:** “设备安装口译是在中国技术团队与工厂之间，对安装及调试说明进行中文与土耳其语双向口头传达。设备由技术团队安装。口译按天安排，交通、住宿及餐饮另计。”

Bu metinler kullanıcının iş modelinden yazılmış açıklamalardır. Belirli bir AI motorunda alıntılanacağı veya önerileceği garanti edilmez. Google için temel taranabilirlik, dizine eklenebilirlik ve görünür yararlı içerik önceliklidir. [G1]

### 23.5 Bot erişimi — arama ile eğitim ayrımı

OpenAI’nin resmi dokümanında `OAI-SearchBot` arama, `GPTBot` model eğitimi amaçları için ayrı kontrollerle tanımlanır. ChatGPT arama görünürlüğü hedefleniyorsa OAI-SearchBot erişimi ve ilgili doğrulanmış ağ istekleri incelenir. GPTBot izni ayrı bir içerik kullanım kararıdır; arama görünürlüğü için eğitim izni zorunluymuş gibi anlatılmaz. [T5]

Siteyi herkese kapatan bir güvenlik katmanını kontrol etmek, bütün güvenliği kapatmak anlamına gelmez. Ana sayfada görülen bot doğrulama ekranı için önce sunucu logları ve doğrulanmış bot istekleri incelenir. Kullanıcı aracına yalnızca “Googlebot” yazan her isteğe güvenilmez.

### 23.6 Yapılmayacaklar

Gizli AI metni, görünmeyen marka listeleri, uydurma ödül/yorum, gereksiz yüzlerce şehir sayfası, satın alınmış sahte referanslar, bütün içerikte “en iyi” iddiası, aynı sorunun her sayfada tekrarlandığı şişirilmiş SSS ve doğrulanmamış AI sıralama puanları yok. `llms.txt` ve FAQ şeması temel ürün, içerik veya erişim hatalarının yerine geçen çözümler olarak sunulmaz. [G1][G2][G3]


<!-- V13_BRIDGE_BEGIN:measurement -->
**v1.3 pazar eklemesi:** Önceki ölçüm planına AZ sayfa/sorgu takibi ve dil gereksinimi ayrımı [bölüm 59](#v13-growth) ile eklenir. Bu güncellemede ölçüm araçları kurulmuş değildir.
<!-- V13_BRIDGE_END:measurement -->

## 24. Ölçüm ve maksimum ilgili kullanıcıya ulaşma

### 24.1 Önce başlangıç ölçümü

Alan adı için Search Console sahipliği kullanıcı hesabında doğrulanır. Erişilebilen sayfa, sorgu, ülke, cihaz ve bağlantı raporları başlangıç durumu olarak kaydedilir. Search Console site doğrulaması, sorgu/görünüm/tıklama ve tarama sorunlarını izlemek için kullanılabilir; bu işlem bu belge hazırlanırken yapılmadı. [G7]

Veriler yetersizse rapor bunu açıkça gösterir. “Eski trafik korundu” veya “trafik ikiye katlandı” demek için karşılaştırılabilir ölçüm gerekir. Kaldırılan hizmetlerin sorguları ayrı grupta değerlendirilir.

### 24.2 İlk sürüm ölçüm tercihleri

Başlangıçta gereksiz üçüncü taraf takip betikleri eklemeyin. Search Console, hostingteki sınırlı teknik kayıtlar ve alınan gerçek taleplerin elle sınıflandırılmasıyla başlayabilirsiniz. Analitik tercih edildiğinde veri işleme ve izin düzeni gerçekten kurulmalı; aşağıdaki olaylar o zaman etkinleştirilir.

| Olay | Ne ölçer? | Neyi ölçmez? |
|---|---|---|
| `quote_start` | Kullanıcının talep alanıyla etkileşimi | Tamamlanmış müşteri talebi |
| `quote_validation_error` | Alan bazlı, kimliksiz hata türü | Kullanıcının yazdığı metin |
| `whatsapp_open` | WhatsApp’a geçiş tıklaması | Mesajın gönderilmesi veya cevaplanması |
| `email_click` | E-posta bağlantısı tıklaması | E-postanın gerçekten gönderilmesi |
| `phone_click` | Arama bağlantısı tıklaması | Telefon görüşmesinin gerçekleşmesi |
| `language_switch` | Dil tercihi | Kullanıcının milliyeti veya kimliği |

Olay parametreleri yalnızca hizmet türü, sayfa kimliği, dil ve CTA konumu gibi sınırlı alanları içersin. Telefon, e-posta, serbest metin, firma adı, tam adres ve tarih aralığı analitik sistemine gönderilmesin.

### 24.3 İşletme için asıl başarı tanımı

**Nitelikli talep:** Sunulan dört hizmetten biri için gerçek şehir/tarih veya yaklaşık program paylaşan ve günlük çalışma koşullarını görüşmek isteyen kişi/işletme.

Asıl takip: alınan nitelikli talepler → teklif verilenler → teyit edilen çalışma günleri. WhatsApp tıklaması satış değildir. Rakam hedefleri mevcut başlangıç verisi görülmeden belirlenmez.

### 24.4 AI görünürlüğü için test sorguları

Aşağıdaki sorgular bir **test setidir**; farklı AI motorlarında çalıştırılmış sonuçlar değildir.

| # | Türkçe test sorusu | Çince test sorusu |
|---|---|---|
| 1 | Türkiye’de makine kurulumu için Çince tercüman nasıl bulurum? | 在土耳其安装设备，如何找中土口译？ |
| 2 | İstanbul’da Çinli teknik ekibe günlük tercüman lazım. | 伊斯坦布尔的中国技术团队需要按天安排的口译。 |
| 3 | Ankara’da fabrika kurulumu için Çince teknik tercüman arıyorum. | 在安卡拉工厂安装设备，需要中文和土耳其语口译。 |
| 4 | Gebze’de makine kurulumu tercümanının ücretine neler dahil? | 盖布泽设备安装口译的日费包含哪些费用？ |
| 5 | Guangzhou’da Türkçe bilen fuar tercümanı nasıl ayarlanır? | 广州展会如何安排土耳其语口译？ |
| 6 | Kanton Fuarı için tercüman talebinde hangi bilgileri vermeliyim? | 咨询广交会中土口译需要提供哪些信息？ |
| 7 | Şanghay’da fabrika ziyareti için Türkçe tercüman arıyorum. | 上海工厂接待土耳其客户，需要什么口译安排？ |
| 8 | Pekin’de bir günlük Türkçe–Çince tercüman nasıl bulurum? | 北京如何咨询一天的中土现场口译？ |
| 9 | Çince tercüman günlük ücretine ulaşım dahil mi? | 中土口译日费包含市内和城际交通吗？ |
| 10 | Çin’de fuar ve fabrika ziyaretlerini aynı tercümanla planlayabilir miyim? | 中国展会和工厂参访能否咨询同一位中土译员？ |

Her denemede tarih, motor/ürün, açık web araması durumu, dil, sorunun tam metni, kullanılan kaynak URL’leri ve sitenin nasıl anıldığı kaydedilir. “Adı geçti”, “kaynak verildi” ve “önerildi” ayrı işaretlenir. Tek bir sonuçtan kalıcı sıralama çıkarılmaz.

### 24.5 Sonraki içerik genişlemesi

Yeni sayfa ancak gerçek bir ihtiyacı ayrı yanıtlıyorsa açılır. İlk genişleme adayları Tekirdağ, Düzce, Kayseri ve Gaziantep’tir; aday olmak yayın kararı değildir. Bu sayfalara gerçek çalışma konusu, yerel program bilgisi, özgün soru-cevap ve ilgili hizmet bağlantısı eklenmeden toplu üretim yapılmaz.

İleride sektör sayfaları da aynı kritere tabidir. Belirli sektörde deneyim doğrulanmadan “bu sektörde uzmanız” sayfası açılmaz. Kapsam dışına çıkan blog trafiği için yeni hizmet varmış izlenimi yaratılmaz.


## 25. Yayın kapıları, gizlilik ve gerçek operasyon

### 25.1 Yayından önce doğrulanması gereken bilgiler

Bu bilgiler tasarım üretimini durdurmaz; fakat bilinmiyor olmaları, sitede uydurularak doldurulabilecekleri anlamına gelmez.

| Konu | Mevcut durum | Yayın kararı |
|---|---|---|
| WhatsApp hesabı | Kullanıcının verdiği numara yapılandırıldı | Gerçek telefonda ve bilgisayarda hedef hesabı doğrulayın. |
| Günlük çalışma saatleri | Belirtilmedi | Sabit saat yazmayın; teklif sırasında netleştirin. |
| Ödeme, iptal, değişiklik ve seyahat günü koşulları | Belirtilmedi | Fiyat sayfasında kural uydurmayın; çalışma teyidinden önce müşteriye açıklayın. |
| Vergi/fatura ve işletmeyi işleten gerçek kişi/tüzel kişi bilgileri | Bu belge için verilmedi | Ticari ve veri işleme metinlerini gerçek işletme bilgileriyle hazırlayın. |
| Güncel fiziksel adres | Kamuya açık yeni adres verilmedi | Eski adresi kaldırın; yeni ofis, harita veya adresli şema üretmeyin. |
| Shenzhen, Yiwu ve diğer yakın şehirlerde uygunluk | Genel yakın bölge değerlendirmesi dışında teyit yok | Bölüm 17’deki koşullu dil kullanılsın; talebi değerlendirme imkânı yoksa sayfa kararı yeniden verilsin. |
| Eski URL/backlink/veri envanteri | Kısmi web gözlemi var; tam envanter yok | Bölüm 21 tamamlanmadan toplu silme/redirect kararı almayın. |
| Hosting ve veri işleyen servisler | Seçilmedi | Son servis listesi belli olmadan tamamlanmış gizlilik politikası yayımlamayın. |

### 25.2 İlk sürüm için mahremiyet odaklı uygulama kararı

Talep formu sitenin kendi veritabanına kayıt yapmayacak. Kullanıcı girdisini tarayıcıda mesaj taslağına dönüştürecek. Kullanıcı WhatsApp veya e-posta eylemini seçtiğinde taslak ilgili uygulamaya aktarılacak; mesajın gönderilmesi orada kullanıcı tarafından tamamlanacak.

Bu tasarım, “hiçbir kişisel veri işlenmez” anlamına gelmez. Hosting erişim kayıtları, e-posta ve WhatsApp iletişimi ayrı veri işleme süreçleridir. Sitede bunları yok sayan bir gizlilik vaadi yazılmayacak. Serbest metin; hata takip aracına, analytics olayına, URL sorgusuna, çerezlere veya localStorage'a kaydedilmeyecek. Form alanları için üçüncü taraf oturum kaydı kullanılmayacak.

**Form altında yayımlanacak kısa bilgilendirme:**

TR: “Bu form sitenin kendi veritabanına kaydedilmez. Seçtiğiniz iletişim uygulamasında bir mesaj taslağı açılır; göndermeden önce bilgilerinizi kontrol edebilirsiniz. Lütfen bu alana hassas bilgiler veya paylaşma yetkiniz olmayan belgeler eklemeyin.”

简体中文：“此表单不会保存到网站自身的数据库。系统将在您选择的联系应用中打开消息草稿，发送前可再次核对。请勿填写敏感信息或未经授权的资料。”

Bu kısa metin, işletmeye ve kullanılan servislere uygun tam aydınlatma/gizlilik metninin yerine geçmez. Gerçek işletme, amaç, alıcılar, saklama ve başvuru bilgileri bilinmediği için bu belgede tamamlanmış hukuki politika üretilmedi. İlgili politika iki dilde hazırlanıp doğrulanınca `/gizlilik/` ve `/zh/privacy/` altında yayımlanır ve footer'dan bağlanır. Boş taslak, sahte adres veya doldurulmamış değişken içeren sayfa canlıya çıkmaz.

### 25.3 Talep geldikten sonraki işletme akışı

1. Talebin dört hizmetten hangisine ait olduğunu doğrulayın.
2. Şehir, tesis/fuar konumu, tarih, yaklaşık günlük program ve ihtiyaç duyulan dil çiftini netleştirin.
3. Gerçek tercüman uygunluğunu ve konuya hazırlık ihtiyacını kontrol edin.
4. Günlük tercüman ücretini; şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme kalemlerinden ayrı belirtin. Masrafların doğrudan müşteri tarafından karşılanacağı veya ayrıca tahsil edileceği yöntemi anlaşmada netleştirin.
5. Çalışma saatleri, seyahat günleri, ödeme, iptal/değişiklik ve teyit koşullarını iş başlamadan karşılıklı açıklığa kavuşturun.
6. Ancak karşılıklı mutabakat ve gerçek planlama tamamlandıktan sonra hizmet teyidi verin.

Bu akış sitede vaat edilen süreçle işletmenin gerçek çalışmasını uyumlu tutar. Site bir anlık rezervasyon sistemi değildir.


## 26. Uygulama sırası ve 90 günlük yol haritası

Aşağıdaki süreler bu belgenin hazırlanma süresi veya gelecekte yapılacak otomatik çalışma sözü değildir; siteyi geliştirecek ekip için önerilen uygulama dönemleridir.

| Dönem | Yapılacak iş | Çıktı | Öncelik / etki / efor |
|---|---|---|---|
| Yayın öncesi P0 | Mevcut site ve veritabanı/dosyaları yedekle; DNS ve e-posta kayıtlarını kaydet; URL envanteri çıkar | Geri dönüş paketi + eski URL listesi | Kritik / yüksek / orta |
| Yayın öncesi P0 | Alan adı için Search Console erişimini kur; mevcut mülkiyetleri kontrol et | Doğrulanmış erişim ve mevcut veri sınırları | Kritik / yüksek / düşük–orta |
| Yayın öncesi P0 | Yanlış adres, 600+ iddiası ve kapsam dışı teklifler için eski şablonları işaretle | Temizlenecek içerik listesi | Kritik / yüksek / düşük |
| İlk geliştirme | Logo, tasarım tokenları, header/footer, talep kartı, iki dilli rota kaynağı | Ortak bileşenler | Yüksek / yüksek / orta |
| İlk geliştirme | Ana sayfa + dört hizmet + fiyatlar + iletişim + hakkımızda + genel SSS | Gerçek metinlerle temel kullanıcı yolculuğu | Yüksek / yüksek / orta |
| İlk geliştirme | Eski uygun şehir URL’lerini aynı adreste yeni metinlerle hazırla | URL sürekliliği ve hizmet kapsama ağı | Kritik / yüksek / orta |
| İlk geliştirme | Kanton sayfası, hizmet bölgeleri ve hazırlık rehberlerini yerleştir | Niyete göre ayrı ve bağlantılı içerik | Orta / orta–yüksek / orta |
| Yayın öncesi P0 | Canonical, hreflang, sitemap, status, WhatsApp ve e-posta testleri | Bölüm 27 kontrol sonuçları | Kritik / yüksek / orta |
| Yayın | Tek ve kontrollü dağıtım; DNS/e-posta ve HTTPS testleri; yeni sitemap gönderimi | Canlı site ve izleme kaydı | Kritik / yüksek / orta |
| Yayın sonrası ilk 7 gün | Gerçek hata kayıtları, 404/5xx, iletişim akışı ve indekslenebilirliği kontrol et | Hata düzeltme listesi | Kritik / yüksek / düşük–orta |
| 8–30 gün | Sorgu/sayfa verisini ve gelen gerçek talepleri incele; eski işletme kayıtlarına düzeltme talepleri gönder | İlk gerçek başlangıç değerlendirmesi | Yüksek / yüksek / orta |
| 31–60 gün | Formdaki anlaşılmayan soruları, hizmet açıklamalarını ve CTA'ları gerçek taleplere göre düzenle | İçerik ve dönüşüm iyileştirmeleri | Orta / orta–yüksek / düşük–orta |
| 61–90 gün | Gerekçesi oluşan şehir/rehber sayfalarını seç; AI test setini aynı yöntemle tekrar değerlendir | Kanıta dayalı sınırlı genişleme | Orta / orta / orta |

### Yayın sırasında kapsamı daraltmak gerekirse

Önce yeni rehberlerin veya gerekliliği henüz oluşmamış yeni sayfaların yayını ertelenebilir. **Halen değer taşıyan eski bir URL’nin yeni sürümü yetişmedi diye URL’yi silmeyin veya ana sayfaya yönlendirmeyin.** Önce mevcut uygun adresleri hazırlayın. Bir dilde hazır olmayan yeni sayfayı o dilin sitemap ve hreflang eşleşmesine eklemeyin.

### İlk beş uygulama önceliği

1. Eski URL, DNS ve e-posta envanterini yedekleyip koruma kararlarını kesinleştirmek.
2. Ana sayfada dört hizmeti ve günlük + ayrı masraf modelini anlaşılır hâle getirmek.
3. Doğru numaraya çalışan WhatsApp akışını mobil ve masaüstünde test etmek.
4. Eski hizmetle uyumlu şehir sayfalarını aynı adreste yenilemek.
5. Türkçe–Çince eşlenikleri, gerçek iletişim bilgileri ve indekslenebilir HTML ile yayınlamak.


## 27. Kabul testleri — yayın kontrol listesi

Bu liste test planıdır. Henüz oluşturulmamış canlı site için “testler geçti” anlamına gelmez.

### A. Hizmet ve içerik doğruluğu

- [ ] Ana sayfada yalnızca dört hizmet görünüyor; genel hizmet ve şehir sayfaları bunları destekliyor.
- [ ] Makine kurulumu sayfası, makineyi tercümanın kurduğu veya mühendislik sorumluluğu aldığı izlenimini vermiyor.
- [ ] Fabrika/fuar sayfaları, müşterinin belirlediği ziyaret ve görüşmeler için sözlü tercümanlık anlatıyor.
- [ ] Günlük ücretlendirme tutarlı; saatlik, yarım günlük veya proje paketi yok.
- [ ] Şehir içi ulaşım, şehir dışı ulaşım, konaklama ve yeme-içmenin ayrı olduğu iki dilde de açık.
- [ ] Eski adres, eski ofis haritası ve 600+ tercüman iddiası; görünür içerik, şema, metadata ve eski site içi dosyalarda gözden geçirildi.
- [ ] Sahte müşteri yorumu, logo, çalışan portresi, deneyim yılı, başarı oranı veya yanıt süresi vaadi yok.
- [ ] Shenzhen/Yiwu ve yakın bölge talepleri, gerçek ofis veya sürekli yerel ekip iddiasıyla sunulmuyor.
- [ ] Kamuya açık sayfalarda iç uygulama talimatları ve bu belgenin kaldırılan hizmet listesi görünmüyor.

### B. Türkçe ve Çince

- [ ] Her yayımlanmış sayfa eşinin aynı işlevi yerine getirdiği ve bilgilerin çelişmediği kontrol edildi.
- [ ] `lang="tr"` ve `lang="zh-Hans"` doğru; Çin şehir adları Guangzhou/广州, Shanghai/上海 ve Beijing/北京 ile tutarlı.
- [ ] Dil değiştirici mümkün olduğunda aynı sayfanın karşılığına gidiyor; ana sayfaya zorla atmıyor.
- [ ] Fiyat/masraf, hizmet kapsamı ve iletişim alanları iki dilde aynı işletme politikasını anlatıyor.
- [ ] Bir dil sayfasında başlıklar ve uzun gövde metinleri diğer dilde bırakılmıyor; marka adı istisna.
- [ ] Mobil Çince metinler ve uzun Türkçe kelimeler taşmıyor.
- [ ] Doğal Çince kullanım ve ticari anlam son içerik kontrolünden geçti.

### C. İletişim ve form

- [ ] WhatsApp hedefi `905550441141`; arama hedefi `+905075286187`; e-posta doğru.
- [ ] iPhone/Android ve masaüstünde gerçek kullanıcı eylemiyle WhatsApp veya uygun açılış ekranı çalışıyor.
- [ ] TR ve ZH mesajları; hizmet, ülke, şehir, tarih ve ihtiyacı doğru taşıyor.
- [ ] Boş/geçersiz alanlar, bitiş tarihinin başlangıçtan önce olması, bilinmeyen tarih ve Çin hizmeti/Türkiye konumu çelişkisi kontrol ediliyor.
- [ ] Metin içinde `&`, `?`, `#`, Türkçe karakterler, Çince ve satır sonları bağlantıyı bozmuyor.
- [ ] Formdaki serbest metin HTML olarak çalıştırılmıyor; önizlemede `textContent` kullanılıyor.
- [ ] Form doğrudan WhatsApp’a mesaj göndermiyor; tıklamayı rezervasyon onayı gibi göstermiyor.
- [ ] WhatsApp kullanılamadığında numara, kopyalama ve e-posta seçenekleri erişilebilir.
- [ ] JavaScript kapalıyken telefon/e-posta ve temel WhatsApp bağlantısı hâlâ bulunabiliyor.
- [ ] Çifte tıklama birden çok gereksiz pencere üretmiyor; açılmayan pencere için kullanıcıya alternatif sunuluyor.
- [ ] Mesaj önizlemesi ve doğrulama hataları ekran okuyucuya uygun bildiriliyor.

### D. URL, SEO ve çok dilli teknik kontrol

- [ ] Eski URL envanterindeki her kayıt için koru/güncelle/yönlendir/kaldır/incele kararı var.
- [ ] Korunan URL’ler gerçek `200`; mevcut ve yeni uygun içerikler aynı canonical hedefte.
- [ ] Yönlendirilen URL’ler tek adımda ilgili gerçek `200` sayfaya gidiyor; döngü yok.
- [ ] Kaldırılan ve karşılığı olmayan sayfalarda uygun `404/410`; bütün adreslere ana sayfa `200` dönen SPA fallback yok.
- [ ] HTTP/HTTPS, www/non-www ve eğik çizgi standardı döngüsüz; domain korunuyor.
- [ ] Her sayfada anlamlı title/description, bir ana H1 ve düzenli başlık hiyerarşisi var.
- [ ] Canonical kendine işaret ediyor; Çince sayfalar Türkçe sayfaya canonical yapılmıyor.
- [ ] Hreflang eşlenikleri karşılıklı, tam URL ve yalnızca gerçekten yayımlanmış sayfalardan oluşuyor.
- [ ] Sitemap yalnızca yayımlanmış canonical `200` URL’leri içeriyor; `lastmod` gerçeği yansıtıyor.
- [ ] Yayında yanlış `noindex`, genel robots engeli veya staging adresine canonical yok.
- [ ] Şema gerçek görünen içerikle aynı; eski adres, sahte puan, gerçek olmayan çalışan sayısı yok.
- [ ] Erişim koruması gerçek arama botlarını sebepsiz engellemiyor; güvenlik incelemeden tamamen kapatılmıyor.
- [ ] Eski dosya/görsel bağlantıları ayrıca envanterlendi; dosyalar körlemesine silinmedi.

### E. Tasarım, hız ve erişilebilirlik

- [ ] 360, 390, 768, 1024 ve 1440 px genişliklerde yatay taşma yok.
- [ ] Header, açılan menü ve sabit mobil CTA içerik/form/gizlilik bağlantısını kapatmıyor.
- [ ] Gerçek input etiketleri, belirgin klavye odağı ve yeterli dokunma alanı var.
- [ ] Metin–zemin kontrastı uygulamadaki gerçek renklerle test edildi; yalnızca renk kullanılarak durum anlatılmıyor.
- [ ] Klavye ile bütün menü/form/SSS alanları kullanılabiliyor; akordeon erişilebilir.
- [ ] Hareketi azalt tercihi destekleniyor; otomatik video veya dikkat dağıtan animasyon yok.
- [ ] Sayfa içeriği statik/önceden işlenmiş HTML’de mevcut; temel hizmet metni yalnızca istemci işlemi sonrasında görünmüyor.
- [ ] Görsel kullanıldıysa boyutları tanımlı ve gerçek kullanım açıklaması doğru; sahte saha fotoğrafı yok.
- [ ] Performans hedefleri geliştirme testleriyle değerlendirildi; gerçek saha metriği yoksa sonuç diye sunulmadı.

### F. İşletme sürekliliği ve geri dönüş

- [ ] Alan adı, hosting ve erişim sahipliği işletmenin kontrolünde.
- [ ] Site dosyaları, veri tabanı varsa yedeği ve DNS kayıtları geri yüklenebilir biçimde saklandı.
- [ ] MX/SPF/DKIM/DMARC kayıtları ve e-posta hesabı korunuyor; dış adrese gönderme ve dışarıdan alma testleri yapıldı.
- [ ] Eski posta hizmeti yanlışlıkla web hosting ile birlikte iptal edilmedi.
- [ ] Gerçek işletme/veri işleme bilgileriyle gizlilik metni ve gerekli bilgilendirme tamamlandı.
- [ ] Hata izleme ve analytics serbest metin/kişisel iletişim bilgilerini toplamıyor.
- [ ] Search Console doğrulama kaydı korunuyor; yeni sitemap ve temsilî URL kontrolü tamamlandı.
- [ ] Kritik hata hâlinde önceki çalışan dağıtıma dönme işlemi tanımlı ve test edilebilir.


## 28. Kodlama aracına verilecek uygulama talimatı

Aşağıdaki metni bu dosyayla birlikte kullanın. Bu bölüm, dosyanın geri kalanındaki gerçek tasarım ve içeriklerin yerine geçmez.

```text
Bu Markdown belgesini kaynak kabul ederek cince-tercuman.com için iki dilli, responsive bir sözlü tercümanlık sitesi uygula.

Önce mevcut kod deposunu ve rota listesini oku. Bir depo verilmediyse yeni projeyi üret; alan adı/DNS/canlı site üzerinde kendiliğinden işlem yapma. İlk aşamada CMS, yönetim paneli, kullanıcı hesabı, veritabanı, ödeme veya canlı rezervasyon sistemi ekleme.

Teknoloji mevcut depoyla uyumlu olmalı. Yeni projede statik/önceden üretilmiş HTML ve az JavaScript yaklaşımını esas al. Astro uygun bir başlangıç seçeneğidir; paket sürümlerini uygulama günündeki resmi dokümantasyondan doğrula. Framework değişimini bir SEO zorunluluğu gibi ele alma.

Türkçe mevcut kök rotaları koru; Türkçe sayfaları /tr/ altına taşıma. Çince içerikleri /zh/ altında üret. Bölüm 3 ve 17'deki URL çiftlerini tek bir rota kaynağında yönet. Yeni bir sayfa eski uygun adresle çakışıyorsa mevcut adresi koru. Bilinmeyen eski URL'leri silme veya otomatik olarak ana sayfaya yönlendirme.

Bölüm 4–5'teki yazı logosunu, renkleri, tipografiyi ve ortak bileşenleri uygula. Fotoğraf, müşteri logosu, yorum, çalışan sayısı, kişisel uzmanlık veya ofis adresi uydurma. Tasarım gerçek içerik ve talep kartıyla çalışsın.

Bölüm 6–19'da verilen Türkçe ve Çince gerçek metinleri kullan. İlk olarak ana sayfayı, ardından hizmetler/fiyatlar/iletişim sayfalarını, korunacak şehir URL'lerini ve diğer planlı sayfaları üret. Belgedeki 'uygulama notu', araştırma sınırlamaları, kaynakça ve kaldırılacak hizmet listelerini kamuya açık sayfa metni olarak basma.

Her sayfaya kendi title/description, doğru lang, self-canonical, karşılıklı hreflang ve erişilebilir başlık yapısı ekle. Şema görünen gerçek içerikle aynı olsun. FAQ rich result, AI motorlarında önerilme veya sıralama garantisi verme. llms.txt ve FAQPage'i zorunlu büyüme özelliği olarak sunma.

Form: hizmet, ülke/şehir, tarih veya yaklaşık tarih ve kısa ihtiyaç. Günlük çalışma esasını; şehir içi/şehir dışı ulaşım, konaklama ve yeme-içmenin ayrıca olduğunu göster. Bölüm 16 ve 20'deki doğrulamaları ve mesaj hazırlama kurallarını uygula. WhatsApp 905550441141, telefon +905075286187, e-posta info@cince-tercuman.com. Bilgileri tek bir config kaynağından kullan.

Form uygulama içinde rezervasyon oluşturmaz, mesajı otomatik göndermez. Kullanıcı eylemiyle uygulamada düzenlenebilir taslak açar. Çince arayüzde e-posta alternatifini görünür tut. Serbest metni analytics/log/localStorage'a taşıma, HTML olarak render etme, URL query'sinde saklama.

Bölüm 21'deki geçiş tablosunu taslak olarak ele al; tam eski URL envanteri olmadan toplu yönlendirme/silme dosyası yayımlama. Eski siteyi veya e-posta hizmetini kaldırma. Hosting platformu seçilmeden platforma özgü canlı DNS talimatını kesinleştirme.

Bölüm 25'teki bilinmeyen hukuki/operasyonel bilgileri gerçekmiş gibi doldurma. Bu bilgiler için yayın kapısı oluştur; kamuya açık placeholder sayfalar üretme.

Kod sonunda kullanılan dosyaları, yerel çalıştırma/derleme komutlarını, rota envanterini ve Bölüm 27 test sonuçlarını ver. Çalıştırmadığın testi geçti diye yazma. Eksik testleri ve canlı yayın öncesi gerekli adımları ayrı belirt. Çıktı yalnızca ekran görüntüsü değil, sürdürülebilir çalışan proje dosyaları olsun.
```

### Nihai site kararı

**Türkiye’de makine kurulumu; Çin’de fabrika, fuar ve yerinde görüşme programları için odaklanmış Çince–Türkçe sözlü tercümanlık sitesi.**

Alan adı ve uygun eski sayfalar korunur. Türkçe–Çince gerçek metinler, günlük ücret + ayrı masraf açıklığı, kısa talep kartı ve doğru WhatsApp hedefi dönüşümün temelini oluşturur. Şehir ağı açıkça anlatılır ama sahte ofisler kurulmaz. Yapay zekâ görünürlüğü için ayrı bir “hileli” site değil, insanın ve arama sisteminin anlayabileceği tutarlı bir kaynak hazırlanır.


## 29. Kaynaklar ve araştırma notları

**Erişim/inceleme tarihi:** 15 Eylül 2026. Mevcut site için bazı bulgular doğrudan sayfa içeriğinden, bazıları arama sonuçlarındaki görünür metinlerden ve mevcut sayfalardaki iç bağlantılardan elde edildi. Bot doğrulama nedeniyle erişilemeyen sayfalar tam incelenmiş kabul edilmedi. Kaynakların eski hizmet iddiaları, yeni site için onaylanmış işletme bilgisi değildir.

### Mevcut site

- [S1] Ana sayfa; bazı erişimlerde bot doğrulama görüldü.
- [S2] Hakkımızda; eski hizmet/adres/ekip bilgileri ve telefon/e-posta sürekliliği.
- [S3] Genel tercümanlık sayfası; mevcut hizmet/şehir bağlantı yapısı.
- [S4] Guangzhou sayfası; mevcut URL ve arama görünümü.
- [S5] Shanghai sayfası; mevcut metin ve şehir listeleri.
- [S6] Kocaeli sayfası; mevcut bölge URL’si.
- [S7] Beijing sayfası; mevcut Çin şehir URL’si.
- [S8] İstanbul sayfası; mevcut hizmet/şehir URL’si.
- [S9] Gebze sayfası; ayrı mevcut URL.
- [S10] Yiwu sayfası; arama sonucu ve mevcut bağlantı gözlemi.
- [S11] Shenzhen sayfası; mevcut URL.
- [S12] Blog; koleksiyon adresi ve arama görünümü, eski içeriklerin tam envanteri çıkarılmadı.
- [S13] Sık sorulan sorular; mevcut rota.
- [S14] Çince çeviri; kaldırılacak kapsam için envanter adayı, tam sayfa incelemesi gerekiyor.
- [S15] Çin’den makine almak/getirmek; eski içerik ve URL, yeni kapsamla birebir aynı değil.
- [S16] Çin’in şehirleri; eski geniş içerik için ayrı envanter kararı gerekiyor.
- [S17] İletişim; eski adres kayıtlarının temizliği için kontrol edilecek kaynak.
- [S18] Tercüman kayıt rotası; mevcut iç bağlantıdan gözlemlendi, müşteri teklif formuyla aynı amaçta değil.

### Seçili rakiplerin kendi sayfaları

- [R1] Çince Tercümesi: hizmetler, süreç ve iletişim sunumu.
- [R2] Çince Danışmanlık: hizmet kartları, makine kurulumu, süreç ve SSS sunumu.
- [R3] Çincetercuman.org: “Çin’e Gelmeden Önce Öğrenmeniz Gereken 25 Temel Çince Cümle” başlıklı hazırlık yazısı; yalnızca bu yazı kapsamında değerlendirildi.
- [R4] Çin İthalat İhracat: Shanghai fuar/tercümanlık yazısı; eski tarihli içerik, güncel ticari faaliyet veya sıralama kanıtı değil.

### Resmi arama, şema ve uygulama dokümantasyonu

- [G1] Google Search Central — AI features and your website.
- [G2] Google Search Central güncelleme kaydı — Mayıs/Haziran 2026 FAQ zengin sonuçları ve llms.txt açıklamaları.
- [G3] Google Search spam politikaları — doorway/ölçekli düşük değerli içerik yaklaşımı.
- [G4] URL değişiklikli site geçişi — eski URL envanteri, uygun eşleştirme ve yönlendirme ömrü.
- [G5] Yönlendirmeler ve Google Search.
- [G6] URL değiştirmeden hosting/site geçişi.
- [G7] Search Console hakkında — izleme ve erişim.
- [G8] robots.txt temel açıklaması.
- [G9] Google Business Profile — hizmet bölgesi işletmeleri için adres yönetimi.
- [G10] Google Business Profile — hizmet bölgesi düzenleme.
- [G11] Çok dilli sayfaların localized versions/hreflang eşleştirmesi.
- [G12] Çok dilli ve çok bölgeli site yönetimi.
- [G13] Sitemap oluşturma ve gönderme.
- [G14] Organization yapılandırılmış veri dokümantasyonu.
- [T1] Astro — statik üretim ve on-demand rendering.
- [T2] WhatsApp Help Center — click to chat.
- [T3] web.dev — Core Web Vitals.
- [T4] Schema.org — Service.
- [T5] OpenAI resmi bot dokümantasyonu — arama ve eğitim crawler ayrımı.

[S1]: https://www.cince-tercuman.com/ "Mevcut site ana sayfası"
[S2]: https://www.cince-tercuman.com/hakkimizda/ "Mevcut Hakkımızda"
[S3]: https://www.cince-tercuman.com/cince-tercuman/ "Mevcut Çince Tercüman sayfası"
[S4]: https://www.cince-tercuman.com/cince-tercuman-guangzhou/ "Guangzhou"
[S5]: https://www.cince-tercuman.com/cince-tercuman-shanghai-sanghay/ "Shanghai"
[S6]: https://www.cince-tercuman.com/cince-tercuman-kocaeli/ "Kocaeli"
[S7]: https://www.cince-tercuman.com/cince-tercuman-beijing-pekin/ "Beijing"
[S8]: https://www.cince-tercuman.com/cince-tercuman-istanbul/ "İstanbul"
[S9]: https://www.cince-tercuman.com/cince-tercuman-gebze/ "Gebze"
[S10]: https://www.cince-tercuman.com/cince-tercuman-yiwu/ "Yiwu"
[S11]: https://www.cince-tercuman.com/cince-tercuman-shenzhen/ "Shenzhen"
[S12]: https://www.cince-tercuman.com/blog/ "Blog"
[S13]: https://www.cince-tercuman.com/sik-sorulan-sorular/ "Sık sorulan sorular"
[S14]: https://www.cince-tercuman.com/cince-ceviri/ "Eski çeviri sayfası"
[S15]: https://www.cince-tercuman.com/cinden-makina-almak-getirmek/ "Eski makine getirme içeriği"
[S16]: https://www.cince-tercuman.com/cinin-sehirleri/ "Çin’in şehirleri"
[S17]: https://www.cince-tercuman.com/iletisim/ "Mevcut iletişim sayfası"
[S18]: https://www.cince-tercuman.com/cince-tercumani-olarak-kayit-olun/ "Eski tercüman kayıt rotası"
[R1]: https://cincetercumesi.com/ "Seçili rakip hizmet sunumu"
[R2]: https://cincedanismanlik.com/ "Seçili rakip hizmet ve süreç sunumu"
[R3]: https://cincetercuman.org/cine-gelmeden-once-ogrenmeniz-gereken-25-temel-cince-cumle/ "Seçili hazırlık yazısı"
[R4]: https://www.cinithalatihracat.com/genel/sanghay-fuar-tercumanlik-ve-rehberlik/ "Eski Shanghai fuar yazısı"
[G1]: https://developers.google.com/search/docs/appearance/ai-features "Google AI features"
[G2]: https://developers.google.com/search/updates "Google Search dokümantasyon güncellemeleri"
[G3]: https://developers.google.com/search/docs/essentials/spam-policies "Google spam politikaları"
[G4]: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes "URL değişiklikli site geçişi"
[G5]: https://developers.google.com/search/docs/crawling-indexing/301-redirects "Yönlendirmeler"
[G6]: https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes "URL değiştirmeden geçiş"
[G7]: https://support.google.com/webmasters/answer/9128668?hl=en "Search Console hakkında"
[G8]: https://developers.google.com/search/docs/crawling-indexing/robots/intro "robots.txt açıklaması"
[G9]: https://support.google.com/business/answer/2853879?hl=en "Hizmet bölgesi işletmeleri"
[G10]: https://support.google.com/business/answer/9157481?hl=en "Hizmet bölgesi yönetimi"
[G11]: https://developers.google.com/search/docs/specialty/international/localized-versions "Hreflang"
[G12]: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites "Çok dilli site yönetimi"
[G13]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap "Sitemap"
[G14]: https://developers.google.com/search/docs/appearance/structured-data/organization "Organization yapılandırılmış veri"
[T1]: https://docs.astro.build/en/guides/on-demand-rendering/ "Astro rendering"
[T2]: https://faq.whatsapp.com/5913398998672934 "WhatsApp click to chat"
[T3]: https://web.dev/articles/vitals "Core Web Vitals"
[T4]: https://schema.org/Service "Schema.org Service"
[T5]: https://developers.openai.com/api/docs/bots "OpenAI botları"

---

**Belgenin sınırı:** Tasarım, gerçek sayfa metinleri ve uygulama/geçiş planı teslim edilmiştir. Canlı site değiştirilmedi; Search Console kurulmadı; domain/DNS/e-posta üzerinde işlem yapılmadı; gerçek WhatsApp hesabına mesaj gönderilmedi. Tam trafik/backlink analizi ve canlı site kabul testleri, gerekli erişim ve uygulama tamamlandığında yapılacak ayrı işlerdir.



---

# Ek Strateji — Türkçe ve Çince Aramalarda Nitelikli Görünürlük

**Ek sürüm:** 1.1 — 15 Eylül 2026  
**Bağlı ana belge:** `cince-tercuman-yeni-site-tasarim-ve-icerik.md`  
**Belge türü:** Güncel web araştırmasına dayanan ek uygulama kararları. Siteye doğrudan yayımlanacak bir makale değildir.

> Ana belgenin 1–29. bölümleri korunur. Bu ek; yeni hizmet eklemez, alan adını değiştirmez ve eski URL’lerin topluca silinmesine izin vermez. Yeni başlık alternatifleri tarihçe olarak eklenmiştir; uygulamada eski ve yeni alternatifler aynı sayfaya iki ayrı H1 olarak yerleştirilmez. Resmî platform davranışlarında bu ekte tarih ve kaynakla belirtilen güncel bilgiler esas alınır.

## 30. Sonuç: Daha çok sayfa değil, daha iyi hedeflenmiş müşteri edinimi

Hedef bütün kelimelerde koşulsuz birinci olmak değildir; hizmet verilebilen ihtiyaçlarda daha sık görünmek ve daha fazla nitelikli günlük tercümanlık talebi almaktır. Organik sonuçlar, harita sonuçları ve AI cevaplarında kaynak gösterilme farklı ölçülür. Hiçbir sıralama veya belirli bir tarihte sonuç garantisi verilmez.

**Mevcut dosyada zaten var:** İki dilde sayfalar, dört hizmet, günlük fiyatlandırma, WhatsApp akışı, hizmet SSS’leri, şehir sayfaları, URL geçiş planı, canonical/hreflang, şema, bot erişimi ve temel ölçüm.

**Bu ekte geliştirilenler:** İstanbul ilçelerini kapsayan yerel içerik; Çinli teknik ekiplerin gerçek arama dili; mevcut Çince sayfaların daha belirgin konumlandırılması; Google dışındaki keşif ve iletişim kanalları; yeni resmî AI ölçüm araçları; kanıta dayalı dış görünürlük; genişleme için yayın koşulları.

### 30.1 Kaynakların nasıl kullanıldığı

- **Ana belgeden gelen kararlar:** Hizmet kapsamı, şehirler, günlük model, masraflar, telefon/e-posta, WhatsApp tercihi, ilk sürümde panel bulunmaması ve Türkçe/Çince dil yapısı.
- **Yeni web araştırması:** Seçilmiş rakip sayfaları veya arama motorunda erişilebilen sayfa alıntıları ile Google, Microsoft/Bing, OpenAI, IndexNow ve Baidu’nun resmî kaynakları.
- **Strateji önerisi:** Aşağıdaki sayfa öncelikleri, metinler, ilçe politikası, iş akışı ve test tasarımı bu işletmeye yönelik önerilerdir; kanıtlanmış sıralama faktörü veya ölçülmüş arama hacmi değildir.
- **Yapılmayan ölçümler:** Konuma göre kişiselleştirilmiş Google sıralama takibi, Çin ana karasındaki Baidu sonuç testi, canlı mobil performans testi, tam backlink analizi, Search Console/Bing hesap incelemesi ve gerçek AI önerilme testi.

### 30.2 Ana belgeye eklenecekler tablosu

| Ana belgedeki yer | Mevcut durum | Bu ekle yapılacak iş | Öncelik |
|---|---|---|---|
| 17.1 İstanbul | Kısa kurulum odaklı şehir sayfası | İlçe kapsamı, gerçek çalışma noktası ve yerel SSS eklemek | P1 |
| 6 Çince ana sayfa | Türkiye/Çin hizmetleri ve teknik ekip mesajı var | Çinli üretici için daha açık arama dili ve hizmete geçiş kartı | P1 |
| 9 Makine kurulumu | İki dilde hizmet anlatımı var | Çince sorgu ailesi ve hazırlık bilgisini güçlendirmek | P1 |
| 11–12 Fuar/Kanton | Ayrı hizmet ve Kanton sayfası var | Fuar tercümanı aramalarını aynı sayfalarda konsolide etmek | P1 |
| 16 İletişim | WhatsApp ve e-posta var | Çince kanalda kopyalanabilir iletişim; doğrulanırsa WeChat | P1/P2 |
| 21.6 Dış kayıtlar | Eski adres ve backlink kontrolü tanımlı | İki dilli kayıt doğruluğu ve kaynak kazanımı takip tablosu | P1 |
| 22 İki dilli SEO | Canonical/hreflang ve sorgu eşlemesi var | Dil ile hizmet ülkesini ayıran ayrıntılı niyet matrisi | P1 |
| 23 AI/bot erişimi | Temel kurallar var | Güncel Search generative AI ayar kontrolü ve doğrulanmış bot testi | P0 |
| 24 Ölçüm | GSC ve örnek AI soruları var | Yeni Google/Bing AI raporları; segment bazlı takip | P0/P1 |
| 20 Teknik yapı | Yönetim panelsiz site | Yayın sonrası IndexNow bildirim iş adımı | P2 |
| 24.5 Genişleme | Özgün içerik koşulu var | İlçe/şehir/fuar/konu için somut yayın karar ağacı | P1 |

## 31. Rakip araştırmasındaki gözlemler

**Bu tablo bir Google sıralama tablosu değildir.** 15 Eylül 2026 tarihli örnek aramalar ve erişilebilen metinler üzerinden hazırlanmıştır. Rakibin sayfada bir özellik kullanması, o özellik sayesinde sıralandığının kanıtı değildir. Rakiplerin kendi referansları, ekip sayıları veya hizmet iddiaları bağımsız olarak doğrulanmamıştır.

| Örnek | Erişilebilen içerikte görülen | Bizim için çıkarım | Kaynak |
|---|---|---|---|
| Armut — Kadıköy Çince çevirmen | İlçe odaklı hizmet veren listesi | Rakip yalnızca tercüme büroları değil; yerel listeleme platformları da var. Gerçek hizmet ihtiyacını daha net anlatmak gerekir. | [E01] |
| Kutup Tercüme — İstanbul Çince çevirmen | İstanbul sayfasında çok sayıda ilçe adı geçiyor | İlçe kapsamını anlaşılır anlat; fakat uzun tekrar listesini başarılı taktik varsayarak kopyalama. | [E02] |
| İmge Tercüme — Kadıköy | İlçe sayfasında şirket eğitimine Çince tercüman alt başlığı var | Konum + somut ihtiyaç birleşimi incelenmeye değer. Biz yalnızca kurulumla bağlantılı açıklamaları kapsayacağız. | [E03] |
| trfanyi — İstanbul Çince sayfası | Çince İstanbul başlığı ve ticari dil desteği anlatımı | “Rakiplerde Çince yok” varsayımı doğru değil. Çince metin, gerçek müşteri senaryosunu daha iyi yanıtlamalı. | [E04] |
| cincetercumesi.com — /CN/ | Çince hizmet açıklamaları, süreç, şehir/tarih talebi ve WhatsApp | İki dillilik tek başına farklılaşma değil; kapsam ve saha hazırlığıyla ayrışmak gerekir. | [E05] |
| cincedanismanlik.com | Kurulum/teknik destek ile daha geniş danışmanlık hizmetleri birlikte sunuluyor | Geniş hizmet paketini kopyalamadan, tercümanın teknik uygulayıcı olmadığını açıklaştırmak iyi bir konumlandırma tercihi. | [E06] |
| cintercumanlik.com | Fuar, tercümanlık ve daha geniş ticari/gezi hizmetleri bir arada | Fuar sayfamız ziyaret sırasında dil desteğini açık anlatsın; tur veya ithalat organizasyonu vaadi eklenmesin. | [E07] |

**Erişim sınırı:** Bazı rakip sayfaları doğrudan açılırken doğrulama ekranı/hata verdi. Bu durumlarda yalnızca arama sonucunda erişilebilen metin kullanıldı; mobil tasarım, tüm sayfa içeriği veya teknik altyapı incelenmiş sayılmadı.

Mevcut sitenin `/cince-tercuman-istanbul/` adresinde de bu araştırma aracına doğrulama ekranı gösterildi. Bu, Googlebot’un engellendiği veya tüm ziyaretçilerin erişemediği anlamına gelmez; yayın öncesi gerçek doğrulanmış bot istekleri ve sunucu kayıtlarıyla kontrol edilecek bir işarettir. [E08]

**Stratejik tercih:** Geniş bir çeviri bürosunu taklit etmek yerine “Türkiye’de Çinli teknik ekiplerle kurulum iletişimi; Çin’de fabrika ve fuar ziyaretlerinde Türkçe–Çince sözlü iletişim” alanına odaklan.

## 32. Üç ana müşteri yolculuğu ve sorgu haritası

### 32.1 Dil, milliyet ve çalışma ülkesi farklı alanlardır

Çince sayfa her zaman Çin’de yapılacak bir iş anlamına gelmez. Türkçe sayfa da yalnızca Türkiye’de yapılacak bir iş anlamına gelmez.

| Kullanıcı ihtiyacı | Sayfa dili | Çalışma ülkesi | Öncelikli içerik |
|---|---|---|---|
| Türkiye’deki işletme, Çinli kurulum ekibi için tercüman arıyor | Türkçe | Türkiye | Kurulum sayfası + uygun şehir sayfası |
| Türk müşteri, Çin’de fuar/fabrika ziyaretine gidiyor | Türkçe | Çin | Çin, fabrika, fuar/Kanton ve şehir sayfaları |
| Çinli üretici, Türkiye’ye teknik ekip gönderiyor | Çince | Türkiye | Çince kurulum, İstanbul ve ilgili şehir sayfaları |
| Çin’deki firma, Türk müşterinin fabrika/fuar ziyaretine tercüman istiyor | Çince | Çin | Mevcut fabrika/fuar sayfalarının Çince sürümleri |

Dördüncü yolculuk mevcut hizmetin karşı taraftan talep edilmesidir; yeni bir danışmanlık veya organizasyon hizmeti değildir.

### 32.2 Sorgu aileleri → mevcut sayfa

Aşağıdaki kelimeler araştırma ve içerik planlaması için **aday sorgulardır**. Aylık hacim, rekabet puanı veya tahmini trafik hesaplanmadı. “Öncelik” iş modeline yakınlığı ifade eder.

| Sorgu ailesi | Kullanıcı niyeti | Birincil sayfa | Karar |
|---|---|---|---|
| Çince tercüman, Çince Türkçe tercüman | Genel hizmet keşfi | `/` | Ana sayfa ana hedef; /cince-tercuman/ hizmet seçimi rolünde kalır |
| Çince teknik tercüman, makine/makina kurulum tercümanı | Türkiye’de kurulum iletişimi | `/makine-kurulumu-cince-tercuman/` | Yeni eşanlamlı URL açma |
| Çince tercüman İstanbul, İstanbul Çince çevirmen | İstanbul’da uygun hizmet | `/cince-tercuman-istanbul/` | Mevcut adresi genişlet |
| Çince tercüman Kadıköy, Beşiktaş, Üsküdar | İlçe/erişim odaklı talep | Aynı İstanbul sayfasının ilgili bölümü | İlk aşamada üç ayrı URL açma |
| Anadolu Yakası / Avrupa Yakası Çince tercüman | Şehir içi hizmet planlama | Aynı İstanbul sayfası | Yakaları anlamlı alt başlıklarda ele al |
| Gebze / Kocaeli Çince teknik tercüman | Tesis odaklı kurulum | Mevcut Gebze/Kocaeli sayfaları | İstanbul ile ilişkilendir; birbirinin kopyası yapma |
| Çin’de tercüman, Çin’de Türkçe tercüman | Çin’de sözlü dil desteği | `/cinde-tercuman/` | Genel Çin hizmeti |
| Çin fuar tercümanı, fuar gezisi için Çince tercüman | Çin’de fuar ziyaretinde dil desteği | `/cinde-fuar-tercumani/` | Gezi/tur organizasyonu vaadi verme |
| Kanton / Canton Fair / Guangzhou fuar tercümanı | Belirli fuar programı | `/kanton-fuari-tercuman/` | Guangzhou genel şehir sayfasından bağla |
| Çin fabrika ziyareti tercüman | Belirlenen fabrikada görüşme | `/cinde-fabrika-ziyareti-tercuman/` | Denetim, tedarikçi bulma veya ürün araştırması vaadi verme |
| Çince tercüman günlük fiyat, günlük ücret | Bütçe/çalışma koşulu | `/cince-tercuman-fiyatlari/` | Fiyat bilinmiyorsa rakam üretme |
| 土耳其中文口译、土耳其中文翻译 | Türkiye’de insan tercüman arayan Çince kullanıcı | `/zh/` | Görünür metinde hizmeti sözlü tercümanlık olarak netleştir |
| 伊斯坦布尔中文口译、伊斯坦布尔中文翻译 | İstanbul’da Çince/Türkçe iletişim | `/zh/istanbul-interpreter/` | Kurulum kapsamını ilk ekranda belirt |
| 土耳其设备安装翻译、土耳其设备调试口译 | Türkiye’de kurulum/devreye alma iletişimi | `/zh/machine-installation-interpreter/` | En yüksek iş uyumlu Çince aday grup |
| 中国工程师赴土耳其口译、土耳其工厂现场口译 | Çinli teknik ekip için sahada tercüman | Aynı Çince kurulum sayfası | Ayrı, benzer satış sayfası açma |
| 伊斯坦布尔口译一天多少钱、中土口译日费 | Günlük ücret öğrenme | `/zh/daily-rates/` | Şehir ve hizmete göre talep yönlendirmesi |
| 广交会土耳其语翻译、广州展会土耳其语口译 | Türk müşterilerle fuar görüşmesi | `/zh/canton-fair-interpreter/` | Gerçek fuar kapsamıyla uyumlu Çince karşılık |
| 中国工厂接待土耳其客户口译 | Fabrikadaki Türk müşteri ziyaretinde iletişim | `/zh/factory-visit-interpreter/` | Mevcut hizmete karşı taraftan giriş |

### 32.3 Hangi sorguları büyüme hedefi yapmayacağız?

Yazılı belge çevirisi, noter işlemleri, pasaport/sözleşme çevirisi, ithalat organizasyonu ve ürün bulma için satış sayfası eklenmez. “土耳其语翻译” gibi geniş bir sorgu, insan tercüman dışında yazılım veya farklı çeviri ihtiyaçlarını da ifade edebilir; aday kelimeyi otomatik olarak satış niyeti kabul etme. Sayfa metinlerinde `口译`, `现场`, `设备安装`, `按天` gibi gerçek kapsamı açıklayan sözcükler doğal bağlamda kullanılır.

**Hizmet sınırı:** Türkiye’deki genel fuar eşliği, tur rehberliği veya bağımsız iş toplantısı hizmeti yeni kapsam olarak onaylanmadı. Bu niyetlere yönelik yeni satış sayfası bu ek kapsamında yayımlanmaz. İstanbul’daki ilçe içeriği de mevcut makine kurulumu tercümanlığına bağlı kalır.

## 33. İstanbul, Kadıköy, Beşiktaş ve Üsküdar stratejisi

### 33.1 İlk aşama: Bir güçlü İstanbul sayfası

`/cince-tercuman-istanbul/` korunur. Aşağıdaki içerik, ana belgedeki yerel açıklamadan sonra eklenir. Mevcut kurulum kapsamı ve günlük ücret notu kalır.

Google’ın güncel rehberi her sorgu varyasyonu için ayrı içerik üretmeyi önermez; spam politikasında birbirine çok benzeyen, belirli bölge aramalarını hedefleyen geçiş sayfaları da ele alınır. Bu nedenle ilçe sayfası açmak otomatik olarak yanlış değildir; değer üretmeyen kopya üretimi yanlış yaklaşımdır. [E09][E10]

#### Ek bölüm TR — yayımlanabilir metin

**H2: İstanbul’un iki yakasında Çince tercüman ihtiyacınızı planlayalım**

“Kadıköy, Üsküdar, Beşiktaş ve İstanbul’un diğer ilçelerindeki makine kurulumu programları için Çince–Türkçe sözlü tercümanlık uygunluğu sorabilirsiniz. Şirketinizin bulunduğu ilçe ile çalışmanın yapılacağı tesis farklıysa, talepte öncelikle gerçek çalışma noktasını belirtin. Tercüman planlaması tarih, teknik konu ve günlük ulaşım ihtiyacına göre netleştirilir.”

**H3: Kadıköy, Üsküdar ve Anadolu Yakası**

“Firmanız veya teknik ekibin konaklama noktası Anadolu Yakası’ndaysa, kurulumun aynı bölgede mi yoksa başka bir tesiste mi yapılacağını paylaşın. Gün içinde başka bir noktaya geçilecekse başlangıç ve sonraki çalışma noktalarını ayrı belirtin. Bu bilgi, günlük tercümanlık ve ulaşım kalemlerinin doğru değerlendirilmesini sağlar.”

**H3: Beşiktaş ve Avrupa Yakası**

“Şirket adresiniz veya buluşma noktanız Beşiktaş ya da Avrupa Yakası’nda olabilir; tercüman talebinde makinenin kurulacağı gerçek tesis konumunu esas alırız. İki yaka arasında geçiş veya birden fazla çalışma noktası bulunuyorsa bunu önceden belirtin.”

**Kısa açıklama:** “İlçe adları hizmet taleplerinin değerlendirilebildiği bölgeleri anlatır; bu ilçelerde ofis veya sürekli hazır tercüman bulunduğu anlamına gelmez.”

**CTA:** “İlçenizi ve tarihlerinizi paylaşın”

**Ücret notu:** “Tercümanlık günlük ücretlendirilir. Şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.”

#### Ek bölüm ZH — yayımlanabilir metin

**H2: 伊斯坦布尔不同区域的现场口译如何安排？**

“如果设备安装地点位于 Kadıköy、Üsküdar、Beşiktaş 或伊斯坦布尔其他区域，可提供具体日期、设备类型和实际工作地点，咨询中文与土耳其语现场口译。公司地址、住宿地点与安装工厂不在同一处时，请分别注明。”

**H3: 亚洲侧与欧洲侧的工作地点**

“请说明技术团队的集合地点、设备安装工厂以及当天是否需要前往其他地点。安排口译时以实际工作地点为准，而不是只参考公司或酒店所在区域。译员档期及交通需求需结合具体行程确认。”

**Açıklama:** “上述区域表示可咨询的服务地点，不代表我们在每个区域设有办公室或随时有译员在场。”

**CTA:** “提供区域与日期，咨询档期”

**Ücret notu:** “口译按天计费，市内交通、城际交通、住宿及餐饮费用另计。”

#### İstanbul için ek SSS

**Kadıköy, Üsküdar veya Beşiktaş için ayrı bir ofise mi başvurmalıyım?**  
“Hayır. Tek iletişim kanalımızdan ilçenizi, gerçek çalışma noktasını ve tarihlerinizi paylaşabilirsiniz. Uygunluk bu bilgilerle değerlendirilir.”

**公司在伊斯坦布尔，但安装工厂在盖布泽，应该填写哪个城市？**  
“请填写实际安装工厂所在城市，并在补充说明中注明伊斯坦布尔的集合或住宿地点。口译及交通安排将根据实际工作行程确认。”

**İstanbul’da konaklayan Çinli ekip için hangi adresi yazmalıyım?**  
“Çalışma yapılacak tesisin konumunu yazın. Varsa ayrı buluşma ve konaklama noktalarını ayrıca belirtin; yalnızca otel adresi çalışma konumunu anlatmayabilir.”

Ana belgedeki aynı soruyu karşılayan SSS varsa yeni bir kopyasını ekleme; ilgili cevabı bu ayrıntılarla genişlet. Bilgi korunur, ziyaretçiye gereksiz tekrar gösterilmez.

### 33.2 İlçe sayfası ne zaman açılır?

Aşağıdaki koşullar birlikte değerlendirilecek:

1. İlgili bölgede sunulan kapsam gerçekten karşılanabiliyor.
2. Arama raporları, müşteri talepleri veya somut araştırma ayrı bir ihtiyacı gösteriyor.
3. İstanbul sayfasında bulunmayan, karar vermeye yardımcı gerçek yerel bilgi mevcut.
4. Sayfa kendi başına anlaşılır ve faydalı; yalnızca başka yere yönlendiren bir ara kapı değil.
5. Tek fark ilçe adı değil; yerel çalışma düzeni, ihtiyaç ve açıklamalar gerçekten farklı.

Bu koşullar yoksa ayrı URL yerine İstanbul sayfasında bölüm kullan. Bölüm bağlantıları (`#ilceler` gibi) gezinme içindir; ayrı indekslenen ilçe sayfası sayılmaz.

**Yayın koşulu olarak kullanılmayacaklar:** “En az 800 kelime”, “%30 özgün metin”, “her ilçeye beş soru” gibi uydurma SEO eşikleri. Aynı WhatsApp’a bağlanmak tek başına problem değildir; sorun, faydasız ve büyük ölçüde aynı sayfalar üretmektir.

## 34. Çince içerikte konumlandırmayı belirginleştirme

### 34.1 Yeni dil/şehir kopyaları açma; mevcut Çince URL’leri güçlendir

Ana belgede `/zh/`, `/zh/istanbul-interpreter/` ve `/zh/machine-installation-interpreter/` zaten var. Aynı amaçla `/zh/istanbul-chinese-translator/` gibi ikinci URL üretilmez.

Aşağıdaki title/H1 örnekleri mevcut önerilere **alternatiftir**. Geliştirici tek bir seçimi uygular; eski metin ana belgede tarihçe olarak durur. Farklı title seçmek sıralama garantisi değildir.

| Sayfa | Daha açık title alternatifi | H1 alternatifi |
|---|---|---|
| `/zh/` | 土耳其中文口译｜设备安装与中国工厂、展会参访 | 土耳其与中国的中文—土耳其语现场口译 |
| `/zh/istanbul-interpreter/` | 伊斯坦布尔中文口译｜设备安装与调试现场翻译 | 伊斯坦布尔中文—土耳其语设备安装口译 |
| `/zh/machine-installation-interpreter/` | 土耳其设备安装翻译｜中国技术团队现场口译 | 中国技术团队赴土耳其安装设备，需要现场口译？ |

Google’a dili anlatmak yalnızca `lang` etiketi eklemek değildir: Çince sayfanın ana içeriği, menüsü ve teklif akışı da Çince olmalı. Dil sürümleri ayrı URL’lerde ve kullanıcı tarafından değiştirilebilir kalır. [E11]

### 34.2 Çince ana sayfaya ek müşteri giriş kartı

**Başlık:** 中国技术团队赴土耳其安装设备？

**Metin:** “请提供设备或产线类型、土耳其工厂的实际地点、计划开始和结束日期，以及需要口译的安装、调试或使用说明环节。我们将结合技术内容与译员档期确认安排。”

**CTA:** 查看设备安装口译 → `/zh/machine-installation-interpreter/`

**İkincil bağlantı:** 查看伊斯坦布尔服务安排 → `/zh/istanbul-interpreter/`

**Ücret açıklaması:** “口译按天安排。市内及城际交通、住宿、餐饮费用另计。提交需求不代表预约已确认。”

Bu kart yeni bir hizmet değildir; zaten sunulan kurulum tercümanlığının Çinli üretici tarafından bulunmasını kolaylaştırır.

### 34.3 Çince kurulum sayfasına ek soru-cevap

**我们是中国设备厂家，可以直接用中文咨询吗？**  
“可以。请用中文说明设备类型、土耳其现场城市、工作日期及需要沟通的技术环节，咨询译员档期与日费。首次咨询无需上传保密技术资料。”

**需要为每个技术环节单独预约吗？**  
“请把同一安装行程中的安装说明、调试沟通及相关使用说明一并列出，再按具体工作日期和技术内容确认口译安排。不会在不了解行程时承诺所有环节都适用。”

**能保证一直安排同一位译员吗？**  
“连续多日的安排需要结合完整日期与译员档期确认。咨询时请说明是否希望同一位译员连续配合；确认前不作保证。”

**如果工厂实际地点与集合地点不同，应该怎么说明？**  
“请分别填写安装工厂与集合地点。如有跨城或同日多地点工作，也请列明，方便分别核实口译与交通安排。”

SSS’ler görünür HTML içinde, konu başlığının altında bulunur. Çok sayıda benzer soru sırf anahtar kelime geçirmek için eklenmez.

### 34.4 Eşlenik sayfa kuralı

TR ve ZH sürümleri aynı hizmeti ve aynı çalışma koşullarını anlatıyorsa sunum sırası, örnekleri ve müşteri hitabı dile göre uyarlanabilir. Bir rehber yalnızca Çinli üreticiye özel bambaşka bir içerikse, ilgisiz bir Türkçe sayfayı `hreflang` karşılığı yapma. Eşlenik gerçekten üretildiğinde bağla. `zh-Hans` dil/script seçimi Çin ana karası dışındaki basitleştirilmiş Çince okuyucuları dışlayan bir ülke hedefleme şartına dönüştürülmez. [E12]

## 35. Fuar ve fabrika aramalarını kapsama sadık büyütme

### 35.1 Fuar gezisi araması: Turu değil, ziyaret sırasındaki iletişimi anlat

`/cinde-fuar-tercumani/` içine şu alt başlık eklenebilir:

**H2: Fuar gezinizde Çince–Türkçe iletişim desteği**

“Çin’de ziyaret edeceğiniz fuarı ve görüşme hedeflerinizi belirlediyseniz, fuar süresince stant ve firma görüşmelerindeki sözlü iletişim için tercüman uygunluğu sorabilirsiniz. Fuarın adını, çalışma günlerini, ürün grubunu ve varsa planlanmış görüşmelerinizi paylaşın. Tercümanlık günlük değerlendirilir; ulaşım, konaklama ve yeme-içme ayrıca hesaplanır.”

**Ek soru:** “Fuarın ardından daha önce belirlediğim fabrikaya da gideceğim; bunu aynı talepte yazabilir miyim?”

**Cevap:** “Evet. Fuar ve fabrika çalışma günlerini, şehirleri ve konumları ayrı belirtin. Her günün programı ve tercüman uygunluğu birlikte değerlendirilir; aynı tercümanın bütün günlerde görev alacağı önceden garanti edilmez.”

Bu açıklama, fuar gezisi ifadesini karşılar; tur, otel, bilet veya transfer satıldığını ima etmez.

### 35.2 Kanton ve diğer fuarlar

Kanton Fuarı için ana belgede ayrı sayfa bulunduğundan yeni benzer URL açılmaz. Canton Fair / Kanton Fuarı / 广交会 adları sayfanın diline uygun ve doğal şekilde ilişkilendirilir.

Başka bir fuar için ayrı hizmet sayfası ancak gerçek hizmet verilebilirlik, fuara özgü çalışma ihtiyacı ve güncel organizatör bilgisi bulunduğunda açılır. Aynı metni fuar adıyla çoğaltma. Etkinlik tarihi/konumu eklenecekse resmî organizatör kaynağı o yayında yeniden kontrol edilir.

Tercüman hizmeti sayfasını organizatörün etkinlik sayfasıymış gibi işaretleme. Sadece `Event` şemasıyla dikkat çekmek için fuarın organizatörü olduğunuzu ima etme; ana belgedeki Service/WebPage yaklaşımı korunur.

### 35.3 Sektörler

Ambalaj, tekstil, plastik, otomasyon gibi alanlar ancak gerçekten karşılanabilen teknik konu örnekleri olarak kullanılabilir. İlk sürümde doğrulanmamış “her sektörde uzman” sayfaları açılmaz. İleride sektör sayfası, yalnızca o sektöre özgü gerçek hazırlık, terminoloji yaklaşımı ve saha soruları varsa değerlendirilir.

## 36. Çinli müşteriye erişim: Dil + keşif kanalı + kullanılabilir iletişim

### 36.1 Aynı alan adı korunur

Sırf Çince görünürlük için başka domain veya paralel kopya site kurulmaz. İlk aşamada mevcut domain altında `/zh/` ile ilerlenir. Dil seçimi yalnızca IP veya tarayıcı diline göre otomatik yönlendirmeye bağlanmaz. [E11]

Çin ana karasında arayan bir kullanıcı ile Türkiye’den Çince arayan kullanıcı aynı erişim koşullarında varsayılmaz. Aşağıdaki plan bir test ve uygulama önerisidir; kullanıcının nereden hangi motoru kullandığına ilişkin ölçülmüş dağılım değildir.

| Kanal | Yapılacak | Bu belgede yapılmış olmayan |
|---|---|---|
| Google | TR ve ZH sayfaları GSC’de ayrı segmentlerle izle | Site hesabı kurulmadı/incelenmedi |
| Bing | Alan adı doğrulama, sitemap, URL kontrolü, AI Performance | Hesapta erişim ve rapor verisi doğrulanmadı |
| Baidu | Resmî Search Resource Platform’da hesap/site doğrulama ve erişilebilen gönderim araçlarını incele | Çin ana karası SERP testi ve site gönderimi yapılmadı |
| Doğrudan Çinli firma paylaşımı | Çince hizmet sayfası ve anlaşılır talep metni kullan | Mesaj veya ticari ileti gönderilmedi |
| WeChat / 微信 | Hesap kullanıcı tarafından sağlanıp doğrulanırsa QR ve kimlik kopyalama seçeneği | Gerçek hesap/QR verilmedi; aktif buton üretilmedi |

Baidu’nun resmî arama kaynak platformu ve bağlantı gönderim aracı araştırmada görüldü. Fakat bu işletmenin hesabına erişilmediği için kullanılabilir araçlar, doğrulama uygunluğu ve kabul koşulları kesinleşmiş sayılmaz. Otomatik kayıt, garantili Baidu indekslenmesi veya sabit süre vaadi verilmez. [E13]

### 36.2 Çince iletişim akışı

Ana belgedeki WhatsApp numarası değişmez. Çince sayfalarda e-posta footer’a saklanmaz. E-posta adresi, telefon ve hazırlanan talep metni kopyalanabilir olur; yalnızca `mailto:` bağlantısına bağımlı kalınmaz.

**Doğrulanmış WeChat hesabı eklenirse:**

- Masaüstünde QR ve açık hesap kimliği birlikte gösterilir.
- Mobilde QR’yi açma ve hesap kimliğini kopyalama seçeneği bulunur.
- Yanlış kişiye giden veya henüz doğrulanmamış kimlik yayımlanmaz.
- Aktif olmayan WeChat düğmesi yer tutucu olarak gösterilmez.
- Bu ek, WeChat kurulduğu veya her Çinli kullanıcının yalnızca bu kanalı tercih ettiği iddiasını taşımaz.

**Çince alternatif CTA:** 复制需求内容 / 复制邮箱地址 / 通过邮件咨询

### 36.3 Çin’den gerçek ağ kabul testi

Önerilen örnekleme: Çin’de iki farklı gerçek ağ ve Türkiye’de bir mobil ağ. Bu sayı bir SEO standardı değil, ilk sürüm için pratik test tasarımıdır.

Kontrol edilen akış: Çince ana sayfa → kurulum/İstanbul → talep alanı → mesaj önizleme → e-posta kopyalama → seçilen iletişim kanalı.

CSS, temel metin, menü ve iletişim bilgileri tek bir üçüncü taraf font, video, harita veya CAPTCHA açılmadığında kaybolmamalı. Kullanıcıya görünür hata ve alternatif yol bulunmalı. İlk sürümün basit statik yapısı korunur; yalnızca bu nedenle yeni yönetim paneli veya ağır bir uygulama kurulmaz.

Çin’de barındırma, `.cn` alan adı veya belirli CDN “sıralama şartı” olarak sunulmaz. Böyle bir altyapı kararı gündeme gelirse erişim testleri, maliyet ve ilgili resmî koşullar ayrıca değerlendirilir; mevcut trafik ve domain gereksiz taşınmaz.

## 37. Rakiplerden ayrışacak gerçek kanıt ve dış görünürlük

### 37.1 İlk sürümde bulunmayan kanıtı uydurma

Müşteri logosu, gerçek saha fotoğrafı veya yayımlanabilir müşteri yorumu şu anda yok. Bu nedenle “en büyük ekip”, başarı sayacı, sahte Google yorumu ve temsili görseli gerçek proje gibi sunma uygulamaları yapılmaz.

Google’ın içerik rehberi özgün bilgi, kaynak açıklığı ve deneyimin anlaşılabilir olmasını vurgular. Bu, belirli bir biyografi veya kişi adının otomatik sıralama sağlayacağı anlamına gelmez. Kişisel isim kullanmama tercihi korunabilir. [E14]

### 37.2 Fotoğraf olmadan başlanabilecek özgün içerik

Aşağıdaki üç çalışma, genel “Çince neden önemlidir?” blog yazılarından önce değerlendirilsin. Ana belgede aynı amaca hizmet eden rehber varsa önce o rehberin içine eklenir; kopya URL açılmaz.

**A. Kurulum öncesi iki dilli saha bilgi şablonu**

```text
Çalışma ülkesi / 工作国家:
Tesisin bulunduğu şehir ve bölge / 工厂所在城市及区域:
Planlanan çalışma günleri / 计划工作日期:
Makine veya üretim hattının türü / 设备或产线类型:
İletişim kurulacak teknik konular / 需要沟通的技术内容:
Kurulum / devreye alma / kullanım açıklaması / 安装 / 调试 / 使用说明:
Birden fazla çalışma noktası var mı? / 是否有多个工作地点？
Buluşma noktası tesisten farklı mı? / 集合地点是否与工厂不同？
Günlük çalışma saatleri biliniyorsa / 如已确定每日工作时段:
```

Bu, talep hazırlama aracıdır; yazılı belge tercümesi satışı değildir. Gizli teknik dosya yüklemeyi zorunlu kılmaz.

**B. Günlük çalışma ve gider kalemleri karşılaştırma tablosu**

Günlük tercümanlık; şehir içi ulaşım; şehir dışı ulaşım; konaklama; yeme-içme ayrı gösterilir. Bedel bilinmiyorsa rakam yazılmaz. Masrafları “her şey dahil” gibi pazarlama cümlelerinin arkasına saklama.

**C. Fuar + fabrika görüşme programı hazırlama şablonu**

Fuar adı, şehir, günler, görüşülecek ürün grubu, belirlenen fabrika noktaları ve hangi günlerde tercüman gerektiğini ayrı alanlarda toplar. Hazır tedarikçi listesi veya satın alma danışmanlığına dönüşmez.

### 37.3 Gerçek iş tamamlandıkça kanıt üretimi

İzinli ve doğrulanmış bilgi oluştuğunda anonim çalışma notu hazırlanabilir: ihtiyaç, konumun paylaşılabilir düzeyi, teknik iletişim kapsamı, hazırlık, öğrenilen nokta. Ticari sır, kişi verisi ve teknik güvenlik detayları yayımlanmaz. Anonim olmak uydurulabilir olmak değildir; içeride dayanak bulunur.

Böyle bir içerik henüz yoksa boş “başarı hikâyeleri” sayfası yayımlama. Gelecekte ekleme olanağı dosya modelinde tutulabilir.

### 37.4 Dış kaynak ve bağlantı planı

Önerilen temaslar: gerçek ticari iş ortakları; uygun üyelik mevcutsa meslek/ticaret kuruluşu profili; ilgili sektör yayınına özgün saha hazırlık yazısı; gerçekten hizmet veriliyorsa ilgili hizmet sağlayıcı dizini.

Fuarify’daki gerçekten ilgili bir fuar içeriğinden tercüman hazırlık sayfasına açıklayıcı bağlantı verilmesi de değerlendirilebilir. İlişkiyi gizleyerek bağımsız tavsiye gibi sunma; bütün sitelere aynı metinle link yığını koyma. Bu öneri Fuarify’a içerik yayımlandığı anlamına gelmez.

Amaç bağlantı sayısı hedeflemek değil, doğru bilgiyi ilgili yerde bulunabilir kılmaktır. Ücretli içerik varsa reklam niteliği açık tutulur ve uygun bağlantı işaretlemesi kullanılır. Sıralama manipülasyonu için satın alınmış bağlantı paketleri, sahte öneriler ve otomatik forum cevapları kullanılmaz. [E10]

**Takip alanları:** kaynak sayfa, ilişki türü, bağlantı verilen hizmet URL’si, dil, görünen isim, telefon/e-posta, eski adres durumu, doğrulama tarihi, yapılacak düzeltme, sorumlu.

## 38. Organik sonuçlar ile Haritalar ayrı yönetilecek

İstanbul/Kadıköy aramasında web sitesi sonucu ile Google Haritalar/yerel işletme sonucu aynı mekanizma değildir. Google yerel sonuçlarda ilgi, mesafe ve tanınırlık/popülerlik faktörlerini açıklar. İlçe ismi eklemek mesafe unsurunu ortadan kaldırmaz. [E15]

Eski Taksim adresi geri eklenmez. Müşterinin adresinde çalışan uygun işletmeler için hizmet bölgesi profili değerlendirilebilir; gerçek faaliyet noktası doğrulanır ve müşteriye açık olmayan adresin gösterimi Google kurallarına göre yapılır. İlçe başına sahte şube/profil açılmaz. Yalnızca tercüman ağı bulunması, her şehirde doğrulanabilir yerel şube bulunduğu anlamına gelmez. [E16]

**Uygulama sırası:** Var olan gerçek kayıtları bul → sahiplik/erişim durumunu doğrula → eski bilgi ve mükerrerliği değerlendir → uygun gerçek profili düzelt veya koşullar sağlanıyorsa oluştur. Bu belgede hesap açılmadı, kayıt değiştirilmedi ve yeni adres belirlenmedi.

## 39. Güncel SEO/GEO teknik ve platform ekleri

### 39.1 Google Search generative AI kontrolü — yeni kabul maddesi

Google’ın 31 Ağustos 2026 güncelleme notuna göre Search Console’da Search generative AI kontrolü dünya çapında kullanıma açıldı. Dahil etme varsayılan durum; bu, siteyi AI sonuçlarına katmak için herkesin yeni başvuru yapması gerektiği anlamına gelmez. [E17]

**İş:** Alan adı sahipliği sağlandıktan sonra Settings → Search generative AI bölümünde alan adı ve varsa `/zh/` alt mülkünün yanlışlıkla hariç tutulmadığını kontrol et. Alt mülkün üst mülkten ayar devralmasını da incele. Sadece kontrol edildiğini kaydet; müşteri tercihini izinsiz değiştirme.

Bu ayar sıradan organik sıralama artışı veya AI önerilme garantisi değildir. Ana belgedeki “özel AI şeması zorunlu değil” ilkesi geçerli kalır; buna güncel kontrol noktası eklenir.

### 39.2 Google’ın AI görünürlüğünü ayrı ölçme

Google, 3 Haziran 2026’da generative AI performans raporlarını duyurdu; duyuruya 31 Ağustos’ta dünya çapında açıldığı notu eklendi. Rapor AI özelliklerindeki gösterimleri ve sayfa/ülke/cihaz/tarih boyutlarını ele alıyor. [E18]

**İş:** Google AI raporu mevcutsa başlangıç dışa aktarımı al; TR/ZH URL’leri ayrı incele. Veri yetersizse “ölçülemiyor/yeterli veri yok” yaz. Bu raporu ChatGPT görünürlüğü, tüm AI motorlarında önerilme veya her sorguda sıra ölçümü gibi yorumlama. Sayfadaki açıklamaya göre raporun görünmemesinde yeterli gösterim bulunmaması da rol oynayabilir. [E19]

### 39.3 Bing Webmaster Tools ve AI Performance

Microsoft, AI Performance raporunu 10 Şubat 2026’da public preview olarak duyurdu. Kapsam Microsoft Copilot, Bing’in AI özetleri ve seçili partner deneyimleridir; kaynak gösterilme verisi klasik sıralama değildir. [E20]

16 Haziran 2026’daki resmî genişleme, Intents, Topics, Citation Share ve Compare özelliklerini önizlemeye ekliyor. Citation Share rakip domain listesini açmaz; tüm internette trafik payını veya işletme kalitesini göstermez. [E21]

**İş:** Alan adını yetkili hesapta doğrula; sitemap gönderimini kontrol et; mevcut AI Performance verisinde TR/ZH hizmet sayfalarının nasıl kullanıldığını ayrı not et. Boş raporu “AI sizi önermiyor” şeklinde kesin yorumlama. Hesap erişimi olmadan kuruldu/tamamlandı deme.

### 39.4 IndexNow — panel gerektirmeyen yayın adımı

IndexNow destekleyen arama motorlarına yeni, değişen veya kaldırılan URL bildirilebilir. Başarılı HTTP yanıtı bildirimin alınmasını gösterir; indekslenme veya üst sıra garantisi değildir. [E22][E23]

**Önerilen iş akışı:**

1. Yalnızca başarılı canlı dağıtım sonrasında içerik değişen URL’leri üret.
2. Bildirimi dağıtım işinden/sunucu tarafından yap; ziyaretçinin tarayıcısından her açılışta gönderme.
3. Doğrulama dosyası ve alan adı eşleşmesini test et.
4. Yanıtı kaydet; doğrulama ve hız sınırı hatalarında kontrollü tekrar uygula.
5. Sitemap’leri koru. IndexNow, Google’a garantili gönderim veya Baidu kaydı yerine geçiyormuş gibi anlatılmaz.
6. Aynı sayfanın yalnızca tarihin yenilenmesi gibi sahte değişikliklerini bildirme.

İlk sürümde yönetim paneli gerekmez. Bu yalnızca kod/deploy yapılandırmasıdır; bu belge API çağrısı yapmadı.

### 39.5 Bot erişimi ve koruma katmanı

Ana belgede belirtilen OAI-SearchBot ve GPTBot ayrımı korunur. OpenAI bunları arama ve eğitim için bağımsız tercihler olarak tanımlar. Arama görünürlüğü amacıyla doğrulanmış OAI-SearchBot erişimi kontrol edilir; eğitim izni otomatik olarak açılmaz. [E24]

Test kaydı: URL, gerçek HTTP durum kodu, içerik gövdesinde hizmet metni var mı, canonical, robots/meta başlıkları, güvenlik doğrulaması var mı, ilgili motorun resmî URL denetimi ve doğrulanmış bot logu.

Sadece kullanıcı aracını Googlebot yazıp yanıt almak, gerçek Googlebot’un durumu hakkında kesin kanıt değildir. Güvenlik katmanı tamamen kapatılmaz; üretici yönergeleri ve doğrulanmış istekler temel alınır.

### 39.6 SSS ve llms.txt konusunda ek bütçe harcama sınırı

SSS müşteri sorularını cevaplamak için kullanılır. Google’ın güncelleme kaydı FAQ zengin sonuçlarının 7 Mayıs 2026’dan itibaren gösterilmediğini belirtiyor. SSS’yi kaldırmak gerekmez; özel arama görünümü vaadi verilmez. [E25]

Google’ın güncel AI rehberi `llms.txt` veya özel AI Markdown dosyalarını Google görünürlüğü için kullanmadığını belirtiyor. Geliştiriciye verilen bu MD bir çalışma belgesidir; internete yüklenince özel SEO etkisi yaratmaz. [E09]

## 40. Ölçüm: Sıra değil, doğru ihtiyaçtan gelen talep

### 40.1 Başlangıç ölçümü tasarımı

Aşağıdaki alanlar için başlangıç kaydı açılır. Geçmiş veri yoksa geçmiş performans uydurulmaz. Search Console ve Bing Webmaster Tools, web sitesinin yönetim paneli değildir; ilk sürümün panelsiz olması bu araçları kullanmayı engellemez.

| Segment | Takip | İş sonucu |
|---|---|---|
| TR — Türkiye teknik | Kurulum, İstanbul/Gebze/Kocaeli ve uygun şehir sorguları | Nitelikli kurulum talebi ve teyitli gün |
| TR — Çin ziyaret | Çin/fabrika/fuar/Kanton ve şehir sorguları | Nitelikli ziyaret tercümanı talebi |
| ZH — Türkiye teknik | Çince kurulum ve İstanbul sorguları | Çinli teknik ekipten gelen uygun talep |
| ZH — Çin karşılama | Türk müşteri için fuar/fabrika tercümanı | Mevcut hizmete uygun ek talep |
| Eski/kaldırılan hizmetler | Kapsam dışı sorgu trafiği | Büyüme başarısızlığıyla karıştırılmadan ayrı izleme |

Ülke verisinden milliyet çıkarma; Çince sayfayı ziyaret eden herkesi Çinli, Türkçe sayfayı ziyaret eden herkesi Türk olarak sınıflandırma. Ölçüm sınıfları dil ve ihtiyaç temellidir.

### 40.2 Genişletilmiş sorgu gözlem seti

Bu sorgular **çalıştırılmış AI sonuçları veya doğrulanmış hacim listesi değildir**. Düzenli manuel değerlendirme için aday örneklerdir. Hizmet kapsamı dışında talep gösteren geniş sorgular dönüşüm ayrıştırması için tutulur.

| # | Sorgu | Birincil bağlam |
|---|---|---|
| 1 | Çince tercüman | TR genel |
| 2 | Çince sözlü tercüman | TR hizmet |
| 3 | Çince tercüman İstanbul | TR İstanbul |
| 4 | İstanbul Çince teknik tercüman | TR İstanbul teknik |
| 5 | Çince tercüman Kadıköy | TR yerel keşif |
| 6 | Çince tercüman Beşiktaş | TR yerel keşif |
| 7 | Çince tercüman Üsküdar | TR yerel keşif |
| 8 | Anadolu Yakası Çince tercüman | TR yerel keşif |
| 9 | Avrupa Yakası Çince tercüman | TR yerel keşif |
| 10 | makine kurulum tercümanı | TR kurulum |
| 11 | makina kurulumu Çince tercüman | TR kurulum varyantı |
| 12 | Gebze Çince teknik tercüman | TR teknik yerel |
| 13 | Kocaeli Çince tercüman | TR teknik yerel |
| 14 | Ankara makine kurulum Çince tercüman | TR teknik yerel |
| 15 | Çin’de Türkçe tercüman | TR Çin |
| 16 | Çin fuar tercümanı | TR fuar |
| 17 | fuar gezisi için Çince tercüman | TR ziyaret |
| 18 | Kanton Fuarı Türkçe tercüman | TR Kanton |
| 19 | Guangzhou fuar tercümanı | TR Guangzhou |
| 20 | Çin fabrika ziyareti tercüman | TR fabrika |
| 21 | Çince tercüman günlük fiyat | TR ücret |
| 22 | 土耳其中文口译 | ZH Türkiye |
| 23 | 土耳其中文翻译 | ZH geniş keşif |
| 24 | 伊斯坦布尔中文口译 | ZH İstanbul |
| 25 | 伊斯坦布尔中文翻译 | ZH İstanbul geniş |
| 26 | 土耳其设备安装翻译 | ZH kurulum |
| 27 | 土耳其设备调试口译 | ZH devreye alma iletişimi |
| 28 | 土耳其工厂现场口译 | ZH teknik saha |
| 29 | 中国工程师赴土耳其口译 | ZH teknik ekip |
| 30 | 伊斯坦布尔口译一天多少钱 | ZH ücret |
| 31 | 盖布泽设备安装口译 | ZH Gebze teknik |
| 32 | 广交会土耳其语翻译 | ZH Kanton |
| 33 | 广州展会土耳其语口译 | ZH fuar |
| 34 | 中国工厂接待土耳其客户口译 | ZH fabrika |
| 35 | Çinli ekip makine kurmaya geliyor, İstanbul’da tercüman nasıl bulurum? | TR doğal soru |
| 36 | Kadıköy’de konaklıyoruz ama fabrika Gebze’de; nasıl tercüman talep etmeliyiz? | TR yerel/program |
| 37 | Kanton Fuarı sonrası belirlediğim fabrikada aynı tercümanla çalışabilir miyim? | TR birleşik program |
| 38 | 我们要去土耳其安装设备，怎样安排中文和土耳其语现场口译？ | ZH doğal soru |
| 39 | 公司在伊斯坦布尔，工厂在其他城市，口译费用怎么咨询？ | ZH yerel/program |
| 40 | 中土现场口译按天收费，交通住宿是否另计？ | ZH ücret |

### 40.3 Test kayıt standardı

Arama motoru/ürün, test tarihi, arayüz dili, gerçek test lokasyonu, mobil/masaüstü, tam sorgu, kişiselleştirme/arama modu, görülen hizmet sayfası ve kaynak URL’si kaydedilir. Organik sıra, yerel işletme görünümü ve AI kaynak gösterimi aynı kolona yazılmaz.

AI testlerinde ayrı işaretler: marka adı geçti; URL kaynak gösterildi; hizmet önerildi; yanlış kapsam/adres/telefon tekrarlandı. Bing’in raporladığı kaynak payı ile bu küçük manuel örneklem birbirine karıştırılmaz.

### 40.4 Tıklama ve gerçek talebi ayır

`whatsapp_open`, `email_click`, `phone_click` satış değildir. Teklifin oluşturulması, iletilmesi, müşterinin uygun hizmet istemesi ve günlük çalışmanın teyidi ayrı aşamalardır. Kaynak sorusu, kullanıcıya makul bir anda “Bize nereden ulaştınız?” olarak sorulabilir; yanıt zorunlu tutulmaz.

Analitik kullanılırsa ana belgedeki veri minimizasyonu geçerli: özel mesaj, kişi/firma bilgisi, tam tesis adresi ve tarih aralığı izleme olaylarına gönderilmez. Bağlantı parametreleri için çok sayıda indekslenen şehir/hizmet form URL’si üretme. Kaynak parametresi yalnızca kamusal sayfa kimliği gibi sınırlı bir değer taşısın.

### 40.5 Sonraki karar nasıl verilir?

- İlgili sorgular gösterim alıyor ama doğru sayfa çıkmıyorsa önce eşleştirme ve iç bağlantıyı incele.
- Doğru sayfa görünür ama tıklanmıyorsa başlık ve hizmet vaadinin arama niyetine uygunluğunu değerlendir; yanıltıcı başlık kullanma.
- Ziyaret var ama uygun talep yoksa kapsam, fiyat notu, iletişim erişimi ve müşteri beklentisini incele.
- Bir ilçe veya Çince teknik konu için gerçek talep birikiyorsa yayın koşullarına göre derinleştir.
- Yalnızca kapsam dışı belge çevirisi trafiği azaldıysa bunu yeni hizmetlerde performans kaybıyla eşitleme.

## 41. Eski trafiği korumaya ek güvenlik kuralları

Ana belgenin geçiş planı değişmez. Bu ek yeni URL önerilerini uygulanmış yönlendirme listesine dönüştürmez.

**En önemli kural:** Yeni sorgu ailesi bulmak yeni URL açmak zorunda olmak demek değildir. Mevcut sayfa doğru ihtiyacı karşılıyorsa adres korunarak içerik geliştirilir.

İki dilde bütün yeni/korunan sayfaların HTTP durumu, self-canonical, karşılıklı gerçek hreflang eşleniği, menü ve bağlamsal iç bağlantısı test edilir. Türkçe içerik `/tr/` altına topluca taşınmaz. Eski yazılı hizmet URL’leri yeni ilgisiz hizmete sırf bağlantı kaybetmemek için yönlendirilmez. Google’ın geçiş rehberi içerik/URL envanteri ve ilgili hedef eşleştirmesini temel alır. [E26]

Eski adres farklı dizinlerde varsa, kaynak düzeltme isteği ile site geçişi ayrı takip edilir. Harici kaynakların hepsinin aynı anda güncelleneceği söylenmez. Eski telefon ile WhatsApp telefonunun farklı rolleri kayıtlarda tutarlı etiketlenir.

## 42. Uygulama sırası ve kabul koşulları

### 42.1 Öncelik sırası

| Aşama | İş | Tamamlandı sayılma koşulu |
|---|---|---|
| P0 — yayın öncesi | Mevcut URL/değerli bağlantı envanterini doğrula | Gerçek envanter ve ilgili hedef kararı |
| P0 — yayın öncesi | GSC alan adı sahipliği ve AI ayar kontrolü | Yetkili erişim; kontrol sonucu kaydı |
| P0 — yayın öncesi | TR/ZH indekslenebilirlik ve bot erişimi | Gerçek test sonuçları; doğrulama ekranı yanlış pozitif değil |
| P1 — ilk içerik sürümü | İstanbul yerel bölümünü ekle | İlçeler, kapsam ve masraf bilgisi iki dilde doğru |
| P1 — ilk içerik sürümü | ZH müşteri kartı ve başlık seçimi | Türkiye’ye gelen teknik ekip ihtiyacı görünür |
| P1 — ilk içerik sürümü | Fuar/fabrika sorgularını mevcut sayfalarda işle | Yeni hizmet veya kopya URL yok |
| P1 — ilk içerik sürümü | Çin’den erişim ve iletişim alternatifi testi | Gerçek ağ test sonucu ve çalışan alternatif |
| P1 — yayın/ölçüm | Bing doğrulama ve AI raporlarını incele | Hesapta gerçekten erişilen raporlar kaydedilmiş |
| P1 — ilk ölçüm dönemi | İki dilli sorgu ve nitelikli talep takibi | Boş/eksik verinin açık işaretlendiği başlangıç kaydı |
| P2 — teknik iyileştirme | IndexNow deploy adımı | Başarılı bildirim testi; indeks garantisi iddiası yok |
| P2 — kontrollü kanal genişlemesi | Baidu/WeChat uygunluğu | Gerçek hesap doğrulaması; varsayımsal buton yok |
| P2 — devamlı içerik | Özgün hazırlık materyali ve uygun dış kaynak | Onaylanmış gerçek içerik; sahte referans yok |
| P3 — veriyle genişleme | İlçe/sektör/ek fuar sayfası | Bölüm 33.2’deki ayrı değer koşulları sağlanmış |

Bu sıra bir iş planıdır; belirtilmiş bir süre içinde sıralama vaadi değildir.

### 42.2 Ek kabul listesi

- [ ] Ana belge silinmedi; mevcut iş modeli ve iletişim bilgileri korunuyor.
- [ ] Yeni hizmet veya şehir başına sahte ofis iddiası eklenmedi.
- [ ] İstanbul, Kadıköy, Beşiktaş ve Üsküdar kapsamı gerçek kurulum ihtiyacına bağlı.
- [ ] Yeni ilçe URL’leri otomatik üretilmiyor.
- [ ] Çince sayfalar yalnızca Türkçe menüye eklenmiş çeviri parçalarından oluşmuyor.
- [ ] Dil ile hizmet ülkesi ayrı yönetiliyor; IP’ye göre zorunlu yönlendirme yok.
- [ ] Eski/yeni title ve H1 alternatifleri aynı anda tekrar edilmeden uygulanıyor.
- [ ] Form alanları ve hata metinleri iki dilde de anlaşılır.
- [ ] Çince iletişim, WhatsApp dışındaki çalışan alternatifi de gösteriyor.
- [ ] WeChat hesabı yoksa aktif düğme/QR yok.
- [ ] Çin gerçek ağ testi yapılmadan “Çin’de sorunsuz çalışır” iddiası yok.
- [ ] GSC Search generative AI dahil/hariç tercihi gerçekten kontrol edilmiş.
- [ ] Google AI raporu, tüm AI motorlarının görünürlüğü gibi sunulmuyor.
- [ ] Bing Citation Share, rakiplerin domain/sıralama/ciro bilgisi gibi yorumlanmıyor.
- [ ] IndexNow yalnızca gerçek içerik değişikliklerinde ve uygun dağıtımdan sonra çalışıyor.
- [ ] Schema ve soru-cevaplar sıradan kullanıcıya görünen gerçek bilgilerle tutarlı.
- [ ] Günlük ücret ve ayrıca alınan bütün masraflar görünür.
- [ ] WhatsApp tıklaması gerçek müşteri mesajı/rezervasyon olarak sayılmıyor.
- [ ] Eski Taksim adresi; görünür metin, meta, JSON-LD ve iletişim bileşenlerinden kaldırılmış.
- [ ] Eski alan adı, gerekli DNS/e-posta kayıtları ve ilgili eski URL’ler korunmuş.
- [ ] Araştırma dosyası, gerçek kamuya açık hizmet sayfası gibi otomatik yayımlanmıyor.

### 42.3 Kodlama aracına eklenecek talimat

```text
Ana tasarım belgesini ve bu ek stratejiyi birlikte uygula. Ana belgenin hizmet kapsamını,
günlük çalışma koşullarını, ayrıca alınan masrafları ve eski URL koruma kararlarını değiştirme.

Bu eki her şehir/ilçe/hizmet kombinasyonuna sayfa üreten bir programmatic SEO talimatı gibi
uygulama. Önce var olan İstanbul ve Çince hizmet sayfalarını belirtilen içeriklerle geliştir.
Aynı ihtiyaca ikinci bir URL açma. Tek sayfada eski ve yeni başlık alternatiflerini üst üste koyma.

Çince sayfalarda Türkiye’ye ekip gönderen üreticinin ihtiyaçlarını ve insan/saha tercümanlığı
kapsamını açık göster. Türkiye’de onaylanmamış fuar, genel toplantı, tur, ithalat veya yazılı
çeviri hizmeti ekleme. Kullanıcıya verilmemiş müsaitlik, fiyat, mesai saati veya şube bilgisi üretme.

Hreflang/canonical, sitemap, gerçek HTTP durumları ve dil eşleniklerini otomatik testlere bağla.
IndexNow entegrasyonu seçilirse ziyaretçi tarayıcısında değil başarılı yayın sonrası iş adımında
çalışsın. Search Console/Bing/Baidu işlemlerini gerekli hesap erişimi olmadan tamamlanmış sayma.
WeChat doğrulanmadıysa kapalı kalsın. Canlı sitenin DNS/redirect/iletişim ayarlarını yetki olmadan
uygulama. Önce test raporu ve yayın fark listesini sun.
```

## 43. Kaynaklar, erişim tarihi ve sınırlar

**Araştırma tarihi:** 15 Eylül 2026. Platform dokümantasyonları değişebilir; canlı uygulamada ayar adları, erişim ve kullanılabilirlik resmî kaynaktan tekrar kontrol edilir. Aşağıdaki kaynakların rakip olanları içerik sunumuna örnektir; hizmet kalitesi veya sıralama nedeninin bağımsız kanıtı değildir.

### Rakipler ve mevcut site

[E01]: https://armut.com/kadikoy-cince-cevirmen "Armut — Kadıköy Çince çevirmen; arama sonucunda erişilebilen liste sayfası metni"
[E02]: https://www.kutuptercume.com/tr/istanbul-cince-cevirmen/d3/977 "Kutup Tercüme — İstanbul Çince çevirmen; arama sonucunda erişilebilen sayfa metni"
[E03]: https://www.imgetercume.com/kadikoy-tercume-burosu "İmge Tercüme — Kadıköy; tarihli içerik, güncel sıralama kanıtı değil"
[E04]: https://www.trfanyi.com/istanbul-cince-tercumanlik.html "trfanyi — İstanbul Çince sayfası; doğrudan açılışta doğrulama, arama alıntısı kullanıldı"
[E05]: https://cincetercumesi.com/CN/ "Çince hizmet sürümü; doğrudan açılışta doğrulama, arama alıntısı kullanıldı"
[E06]: https://cincedanismanlik.com/ "Çince Danışmanlık — erişilebilen ana sayfa içeriği"
[E07]: https://www.cintercumanlik.com/ "Çin Tercümanlık — erişilebilen hizmet tanıtımı"
[E08]: https://www.cince-tercuman.com/cince-tercuman-istanbul/ "Mevcut İstanbul sayfası; araştırma aracına doğrulama ekranı gösterildi"

### Resmî teknik ve arama kaynakları

[E09]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide "Google — güncel generative AI optimizasyon rehberi"
[E10]: https://developers.google.com/search/docs/essentials/spam-policies "Google — doorway, scaled content ve link spam politikaları"
[E11]: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites "Google — çok dilli ve çok bölgeli siteler"
[E12]: https://developers.google.com/search/docs/specialty/international/localized-versions "Google — dil sürümleri ve hreflang"
[E13]: https://zy.baidu.com/ "Baidu — resmî Search Resource Platform; eski ziyuan.baidu.com adresi buraya yönlendi; kullanıcı hesabı incelenmedi"
[E14]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content "Google — yararlı, güvenilir, insan odaklı içerik"
[E15]: https://support.google.com/business/answer/7091?hl=en "Google — yerel sıralama faktörleri"
[E16]: https://support.google.com/business/answer/3038177?hl=en "Google — işletme temsili ve hizmet bölgesi kuralları"
[E17]: https://support.google.com/webmasters/answer/16908024 "Google — Search generative AI control; 31 Ağustos 2026 yayılım notu"
[E18]: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports "Google — generative AI performans raporları duyurusu, 3 Haziran 2026; 31 Ağustos ek notu"
[E19]: https://support.google.com/webmasters/answer/16984139 "Google — Generative AI performance report (Search) kapsamı ve veri sınırlamaları"
[E20]: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview "Microsoft — Bing AI Performance, 10 Şubat 2026"
[E21]: https://blogs.bing.com/search/June-2026/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare "Microsoft — Bing AI görünürlük özellikleri, 16 Haziran 2026"
[E22]: https://www.indexnow.org/documentation "IndexNow — resmî teknik dokümantasyon"
[E23]: https://www.indexnow.org/faq "IndexNow — gönderim, güncelleme ve indekslenme sınırları"
[E24]: https://developers.openai.com/api/docs/bots "OpenAI — OAI-SearchBot ve GPTBot ayrımı"
[E25]: https://developers.google.com/search/updates "Google — 8 Mayıs 2026 FAQ rich result kaldırılma kaydı"
[E26]: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes "Google — site geçişi ve URL eşleştirme"

**Son sınır:** Bu ek araştırma ve uygulama belgesidir. Canlı site, Google/Bing/Baidu hesapları, WhatsApp/WeChat, DNS, e-posta veya yönlendirmelerde işlem yapılmadı. Organik birincilik, ilçe bazında harita liderliği veya AI motorlarında kesin önerilme sözü verilmez.

<!-- V12_BASE_END -->

---

<a id="v12-placement"></a>
## 44. Güncel uygulama kararları ve sayfa yerleşimi

### 44.1 Önceki önerilerin hepsi bu dosyada nasıl uygulanacak?

| Alan | Güncel karar | Eski bölümle bağlantısı |
|---|---|---|
| Eski trafik ve bağlantılar | Alan adı ve uygun URL’ler korunur; envantersiz toplu silme veya ana sayfaya yönlendirme yok. Soru eklemek URL değişikliği gerektirmez. | 21, 41 |
| İstanbul ve ilçeler | Kadıköy, Beşiktaş, Üsküdar açıklamaları İstanbul sayfasında; bu sürümde yeni ilçe URL’leri yok. Yerel ek sorular iki dilde tamamlandı. | 17.1, 33 ve İstanbul v1.2 eki |
| Çinli teknik ekip | Çince ana sayfa giriş kartı ve Çince kurulum anlatımı uygulanır. Dil ile çalışma ülkesi ayrı tutulur. | 34 ve makine sayfası v1.2 eki |
| Fuar/fabrika aramaları | Mevcut hizmet sayfalarındaki gerçek sorularla kapsam genişletilir; tur, ithalat, tedarikçi bulma veya denetim satışı eklenmez. | 10–12, 35 |
| Teknik sektörler | CNC, plastik enjeksiyon, ambalaj, tekstil, otomasyon/robot soruları tek hazırlık rehberinde koşullu yanıtlanır. Yeni uzmanlık/marka referansı icat edilmez. | 18.3, 35.3, Q078–Q082 |
| Yeni rehber | Tek yeni iki dilli “Çince tercüman nasıl seçilir?” rehberi eklenir. Üç mevcut rehber korunur; koleksiyonda toplam dört kart olur. | 18.1 ve yeni 18.5 |
| Özgün hazırlık materyali | Önceki talep, kurulum ve ziyaret hazırlık içerikleri kullanılabilir kaynaklar olarak korunur. Gerçek ve izinli vaka oluşmadan vaka çalışması üretilmez. | 18, 37 |
| Çin’den erişim ve iletişim | Gerçek ağ testi yayın öncesi işidir. E-posta/kopyalama alternatifi çalışır; doğrulanmamış WeChat kapalıdır. Baidu hesap koşulları erişim sağlandığında doğrulanır. | 16, 36 |
| Haritalar | Gerçek işletme uygunluğu ve konumu üzerinden değerlendirilir. Eski adres/sahte şube oluşturulmaz. | 38 |
| SEO/GEO araçları | Google/Bing rapor ve ayarları, bot erişimi, IndexNow ve Baidu işleri kaynak belgedeki aşamalarla korunur. Hesap işlemleri bu MD hazırlanırken yapılmış sayılmaz. | 23, 39–42 |
| Ölçüm | Sorgu görünürlüğü, doğru hizmet talebi ve gerçek teyit edilen işler ayrı tutulur. WhatsApp tıklaması mesaj veya rezervasyon değildir. | 24, 40 |
| Soru-cevap | 110 soru, 21 birincil sayfa eşleniğine dağıtılır. Ana sayfa kısa özet; genel SSS operasyon ve konu navigasyonudur. | Bu sürümün sayfa ekleri |

### 44.2 Alternatifler arasından seçilen nihai Çince başlıklar

Bölüm 34’teki alternatiflerden aşağıdakiler uygulanır. Önceki title/H1 örnekleri dosyada korunur, ancak aynı sayfada ikinci başlık olarak yayımlanmaz.

| Sayfa | Title | H1 |
|---|---|---|
| `/zh/` | 土耳其中文口译｜设备安装与中国工厂、展会参访 | 土耳其与中国的中文—土耳其语现场口译 |
| `/zh/istanbul-interpreter/` | 伊斯坦布尔中文口译｜设备安装与调试现场翻译 | 伊斯坦布尔中文—土耳其语设备安装口译 |
| `/zh/machine-installation-interpreter/` | 土耳其设备安装翻译｜中国技术团队现场口译 | 中国技术团队赴土耳其安装设备，需要现场口译？ |

Bunlar editoryal başlık seçimidir; sıralama ya da AI önerilmesi garantisi değildir. Her sayfanın tek H1’i, doğru dilde meta description’ı ve gerçek içeriği bulunur.

### 44.3 Soruların birincil sayfa eşleştirmesi

Aşağıdaki sayılar içerik envanteridir; Google tarafından önerilen “ideal SSS sayısı” değildir. Çok sorulu hizmet sayfalarında anlamlı alt başlıklar kullanılır. Kritik hizmet sınırları açık görünür; diğer sorular okunabilir soru-cevap veya erişilebilir akordeon olarak sunulabilir.

| Sayfa / içerik bloğu | Türkçe URL | Çince eşlenik | Q kimlikleri | Adet |
|---|---|---|---|---|
| [Genel Çince tercümanlık hizmetleri](#v12-page-services) | `/cince-tercuman/` | `/zh/interpreting-services/` | Q001, Q003, Q004 | 3 |
| [Çin’de tercüman](#v12-page-china) | `/cinde-tercuman/` | `/zh/interpreter-in-china/` | Q049, Q050, Q051, Q067, Q068 | 5 |
| [Makine kurulumu için Çince tercüman](#v12-page-machine) | `/makine-kurulumu-cince-tercuman/` | `/zh/machine-installation-interpreter/` | Q084, Q022, Q023, Q024, Q025, Q026, Q027, Q028 | 8 |
| [Çin’de fabrika ziyareti tercümanlığı](#v12-page-factory) | `/cinde-fabrika-ziyareti-tercuman/` | `/zh/factory-visit-interpreter/` | Q029, Q030, Q031, Q034, Q032, Q033, Q088, Q089, Q085, Q086, Q087, Q090, Q091, Q092 | 14 |
| [Çin’de fuar tercümanlığı](#v12-page-fair) | `/cinde-fuar-tercumani/` | `/zh/trade-fair-interpreter/` | Q035, Q036, Q037, Q038, Q097, Q098, Q039, Q040, Q099 | 9 |
| [Kanton Fuarı tercümanı](#v12-page-canton) | `/kanton-fuari-tercuman/` | `/zh/canton-fair-interpreter/` | Q093, Q094, Q095, Q096, Q100 | 5 |
| [Hizmet bölgeleri](#v12-page-areas) | `/hizmet-bolgeleri/` | `/zh/service-areas/` | Q002, Q072, Q073 | 3 |
| [Günlük ücret ve masraflar](#v12-page-rates) | `/cince-tercuman-fiyatlari/` | `/zh/daily-rates/` | Q007, Q013, Q060, Q055, Q056, Q057, Q058, Q059, Q008, Q009, Q011, Q012, Q010, Q061, Q062, Q014, Q015 | 17 |
| [Hakkımızda: deneyim ve çalışma yaklaşımı](#v12-page-about) | `/hakkimizda/` | `/zh/about/` | Q016, Q017, Q019, Q020, Q021 | 5 |
| [Genel SSS ve rezervasyon](#v12-page-faq) | `/sik-sorulan-sorular/` | `/zh/faq/` | Q005, Q006, Q041, Q042, Q043, Q044, Q045, Q046 | 8 |
| [İstanbul yerel soru-cevap](#v12-page-istanbul) | `/cince-tercuman-istanbul/` | `/zh/istanbul-interpreter/` | Q069 | 1 |
| [Ankara yerel soru-cevap](#v12-page-ankara) | `/cince-tercuman-ankara/` | `/zh/ankara-interpreter/` | Q074 | 1 |
| [Kocaeli yerel soru-cevap](#v12-page-kocaeli) | `/cince-tercuman-kocaeli/` | `/zh/kocaeli-interpreter/` | Q071 | 1 |
| [Gebze yerel soru-cevap](#v12-page-gebze) | `/cince-tercuman-gebze/` | `/zh/gebze-interpreter/` | Q070 | 1 |
| [Guangzhou yerel soru-cevap](#v12-page-guangzhou) | `/cince-tercuman-guangzhou/` | `/zh/guangzhou-interpreter/` | Q063 | 1 |
| [Shanghai / Şanghay yerel soru-cevap](#v12-page-shanghai) | `/cince-tercuman-shanghai-sanghay/` | `/zh/shanghai-interpreter/` | Q065 | 1 |
| [Beijing / Pekin yerel soru-cevap](#v12-page-beijing) | `/cince-tercuman-beijing-pekin/` | `/zh/beijing-interpreter/` | Q066 | 1 |
| [Shenzhen yerel soru-cevap](#v12-page-shenzhen) | `/cince-tercuman-shenzhen/` | `/zh/shenzhen-interpreter/` | Q064 | 1 |
| [Tercüman talebi hazırlık rehberi](#v12-page-request_guide) | `/rehber/tercuman-talebi-icin-gerekli-bilgiler/` | `/zh/guides/information-for-interpreter-request/` | Q018 | 1 |
| [Makine kurulumu öncesi hazırlık rehberi](#v12-page-machine_guide) | `/rehber/makine-kurulumu-tercuman-hazirligi/` | `/zh/guides/prepare-machine-installation-interpreting/` | Q075, Q076, Q077, Q078, Q079, Q080, Q081, Q082, Q083 | 9 |
| [Yeni rehber: Çince tercüman nasıl seçilir?](#v12-page-selection_guide) | `/rehber/cince-tercuman-nasil-secilir/` | `/zh/guides/how-to-choose-a-turkish-chinese-interpreter/` | Q047, Q048, Q052, Q053, Q054, Q101, Q102, Q103, Q104, Q105, Q106, Q107, Q108, Q109, Q110 | 15 |


**Toplam: 110 farklı kaynak soru.** Ana sayfadaki dört kısa özet, mevcut yardımcı sorular ve önceki İstanbul/Çince üretici ekleri bu sayıya yeniden dahil edilmez.

### 44.4 Bağlamsal iç bağlantılar

Makine sayfası; teknik sektör sorularını tam olarak tekrar etmek yerine mevcut kurulum hazırlık rehberindeki Q075–Q083’e yönlendirir. Fabrika ve fuar sayfaları, fiyat sorularında fiyat sayfasının ilgili yanıtına bağlanır. Guangzhou sayfası Kanton ve genel fuar sayfalarını; İstanbul sayfası kurulum, Gebze ve Kocaeli sayfalarını bağlama uygun yerlerde işaret eder. Genel SSS sayfası kategori bağlantıları ve Q005/Q006/Q041–Q046 üzerinden çalışır.

Her ana sorunun bölüm 45’te tek bir tam cevap hedefi vardır. Bu, bir sorunun başka sayfada kısa özetlenmesini yasaklayan SEO kuralı değildir; editoryal tutarlılık ve bakım kararıdır. Aynı dilde sayfa canonical’ı soru ankrajına veya SSS sayfasına değil, ilgili sayfanın kendisine gider. Dil eşlenikleri gerçek sayfa düzeyindedir.

<a id="v12-question-index"></a>
## 45. Yüklenen 110 sorunun eksiksiz indeksi

Kaynak “Pasted markdown.md” içindeki 1–46 numaralı doğrudan müşteri soruları ve 47–110 numaralı arama sorularıdır. Kalın yazım biçimi dışında soru metinleri korunur. Her Q bağlantısı bu belgedeki tam iki dilli cevaba götürür. Canlıda kullanılacak soru ankrajı `faq-NNN` biçimindedir.

| Kaynak no / cevap | Soru | Birincil TR hedef | Durum |
|---|---|---|---|
| [Q001](#doc-q001) | Hangi işler için Çince tercümanlık hizmeti alabilirim? | `/cince-tercuman/#faq-001` | İş modeline dayalı |
| [Q002](#doc-q002) | Hangi şehirlerde Çince tercüman sağlayabiliyorsunuz? | `/hizmet-bolgeleri/#faq-002` | Uygunlukla teyit |
| [Q003](#doc-q003) | Tercüman hem Çince’den Türkçe’ye hem Türkçe’den Çince’ye çeviri yapıyor mu? | `/cince-tercuman/#faq-003` | İş modeline dayalı |
| [Q004](#doc-q004) | Yalnızca bir gün için tercüman tutabilir miyim? | `/cince-tercuman/#faq-004` | İş modeline dayalı |
| [Q005](#doc-q005) | Tercüman rezervasyonunu ne kadar önceden yapmalıyım? | `/sik-sorulan-sorular/#faq-005` | Uygunlukla teyit |
| [Q006](#doc-q006) | Acil veya ertesi gün için Çince tercüman bulabilir misiniz? | `/sik-sorulan-sorular/#faq-006` | Uygunlukla teyit |
| [Q007](#doc-q007) | Çince tercümanlık için günlük ücret ne kadar ve neye göre belirleniyor? | `/cince-tercuman-fiyatlari/#faq-007` | İş modeline dayalı |
| [Q008](#doc-q008) | Günlük tercümanlık hizmeti kaç saatlik çalışmayı kapsıyor? | `/cince-tercuman-fiyatlari/#faq-008` | Teklif koşulu |
| [Q009](#doc-q009) | Belirlenen çalışma süresinin aşılması durumunda ek ücret alınıyor mu? | `/cince-tercuman-fiyatlari/#faq-009` | Teklif koşulu |
| [Q010](#doc-q010) | Tercümanın ulaşım, konaklama ve yemek masraflarını kim karşılıyor? | `/cince-tercuman-fiyatlari/#faq-010` | İş modeline dayalı |
| [Q011](#doc-q011) | Birden fazla gün için tercümanlık aldığımda fiyat değişiyor mu? | `/cince-tercuman-fiyatlari/#faq-011` | Teklif koşulu |
| [Q012](#doc-q012) | Hafta sonu veya resmî tatillerde ücret farklı oluyor mu? | `/cince-tercuman-fiyatlari/#faq-012` | Teklif koşulu |
| [Q013](#doc-q013) | Net fiyat teklifi alabilmek için size hangi bilgileri iletmeliyim? | `/cince-tercuman-fiyatlari/#faq-013` | İş modeline dayalı |
| [Q014](#doc-q014) | Ödeme ne zaman, hangi para biriminde ve nasıl yapılıyor? | `/cince-tercuman-fiyatlari/#faq-014` | Teklif koşulu |
| [Q015](#doc-q015) | Şirketimiz adına fatura düzenleyebiliyor musunuz? | `/cince-tercuman-fiyatlari/#faq-015` | İşletme onayı gerekli |
| [Q016](#doc-q016) | Tercümanınızın benim sektörümde deneyimi var mı? | `/hakkimizda/#faq-016` | Uygunlukla teyit |
| [Q017](#doc-q017) | Görevlendirilecek tercümanla hizmet öncesinde tanışabilir veya kısa bir görüşme yapabilir miyim? | `/hakkimizda/#faq-017` | Uygunlukla teyit |
| [Q018](#doc-q018) | Tercümanın hazırlık yapabilmesi için önceden hangi bilgileri ve teknik dokümanları göndermeliyim? | `/rehber/tercuman-talebi-icin-gerekli-bilgiler/#faq-018` | İş modeline dayalı |
| [Q019](#doc-q019) | Görüşmelerde paylaşılan ticari ve teknik bilgilerin gizliliğini nasıl koruyorsunuz? | `/hakkimizda/#faq-019` | İşletme onayı gerekli |
| [Q020](#doc-q020) | Şirketimizin gizlilik sözleşmesini imzalayabiliyor musunuz? | `/hakkimizda/#faq-020` | İşletme onayı gerekli |
| [Q021](#doc-q021) | Tercümanın görüşeceğimiz Çinli firma veya tedarikçiyle herhangi bir ticari ilişkisi bulunuyor mu? | `/hakkimizda/#faq-021` | İşletme onayı gerekli |
| [Q022](#doc-q022) | Makine kurulumu sırasında Çinli teknik ekiple iletişim için tercüman sağlayabiliyor musunuz? | `/makine-kurulumu-cince-tercuman/#faq-022` | İş modeline dayalı |
| [Q023](#doc-q023) | Tercüman makine, elektrik, mekanik ve otomasyon terimlerine hâkim mi? | `/makine-kurulumu-cince-tercuman/#faq-023` | Uygunlukla teyit |
| [Q024](#doc-q024) | Daha önce benzer bir makinenin veya üretim hattının kurulumunda görev aldı mı? | `/makine-kurulumu-cince-tercuman/#faq-024` | Uygunlukla teyit |
| [Q025](#doc-q025) | Kurulumun yanında operatör eğitimi sırasında da tercümanlık yapıyor mu? | `/makine-kurulumu-cince-tercuman/#faq-025` | İş modeline dayalı |
| [Q026](#doc-q026) | Arıza, test ve devreye alma aşamalarındaki teknik görüşmelerde destek verebiliyor mu? | `/makine-kurulumu-cince-tercuman/#faq-026` | İş modeline dayalı |
| [Q027](#doc-q027) | Fabrikamızın iş güvenliği kurallarına uyum ve gerekli koruyucu ekipmanlar nasıl organize ediliyor? | `/makine-kurulumu-cince-tercuman/#faq-027` | Teklif koşulu |
| [Q028](#doc-q028) | Kurulum planlanandan uzun sürerse tercümanlık süresini uzatabilir miyiz? | `/makine-kurulumu-cince-tercuman/#faq-028` | Teklif koşulu |
| [Q029](#doc-q029) | Çin’de fabrika ziyaretlerimiz sırasında bize eşlik edecek bir tercüman sağlayabiliyor musunuz? | `/cinde-fabrika-ziyareti-tercuman/#faq-029` | İş modeline dayalı |
| [Q030](#doc-q030) | Aynı gün içinde birden fazla fabrikayı aynı tercümanla ziyaret edebilir miyiz? | `/cinde-fabrika-ziyareti-tercuman/#faq-030` | Uygunlukla teyit |
| [Q031](#doc-q031) | Farklı şehirlerdeki fabrika ziyaretlerinde aynı tercüman bizimle gelebilir mi? | `/cinde-fabrika-ziyareti-tercuman/#faq-031` | Uygunlukla teyit |
| [Q032](#doc-q032) | Üretim hattını gezerken teknik açıklamaları ve sorularımızı karşı tarafa aktarabiliyor mu? | `/cinde-fabrika-ziyareti-tercuman/#faq-032` | İş modeline dayalı |
| [Q033](#doc-q033) | Fiyat, minimum sipariş miktarı, numune, teslim süresi ve ödeme koşulları konuşulurken tercümanlık yapabiliyor mu? | `/cinde-fabrika-ziyareti-tercuman/#faq-033` | İş modeline dayalı |
| [Q034](#doc-q034) | Tercümanla otelimizde mi, fabrikada mı, yoksa başka bir noktada mı buluşacağız? | `/cinde-fabrika-ziyareti-tercuman/#faq-034` | Teklif koşulu |
| [Q035](#doc-q035) | Kanton Fuarı ve Çin’deki diğer fuarlar için Çince tercüman sağlayabiliyor musunuz? | `/cinde-fuar-tercumani/#faq-035` | İş modeline dayalı |
| [Q036](#doc-q036) | Tercüman fuar boyunca bizimle stantları gezerek görüşmelere katılıyor mu? | `/cinde-fuar-tercumani/#faq-036` | Uygunlukla teyit |
| [Q037](#doc-q037) | Bir tercüman şirketimizden birden fazla kişiye eşlik edebilir mi? | `/cinde-fuar-tercumani/#faq-037` | Uygunlukla teyit |
| [Q038](#doc-q038) | Ekibimiz farklı stantlarda eş zamanlı görüşme yapacaksa kaç tercümana ihtiyacımız olur? | `/cinde-fuar-tercumani/#faq-038` | Uygunlukla teyit |
| [Q039](#doc-q039) | Tercümanın fuar giriş kaydı veya kartı için bizim bir işlem yapmamız gerekiyor mu? | `/cinde-fuar-tercumani/#faq-039` | Teklif koşulu |
| [Q040](#doc-q040) | Fuarda tanıştığımız bir firmanın fabrikasını ziyaret etmek istersek tercümanlık programını buna göre değiştirebilir miyiz? | `/cinde-fuar-tercumani/#faq-040` | Teklif koşulu |
| [Q041](#doc-q041) | Rezervasyonun kesinleşmesi için hangi adımları tamamlamamız gerekiyor? | `/sik-sorulan-sorular/#faq-041` | Teklif koşulu |
| [Q042](#doc-q042) | Birden fazla gün süren işlerde aynı tercümanla çalışabilecek miyiz? | `/sik-sorulan-sorular/#faq-042` | Teklif koşulu |
| [Q043](#doc-q043) | Uçuşumuz, fabrika randevumuz veya iş programımız değişirse rezervasyonu güncelleyebilir miyiz? | `/sik-sorulan-sorular/#faq-043` | Teklif koşulu |
| [Q044](#doc-q044) | Rezervasyonu iptal etmemiz veya tarih değiştirmemiz gerekirse hangi koşullar geçerli? | `/sik-sorulan-sorular/#faq-044` | Teklif koşulu |
| [Q045](#doc-q045) | Görevlendirilen tercüman beklenmedik bir nedenle gelemezse nasıl bir çözüm sunuyorsunuz? | `/sik-sorulan-sorular/#faq-045` | İşletme onayı gerekli |
| [Q046](#doc-q046) | Hizmet sırasında bir sorun yaşarsak kiminle iletişime geçeceğiz? | `/sik-sorulan-sorular/#faq-046` | İş modeline dayalı |
| [Q047](#doc-q047) | Çince tercüman nasıl bulunur? | `/rehber/cince-tercuman-nasil-secilir/#faq-047` | Uygunlukla teyit |
| [Q048](#doc-q048) | Çince Türkçe tercüman nereden bulunur? | `/rehber/cince-tercuman-nasil-secilir/#faq-048` | İş modeline dayalı |
| [Q049](#doc-q049) | Çin’de Türkçe bilen tercüman nasıl bulunur? | `/cinde-tercuman/#faq-049` | Uygunlukla teyit |
| [Q050](#doc-q050) | Çin’e iş için giderken tercüman tutmak gerekir mi? | `/cinde-tercuman/#faq-050` | Uygunlukla teyit |
| [Q051](#doc-q051) | İngilizce biliyorum, Çin’de yine de Çince tercümana ihtiyacım olur mu? | `/cinde-tercuman/#faq-051` | Uygunlukla teyit |
| [Q052](#doc-q052) | Çince tercüman seçerken Mandarin veya Kantonca ayrımı önemli mi? | `/rehber/cince-tercuman-nasil-secilir/#faq-052` | Uygunlukla teyit |
| [Q053](#doc-q053) | Çince bilen biriyle profesyonel Çince tercüman arasında ne fark vardır? | `/rehber/cince-tercuman-nasil-secilir/#faq-053` | Uygunlukla teyit |
| [Q054](#doc-q054) | Çince teknik tercüman ile fuar tercümanı arasındaki fark nedir? | `/rehber/cince-tercuman-nasil-secilir/#faq-054` | Uygunlukla teyit |
| [Q055](#doc-q055) | Çin’de günlük tercüman ücreti ne kadar? | `/cince-tercuman-fiyatlari/#faq-055` | Teklif koşulu |
| [Q056](#doc-q056) | Türkiye’de günlük Çince tercüman ücreti ne kadar? | `/cince-tercuman-fiyatlari/#faq-056` | Teklif koşulu |
| [Q057](#doc-q057) | Guangzhou’da Türkçe Çince tercüman fiyatları ne kadar? | `/cince-tercuman-fiyatlari/#faq-057` | Teklif koşulu |
| [Q058](#doc-q058) | Kanton Fuarı için tercüman tutmanın maliyeti nedir? | `/cince-tercuman-fiyatlari/#faq-058` | Teklif koşulu |
| [Q059](#doc-q059) | Makine kurulumu için Çince teknik tercüman ücreti ne kadar? | `/cince-tercuman-fiyatlari/#faq-059` | Teklif koşulu |
| [Q060](#doc-q060) | Çince tercüman fiyat teklifleri neden farklı oluyor? | `/cince-tercuman-fiyatlari/#faq-060` | Uygunlukla teyit |
| [Q061](#doc-q061) | Çince tercüman ücretine hangi masraflar dâhil değildir? | `/cince-tercuman-fiyatlari/#faq-061` | İş modeline dayalı |
| [Q062](#doc-q062) | Türkiye’den tercüman götürmek mi, Çin’de tercüman tutmak mı daha ekonomik? | `/cince-tercuman-fiyatlari/#faq-062` | Uygunlukla teyit |
| [Q063](#doc-q063) | Guangzhou’da Türkçe bilen tercüman nereden bulunur? | `/cince-tercuman-guangzhou/#faq-063` | Uygunlukla teyit |
| [Q064](#doc-q064) | Shenzhen’de fabrika ziyareti için Türkçe Çince tercüman nasıl bulunur? | `/cince-tercuman-shenzhen/#faq-064` | Uygunlukla teyit |
| [Q065](#doc-q065) | Şanghay’da iş görüşmesine katılacak Türkçe bilen tercüman var mı? | `/cince-tercuman-shanghai-sanghay/#faq-065` | Uygunlukla teyit |
| [Q066](#doc-q066) | Pekin’de günlük Türkçe Çince tercüman nasıl bulunur? | `/cince-tercuman-beijing-pekin/#faq-066` | Uygunlukla teyit |
| [Q067](#doc-q067) | Çin’de birden fazla şehirde çalışabilecek tercüman nasıl bulunur? | `/cinde-tercuman/#faq-067` | Uygunlukla teyit |
| [Q068](#doc-q068) | Çin’de ziyaret edeceğim fabrikaya yakın bir tercüman bulabilir miyim? | `/cinde-tercuman/#faq-068` | Uygunlukla teyit |
| [Q069](#doc-q069) | İstanbul’da makine kurulumu için Çince tercüman nasıl bulunur? | `/cince-tercuman-istanbul/#faq-069` | Uygunlukla teyit |
| [Q070](#doc-q070) | Gebze’de fabrikaya gelebilecek Çince teknik tercüman var mı? | `/cince-tercuman-gebze/#faq-070` | Uygunlukla teyit |
| [Q071](#doc-q071) | Kocaeli’nde Çinli mühendisler için tercüman nasıl bulunur? | `/cince-tercuman-kocaeli/#faq-071` | Uygunlukla teyit |
| [Q072](#doc-q072) | Tekirdağ’da makine montajı için Çince tercüman var mı? | `/hizmet-bolgeleri/#faq-072` | Uygunlukla teyit |
| [Q073](#doc-q073) | Çerkezköy’de fabrika kurulumu için Çince tercüman nasıl bulunur? | `/hizmet-bolgeleri/#faq-073` | Uygunlukla teyit |
| [Q074](#doc-q074) | Ankara’da üretim hattı kurulumu için Çince tercüman nereden bulunur? | `/cince-tercuman-ankara/#faq-074` | Uygunlukla teyit |
| [Q075](#doc-q075) | Çin’den aldığım makinenin kurulumu için nasıl bir tercüman seçmeliyim? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-075` | Uygunlukla teyit |
| [Q076](#doc-q076) | Çinli teknik ekip İngilizce bilmiyorsa kurulum sırasında nasıl iletişim kurabilirim? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-076` | Uygunlukla teyit |
| [Q077](#doc-q077) | Çince makine tercümanının teknik bilgi sahibi olması gerekir mi? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-077` | Uygunlukla teyit |
| [Q078](#doc-q078) | CNC makine kurulumu için Çince tercüman bulunabilir mi? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-078` | Uygunlukla teyit |
| [Q079](#doc-q079) | Plastik enjeksiyon makinesi kurulumu için Çince tercüman nasıl bulunur? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-079` | Uygunlukla teyit |
| [Q080](#doc-q080) | Ambalaj ve paketleme makineleri için Çince teknik tercüman var mı? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-080` | Uygunlukla teyit |
| [Q081](#doc-q081) | Tekstil makinelerinin kurulumunda çalışabilecek Çince tercüman nasıl bulunur? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-081` | Uygunlukla teyit |
| [Q082](#doc-q082) | Endüstriyel otomasyon ve robot sistemleri için Çince tercüman bulunabilir mi? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-082` | Uygunlukla teyit |
| [Q083](#doc-q083) | Fabrika operatörlerine verilecek Çince eğitim için hangi tür tercüman gerekir? | `/rehber/makine-kurulumu-tercuman-hazirligi/#faq-083` | Uygunlukla teyit |
| [Q084](#doc-q084) | Çince tercüman makineyi kurar mı, yoksa teknik ekibin söylediklerini mi çevirir? | `/makine-kurulumu-cince-tercuman/#faq-084` | İş modeline dayalı |
| [Q085](#doc-q085) | Çin’de fabrika ziyareti için tercüman gerekli mi? | `/cinde-fabrika-ziyareti-tercuman/#faq-085` | Uygunlukla teyit |
| [Q086](#doc-q086) | Çinli üreticiyle görüşürken bağımsız tercüman tutmalı mıyım? | `/cinde-fabrika-ziyareti-tercuman/#faq-086` | Uygunlukla teyit |
| [Q087](#doc-q087) | Fabrikanın kendi İngilizce bilen çalışanı yerine neden ayrı tercüman tutayım? | `/cinde-fabrika-ziyareti-tercuman/#faq-087` | Uygunlukla teyit |
| [Q088](#doc-q088) | Çin’de fiyat pazarlığında tercüman ne yapar? | `/cinde-fabrika-ziyareti-tercuman/#faq-088` | İş modeline dayalı |
| [Q089](#doc-q089) | Minimum sipariş miktarı ve üretim süresi görüşmelerinde tercüman nasıl yardımcı olur? | `/cinde-fabrika-ziyareti-tercuman/#faq-089` | İş modeline dayalı |
| [Q090](#doc-q090) | Fabrika ziyaretine gelecek tercümana önceden hangi ürün bilgilerini göndermeliyim? | `/cinde-fabrika-ziyareti-tercuman/#faq-090` | İş modeline dayalı |
| [Q091](#doc-q091) | Tercümanla Çin’de fabrika gezmek, fabrika denetimi yaptırmakla aynı şey mi? | `/cinde-fabrika-ziyareti-tercuman/#faq-091` | İş modeline dayalı |
| [Q092](#doc-q092) | Çince tercüman üreticinin güvenilirliğini veya ürün kalitesini garanti eder mi? | `/cinde-fabrika-ziyareti-tercuman/#faq-092` | İş modeline dayalı |
| [Q093](#doc-q093) | Kanton Fuarı’na tercümansız gidilir mi? | `/kanton-fuari-tercuman/#faq-093` | Uygunlukla teyit |
| [Q094](#doc-q094) | Kanton Fuarı’nda İngilizce yeterli olur mu? | `/kanton-fuari-tercuman/#faq-094` | Uygunlukla teyit |
| [Q095](#doc-q095) | Canton Fair için Türkçe bilen tercüman nasıl bulunur? | `/kanton-fuari-tercuman/#faq-095` | Uygunlukla teyit |
| [Q096](#doc-q096) | Kanton Fuarı için tercümanı Türkiye’den mi ayarlamalıyım, Çin’e gidince mi bulmalıyım? | `/kanton-fuari-tercuman/#faq-096` | Uygunlukla teyit |
| [Q097](#doc-q097) | Fuar turuna katılırsam ayrıca özel tercüman tutmam gerekir mi? | `/cinde-fuar-tercumani/#faq-097` | Uygunlukla teyit |
| [Q098](#doc-q098) | Grup tercümanı ile bana özel çalışan fuar tercümanı arasında ne fark vardır? | `/cinde-fuar-tercumani/#faq-098` | Uygunlukla teyit |
| [Q099](#doc-q099) | Fuarın yalnızca belirli günleri için tercüman ayarlanabilir mi? | `/cinde-fuar-tercumani/#faq-099` | İş modeline dayalı |
| [Q100](#doc-q100) | Kanton Fuarı’nın farklı fazlarında aynı tercümanla çalışılabilir mi? | `/kanton-fuari-tercuman/#faq-100` | Teklif koşulu |
| [Q101](#doc-q101) | Güvenilir Çince tercüman nasıl seçilir? | `/rehber/cince-tercuman-nasil-secilir/#faq-101` | Uygunlukla teyit |
| [Q102](#doc-q102) | Çince tercüman tutmadan önce hangi bilgileri doğrulamalıyım? | `/rehber/cince-tercuman-nasil-secilir/#faq-102` | Uygunlukla teyit |
| [Q103](#doc-q103) | Çince tercümanın deneyimini ve referanslarını nasıl kontrol edebilirim? | `/rehber/cince-tercuman-nasil-secilir/#faq-103` | Uygunlukla teyit |
| [Q104](#doc-q104) | Serbest çalışan bir Çince tercüman mı, tercümanlık firması mı tercih etmeliyim? | `/rehber/cince-tercuman-nasil-secilir/#faq-104` | Uygunlukla teyit |
| [Q105](#doc-q105) | Türk tercüman mı, Türkçe bilen Çinli tercüman mı tercih etmeliyim? | `/rehber/cince-tercuman-nasil-secilir/#faq-105` | Uygunlukla teyit |
| [Q106](#doc-q106) | Tedarikçinin önerdiği tercümanla çalışmak mı, kendi tercümanımı bulmak mı daha doğru? | `/rehber/cince-tercuman-nasil-secilir/#faq-106` | Uygunlukla teyit |
| [Q107](#doc-q107) | Çince tercümanın tedarikçiden komisyon alıp almadığını nasıl öğrenebilirim? | `/rehber/cince-tercuman-nasil-secilir/#faq-107` | İşletme onayı gerekli |
| [Q108](#doc-q108) | Google Çeviri, yüz yüze ticari görüşmede Çince tercümanın yerini tutar mı? | `/rehber/cince-tercuman-nasil-secilir/#faq-108` | Uygunlukla teyit |
| [Q109](#doc-q109) | Yapay zekâ çeviri cihazları makine kurulumu ve fabrika görüşmeleri için yeterli mi? | `/rehber/cince-tercuman-nasil-secilir/#faq-109` | Uygunlukla teyit |
| [Q110](#doc-q110) | Çince bilmeden tercümanın söylediklerimi doğru aktardığını nasıl anlayabilirim? | `/rehber/cince-tercuman-nasil-secilir/#faq-110` | Uygunlukla teyit |


Çince hedef, bölüm 44.3’te aynı satırda belirtilen Çince URL ve aynı `#faq-NNN` ankrajıdır. Dil değiştirilirken karşılık gerçekten mevcutsa soru konumu korunabilir; karşılık yoksa dil eşleniğinin ilgili bölümüne gidilir. Başka bir soruya veya ilgisiz bir sayfaya zorunlu yönlendirme yapılmaz.

## 46. Eski ve yeni cevapları birleştirme — hiçbir kaynak bilgiyi silmeden

### 46.1 Aynı ihtiyaca iki cevap göstermeyin

Bu dosyanın kaynak metni arşivlenir. Canlı site için oluşturulan içerik kayıtlarında aşağıdaki tematik eşleştirme uygulanır; eski cevap ve yeni cevap peş peşe kopyalanmaz. Eski metinde bulunup yeni cevapta olmayan gerekli, çelişmeyen bir ayrıntı varsa bunu ilgili açıklama paragrafına taşıyın. Ücret, kapsam ve uygunluk koşullarını sessizce değiştirmeyin.

| Önceki metindeki soru/tema | Etkin kaynak / işlem |
|---|---|
| Hangi hizmetleri veriyorsunuz? | Q001; ana sayfada kısa özet |
| İki yönde çeviri, tek günlük çalışma | Q003 ve Q004 |
| Hizmet bölgeleri / şehir ağı | Q002 ve ilgili şehir sayfası; mevcut “listede olmayan şehir” açıklaması korunur |
| Günlük fiyat / neden sabit rakam yok? | Q007; uygunluk ve masraf açıklaması tekilleştirilir |
| Teklif için hangi bilgiler gerekiyor? | Q013 ve Q018; iletişimde kısa bağlantı |
| Günlük ücret dışında hangi giderler var? | Q010/Q061; fiyat notu CTA yakınında kalır |
| Yarım günlük hizmet | Önceki “Yarım günlük hizmet alabilir miyim?” sorusu kalabilir; cevabı Q004 ve günlük fiyat modeliyle aynı koşulu korur |
| Birden fazla gün / aynı tercüman | Fiyat için Q011; kişi devamlılığı için Q042; çok şehir için Q031/Q067 |
| Teklif talebi rezervasyon mu? | Q041; formun altında kısa açıklama kalır |
| Program veya çalışma saatleri değişirse | Tarih/program için Q043; gün içi uzatma için Q009; ek kurulum günü için Q028 |
| Tercüman makineyi kurar mı? | Q084 açık hizmet sınırı; kurulumu üstlenen hizmet kartı oluşturulmaz |
| Fabrika ziyareti denetim/garanti mi? | Q091/Q092 açık hizmet sınırı |
| WhatsApp kullanamayan kullanıcı | Önceki 15.4’teki iki dilli yardımcı cevap korunur; Q046 iletişim bilgileriyle tutarlı kalır |
| İstanbul ilçe / farklı çalışma noktası | Bölüm 33 açıklamaları + 17.1 v1.2’deki üç iki dilli yerel soru; aynı eski örnek ikinci kez gösterilmez |
| Çinli üretici doğrudan Çince danışabilir mi? | Makine v1.2 ekindeki iki dilli üretici sorusu; yeni genel danışmanlık hizmeti değildir |
| Teknik aşamalara ayrı rezervasyon | Makine v1.2 ekindeki aynı program sorusu; günlük çalışma modeli korunur |

### 46.2 Koruma ile yayın kapısını ayırın

Altı “işletme onayı” kaydı dosyadan veya kaynak havuzundan silinmez. Gerçek politika teyidi alınana kadar üretim derlemesinde `publish=false` kalır. Yalnızca CSS ile gizlenmez; halka açık HTML, JSON-LD, site içi arama indeksi ve istemci veri paketinde de yayımlanmaz. Teyit geldiğinde iki dil birlikte onaylanır. Genel hizmet, fiyat notu ve iletişim akışı bu onaylar olmadan boş veya yanıltıcı bırakılmaz.

### 46.3 Uygulama belgesi kamuya açık web sayfası değildir

Bu MD’nin tamamını sitenin `/public` dizinine koymayın; iç notlar, kaynak tarihçesi ve doğrulanmamış politikalar kamuya açık içerik değildir. Sunucuya yalnızca yayımlanacak sayfa metinleri ve onaylı veri kayıtları gider. Eski Taksim adresi veya 600+ ifadesi, bu kaynakta kaldırma talimatında geçiyor olabilir; bunları canlıya aktarmayın.

<!-- V13_BRIDGE_BEGIN:faqdata -->
**v1.3 FAQ veri eklemesi:** Q001–Q110 ve iki dilli cevapları korunur. AZ001–AZ030 ayrı yerel seçkidir; her Q için zorunlu AZ çevirisi oluşturmayın. Kısmi locale modeli [bölüm 58.5](#v13-technical), AZ gerçek cevapları [bölüm 55](#v13-faq) içindedir.
<!-- V13_BRIDGE_END:faqdata -->

## 47. Soru-cevap bileşeni, iki dil ve teknik uygulama

### 47.1 Görsel ve etkileşim kararı

Beyaz/açık zemin, koyu metin ve önceki turuncu tasarım değişkenleri korunur. Sorular tek okunabilir kolonda, konu grupları altında yer alır. Mobilde iki sütunlu SSS, yatay kaydırmalı soru listesi veya uzun cevabı kesen sabit yükseklik kullanılmaz. İlk sürümde soru arama motoru veya üçüncü taraf sohbet aracı eklemek zorunlu değildir.

Q084, Q091 ve Q092’nin hizmet sınırı cevapları ilgili hizmet sayfasında açık görünür. Genel operasyon ve fiyat soruları native `details/summary` ile açılabilir. Rehber soruları ise H3 başlık + normal paragraf olarak okunabilir. Her sorunun altında tekrarlanan WhatsApp butonu yerine konu grubunun sonunda tek bağlamsal CTA kullanılır. Bu seçimler sitenin UX tasarım kararlarıdır; arama motorunun zorunlu soru sayısı veya biçimi değildir.

### 47.2 HTML ve erişilebilirlik

Yayımlanması onaylanmış soru ve cevabı sunucuda oluşturulan ya da statik üretilmiş HTML’de bulunsun. Cevapları yalnız kullanıcı tıklayınca API’den getirilen, arama sistemlerine farklı sunulan veya SEO için gizlenen bir yapıya dönüştürmeyin. Kullanıcının açabildiği normal akordeonlar ile manipülasyon amacıyla görünmez içerik aynı şey değildir; Google’ın spam politikası bu ayrımı yapar. [V12-S1]

Aşağıdaki örnek, Q084’ün onaylı Türkçe cevabından alınan gerçek başlangıçla aynı içerik kaydını kullanmalıdır; örnekteki kısa paragraf tam cevabın yerine geçmez.

```html
<section aria-labelledby="machine-faq-heading">
  <h2 id="machine-faq-heading">Kurulum tercümanlığı hakkında sorular</h2>
  <details id="faq-084" open>
    <summary>Tercüman makineyi kurar mı, yoksa teknik ekibin söylediklerini mi çevirir?</summary>
    <div class="faq-answer">
      <p>Tercüman makineyi kurmaz. Çinli teknik ekibin açıklamalarını,
      işletmenizin sorularını ve taraflar arasındaki sözlü iletişimi aktarır.</p>
    </div>
  </details>
</section>
```

Tam Q084 cevabı içerik kaydından basılır. Markdown dosyasındaki “Q084 —” numarası veya iç yayın notu summary içine alınmaz. `summary` klavye ile çalışır, odak çerçevesi görünür olur; yalnızca ikon tıklanabilir alanı kullanılmaz. Derin bağlantıyla kapalı bir soruya gelindiğinde soru açılır ve sabit header içeriği örtmez. JavaScript olmasa da soru başlığı ve native açma davranışı çalışır.

### 47.3 Veri modeli — yönetim paneli gerektirmez

İçerik depoda tutulan tipli veri/Markdown kayıtlarından derlenebilir. Ana belgedeki teknoloji seçimi açık kalır. Aşağıdaki tip bir uygulama örneğidir; belirli bir framework zorunluluğu değildir.

```ts
type Locale = 'tr' | 'zh-Hans';
type ReviewState = 'business-model' | 'conditional' | 'quote-confirmed' | 'owner-review';

type FaqItem = {
  id: string;                 // Q001…Q110; tekil
  sourceNumber: number;       // Kullanıcı dosyasındaki 1…110
  pageKey: string;            // Bölüm 44.3'teki tek birincil sayfa
  groupKey: string;
  reviewState: ReviewState;
  publish: boolean;           // owner-review ise teyide kadar false
  ownerApprovedAt?: string;  // Yalnızca gerçek onay tarihi; uydurulmaz
  locales: Record<Locale, {
    question: string;
    answer: string;
  }>;
};
```

Tek kayıt iki dili beraber taşır. Aynı cevabı üç ayrı JSON dosyasında elle farklılaştırmayın. Ücret veya operasyon koşulu değişirse etkilenen her iki dil ve kısa özetleri aynı değişiklikte gözden geçirilir. Türkçe ile Çince arasında farklı garanti, saat veya ödeme koşulu oluşmaz. Metinler varsayılan olarak güvenli metin biçiminde işlenir; ham, denetlenmemiş HTML çalıştırılmaz.

### 47.4 SEO, schema ve dil eşlenikleri

Gerçek hizmetler için önceki WebPage/Service/Organization/BreadcrumbList yaklaşımı korunur. Sırf soru-cevap var diye sahte yorum, yıldız, fiyat, ofis veya etkinlik organizatörü şeması oluşturulmaz. Google’ın güncelleme kaydı, FAQ zengin sonuçlarının 7 Mayıs 2026’dan itibaren gösterilmediğini ve ilgili dokümantasyonun kaldırıldığını açıklıyor. Dolayısıyla bu soru-cevaplar, görünür faydalı içerik olarak uygulanır; `FAQPage` ile özel Google görünümü vaat edilmez. [V12-S2]

Türkçe ve Çince sayfalar kendi URL’lerinde kalır. `hreflang` listesinde sayfa kendisini ve gerçek dil eşleniğini tam URL ile belirtir; eşleme karşılıklıdır. Siteye Çince soru eklenmesi, bütün Türkçe sayfaların `/tr/` altına taşınmasını gerektirmez. [V12-S3]

Bu soruların numarası, toplam adedi veya “cevap önce” biçimi bir sıralama formülü değildir. Düzenleme müşterinin ihtiyacını açıklamak içindir. Google’ın güncel AI rehberi özel AI metni/Markdown veya `llms.txt` gerekliliği olmadığını belirtiyor; bu geliştirme MD’si doğrudan sıralama dosyası olarak kullanılmaz. [V12-S4]

### 47.5 Ölçüm — kanıtlanmayan dönüşümü saymayın

`faq_open` gibi bir olay kullanılacaksa yalnız Q kimliği, sayfa kimliği ve dil gibi sınırlı alanlar gönderilebilir; kullanıcının form metni, teknik belge bilgisi, firma açıklaması veya iletişim bilgileri analitiğe taşınmaz. Olay için gerekli gizlilik/izin değerlendirmesi önceki belgeye tabidir. Soru açmak veya WhatsApp bağlantısına tıklamak, mesajın gönderildiğini ya da iş alındığını kanıtlamaz.

Q kimlikleri zamanla hangi konularda açıklama gerektiğini anlamaya yardımcı olabilir; kullanıcıların tamamı izleniyormuş gibi kesin oranlar oluşturulmaz. GSC/Bing/Baidu veya gerçek müşteri kayıtlarına erişim olmadan başlangıç performans rakamları yazılmaz.

<a id="v12-approvals"></a>
## 48. İşletme teyidi gerektiren cevaplar ve kesinlikle uydurulmayacak koşullar

### 48.1 Altı taslağın yayın kapısı

Cevaplar hazırlanmıştır; aşağıdaki teyitler, cevap eksikliği değil gerçek işletme politikasının bilinmemesinden doğan yayın kontrolüdür. Kodlama ve tasarım bu sorular için durdurulmaz. İlgili cevapların “uygun olursa / teyit edelim” kısmı kaldırılarak koşulsuz garantiye çevrilmez.

| Q | Önce netleştirilecek gerçek bilgi | Dosyadaki yaklaşım |
|---|---|---|
| Q015 | Faturayı düzenleyen işletme/ülke ve düzenlenebilecek gerçek belge | Kesin “fatura kesiyoruz” iddiası yok; yayın öncesi teyit |
| Q019 | Gerçek bilgi paylaşımı, gizlilik ve saklama/silme süreci | Hazırlık ve gereksinimleri önceden konuşan süreç taslağı; sertifika/otomatik gizlilik garantisi yok |
| Q020 | NDA değerlendirme ve imzalama yetkisi | İncelenmeden bütün sözleşmeleri imzalama taahhüdü yok |
| Q021 | Tercümanın karşı firmayla bağlantısını kontrol etme yöntemi | Kişi ve firma bazında teyit; bütün ağa ilişkin bağlantısızlık iddiası yok |
| Q045 | Tercümanın gelememesinde iletişim, alternatif araştırma ve koşul teyidi | Kesintisiz hizmet, anlık veya ücretsiz yedek garantisi yok |
| Q107 | Komisyon/ticari ilişki beyanı ve kontrol süreci | Tüm tercümanlar için doğrulanmamış “komisyon almaz” iddiası yok |

### 48.2 Teklifte netleşecek fakat sabit sayı eklenmeyecek konular

Günlük saat sınırı ve molalar; uzatma koşulları; şehirler arası seyahat günlerinin değerlendirilmesi; hafta sonu/tatil ücreti; çok günlük indirim; para birimi; ödeme yöntemi; kapora; iptal/değişiklik/iade şartları; fuar kartı ve giriş giderleri; koruyucu ekipmanı kimin sağlayacağı. Kullanıcı bu konularda sabit politika vermedi. İlgili cevaplar koşulu anlaşılır biçimde teklif teyidine bağlar.

Bu belgedeki müşteri soruları, sorulan hizmetin veya politikanın zaten var olduğuna kanıt değildir. Örneğin “komisyon alıyor musunuz?” sorusu cevabı otomatik olarak “hayır” yapmaz; “fatura var mı?” sorusu fatura altyapısının kurulduğunu göstermez.

### 48.3 Çince dil kontrolü

“口译” sözlü tercümanlığı, “设备安装口译” kurulum sırasındaki tercümanlığı anlatır. Çince cevaplarda kapsam Türkçeden genişletilmez. “发票” kullanımı belirli bir ülkenin vergi sistemine uygun özel belge taahhüdüne dönüştürülmez. Şehir isimleri gerçek konumu tarif eder; `办公室`, `分公司`, `常驻团队` gibi ofis/şube/yerleşik ekip iddiaları doğrulanmadan eklenmez. Son yayın kontrolünde Çinceyi okuyabilen işletme yetkilisi iki dilin ticari anlamını birlikte onaylar.

<!-- V13_BRIDGE_BEGIN:acceptance -->
**v1.3 kabul eklemesi:** Önceki kontroller sürer. Yeni AZ kaynak/dil/form/URL testleri [bölüm 60](#v13-tests), bu teslimatın kaynak koruma özeti [bölüm 62](#v13-provenance) içindedir.
<!-- V13_BRIDGE_END:acceptance -->

## 49. Bu dosyanın bütünlük kontrolü ve canlı yayın kabul testleri

### 49.1 Dosya üretiminde kontrol edilenler

Bu MD oluşturulurken kaynaklar yerel dosyalardan okundu. Soru numaralarının 1–110 aralığını eksiksiz kapsadığı, her sorunun iki dilde soru ve cevabı bulunduğu, her sorunun tek birincil sayfası olduğu ve önceki birleşik metnin eklemeler ayrıldığında aynen geri elde edildiği programatik olarak kontrol edildi. Yeni rehber dışında soru bazlı veya ilçe bazlı yeni URL türetilmedi.

Bu kontrol, canlı sitede linklerin açıldığı, botların erişebildiği veya hesapların kurulduğu anlamına gelmez. Canlı web sitesi bu görev kapsamında geliştirilmedi, yayımlanmadı veya değiştirilmedi.

### 49.2 Geliştiricinin canlıya çıkmadan önce tamamlayacağı testler

- [ ] Kullanıcının dört hizmeti korunuyor; yazılı çeviri, ithalat, tur, denetim ve teknik montaj satışı eklenmemiş.
- [ ] İlk tasarım ve SEO/GEO önerileri kaynakta korunmuş; tekrar eden alternatifler canlıda aynı anda görünmüyor.
- [ ] Q001–Q110 kayıtları eksiksiz; iki dilde soru ve cevap var; birincil sayfa eşleşmesi tekil.
- [ ] Onay bekleyen altı kayıt, teyit alınmadıysa kamuya açık HTML/JSON/site aramasında yok.
- [ ] İşletme tarafından onaylanan cevaplar iki dilde aynı çalışma koşullarını anlatıyor.
- [ ] Q084, Q091 ve Q092 ilgili hizmet sayfalarında kolay görülen açık içerik olarak yer alıyor.
- [ ] Fiyatlar günlük; şehir içi/şehir dışı ulaşım, konaklama ve yeme-içme ayrıca olduğu CTA yakınında belirtilmiş.
- [ ] Sabit günlük saat, kapora, indirim, iade veya fatura türü uydurulmamış.
- [ ] İstanbul sayfasına yerel açıklamalar ve iki dilli ek sorular yerleştirilmiş; sahte ofis/ilçe sayfaları üretilmemiş.
- [ ] Tek yeni rehber iki dilde tamam; koleksiyon üç eski + bir yeni kartı gösteriyor.
- [ ] Soru bağlantıları doğru sayfaya ve gerçek `faq-NNN` ankrajına gidiyor; dil değişimi çalışıyor.
- [ ] Akordeon klavye ile açılıyor, odak görünür, mobilde kesilme/taşma yok; cevap için AJAX zorunluluğu yok.
- [ ] Her sayfada tek H1, doğru title/description, self-canonical ve karşılıklı gerçek hreflang var.
- [ ] Hizmet ülkesine veya IP’ye göre zorunlu yanlış dil yönlendirmesi yok.
- [ ] Eski alan adı, uygun URL’ler, DNS/e-posta kayıtları ve yönlendirme planı korunmuş.
- [ ] WhatsApp, arama ve e-posta hedefleri gerçek cihazda doğrulanmış; Çince iletişim tek kanala bağımlı değil.
- [ ] WeChat, işletme profili ve üçüncü taraf hesapları erişim/teyit olmadan “tamamlandı” gösterilmiyor.
- [ ] Eski adres ve ekip sayısı görünür içerik, meta, schema, görsel alt metni ve footer’dan kaldırılmış.
- [ ] Gerçek müşteri fotoğrafı/referansı olmadığı için sahte logo, yorum veya uzmanlık geçmişi üretilmemiş.
- [ ] Kullanıcı mesajı, teknik detayları ve kişisel bilgileri analitik olaylara veya site URL’sine aktarılmıyor.
- [ ] Search Console/Bing/Baidu/Çin gerçek ağ kontrolleri varsa gerçek sonuçlarıyla kaydedilmiş; yapılmayan testler açık.
- [ ] Sitenin üst sıralarda veya AI cevaplarında kesin görüneceği vaadi yok.

<a id="v12-build-instruction"></a>
<!-- V13_BRIDGE_BEGIN:build -->
**v1.3 uygulama talimatı önceliği:** Aşağıdaki v1.2 talimatı kaynak olarak korunmuştur. Üç dilli uygulamada tek güncel talimat [bölüm 61](#v13-build) içindedir. Eski “ilk sürüm iki dil” satırını AZ kapsamını dışlamak için kullanmayın.
<!-- V13_BRIDGE_END:build -->

## 50. Kodlama aracına verilecek tek ve güncel uygulama talimatı

Aşağıdaki talimat bölüm 28 ve 42.3’teki önceki örneklerin güncel birleştirilmiş karşılığıdır. Önceki örnekler kaynak olarak korunur; çelişki varsa kullanıcı iş modeli ve bu sürümün hükümleri uygulanır.

```text
Bu tek Markdown dosyasını cince-tercuman.com yeniden yapımının ana spesifikasyonu olarak kullan.

Önce önsözü, hizmet modelini, URL haritasını, v1.2 sayfa eklerini ve 44–49. bölümleri oku.
Sonra mevcut sayfa metinlerini ve 30–43. bölümdeki bütün SEO/GEO önerilerini uygula.
İş planında veya doğrulama bekleyen başlıkta yazılı bir işi yapılmış gibi sunma.

İlk sürüm Türkçe ve basitleştirilmiş Çince olacak. Yönetim paneli, üyelik, ödeme sistemi
ve anlık rezervasyon ekleme. Önceki tasarım değişkenlerini, ikonsuz yazı logosunu,
responsive yerleşimi ve WhatsApp/e-posta alternatiflerini koru.

Mevcut Türkçe URL'leri topluca değiştirme veya /tr/ altına taşıma. İlgili eski sayfaları koru.
Yeni Çince eşlenikleri /zh/ altında üret. Geçiş envanteri doğrulanmadan hiçbir eski sayfaya
otomatik silme/redirect kararı uygulama; DNS, e-posta veya canlı hesaplarda yetkisiz işlem yapma.

110 soruyu Q001–Q110 kayıtlarıyla, dosyada gösterilen 21 birincil sayfa/rehber grubuna dağıt.
Her Q için iki dilde gerçek soru-cevap metni var; sadece başlık veya boş içerik üretme.
Hepsini ana sayfaya ya da tek SSS sayfasına doldurma. Her soru için yeni URL oluşturma.
Aynı niyetli eski SSS'yi yeni cevabın yanında tekrar gösterme; eski kaynak metni projede sakla.
Mevcut yardımcı SSS'lerin benzersiz ve uygun bilgilerini koru.

Altı owner-review kaydı için varsayılan publish=false kullan. Bu taslakları veri deposunda
koru, ama işletme teyidi olmadan HTML, JSON-LD, istemci paketi veya kamuya açık aramada gösterme.
Başka soru veya eski metin üzerinden aynı doğrulanmamış vaadi yeniden üretme.
Diğer koşullu cevapların 'uygunluk / teklif / önceden teyit' ifadelerini kaldırma.

Makineyi tercüman kurmaz. Fabrika ziyareti denetim değildir. Ürün kalitesi ve tedarikçi
güvenilirliği garantisi verilmez. Q084, Q091, Q092'yi hizmet sınırında açık göster.
Günlük ücret ve ayrıca alınan şehir içi/şehir dışı ulaşım, konaklama, yeme-içme notu kalır.
Saat, fiyat, kapora, indirim, iptal/iade veya fatura koşulu icat etme.

İstanbul'daki ilçe açıklamalarını ve Çince teknik ekip giriş kartını ekle.
CNC, plastik, ambalaj, tekstil ve otomasyon sorularını mevcut teknik hazırlık rehberinde kullan;
doğrulanmamış sektör uzmanlığı veya ayrı sektör satış sayfaları oluşturma.
Yeni tercüman seçim rehberini iki dilde ekle; üç mevcut rehberi silme; koleksiyonda dört kart olsun.

Onaylı soru-cevapları sunucuda veya statik derlemede HTML'e bas. Rehber içeriğini okunabilir
başlık/paragraf, operasyon SSS'lerini native details/summary olarak uygula. Soru ankrajları,
klavye etkileşimi, mobil taşma ve iki dil arası eşlenik bağlantıları için test yaz.

Search Console, Bing, Baidu, IndexNow ve Çin'den ağ testi maddeleri gereken gerçek erişimle
ayrı uygulanacak işlerdir. Doğrulanmamış WeChat butonu/QR ekleme. Özel AI etiketiyle birincilik
vaat etme. Görünür içerik ile schema tutarlı olsun; sahte fiyat/yıldız/şube bilgisi ekleme.

Önce oluşturulan dosya/sayfa listesini, onay bekleyen kayıtları, URL değişiklik önerilerini
ve test sonuçlarını sun. Bu Markdown'ın tamamını halka açık public dizinine kopyalama.
```

## 51. Kaynaklar, köken ve kapsam sınırları

### 51.1 Kullanıcı dosyaları

**Ana metin:** `cince-tercuman-yeni-site-v1-1-seo-geo-ekli.md`. Bu dosya, ilk `cince-tercuman-yeni-site-tasarim-ve-icerik.md` içeriği ile `cince-tercuman-seo-geo-tr-zh-ek-strateji.md` içeriğinin tamamını zaten içeriyordu. Bu nedenle ek strateji ikinci kez kopyalanmadı. Önceki 1–43. bölümlerin metni korunarak ilgili noktalara yeni bloklar eklendi.

**Soru kaynağı:** `Pasted markdown.md`. Başlıkları altında 110 soru bulunur. Kaynak soruları işletme politikası değil, cevaplanması istenen müşteri ihtiyaçları olarak kullanıldı. Kaynağın A/B ayrımı ve özgün sıra numaraları Q indeksinde korundu; sayfa dağılımı kaynakta önerildiği gibi hizmet, fiyat, şehir ve rehber ihtiyaçlarına göre yapıldı.

**Cevapların dayanağı:** Kullanıcının konuşmada onayladığı hizmetler, şehirler, günlük ücret modeli, ayrıca alınan masraflar, iletişim bilgileri ve önceki tasarım belgesi. Bunların ötesindeki operasyonel tercihler koşullu süreç önerisi veya işletme teyidi olarak işaretlendi. Geçmiş saha deneyimi, sertifika, müşteri referansı, kesin müsaitlik veya işletme politikası uydurulmadı.

**Bu sürümde yapılmayanlar:** Yeni rakip sıralama/arama hacmi araştırması, ücretli backlink analizi, işletme hesabına bağlanma, canlı site düzenleme, ödeme veya rezervasyon altyapısı kurma, Çin'den gerçek ağ testi. Önceki araştırma notları kendi kapsam ve tarihleriyle korunur.

### 51.2 Bu sürümün teknik açıklamalarında kontrol edilen resmî kaynaklar

Kontrol tarihi: 15 Eylül 2026. Bu kaynaklar soru cevaplarının ticari doğruluğunu kanıtlamaz; yalnızca ilgili teknik yayın kararlarının referansıdır. Kamuya açık müşteri metnini araştırma raporuna çevirmeyin.

[V12-S1]: https://developers.google.com/search/docs/essentials/spam-policies "Google Search spam politikaları — benzer geçiş sayfaları, gizli içerik ve akordeon ayrımı"
[V12-S2]: https://developers.google.com/search/updates "Google Search güncelleme kaydı — FAQ rich result kaldırılması; 8 Mayıs ve 15 Haziran 2026 kayıtları"
[V12-S3]: https://developers.google.com/search/docs/specialty/international/localized-versions "Google Search — gerçek dil eşlenikleri ve karşılıklı hreflang"
[V12-S4]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide "Google Search — AI özellikleri, özel dosya gerekliliği bulunmaması ve faydalı içerik yaklaşımı"

Kaynak 29 ve 43'teki önceki referanslar da bu dosyada korunmuştur. Hiçbir kaynak sıralama, ilçe liderliği veya AI sistemlerinde kesin önerilme garantisi olarak sunulmaz.


### 51.3 Kaynak bütünlüğü özeti — yalnızca geliştirme için

| Kontrol | Sonuç |
|---|---|
| Önceki birleşik metnin tam geri elde edilmesi | Başarılı; yalnızca yeni ek bloklar çıkarıldığında kaynak aynı |
| İlk ana belge ve SEO/GEO eki | İkisi de önceki birleşik metnin içinde eksiksiz bulundu |
| Kullanıcı sorusu / Türkçe cevap / Çince soru / Çince cevap | 110 / 110 / 110 / 110 |
| Birincil sayfa/rehber eşleştirmesi | 21 grup; her Q tek bir grupta |
| İşletme teyidi bekleyen cevaplar | Q015, Q019, Q020, Q021, Q045, Q107 |
| Eklenen yeni rehber | Bir konu, iki dil |
| Canlı site üzerinde işlem | Yapılmadı |

**Korunan v1.1 kaynak SHA-256:** `a1f226d22e62ef00690b31d7df62a1d44e7fed45311c405fcc346e262479496d`  
**Soru kaynağı SHA-256:** `cb7c2e717ed92cda9e684e5bdce10635fa674d117c9ca6d82f1623551fa626bc`

Bu özet web sitesine yayımlanmaz.

<!-- V13_PRESERVED_BASE_END -->

---

# v1.3 — Azərbaycan dili: yeni müşteri pazarı ve üç sayfalık başlangıç

<a id="v13-scope"></a>
## 52. Azerbaycan pazarı, hizmet kapsamı ve dil uygunluğu

### 52.1 Bu ekin dayanağı

Kullanıcı Azerbaycan'ı büyüyen ikincil müşteri pazarı olarak tanımladı ve başlangıçta landing page, FAQ ve iletişim istedi. Bu ifade bir **iş önceliğidir**; bu güncellemede bağımsız pazar büyüklüğü veya büyüme oranı araştırması yapılmadı. Aşağıdaki sorgular kullanıcı tarafından verilen adaylardır; arama hacmi, rekabet puanı veya sıralama sonucu değildir.

AZ metinleri önceki Türkçe metinlerin mekanik sözcük değişimiyle değil, bu müşterinin program ve dil ihtiyacına göre hazırlanmıştır. Ana dili Azerbaycanca olan bağımsız bir editörün incelemesi henüz yapılmamıştır; yayın kontrol listesinde ayrıca yer alır. Bu durum metinlerin yerine boş çeviri alanları bırakıldığı anlamına gelmez: üç sayfanın gerçek içerikleri aşağıdadır.

### 52.2 Kimin hangi ihtiyacına cevap veriyoruz?

| Müşteri senaryosu | Sunulacak karşılık | Doğrulanmadan söylenmeyecek |
|---|---|---|
| Azerbaycan'dan Çin'e fabrika ziyareti için giden müşteri | Müşterinin belirlediği programda günlük sözlü tercümanlık | Üretici bulma, satın alma, denetim, kalite garantisi |
| Guangzhou veya Canton Fair'e giden müşteri | Stant görüşmeleri için tercüman uygunluğu ve günlük teklif | Tur, otel, bilet, giriş kartı veya ithalat organizasyonu |
| Türkiye'deki tesisine Çinli mühendis getiren Azerbaycanlı işletmeci | Kurulum ve devreye alma iletişiminde Çin dili–Türkçe desteği | Tercümanın mühendislik/kurulum sorumluluğu üstlenmesi |
| Çince ve Türkçe arasında çalışabilecek tercümanla iletişimi uygun bulan müşteri | Müşterinin Türkçe iletişimi teyit ederek çalışması | “Diller yakın, bütün Azerbaycanlılar anlar” varsayımı |
| Özellikle Azerbaycanca konuşan tercüman isteyen müşteri | Ayrı dil gereksinimi olarak inceleme | Hazır AZ tercüman, koşulsuz kabul veya dil yeterliliği garantisi |
| Kurulumun Azerbaycan'da yapılmasını isteyen müşteri | Yeni saha talebi olarak ayrıca değerlendirme | Bakü ofisi, Azerbaycan yerleşik ağı veya ülke çapında hizmet |

### 52.3 Dil uygunluğu — görünür sabit açıklama

Bu blok karşılama sayfasında ilk CTA'nın yanında, iletişim formunun dil alanında ve ilgili AZ soru-cevaplarında görünür. Yalnız kapalı bir akordeona veya footer'a saklanmaz.

**AZ — kısa site metni, `AZ-LANGUAGE-NOTE`:**

> Əsas iş dillərimiz Çin dili və türk dilidir. Türk dilində ünsiyyət sizin üçün uyğundursa, bu qaydada işləyə bilərik. Tərcüməçinin mütləq azərbaycanca danışmasını istəyirsinizsə, bunu əvvəlcədən bildirin; həmin dil üzrə uyğunluğu ayrıca dəqiqləşdirməliyik.

**AZ — kapsamlı açıklama:**

> Saytın Azərbaycan dilində olması hər tərcüməçinin azərbaycanca danışdığı demək deyil. Görüşmədə hansı dildən istifadə olunacağını əvvəlcədən razılaşdırırıq. Türk dilində danışmaq və deyilənləri başa düşmək sizin üçün rahatdırsa, Çin dili ilə türk dili arasında şifahi tərcümə əsasında işləmək mümkündür. Azərbaycan dilində şifahi ünsiyyət sizin üçün şərtdirsə, tərcüməçinin bu tələbi qarşılayıb-qarşılamadığını ayrıca yoxlamadan sifarişi təsdiqləmirik.

**İşleyiş kuralı:** Ön görüşme yapılabilirse gündelik sohbetle yetinmeyin; müşterinin hizmete konu birkaç örnek soruyu ve cevabı anlayabildiğini teyit edin. Bu, sertifikalı dil testi veya teknik doğruluk garantisi olarak sunulmaz. İkinci tercüman, yapay zekâ aracılığıyla ardışık çeviri veya başka bir dil çifti otomatik çözüm olarak eklenmez.

### 52.4 Günlük ücret — görünür sabit açıklama

**AZ — site metni, `AZ-PRICE-NOTE`:**

> Xidmət haqqı gün hesabı ilə müəyyən edilir. Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri ayrıca hesablanır.

Bu açıklama kısa CTA bloklarında da korunur. Saatlik, yarım günlük, sabit paket, “her şey dahil” veya manata çevrilmiş uydurma fiyat oluşturulmaz. Günlük çalışma saatleri, ek süre ve ödeme koşulları teklif aşamasında teyit edilir.

<a id="v13-routes"></a>
## 53. AZ site haritası ve sorguların yerleşimi

### 53.1 Başlangıçta yayımlanacak üç URL

| Sayfa kimliği | URL | Rol | İlk yayın kararı |
|---|---|---|---|
| `home` / AZ sürümü | `/az/` | Azerbaycanca ana giriş; dört hizmet, bölgeler, dil uygunluğu, günlük ücret, kısa FAQ | Tam metin bölüm 54 |
| `az-faq` | `/az/suallar/` | AZ müşterisine uyarlanmış 30 soru-cevap | Tam metin bölüm 55 |
| `contact` / AZ sürümü | `/az/elaqe/` | Dil gereksinimli talep formu, WhatsApp, telefon, e-posta | Tam metin bölüm 56 |

Bu yollar mevcut alan adına eklenir. Türkçe kök URL'ler ve `/zh/` yolları taşınmaz. `/azerbaycan/`, `/az-az/`, `/azerice/` ve her kelime için ek AZ URL'ler açılmaz. ASCII URL kullanımı bir uygulama tercihidir; sayfa içindeki Azerbaycanca harfler aynen korunur.

### 53.2 Kullanıcının sekiz sorgusu — tekil hedefleme

| Kullanıcının verdiği aday sorgu | Birincil URL / bölüm | Metindeki yaklaşım |
|---|---|---|
| **Çində tərcüməçi** | `/az/` | H1 ve girişte doğal kullanım |
| **Çin dili tərcüməçisi** | `/az/` | Genel hizmet anlatımı; yazılı çeviri değil şifahi hizmet |
| **Çində Azərbaycan dilli tərcüməçi** | `/az/#dil-uygunlugu` | Soru başlığı + aynı görünür blokta koşullu cevap; mevcut AZ tercüman vaadi yok |
| **Guangzhou tərcüməçi** | `/az/#guangzhou` | Şehir ve ziyaret planı; ayrı ince şehir sayfası yok |
| **Canton Fair tərcüməçi** | `/az/#canton-fair` | Fuar görüşmesi bağlamı; organizatör/tur hizmeti iddiası yok |
| **Çində zavod ziyarəti üçün tərcüməçi** | `/az/#zavod-ziyareti` | Müşterinin belirlediği fabrika programında sözlü tercümanlık |
| **Çindən gələn mühəndislər üçün tərcüməçi** | `/az/#avadanliq-qurasdirilmasi` | Kurulumun gerçekleşeceği ülke/şehir teyidiyle teknik iletişim |
| **avadanlıq quraşdırılması üçün Çin dili tərcüməçisi** | `/az/#avadanliq-qurasdirilmasi` | Aynı teknik hizmet bölümü; ayrı eşanlamlı sayfa yok |

İkinci sütundaki `#` parçaları yeni indekslenecek sayfalar değildir; aynı HTML içindeki gerçek bölümlerdir. Bütün sorguları her başlıkta tekrarlamayın. Exact-match ifadenin doğal olmadığı yerde eşdeğer profesyonel dil kullanın. “Azərbaycan dilli tərcüməçi” ifadesini doğrulanmış hizmet adı, fiyat kartı veya schema `Service.name` alanı olarak kullanmayın.

### 53.3 AZ menü ve içerik bağlantısı haritası

Ana menü: **Xidmətlər → `/az/#xidmetler`**, **Şəhərlər → `/az/#seherler`**, **Günlük qiymət → `/az/#gunluk-qiymet`**, **Suallar → `/az/suallar/`**, **Əlaqə → `/az/elaqe/`**.

Karşılama sayfasındaki hizmet kartları kendi AZ bölümlerine gider. Kullanıcı “hizmeti incele” seçtiğinde habersizce Türkçe sayfaya gönderilmez. Daha kapsamlı Türkçe rehbere isteğe bağlı bağlantı verilecekse **“Ətraflı məlumat — türk dilində”** etiketi kullanılır. Başlangıçtaki üç AZ sayfası tek başına talep oluşturmak için yeterli olmalıdır.

### 53.4 Sonraki genişleme — ilk yayında otomatik uygulanmaz

Teknik kurulum, Canton Fair veya fabrika ziyareti için ayrı AZ sayfa ancak gerçek talepler ve özgün içerik ihtiyacı oluştuğunda değerlendirilir. Yeni sayfa açıldığında genel landing sayfasındaki bölüm kısa özete dönüşür ve ayrıntıya bağlanır; aynı uzun metin iki URL'de hedef yarışına sokulmaz. Azerbaycan'daki şehir adlarını değiştirerek yerel ofis sayfaları üretilmez.

<a id="v13-landing"></a>
## 54. AZ karşılama sayfası — `/az/`

### 54.1 SEO ve sayfa kimliği

- **Sayfa dili:** `az`; Latin yazımı.
- **Title — AZ site metni:** `Çində tərcüməçi | Sərgi, zavod və texniki görüşlər`
- **Meta description — AZ site metni:** `Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması üçün şifahi tərcümə. İş dilini, tarixləri və günlük qiyməti dəqiqləşdirin.`
- **H1 — AZ site metni:** `Çində tərcüməçi: zavod və sərgi görüşlərində dil dəstəyi`
- **Canonical:** `https://www.cince-tercuman.com/az/`
- **Ana dönüşüm:** Dil gereksinimi ve program bilgileriyle günlük uygunluk/teklif talebi.
- **Masaüstü:** Solda başlık ve açıklama; sağda kısa program kartı. **Mobil:** H1 → dil notu → CTA → ücret notu → kart. İlk ekranda yapay ofis/ekip görseli yok.

### 54.2 Ekran 1 — Hero

**AZ — üst etiket:**

> Azərbaycandan Çin və Türkiyəyə işgüzar səfər edənlər üçün

**AZ — H1:**

> Çində tərcüməçi: zavod və sərgi görüşlərində dil dəstəyi

**AZ — açıklama:**

> Çində zavod və sərgi ziyarətləri, Türkiyədə isə Çinli texniki heyətlə avadanlıq quraşdırılması zamanı şifahi tərcümə dəstəyi göstəririk. Səfərinizin məqsədini, şəhəri və tarixləri bildirin; iş dilini və tərcüməçinin həmin günlərdə işləyə biləcəyini əvvəlcədən dəqiqləşdirək.

**Görünür dil notu:** Bölüm 52.3'teki `AZ-LANGUAGE-NOTE` aynen kullanılır.

**AZ — butonlar:** `Qiymət təklifi istəyin` → `/az/elaqe/#muraciet` · `WhatsApp-da yazın` → bölüm 56.7'deki kısa, dil teyitli mesaj.

**Görünür fiyat notu:** Bölüm 52.4'teki `AZ-PRICE-NOTE` aynen kullanılır.

**AZ — program kartı başlığı:** `Görüşməniz harada və nə vaxtdır?`

**AZ — kart metni:**

> Hansı şəhərə gedirsiniz? Zavod ziyarəti, sərgi, yoxsa avadanlıq quraşdırılması üçün tərcüməçi lazımdır? Tarixləri və hansı dildə rahat ünsiyyət qurduğunuzu bildirin.

**AZ — kart butonu:** `Müraciətinizi hazırlayın` → `/az/elaqe/#muraciet`.

Kart ayrı bir kısaltılmış rezervasyon formu değildir. Aynı verileri iki kez istememek için tam forma yönlendirir.

### 54.3 Ekran 2 — Dört hizmet, dört açık kapsam

**HTML bölüm kimliği:** `xidmetler`  
**AZ — başlık:** `Hansı iş üçün tərcüməçi axtarırsınız?`

**Kart 1 — Çində şifahi tərcümə**

> Əvvəlcədən planlaşdırdığınız görüş və səfər proqramında Çin dilində ünsiyyət üçün tərcüməçi dəstəyi. Şəhəri, görüşün mövzusunu və iş dilini əvvəlcədən dəqiqləşdiririk.

Buton: `Görüşünüzü planlaşdırın` → `/az/#cinde-tercume`.

**Kart 2 — Avadanlıq quraşdırılması zamanı tərcümə**

> Çinli mühəndislərlə müəssisənizin əməkdaşları arasında quraşdırma, sınaq və istismara vermə mərhələlərində şifahi ünsiyyət. Tərcüməçi texniki heyətin yerini tutmur.

Buton: `Texniki işinizi bildirin` → `/az/#avadanliq-qurasdirilmasi`.

**Kart 3 — Çində zavod ziyarəti**

> Seçdiyiniz zavodda istehsal prosesi, məhsul və sifariş şərtləri barədə görüşlərə tərcüməçi ilə qatılın. Ziyarətin məqsədini və görüşəcəyiniz müəssisəni əvvəlcədən paylaşın.

Buton: `Zavod ziyarətini dəqiqləşdirin` → `/az/#zavod-ziyareti`.

**Kart 4 — Çində sərgi ziyarəti**

> Canton Fair və Çindəki digər sərgilərdə stend görüşmələri üçün şifahi tərcümə. Məhsul qrupunu, iştirak edəcəyiniz sərgini və günləri bildirin.

Buton: `Sərgi planını paylaşın` → `/az/#canton-fair`.

### 54.4 Ekran 3 — Dil konusunu saklamadan açıklama

**HTML bölüm kimliği:** `dil-uygunlugu`  
**AZ — başlık:** `Çində Azərbaycan dilli tərcüməçi axtarırsınız?`

**AZ — site metni:**

> Əvvəlcə sizin üçün uyğun iş dilini müəyyənləşdirək. Əsas xidmətimiz Çin dili ilə türk dili arasında şifahi tərcümədir. Türk dilində görüşməni rahat izləyə bilirsinizsə, ünsiyyəti bu qaydada qura bilərik.
>
> Tərcüməçinin azərbaycanca danışması sizin üçün mütləq şərtdirsə, bunu müraciətdə ayrıca seçin. Belə bir tərcüməçinin mövcudluğunu və dil uyğunluğunu yoxlamadan sifarişi təsdiqləmirik. Saytın Azərbaycan dilində olması hər tərcüməçinin bu dili bildiyi mənasına gəlmir.

**AZ — buton:** `Dil tələbinizi bildirin` → `/az/elaqe/#is-dili`.

**Uygulama:** Başlık ve koşul aynı bileşende tutulur. Reklam özeti, AI için kısa alıntı veya servis kartı üretirken sadece başlığı alıp koşullu cevabı çıkaran bir şablon kullanılmaz.

### 54.5 Ekran 4 — Çin’de genel görüşme ve fabrika ziyareti

**HTML bölüm kimliği:** `cinde-tercume`  
**AZ — başlık:** `Çində görüşmələrinizə aydın proqramla gedin`

**AZ — site metni:**

> Çin dili tərcüməçisi axtararkən yalnız şəhəri deyil, görüşün mövzusunu da bildirmək vacibdir. Məhsulu müzakirə edəcəksiniz, istehsal xəttinə baxacaqsınız, yoxsa texniki izahları dinləyəcəksiniz? Bu məlumatlar uyğun tərcüməçinin seçilməsinə və hazırlığına kömək edir.
>
> Görüşəcəyiniz tərəfi və proqramı siz müəyyən edirsiniz. Biz razılaşdırılmış görüşlərdə Çin dili ilə türk dili arasında şifahi ünsiyyətə dəstək veririk; iş dilinin sizin üçün uyğunluğunu əvvəlcədən yoxlayırıq.

**HTML alt bölüm kimliği:** `zavod-ziyareti`  
**AZ — alt başlık:** `Çində zavod ziyarəti üçün tərcüməçi`

**AZ — site metni:**

> Ziyarət edəcəyiniz zavodun yerini, məhsul qrupunu və görüşdə soruşmaq istədiyiniz əsas sualları paylaşın. İstehsal xəttinin izahı, minimum sifariş miqdarı, nümunə, qiymət və çatdırılma müddəti barədə danışarkən qarşılıqlı ünsiyyətə kömək edirik.
>
> Bu xidmət zavod auditi və ya məhsul keyfiyyətinə zəmanət deyil. Ticarət qərarları sizə aiddir; tərcüməçi tərəflərin dediklərini və suallarını bir-birinə çatdırır.

**AZ — kısa hazırlık satırı:** `Zavodun yeri · Məhsul qrupu · Görüş tarixi · Əsas suallar`

**AZ — buton:** `Zavod ziyarəti üçün təklif istəyin` → `/az/elaqe/?service=factory#muraciet`.

### 54.6 Ekran 5 — Guangzhou ve Canton Fair

**HTML bölüm kimliği:** `guangzhou`  
**AZ — başlık:** `Guangzhou səfəriniz üçün tərcüməçi`

**AZ — site metni:**

> Guangzhou səfərinizdə sərgi ilə yanaşı zavod görüşləri də planlaşdırırsınızsa, hər işin yerini və gününü ayrıca bildirin. Sərgi salonu, zavod və qalacağınız yer arasındakı gediş-gəlişi nəzərə alaraq tərcüməçinin proqramını dəqiqləşdirək.

**HTML alt bölüm kimliği:** `canton-fair`  
**AZ — alt başlık:** `Canton Fair üçün tərcüməçi dəstəyi`

**AZ — site metni:**

> Kanton Sərgisində — Canton Fair — stendləri gəzərkən məhsulun xüsusiyyətləri, sifariş miqdarı, nümunə və təhvil müddəti barədə suallarınızı qarşı tərəfə çatdırmağa kömək edirik. İştirak edəcəyiniz mərhələni, tarixləri və məhsul qruplarını əvvəlcədən paylaşın.
>
> Komandanız eyni vaxtda müxtəlif stendlərdə görüşəcəksə, bunu da bildirin. Bir tərcüməçi ayrı yerlərdə keçirilən eyni vaxtlı görüşlərə birlikdə qatıla bilməz. Lazım olan tərcüməçi sayı proqramınıza görə dəqiqləşdirilir.

**AZ — kapsam notu:** `Xidmət sərgi görüşmələrində şifahi tərcüməni əhatə edir. Səfər və sərgi iştirakının təşkili bu xidmətə daxil deyil.`

**AZ — buton:** `Canton Fair tarixlərini bildirin` → `/az/elaqe/?service=fair&context=canton#muraciet`.

Bu içerik dönemden bağımsızdır. Teyit edilmemiş fuar tarihi, giriş kuralı veya fiyat eklenmez. `context=canton` beşinci hizmet değil, fuar hizmetinin bağlamıdır.

### 54.7 Ekran 6 — Çinli mühendisler ve teknik kurulum

**HTML bölüm kimliği:** `avadanliq-qurasdirilmasi`  
**AZ — başlık:** `Çindən gələn mühəndislər üçün tərcüməçi`

**AZ — site metni:**

> Türkiyədəki müəssisənizə Çindən texniki heyət gəlirsə, avadanlığın quraşdırılması və istismara verilməsi zamanı Çin dili ilə türk dili arasında şifahi tərcümə üçün müraciət edə bilərsiniz. Avadanlığın növünü, işin mərhələsini, şəhəri və tarixləri bildirin.
>
> Quraşdırma, sınaq, nasazlığın izahı və operatorlara verilən təlimatlarda anlaşılmazlığı azaltmaq üçün texniki materialları əvvəlcədən paylaşmağınız faydalıdır. Tərcüməçinin həmin mövzu üzrə uyğunluğu ayrıca qiymətləndirilir; bütün sahələrdə eyni təcrübənin olduğunu iddia etmirik.

**AZ — alt başlık:** `Avadanlıq quraşdırılması üçün Çin dili tərcüməçisi nə edir?`

**AZ — site metni:**

> Tərcüməçi mühəndislərin izahlarını, müəssisə əməkdaşlarının suallarını və qarşılıqlı cavabları çatdırır. Avadanlığı özü quraşdırmır, texniki qərar vermir və işin təhlükəsizliyinə dair mühəndislik məsuliyyəti daşımır.

**AZ — ülke sınırı notu:**

> Hazırkı xidmət planımız Türkiyə və Çini əhatə edir. İş Azərbaycanda görüləcəksə, məkanı əvvəlcədən bildirin; bu, ayrıca qiymətləndirilməli olan müraciətdir və xidmətin həmin ölkədə mövcudluğu hələ təsdiqlənmiş sayılmır.

**AZ — buton:** `Quraşdırma proqramını paylaşın` → `/az/elaqe/?service=machine#muraciet`.

### 54.8 Ekran 7 — Hizmet coğrafyası

**HTML bölüm kimliği:** `seherler`  
**AZ — başlık:** `Şəhəri deyil, işin görüləcəyi yeri də bildirin`

**AZ — Çin başlığı:** `Çində`  
**AZ — Çin metni:**

> Guangzhou, Şanxay (Shanghai) və Pekin (Beijing) üzrə tərcüməçi şəbəkəmiz var. Bu mərkəzlərə yaxın şəhərlərdəki müraciətləri tarix, məsafə və tərcüməçi uyğunluğuna görə qiymətləndiririk.

**AZ — Türkiye başlığı:** `Türkiyədə`  
**AZ — Türkiye metni:**

> İstanbul, Tekirdağ, Düzce, Ankara, Kayseri və Gaziantepdə, eləcə də yaxın bölgələrdəki işlər üçün müraciət edə bilərsiniz. Tərcüməçinin faktiki uyğunluğu iş yeri və tarixlər dəqiqləşdikdən sonra təsdiqlənir.

**AZ — ortak açıklama:**

> Şəbəkəmizin olması hər şəhərdə ayrıca ofisimiz və ya daim hazır tərcüməçimiz olduğu demək deyil. Ofisinizin ünvanı ilə zavodun yerləşdiyi yer fərqlidirsə, hər ikisini bildirin. Proqram işin görüləcəyi yerə əsasən planlaşdırılır.

**AZ — buton:** `Şəhəri və iş yerini bildirin` → `/az/elaqe/#muraciet`.

### 54.9 Ekran 8 — Üç adımlı talep akışı

**AZ — başlık:** `Tərcüməçi sifarişini necə planlaşdırırıq?`

**1 — Proqramınızı paylaşın**

> Xidməti, ölkəni, şəhəri və tarixləri bildirin. Görüşün məqsədini qısaca yazın.

**2 — İş dilini və uyğunluğu dəqiqləşdirək**

> Türk dilində ünsiyyətin sizin üçün uyğun olub-olmadığını və ya mütləq Azərbaycan dilində danışan tərcüməçiyə ehtiyacınızı qeyd edin. Proqramla yanaşı bu tələbi də qiymətləndiririk.

**3 — Günlük şərtləri razılaşdıraq**

> Tərcüməçinin uyğunluğu, günlük iş saatları, xidmət haqqı və ayrıca xərclər dəqiqləşdikdən sonra sifarişin təsdiq qaydasını razılaşdırırıq. Sadəcə mesaj göndərmək sifarişi avtomatik təsdiqləmir.

### 54.10 Ekran 9 — Günlük ücret ve ayrıca masraflar

**HTML bölüm kimliği:** `gunluk-qiymet`  
**AZ — başlık:** `Günlük qiymət nəyə əsasən müəyyən olunur?`

**AZ — site metni:**

> Qiymət işin görüləcəyi şəhərə, tarixlərə, mövzuya və tərcüməçinin uyğunluğuna görə dəqiqləşdirilir. Bir neçə günlük proqramda da xidmət haqqı gün hesabı ilə verilir.
>
> Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri ayrıca hesablanır. Günlük iş müddəti, əlavə vaxt və ödəniş qaydası təklifdə aydınlaşdırılır. Saytda göstərilməyən saat, məbləğ və ya valyutanı əvvəlcədən qəbul etməyin.

**AZ — buton:** `Proqramınıza uyğun təklif istəyin` → `/az/elaqe/#muraciet`.

### 54.11 Ekran 10 — Kısa sorular ve doğru tam cevaba geçiş

Landing'de aşağıdaki beş kısa cevap gösterilir. Tam cevapların tek kaynağı bölüm 55'tir; özetlerin aynı iş koşullarına bağlı kalması gerekir.

| AZ — soru | AZ — kısa cevap | Tam cevap |
|---|---|---|
| Tərcüməçi azərbaycanca danışacaq? | Bunu ayrıca dəqiqləşdirməliyik. Əsas iş dillərimiz Çin dili və türk dilidir; saytın Azərbaycan dilində olması bütün tərcüməçilərin azərbaycanca danışdığı demək deyil. | `/az/suallar/#az-faq-002` |
| Türk dilində rahat danışa bilmirəmsə, nə etməliyəm? | Azərbaycan dilində şifahi ünsiyyətin sizin üçün şərt olduğunu bildirin. Dil uyğunluğu təsdiqlənmədən türk dili üzərindən işləməyə razılaşmış sayılmırsınız. | `/az/suallar/#az-faq-004` |
| Canton Fair üçün tərcüməçi ilə işləmək mümkündürmü? | Sərgidə olacağınız günləri və məhsul qrupunu paylaşın. Uyğunluğu proqramınıza görə yoxlayırıq; sərgi iştirakının təşkili ayrıca xidmət kimi təklif edilmir. | `/az/suallar/#az-faq-007` |
| Qiymətə bütün xərclər daxildir? | Xeyr. Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri günlük xidmət haqqından ayrıca hesablanır. | `/az/suallar/#az-faq-017` |
| İş Azərbaycanda görüləcəksə, müraciət edə bilərəm? | İş yerini birbaşa mesajda bildirin. Hazırkı təsdiqlənmiş xidmət coğrafiyası Türkiyə və Çindir; Azərbaycan üzrə xidmət ayrıca qiymətləndirilməlidir. | `/az/suallar/#az-faq-015` |

**AZ — bölüm butonu:** `Bütün suallara baxın` → `/az/suallar/`.

### 54.12 Ekran 11 — Son iletişim çağrısı

**AZ — başlık:** `Proqramınız bəllidirsə, birlikdə dəqiqləşdirək`

**AZ — site metni:**

> Şəhəri, tarixləri və nə üçün tərcüməçiyə ehtiyacınız olduğunu yazın. Türk dilində ünsiyyətin sizin üçün uyğunluğunu da qeyd edin; tərcüməçi və günlük şərtlər barədə düzgün qiymətləndirmə aparaq.

**AZ — butonlar:** `Qiymət təklifi istəyin` · `WhatsApp-da yazın`.

`AZ-PRICE-NOTE` ve kısa `AZ-LANGUAGE-NOTE` görünür tutulur. İlk ziyaret için açılır indirim penceresi, sayaç veya sahte müsaitlik mesajı eklenmez.

<a id="v13-faq"></a>
## 55. AZ soru-cevap sayfası — `/az/suallar/`

### 55.1 Sayfa kimliği ve yerleşim

**Title — AZ site metni:** `Çində tərcüməçi: suallar və cavablar | Çince Tercüman`  
**Meta description — AZ site metni:** `Çində tərcüməçi, zavod və sərgi ziyarəti, avadanlıq quraşdırılması, iş dili, günlük qiymət və əlavə xərclər barədə suallarınıza cavablar.`  
**H1 — AZ site metni:** `Çin dili tərcüməçisi barədə suallar və cavablar`  
**Canonical:** `https://www.cince-tercuman.com/az/suallar/`

**AZ — giriş metni:**

> Səfərinizə və ya texniki görüşünüzə başlamazdan əvvəl xidmətin sərhədlərini, iş dilini və ayrıca xərcləri bilmək vacibdir. Burada ən çox dəqiqləşdirilən mövzuları bir araya topladıq. Konkret şəhər və tarix üçün tərcüməçi uyğunluğu isə müraciətiniz əsasında yoxlanır.

Girişten sonra `AZ-LANGUAGE-NOTE` açık görünür. Altta konu grupları, ardından 30 native `details/summary` soru bulunur. Grup başlıkları H2, soru başlıkları `summary` olur. Yanıtlar statik/sunucu üretimi HTML'dedir; yalnızca tıklama sonrasında API'den alınmaz. Mobilde tek sütun ve görünür odak kullanılır.

**Soru kimlikleri:** AZ001–AZ030 bu genişletmenin ayrı kayıtlarıdır. Önceki Q001–Q110 yeniden numaralandırılmaz. “İlgili kaynak sorular” yalnız tematik kökendir; bütün cevapların birebir çevirisi yapıldığı iddiası değildir. AZ'ye özgü kayıtların `sourceNumber` alanı uydurulmaz.

**Yayın durumu:** Metinler içerik/editör kontrolüne hazırdır; canlıya alınmış değildir. Q015, Q019, Q020, Q021, Q045 ve Q107 için bilinmeyen ticari politikalar bu AZ paketinde kesinleştirilmez. Mevcut yayın kapıları değişmez. AZ027'de gizli belgeyi paylaşmadan yöntemi teyit etme çağrısı, gizlilik sözleşmesi veya belirli saklama politikası vaadi değildir.

### AZ konu grubu — Xidmət və iş dili

<a id="doc-az001"></a>
#### AZ001 — Hansı işlər üçün Çin dili tərcüməçisi ilə işləyə bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-001`  
**İlgili kaynak sorular — iç not:** Q001, Q003

**AZ — soru:** Hansı işlər üçün Çin dili tərcüməçisi ilə işləyə bilərəm?

**AZ — cevap:**

Çində əvvəlcədən planlaşdırdığınız görüşlər, zavod və sərgi ziyarətləri, həmçinin Türkiyədə avadanlıq quraşdırılması zamanı şifahi ünsiyyət üçün müraciət edə bilərsiniz. Əsas iş dillərimiz Çin dili və türk dilidir. İşin mövzusunu, şəhəri, tarixləri və sizin üçün uyğun ünsiyyət dilini əvvəlcədən dəqiqləşdiririk.

<a id="doc-az002"></a>
#### AZ002 — Çində azərbaycanca danışan tərcüməçi tapa bilərsinizmi?

**Canlı soru hedefi:** `/az/suallar/#az-faq-002`  
**İlgili kaynak sorular — iç not:** v1.3 AZ pazarına özgü yeni soru; kullanıcı dil kararına dayanır.

**AZ — soru:** Çində azərbaycanca danışan tərcüməçi tapa bilərsinizmi?

**AZ — cevap:**

Belə bir tələbi ayrıca qiymətləndirməliyik. Əsas xidmətimiz Çin dili ilə türk dili arasında şifahi tərcümədir; bütün tərcüməçilərin azərbaycanca danışdığını bildirmirik. Azərbaycan dilində şifahi ünsiyyət sizin üçün mütləq şərtdirsə, bunu müraciətdə seçin. Namizədin həmin dil üzrə uyğunluğu və tarixlər yoxlanmadan sifarişi təsdiqləmirik.

<a id="doc-az003"></a>
#### AZ003 — Türk dili üzərindən ünsiyyət necə qurulur?

**Canlı soru hedefi:** `/az/suallar/#az-faq-003`  
**İlgili kaynak sorular — iç not:** Q003

**AZ — soru:** Türk dili üzərindən ünsiyyət necə qurulur?

**AZ — cevap:**

Siz görüşdə türk dilində danışırsınız, tərcüməçi dediklərinizi Çin dilinə, qarşı tərəfin cavablarını isə türk dilinə çevirir. Bu qaydanın sizin üçün uyğun olduğunu əvvəlcədən dəqiqləşdiririk. Yalnız yazılı mətni anlamaq kifayət sayılmır: görüşün mövzusunu, sualları və cavabları türk dilində rahat izləyə bilməyiniz vacibdir.

<a id="doc-az004"></a>
#### AZ004 — Türk dilində rahat danışa bilmirəmsə, nə etməliyəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-004`  
**İlgili kaynak sorular — iç not:** v1.3 AZ pazarına özgü yeni soru; kullanıcı dil kararına dayanır.

**AZ — soru:** Türk dilində rahat danışa bilmirəmsə, nə etməliyəm?

**AZ — cevap:**

Formada “Azərbaycan dilində şifahi ünsiyyət tələb edirəm” seçimini edin və ehtiyacınızı izah edin. Sizi avtomatik olaraq türk dilində işləməyə razı saymırıq. Azərbaycan dili üzrə uyğun tərcüməçi təsdiqlənməyibsə, bu tələbin qarşılanacağına söz vermirik; uyğunluğu əvvəlcə dəqiqləşdirməliyik.

<a id="doc-az005"></a>
#### AZ005 — Görüşdən əvvəl tərcüməçi ilə dil uyğunluğunu yoxlaya bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-005`  
**İlgili kaynak sorular — iç not:** Q017

**AZ — soru:** Görüşdən əvvəl tərcüməçi ilə dil uyğunluğunu yoxlaya bilərəm?

**AZ — cevap:**

Bunu müraciətinizdə qeyd edin. Namizəd müəyyənləşdikdən sonra mümkün olduqda qısa tanışlıq və nümunə suallar üzərindən ünsiyyətin yoxlanmasını planlaşdırırıq. Görüşdə istifadə edəcəyiniz bir neçə texniki və ya məhsulla bağlı sualı əvvəlcədən paylaşmağınız faydalıdır. Belə bir danışıq bütün texniki mövzular üzrə təcrübə və ya mükəmməl tərcümə zəmanəti deyil.

### AZ konu grubu — Çində şəhərlər, zavodlar və sərgilər

<a id="doc-az006"></a>
#### AZ006 — Çinin hansı şəhərlərində tərcüməçi üçün müraciət edə bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-006`  
**İlgili kaynak sorular — iç not:** Q002, Q063, Q065, Q066, Q067, Q068

**AZ — soru:** Çinin hansı şəhərlərində tərcüməçi üçün müraciət edə bilərəm?

**AZ — cevap:**

Guangzhou, Şanxay (Shanghai) və Pekin (Beijing) üzrə tərcüməçi şəbəkəmiz var. Yaxın şəhərlər və bir neçə şəhəri əhatə edən səfərlər üçün məsafəni, tarixləri və tərcüməçinin uyğunluğunu ayrıca qiymətləndiririk. Ziyarət edəcəyiniz müəssisənin yeri şəhər mərkəzindən kənardadırsa, bunu da bildirin. Şəhərin adını görmək həmin tarixdə mütləq tərcüməçi ayrıldığı demək deyil.

<a id="doc-az007"></a>
#### AZ007 — Guangzhou və Canton Fair üçün tərcüməçi ilə işləmək mümkündürmü?

**Canlı soru hedefi:** `/az/suallar/#az-faq-007`  
**İlgili kaynak sorular — iç not:** Q035, Q063, Q095, Q099, Q100

**AZ — soru:** Guangzhou və Canton Fair üçün tərcüməçi ilə işləmək mümkündürmü?

**AZ — cevap:**

Canton Fair və Guangzhou səfəriniz üçün şifahi tərcümə tələbinizi qiymətləndiririk. Sərginin hansı mərhələsində, hansı günlərdə və hansı məhsul qrupları üzrə görüşəcəyinizi bildirin. Tərcüməçinin uyğunluğu bu proqrama görə dəqiqləşdirilir. Xidmət stend görüşmələrində dil dəstəyidir; sərgiyə giriş, bilet və səfərin təşkili daxil deyil.

<a id="doc-az008"></a>
#### AZ008 — Çində zavod ziyarəti üçün tərcüməçi hansı görüşlərə qatıla bilər?

**Canlı soru hedefi:** `/az/suallar/#az-faq-008`  
**İlgili kaynak sorular — iç not:** Q029, Q032, Q033, Q090

**AZ — soru:** Çində zavod ziyarəti üçün tərcüməçi hansı görüşlərə qatıla bilər?

**AZ — cevap:**

Sizin müəyyən etdiyiniz zavodda istehsal xəttinin izahı, məhsul xüsusiyyətləri, nümunə, minimum sifariş miqdarı, qiymət və təhvil müddəti barədə söhbətlərdə şifahi tərcümə edə bilər. Hazırlıq üçün zavodun yerini, məhsul qrupunu və əsas suallarınızı əvvəlcədən paylaşın. Yeni zavod və ya məhsul axtarışı bu xidmətə daxil deyil.

<a id="doc-az009"></a>
#### AZ009 — Tərcüməçi zavodu yoxlayır və məhsulun keyfiyyətinə zəmanət verirmi?

**Canlı soru hedefi:** `/az/suallar/#az-faq-009`  
**İlgili kaynak sorular — iç not:** Q088, Q091, Q092

**AZ — soru:** Tərcüməçi zavodu yoxlayır və məhsulun keyfiyyətinə zəmanət verirmi?

**AZ — cevap:**

Xeyr. Zavod ziyarətində xidmətimiz şifahi ünsiyyətdir; bu, audit, məhsul sınağı və ya istehsalçının etibarlılığına zəmanət deyil. Tərcüməçi suallarınızı və qarşı tərəfin cavablarını çatdırır. Satınalma, qiymət razılaşması və ticarət qərarları sizə aiddir.

<a id="doc-az010"></a>
#### AZ010 — Eyni gün bir neçə zavodu və ya fərqli şəhərləri ziyarət edə bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-010`  
**İlgili kaynak sorular — iç not:** Q030, Q031, Q067

**AZ — soru:** Eyni gün bir neçə zavodu və ya fərqli şəhərləri ziyarət edə bilərəm?

**AZ — cevap:**

Zavodların yerlərini, görüş saatlarını və təxmini yol müddətlərini bildirin. Proqramın bir gündə mümkün olub-olmadığını və eyni tərcüməçinin iştirakını birlikdə dəqiqləşdirək. Müxtəlif şəhərlər arasındakı gediş-gəlişi görüş vaxtı kimi qəbul etməmək lazımdır; əlavə gün ehtiyacı yarana bilər. Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri ayrıca hesablanır.

### AZ konu grubu — Avadanlıq quraşdırılması və xidmət yeri

<a id="doc-az011"></a>
#### AZ011 — Çindən gələn mühəndislər üçün tərcüməçi təmin edirsinizmi?

**Canlı soru hedefi:** `/az/suallar/#az-faq-011`  
**İlgili kaynak sorular — iç not:** Q022, Q026, Q069, Q071

**AZ — soru:** Çindən gələn mühəndislər üçün tərcüməçi təmin edirsinizmi?

**AZ — cevap:**

Türkiyədə avadanlıq quraşdırılması və istismara verilməsi zamanı Çinli texniki heyətlə müəssisə əməkdaşları arasında şifahi ünsiyyət üçün müraciət edə bilərsiniz. Avadanlığın növünü, mərhələni, iş yerini və tarixləri bildirin. Əsas iş dilləri Çin dili və türk dilidir; sizin bu dildə ünsiyyətinizin uyğunluğu da əvvəlcədən dəqiqləşdirilir.

<a id="doc-az012"></a>
#### AZ012 — Tərcüməçi avadanlığı quraşdırır, yoxsa deyilənləri tərcümə edir?

**Canlı soru hedefi:** `/az/suallar/#az-faq-012`  
**İlgili kaynak sorular — iç not:** Q025, Q026, Q084

**AZ — soru:** Tərcüməçi avadanlığı quraşdırır, yoxsa deyilənləri tərcümə edir?

**AZ — cevap:**

Tərcüməçi texniki heyətin izahlarını və müəssisə əməkdaşlarının suallarını qarşılıqlı çatdırır. Razılaşdırılmış proqram çərçivəsində sınaq, istismara vermə və operatorlara təlimatların izahında da şifahi tərcümə nəzərdə tutula bilər. Avadanlığı tərcüməçi quraşdırmır; texniki qərar, montaj və təhlükəsizlik üzrə mühəndislik məsuliyyəti aidiyyəti mütəxəssislərdə qalır.

<a id="doc-az013"></a>
#### AZ013 — Tərcüməçinin bizim avadanlıq üzrə təcrübəsi olacaqmı?

**Canlı soru hedefi:** `/az/suallar/#az-faq-013`  
**İlgili kaynak sorular — iç not:** Q016, Q023, Q024

**AZ — soru:** Tərcüməçinin bizim avadanlıq üzrə təcrübəsi olacaqmı?

**AZ — cevap:**

Avadanlığın növünü və işin mərhələsini öyrəndikdən sonra namizədin uyğunluğunu qiymətləndiririk. Bütün tərcüməçilərin hər texniki sahədə eyni təcrübəyə malik olduğunu demirik. Mövcud texniki materialları və əsas terminləri əvvəlcədən paylaşın; konkret namizədin təcrübəsi və hazırlıq ehtiyacı barədə dəqiqləşdirmə aparaq.

<a id="doc-az014"></a>
#### AZ014 — İstanbul və Türkiyənin digər şəhərləri üçün müraciət edə bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-014`  
**İlgili kaynak sorular — iç not:** Q002, Q069, Q070, Q071, Q072, Q074

**AZ — soru:** İstanbul və Türkiyənin digər şəhərləri üçün müraciət edə bilərəm?

**AZ — cevap:**

İstanbul, Tekirdağ, Düzce, Ankara, Kayseri və Gaziantepdə, həmçinin yaxın bölgələrdəki işlər üçün müraciət edə bilərsiniz. Fabrikanın dəqiq yerini və tarixləri bildirin; uyğunluğu həmin məlumatlarla yoxlayırıq. Şirkətiniz İstanbulda, işin görüləcəyi zavod isə Gebzedədirsə, proqramı faktiki iş yerinə görə planlaşdırırıq. Bu şəhərlərin hər birində ofisimiz olduğu iddia edilmir.

<a id="doc-az015"></a>
#### AZ015 — Azərbaycandakı müəssisəmizdə quraşdırma üçün də tərcüməçi istəyə bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-015`  
**İlgili kaynak sorular — iç not:** v1.3 AZ pazarına özgü yeni soru; kullanıcı dil kararına dayanır.

**AZ — soru:** Azərbaycandakı müəssisəmizdə quraşdırma üçün də tərcüməçi istəyə bilərəm?

**AZ — cevap:**

İş yerini və tarixləri birbaşa mesajınızda bildirin. Hazırda təsdiqlənmiş xidmət coğrafiyamız Türkiyə və Çindir. Azərbaycanda görüləcək iş ayrıca qiymətləndirilməlidir; həmin ölkədə yerli ofis, hazır heyət və ya təmin edilmiş xidmət vədi vermirik. Azərbaycan dilində saytımızın olması xidmətin Azərbaycanda avtomatik mövcud olduğu demək deyil.

### AZ konu grubu — Günlük qiymət və əlavə xərclər

<a id="doc-az016"></a>
#### AZ016 — Çində günlük tərcüməçi qiyməti necə müəyyən edilir?

**Canlı soru hedefi:** `/az/suallar/#az-faq-016`  
**İlgili kaynak sorular — iç not:** Q007, Q055, Q057, Q058, Q059, Q060

**AZ — soru:** Çində günlük tərcüməçi qiyməti necə müəyyən edilir?

**AZ — cevap:**

İşin şəhəri, tarixləri, mövzusu, tələb olunan hazırlıq və tərcüməçinin uyğunluğu qiymət təklifində nəzərə alınır. Ona görə bütün proqramlar üçün eyni sabit məbləğ göstərmirik. Xidmət haqqı gün hesabı ilə verilir; ayrıca xərcləri də təklifdə dəqiqləşdiririk. Səfərinizin proqramını paylaşın ki, həmin işə uyğun qiymət barədə danışaq.

<a id="doc-az017"></a>
#### AZ017 — Tərcüməçinin yol, qalma və yemək-içmək xərcləri qiymətə daxildirmi?

**Canlı soru hedefi:** `/az/suallar/#az-faq-017`  
**İlgili kaynak sorular — iç not:** Q010, Q061

**AZ — soru:** Tərcüməçinin yol, qalma və yemək-içmək xərcləri qiymətə daxildirmi?

**AZ — cevap:**

Xeyr. Şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərcləri günlük tərcüməçi haqqından ayrıca hesablanır. Bu xərclərin hansı qaydada qarşılanacağını və proqramla bağlı nəqliyyat ehtiyacını sifariş təsdiqlənməzdən əvvəl dəqiqləşdiririk.

<a id="doc-az018"></a>
#### AZ018 — Tərcüməçini bir gün və ya yarım gün üçün tuta bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-018`  
**İlgili kaynak sorular — iç not:** Q004, Q099

**AZ — soru:** Tərcüməçini bir gün və ya yarım gün üçün tuta bilərəm?

**AZ — cevap:**

Uyğunluq təsdiqləndikdə yalnız bir gün üçün də işləmək mümkündür. Xidmətimizi günlük əsasda planlaşdırırıq; yarım günlük və saatlıq tarif təqdim etmirik. Görüşünüz qısa olsa belə, həmin günün çalışma şərtlərini əvvəlcədən razılaşdırmaq lazımdır.

<a id="doc-az019"></a>
#### AZ019 — Günlük xidmət neçə saatı əhatə edir və əlavə vaxt necə hesablanır?

**Canlı soru hedefi:** `/az/suallar/#az-faq-019`  
**İlgili kaynak sorular — iç not:** Q008, Q009

**AZ — soru:** Günlük xidmət neçə saatı əhatə edir və əlavə vaxt necə hesablanır?

**AZ — cevap:**

İşin başlanma və bitmə saatlarını, fasilələri və vaxt uzandıqda tətbiq olunacaq şərtləri təklif zamanı dəqiqləşdiririk. Bütün işlər üçün eyni saat sayı və ya sabit əlavə vaxt haqqı göstərmirik. Planlaşdırdığınız görüş və quraşdırma saatlarını əvvəlcədən bildirin.

<a id="doc-az020"></a>
#### AZ020 — Bir neçə gün, həftəsonu və ya uzanan proqram üçün qiymət dəyişirmi?

**Canlı soru hedefi:** `/az/suallar/#az-faq-020`  
**İlgili kaynak sorular — iç not:** Q011, Q012, Q028

**AZ — soru:** Bir neçə gün, həftəsonu və ya uzanan proqram üçün qiymət dəyişirmi?

**AZ — cevap:**

Bütün günləri, həftəsonuna və bayrama düşən tarixləri əvvəlcədən bildirin. Proqramın günlük qiymətini və ayrıca xərclərini bütöv şəkildə dəqiqləşdiririk; avtomatik endirim və ya sabit bayram əlavəsi vəd etmirik. İş uzanarsa, əlavə günlər üçün tərcüməçinin uyğunluğu və yeni şərtlər yenidən təsdiqlənməlidir.

<a id="doc-az021"></a>
#### AZ021 — Ödəniş hansı valyutada və nə vaxt edilir?

**Canlı soru hedefi:** `/az/suallar/#az-faq-021`  
**İlgili kaynak sorular — iç not:** Q014

**AZ — soru:** Ödəniş hansı valyutada və nə vaxt edilir?

**AZ — cevap:**

Ödəniş valyutasını, üsulunu və vaxtını konkret təklif üzrə əvvəlcədən razılaşdırırıq. Saytın Azərbaycan dilində olması qiymətin mütləq manatla verildiyi və ya müəyyən ödəniş üsulunun qəbul edildiyi demək deyil. Şirkətinizin ödənişlə bağlı tələbləri varsa, müraciətinizdə qeyd edin.

### AZ konu grubu — Sifariş və proqram dəyişikliyi

<a id="doc-az022"></a>
#### AZ022 — Nə qədər əvvəl müraciət etməliyəm? Təcili tərcüməçi tapa bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-022`  
**İlgili kaynak sorular — iç not:** Q005, Q006

**AZ — soru:** Nə qədər əvvəl müraciət etməliyəm? Təcili tərcüməçi tapa bilərəm?

**AZ — cevap:**

Tarixləriniz və proqramınız müəyyənləşən kimi yazmağınız daha məqsədəuyğundur. Təcili və ya ertəsi gün üçün müraciətdə şəhəri, saatı və mövzunu bir mesajda paylaşın. Uyğunluğu yoxlamadan tərcüməçi ayırdığımızı və ya mütləq həmin gün xidmət göstərəcəyimizi bildirmirik.

<a id="doc-az023"></a>
#### AZ023 — Sifariş nə vaxt təsdiqlənmiş sayılır?

**Canlı soru hedefi:** `/az/suallar/#az-faq-023`  
**İlgili kaynak sorular — iç not:** Q041

**AZ — soru:** Sifariş nə vaxt təsdiqlənmiş sayılır?

**AZ — cevap:**

Əvvəlcə proqramı, iş dilini, tərcüməçinin uyğunluğunu, günlük şərtləri və ayrıca xərcləri dəqiqləşdiririk. Sonra sifarişin təsdiqi üçün tamamlanmalı addımları sizinlə razılaşdırırıq. Formanı doldurmaq, WhatsApp-ı açmaq və ya ilkin mesaj göndərmək öz-özlüyündə təsdiqlənmiş sifariş deyil.

<a id="doc-az024"></a>
#### AZ024 — Uçuşum və ya görüş tarixim dəyişərsə, nə etməliyəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-024`  
**İlgili kaynak sorular — iç not:** Q043, Q044

**AZ — soru:** Uçuşum və ya görüş tarixim dəyişərsə, nə etməliyəm?

**AZ — cevap:**

Dəyişiklik məlum olan kimi bizimlə əlaqə saxlayın. Yeni tarixlərdə eyni tərcüməçinin uyğunluğu yenidən yoxlanmalıdır. Tarix dəyişikliyi, ləğv və yaranmış xərclərlə bağlı şərtlər əvvəlcədən razılaşdırılmış təklifə əsasən dəqiqləşdirilir; bütün sifarişlər üçün pulsuz dəyişiklik və ya sabit geriödəmə vədi vermirik.

<a id="doc-az025"></a>
#### AZ025 — Bir tərcüməçi bütün komandamıza və fərqli stendlərdəki görüşlərə çatarmı?

**Canlı soru hedefi:** `/az/suallar/#az-faq-025`  
**İlgili kaynak sorular — iç not:** Q037, Q038

**AZ — soru:** Bir tərcüməçi bütün komandamıza və fərqli stendlərdəki görüşlərə çatarmı?

**AZ — cevap:**

Komandanız eyni görüşdə birlikdə iştirak edirsə, bir tərcüməçi ilə işləmək proqramınıza uyğun ola bilər. Müxtəlif stendlərdə və ya ayrı məkanlarda eyni vaxtda görüşlər varsa, bir nəfər onların hamısında iştirak edə bilməz. Komanda sayını və paralel görüşləri əvvəlcədən bildirin; lazım olan tərcüməçi sayını dəqiqləşdirək.

<a id="doc-az026"></a>
#### AZ026 — Tərcüməçinin sərgiyə giriş kartını kim təşkil edir?

**Canlı soru hedefi:** `/az/suallar/#az-faq-026`  
**İlgili kaynak sorular — iç not:** Q039

**AZ — soru:** Tərcüməçinin sərgiyə giriş kartını kim təşkil edir?

**AZ — cevap:**

Hər sərginin iştirak və giriş qaydası fərqli ola bilər. Sərginin adını və tarixlərini bildirdikdən sonra tərcüməçinin girişinə dair tələbləri təşkilatçının qüvvədə olan qaydalarına əsasən dəqiqləşdirmək lazımdır. Girişin əvvəlcədən hazır, pulsuz və ya günlük xidmət haqqına daxil olduğunu qəbul etməyin. İştirakın və girişin necə təşkil olunacağı görüşdən əvvəl aydınlaşdırılır.

### AZ konu grubu — Hazırlıq və əlaqə

<a id="doc-az027"></a>
#### AZ027 — Tərcüməçiyə əvvəlcədən hansı məlumatları göndərim?

**Canlı soru hedefi:** `/az/suallar/#az-faq-027`  
**İlgili kaynak sorular — iç not:** Q013, Q018, Q090

**AZ — soru:** Tərcüməçiyə əvvəlcədən hansı məlumatları göndərim?

**AZ — cevap:**

Görüşün məqsədini, iş yerini, tarixləri, iştirakçı sayını, məhsul və ya avadanlığın növünü, əsas sual və terminləri paylaşın. Mövcud texniki sənədlər hazırlıq üçün faydalı ola bilər; bu, onların yazılı tərcüməsini sifariş etdiyiniz mənasına gəlmir. Məxfi materialların göndərilməsindən əvvəl paylaşım qaydasını ayrıca dəqiqləşdirin.

<a id="doc-az028"></a>
#### AZ028 — Tərcüməçi ilə oteldə, sərgidə, yoxsa zavodda görüşəcəyəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-028`  
**İlgili kaynak sorular — iç not:** Q034

**AZ — soru:** Tərcüməçi ilə oteldə, sərgidə, yoxsa zavodda görüşəcəyəm?

**AZ — cevap:**

Görüş yerini proqramınıza uyğun əvvəlcədən razılaşdırırıq. Otel, sərgi salonu və zavod bir-birindən uzaqdırsa, ünvanları ayrıca bildirin. Tərcüməçinin sizinlə oteldə görüşməsi otel rezervasiyası, transfer və ya nəqliyyat təşkilatı xidməti göstərdiyimiz demək deyil. Nəqliyyat xərcləri ayrıca hesablanır.

<a id="doc-az029"></a>
#### AZ029 — Qiymət təklifi almaq üçün sizə necə yaza bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-029`  
**İlgili kaynak sorular — iç not:** Q013

**AZ — soru:** Qiymət təklifi almaq üçün sizə necə yaza bilərəm?

**AZ — cevap:**

Əlaqə formasında xidməti, ölkəni, şəhəri, tarixləri və dil tələbinizi seçin, ehtiyacınızı qısaca yazın. Hazırlanan mətni nəzərdən keçirərək WhatsApp-a keçə, e-poçtla paylaşa və ya kopyalaya bilərsiniz. Formadan istifadə etmək istəmirsinizsə, birbaşa WhatsApp və e-poçt məlumatlarımız da görünür. Mesajı son mərhələdə özünüz göndərirsiniz.

<a id="doc-az030"></a>
#### AZ030 — Müraciətimi Azərbaycan dilində yaza bilərəm?

**Canlı soru hedefi:** `/az/suallar/#az-faq-030`  
**İlgili kaynak sorular — iç not:** v1.3 AZ pazarına özgü yeni soru; kullanıcı dil kararına dayanır.

**AZ — soru:** Müraciətimi Azərbaycan dilində yaza bilərəm?

**AZ — cevap:**

Bəli, müraciətinizi Azərbaycan dilində yaza bilərsiniz; bu bölmədəki forma və hazır mesajlar da həmin dildədir. Bu, görüşdə işləyəcək tərcüməçinin mütləq azərbaycanca danışacağına dair təsdiq deyil. Şifahi ünsiyyət üçün türk dilinin sizin üçün uyğun olub-olmadığını və ya Azərbaycan dilində danışan tərcüməçi tələb etdiyinizi ayrıca qeyd edin.

### 55.2 Sayfa kapanışı

**AZ — başlık:** `Sizin proqramınızla bağlı başqa sual var?`

**AZ — metin:**

> Şəhəri, tarixləri və ehtiyacınızı yazın. İş dilini də qeyd edin ki, tərcüməçi uyğunluğu ilə bağlı aydın cavab verə bilək.

**AZ — butonlar:** `Müraciətinizi hazırlayın` → `/az/elaqe/#muraciet` · `WhatsApp-da yazın`.

Günlük ücret ve ayrıca masraflar notu burada da görünür. Ana sayfadaki beş kısa cevap bu bankadan türetilir; aynı sayfada uzun cevap iki kez basılmaz. AZ soruları Türkçe SSS sayfasına Türkçe cevapların arasına karıştırılmaz.

### 55.3 Mevcut 110 soruyla ilişki

Önceki Q kayıtları Türkçe ve Çince olarak aynı yerlerinde kalır. AZ001–AZ030 bu kapsamı daraltmaz ve onlara ait onay koşullarını değiştirmez. Gelecekte bir Q kaydının tam AZ sürümü üretildiğinde eşdeğer AZ cevabı bu havuzla editoryal olarak birleştirilir; aynı sorunun iki bağımsız, çelişen AZ kopyası oluşturulmaz. Bütün 110 soruya boş AZ alanı doldurmak veya Türkçe cevabı AZ etiketiyle yayımlamak yasaktır.

<a id="v13-contact"></a>
## 56. AZ iletişim sayfası — `/az/elaqe/`

### 56.1 Sayfa kimliği ve ilk ekran

**Title — AZ site metni:** `Çin dili tərcüməçisi üçün müraciət | Çince Tercüman`  
**Meta description — AZ site metni:** `Şəhəri, tarixləri, xidmət növünü və dil tələbinizi bildirin. Çin dili tərcüməçisi üçün günlük şərtləri WhatsApp və ya e-poçtla dəqiqləşdirin.`  
**H1 — AZ site metni:** `Proqramınızı yazın, iş dilini və qiyməti dəqiqləşdirək`  
**Canonical:** `https://www.cince-tercuman.com/az/elaqe/`

**AZ — giriş:**

> Hansı ölkədə və şəhərdə, hansı tarixlərdə tərcüməçiyə ehtiyacınız var? Görüşün məqsədini və hansı dildə rahat ünsiyyət qurduğunuzu bildirin. Müraciətiniz əsasında tərcüməçinin uyğunluğunu və günlük şərtləri dəqiqləşdirək.

Girişin altında görünür `AZ-LANGUAGE-NOTE` ve `AZ-PRICE-NOTE`. Masaüstünde form yanında iletişim kartı, mobilde formdan önce kısa iletişim seçenekleri ve tek sütun. Uzun dil açıklaması okunamayacak küçük gri dipnota dönüşmez.

### 56.2 İletişim kartı — AZ site metinleri

| Etiket | Görünür değer | Bağlantı |
|---|---|---|
| WhatsApp | `+90 555 044 11 41` | `https://wa.me/905550441141` |
| Telefon | `+90 507 528 61 87` | `tel:+905075286187` |
| E-poçt | `info@cince-tercuman.com` | `mailto:info@cince-tercuman.com` |

**AZ — kart açıklaması:**

> Formadan istifadə etmədən də yaza bilərsiniz. Mesajınızda şəhəri, tarixləri və iş dilinə dair tələbinizi qeyd edin. Nömrələrimiz Türkiyə nömrələridir; Azərbaycanda yerli ofis və ya yerli telefon nömrəsi göstərmirik.

Son cümle iletişim sayfasında kullanılır; bütün CTA'lara tekrar tekrar eklenmez. `+994` numarası, Bakü haritası veya Azerbaycan adresi oluşturulmaz. İkon kullanılacaksa yalnız yardımcı arayüz simgesidir; yeni bir marka logosu gerekmez.

### 56.3 Müracaat formu — gerçek etiket ve yardımcı metinler

**HTML bölüm kimliği:** `muraciet`  
**AZ — form başlığı:** `Müraciətinizi hazırlayın`  
**AZ — giriş:** `Məcburi xanaları doldurun. Formu tamamladıqdan sonra mesajı nəzərdən keçirib seçdiyiniz kanalda özünüz göndərəcəksiniz.`

| Alan / kod | AZ etiket | Zorunluluk | AZ yardımcı metin / seçenek |
|---|---|---|---|
| `service` | `Hansı xidmət lazımdır?` | Zorunlu | `Çində şifahi tərcümə` · `Avadanlıq quraşdırılması zamanı tərcümə` · `Çində zavod ziyarəti` · `Çində sərgi ziyarəti` · `Hələ dəqiqləşdirməmişəm` |
| `country` | `İş hansı ölkədə görüləcək?` | Zorunlu | `Çin` · `Türkiyə`; müşterinin yaşadığı ülke değil |
| `city` | `Şəhər və iş yeri` | Zorunlu | `Məsələn: Guangzhou, sərgi salonu; yaxud İstanbul, zavodun yerləşdiyi rayon.` |
| `dates` | `Başlama və bitmə tarixi` | Biliniyorsa | İki tarih; tek gün aynı başlangıç/bitiş; 24 saatlik zorunlu zaman seçici yok |
| `datesNotFixed` | `Tarixlər hələ dəqiq deyil` | Alternatif | Seçilirse tarih alanları zorunlu değil; kısa ihtiyaçta tahmini dönem istenir |
| `languageRequirement` | `Görüşdə hansı dildə rahat ünsiyyət qura bilərsiniz?` | Zorunlu; ön seçim yok | Aşağıdaki üç seçenek |
| `need` | `Görüşünüzü qısaca təsvir edin` | Zorunlu | `Avadanlıq və ya məhsul qrupu, iştirakçı sayı və əsas ehtiyacınızı yazın. Məxfi sənəd və şəxsi məlumat əlavə etməyin.` |
| `nameCompany` | `Adınız / şirkətiniz` | İsteğe bağlı | `İstəyə bağlıdır.` |

**İç not:** İlk dört seçenek önceki dört hizmetin AZ etiketleridir. “Hələ dəqiqləşdirməmişəm” beşinci hizmet değildir. Formda telefon, e-posta veya pasaport bilgisi zorunlu yapılmaz. Kullanıcı seçtiği mesaj kanalında iletişim kuracaktır.

**AZ — ülke alanının altındaki açıklama:**

> Yaşadığınız ölkəni deyil, tərcüməçinin işləyəcəyi ölkəni seçin. İş Azərbaycanda və ya başqa ölkədə görüləcəksə, bunu birbaşa mesajda bildirin; mövcud xidmət coğrafiyasından kənar müraciəti ayrıca qiymətləndirməliyik.

### 56.4 Dil gereksinimi — üç ayrı durum

**HTML alan grubu kimliği:** `is-dili`. Radio grubu `fieldset/legend` ile yapılır; etiket ve açıklama tıklanabilir. Varsayılan işaretli seçenek yok.

| Kayıt değeri | AZ — seçenek etiketi | AZ — seçildikten sonra görünür açıklama |
|---|---|---|
| `turkish-ok` | `Türk dilində şifahi ünsiyyət mənim üçün uyğundur.` | `Görüşdə Çin dili ilə türk dili arasında tərcümə əsasında işləmək istəyirsiniz. Tərcüməçinin uyğunluğu və proqram yenə də ayrıca təsdiqlənəcək.` |
| `azerbaijani-required` | `Azərbaycan dilində şifahi ünsiyyət tələb edirəm.` | `Bu dil tələbi ayrıca yoxlanmalıdır. Hazırda azərbaycanca danışan tərcüməçi ayrıldığı və ya sifarişin təsdiqləndiyi mənasına gəlmir.` |
| `confirm-first` | `Əvvəlcə dil uyğunluğunu dəqiqləşdirmək istəyirəm.` | `İş dilinə hələ razılıq verməmisiniz. Uyğun həll barədə danışmadan sizi türk dilində işləməyə razı saymırıq.` |

İkinci veya üçüncü seçim kullanıcıyı başvurmaktan alıkoymaz. Yalnızca talebin doğrulanma durumunu değiştirir. İlgili uyarı önizlemeye ve WhatsApp/e-posta metnine de eklenir; butonun yanında gösterilip mesajdan çıkarılmaz.

Türkçe/Çince arayüz kullanan bir müşteri de AZ gereksinimi belirtebilir; yerel sayfa dili, tercümanın çalışma dili yerine kullanılamaz. Bu yeni zorunlu alan AZ formunda zorunludur; önceki bütün TR/ZH kullanıcılarından tekrar dil testi istenmesi anlamına gelmez.

### 56.5 Önizleme, doğrulama ve durum mesajları

**AZ — hazırlama butonu:** `Mesajı hazırlayın`  
**AZ — önizleme başlığı:** `Göndərəcəyiniz mesaj`

Önizleme yalnız cihazda hazırlanır; bu aşamada talep sunucusuna form gönderilmez ve rezervasyon açılmaz. Form çalışmıyorsa gerçek WhatsApp/e-posta bağlantıları ve kopyalanabilir örnek metinler erişilebilir kalır. Bu tasarım, hosting veya dış mesajlaşma servislerinin hiç veri işlemediği şeklinde bir gizlilik vaadine dönüştürülmez.

| Durum | AZ — gerçek arayüz metni |
|---|---|
| Hizmet seçilmedi | `Zəhmət olmasa, xidmət növünü seçin.` |
| Ülke seçilmedi | `İşin görüləcəyi ölkəni seçin.` |
| Hizmet/ülke uyumsuz | `Bu xidmət Çin üçün nəzərdə tutulub. Ölkəni və ya xidmət seçimini yoxlayın.` |
| Şehir eksik | `Şəhəri və ya işin görüləcəyi yeri yazın.` |
| Tarih eksik | `Tarixləri seçin və ya “Tarixlər hələ dəqiq deyil” xanasını işarələyin.` |
| Bitiş başlangıçtan önce | `Bitmə tarixi başlama tarixindən əvvəl ola bilməz.` |
| Geçmiş tarih | `Başlama tarixi keçmişdə qalıb. Tarixi yoxlayın.` |
| Dil seçimi yok | `Görüş üçün dil seçiminizi bildirin.` |
| Kısa ihtiyaç eksik | `Nə üçün tərcüməçiyə ehtiyacınız olduğunu qısaca yazın.` |
| Uzun metin | `Mətni bir qədər qısaldın. Əsas ehtiyacı və proqramı qeyd etməyiniz kifayətdir.` |
| Önizleme hazır | `Mesaj hazırdır. Nəzərdən keçirin və göndərmək üçün kanal seçin.` |
| Kopyalandı | `Mesaj kopyalandı.` |
| Kopyalama yapılamadı | `Avtomatik kopyalama alınmadı. Mətni seçib özünüz kopyalaya bilərsiniz.` |
| Dil teyidi gerekli | `Dil uyğunluğu ayrıca təsdiqlənməlidir.` |
| Genel hata özeti | `Davam etməzdən əvvəl göstərilən xanaları yoxlayın.` |

Tarih kontrolleri ve metin uzunluk sınırları önceki form kurallarıyla aynı kalır. Yerel tarih gösterimi AZ olabilir; tarih saklama/doğrulama biçimi kararlı ISO değerleri olmalıdır. Azerbaycan saat dilimini müşterinin gerçek konumu sanarak otomatik rezervasyon saati hesaplanmaz.

**AZ — iletişim butonları:** `WhatsApp-a keçin` · `E-poçtla paylaşın` · `Mesajı kopyalayın`.

**AZ — butonların altı:**

> Mesaj avtomatik göndərilmir. WhatsApp və ya e-poçt tətbiqində göndərməyi özünüz tamamlayın. Bu müraciət sifarişi təsdiqləmir.

### 56.6 Tam hazır WhatsApp/e-posta mesajı — AZ

Aşağıdaki süslü parantezler uygulamada kullanıcının doğrulanmış alanlarıyla değiştirilir. Bu, müşteriye gösterilecek boş üretim metni değil mesaj şablonudur.

```text
Salam. Şifahi Çin dili tərcüməsi üçün tarixləri və günlük qiyməti dəqiqləşdirmək istəyirəm.

Xidmət: {serviceLabel}
İşin görüləcəyi ölkə: {countryLabel}
Şəhər / iş yeri: {city}
Tarixlər: {dateLabel}
Dil tələbi: {languageRequirementLabel}
Qısa məlumat: {need}
Ad / şirkət: {nameCompany — yalnız doldurulubsa}

{languageCondition — seçilmiş dil tələbinə uyğun görünür açıklama}

Günlük xidmət haqqını şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərclərindən ayrıca bildirməyinizi xahiş edirəm.

Mənbə səhifə: {sourcePath}
```

**AZ — e-posta konu satırı:** `Çin dili tərcüməçisi — tarix və qiymət sorğusu`.

Mesaj aynı sabit WhatsApp hesabına gider. AZ için yeni numara veya ayrı canlı destek vaadi yok. `sourcePath` yalnız sayfa yoludur; serbest metin site URL'sinin query parametrelerine veya analitiğe eklenmez.

### 56.7 Form doldurmadan doğrudan WhatsApp metni

**AZ — genel kısa mesaj:**

> Salam. Çin dili tərcüməçisi üçün tarixləri, iş dilini və günlük qiyməti dəqiqləşdirmək istəyirəm. Şəhəri və proqramı paylaşacağam. Türk dilində ünsiyyətin mənim üçün uyğunluğunu və ya Azərbaycan dili tələbinin qarşılanmasını əvvəlcədən dəqiqləşdirək.

**AZ — fabrika bağlamı:**

> Salam. Çində zavod ziyarəti üçün tərcüməçi barədə məlumat almaq istəyirəm. Zavodun yerini və tarixləri paylaşacağam. Görüş üçün iş dilini və günlük şərtləri əvvəlcədən dəqiqləşdirək.

**AZ — fuar bağlamı:**

> Salam. Canton Fair / Çində sərgi ziyarəti üçün tərcüməçi barədə məlumat almaq istəyirəm. Sərgini, tarixləri və məhsul qrupunu paylaşacağam. İş dilini və günlük şərtləri dəqiqləşdirək.

**AZ — kurulum bağlamı:**

> Salam. Avadanlıq quraşdırılması zamanı Çinli mühəndislərlə ünsiyyət üçün tərcüməçi barədə məlumat almaq istəyirəm. İşin ölkəsini, şəhərini, avadanlığı və tarixləri paylaşacağam. Dil uyğunluğunu və günlük şərtləri əvvəlcədən dəqiqləşdirək.

Müşteri dil seçimini henüz yapmadığından bu metinlerin hiçbirinde “Türkçe konuşmayı kabul ediyorum” peşinen yazılmaz. Butona basmak sözlü dil uygunluğu onayı değildir.

### 56.8 AZ iletişim sayfası kısa FAQ

Bu sayfada uzun yeni cevaplar üretmek yerine aşağıdaki üç kısa cevap ve tam hedef bulunur:

| AZ — soru | AZ — kısa cevap | Hedef |
|---|---|---|
| Formu doldurmaq məcburidir? | Xeyr. Birbaşa WhatsApp və ya e-poçtla yaza bilərsiniz. Şəhəri, tarixləri və dil tələbinizi qeyd edin. | `/az/suallar/#az-faq-029` |
| Mesaj göndərən kimi sifariş təsdiqlənir? | Xeyr. Tərcüməçi uyğunluğu, iş dili və şərtlər ayrıca razılaşdırılmalıdır. | `/az/suallar/#az-faq-023` |
| Azərbaycan dilində yaza bilərəm? | Bəli. Müraciət dili ilə görüşdə işləyəcək tərcüməçinin dili ayrıca dəqiqləşdirilir. | `/az/suallar/#az-faq-030` |

<a id="v13-ui"></a>
## 57. AZ görsel sistem, navigasyon ve mikro metinler

### 57.1 Marka korunur; açıklama yerelleşir

Ana marka yazısı **Çince Tercüman** olarak kalır. AZ sürümünde yeni şirket adı veya logo markası oluşturulmaz.

**AZ — logo alt açıklaması:** `Çin dili üzrə şifahi tərcümə`  
**AZ — logo erişilebilir etiketi:** `Çince Tercüman — Ana səhifə`  
**AZ — logo hedefi:** `/az/`.

Beyaz zemin, koyu metin, önceki turuncu değişkenler ve responsive bileşenler aynen kullanılır. AZ bayrağı ile ayrı marka kimliği veya sahte Bakü silueti/ofis görseli eklenmez. Font dosyalarının `Ə ə, Ğ ğ, I ı, İ i, Ö ö, Ş ş, Ü ü, Ç ç` karakterlerini düzgün gösterdiği test edilir; başlıklar CSS ile zorunlu büyük harfe çevrilmez.

### 57.2 Üç dilli dil seçici

- **Geniş görünüm:** `Türkçe · 中文 · Azərbaycan dili`.
- **Mobil açılan dil menüsü:** Düğme `Dil / Language`; açıldığında her dil kendi adıyla gösterilir. Yalnız üç küçük bayrak kullanılmaz.
- **Kısa kod gereken alan:** `TR · ZH · AZ`; AZ'nin erişilebilir tam adı `Azərbaycan dili` olmalıdır. Teknik locale `az` küçük harf, görünen rozet `AZ` büyük harf olabilir.
- **AZ arayüzündeki açma etiketi:** `Dili seçin`.

Gerçek eşlenik varsa aynı sayfanın diğer diline geçilir. AZ eşleniği olmayan Türkçe/Çince hizmet sayfalarında AZ seçeneği **“Azərbaycan dili — başlanğıc səhifəsi”** olarak `/az/` adresine normal gezinme bağlantısı verir. Bunu ilgili hizmet sayfasının birebir çevirisi gibi etiketlemeyin. Teknik `hreflang` eşlemesi bu menü fallback'inden ayrı tutulur.

### 57.3 AZ ortak mikro metin sözlüğü

| Kimlik | AZ — site metni |
|---|---|
| `nav.home` | `Ana səhifə` |
| `nav.services` | `Xidmətlər` |
| `nav.areas` | `Şəhərlər` |
| `nav.rates` | `Günlük qiymət` |
| `nav.faq` | `Suallar və cavablar` |
| `nav.contact` | `Əlaqə` |
| `nav.open` | `Menyunu açın` |
| `nav.close` | `Menyunu bağlayın` |
| `cta.quote` | `Qiymət təklifi istəyin` |
| `cta.whatsapp` | `WhatsApp-da yazın` |
| `cta.continueWhatsapp` | `WhatsApp-a keçin` |
| `cta.email` | `E-poçtla paylaşın` |
| `cta.call` | `Zəng edin` |
| `cta.prepare` | `Mesajı hazırlayın` |
| `cta.copy` | `Mesajı kopyalayın` |
| `cta.allQuestions` | `Bütün suallara baxın` |
| `cta.fullAnswer` | `Tam cavabı oxuyun` |
| `ui.skipToContent` | `Əsas məzmuna keçin` |
| `ui.optional` | `İstəyə bağlı` |
| `ui.required` | `Məcburi` |
| `ui.backHome` | `Ana səhifəyə qayıdın` |
| `ui.detailsTr` | `Ətraflı məlumat — türk dilində` |
| `ui.notFoundTitle` | `Səhifə tapılmadı` |
| `ui.notFoundBody` | `Bu ünvan üzrə səhifə yoxdur. Ana səhifəyə keçə və ya bizimlə əlaqə saxlaya bilərsiniz.` |

`/az/` altında bulunmayan bir yol bu dilde 404 içeriğiyle **gerçek 404** verir. Her bilinmeyen AZ yoluna 200 koduyla landing göstermek veya hepsini otomatik `/az/` adresine 301 etmek başlangıç çözümü değildir. Hata ekranı yeni indekslenecek bir dördüncü satış sayfası değildir.

### 57.4 AZ footer — site metni

**Marka açıklaması:**

> Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması zamanı şifahi tərcümə. Əsas iş dillərimiz Çin dili və türk dilidir; dil uyğunluğunu əvvəlcədən dəqiqləşdiririk.

**Bağlantılar:** `Xidmətlər` · `Şəhərlər` · `Günlük qiymət` · `Suallar və cavablar` · `Əlaqə`.

**İletişim başlığı:** `Bizimlə əlaqə`.

Aynı WhatsApp, telefon ve e-posta görünür. Gizlilik bağlantısı yalnız gerçek veri işleyişine göre onaylı metin varsa eklenir. Sadece Türkçe onaylı metin varsa **“Məxfilik bildirişi — türk dilində”** etiketiyle açılır; onaylanmamış hukuki AZ çeviri varmış gibi davranılmaz. Yeni bir yasal metin bu sürümde hazırlanmış değildir.

**Alt satır:** `© {year} Çince Tercüman. Bütün hüquqlar qorunur.`

### 57.5 Metin üslubu ve editör kontrolü

Kullanılan temel AZ terimleri: **tərcüməçi**, **şifahi tərcümə**, **sərgi**, **zavod ziyarəti**, **avadanlıq**, **quraşdırılma**, **istismara vermə**, **qiymət təklifi**, **müraciət**, **əlaqə**. Metinde Türkçe “fuar”, “tercüman”, “günlük ücret”, “uygunluk”, “hizmet” kelimeleri Azerbaycanca cümle içine otomatik taşınmaz. Marka adı ve kullanıcı tarafından verilen uluslararası fuar/şehir adları gerektiğinde korunur.

Hitap saygılı çoğul ikinci şahıstır. Her paragrafta anahtar kelime tekrarı, “ən yaxşı”, “ən ucuz”, “zəmanətli” gibi kanıtsız üstünlük vaatleri ve otomatik kelime eşleme yoktur. “Azərbaycan dilli” kullanıcı sorgusu anlamında bir soru başlığında kullanılabilir; diğer yerlerde doğal biçimde “azərbaycanca danışan” veya “Azərbaycan dilində şifahi ünsiyyət” tercih edilir.

**Yayın öncesi editör işi:** Azerbaycancayı ana dil düzeyinde kullanan bir editör; doğallık, şehir yazımı, teknik terimler ve müşteri hitabını kontrol etmeli. Bu kontrol yapılmış gibi `reviewedBy` veya onay tarihi eklenmez. Türkçe/Çince iş koşullarıyla fark oluştuğunda sorun yalnız üslup tercihi sayılmaz; işletme koşulu birlikte gözden geçirilir.

<a id="v13-technical"></a>
## 58. Üç dilli teknik yapı — önceki iki dilli örneklerin güncel karşılığı

### 58.1 Dil tanımı ve görünür içerik

Dil sürümleri ayrı URL'lerde yayımlanır; içerik IP veya tarayıcı diline göre aynı URL'de değiştirilmez. Dil geçişi kullanıcıya bırakılır. AZ sayfalarında başlık, ana metin, menü ve form durumları Azerbaycancadır. [AZ-S2]

AZ belgelerinde `<html lang="az" dir="ltr">` ve UTF-8 kullanın. `lang` belgenin dilini tanımlar; küçük başka-dil parçalarına gerektiğinde ayrı dil etiketi verilir. [AZ-S3]

**Proje seçimi:** İç locale anahtarları `tr | zh-Hans | az`; URL klasörleri Türkçe için mevcut kök, Çince için `/zh/`, Azerbaycanca için `/az/`. `az` Azerbaycan dışındaki Azerbaycanca okuyucuları da dışlamayan dil etiketimizdir. `AZ` yalnız görsel kısaltmadır. Ayrı ülke sürümleri olmadığı için aynı içeriğin `/az-AZ/` kopyası açılmaz.

### 58.2 Gerçek dil eşlenikleri ve kısmi kapsam

Google'ın rehberi dil eşleniklerinin kendilerini ve gerçek karşılıklarını tam URL'lerle, karşılıklı belirtmesini ister. Dil etiketi vermek, farklı amaçlı sayfaları eşdeğer yapmaz. [AZ-S1]

**Bu proje için eşleme kararı:**

| Sayfa grubu | TR | ZH | AZ | Durum |
|---|---|---|---|---|
| Genel ana giriş `home` | `/` | `/zh/` | `/az/` | Aynı dört hizmet için yerelleştirilmiş ana giriş; üç yönlü |
| İletişim `contact` | `/iletisim/` | `/zh/contact/` | `/az/elaqe/` | Aynı talep işlemi; AZ'de dil gereksinimi eklenir; üç yönlü |
| Genel operasyon SSS `faq` | `/sik-sorulan-sorular/` | `/zh/faq/` | Yok | Mevcut TR/ZH eşleme korunur |
| AZ bölgesel sorular `az-faq` | Yok | Yok | `/az/suallar/` | Bu sürümde AZ'ye özgü seçki; yapay TR/ZH eşlenik yok |
| Hizmet/şehir/rehber sayfaları | Önceki bütün yollar | Önceki bütün eşlenikler | Henüz yok | TR/ZH eşleme korunur; AZ landing her hizmetin eşleniği yapılmaz |

AZ soru sayfası farklı hizmetlerden ve yeni dil sorularından oluşur. Bu nedenle genel operasyon SSS'sinin birebir karşılığı olarak zorla işaretlenmez. İçeriğin eşdeğerliği ileride editoryal olarak sağlanırsa bu grup güncellenebilir. Dil menüsündeki “başlangıç sayfası” bağlantısı normal navigasyondur; `<head>` eşlenik kümesine dahil edilmez.

**Ana giriş grubu — `/az/` için `<head>`:**

```html
<meta charset="UTF-8">
<title>Çində tərcüməçi | Sərgi, zavod və texniki görüşlər</title>
<meta name="description" content="Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması üçün şifahi tərcümə. İş dilini, tarixləri və günlük qiyməti dəqiqləşdirin.">
<link rel="canonical" href="https://www.cince-tercuman.com/az/">
<link rel="alternate" hreflang="tr" href="https://www.cince-tercuman.com/">
<link rel="alternate" hreflang="zh-Hans" href="https://www.cince-tercuman.com/zh/">
<link rel="alternate" hreflang="az" href="https://www.cince-tercuman.com/az/">
<link rel="alternate" hreflang="x-default" href="https://www.cince-tercuman.com/">
```

`/` ve `/zh/` aynı alternate kümesini alır; canonical kendi URL'lerine döner. İletişim grubunda da aynı yöntem kendi üç URL'siyle uygulanır. `x-default` mevcut proje tercihi doğrultusunda grubun Türkçe karşılığına gider; alt sayfalar koşulsuz ana sayfaya bağlanmaz.

**AZ'ye özgü soru sayfası:** Kendi canonical'ı ve dil etiketi bulunur; başka dilden gerçek eşlenik olmadığından hayali alternate listesi veya `x-default` yaratılmaz. Bir Türkçe rehbere normal bağlantı vermek teknik dil eşlemesi gerektirmez.

### 58.3 Canonical, sitemap ve tarama

Her yeni AZ sayfasında tam, kendisine dönen canonical kullanılır; AZ içerik Türkçe URL'ye canonical edilmez. Query ile ön seçilmiş iletişim biçimleri temiz iletişim URL'sine işaret eder. Site haritası ve dahili bağlantılar tercih edilen URL'lerle tutarlı tutulur. [AZ-S6]

**Proje uygulaması:** `/az/`, `/az/suallar/`, `/az/elaqe/` yalnız yayımlandıklarında sitemap'e eklenir. Burada HTML `<head>` yöntemi dil eşlemesinin tek üretim kaynağı olarak seçilir. Önceki uygulama sitemap'te de alternate üretiyorsa aynı rota verisinden türetilmeli; bağımsız elle ikinci liste tutulmamalı. Taslak/yayınlanmamış AZ hizmet yolları sitemap'e ve header'a sızmaz.

Yeni AZ rotalarının eklenmesi eski URL silme, alan adı değiştirme, Türkçeyi `/tr/` altına taşıma veya DNS/MX kaydı güncelleme nedeni değildir. Önceki göç planı ve e-posta koruma kontrolleri aynen yürürlüktedir.

### 58.4 Schema: içerik dili ile hizmet dilini karıştırmayın

`inLanguage` içerik/eylem dilini, `availableLanguage` ise ilgili temas/hizmet kanalında kullanılabilen dili tanımlar. Bir AZ sayfasının varlığından her tercümanın Azerbaycanca konuşabildiği sonucu çıkarılmaz. [AZ-S4] [AZ-S5]

**Proje uygulaması:** AZ `WebPage.inLanguage` değeri `az` olabilir. Ortak `WebSite.inLanguage` gerçek içerik dillerini içerebilir. `ContactPoint.availableLanguage` veya bir kişinin `knowsLanguage` alanına AZ otomatik eklenmez; canlı sözlü desteğin gerçek yeterliliği ayrıca teyit gerektirir. `Service` adlarında esas çalışma çifti ve görünür koşullar korunur. Azerbaycan müşteri pazarı diye `areaServed` alanına doğrulanmamış Azerbaycan saha hizmeti, Bakü adresi, yerel telefon veya şube eklenmez.

Örnek sayfa kaydı; gerçek ortak `WebSite` kimliğiyle eşleştirilerek kullanılır:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.cince-tercuman.com/az/#webpage",
  "url": "https://www.cince-tercuman.com/az/",
  "name": "Çində tərcüməçi: zavod və sərgi görüşlərində dil dəstəyi",
  "inLanguage": "az",
  "description": "Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması zamanı şifahi tərcümə. Əsas iş dilləri Çin dili və türk dilidir; dil uyğunluğu əvvəlcədən dəqiqləşdirilir."
}
```

Gerçek olmayan fiyat, yıldız, onay tarihi veya AZ tercüman sayısı eklenmez. Soru-cevaplar öncelikle görünür müşteri içeriğidir; bu ek herhangi bir arama motorunda özel soru kutusu, birincilik veya AI önerilmesi vaat etmez.

### 58.5 Veri modeli — kısmi AZ kapsamını kaybetmeden

Önceki `alternatePath` tek eşlenikli modeli ve yalnız iki dile izin veren `Locale` örneği üç dilli gruplar için genişletilir. Aşağıdaki tipler framework zorunluluğu değil uygulama örneğidir. Önceki bütün TR/ZH rota kayıtları korunur.

```ts
type SiteLocale = 'tr' | 'zh-Hans' | 'az';
type LocalizedText = { question: string; answer: string };
type RouteGroup = {
  id: string;
  paths: Partial<Record<SiteLocale, string>>;
  defaultLocale?: SiteLocale;
};

// Bu liste tüm site haritası DEĞİLDİR. Önceki rota kaydına yapılan ekleri gösterir.
const changedGroups: RouteGroup[] = [
  { id: 'home', paths: { tr: '/', 'zh-Hans': '/zh/', az: '/az/' }, defaultLocale: 'tr' },
  { id: 'contact', paths: {
      tr: '/iletisim/', 'zh-Hans': '/zh/contact/', az: '/az/elaqe/'
    }, defaultLocale: 'tr' },
  { id: 'az-faq', paths: { az: '/az/suallar/' } }
];

type ExistingFaq = {
  id: string;                 // Q001–Q110 sabit
  sourceNumber: number;
  pageKey: string;
  publish: boolean;           // Önceki altı onay kapısı korunur
  locales: Record<'tr' | 'zh-Hans', LocalizedText>
    & Partial<Record<'az', LocalizedText>>;
};

type AzRegionalFaq = {
  id: string;                 // AZ001–AZ030; Q kimliği yerine geçmez
  pageKey: 'az-faq';
  groupKey: string;
  relatedSourceIds: string[]; // Tematik bağ; birebir çeviri iddiası değil
  question: string;
  answer: string;
  locale: 'az';
  editorialApproved: boolean;
  published: boolean;
};
```

Bir Q kaydında AZ metni yoksa `az: trText` yapmayın. Eksik alanı ziyaretçiye AZ diye göstermeyin. Yeni üç sayfanın bütün arayüz metinleri AZ sözlüğünden gelir; eksik anahtar derleme testini başarısız yapar. Bir ülke veya dil gereksinimi, sayfanın `locale` değeri üzerinden otomatik onaylanmaz.

**Önerilen ilave içerik dosyaları — yönetim paneli gerekmez:**

```text
src/content/az/home.md
src/content/az/suallar.md
src/content/az/elaqe.md
src/data/az-faq.json
src/data/i18n/az.json
```

Bu adlar önerilen proje dosyalarıdır; bu MD tesliminde çalışan web uygulamasının oluşturulduğu anlamına gelmez. Önceki `src/content/tr`, `src/content/zh`, yönlendirme envanteri, test ve içerik dosyaları korunur.

### 58.6 Üç dilli mesaj hazırlama — eski yardımcı fonksiyonun yerine

Aşağıdaki kod bölüm 20.5'teki iki dilli örneğin güncel karşılığıdır. Eski örneği AZ için çalıştırmayın; o örnek `az` değerini Türkçeye düşürebilir. Tarih doğrulaması, alan hatalarının AZ sözlüğüne bağlanması ve erişilebilir form bileşeni ayrıca bölüm 16/56'ya göre uygulanır. Bu fonksiyon ağ isteği veya veri kaydı yapmaz.

```js
// Framework bağımsız yardımcı; ağ isteği atmaz, rezervasyon veya talep kaydı açmaz.
const SITE_V13 = Object.freeze({
  origin: 'https://www.cince-tercuman.com',
  whatsapp: '905550441141',
  phone: '+905075286187',
  email: 'info@cince-tercuman.com'
});

function normalizeLocale(value) {
  if (value === 'zh') return 'zh-Hans'; // Eski klasör/arayüz anahtarına uyumluluk.
  if (['tr', 'zh-Hans', 'az'].includes(value)) return value;
  throw new Error('invalid_locale'); // AZ hiçbir zaman sessizce TR'ye düşmez.
}

const SERVICE_V13 = {
  china: {tr:'Çin’de tercüman', 'zh-Hans':'中国现场口译', az:'Çində şifahi tərcümə'},
  machine: {tr:'Makine kurulumu tercümanlığı', 'zh-Hans':'设备安装口译', az:'Avadanlıq quraşdırılması zamanı tərcümə'},
  factory: {tr:'Çin’de fabrika ziyareti tercümanlığı', 'zh-Hans':'中国工厂参访口译', az:'Çində zavod ziyarəti'},
  fair: {tr:'Çin’de fuar tercümanlığı', 'zh-Hans':'中国展会口译', az:'Çində sərgi ziyarəti'},
  unsure: {tr:'Emin değilim', 'zh-Hans':'尚不确定', az:'Hələ dəqiqləşdirməmişəm'}
};

const LANGUAGE_V13 = {
  'turkish-ok': {
    tr:'Türkçe sözlü iletişim benim için uygundur.',
    'zh-Hans':'我可以使用土耳其语进行口头沟通。',
    az:'Türk dilində şifahi ünsiyyət mənim üçün uyğundur.'
  },
  'azerbaijani-required': {
    tr:'Azerbaycanca sözlü iletişim şartım var; uygunluk ayrıca teyit edilmelidir.',
    'zh-Hans':'我需要使用阿塞拜疆语进行口头沟通，须另行确认译员是否符合要求。',
    az:'Azərbaycan dilində şifahi ünsiyyət tələb edirəm; uyğunluq ayrıca təsdiqlənməlidir.'
  },
  'confirm-first': {
    tr:'Önce dil uygunluğunu teyit etmek istiyorum; Türkçe iletişime henüz onay vermedim.',
    'zh-Hans':'我希望先确认沟通语言是否合适，尚未同意使用土耳其语沟通。',
    az:'Əvvəlcə dil uyğunluğunu dəqiqləşdirmək istəyirəm; türk dilində işləməyə hələ razılıq verməmişəm.'
  }
};

const CONTACT_COPY_V13 = {
  tr: {
    intro:'Merhaba, Çince–Türkçe sözlü tercümanlık için uygunluk ve günlük teklif sormak istiyorum.',
    service:'Hizmet', country:'Çalışma ülkesi', city:'Şehir / çalışma bölgesi',
    dates:'Tarih', language:'Dil gereksinimi', need:'Kısa ihtiyaç', name:'Ad / şirket',
    countryNames:{TR:'Türkiye', CN:'Çin'}, source:'Kaynak sayfa',
    expenses:'Günlük tercümanlık ücretini; şehir içi / şehir dışı ulaşım, konaklama ve yeme-içme giderlerinden ayrı olarak paylaşabilir misiniz?',
    subject:'Çince tercüman uygunluk ve teklif talebi',
    condition:'Dil gereksiniminin karşılanması ayrıca teyit edilmelidir. Bu mesaj rezervasyon onayı değildir.'
  },
  'zh-Hans': {
    intro:'您好，我想咨询中土现场口译的档期与每日报价。',
    service:'服务类型', country:'工作所在国家', city:'城市 / 工作区域',
    dates:'日期', language:'沟通语言要求', need:'简要需求', name:'姓名 / 公司',
    countryNames:{TR:'土耳其', CN:'中国'}, source:'来源页面',
    expenses:'请将口译日费与市内交通、城际交通、住宿及餐饮费用分别说明。',
    subject:'中土口译档期与报价咨询',
    condition:'是否满足语言要求须另行确认。本消息不代表预约已确认。'
  },
  az: {
    intro:'Salam. Şifahi Çin dili tərcüməsi üçün tarixləri və günlük qiyməti dəqiqləşdirmək istəyirəm.',
    service:'Xidmət', country:'İşin görüləcəyi ölkə', city:'Şəhər / iş yeri',
    dates:'Tarixlər', language:'Dil tələbi', need:'Qısa məlumat', name:'Ad / şirkət',
    countryNames:{TR:'Türkiyə', CN:'Çin'}, source:'Mənbə səhifə',
    expenses:'Günlük xidmət haqqını şəhərdaxili və şəhərlərarası nəqliyyat, qalma və yemək-içmək xərclərindən ayrıca bildirməyinizi xahiş edirəm.',
    subject:'Çin dili tərcüməçisi — tarix və qiymət sorğusu',
    condition:'Dil tələbinin qarşılanması ayrıca təsdiqlənməlidir. Bu mesaj sifarişin təsdiqi deyil.'
  }
};

/**
 * Ön koşul: Tarih aralığı, bilinmeyen tarih seçimi ve geçmiş tarih formda doğrulanır.
 * dateLabel yalnız bu doğrulama sonrası hazırlanmış, kullanıcıya gösterilen etikettir.
 * input.locale, service, country, city, dateLabel, need zorunludur.
 * AZ için languageRequirement zorunlu; TR/ZH'de mevcut akışta isteğe bağlıdır.
 */
function prepareContactV13(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('input_required');
  }
  const locale = normalizeLocale(input.locale);
  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const readText = (value, min, max, code) => {
    if (typeof value !== 'string') throw new TypeError(code);
    const text = value.trim();
    if (Array.from(text).length < min || Array.from(text).length > max) {
      throw new Error(code);
    }
    return text;
  };
  if (!hasOwn(SERVICE_V13, input.service)) throw new Error('invalid_service');
  if (!['TR', 'CN'].includes(input.country)) throw new Error('invalid_country');
  if (['china', 'factory', 'fair'].includes(input.service) && input.country !== 'CN') {
    throw new Error('service_country_mismatch');
  }
  const language = input.languageRequirement;
  if ((locale === 'az' || language !== undefined) && !hasOwn(LANGUAGE_V13, language)) {
    throw new Error('invalid_language_requirement');
  }
  const city = readText(input.city, 2, 100, 'invalid_city');
  const dates = readText(input.dateLabel, 1, 160, 'invalid_dates');
  const need = readText(input.need, 10, 600, 'invalid_need');
  const name = input.nameCompany == null || input.nameCompany === ''
    ? null : readText(input.nameCompany, 1, 120, 'invalid_name_company');
  const defaultPath = locale === 'az' ? '/az/elaqe/' : locale === 'zh-Hans' ? '/zh/contact/' : '/iletisim/';
  const source = new URL(input.sourcePath || defaultPath, SITE_V13.origin);
  if (source.origin !== SITE_V13.origin) throw new Error('invalid_source');
  const copy = CONTACT_COPY_V13[locale];
  const lines = [
    copy.intro, '',
    `${copy.service}: ${SERVICE_V13[input.service][locale]}`,
    `${copy.country}: ${copy.countryNames[input.country]}`,
    `${copy.city}: ${city}`, `${copy.dates}: ${dates}`
  ];
  if (language !== undefined) lines.push(`${copy.language}: ${LANGUAGE_V13[language][locale]}`);
  lines.push(`${copy.need}: ${need}`);
  if (name !== null) lines.push(`${copy.name}: ${name}`);
  if (language !== undefined) lines.push('', copy.condition);
  lines.push('', copy.expenses, '', `${copy.source}: ${source.pathname}`);
  const text = lines.join('\n');
  const whatsapp = new URL(`https://wa.me/${SITE_V13.whatsapp}`);
  whatsapp.searchParams.set('text', text);
  return {
    text,
    whatsapp: whatsapp.href,
    mailto: `mailto:${SITE_V13.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(text)}`,
    phone: `tel:${SITE_V13.phone}`,
    locale,
    requiresLanguageConfirmation: language === 'azerbaijani-required' || language === 'confirm-first'
  };
}
```

**Uygulama güvenliği:** Önizleme `textContent`/güvenli metin bağlama ile basılır. Kullanıcı girdisi ham HTML değildir. Üretilen URL'ler kullanıcı tıklamadan açılmaz. `requiresLanguageConfirmation=false` yalnızca ek dil incelemesi bayrağının kapalı olduğunu gösterir; tercüman veya rezervasyon onayı değildir. Dil notu küçük bir test/arayüz kolaylığı uğruna mesajdan çıkarılmaz. Uzun URL ve kopyalama başarısızlığında sade kanal bağlantısı ve seçilebilir metin kalır.

<a id="v13-growth"></a>
## 59. AZ müşteri edinimi, ölçüm ve sonraki adımlar

### 59.1 İlk yayın için içerik stratejisi

İlk aşamada sekiz sorguyu üç gerçek AZ sayfasının ilgili bölümlerinde karşılayın. Dil uygunluğu, günlük ücret ve kapsam sınırlarını yalnızca arama motoru için hazırlanan gizli bir alana taşımayın. Özellikle “Çində Azərbaycan dilli tərcüməçi” sorgusunun cevabı, Azerbaycanca tercüman garantisi yaratmadan okunabilmelidir.

**Yapılmayacaklar:** Sekiz sorgu için sekiz benzer landing page; ilçe/şehir adı değiştirilmiş yüzlerce AZ sayfa; Türkçe metni `lang=az` ile sunma; AZ başlığı ve tamamen Türkçe içerik; sahte Azerbaycan şubesi; doğrulanmamış “Azərbaycan dilində 24/7 dəstək” ifadesi; gizli anahtar kelime listesi; ücretli bağlantı paketleri; yeni dilin doğrudan sıralama garantisi olduğu iddiası.

Bu ekin amacı daha geniş vaatte bulunmak değil, Azerbaycanca okuyucunun gerçek hizmeti anlayıp kendi dil gereksinimini doğru bildirebilmesidir. Mevcut Türkçe ve Çince müşteri yolculuklarının SEO/GEO çalışmaları devam eder.

### 59.2 Ölçüm alanları — sayfa dili ile müşterinin ülkesini ayırın

Önceki Search Console, Bing ve analitik kurulum planları korunur. Bu belge sırasında hesap bağlantısı kurulmadı veya ölçüm etkinleştirilmedi. AZ için eklenecek gözlem alanları şunlardır:

| Gözlem | Kayıt yaklaşımı | Çıkarılmayacak sonuç |
|---|---|---|
| AZ sayfa gösterimi/tıklaması | `/az/` URL grubu ve gerçekten gözlenen sorgular | Henüz ölçülmemiş pazar büyüklüğü |
| Ülke kırılımı | Araçta bulunan ülke verisini dil verisinden ayrı tutma | AZ sayfasını açan herkesin Azerbaycan'da olduğu |
| FAQ ilgisi | Gerekli izin/kurulum sağlanırsa `faq_open`, yalnız AZ soru kimliği ve sayfa | Soru açan kişinin müşteri olduğu |
| İletişime geçiş | Kanal tıklaması / önizleme hazırlığı ayrı olay | WhatsApp tıklamasının gönderilmiş mesaj veya satış olduğu |
| Gerçek talep | Müşteri gerçekten iletişim kurduktan sonra işletmenin kendi takip kaydı | Form preview'unun teyit edilmiş rezervasyon olduğu |
| Dil ihtiyacı | İşletme tarafında `turkish-ok`, `azerbaijani-required`, `confirm-first` ayrı | Site locale'inin tercüman dili sayılması |
| İş sonucu | Gerçek teyit edilen günler/iş sonucu, gerekiyorsa manuel kayıt | Tahmini ciroyu gerçekleşmiş gelir olarak yazma |

Serbest form metni, firma adı, telefon, e-posta ve teknik açıklamalar analitiğe gönderilmez. Dil gereksinimi de varsayılan olarak üçüncü taraf analitik olayına eklenmez; gerçek talep takibinde işin yürütülmesi için değerlendirilir. Panel kurulmadığından CRM veya otomatik aday atama yapılmış gibi anlatılmaz.

### 59.3 AZ metni başka kanallara taşırken

Dil menüsü, işletmenin mevcut dijital iletişimlerinde kullanılacak site bağlantıları ve gerçek müşteri yazışmalarında uygun AZ sayfası kullanılabilir. Yeni sosyal hesap veya dizin kaydı bu belgede açılmış değildir. Dış kanalda kullanılacak kısa AZ tanıtım metni aşağıdadır:

**AZ — yayımlanabilir kısa tanıtım:**

> Çində zavod və sərgi ziyarətləri, Türkiyədə avadanlıq quraşdırılması zamanı şifahi tərcümə dəstəyi. Əsas iş dillərimiz Çin dili və türk dilidir; dil uyğunluğunu, tarixləri və günlük şərtləri əvvəlcədən dəqiqləşdiririk.

Bu tanıtımdaki çalışma dili cümlesi, kısaltma nedeniyle çıkarılmamalı. Azerbaycan bağlantılı bir kuruluş gerçekten işletmeyle çalışır ve izin verirse gerçek referans/bağlantı sonradan eklenebilir; bu sürümde böyle bir ilişki varsayılmadı.

### 59.4 Genişlemeyi ne tetikler?

**Ayrı AZ hizmet sayfası:** Aynı hizmet için tekrarlayan gerçek talepler, mevcut landing'e sığmayan yararlı içerik ve yeterli operasyon bilgisi varsa değerlendirin. Sorgu görünürlüğü tek başına yeni sayfa üretme emri değildir.

**Azerbaycanca konuşan aday ağı:** Tekrarlayan, gerçekten AZ sözlü iletişimi zorunlu talepler oluşursa operasyonel olarak araştırılabilir. Teyit edilen adayın dil/konu yeterliliği ve tarih uygunluğu doğrulanmadan sitedeki vaat değiştirilmez.

**Azerbaycan'da saha hizmeti:** Yeni ülke kapasitesi fiilen doğrulanırsa kapsam, ülke seçenekleri, teklif koşulları ve bütün dil metinleri birlikte güncellenir. Yalnız AZ pazarında müşteri var diye ülke alanı genişletilmez.

**Yeni içeriklerde aynı sınır:** Yazılı çeviri, ürün araştırma, ticari danışmanlık, ithalat, tur ve denetim hizmetleri içerik büyütme gerekçesiyle geri eklenmez.

<a id="v13-tests"></a>
## 60. v1.3 kabul testleri ve yayın kontrol listesi

### 60.1 Kaynak ve kapsam korunumu

- [ ] v1.2'nin 1–51. bölümleri ve Q001–Q110 soru-cevapları kaynak olarak eksiksiz korunuyor.
- [ ] Türkçe–Çince sayfaların hiçbirinin URL'si AZ ekleme nedeniyle değişmiyor.
- [ ] Altı işletme teyidi bekleyen Q cevabının yayın engeli korunuyor; AZ özetlerle aşılmıyor.
- [ ] Dört hizmet, günlük çalışma ve ayrıca alınan masraflar üç dilde tutarlı.
- [ ] Eski Taksim adresi, 600+ ekip, gerçek dışı referans ve kaldırılmış hizmetler dönmüyor.
- [ ] İlk sürümde yönetim paneli, veritabanı, üyelik, ödeme ve otomatik rezervasyon eklenmiyor.

### 60.2 AZ içerik ve yönlendirme

- [ ] `/az/`, `/az/suallar/`, `/az/elaqe/` doğru başlık ve gerçek metinle render oluyor.
- [ ] AZ001–AZ030 eksiksiz; ilgili soru ankrajları gerçek ve tekil.
- [ ] Kullanıcının sekiz sorgusu bölüm 53'te birincil hedefe bağlı; her biri için kopya URL açılmıyor.
- [ ] Dil uygunluğu notu ilk CTA ve form yakınında açık; sadece akordeonda değil.
- [ ] `Azərbaycan dilli tərcüməçi` ifadesinin yanında koşullu açıklama var; garantiye dönüşmüyor.
- [ ] AZ ilk aşamada 110 sorunun tamamı çevrilmiş gibi etiketlenmiyor.
- [ ] Azerbaycanca editör incelemesi gerçekten tamamlanmadan tamamlandı olarak işaretlenmiyor.
- [ ] Bütün AZ menü, boş durum, form hata ve kopyalama metinleri Azerbaycanca.
- [ ] Gerçek AZ karşılığı olmayan linkler yanlış eşlenik gibi davranmıyor; dil geçişi açık etiketli.

### 60.3 Dil uygunluğu — zorunlu davranış testleri

| Test | Beklenen sonuç |
|---|---|
| AZ formunda dil seçmeden mesaj hazırlama | AZ alan hatası; Türkçe onayı varsayılmaz |
| `turkish-ok` seçimi | Hazır mesajda müşterinin Türkçe iletişim tercihi görünür; rezervasyon onayı yok |
| `azerbaijani-required` seçimi | Mesajda açık AZ şartı ve ayrıca doğrulama notu; hazır AZ tercüman atanmış sayılmaz |
| `confirm-first` seçimi | Henüz çalışma diline onay verilmediği açık |
| Form olmadan WhatsApp butonu | Kısa mesaj teyit talep eder; Türkçe iletişim onayı kendiliğinden verilmez |
| `locale=az` | AZ mesaj ve AZ konu satırı; Türkçe fallback yok |
| Eski `locale=zh` | Normalize edilerek Çince mesaj üretir; mevcut entegrasyon bozulmaz |
| Bilinmeyen dil kodu | Sessiz varsayılan yerine kontrollü hata |
| Müşteri Azerbaycanlı, iş Çin'de | Çalışma ülkesi Çin; müşterinin ülkesiyle karışmaz |
| İş Azerbaycan'da | Hazır hizmet olarak işaretlenmez; doğrudan iletişimle ayrı değerlendirme |

### 60.4 SEO ve teknik testler

- [ ] Üç AZ sayfasında doğru `lang`, UTF-8, bir H1 ve self-canonical var.
- [ ] Home ve contact grupları TR/ZH/AZ için karşılıklı ve aynı gerçek alternate kümesine sahip.
- [ ] AZ bölgesel FAQ sayfası, farklı amaçlı genel TR/ZH SSS sayfasıyla yapay eşlenik yapılmıyor.
- [ ] Diğer hizmet/şehir/rehber sayfalarının mevcut TR/ZH eşlemeleri kaybolmuyor.
- [ ] AZ landing yanlışlıkla bütün hizmetlerin `hreflang=az` hedefi yapılmıyor.
- [ ] Yayınlanmamış AZ yolları sitemap, iç arama veya header listesine sızmıyor.
- [ ] AZ sayfasının dili schema'da tanımlanabilir; tercümanın AZ konuştuğu/ülkede ofis bulunduğu uydurulmuyor.
- [ ] 404 yolu gerçek 404 veriyor; bir fallback kuralı üç sayfalık siteyi sonsuz sahte sayfaya çevirmiyor.
- [ ] Eski URL, telefon, e-posta ve DNS/MX kontrol listeleri korunuyor.

### 60.5 Mobil, mesaj ve erişilebilirlik

- [ ] 320/360/390/768 px ve masaüstünde taşma, kesilen AZ harfi veya örtülen form alanı yok.
- [ ] Uzun `Azərbaycan dili` etiketi header'ı bozmaz; mobil menü klavyeyle kullanılabilir.
- [ ] Ekran okuyucu `lang=az` ve alan etiketlerini alır; dil radio grubu anlamlı legend kullanır.
- [ ] Her FAQ klavyeyle açılabilir; derin bağlantı ilgili soruyu görünür kılar.
- [ ] Önizleme gerçek ad, ihtiyaç ve teknik bilgileri HTML olarak çalıştırmaz.
- [ ] WhatsApp mesajı UTF-8 olarak doğru açılır; `Ə`, `ı`, `ş` bozulmaz.
- [ ] E-posta ve kopyalama alternatifi gerçek cihazda denenir; mesaj gönderildiği yanlış bildirilmez.
- [ ] Dil notu ve ayrıca masraflar ekranı terk etmeden görülebilir.
- [ ] Kişisel form metni analitik olayına veya site içi query URL'lerine taşınmaz.

### 60.6 Test durumu raporu

Bu bölümdeki kutular **canlı site testleri henüz yapılmadığı için işaretlenmemiştir**. Bu MD hazırlanırken kaynak koruma, soru sayıları, iç belge ankrajları ve örnek JavaScript yardımcı fonksiyonu yerel olarak kontrol edilebilir. Gerçek tarayıcı, telefon, e-posta, arama motoru ve hosting testleri uygulama/yayın aşamasında yapılır; yerel dosya kontrolü bunların yerine geçmez.

<a id="v13-build"></a>
## 61. Kodlama aracına verilecek tek güncel talimat — TR + ZH + AZ

Bu bölüm 28, 42.3 ve 50'de korunan önceki talimatların **üç dilli kapsam için güncel üst sürümüdür**. Eski sayfa metinleri ve uyumlu teknik kararlar silinmez. Aşağıdaki metin bu tek MD ile kullanılabilir:

```text
Bu Markdown dosyasını cince-tercuman.com sitesinin tek ana uygulama belgesi kabul et.
Etkin sürüm 1.3'tür. Önce v1.3 önsözünü, sonra 52–62. bölümleri ve önceki ana kapsamı oku.
Önceki bölümlerdeki iki dilli ilk sürüm ifadeleri, sadece yeni dil kapsamı açısından
v1.3 tarafından genişletilmiştir; eski TR/ZH içerikleri ve URL'ler hâlâ geçerlidir.

KORU:
- 1–51. bölümlerin kapsamı, mevcut TR/ZH sayfaları ve 110 Q soru-cevap kaydı.
- Dört sözlü tercümanlık hizmeti, günlük çalışma ve ayrıca alınan şehir içi/şehir dışı
  ulaşım, konaklama, yeme-içme giderleri.
- Aynı alan adı, uygun eski URL'ler, göç envanteri, e-posta/DNS güvenliği ve geri dönüş planı.
- İkonsuz Çince Tercüman yazı logosu, turuncu/beyaz tasarım, responsive kurallar.
- WhatsApp +90 555 044 11 41; arama +90 507 528 61 87; info@cince-tercuman.com.
- Altı owner-review Q kaydı için yayından önce işletme teyidi. Başka dilde aynı vaadi
  üreterek bu kapıları aşma.
- Yönetim panelsiz başlangıç. Üyelik, ödeme, canlı müsaitlik, otomatik rezervasyon ve
  yeni backend/CRM ekleme. Teknolojiyi zorunlu bir framework varsayma.

AZ OLARAK EKLE:
1. /az/ — bölüm 54'teki gerçek landing içeriği, dört hizmet, dil uygunluğu ve ücret notları.
2. /az/suallar/ — bölüm 55'teki AZ001–AZ030 tam soru-cevapları.
3. /az/elaqe/ — bölüm 56'daki AZ formu, önizleme, WhatsApp/e-posta/kopyalama seçenekleri.
Başlangıçta bu üç AZ sayfası dışında hizmet/şehir URL'leri veya boş çeviri sayfaları üretme.
110 TR/ZH soruyu silme, yeniden numaralandırma veya tamamı AZ'ye çevrildi diye etiketleme.

DİL DÜRÜSTLÜĞÜ:
Sitenin AZ olması tercümanın AZ bildiği garantisi değildir. Temel hizmet çifti Çin dili–Türkçe.
Müşterinin açık Türkçe uygunluk beyanı olmadan bunu kabul edilmiş sayma.
AZ formunda üç seçenek ön seçimsiz zorunlu olsun: turkish-ok, azerbaijani-required,
confirm-first. Gerekli dil uyarısı ekranda ve hazır mesajda kalsın.
Doğrudan WhatsApp mesajı kullanıcının henüz yapmadığı dil tercihini onun adına seçmesin.
Azerbaycan müşteri pazarıdır; Azerbaycan'da ofis, yerel telefon, hazır ekip veya hazır
saha hizmeti icat etme. Türkiye/Çin dışındaki iş ayrıca değerlendirilmeli.
Makineyi tercüman kurmaz, fabrika ziyareti audit değildir, kalite garantisi verilmez.
Kaldırılan yazılı çeviri, ürün araştırma, ithalat, danışmanlık ve tur hizmetlerini geri getirme.

DİL VE TEKNİK YAPI:
Locale anahtarlarını tr | zh-Hans | az olarak ele al; eski zh anahtarı için açık normalizasyon yap.
Tek alternatePath yerine gerçek sayfa gruplarında locale -> URL eşlemesi kullan.
TR kökü ve /zh/ yolları değişmesin. /az/ yeni alt dizindir, yeni alan adı değildir.
AZ metni eksikse Türkçe metni AZ diye yayımlama; anahtar eksikliğini test hatası yap.
Ana giriş ve iletişim gruplarında üç yönlü gerçek hreflang; diğer mevcut gruplarda TR/ZH korunur.
AZ'ye özgü FAQ'yı farklı amaçlı bir TR/ZH sayfaya otomatik eşleme.
AZ eşleniği olmayan sayfadaki dil menüsü /az/ başlangıcına açık etiketli normal link verebilir;
bu fallback, teknik hreflang listesine eklenmez.
AZ sayfaları lang=az, UTF-8, kendi canonical'ları ve gerçek yayımlanmış sitemap kayıtlarıyla çıksın.
Yanlış AZ yolları gerçek 404 dönsün. IP'ye veya tarayıcı diline göre zorunlu redirect yapma.
Site içerik dilini, ContactPoint/tercüman çalışma dili ve areaServed ile karıştırma.

UYGULAMA:
Bölüm 57'deki doğal AZ menü, yardımcı metin, hata ve footer içeriklerini kullan.
Bölüm 58.6'daki prepareContactV13 üç dili destekleyen örneği eski iki dilli yardımcı yerine uygula.
Tarih doğrulaması, güvenli metin basımı ve erişilebilir formu ayrıca tamamla.
İhtiyaç metnini kullanıcı tıklamadan dış servise gönderme, sunucuda talep kaydetme.
Otomatik gönderildi/rezervasyon kesinleşti gibi yanlış başarı mesajı gösterme.
AZ ve diğer dillerde gerçek iş koşulları farklılaşmasın; para birimi ve saat uydurma.

TEST ET VE RAPORLA:
Bölüm 60'taki kapsam, dil, URL, form, mobil, encoding ve erişilebilirlik testlerini uygula.
Kaynak bütünlüğü testlerini gerçek site testleri yapılmış gibi sunma.
Ana dili Azerbaycanca olan editör incelemesini yapılmadan tamamlandı sayma.
Search Console/Bing/Baidu/IndexNow, gerçek cihaz ve ülke/ağ erişim testleri için önceki
planları gereken gerçek erişimle yürüt; hesap kurulmuş veya sonuç alınmış gibi davranma.
Canlı DNS, e-posta, eski URL silme veya hosting değişimini yetkisiz uygulama.

Sonuçta oluşturulan sayfa/dosya listesini, eksik gerçek onayları, URL kararlarını ve test
sonuçlarını göster. Bu MD'nin iç notlarını, kaynaklarını ve taslaklarını kamuya açık
sayfalara veya public dizinine kopyalama. Sadece onaylı site metinlerini yayımla.
```

<a id="v13-provenance"></a>
## 62. Kaynaklar, kapsam sınırları ve dosya bütünlüğü

### 62.1 Kaynakların ayrımı

**Korunan ana kaynak:** Kullanıcının yüklediği `cince-tercuman-nihai-site-plani-ve-icerikleri.md`. Bu sürümün önceki 1–51. bölümleri, Türkçe–Çince gerçek metinleri, 110 soru-cevap kaydı ve kaynak notları bu teslimatta korunur. Önceki tarihli teknik/rakip araştırması bu AZ güncellemesinde baştan yapılmış sayılmaz.

**Yeni kullanıcı kararı:** Azerbaycan ikincil müşteri pazarı; ilk aşamada landing + FAQ + iletişim; gerektiğinde açık uygunluk teyidiyle Türkçe üzerinden müşteri–tercüman iletişimi; doğal/profesyonel AZ metinleri; sekiz aday sorgu. Azerbaycan pazarının sayısal büyümesi bağımsız doğrulanmış veri olarak sunulmaz.

**Yeni yazılan içerik:** Bölüm 54–57'nin AZ metinleri, 30 soru-cevap, form/mesaj sözlüğü ve önceki kapsamla uyumlu işleyiş açıklamaları bu isteğe göre hazırlanmıştır. Bunlar geçmiş müşteri görüşmesi alıntıları değildir. İşletmede henüz gerçekleşmemiş kapasite, aday, referans veya politika icat edilmemiştir.

**Yeni teknik kontrol:** Çok dilli URL, dil eşlemesi, HTML dili, canonical ve içerik dili/hizmet dili ayrımı için aşağıdaki resmî kaynaklar 15 Eylül 2026 tarihinde kontrol edildi. Bunlar arama hacmini veya hizmetin operasyonel varlığını kanıtlamaz. Uygulama veri modeli, rota kapsamı ve form akışı bu proje için önerilen tasarımdır.

**Yapılmayanlar:** Canlı site düzenleme, hesap açma/bağlama, pazar/arama hacmi veya sıralama ölçümü, Azerbaycan'dan gerçek cihaz/ağ testi, bağımsız ana dili editör onayı, aday tercüman dil doğrulaması, yerel şube açma, rezervasyon/ödeme işlemi. Hiçbir sayfa veya script henüz yayına alınmış değildir.

### 62.2 Bu güncellemede kontrol edilen resmî kaynaklar

[AZ-S1]: https://developers.google.com/search/docs/specialty/international/localized-versions "Google Search Central — Yerelleştirilmiş sürümler, gerçek karşılıklı hreflang ve dil kodları; erişim 15 Eylül 2026"
[AZ-S2]: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites "Google Search Central — Çok dilli siteler, ayrı URL'ler ve dil seçimi; erişim 15 Eylül 2026"
[AZ-S3]: https://www.w3.org/International/questions/qa-html-language-declarations "W3C Internationalization — HTML belgesinde dilin belirtilmesi; erişim 15 Eylül 2026"
[AZ-S4]: https://schema.org/inLanguage "Schema.org — İçerik dili; erişim 15 Eylül 2026"
[AZ-S5]: https://schema.org/availableLanguage "Schema.org — İletişim/hizmet kanalında kullanılabilen dil; erişim 15 Eylül 2026"
[AZ-S6]: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls "Google Search Central — Canonical seçimi ve tutarlılık; erişim 15 Eylül 2026"

Kaynak numaraları ve bu bölüm web sayfalarına müşteri metni olarak aktarılmaz. Eski belgenin kaynakları da kendi bağlamlarıyla korunur.

### 62.3 Kaynak koruma ve yerel doğrulama özeti

| Kontrol | Sonuç |
|---|---|
| v1.2 ana kaynak | 457,617 bayt; UTF-8 içeriği yeni köprü notları çıkarılınca birebir geri elde edildi |
| Korunan eski bölümler | 1–51; hiçbir önceki bölüm kaldırılmadı |
| Korunan Q soru kayıtları | Q001–Q110; 110 tekil kayıt ve önceki TR/ZH metinleri aynen korundu |
| Yeni AZ soru kayıtları | AZ001–AZ030; 30 tam soru-cevap, tematik Q bağlarıyla |
| Yeni AZ sayfaları | Üç: `/az/`, `/az/suallar/`, `/az/elaqe/` |
| Yeni ana bölümler | 52–62; önceki başlıkların içine 11 kısa yönlendirme notu eklendi |
| İç belge bağlantıları | Yeni v1.3 hızlı erişim hedefleri mevcut; açık ankrajlarda tekrar yok |
| Örnek mesaj fonksiyonu | 22 yerel JavaScript testi geçti; üç dil, dil koşulları ve Unicode bağlantı üretimi dahil |
| Çalışan site / gerçek kanal testi | Yapılmadı; canlı yayın kontrol kutuları işaretlenmedi |
| Ana dili Azerbaycanca editör incelemesi | Yapılmadı; yayın listesinde ayrıca bulunuyor |

**Korunan v1.2 kaynağının SHA-256 özeti:** `fe4ce16686c7ae5b1dd3d8ff76731de8b6940a88eda3c02456c1089e47e13774`

Kaynak koruma kontrolü, bu dosyada `V13_PRESERVED_BASE_BEGIN` ve `V13_PRESERVED_BASE_END` arasındaki bölgeden yalnız `V13_BRIDGE_*` blokları çıkarılarak yapılmıştır. Bu işlem önceki dosyayı bayt düzeyinde geri verir. Bu işaretler web çıktısına aktarılmaz.

Bu kontrol özeti yalnız geliştirme içindir. Kaynak metnin korunması, bütün taslakların yayına uygun veya bütün canlı testlerin tamamlanmış olduğu anlamına gelmez. İşletme ve editör onay kapıları devam eder.

**Tek teslimat:** Bu dosya önceki bütün kapsamı ve yeni AZ ekini içerir; ayrı bir ek dosyasını birleştirmek gerekmez.
