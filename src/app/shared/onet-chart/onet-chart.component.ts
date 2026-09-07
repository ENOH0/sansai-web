import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { LineSeries, CHART_PALETTE } from '../../core/models';

/** ข้อมูลผลสัมฤทธิ์ O-NET หนึ่งรายวิชา */
export interface OnetSubject {
  name: string;
  /** ค่าเฉลี่ยระดับโรงเรียน เรียงตามปีการศึกษา */
  school: number[];
  /** ค่าเฉลี่ยระดับประเทศ เรียงตามปีการศึกษา */
  nation: number[];
}

/**
 * กราฟเปรียบเทียบ O-NET แบบเลือกดูรายวิชาได้
 *
 * กรรมการแตะปุ่มชื่อวิชาเพื่อดูทีละวิชา ทำให้เห็นช่องว่างระหว่าง
 * ค่าเฉลี่ยของโรงเรียนกับระดับประเทศได้ชัดเจน ไม่ต้องอ่านเส้น 10 เส้นพร้อมกัน
 * และยังเลือก "ทุกวิชา" เพื่อดูภาพรวมได้เหมือนเดิม
 */
@Component({
  selector: 'app-onet-chart',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './onet-chart.component.html',
  styleUrl: './onet-chart.component.css'
})
export class OnetChartComponent {
  /** ชื่อกราฟ เช่น "ค่าเฉลี่ย O-NET ชั้น ม.6" */
  @Input() title = '';
  @Input() subtitle = '';
  @Input() note = '';
  /** ป้ายแกน X เช่น ['2566','2567','2568'] */
  @Input() years: string[] = [];
  @Input() subjects: OnetSubject[] = [];

  /** ลำดับวิชาที่เลือกอยู่ (-1 = แสดงทุกวิชา) */
  selectedIndex = -1;

  select(i: number): void {
    this.selectedIndex = i;
  }

  /** วิชาที่กำลังแสดง (undefined เมื่อเลือกทุกวิชา) */
  get current(): OnetSubject | undefined {
    return this.selectedIndex >= 0 ? this.subjects[this.selectedIndex] : undefined;
  }

  get chartSubtitle(): string {
    return this.current
      ? `รายวิชา${this.current.name} · เส้นทึบ = โรงเรียน, เส้นประ = ระดับประเทศ`
      : this.subtitle;
  }

  /** เส้นกราฟที่จะวาด — เปลี่ยนตามวิชาที่เลือก */
  get series(): LineSeries[] {
    const c = this.current;

    // เลือกรายวิชาเดียว: ใช้สีน้ำเงินคู่กับสีแดงเพื่อให้เห็นช่องว่างชัด
    if (c) {
      return [
        { name: 'ค่าเฉลี่ยของโรงเรียน', values: c.school, color: '#1e4d9e' },
        { name: 'ค่าเฉลี่ยระดับประเทศ', values: c.nation, color: '#b4433a', dashed: true }
      ];
    }

    // ทุกวิชา: วิชาละหนึ่งสี เส้นทึบคือโรงเรียน เส้นประคือระดับประเทศ
    return this.subjects.flatMap((s, i) => ([
      { name: `${s.name} (โรงเรียน)`, values: s.school, color: CHART_PALETTE[i % CHART_PALETTE.length] },
      { name: `${s.name} (ประเทศ)`, values: s.nation, color: CHART_PALETTE[i % CHART_PALETTE.length], dashed: true }
    ]));
  }

  /** ผลต่างระหว่างโรงเรียนกับระดับประเทศในแต่ละปี ของวิชาที่เลือก */
  get diffs(): { year: string; school: number; nation: number; diff: number }[] {
    const c = this.current;
    if (!c) return [];
    return this.years.map((year, i) => ({
      year,
      school: c.school[i],
      nation: c.nation[i],
      diff: c.school[i] - c.nation[i]
    }));
  }

  /** จำนวนปีที่โรงเรียนทำได้สูงกว่าค่าเฉลี่ยระดับประเทศ */
  get yearsAbove(): number {
    return this.diffs.filter(d => d.diff > 0).length;
  }

  signed(v: number): string {
    return (v >= 0 ? '+' : '') + v.toFixed(2);
  }
}
