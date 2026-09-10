# CLAUDE.md — คู่มือสำหรับ AI ที่เข้ามาทำงานต่อในโปรเจกต์นี้

อ่านไฟล์นี้ให้จบก่อนแก้โค้ด จะประหยัดเวลาและกันพลาดซ้ำรอยเดิม

---

## 1. โปรเจกต์นี้คืออะไร

เว็บนำเสนอข้อมูล **โรงเรียนสันทรายวิทยาคม** เพื่อขอรับ **รางวัลพระราชทาน**
ระดับมัธยมศึกษาขนาดใหญ่ ปีการศึกษา 2569

- **ผู้ใช้จริงคือคณะกรรมการประเมิน ที่เปิดดูบน iPad** ทั้งแนวตั้งและแนวนอน
  ทุกการตัดสินใจด้าน UI ต้องยึดข้อนี้เป็นหลัก
- เนื้อหามาจากเอกสาร PDF 5 เล่ม (ด้านที่ 1–5) และ `แบบประเมิน.pdf`
  ที่กำหนดน้ำหนักคะแนน: ด้าน 1 = 3 คะแนน · ด้าน 2, 3, 4 = 2 คะแนน · ด้าน 5 = 1 คะแนน
- **ห้ามแต่งเนื้อหาขึ้นเอง** เป็นเอกสารประกอบการประเมินจริง
  ถ้าหาข้อมูลในเล่มไม่เจอ ให้แจ้งผู้ใช้ตรง ๆ ว่าไม่มี อย่าเดา

---

## 2. เทคโนโลยีและโครงสร้าง

**Angular 19 · Standalone Components · ไม่มี state management library · ไม่มี HTTP**
ข้อมูลทั้งหมดเป็นค่าคงที่ใน TypeScript

```
src/
  index.html            โหลดฟอนต์ Sarabun จาก Google Fonts
  styles.css            ระบบดีไซน์ทั้งหมด (ตัวแปรสี, .card, .chip, .tbl, .steps, .reveal*)
  app/
    app.routes.ts       lazy route ทุกหน้า
    core/models.ts      Kpi, CycleStep, TableRow, LineSeries, BarSeries, MeterRow, CHART_PALETTE
    data/               ← แก้เนื้อหาที่นี่ที่เดียว
      school.data.ts        ข้อมูลโรงเรียน, NAV_ITEMS, DIMENSIONS, EVAL_LINK
      dimension1..5.data.ts เนื้อหาแต่ละด้าน + indicators ตามแบบประเมิน
      awards.data.ts        รางวัลนักเรียน 36 + ครู 4
      gallery.data.ts       ภาพกิจกรรม 74 รูป พร้อมคำบรรยาย
    pages/              home, dimension1–5, awards
    shared/             คอมโพเนนต์ที่ใช้ซ้ำ (ดูข้อ 4)
public/
  gallery/d1..d5/       ภาพกิจกรรม
  awards/students|teachers/  ภาพรางวัล
  video/                วิดีโอพื้นหลัง + poster
  .htaccess _redirects web.config   ตั้งค่า SPA routing สำหรับโฮสต์
tools/build-preview.mjs  สร้าง preview.html (ดูข้อ 6 — สำคัญมาก)
```

---

## 3. กฎเหล็กที่ต้องรู้ก่อนแก้

1. **ห้ามเขียนคำว่า "PDCA"** ในหน้าเว็บ ให้เรียกว่า "วงจรคุณภาพ" หรือแสดงเป็นขั้นตอน
   (คอมโพเนนต์ `cycle-flow` มีไว้เพื่อการนี้)
2. **สีประจำโรงเรียนคือน้ำเงิน–ขาว** ใช้ตัวแปร `--navy-*` และ `--gold-*` เท่านั้น
   อย่าใส่สีดิบ ๆ ที่ไม่อยู่ในระบบ
