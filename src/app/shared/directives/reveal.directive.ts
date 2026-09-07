import {
  Directive, ElementRef, Input, OnDestroy, AfterViewInit, inject, NgZone, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * แอนิเมชัน "เลื่อนเข้ามุมมองแล้วค่อยปรากฏ"
 * ใช้ IntersectionObserver ซึ่งรองรับดีบน Safari/iPadOS
 * และเคลื่อนไหวด้วย transform/opacity เท่านั้น เพื่อให้ลื่นไหลระดับ 60fps
 *
 *   <div appReveal>...</div>
 *   <div appReveal="left" [revealDelay]="120">...</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** ทิศทาง: '' (ขึ้นจากล่าง) | 'left' | 'right' | 'zoom' */
  @Input('appReveal') direction: '' | 'left' | 'right' | 'zoom' = '';
  /** หน่วงเวลาเป็นมิลลิวินาที เพื่อให้เกิดเอฟเฟกต์ไล่ทีละชิ้น */
  @Input() revealDelay = 0;
  /** สัดส่วนที่ต้องมองเห็นก่อนเริ่มเล่น */
  @Input() revealThreshold = 0.12;
  /** เล่นซ้ำทุกครั้งที่เลื่อนกลับมาหรือไม่ */
  @Input() revealOnce = true;

  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private zone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    el.classList.add(this.classFor(this.direction));

    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }

    if (this.revealDelay) {
      el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    // สังเกตการณ์นอก Angular zone เพื่อไม่ให้กระตุ้น change detection ทุกเฟรม
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              if (this.revealOnce) this.observer?.unobserve(entry.target);
            } else if (!this.revealOnce) {
              entry.target.classList.remove('is-in');
            }
          }
        },
        { threshold: this.revealThreshold, rootMargin: '0px 0px -8% 0px' }
      );
      this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private classFor(dir: string): string {
    switch (dir) {
      case 'left': return 'reveal-l';
      case 'right': return 'reveal-r';
      case 'zoom': return 'reveal-z';
      default: return 'reveal';
    }
  }
}
