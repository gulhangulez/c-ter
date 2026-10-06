// cPanel "Setup Node.js App" (Passenger) başlangıç dosyası. Passenger argüman geçemediği için web sürecini buradan başlatır.
// Ayarlar uygulama klasöründeki .env dosyasından okunur (depoya girmez).
const path = require('node:path');
const fs = require('node:fs');
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
process.argv = [process.argv[0], path.join(__dirname, 'dist/src/main.js'), 'web'];
import('./dist/src/main.js').catch((e) => { console.error(e); process.exit(1); });