3. **ฟอนต์ Sarabun ทั้งเว็บ** หัวข้อใช้ `font-weight: 800`
   (เคยใช้ Noto Serif Thai แล้วเปลี่ยนออกหมดแล้ว อย่าใส่กลับ)
4. **พื้นที่สัมผัสต้องไม่ต่ำกว่า 44px** ทุกปุ่ม
5. **เอฟเฟกต์ hover ต้องอยู่ใน `@media (hover: hover)` เสมอ** ไม่งั้นค้างบนจอสัมผัส
6. **แอนิเมชันใช้ `transform` และ `opacity` เท่านั้น** และต้องรองรับ `prefers-reduced-motion`
7. **ห้ามรัน `npm audit fix --force`** จะ downgrade Angular CLI แล้วพัง
8. `--nav-h: 68px` คือความสูง navbar ใช้ในการคำนวณ `scroll-padding-top` และ sticky

---

## 4. คอมโพเนนต์ที่ใช้ซ้ำ

| คอมโพเนนต์ | หน้าที่ | หมายเหตุ |
|---|---|---|
| `page-hero` | หัวหน้าของแต่ละด้าน | หน้ารางวัลไม่ได้ใช้ตัวนี้ เขียน `<header>` เอง |
| `section-header` | หัวข้อ + เลขข้อ + คำนำ | มี `[light]="true"` สำหรับวางบนภาพ/วิดีโอ |
| `kpi-grid` `data-table` `callout` `pager` `meter-list` | พื้นฐาน | |
| `line-chart` `bar-chart` | กราฟ SVG เขียนเอง ไม่มีไลบรารี | แตะชื่อเส้นเพื่อเน้นเส้นนั้นได้ |
| `onet-chart` | กราฟ O-NET เลือกดูรายวิชา | |
| `cycle-flow` | วงจรคุณภาพ (ต้องมีฟิลด์ `step`) | |
| `photo-gallery` | แกลเลอรีภาพ + ดูขนาดเต็ม | มี `[light]` |
| `banchuen-model` | โมเดลบริหาร 3 มิติ ด้านที่ 3 | โครงสร้างอยู่ใน `banchuen.markup.ts` |
| `smart-wheel` | วงล้อ SMART Student ด้านที่ 2 | โครงสร้างอยู่ใน `smart-wheel.markup.ts` |
| `awards-preview` | ตัวอย่างรางวัล + ปุ่มไปหน้ารางวัล | ใช้ซ้ำได้ทุกหน้า ดูข้อ 5 |
| `home-fab` | ปุ่มกลับหน้าแรกแบบลอย | ใส่ครบทั้ง 5 ด้านแล้ว |

**ไฟล์ `*.markup.ts`** (banchuen, smart-wheel) เป็น TypeScript ล้วนที่ไม่พึ่ง Angular
เพราะ **ทั้งเว็บแอปจริงและ `preview.html` ใช้โค้ดชุดเดียวกัน** แก้ที่นี่ที่เดียวได้ทั้งสองที่
คอมโพเนนต์ Angular จะ `innerHTML` แล้วเรียก `init*()` และต้องใช้ `ViewEncapsulation.None`
(เพราะ DOM ถูกสร้างทีหลัง สไตล์แบบ scoped จะไม่ติด) จึงตั้งชื่อคลาสขึ้นต้นด้วย `bc-` / `sw-`

---

## 5. รูปแบบการนำเสนอของแต่ละหน้า (ต่างกันโดยตั้งใจ)

- **หน้าแรก** — ปกเต็มจอ สไลด์ภาพ 5 ภาพตรึงจอ + สารบัญการ์ด 7 ใบ ไม่มีข้อมูลอื่น
- **ด้านที่ 1** — **แท็บ + กริดการ์ด 16 ตัวชี้วัด** กดการ์ดแล้วแสดงเนื้อหาเต็มหน้า
  มีปุ่มกลับสารบัญลอย และปุ่มข้อก่อนหน้า/ถัดไป · พื้นหลังวิดีโอ `school.mp4`
  state เก็บใน `open` signal และรับค่าจาก query param `?t=1.1.8` เพื่อเปิดหัวข้อเดิมตอนกลับมา
