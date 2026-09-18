import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StairStep {
  no: number;
  title: string;
  text: string;
  photos?: string[];
}

/** แสดงผลงานแบบขั้นบันได 4 ขั้น — ขั้นที่สูงขึ้นคือการพัฒนาที่ก้าวหน้าขึ้น */
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
}
