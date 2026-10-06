# Çince Tercüman · Operasyon Otomasyonu

`cince-tercuman-tam-otomasyon-yazilim-tasarimi.md` belgesine göre yazılmış yönetim uygulaması. Sitenin kendisinden (depo kökü) tamamen ayrıdır: sitenin derlemesi, testleri ve yükleme paketi bu klasörden etkilenmez.

Uygulama müşteri talebini WhatsApp'tan alır, eksik bilgiyi sorar, özeti onaylatır, tercümanlara sırayla sorar, tek atamayı veritabanı seviyesinde garanti eder, iletişimi izinle devreder, görüşme / kesinleşme / tamamlanma takibini yapar, Google Takvim'i günceller, komisyonu tahakkuk ettirir ve yalnızca doğrulanmış ödemeyle tahsilat kaydeder. Yönetici yalnızca "Bugün benden ne bekleniyor?" ekranındaki istisnalarla ilgilenir.

## Klasör yapısı

| Yol | İçerik |
| --- | --- |
| `migrations/` | PostgreSQL şeması (belgenin 13. bölümü). Tek aktif atama, çakışan rezervasyon engeli ve yalnızca eklenebilir finans kaydı veritabanı kuralıdır. |
| `src/domain/` | Talep metninden bilgi çıkarma, tarih/şehir/hizmet tanıma, yanıt sınıflandırma, para ve komisyon hesabı, mesaj şablonları, takvim kararı. |
| `src/services/` | İş akışları: talep alma, eşleştirme, devir, takip, finans, gelen kutusu (webhook), giden kutusu (gönderim), görev motoru. |
| `src/adapters/` | WhatsApp Cloud API, Google Takvim, ödeme, e-posta. Her birinin test (FAKE) karşılığı vardır. |
| `src/http/`, `src/views/` | Panel, webhook uçları ve tercüman/müşteri güvenli yanıt sayfaları (sunucu taraflı HTML, çerçevesiz). |
| `test/` | Senaryo testleri (gerçek PostgreSQL üzerinde, her test kendi veritabanında). |

## Yerelde çalıştırma

Gerekenler: Node 20+ ve PostgreSQL 14+ (`btree_gist` eklentisi açılabilir olmalı).

```bash
cd yonetim
npm install
cp .env.example .env        # değerleri doldurun; test için modlar FAKE kalabilir
npm run build
npm run migrate
ADMIN_PASSWORD='en-az-12-karakter' npm run create-admin -- yonetici@ornek.com "Ad Soyad"
npm run seed                # yalnızca FAKE modda: örnek tercümanlar
npm start                   # panel + webhook uçları (PORT, varsayılan 3000)
npm run worker              # ayrı süreç: görevler, gönderimler, takvim
```

Testler: `TEST_DATABASE_URL=postgres://kullanici@host:port/postgres npm run check` (tip kontrolü + 43 senaryo testi). Her test geçici bir veritabanı açar ve siler.

## Ayarlar

Tüm ayarlar ortam değişkenleridir; açıklamalı liste `.env.example` içindedir. Gizli değerler (`APP_SECRET`, WhatsApp erişim anahtarı, Google istemci sırrı, Resend anahtarı) yalnızca sunucudaki `.env` dosyasında veya barındırma panelinin ortam değişkenlerinde durur, depoya girmez.

Her entegrasyonun bir modu vardır:

- `FAKE`: sahte sağlayıcı. Hiçbir gerçek mesaj, takvim kaydı veya ödeme oluşmaz; panelin üstünde **TEST MODU** şeridi görünür.
- `LIVE`: gerçek sağlayıcı.
- `DISABLED`: kapalı (telefon varsayılan olarak kapalıdır).

## Yayına alma seçenekleri

Uygulama iki süreçten oluşur: **web** (panel + webhook) ve **worker** (zamanlanmış görevler, gönderim, takvim). Kalıcı bir PostgreSQL veritabanı gerekir. WhatsApp webhook'u için HTTPS adresi zorunludur.

