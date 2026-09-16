import { Component, Input, signal } from '@angular/core';
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
  private _steps: CycleStep[] = [];
  readonly openIndex = signal<number | null>(null);
  @Input() showEvidence = false;
  /** แสดงรายละเอียดทุกขั้นทันที (ใช้เฉพาะหน้าที่ต้องการอ่านพร้อมกัน) */
  @Input() expandAll = false;

  @Input()
  set steps(value: CycleStep[]) {
    this._steps = value ?? [];
    this.openIndex.set(null);
  }
  get steps(): CycleStep[] { return this._steps; }

  isOpen(index: number): boolean { return this.expandAll || this.openIndex() === index; }

  /** เปิดได้ทีละขั้น เพื่อให้ดูข้อมูลบน iPad ได้กระชับ */
  toggle(index: number): void {
    if (this.expandAll) return;
    this.openIndex.update(open => open === index ? null : index);
  }
}