- **ด้านที่ 2** — **แอคคอร์เดียน 4 หัวข้อ** (2.1–2.4) เปิดพร้อมกันได้หลายอัน เริ่มต้นปิดหมด
  มีปุ่มนำทางลอย 4 ปุ่มข้ามหัวข้อ · พื้นหลังวิดีโอ `school-center.mp4`
- **ด้านที่ 3, 4, 5** — ยังเป็นหน้ายาวเลื่อนอ่านแบบเดิม
- **หน้ารางวัล** — รางเลื่อนแนวนอน (scroll-snap) + ตัวกรองระดับ/หมวด
  ตัวนับของตัวกรองสองแถวปรับตามกันเอง · การ์ดไล่ระดับความเด่นตามระดับรางวัล

### การส่งต่อระหว่างหน้า (awards-preview)
```html
<app-awards-preview [count]="4" from="/dimension-1" topic="1.1.8" [light]="true" />
```
`from` + `topic` ถูกส่งเป็น query param ไปหน้ารางวัล → ปุ่มย้อนกลับพากลับมาเปิดหัวข้อเดิม

---

## 6. `preview.html` — เรื่องที่พลาดกันบ่อยที่สุด

`tools/build-preview.mjs` สร้างไฟล์ **HTML ไฟล์เดียวที่เปิดได้โดยไม่ต้อง build**
มีไว้ให้ผู้ใช้ดูผลงานได้ทันที และให้ AI ตรวจหน้าตาด้วย Playwright ได้

**สั่งสร้างใหม่ทุกครั้งที่แก้ data หรือ CSS:**
```bash
node tools/build-preview.mjs
```

ข้อควรรู้:
- โหลดไฟล์ `src/app/data/*.data.ts` **โดยตรง** (Node 22 อ่าน .ts ได้) จึงห้ามใช้ syntax
  ที่ลบ type ออกแล้วพัง เช่น enum หรือ parameter property
- รวม CSS ของทุกคอมโพเนนต์เข้าด้วยกัน **แปลง `:host` เป็น `body`**
  ดังนั้นกฎที่เขียนว่า `:host ::ng-deep .section { background: transparent }`
  จะกลายเป็น `body ::ng-deep .section` ซึ่งเบราว์เซอร์มองว่าไม่ถูกต้องแล้วข้ามไป — ปลอดภัย
  แต่ถ้าเขียน `:host .x` เฉย ๆ จะกลายเป็น `body .x` ที่ **มีผลทุกหน้าใน preview** ต้องระวัง
- **preview ยังไม่ได้อัปเดตให้ตรงกับหน้าตาใหม่ของด้านที่ 1 และ 2** (แท็บ/แอคคอร์เดียน/วิดีโอ)
  ถ้าจะทำให้ตรงกัน ต้องแก้ `pageDim1()` และ `pageDim2()` ใน build-preview.mjs
- preview อ้างรูปเป็น `public/...` จึงต้องวางไฟล์คู่กับโฟลเดอร์ `public`

---

## 7. สภาพแวดล้อมและวิธีตรวจงาน

### ข้อจำกัดที่เจอจริงและวิธีรับมือ
| ปัญหา | วิธีแก้ |
|---|---|
| `npm` registry ถูกบล็อกในคอนเทนเนอร์ของ AI | ห้ามพยายามติดตั้งแพ็กเกจ ให้ผู้ใช้รันเอง |
| `node_modules` บนเครื่องผู้ใช้เป็น Windows native | `ng build` ผ่าน device_bash (Linux VM) ไม่ได้ |
| `device_bash` ลบไฟล์ในโฟลเดอร์ที่ mount ไม่ได้ | ใช้ `mv` ย้ายเข้าโฟลเดอร์ `_DELETE_ME` แล้วบอกผู้ใช้ให้ลบเอง |
| `unzip -o` ทับไฟล์ในโฟลเดอร์ mount ไม่ได้ | แตกไปที่ `$HOME` ก่อน แล้ว `cp -rf` |

