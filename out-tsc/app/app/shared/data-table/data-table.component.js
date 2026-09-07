import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function DataTableComponent_caption_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "caption");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.caption);
} }
function DataTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const h_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("num", i_r3 >= ctx_r0.numFrom);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(h_r2);
} }
function DataTableComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("num", i_r5 >= ctx_r0.numFrom);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r4);
} }
function DataTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, DataTableComponent_tr_7_td_1_Template, 2, 3, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    i0.ɵɵclassProp("total", r_r6.total);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", r_r6.cells);
} }
function DataTableComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.note);
} }
/** ตารางข้อมูลพร้อมคำอธิบายหัวตาราง เลื่อนแนวนอนได้บนจอแคบ */
export class DataTableComponent {
    /** ข้อความหัวตาราง เช่น "ตารางที่ 1.1 ..." */
    caption = '';
    /** คำอธิบายใต้ตาราง */
    note = '';
    headers = [];
    rows = [];
    /** คอลัมน์ตั้งแต่ลำดับนี้ไปจัดชิดขวาแบบตัวเลข */
    numFrom = 1;
    static ɵfac = function DataTableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DataTableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["app-data-table"]], inputs: { caption: "caption", note: "note", headers: "headers", rows: "rows", numFrom: "numFrom" }, decls: 9, vars: 4, consts: [["appReveal", "", 1, "table-scroll"], [1, "tbl"], [4, "ngIf"], [3, "num", 4, "ngFor", "ngForOf"], [3, "total", 4, "ngFor", "ngForOf"], ["class", "chart-note", 4, "ngIf"], [1, "chart-note"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "table", 1);
            i0.ɵɵtemplate(2, DataTableComponent_caption_2_Template, 2, 1, "caption", 2);
            i0.ɵɵelementStart(3, "thead")(4, "tr");
            i0.ɵɵtemplate(5, DataTableComponent_th_5_Template, 2, 3, "th", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "tbody");
            i0.ɵɵtemplate(7, DataTableComponent_tr_7_Template, 2, 3, "tr", 4);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(8, DataTableComponent_p_8_Template, 2, 1, "p", 5);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.caption);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.headers);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.note);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective], styles: ["\n\n\n\n[_nghost-%COMP%] { display: block; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: 'app-data-table', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"table-scroll\" appReveal>\n  <table class=\"tbl\">\n    <caption *ngIf=\"caption\">{{ caption }}</caption>\n    <thead>\n      <tr>\n        <th *ngFor=\"let h of headers; let i = index\" [class.num]=\"i >= numFrom\">{{ h }}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let r of rows\" [class.total]=\"r.total\">\n        <td *ngFor=\"let c of r.cells; let i = index\" [class.num]=\"i >= numFrom\">{{ c }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p class=\"chart-note\" *ngIf=\"note\">{{ note }}</p>\n", styles: ["/* \u0E15\u0E32\u0E23\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u2014 \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E1A\u0E19 iPad\n   \u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: .table-scroll \u0E41\u0E25\u0E30 table.tbl \u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css\n   \u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E1A\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E1A\u0E1A\u0E40\u0E02\u0E35\u0E22\u0E19\u0E40\u0E2D\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 */\n:host { display: block; }\n"] }]
    }], null, { caption: [{
            type: Input
        }], note: [{
            type: Input
        }], headers: [{
            type: Input
        }], rows: [{
            type: Input
        }], numFrom: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableComponent, { className: "DataTableComponent", filePath: "src/app/shared/data-table/data-table.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data-table.component.js.map