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

  @HostListener('window:message', ['$event'])
  resizeStudentQualityModel(event: MessageEvent<{ type?: string; height?: number; topic?: string }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;
    if (event.data?.type === 'd1-student-quality-model-height') {
      const height = Number(event.data.height);
      if (Number.isFinite(height)) this.studentQualityModelHeight.set(Math.max(560, Math.min(4200, height)));
      return;
    }
    if (event.data?.type === 'd1-student-quality-open-topic' && event.data.topic && this.topics.some(topic => topic.key === event.data.topic)) {
      this.select(event.data.topic);
    }
  }

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

  private readonly palette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd'];

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
        { name: 'ระดับโรงเรียน', values: [54.87, 56.52, 49.22], color: '#57c878' },
        { name: 'ระดับประเทศ', values: [37.35, 34.40, 33.92], color: '#f0b48f' }
      ],
      note: 'สูงกว่าระดับประเทศ +17.52, +22.12 และ +15.30 คะแนนตามลำดับ'
    },
    {
      title: 'ม.6 ภาษาไทย',
      subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
      series: [
        { name: 'ระดับโรงเรียน', values: [45.23, 47.41, 46.73], color: '#123b82' },
        { name: 'ระดับประเทศ', values: [40.78, 42.21, 40.32], color: '#93bce3' }
      ],
      note: 'สูงกว่าระดับประเทศ +4.45, +5.20 และ +6.41 คะแนนตามลำดับ'
    },
    {
      title: 'ม.6 สังคมศึกษา',
      subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
      series: [
        { name: 'ระดับโรงเรียน', values: [34.65, 39.11, 39.12], color: '#ee5c91' },
        { name: 'ระดับประเทศ', values: [33.09, 35.77, 36.96], color: '#e9df4e' }
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
      image: '/evidence/1.1.2/thai-awards/04-international-mental-math.png'
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
      `/evidence/1.2.2/environment-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
      `/evidence/1.2.2/environment-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
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
    image: `/evidence/1.2.4/curriculum-activities/${String(index + 1).padStart(2, '0')}.png`
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
      `/evidence/1.2.4/student-development-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
      `/evidence/1.2.4/student-development-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
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
      `/evidence/1.2.6/confidence-activities/${String(index * 3 + imageIndex + 1).padStart(2, '0')}.png`)
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
      `/evidence/1.2.7/health-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
      `/evidence/1.2.7/health-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
    ]
  }));

  readonly muenSanWorkshopImages = [
    '/evidence/1.2.5/muen-san-workshop/01.png',
    '/evidence/1.2.5/muen-san-workshop/02.png'
  ];

  readonly khokNongNaImages = [
    '/evidence/1.2.5/khok-nong-na/01.png',
    '/evidence/1.2.5/khok-nong-na/02.png'
  ];

  readonly thaiMusicActivitySets = [
    {
      images: ['/evidence/1.2.5/thai-music/01.png', '/evidence/1.2.5/thai-music/02.png'],
      caption: 'ภาพประกอบการทำการจัดการเรียนการสอนกิจกรรมพัฒนาผู้เรียนชุมนุมดนตรีพื้นเมืองดนตรีไทย ณ ห้องปฏิบัติการดนตรี โรงเรียนสันทรายวิทยาคม อำเภอเมือง จังหวัดเชียงใหม่'
    },
    {
      images: ['/evidence/1.2.5/thai-music/03.png', '/evidence/1.2.5/thai-music/04.png'],
      caption: 'ภาพประกอบการแสดงและบรรเลงดนตรีของนักเรียนชุมนุมดนตรีพื้นเมือง ดนตรีไทยและดนตรีลูกทุ่ง โรงเรียนสันทรายวิทยาคม เนื่องในโอกาสถวายการต้อนรับพระบาทสมเด็จพระเจ้าอยู่หัว ณ กองบิน ๔๑ กองทัพอากาศ อำเภอเมือง จังหวัดเชียงใหม่'
    }
  ];

  // ---------- ภาษาอังกฤษ ----------
  readonly engSeries = [{
    name: 'ระดับดีขึ้นไป (3–4)',
    values: DIM1.section11.english.grades.map(g => g.pct),
    color: '#1e4d9e'
  }];

  readonly englishActivities = DIM1.section11.english.activities.map((title, index) => ({
    title,
    images: [
      `/evidence/1.1.3/english-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
      `/evidence/1.1.3/english-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
    ]
  }));

  readonly englishAwards = [
    {
      title: 'สอบได้ลำดับที่ 19 จากผู้เข้าสอบ 1,306 คน ในโครงการทดสอบความรู้วิชา TGAT ระดับชั้นมัธยมศึกษาตอนปลาย ปีการศึกษา 2567',
      image: '/evidence/1.1.3/english-awards/01-tgat.png'
    },
    {
      title: 'ผลการสอบวัดระดับความสามารถทางภาษาอังกฤษ 4 ทักษะ ตามกรอบมาตรฐานสากล CEFR ระดับ A1–A2 เต็ม 50 คะแนน',
      image: '/evidence/1.1.3/english-awards/02-cefr.png'
    },
    {
      title: 'ได้คะแนนเต็ม 100 คะแนน ในการทดสอบ O-NET รายวิชาภาษาอังกฤษ (สทศ.)',
      image: '/evidence/1.1.3/english-awards/03-onet.png'
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

  // ---------- ความก้าวหน้าตามหลักสูตร ----------
  readonly curriculumProgressBars: BarSeries[] = DIM1.section11.curriculumProgress.rows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % this.palette.length]
  }));
  readonly curriculumProgressHeaders = ['กลุ่มสาระการเรียนรู้', 'ปี 2566', 'ปี 2567', 'ปี 2568'];
  readonly curriculumProgressRows: TableRow[] = [
    ...DIM1.section11.curriculumProgress.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
    { cells: ['รวมเฉลี่ย', ...DIM1.section11.curriculumProgress.average.map(v => v.toFixed(2))], total: true }
  ];

  // ---------- การศึกษาต่อ ----------
  /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
  readonly pathBars: BarSeries[] = DIM1.section11.pathway.rows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % 5]
  }));

  // ---------- คุณลักษณะอันพึงประสงค์ ----------
  readonly desiredMeterColors = ['#ff5b7f', '#ff9f43', '#f9c74f', '#35c77a', '#16b9d4', '#4e7cff', '#9b6bff', '#ed6aa5'];
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
