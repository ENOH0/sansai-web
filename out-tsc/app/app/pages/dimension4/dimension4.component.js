import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension4Component_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r2 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r2 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r1.text);
} }
function Dimension4Component_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r4 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.text);
} }
function Dimension4Component_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 35);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 36);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r6 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ", i_r6 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r5.text);
} }
function Dimension4Component_div_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "h3", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 38)(4, "span", 39);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 40);
    i0.ɵɵtext(8, "\u2192");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 41);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementStart(12, "span", 42);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "span", 43);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p", 44);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const e_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r8 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r7.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 7, e_r7.from, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 10, e_r7.to, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r7.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", i0.ɵɵpipeBind2(16, 13, e_r7.to - e_r7.from, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r7.note);
} }
function Dimension4Component_div_42_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r9);
} }
function Dimension4Component_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "h3", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 47);
    i0.ɵɵtemplate(4, Dimension4Component_div_42_li_4_Template, 2, 1, "li", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("revealDelay", i_r11 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.d.indicators[key_r10]);
} }
export class Dimension4Component {
    gallery = GALLERY['d4'];
    d = DIM4;
    indicatorKeys = Object.keys(DIM4.indicators);
    palette = ['#1e4d9e', '#d4a537', '#4f88d4'];
    outcomeSeries = DIM4.assessment.outcome.series.map((s, i) => ({
        name: s.name, values: s.values, color: this.palette[i % 3]
    }));
    static ɵfac = function Dimension4Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension4Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension4Component, selectors: [["app-dimension4"]], decls: 46, vars: 23, consts: [[3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [1, "section", "section-alt"], ["num", "4.1", "title", "\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "lead"], [3, "steps"], ["num", "4.2", "title", "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "lead"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["num", "4.3", "title", "\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "lead"], [1, "steps", 2, "margin-bottom", "38px"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["subtitle", "\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "labels", "series", "min", "max", "note"], ["num", "4.4", "title", "\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49", 3, "lead"], [1, "grid", "grid-4", 2, "margin-bottom", "34px"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], [1, "sec-lead"], ["class", "card card-gold", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 3, "items"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-3", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "nextPath", "/dimension-5", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], [1, "card-title"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17px"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "", 1, "card", "card-gold", 3, "revealDelay"], [2, "display", "flex", "align-items", "baseline", "gap", "14px", "margin", "14px 0 8px"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "29px", "font-weight", "700", "color", "#6b7a94"], [2, "font-size", "22px", "color", "#82ade4"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "36px", "font-weight", "700", "color", "#132f63"], [2, "font-size", "16px", "color", "#6b7a94", "margin-left", "4px"], [1, "up", 2, "margin-left", "auto"], [1, "card-body", 2, "margin", "0", "font-size", "15px"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"], [4, "ngFor", "ngForOf"]], template: function Dimension4Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 6)(8, "div", 2);
            i0.ɵɵelement(9, "app-section-header", 7)(10, "app-cycle-flow", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "section", 1)(12, "div", 2);
            i0.ɵɵelement(13, "app-section-header", 9);
            i0.ɵɵelementStart(14, "div", 10);
            i0.ɵɵtemplate(15, Dimension4Component_div_15_Template, 7, 4, "div", 11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "section", 6)(17, "div", 2);
            i0.ɵɵelement(18, "app-section-header", 12);
            i0.ɵɵelementStart(19, "div", 13);
            i0.ɵɵtemplate(20, Dimension4Component_div_20_Template, 5, 3, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "app-line-chart", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "section", 1)(23, "div", 2);
            i0.ɵɵelement(24, "app-section-header", 16);
            i0.ɵɵelementStart(25, "div", 17);
            i0.ɵɵtemplate(26, Dimension4Component_div_26_Template, 7, 4, "div", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 19)(28, "h3", 20);
            i0.ɵɵtext(29, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "div", 21);
            i0.ɵɵelementStart(31, "p", 22);
            i0.ɵɵtext(32, "\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 10);
            i0.ɵɵtemplate(34, Dimension4Component_div_34_Template, 19, 16, "div", 23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "section", 1)(36, "div", 2);
            i0.ɵɵelement(37, "app-photo-gallery", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "section", 6)(39, "div", 2);
            i0.ɵɵelement(40, "app-section-header", 25);
            i0.ɵɵelementStart(41, "div", 10);
            i0.ɵɵtemplate(42, Dimension4Component_div_42_Template, 5, 3, "div", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 27);
            i0.ɵɵelement(44, "app-pager", 28);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(45, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.design.lead);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.design.cycle);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.classroom.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.classroom.practices);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.assessment.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.assessment.points);
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ctx.d.assessment.outcome.caption)("labels", ctx.d.assessment.outcome.years)("series", ctx.outcomeSeries)("min", 50)("max", 100)("note", ctx.d.assessment.outcome.note);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.useResults.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.useResults.steps);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.d.useResults.evidence);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.indicatorKeys);
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.DecimalPipe, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, PagerComponent,
            LineChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension4Component, [{
        type: Component,
        args: [{ selector: 'app-dimension4', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, PagerComponent,
                    LineChartComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.1 \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"4.1\" title=\"\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.design.lead\" />\n    <app-cycle-flow [steps]=\"d.design.cycle\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.2 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"4.2\" title=\"\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\" [lead]=\"d.classroom.lead\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let p of d.classroom.practices; let i = index\"\n           appReveal [revealDelay]=\"i * 70\">\n        <div style=\"width:38px;height:38px;border-radius:11px;display:grid;place-items:center;\n                    background:#eef4fc;color:#183d80;font-weight:700;border:1px solid #d8e6f8;\n                    margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ p.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ p.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.3 \u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"4.3\" title=\"\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.assessment.lead\" />\n\n    <div class=\"steps\" style=\"margin-bottom:38px\">\n      <div class=\"step-item\" *ngFor=\"let p of d.assessment.points; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <app-line-chart\n      [title]=\"d.assessment.outcome.caption\"\n      subtitle=\"\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n      [labels]=\"d.assessment.outcome.years\"\n      [series]=\"outcomeSeries\"\n      [min]=\"50\" [max]=\"100\"\n      [note]=\"d.assessment.outcome.note\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.4 \u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"4.4\" title=\"\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49\" [lead]=\"d.useResults.lead\" />\n\n    <div class=\"grid grid-4\" style=\"margin-bottom:34px\">\n      <div class=\"card card-accent\" *ngFor=\"let s of d.useResults.steps; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ i + 1 }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ s.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ s.text }}</p>\n      </div>\n    </div>\n\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49</h3>\n      <div class=\"sec-rule\"></div>\n      <p class=\"sec-lead\">\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</p>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-gold\" *ngFor=\"let e of d.useResults.evidence; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ e.label }}</h3>\n        <div style=\"display:flex;align-items:baseline;gap:14px;margin:14px 0 8px\">\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:29px;font-weight:700;color:#6b7a94\">\n            {{ e.from | number: '1.2-2' }}\n          </span>\n          <span style=\"font-size:22px;color:#82ade4\">\u2192</span>\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:36px;font-weight:700;color:#132f63\">\n            {{ e.to | number: '1.2-2' }}<span style=\"font-size:16px;color:#6b7a94;margin-left:4px\">{{ e.unit }}</span>\n          </span>\n          <span class=\"up\" style=\"margin-left:auto\">+{{ (e.to - e.from) | number: '1.2-2' }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15px\">{{ e.note }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-3\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n        nextPath=\"/dimension-5\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension4Component, { className: "Dimension4Component", filePath: "src/app/pages/dimension4/dimension4.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=dimension4.component.js.map