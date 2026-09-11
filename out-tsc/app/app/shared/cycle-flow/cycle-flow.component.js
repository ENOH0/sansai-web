import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CycleFlowComponent_article_1_div_11_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(b_r4);
} }
function CycleFlowComponent_article_1_div_11_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, CycleFlowComponent_article_1_div_11_ul_3_li_1_Template, 2, 1, "li", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r5.bullets);
} }
function CycleFlowComponent_article_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CycleFlowComponent_article_1_div_11_ul_3_Template, 2, 1, "ul", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const s_r5 = ctx_r5.$implicit;
    const i_r2 = ctx_r5.index;
    i0.ɵɵproperty("id", "cycle-detail-" + i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r5.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r5.bullets == null ? null : s_r5.bullets.length);
} }
function CycleFlowComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 2)(1, "button", 3);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_Template_button_click_1_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggle(i_r2)); });
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 5)(5, "span", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 7);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 8);
    i0.ɵɵelement(10, "path", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CycleFlowComponent_article_1_div_11_Template, 4, 3, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r2.isOpen(i_r2));
    i0.ɵɵproperty("revealDelay", i_r2 * 110);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r2.isOpen(i_r2))("aria-controls", "cycle-detail-" + i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r2 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(s_r5.step);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r5.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.isOpen(i_r2));
} }
/**
 * วงจรการดำเนินงาน 4 ขั้น
 * ใช้กับด้านที่ 2–5 เพื่อแสดงกระบวนการทำงานที่หมุนต่อเนื่อง
 */