### วิธีตรวจว่าโค้ดคอมไพล์ผ่าน
```bash
npx ngc -p tsconfig.app.json
```
**คำเตือนสำคัญ:** `ngc` ตรวจหลวมกว่า `ng serve` จริง เคยผ่าน ngc แต่ `ng serve` พัง
(กรณี `CycleStep` ขาดฟิลด์ `step`) **ถ้าผู้ใช้เปิด `ng serve` อยู่ ให้ขอผลจากผู้ใช้ยืนยันด้วย**

### วิธีตรวจหน้าตา
เปิด `preview.html` ด้วย Playwright + Chromium ที่ `/opt/pw-browsers`
(Chromium ตัวนี้ **ไม่มี codec H.264** จึงทดสอบวิดีโอไม่ได้ ต้องตรวจสเปกไฟล์ด้วย ffprobe แทน)

---

## 8. เรื่องพื้นหลังวิดีโอ (จุดที่พังบ่อย)

- ชั้นพื้นหลังต้องเป็น `position: fixed; inset: 0; z-index: -1` เลื่อนหน้าแล้ววิดีโอไม่ขยับ
- ต้องมี `autoplay muted loop playsinline` **ครบทั้ง 4 ตัว** ไม่งั้น iOS ไม่เล่น
  และต้องสั่ง `v.muted = true; v.play()` ซ้ำใน event `canplay` เพราะ Chrome บางเครื่องไม่เริ่มเอง
- ต้องมี `poster` เสมอ เผื่อ iPad อยู่ในโหมดประหยัดแบตซึ่งบล็อกการเล่นอัตโนมัติ
- แปลงวิดีโอด้วย ffmpeg บนเครื่องผู้ใช้ (ต้นฉบับเป็น 4K HEVC หลักร้อย MB ใช้ตรง ๆ ไม่ได้):
  ```bash
  ffmpeg -ss 5 -i in.mp4 -t 15 -an -vf "scale=1920:-2,fps=30" \
         -c:v libx264 -crf 27 -preset veryfast -pix_fmt yuv420p -movflags +faststart out.mp4
  ```
- **เมื่อหน้าไหนมีพื้นหลังวิดีโอ ต้องไล่แก้สีตัวอักษรทุกจุดที่ไม่ได้อยู่ในการ์ด**
  ได้แก่ `.sec-title` `.sec-lead` `.steps` `.step-item` `.bullets` `.chip`
  แล้ว**เขียนกฎย้อนกลับให้เป็นสีเข้มเมื่ออยู่ใน `.card` / `.callout`**
  (พลาดจุดนี้มาแล้ว 2 รอบ — ตรวจให้ครบก่อนส่งงาน)

---

## 9. สถานะงานปัจจุบัน

**เสร็จแล้ว** — หน้าแรกแบบสารบัญ · ด้าน 1 แบบการ์ด 16 ตัวชี้วัด · ด้าน 2 แบบแอคคอร์เดียน ·
หน้ารางวัลแบบรางเลื่อน · แกลเลอรี 5 ด้าน · โมเดล BANCHUEN · วงล้อ SMART · วิดีโอพื้นหลัง 2 หน้า

**ค้างอยู่**
1. **ตัวชี้วัด 1.1.6 (ความก้าวหน้าทางการเรียนทุกกลุ่มสาระ) ไม่มีเนื้อหา**
   สาเหตุคือ **เล่มด้านที่ 1 ใส่เลขหัวข้อผิด** — เนื้อหาที่ควรเป็น 1.1.6 กลับเป็น
   "ความมั่นใจในตนเอง" ซึ่งซ้ำกับ 1.2.6 การ์ดข้อนี้จึงตั้ง `ready: false` และกดไม่ได้
   **เรื่องนี้ต้องให้โรงเรียนแก้ที่เอกสารต้นทาง**
