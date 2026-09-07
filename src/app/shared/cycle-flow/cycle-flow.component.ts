import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CycleStep } from '../../core/models';

/**
 * วงจรการดำเนินงาน 4 ขั้น
 * ใช้กับด้านที่ 2–5 เพื่อแสดงกระบวนการทำงานที่หมุนต่อเนื่อง
 */
@Component({
  selector: 'app-cycle-flow',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './cycle-flow.component.html',
  styleUrl: './cycle-flow.component.css'
})
export class CycleFlowComponent {
  @Input() steps: CycleStep[] = [];
}
