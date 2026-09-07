import { Directive, ElementRef, Input, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * นับตัวเลขขึ้นเมื่อเลื่อนถึง — ใช้กับการ์ดสถิติ
 *   <span [appCountUp]="96.09" [decimals]="2"></span>
 */
export class CountUpDirective {
    target = 0;
    decimals = 0;
    duration = 1400;
    /** ใส่ตัวคั่นหลักพัน เช่น 2,198 */
    grouping = true;
    host = inject(ElementRef);
    zone = inject(NgZone);
    platformId = inject(PLATFORM_ID);
    observer;
    raf = 0;
    ngAfterViewInit() {
        const el = this.host.nativeElement;
        if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
            el.textContent = this.format(this.target);
            return;
        }
        const reduced = typeof matchMedia !== 'undefined' &&
            matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) {
            el.textContent = this.format(this.target);
            return;
        }
        el.textContent = this.format(0);
        this.zone.runOutsideAngular(() => {
            this.observer = new IntersectionObserver(entries => {
                if (entries.some(e => e.isIntersecting)) {
                    this.observer?.disconnect();
                    this.animate(el);
                }
            }, { threshold: 0.3 });
            this.observer.observe(el);
        });
    }
    animate(el) {
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min(1, (now - start) / this.duration);
            // easeOutCubic — เร็วตอนต้น ช้าตอนจบ ให้ความรู้สึกนุ่มนวล
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = this.format(this.target * eased);
            if (p < 1)
                this.raf = requestAnimationFrame(tick);
        };
        this.raf = requestAnimationFrame(tick);
    }
    format(v) {
        return v.toLocaleString('th-TH', {
            minimumFractionDigits: this.decimals,
            maximumFractionDigits: this.decimals,
            useGrouping: this.grouping
        });
    }
    ngOnDestroy() {
        this.observer?.disconnect();
        if (this.raf)
            cancelAnimationFrame(this.raf);
    }
    static ɵfac = function CountUpDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CountUpDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CountUpDirective, selectors: [["", "appCountUp", ""]], inputs: { target: [0, "appCountUp", "target"], decimals: "decimals", duration: "duration", grouping: "grouping" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountUpDirective, [{
        type: Directive,
        args: [{
                selector: '[appCountUp]',
                standalone: true
            }]
    }], null, { target: [{
            type: Input,
            args: ['appCountUp']
        }], decimals: [{
            type: Input
        }], duration: [{
            type: Input
        }], grouping: [{
            type: Input
        }] }); })();
//# sourceMappingURL=count-up.directive.js.map