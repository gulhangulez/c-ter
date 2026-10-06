// cPanel "Setup Node.js App" (Passenger) başlangıç dosyası. Passenger argüman geçemediği için web sürecini buradan başlatır.
// Ayarlar uygulama klasöründeki .env dosyasından okunur (depoya girmez).
const path = require('node:path');
const fs = require('node:fs');
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
process.argv = [process.argv[0], path.join(__dirname, 'dist/src/main.js'), 'web'];
// Passenger'ın günlüğü kapalıysa açılış hataları kaybolmasın diye uygulama klasörüne de yazılır.
const logErr = (e) => { try { fs.appendFileSync(path.join(__dirname, 'app-error.log'), `${new Date().toISOString()} ${e && e.stack || e}\n`); } catch {} };
const origErr = console.error;
console.error = (...a) => { logErr(a.map((x) => (x && x.stack) || String(x)).join(' ')); origErr(...a); };
process.on('exit', (code) => { if (code) logErr(`çıkış kodu ${code}`); });
process.on('uncaughtException', (e) => { logErr(e); process.exit(1); });
process.on('unhandledRejection', (e) => { logErr(e); process.exit(1); });
import('./dist/src/main.js').catch((e) => { logErr(e); console.error(e); process.exit(1); });
