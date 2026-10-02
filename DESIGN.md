# DESIGN.md — Çince Tercüman tasarım sistemi

Kaynak: **getcontrast.io** (1 Ekim 2026 tarihli ekran görüntüleri; renkler ve ölçüler
görüntülerden piksel piksel örneklendi). `src/styles/main.css` bu belgedeki tokenları
kullanır. İçerik, adres, şema ve SEO yapısı bu belgenin kapsamı dışındadır.

Özet: beyaz tuval, tek vurgu rengi coral, çok kalın geometrik başlıklar, nötr ve sakin
gövde yazısı, 10px köşeli butonlar, 1px kenarlıklı 24px köşeli kartlar, krem ve açık gri
yüzeyler. Gölge yalnızca yüzen öğelerde (sol alttaki iletişim kutusu).

## Renkler

| Token | Değer | Rol |
|---|---|---|
| `--color-coral` | `#ff5065` | Birincil buton dolgusu, aktif durumlar, liste imleri |
| `--color-coral-hover` | `#f23f55` | Birincil buton hover |
| `--color-coral-text` | `#d8294a` | Beyaz zemin üzerinde coral ailesinden **yazı** (AA) |
| `--color-persimmon` | `#ff7a59` | Yıldızlar, sıcak vurgu dolguları, şerit süsleri |
| `--color-pink-wash` | `#fff2f3` | Seçili durum zemini (radyo satırı) |
| `--color-ink` | `#000000` | Başlıklar |
| `--color-text` | `#0e0f10` | Gövde metni |
| `--color-muted` | `#6b6b6b` | İkincil metin (beyaz ve krem üzerinde AA) |
| `--color-surface` | `#fafafb` | Alternatif bölüm bandı, ghost buton zemini, tablo başlığı |
| `--color-surface-2` | `#f3f3f4` | Çipler, hover dolguları |
| `--color-cream` | `#f8f5ef` | Öne çıkan kartlar, talep paneli, bilgi kutuları |
| `--color-cream-band` | `#fbf9f3` | Geniş krem paneller (son çağrı, dekoratif şerit) |
| `--color-cream-border` | `#eae7e2` | Krem yüzeylerin kenarlığı |
| `--color-border` | `#e2e2e2` | Kart kenarlıkları, başlık çubuğu çizgisi |
| `--color-border-strong` | `#d7d7d8` | Buton ve form alanı kenarlıkları |
| `--color-dark` | `#0b0b0d` | Koyu kart, altbilgi |

Simge çipleri (özellik kartları paleti): mavi `#f4f7ff/#3b5bdb`, pembe `#fff2f3/#d8294a`,
yeşil `#f2feef/#2b8a3e`, mor `#fff2ff/#9c36b5`, turkuaz `#f1ffff/#0b7285`,
sarı `#fff7e8/#e8590c`. Kart ızgarasında sırayla döner.

Coral dışında dolgu olarak kullanılan tek renkli vurgu persimmon'dur; başka kromatik
dolgu eklenmez. Mavi, yeşil vb. yalnızca simge çiplerinde ve pastel tonda görünür.

## Yazı tipleri

| Rol | Aile | Ağırlık | Not |
|---|---|---|---|
| Başlık (H1, H2, logo) | **Outfit** | 800 | Gilroy ExtraBold'un ücretsiz (OFL) karşılığı |
| Ara başlık (H3, H4), gövde, buton, menü | **Inter** | 400 / 500 / 600 | Kaynağın gövde yazısıyla aynı karakter |
| Çince | sistem CJK (`--font-zh`) | — | Latin karakterler yine Outfit/Inter |

- Her iki font kendi sunucumuzdan yüklenir (`/assets/fonts/`); Google Fonts çağrısı yok.
  Çin anakarasından erişim için şart. Lisans metinleri `OFL-Inter.txt`, `OFL-Outfit.txt`.
- Alt kümeler: latin + latin-ext (Türkçe İ, ı, Ş, Ğ bu kümede).
- **Azerbaycanca istisnası:** Outfit'te Ə/ə yok. `html[lang="az"]` sayfalarında H1, H2, logo
  ve dekoratif şerit Inter ile dizilir (Inter latin-ext kümesinde Ə/ə var).

Ölçek: gövde 16px/1.6 · uzun metin bölümleri 17px · giriş paragrafı (lead) 20px/1.6 ·
H3 22px · H2 `clamp(1.9rem, 3.6vw, 48px)`/1.15 · H1 `clamp(2.4rem, 5.2vw, 60px)`/1.1 ·
başlıklarda letter-spacing −0.015em.

