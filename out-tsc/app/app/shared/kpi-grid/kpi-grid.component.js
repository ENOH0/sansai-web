import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CountUpDirective } from '../directives/count-up.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function KpiGridComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(k_r1.unit);
} }
function KpiGridComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const k_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(k_r1.note);
} }
function KpiGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "span", 4);
    i0.ɵɵtemplate(3, KpiGridComponent_div_1_span_3_Template, 2, 1, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, KpiGridComponent_div_1_div_6_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_6_0;
    const k_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵclassProp("stat-gold", i_r2 % 4 === 3);
    i0.ɵɵproperty("revealDelay", i_r2 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("appCountUp", k_r1.value)("decimals", (tmp_6_0 = k_r1.decimals) !== null && tmp_6_0 !== undefined ? tmp_6_0 : 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", k_r1.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(k_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", k_r1.note);
} }
/** แถวการ์ดตัวเลขสถิติ 4 ใบ ใช้เปิดหัวของแต่ละด้าน */
export class KpiGridComponent {
    items = [];
    static ɵfac = function KpiGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || KpiGridComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: KpiGridComponent, selectors: [["app-kpi-grid"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "grid", "grid-4"], ["class", "stat", "appReveal", "", 3, "stat-gold", "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "stat", 3, "revealDelay"], [1, "stat-value"], [3, "appCountUp", "decimals"], ["class", "stat-unit", 4, "ngIf"], [1, "stat-label"], ["class", "stat-note", 4, "ngIf"], [1, "stat-unit"], [1, "stat-note"]], template: function KpiGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, KpiGridComponent_div_1_Template, 7, 8, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, CountUpDirective], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n.stat[_ngcontent-%COMP%] {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 24px 22px;\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n\n\n\n.stat[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  left: 0; top: 0; bottom: 0;\n  width: 4px;\n  background: linear-gradient(180deg, var(--navy-500), var(--navy-800));\n}\n\n\n\n.stat-gold[_ngcontent-%COMP%]::before {\n  background: linear-gradient(180deg, var(--gold-400), var(--gold-600));\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-family: 'Noto Serif Thai', serif;\n  font-weight: 700;\n  font-size: clamp(28px, 3.4vw, 38px);\n  color: var(--navy-800);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n\n.stat-unit[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ink-mute);\n  font-weight: 600;\n  margin-left: 4px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--ink-soft);\n  margin-top: 4px;\n  font-weight: 600;\n}\n\n.stat-note[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--ink-mute);\n  margin-top: 2px;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KpiGridComponent, [{
        type: Component,
        args: [{ selector: 'app-kpi-grid', standalone: true, imports: [CommonModule, RevealDirective, CountUpDirective], template: "<div class=\"grid grid-4\">\n  <div class=\"stat\"\n       *ngFor=\"let k of items; let i = index\"\n       [class.stat-gold]=\"i % 4 === 3\"\n       appReveal [revealDelay]=\"i * 90\">\n    <div class=\"stat-value\">\n      <span [appCountUp]=\"k.value\" [decimals]=\"k.decimals ?? 0\"></span>\n      <span class=\"stat-unit\" *ngIf=\"k.unit\">{{ k.unit }}</span>\n    </div>\n    <div class=\"stat-label\">{{ k.label }}</div>\n    <div class=\"stat-note\" *ngIf=\"k.note\">{{ k.note }}</div>\n  </div>\n</div>\n", styles: ["/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2A\u0E16\u0E34\u0E15\u0E34 \u2014 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E30\u0E19\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E16\u0E36\u0E07 */\n:host { display: block; }\n\n.stat {\n  background: var(--paper);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 24px 22px;\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n}\n\n/* \u0E41\u0E16\u0E1A\u0E2A\u0E35\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14 */\n.stat::before {\n  content: '';\n  position: absolute;\n  left: 0; top: 0; bottom: 0;\n  width: 4px;\n  background: linear-gradient(180deg, var(--navy-500), var(--navy-800));\n}\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E43\u0E1A\u0E17\u0E35\u0E48 4 \u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E31\u0E14\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E30\u0E2A\u0E32\u0E22\u0E15\u0E32 */\n.stat-gold::before {\n  background: linear-gradient(180deg, var(--gold-400), var(--gold-600));\n}\n\n.stat-value {\n  font-family: 'Noto Serif Thai', serif;\n  font-weight: 700;\n  font-size: clamp(28px, 3.4vw, 38px);\n  color: var(--navy-800);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n\n.stat-unit {\n  font-size: 16px;\n  color: var(--ink-mute);\n  font-weight: 600;\n  margin-left: 4px;\n}\n\n.stat-label {\n  font-size: 15px;\n  color: var(--ink-soft);\n  margin-top: 4px;\n  font-weight: 600;\n}\n\n.stat-note {\n  font-size: 13.5px;\n  color: var(--ink-mute);\n  margin-top: 2px;\n}\n"] }]
    }], null, { items: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(KpiGridComponent, { className: "KpiGridComponent", filePath: "src/app/shared/kpi-grid/kpi-grid.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=kpi-grid.component.js.map