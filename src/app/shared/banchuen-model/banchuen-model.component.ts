import {
  AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewEncapsulation, inject
} from '@angular/core';
import { BANCHUEN_HTML, BANCHUEN_STEPS, initBanchuen } from './banchuen.markup';

/**
 * โมเดลสามมิติ BANCHUEN Model
 * โครงสร้างและการโต้ตอบอยู่ใน banchuen.markup.ts เพื่อให้ preview.html ใช้โค้ดชุดเดียวกัน
 * ต้องใช้ ViewEncapsulation.None เพราะ DOM ถูกสร้างขึ้นเองภายหลัง (สไตล์จึงต้องไม่ถูก scope)
 */
@Component({
  selector: 'app-banchuen-model',
  standalone: true,
  template: '',
  styleUrl: './banchuen-model.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BanchuenModelComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private teardown?: () => void;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    el.innerHTML = BANCHUEN_HTML;
    // ทำงานนอก zone เพราะเป็นการลากและแอนิเมชันล้วน ๆ ไม่ต้อง re-render Angular
    this.zone.runOutsideAngular(() => {
      this.teardown = initBanchuen(el, BANCHUEN_STEPS);
    });
  }

  ngOnDestroy(): void {
    this.teardown?.();
  }
}
