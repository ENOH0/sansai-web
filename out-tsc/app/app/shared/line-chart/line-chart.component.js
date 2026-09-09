import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CHART_PALETTE } from '../../core/models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LineChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
function LineChartComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "line", 14);
    i0.ɵɵelementStart(2, "text", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("x1", ctx_r0.PL)("x2", ctx_r0.W - ctx_r0.PR)("y1", ctx_r0.yPos(t_r2))("y2", ctx_r0.yPos(t_r2));
    i0.ɵɵadvance();
    i0.ɵɵattribute("x", ctx_r0.PL - 10)("y", ctx_r0.yPos(t_r2) + 4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r2);
} }
function LineChartComponent__svg_g_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g")(1, "text", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const lb_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("x", ctx_r0.xPos(i_r4))("y", ctx_r0.H - ctx_r0.PB + 26);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(lb_r3);
} }
function LineChartComponent__svg_ng_container_12__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 18);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const s_r6 = ctx_r4.$implicit;
    const si_r7 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("animation-delay", si_r7 * 180 + "ms");
    i0.ɵɵclassProp("is-dim", ctx_r0.isDim(si_r7));
    i0.ɵɵattribute("d", ctx_r0.pathFor(s_r6));
} }
function LineChartComponent__svg_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineChartComponent__svg_ng_container_12__svg_path_1_Template, 1, 5, "path", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !s_r6.dashed);
} }
function LineChartComponent__svg_g_13__svg_g_2__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 23);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const v_r9 = ctx_r7.$implicit;
    const i_r10 = ctx_r7.index;
    const ctx_r10 = i0.ɵɵnextContext();
    const s_r12 = ctx_r10.$implicit;
    const si_r13 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("x", ctx_r0.xPos(i_r10))("y", ctx_r0.yPos(v_r9) - 16)("fill", ctx_r0.colorOf(s_r12, si_r13));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 4, v_r9, ctx_r0.valueFormat));
} }
function LineChartComponent__svg_g_13__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "circle", 21);
    i0.ɵɵtemplate(2, LineChartComponent__svg_g_13__svg_g_2__svg_text_2_Template, 3, 7, "text", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r10 = i0.ɵɵnextContext();
    const s_r12 = ctx_r10.$implicit;
    const si_r13 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("animation-delay", 600 + si_r13 * 180 + i_r10 * 90 + "ms");
    i0.ɵɵattribute("cx", ctx_r0.xPos(i_r10))("cy", ctx_r0.yPos(v_r9))("fill", "#fff")("stroke", ctx_r0.colorOf(s_r12, si_r13));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showValueFor(si_r13));
} }
function LineChartComponent__svg_g_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g", 19);
    i0.ɵɵelement(1, "path", 20);
    i0.ɵɵtemplate(2, LineChartComponent__svg_g_13__svg_g_2_Template, 3, 7, "g", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const si_r13 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-dim", ctx_r0.isDim(si_r13))("is-focus", ctx_r0.focusIndex === si_r13);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("animation-delay", si_r13 * 180 + "ms");
    i0.ɵɵclassProp("is-dashed", s_r12.dashed);
    i0.ɵɵattribute("d", ctx_r0.pathFor(s_r12))("stroke", ctx_r0.colorOf(s_r12, si_r13));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r12.values);
} }
function LineChartComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function LineChartComponent_button_15_Template_button_click_0_listener() { const si_r15 = i0.ɵɵrestoreView(_r14).index; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.focus(si_r15)); });
    i0.ɵɵelement(1, "span", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r16 = ctx.$implicit;
    const si_r15 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-off", ctx_r0.isDim(si_r15))("is-on", ctx_r0.focusIndex === si_r15);
    i0.ɵɵattribute("aria-pressed", ctx_r0.focusIndex === si_r15);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", ctx_r0.colorOf(s_r16, si_r15));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", s_r16.name, " ");
} }
function LineChartComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E40\u0E2A\u0E49\u0E19\u0E19\u0E31\u0E49\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E33\u0E01\u0E31\u0E1A \u0E41\u0E15\u0E30\u0E0B\u0E49\u0E33\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E14\u0E39\u0E17\u0E38\u0E01\u0E40\u0E2A\u0E49\u0E19 ");
    i0.ɵɵelementEnd();
} }
function LineChartComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.note);
} }
/**
 * กราฟเส้นแบบ SVG ล้วน — ไม่มี dependency ภายนอก
 * เส้นจะถูก "วาด" ทีละเส้นเมื่อเลื่อนเข้ามุมมอง (stroke-dashoffset)
 * ปรับให้อ่านง่ายบนจอ iPad ทั้งแนวตั้งและแนวนอน
 */
