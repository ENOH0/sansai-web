import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function CalloutComponent_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.label, " ");
} }
/** กล่องข้อความเน้น มีแถบสีด้านซ้าย — ใส่เนื้อหาผ่าน ng-content */
export class CalloutComponent {
    /** ข้อความตัวหนานำหน้า เช่น "จุดเด่น:" */
    label = '';
    /** true = ใช้โทนสีทองแทนสีน้ำเงิน */
    gold = false;
    static ɵfac = function CalloutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CalloutComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalloutComponent, selectors: [["app-callout"]], inputs: { label: "label", gold: "gold" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["appReveal", "", 1, "callout"], [4, "ngIf"]], template: function CalloutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CalloutComponent_strong_1_Template, 2, 1, "strong", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("callout-gold", ctx.gold);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.label);
        } }, dependencies: [CommonModule, i1.NgIf, RevealDirective], styles: ["\n\n\n\n[_nghost-%COMP%] { display: block; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalloutComponent, [{
        type: Component,
        args: [{ selector: 'app-callout', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"callout\" [class.callout-gold]=\"gold\" appReveal>\n  <strong *ngIf=\"label\">{{ label }} </strong><ng-content></ng-content>\n</div>\n", styles: ["/* \u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E19\u0E49\u0E19 \u2014 \u0E43\u0E0A\u0E49\u0E2A\u0E23\u0E38\u0E1B\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38\u0E2A\u0E33\u0E04\u0E31\u0E0D\n   \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: .callout \u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css \u0E14\u0E49\u0E27\u0E22\n   \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E1A\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E19\u0E35\u0E49\u0E41\u0E1A\u0E1A\u0E40\u0E02\u0E35\u0E22\u0E19\u0E40\u0E2D\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 */\n:host { display: block; }\n"] }]
    }], null, { label: [{
            type: Input
        }], gold: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CalloutComponent, { className: "CalloutComponent", filePath: "src/app/shared/callout/callout.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=callout.component.js.map