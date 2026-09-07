import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { CHART_PALETTE } from '../../core/models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BarChartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.subtitle);
} }
function BarChartComponent__svg_g_7_Template(rf, ctx) { if (rf & 1) {
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
function BarChartComponent__svg_g_9__svg_g_1__svg_text_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "text", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const s_r4 = ctx_r2.$implicit;
    const si_r5 = ctx_r2.index;
    const gi_r6 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("x", ctx_r0.barX(gi_r6, si_r5) + ctx_r0.barW() / 2)("y", ctx_r0.yPos(s_r4.values[gi_r6]) - 8)("fill", ctx_r0.colorOf(s_r4, si_r5));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 4, s_r4.values[gi_r6], ctx_r0.valueFormat));
} }
function BarChartComponent__svg_g_9__svg_g_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵelement(1, "rect", 14);
    i0.ɵɵtemplate(2, BarChartComponent__svg_g_9__svg_g_1__svg_text_2_Template, 3, 7, "text", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const si_r5 = ctx.index;
    const gi_r6 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("animation-delay", gi_r6 * 110 + si_r5 * 70 + "ms");
    i0.ɵɵattribute("x", ctx_r0.barX(gi_r6, si_r5))("y", ctx_r0.yPos(s_r4.values[gi_r6]))("width", ctx_r0.barW())("height", ctx_r0.Math.max(0, ctx_r0.H - ctx_r0.PB - ctx_r0.yPos(s_r4.values[gi_r6])))("fill", ctx_r0.colorOf(s_r4, si_r5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showValues);
} }
function BarChartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "g");
    i0.ɵɵtemplate(1, BarChartComponent__svg_g_9__svg_g_1_Template, 3, 8, "g", 5);
    i0.ɵɵelementStart(2, "text", 13);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const lb_r7 = ctx.$implicit;
    const gi_r6 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.series);
    i0.ɵɵadvance();
    i0.ɵɵattribute("x", ctx_r0.groupCenter(gi_r6))("y", ctx_r0.H - ctx_r0.PB + 26);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(lb_r7);
} }
function BarChartComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵelement(1, "span", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const si_r9 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", ctx_r0.colorOf(s_r8, si_r9));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", s_r8.name, " ");
} }
function BarChartComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.note);
} }
/** กราฟแท่งกลุ่ม (grouped bar) แบบ SVG — แท่งจะ "งอกขึ้น" เมื่อเลื่อนเข้ามุมมอง */
export class BarChartComponent {
    title = '';
    subtitle = '';
    note = '';
    labels = [];
    series = [];
    showValues = true;
    valueFormat = '1.0-2';
    max;
    W = 900;
    H = 380;
    PL = 56;
    PR = 24;
    PT = 34;
    PB = 46;
    Math = Math;
    hi() {
        if (this.max !== undefined)
            return this.max;
        const all = this.series.flatMap(s => s.values);
        const m = all.length ? Math.max(...all) : 100;
        return Math.ceil((m * 1.16) / 5) * 5;
    }
    ticks() {
        const hi = this.hi();
        return Array.from({ length: 6 }, (_, i) => Math.round((hi / 5) * i * 10) / 10);
    }
    yPos(v) {
        return this.H - this.PB - (v / this.hi()) * (this.H - this.PT - this.PB);
    }
    groupW() {
        return (this.W - this.PL - this.PR) / Math.max(1, this.labels.length);
    }
    barW() {
        return (this.groupW() * 0.68) / Math.max(1, this.series.length);
    }
    barX(gi, si) {
        const g = this.groupW();
        const inner = this.barW() * this.series.length;
        return this.PL + g * gi + (g - inner) / 2 + this.barW() * si;
    }
    groupCenter(gi) {
        return this.PL + this.groupW() * gi + this.groupW() / 2;
    }
    palette = CHART_PALETTE;
    colorOf(s, i) {
        return s.color ?? this.palette[i % this.palette.length];
    }
    static ɵfac = function BarChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BarChartComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { title: "title", subtitle: "subtitle", note: "note", labels: "labels", series: "series", showValues: "showValues", valueFormat: "valueFormat", max: "max" }, decls: 13, vars: 12, consts: [["appReveal", "", 1, "chart-card"], [1, "chart-head"], [1, "chart-title"], ["class", "chart-sub", 4, "ngIf"], ["preserveAspectRatio", "xMidYMid meet", "role", "img", 1, "chart-svg"], [4, "ngFor", "ngForOf"], [1, "axis-line"], [1, "chart-legend"], ["class", "legend-item", 4, "ngFor", "ngForOf"], ["class", "chart-note", 4, "ngIf"], [1, "chart-sub"], [1, "grid-line"], ["text-anchor", "end", 1, "axis-text"], ["text-anchor", "middle", 1, "axis-text", "b"], ["rx", "4", 1, "bar-rect"], ["class", "axis-text", "text-anchor", "middle", "style", "font-weight:700", 4, "ngIf"], ["text-anchor", "middle", 1, "axis-text", 2, "font-weight", "700"], [1, "legend-item"], [1, "legend-swatch", "dot"], [1, "chart-note"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, BarChartComponent_div_5_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(6, "svg", 4);
            i0.ɵɵtemplate(7, BarChartComponent__svg_g_7_Template, 4, 7, "g", 5);
            i0.ɵɵelement(8, "line", 6);
            i0.ɵɵtemplate(9, BarChartComponent__svg_g_9_Template, 4, 4, "g", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(10, "div", 7);
            i0.ɵɵtemplate(11, BarChartComponent_span_11_Template, 3, 3, "span", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, BarChartComponent_p_12_Template, 2, 1, "p", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subtitle);
            i0.ɵɵadvance();
            i0.ɵɵattribute("viewBox", "0 0 " + ctx.W + " " + ctx.H)("aria-label", ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.ticks());
            i0.ɵɵadvance();
            i0.ɵɵattribute("x1", ctx.PL)("x2", ctx.W - ctx.PR)("y1", ctx.H - ctx.PB)("y2", ctx.H - ctx.PB);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.labels);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.series);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.note);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, RevealDirective], styles: ["\n\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.bar-rect[_ngcontent-%COMP%] {\n  transform-box: fill-box;\n  transform-origin: bottom center;\n  transform: scaleY(0);\n}\n\n.is-in[_nghost-%COMP%]   .bar-rect[_ngcontent-%COMP%], .is-in   [_nghost-%COMP%]   .bar-rect[_ngcontent-%COMP%], \n.is-in[_ngcontent-%COMP%]   .bar-rect[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_growBar .85s var(--ease) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_growBar { to { transform: scaleY(1); } }\n\n@media (prefers-reduced-motion: reduce) {\n  .bar-rect[_ngcontent-%COMP%] { animation: none !important; transform: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarChartComponent, [{
        type: Component,
        args: [{ selector: 'app-bar-chart', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"chart-card\" appReveal>\n  <div class=\"chart-head\">\n    <div>\n      <div class=\"chart-title\">{{ title }}</div>\n      <div class=\"chart-sub\" *ngIf=\"subtitle\">{{ subtitle }}</div>\n    </div>\n  </div>\n\n  <svg class=\"chart-svg\" [attr.viewBox]=\"'0 0 ' + W + ' ' + H\"\n       preserveAspectRatio=\"xMidYMid meet\" role=\"img\" [attr.aria-label]=\"title\">\n\n    <g *ngFor=\"let t of ticks()\">\n      <line class=\"grid-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n            [attr.y1]=\"yPos(t)\" [attr.y2]=\"yPos(t)\" />\n      <text class=\"axis-text\" [attr.x]=\"PL - 10\" [attr.y]=\"yPos(t) + 4\"\n            text-anchor=\"end\">{{ t }}</text>\n    </g>\n\n    <line class=\"axis-line\" [attr.x1]=\"PL\" [attr.x2]=\"W - PR\"\n          [attr.y1]=\"H - PB\" [attr.y2]=\"H - PB\" />\n\n    <g *ngFor=\"let lb of labels; let gi = index\">\n      <g *ngFor=\"let s of series; let si = index\">\n        <rect class=\"bar-rect\"\n              [attr.x]=\"barX(gi, si)\"\n              [attr.y]=\"yPos(s.values[gi])\"\n              [attr.width]=\"barW()\"\n              [attr.height]=\"Math.max(0, H - PB - yPos(s.values[gi]))\"\n              [attr.fill]=\"colorOf(s, si)\"\n              rx=\"4\"\n              [style.animation-delay]=\"(gi * 110 + si * 70) + 'ms'\" />\n        <text class=\"axis-text\" *ngIf=\"showValues\"\n              [attr.x]=\"barX(gi, si) + barW() / 2\"\n              [attr.y]=\"yPos(s.values[gi]) - 8\"\n              text-anchor=\"middle\" style=\"font-weight:700\"\n              [attr.fill]=\"colorOf(s, si)\">{{ s.values[gi] | number: valueFormat }}</text>\n      </g>\n      <text class=\"axis-text b\" [attr.x]=\"groupCenter(gi)\" [attr.y]=\"H - PB + 26\"\n            text-anchor=\"middle\">{{ lb }}</text>\n    </g>\n  </svg>\n\n  <div class=\"chart-legend\">\n    <span class=\"legend-item\" *ngFor=\"let s of series; let si = index\">\n      <span class=\"legend-swatch dot\" [style.background]=\"colorOf(s, si)\"></span>{{ s.name }}\n    </span>\n  </div>\n\n  <p class=\"chart-note\" *ngIf=\"note\">{{ note }}</p>\n</div>\n", styles: ["/* \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E23\u0E32\u0E1F\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u0E0A\u0E19\u0E34\u0E14 \u0E08\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E40\u0E01\u0E47\u0E1A\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E41\u0E25\u0E30\u0E41\u0E2D\u0E19\u0E34\u0E40\u0E21\u0E0A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E0A\u0E19\u0E34\u0E14\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host { display: block; }\n\n/* \u0E41\u0E17\u0E48\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E07\u0E2D\u0E01\u0E02\u0E36\u0E49\u0E19\u0E08\u0E32\u0E01\u0E41\u0E01\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E02\u0E49\u0E32\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07 */\n.bar-rect {\n  transform-box: fill-box;\n  transform-origin: bottom center;\n  transform: scaleY(0);\n}\n\n:host-context(.is-in) .bar-rect,\n.is-in .bar-rect {\n  animation: growBar .85s var(--ease) forwards;\n}\n\n@keyframes growBar { to { transform: scaleY(1); } }\n\n@media (prefers-reduced-motion: reduce) {\n  .bar-rect { animation: none !important; transform: none !important; }\n}\n"] }]
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
        }], max: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BarChartComponent, { className: "BarChartComponent", filePath: "src/app/shared/bar-chart/bar-chart.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=bar-chart.component.js.map