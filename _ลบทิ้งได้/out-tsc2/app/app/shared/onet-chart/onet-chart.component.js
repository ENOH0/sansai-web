import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { CHART_PALETTE } from '../../core/models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function OnetChartComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function OnetChartComponent_button_4_Template_button_click_0_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.select(i_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-on", ctx_r2.selectedIndex === i_r2);
    i0.ɵɵattribute("aria-selected", ctx_r2.selectedIndex === i_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r4.name);
} }
function OnetChartComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 11)(4, "span", 12);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 13);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 14);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", d_r5.year, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 8, d_r5.school, "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 ", i0.ɵɵpipeBind2(9, 11, d_r5.nation, "1.2-2"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("up", d_r5.diff >= 0)("down", d_r5.diff < 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.signed(d_r5.diff), " ");
} }
function OnetChartComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, OnetChartComponent_div_6_div_1_Template, 12, 14, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.diffs);
} }
function OnetChartComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, " \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " \u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.current.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.yearsAbove);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u0E1B\u0E35 \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ", ctx_r2.years.length, " \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ");
} }
/**
 * กราฟเปรียบเทียบ O-NET แบบเลือกดูรายวิชาได้
 *
 * กรรมการแตะปุ่มชื่อวิชาเพื่อดูทีละวิชา ทำให้เห็นช่องว่างระหว่าง
 * ค่าเฉลี่ยของโรงเรียนกับระดับประเทศได้ชัดเจน ไม่ต้องอ่านเส้น 10 เส้นพร้อมกัน
 * และยังเลือก "ทุกวิชา" เพื่อดูภาพรวมได้เหมือนเดิม
 */
