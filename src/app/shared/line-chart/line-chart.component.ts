import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { LineSeries, CHART_PALETTE } from '../../core/models';

/**
 * กราฟเส้นแบบ SVG ล้วน — ไม่มี dependency ภายนอก
 * เส้นจะถูก "วาด" ทีละเส้นเมื่อเลื่อนเข้ามุมมอง (stroke-dashoffset)
 * ปรับให้อ่านง่ายบนจอ iPad ทั้งแนวตั้งและแนวนอน
 */
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() note = '';
  @Input() labels: string[] = [];
  @Input() series: LineSeries[] = [];
  @Input() showValues = true;
  @Input() valueFormat = '1.2-2';
  /** กำหนดช่วงแกน Y เอง ถ้าไม่กำหนดจะคำนวณอัตโนมัติ */
  @Input() min?: number;
  @Input() max?: number;

  // ขนาดพื้นที่วาด (หน่วย viewBox — สเกลอัตโนมัติตามความกว้างจริง)
  readonly W = 900;
  readonly H = 400;
  readonly PL = 56;   // ขอบซ้าย
  readonly PR = 24;   // ขอบขวา
  readonly PT = 34;   // ขอบบน
  readonly PB = 46;   // ขอบล่าง

  private bounds(): { lo: number; hi: number } {
    const all = this.series.flatMap(s => s.values).filter(v => v != null && !isNaN(v));
    if (!all.length) return { lo: 0, hi: 100 };
    let lo = this.min ?? Math.min(...all);
    let hi = this.max ?? Math.max(...all);
    if (this.min === undefined) lo = Math.max(0, Math.floor((lo - (hi - lo) * 0.18) / 5) * 5);
    if (this.max === undefined) hi = Math.ceil((hi + (hi - lo) * 0.12) / 5) * 5;
    if (hi === lo) hi = lo + 10;
    return { lo, hi };
  }

  ticks(): number[] {
    const { lo, hi } = this.bounds();
    const n = 5;
    const step = (hi - lo) / n;
    return Array.from({ length: n + 1 }, (_, i) => Math.round((lo + step * i) * 10) / 10);
  }

  xPos(i: number): number {
    const n = Math.max(1, this.labels.length - 1);
    return this.PL + ((this.W - this.PL - this.PR) * i) / n;
  }

  yPos(v: number): number {
    const { lo, hi } = this.bounds();
    const r = (v - lo) / (hi - lo);
    return this.H - this.PB - r * (this.H - this.PT - this.PB);
  }

  pathFor(s: LineSeries): string {
    return s.values
      .map((v, i) => `${i === 0 ? 'M' : 'L'} ${this.xPos(i).toFixed(1)} ${this.yPos(v).toFixed(1)}`)
      .join(' ');
  }

  private palette = CHART_PALETTE;

  colorOf(s: LineSeries, i: number): string {
    return s.color ?? this.palette[i % this.palette.length];
  }
}
