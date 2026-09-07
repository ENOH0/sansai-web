/**
 * BANCHUEN Model — โมเดลสามมิติแบบโต้ตอบ
 * เขียนเป็น TypeScript ล้วน ไม่พึ่ง Angular เพื่อให้ทั้งเว็บแอปจริง
 * และไฟล์ preview.html ใช้โค้ดชุดเดียวกัน (แก้ที่เดียว เปลี่ยนทั้งสองที่)
 */

export interface BanchuenStep {
  key: string; title: string; thai: string; type: string; description: string; z: number;
}

export const BANCHUEN_STEPS: BanchuenStep[] = [
  { key: 'B', title: 'Brainstorming', thai: 'ระดมความคิด', type: 'เริ่มต้นวงจร', description: 'ร่วมกำหนดทิศทางและออกแบบการทำงานจากทุกภาคส่วน', z: 98 },
  { key: 'A', title: 'Academic Administration', thai: 'บริหารงานวิชาการ', type: 'ขับเคลื่อนคุณภาพ', description: 'ยกระดับหลักสูตร การจัดการเรียนรู้ และการวัดประเมินผล', z: 108 },
  { key: 'N', title: 'Networking', thai: 'สร้างเครือข่าย', type: 'เชื่อมทรัพยากร', description: 'ผนึกกำลังผู้ปกครอง ชุมชน และภาคีเครือข่ายทางการศึกษา', z: 102 },
  { key: 'C', title: 'Collaboration', thai: 'ทำงานร่วมกัน', type: 'ลงมือร่วมกัน', description: 'แบ่งบทบาท สื่อสาร และสร้างความรับผิดชอบร่วมของทีมงาน', z: 108 },
  { key: 'H', title: 'Holistic Management', thai: 'บริหารแบบองค์รวม', type: 'บูรณาการระบบ', description: 'บริหารงานทุกมิติอย่างสมดุล โดยผู้เรียนเป็นจุดศูนย์กลาง', z: 98 },
  { key: 'U', title: 'Unity', thai: 'เป็นหนึ่งเดียว', type: 'สร้างพลังร่วม', description: 'ยึดเป้าหมายร่วม สร้างวัฒนธรรมการทำงานที่ไว้วางใจซึ่งกันและกัน', z: 108 },
  { key: 'E', title: 'Education Innovation', thai: 'นวัตกรรมการศึกษา', type: 'เปลี่ยนการเรียนรู้', description: 'นำเทคโนโลยีและนวัตกรรมมาออกแบบประสบการณ์เรียนรู้ใหม่', z: 102 },
  { key: 'N', title: 'Needs Assessment', thai: 'วิเคราะห์ความต้องการ', type: 'อ่านบริบท', description: 'วิเคราะห์ข้อมูล ปัญหา และความต้องการจำเป็นก่อนวางแผนพัฒนา', z: 108 }
];

const INPUTS = [
  'แผนงาน / โครงการ / กิจกรรม',
  'การจัดการเรียนการสอนของครู',
  'การใช้เทคโนโลยีดิจิทัล',
  'เครือข่ายการศึกษา',
  'ทรัพยากรสนับสนุน (งบประมาณ วัสดุ อุปกรณ์)'
];

const OUTPUTS = [
  'คุณภาพผู้เรียนในศตวรรษที่ 21 ดีขึ้น',
  'ผู้เรียนมีทักษะการเรียนรู้และนวัตกรรม',
  'ผู้เรียนมีทักษะสารสนเทศ สื่อ และเทคโนโลยี',
  'ผู้เรียนมีทักษะชีวิตและอาชีพ'
];

const PRINCIPLES = [
  { h: 'มองเป็นระบบ', p: 'ทรัพยากรและบริบทของโรงเรียนถูกแปลงเป็นกลไกการทำงานที่เชื่อมโยงกัน ไม่ใช่โครงการที่แยกส่วน' },
  { h: 'ขับเคลื่อนเป็นวงจร', p: 'แต่ละองค์ประกอบส่งต่อผลลัพธ์ให้กัน และย้อนกลับมาปรับปรุงการทำงานได้เสมอ' },
  { h: 'วัดผลที่ผู้เรียน', p: 'ทุกการบริหารมุ่งสร้างสมรรถนะผู้เรียนให้พร้อมต่อโลกในศตวรรษที่ 21' }
];

