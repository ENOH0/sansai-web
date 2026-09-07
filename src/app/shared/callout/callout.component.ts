import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';

/** กล่องข้อความเน้น มีแถบสีด้านซ้าย — ใส่เนื้อหาผ่าน ng-content */
@Component({
  selector: 'app-callout',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.css'
})
export class CalloutComponent {
  /** ข้อความตัวหนานำหน้า เช่น "จุดเด่น:" */
  @Input() label = '';
  /** true = ใช้โทนสีทองแทนสีน้ำเงิน */
  @Input() gold = false;
}
