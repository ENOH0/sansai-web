import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { MeterRow } from '../../core/models';

/** แถบเปรียบเทียบแนวนอน — เหมาะกับข้อมูลร้อยละหลายรายการ อ่านง่ายบนจอสัมผัส */
@Component({
  selector: 'app-meter-list',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './meter-list.component.html',
  styleUrl: './meter-list.component.css'
})
export class MeterListComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() note = '';
  @Input() rows: MeterRow[] = [];
  @Input() max = 100;
  @Input() suffix = '%';

  pct(v: number): number {
    return Math.max(0, Math.min(100, (v / this.max) * 100));
  }
}
