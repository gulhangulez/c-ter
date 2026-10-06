// HTTP katmanı: webhook imzaları, kurulum doğrulaması, oturum/CSRF, güvenli bağlantılar (T33, T36, T41).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TEMPLATES } from '../src/domain/templates.js';
import { startServer } from '../src/http/server.js';
import { hashPassword } from '../src/core/crypto.js';
import { settle } from '../src/services/engine.js';
import { addAgreement, addInterpreter, CUSTOMER, lastLink, press, q, toMatching, world } from './helpers.js';
async function serve(w) {
    w.ctx.config.whatsapp.verifyToken = 'kurulum-dogrulama';
    const s = startServer(w.ctx, 0);
    await new Promise((r) => s.once('listening', r));
    const base = `http://127.0.0.1:${s.address().port}`;
    return { base, close: () => new Promise((r) => s.close(r)) };
}
const ALL = Object.fromEntries(Object.keys(TEMPLATES).map((k) => [k, `ct_${k}_v1`]));
const waBody = (from, text, id = 'wamid.T' + Math.random().toString(36).slice(2)) => JSON.stringify({
    object: 'whatsapp_business_account',
    entry: [{ changes: [{ field: 'messages', value: { contacts: [{ wa_id: from, profile: { name: 'Test' } }], messages: [{ id, from, timestamp: '1791270000', type: 'text', text: { body: text } }] } }] }],
});
test('WhatsApp webhook: kurulum doğrulaması, imzasız istek reddi, imzalı mesaj tek kez işlenir', async () => {
    const w = await world();
    const srv = await serve(w);
    try {
        let r = await fetch(`${srv.base}/webhooks/whatsapp?hub.mode=subscribe&hub.verify_token=yanlis&hub.challenge=42`);
        assert.equal(r.status, 403);
        r = await fetch(`${srv.base}/webhooks/whatsapp?hub.mode=subscribe&hub.verify_token=kurulum-dogrulama&hub.challenge=42`);
        assert.equal(await r.text(), '42');
        const body = waBody(CUSTOMER, "Mersin'de 12-14 Ekim 2026 makine kurulumu için tercüman lazım", 'wamid.SAME');
        r = await fetch(`${srv.base}/webhooks/whatsapp`, { method: 'POST', body, headers: { 'content-type': 'application/json', 'x-hub-signature-256': 'sha256=00' } });
        assert.equal(r.status, 401);
        assert.equal((await q(w, `SELECT count(*)::int n FROM jobs`))[0].n, 0);
        for (let i = 0; i < 2; i++) {
            r = await fetch(`${srv.base}/webhooks/whatsapp`, { method: 'POST', body, headers: { 'content-type': 'application/json', 'x-hub-signature-256': w.wa.sign(body) } });
            assert.equal(r.status, 200);
        }
        await settle(w.ctx);
        assert.equal((await q(w, `SELECT count(*)::int n FROM jobs`))[0].n, 1, 'aynı mesaj iki iş açmaz');
        assert.equal(w.wa.to(CUSTOMER).filter((m) => /adınız/.test(m.text)).length, 1, 'soru bir kez sorulur');
    }
    finally {
        await srv.close();
        await w.close();
    }
});
test('T36 güvenli bağlantı: GET durum değiştirmez, nonce olmadan POST reddedilir, ikinci kullanım geçersiz', async () => {
    const w = await world(undefined, ALL);
    const srv = await serve(w);
    try {
        const A = '8613800000001';
        const a = await addInterpreter(w, { whatsapp: A });
        await addAgreement(w, a);
        await toMatching(w);
        await press(w, A, 'Müsaitim');
        const token = lastLink(w, A);
        // Bağlantı önizleyicisi / tarayıcı ön yüklemesi
        for (let i = 0; i < 3; i++)
            assert.equal((await fetch(`${srv.base}/actions/${token}`)).status, 200);
        assert.equal((await q(w, `SELECT count(*)::int n FROM assignments`))[0].n, 0);
        let r = await fetch(`${srv.base}/actions/${token}`, { method: 'POST', body: new URLSearchParams({ decision: 'accept' }) });
        assert.equal(r.status, 400);
        const html = await (await fetch(`${srv.base}/actions/${token}`)).text();
        const nonce = html.match(/name="nonce" value="([^"]+)"/)[1];
        r = await fetch(`${srv.base}/actions/${token}`, { method: 'POST', body: new URLSearchParams({ decision: 'accept', nonce }) });
        assert.equal(r.status, 200);
        await settle(w.ctx);
        assert.equal((await q(w, `SELECT count(*)::int n FROM assignments WHERE active`))[0].n, 1);
        r = await fetch(`${srv.base}/actions/${token}`, { method: 'POST', body: new URLSearchParams({ decision: 'accept', nonce }) });
        assert.equal(r.status, 400);
        assert.equal((await fetch(`${srv.base}/actions/bilinmeyen-bir-baglanti-000000`)).status, 404);
        assert.equal(r.headers.get('x-frame-options') ?? r.headers.get('content-security-policy') ? true : false, true);
    }
    finally {
        await srv.close();
        await w.close();
    }
});
test('Panel: girişsiz yönlendirme, hatalı şifre, CSRF olmadan komut reddi, TEST modu görünür (T41)', async () => {
    const w = await world();
    const srv = await serve(w);
    try {
        await w.ctx.db.query(`INSERT INTO users (email, display_name, password_hash, roles) VALUES ('yonetici@example.com','Yönetici',$1,ARRAY['ADMIN'])`, [hashPassword('dogru-sifre-12345')]);
        let r = await fetch(`${srv.base}/`, { redirect: 'manual' });
        assert.equal(r.status, 303);
        assert.equal(r.headers.get('location'), '/giris');
        r = await fetch(`${srv.base}/giris`, { method: 'POST', redirect: 'manual', body: new URLSearchParams({ email: 'yonetici@example.com', password: 'yanlis' }) });
        assert.equal(r.status, 200);
        assert.match(await r.text(), /hatalı/);
        r = await fetch(`${srv.base}/giris`, { method: 'POST', redirect: 'manual', body: new URLSearchParams({ email: 'yonetici@example.com', password: 'dogru-sifre-12345' }) });
        assert.equal(r.status, 303);
        const cookie = r.headers.get('set-cookie').split(';')[0];
        assert.match(r.headers.get('set-cookie'), /HttpOnly/);
        const home = await (await fetch(`${srv.base}/`, { headers: { cookie } })).text();
        assert.match(home, /TEST MODU/);
        assert.match(home, /Bugün/);
        r = await fetch(`${srv.base}/ayarlar/otomasyon`, { method: 'POST', headers: { cookie }, body: new URLSearchParams({ mode: 'PAUSED' }) });
        assert.equal(r.status, 403);
        const api = await fetch(`${srv.base}/api/dashboard`, { headers: { cookie } });
        assert.ok([200, 404].includes(api.status));
    }
    finally {
        await srv.close();
        await w.close();
    }
});
test('Panel: kayıtlı tercümanın bilgileri düzenlenir, başkasının numarası reddedilir', async () => {
    const w = await world();
    const srv = await serve(w);
    try {
        await w.ctx.db.query(`INSERT INTO users (email, display_name, password_hash, roles) VALUES ('yonetici@example.com','Yönetici',$1,ARRAY['ADMIN'])`, [hashPassword('dogru-sifre-12345')]);
        const a = await addInterpreter(w);
        await addInterpreter(w, { name: 'Tercüman B', whatsapp: '8613800000002' });
        const login = await fetch(`${srv.base}/giris`, { method: 'POST', redirect: 'manual', body: new URLSearchParams({ email: 'yonetici@example.com', password: 'dogru-sifre-12345' }) });
        const cookie = login.headers.get('set-cookie').split(';')[0];
        const page = await (await fetch(`${srv.base}/tercumanlar/${a}`, { headers: { cookie } })).text();
        assert.match(page, /Bilgileri düzenle/);
        assert.match(page, /value="\+8613800000001"/);
        const csrf = page.match(/name="csrf" value="([^"]+)"/)[1];
        const form = (over) => {
            const b = new URLSearchParams({ csrf, name: 'Tercüman A Yeni', whatsapp: '+86 139 0000 0009', email: 'a@example.com', timezone: 'Europe/Istanbul', priority: '5', cities: 'İzmir, Bursa', travel: 'tr', specialties: 'tekstil', ...over });
            b.append('services', 'FACTORY_VISIT');
            return b;
        };
        w.clock.advanceHours(1);
        let r = await fetch(`${srv.base}/tercumanlar/${a}/duzenle`, { method: 'POST', redirect: 'manual', headers: { cookie }, body: form({}) });
        assert.equal(r.status, 303);
        assert.doesNotMatch(r.headers.get('location'), /hata=/);
        const row = (await w.ctx.db.query(`SELECT p.display_name, ip.priority, ip.services, ip.cities, ip.travel_countries, ip.timezone,
        (SELECT value FROM contact_endpoints WHERE party_id=p.id AND kind='WHATSAPP') AS wa,
        (SELECT value FROM contact_endpoints WHERE party_id=p.id AND kind='EMAIL') AS email
      FROM parties p JOIN interpreter_profiles ip ON ip.party_id=p.id WHERE p.id=$1`, [a])).rows[0];
        assert.equal(row.display_name, 'Tercüman A Yeni');
        assert.equal(row.priority, 5);
        assert.deepEqual(row.services, ['FACTORY_VISIT']);
        assert.deepEqual(row.travel_countries, ['TR']);
        assert.equal(row.timezone, 'Europe/Istanbul');
        assert.equal(row.wa, '8613900000009');
        assert.equal(row.email, 'a@example.com');
        // İzin kutusu işaretsiz gönderildi: mesaj izni geri çekilmiş olmalı.
        const consent = (await w.ctx.db.query(`SELECT granted FROM consents WHERE party_id=$1 AND purpose='OPERATIONAL_MESSAGES' ORDER BY recorded_at DESC LIMIT 1`, [a])).rows[0];
        assert.equal(consent.granted, false);
        r = await fetch(`${srv.base}/tercumanlar/${a}/duzenle`, { method: 'POST', redirect: 'manual', headers: { cookie }, body: form({ whatsapp: '8613800000002' }) });
        assert.match(decodeURIComponent(r.headers.get('location')), /başka bir kişiye kayıtlı/);
    }
    finally {
        await srv.close();
        await w.close();
    }
});