const plane = () => `
  <div class="bc-plane">
    <div class="bc-oct bc-oct-outer"></div>
    <div class="bc-oct bc-oct-mid"></div>
    <div class="bc-oct bc-oct-in"></div>
    <div class="bc-orbit"></div>
    <div class="bc-arc bc-arc-a"></div>
    <div class="bc-arc bc-arc-b"></div>
  </div>`;

const core = () => `
  <div class="bc-core">
    <span class="bc-core-label">BANCHUEN</span>
    <strong class="bc-core-title">Model</strong>
    <p class="bc-core-sub">บริหารแบบบูรณาการ<br>เพื่อผู้เรียนเป็นสำคัญ</p>
    <span class="bc-core-ring"></span>
  </div>`;

const nodeHtml = (s: BanchuenStep, i: number): string => {
  const a = (i * 45 - 90) * Math.PI / 180;
  const x = 50 + Math.cos(a) * 40.5, y = 50 + Math.sin(a) * 40.5;
  return `<button type="button" class="bc-node" data-i="${i}"
    aria-label="${s.title}: ${s.thai}"
    style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%;transform:translate(-50%,-50%) translateZ(${s.z}px)">
    <span class="bc-node-letter">${s.key}</span>
    <span class="bc-node-name">${s.title}<small>${s.thai}</small></span>
  </button>`;
};

const face = (back: boolean): string => `
  <div class="bc-face ${back ? 'bc-back' : 'bc-front'}">
    ${plane()}
    <div class="bc-nodes">${BANCHUEN_STEPS.map(nodeHtml).join('')}</div>
    ${core()}
  </div>`;

/** โครงสร้าง HTML ทั้งหมดของโมเดล */
export const BANCHUEN_HTML = `
<div class="bc-layout">

  <aside class="bc-side">
    <h4 class="bc-side-head">ปัจจัยนำเข้า (Input)</h4>
    <div class="bc-panel">
      ${INPUTS.map(t => `<div class="bc-src">${t}</div>`).join('')}
    </div>
    <div class="bc-flow" aria-hidden="true">→</div>
  </aside>

  <div class="bc-stage">
    <div class="bc-bar">
      <p class="bc-help"><span>ลาก</span> เพื่อหมุน · <span>แตะ</span> องค์ประกอบเพื่อดูรายละเอียด</p>
      <div class="bc-tools">
        <button type="button" class="bc-tool" data-act="out" aria-label="ย่อโมเดล">− ย่อ</button>
        <button type="button" class="bc-tool" data-act="in" aria-label="ขยายโมเดล">+ ขยาย</button>
        <button type="button" class="bc-tool" data-act="auto" aria-pressed="false">เล่นลำดับ</button>
        <button type="button" class="bc-tool" data-act="reset">มุมมองเริ่มต้น</button>
      </div>
    </div>

    <div class="bc-viewport">
      <div class="bc-scene">
        <div class="bc-depth" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        ${face(false)}
        ${face(true)}
        <div class="bc-wave" aria-hidden="true"></div>
      </div>
    </div>

    <div class="bc-detail" aria-live="polite">
      <div class="bc-detail-key">B</div>
      <div>
        <p class="bc-detail-type">เริ่มต้นวงจร</p>
        <p class="bc-detail-title">Brainstorming · ระดมความคิด</p>
        <p class="bc-detail-copy">ร่วมกำหนดทิศทางและออกแบบการทำงานจากทุกภาคส่วน</p>
      </div>
      <span class="bc-detail-next">ลำดับที่ 1 / 8</span>
    </div>
  </div>

  <aside class="bc-side bc-side-out">
    <h4 class="bc-side-head">ผลลัพธ์ (Output)</h4>
    <div class="bc-panel bc-panel-out">
      ${OUTPUTS.map((t, i) => `<div class="bc-out"><span>${String(i + 1).padStart(2, '0')}</span>${t}</div>`).join('')}
    </div>
  </aside>
</div>

<div class="bc-principles">
  ${PRINCIPLES.map(p => `<div class="bc-principle"><h4>${p.h}</h4><p>${p.p}</p></div>`).join('')}
</div>`;

