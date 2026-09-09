import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import { STUDENT_AWARDS, StudentAward } from '../../data/awards.data';

/**
 * ตัวอย่างรางวัลแบบย่อ พร้อมปุ่มไปหน้ารางวัลทั้งหมด
 * นำไปวางในหน้าไหนก็ได้ เพียงส่ง from (เส้นทางของหน้านั้น) เพื่อให้ปุ่มย้อนกลับพากลับมาถูกที่
 */
@Component({
  selector: 'app-awards-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './awards-preview.component.html',
  styleUrl: './awards-preview.component.css'
})
export class AwardsPreviewComponent {
  /** จำนวนตัวอย่างที่แสดง */
  @Input() count = 4;
  /** เส้นทางของหน้าที่วางตัวอย่างนี้ เช่น /dimension-1 */
  @Input() from = '';
  /** หัวข้อย่อยที่กำลังเปิดอยู่ เช่น 1.1.8 เพื่อให้กลับมาเปิดหัวข้อเดิม */
  @Input() topic = '';
  /** true = วางบนพื้นภาพหรือวิดีโอ ตัวหนังสือจะเป็นสีขาว */
  @Input() light = false;

  /** เลือกรางวัลระดับสูงสุดมาโชว์ก่อน เพื่อให้ตัวอย่างน่าสนใจ */
  get samples(): StudentAward[] {
    const order = ['ระดับนานาชาติ', 'ระดับชาติ', 'ระดับภูมิภาค'];
    return [...STUDENT_AWARDS]
      .sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level))
      .slice(0, this.count);
  }

  get total(): number { return STUDENT_AWARDS.length; }

  get params(): Record<string, string> {
    const p: Record<string, string> = {};
    if (this.from) p['from'] = this.from;
    if (this.topic) p['t'] = this.topic;
    return p;
  }
}
