// สร้างรายการไฟล์ทั้งหมดของเว็บหลัง build (precache.json) ให้ Service Worker ดาวน์โหลดเก็บไว้ใช้ออฟไลน์
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = 'dist/sansai-royal-award/browser';
if (!existsSync(root)) { console.error('ไม่พบโฟลเดอร์ build:', root); process.exit(1); }
const skip = new Set(['sw.js', 'precache.json', '_redirects', 'web.config']);
const files = []; let bytes = 0;
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name), s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (!skip.has(name) && !name.endsWith('.map')) { files.push('/' + relative(root, p).split(sep).join('/')); bytes += s.size; }
  }
})(root);
const version = new Date().toISOString();
writeFileSync(join(root, 'precache.json'), JSON.stringify({ version, bytes, files }));
console.log(`precache.json: ${files.length} ไฟล์, ${(bytes / 1048576).toFixed(1)} MB, version ${version}`);
