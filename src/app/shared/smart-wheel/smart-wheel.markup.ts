/**
 * SMART Student — วงล้อ ACTIVITY (โต้ตอบได้)
 * TypeScript ล้วน ไม่พึ่ง Angular เพื่อให้เว็บแอปจริงและ preview.html ใช้โค้ดชุดเดียวกัน
 */

export interface WheelEvidence {
  src: string;
  caption: string;
}

export interface WheelItem {
  letter: string; title: string; thaiTitle?: string; detail?: string;
  x: number; y: number; light: boolean;
  evidence?: WheelEvidence[];
  /** true = ภาพเรียงตามลำดับกระบวนการ (มีลูกศร) · false = แกลเลอรีภาพกิจกรรม · ไม่ระบุ = true */
  evidenceProcess?: boolean;
}

/* ตำแหน่ง x, y คำนวณจากมุมกึ่งกลางของแต่ละเสี้ยว (8 เสี้ยว เสี้ยวละ 45 องศา)
   จึงตรงกับสีพื้นวงล้อเสมอ ไม่ต้องกะตำแหน่งเอง */
export const WHEEL_ITEMS: WheelItem[] = [
  {
    letter: 'A', title: 'Activity Based', detail: 'เรียนรู้ผ่านการลงมือทำ ทดลอง ตั้งคำถาม และสะท้อนสิ่งที่ค้นพบจากกิจกรรมจริง',
    x: 16.00, y: 50.00, light: false, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/a-activity-based/01.jpg', caption: 'กิจกรรมฐานเรียนรู้เรื่องแสงและสี ผู้เรียนลงมือสำรวจด้วยตนเอง' },
      { src: '/evidence/activity-model/a-activity-based/02.jpg', caption: 'กิจกรรมกีฬาวอลเลย์บอล ฝึกทักษะผ่านการปฏิบัติจริง' },
      { src: '/evidence/activity-model/a-activity-based/03.jpg', caption: 'กิจกรรมออกแบบและสร้างชิ้นงานร่วมกันเป็นทีม' },
      { src: '/evidence/activity-model/a-activity-based/04.jpg', caption: 'ฝึกปฏิบัติการช่วยฟื้นคืนชีพ (CPR) กับหุ่นจำลอง' }
    ]
  },
  {
    letter: 'C', title: 'Core Competency', detail: 'พัฒนาสมรรถนะหลักที่ช่วยให้ผู้เรียนประยุกต์ความรู้และทักษะได้อย่างมีความหมาย',
    x: 25.96, y: 25.96, light: true, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/c-core-competency/01.jpg', caption: 'กิจกรรมพัฒนาสมรรถนะการสื่อสารภาษาอังกฤษ (English Communication Competency)' },
      { src: '/evidence/activity-model/c-core-competency/02.jpg', caption: 'กิจกรรมฐานเรียนรู้วิทยาศาสตร์ ฝึกการสังเกตและการคิดวิเคราะห์' },
      { src: '/evidence/activity-model/c-core-competency/03.jpg', caption: 'กิจกรรมสร้างสรรค์ชิ้นงานโมเดล ฝึกการทำงานร่วมกันเป็นทีม' },
      { src: '/evidence/activity-model/c-core-competency/04.jpg', caption: 'กิจกรรมสาธิตและทดลองทางวิทยาศาสตร์ ฝึกสมรรถนะการแก้ปัญหา' }
    ]
  },
  {
    letter: 'T', title: 'Technology', detail: 'เลือกใช้เทคโนโลยีอย่างรู้เท่าทัน สร้างสรรค์ และปลอดภัย เพื่อขยายโอกาสในการเรียนรู้',
    x: 50.00, y: 16.00, light: false, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/t-technology/01.jpg', caption: 'จัดการเรียนรู้ในห้องปฏิบัติการคอมพิวเตอร์ของโรงเรียน' },
      { src: '/evidence/activity-model/t-technology/02.jpg', caption: 'กิจกรรมเรียนรู้เทคโนโลยีดิจิทัลนอกสถานที่ (Digital Token Learning Playground)' },
      { src: '/evidence/activity-model/t-technology/03.jpg', caption: 'ใช้แท็บเล็ตสืบค้นและสร้างสรรค์ผลงานในชั้นเรียน' },
      { src: '/evidence/activity-model/t-technology/04.jpg', caption: 'ใช้เทคโนโลยีบันทึกและสื่อสารกับชาวต่างชาติในกิจกรรมภาคสนาม' }
    ]
  },
  {
    letter: 'I', title: 'Innovation', detail: 'มองหาแนวคิดใหม่ สร้างทางเลือก และพัฒนาวิธีแก้ปัญหาที่ตอบโจทย์ผู้เรียน',
    x: 74.04, y: 25.96, light: true, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/i-innovation/01.jpg', caption: 'กิจกรรมเรียนรู้เรื่องแสงและสีด้วยสื่อที่ครูออกแบบขึ้นเอง' },
      { src: '/evidence/activity-model/i-innovation/02.jpg', caption: 'กิจกรรมทดลองกลางแจ้ง ออกแบบและทดสอบวิธีแก้ปัญหาร่วมกัน' },
      { src: '/evidence/activity-model/i-innovation/03.jpg', caption: 'ผู้เรียนนำเสนอผลงานสร้างสรรค์ที่คิดและทำขึ้นเอง' }
    ]
  },
  {
    letter: 'V', title: 'Valuable Resources', detail: 'ใช้ทรัพยากรและแหล่งเรียนรู้ที่มีคุณค่าอย่างคุ้มค่า เพื่อสร้างผลลัพธ์ที่ยั่งยืน',
    x: 84.00, y: 50.00, light: false, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/v-valuable-resources/01.jpg', caption: 'ศึกษาเรียนรู้จากแหล่งเรียนรู้ภายนอก พิพิธภัณฑ์และนิทรรศการ' },
      { src: '/evidence/activity-model/v-valuable-resources/02.jpg', caption: 'เรียนรู้ดนตรีพื้นบ้านล้านนาจากปราชญ์ชุมชน' },
      { src: '/evidence/activity-model/v-valuable-resources/03.jpg', caption: 'ฝึกปฏิบัติงานอาชีพในห้องปฏิบัติการของโรงเรียน' }
    ]
  },
  {
    letter: 'I', title: 'Intelligence', detail: 'คิดวิเคราะห์ เชื่อมโยงข้อมูล และตัดสินใจอย่างมีเหตุผลในสถานการณ์ที่หลากหลาย',
    x: 74.04, y: 74.04, light: true, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/i-intelligence/01.jpg', caption: 'กิจกรรมบอร์ดเกมเพื่อการเรียนรู้ ฝึกวิเคราะห์ข้อมูลและวางแผน' },
      { src: '/evidence/activity-model/i-intelligence/02.jpg', caption: 'ผลงานศิลปะของผู้เรียนที่สะท้อนการคิดสร้างสรรค์' },
      { src: '/evidence/activity-model/i-intelligence/03.jpg', caption: 'การแสดงบนเวทีของโรงเรียนที่ผู้เรียนร่วมกันออกแบบ' }
    ]
  },
  {
    letter: 'T', title: 'Transferable Skills', detail: 'ฝึกทักษะที่นำไปใช้ได้ข้ามวิชา ข้ามบริบท และต่อยอดสู่ชีวิตจริง',
    x: 50.00, y: 84.00, light: false, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/t-transferable-skills/01.jpg', caption: 'ปฏิบัติการทดลองทางวิทยาศาสตร์ด้วยชุดอุปกรณ์จริง' },
      { src: '/evidence/activity-model/t-transferable-skills/02.jpg', caption: 'นำเสนอผลงานกลุ่มหน้าชั้นเรียน ฝึกทักษะการสื่อสาร' },
      { src: '/evidence/activity-model/t-transferable-skills/03.jpg', caption: 'กิจกรรมค่าย Sansai Summer Camp 2025 นำเสนอผลงานบอร์ดเกม' }
    ]
  },
  {
    letter: 'Y', title: 'Yield Outcome', detail: 'มุ่งสร้างผลลัพธ์ของการเรียนรู้ที่จับต้องได้และนำไปต่อยอดได้',
    x: 25.96, y: 74.04, light: true, evidenceProcess: false,
    evidence: [
      { src: '/evidence/activity-model/y-yield-outcome/01.jpg', caption: 'กิจกรรมกลุ่มสัมพันธ์ ฝึกการทำงานร่วมกับผู้อื่น' },
      { src: '/evidence/activity-model/y-yield-outcome/02.jpg', caption: 'ใช้ภาษาอังกฤษสื่อสารกับชาวต่างชาติในสถานการณ์จริง' },
      { src: '/evidence/activity-model/y-yield-outcome/03.jpg', caption: 'ผู้เรียนแสดงความสามารถด้านดนตรีในพื้นที่ของโรงเรียน' }
    ]
  }
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
   <div class="sw-shadow" aria-hidden="true"></div>
   <div class="sw-tilt sw-idle">
    <div class="sw-orbit" aria-hidden="true"></div>
    <svg class="sw-cycle" viewBox="0 0 600 600" aria-hidden="true">
      <!-- 4 ส่วนโค้งต่อกันเป็นวงเดียว รัศมี 248 หนา 64 (ครอบคลุมรัศมี 216–280) ให้ตัวหนังสืออยู่กลางแถบพอดี -->
      <path d="M52 300A248 248 0 0 1 300 52" />
      <path d="M300 52A248 248 0 0 1 548 300" />
      <path d="M548 300A248 248 0 0 1 300 548" />
      <path d="M300 548A248 248 0 0 1 52 300" />
      <!-- ลูกศรทิศทางวงจร PLAN → DO → CHECK → ACTION → PLAN (แสดงเฉพาะธีม academic) -->
      <g class="sw-arrows">
        <g transform="translate(300 52) rotate(0)"><circle r="21" /><path d="M-7 -9L6 0L-7 9" /></g>
        <g transform="translate(548 300) rotate(90)"><circle r="21" /><path d="M-7 -9L6 0L-7 9" /></g>
        <g transform="translate(300 548) rotate(180)"><circle r="21" /><path d="M-7 -9L6 0L-7 9" /></g>
        <g transform="translate(52 300) rotate(270)"><circle r="21" /><path d="M-7 -9L6 0L-7 9" /></g>
      </g>
      <text x="124.6" y="124.6" transform="rotate(-45 124.6 124.6)">PLAN</text>
      <text x="475.4" y="124.6" transform="rotate(45 475.4 124.6)">DO</text>
      <text x="475.4" y="475.4" transform="rotate(-45 475.4 475.4)">CHECK</text>
      <text x="124.6" y="475.4" transform="rotate(45 124.6 475.4)">ACTION</text>
    </svg>

    <div class="sw-wheel">
      <div class="sw-hub">
        <span>${hubLabel}</span>
        <strong>${hubTitle}</strong>
        ${hubSubtitle ? `<small>${hubSubtitle}</small>` : ''}
      </div>
      ${items.map(piece).join('')}
      <div class="sw-glare" aria-hidden="true"></div>
    </div>
   </div>
  </div>

  <aside class="sw-detail" aria-live="polite">
    <p class="sw-detail-label">องค์ประกอบที่เลือก</p>
    <h4 class="sw-detail-title">Activity Based</h4>
    <p class="sw-detail-text">เรียนรู้ผ่านการลงมือทำ ทดลอง ตั้งคำถาม และสะท้อนสิ่งที่ค้นพบจากกิจกรรมจริง</p>
    <span class="sw-detail-key">A — Activity Based</span>
    <div class="sw-evidence" aria-label="พื้นที่เตรียมใส่ภาพหลักฐาน">
      <p class="sw-evidence-label">พื้นที่ใส่ภาพหลักฐาน 4 รูป</p>
      <div class="sw-evidence-grid">
        <div class="sw-evidence-slot"><span>รูปที่ 1</span></div>
        <div class="sw-evidence-slot"><span>รูปที่ 2</span></div>
        <div class="sw-evidence-slot"><span>รูปที่ 3</span></div>
        <div class="sw-evidence-slot"><span>รูปที่ 4</span></div>
      </div>
    </div>
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
  const evidence = root.querySelector('.sw-evidence') as HTMLElement;

  const select = (i: number) => {
    const it = items[i];
    pieces.forEach(p => p.classList.toggle('is-on', Number(p.dataset['i']) === i));
    t.textContent = it.title;
    /* ธีม academic ซ่อนคำอธิบายเพราะภาพเล่าเป็นลำดับ P-D-C-A อยู่แล้ว
       ส่วนแบบแกลเลอรียังคงแสดงความหมายขององค์ประกอบไว้ */
    d.hidden = !!it.evidence?.length && it.evidenceProcess !== false;
    d.textContent = it.detail ?? '';
    k.textContent = `${it.letter} — ${it.thaiTitle ?? it.title}`;
    evidence.setAttribute('aria-label', `พื้นที่ใส่ภาพหลักฐานของ ${it.title}`);
    const flow = it.evidenceProcess !== false;
    evidence.innerHTML = it.evidence?.length
      ? `<p class="sw-evidence-label">${flow ? 'ภาพกิจกรรมตามลำดับกระบวนการ' : 'ภาพกิจกรรมประกอบ'}</p>
        <div class="sw-evidence-grid${flow ? ' sw-evidence-grid--process' : ` sw-evidence-grid--gallery sw-evidence-grid--n${it.evidence.length}`}">
          ${it.evidence.map((item, index) => `<figure class="sw-evidence-card sw-evidence-card--${index + 1}">
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <figcaption>${item.caption}</figcaption>
            ${flow ? `<span class="sw-process-arrow sw-process-arrow--${index + 1}" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false"><path d="M4 12h14M13 6l6 6-6 6" /></svg>
            </span>` : ''}
          </figure>`).join('')}
        </div>`
      : `<p class="sw-evidence-label">พื้นที่ใส่ภาพหลักฐาน 4 รูป</p>
        <div class="sw-evidence-grid">
          <div class="sw-evidence-slot"><span>รูปที่ 1</span></div>
          <div class="sw-evidence-slot"><span>รูปที่ 2</span></div>
          <div class="sw-evidence-slot"><span>รูปที่ 3</span></div>
          <div class="sw-evidence-slot"><span>รูปที่ 4</span></div>
        </div>`;
  };

  /* ---------- เอฟเฟกต์ 3 มิติ: เอียงตามเมาส์/นิ้ว + แสงสะท้อน ----------
     ใช้แค่ CSS transform ผ่านตัวแปร --rx/--ry/--gx/--gy (ไม่กระทบเลย์เอาต์)
     เขียนเป็นฟังก์ชันซ้อนภายใน เพราะ preview.html คัดลอกเฉพาะตัว initSmartWheel ไปใช้ */
  function initTilt(root: HTMLElement): (it: WheelItem, el?: HTMLElement) => void {
    const none = () => {};
    const diagram = root.querySelector<HTMLElement>('.sw-diagram');
    const tilt = root.querySelector<HTMLElement>('.sw-tilt');
    if (!diagram || !tilt) return none;
    const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { tilt.classList.remove('sw-idle'); return none; }

    const MAX = 14;             // องศาเอียงสูงสุด
    let raf = 0;
    let idleTimer = 0;
    const set = (rx: number, ry: number, gx: number, gy: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        tilt.style.setProperty('--rx', rx.toFixed(2) + 'deg');
        tilt.style.setProperty('--ry', ry.toFixed(2) + 'deg');
        tilt.style.setProperty('--gx', gx.toFixed(1) + '%');
        tilt.style.setProperty('--gy', gy.toFixed(1) + '%');
      });
    };
    const wake = (fast = true) => {
      tilt.classList.remove('sw-idle');
      tilt.classList.add('sw-active');
      tilt.classList.toggle('sw-fast', fast);
      clearTimeout(idleTimer);
    };
    const rest = (delay = 2600) => {
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        tilt.classList.remove('sw-fast');
        set(0, 0, 50, 30);
        idleTimer = window.setTimeout(() => {
          tilt.classList.remove('sw-active');
          tilt.classList.add('sw-idle');
        }, 900);
      }, delay);
    };
    const fromPoint = (clientX: number, clientY: number, k = 1) => {
      const r = diagram.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
      set((0.5 - py) * 2 * MAX * k, (px - 0.5) * 2 * MAX * k, px * 100, py * 100);
    };

    // เมาส์/ปากกา: เอียงตามตำแหน่งตลอด
    diagram.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      wake(); fromPoint(e.clientX, e.clientY);
    });
    diagram.addEventListener('pointerleave', e => { if (e.pointerType !== 'touch') rest(400); });

    // iPad: ใช้นิ้วลากบนวงล้อเพื่อหมุนเอียงดูรอบ ๆ (ลากขึ้นลงยังเลื่อนหน้าได้ตามปกติ)
    let touchId: number | null = null;
    diagram.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'touch') return;
      touchId = e.pointerId;
      wake(); fromPoint(e.clientX, e.clientY, 0.8);
    });
    diagram.addEventListener('pointermove', e => {
      if (e.pointerType !== 'touch' || e.pointerId !== touchId) return;
      fromPoint(e.clientX, e.clientY, 1.1);
    });
    const endTouch = (e: PointerEvent) => {
      if (e.pointerType !== 'touch' || e.pointerId !== touchId) return;
      touchId = null;
      rest(1800);
    };
    diagram.addEventListener('pointerup', endTouch);
    diagram.addEventListener('pointercancel', endTouch);

    // เข้าสู่หน้าจอครั้งแรก: วงล้อค่อย ๆ ตั้งขึ้นจากแนวราบ
    diagram.classList.add('sw-enter');
    if (typeof IntersectionObserver === 'function') {
      const io = new IntersectionObserver(entries => {
        if (entries.some(en => en.isIntersecting)) {
          diagram.classList.add('sw-entered');
          io.disconnect();
        }
      }, { threshold: 0.25 });
      io.observe(diagram);
    } else {
      diagram.classList.add('sw-entered');
    }

    // แตะเลือก: เอียงไปหาองค์ประกอบ + วงคลื่นแสงกระจายจากจุดที่แตะ
    return (it: WheelItem, el?: HTMLElement) => {
      wake(false);
      const px = it.x / 100, py = it.y / 100;
      set((0.5 - py) * 1.6 * MAX, (px - 0.5) * 1.6 * MAX, px * 100, py * 100);
      if (el) {
        const wheel = el.parentElement;
        if (wheel) {
          const ripple = document.createElement('span');
          ripple.className = 'sw-ripple';
          ripple.style.left = it.x + '%';
          ripple.style.top = it.y + '%';
          wheel.appendChild(ripple);
          window.setTimeout(() => ripple.remove(), 900);
        }
      }
      rest();
    };
  }

  const leanToward = initTilt(root);
  pieces.forEach(p => p.addEventListener('click', () => {
    const i = Number(p.dataset['i']);
    select(i);
    leanToward(items[i], p);
    // การ์ดรายละเอียดเลื่อนเข้าใหม่ทุกครั้งที่เปลี่ยน
    const detail = root.querySelector<HTMLElement>('.sw-detail');
    if (detail) { detail.classList.remove('sw-swap'); void detail.offsetWidth; detail.classList.add('sw-swap'); }
  }));
  select(0);
}
