import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { TableRow } from '../../core/models';

/** ตารางข้อมูลพร้อมคำอธิบายหัวตาราง เลื่อนแนวนอนได้บนจอแคบ */
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  /** ข้อความหัวตาราง เช่น "ตารางที่ 1.1 ..." */
  @Input() caption = '';
  /** คำอธิบายใต้ตาราง */
  @Input() note = '';
  @Input() headers: string[] = [];
  @Input() rows: TableRow[] = [];
  /** คอลัมน์ตั้งแต่ลำดับนี้ไปจัดชิดขวาแบบตัวเลข */
  @Input() numFrom = 1;
}
