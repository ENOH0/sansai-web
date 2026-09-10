import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CycleFlowComponent_div_1_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(b_r1);
} }
function CycleFlowComponent_div_1_ul_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, CycleFlowComponent_div_1_ul_9_li_1_Template, 2, 1, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r2.bullets);
} }
function CycleFlowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CycleFlowComponent_div_1_ul_9_Template, 2, 1, "ul", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r3 * 110);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.step);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r2.bullets == null ? null : s_r2.bullets.length);
} }
/**
 * วงจรการดำเนินงาน 4 ขั้น
 * ใช้กับด้านที่ 2–5 เพื่อแสดงกระบวนการทำงานที่หมุนต่อเนื่อง
 */
export class CycleFlowComponent {
    steps = [];
    static ɵfac = function CycleFlowComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CycleFlowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CycleFlowComponent, selectors: [["app-cycle-flow"]], inputs: { steps: "steps" }, decls: 2, vars: 1, consts: [[1, "cycle"], ["class", "cycle-step", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "cycle-step", 3, "revealDelay"], [1, "cycle-no"], [1, "chip", "cycle-chip"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function CycleFlowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CycleFlowComponent_div_1_Template, 10, 6, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.steps);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective], styles: ["\n\n\n[_nghost-%COMP%] { display: block; }\n\n.cycle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.cycle-step[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 24px 22px 22px;\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n}\n\n\n\n.cycle-step[_ngcontent-%COMP%]:nth-child(2) { border-top-color: var(--navy-500); }\n.cycle-step[_ngcontent-%COMP%]:nth-child(3) { border-top-color: var(--navy-400); }\n.cycle-step[_ngcontent-%COMP%]:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-no[_ngcontent-%COMP%] {\n  width: 38px; height: 38px;\n  border-radius: 11px;\n  display: grid; place-items: center;\n  background: var(--navy-50);\n  color: var(--navy-700);\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 12px;\n  border: 1px solid var(--navy-100);\n}\n\n.cycle-step[_ngcontent-%COMP%]:nth-child(4)   .cycle-no[_ngcontent-%COMP%] {\n  background: #fdf6e6;\n  color: var(--gold-600);\n  border-color: #f2e2b8;\n}\n\n.cycle-chip[_ngcontent-%COMP%] { margin-bottom: 10px; }\n\n.cycle-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { font-size: 19.5px; margin-bottom: 9px; }\n.cycle-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n\n.cycle-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding-left: 20px;\n  font-size: 17.5px;\n  color: var(--ink-soft);\n}\n.cycle-step[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 5px; }\n\n\n\n.cycle-step[_ngcontent-%COMP%]::after {\n  content: '\u203A';\n  position: absolute;\n  right: -16px; top: 50%;\n  transform: translateY(-50%);\n  font-size: 33.5px;\n  color: var(--navy-300);\n  line-height: 1;\n  z-index: 2;\n  font-weight: 700;\n}\n.cycle-step[_ngcontent-%COMP%]:last-child::after { display: none; }\n\n\n\n@media (max-width: 1180px) {\n  .cycle[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }\n  .cycle-step[_ngcontent-%COMP%]:nth-child(2)::after { display: none; }\n}\n\n\n\n@media (max-width: 834px) {\n  .cycle[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .cycle-step[_ngcontent-%COMP%]::after { display: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CycleFlowComponent, [{
        type: Component,
        args: [{ selector: 'app-cycle-flow', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"cycle\">\n  <div class=\"cycle-step\"\n       *ngFor=\"let s of steps; let i = index\"\n       appReveal=\"zoom\" [revealDelay]=\"i * 110\">\n    <div class=\"cycle-no\">{{ i + 1 }}</div>\n    <div class=\"chip cycle-chip\">{{ s.step }}</div>\n    <h4>{{ s.title }}</h4>\n    <p>{{ s.text }}</p>\n    <ul *ngIf=\"s.bullets?.length\">\n      <li *ngFor=\"let b of s.bullets\">{{ b }}</li>\n    </ul>\n  </div>\n</div>\n", styles: ["/* \u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19 4 \u0E02\u0E31\u0E49\u0E19\n   \u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u2192 \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 \u2192 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u2192 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\n:host { display: block; }\n\n.cycle {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.cycle-step {\n  position: relative;\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 24px 22px 22px;\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n}\n\n/* \u0E44\u0E25\u0E48\u0E40\u0E09\u0E14\u0E2A\u0E35\u0E08\u0E32\u0E01\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E21\u0E44\u0E1B\u0E2D\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E02\u0E31\u0E49\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\n.cycle-step:nth-child(2) { border-top-color: var(--navy-500); }\n.cycle-step:nth-child(3) { border-top-color: var(--navy-400); }\n.cycle-step:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-no {\n  width: 38px; height: 38px;\n  border-radius: 11px;\n  display: grid; place-items: center;\n  background: var(--navy-50);\n  color: var(--navy-700);\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 12px;\n  border: 1px solid var(--navy-100);\n}\n\n.cycle-step:nth-child(4) .cycle-no {\n  background: #fdf6e6;\n  color: var(--gold-600);\n  border-color: #f2e2b8;\n}\n\n.cycle-chip { margin-bottom: 10px; }\n\n.cycle-step h4 { font-size: 19.5px; margin-bottom: 9px; }\n.cycle-step p { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n\n.cycle-step ul {\n  margin: 8px 0 0;\n  padding-left: 20px;\n  font-size: 17.5px;\n  color: var(--ink-soft);\n}\n.cycle-step li { margin-bottom: 5px; }\n\n/* \u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E02\u0E31\u0E49\u0E19 */\n.cycle-step::after {\n  content: '\u203A';\n  position: absolute;\n  right: -16px; top: 50%;\n  transform: translateY(-50%);\n  font-size: 33.5px;\n  color: var(--navy-300);\n  line-height: 1;\n  z-index: 2;\n  font-weight: 700;\n}\n.cycle-step:last-child::after { display: none; }\n\n/* iPad Pro \u0E41\u0E25\u0E30\u0E08\u0E2D\u0E01\u0E25\u0E32\u0E07 \u2014 \u0E40\u0E2B\u0E25\u0E37\u0E2D 2 \u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C */\n@media (max-width: 1180px) {\n  .cycle { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }\n  .cycle-step:nth-child(2)::after { display: none; }\n}\n\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u2014 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E07\u0E21\u0E32\u0E17\u0E35\u0E25\u0E30\u0E02\u0E31\u0E49\u0E19 */\n@media (max-width: 834px) {\n  .cycle { grid-template-columns: 1fr; }\n  .cycle-step::after { display: none; }\n}\n"] }]
    }], null, { steps: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CycleFlowComponent, { className: "CycleFlowComponent", filePath: "src/app/shared/cycle-flow/cycle-flow.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=cycle-flow.component.js.map