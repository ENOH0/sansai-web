import {
  Directive, ElementRef, Input, OnDestroy, AfterViewInit, inject, NgZone, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * นับตัวเลขขึ้นเมื่อเลื่อนถึง — ใช้กับการ์ดสถิติ
 *   <span [appCountUp]="96.09" [decimals]="2"></span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('appCountUp') target = 0;
  @Input() decimals = 0;
  @Input() duration = 1400;
  /** ใส่ตัวคั่นหลักพัน เช่น 2,198 */
  @Input() grouping = true;

  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private raf = 0;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;

    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      el.textContent = this.format(this.target);
      return;
    }

    const reduced =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      el.textContent = this.format(this.target);
      return;
    }

    el.textContent = this.format(0);

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          if (entries.some(e => e.isIntersecting)) {
            this.observer?.disconnect();
            this.animate(el);
          }
        },
        { threshold: 0.3 }
      );
      this.observer.observe(el);
    });
  }

  private animate(el: HTMLElement): void {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / this.duration);
      // easeOutCubic — เร็วตอนต้น ช้าตอนจบ ให้ความรู้สึกนุ่มนวล
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = this.format(this.target * eased);
      if (p < 1) this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  private format(v: number): string {
    return v.toLocaleString('th-TH', {
      minimumFractionDigits: this.decimals,
      maximumFractionDigits: this.decimals,
      useGrouping: this.grouping
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