2. `preview.html` ยังไม่ตรงกับหน้าตาใหม่ของด้าน 1 และ 2
3. ด้าน 3, 4, 5 ยังไม่ได้ทำเป็นสารบัญแบบด้าน 1 หรือ 2 (ถ้าผู้ใช้สั่งค่อยทำ)

---

## 10. วิธีทำงานกับผู้ใช้คนนี้

- **สื่อสารเป็นภาษาไทย** ตอบกระชับ อธิบายเหตุผลของสิ่งที่แก้ ไม่ใช่แค่บอกว่าแก้แล้ว
- **ผู้ใช้ขอให้ประหยัดโทเค็นเสมอ** อย่าอ่านไฟล์ทั้งไฟล์ถ้า grep พอ
  อย่าทำงานซ้ำ อย่าเดาแล้วลองหลายรอบ
- ผู้ใช้ชอบให้**ถามก่อนถ้าไม่แน่ใจ** และให้เสนอทางเลือกพร้อมข้อดีข้อเสีย
- **แยกข้อมูลออกจากหน้าตาเสมอ** เพราะผู้ใช้เปลี่ยนใจเรื่องดีไซน์บ่อย
  ถ้าข้อมูลอยู่ใน `data/` การเปลี่ยนดีไซน์จะถูกและเร็ว
- ส่งงานโดย zip ไฟล์ที่แก้ → `SendUserFile` → `device_commit_files` ไปที่
  `C:\Users\Admin\Desktop\3\sansai-web` แล้วให้ผู้ใช้รีเฟรช (`ng serve` watch ให้เอง
  ยกเว้นไฟล์ใหม่ใน `public/` ที่ต้องรีสตาร์ต)
- **ใช้ `zip -r` เสมอเมื่อ zip โฟลเดอร์** (เคยลืม แล้วไฟล์ไม่ถูกส่ง)

---

# ภาคผนวก — ข้อมูลอ้างอิงเร็วสำหรับ AI

ส่วนบนคือ "กฎและกับดัก" อ่านให้จบก่อน · ส่วนภาคผนวกนี้คือ "ของที่ต้องเปิดหา"
ไม่ต้องอ่านทั้งหมด ให้ข้ามมาดูเฉพาะหัวข้อที่ตรงกับงานที่จะทำ

---

## ภาคผนวก ก — รูปร่างข้อมูลใน `src/app/data/`

จะเพิ่มหรือแก้เนื้อหา ให้ดูรูปร่างจากตรงนี้ก่อน จะได้ไม่ต้องเปิดอ่านทั้งไฟล์

### ชนิดข้อมูลกลาง (`core/models.ts`)
```ts
Kpi        { value:number; unit?:string; label:string; note?:string; decimals?:number }
CycleStep  { step:string; title:string; text:string; bullets?:string[] }   // step ห้ามลืม!
TableRow   { cells:(string|number)[]; total?:boolean }                     // total=true คือแถวสรุป
LineSeries { name:string; values:number[]; color?:string; dashed?:boolean }
BarSeries  { name:string; values:number[]; color?:string }
MeterRow   { name:string; value:number; display?:string; color?:string }
CHART_PALETTE = [น้ำเงิน, ทอง, น้ำเงินอ่อน, เขียว, ม่วง, แดง]   // 6 สี
```
`values: number[]` ใช้ `null` แทนปีที่ไม่มีข้อมูลได้ (กราฟจะเว้นช่วงให้)

