import { Component, OnInit, inject, signal } from '@angular/core';
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

@Component({
  selector: 'app-dimension1',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent, AwardsPreviewComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent
  ],
  templateUrl: './dimension1.component.html',
  styleUrl: './dimension1.component.css'
})
export class Dimension1Component implements OnInit {
  private readonly route = inject(ActivatedRoute);

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
    { key: '1.1.6', group: '1.1', title: 'ความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้', note: 'อยู่ระหว่างรวบรวมข้อมูลจากเล่มเอกสาร', ready: false },
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
    if (this.open()) {
      this.open.set('');
      this.tab.set(group);
    } else {
      this.toggleTab(group);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0 });
  }

  readonly gallery = GALLERY['d1'];
  readonly d = DIM1;

  // ---- หัวข้อย่อย (ตัดเลขนำหน้าออกเพราะแสดงในกล่องตัวเลขแล้ว) ----
  readonly onetTitle = 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี';
  readonly thaiTitle = 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ';
  readonly engTitle = 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร';
  readonly thinkTitle = 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้';
  readonly ictTitle = 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)';
  readonly pathTitle = 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน';
  readonly electionTitle = 'การยอมรับเหตุผลและความคิดเห็นของผู้อื่น';
  readonly healthTitle = 'การรักษาสุขภาพกายและสุขภาพจิต';

  private readonly palette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd'];

  // ---------- O-NET ม.6 ----------
  readonly onetHeaders = [
    'สาระการเรียนรู้',
    'ร.ร. 2566', 'ประเทศ 2566', 'ต่าง',
    'ร.ร. 2567', 'ประเทศ 2567', 'ต่าง',
    'ร.ร. 2568', 'ประเทศ 2568', 'ต่าง'
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
    color: this.palette[i % 5]
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
  private readonly gradePalette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd', '#b4433a'];

  readonly thaiBars: BarSeries[] = [
    ...DIM1.section11.thai.rows.map((r, i) => ({
      name: r.name, values: r.values, color: this.gradePalette[i % 6]
    })),
    { name: 'ค่าเฉลี่ยรวม', values: DIM1.section11.thai.average, color: '#08152f' }
  ];

  readonly thaiRows: TableRow[] = [
    ...DIM1.section11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
    { cells: ['ค่าเฉลี่ย', ...DIM1.section11.thai.average.map(v => v.toFixed(2))], total: true }
  ];

  // ---------- ภาษาอังกฤษ ----------
  readonly engSeries = [{
    name: 'ระดับดีขึ้นไป (3–4)',
    values: DIM1.section11.english.grades.map(g => g.pct),
    color: '#1e4d9e'
  }];

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
    { name: 'ชั้น ม.2', values: [61, 88, 76], color: '#1e4d9e' },
    { name: 'ชั้น ม.5', values: [73, 89, 96], color: '#d4a537' }
  ];

  readonly readSeries: LineSeries[] = [{
    name: 'ระดับดีขึ้นไป (ดีเยี่ยม + ดี)',
    values: DIM1.section11.thinking.readTotals,
    color: '#1e4d9e'
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
  readonly ictSeries: LineSeries[] = [{
    name: 'รายวิชาเทคโนโลยี (ระดับ 3–4)',
    values: DIM1.section11.ict.values,
    color: '#1e4d9e'
  }];

  // ---------- การศึกษาต่อ ----------
  /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
  readonly pathBars: BarSeries[] = DIM1.section11.pathway.rows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % 5]
  }));

  // ---------- คุณลักษณะอันพึงประสงค์ ----------
  readonly desiredMeters: MeterRow[] = DIM1.section12.desired.rows
    .map(r => ({ name: r.name, value: r.avg }))
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
    { name: 'ผู้มีสิทธิ์เลือกตั้ง', values: DIM1.section12.election.eligible, color: '#b3cdf0' },
    { name: 'ผู้มาใช้สิทธิ์', values: DIM1.section12.election.voted, color: '#1e4d9e' }
  ];

  readonly electionPctSeries: LineSeries[] = [
    { name: 'ร้อยละผู้มาใช้สิทธิ์', values: DIM1.section12.election.votedPct, color: '#1e4d9e' },
    { name: 'เกณฑ์ร้อยละ 80', values: [80, 80, 80], color: '#b4433a', dashed: true }
  ];

  // ---------- สุขภาพ ----------
  readonly fitSeries: LineSeries[] = DIM1.section12.health.fitRows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % 5]
  }));

  readonly bodySeries: LineSeries[] = DIM1.section12.health.bodyRows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % 5]
  }));

  /* สุขภาพจิต — แสดงเป็นกราฟแท่ง เรียงลำดับ มีปัญหา → เสี่ยง → ปกติ */
  private readonly mindOrder = ['มีปัญหา', 'เสี่ยง', 'ปกติ'];
  private readonly mindColor: Record<string, string> = {
    'มีปัญหา': '#b4433a', 'เสี่ยง': '#d4a537', 'ปกติ': '#0f7a4d'
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
    color: this.gradePalette[i % 6]
  }));

  readonly teamRows: TableRow[] = DIM1.section12.teamwork.rows.map(r => ({
    cells: [r.name, ...r.values.map(v => (v === null ? '—' : v.toFixed(2)))]
  }));

  readonly safetyBars: BarSeries[] = [
    { name: 'ภาพรวมทั้งโรงเรียน', values: DIM1.section12.safety.riskPct, color: '#b4433a' },
    ...DIM1.section12.safety.byLevel.map((r, i) => ({
      name: r.name, values: r.values, color: this.gradePalette[i % 6]
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
