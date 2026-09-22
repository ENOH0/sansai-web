import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarSeries, Kpi, LineSeries, MeterRow, TableRow } from '../../core/models';
import { DIM1 } from '../../data/dimension1.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { AwardsPreviewComponent } from '../../shared/awards-preview/awards-preview.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import { MeterListComponent } from '../../shared/meter-list/meter-list.component';
import { OnetChartComponent } from '../../shared/onet-chart/onet-chart.component';
import { StudentQualityWheelComponent } from '../../shared/student-quality-wheel/student-quality-wheel.component';

@Component({
  selector: 'app-dimension1',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent, AwardsPreviewComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent, StudentQualityWheelComponent
  ],
  templateUrl: './dimension1.component.html',
  styleUrl: './dimension1.component.css'
})
export class Dimension1Component implements OnInit {

  private readonly route = inject(ActivatedRoute);
  readonly studentQualityModelHeight = signal(620);
  readonly ipoHeight = signal(1000);

  @HostListener('window:message', ['$event'])
  resizeStudentQualityModel(event: MessageEvent<{ type?: string; height?: number; topic?: string }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;
    if (event.data?.type === 'd1-ipo-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.ipoHeight.set(Math.max(500, Math.min(3000, h)));
      return;
    }
    if (event.data?.type === 'd1-student-quality-model-height') {
      const height = Number(event.data.height);
      if (Number.isFinite(height)) this.studentQualityModelHeight.set(Math.max(560, Math.min(4200, height)));
      return;
    }
    if (event.data?.type === 'd1-student-quality-open-topic' && event.data.topic && this.topics.some(topic => topic.key === event.data.topic)) {
      this.select(event.data.topic);
    }
  }

  /* ---------- ดูภาพขนาดเต็ม ----------
     ใช้การดักคลิกที่ระดับหน้า (event delegation) แทนการใส่ (click) ทีละรูป
     ทำให้ทุกภาพในทุกหัวข้อย่อยกดดูเต็มจอได้ โดยไม่ต้องแก้เทมเพลตทีละจุด */
  readonly zoom = signal<{ src: string; cap: string } | null>(null);

  @HostListener('click', ['$event'])
  onImageClick(ev: MouseEvent): void {
    const el = ev.target as HTMLElement | null;
    if (!el || el.tagName !== 'IMG') return;
    // app-photo-gallery มีตัวดูภาพของตัวเองอยู่แล้ว และไม่ดักซ้ำในชั้นดูภาพเต็ม
    if (el.closest('app-photo-gallery') || el.closest('.d1-zoom')) return;
    const img = el as HTMLImageElement;
    const src = img.currentSrc || img.src;
    if (!src) return;
    ev.preventDefault();
    this.zoom.set({ src, cap: img.alt || '' });
  }

  @HostListener('document:keydown.escape')
  closeZoom(): void { this.zoom.set(null); }

  /** เปิดหัวข้อเดิมอัตโนมัติเมื่อกลับมาจากหน้ารางวัล (?t=1.1.8) */
  ngOnInit(): void {
    const t = this.route.snapshot.queryParamMap.get('t');
    if (t && this.topics.some(x => x.key === t)) this.open.set(t);
  }