### `dimension1..5.data.ts` — โครงเดียวกันทุกไฟล์
```ts
export const DIM1 = {
  title, lead, kpis: Kpi[],
  section11: { <หัวข้อย่อย>: {...}, ... },   // 1.1 ผลสัมฤทธิ์ทางวิชาการ
  section12: { <หัวข้อย่อย>: {...}, ... },   // 1.2 คุณลักษณะที่พึงประสงค์
  indicators: { '1.1': string[8], '1.2': string[8] }   // ข้อความตัวชี้วัดตามแบบประเมิน
};
```
บล็อกหัวข้อย่อยหนึ่งบล็อกหน้าตาแบบนี้ (ใส่เฉพาะคีย์ที่มีจริง ไม่ต้องครบทุกอัน):
```ts
excellence: {
  title: '1.1.8 ...',          // ต้องขึ้นต้นด้วยเลขข้อ หน้าเว็บดึงไปแยกเป็น .num
  narrative: '...',            // ย่อหน้านำ
  stats:  [{ value, unit, label }],   // → kpi-grid
  rows:   [{ cells: [...] }],         // → data-table
  cycle:  [{ step, title, text }],    // → cycle-flow (4 ขั้น)
  activities: ['...'],                // → .bullets
  conclusion: '...'                   // → callout
}
```
**คีย์ของบล็อกคือชื่ออังกฤษสั้น ๆ** (`onet` `thai` `english` `thinking` `ict`
`pathway` `excellence` / `desired` `election` `health` `environment` `teamwork`
`thaiPride` `confidence` `safety`) ส่วน**เลขข้อ 1.1.x อยู่ในสตริง `title`**
การจับคู่การ์ดกับบล็อกอยู่ในอาร์เรย์ `topics` ของ `dimension1.component.ts`

### `awards.data.ts`
```ts
StudentAward { name, award, detail,
               level: 'ระดับนานาชาติ'|'ระดับชาติ'|'ระดับภูมิภาค',
               category: string,        // ใช้เป็นปุ่มกรอง สร้างหมวดใหม่ได้โดยพิมพ์ชื่อใหม่
               photos: string[] }       // path เริ่มจาก public/ เช่น 'awards/students/aw1-1.jpg'
TeacherAward { name, role, award, detail, photos }
STUDENT_AWARDS (36 รายการ) · TEACHER_AWARDS (4 รายการ)
```
ลำดับการเรียงในหน้าเว็บมาจากลำดับของ `level` ไม่ใช่ลำดับในอาร์เรย์

### `gallery.data.ts`
```ts
GalleryPhoto { src, caption }
GALLERY: { d1: [...], d2: [...], d3: [...], d4: [...], d5: [...] }   // รวม 74 รูป
```
`src` = `gallery/dN/gNN.jpg` ไฟล์จริงอยู่ `public/gallery/dN/`
**เปลี่ยนรูปให้เปลี่ยนไฟล์ในโฟลเดอร์ อย่าเปลี่ยนแค่คำบรรยาย** เพราะภาพกับคำบรรยาย
ถูกจับคู่จากพิกัดจริงในหน้า PDF ต้นฉบับ ถ้าสลับกันจะกลายเป็นข้อมูลผิด

### `school.data.ts`
`SCHOOL` (ชื่อ ที่อยู่ ตัวเลขพื้นฐาน) · `NAV_ITEMS` (เมนู navbar) ·
`DIMENSIONS` (การ์ดสารบัญหน้าแรก + น้ำหนักคะแนน) · `EVAL_LINK` (ลิงก์เลือกอาหารและการแสดง)

---

## ภาคผนวก ข — โทเคนดีไซน์ใน `src/styles.css`

**อย่าเขียนสีดิบ ๆ ใช้ตัวแปรเหล่านี้เท่านั้น**