## Boşluk ve köşeler

- Bölümler arası 96px (mobil 64px); sayfa genişliği 1200px; kart içi 32px (mobil 24px);
  ızgara aralığı 20px.
- Köşeler: buton/giriş alanı/simge çipi **10px**, küçük kart ve SSS **16px**, kart **24px**,
  geniş panel **32px**, rozet/çip **100px** (hap).
- Gölge: yalnızca `.dock` (`0 8px 30px rgba(0,0,0,.08)`). Kartlar gölgeyle değil 1px
  kenarlıkla ayrılır.

## Bileşenler

- **Birincil buton:** coral dolgu, **beyaz yazı**, 10px köşe, 48px yükseklik, 12px 24px
  dolgu, Inter 500 16px. Hero ve son çağrıda 56px / 14px 30px / 17px.
- **Ghost buton:** `#fafafb` zemin, 1px `#d7d7d8` kenarlık, siyah yazı; WhatsApp dâhil her
  ikincil eylem bu stildedir. Krem panel içinde zemin beyaz olur.
- **Başlık çubuğu:** beyaz, yapışkan, altta 1px çizgi; logo solda (Outfit 800 + coral
  nokta), bağlantılar ortada (Inter 500), dil seçici + coral CTA sağda.
- **Hero:** her sayfada ortalanmış başlık + lead + iki buton (coral + ghost). Talep kartı
  olan sayfalarda kart, başlığın altında geniş krem panel: başlık | liste | butonlar.
- **Referans logo bandı:** ana sayfalarda (TR/ZH/AZ) hero'nun hemen altında; küçük gri
  ortalı başlık, gri tonlu şeffaf PNG logolar (%62 opaklık, üzerine gelince tam) sola doğru
  sürekli kayar, kenarlar silikleşir. Logolar `public/assets/logos/`, liste
  `src/content/clients.mjs`. Hareket azaltma tercihinde kayma durur, logolar ortalı satırlara
  dizilir.
- **Bölüm başlıkları:** kart, adım, tablo ve SSS bloklarında ortalı (en çok 26 karakter
  genişliğinde); düz metin bölümlerinde sola yaslı.
- **Kart:** beyaz, 1px `#e2e2e2`, 24px köşe. Simge çipi taşıyan kartlarda kenarlık
  **kesikli** (kaynaktaki özellik kartları). Çip 40px, 10px köşe, pastel zemin.
  `card--surface` krem; `card--featured` koyu (`#0b0b0d`, beyaz yazı).
- **Adımlar:** kenarlıklı kart; numara coral kare çip (10px köşe), beyaz Outfit 800.
- **Tablo:** kenarlıklı sarmal, 16px köşe; başlık satırı açık gri zemin, siyah yazı.
- **SSS:** her soru kenarlıklı 16px köşeli kutu; +/− düğmesi açıkken coral zeminde beyaz.
- **Son çağrı:** geniş krem panel (32px köşe), ortalı başlık, coral + ghost buton.
- **Dekoratif şerit:** krem, hafif eğik, siyah kalın yazı ve persimmon ✦.
- **Altbilgi:** koyu yüzey, beyaz bağlantılar; hover'da coral alt çizgi.
- **İletişim kutusu (dock):** 1600px üzerinde sol altta; beyaz, kenarlıklı, tek gölge.
- **Mobil alt çubuk:** WhatsApp coral (beyaz yazı) + ghost ikinci eylem.

## Erişilebilirlik uyarlamaları

- Coral üzerinde beyaz yazı ~3.2:1 (AA'nın altında); sahibin tercihidir. Coral ailesinden
  yazı beyaz zeminde yalnızca `--color-coral-text` (#d8294a, 4.9:1) ile kullanılır.
- Başlık satır aralığı 1.1 (kaynaktaki 0.8 değil): Ç, İ, Ş, Ə gibi aksanlı büyük harfler
  satır kırıldığında üst üste biner.
- Odak halkası: 3px siyah, 3px dışa.

## Yapılmayacaklar

- Pill (hap) butona dönme; buton köşesi 10px'dir. Hap yalnızca rozet ve çiplerde.
- Kartlara gölge ekleme; ayrım kenarlıkla yapılır.
- Coral ve persimmon dışında kromatik dolgu; pastel tonlar yalnızca simge çiplerinde.
- Gövde metninde 500'ün üstü ağırlık; vurgu `strong` ile 600.
- Üçüncü taraf font veya betik çağrısı (Çin erişimi).
