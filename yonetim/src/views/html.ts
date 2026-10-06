// Küçük, bağımlılıksız HTML yardımcıları. Tüm değişkenler varsayılan olarak kaçışlanır.
export class Raw {
  constructor(public readonly value: string) {}
  toString() { return this.value; }
}

export function raw(s: string): Raw {
  return new Raw(s);
}

export function esc(v: unknown): string {
  return String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function render(v: unknown): string {
  if (v instanceof Raw) return v.value;
  if (Array.isArray(v)) return v.map(render).join('');
  if (v === null || v === undefined || v === false) return '';
  return esc(v);
}

export function h(strings: TemplateStringsArray, ...vals: unknown[]): Raw {
  let out = '';
  strings.forEach((s, i) => {
    out += s;
    if (i < vals.length) out += render(vals[i]);
  });
  return new Raw(out);
}

const CSS = `
:root{--coral:#ff5065;--ink:#16161a;--muted:#6b6b76;--line:#e6e4df;--cream:#faf8f4;--grey:#f3f3f1;--ok:#1f8a4c;--warn:#b26b00;--bad:#c62839;--info:#2c5cc5}
*{box-sizing:border-box}html,body{margin:0}body{font:15px/1.5 Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--cream)}
a{color:inherit}h1,h2,h3{font-family:Outfit,Inter,system-ui,sans-serif;line-height:1.25;margin:0 0 .6em}h1{font-size:1.6rem}h2{font-size:1.15rem;margin-top:1.6em}
header.top{display:flex;gap:16px;align-items:center;flex-wrap:wrap;padding:12px 20px;background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:5}
header.top .brand{font-weight:700;font-family:Outfit,Inter,sans-serif;text-decoration:none}header.top nav{display:flex;gap:4px;flex-wrap:wrap}
header.top nav a{padding:6px 10px;border-radius:10px;text-decoration:none;color:var(--muted)}header.top nav a.on,header.top nav a:hover{background:var(--grey);color:var(--ink)}
header.top .who{margin-left:auto;color:var(--muted);font-size:.9rem}
main{max-width:1200px;margin:0 auto;padding:20px 16px 60px}
.card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;margin:0 0 16px}
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
table{width:100%;border-collapse:collapse;font-size:.92rem}th,td{text-align:left;padding:8px 6px;border-bottom:1px solid var(--line);vertical-align:top}th{color:var(--muted);font-weight:600;font-size:.8rem;text-transform:uppercase;letter-spacing:.02em}
.tbl{overflow-x:auto}
.btn{display:inline-block;border:0;border-radius:10px;padding:9px 14px;background:var(--coral);color:#fff;font:inherit;font-weight:600;cursor:pointer;text-decoration:none}
.btn.sec{background:var(--grey);color:var(--ink);border:1px solid var(--line)}.btn.small{padding:5px 10px;font-size:.85rem}.btn.danger{background:var(--bad)}
input,select,textarea{font:inherit;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:#fff;width:100%}
label{display:block;margin:0 0 10px;font-size:.9rem;color:var(--muted)}label>input,label>select,label>textarea{margin-top:4px;color:var(--ink)}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end}.row>*{flex:1 1 180px}
.pill{display:inline-block;padding:2px 8px;border-radius:999px;font-size:.78rem;font-weight:600;background:var(--grey);white-space:nowrap}
.pill.ok{background:#e3f4ea;color:var(--ok)}.pill.warn{background:#fff3df;color:var(--warn)}.pill.bad{background:#fde7ea;color:var(--bad)}.pill.info{background:#e6edfb;color:var(--info)}
.muted{color:var(--muted)}.small{font-size:.85rem}.right{text-align:right}.mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.85rem}
.flash{padding:10px 14px;border-radius:10px;margin:0 0 16px;background:#e3f4ea;color:var(--ok)}.flash.err{background:#fde7ea;color:var(--bad)}
.kpi{font-size:1.4rem;font-weight:700;font-family:Outfit,Inter,sans-serif}
.test-banner{background:#fff3df;color:var(--warn);text-align:center;padding:6px;font-size:.85rem;font-weight:600}
details>summary{cursor:pointer;color:var(--muted)}
.timeline li{margin:0 0 6px}
.public{max-width:560px}
@media(max-width:640px){header.top .who{margin-left:0;width:100%}th,td{padding:6px 4px}.cards thead{display:none}.cards tr{display:block;border-bottom:1px solid var(--line);padding:8px 0}.cards td{display:flex;gap:10px;border:0;padding:3px 0}.cards td::before{content:attr(data-l);flex:0 0 105px;color:var(--muted);font-size:.8rem}}
`;

export function page(opts: { title: string; body: Raw; user?: { display_name: string } | null; nav?: string; testMode?: boolean; flash?: string | null; error?: string | null; csrf?: string }): string {
  const nav = [
    ['/', 'Bugün'], ['/isler', 'İşler'], ['/tercumanlar', 'Tercümanlar'], ['/komisyonlar', 'Komisyon'], ['/istisnalar', 'Müdahale'], ['/ayarlar', 'Ayarlar'],
  ];
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>${esc(opts.title)} · Çince Tercüman Operasyon</title><style>${CSS}</style></head><body>
${opts.testMode ? '<div class="test-banner">TEST MODU — WhatsApp / takvim / ödeme sağlayıcıları sahte; gerçek mesaj gönderilmez</div>' : ''}
${opts.user ? `<header class="top"><a class="brand" href="/">Çince Tercüman · Operasyon</a><nav>${nav.map(([href, label]) => `<a href="${href}" class="${opts.nav === href ? 'on' : ''}">${label}</a>`).join('')}</nav>
<span class="who">${esc(opts.user.display_name)} · <form method="post" action="/cikis" style="display:inline"><input type="hidden" name="csrf" value="${esc(opts.csrf ?? '')}"><button class="btn sec small">Çıkış</button></form></span></header>` : ''}
<main class="${opts.user ? '' : 'public'}">${opts.flash ? `<div class="flash">${esc(opts.flash)}</div>` : ''}${opts.error ? `<div class="flash err">${esc(opts.error)}</div>` : ''}${opts.body.value}</main></body></html>`;
}

export function pill(text: string, tone: 'ok' | 'warn' | 'bad' | 'info' | '' = ''): Raw {
  return h`<span class="pill ${tone}">${text}</span>`;
}
