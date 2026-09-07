/**
 * สร้างไฟล์ preview.html — เว็บหน้าเดียวที่ไม่ต้องติดตั้งอะไรเลย
 * ใช้ "ข้อมูลชุดเดียวกัน" กับแอป Angular (src/app/data/*.ts)
 * เพื่อให้เปิดดูบน iPad ได้ทันทีก่อนจะ npm install
 *
 *   node tools/build-preview.mjs
 */
import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
// โมเดล BANCHUEN ใช้ไฟล์เดียวกับเว็บแอปจริง (Node 22 นำเข้าไฟล์ .ts ได้โดยตรง)
import { BANCHUEN_HTML, BANCHUEN_STEPS, initBanchuen } from '../src/app/shared/banchuen-model/banchuen.markup.ts';
import { SMART_WHEEL_HTML, WHEEL_ITEMS, initSmartWheel } from '../src/app/shared/smart-wheel/smart-wheel.markup.ts';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// ใช้โฟลเดอร์ชั่วคราวของระบบ เพื่อไม่ให้เหลือไฟล์ขยะในโปรเจกต์
const tmp = path.join(os.tmpdir(), 'sansai-preview-' + process.pid);

// ---------- โหลดไฟล์ data (ซึ่งเขียนเป็น ESM ล้วน ไม่มี type annotation) ----------
async function loadData() {
  const names = ['school', 'dimension1', 'dimension2', 'dimension3', 'dimension4', 'dimension5', 'awards', 'gallery'];
  const out = {};
  for (const n of names) {
    // Node 22 นำเข้าไฟล์ .ts ได้โดยตรง จึงใช้ไฟล์ data ตัวเดียวกับเว็บแอปได้เลย
    const file = path.join(root, 'src/app/data', `${n}.data.ts`);
    Object.assign(out, await import(pathToFileURL(file).href));
  }
  return out;
}


/** ไล่เก็บไฟล์ .css ของทุก component ใต้ src/app */
async function collectCss(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await collectCss(full)));
    else if (e.name.endsWith('.css')) out.push(full);
  }
  return out.sort();
}

// ---------- ตัวช่วยสร้าง HTML ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const n2 = v => Number(v).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const n0 = v => Number(v).toLocaleString('th-TH');
const signed = v => (v >= 0 ? '+' : '') + n2(v);
const PALETTE = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd', '#b4433a'];
// สุขภาพจิต — เรียงแท่ง มีปัญหา → เสี่ยง → ปกติ
const MIND_ORDER = ['มีปัญหา', 'เสี่ยง', 'ปกติ'];
const MIND_COLOR = { 'มีปัญหา': '#b4433a', 'เสี่ยง': '#d4a537', 'ปกติ': '#0f7a4d' };

let revealSeq = 0;
const rev = (kind = '', delay = 0) => {
  revealSeq++;
  const cls = kind === 'left' ? 'reveal-l' : kind === 'right' ? 'reveal-r' : kind === 'zoom' ? 'reveal-z' : 'reveal';
  return ` class-reveal="${cls}" style="transition-delay:${delay}ms"`;
};

