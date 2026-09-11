/**
 * SMART Student — วงล้อ ACTIVITY (โต้ตอบได้)
 * TypeScript ล้วน ไม่พึ่ง Angular เพื่อให้เว็บแอปจริงและ preview.html ใช้โค้ดชุดเดียวกัน
 */

export interface WheelItem {
  letter: string; title: string; detail: string;
  x: number; y: number; light: boolean;
}

/* ตำแหน่ง x, y คำนวณจากมุมกึ่งกลางของแต่ละเสี้ยว (8 เสี้ยว เสี้ยวละ 45 องศา)
   จึงตรงกับสีพื้นวงล้อเสมอ ไม่ต้องกะตำแหน่งเอง */
export const WHEEL_ITEMS: WheelItem[] = [
  { letter: 'A', title: 'Activity Based', detail: 'เรียนรู้ผ่านการลงมือทำ ทดลอง ตั้งคำถาม และสะท้อนสิ่งที่ค้นพบจากกิจกรรมจริง', x: 16.00, y: 50.00, light: false },
  { letter: 'C', title: 'Core Competency', detail: 'พัฒนาสมรรถนะหลักที่ช่วยให้ผู้เรียนประยุกต์ความรู้และทักษะได้อย่างมีความหมาย', x: 25.96, y: 25.96, light: true },
  { letter: 'T', title: 'Technology', detail: 'เลือกใช้เทคโนโลยีอย่างรู้เท่าทัน สร้างสรรค์ และปลอดภัย เพื่อขยายโอกาสในการเรียนรู้', x: 50.00, y: 16.00, light: false },
  { letter: 'I', title: 'Innovation', detail: 'มองหาแนวคิดใหม่ สร้างทางเลือก และพัฒนาวิธีแก้ปัญหาที่ตอบโจทย์ผู้เรียน', x: 74.04, y: 25.96, light: true },
  { letter: 'V', title: 'Valuable Resources', detail: 'ใช้ทรัพยากรและแหล่งเรียนรู้ที่มีคุณค่าอย่างคุ้มค่า เพื่อสร้างผลลัพธ์ที่ยั่งยืน', x: 84.00, y: 50.00, light: false },
  { letter: 'I', title: 'Intelligence', detail: 'คิดวิเคราะห์ เชื่อมโยงข้อมูล และตัดสินใจอย่างมีเหตุผลในสถานการณ์ที่หลากหลาย', x: 74.04, y: 74.04, light: true },
  { letter: 'T', title: 'Transferable Skills', detail: 'ฝึกทักษะที่นำไปใช้ได้ข้ามวิชา ข้ามบริบท และต่อยอดสู่ชีวิตจริง', x: 50.00, y: 84.00, light: false },
  { letter: 'Y', title: 'Yield Outcome', detail: 'มุ่งสร้างผลลัพธ์ของการเรียนรู้ที่จับต้องได้และนำไปต่อยอดได้', x: 25.96, y: 74.04, light: true }
];

const piece = (it: WheelItem, i: number): string => `
  <button type="button" class="sw-piece${it.light ? ' is-light' : ''}" data-i="${i}"
    style="left:${it.x}%;top:${it.y}%"
    aria-label="${it.letter} — ${it.title}">
    <span class="sw-letter">${it.letter}</span>
    <span class="sw-name">${it.title}</span>
  </button>`;

export function smartWheelHtml(items: WheelItem[], hubLabel: string, hubTitle: string, hubSubtitle = '', theme = ''): string {
return `
<div class="sw-layout${theme ? ` sw-theme-${theme}` : ''}">
  <div class="sw-diagram">
    <svg class="sw-cycle" viewBox="0 0 600 600" aria-hidden="true">
      <path d="M68 322A232 232 0 0 1 278 68" />
      <path d="M322 68A232 232 0 0 1 532 278" />
      <path d="M532 322A232 232 0 0 1 322 532" />
      <path d="M278 532A232 232 0 0 1 68 322" />
      <text x="127" y="127" transform="rotate(-45 127 127)">PLAN</text>
      <text x="473" y="127" transform="rotate(45 473 127)">DO</text>
      <text x="473" y="473" transform="rotate(-45 473 473)">CHECK</text>
      <text x="127" y="473" transform="rotate(45 127 473)">ACTION</text>
    </svg>

    <div class="sw-wheel">
      <div class="sw-hub">
        <span>${hubLabel}</span>
        <strong>${hubTitle}</strong>
        ${hubSubtitle ? `<small>${hubSubtitle}</small>` : ''}
      </div>
      ${items.map(piece).join('')}
    </div>
  </div>

  <aside class="sw-detail" aria-live="polite">
    <p class="sw-detail-label">องค์ประกอบที่เลือก</p>
    <h4 class="sw-detail-title">Activity Based</h4>
    <p class="sw-detail-text">เรียนรู้ผ่านการลงมือทำ ทดลอง ตั้งคำถาม และสะท้อนสิ่งที่ค้นพบจากกิจกรรมจริง</p>
    <span class="sw-detail-key">A — Activity Based</span>
    <p class="sw-hint">แตะตัวอักษรบนวงล้อเพื่อดูความหมายของแต่ละองค์ประกอบ</p>
  </aside>
</div>`;
}

export const SMART_WHEEL_HTML = smartWheelHtml(WHEEL_ITEMS, 'SMART', 'Student');

export function initSmartWheel(root: HTMLElement, items: WheelItem[]): void {
  const pieces = Array.from(root.querySelectorAll<HTMLElement>('.sw-piece'));
  const t = root.querySelector('.sw-detail-title') as HTMLElement;
  const d = root.querySelector('.sw-detail-text') as HTMLElement;
  const k = root.querySelector('.sw-detail-key') as HTMLElement;

  const select = (i: number) => {
    const it = items[i];
    pieces.forEach(p => p.classList.toggle('is-on', Number(p.dataset['i']) === i));
    t.textContent = it.title;
    d.textContent = it.detail;
    k.textContent = `${it.letter} — ${it.title}`;
  };

  pieces.forEach(p => p.addEventListener('click', () => select(Number(p.dataset['i']))));
  select(0);
}