1. **Yönetilen Node barındırma (önerilen):** Railway, Render veya Fly.io gibi bir serviste bu klasörden iki servis (web: `npm start`, worker: `npm run worker`) ve yönetilen bir PostgreSQL. Ayda birkaç dolar ile başlar, HTTPS hazırdır, sürekli çalışır.
2. **Güzel Hosting cPanel "Web Apps" (seçilen yol):** cPanel'in Web Apps özelliği uygulamayı GitHub deposundan (`appdir`: `yonetim`) kurar ve kendi alt alan adında ayrı bir kapsayıcıda çalıştırır; mevcut sitelerin klasörlerine dokunmaz. Ayarlar: derleme `npm ci --include=dev && npm run build`, başlatma `node dist/src/main.js web`, ortam değişkenlerinde `RUN_WORKER_IN_WEB=1` (işçi aynı süreçte çalışır) ve ilk giriş için `ADMIN_BOOTSTRAP_EMAIL` / `ADMIN_BOOTSTRAP_PASSWORD`. Hostingte PostgreSQL olmadığı için veritabanı dış bir yönetilen PostgreSQL'dir (örn. Neon, AB bölgesi); bağlantı adresi yalnızca `DATABASE_URL` ortam değişkenine yazılır.
3. **VPS + Docker:** `docker compose up -d --build` veritabanı, web ve worker'ı birlikte başlatır (`docker-compose.yml`). Önüne HTTPS için Caddy/Nginx konur.

## Canlıya geçiş için sizden gerekenler

