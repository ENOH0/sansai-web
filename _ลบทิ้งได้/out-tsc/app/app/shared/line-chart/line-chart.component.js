import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CHART_PALETTE } from '../../core/models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LineChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
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
    i0.ɵɵelement(1, "line", 11);
    i0.ɵɵelementStart(2, "text", 12);
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
    i0.ɵɵelementStart(0, "g")(1, "text", 13);
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
function LineChartComponent__svg_g_11__svg_g_2__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const v_r6 = ctx_r4.$implicit;
    const i_r7 = ctx_r4.index;
    const ctx_r7 = i0.ɵɵnextContext();
    const s_r9 = ctx_r7.$implicit;
    const si_r10 = ctx_r7.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("x", ctx_r0.xPos(i_r7))("y", ctx_r0.yPos(v_r6) - 14)("fill", ctx_r0.colorOf(s_r9, si_r10));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 4, v_r6, ctx_r0.valueFormat));
} }
function LineChartComponent__svg_g_11__svg_g_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "circle", 15);
    i0.ɵɵtemplate(2, LineChartComponent__svg_g_11__svg_g_2__svg_text_2_Template, 3, 7, "text", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r7 = i0.ɵɵnextContext();
    const s_r9 = ctx_r7.$implicit;
    const si_r10 = ctx_r7.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("animation-delay", 600 + si_r10 * 180 + i_r7 * 90 + "ms");
    i0.ɵɵattribute("cx", ctx_r0.xPos(i_r7))("cy", ctx_r0.yPos(v_r6))("fill", "#fff")("stroke", ctx_r0.colorOf(s_r9, si_r10));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showValues);
} }
function LineChartComponent__svg_g_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "path", 14);
    i0.ɵɵtemplate(2, LineChartComponent__svg_g_11__svg_g_2_Template, 3, 7, "g", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const si_r10 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("animation-delay", si_r10 * 180 + "ms");
    i0.ɵɵclassProp("is-dashed", s_r9.dashed);
    i0.ɵɵattribute("d", ctx_r0.pathFor(s_r9))("stroke", ctx_r0.colorOf(s_r9, si_r10));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r9.values);
} }
function LineChartComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "span", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const si_r12 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", ctx_r0.colorOf(s_r11, si_r12));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", s_r11.name, " ");
} }
function LineChartComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
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
    // ขนาดพื้นที่วาด (หน่วย viewBox — สเกลอัตโนมัติตามความกว้างจริง)
    W = 900;
    H = 400;
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
    static ɵfac = function LineChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LineChartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { title: "title", subtitle: "subtitle", note: "note", labels: "labels", series: "series", showValues: "showValues", valueFormat: "valueFormat", min: "min", max: "max" }, decls: 15, vars: 13, consts: [["appReveal", "", 1, "chart-card"], [1, "chart-head"], [1, "chart-title"], ["class", "chart-sub", 4, "ngIf"], ["preserveAspectRatio", "xMidYMid meet", "role", "img", 1, "chart-svg"], [4, "ngFor", "ngForOf"], [1, "axis-line"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], ["class", "chart-note", 4, "ngIf"], [1, "chart-sub"], [1, "grid-line"], ["text-anchor", "end", 1, "axis-text"], ["text-anchor", "middle", 1, "axis-text", "b"], [1, "series-path"], ["r", "5.5", "stroke-width", "3", 1, "series-dot"], ["class", "axis-text", "text-anchor", "middle", "style", "font-weight:700", 4, "ngIf"], ["text-anchor", "middle", 1, "axis-text", 2, "font-weight", "700"], [1, "legend-item"], [1, "legend-swatch"], [1, "chart-note"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtemplate(10, LineChartComponent__svg_g_10_Template, 3, 3, "g", 5)(11, LineChartComponent__svg_g_11_Template, 3, 7, "g", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵtemplate(13, LineChartComponent_span_13_Template, 3, 3, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, LineChartComponent_p_14_Template, 2, 1, "p", 9);
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.note);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, RevealDirective], styles: ["\n\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n\n.series-path[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n.is-in[_nghost-%COMP%]   .series-path[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-path[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-path[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_drawLine 1.5s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_drawLine { to { stroke-dashoffset: 0; } }\n\n\n\n\n\n.series-path.is-dashed[_ngcontent-%COMP%] {\n  stroke-dasharray: 7 6;\n  stroke-dashoffset: 0;\n  opacity: 0;\n}\n\n.is-in[_nghost-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-path.is-dashed[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeLine .9s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeLine { to { opacity: 1; } }\n\n\n\n.series-dot[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n\n.is-in[_nghost-%COMP%]   .series-dot[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .series-dot[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .series-dot[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_popDot .45s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_popDot {\n  from { opacity: 0; transform: scale(.2); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .series-path[_ngcontent-%COMP%] { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-path.is-dashed[_ngcontent-%COMP%] { animation: none !important; opacity: 1 !important; }\n  .series-dot[_ngcontent-%COMP%] { animation: none !important; opacity: 1 !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'app-line-chart', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"chart-card\" appReveal>\n  <div class=\"chart-head\">\n    <div>\n      <div class=\"chart-title\">{{ title }}</div>\n      <div class=\"chart-sub\" *ngIf=\"subtitle\">{{ subtitle }}</div>\n    </div>\n  </div>\n\n  <svg class=\"chart-svg\" [attr.viewBox]=\"'0 0 ' + W + ' ' + H\"\n       preserveAspectRatio=\"xMidYMid meet\" role=\"img\" [attr.aria-label]=\"title\">\n\n    <!-- \u0E40\u0E2A\u0E49\u0E19\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19 + \u0E1B\u0E49\u0E32\u0E22\u0E41\u0E01\u0E19 Y -->\n    <g>\n      <g *ngFor=\"let t of ticks()\">\n        <line class=\"grid-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n              [attr.y1]=\"yPos(t)\" [attr.y2]=\"yPos(t)\" />\n        <text class=\"axis-text\" [attr.x]=\"PL - 10\" [attr.y]=\"yPos(t) + 4\"\n              text-anchor=\"end\">{{ t }}</text>\n      </g>\n    </g>\n\n    <!-- \u0E41\u0E01\u0E19 X -->\n    <line class=\"axis-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n          [attr.y1]=\"H - PB\" [attr.y2]=\"H - PB\" />\n    <g *ngFor=\"let lb of labels; let i = index\">\n      <text class=\"axis-text b\" [attr.x]=\"xPos(i)\" [attr.y]=\"H - PB + 26\"\n            text-anchor=\"middle\">{{ lb }}</text>\n    </g>\n\n    <!-- \u0E40\u0E2A\u0E49\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 -->\n    <g *ngFor=\"let s of series; let si = index\">\n      <path class=\"series-path\"\n            [class.is-dashed]=\"s.dashed\"\n            [attr.d]=\"pathFor(s)\"\n            [attr.stroke]=\"colorOf(s, si)\"\n            [style.animation-delay]=\"si * 180 + 'ms'\" />\n      <g *ngFor=\"let v of s.values; let i = index\">\n        <circle class=\"series-dot\"\n                [attr.cx]=\"xPos(i)\" [attr.cy]=\"yPos(v)\" r=\"5.5\"\n                [attr.fill]=\"'#fff'\"\n                [attr.stroke]=\"colorOf(s, si)\" stroke-width=\"3\"\n                [style.animation-delay]=\"(600 + si * 180 + i * 90) + 'ms'\" />\n        <text class=\"axis-text\" *ngIf=\"showValues\"\n              [attr.x]=\"xPos(i)\" [attr.y]=\"yPos(v) - 14\" text-anchor=\"middle\"\n              [attr.fill]=\"colorOf(s, si)\"\n              style=\"font-weight:700\">{{ v | number: valueFormat }}</text>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"chart-legend\">\n    <span class=\"legend-item\" *ngFor=\"let s of series; let si = index\">\n      <span class=\"legend-swatch\" [style.background]=\"colorOf(s, si)\"></span>{{ s.name }}\n    </span>\n  </div>\n\n  <p class=\"chart-note\" *ngIf=\"note\">{{ note }}</p>\n</div>\n", styles: ["/* \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E23\u0E32\u0E1F\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u0E0A\u0E19\u0E34\u0E14 \u0E08\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E0A\u0E19\u0E34\u0E14\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host { display: block; }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E01\u0E23\u0E32\u0E1F\u0E16\u0E39\u0E01 \"\u0E27\u0E32\u0E14\" \u0E17\u0E35\u0E25\u0E30\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\n   \u0E42\u0E14\u0E22\u0E25\u0E14 stroke-dashoffset \u0E08\u0E32\u0E01\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E40\u0E2A\u0E49\u0E19\u0E25\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E28\u0E39\u0E19\u0E22\u0E4C */\n.series-path {\n  fill: none;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-dasharray: 1400;\n  stroke-dashoffset: 1400;\n}\n\n:host-context(.is-in) .series-path,\n.is-in .series-path {\n  animation: drawLine 1.5s var(--ease) forwards;\n}\n\n@keyframes drawLine { to { stroke-dashoffset: 0; } }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30 (\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 / \u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22)\n   stroke-dasharray \u0E16\u0E39\u0E01\u0E43\u0E0A\u0E49\u0E17\u0E33\u0E25\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19\u0E1B\u0E23\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E36\u0E07\u0E27\u0E32\u0E14\u0E17\u0E35\u0E25\u0E30\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\n   \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E2D\u0E22 \u0E46 \u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E02\u0E36\u0E49\u0E19\u0E41\u0E17\u0E19 */\n.series-path.is-dashed {\n  stroke-dasharray: 7 6;\n  stroke-dashoffset: 0;\n  opacity: 0;\n}\n\n:host-context(.is-in) .series-path.is-dashed,\n.is-in .series-path.is-dashed {\n  animation: fadeLine .9s var(--ease) forwards;\n}\n\n@keyframes fadeLine { to { opacity: 1; } }\n\n/* \u0E08\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E48\u0E2D\u0E22 \u0E46 \u0E1C\u0E38\u0E14\u0E02\u0E36\u0E49\u0E19\u0E15\u0E32\u0E21\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E2A\u0E49\u0E19 */\n.series-dot {\n  opacity: 0;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n\n:host-context(.is-in) .series-dot,\n.is-in .series-dot {\n  animation: popDot .45s var(--ease) forwards;\n}\n\n@keyframes popDot {\n  from { opacity: 0; transform: scale(.2); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .series-path { animation: none !important; stroke-dashoffset: 0 !important; }\n  .series-path.is-dashed { animation: none !important; opacity: 1 !important; }\n  .series-dot { animation: none !important; opacity: 1 !important; }\n}\n"] }]
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LineChartComponent, { className: "LineChartComponent", filePath: "src/app/shared/line-chart/line-chart.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=line-chart.component.js.map