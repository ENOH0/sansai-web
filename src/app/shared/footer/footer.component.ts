import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, NAV_ITEMS } from '../../data/school.data';

/** ท้ายหน้า — ข้อมูลติดต่อ สารบัญ และสังกัดของโรงเรียน */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly school = SCHOOL;
  readonly items = NAV_ITEMS.filter(i => i.path !== '/');
  /** แปลงเป็นปีพุทธศักราช */
  readonly year = new Date().getFullYear() + 543;
}
