// cPanel cron için: bekleyen görevleri bir kez işler ve çıkar. Örnek: * * * * * <node> /home/<kullanıcı>/<klasör>/yonetim/worker-once.cjs
const path = require('node:path');
const fs = require('node:fs');
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
process.chdir(__dirname);
process.argv = [process.argv[0], path.join(__dirname, 'dist/src/main.js'), 'worker', '--once'];
import('./dist/src/main.js').catch((e) => { console.error(e); process.exit(1); });
