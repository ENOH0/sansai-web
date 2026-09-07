import { AfterViewInit, Component, ElementRef, ViewEncapsulation, inject } from '@angular/core';
import { SMART_WHEEL_HTML, WHEEL_ITEMS, initSmartWheel } from './smart-wheel.markup';

/** วงล้อ SMART Student — โครงสร้างและการโต้ตอบอยู่ใน smart-wheel.markup.ts */
@Component({
  selector: 'app-smart-wheel',
  standalone: true,
  template: '',
  styleUrl: './smart-wheel.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SmartWheelComponent implements AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    el.innerHTML = SMART_WHEEL_HTML;
    initSmartWheel(el, WHEEL_ITEMS);
  }
}
