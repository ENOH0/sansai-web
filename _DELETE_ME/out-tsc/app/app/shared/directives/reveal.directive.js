import { Directive, ElementRef, Input, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * แอนิเมชัน "เลื่อนเข้ามุมมองแล้วค่อยปรากฏ"
 * ใช้ IntersectionObserver ซึ่งรองรับดีบน Safari/iPadOS
 * และเคลื่อนไหวด้วย transform/opacity เท่านั้น เพื่อให้ลื่นไหลระดับ 60fps
 *
 *   <div appReveal>...</div>
 *   <div appReveal="left" [revealDelay]="120">...</div>
 */
export class RevealDirective {
    /** ทิศทาง: '' (ขึ้นจากล่าง) | 'left' | 'right' | 'zoom' */
    direction = '';
    /** หน่วงเวลาเป็นมิลลิวินาที เพื่อให้เกิดเอฟเฟกต์ไล่ทีละชิ้น */
    revealDelay = 0;
    /** สัดส่วนที่ต้องมองเห็นก่อนเริ่มเล่น */
    revealThreshold = 0.12;
    /** เล่นซ้ำทุกครั้งที่เลื่อนกลับมาหรือไม่ */
    revealOnce = true;
    host = inject(ElementRef);
    zone = inject(NgZone);
    platformId = inject(PLATFORM_ID);
    observer;
    ngAfterViewInit() {
        const el = this.host.nativeElement;
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
            this.observer = new IntersectionObserver(entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        if (this.revealOnce)
                            this.observer?.unobserve(entry.target);
                    }
                    else if (!this.revealOnce) {
                        entry.target.classList.remove('is-in');
                    }
                }
            }, { threshold: this.revealThreshold, rootMargin: '0px 0px -8% 0px' });
            this.observer.observe(el);
        });
    }
    ngOnDestroy() {
        this.observer?.disconnect();
    }
    classFor(dir) {
        switch (dir) {
            case 'left': return 'reveal-l';
            case 'right': return 'reveal-r';
            case 'zoom': return 'reveal-z';
            default: return 'reveal';
        }
    }
    static ɵfac = function RevealDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RevealDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RevealDirective, selectors: [["", "appReveal", ""]], inputs: { direction: [0, "appReveal", "direction"], revealDelay: "revealDelay", revealThreshold: "revealThreshold", revealOnce: "revealOnce" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RevealDirective, [{
        type: Directive,
        args: [{
                selector: '[appReveal]',
                standalone: true
            }]
    }], null, { direction: [{
            type: Input,
            args: ['appReveal']
        }], revealDelay: [{
            type: Input
        }], revealThreshold: [{
            type: Input
        }], revealOnce: [{
            type: Input
        }] }); })();
//# sourceMappingURL=reveal.directive.js.map