  /* ---------- สารบัญตัวชี้วัด 16 ข้อ ตามแบบประเมิน ----------
     กด "เปิดดู" ที่การ์ดเพื่อแสดงเนื้อหาของข้อนั้น กดย้อนกลับเพื่อกลับมาที่สารบัญ
     ตัว key ใช้อ้างอิงกับบล็อกเนื้อหาในไฟล์ .html */
  readonly topics = [
    { key: '1.1.1', group: '1.1', title: 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี', note: 'คณิตศาสตร์ ม.3 เพิ่มขึ้นรวม 3 ปี', ready: true },
    { key: '1.1.2', group: '1.1', title: 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ', note: 'ค่าเฉลี่ยผลการคัดกรองระดับดี ปี 2568', ready: true },
    { key: '1.1.3', group: '1.1', title: 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร', note: 'ผลการเรียนเฉลี่ยเพิ่มขึ้นต่อเนื่อง', ready: true },
    { key: '1.1.4', group: '1.1', title: 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้', note: 'ผลการประเมินการอ่าน คิดวิเคราะห์ ระดับดีขึ้นไป', ready: true },
    { key: '1.1.5', group: '1.1', title: 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)', note: 'ผลสัมฤทธิ์รายวิชาเทคโนโลยีระดับ 3–4', ready: true },
    { key: '1.1.6', group: '1.1', title: 'ผู้เรียนมีความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้', note: 'ผลการเรียนระดับดีขึ้นไป (เกรด 3–4) เพิ่มเป็นร้อยละ 74.07', ready: true },
    { key: '1.1.7', group: '1.1', title: 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน', note: 'ม.3 ที่ศึกษาต่อในสถานศึกษาเดิม ปี 2568', ready: true },
    { key: '1.1.8', group: '1.1', title: 'ความรู้ความสามารถรอบด้าน ความสามารถพิเศษ และผลงานเป็นเลิศ', note: 'รางวัลเชิงประจักษ์ที่มีภาพหลักฐาน', ready: true },

    { key: '1.2.1', group: '1.2', title: 'คุณธรรม จริยธรรม ค่านิยม และจิตสำนึกถึงประโยชน์ส่วนรวม', note: 'ผลประเมินคุณลักษณะอันพึงประสงค์ ปี 2567', ready: true },
    { key: '1.2.2', group: '1.2', title: 'ตระหนักและมีส่วนร่วมในการอนุรักษ์ทรัพยากรธรรมชาติและสิ่งแวดล้อม', note: 'ได้รับพระราชทานป้ายสนองพระราชดำริ ปี 2567', ready: true },
    { key: '1.2.3', group: '1.2', title: 'ยอมรับเหตุผลและความคิดเห็นของผู้อื่น', note: 'ผู้มาใช้สิทธิ์เลือกตั้งสภานักเรียน ปี 2568', ready: true },
    { key: '1.2.4', group: '1.2', title: 'ทำงานเป็นทีม มีความรับผิดชอบ มุ่งมั่น และทำงานอย่างมีประสิทธิภาพ', note: 'ผ่านการประเมินกิจกรรมลูกเสือ ปี 2568', ready: true },
    { key: '1.2.5', group: '1.2', title: 'ภาคภูมิใจในความเป็นไทยและนำภูมิปัญญาท้องถิ่นไปใช้', note: 'จากกิจกรรมทัศนศึกษาแหล่งเรียนรู้จังหวัดเชียงใหม่', ready: true },
    { key: '1.2.6', group: '1.2', title: 'มั่นใจในตนเอง และมีเจตคติที่ดีต่อการเรียน', note: 'กิจกรรมหลักที่ส่งเสริมความมั่นใจในตนเอง', ready: true },
    { key: '1.2.7', group: '1.2', title: 'รักษาสุขภาพกายและสุขภาพจิตได้', note: 'นักเรียนที่มีผลสุขภาพจิตปกติ ปี 2568', ready: true },
    { key: '1.2.8', group: '1.2', title: 'ปลอดภัยจากสารเสพติด ปัญหาทางเพศ และอบายมุขทุกชนิด', note: 'พฤติกรรมไม่พึงประสงค์ลดลงจาก 59.63%', ready: true }
  ];

  readonly groups = [
    { key: '1.1' as const, title: 'ผลสัมฤทธิ์ทางวิชาการ' },
    { key: '1.2' as const, title: 'คุณลักษณะที่พึงประสงค์' }
  ];

  /** เริ่มต้นให้เห็นเพียง 2 หมวดหลัก แล้วค่อยเผยข้อย่อยเมื่อกรรมการเลือก */
  readonly tab = signal<'1.1' | '1.2' | ''>('');
  readonly open = signal('');

  get shown() { return this.topics.filter(t => t.group === this.tab()); }

  topicsOf(group: '1.1' | '1.2') { return this.topics.filter(t => t.group === group); }

  get currentIndex(): number { return this.topics.findIndex(t => t.key === this.open()); }
  get current(): (typeof this.topics)[number] | undefined { return this.topics[this.currentIndex]; }
  get prevTopic(): (typeof this.topics)[number] | undefined { return this.topics[this.currentIndex - 1]; }
  get nextTopic(): (typeof this.topics)[number] | undefined { return this.topics[this.currentIndex + 1]; }

  select(key: string): void {
    this.open.set(key);
    this.tab.set(key.startsWith('1.1') ? '1.1' : '1.2');
    window.scrollTo({ top: 0 });
  }

  toggleTab(group: '1.1' | '1.2'): void {
    this.tab.update(current => current === group ? '' : group);
  }

  /** ปุ่มนำทางลอย: กลับไปหน้ารายการของหมวดที่เลือกเสมอ */
  selectGroup(group: '1.1' | '1.2'): void {
    // แสดงรายการย่อยของหมวดที่เลือกเสมอ แล้วเลื่อนไปยังรายการนั้นโดยตรง
    // (รอให้ Angular วาดหน้าสารบัญก่อน จึงหา element สำหรับเลื่อนได้)
    this.open.set('');
    this.tab.set(group);
    window.setTimeout(() => {
      document.getElementById(`d1-group-${group.replace('.', '-')}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 60);
  }

  /* Chrome/Safari บางเครื่องไม่เริ่มเล่นเองแม้ใส่ autoplay
     จึงสั่งเล่นซ้ำเมื่อวิดีโอพร้อม และกลืน error ถ้าเบราว์เซอร์ยังปฏิเสธ */
  playBg(v: HTMLVideoElement): void {
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => { /* ใช้ภาพ poster แทน */ });
  }

  backToIndex(): void {
    this.open.set('');
    this.tab.set('');
    window.setTimeout(() => {
      document.querySelector('.d1-student-quality-model')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 60);
  }

  readonly gallery = GALLERY['d1'];
  readonly d = DIM1;

  // ---- หัวข้อย่อย (ตัดเลขนำหน้าออกเพราะแสดงในกล่องตัวเลขแล้ว) ----
  readonly onetTitle = 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี';
  readonly thaiTitle = 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ';
  readonly engTitle = 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร';
  readonly thinkTitle = 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้';
  readonly ictTitle = 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)';
  readonly curriculumProgressTitle = 'ผู้เรียนมีความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้';
  readonly pathTitle = 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน';
  readonly electionTitle = 'การยอมรับเหตุผลและความคิดเห็นของผู้อื่น';
  readonly healthTitle = 'การรักษาสุขภาพกายและสุขภาพจิต';

  /** สีพาสเทลสำหรับกราฟด้านที่ 1 — ในกราฟเดียวกันไม่มีสีซ้ำ (แดงพาสเทล #f26b6b เก็บไว้ใช้กับเส้นเกณฑ์/ค่าเฉลี่ย) */
  readonly vivid = ['#5b9cf5', '#ffb347', '#4fd1a0', '#a17ff5', '#4cc9e6', '#f57fb3', '#a4dc5c', '#ff8f66', '#4fcfc0', '#8290f5', '#f5d04c', '#d77ff0'];
  private readonly palette = this.vivid;
  /** สีกราฟ 1.1.2 แยกจากกราฟอื่น (เช่น 1.1.6) ไม่ให้ดูคล้ายกัน */
  readonly thaiPalette = ['#a8d8ea', '#ffd3a5', '#c3b1e1', '#b5e7c4', '#ffb7c5', '#fdf1a6', '#b8e0f6', '#f7c8e0', '#cde8b5', '#d9c8f5', '#ffe0b5', '#b2ebe0'];
  /** เส้นขอบแท่งกราฟ 1.1.2 = สีเดียวกับแท่งแต่เข้มขึ้น (เรียงตามลำดับเดียวกับ thaiPalette) */
  readonly thaiStroke = ['#5ba7c4', '#e8a060', '#8c73bf', '#6fbf88', '#e57f96', '#d6c44e', '#6fb3dc', '#d68fb3', '#93bf6e', '#9f86d9', '#e8ad62', '#5fc2b0'];

  // ---------- O-NET ม.6 ----------
  readonly onetHeaders = [
    'สาระการเรียนรู้',
    'ร.ร. 2566', 'ประเทศ 2566', 'ต่าง',
    'ร.ร. 2567', 'ประเทศ 2567', 'ต่าง',
    'ร.ร. 2568', 'ประเทศ 2568', 'ต่าง'
  ];
  readonly onetEvidenceLinks = [
    { label: 'รายงาน 2566', href: '/evidence/1.1.1/onet/onet-2566.pdf' },
    { label: 'รายงาน 2567', href: '/evidence/1.1.1/onet/onet-2567.pdf' },
    { label: 'รายงาน 2568', href: '/evidence/1.1.1/onet/onet-2568.pdf' }
  ];

  /** ผลงานเด่น O-NET: คัดเฉพาะรายวิชา/ระดับชั้นที่สูงกว่าค่าเฉลี่ยประเทศครบ 3 ปี
   * ตัวเลขถอดจากหลักฐาน M3_ไทย, M6_ไทย และ M6_สังคมฯ ที่แนบโดยโรงเรียน */
  readonly onetHighlights: Array<{ title: string; subtitle: string; series: BarSeries[]; note: string }> = [
    {
      title: 'ม.3 ภาษาไทย',
      subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
      series: [
        { name: 'ระดับโรงเรียน', values: [54.87, 56.52, 49.22], color: '#4fd1a0' },
        { name: 'ระดับประเทศ', values: [37.35, 34.40, 33.92], color: '#ff8f66' }
      ],
      note: 'สูงกว่าระดับประเทศ +17.52, +22.12 และ +15.30 คะแนนตามลำดับ'
    },
    {
      title: 'ม.6 ภาษาไทย',
      subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
      series: [
        { name: 'ระดับโรงเรียน', values: [45.23, 47.41, 46.73], color: '#5b9cf5' },
        { name: 'ระดับประเทศ', values: [40.78, 42.21, 40.32], color: '#4cc9e6' }
      ],
      note: 'สูงกว่าระดับประเทศ +4.45, +5.20 และ +6.41 คะแนนตามลำดับ'
    },
    {
      title: 'ม.6 สังคมศึกษา',
      subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
      series: [
        { name: 'ระดับโรงเรียน', values: [34.65, 39.11, 39.12], color: '#f57fb3' },
        { name: 'ระดับประเทศ', values: [33.09, 35.77, 36.96], color: '#f5d04c' }
      ],
      note: 'สูงกว่าระดับประเทศ +1.56, +3.34 และ +2.16 คะแนนตามลำดับ'
    }
  ];

  readonly m6Rows: TableRow[] = DIM1.section11.onet.m6.subjects.map(s => ({
    cells: [
      s.name,
      ...[0, 1, 2].flatMap(i => [
        s.school[i].toFixed(2),
        s.nation[i].toFixed(2),
        this.signed(s.school[i] - s.nation[i])
      ])
    ]
  }));

  // ---------- O-NET ม.3 ----------
  readonly m3TrendBars: BarSeries[] = DIM1.section11.onet.m3Trend.subjects.map((s, i) => ({
    name: s.name,
    values: s.values,
    color: this.palette[i % this.palette.length]
  }));

  readonly m3Rows: TableRow[] = DIM1.section11.onet.m3.subjects.map(s => ({
    cells: [
      s.name,
      ...[0, 1, 2].flatMap(i => [
        s.school[i].toFixed(2),
        s.nation[i].toFixed(2),
        this.signed(s.school[i] - s.nation[i])
      ])
    ]
  }));

  // ---------- ภาษาไทย ----------
  readonly yearHeaders3 = ['ระดับชั้น', 'ปี 2566', 'ปี 2567', 'ปี 2568'];

  /* ใช้ชุดสี 6 สีเฉพาะกราฟนี้ เพราะมี 6 ระดับชั้น
     ถ้าใช้ชุด 5 สีเดิม ม.6 จะได้สีซ้ำกับ ม.1 จนแยกเส้นไม่ออก */
  private readonly gradePalette = this.vivid;

  readonly thaiBars: BarSeries[] = [
    ...DIM1.section11.thai.rows.map((r, i) => ({
      name: r.name, values: r.values, color: this.thaiPalette[i % this.thaiPalette.length],
      stroke: this.thaiStroke[i % this.thaiStroke.length]
    })),
    { name: 'ค่าเฉลี่ยรวม', values: DIM1.section11.thai.average, color: '#f4a7a7', stroke: '#d86a6a' }
  ];

  readonly thaiRows: TableRow[] = [
    ...DIM1.section11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
    { cells: ['ค่าเฉลี่ย', ...DIM1.section11.thai.average.map(v => v.toFixed(2))], total: true }
  ];

  readonly thaiActivities = [
    'กิจกรรมการพัฒนาทักษะการพูดในที่ประชุมชน',
    'การฝึกปฏิบัติหน้าที่ผู้ประกาศข่าว ณ สถานีวิทยุมหาวิทยาลัยเกษตรศาสตร์แม่โจ้',
    'กิจกรรมวันสุนทรภู่',
    'กิจกรรมการประกวดบันทึกรักการอ่าน',
    'การประกวดจัดทำสื่ออิเล็กทรอนิกส์จากหนังสือสารานุกรมไทยฉบับเยาวชนฯ',
    'การจัดกิจกรรมการเรียนรู้แบบ Active Learning กลุ่มสาระการเรียนรู้คณิตศาสตร์',
    'การใช้โปรแกรมทางคณิตศาสตร์ประยุกต์ใช้ร่วมกับการจัดการเรียนการสอน',
    'กิจกรรมการแข่งขันคณิตคิดเลขเร็ว',
    'กิจกรรมการแข่งขัน Battle of the Numbers',
    'การเตรียมความพร้อมในการแข่งขัน Battle of the Numbers และตอบปัญหาทางคณิตศาสตร์',
    'การเตรียมความพร้อมผู้เรียนเพื่อเข้าการทดสอบระดับชาติ',
    'ค่าย Math Summer Camp และค่ายพัฒนานวัตกรรมด้านคณิตศาสตร์เพื่อยอดสู่โครงงานคณิตศาสตร์'
  ].map((title, index) => ({
    title,
    images: [
      `/evidence/1.1.2/thai-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.1.2/thai-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  })).filter((_, index) => index !== 6);

  readonly thaiAwards = [
    {
      title: 'โรงเรียนสันทรายวิทยาคมขอแสดงความยินดีกับนักเรียนที่ผ่านการคัดเลือกเป็นตัวแทนประเทศไทยเข้าแข่งขันคณิตคิดเร็วในระดับนานาชาติ ประจำปี 2569 ระหว่างวันที่ 21–24 เมษายน 2569 ณ โรงเรียน Pancabudi เมืองเมดาน ประเทศอินโดนีเซีย',
      image: '/evidence/1.1.2/thai-awards/04-international-mental-math.jpg'
    },
    {
      title: 'รางวัลจากการประกวดจัดทำสื่ออิเล็กทรอนิกส์จากหนังสือสารานุกรมไทยสำหรับเยาวชนฯ',
      image: '/evidence/1.1.2/thai-activities/09.jpg'
    },
    {
      title: 'ผลงานรางวัลจากกิจกรรมการใช้โปรแกรมทางคณิตศาสตร์ประยุกต์ร่วมกับการจัดการเรียนการสอน',
      image: '/evidence/1.1.2/thai-activities/13.jpg'
    },
    {
      title: 'ผลงานรางวัลจากกิจกรรมการแข่งขันคณิตคิดเลขเร็ว',
      image: '/evidence/1.1.2/thai-activities/16.jpg'
    }
  ];

  readonly environmentActivities = [
    'โครงการงานสวนพฤกษศาสตร์โรงเรียน',
    'กิจกรรมสื่อสารสู่ฝุ่น ขยายความรู้และการแก้ไขปัญหาฝุ่น PM2.5 ให้แก่โรงเรียนในอำเภอสันทราย',
    'กิจกรรมการเรียนรู้เทคโนโลยี AI เพื่อสิ่งแวดล้อม ร่วมกับ AiroTEC มหาวิทยาลัยราชภัฏเชียงใหม่',
    'กิจกรรมประกวดห้องเรียนสะอาด และพิธีมอบธงห้องเรียนสะอาดประจำเดือน',
    'กิจกรรมเวรทำความสะอาดพื้นที่รับผิดชอบ',
    'กิจกรรมคัดแยกขยะของคณะสี',
    'กิจกรรมคัดแยกขยะร่วมกับชุมชนในวันสำคัญ และกิจกรรมจิตอาสาพัฒนาแหล่งน้ำและสวนสาธารณะร่วมกับเทศบาลตำบลสันทรายหลวง'
  ].map((title, index) => ({
    title,
    images: [
      `/evidence/1.2.2/environment-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.2.2/environment-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  readonly teamworkCurriculumPlans = [
    'แผนการเรียนธุรกิจ',
    'แผนการเรียนคหกรรม',
    'แผนการเรียนศิลปะ',
    'แผนการเรียนวิทย์',
    'แผนการเรียนภาษาญี่ปุ่น',
    'แผนการเรียนกีฬา',
    'แผนการเรียนภาษาจีน',
    'แผนการเรียนภาษาจีน-ภาษาอังกฤษ'
  ].map((title, index) => ({
    title,
    image: `/evidence/1.2.4/curriculum-activities/${String(index + 1).padStart(2, '0')}.jpg`
  }));

  readonly studentDevelopmentActivities = [
    'กิจกรรมพัฒนาสมรรถนะ (วิชาการและอาชีพ)',
    'กิจกรรมชุมนุม และกิจกรรม 1 คน 1 ความสามารถ',
    'กิจกรรมค่ายพักแรมลูกเสือ – เนตรนารี - ยุวกาชาด',
    'กิจกรรมอบรมนักศึกษาวิชาทหาร',
    'กิจกรรมค่ายเยาวชนอาสาป้องกันและบรรเทาสาธารณภัย และกิจกรรมบำเพ็ญประโยชน์',
    'กิจกรรมกีฬาสี',
    'กิจกรรมทัศนศึกษา',
    'กิจกรรมส่งเสริมประชาธิปไตยในโรงเรียน'
  ].map((title, index) => ({
    title,
    images: [
      `/evidence/1.2.4/student-development-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.2.4/student-development-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  readonly confidenceActivities = [
    'นักเรียนร่วมกับครูวางแผนจัดกิจกรรมการเรียนรู้และกิจกรรมเสริมหลักสูตรในรายวิชาต่าง ๆ',
    'จัดการเรียนรู้เชิงรุกที่เน้นให้นักเรียนกล้าคิด กล้าทำ กล้าแสดงออก นำเสนอหน้าชั้นเรียน และอภิปรายร่วมกับครูอย่างมีเหตุผล',
    'โครงการศึกษาแหล่งเรียนรู้ภายในและภายนอกโรงเรียน ทัศนศึกษา และการออกฝึกงานในสถานประกอบการ',
    'กิจกรรม TOUR & LEARN นักเรียนสัมภาษณ์นักท่องเที่ยวชาวต่างชาติ',
    'การเรียนรู้แบบโครงงานในรายวิชาโรงเรียนมาตรฐานสากล (IS1–IS3) พร้อมนำผลไปใช้บริการสังคม',
    'กิจกรรม TO BE NUMBER ONE เพื่อวางรากฐานการพัฒนาศักยภาพและบุคลิกภาพความมั่นใจในตนเอง'
  ].map((title, index) => ({
    title,
    images: Array.from({ length: 3 }, (_, imageIndex) =>
      `/evidence/1.2.6/confidence-activities/${String(index * 3 + imageIndex + 1).padStart(2, '0')}.jpg`)
  }));

  /** แบ่งข้อความเป็นช่วง ๆ เพื่อทำตัวหนาเฉพาะวลีที่ระบุใน bold */
  boldParts(text: string, bold?: string[]): { t: string; b: boolean }[] {
    if (!bold?.length) return [{ t: text, b: false }];
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.split(new RegExp(`(${bold.map(esc).join('|')})`)).filter(Boolean)
      .map(t => ({ t, b: bold.includes(t) }));
  }

  readonly ictActivities = [
    'งาน Bridging Innovation with Market Opportunities',
    'โครงงานคอมพิวเตอร์'
  ].map((title, index) => ({
    title,
    images: [
      `/evidence/1.1.5/activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.1.5/activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  readonly healthActivities = [
    'ให้บริการชั่งน้ำหนักและวัดส่วนสูงนักเรียน',
    'ให้บริการร่วมกับศูนย์สุขภาพชุมชน ต.หนองหาร ในการฉีดวัคซีนป้องกันโรคมะเร็งปากมดลูก (HPV) นักเรียนชั้น ม.1- ม.6',
    'ให้บริการร่วมกับสำนักงานเทศบาลแม่โจ้ ตรวจคัดกรองและแก้ไขความผิดปกติทางสายตา ให้กับนักเรียน ครูและบุคลากรทางการศึกษา',
    'บริการตรวจสุขภาพประจำปีร่วมกับคณะเทคนิคการแพทย์ มหาวิทยาลัยเชียงใหม่',
    'รับการตรวจสุขภาพ และการตรวจสอบภาชนะ'
  ].map((title, index) => ({
    title,
    images: [
      // รูปแรกของ "ชั่งน้ำหนักและวัดส่วนสูง" เปลี่ยนเป็นรูปใหม่ (01-v2.jpg)
      index === 0 ? '/evidence/1.2.7/health-activities/01-v2.jpg' : `/evidence/1.2.7/health-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.2.7/health-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  readonly safetyActivities = [
    'โครงการสร้างค่านิยมและปลูกฝังคุณลักษณะที่พึงประสงค์ที่ดีกับผู้เรียน',
    'โครงการเสริมสร้างภูมิคุ้มกันแห่งความเสี่ยงของผู้เรียน TO BE NUMBER ONE',
    'โครงการเยี่ยมบ้านนักเรียน และกิจกรรมระบบดูแลช่วยเหลือนักเรียน',
    'กิจกรรมสถานศึกษาสีขาวปลอดยาเสพติดและอบายมุข และกิจกรรมเฝ้าระวังยาเสพติด',
    'กิจกรรมสร้างสุขห่างไกลยาเสพติด และกิจกรรมให้ความรู้เกี่ยวกับยาเสพติด',
    'กิจกรรม TO BE NUMBER ONE CHALLENGE และการแข่งขันกีฬาต้านยาเสพติด',
    'กิจกรรมลูก ส.ค. มีวินัย ห่างไกลอบายมุข (สารวัตรนักเรียน) และกิจกรรมค่ายปรับพฤติกรรม',
    'กิจกรรมรณรงค์ป้องกันและแก้ไขปัญหายาเสพติดในและนอกสถานศึกษา และการตรวจปัสสาวะนักเรียนกลุ่มเสี่ยง'
  ].map((title, index) => ({
    title,
    images: [
      `/evidence/1.2.8/safety-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.2.8/safety-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  readonly muenSanWorkshopImages = [
    '/evidence/1.2.5/muen-san-workshop/01.jpg',
    '/evidence/1.2.5/muen-san-workshop/02.jpg'
  ];

  readonly khokNongNaImages = [
    '/evidence/1.2.5/khok-nong-na/01.jpg',
    '/evidence/1.2.5/khok-nong-na/02.jpg'
  ];

  readonly thaiMusicActivitySets = [
    {
      images: ['/evidence/1.2.5/thai-music/01.jpg', '/evidence/1.2.5/thai-music/02.jpg'],
      caption: 'ภาพประกอบการทำการจัดการเรียนการสอนกิจกรรมพัฒนาผู้เรียนชุมนุมดนตรีพื้นเมืองดนตรีไทย ณ ห้องปฏิบัติการดนตรี โรงเรียนสันทรายวิทยาคม อำเภอเมือง จังหวัดเชียงใหม่'
    }
  ];

  // ---------- ภาษาอังกฤษ ----------
  readonly engSeries = [{
    name: 'ระดับดีขึ้นไป (3–4)',
    values: DIM1.section11.english.grades.map(g => g.pct),
    color: '#5b9cf5'
  }];

  readonly englishActivities = DIM1.section11.english.activities.map((title, index) => ({
    title,
    images: [
      `/evidence/1.1.3/english-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
      `/evidence/1.1.3/english-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
    ]
  }));

  /** ภาพกิจกรรมท้ายหัวข้อ 1.1.4 · ไฟล์อยู่ที่ public/evidence/1.1.4/activities/ */
  readonly thinkingActivities = [
    {
      title: 'การอบรมเชิงปฏิบัติการ "ครูแกนนำการจัดการเรียนรู้ด้วยกระบวนการสืบค้นและการนำเสนอผลงาน"',
      images: [1, 2, 3].map(n => `/evidence/1.1.4/activities/training-0${n}.jpg`)
    },
    {
      title: 'การนำเสนอผลงาน เรื่อง พลังสำคัญในการต่อยอดความคิดสร้างสรรค์และพัฒนาศักยภาพของผู้เรียน',
      images: [1, 2].map(n => `/evidence/1.1.4/activities/presentation-0${n}.jpg`)
    },
    {
      title: 'การนำเสนอนวัตกรรม ผลงานจากการศึกษาค้นคว้าด้วยตนเอง (Independent Study : IS) และการประกวดโครงงานจากหนังสือสารานุกรมไทยสำหรับเยาวชนฯ',
      images: [1, 2, 3].map(n => `/evidence/1.1.4/activities/is-innovation-0${n}.jpg`)
    },
    {
      title: 'การนำเสนอรอบคัดเลือก สุดยอดนวัตกรรมทางสังคม ครั้งที่ 2 (SK Social Innovation Award 2026)',
      images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/sk-social-innovation-0${n}.jpg`)
    },
    {
      title: 'การนำเสนอนวัตกรรม “การศึกษาค้นคว้าด้วยตนเอง” และการประกวดโครงงานจากหนังสือสารานุกรมไทยฯ',
      images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/is-project-0${n}.jpg`)
    },
    {
      title: 'โครงงานด้านสิ่งแวดล้อม เรื่อง Interactive Video YouTube สร้างจิตสำนึกด้านสิ่งแวดล้อม',
      images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/env-interactive-video-0${n}.jpg`)
    },
    {
      title: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี จัดกิจกรรมการนำเสนอผลงานโครงงานและนวัตกรรม',
      images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/sci-project-0${n}.jpg`)
    }
  ];

  readonly englishAwards = [
    {
      title: 'สอบได้ลำดับที่ 19 จากผู้เข้าสอบ 1,306 คน ในโครงการทดสอบความรู้วิชา TGAT ระดับชั้นมัธยมศึกษาตอนปลาย ปีการศึกษา 2567',
      image: '/evidence/1.1.3/english-awards/01-tgat.jpg'
    },
    {
      title: 'ผลการสอบวัดระดับความสามารถทางภาษาอังกฤษ 4 ทักษะ ตามกรอบมาตรฐานสากล CEFR ระดับ A1–A2 เต็ม 50 คะแนน',
      image: '/evidence/1.1.3/english-awards/02-cefr.jpg'
    },
    {
      title: 'ได้คะแนนเต็ม 100 คะแนน ในการทดสอบ O-NET รายวิชาภาษาอังกฤษ (สทศ.)',
      image: '/evidence/1.1.3/english-awards/03-onet.jpg'
    }
  ];

  readonly gradeHeaders = ['ปีการศึกษา', ...DIM1.section11.english.gradeLabels, 'ร้อยละ 3–4'];

  readonly engRows: TableRow[] = [
    ...DIM1.section11.english.grades.map(g => ({
      cells: [g.year, ...g.g.map(v => v.toLocaleString('th-TH')), g.pct.toFixed(2)]
    })),
    { cells: ['รวมเฉลี่ย 3 ปี', '', '', '', '', '', '', '', '', DIM1.section11.english.average.toFixed(2)], total: true }
  ];

  // ---------- คิดวิเคราะห์ ----------
  readonly isYears = ['2566', '2567', '2568'];
  readonly isSeries = [
    { name: 'ชั้น ม.2', values: [61, 88, 76], color: '#5b9cf5' },
    { name: 'ชั้น ม.5', values: [73, 89, 96], color: '#ffb347' }
  ];

  readonly readSeries: LineSeries[] = [{
    name: 'ระดับดีขึ้นไป (ดีเยี่ยม + ดี)',
    values: DIM1.section11.thinking.readTotals,
    color: '#5b9cf5'
  }];

  readonly readHeaders = [
    'ระดับชั้น',
    'ดีเยี่ยม 2566', 'ดี 2566',
    'ดีเยี่ยม 2567', 'ดี 2567',
    'ดีเยี่ยม 2568', 'ดี 2568'
  ];

  readonly readRows: TableRow[] = [
    ...DIM1.section11.thinking.readRows.map(r => ({
      cells: [
        r.name,
        ...[0, 1, 2].flatMap(i => [r.excellent[i].toFixed(2), r.good[i].toFixed(2)])
      ]
    })),
    {
      cells: [
        'ร้อยละระดับดีขึ้นไป',
        DIM1.section11.thinking.readTotals[0].toFixed(2), '',
        DIM1.section11.thinking.readTotals[1].toFixed(2), '',
        DIM1.section11.thinking.readTotals[2].toFixed(2), ''
      ],
      total: true
    }
  ];

  // ---------- ICT ----------
  readonly ictSeries: BarSeries[] = [{
    name: 'รายวิชาเทคโนโลยี (ระดับ 3–4)',
    values: DIM1.section11.ict.values,
    color: '#5b9cf5'
  }];

  // ---------- ความก้าวหน้าตามหลักสูตร ----------
  /** สีกราฟ 1.1.6 โทนพาสเทล (8 กลุ่มสาระ) และเส้นขอบสีเดียวกันที่เข้มขึ้น */
  readonly progressPalette = ['#b4e4d0', '#ffc4b2', '#b9c6f2', '#fbe7a1', '#e2c2ee', '#a9e1ef', '#f8bfd4', '#cfe3b0'];
  readonly progressStroke = ['#6fbf9f', '#e88f73', '#7c8fd6', '#d9bf55', '#b789cc', '#62b9cf', '#dc84a6', '#98bd6a'];
  readonly curriculumProgressBars: BarSeries[] = DIM1.section11.curriculumProgress.rows.map((r, i) => ({
    name: r.name, values: r.values,
    color: this.progressPalette[i % this.progressPalette.length],
    stroke: this.progressStroke[i % this.progressStroke.length]
  }));
  readonly curriculumProgressHeaders = ['กลุ่มสาระการเรียนรู้', 'ปี 2566', 'ปี 2567', 'ปี 2568'];
  readonly curriculumProgressRows: TableRow[] = [
    ...DIM1.section11.curriculumProgress.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
    { cells: ['รวมเฉลี่ย', ...DIM1.section11.curriculumProgress.average.map(v => v.toFixed(2))], total: true }
  ];

  // ---------- การศึกษาต่อ ----------
  /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
  readonly pathBars: BarSeries[] = DIM1.section11.pathway.rows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % this.palette.length]
  }));

  // ---------- คุณลักษณะอันพึงประสงค์ ----------
  readonly desiredMeterColors = ['#f5849c', '#ffa96b', '#f5cf55', '#66d493', '#5ccbe0', '#7a9ef8', '#ab8bf8', '#ef8fc0'];
  readonly desiredMeters: MeterRow[] = DIM1.section12.desired.rows
    .map((r, index) => ({ name: r.name, value: r.avg, color: this.desiredMeterColors[index % this.desiredMeterColors.length] }))
    .sort((a, b) => b.value - a.value);

  readonly desiredHeaders = ['คุณลักษณะที่พึงประสงค์', 'ปี 2566', 'ปี 2567', 'ปี 2568', 'สรุปคุณภาพโดยรวม'];

  readonly desiredRows: TableRow[] = [
    ...DIM1.section12.desired.rows.map(r => ({
      cells: [r.name, ...r.values.map(v => v.toFixed(2)), r.avg.toFixed(2)]
    })),
    {
      cells: [
        'สรุปผลการประเมิน',
        ...DIM1.section12.desired.overall.map(v => v.toFixed(2)),
        DIM1.section12.desired.overallAvg.toFixed(2)
      ],
      total: true
    }
  ];

  // ---------- การเลือกตั้ง ----------
  readonly electionSeries = [
    { name: 'ผู้มีสิทธิ์เลือกตั้ง', values: DIM1.section12.election.eligible, color: '#9dd3fa' },
    { name: 'ผู้มาใช้สิทธิ์', values: DIM1.section12.election.voted, color: '#5b9cf5' }
  ];

  readonly electionPctSeries: LineSeries[] = [
    { name: 'ร้อยละผู้มาใช้สิทธิ์', values: DIM1.section12.election.votedPct, color: '#5b9cf5' },
    { name: 'เกณฑ์ร้อยละ 80', values: [80, 80, 80], color: '#f26b6b', dashed: true }
  ];

  // ---------- สุขภาพ ----------
  readonly fitSeries: LineSeries[] = DIM1.section12.health.fitRows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % this.palette.length]
  }));

  readonly bodySeries: LineSeries[] = DIM1.section12.health.bodyRows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % this.palette.length]
  }));

  /* สุขภาพจิต — แสดงเป็นกราฟแท่ง เรียงลำดับ มีปัญหา → เสี่ยง → ปกติ */
  private readonly mindOrder = ['มีปัญหา', 'เสี่ยง', 'ปกติ'];
  private readonly mindColor: Record<string, string> = {
    'มีปัญหา': '#f26b6b', 'เสี่ยง': '#ffb347', 'ปกติ': '#4fd1a0'
  };

  readonly mindBars: BarSeries[] = this.mindOrder
    .map(n => DIM1.section12.health.mindRows.find(r => r.name === n))
    .filter((r): r is { name: string; values: number[] } => !!r)
    .map(r => ({ name: r.name, values: r.values, color: this.mindColor[r.name] }));

  // ---------- ข้อมูลสำหรับตัวชี้วัดที่เพิ่มใหม่ ----------
  readonly excellenceKpis: Kpi[] = DIM1.section11.excellence.stats.map(x => ({
    value: x.value, unit: x.unit, label: x.label, note: ''
  }));

  readonly teamSeries: LineSeries[] = DIM1.section12.teamwork.rows.map((r, i) => ({
    name: r.name,
    values: r.values.map(v => (v === null ? NaN : v)),
    color: this.gradePalette[i % this.gradePalette.length]
  }));

  readonly teamRows: TableRow[] = DIM1.section12.teamwork.rows.map(r => ({
    cells: [r.name, ...r.values.map(v => (v === null ? '—' : v.toFixed(2)))]
  }));

  readonly safetyBars: BarSeries[] = [
    { name: 'ภาพรวมทั้งโรงเรียน', values: DIM1.section12.safety.riskPct, color: '#f26b6b' },
    ...DIM1.section12.safety.byLevel.map((r, i) => ({
      name: r.name, values: r.values, color: this.gradePalette[i % this.gradePalette.length]
    }))
  ];

  readonly safetyRows: TableRow[] = [
    ...DIM1.section12.safety.byLevel.map(r => ({
      cells: [r.name, ...r.values.map(v => v.toFixed(2))]
    })),
    { cells: ['รวมทั้งโรงเรียน', ...DIM1.section12.safety.riskPct.map(v => v.toFixed(2))], total: true }
  ];

  private signed(v: number): string {
    return (v >= 0 ? '+' : '') + v.toFixed(2);
  }
}
