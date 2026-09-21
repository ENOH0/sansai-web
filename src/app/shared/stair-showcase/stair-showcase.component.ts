import { Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StairStep {
  no: number;
  title: string;
  text: string;
  photos?: string[];
}

/** แสดงผลงานแบบขั้นบันได 4 ขั้น — การ์ดแสดงเฉพาะชื่อ กดแล้วเปิดดูรูปเต็มพร้อมรายละเอียด */
@Component({
  selector: 'app-stair-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stair-showcase.component.html',
  styleUrl: './stair-showcase.component.css'
})
export class StairShowcaseComponent {
  @Input() steps: StairStep[] = [];
  @Input() title = '';
  @Input() lead = '';

  readonly openIndex = signal<number | null>(null);

  get current(): StairStep | null {
    const i = this.openIndex();
    return i === null ? null : this.steps[i] ?? null;
  }

  open(i: number): void { this.openIndex.set(i); }
  close(): void { this.openIndex.set(null); }

  @HostListener('document:keydown.escape')
  onEsc(): void { this.close(); }
}