/** ผูกการโต้ตอบทั้งหมดเข้ากับ element ที่ใส่ BANCHUEN_HTML ไว้แล้ว */
export function initBanchuen(root: HTMLElement, steps: BanchuenStep[]): () => void {
  const q = <T extends Element>(s: string) => root.querySelector(s) as T;
  const scene = q<HTMLElement>('.bc-scene');
  const viewport = q<HTMLElement>('.bc-viewport');
  const nodes = Array.from(root.querySelectorAll<HTMLElement>('.bc-node'));
  const dKey = q<HTMLElement>('.bc-detail-key');
  const dType = q<HTMLElement>('.bc-detail-type');
  const dTitle = q<HTMLElement>('.bc-detail-title');
  const dCopy = q<HTMLElement>('.bc-detail-copy');
  const dNext = q<HTMLElement>('.bc-detail-next');
  const autoBtn = q<HTMLElement>('.bc-tool[data-act="auto"]');
  const outBtn = q<HTMLButtonElement>('.bc-tool[data-act="out"]');
  const inBtn = q<HTMLButtonElement>('.bc-tool[data-act="in"]');

  let cur = 0, zoom = 1, dragging = false, timer: number | null = null;
  let rot = { x: -7, y: -9 };
  let origin = { x: 0, y: 0, rx: 0, ry: 0 };

  const render = () => {
    scene.style.transform = `rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale(${zoom})`;
  };

  const setZoom = (z: number) => {
    zoom = Math.max(0.74, Math.min(1.16, Number(z.toFixed(2))));
    outBtn.disabled = zoom <= 0.74;
    inBtn.disabled = zoom >= 1.16;
    render();
  };

  const select = (i: number, turn = false) => {
    cur = (i + steps.length) % steps.length;
    const s = steps[cur];
    nodes.forEach(n => {
      const ni = Number(n.dataset['i']);
      n.classList.toggle('is-active', ni === cur);
      const z = steps[ni].z + (ni === cur ? 34 : 0);
      n.style.transform = `translate(-50%,-50%) translateZ(${z}px)`;
    });
    dKey.textContent = s.key;
    dType.textContent = s.type;
    dTitle.textContent = `${s.title} · ${s.thai}`;
    dCopy.textContent = s.description;
    dNext.textContent = `ลำดับที่ ${cur + 1} / ${steps.length}`;
    if (turn) {
      const a = (cur * 45 - 90) * Math.PI / 180;
      rot.y += (-Math.cos(a) * 40.5 * 0.25 - rot.y) * 0.55;
      rot.x += ((Math.sin(a) * 40.5 * 0.11 - 5) - rot.x) * 0.35;
      render();
    }
  };

  const flash = (node: HTMLElement) => {
    node.classList.remove('is-hit'); scene.classList.remove('is-energized');
    void node.offsetWidth;
    node.classList.add('is-hit'); scene.classList.add('is-energized');
    window.setTimeout(() => {
      node.classList.remove('is-hit'); scene.classList.remove('is-energized');
    }, 900);
  };

  const stopAuto = () => {
    if (timer !== null) { clearInterval(timer); timer = null; }
    autoBtn.setAttribute('aria-pressed', 'false');
    autoBtn.textContent = 'เล่นลำดับ';
  };
  const startAuto = () => {
    stopAuto();
    timer = window.setInterval(() => select(cur + 1, true), 2700);
    autoBtn.setAttribute('aria-pressed', 'true');
    autoBtn.textContent = 'หยุดลำดับ';
  };

  nodes.forEach(n => n.addEventListener('click', () => {
    stopAuto(); select(Number(n.dataset['i'])); flash(n);
  }));

  root.querySelectorAll<HTMLElement>('.bc-tool').forEach(b => b.addEventListener('click', () => {
    const act = b.dataset['act'];
    if (act === 'out') setZoom(zoom - 0.1);
    else if (act === 'in') setZoom(zoom + 0.1);
    else if (act === 'auto') { timer !== null ? stopAuto() : startAuto(); }
    else { stopAuto(); rot = { x: -7, y: -9 }; setZoom(1); select(0); }
  }));

  const down = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    stopAuto();
    dragging = true;
    viewport.classList.add('is-dragging');
    scene.classList.add('is-dragging');
    origin = { x: e.clientX, y: e.clientY, rx: rot.x, ry: rot.y };
    viewport.setPointerCapture(e.pointerId);
  };
  const move = (e: PointerEvent) => {
    if (!dragging) return;
    rot.y = origin.ry + (e.clientX - origin.x) * 0.28;
    rot.x = Math.max(-30, Math.min(25, origin.rx - (e.clientY - origin.y) * 0.2));
    render();
  };
  const up = () => {
    dragging = false;
    viewport.classList.remove('is-dragging');
    scene.classList.remove('is-dragging');
  };
  viewport.addEventListener('pointerdown', down);
  viewport.addEventListener('pointermove', move);
  viewport.addEventListener('pointerup', up);
  viewport.addEventListener('pointercancel', up);

  setZoom(1);
  select(0);
  return stopAuto;
}