export class CycleFlowComponent {
    _steps = [];
    openIndex = signal(null);
    set steps(value) {
        this._steps = value ?? [];
        this.openIndex.set(null);
    }
    get steps() { return this._steps; }
    isOpen(index) { return this.openIndex() === index; }
    /** เปิดได้ทีละขั้น เพื่อให้ดูข้อมูลบน iPad ได้กระชับ */
    toggle(index) {
        this.openIndex.update(open => open === index ? null : index);
    }
    static ɵfac = function CycleFlowComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CycleFlowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CycleFlowComponent, selectors: [["app-cycle-flow"]], inputs: { steps: "steps" }, decls: 2, vars: 1, consts: [[1, "cycle"], ["class", "cycle-step", "appReveal", "zoom", 3, "is-open", "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "cycle-step", 3, "revealDelay"], ["type", "button", 1, "cycle-head", 3, "click"], [1, "cycle-no"], [1, "cycle-head-text"], [1, "chip", "cycle-chip"], [1, "cycle-title"], ["width", "30", "height", "30", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "cycle-chevron"], ["d", "m6 9 6 6 6-6"], ["class", "cycle-detail", 3, "id", 4, "ngIf"], [1, "cycle-detail", 3, "id"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function CycleFlowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CycleFlowComponent_article_1_Template, 12, 9, "article", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.steps);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective], styles: ["\r\n\n\r\n[_nghost-%COMP%] { display: block; }\r\n\r\n.cycle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 28px;\n  row-gap: 56px;\n  align-items: start;\n}\n\r\n.cycle-step[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: var(--paper);\r\n  border: 1px solid var(--line);\r\n  border-radius: var(--radius);\r\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n  \n\n  overflow: visible;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease);\n}\n.cycle-step.is-open[_ngcontent-%COMP%] { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n\r\n\n\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(2) { border-top-color: var(--navy-500); }\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(3) { border-top-color: var(--navy-400); }\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 30px;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 108px;\n  padding: 18px 20px;\n  color: inherit;\n  text-align: left;\n  font-family: inherit;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cycle-head[_ngcontent-%COMP%]:active { background: var(--navy-50); }\n.cycle-head-text[_ngcontent-%COMP%] { display: grid; gap: 6px; min-width: 0; }\n\r\n.cycle-no[_ngcontent-%COMP%] {\r\n  width: 38px; height: 38px;\r\n  border-radius: 11px;\r\n  display: grid; place-items: center;\r\n  background: var(--navy-50);\r\n  color: var(--navy-700);\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  border: 1px solid var(--navy-100);\n}\n\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(4)   .cycle-no[_ngcontent-%COMP%] {\r\n  background: #fdf6e6;\r\n  color: var(--gold-600);\r\n  border-color: #f2e2b8;\r\n}\r\n\r\n.cycle-chip[_ngcontent-%COMP%] { justify-self: start; }\n.cycle-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.cycle-chevron[_ngcontent-%COMP%] { color: var(--navy-500); transition: transform .22s var(--ease); }\n.cycle-step.is-open[_ngcontent-%COMP%]   .cycle-chevron[_ngcontent-%COMP%] { transform: rotate(180deg); }\n\n.cycle-detail[_ngcontent-%COMP%] { padding: 0 20px 22px 72px; animation: _ngcontent-%COMP%_cycleDetailIn .24s var(--ease) both; }\n.cycle-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n\n.cycle-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\r\n  padding-left: 20px;\r\n  font-size: 17.5px;\r\n  color: var(--ink-soft);\r\n}\r\n.cycle-detail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 5px; }\n\n@keyframes _ngcontent-%COMP%_cycleDetailIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\r\n\n\r\n.cycle-step[_ngcontent-%COMP%]::after {\r\n  content: '\u203A';\r\n  position: absolute;\r\n  right: -16px; top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 42px;\n  color: var(--navy-300);\r\n  line-height: 1;\r\n  z-index: 2;\r\n  font-weight: 700;\r\n}\r\n.cycle-step[_ngcontent-%COMP%]:last-child::after { display: none; }\n\n\n\n.cycle-step[_ngcontent-%COMP%]:nth-child(2)::after { display: none; }\n\r\n\n\n@media (max-width: 834px) {\n  .cycle[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 20px; }\n  .cycle-step[_ngcontent-%COMP%]::after { display: none; }\n  .cycle-step[_ngcontent-%COMP%]:nth-child(2)::after { display: none; }\n}\n\n@media (max-width: 560px) {\n  .cycle-head[_ngcontent-%COMP%] { min-height: 94px; padding: 15px; gap: 10px; }\n  .cycle-title[_ngcontent-%COMP%] { font-size: 17px; }\n  .cycle-detail[_ngcontent-%COMP%] { padding: 0 15px 18px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cycle-chevron[_ngcontent-%COMP%] { transition: none; }\n  .cycle-detail[_ngcontent-%COMP%] { animation: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CycleFlowComponent, [{
        type: Component,
        args: [{ selector: 'app-cycle-flow', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"cycle\">\r\n  <article class=\"cycle-step\" *ngFor=\"let s of steps; let i = index\"\n           [class.is-open]=\"isOpen(i)\" appReveal=\"zoom\" [revealDelay]=\"i * 110\">\n    <button type=\"button\" class=\"cycle-head\" (click)=\"toggle(i)\"\n            [attr.aria-expanded]=\"isOpen(i)\" [attr.aria-controls]=\"'cycle-detail-' + i\">\n      <span class=\"cycle-no\">{{ i + 1 }}</span>\n      <span class=\"cycle-head-text\">\n        <span class=\"chip cycle-chip\">{{ s.step }}</span>\n        <span class=\"cycle-title\">{{ s.title }}</span>\n      </span>\n      <svg class=\"cycle-chevron\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\"\n           stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"m6 9 6 6 6-6\" />\n      </svg>\n    </button>\n    <div class=\"cycle-detail\" *ngIf=\"isOpen(i)\" [id]=\"'cycle-detail-' + i\">\n      <p>{{ s.text }}</p>\n      <ul *ngIf=\"s.bullets?.length\"><li *ngFor=\"let b of s.bullets\">{{ b }}</li></ul>\n    </div>\n  </article>\n</div>\n", styles: ["/* \u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19 4 \u0E02\u0E31\u0E49\u0E19\r\n   \u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u2192 \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 \u2192 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u2192 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\r\n:host { display: block; }\r\n\r\n.cycle {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 28px;\n  row-gap: 56px;\n  align-items: start;\n}\n\r\n.cycle-step {\r\n  position: relative;\r\n  background: var(--paper);\r\n  border: 1px solid var(--line);\r\n  border-radius: var(--radius);\r\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n  /* \u0E43\u0E2B\u0E49\u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E22\u0E37\u0E48\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E01\u0E25\u0E32\u0E07\u0E44\u0E14\u0E49 */\n  overflow: visible;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease);\n}\n.cycle-step.is-open { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n\r\n/* \u0E44\u0E25\u0E48\u0E40\u0E09\u0E14\u0E2A\u0E35\u0E08\u0E32\u0E01\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E21\u0E44\u0E1B\u0E2D\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E02\u0E31\u0E49\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\r\n.cycle-step:nth-child(2) { border-top-color: var(--navy-500); }\r\n.cycle-step:nth-child(3) { border-top-color: var(--navy-400); }\r\n.cycle-step:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-head {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 30px;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 108px;\n  padding: 18px 20px;\n  color: inherit;\n  text-align: left;\n  font-family: inherit;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cycle-head:active { background: var(--navy-50); }\n.cycle-head-text { display: grid; gap: 6px; min-width: 0; }\n\r\n.cycle-no {\r\n  width: 38px; height: 38px;\r\n  border-radius: 11px;\r\n  display: grid; place-items: center;\r\n  background: var(--navy-50);\r\n  color: var(--navy-700);\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  border: 1px solid var(--navy-100);\n}\n\r\n.cycle-step:nth-child(4) .cycle-no {\r\n  background: #fdf6e6;\r\n  color: var(--gold-600);\r\n  border-color: #f2e2b8;\r\n}\r\n\r\n.cycle-chip { justify-self: start; }\n.cycle-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.cycle-chevron { color: var(--navy-500); transition: transform .22s var(--ease); }\n.cycle-step.is-open .cycle-chevron { transform: rotate(180deg); }\n\n.cycle-detail { padding: 0 20px 22px 72px; animation: cycleDetailIn .24s var(--ease) both; }\n.cycle-detail p { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n\n.cycle-detail ul {\n  margin: 8px 0 0;\r\n  padding-left: 20px;\r\n  font-size: 17.5px;\r\n  color: var(--ink-soft);\r\n}\r\n.cycle-detail li { margin-bottom: 5px; }\n\n@keyframes cycleDetailIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\r\n/* \u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E02\u0E31\u0E49\u0E19 */\r\n.cycle-step::after {\r\n  content: '\u203A';\r\n  position: absolute;\r\n  right: -16px; top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 42px;\n  color: var(--navy-300);\r\n  line-height: 1;\r\n  z-index: 2;\r\n  font-weight: 700;\r\n}\r\n.cycle-step:last-child::after { display: none; }\n\n/* \u0E02\u0E31\u0E49\u0E19 2 \u2192 3 \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E16\u0E27 \u0E08\u0E36\u0E07\u0E43\u0E0A\u0E49\u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E09\u0E35\u0E22\u0E07\u0E25\u0E07\u0E0B\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E41\u0E16\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B */\n.cycle-step:nth-child(2)::after { display: none; }\n\r\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u2014 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E07\u0E21\u0E32\u0E17\u0E35\u0E25\u0E30\u0E02\u0E31\u0E49\u0E19 */\n@media (max-width: 834px) {\n  .cycle { grid-template-columns: 1fr; gap: 20px; }\n  .cycle-step::after { display: none; }\n  .cycle-step:nth-child(2)::after { display: none; }\n}\n\n@media (max-width: 560px) {\n  .cycle-head { min-height: 94px; padding: 15px; gap: 10px; }\n  .cycle-title { font-size: 17px; }\n  .cycle-detail { padding: 0 15px 18px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cycle-chevron { transition: none; }\n  .cycle-detail { animation: none; }\n}\n"] }]
    }], null, { steps: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CycleFlowComponent, { className: "CycleFlowComponent", filePath: "src/app/shared/cycle-flow/cycle-flow.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=cycle-flow.component.js.map