- [ ] Barındırma seçimi ve panel için alt alan adı (örn. `panel.cince-tercuman.com`)
- [ ] **WhatsApp Business Platform:** Meta Business hesabı, doğrulanmış işletme, WhatsApp numarası; `WHATSAPP_PHONE_NUMBER_ID`, kalıcı erişim anahtarı (`WHATSAPP_ACCESS_TOKEN`), uygulama sırrı (`WHATSAPP_APP_SECRET`). Webhook adresi: `https://<panel>/webhooks/whatsapp`, doğrulama metni `WHATSAPP_VERIFY_TOKEN`.
- [ ] **Onaylı WhatsApp şablonları:** 24 saatlik pencere dışında gönderilen mesajlar için. Metinler `src/domain/templates.ts` içindedir; Meta'da onaylanan adlar `WHATSAPP_APPROVED_TEMPLATES` ile eşlenir. Öncelikli olanlar: `availability_request`, `availability_reminder`, `contact_check`, `agreement_check`, `service_reminder`, `start_check`, `completion_report_request`, `completion_check`, `commission_notice`, `commission_due_soon`, `missing_info`, `cancelled`.
- [ ] **Google Takvim:** Google Cloud'da OAuth istemcisi (Web), yönlendirme adresi `https://<panel>/integrations/google/callback`; `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`. Sonra panelde Ayarlar > Google Takvim'i bağla. Uygulama yalnızca kendi oluşturduğu takvime yazma izni ister.
- [ ] **Ödeme doğrulama:** Komisyon ödemelerinin geleceği sağlayıcı (iyzico, PayTR, Stripe veya banka hesap hareketi API'si). Seçim yapılınca bağdaştırıcı yazılacak; o zamana kadar uygulama tahsilatı kendisi kaydetmez; panelden yalnızca gerekçeli düzeltme veya feragat kaydı girilebilir.
- [ ] **E-posta:** Resend API anahtarı, gönderen adresi ve yönetici e-postası (acil istisna ve günlük özet).
- [ ] **Gerçek komisyon anlaşmaları:** her tercüman için oran / sabit tutar, para birimi, vade, kabul kanıtı (panelde Tercümanlar > Anlaşma).
- [ ] **Tercüman listesi:** ad, WhatsApp numarası, saat dilimi, şehirler, hizmetler, öncelik, mesajlaşma izni.
- [ ] **KVKK aydınlatma metni ve açık rıza metinleri** (müşteri iletişim paylaşımı ve WhatsApp mesajlaşması için). Mevcut metinler taslaktır; hukukçu onayı gerekir.

## Belgeye göre durum

**Hazır ve testli**

- WhatsApp talep alma: eksik bilgiyi tek tek sorma, özet onayı, paylaşım izni, 72 saat sessizlikte uykuya alma, "yetkili" ile insana devretme, "mesaj istemiyorum" (T01–T05, T33, T34, T37).
- Eşleştirme: sıralı aday sorgusu, iki hatırlatma, zaman aşımı, sıradaki aday, şartlı/belirsiz yanıt ayrımı, aday kalmazsa dürüst bilgilendirme (T06–T09).
- Tek atama ve çakışma engeli veritabanı kuralıyla (T10, T11), süresi geçmiş bağlantı (T12), izin yoksa iletişim paylaşılmaz (T13), teslim edilemeyen devir (T14), belirsiz gönderim sonucu (T38).
- Görüşme ve kesinleşme takibi, iki taraflı onay ve uyuşmazlık (T16), tamamlanma bildirimi ve müşteri onayı, yanıt yoksa varsayım yapılmaması (T21).
- Tarih değişikliği atama öncesi ve sonrası (T17), iptal (T31).
- Google Takvim: tek etkinlik, tüm gün bitişi (T18), bağlantı kopukken iş akışının sürmesi (T19), elle silinen etkinlik uyuşmazlığı (T20).
- Komisyon: yüzde / gün başı / sabit, masrafların matraha girmemesi, kuruş yuvarlama, kur çevrimi yapılmaması (T24, T25), kural eksikse borç oluşmaması (T23), vade hatırlatmaları (T22).
- Ödeme: "ödedim" beyanı tahsilat sayılmaz (T26), mükerrer bildirim (T27), yanlış para birimi (T28), tam ödeme (T29), iade (T30). Finans kayıtları yalnızca eklenebilir.
- 24 saatlik pencere ve onaylı şablon kuralı (T32), sessiz saatler, günlük mesaj sınırı.
- Güvenli bağlantılar: önizleme (GET) durum değiştirmez, tek kullanımlık, müşteri telefonunu görmek için tercümanın kendi numarasının son 4 hanesi (T36). Yeniden başlatmada görevlerin sürmesi (T35). TEST modu görünürlüğü (T41).
- Panel: Bugün ekranı (istisnalar, takipteki işler, yaklaşan işler, finans özeti, entegrasyon sağlığı), iş detayı ve zaman çizelgesi, tercümanlar ve anlaşmalar, komisyon hesapları ve gerekçeli düzeltme, ayarlar ve politika süreleri. Rol tabanlı giriş, CSRF, giriş denemesi sınırı.
- Ana kabul testi (16.1) uçtan uca geçiyor.

**Henüz yapılmadı**

- Gerçek ödeme sağlayıcısı bağdaştırıcısı (sağlayıcı seçimi bekleniyor).
- Telefon entegrasyonu yalnızca webhook iskeleti; T39 ve T40 test edilmedi.
- T15 (müşteri ile tercümanın özel yazışması) için ek bir akış yok; sistem kendi doğrulama sorularına güveniyor.
- Geçmiş kayıtların CSV ile içe aktarılması (T42) ve önizleme onayı.
- Bilgi çıkarma kural tabanlıdır (Türkçe tarih, şehir ve hizmet ifadeleri). Dil modeli bağdaştırıcısı eklenmedi; tanınmayan ifadede sistem tahmin etmez, soru sorar.
- Gerçek WhatsApp, Google Takvim ve Resend hesaplarıyla canlı doğrulama yapılmadı; testlerin tamamı sahte sağlayıcılarla çalışıyor. Canlıya geçmeden önce her entegrasyon test numarası ve test takvimiyle bir kez uçtan uca denenmeli.

## Derlenmiş çıktı (`dist/`)

Güzel Hosting'deki "Setup Node.js App" yalnızca çalışma bağımlılıklarını kurduğu ve sunucuda derleme yapılamadığı için `dist/` klasörü depoya eklenir. Kodda değişiklik yaptıktan sonra `npm run build` çalıştırıp `dist/` ile birlikte commit edin. Sunucuda güncelleme: cPanel > Git Version Control'de depoyu güncelleyin (Pull), ardından `tmp/restart.txt` dosyasını yenileyin veya Setup Node.js App'te Restart'a basın.
