import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** ส่วนหัวของหน้าด้านที่ 1–5 แสดงเลขด้าน ชื่อด้าน และน้ำหนักประจำด้าน */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.css'
})
export class PageHeroComponent {
  @Input() no: number | string = '';
  @Input() weight: number | string = '';
  @Input() name = '';
  @Input() subtitle = '';
}