| กลุ่ม | ตัวแปร |
|---|---|
| น้ำเงิน | `--navy-950 #08152f` · `900 #0d2149` · `800 #132f63` · `700 #183d80` · `600 #1e4d9e` (สีหลัก) · `500 #2c66bd` · `400 #4f88d4` · `300` · `200` · `100` · `50 #eef4fc` |
| ทอง | `--gold-400 #e8c46a` · `--gold-500 #d4a537` (สีเน้น) · `--gold-600 #b3862a` |
| ตัวอักษร | `--ink #16233c` · `--ink-soft #43536f` · `--ink-mute #6b7a94` |
| พื้น/เส้น | `--paper #fff` · `--paper-alt #f5f8fd` · `--line #dfe7f2` |
| รูปทรง | `--radius 18px` · `--radius-sm 12px` · `--shadow-sm/md/lg` |
| อื่น ๆ | `--nav-h 68px` (จอเล็กเหลือ 64px) · `--ease cubic-bezier(.22,.78,.3,1)` |

**คลาสร่วมที่มีอยู่แล้ว — ใช้ซ้ำ อย่าเขียน CSS ใหม่ทับ**
```
เลย์เอาต์   .wrap (1180px) .wrap-wide (1400px) .section .section-tight .section-alt
            .stack .grid .grid-2 .grid-3 .grid-4
หัวข้อ      .sec-head .sec-kicker .sec-title (.num) .sec-lead .sec-rule
การ์ด       .card .card-hover .card-title .card-body .card-accent (น้ำเงิน) .card-gold (ทอง)
ป้าย        .chip .chip-gold .chip-row
ตาราง       .table-scroll .tbl  · .up (เขียว) .down (แดง)
กราฟ        .chart-card .chart-head .chart-title .chart-sub .chart-legend .legend-item
            .legend-swatch(.dot) .chart-svg .chart-note .axis-line .axis-text(.b) .grid-line
ไทม์ไลน์    .steps .step-item (h4/p) .step-no
```
ขนาดตัวอักษรถูกขยายมาแล้วรอบหนึ่งเพื่อ iPad (`.card-body 18.5px` `.sec-title clamp(24.5→33.5px)`)
**ถ้าจะเพิ่มขนาด ให้เพิ่มที่ `styles.css` จุดเดียว อย่าไปใส่ทีละคอมโพเนนต์**

---

## ภาคผนวก ค — คำสั่งที่ใช้บ่อย

```bash
# สร้าง preview.html ใหม่ (ทำทุกครั้งที่แก้ data หรือ CSS)
node tools/build-preview.mjs

# ตรวจว่าคอมไพล์ผ่าน (หลวมกว่า ng serve — ดูคำเตือนข้อ 7)
npx ngc -p tsconfig.app.json

# ส่งงานให้ผู้ใช้ (zip -r เสมอ!)
zip -r /mnt/user-data/outputs/patch.zip src/app/pages/dimension1 src/app/shared/awards-preview
# → SendUserFile → device_commit_files ไป C:\Users\Admin\Desktop\3\sansai-web

# แปลงวิดีโอพื้นหลัง (รันบนเครื่องผู้ใช้เท่านั้น ต้นฉบับ 4K HEVC หลักร้อย MB)
ffmpeg -ss 5 -i in.mp4 -t 15 -an -vf "scale=1920:-2,fps=30" \
       -c:v libx264 -crf 27 -preset veryfast -pix_fmt yuv420p -movflags +faststart out.mp4
ffmpeg -ss 6 -i out.mp4 -frames:v 1 -q:v 3 out-poster.jpg     # poster ห้ามลืม

# ตรวจสเปกวิดีโอ (Chromium ในคอนเทนเนอร์ไม่มี codec H.264 เล่นทดสอบไม่ได้)
ffprobe -v error -show_entries stream=codec_name,width,height,pix_fmt -of default=nk=1 out.mp4

# ขุดข้อมูลจาก PDF ต้นฉบับ
pdftotext -layout -f 12 -l 20 "ด้านที่ 1.pdf" -      # อ่านข้อความตามหน้า
pdfimages -list "ด้านที่ 1.pdf" | head               # ดูรายการภาพ
pdftohtml -xml -f 30 -l 30 "ด้านที่ 1.pdf" out.xml   # ได้พิกัดจริง ใช้จับคู่ภาพกับคำบรรยาย
```

