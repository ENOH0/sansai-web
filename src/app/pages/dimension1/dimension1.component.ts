import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeries, MeterRow, TableRow } from '../../core/models';
import { DIM1 } from '../../data/dimension1.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import { MeterListComponent } from '../../shared/meter-list/meter-list.component';
import { OnetChartComponent } from '../../shared/onet-chart/onet-chart.component';

@Component({
  selector: 'app-dimension1',
  standalone: true,
  imports: [
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent,
    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent
  ],
  templateUrl: './dimension1.component.html',
  styleUrl: './dimension1.component.css'
})
export class Dimension1Component {
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
  readonly m3TrendSeries: LineSeries[] = DIM1.section11.onet.m3Trend.subjects.map((s, i) => ({
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

  readonly thaiSeries: LineSeries[] = [
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
  readonly pathSeries: LineSeries[] = DIM1.section11.pathway.rows.map((r, i) => ({
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

  readonly overallSeries: LineSeries[] = [
    { name: 'ผลการประเมินภาพรวม', values: DIM1.section12.desired.overall, color: '#1e4d9e' },
    { name: 'ค่าเป้าหมายของโรงเรียน', values: [90, 90, 90], color: '#b4433a', dashed: true }
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

  readonly mindSeries: LineSeries[] = DIM1.section12.health.mindRows.map((r, i) => ({
    name: r.name, values: r.values, color: this.palette[i % 5]
  }));

  private signed(v: number): string {
    return (v >= 0 ? '+' : '') + v.toFixed(2);
  }
}
