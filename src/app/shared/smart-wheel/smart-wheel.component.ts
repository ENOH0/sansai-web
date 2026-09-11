import { AfterViewInit, Component, ElementRef, Input, ViewEncapsulation, inject } from '@angular/core';
import { WHEEL_ITEMS, WheelItem, initSmartWheel, smartWheelHtml } from './smart-wheel.markup';

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
  @Input() items: WheelItem[] = WHEEL_ITEMS;
  @Input() hubLabel = 'SMART';
  @Input() hubTitle = 'Student';
  @Input() hubSubtitle = '';
  @Input() theme = '';

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    el.innerHTML = smartWheelHtml(this.items, this.hubLabel, this.hubTitle, this.hubSubtitle, this.theme);
    initSmartWheel(el, this.items);
  }
}