---

## ภาคผนวก ง — สูตรทำงานที่เจอบ่อย

### 1) เพิ่มเนื้อหาให้ตัวชี้วัดที่ยังว่าง (เช่น 1.1.6)
1. หาเนื้อหาในเล่ม PDF ด้วย `pdftotext -layout` **ถ้าไม่มีจริง ให้บอกผู้ใช้ อย่าแต่ง**
2. เพิ่มบล็อกใหม่ใน `section11`/`section12` ของ `dimensionN.data.ts` ตามรูปร่างในภาคผนวก ก
3. แก้อาร์เรย์ `topics` ใน `dimensionN.component.ts` → เปลี่ยน `ready: false` เป็น `true` และลบ `note`
4. เพิ่มบล็อกแสดงผลใน `.html` โดย `@if (open() === '1.1.6') { ... }`
5. `npx ngc` → `node tools/build-preview.mjs` → zip ส่ง

### 2) เปลี่ยน/เพิ่มภาพในแกลเลอรี
วางไฟล์ที่ `public/gallery/dN/` → เพิ่มบรรทัดใน `GALLERY.dN`
**ไฟล์ใหม่ใน `public/` ต้องให้ผู้ใช้รีสตาร์ต `ng serve`** (watch ไม่จับไฟล์ใหม่ใน public)

### 3) เพิ่มกราฟ
เตรียมข้อมูลเป็น `LineSeries[]` / `BarSeries[]` ในไฟล์ `.component.ts` (ไม่ใช่ใน data ถ้าเป็นแค่รูปแบบการแสดงผล)
แล้ววาง `<app-line-chart [series]="x" [labels]="y" [height]="260" title="..." />`
สีให้ดึงจาก `CHART_PALETTE` **ถ้ามีมากกว่า 5 เส้น ต้องกำหนดจานสีเอง** (เคยพลาด ม.6 สีซ้ำ ม.1)

### 4) แปะตัวอย่างรางวัลในหน้าอื่น
```html
<app-awards-preview [count]="4" from="/dimension-3" topic="3.1.2" [light]="true" />
```
`light` ใช้เมื่อวางบนพื้นหลังวิดีโอ/ภาพ · ปุ่มย้อนกลับในหน้ารางวัลจะพากลับมาที่ `from` + เปิดหัวข้อ `topic` ให้เอง
ถ้าเพิ่มหน้าใหม่ ต้องเพิ่มชื่อหน้าในแมป `pageNames` ของ `awards.component.ts` ด้วย ไม่งั้นปุ่มจะไม่มีชื่อ

### 5) เปลี่ยนหน้าด้าน 3/4/5 ให้เป็นสารบัญ
ลอกโครงจากด้าน 1 (แท็บ+การ์ด) หรือด้าน 2 (แอคคอร์เดียน) ทั้ง `.ts/.html/.css`
แล้ว**ไล่เช็กสีตัวอักษรตามเช็กลิสต์ข้อ 8 ทุกครั้งถ้าใส่พื้นหลังวิดีโอ**

### 6) ก่อนส่งงานทุกครั้ง — เช็กลิสต์สั้น
- [ ] `npx ngc` ผ่าน (และถ้าผู้ใช้เปิด `ng serve` อยู่ ขอผลยืนยันจากผู้ใช้)
- [ ] `node tools/build-preview.mjs` ผ่าน
- [ ] ตัวอักษรบนพื้นหลังวิดีโออ่านออกครบทุกจุด (`.steps` `.bullets` `.chip` `.sec-*`)
- [ ] ปุ่มทุกปุ่มสูง ≥ 44px · hover อยู่ใน `@media (hover: hover)`
- [ ] `zip -r` ไม่ใช่ `zip`
- [ ] ไม่มีคำว่า PDCA · ไม่มีเนื้อหาที่แต่งขึ้นเอง
