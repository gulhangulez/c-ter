// Komut satırı: web | worker [--once] | migrate | create-admin | seed
import { loadConfig } from './core/config.js';
import { migrate, tx } from './core/db.js';
import { hashPassword } from './core/crypto.js';
import { createContext } from './app.js';
import { startServer } from './http/server.js';
import { runWorker, settle } from './services/engine.js';
import { ensureSystemTasks } from './services/tasks.js';
import { activateAgreement, createInterpreter } from './services/admin.js';
import { markIntegration } from './services/dispatch.js';
/**
 * Komut satırı olmayan barındırmalar (cPanel Web Apps) için: hiç kullanıcı yoksa ADMIN_BOOTSTRAP_EMAIL ve
 * ADMIN_BOOTSTRAP_PASSWORD ile ilk yöneticiyi oluşturur. Kullanıcı varsa hiçbir şey yapmaz.
 */
async function bootstrapAdmin(ctx) {
    const email = process.env.ADMIN_BOOTSTRAP_EMAIL?.trim().toLowerCase();
    const pw = process.env.ADMIN_BOOTSTRAP_PASSWORD;
    if (!email || !pw)
        return;
    if (pw.length < 12) {
        console.error('ADMIN_BOOTSTRAP_PASSWORD en az 12 karakter olmalı; yönetici oluşturulmadı.');
        return;
    }
    const r = await ctx.db.query(`INSERT INTO users (email, display_name, password_hash, roles) SELECT $1,$2,$3,ARRAY['ADMIN'] WHERE NOT EXISTS (SELECT 1 FROM users)`, [email, email, hashPassword(pw)]);
    if (r.rowCount)
        console.log(`İlk yönetici oluşturuldu: ${email}`);
}
async function main() {
    const [cmd, ...args] = process.argv.slice(2);
    const config = loadConfig();
    const ctx = createContext(config);
    switch (cmd) {
        case 'migrate': {
            const applied = await migrate(ctx.db);
            console.log(applied.length ? `Uygulandı: ${applied.join(', ')}` : 'Şema güncel.');
            break;
        }
        case 'web': {
            await migrate(ctx.db);
            await markModes(ctx);
            await bootstrapAdmin(ctx);
            startServer(ctx, config.port);
            console.log(`Panel http://0.0.0.0:${config.port} (WhatsApp: ${config.whatsapp.mode}, takvim: ${config.calendar.mode}, ödeme: ${config.payments.mode})`);
            if (process.env.RUN_WORKER_IN_WEB === '1') {
                // Yalnızca tek süreç çalıştırabilen ortamlar için; önerilen kurulum ayrı worker sürecidir.
                void runWorker(ctx);
            }
            return; // sunucu açık kalır
        }
        case 'worker': {
            await migrate(ctx.db);
            await markModes(ctx);
            await ensureSystemTasks(ctx);
            if (args.includes('--once')) {
                // cPanel/cron modu: dakikada bir çalıştırılır; görevler veritabanında olduğu için kaybolmaz.
                const n = await settle(ctx, 20);
                console.log(`İşlenen kayıt: ${n}`);
                break;
            }
            console.log('İşçi çalışıyor (5 sn aralıkla).');
            await runWorker(ctx);
            break;
        }
        case 'create-admin': {
            const [email, ...nameParts] = args;
            const pw = process.env.ADMIN_PASSWORD;
            if (!email || !pw || pw.length < 12)
                throw new Error('Kullanım: ADMIN_PASSWORD=<en az 12 karakter> npm run create-admin -- <e-posta> <Ad Soyad>');
            await migrate(ctx.db);
            await ctx.db.query(`INSERT INTO users (email, display_name, password_hash, roles) VALUES ($1,$2,$3,ARRAY['ADMIN'])
         ON CONFLICT (email) DO UPDATE SET password_hash=EXCLUDED.password_hash, active=true`, [email.toLowerCase(), nameParts.join(' ') || email, hashPassword(pw)]);
            console.log(`Yönetici hazır: ${email}`);
            break;
        }
        case 'seed': {
            if (config.whatsapp.mode !== 'FAKE')
                throw new Error('Örnek veri yalnızca TEST modunda (WHATSAPP_MODE=FAKE) yüklenebilir');
            await migrate(ctx.db);
            await tx(ctx.db, async (c) => {
                const a = await createInterpreter(c, ctx, { name: 'Örnek Tercüman A (temsili)', whatsapp: '8613800000001', timezone: 'Asia/Shanghai', cities: ['guangzhou', 'foshan', 'shenzhen'], travelCountries: ['CN'], services: ['CHINA_INTERPRETER', 'FACTORY_VISIT', 'FAIR_VISIT', 'MACHINE_INSTALLATION'], priority: 10, messagingConsent: true }, 'seed');
                const b = await createInterpreter(c, ctx, { name: 'Örnek Tercüman B (temsili)', whatsapp: '905300000002', timezone: 'Europe/Istanbul', cities: ['istanbul', 'kocaeli', 'bursa', 'mersin'], travelCountries: ['TR'], services: ['MACHINE_INSTALLATION', 'INTERPRETING'], priority: 20, messagingConsent: true }, 'seed');
                for (const id of [a, b]) {
                    await activateAgreement(c, ctx, { interpreterId: id, payerPartyType: 'INTERPRETER', commissionType: 'PERCENT_OF_BASE', currency: 'USD', percent: '10', accrualEvent: 'SERVICE_COMPLETED', dueOffsetDays: 7, dueDayType: 'CALENDAR', acceptanceEvidence: 'TEMSİLİ TEST VERİSİ — gerçek anlaşma değildir' }, 'seed');
                }
            });
            console.log('Temsili tercümanlar ve TEST komisyon anlaşmaları yüklendi (gerçek işletme verisi değildir).');
            break;
        }
        default:
            console.log('Kullanım: main.js web | worker [--once] | migrate | create-admin <e-posta> <ad> | seed');
    }
    await ctx.db.end();
}
async function markModes(ctx) {
    const c = ctx.config;
    for (const [name, mode] of [['whatsapp', c.whatsapp.mode], ['google_calendar', c.calendar.mode], ['payments', c.payments.mode], ['telephony', c.telephony.mode], ['email', c.email.mode]]) {
        await ctx.db.query(`INSERT INTO integration_connections (name, mode) VALUES ($1,$2) ON CONFLICT (name) DO UPDATE SET mode=EXCLUDED.mode`, [name, mode]);
    }
    void markIntegration;
}
main().catch((e) => {
    // AggregateError (ör. bağlantı reddi) boş mesajlı olabilir; kod ve iç hatalar da yazılır.
    console.error(e instanceof Error ? `${e.name}: ${e.message} ${e.code ?? ''} ${(e.errors ?? []).map((x) => x.message).join('; ')}` : e);
    process.exit(1);
});
