import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MeterListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
function MeterListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 12);
    i0.ɵɵelement(8, "div", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_4_0;
    const r_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_4_0 = r_r2.display) !== null && tmp_4_0 !== undefined ? tmp_4_0 : i0.ɵɵpipeBind2(6, 9, r_r2.value, "1.2-2"), "", ctx_r0.suffix, "");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r0.pct(r_r2.value), "%")("background", r_r2.color ? r_r2.color : null)("animation-delay", i_r3 * 90 + "ms");
} }
function MeterListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.note);
} }
/** แถบเปรียบเทียบแนวนอน — เหมาะกับข้อมูลร้อยละหลายรายการ อ่านง่ายบนจอสัมผัส */
export class MeterListComponent {
    title = '';
    subtitle = '';
    note = '';
    rows = [];
    max = 100;
    suffix = '%';
    pct(v) {
        return Math.max(0, Math.min(100, (v / this.max) * 100));
    }
    static ɵfac = function MeterListComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MeterListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MeterListComponent, selectors: [["app-meter-list"]], inputs: { title: "title", subtitle: "subtitle", note: "note", rows: "rows", max: "max", suffix: "suffix" }, decls: 9, vars: 4, consts: [["appReveal", "", 1, "chart-card"], [1, "chart-head"], [1, "chart-title"], ["class", "chart-sub", 4, "ngIf"], [1, "meter-body"], ["class", "meter", 4, "ngFor", "ngForOf"], ["class", "chart-note", 4, "ngIf"], [1, "chart-sub"], [1, "meter"], [1, "meter-head"], [1, "meter-name"], [1, "meter-val"], [1, "meter-track"], [1, "meter-fill"], [1, "chart-note"]], template: function MeterListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, MeterListComponent_div_5_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵtemplate(7, MeterListComponent_div_7_Template, 9, 12, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, MeterListComponent_p_8_Template, 2, 1, "p", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.note);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, RevealDirective], styles: ["\n\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.meter[_ngcontent-%COMP%] { margin-bottom: 16px; }\n\n.meter-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 17px;\n  margin-bottom: 6px;\n}\n\n.meter-name[_ngcontent-%COMP%] { font-weight: 600; color: var(--ink); }\n.meter-val[_ngcontent-%COMP%] { font-weight: 700; color: var(--navy-700); font-variant-numeric: tabular-nums; }\n\n.meter-track[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 999px;\n  background: var(--navy-50);\n  overflow: hidden;\n}\n\n.meter-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  background: linear-gradient(90deg, var(--navy-500), var(--navy-800));\n  transform-origin: left center;\n  transform: scaleX(0);\n}\n\n.is-in[_nghost-%COMP%]   .meter-fill[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .meter-fill[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .meter-fill[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fillBar 1.1s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fillBar { to { transform: scaleX(1); } }\n\n.meter-body[_ngcontent-%COMP%] { margin-top: 18px; }\n\n@media (prefers-reduced-motion: reduce) {\n  .meter-fill[_ngcontent-%COMP%] { animation: none !important; transform: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MeterListComponent, [{
        type: Component,
        args: [{ selector: 'app-meter-list', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"chart-card\" appReveal>\n  <div class=\"chart-head\">\n    <div>\n      <div class=\"chart-title\">{{ title }}</div>\n      <div class=\"chart-sub\" *ngIf=\"subtitle\">{{ subtitle }}</div>\n    </div>\n  </div>\n\n  <div class=\"meter-body\">\n    <div class=\"meter\" *ngFor=\"let r of rows; let i = index\">\n      <div class=\"meter-head\">\n        <span class=\"meter-name\">{{ r.name }}</span>\n        <span class=\"meter-val\">{{ r.display ?? (r.value | number: '1.2-2') }}{{ suffix }}</span>\n      </div>\n      <div class=\"meter-track\">\n        <div class=\"meter-fill\"\n             [style.width.%]=\"pct(r.value)\"\n             [style.background]=\"r.color ? r.color : null\"\n             [style.animation-delay]=\"i * 90 + 'ms'\"></div>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"chart-note\" *ngIf=\"note\">{{ note }}</p>\n</div>\n", styles: ["/* \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E23\u0E32\u0E1F\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u0E0A\u0E19\u0E34\u0E14 \u0E08\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E0A\u0E19\u0E34\u0E14\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host { display: block; }\n\n/* \u0E41\u0E16\u0E1A\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19 */\n.meter { margin-bottom: 16px; }\n\n.meter-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 17px;\n  margin-bottom: 6px;\n}\n\n.meter-name { font-weight: 600; color: var(--ink); }\n.meter-val { font-weight: 700; color: var(--navy-700); font-variant-numeric: tabular-nums; }\n\n.meter-track {\n  height: 12px;\n  border-radius: 999px;\n  background: var(--navy-50);\n  overflow: hidden;\n}\n\n.meter-fill {\n  height: 100%;\n  border-radius: 999px;\n  background: linear-gradient(90deg, var(--navy-500), var(--navy-800));\n  transform-origin: left center;\n  transform: scaleX(0);\n}\n\n:host-context(.is-in) .meter-fill,\n.is-in .meter-fill {\n  animation: fillBar 1.1s var(--ease) forwards;\n}\n\n@keyframes fillBar { to { transform: scaleX(1); } }\n\n.meter-body { margin-top: 18px; }\n\n@media (prefers-reduced-motion: reduce) {\n  .meter-fill { animation: none !important; transform: none !important; }\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], note: [{
            type: Input
        }], rows: [{
            type: Input
        }], max: [{
            type: Input
        }], suffix: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MeterListComponent, { className: "MeterListComponent", filePath: "src/app/shared/meter-list/meter-list.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=meter-list.component.js.map