import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { BarSeries, CHART_PALETTE } from '../../core/models';

/** กราฟแท่งกลุ่ม (grouped bar) แบบ SVG — แท่งจะ "งอกขึ้น" เมื่อเลื่อนเข้ามุมมอง */
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() note = '';
  @Input() labels: string[] = [];
  @Input() series: BarSeries[] = [];
  @Input() showValues = true;
  @Input() valueFormat = '1.0-2';
  @Input() max?: number;

  readonly W = 900;
  readonly H = 380;
  readonly PL = 56;
  readonly PR = 24;
  readonly PT = 34;
  readonly PB = 46;
  readonly Math = Math;

  private hi(): number {
    if (this.max !== undefined) return this.max;
    const all = this.series.flatMap(s => s.values);
    const m = all.length ? Math.max(...all) : 100;
    return Math.ceil((m * 1.16) / 5) * 5;
  }

  ticks(): number[] {
    const hi = this.hi();
    return Array.from({ length: 6 }, (_, i) => Math.round((hi / 5) * i * 10) / 10);
  }

  yPos(v: number): number {
    return this.H - this.PB - (v / this.hi()) * (this.H - this.PT - this.PB);
  }

  private groupW(): number {
    return (this.W - this.PL - this.PR) / Math.max(1, this.labels.length);
  }

  barW(): number {
    return (this.groupW() * 0.68) / Math.max(1, this.series.length);
  }

  barX(gi: number, si: number): number {
    const g = this.groupW();
    const inner = this.barW() * this.series.length;
    return this.PL + g * gi + (g - inner) / 2 + this.barW() * si;
  }

  groupCenter(gi: number): number {
    return this.PL + this.groupW() * gi + this.groupW() / 2;
  }

  private palette = CHART_PALETTE;

  colorOf(s: BarSeries, i: number): string {
    return s.color ?? this.palette[i % this.palette.length];
  }
}
