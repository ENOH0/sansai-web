import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM2 } from '../../data/dimension2.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { SmartWheelComponent } from '../../shared/smart-wheel/smart-wheel.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { PagerComponent } from '../../shared/pager/pager.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ["\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19", "2566", "2567", "2568"];
const _c1 = () => ["\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19", "\u0E1B\u0E35 2566", "\u0E1B\u0E35 2567", "\u0E1B\u0E35 2568"];
function Dimension2Component_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r2 * 110);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r1.year);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r1.text);
} }
function Dimension2Component_li_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r3);
} }
function Dimension2Component_div_53_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r4);
} }
function Dimension2Component_div_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43);
    i0.ɵɵtext(2, "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 44);
    i0.ɵɵtemplate(6, Dimension2Component_div_53_li_6_Template, 2, 1, "li", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r6 * 80);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(g_r5.subject);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", g_r5.items);
} }
function Dimension2Component_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r8 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r7.detail);
} }
function Dimension2Component_div_73_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r9);
} }
function Dimension2Component_div_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "h3", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 50);
    i0.ɵɵtemplate(4, Dimension2Component_div_73_li_4_Template, 2, 1, "li", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("revealDelay", i_r11 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.d.indicators[key_r10]);
} }
export class Dimension2Component {
    gallery = GALLERY['d2'];
    d = DIM2;
    indicatorKeys = Object.keys(DIM2.indicators);
    courseSeries = [
        { name: 'มัธยมศึกษาตอนต้น', values: DIM2.assessment.planCount.lower, color: '#4f88d4' },
        { name: 'มัธยมศึกษาตอนปลาย', values: DIM2.assessment.planCount.upper, color: '#d4a537' },
        { name: 'รวมทั้งหมด', values: DIM2.assessment.planCount.total, color: '#132f63' }
    ];
    upperRows = [
        ...DIM2.curriculum.upperCourses.map(c => ({
            cells: [c.name, ...c.y.map(v => (v ? '✓' : '–'))]
        })),
        { cells: ['รวมแผนการเรียน ม.ปลาย', ...DIM2.assessment.planCount.upper.map(String)], total: true }
    ];
    planRows = [
        { cells: ['มัธยมศึกษาตอนต้น', ...DIM2.assessment.planCount.lower.map(String)] },
        { cells: ['มัธยมศึกษาตอนปลาย', ...DIM2.assessment.planCount.upper.map(String)] },
        { cells: ['รวมทั้งหมด', ...DIM2.assessment.planCount.total.map(String)], total: true }
    ];
    static ɵfac = function Dimension2Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension2Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension2Component, selectors: [["app-dimension2"]], decls: 76, vars: 32, consts: [[3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [1, "section", "section-alt"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 26px"], ["appReveal", ""], ["num", "2.1", "title", "\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "lead"], [3, "steps"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["title", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23/\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "valueFormat", "1.0-0", "note", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 26 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132567 \u0E40\u0E1B\u0E47\u0E19 27 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)", 3, "labels", "series"], [1, "grid", "grid-2", 2, "margin-top", "24px"], ["appReveal", "left", 1, "card"], [1, "card-title"], [1, "bullets"], [4, "ngFor", "ngForOf"], ["appReveal", "right"], ["caption", "\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22", 3, "headers", "rows"], ["label", "\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29:", 2, "display", "block", "margin-top", "22px", 3, "gold"], ["num", "2.2", "title", "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23", 3, "lead"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-bottom", "32px"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["num", "2.3", "title", "\u0E2A\u0E37\u0E48\u0E2D \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "lead"], [1, "grid", "grid-3", 2, "margin-top", "38px"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["num", "2.4", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25", 3, "lead"], [2, "margin-top", "38px"], ["note", "\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E43\u0E2B\u0E49\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E36\u0E07\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E25\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32", 3, "caption", "headers", "rows"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2", 3, "items"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["prevPath", "/dimension-1", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "nextPath", "/dimension-3", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "chip", 2, "margin-bottom", "12px"], [1, "bullets", 2, "margin-top", "8px"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [2, "font-weight", "700", "color", "#132f63", "font-size", "16.5px", "margin-bottom", "6px"], [2, "color", "#1e4d9e", "font-weight", "700", "font-size", "19px"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"]], template: function Dimension2Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 6)(8, "div", 2)(9, "div", 7)(10, "h3", 8);
            i0.ɵɵtext(11, "SMART Student \u2014 \u0E27\u0E07\u0E25\u0E49\u0E2D ACTIVITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p", 10);
            i0.ɵɵtext(14, " \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵelement(16, "app-smart-wheel");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "section", 6)(18, "div", 2);
            i0.ɵɵelement(19, "app-section-header", 12)(20, "app-cycle-flow", 13);
            i0.ɵɵelementStart(21, "div", 14)(22, "h3", 8);
            i0.ɵɵtext(23, "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 15);
            i0.ɵɵtemplate(26, Dimension2Component_div_26_Template, 5, 3, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 17);
            i0.ɵɵelement(28, "app-bar-chart", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 19)(30, "div", 20)(31, "h3", 21);
            i0.ɵɵtext(32, "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "ol", 22);
            i0.ɵɵtemplate(34, Dimension2Component_li_34_Template, 2, 1, "li", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 24);
            i0.ɵɵelement(36, "app-data-table", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "app-callout", 26);
            i0.ɵɵtext(38, " \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E14\u0E49\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E33\u0E19\u0E27\u0E19 4 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19\u2013\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (CEP) \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E (Health Sciences Program) \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST) \u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19 (Chinese Special Program: CSP) ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "section", 1)(40, "div", 2);
            i0.ɵɵelement(41, "app-section-header", 27);
            i0.ɵɵelementStart(42, "div", 28)(43, "h3", 21);
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "p", 4);
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(47, "app-cycle-flow", 13);
            i0.ɵɵelementStart(48, "div", 14)(49, "h3", 8);
            i0.ɵɵtext(50, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(51, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "div", 29);
            i0.ɵɵtemplate(53, Dimension2Component_div_53_Template, 7, 3, "div", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(54, "section", 6)(55, "div", 2);
            i0.ɵɵelement(56, "app-section-header", 31)(57, "app-cycle-flow", 13);
            i0.ɵɵelementStart(58, "div", 32);
            i0.ɵɵtemplate(59, Dimension2Component_div_59_Template, 5, 3, "div", 33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(60, "section", 1)(61, "div", 2);
            i0.ɵɵelement(62, "app-section-header", 34)(63, "app-cycle-flow", 13);
            i0.ɵɵelementStart(64, "div", 35);
            i0.ɵɵelement(65, "app-data-table", 36);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(66, "section", 1)(67, "div", 2);
            i0.ɵɵelement(68, "app-photo-gallery", 37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "section", 6)(70, "div", 2);
            i0.ɵɵelement(71, "app-section-header", 38);
            i0.ɵɵelementStart(72, "div", 29);
            i0.ɵɵtemplate(73, Dimension2Component_div_73_Template, 5, 3, "div", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "div", 17);
            i0.ɵɵelement(75, "app-pager", 40);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("lead", ctx.d.curriculum.lead);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.curriculum.cycle);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.curriculum.timeline);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.curriculum.courseYears)("series", ctx.courseSeries);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.curriculum.lowerCourses);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("headers", i0.ɵɵpureFunction0(30, _c0))("rows", ctx.upperRows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("gold", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("lead", ctx.d.activities.lead);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.d.activities.flagship.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.d.activities.flagship.text);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.activities.cycle);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.activities.groups);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.media.lead);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.media.cycle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.media.resources);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.assessment.lead);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.assessment.cycle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("caption", ctx.d.assessment.planCount.caption)("headers", i0.ɵɵpureFunction0(31, _c1))("rows", ctx.planRows);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.indicatorKeys);
        } }, dependencies: [SmartWheelComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, DataTableComponent, CalloutComponent,
            PagerComponent, BarChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension2Component, [{
        type: Component,
        args: [{ selector: 'app-dimension2', standalone: true, imports: [
                    SmartWheelComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, DataTableComponent, CalloutComponent,
                    PagerComponent, BarChartComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E27\u0E07\u0E25\u0E49\u0E2D SMART Student \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">SMART Student \u2014 \u0E27\u0E07\u0E25\u0E49\u0E2D ACTIVITY</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 26px\">\n      \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23\n      \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\n    </p>\n    <div appReveal>\n      <app-smart-wheel />\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.1 \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"2.1\" title=\"\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\" [lead]=\"d.curriculum.lead\" />\n\n    <app-cycle-flow [steps]=\"d.curriculum.cycle\" />\n\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let t of d.curriculum.timeline; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 110\">\n        <h4>{{ t.year }}</h4>\n        <p>{{ t.text }}</p>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-bar-chart\n        title=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23/\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.curriculum.courseYears\"\n        [series]=\"courseSeries\"\n        valueFormat=\"1.0-0\"\n        note=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 26 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132567 \u0E40\u0E1B\u0E47\u0E19 27 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)\" />\n    </div>\n\n    <div class=\"grid grid-2\" style=\"margin-top:24px\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let c of d.curriculum.lowerCourses\">{{ c }}</li>\n        </ol>\n      </div>\n      <div appReveal=\"right\">\n        <app-data-table\n          caption=\"\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22\"\n          [headers]=\"['\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19', '2566', '2567', '2568']\"\n          [rows]=\"upperRows\" />\n      </div>\n    </div>\n\n    <app-callout label=\"\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29:\" [gold]=\"true\" style=\"display:block;margin-top:22px\">\n      \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E14\u0E49\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E33\u0E19\u0E27\u0E19 4 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48\n      \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19\u2013\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (CEP) \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22\n      \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E (Health Sciences Program) \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)\n      \u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19 (Chinese Special Program: CSP)\n    </app-callout>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.2 \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"2.2\" title=\"\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\" [lead]=\"d.activities.lead\" />\n\n    <div class=\"card card-gold\" appReveal style=\"margin-bottom:32px\">\n      <h3 class=\"card-title\">{{ d.activities.flagship.name }}</h3>\n      <p class=\"card-body\" style=\"margin:0\">{{ d.activities.flagship.text }}</p>\n    </div>\n\n    <app-cycle-flow [steps]=\"d.activities.cycle\" />\n\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let g of d.activities.groups; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"chip\" style=\"margin-bottom:12px\">\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</div>\n        <h3 class=\"card-title\">{{ g.subject }}</h3>\n        <ul class=\"bullets\" style=\"margin-top:8px\">\n          <li *ngFor=\"let it of g.items\">{{ it }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.3 \u0E2A\u0E37\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"2.3\" title=\"\u0E2A\u0E37\u0E48\u0E2D \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.media.lead\" />\n\n    <app-cycle-flow [steps]=\"d.media.cycle\" />\n\n    <div class=\"grid grid-3\" style=\"margin-top:38px\">\n      <div class=\"card card-accent\" *ngFor=\"let r of d.media.resources; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div style=\"font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px\">{{ r.name }}</div>\n        <div style=\"color:#1e4d9e;font-weight:700;font-size:19px\">{{ r.detail }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.4 \u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"2.4\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\" [lead]=\"d.assessment.lead\" />\n\n    <app-cycle-flow [steps]=\"d.assessment.cycle\" />\n\n    <div style=\"margin-top:38px\">\n      <app-data-table\n        [caption]=\"d.assessment.planCount.caption\"\n        [headers]=\"['\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19', '\u0E1B\u0E35 2566', '\u0E1B\u0E35 2567', '\u0E1B\u0E35 2568']\"\n        [rows]=\"planRows\"\n        note=\"\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E43\u0E2B\u0E49\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E36\u0E07\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E25\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-1\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        nextPath=\"/dimension-3\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n    </div>\n  </div>\n</section>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension2Component, { className: "Dimension2Component", filePath: "src/app/pages/dimension2/dimension2.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=dimension2.component.js.map