/* -------- กราฟเส้น (SVG เหมือนกับ LineChartComponent) -------- */
function lineChart({ title, subtitle, note, labels, series, showValues = true, fmt = n2, min, max, height = 400 }) {
  const W = 900, H = height, PL = 56, PR = 24, PT = 34, PB = 46;
  const all = series.flatMap(s => s.values).filter(v => v != null && !isNaN(v));
  let lo = min ?? Math.min(...all), hi = max ?? Math.max(...all);
  if (min === undefined) lo = Math.max(0, Math.floor((lo - (hi - lo) * 0.18) / 5) * 5);
  if (max === undefined) hi = Math.ceil((hi + (hi - lo) * 0.12) / 5) * 5;
  if (hi === lo) hi = lo + 10;
  const x = i => PL + ((W - PL - PR) * i) / Math.max(1, labels.length - 1);
  const y = v => H - PB - ((v - lo) / (hi - lo)) * (H - PT - PB);
  const ticks = Array.from({ length: 6 }, (_, i) => Math.round((lo + ((hi - lo) / 5) * i) * 10) / 10);

  const grid = ticks.map(t =>
    `<line class="grid-line" x1="${PL}" x2="${W - PR}" y1="${y(t)}" y2="${y(t)}"/>
     <text class="axis-text" x="${PL - 10}" y="${y(t) + 4}" text-anchor="end">${t}</text>`).join('');

  const xlabels = labels.map((l, i) =>
    `<text class="axis-text b" x="${x(i)}" y="${H - PB + 26}" text-anchor="middle">${esc(l)}</text>`).join('');

  const lines = series.map((s, si) => {
    const color = s.color || PALETTE[si % PALETTE.length];
    const d = s.values.map((v, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
    const dots = s.values.map((v, i) =>
      `<circle class="series-dot" cx="${x(i)}" cy="${y(v)}" r="6.5" fill="#fff" stroke="${color}" stroke-width="3.4" style="animation-delay:${600 + si * 180 + i * 90}ms"/>` +
      `<text class="axis-text val" x="${x(i)}" y="${y(v) - 16}" text-anchor="middle" fill="${color}"${showValues ? '' : ' hidden'}>${fmt(v)}</text>`
    ).join('');
    return `<g class="series" data-si="${si}"><path class="series-path${s.dashed ? ' is-dashed' : ''}" d="${d}" stroke="${color}" style="animation-delay:${si * 180}ms"/>${dots}</g>`;
  }).join('');

  // เส้นขอบขาววาดรวมไว้ชั้นล่างสุดก่อนเส้นสีทั้งหมด จะได้ไม่ไปบังเส้นอื่น
  const halos = series.map((s, si) => {
    if (s.dashed) return '';
    const d = s.values.map((v, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
    return `<path class="series-halo" data-si="${si}" d="${d}" style="animation-delay:${si * 180}ms"/>`;
  }).join('');

  const legend = series.map((s, si) =>
    `<button type="button" class="legend-item" data-si="${si}"><span class="legend-swatch" style="background:${s.color || PALETTE[si % PALETTE.length]}"></span>${esc(s.name)}</button>`).join('');

  return `<div class="chart-card"${rev()}>
    <div class="chart-head"><div>
      <div class="chart-title">${esc(title)}</div>
      ${subtitle ? `<div class="chart-sub">${esc(subtitle)}</div>` : ''}
    </div></div>
    <svg class="chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(title)}">
      ${grid}
      <line class="axis-line" x1="${PL}" x2="${W - PR}" y1="${H - PB}" y2="${H - PB}"/>
      ${xlabels}<g class="halos">${halos}</g>${lines}
    </svg>
    <div class="chart-legend" data-focus="${showValues ? 'values' : 'novalues'}">${legend}</div>
    ${series.length > 2 ? `<p class="chart-hint">แตะชื่อเส้นด้านบนเพื่อดูเฉพาะเส้นนั้นพร้อมตัวเลขกำกับ แตะซ้ำเพื่อกลับไปดูทุกเส้น</p>` : ''}
    ${note ? `<p class="chart-note">${esc(note)}</p>` : ''}
  </div>`;
}

/* -------- แกลเลอรีภาพกิจกรรม -------- */
function gallery(D, key, no, lead) {
  const items = D.GALLERY[key] || [];
  return `<section class="section"><div class="wrap">
    ${secHead ? '' : ''}
    <div class="sec-head"${rev()}><h3 class="sec-title" style="font-size:22px">ภาพกิจกรรมประกอบด้านที่ ${no}</h3><div class="sec-rule"></div></div>
    <p class="sec-lead" style="margin:-8px 0 22px">${esc(lead)}</p>
    <div class="gal-grid">${items.map((p, i) => `
      <figure class="gal-item"${rev('zoom', (i % 4) * 70)}>
        <button type="button" class="gal-btn"><img class="gal-img" src="public/${p.src}" alt="${esc(p.caption)}" loading="lazy" decoding="async"></button>
        <figcaption class="gal-cap">${esc(p.caption)}</figcaption>
      </figure>`).join('')}</div>
  </div></section>`;
}

/* -------- กราฟแท่ง -------- */
function barChart({ title, subtitle, note, labels, series, fmt = n0, max }) {
  const W = 900, H = 380, PL = 56, PR = 24, PT = 34, PB = 46;
  const hi = max ?? Math.ceil((Math.max(...series.flatMap(s => s.values)) * 1.16) / 5) * 5;
  const y = v => H - PB - (v / hi) * (H - PT - PB);
  const gw = (W - PL - PR) / Math.max(1, labels.length);
  const bw = (gw * 0.68) / Math.max(1, series.length);
  const ticks = Array.from({ length: 6 }, (_, i) => Math.round((hi / 5) * i * 10) / 10);

  const grid = ticks.map(t =>
    `<line class="grid-line" x1="${PL}" x2="${W - PR}" y1="${y(t)}" y2="${y(t)}"/>
     <text class="axis-text" x="${PL - 10}" y="${y(t) + 4}" text-anchor="end">${t}</text>`).join('');

  const bars = labels.map((l, gi) => {
    const inner = bw * series.length;
    const cells = series.map((s, si) => {
      const color = s.color || PALETTE[si % PALETTE.length];
      const bx = PL + gw * gi + (gw - inner) / 2 + bw * si;
      const v = s.values[gi];
      return `<rect class="bar-rect" x="${bx}" y="${y(v)}" width="${bw}" height="${Math.max(0, H - PB - y(v))}" fill="${color}" rx="4" style="animation-delay:${gi * 110 + si * 70}ms"/>
              <text class="axis-text" x="${bx + bw / 2}" y="${y(v) - 8}" text-anchor="middle" fill="${color}" style="font-weight:700">${fmt(v)}</text>`;
    }).join('');
    return cells + `<text class="axis-text b" x="${PL + gw * gi + gw / 2}" y="${H - PB + 26}" text-anchor="middle">${esc(l)}</text>`;
  }).join('');

  const legend = series.map((s, si) =>
    `<span class="legend-item"><span class="legend-swatch dot" style="background:${s.color || PALETTE[si % PALETTE.length]}"></span>${esc(s.name)}</span>`).join('');

  return `<div class="chart-card"${rev()}>
    <div class="chart-head"><div>
      <div class="chart-title">${esc(title)}</div>
      ${subtitle ? `<div class="chart-sub">${esc(subtitle)}</div>` : ''}
    </div></div>
    <svg class="chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(title)}">
      ${grid}<line class="axis-line" x1="${PL}" x2="${W - PR}" y1="${H - PB}" y2="${H - PB}"/>${bars}
    </svg>
    <div class="chart-legend">${legend}</div>
    ${note ? `<p class="chart-note">${esc(note)}</p>` : ''}
  </div>`;
}

/* -------- แถบเปรียบเทียบ -------- */
function meterList({ title, subtitle, note, rows, max = 100, suffix = '%' }) {
  const body = rows.map((r, i) => `
    <div class="meter">
      <div class="meter-head"><span class="meter-name">${esc(r.name)}</span>
        <span class="meter-val">${r.display ?? n2(r.value)}${suffix}</span></div>
      <div class="meter-track"><div class="meter-fill" style="width:${Math.min(100, (r.value / max) * 100)}%;animation-delay:${i * 90}ms"></div></div>
    </div>`).join('');
  return `<div class="chart-card"${rev()}>
    <div class="chart-head"><div>
      <div class="chart-title">${esc(title)}</div>
      ${subtitle ? `<div class="chart-sub">${esc(subtitle)}</div>` : ''}
    </div></div>
    <div class="meter-body">${body}</div>
    ${note ? `<p class="chart-note">${esc(note)}</p>` : ''}
  </div>`;
}

/* -------- ตาราง -------- */
function table({ caption, headers, rows, numFrom = 1, note }) {
  const th = headers.map((h, i) => `<th${i >= numFrom ? ' class="num"' : ''}>${esc(h)}</th>`).join('');
  const tb = rows.map(r =>
    `<tr${r.total ? ' class="total"' : ''}>` +
    r.cells.map((c, i) => `<td${i >= numFrom ? ' class="num"' : ''}>${esc(c)}</td>`).join('') +
    `</tr>`).join('');
  return `<div class="table-scroll"${rev()}><table class="tbl">
      ${caption ? `<caption>${esc(caption)}</caption>` : ''}
      <thead><tr>${th}</tr></thead><tbody>${tb}</tbody>
    </table></div>${note ? `<p class="chart-note">${esc(note)}</p>` : ''}`;
}


/* -------- กราฟ O-NET แบบเลือกดูรายวิชาได้ --------
   สร้างกราฟทุกตัวเลือกไว้ล่วงหน้าแล้วสลับการแสดงผลด้วย JS
   ทำให้ไฟล์ preview.html ใช้งานได้โดยไม่ต้องพึ่งเซิร์ฟเวอร์ */
let onetSeq = 0;
function onetChart({ title, subtitle, note, years, subjects }) {
  const id = 'onet' + (++onetSeq);

  const tabs = ['ทุกวิชา', ...subjects.map(s => s.name)]
    .map((label, k) => {
      const idx = k - 1; // -1 = ทุกวิชา
      return `<button type="button" class="onet-tab${idx === -1 ? ' is-on' : ''}" role="tab"
                data-onet="${id}" data-idx="${idx}"
                aria-selected="${idx === -1}">${esc(label)}</button>`;
    }).join('');

  const panel = (idx) => {
    const c = idx >= 0 ? subjects[idx] : null;
    const series = c
      ? [
          { name: 'ค่าเฉลี่ยของโรงเรียน', values: c.school, color: '#1e4d9e' },
          { name: 'ค่าเฉลี่ยระดับประเทศ', values: c.nation, color: '#b4433a', dashed: true }
        ]
      : subjects.flatMap((s, i) => ([
          { name: `${s.name} (โรงเรียน)`, values: s.school, color: PALETTE[i % PALETTE.length] },
          { name: `${s.name} (ประเทศ)`, values: s.nation, color: PALETTE[i % PALETTE.length], dashed: true }
        ]));

    const sub = c ? `รายวิชา${c.name} · เส้นทึบ = โรงเรียน, เส้นประ = ระดับประเทศ` : subtitle;
    const chart = lineChart({ title, subtitle: sub, note, labels: years, series, showValues: !!c });

    let extra = '';
    if (c) {
      const cards = years.map((y, i) => {
        const diff = c.school[i] - c.nation[i];
        return `<div class="onet-diff">
          <div class="onet-diff-year">ปีการศึกษา ${esc(y)}</div>
          <div class="onet-diff-main">
            <span class="onet-diff-value">${n2(c.school[i])}</span>
            <span class="onet-diff-vs">เทียบประเทศ ${n2(c.nation[i])}</span>
          </div>
          <div class="onet-diff-gap ${diff >= 0 ? 'up' : 'down'}">${signed(diff)}</div>
        </div>`;
      }).join('');
      const above = years.filter((_, i) => c.school[i] - c.nation[i] > 0).length;
      extra = `<div class="onet-diffs">${cards}</div>
        <p class="onet-conclusion">รายวิชา<strong>${esc(c.name)}</strong> มีค่าเฉลี่ยสูงกว่าระดับประเทศ
        <strong>${above}</strong> ปี จากทั้งหมด ${years.length} ปีการศึกษา</p>`;
    }

    return `<div class="onet-panel" data-onet-panel="${id}" data-idx="${idx}"${idx === -1 ? '' : ' hidden'}>${chart}${extra}</div>`;
  };

  const panels = [panel(-1), ...subjects.map((_, i) => panel(i))].join('');

  return `<div class="onet">
    <div class="onet-tabs" role="tablist">${tabs}</div>
    ${panels}
  </div>`;
}

/* -------- ชิ้นส่วน UI -------- */
const secHead = (kicker, num, title, lead) => `<div class="sec-head"${rev()}>
  ${kicker ? `<div class="sec-kicker">${esc(kicker)}</div>` : ''}
  <h2 class="sec-title">${num ? `<span class="num">${esc(num)}</span>` : ''}${esc(title)}</h2>
  <div class="sec-rule"></div>
  ${lead ? `<p class="sec-lead">${esc(lead)}</p>` : ''}
</div>`;

const kpiGrid = items => `<div class="grid grid-4">` + items.map((k, i) =>
  `<div class="stat${i % 4 === 3 ? ' stat-gold' : ''}"${rev('', i * 90)}>
     <div class="stat-value"><span class="cu" data-target="${k.value}" data-dec="${k.decimals ?? 0}">0</span>${k.unit ? `<span class="stat-unit">${esc(k.unit)}</span>` : ''}</div>
     <div class="stat-label">${esc(k.label)}</div>
     ${k.note ? `<div class="stat-note">${esc(k.note)}</div>` : ''}
   </div>`).join('') + `</div>`;

const cycleFlow = steps => `<div class="cycle">` + steps.map((s, i) =>
  `<div class="cycle-step"${rev('zoom', i * 110)}>
     <div class="cycle-no">${i + 1}</div>
     <div class="chip cycle-chip">${esc(s.step)}</div>
     <h4>${esc(s.title)}</h4><p>${esc(s.text)}</p>
     ${s.bullets && s.bullets.length ? `<ul>${s.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
   </div>`).join('') + `</div>`;

const callout = (label, text, gold) =>
  `<div class="callout${gold ? ' callout-gold' : ''}"${rev()}>${label ? `<strong>${esc(label)} </strong>` : ''}${esc(text)}</div>`;

const pageHero = (no, weight, name, subtitle) => `<header class="page-hero"><div class="wrap page-hero-inner">
  <div><span class="page-badge">ด้านที่ ${no}</span><span class="page-weight">น้ำหนักประจำด้าน ${weight}</span></div>
  <h1>${esc(name)}</h1><p>${esc(subtitle)}</p></div></header>`;

const pager = (pp, pn, np, nn) => `<nav class="pager"${rev()}>
  ${pp ? `<a class="pager-link prev" href="#${pp}"><span class="pager-dir">‹ ก่อนหน้า</span><span class="pager-name">${esc(pn)}</span></a>` : '<span style="flex:1 1 240px"></span>'}
  ${np ? `<a class="pager-link next" href="#${np}"><span class="pager-dir">ถัดไป ›</span><span class="pager-name">${esc(nn)}</span></a>` : '<span style="flex:1 1 240px"></span>'}
</nav>`;

const indicatorCards = obj => `<div class="grid grid-2">` + Object.entries(obj).map(([k, v], i) =>
  `<div class="card"${rev('', i * 80)}><h3 class="card-title" style="font-size:17.5px">${esc(k)}</h3>
   <ol class="bullets" style="font-size:15.5px">${v.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>`).join('') + `</div>`;


function pageAwards(D) {
  const S = D.STUDENT_AWARDS, T = D.TEACHER_AWARDS;
  const LEV = D.AWARD_LEVELS, CAT = D.AWARD_CATEGORIES;
  // ในไฟล์ preview รูปอยู่ที่ public/awards/... (ตอน build จริงจะอยู่ที่ awards/...)
  const img = p => 'public/' + p;

  const kpis = [
    { value: S.length, unit: 'รางวัล', label: 'รางวัลนักเรียนที่มีหลักฐานภาพ', note: 'จากภาคผนวกรางวัลเชิงประจักษ์ เล่มด้านที่ 1' },
    { value: S.filter(a => a.level === 'ระดับนานาชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับนานาชาติ', note: 'เทเบิลเทนนิส · ชีววิทยาการแพทย์ · เทคโนโลยี' },
    { value: S.filter(a => a.level === 'ระดับชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับชาติ', note: 'ครอบคลุมทุกกลุ่มสาระการเรียนรู้' },
    { value: T.length, unit: 'รายการ', label: 'รางวัลและวิทยฐานะของครู', note: 'จากเล่มด้านที่ 3 การสร้างขวัญกำลังใจ' }
  ];

  const chip = (kind, v, n) =>
    `<button type="button" class="fchip" data-f="${kind}" data-v="${esc(v)}">${esc(v)} <span class="fcount">${n}</span></button>`;

  const card = a => `<article class="award-card"${rev()}
      data-level="${esc(a.level)}" data-cat="${esc(a.category)}">
    <div class="award-photos${a.photos.length > 1 ? ' two' : ''}">
      ${a.photos.map(p => `<button type="button" class="award-photo" data-full="${img(p)}">
        <img src="${img(p)}" alt="${esc(a.name)}" loading="lazy" decoding="async"/></button>`).join('')}
    </div>
    <div class="award-body">
      <div class="chip-row">
        <span class="chip${a.level === 'ระดับนานาชาติ' ? ' chip-gold' : ''}">${esc(a.level)}</span>
        <span class="chip">${esc(a.category)}</span>
      </div>
      <h3 class="award-name">${esc(a.name)}</h3>
      <p class="award-title">${esc(a.award)}</p>
      ${a.detail ? `<p class="award-detail">${esc(a.detail)}</p>` : ''}
    </div></article>`;

  const tcard = t => `<article class="award-card"${rev()}>
    <div class="award-photos">
      ${t.photos.map(p => `<button type="button" class="award-photo" data-full="${img(p)}">
        <img src="${img(p)}" alt="${esc(t.name)}" loading="lazy" decoding="async"/></button>`).join('')}
    </div>
    <div class="award-body">
      <div class="chip-row"><span class="chip chip-gold">${esc(t.role)}</span></div>
      <h3 class="award-name">${esc(t.name)}</h3>
      <p class="award-title">${esc(t.award)}</p>
      ${t.detail ? `<p class="award-detail">${esc(t.detail)}</p>` : ''}
    </div></article>`;

  return `
<header class="page-hero awards-hero"><div class="wrap page-hero-inner">
  <span class="page-badge">รางวัลเชิงประจักษ์</span>
  <h1>รางวัลของนักเรียนและครู</h1>
  <p>ผลงานเชิงประจักษ์ที่สะท้อนคุณภาพผู้เรียนและความเชี่ยวชาญของครู
     รวบรวมจากภาคผนวกเล่มด้านที่ 1 และการสร้างขวัญกำลังใจในเล่มด้านที่ 3</p>
</div></header>

<section class="section"><div class="wrap">${kpiGrid(kpis)}</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('เล่มด้านที่ 1 คุณภาพนักเรียน', '', 'รางวัลของนักเรียน',
    'แสดงเฉพาะรายการที่มีภาพหลักฐานปรากฏในเล่ม แตะที่รูปเพื่อดูขนาดเต็ม และใช้ปุ่มด้านล่างเพื่อกรองตามระดับรางวัลหรือหมวดหมู่')}

  <div class="filters"${rev()}>
    <div class="filter-row"><span class="filter-label">ระดับรางวัล</span>
      ${LEV.map(l => chip('level', l, S.filter(a => a.level === l).length)).join('')}</div>
    <div class="filter-row"><span class="filter-label">หมวดหมู่</span>
      ${CAT.map(c => chip('cat', c, S.filter(a => a.category === c).length)).join('')}</div>
    <div class="filter-foot">
      <span class="filter-result" id="awCount">แสดง ${S.length} จาก ${S.length} รางวัล</span>
      <button type="button" class="fclear" id="awClear" hidden>ล้างตัวกรอง</button>
    </div>
  </div>

  <div class="award-grid" id="awGrid">${S.map(card).join('')}</div>
  <p class="award-empty" id="awEmpty" hidden>ไม่พบรางวัลตามเงื่อนไขที่เลือก — ลองล้างตัวกรองแล้วเลือกใหม่</p>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('เล่มด้านที่ 3 การบริหารและการจัดการศึกษา', '', 'รางวัลและวิทยฐานะของครู',
    'ผลจากการที่ผู้บริหารสร้างขวัญและกำลังใจ ส่งเสริมให้ครูและบุคลากรทางการศึกษาพัฒนาตนเองอย่างต่อเนื่อง จนได้รับการยอมรับและมีความก้าวหน้าในวิชาชีพ')}
  <div class="award-grid teacher-grid">${T.map(tcard).join('')}</div>
</div></section>

<section class="section-tight section-alt"><div class="wrap">
  ${pager('dimension-5', 'ด้านที่ 5 ความดีเด่นของสถานศึกษา', 'home', 'กลับสู่หน้าแรก')}
</div></section>`;
}

// ============================================================
//  หน้าต่าง ๆ
// ============================================================
function pageHome(D) {
  const S = D.SCHOOL, DIMS = D.DIMENSIONS, st = S.students;
  return `
<section class="hero"><div class="wrap hero-inner">
  <span class="hero-eyebrow"${rev()}>${esc(S.award)} · ${esc(S.level)}</span>
  <h1 class="hero-title"${rev('', 90)}>${esc(S.name)}</h1>
  <div class="hero-rule"${rev('', 150)}></div>
  <p class="hero-lead"${rev('', 200)}>เอกสารประกอบการประเมินสถานศึกษา ${esc(S.academicYear)}<br/>${esc(S.area)} ${esc(S.affiliation)}</p>
  <div class="hero-actions"${rev('', 280)}>
    <a class="btn btn-primary" href="#dimension-1">เริ่มอ่านด้านที่ 1 ›</a>
    <a class="btn btn-ghost" href="#overview">ภาพรวมทั้ง 5 ด้าน</a>
  </div>
</div></section>

<section class="section section-alt"><div class="wrap">
  <div class="sec-head vision-head"${rev()}>
    <div class="sec-kicker">วิสัยทัศน์</div>
    <p class="quote">“${esc(S.vision)}”</p>
    <div class="sec-rule vision-rule"></div>
  </div>
  <div class="grid grid-4" style="margin-top:34px">
    ${S.futureSkills.map((s, i) => `<div class="card card-hover card-accent"${rev('zoom', i * 100)}>
      <div class="chip chip-gold" style="margin-bottom:10px">ทักษะแห่งอนาคต ${i + 1}</div>
      <div class="skill-text">${esc(s)}</div></div>`).join('')}
  </div>
  <div class="grid grid-3" style="margin-top:22px">
    <div class="card"${rev('left')}><h3 class="card-title">ปรัชญา</h3><p class="card-body" style="margin:0">${esc(S.philosophy)}</p></div>
    <div class="card"${rev('', 80)}><h3 class="card-title">ค่านิยม</h3><p class="card-body" style="margin:0">${esc(S.coreValue)}</p></div>
    <div class="card"${rev('right', 160)}><h3 class="card-title">วัฒนธรรมองค์กร</h3><p class="card-body" style="margin:0">${esc(S.way)}</p></div>
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('ข้อมูลพื้นฐาน', '', 'โรงเรียนสันทรายวิทยาคมในวันนี้',
    'โรงเรียนสหศึกษาขนาดใหญ่ ก่อตั้งเมื่อวันที่ 14 มิถุนายน พ.ศ. 2516 บนพื้นที่ 35 ไร่ 2 งาน 5 ตารางวา เปิดสอนระดับชั้นมัธยมศึกษาปีที่ 1 ถึงมัธยมศึกษาปีที่ 6 ครอบคลุมเขตพื้นที่บริการ 12 ตำบลของอำเภอสันทราย จังหวัดเชียงใหม่')}
  ${kpiGrid(S.highlights)}
  <div style="margin-top:34px">${lineChart({
    title: 'จำนวนนักเรียนย้อนหลัง 4 ปีการศึกษา',
    subtitle: 'แยกตามระดับชั้นมัธยมศึกษาตอนต้น ตอนปลาย และรวมทั้งหมด (หน่วย: คน)',
    labels: st.years, fmt: n0,
    series: [
      { name: 'มัธยมศึกษาตอนต้น', values: st.rows[3].values, color: '#4f88d4' },
      { name: 'มัธยมศึกษาตอนปลาย', values: st.rows[7].values, color: '#d4a537' },
      { name: 'รวมทั้งหมด', values: st.rows[8].values, color: '#132f63' }
    ],
    note: 'จำนวนนักเรียนรวมเพิ่มขึ้นจาก 1,658 คน ในปีการศึกษา 2566 เป็น 2,198 คน ในปีการศึกษา 2569 คิดเป็นการเพิ่มขึ้นร้อยละ 32.57 ภายใน 4 ปี สะท้อนความเชื่อมั่นของผู้ปกครองและชุมชนที่มีต่อคุณภาพการจัดการศึกษาของโรงเรียน'
  })}</div>
  <div class="grid grid-2" style="margin-top:24px">
    ${table({
      caption: 'จำนวนนักเรียนจำแนกตามระดับชั้น (คน)',
      headers: ['ระดับชั้น', ...st.years.map(y => 'ปี ' + y)],
      rows: st.rows.map(r => ({ cells: [r.level, ...r.values.map(n0)], total: !!r.total }))
    })}
    ${table({
      caption: 'ครูและบุคลากรทางการศึกษา ณ วันที่ 10 มิถุนายน 2568 (คน)',
      headers: ['ประเภทบุคลากร', 'ชาย', 'หญิง', 'รวม'],
      rows: S.staff.rows.map(r => ({ cells: [r.type, r.male || '–', r.female || '–', r.total], total: !!r.isTotal })),
      note: 'ระดับการศึกษาสูงสุด: ต่ำกว่าปริญญาตรี 16 คน · ปริญญาตรี 57 คน · สูงกว่าปริญญาตรี 39 คน'
    })}
  </div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('นวัตกรรมการบริหาร', '', S.model.name, S.model.tagline)}
  <div class="grid grid-4">${S.model.letters.map((l, i) => `
    <div class="card card-hover"${rev('zoom', i * 70)}>
      <div class="model-letter">
        <span class="model-badge">${esc(l.letter)}</span>
        <span class="model-en">${esc(l.en)}</span>
      </div><p class="card-body" style="margin:0;font-size:15.5px">${esc(l.th)}</p></div>`).join('')}</div>
</div></section>

<section class="section" id="overview"><div class="wrap">
  ${secHead('สารบัญ', '', 'รายการประเมินทั้ง 5 ด้าน',
    'เนื้อหาแบ่งตามรายการประเมินและตัวชี้วัดของแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน ระดับประถมศึกษาและมัธยมศึกษา สามารถเลือกอ่านแต่ละด้านได้จากแถบเมนูด้านบนหรือการ์ดด้านล่างนี้')}
  <div class="grid grid-3">${DIMS.map((d, i) => `
    <a class="dim-card" href="#${d.path.slice(1)}"${rev('', i * 90)}>
      <div class="dim-num">${d.no}</div>
      <div class="dim-name">${esc(d.name)}</div>
      <p class="dim-desc">${esc(d.desc)}</p>
      <div class="chip-row" style="margin-bottom:14px">
        <span class="chip chip-gold">น้ำหนัก ${d.weight}</span><span class="chip">${d.items} รายการ</span></div>
      <div class="dim-meta">อ่านด้านที่ ${d.no} <span>›</span></div></a>`).join('')}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('ทิศทางการพัฒนา', '', 'พันธกิจ เป้าประสงค์ และกลยุทธ์',
    'โรงเรียนกำหนดทิศทางการพัฒนาไว้ในแผนพัฒนาการจัดการศึกษา พ.ศ. 2568–2570 ซึ่งจัดทำจากการศึกษาสภาพปัญหา ความต้องการจำเป็น และบริบทของสถานศึกษาอย่างเป็นระบบ โดยความร่วมมือของผู้มีส่วนได้ส่วนเสียทุกฝ่าย')}
  <div class="grid grid-2">
    <div class="card"${rev('left')}><h3 class="card-title">พันธกิจ 5 ข้อ</h3>
      <ol class="bullets">${S.missions.map(m => `<li>${esc(m)}</li>`).join('')}</ol></div>
    <div class="card"${rev('right')}><h3 class="card-title">เป้าประสงค์ 5 ข้อ</h3>
      <ol class="bullets">${S.goals.map(g => `<li>${esc(g)}</li>`).join('')}</ol></div>
  </div>
  <div class="grid grid-3" style="margin-top:20px">${S.strategies.map((st2, i) => `
    <div class="card card-accent"${rev('', i * 100)}>
      <div class="chip" style="margin-bottom:10px">กลยุทธ์ที่ ${st2.no}</div>
      <h3 class="card-title" style="font-size:17.5px">${esc(st2.title)}</h3>
      <ul class="bullets" style="font-size:15.5px">${st2.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('บริบทของสถานศึกษา', '', 'ชุมชนและเครือข่ายความร่วมมือ', S.community.serviceArea)}
  <div class="grid grid-2">
    <div class="card"${rev('left')}><h3 class="card-title">สภาพชุมชนโดยรวม</h3>
      <ul class="bullets">
        <li>ลักษณะชุมชน: ${esc(S.community.character)}</li>
        <li>จำนวนประชากร: ${esc(S.community.population)}</li>
        <li>เด็กในวัยเรียน: ${esc(S.community.schoolAgeChildren)}</li>
        <li>อาชีพสำคัญ: ${esc(S.community.occupation)}</li>
        <li>รายได้เฉลี่ยต่อครัวเรือน: ${esc(S.community.income)}</li>
      </ul>
      <p class="card-body" style="margin-top:12px;margin-bottom:0">${esc(S.community.note)}</p></div>
    <div class="card card-gold"${rev('right')}>
      <h3 class="card-title">เครือข่ายความร่วมมือ</h3>
      <p class="card-body">${esc(S.community.partners)}</p>
      <h3 class="card-title" style="margin-top:20px">อาคารสถานที่และเทคโนโลยี</h3>
      <div class="table-scroll" style="border:none"><table class="tbl" style="min-width:0"><tbody>
        ${S.facilities.map(f => `<tr><td>${esc(f.name)}</td><td class="num">${esc(f.value)}</td></tr>`).join('')}
      </tbody></table></div></div>
  </div>
</div></section>`;
}

function pageDim1(D) {
  const d = D.DIM1, P = PALETTE, GP = PALETTE;
  const s11 = d.section11, s12 = d.section12;
  const onetHeaders = ['สาระการเรียนรู้', 'ร.ร. 2566', 'ประเทศ 2566', 'ต่าง', 'ร.ร. 2567', 'ประเทศ 2567', 'ต่าง', 'ร.ร. 2568', 'ประเทศ 2568', 'ต่าง'];
  const cmpRows = subs => subs.map(s => ({
    cells: [s.name, ...[0, 1, 2].flatMap(i => [n2(s.school[i]), n2(s.nation[i]), signed(s.school[i] - s.nation[i])])]
  }));
  const cmpSeries = subs => subs.flatMap((s, i) => ([
    { name: s.name + ' (โรงเรียน)', values: s.school, color: P[i % 5] },
    { name: s.name + ' (ประเทศ)', values: s.nation, color: P[i % 5], dashed: true }
  ]));

  return `
${pageHero(d.no, d.weight, d.name, d.subtitle)}
<section class="section"><div class="wrap">
  <div class="card card-accent"${rev()} style="margin-bottom:32px"><p class="card-body" style="margin:0">${esc(d.intro)}</p></div>
  ${kpiGrid(d.kpis)}
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '1.1', 'ผลสัมฤทธิ์ทางวิชาการ', s11.lead)}
  <div class="card"${rev()}><h3 class="card-title">ตัวชี้วัดทั้ง 8 ข้อ</h3>
    <ol class="bullets" style="columns:2;column-gap:34px">${d.indicators['1.1'].map(i => `<li style="break-inside:avoid">${esc(i)}</li>`).join('')}</ol></div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '1.1.1', 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี', s11.onet.narrative)}
  <div class="stack">
    ${onetChart({ title: 'ค่าเฉลี่ย O-NET ชั้น ม.6 — โรงเรียนเทียบกับระดับประเทศ', subtitle: 'ปีการศึกษา 2566–2568 · แตะชื่อวิชาเพื่อดูทีละรายวิชา', note: s11.onet.m6.conclusion, years: s11.onet.m6.years, subjects: s11.onet.m6.subjects })}
    ${table({ caption: s11.onet.m6.caption, headers: onetHeaders, rows: cmpRows(s11.onet.m6.subjects) })}
    ${lineChart({ title: 'พัฒนาการผลสัมฤทธิ์ O-NET ชั้น ม.3', subtitle: 'ค่าเฉลี่ยระดับโรงเรียน ปีการศึกษา 2566–2568', labels: s11.onet.m3Trend.years, series: s11.onet.m3Trend.subjects.map((s, i) => ({ name: s.name, values: s.values, color: P[i % 5] })), note: s11.onet.m3Trend.conclusion + '  ' + s11.onet.m3Trend.footnote })}
    ${callout('จุดเด่น:', 'รายวิชาคณิตศาสตร์ชั้น ม.3 มีพัฒนาการเพิ่มขึ้นอย่างต่อเนื่องครบ 3 ปีการศึกษา (22.39 → 24.56 → 26.68) ซึ่งเป็นไปตามเกณฑ์ตัวชี้วัดที่ 1.1.1 ที่กำหนดให้ผลสัมฤทธิ์ระดับชาติของสถานศึกษามีพัฒนาการอย่างต่อเนื่อง 3 ปี', true)}
    ${table({ caption: s11.onet.m3.caption, headers: onetHeaders, rows: cmpRows(s11.onet.m3.subjects) })}
    ${onetChart({ title: 'ค่าเฉลี่ย O-NET ชั้น ม.3 — โรงเรียนเทียบกับระดับประเทศ', subtitle: 'ปีการศึกษา 2566–2568 · แตะชื่อวิชาเพื่อดูทีละรายวิชา', note: s11.onet.m3.conclusion, years: s11.onet.m3.years, subjects: s11.onet.m3.subjects })}
  </div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '1.1.2', 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ', s11.thai.narrative)}
  <div class="stack">
    ${lineChart({ title: 'ร้อยละของผู้เรียนที่มีผลการคัดกรองการอ่าน–เขียนภาษาไทยในระดับดี', subtitle: 'จำแนกรายระดับชั้น ปีการศึกษา 2566–2568', labels: s11.thai.years, showValues: false, min: 70, max: 95, height: 480, series: [...s11.thai.rows.map((r, i) => ({ name: r.name, values: r.values, color: GP[i % 6] })), { name: 'ค่าเฉลี่ยรวม', values: s11.thai.average, color: '#08152f' }], note: s11.thai.conclusion })}
    ${table({ caption: s11.thai.caption, headers: ['ระดับชั้น', 'ปี 2566', 'ปี 2567', 'ปี 2568'], rows: [...s11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(n2)] })), { cells: ['ค่าเฉลี่ย', ...s11.thai.average.map(n2)], total: true }] })}
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '1.1.3', 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร', s11.english.narrative)}
  <div class="grid grid-2" style="margin-bottom:24px">
    <div class="card"${rev('left')}><h3 class="card-title">กิจกรรมและโครงการพัฒนาทักษะภาษาอังกฤษ</h3>
      <ul class="bullets">${s11.english.activities.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>
    <div class="card card-gold"${rev('right')}><h3 class="card-title">รางวัลด้านการใช้ภาษาอังกฤษ</h3>
      <ul class="bullets">
        <li>สอบได้ลำดับที่ 19 จากผู้เข้าสอบ 1,306 คน ในโครงการทดสอบความรู้วิชา TGAT ระดับชั้นมัธยมศึกษาตอนปลาย ปีการศึกษา 2567</li>
        <li>ผลการสอบวัดระดับความสามารถทางภาษาอังกฤษ 4 ทักษะ ตามกรอบมาตรฐานสากล CEFR ระดับ A1–A2 เต็ม 50 คะแนน</li>
        <li>ได้คะแนนเต็ม 100 คะแนน ในการทดสอบ O-NET รายวิชาภาษาอังกฤษ (สทศ.)</li>
        <li>เหรียญทอง การแข่งขัน BSK 101 “A-Math Crossword Kumkom Challenge 2023”</li>
      </ul></div>
  </div>
  ${barChart({ title: 'ร้อยละของผู้เรียนที่มีผลสัมฤทธิ์ภาษาอังกฤษระดับดีขึ้นไป (ระดับคะแนน 3–4)', subtitle: 'ปีการศึกษา 2566–2568', labels: s11.english.years, series: [{ name: 'ระดับดีขึ้นไป (3–4)', values: s11.english.grades.map(g => g.pct), color: '#1e4d9e' }], fmt: n2, note: s11.english.conclusion })}
  <div style="margin-top:22px">${table({
    caption: s11.english.caption,
    headers: ['ปีการศึกษา', ...s11.english.gradeLabels, 'ร้อยละ 3–4'],
    rows: [...s11.english.grades.map(g => ({ cells: [g.year, ...g.g.map(n0), n2(g.pct)] })),
      { cells: ['รวมเฉลี่ย 3 ปี', '', '', '', '', '', '', '', '', n2(s11.english.average)], total: true }],
    note: 'ค่าเฉลี่ยรวม 3 ปีการศึกษา ร้อยละ ' + n2(s11.english.average)
  })}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '1.1.4', 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้', s11.thinking.narrative)}
  <div class="stack">
    ${barChart({ title: 'ร้อยละของผู้เรียนที่มีผลการเรียนรายวิชา IS ในระดับ 3–4', subtitle: 'จำแนกตามระดับชั้น ม.2 และ ม.5 ปีการศึกษา 2566–2568', labels: ['2566', '2567', '2568'], series: [{ name: 'ชั้น ม.2', values: [61, 88, 76], color: '#1e4d9e' }, { name: 'ชั้น ม.5', values: [73, 89, 96], color: '#d4a537' }], note: 'ค่าเฉลี่ยรวม 3 ปี ร้อยละ ' + s11.thinking.isAverage + ' แสดงถึงความสามารถในการแก้ปัญหา คิดวิเคราะห์ คิดริเริ่มสร้างสรรค์ และสามารถอภิปรายแลกเปลี่ยนความคิดเห็นอย่างเป็นขั้นเป็นตอน' })}
    ${lineChart({ title: 'ร้อยละของนักเรียนที่มีผลการประเมินการอ่าน คิดวิเคราะห์ เขียนสื่อความ ในระดับดีขึ้นไป', subtitle: 'ภาพรวมทุกระดับชั้น ปีการศึกษา 2566–2568', labels: s11.thinking.years, series: [{ name: 'ระดับดีขึ้นไป (ดีเยี่ยม + ดี)', values: s11.thinking.readTotals, color: '#1e4d9e' }], min: 80, max: 100, note: s11.thinking.conclusion })}
    ${table({
      caption: s11.thinking.readCaption,
      headers: ['ระดับชั้น', 'ดีเยี่ยม 2566', 'ดี 2566', 'ดีเยี่ยม 2567', 'ดี 2567', 'ดีเยี่ยม 2568', 'ดี 2568'],
      rows: [...s11.thinking.readRows.map(r => ({ cells: [r.name, ...[0, 1, 2].flatMap(i => [n2(r.excellent[i]), n2(r.good[i])])] })),
        { cells: ['ร้อยละระดับดีขึ้นไป', n2(s11.thinking.readTotals[0]), '', n2(s11.thinking.readTotals[1]), '', n2(s11.thinking.readTotals[2]), ''], total: true }]
    })}
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '1.1.5', 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)', s11.ict.narrative)}
  <div class="grid grid-2">
    ${lineChart({ title: 'ร้อยละของผู้เรียนที่มีผลสัมฤทธิ์รายวิชาเทคโนโลยีระดับ 3–4', subtitle: 'ปีการศึกษา 2566–2568', labels: s11.ict.years, series: [{ name: 'รายวิชาเทคโนโลยี (ระดับ 3–4)', values: s11.ict.values, color: '#1e4d9e' }], min: 70, max: 80, note: s11.ict.conclusion })}
    <div class="card card-gold"${rev('right')}><h3 class="card-title">ผลงานและรางวัลด้านเทคโนโลยี</h3>
      <div class="steps" style="margin-top:16px">${s11.ict.awards.map(a => `
        <div class="step-item"><h4>${esc(a.name)}</h4><p>${esc(a.award)}</p>
        <div class="chip-row" style="margin-top:8px"><span class="chip chip-gold">${esc(a.level)}</span><span class="chip">ปีการศึกษา ${esc(a.year)}</span></div>
        <p style="font-size:14.5px;color:#6b7a94;margin-top:6px">${esc(a.org)}</p></div>`).join('')}</div></div>
  </div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '1.1.7', 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน', s11.pathway.narrative)}
  <!-- ตัวเลือกที่ 1 : กราฟเส้น — ลบบรรทัดนี้ทิ้งได้ถ้าไม่ใช้ -->
  ${lineChart({ title: 'ร้อยละของนักเรียนชั้น ม.3 จำแนกตามเส้นทางหลังจบการศึกษา', subtitle: 'ปีการศึกษา 2565–2568', labels: s11.pathway.years, series: s11.pathway.rows.map((r, i) => ({ name: r.name, values: r.values, color: P[i % 5] })), note: s11.pathway.conclusion })}
  <!-- ตัวเลือกที่ 2 : กราฟแท่ง — ลบบรรทัดนี้ทิ้งได้ถ้าไม่ใช้ -->
  <div style="margin-top:24px">${barChart({ title: 'ร้อยละของนักเรียนชั้น ม.3 จำแนกตามเส้นทางหลังจบการศึกษา', subtitle: 'ปีการศึกษา 2565–2568', labels: s11.pathway.years, series: s11.pathway.rows.map((r, i) => ({ name: r.name, values: r.values, color: P[i % 5] })), max: 80, fmt: n2, note: s11.pathway.conclusion })}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '1.2', 'คุณลักษณะที่พึงประสงค์', s12.lead)}
  <div class="card"${rev()} style="margin-bottom:28px"><h3 class="card-title">ตัวชี้วัดทั้ง 8 ข้อ</h3>
    <ol class="bullets" style="columns:2;column-gap:34px">${d.indicators['1.2'].map(i => `<li style="break-inside:avoid">${esc(i)}</li>`).join('')}</ol></div>
  <div class="stack">
    ${meterList({ title: 'สรุปคุณภาพโดยรวมของคุณลักษณะอันพึงประสงค์ทั้ง 8 ด้าน', subtitle: 'ค่าเฉลี่ยร้อยละระดับดีขึ้นไป ปีการศึกษา 2566–2568', rows: s12.desired.rows.map(r => ({ name: r.name, value: r.avg })).sort((a, b) => b.value - a.value), note: s12.desired.conclusion })}
    ${table({
      caption: s12.desired.caption,
      headers: ['คุณลักษณะที่พึงประสงค์', 'ปี 2566', 'ปี 2567', 'ปี 2568', 'สรุปคุณภาพโดยรวม'],
      rows: [...s12.desired.rows.map(r => ({ cells: [r.name, ...r.values.map(n2), n2(r.avg)] })),
        { cells: ['สรุปผลการประเมิน', ...s12.desired.overall.map(n2), n2(s12.desired.overallAvg)], total: true }]
    })}
    ${lineChart({ title: 'ผลการประเมินคุณลักษณะอันพึงประสงค์ในภาพรวม', subtitle: 'เทียบกับค่าเป้าหมายมาตรฐานการศึกษาของโรงเรียน (ร้อยละ 90)', labels: s12.desired.years, series: [{ name: 'ผลการประเมินภาพรวม', values: s12.desired.overall, color: '#1e4d9e' }, { name: 'ค่าเป้าหมายของโรงเรียน', values: [90, 90, 90], color: '#b4433a', dashed: true }], min: 85, max: 100, note: 'ผลการประเมินภาพรวมสูงกว่าค่าเป้าหมายร้อยละ 90 อย่างต่อเนื่องทุกปีการศึกษา โดยปีการศึกษา 2567 สูงที่สุดที่ร้อยละ 98.69' })}
  </div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '1.2.3', 'การยอมรับเหตุผลและความคิดเห็นของผู้อื่น', s12.election.narrative)}
  <div class="stack">
    ${barChart({ title: 'การเข้าร่วมกิจกรรมเลือกตั้งสภาผู้แทนนักเรียน', subtitle: 'จำนวนผู้มีสิทธิ์และผู้มาใช้สิทธิ์ ปีการศึกษา 2566–2568 (หน่วย: คน)', labels: s12.election.years, series: [{ name: 'ผู้มีสิทธิ์เลือกตั้ง', values: s12.election.eligible, color: '#b3cdf0' }, { name: 'ผู้มาใช้สิทธิ์', values: s12.election.voted, color: '#1e4d9e' }], note: s12.election.conclusion })}
    ${lineChart({ title: 'ร้อยละของผู้มาใช้สิทธิ์เลือกตั้ง', subtitle: 'เทียบกับเกณฑ์ที่กำหนดไว้ไม่ต่ำกว่าร้อยละ 80', labels: s12.election.years, series: [{ name: 'ร้อยละผู้มาใช้สิทธิ์', values: s12.election.votedPct, color: '#1e4d9e' }, { name: 'เกณฑ์ร้อยละ 80', values: [80, 80, 80], color: '#b4433a', dashed: true }], min: 70, max: 100 })}
  </div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '1.2.7', 'การรักษาสุขภาพกายและสุขภาพจิต', s12.health.narrative)}
  <div class="grid grid-2">
    ${lineChart({ title: 'สมรรถภาพทางกายของนักเรียน', subtitle: 'ร้อยละจำแนกตามระดับสมรรถภาพ ปีการศึกษา 2566–2568', labels: s12.health.years, series: s12.health.fitRows.map((r, i) => ({ name: r.name, values: r.values, color: P[i % 5] })), showValues: false, note: 'กลุ่มสมรรถภาพดีมากและดีเพิ่มขึ้นทุกปี ขณะที่กลุ่มที่ต้องปรับปรุงลดลงอย่างต่อเนื่องจากร้อยละ 20.28 เหลือร้อยละ 12.32' })}
    ${lineChart({ title: 'สัดส่วนร่างกายของนักเรียน', subtitle: 'ร้อยละจำแนกตามเกณฑ์ ปีการศึกษา 2566–2568', labels: s12.health.years, series: s12.health.bodyRows.map((r, i) => ({ name: r.name, values: r.values, color: P[i % 5] })), showValues: false, note: 'นักเรียนที่มีสัดส่วนร่างกายปกติเพิ่มขึ้นเป็นร้อยละ 90.81 ในปีการศึกษา 2568 ขณะที่กลุ่มอ้วนลดลงจากร้อยละ 16.63 เหลือร้อยละ 5.09' })}
  </div>
  <div style="margin-top:24px">${barChart({ title: 'ผลสุขภาพจิตของนักเรียน', subtitle: 'ร้อยละของนักเรียนทั้งหมด ปีการศึกษา 2566–2568', labels: s12.health.years, series: MIND_ORDER.map(n => s12.health.mindRows.find(r => r.name === n)).filter(Boolean).map(r => ({ name: r.name, values: r.values, color: MIND_COLOR[r.name] })), max: 100, fmt: n2, note: s12.health.conclusion })}</div>
</div></section>

${gallery(D, 'd1', 1, 'ภาพกิจกรรมที่สะท้อนคุณลักษณะและคุณภาพของผู้เรียน จากเอกสารประกอบการประเมินด้านที่ 1')}
<section class="section-tight section-alt"><div class="wrap">${pager('', '', 'dimension-2', 'ด้านที่ 2 การบริหารหลักสูตรและงานวิชาการ')}</div></section>`;
}

function pageDim2(D) {
  const d = D.DIM2, c = d.curriculum, a = d.activities, m = d.media, s = d.assessment;
  return `
${pageHero(d.no, d.weight, d.name, d.subtitle)}
<section class="section"><div class="wrap">
  <div class="card card-accent"${rev()} style="margin-bottom:32px"><p class="card-body" style="margin:0">${esc(d.intro)}</p></div>
  ${kpiGrid(d.kpis)}
</div></section>

<section class="section section-alt"><div class="wrap">
  <div class="sec-head"${rev()}><h3 class="sec-title" style="font-size:22px">SMART Student — วงล้อ ACTIVITY</h3><div class="sec-rule"></div></div>
  <p class="sec-lead" style="margin:-8px 0 26px">กรอบการจัดการเรียนรู้ที่ยึดผู้เรียนเป็นศูนย์กลาง ประกอบด้วย 8 องค์ประกอบที่ทำงานต่อเนื่องกันเป็นวงจร ตั้งแต่การวางแผน ลงมือปฏิบัติ ตรวจสอบผล และปรับปรุงเพื่อพัฒนาคุณภาพผู้เรียนอย่างต่อเนื่อง</p>
  <div id="swRoot"${rev()}>${SMART_WHEEL_HTML}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '2.1', 'การพัฒนาหลักสูตรสถานศึกษา', c.lead)}
  ${cycleFlow(c.cycle)}
  <div class="sec-head" style="margin-top:52px"${rev()}><h3 class="sec-title" style="font-size:22px">พัฒนาการของหลักสูตรสถานศึกษา 3 ปีการศึกษา</h3><div class="sec-rule"></div></div>
  <div class="steps">${c.timeline.map((t, i) => `<div class="step-item"${rev('left', i * 110)}><h4>${esc(t.year)}</h4><p>${esc(t.text)}</p></div>`).join('')}</div>
  <div style="margin-top:34px">${barChart({
    title: 'จำนวนหลักสูตร/แผนการเรียนที่เปิดสอน', subtitle: 'จำแนกตามระดับชั้น ปีการศึกษา 2566–2568',
    labels: c.courseYears,
    series: [
      { name: 'มัธยมศึกษาตอนต้น', values: s.planCount.lower, color: '#4f88d4' },
      { name: 'มัธยมศึกษาตอนปลาย', values: s.planCount.upper, color: '#d4a537' },
      { name: 'รวมทั้งหมด', values: s.planCount.total, color: '#132f63' }
    ],
    note: 'จำนวนแผนการเรียนรวมเพิ่มจาก 26 แผนการเรียนในปีการศึกษา 2566–2567 เป็น 27 แผนการเรียนในปีการศึกษา 2568 จากการเพิ่มแผนการเรียนวิทยาศาสตร์นวัตกรรมและเทคโนโลยี (IST)'
  })}</div>
  <div class="grid grid-2" style="margin-top:24px">
    <div class="card"${rev('left')}><h3 class="card-title">หลักสูตรระดับชั้นมัธยมศึกษาตอนต้น</h3>
      <ol class="bullets">${c.lowerCourses.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>
    <div${rev('right')}>${table({
      caption: 'แผนการเรียนระดับชั้นมัธยมศึกษาตอนปลาย',
      headers: ['แผนการเรียน', '2566', '2567', '2568'],
      rows: [...c.upperCourses.map(x => ({ cells: [x.name, ...x.y.map(v => (v ? '✓' : '–'))] })),
        { cells: ['รวมแผนการเรียน ม.ปลาย', ...s.planCount.upper], total: true }]
    })}</div>
  </div>
  <div style="margin-top:22px">${callout('ห้องเรียนพิเศษ:', 'โรงเรียนได้ดำเนินการขอเปิดหลักสูตรห้องเรียนพิเศษ ประเภทความสามารถพิเศษด้านวิชาการ จำนวน 4 หลักสูตร ได้แก่ ระดับชั้นมัธยมศึกษาตอนต้น หลักสูตรห้องเรียนภาษาจีน–ภาษาอังกฤษ (CEP) และระดับชั้นมัธยมศึกษาตอนปลาย หลักสูตรวิทยาศาสตร์สุขภาพ (Health Sciences Program) หลักสูตรนวัตกรรม วิทยาศาสตร์ และเทคโนโลยี (IST) และหลักสูตรภาษาจีน (Chinese Special Program: CSP)', true)}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '2.2', 'การจัดกิจกรรมเสริมหลักสูตร', a.lead)}
  <div class="card card-gold"${rev()} style="margin-bottom:32px">
    <h3 class="card-title">${esc(a.flagship.name)}</h3><p class="card-body" style="margin:0">${esc(a.flagship.text)}</p></div>
  ${cycleFlow(a.cycle)}
  <div class="sec-head" style="margin-top:52px"${rev()}><h3 class="sec-title" style="font-size:22px">กิจกรรมเสริมหลักสูตรจำแนกตามกลุ่มสาระการเรียนรู้</h3><div class="sec-rule"></div></div>
  <div class="grid grid-2">${a.groups.map((g, i) => `
    <div class="card card-hover"${rev('', i * 80)}>
      <div class="chip" style="margin-bottom:12px">กลุ่มสาระการเรียนรู้</div>
      <h3 class="card-title">${esc(g.subject)}</h3>
      <ul class="bullets" style="margin-top:8px">${g.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '2.3', 'สื่อ เทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้', m.lead)}
  ${cycleFlow(m.cycle)}
  <div class="grid grid-3" style="margin-top:38px">${m.resources.map((r, i) => `
    <div class="card card-accent"${rev('zoom', i * 70)}>
      <div style="font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px">${esc(r.name)}</div>
      <div style="color:#1e4d9e;font-weight:700;font-size:19px">${esc(r.detail)}</div></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '2.4', 'ระบบการวัดและประเมินผล', s.lead)}
  ${cycleFlow(s.cycle)}
  <div style="margin-top:38px">${table({
    caption: s.planCount.caption,
    headers: ['ระดับชั้น', 'ปี 2566', 'ปี 2567', 'ปี 2568'],
    rows: [
      { cells: ['มัธยมศึกษาตอนต้น', ...s.planCount.lower] },
      { cells: ['มัธยมศึกษาตอนปลาย', ...s.planCount.upper] },
      { cells: ['รวมทั้งหมด', ...s.planCount.total], total: true }
    ],
    note: 'ความหลากหลายของหลักสูตรทำให้โรงเรียนต้องพัฒนาระบบการวัดและประเมินผลให้รองรับได้ครบทุกแผนการเรียน จึงนำระบบดิจิทัลเข้ามาช่วยลดภาระงานครูและรายงานผลได้ทันเวลา'
  })}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('สรุป', '', 'ตัวชี้วัดของด้านที่ 2 ทั้ง 4 รายการ', 'ตามแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน ระดับประถมศึกษาและมัธยมศึกษา')}
  ${indicatorCards(d.indicators)}
${gallery(D, 'd2', 2, 'ภาพกิจกรรมพัฒนาผู้เรียนและงานวิชาการ จากเอกสารประกอบการประเมินด้านที่ 2')}
  <div style="margin-top:34px">${pager('dimension-1', 'ด้านที่ 1 คุณภาพนักเรียน', 'dimension-3', 'ด้านที่ 3 การบริหารและการจัดการศึกษา')}</div>
</div></section>`;
}

function pageDim3(D) {
  const d = D.DIM3, S = D.SCHOOL;
  return `
${pageHero(d.no, d.weight, d.name, d.subtitle)}
<section class="section"><div class="wrap">
  <div class="card card-accent"${rev()} style="margin-bottom:32px"><p class="card-body" style="margin:0">${esc(d.intro)}</p></div>
  ${kpiGrid(d.kpis)}
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '3.1', 'ภาวะผู้นำของผู้บริหาร', d.leadership.lead)}
  <div class="sec-head"${rev()}><h3 class="sec-title" style="font-size:22px">${esc(S.model.name)} — องค์ประกอบทั้ง 8</h3><div class="sec-rule"></div></div>
  <p class="sec-lead" style="margin:-8px 0 24px">${esc(S.model.tagline)}</p>
  <div id="bcRoot"${rev()} style="margin-bottom:38px">${BANCHUEN_HTML}</div>
  <div class="grid grid-4" style="margin-bottom:34px">${S.model.letters.map((l, i) => `
    <div class="card card-hover"${rev('zoom', i * 70)}>
      <div class="model-letter">
        <span class="model-badge">${esc(l.letter)}</span>
        <span class="model-en">${esc(l.en)}</span></div>
      <p class="card-body" style="margin:0;font-size:15.5px">${esc(l.th)}</p></div>`).join('')}</div>
  <div class="grid grid-2">${d.leadership.modelExplain.map((m, i) => `
    <div class="card card-gold"${rev('', i * 90)}>
      <div class="chip chip-gold" style="margin-bottom:10px">${esc(m.letters)}</div>
      <h3 class="card-title">${esc(m.group)}</h3>
      <p class="card-body" style="margin:0">${esc(m.text)}</p></div>`).join('')}</div>
  <div class="sec-head" style="margin-top:52px"${rev()}><h3 class="sec-title" style="font-size:22px">แนวปฏิบัติของผู้บริหารตามตัวชี้วัดทั้ง 5 ข้อ</h3><div class="sec-rule"></div></div>
  <div class="steps">${d.leadership.practices.map((p, i) => `<div class="step-item"${rev('left', i * 90)}><h4>${esc(p.title)}</h4><p>${esc(p.text)}</p></div>`).join('')}</div>
  <div class="sec-head" style="margin-top:52px"${rev()}><h3 class="sec-title" style="font-size:22px">การมอบหมายงานผ่าน 4 กลุ่มบริหาร</h3><div class="sec-rule"></div></div>
  <div class="grid grid-4">${d.leadership.groups.map((g, i) => `
    <div class="card card-accent"${rev('zoom', i * 90)}><h3 class="card-title" style="font-size:17px">${esc(g.name)}</h3>
    <p class="card-body" style="margin:0;font-size:15.5px">${esc(g.text)}</p></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '3.2', 'การพัฒนาองค์กร', d.organization.lead)}
  <div class="grid grid-2">${d.organization.items.map((it, i) => `
    <div class="card card-hover"${rev('', i * 80)}>
      <div style="width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:#eef4fc;color:#183d80;font-weight:700;border:1px solid #d8e6f8;margin-bottom:12px">${i + 1}</div>
      <h3 class="card-title">${esc(it.title)}</h3><p class="card-body" style="margin:0">${esc(it.text)}</p></div>`).join('')}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '3.3', 'เทคโนโลยีและการสื่อสารเพื่อการศึกษา', d.technology.lead)}
  ${cycleFlow(d.technology.cycle)}
  <div class="grid grid-3" style="margin-top:38px">${d.technology.systems.map((s, i) => `
    <div class="card card-accent"${rev('zoom', i * 70)}>
      <div style="font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px">${esc(s.name)}</div>
      <div style="color:#1e4d9e;font-weight:700;font-size:18px">${esc(s.detail)}</div></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '3.4', 'ระบบการประกันคุณภาพภายใน', d.qa.lead)}
  <div class="grid grid-3">${d.qa.steps.map((s, i) => `
    <div class="card card-hover"${rev('', i * 80)}><div class="chip" style="margin-bottom:10px">ขั้นที่ ${i + 1}</div>
    <h3 class="card-title" style="font-size:17.5px">${esc(s.title)}</h3>
    <p class="card-body" style="margin:0;font-size:15.5px">${esc(s.text)}</p></div>`).join('')}</div>
  <div style="margin-top:28px">${callout('ความมั่นใจของผู้มีส่วนเกี่ยวข้อง:', d.qa.confidence)}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '3.5', 'ระบบข้อมูลและสารสนเทศ', d.information.lead)}
  <div class="steps">${d.information.items.map((it, i) => `<div class="step-item"${rev('left', i * 90)}><h4>${esc(it.title)}</h4><p>${esc(it.text)}</p></div>`).join('')}</div>
</div></section>

<section class="section"><div class="wrap">
  ${secHead('สรุป', '', 'ตัวชี้วัดของด้านที่ 3 ทั้ง 5 รายการ', 'ตามแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน ระดับประถมศึกษาและมัธยมศึกษา')}
  ${indicatorCards(d.indicators)}
${gallery(D, 'd3', 3, 'ภาพการบริหารจัดการและการพัฒนาครูและบุคลากร จากเอกสารประกอบการประเมินด้านที่ 3')}
  <div style="margin-top:34px">${pager('dimension-2', 'ด้านที่ 2 การบริหารหลักสูตรและงานวิชาการ', 'dimension-4', 'ด้านที่ 4 การจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ')}</div>
</div></section>`;
}

function pageDim4(D) {
  const d = D.DIM4, P = PALETTE;
  return `
${pageHero(d.no, d.weight, d.name, d.subtitle)}
<section class="section"><div class="wrap">
  <div class="card card-accent"${rev()} style="margin-bottom:32px"><p class="card-body" style="margin:0">${esc(d.intro)}</p></div>
  ${kpiGrid(d.kpis)}
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '4.1', 'การออกแบบการจัดการเรียนรู้', d.design.lead)}
  ${cycleFlow(d.design.cycle)}
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '4.2', 'การจัดการเรียนรู้และการจัดการชั้นเรียน', d.classroom.lead)}
  <div class="grid grid-2">${d.classroom.practices.map((p, i) => `
    <div class="card card-hover"${rev('', i * 70)}>
      <div style="width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:#eef4fc;color:#183d80;font-weight:700;border:1px solid #d8e6f8;margin-bottom:12px">${i + 1}</div>
      <h3 class="card-title">${esc(p.title)}</h3><p class="card-body" style="margin:0">${esc(p.text)}</p></div>`).join('')}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('', '4.3', 'การวัดและประเมินผลการเรียนรู้', d.assessment.lead)}
  <div class="steps" style="margin-bottom:38px">${d.assessment.points.map((p, i) => `<div class="step-item"${rev('left', i * 90)}><h4>${esc(p.title)}</h4><p>${esc(p.text)}</p></div>`).join('')}</div>
  ${lineChart({ title: d.assessment.outcome.caption, subtitle: 'ผลจากการวัดและประเมินผลที่นำกลับมาพัฒนาการเรียนการสอน ปีการศึกษา 2566–2568', labels: d.assessment.outcome.years, series: d.assessment.outcome.series.map((s, i) => ({ name: s.name, values: s.values, color: P[i % 3] })), min: 50, max: 100, note: d.assessment.outcome.note })}
</div></section>

<section class="section"><div class="wrap">
  ${secHead('', '4.4', 'การนำผลการประเมินไปใช้', d.useResults.lead)}
  <div class="grid grid-4" style="margin-bottom:34px">${d.useResults.steps.map((s, i) => `
    <div class="card card-accent"${rev('zoom', i * 90)}><div class="chip" style="margin-bottom:10px">ขั้นที่ ${i + 1}</div>
    <h3 class="card-title" style="font-size:17px">${esc(s.title)}</h3>
    <p class="card-body" style="margin:0;font-size:15.5px">${esc(s.text)}</p></div>`).join('')}</div>
  <div class="sec-head"${rev()}><h3 class="sec-title" style="font-size:22px">หลักฐานเชิงประจักษ์ของการนำผลไปใช้</h3><div class="sec-rule"></div>
    <p class="sec-lead">เปรียบเทียบผลลัพธ์ที่เกิดกับผู้เรียนระหว่างปีการศึกษา 2566 และ 2568 หลังจากครูนำผลการประเมินมาปรับแผนการจัดการเรียนรู้</p></div>
  <div class="grid grid-2">${d.useResults.evidence.map((e, i) => `
    <div class="card card-gold"${rev('', i * 80)}>
      <h3 class="card-title" style="font-size:17px">${esc(e.label)}</h3>
      <div style="display:flex;align-items:baseline;gap:14px;margin:14px 0 8px">
        <span style="font-family:'Noto Serif Thai',serif;font-size:26px;font-weight:700;color:#6b7a94">${n2(e.from)}</span>
        <span style="font-size:22px;color:#82ade4">→</span>
        <span style="font-family:'Noto Serif Thai',serif;font-size:32px;font-weight:700;color:#132f63">${n2(e.to)}<span style="font-size:16px;color:#6b7a94;margin-left:4px">${esc(e.unit)}</span></span>
        <span class="up" style="margin-left:auto">+${n2(e.to - e.from)}</span></div>
      <p class="card-body" style="margin:0;font-size:15px">${esc(e.note)}</p></div>`).join('')}</div>
</div></section>

<section class="section section-alt"><div class="wrap">
  ${secHead('สรุป', '', 'ตัวชี้วัดของด้านที่ 4 ทั้ง 4 รายการ', 'ตามแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน ระดับประถมศึกษาและมัธยมศึกษา')}
  ${indicatorCards(d.indicators)}
${gallery(D, 'd4', 4, 'ภาพการจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ จากเอกสารประกอบการประเมินด้านที่ 4')}
  <div style="margin-top:34px">${pager('dimension-3', 'ด้านที่ 3 การบริหารและการจัดการศึกษา', 'dimension-5', 'ด้านที่ 5 ความดีเด่นของสถานศึกษา')}</div>
</div></section>`;
}

function pageDim5(D) {
  const d = D.DIM5;
  const projects = d.projects.map((p, pi) => `
<section class="section${pi % 2 === 0 ? ' section-alt' : ''}"><div class="wrap">
  ${secHead('', p.no, p.name, p.summary)}
  <div style="margin-bottom:30px">${callout('ที่มาของโครงการ:', p.royal, true)}</div>
  <div class="card"${rev()} style="margin-bottom:34px"><h3 class="card-title">วัตถุประสงค์</h3>
    <ol class="bullets">${p.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ol></div>
  <div class="sec-head"${rev()}><h3 class="sec-title" style="font-size:22px">กระบวนการดำเนินงาน</h3><div class="sec-rule"></div></div>
  ${cycleFlow(p.cycle)}
  ${p.partners && p.partners.length ? `<div class="card card-gold"${rev()} style="margin-top:34px">
    <h3 class="card-title">เครือข่ายทางวิชาการที่ร่วมเป็นที่ปรึกษา</h3>
    <div class="chip-row" style="margin-top:12px">${p.partners.map(n => `<span class="chip chip-gold">${esc(n)}</span>`).join('')}</div></div>` : ''}
  ${p.subjectGroups && p.subjectGroups.length ? `
    <div class="sec-head" style="margin-top:52px"${rev()}><h3 class="sec-title" style="font-size:22px">การขับเคลื่อนความเป็นเลิศครบทั้ง 8 กลุ่มสาระการเรียนรู้</h3><div class="sec-rule"></div></div>
    <div class="grid grid-2">${p.subjectGroups.map((g, gi) => `
      <div class="card card-hover"${rev('', gi * 70)}><h3 class="card-title" style="font-size:17.5px">${esc(g.name)}</h3>
      <p class="card-body" style="margin:0;font-size:15.5px">${esc(g.text)}</p></div>`).join('')}</div>` : ''}
</div></section>`).join('');

  return `
${pageHero(d.no, d.weight, d.name, d.subtitle)}
<section class="section"><div class="wrap">
  <div class="card card-accent"${rev()} style="margin-bottom:32px"><p class="card-body" style="margin:0">${esc(d.intro)}</p></div>
  ${kpiGrid(d.kpis)}
</div></section>
${projects}
<section class="section section-alt"><div class="wrap">
  ${secHead('ผลการดำเนินงาน', '', d.dissemination.title, d.dissemination.lead)}
  <div class="grid grid-4">${d.dissemination.channels.map((c, i) => `
    <div class="card card-accent"${rev('zoom', i * 90)}><h3 class="card-title" style="font-size:17px">${esc(c.name)}</h3>
    <p class="card-body" style="margin:0;font-size:15.5px">${esc(c.text)}</p></div>`).join('')}</div>
</div></section>
<section class="section"><div class="wrap">
  ${secHead('สรุป', '', 'ตัวชี้วัดของด้านที่ 5', 'ตามแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน ระดับประถมศึกษาและมัธยมศึกษา')}
  ${Object.entries(d.indicators).map(([k, v]) => `<div class="card"${rev()}>
    <h3 class="card-title" style="font-size:17.5px">${esc(k)}</h3>
    <ol class="bullets">${v.map(x => `<li>${esc(x)}</li>`).join('')}</ol></div>`).join('')}
  <div style="margin-top:24px">${callout('หมายเหตุ:', 'โครงการที่นำเสนอเป็นโครงการตามแนวพระราชดำริของพระบาทสมเด็จพระเจ้าอยู่หัวรัชกาลที่ 9 หรือรัชกาลปัจจุบัน ตามที่กำหนดไว้ในแบบประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน')}</div>
${gallery(D, 'd5', 5, 'ภาพความดีเด่นและการพัฒนาคุณภาพอย่างต่อเนื่อง จากเอกสารประกอบการประเมินด้านที่ 5')}
  <div style="margin-top:34px">${pager('dimension-4', 'ด้านที่ 4 การจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ', 'home', 'กลับสู่หน้าแรก')}</div>
</div></section>`;
}

// ============================================================
async function main() {
  const D = await loadData();
  const S = D.SCHOOL;
  // รวม CSS ส่วนกลางกับไฟล์ .css ของทุก component เข้าด้วยกัน
  // (ในไฟล์ preview ไม่มีการ scope แบบ Angular แต่ selector ทุกตัวเป็นคลาสธรรมดา
  //  ที่ตั้งชื่อไม่ซ้ำกัน จึงนำมาต่อกันได้ตรง ๆ)
  const cssFiles = [path.join(root, 'src/styles.css'), ...(await collectCss(path.join(root, 'src/app')))];
  const parts = [];
  for (const f of cssFiles) {
    const body = (await readFile(f, 'utf8'))
      .replace(/@tailwind[^;]*;\s*/g, '')
      .replace(/:host-context\(([^)]*)\)\s*/g, '$1 ')
      .replace(/:host\b/g, 'body');
    parts.push(`/* ===== ${path.relative(root, f)} ===== */\n${body}`);
  }
  const cleanCss = parts.join('\n\n');

  const pages = {
    home: pageHome(D),
    'dimension-1': pageDim1(D),
    'dimension-2': pageDim2(D),
    'dimension-3': pageDim3(D),
    'dimension-4': pageDim4(D),
    'dimension-5': pageDim5(D),
    'awards': pageAwards(D)
  };

  const nav = D.NAV_ITEMS.map(i => {
    const id = i.path === '/' ? 'home' : i.path.slice(1);
    return `<a class="nav-link" data-page="${id}" href="#${id}">${esc(i.short)}</a>`;
  }).join('');
  const navFull = D.NAV_ITEMS.map(i => {
    const id = i.path === '/' ? 'home' : i.path.slice(1);
    return `<a class="nav-link" data-page="${id}" href="#${id}">${esc(i.label)}</a>`;
  }).join('');

  const html = `<!doctype html>
<html lang="th"><head>
<meta charset="utf-8"/>
<title>${esc(S.name)} — รางวัลพระราชทาน</title>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<meta name="theme-color" content="#0d2149"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta name="apple-mobile-web-app-title" content="สันทรายวิทยาคม"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;600;700&family=Noto+Serif+Thai:wght@600;700&display=swap" rel="stylesheet"/>
<style>${cleanCss}</style>
</head><body>

<header class="nav" id="nav"><div class="wrap-wide nav-inner">
  <a class="brand" href="#home">
    <span class="brand-mark">${esc(S.initials)}</span>
    <span class="brand-text"><span class="brand-name">${esc(S.name)}</span>
    <span class="brand-sub">${esc(S.award)} · ${esc(S.level)}</span></span></a>
  <nav class="nav-links" id="navLinks">${nav}<a class="nav-link" href="${D.EVAL_LINK.url}" target="_blank" rel="noopener">${esc(D.EVAL_LINK.short)}</a></nav>
  <button class="nav-toggle" id="navToggle" type="button" aria-label="เปิดเมนู">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
  </button>
</div></header>
<div class="progress" id="progress" style="width:0"></div>
<nav class="nav-drawer" id="drawer" hidden>${navFull}<a class="nav-link" href="${D.EVAL_LINK.url}" target="_blank" rel="noopener">${esc(D.EVAL_LINK.label)}</a></nav>

<main id="view"></main>

<footer class="foot"><div class="wrap">
  <div class="foot-grid">
    <div><h4>${esc(S.name)}</h4>
      <p class="foot-address">${esc(S.address)}</p>
      <p class="foot-contact">โทรศัพท์ ${esc(S.phone)}<br/>อีเมล ${esc(S.email)}<br/>เว็บไซต์ ${esc(S.website)}</p></div>
    <div><h4>เนื้อหาการประเมิน</h4><ul>
      ${D.NAV_ITEMS.filter(i => i.path !== '/').map(i => `<li><a href="#${i.path.slice(1)}">${esc(i.label)}</a></li>`).join('')}
    </ul></div>
    <div><h4>สังกัด</h4><ul>
      <li>${esc(S.area)}</li><li>${esc(S.affiliation)}</li>
      <li class="foot-award">${esc(S.award)}<br/>${esc(S.level)} ${esc(S.academicYear)}</li>
    </ul></div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear() + 543} ${esc(S.name)} — เอกสารประกอบการประเมินสถานศึกษาเพื่อรับรางวัลพระราชทาน</span>
    <span>${esc(S.philosophy)}</span>
  </div>
</div></footer>

<button class="to-top" id="toTop" type="button" aria-label="กลับขึ้นด้านบน">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>

<script>
const PAGES = ${JSON.stringify(pages)};
const view = document.getElementById('view');
const drawer = document.getElementById('drawer');
let io = null;

function activate(root){
  // ติดคลาสแอนิเมชันแล้วสังเกตการณ์ด้วย IntersectionObserver (ลื่นบน Safari/iPadOS)
  root.querySelectorAll('[class-reveal]').forEach(el=>{
    el.classList.add(el.getAttribute('class-reveal'));
    el.removeAttribute('class-reveal');
  });
  if(io) io.disconnect();
  io = new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target);} });
  },{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  root.querySelectorAll('.reveal,.reveal-l,.reveal-r,.reveal-z,.chart-card,.table-scroll').forEach(el=>io.observe(el));

  // นับตัวเลขขึ้น
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('.cu').forEach(el=>{
    const target = parseFloat(el.dataset.target||'0'), dec = parseInt(el.dataset.dec||'0',10);
    const fmt = v => v.toLocaleString('th-TH',{minimumFractionDigits:dec,maximumFractionDigits:dec});
    if(reduced){ el.textContent = fmt(target); return; }
    const ob = new IntersectionObserver(es=>{
      if(es.some(e=>e.isIntersecting)){
        ob.disconnect();
        const t0 = performance.now(), dur = 1400;
        const tick = now => {
          const p = Math.min(1,(now-t0)/dur), e = 1-Math.pow(1-p,3);
          el.textContent = fmt(target*e);
          if(p<1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },{threshold:0.3});
    ob.observe(el);
  });
}

function route(){
  const id = (location.hash||'#home').slice(1);
  const page = PAGES[id] ? id : 'home';
  view.innerHTML = PAGES[page];
  document.querySelectorAll('.nav-link').forEach(a=>
    a.classList.toggle('is-active', a.dataset.page === page));
  drawer.hidden = true;
  window.scrollTo(0,0);
  activate(view);
  awF = { level: '', cat: '' };
  awApply();
  const bc = document.getElementById('bcRoot');
  if (bc) initBanchuen(bc, BC_STEPS);
  const sw = document.getElementById('swRoot');
  if (sw) initSmartWheel(sw, SW_ITEMS);
}

document.getElementById('navToggle').addEventListener('click',()=>{ drawer.hidden = !drawer.hidden; });
window.addEventListener('hashchange', route);
window.addEventListener('scroll',()=>{
  const y = window.scrollY||0, doc = document.documentElement;
  document.getElementById('nav').classList.toggle('is-scrolled', y>12);
  const max = doc.scrollHeight - doc.clientHeight;
  document.getElementById('progress').style.width = (max>0 ? Math.min(100,(y/max)*100) : 0) + '%';
  document.getElementById('toTop').classList.toggle('is-on', y>600);
},{passive:true});
document.getElementById('toTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// สลับวิชาของกราฟ O-NET
document.addEventListener('click', e => {
  const btn = e.target.closest('.onet-tab');
  if(!btn) return;
  const id = btn.dataset.onet, idx = btn.dataset.idx;
  document.querySelectorAll('.onet-tab[data-onet="'+id+'"]').forEach(b=>{
    const on = b.dataset.idx === idx;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('.onet-panel[data-onet-panel="'+id+'"]').forEach(p=>{
    const on = p.dataset.idx === idx;
    p.hidden = !on;
    // กราฟที่เพิ่งถูกแสดงต้องเล่นแอนิเมชันทันที ไม่ต้องรอเลื่อนหน้า
    if(on) p.querySelectorAll('.chart-card').forEach(c=>c.classList.add('is-in'));
  });
});


// ---------- โมเดลสามมิติ BANCHUEN ----------
const BC_STEPS = ${JSON.stringify(BANCHUEN_STEPS)};
const initBanchuen = ${initBanchuen.toString()};

// ---------- วงล้อ SMART Student ----------
const SW_ITEMS = ${JSON.stringify(WHEEL_ITEMS)};
const initSmartWheel = ${initSmartWheel.toString()};


// ---------- แตะชื่อเส้นเพื่อเน้นเส้นนั้นในกราฟเส้น ----------
document.addEventListener('click', e => {
  const btn = e.target.closest('.chart-legend .legend-item');
  if(!btn) return;
  const card = btn.closest('.chart-card');
  const legend = btn.closest('.chart-legend');
  const showAll = legend.dataset.focus === 'values';
  const si = btn.dataset.si;
  const on = !btn.classList.contains('is-on');
  legend.querySelectorAll('.legend-item').forEach(b=>{
    b.classList.toggle('is-on', on && b.dataset.si === si);
    b.classList.toggle('is-off', on && b.dataset.si !== si);
    b.setAttribute('aria-pressed', String(on && b.dataset.si === si));
  });
  card.querySelectorAll('.series-halo').forEach(h=>{
    h.classList.toggle('is-dim', on && h.dataset.si !== si);
  });
  card.querySelectorAll('.series').forEach(g=>{
    const me = g.dataset.si === si;
    g.classList.toggle('is-dim', on && !me);
    g.classList.toggle('is-focus', on && me);
    // SVG element ไม่รองรับ property .hidden ต้องสั่งผ่าน attribute โดยตรง
    g.querySelectorAll('.axis-text.val').forEach(t=>{
      if(showAll || (on && me)) t.removeAttribute('hidden'); else t.setAttribute('hidden','');
    });
  });
});


// ---------- ตัวกรองรางวัล + ดูรูปขนาดเต็ม ----------
let awF = { level: '', cat: '' };
function awApply(){
  const grid=document.getElementById('awGrid'); if(!grid) return;
  let n=0, total=0;
  grid.querySelectorAll('.award-card').forEach(c=>{
    total++;
    const ok=(!awF.level||c.dataset.level===awF.level)&&(!awF.cat||c.dataset.cat===awF.cat);
    c.hidden=!ok; if(ok){ n++; c.classList.add('is-in'); }
  });
  document.getElementById('awCount').textContent='แสดง '+n+' จาก '+total+' รางวัล';
  document.getElementById('awEmpty').hidden=n>0;
  document.getElementById('awClear').hidden=!(awF.level||awF.cat);
  document.querySelectorAll('.fchip').forEach(b=>
    b.classList.toggle('is-on', awF[b.dataset.f==='level'?'level':'cat']===b.dataset.v));
}
document.addEventListener('click', e=>{
  const f=e.target.closest('.fchip');
  if(f){ const k=f.dataset.f==='level'?'level':'cat';
         awF[k]= awF[k]===f.dataset.v ? '' : f.dataset.v; awApply(); return; }
  if(e.target.closest('#awClear')){ awF={level:'',cat:''}; awApply(); return; }

  const g=e.target.closest('.gal-btn');
  if(g){
    const img=g.querySelector('img');
    const box=document.createElement('div');
    box.className='gal-lightbox';
    box.innerHTML='<button type="button" class="gal-close" aria-label="ปิด">✕</button>'
                + '<img src="'+img.getAttribute('src')+'" alt=""/>'
                + '<p class="gal-lb-cap">'+(img.getAttribute('alt')||'')+'</p>';
    box.addEventListener('click', ()=>box.remove());
    document.body.appendChild(box);
    return;
  }

  const ph=e.target.closest('.award-photo');
  if(ph){
    const box=document.createElement('div');
    box.className='lightbox';
    box.innerHTML='<button type="button" class="lightbox-close" aria-label="ปิด">✕</button>'
                + '<img src="'+ph.dataset.full+'" alt=""/>';
    box.addEventListener('click', ev=>{ if(ev.target.tagName!=='IMG') box.remove(); });
    document.body.appendChild(box);
  }
});

route();
</script>
</body></html>`;

  await writeFile(path.join(root, 'preview.html'), html, 'utf8');
  await rm(tmp, { recursive: true, force: true }).catch(() => {});
  console.log('สร้าง preview.html สำเร็จ — ขนาด', (Buffer.byteLength(html) / 1024).toFixed(0), 'KB');
}

main().catch(e => { console.error(e); process.exit(1); });
