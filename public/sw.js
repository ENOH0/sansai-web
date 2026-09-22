/* Service Worker — ให้เว็บเปิดได้แบบออฟไลน์บน iPad
   ครั้งแรกที่เปิดเว็บตอนมีเน็ต จะดาวน์โหลดทุกไฟล์ตาม /precache.json เก็บไว้ในเครื่อง
   เมื่อ deploy ใหม่ (precache.json เปลี่ยน version) จะดาวน์โหลดชุดใหม่ให้เอง */
const PREFIX = 'sansai-offline-';

async function post(msg) {
  const cs = await self.clients.matchAll({ includeUncontrolled: true });
  cs.forEach(c => c.postMessage(msg));
}

async function precache() {
  const res = await fetch('/precache.json', { cache: 'no-store' });
  if (!res.ok) return;
  const { version, files } = await res.json();
  const name = PREFIX + version;
  const cache = await caches.open(name);
  const done = await cache.keys();
  const have = new Set(done.map(r => new URL(r.url).pathname));
  const todo = files.filter(f => !have.has(f));
  let n = files.length - todo.length;
  const queue = todo.slice();
  async function worker() {
    while (queue.length) {
      const f = queue.shift();
      try { const r = await fetch(f, { cache: 'no-store' }); if (r.ok) await cache.put(f, r); } catch (e) { /* ข้ามไฟล์ที่โหลดไม่ได้ */ }
      n++; if (n % 10 === 0 || n === files.length) post({ type: 'offline-progress', done: n, total: files.length });
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  // ลบชุดเก่า
  for (const k of await caches.keys()) if (k.startsWith(PREFIX) && k !== name) await caches.delete(k);
  await cache.put('/__offline-ready', new Response(version));
  post({ type: 'offline-ready', version, total: files.length });
}

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim().then(() => precache().catch(() => {}))); });
self.addEventListener('message', e => { if (e.data === 'precache') e.waitUntil(precache().catch(() => {})); });

async function fromCache(req) {
  const keys = await caches.keys();
  for (const k of keys.filter(k => k.startsWith(PREFIX)).reverse()) {
    const c = await caches.open(k);
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
  }
  return null;
}

// วิดีโอบน iPad ขอไฟล์เป็นช่วง (Range) ต้องตอบ 206 จากไฟล์ที่เก็บไว้
async function rangeResponse(req, res) {
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  const buf = await res.arrayBuffer(), size = buf.byteLength;
  let start = m && m[1] ? +m[1] : 0, end = m && m[2] ? +m[2] : size - 1;
  if (m && !m[1] && m[2]) { start = size - +m[2]; end = size - 1; }
  end = Math.min(end, size - 1);
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    'Content-Type': res.headers.get('Content-Type') || 'video/mp4',
    'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' } });
}

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname === '/sw.js' || url.pathname === '/precache.json') return;
  // หน้าเว็บ (เปลี่ยนหน้า): ลองเน็ตก่อน ถ้าไม่มีเน็ตใช้ index.html ที่เก็บไว้
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(async () => {
      const own = await fromCache(url.pathname);            // เช่น /models/school-map-3d.html
      return own || (await fromCache('/index.html')) || Response.error();
    }));
    return;
  }
  // ไฟล์อื่น: ใช้ของที่เก็บไว้ก่อน (เร็ว + ออฟไลน์) ถ้าไม่มีค่อยโหลดจากเน็ต
  e.respondWith((async () => {
    const hit = await fromCache(url.pathname);
    if (hit) return req.headers.has('range') ? rangeResponse(req, hit) : hit;
    return fetch(req);
  })());
});