export class OnetChartComponent {
    /** ชื่อกราฟ เช่น "ค่าเฉลี่ย O-NET ชั้น ม.6" */
    title = '';
    subtitle = '';
    note = '';
    /** ป้ายแกน X เช่น ['2566','2567','2568'] */
    years = [];
    subjects = [];
    /** ลำดับวิชาที่เลือกอยู่ (-1 = แสดงทุกวิชา) */
    selectedIndex = -1;
    select(i) {
        this.selectedIndex = i;
    }
    /** วิชาที่กำลังแสดง (undefined เมื่อเลือกทุกวิชา) */
    get current() {
        return this.selectedIndex >= 0 ? this.subjects[this.selectedIndex] : undefined;
    }
    get chartSubtitle() {
        return this.current
            ? `รายวิชา${this.current.name} · เส้นทึบ = โรงเรียน, เส้นประ = ระดับประเทศ`
            : this.subtitle;
    }
    /** เส้นกราฟที่จะวาด — เปลี่ยนตามวิชาที่เลือก */
    get series() {
        const c = this.current;
        // เลือกรายวิชาเดียว: ใช้สีน้ำเงินคู่กับสีแดงเพื่อให้เห็นช่องว่างชัด
        if (c) {
            return [
                { name: 'ค่าเฉลี่ยของโรงเรียน', values: c.school, color: '#1e4d9e' },
                { name: 'ค่าเฉลี่ยระดับประเทศ', values: c.nation, color: '#b4433a', dashed: true }
            ];
        }
        // ทุกวิชา: วิชาละหนึ่งสี เส้นทึบคือโรงเรียน เส้นประคือระดับประเทศ
        return this.subjects.flatMap((s, i) => ([
            { name: `${s.name} (โรงเรียน)`, values: s.school, color: CHART_PALETTE[i % CHART_PALETTE.length] },
            { name: `${s.name} (ประเทศ)`, values: s.nation, color: CHART_PALETTE[i % CHART_PALETTE.length], dashed: true }
        ]));
    }
    /** ผลต่างระหว่างโรงเรียนกับระดับประเทศในแต่ละปี ของวิชาที่เลือก */
    get diffs() {
        const c = this.current;
        if (!c)
            return [];
        return this.years.map((year, i) => ({
            year,
            school: c.school[i],
            nation: c.nation[i],
            diff: c.school[i] - c.nation[i]
        }));
    }
    /** จำนวนปีที่โรงเรียนทำได้สูงกว่าค่าเฉลี่ยระดับประเทศ */
    get yearsAbove() {
        return this.diffs.filter(d => d.diff > 0).length;
    }
    signed(v) {
        return (v >= 0 ? '+' : '') + v.toFixed(2);
    }
    static ɵfac = function OnetChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OnetChartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OnetChartComponent, selectors: [["app-onet-chart"]], inputs: { title: "title", subtitle: "subtitle", note: "note", years: "years", subjects: "subjects" }, decls: 8, vars: 13, consts: [[1, "onet"], ["role", "tablist", 1, "onet-tabs"], ["type", "button", "role", "tab", 1, "onet-tab", 3, "click"], ["type", "button", "class", "onet-tab", "role", "tab", 3, "is-on", "click", 4, "ngFor", "ngForOf"], [3, "title", "subtitle", "labels", "series", "showValues", "note"], ["class", "onet-diffs", 4, "ngIf"], ["class", "onet-conclusion", 4, "ngIf"], [1, "onet-diffs"], ["class", "onet-diff", 4, "ngFor", "ngForOf"], [1, "onet-diff"], [1, "onet-diff-year"], [1, "onet-diff-main"], [1, "onet-diff-value"], [1, "onet-diff-vs"], [1, "onet-diff-gap"], [1, "onet-conclusion"]], template: function OnetChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function OnetChartComponent_Template_button_click_2_listener() { return ctx.select(-1); });
            i0.ɵɵtext(3, "\u0E17\u0E38\u0E01\u0E27\u0E34\u0E0A\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, OnetChartComponent_button_4_Template, 2, 4, "button", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-line-chart", 4);
            i0.ɵɵtemplate(6, OnetChartComponent_div_6_Template, 2, 1, "div", 5)(7, OnetChartComponent_p_7_Template, 8, 3, "p", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A " + ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-on", ctx.selectedIndex === -1);
            i0.ɵɵattribute("aria-selected", ctx.selectedIndex === -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.subjects);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ctx.title)("subtitle", ctx.chartSubtitle)("labels", ctx.years)("series", ctx.series)("showValues", ctx.selectedIndex !== -1)("note", ctx.note);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.current);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.current);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, LineChartComponent], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.onet-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.onet-tab[_ngcontent-%COMP%] {\n  \n\n  min-height: 46px;\n  padding: 0 18px;\n  border-radius: 12px;\n  border: 1px solid var(--navy-100);\n  background: #fff;\n  color: var(--ink-soft);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background .2s var(--ease), color .2s var(--ease),\n              border-color .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.onet-tab[_ngcontent-%COMP%]:active { transform: scale(.96); }\n\n.onet-tab.is-on[_ngcontent-%COMP%] {\n  background: var(--navy-600);\n  border-color: var(--navy-600);\n  color: #fff;\n  box-shadow: 0 6px 18px rgba(30, 77, 158, .28);\n}\n\n\n\n@media (hover: hover) {\n  .onet-tab[_ngcontent-%COMP%]:hover:not(.is-on) {\n    background: var(--navy-50);\n    border-color: var(--navy-200);\n    color: var(--navy-700);\n  }\n}\n\n\n\n.onet-diffs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 18px;\n}\n\n.onet-diff[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius-sm);\n  padding: 16px 18px;\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.onet-diff-year[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--ink-mute);\n  letter-spacing: .02em;\n}\n\n.onet-diff-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.onet-diff-value[_ngcontent-%COMP%] {\n  font-family: 'Noto Serif Thai', serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--navy-800);\n  font-variant-numeric: tabular-nums;\n  line-height: 1.2;\n}\n\n.onet-diff-vs[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ink-mute);\n  font-variant-numeric: tabular-nums;\n}\n\n.onet-diff-gap[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.onet-diff-gap.up[_ngcontent-%COMP%] { color: #0f7a4d; }\n.onet-diff-gap.down[_ngcontent-%COMP%] { color: #b4433a; }\n\n\n\n.onet-conclusion[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  font-size: 15.5px;\n  color: var(--ink-soft);\n}\n\n.onet-conclusion[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--navy-800); }\n\n\n\n@media (max-width: 834px) {\n  .onet-tabs[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-bottom: 6px;\n    \n\n    scrollbar-width: none;\n  }\n  .onet-tabs[_ngcontent-%COMP%]::-webkit-scrollbar { display: none; }\n\n  .onet-tab[_ngcontent-%COMP%] { flex: none; }\n  .onet-diffs[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media print {\n  .onet-tabs[_ngcontent-%COMP%] { display: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnetChartComponent, [{
        type: Component,
        args: [{ selector: 'app-onet-chart', standalone: true, imports: [CommonModule, LineChartComponent], template: "<div class=\"onet\">\n  <!-- \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E34\u0E0A\u0E32 \u2014 \u0E41\u0E15\u0E30\u0E44\u0E14\u0E49\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E1A\u0E19 iPad -->\n  <div class=\"onet-tabs\" role=\"tablist\" [attr.aria-label]=\"'\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A ' + title\">\n    <button type=\"button\"\n            class=\"onet-tab\"\n            role=\"tab\"\n            [class.is-on]=\"selectedIndex === -1\"\n            [attr.aria-selected]=\"selectedIndex === -1\"\n            (click)=\"select(-1)\">\u0E17\u0E38\u0E01\u0E27\u0E34\u0E0A\u0E32</button>\n\n    <button type=\"button\"\n            class=\"onet-tab\"\n            role=\"tab\"\n            *ngFor=\"let s of subjects; let i = index\"\n            [class.is-on]=\"selectedIndex === i\"\n            [attr.aria-selected]=\"selectedIndex === i\"\n            (click)=\"select(i)\">{{ s.name }}</button>\n  </div>\n\n  <!-- \u0E01\u0E23\u0E32\u0E1F \u2014 \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E15\u0E32\u0E21\u0E27\u0E34\u0E0A\u0E32\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 -->\n  <app-line-chart\n    [title]=\"title\"\n    [subtitle]=\"chartSubtitle\"\n    [labels]=\"years\"\n    [series]=\"series\"\n    [showValues]=\"selectedIndex !== -1\"\n    [note]=\"note\" />\n\n  <!-- \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2A\u0E23\u0E38\u0E1B\u0E23\u0E32\u0E22\u0E1B\u0E35\u0E02\u0E2D\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 -->\n  <div class=\"onet-diffs\" *ngIf=\"current\">\n    <div class=\"onet-diff\" *ngFor=\"let d of diffs\">\n      <div class=\"onet-diff-year\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ d.year }}</div>\n      <div class=\"onet-diff-main\">\n        <span class=\"onet-diff-value\">{{ d.school | number: '1.2-2' }}</span>\n        <span class=\"onet-diff-vs\">\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 {{ d.nation | number: '1.2-2' }}</span>\n      </div>\n      <div class=\"onet-diff-gap\" [class.up]=\"d.diff >= 0\" [class.down]=\"d.diff < 0\">\n        {{ signed(d.diff) }}\n      </div>\n    </div>\n  </div>\n\n  <p class=\"onet-conclusion\" *ngIf=\"current\">\n    \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32<strong>{{ current.name }}</strong> \u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\n    <strong>{{ yearsAbove }}</strong> \u0E1B\u0E35 \u0E08\u0E32\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 {{ years.length }} \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\n  </p>\n</div>\n", styles: ["/* \u0E01\u0E23\u0E32\u0E1F O-NET \u0E41\u0E1A\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E44\u0E14\u0E49 */\n:host { display: block; }\n\n/* ---------- \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E34\u0E0A\u0E32 ---------- */\n.onet-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.onet-tab {\n  /* \u0E2A\u0E39\u0E07 46px \u0E43\u0E2B\u0E49\u0E41\u0E15\u0E30\u0E07\u0E48\u0E32\u0E22\u0E1A\u0E19 iPad \u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E02\u0E2D\u0E07 Apple */\n  min-height: 46px;\n  padding: 0 18px;\n  border-radius: 12px;\n  border: 1px solid var(--navy-100);\n  background: #fff;\n  color: var(--ink-soft);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background .2s var(--ease), color .2s var(--ease),\n              border-color .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.onet-tab:active { transform: scale(.96); }\n\n.onet-tab.is-on {\n  background: var(--navy-600);\n  border-color: var(--navy-600);\n  color: #fff;\n  box-shadow: 0 6px 18px rgba(30, 77, 158, .28);\n}\n\n/* \u0E40\u0E2D\u0E1F\u0E40\u0E1F\u0E01\u0E15\u0E4C hover \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E21\u0E35\u0E40\u0E21\u0E32\u0E2A\u0E4C \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E04\u0E49\u0E32\u0E07\u0E1A\u0E19\u0E08\u0E2D\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A */\n@media (hover: hover) {\n  .onet-tab:hover:not(.is-on) {\n    background: var(--navy-50);\n    border-color: var(--navy-200);\n    color: var(--navy-700);\n  }\n}\n\n/* ---------- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25\u0E15\u0E48\u0E32\u0E07\u0E23\u0E32\u0E22\u0E1B\u0E35 ---------- */\n.onet-diffs {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 14px;\n  margin-top: 18px;\n}\n\n.onet-diff {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius-sm);\n  padding: 16px 18px;\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.onet-diff-year {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--ink-mute);\n  letter-spacing: .02em;\n}\n\n.onet-diff-main {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.onet-diff-value {\n  font-family: 'Noto Serif Thai', serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--navy-800);\n  font-variant-numeric: tabular-nums;\n  line-height: 1.2;\n}\n\n.onet-diff-vs {\n  font-size: 14px;\n  color: var(--ink-mute);\n  font-variant-numeric: tabular-nums;\n}\n\n.onet-diff-gap {\n  font-size: 16px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n\n.onet-diff-gap.up { color: #0f7a4d; }\n.onet-diff-gap.down { color: #b4433a; }\n\n/* ---------- \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E23\u0E38\u0E1B\u0E43\u0E15\u0E49\u0E01\u0E32\u0E23\u0E4C\u0E14 ---------- */\n.onet-conclusion {\n  margin: 16px 0 0;\n  font-size: 15.5px;\n  color: var(--ink-soft);\n}\n\n.onet-conclusion strong { color: var(--navy-800); }\n\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u2014 \u0E43\u0E2B\u0E49\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\u0E41\u0E17\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 */\n@media (max-width: 834px) {\n  .onet-tabs {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-bottom: 6px;\n    /* \u0E0B\u0E48\u0E2D\u0E19\u0E41\u0E16\u0E1A\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E2B\u0E49\u0E14\u0E39\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E15\u0E2D\u0E19\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D */\n    scrollbar-width: none;\n  }\n  .onet-tabs::-webkit-scrollbar { display: none; }\n\n  .onet-tab { flex: none; }\n  .onet-diffs { grid-template-columns: 1fr; }\n}\n\n@media print {\n  .onet-tabs { display: none !important; }\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], note: [{
            type: Input
        }], years: [{
            type: Input
        }], subjects: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OnetChartComponent, { className: "OnetChartComponent", filePath: "src/app/shared/onet-chart/onet-chart.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=onet-chart.component.js.map