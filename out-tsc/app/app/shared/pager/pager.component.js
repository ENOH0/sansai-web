import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PagerComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4)(1, "span", 5);
    i0.ɵɵtext(2, "\u2039 \u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.prevPath);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.prevName);
} }
function PagerComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function PagerComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "span", 5);
    i0.ɵɵtext(2, "\u0E16\u0E31\u0E14\u0E44\u0E1B \u203A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.nextPath);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.nextName);
} }
function PagerComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
/** ปุ่มนำทางไปด้านก่อนหน้าและด้านถัดไป */
export class PagerComponent {
    prevPath = '';
    prevName = '';
    nextPath = '';
    nextName = '';
    static ɵfac = function PagerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PagerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["app-pager"]], inputs: { prevPath: "prevPath", prevName: "prevName", nextPath: "nextPath", nextName: "nextName" }, decls: 5, vars: 4, consts: [["appReveal", "", 1, "pager"], ["class", "pager-link prev", 3, "routerLink", 4, "ngIf"], ["class", "pager-spacer", 4, "ngIf"], ["class", "pager-link next", 3, "routerLink", 4, "ngIf"], [1, "pager-link", "prev", 3, "routerLink"], [1, "pager-dir"], [1, "pager-name"], [1, "pager-spacer"], [1, "pager-link", "next", 3, "routerLink"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵtemplate(1, PagerComponent_a_1_Template, 5, 2, "a", 1)(2, PagerComponent_span_2_Template, 1, 0, "span", 2)(3, PagerComponent_a_3_Template, 5, 2, "a", 3)(4, PagerComponent_span_4_Template, 1, 0, "span", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.prevPath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.prevPath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.nextPath);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.nextPath);
        } }, dependencies: [CommonModule, i1.NgIf, RouterLink, RevealDirective], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pager-spacer[_ngcontent-%COMP%] { flex: 1 1 240px; }\n\n.pager-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1 1 240px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 18px 22px;\n  box-shadow: var(--shadow-sm);\n  min-height: 76px;\n  justify-content: center;\n  transition: transform .25s var(--ease), box-shadow .25s var(--ease);\n}\n\n.pager-link[_ngcontent-%COMP%]:active { transform: translateY(-2px); }\n\n@media (hover: hover) {\n  .pager-link[_ngcontent-%COMP%]:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }\n}\n\n.pager-dir[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  color: var(--ink-mute);\n  font-weight: 700;\n  letter-spacing: .05em;\n}\n\n.pager-name[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy-800);\n}\n\n.pager-link.next[_ngcontent-%COMP%] { text-align: right; align-items: flex-end; }\n\n@media print {\n  .pager[_ngcontent-%COMP%] { display: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{ selector: 'app-pager', standalone: true, imports: [CommonModule, RouterLink, RevealDirective], template: "<nav class=\"pager\" appReveal>\n  <a class=\"pager-link prev\" *ngIf=\"prevPath\" [routerLink]=\"prevPath\">\n    <span class=\"pager-dir\">\u2039 \u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32</span>\n    <span class=\"pager-name\">{{ prevName }}</span>\n  </a>\n  <span class=\"pager-spacer\" *ngIf=\"!prevPath\"></span>\n\n  <a class=\"pager-link next\" *ngIf=\"nextPath\" [routerLink]=\"nextPath\">\n    <span class=\"pager-dir\">\u0E16\u0E31\u0E14\u0E44\u0E1B \u203A</span>\n    <span class=\"pager-name\">{{ nextName }}</span>\n  </a>\n  <span class=\"pager-spacer\" *ngIf=\"!nextPath\"></span>\n</nav>\n", styles: ["/* \u0E1B\u0E38\u0E48\u0E21\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 / \u0E14\u0E49\u0E32\u0E19\u0E16\u0E31\u0E14\u0E44\u0E1B \u2014 \u0E27\u0E32\u0E07\u0E44\u0E27\u0E49\u0E17\u0E49\u0E32\u0E22\u0E17\u0E38\u0E01\u0E2B\u0E19\u0E49\u0E32 */\n:host { display: block; }\n\n.pager {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.pager-spacer { flex: 1 1 240px; }\n\n.pager-link {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  flex: 1 1 240px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 18px 22px;\n  box-shadow: var(--shadow-sm);\n  min-height: 76px;\n  justify-content: center;\n  transition: transform .25s var(--ease), box-shadow .25s var(--ease);\n}\n\n.pager-link:active { transform: translateY(-2px); }\n\n@media (hover: hover) {\n  .pager-link:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }\n}\n\n.pager-dir {\n  font-size: 14.5px;\n  color: var(--ink-mute);\n  font-weight: 700;\n  letter-spacing: .05em;\n}\n\n.pager-name {\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy-800);\n}\n\n.pager-link.next { text-align: right; align-items: flex-end; }\n\n@media print {\n  .pager { display: none !important; }\n}\n"] }]
    }], null, { prevPath: [{
            type: Input
        }], prevName: [{
            type: Input
        }], nextPath: [{
            type: Input
        }], nextName: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PagerComponent, { className: "PagerComponent", filePath: "src/app/shared/pager/pager.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=pager.component.js.map