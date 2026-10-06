import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual, createCipheriv, createDecipheriv } from 'node:crypto';
export function randomToken(bytes = 24) {
    return randomBytes(bytes).toString('base64url');
}
export function sha256(s) {
    return createHash('sha256').update(s).digest('hex');
}
export function hmacSha256Hex(secret, body) {
    return createHmac('sha256', secret).update(body).digest('hex');
}
export function safeEqual(a, b) {
    const x = Buffer.from(a);
    const y = Buffer.from(b);
    return x.length === y.length && timingSafeEqual(x, y);
}
export function hashPassword(pw) {
    const salt = randomBytes(16);
    const key = scryptSync(pw, salt, 64);
    return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`;
}
export function verifyPassword(pw, stored) {
    const [alg, saltB64, keyB64] = stored.split('$');
    if (alg !== 'scrypt')
        return false;
    const key = scryptSync(pw, Buffer.from(saltB64, 'base64'), 64);
    return timingSafeEqual(key, Buffer.from(keyB64, 'base64'));
}
function keyFrom(secret) {
    return createHash('sha256').update('enc:' + secret).digest();
}
/** Sunucu tarafı gizli bilgi şifreleme (ör. Google yenileme token'ı). */
export function encrypt(secret, plain) {
    const iv = randomBytes(12);
    const c = createCipheriv('aes-256-gcm', keyFrom(secret), iv);
    const enc = Buffer.concat([c.update(plain, 'utf8'), c.final()]);
    return [iv, c.getAuthTag(), enc].map((b) => b.toString('base64')).join('.');
}
export function decrypt(secret, blob) {
    const [iv, tag, enc] = blob.split('.').map((s) => Buffer.from(s, 'base64'));
    const d = createDecipheriv('aes-256-gcm', keyFrom(secret), iv);
    d.setAuthTag(tag);
    return Buffer.concat([d.update(enc), d.final()]).toString('utf8');
}
/** Loglarda telefon numarası açık yazılmasın. */
export function maskPhone(p) {
    if (!p)
        return '';
    return p.length <= 4 ? '****' : p.slice(0, 3) + '*'.repeat(Math.max(0, p.length - 5)) + p.slice(-2);
}
