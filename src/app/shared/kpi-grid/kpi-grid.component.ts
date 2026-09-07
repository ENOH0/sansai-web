import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CountUpDirective } from '../directives/count-up.directive';
import { Kpi } from '../../core/models';

/** แถวการ์ดตัวเลขสถิติ 4 ใบ ใช้เปิดหัวของแต่ละด้าน */
@Component({
  selector: 'app-kpi-grid',
  standalone: true,
  imports: [CommonModule, RevealDirective, CountUpDirective],
  templateUrl: './kpi-grid.component.html',
  styleUrl: './kpi-grid.component.css'
})
export class KpiGridComponent {
  @Input() items: Kpi[] = [];
}
