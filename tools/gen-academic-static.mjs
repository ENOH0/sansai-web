// สร้าง public/models/academic-wheel-static.html — ACADEMIC MODEL จริง (โค้ด/CSS ชุดเดียวกับด้านที่ 1) แบบภาพนิ่ง กดไม่ได้
import { readFile, writeFile } from 'node:fs/promises';
import { smartWheelHtml } from '../src/app/shared/smart-wheel/smart-wheel.markup.ts';
const ts = await readFile('src/app/shared/student-quality-wheel/student-quality-wheel.component.ts', 'utf8');
const items = [...ts.matchAll(/letter: '(\w)', title: '([^']*)'[\s\S]*?x: ([\d.]+), y: ([\d.]+), light: (true|false)/g)]
  .map(m => ({ letter: m[1], title: m[2], x: +m[3], y: +m[4], light: m[5] === 'true' }));
const full = smartWheelHtml(items, 'ACADEMIC', 'MODEL', 'คุณภาพผู้เรียน', 'academic');
const s = full.indexOf('<div class="sw-diagram">');
let depth = 0, i = s, e = -1;
for (const m of full.slice(s).matchAll(/<div\b|<\/div>/g)) { depth += m[0] === '</div>' ? -1 : 1; if (!depth) { e = s + m.index + 6; break; } }
const diagram = full.slice(s, e);
const css = await readFile('src/app/shared/smart-wheel/smart-wheel.component.css', 'utf8');
const root = (await readFile('src/styles.css', 'utf8')).match(/:root\s*\{[\s\S]*?\}/)[0];
await writeFile('public/models/academic-wheel-static.html', `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="/fonts/th-sarabun.css"><style>${root}
html,body{margin:0;background:transparent;font-family:'TH SarabunPSK Web','TH SarabunPSK',Tahoma,sans-serif}
${css}
/* ภาพนิ่ง: ไม่มีเอฟเฟกต์ กดไม่ได้ */
*,*::before,*::after{animation:none!important;transition:none!important}
body,.sw-diagram,.sw-diagram *{pointer-events:none!important;cursor:default!important}
.sw-diagram{width:100%!important;max-width:none!important;margin:0!important}
.sw-piece.is-on{box-shadow:none!important;background:transparent!important}
.sw-tilt{transform:none!important}
</style></head><body><div class="sw-layout sw-theme-academic" style="display:block">${diagram}</div></body></html>`);
console.log('items', items.length, 'diagram bytes', diagram.length);