export class LineChartComponent {
    title = '';
    subtitle = '';
    note = '';
    labels = [];
    series = [];
    showValues = true;
    valueFormat = '1.2-2';
    /** กำหนดช่วงแกน Y เอง ถ้าไม่กำหนดจะคำนวณอัตโนมัติ */
    min;
    max;
    /** ความสูงพื้นที่วาด — เพิ่มค่าได้เมื่อมีหลายเส้นซ้อนกันในช่วงแคบ */
    height = 400;
    // ขนาดพื้นที่วาด (หน่วย viewBox — สเกลอัตโนมัติตามความกว้างจริง)
    W = 900;
    get H() { return this.height; }
    PL = 56; // ขอบซ้าย
    PR = 24; // ขอบขวา
    PT = 34; // ขอบบน
    PB = 46; // ขอบล่าง
    bounds() {
        const all = this.series.flatMap(s => s.values).filter(v => v != null && !isNaN(v));
        if (!all.length)
            return { lo: 0, hi: 100 };
        let lo = this.min ?? Math.min(...all);
        let hi = this.max ?? Math.max(...all);
        if (this.min === undefined)
            lo = Math.max(0, Math.floor((lo - (hi - lo) * 0.18) / 5) * 5);
        if (this.max === undefined)
            hi = Math.ceil((hi + (hi - lo) * 0.12) / 5) * 5;
        if (hi === lo)
            hi = lo + 10;
        return { lo, hi };
    }
    ticks() {
        const { lo, hi } = this.bounds();
        const n = 5;
        const step = (hi - lo) / n;
        return Array.from({ length: n + 1 }, (_, i) => Math.round((lo + step * i) * 10) / 10);
    }
    xPos(i) {
        const n = Math.max(1, this.labels.length - 1);
        return this.PL + ((this.W - this.PL - this.PR) * i) / n;
    }
    yPos(v) {
        const { lo, hi } = this.bounds();
        const r = (v - lo) / (hi - lo);
        return this.H - this.PB - r * (this.H - this.PT - this.PB);
    }
    pathFor(s) {
        return s.values
            .map((v, i) => `${i === 0 ? 'M' : 'L'} ${this.xPos(i).toFixed(1)} ${this.yPos(v).toFixed(1)}`)
            .join(' ');
    }
    palette = CHART_PALETTE;
    colorOf(s, i) {
        return s.color ?? this.palette[i % this.palette.length];
    }
    /** เส้นที่ถูกเลือกให้เด่นขึ้น (-1 = แสดงทุกเส้นเท่ากัน) */
    focusIndex = -1;
    /** แตะชื่อเส้นในคำอธิบายเพื่อเน้นเฉพาะเส้นนั้น แตะซ้ำเพื่อกลับไปดูทั้งหมด */
    focus(i) {
        this.focusIndex = this.focusIndex === i ? -1 : i;
    }
    isDim(i) {
        return this.focusIndex !== -1 && this.focusIndex !== i;
    }
    /** แสดงตัวเลขกำกับจุดเมื่อเปิดไว้ หรือเมื่อเส้นนั้นกำลังถูกเน้น */
    showValueFor(i) {
        return this.showValues || this.focusIndex === i;
    }
    static ɵfac = function LineChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineChartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { title: "title", subtitle: "subtitle", note: "note", labels: "labels", series: "series", showValues: "showValues", valueFormat: "valueFormat", min: "min", max: "max", height: "height" }, decls: 18, vars: 15, consts: [["appReveal", "", 1, "chart-card"], [1, "chart-head"], [1, "chart-title"], ["class", "chart-sub", 4, "ngIf"], ["preserveAspectRatio", "xMidYMid meet", "role", "img", 1, "chart-svg"], [4, "ngFor", "ngForOf"], [1, "axis-line"], [1, "halos"], ["class", "series", 3, "is-dim", "is-focus", 4, "ngFor", "ngForOf"], [1, "chart-legend"], ["type", "button", "class", "legend-item", 3, "is-off", "is-on", "click", 4, "ngFor", "ngForOf"], ["class", "chart-hint", 4, "ngIf"], ["class", "chart-note", 4, "ngIf"], [1, "chart-sub"], [1, "grid-line"], ["text-anchor", "end", 1, "axis-text"], ["text-anchor", "middle", 1, "axis-text", "b"], ["class", "series-halo", 3, "is-dim", "animation-delay", 4, "ngIf"], [1, "series-halo"], [1, "series"], [1, "series-path"], ["r", "6.5", "stroke-width", "3.4", 1, "series-dot"], ["class", "axis-text val", "text-anchor", "middle", 4, "ngIf"], ["text-anchor", "middle", 1, "axis-text", "val"], ["type", "button", 1, "legend-item", 3, "click"], [1, "legend-swatch"], [1, "chart-hint"], [1, "chart-note"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, LineChartComponent_div_5_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(6, "svg", 4)(7, "g");
            i0.ɵɵtemplate(8, LineChartComponent__svg_g_8_Template, 4, 7, "g", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "line", 6);
            i0.ɵɵtemplate(10, LineChartComponent__svg_g_10_Template, 3, 3, "g", 5);
            i0.ɵɵelementStart(11, "g", 7);
            i0.ɵɵtemplate(12, LineChartComponent__svg_ng_container_12_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, LineChartComponent__svg_g_13_Template, 3, 11, "g", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "div", 9);
            i0.ɵɵtemplate(15, LineChartComponent_button_15_Template, 3, 8, "button", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, LineChartComponent_p_16_Template, 2, 0, "p", 11)(17, LineChartComponent_p_17_Template, 2, 1, "p", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance();
            i0.ɵɵattribute("viewBox", "0 0 " + ctx.W + " " + ctx.H)("aria-label", ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.ticks());
            i0.ɵɵadvance();
            i0.ɵɵattribute("x1", ctx.PL)("x2", ctx.W - ctx.PR)("y1", ctx.H - ctx.PB)("y2", ctx.H - ctx.PB);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.labels);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.series.length > 2);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.note);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, RevealDirective], styles: ["\n\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n\n.series-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n.is-in[_nghost-%COMP%]   .series-path[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-path[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-path[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_drawLine 1.5s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_drawLine { to { stroke-dashoffset: 0; } }\n\n\n\n\n\n.series-path.is-dashed[_ngcontent-%COMP%] {\n  stroke-dasharray: 7 6;\n  stroke-dashoffset: 0;\n  opacity: 0;\n}\n\n.is-in[_nghost-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeLine .9s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeLine { to { opacity: 1; } }\n\n\n\n.series-halo[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 7.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n.is-in[_nghost-%COMP%]   .series-halo[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-halo[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-halo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_drawLine 1.5s var(--ease) forwards;\n}\n\n\n\n.series-dot[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n\n.is-in[_nghost-%COMP%]   .series-dot[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-dot[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popDot .45s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_popDot {\n  from { opacity: 0; transform: scale(.2); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n\n\n.axis-text.val[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  stroke: #fff;\n  stroke-width: 3.4px;\n  paint-order: stroke;\n  stroke-linejoin: round;\n}\n\n\n\n.series[_ngcontent-%COMP%] {\n  transition: opacity .25s var(--ease);\n}\n\n.series.is-dim[_ngcontent-%COMP%], \n.series-halo.is-dim[_ngcontent-%COMP%] {\n  opacity: .13;\n  pointer-events: none;\n}\n\n.series-halo[_ngcontent-%COMP%] { transition: opacity .25s var(--ease); }\n\n.series.is-focus[_ngcontent-%COMP%]   .series-path[_ngcontent-%COMP%] { stroke-width: 4.2; }\n.series.is-focus[_ngcontent-%COMP%]   .series-dot[_ngcontent-%COMP%] { r: 7.5; }\n\n\n\n.chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  appearance: none;\n  border: 1px solid transparent;\n  background: transparent;\n  font-family: inherit;\n  min-height: 44px;\n  padding: 0 12px;\n  border-radius: 11px;\n  cursor: pointer;\n  transition: background .2s var(--ease), border-color .2s var(--ease),\n              opacity .2s var(--ease), transform .16s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:active { transform: scale(.96); }\n\n.chart-legend[_ngcontent-%COMP%]   .legend-item.is-on[_ngcontent-%COMP%] {\n  background: var(--navy-50);\n  border-color: var(--navy-200);\n  color: var(--navy-800);\n}\n\n.chart-legend[_ngcontent-%COMP%]   .legend-item.is-off[_ngcontent-%COMP%] { opacity: .42; }\n\n@media (hover: hover) {\n  .chart-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover { background: var(--navy-50); }\n}\n\n.chart-hint[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 15px;\n  color: var(--ink-mute);\n}\n\n@media print {\n  .chart-hint[_ngcontent-%COMP%] { display: none !important; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .series-path[_ngcontent-%COMP%] { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-halo[_ngcontent-%COMP%] { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-path.is-dashed[_ngcontent-%COMP%] { animation: none !important; opacity: 1 !important; }\n  .series-dot[_ngcontent-%COMP%] { animation: none !important; opacity: 1 !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'app-line-chart', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"chart-card\" appReveal>\n  <div class=\"chart-head\">\n    <div>\n      <div class=\"chart-title\">{{ title }}</div>\n      <div class=\"chart-sub\" *ngIf=\"subtitle\">{{ subtitle }}</div>\n    </div>\n  </div>\n\n  <svg class=\"chart-svg\" [attr.viewBox]=\"'0 0 ' + W + ' ' + H\"\n       preserveAspectRatio=\"xMidYMid meet\" role=\"img\" [attr.aria-label]=\"title\">\n\n    <!-- \u0E40\u0E2A\u0E49\u0E19\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19 + \u0E1B\u0E49\u0E32\u0E22\u0E41\u0E01\u0E19 Y -->\n    <g>\n      <g *ngFor=\"let t of ticks()\">\n        <line class=\"grid-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n              [attr.y1]=\"yPos(t)\" [attr.y2]=\"yPos(t)\" />\n        <text class=\"axis-text\" [attr.x]=\"PL - 10\" [attr.y]=\"yPos(t) + 4\"\n              text-anchor=\"end\">{{ t }}</text>\n      </g>\n    </g>\n\n    <!-- \u0E41\u0E01\u0E19 X -->\n    <line class=\"axis-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n          [attr.y1]=\"H - PB\" [attr.y2]=\"H - PB\" />\n    <g *ngFor=\"let lb of labels; let i = index\">\n      <text class=\"axis-text b\" [attr.x]=\"xPos(i)\" [attr.y]=\"H - PB + 26\"\n            text-anchor=\"middle\">{{ lb }}</text>\n    </g>\n\n    <!-- \u0E40\u0E2A\u0E49\u0E19\u0E02\u0E2D\u0E1A\u0E2A\u0E35\u0E02\u0E32\u0E27\u0E43\u0E15\u0E49\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E38\u0E01\u0E40\u0E2A\u0E49\u0E19 \u0E27\u0E32\u0E14\u0E44\u0E27\u0E49\u0E0A\u0E31\u0E49\u0E19\u0E25\u0E48\u0E32\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19\n         \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E49\u0E19\u0E2A\u0E35\u0E17\u0E31\u0E1A\u0E01\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27\u0E22\u0E31\u0E07\u0E41\u0E22\u0E01\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E44\u0E1B\u0E1A\u0E31\u0E07\u0E40\u0E2A\u0E49\u0E19\u0E2D\u0E37\u0E48\u0E19 -->\n    <g class=\"halos\">\n      <ng-container *ngFor=\"let s of series; let si = index\">\n        <path class=\"series-halo\" *ngIf=\"!s.dashed\"\n              [class.is-dim]=\"isDim(si)\"\n              [attr.d]=\"pathFor(s)\"\n              [style.animation-delay]=\"si * 180 + 'ms'\" />\n      </ng-container>\n    </g>\n\n    <!-- \u0E40\u0E2A\u0E49\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 -->\n    <g class=\"series\" *ngFor=\"let s of series; let si = index\"\n       [class.is-dim]=\"isDim(si)\" [class.is-focus]=\"focusIndex === si\">\n\n      <path class=\"series-path\"\n            [class.is-dashed]=\"s.dashed\"\n            [attr.d]=\"pathFor(s)\"\n            [attr.stroke]=\"colorOf(s, si)\"\n            [style.animation-delay]=\"si * 180 + 'ms'\" />\n\n      <g *ngFor=\"let v of s.values; let i = index\">\n        <circle class=\"series-dot\"\n                [attr.cx]=\"xPos(i)\" [attr.cy]=\"yPos(v)\" r=\"6.5\"\n                [attr.fill]=\"'#fff'\"\n                [attr.stroke]=\"colorOf(s, si)\" stroke-width=\"3.4\"\n                [style.animation-delay]=\"(600 + si * 180 + i * 90) + 'ms'\" />\n        <text class=\"axis-text val\" *ngIf=\"showValueFor(si)\"\n              [attr.x]=\"xPos(i)\" [attr.y]=\"yPos(v) - 16\" text-anchor=\"middle\"\n              [attr.fill]=\"colorOf(s, si)\">{{ v | number: valueFormat }}</text>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"chart-legend\">\n    <button type=\"button\" class=\"legend-item\" *ngFor=\"let s of series; let si = index\"\n            [class.is-off]=\"isDim(si)\" [class.is-on]=\"focusIndex === si\"\n            [attr.aria-pressed]=\"focusIndex === si\"\n            (click)=\"focus(si)\">\n      <span class=\"legend-swatch\" [style.background]=\"colorOf(s, si)\"></span>{{ s.name }}\n    </button>\n  </div>\n\n  <p class=\"chart-hint\" *ngIf=\"series.length > 2\">\n    \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E40\u0E2A\u0E49\u0E19\u0E19\u0E31\u0E49\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E33\u0E01\u0E31\u0E1A \u0E41\u0E15\u0E30\u0E0B\u0E49\u0E33\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E14\u0E39\u0E17\u0E38\u0E01\u0E40\u0E2A\u0E49\u0E19\n  </p>\n\n  <p class=\"chart-note\" *ngIf=\"note\">{{ note }}</p>\n</div>\n", styles: ["/* \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E23\u0E32\u0E1F\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u0E0A\u0E19\u0E34\u0E14 \u0E08\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E0A\u0E19\u0E34\u0E14\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host { display: block; }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E01\u0E23\u0E32\u0E1F\u0E16\u0E39\u0E01 \"\u0E27\u0E32\u0E14\" \u0E17\u0E35\u0E25\u0E30\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\n   \u0E42\u0E14\u0E22\u0E25\u0E14 stroke-dashoffset \u0E08\u0E32\u0E01\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E40\u0E2A\u0E49\u0E19\u0E25\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E28\u0E39\u0E19\u0E22\u0E4C */\n.series-path {\n  fill: none;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n:host-context(.is-in) .series-path,\n.is-in .series-path {\n  animation: drawLine 1.5s var(--ease) forwards;\n}\n\n@keyframes drawLine { to { stroke-dashoffset: 0; } }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30 (\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 / \u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22)\n   stroke-dasharray \u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E17\u0E33\u0E25\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E36\u0E07\u0E27\u0E32\u0E14\u0E17\u0E35\u0E25\u0E30\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\n   \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E2D\u0E22 \u0E46 \u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E02\u0E36\u0E49\u0E19\u0E41\u0E17\u0E19 */\n.series-path.is-dashed {\n  stroke-dasharray: 7 6;\n  stroke-dashoffset: 0;\n  opacity: 0;\n}\n\n:host-context(.is-in) .series-path.is-dashed,\n.is-in .series-path.is-dashed {\n  animation: fadeLine .9s var(--ease) forwards;\n}\n\n@keyframes fadeLine { to { opacity: 1; } }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E02\u0E2D\u0E1A\u0E2A\u0E35\u0E02\u0E32\u0E27\u0E43\u0E15\u0E49\u0E40\u0E2A\u0E49\u0E19\u0E08\u0E23\u0E34\u0E07 \u2014 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2B\u0E25\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E31\u0E1A\u0E01\u0E31\u0E19\u0E08\u0E30\u0E22\u0E31\u0E07\u0E41\u0E22\u0E01\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E01\u0E31\u0E19\u0E44\u0E14\u0E49\u0E0A\u0E31\u0E14 */\n.series-halo {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 7.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n:host-context(.is-in) .series-halo,\n.is-in .series-halo {\n  animation: drawLine 1.5s var(--ease) forwards;\n}\n\n/* \u0E08\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E48\u0E2D\u0E22 \u0E46 \u0E1C\u0E38\u0E14\u0E02\u0E36\u0E49\u0E19\u0E15\u0E32\u0E21\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E2A\u0E49\u0E19 */\n.series-dot {\n  opacity: 0;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n\n:host-context(.is-in) .series-dot,\n.is-in .series-dot {\n  animation: popDot .45s var(--ease) forwards;\n}\n\n@keyframes popDot {\n  from { opacity: 0; transform: scale(.2); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n/* \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E01\u0E33\u0E01\u0E31\u0E1A\u0E08\u0E38\u0E14 \u2014 \u0E43\u0E2A\u0E48\u0E02\u0E2D\u0E1A\u0E02\u0E32\u0E27\u0E23\u0E2D\u0E1A\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E41\u0E21\u0E49\u0E17\u0E31\u0E1A\u0E40\u0E2A\u0E49\u0E19\u0E01\u0E23\u0E32\u0E1F */\n.axis-text.val {\n  font-size: 14.5px;\n  font-weight: 700;\n  stroke: #fff;\n  stroke-width: 3.4px;\n  paint-order: stroke;\n  stroke-linejoin: round;\n}\n\n/* ---------- \u0E40\u0E19\u0E49\u0E19\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 ---------- */\n.series {\n  transition: opacity .25s var(--ease);\n}\n\n.series.is-dim,\n.series-halo.is-dim {\n  opacity: .13;\n  pointer-events: none;\n}\n\n.series-halo { transition: opacity .25s var(--ease); }\n\n.series.is-focus .series-path { stroke-width: 4.2; }\n.series.is-focus .series-dot { r: 7.5; }\n\n/* \u0E1B\u0E38\u0E48\u0E21\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19 \u2014 \u0E41\u0E15\u0E30\u0E44\u0E14\u0E49\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E1A\u0E19 iPad */\n.chart-legend .legend-item {\n  appearance: none;\n  border: 1px solid transparent;\n  background: transparent;\n  font-family: inherit;\n  min-height: 44px;\n  padding: 0 12px;\n  border-radius: 11px;\n  cursor: pointer;\n  transition: background .2s var(--ease), border-color .2s var(--ease),\n              opacity .2s var(--ease), transform .16s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.chart-legend .legend-item:active { transform: scale(.96); }\n\n.chart-legend .legend-item.is-on {\n  background: var(--navy-50);\n  border-color: var(--navy-200);\n  color: var(--navy-800);\n}\n\n.chart-legend .legend-item.is-off { opacity: .42; }\n\n@media (hover: hover) {\n  .chart-legend .legend-item:hover { background: var(--navy-50); }\n}\n\n.chart-hint {\n  margin: 10px 0 0;\n  font-size: 15px;\n  color: var(--ink-mute);\n}\n\n@media print {\n  .chart-hint { display: none !important; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .series-path { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-halo { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-path.is-dashed { animation: none !important; opacity: 1 !important; }\n  .series-dot { animation: none !important; opacity: 1 !important; }\n}\n"] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], note: [{
            type: Input
        }], labels: [{
            type: Input
        }], series: [{
            type: Input
        }], showValues: [{
            type: Input
        }], valueFormat: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], height: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LineChartComponent, { className: "LineChartComponent", filePath: "src/app/shared/line-chart/line-chart.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=line-chart.component.js.map