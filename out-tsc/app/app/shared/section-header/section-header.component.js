import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SectionHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.kicker);
} }
function SectionHeaderComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.num);
} }
function SectionHeaderComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.lead);
} }
/** หัวข้อหลักของแต่ละหมวด — มีเลขกำกับ เส้นคั่นสีทอง และคำอธิบายนำ */
export class SectionHeaderComponent {
    /** ข้อความเล็กเหนือหัวข้อ เช่น "ข้อมูลพื้นฐาน" */
    kicker = '';
    /** เลขหัวข้อ เช่น "1.1" หรือ "2.3" */
    num = '';
    title = '';
    /** คำอธิบายนำใต้หัวข้อ */
    lead = '';
    static ɵfac = function SectionHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SectionHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SectionHeaderComponent, selectors: [["app-section-header"]], inputs: { kicker: "kicker", num: "num", title: "title", lead: "lead" }, decls: 7, vars: 4, consts: [["appReveal", "", 1, "sec-head"], ["class", "sec-kicker", 4, "ngIf"], [1, "sec-title"], ["class", "num", 4, "ngIf"], [1, "sec-rule"], ["class", "sec-lead", 4, "ngIf"], [1, "sec-kicker"], [1, "num"], [1, "sec-lead"]], template: function SectionHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SectionHeaderComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(2, "h2", 2);
            i0.ɵɵtemplate(3, SectionHeaderComponent_span_3_Template, 2, 1, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 4);
            i0.ɵɵtemplate(6, SectionHeaderComponent_p_6_Template, 2, 1, "p", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.kicker);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.num);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1("", ctx.title, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.lead);
        } }, dependencies: [CommonModule, i1.NgIf, RevealDirective], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SectionHeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-section-header', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"sec-head\" appReveal>\n  <div class=\"sec-kicker\" *ngIf=\"kicker\">{{ kicker }}</div>\n  <h2 class=\"sec-title\">\n    <span class=\"num\" *ngIf=\"num\">{{ num }}</span>{{ title }}\n  </h2>\n  <div class=\"sec-rule\"></div>\n  <p class=\"sec-lead\" *ngIf=\"lead\">{{ lead }}</p>\n</div>\n", styles: ["/* \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14\n   \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: \u0E04\u0E25\u0E32\u0E2A .sec-* \u0E16\u0E39\u0E01\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css \u0E14\u0E49\u0E27\u0E22\n   \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E1A\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22 */\n:host {\n  display: block;\n}\n"] }]
    }], null, { kicker: [{
            type: Input
        }], num: [{
            type: Input
        }], title: [{
            type: Input
        }], lead: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SectionHeaderComponent, { className: "SectionHeaderComponent", filePath: "src/app/shared/section-header/section-header.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=section-header.component.js.map