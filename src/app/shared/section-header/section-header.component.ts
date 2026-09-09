import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';

/** หัวข้อหลักของแต่ละหมวด — มีเลขกำกับ เส้นคั่นสีทอง และคำอธิบายนำ */
@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  /** ข้อความเล็กเหนือหัวข้อ เช่น "ข้อมูลพื้นฐาน" */
  @Input() kicker = '';
  /** เลขหัวข้อ เช่น "1.1" หรือ "2.3" */
  @Input() num = '';
  @Input() title = '';
  /** คำอธิบายนำใต้หัวข้อ */
  @Input() lead = '';
  /** true = ใช้บนพื้นภาพหรือวิดีโอ ตัวหนังสือจะเป็นสีขาว */
  @Input() light = false;
}
