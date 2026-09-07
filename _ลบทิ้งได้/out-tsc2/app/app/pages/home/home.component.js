import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, DIMENSIONS } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ["\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23", "\u0E0A\u0E32\u0E22", "\u0E2B\u0E0D\u0E34\u0E07", "\u0E23\u0E27\u0E21"];
function HomeComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 54);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r2 * 100);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E17\u0E31\u0E01\u0E29\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15 ", i_r2 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r1);
} }
function HomeComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 56)(2, "span", 57);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 58);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 59);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r4 * 70);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(l_r3.letter);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r3.en);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r3.th);
} }
function HomeComponent_a_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 60)(1, "div", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 63);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 64)(8, "span", 65);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 66);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 67);
    i0.ɵɵtext(13);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "\u203A");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵproperty("routerLink", d_r5.path)("revealDelay", i_r6 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r5.no);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r5.desc);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01 ", d_r5.weight, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", d_r5.items, " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 ", d_r5.no, " ");
} }
function HomeComponent_li_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r7);
} }
function HomeComponent_li_74_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const g_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(g_r8);
} }
function HomeComponent_div_76_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r9);
} }
function HomeComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68)(1, "div", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 70);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 71);
    i0.ɵɵtemplate(6, HomeComponent_div_76_li_6_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const st_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r11 * 100);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C\u0E17\u0E35\u0E48 ", st_r10.no, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(st_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", st_r10.items);
} }
function HomeComponent_tr_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 72);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r12.value);
} }
export class HomeComponent {
    school = SCHOOL;
    dimensions = DIMENSIONS;
    studentYears = SCHOOL.students.years;
    studentSeries = [
        { name: 'มัธยมศึกษาตอนต้น', values: SCHOOL.students.rows[3].values, color: '#4f88d4' },
        { name: 'มัธยมศึกษาตอนปลาย', values: SCHOOL.students.rows[7].values, color: '#d4a537' },
        { name: 'รวมทั้งหมด', values: SCHOOL.students.rows[8].values, color: '#132f63' }
    ];
    studentHeaders = ['ระดับชั้น', ...SCHOOL.students.years.map(y => 'ปี ' + y)];
    studentRows = SCHOOL.students.rows.map(r => ({
        cells: [r.level, ...r.values.map(v => v.toLocaleString('th-TH'))],
        total: !!r.total
    }));
    staffRows = SCHOOL.staff.rows.map(r => ({
        cells: [r.type, r.male || '–', r.female || '–', r.total],
        total: !!r.isTotal
    }));
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 108, vars: 41, consts: [[1, "hero"], [1, "wrap", "hero-inner"], ["appReveal", "", 1, "hero-eyebrow"], ["appReveal", "", 1, "hero-title", 3, "revealDelay"], ["appReveal", "", 1, "hero-rule", 3, "revealDelay"], ["appReveal", "", 1, "hero-lead", 3, "revealDelay"], ["appReveal", "", 1, "hero-actions", 3, "revealDelay"], ["routerLink", "/dimension-1", 1, "btn", "btn-primary"], ["href", "#overview", 1, "btn", "btn-ghost"], [1, "section", "section-alt"], [1, "wrap"], ["appReveal", "", 1, "sec-head", "vision-head"], [1, "sec-kicker"], [1, "quote"], [1, "sec-rule", "vision-rule"], [1, "grid", "grid-4", 2, "margin-top", "34px"], ["class", "card card-hover card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-3", 2, "margin-top", "22px"], ["appReveal", "left", 1, "card"], [1, "card-title"], [1, "card-body", 2, "margin", "0"], ["appReveal", "", 1, "card", 3, "revealDelay"], ["appReveal", "right", 1, "card", 3, "revealDelay"], [1, "section"], ["kicker", "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19", "title", "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49", "lead", "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E2B\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48 \u0E01\u0E48\u0E2D\u0E15\u0E31\u0E49\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 14 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2516 \u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 35 \u0E44\u0E23\u0E48 2 \u0E07\u0E32\u0E19 5 \u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E32 \u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1B\u0E35\u0E17\u0E35\u0E48 1 \u0E16\u0E36\u0E07\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1B\u0E35\u0E17\u0E35\u0E48 6 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E40\u0E02\u0E15\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 12 \u0E15\u0E33\u0E1A\u0E25\u0E02\u0E2D\u0E07\u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48"], [3, "items"], [2, "margin-top", "34px"], ["title", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07 4 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "subtitle", "\u0E41\u0E22\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)", "valueFormat", "1.0-0", "note", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E08\u0E32\u0E01 1,658 \u0E04\u0E19 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E40\u0E1B\u0E47\u0E19 2,198 \u0E04\u0E19 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2569 \u0E04\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 32.57 \u0E20\u0E32\u0E22\u0E43\u0E19 4 \u0E1B\u0E35 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E15\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "labels", "series"], [1, "grid", "grid-2", 2, "margin-top", "24px"], ["caption", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 (\u0E04\u0E19)", 3, "headers", "rows"], ["caption", "\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 10 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 2568 (\u0E04\u0E19)", "note", "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14: \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 16 \u0E04\u0E19 \u00B7 \u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 57 \u0E04\u0E19 \u00B7 \u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 39 \u0E04\u0E19", 3, "headers", "rows"], ["kicker", "\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23", 3, "title", "lead"], [1, "grid", "grid-4"], ["class", "card card-hover", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["id", "overview", 1, "section"], ["kicker", "\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D", "title", "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07 5 \u0E14\u0E49\u0E32\u0E19", "lead", "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E41\u0E1A\u0E48\u0E07\u0E15\u0E32\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E14\u0E49\u0E32\u0E19\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E41\u0E16\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49"], [1, "grid", "grid-3"], ["class", "dim-card", "appReveal", "", 3, "routerLink", "revealDelay", 4, "ngFor", "ngForOf"], ["kicker", "\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32", "title", "\u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08 \u0E40\u0E1B\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C", "lead", "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1C\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E1E.\u0E28. 2568\u20132570 \u0E0B\u0E36\u0E48\u0E07\u0E08\u0E31\u0E14\u0E17\u0E33\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E30\u0E1A\u0E1A \u0E42\u0E14\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E17\u0E38\u0E01\u0E1D\u0E48\u0E32\u0E22"], [1, "grid", "grid-2"], [1, "bullets"], [4, "ngFor", "ngForOf"], ["appReveal", "right", 1, "card"], [1, "grid", "grid-3", 2, "margin-top", "20px"], ["class", "card card-accent", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["kicker", "\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32", "title", "\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D", 3, "lead"], [1, "card-body", 2, "margin-top", "12px", "margin-bottom", "0"], ["appReveal", "right", 1, "card", "card-gold"], [1, "card-body"], [1, "card-title", 2, "margin-top", "20px"], [1, "table-scroll", 2, "border", "none"], [1, "tbl", 2, "min-width", "0"], ["appReveal", "zoom", 1, "card", "card-hover", "card-accent", 3, "revealDelay"], [1, "chip", "chip-gold", 2, "margin-bottom", "10px"], [1, "skill-text"], ["appReveal", "zoom", 1, "card", "card-hover", 3, "revealDelay"], [1, "model-letter"], [1, "model-badge"], [1, "model-en"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "", 1, "dim-card", 3, "routerLink", "revealDelay"], [1, "dim-num"], [1, "dim-name"], [1, "dim-desc"], [1, "chip-row", 2, "margin-bottom", "14px"], [1, "chip", "chip-gold"], [1, "chip"], [1, "dim-meta"], ["appReveal", "", 1, "card", "card-accent", 3, "revealDelay"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"], [1, "num"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "div", 4);
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelement(9, "br");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 6)(12, "a", 7);
            i0.ɵɵtext(13, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u203A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 8);
            i0.ɵɵtext(15, "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07 5 \u0E14\u0E49\u0E32\u0E19");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(16, "section", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12);
            i0.ɵɵtext(20, "\u0E27\u0E34\u0E2A\u0E31\u0E22\u0E17\u0E31\u0E28\u0E19\u0E4C");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p", 13);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 15);
            i0.ɵɵtemplate(25, HomeComponent_div_25_Template, 5, 3, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 17)(27, "div", 18)(28, "h3", 19);
            i0.ɵɵtext(29, "\u0E1B\u0E23\u0E31\u0E0A\u0E0D\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p", 20);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 21)(33, "h3", 19);
            i0.ɵɵtext(34, "\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p", 20);
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 22)(38, "h3", 19);
            i0.ɵɵtext(39, "\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p", 20);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(42, "section", 23)(43, "div", 10);
            i0.ɵɵelement(44, "app-section-header", 24)(45, "app-kpi-grid", 25);
            i0.ɵɵelementStart(46, "div", 26);
            i0.ɵɵelement(47, "app-line-chart", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 28);
            i0.ɵɵelement(49, "app-data-table", 29)(50, "app-data-table", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(51, "section", 9)(52, "div", 10);
            i0.ɵɵelement(53, "app-section-header", 31);
            i0.ɵɵelementStart(54, "div", 32);
            i0.ɵɵtemplate(55, HomeComponent_div_55_Template, 8, 4, "div", 33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "section", 34)(57, "div", 10);
            i0.ɵɵelement(58, "app-section-header", 35);
            i0.ɵɵelementStart(59, "div", 36);
            i0.ɵɵtemplate(60, HomeComponent_a_60_Template, 16, 8, "a", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(61, "section", 9)(62, "div", 10);
            i0.ɵɵelement(63, "app-section-header", 38);
            i0.ɵɵelementStart(64, "div", 39)(65, "div", 18)(66, "h3", 19);
            i0.ɵɵtext(67, "\u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08 5 \u0E02\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "ol", 40);
            i0.ɵɵtemplate(69, HomeComponent_li_69_Template, 2, 1, "li", 41);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "div", 42)(71, "h3", 19);
            i0.ɵɵtext(72, "\u0E40\u0E1B\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C 5 \u0E02\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "ol", 40);
            i0.ɵɵtemplate(74, HomeComponent_li_74_Template, 2, 1, "li", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(75, "div", 43);
            i0.ɵɵtemplate(76, HomeComponent_div_76_Template, 7, 4, "div", 44);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(77, "section", 23)(78, "div", 10);
            i0.ɵɵelement(79, "app-section-header", 45);
            i0.ɵɵelementStart(80, "div", 39)(81, "div", 18)(82, "h3", 19);
            i0.ɵɵtext(83, "\u0E2A\u0E20\u0E32\u0E1E\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "ul", 40)(85, "li");
            i0.ɵɵtext(86);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "li");
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "li");
            i0.ɵɵtext(90);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "li");
            i0.ɵɵtext(92);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(93, "li");
            i0.ɵɵtext(94);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(95, "p", 46);
            i0.ɵɵtext(96);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 47)(98, "h3", 19);
            i0.ɵɵtext(99, "\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "p", 48);
            i0.ɵɵtext(101);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "h3", 49);
            i0.ɵɵtext(103, "\u0E2D\u0E32\u0E04\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 50)(105, "table", 51)(106, "tbody");
            i0.ɵɵtemplate(107, HomeComponent_tr_107_Template, 5, 2, "tr", 41);
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", ctx.school.award, " \u00B7 ", ctx.school.level, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 90);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.school.name);
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 150);
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 200);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 ", ctx.school.academicYear, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.school.area, " ", ctx.school.affiliation, " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 280);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("\u201C", ctx.school.vision, "\u201D");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.school.futureSkills);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.school.philosophy);
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 80);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.school.coreValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("revealDelay", 160);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.school.way);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("items", ctx.school.highlights);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.studentYears)("series", ctx.studentSeries);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("headers", ctx.studentHeaders)("rows", ctx.studentRows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("headers", i0.ɵɵpureFunction0(40, _c0))("rows", ctx.staffRows);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.school.model.name)("lead", ctx.school.model.tagline);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.school.model.letters);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.dimensions);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngForOf", ctx.school.missions);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.school.goals);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.school.strategies);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.school.community.serviceArea);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19: ", ctx.school.community.character, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23: ", ctx.school.community.population, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u0E40\u0E14\u0E47\u0E01\u0E43\u0E19\u0E27\u0E31\u0E22\u0E40\u0E23\u0E35\u0E22\u0E19: ", ctx.school.community.schoolAgeChildren, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E2A\u0E33\u0E04\u0E31\u0E0D: ", ctx.school.community.occupation, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E15\u0E48\u0E2D\u0E04\u0E23\u0E31\u0E27\u0E40\u0E23\u0E37\u0E2D\u0E19: ", ctx.school.community.income, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.school.community.note);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.school.community.partners);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.school.facilities);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink, RevealDirective,
            SectionHeaderComponent, KpiGridComponent, DataTableComponent, LineChartComponent], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(155deg, var(--navy-900) 0%, var(--navy-800) 45%, var(--navy-600) 100%);\n  color: #fff;\n  padding: calc(var(--nav-h) + 74px) 0 84px;\n}\n\n\n\n.hero[_ngcontent-%COMP%]::before, \n.hero[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  width: 620px; height: 620px;\n  right: -180px; top: -240px;\n  background: radial-gradient(circle, rgba(232, 196, 106, .22), transparent 62%);\n  animation: _ngcontent-%COMP%_floatA 16s ease-in-out infinite;\n}\n\n.hero[_ngcontent-%COMP%]::after {\n  width: 520px; height: 520px;\n  left: -160px; bottom: -240px;\n  background: radial-gradient(circle, rgba(130, 173, 228, .28), transparent 65%);\n  animation: _ngcontent-%COMP%_floatB 20s ease-in-out infinite;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_floatA {\n  0%, 100% { transform: translate3d(0, 0, 0); }\n  50% { transform: translate3d(-26px, 30px, 0); }\n}\n\n@keyframes _ngcontent-%COMP%_floatB {\n  0%, 100% { transform: translate3d(0, 0, 0); }\n  50% { transform: translate3d(30px, -24px, 0); }\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { color: #fff; }\n.hero-inner[_ngcontent-%COMP%] { position: relative; z-index: 2; }\n\n.hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .13);\n  border: 1px solid rgba(255, 255, 255, .24);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: .02em;\n  color: var(--gold-400);\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(30px, 4.6vw, 54px);\n  line-height: 1.32;\n  margin: 20px 0 14px;\n  letter-spacing: -.01em;\n}\n\n.hero-lead[_ngcontent-%COMP%] {\n  font-size: clamp(16px, 1.7vw, 20px);\n  color: rgba(255, 255, 255, .86);\n  max-width: 62ch;\n  line-height: 1.85;\n}\n\n.hero-rule[_ngcontent-%COMP%] {\n  width: 84px; height: 4px;\n  border-radius: 4px;\n  background: var(--gold-500);\n  margin: 22px 0;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 32px;\n}\n\n\n\n.dim-card[_ngcontent-%COMP%] {\n  display: block;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 26px;\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease);\n}\n\n.dim-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 5px;\n  background: linear-gradient(180deg, var(--navy-500), var(--navy-800));\n}\n\n.dim-card[_ngcontent-%COMP%]:active { transform: translateY(-3px); }\n\n@media (hover: hover) {\n  .dim-card[_ngcontent-%COMP%]:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }\n}\n\n.dim-num[_ngcontent-%COMP%] {\n  font-family: 'Noto Serif Thai', serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--navy-100);\n  line-height: 1;\n  margin-bottom: 6px;\n}\n\n.dim-name[_ngcontent-%COMP%] { font-size: 20px; font-weight: 700; color: var(--navy-900); margin-bottom: 8px; }\n.dim-desc[_ngcontent-%COMP%] { font-size: 15.5px; color: var(--ink-soft); margin-bottom: 14px; }\n\n.dim-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--navy-600);\n  font-weight: 700;\n}\n\n\n\n.vision-head[_ngcontent-%COMP%] { text-align: center; }\n.vision-rule[_ngcontent-%COMP%] { margin: 18px auto 0; }\n.skill-text[_ngcontent-%COMP%] { font-weight: 700; color: var(--navy-800); font-size: 17px; line-height: 1.6; }\n\n.model-letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 21px;\n  font-weight: 700;\n  font-family: 'Noto Serif Thai', serif;\n}\n\n.model-en[_ngcontent-%COMP%] { font-weight: 700; color: var(--navy-600); font-size: 14.5px; line-height: 1.4; }\n\n@media (max-width: 834px) {\n  .hero[_ngcontent-%COMP%] { padding: calc(var(--nav-h) + 56px) 0 64px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero[_ngcontent-%COMP%]::before, .hero[_ngcontent-%COMP%]::after { animation: none !important; }\n}\n\n@media print {\n  .hero[_ngcontent-%COMP%] {\n    background: var(--navy-900) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .dim-card[_ngcontent-%COMP%] { break-inside: avoid; box-shadow: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [
                    CommonModule, RouterLink, RevealDirective,
                    SectionHeaderComponent, KpiGridComponent, DataTableComponent, LineChartComponent
                ], template: "<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E48\u0E27\u0E19\u0E40\u0E1B\u0E34\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"hero\">\n  <div class=\"wrap hero-inner\">\n    <span class=\"hero-eyebrow\" appReveal>\n      {{ school.award }} \u00B7 {{ school.level }}\n    </span>\n    <h1 class=\"hero-title\" appReveal [revealDelay]=\"90\">{{ school.name }}</h1>\n    <div class=\"hero-rule\" appReveal [revealDelay]=\"150\"></div>\n    <p class=\"hero-lead\" appReveal [revealDelay]=\"200\">\n      \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 {{ school.academicYear }}<br />\n      {{ school.area }} {{ school.affiliation }}\n    </p>\n\n    <div class=\"hero-actions\"\n         appReveal [revealDelay]=\"280\">\n      <a class=\"btn btn-primary\" routerLink=\"/dimension-1\">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u203A</a>\n      <a class=\"btn btn-ghost\" href=\"#overview\">\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07 5 \u0E14\u0E49\u0E32\u0E19</a>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E27\u0E34\u0E2A\u0E31\u0E22\u0E17\u0E31\u0E28\u0E19\u0E4C \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <div class=\"sec-head vision-head\" appReveal>\n      <div class=\"sec-kicker\">\u0E27\u0E34\u0E2A\u0E31\u0E22\u0E17\u0E31\u0E28\u0E19\u0E4C</div>\n      <p class=\"quote\">\u201C{{ school.vision }}\u201D</p>\n      <div class=\"sec-rule vision-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-4\" style=\"margin-top:34px\">\n      <div class=\"card card-hover card-accent\" *ngFor=\"let s of school.futureSkills; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 100\">\n        <div class=\"chip chip-gold\" style=\"margin-bottom:10px\">\u0E17\u0E31\u0E01\u0E29\u0E30\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15 {{ i + 1 }}</div>\n        <div class=\"skill-text\">{{ s }}</div>\n      </div>\n    </div>\n\n    <div class=\"grid grid-3\" style=\"margin-top:22px\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E1B\u0E23\u0E31\u0E0A\u0E0D\u0E32</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ school.philosophy }}</p>\n      </div>\n      <div class=\"card\" appReveal [revealDelay]=\"80\">\n        <h3 class=\"card-title\">\u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ school.coreValue }}</p>\n      </div>\n      <div class=\"card\" appReveal=\"right\" [revealDelay]=\"160\">\n        <h3 class=\"card-title\">\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ school.way }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2A\u0E33\u0E04\u0E31\u0E0D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\"\n      title=\"\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E43\u0E19\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\"\n      lead=\"\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E2B\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E19\u0E32\u0E14\u0E43\u0E2B\u0E0D\u0E48 \u0E01\u0E48\u0E2D\u0E15\u0E31\u0E49\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 14 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 \u0E1E.\u0E28. 2516 \u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48 35 \u0E44\u0E23\u0E48 2 \u0E07\u0E32\u0E19 5 \u0E15\u0E32\u0E23\u0E32\u0E07\u0E27\u0E32 \u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1B\u0E35\u0E17\u0E35\u0E48 1 \u0E16\u0E36\u0E07\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1B\u0E35\u0E17\u0E35\u0E48 6 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E40\u0E02\u0E15\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 12 \u0E15\u0E33\u0E1A\u0E25\u0E02\u0E2D\u0E07\u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48\" />\n\n    <app-kpi-grid [items]=\"school.highlights\" />\n\n    <div style=\"margin-top:34px\">\n      <app-line-chart\n        title=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07 4 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n        subtitle=\"\u0E41\u0E22\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)\"\n        [labels]=\"studentYears\"\n        [series]=\"studentSeries\"\n        valueFormat=\"1.0-0\"\n        note=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E08\u0E32\u0E01 1,658 \u0E04\u0E19 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E40\u0E1B\u0E47\u0E19 2,198 \u0E04\u0E19 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2569 \u0E04\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 32.57 \u0E20\u0E32\u0E22\u0E43\u0E19 4 \u0E1B\u0E35 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E15\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\" />\n    </div>\n\n    <div class=\"grid grid-2\" style=\"margin-top:24px\">\n      <app-data-table\n        caption=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 (\u0E04\u0E19)\"\n        [headers]=\"studentHeaders\"\n        [rows]=\"studentRows\" />\n      <app-data-table\n        caption=\"\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 10 \u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19 2568 (\u0E04\u0E19)\"\n        [headers]=\"['\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23', '\u0E0A\u0E32\u0E22', '\u0E2B\u0E0D\u0E34\u0E07', '\u0E23\u0E27\u0E21']\"\n        [rows]=\"staffRows\"\n        note=\"\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14: \u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 16 \u0E04\u0E19 \u00B7 \u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 57 \u0E04\u0E19 \u00B7 \u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35 39 \u0E04\u0E19\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\"\n      [title]=\"school.model.name\"\n      [lead]=\"school.model.tagline\" />\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-hover\" *ngFor=\"let l of school.model.letters; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div class=\"model-letter\">\n          <span class=\"model-badge\">{{ l.letter }}</span>\n          <span class=\"model-en\">{{ l.en }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ l.th }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E14\u0E49\u0E32\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" id=\"overview\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\"\n      title=\"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E49\u0E07 5 \u0E14\u0E49\u0E32\u0E19\"\n      lead=\"\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E41\u0E1A\u0E48\u0E07\u0E15\u0E32\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E48\u0E32\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E14\u0E49\u0E32\u0E19\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E41\u0E16\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E19\u0E35\u0E49\" />\n\n    <div class=\"grid grid-3\">\n      <a class=\"dim-card\" *ngFor=\"let d of dimensions; let i = index\"\n         [routerLink]=\"d.path\" appReveal [revealDelay]=\"i * 90\">\n        <div class=\"dim-num\">{{ d.no }}</div>\n        <div class=\"dim-name\">{{ d.name }}</div>\n        <p class=\"dim-desc\">{{ d.desc }}</p>\n        <div class=\"chip-row\" style=\"margin-bottom:14px\">\n          <span class=\"chip chip-gold\">\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01 {{ d.weight }}</span>\n          <span class=\"chip\">{{ d.items }} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23</span>\n        </div>\n        <div class=\"dim-meta\">\u0E2D\u0E48\u0E32\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 {{ d.no }} <span>\u203A</span></div>\n      </a>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08\u0E41\u0E25\u0E30\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\"\n      title=\"\u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08 \u0E40\u0E1B\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C\"\n      lead=\"\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1C\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E1E.\u0E28. 2568\u20132570 \u0E0B\u0E36\u0E48\u0E07\u0E08\u0E31\u0E14\u0E17\u0E33\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19 \u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E30\u0E1A\u0E1A \u0E42\u0E14\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E17\u0E38\u0E01\u0E1D\u0E48\u0E32\u0E22\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E1E\u0E31\u0E19\u0E18\u0E01\u0E34\u0E08 5 \u0E02\u0E49\u0E2D</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let m of school.missions\">{{ m }}</li>\n        </ol>\n      </div>\n      <div class=\"card\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E40\u0E1B\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C 5 \u0E02\u0E49\u0E2D</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let g of school.goals\">{{ g }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div class=\"grid grid-3\" style=\"margin-top:20px\">\n      <div class=\"card card-accent\" *ngFor=\"let st of school.strategies; let i = index\"\n           appReveal [revealDelay]=\"i * 100\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C\u0E17\u0E35\u0E48 {{ st.no }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ st.title }}</h3>\n        <ul class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of st.items\">{{ it }}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E0A\u0E38\u0E21\u0E0A\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E1A\u0E23\u0E34\u0E1A\u0E17\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      title=\"\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D\"\n      [lead]=\"school.community.serviceArea\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E2A\u0E20\u0E32\u0E1E\u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21</h3>\n        <ul class=\"bullets\">\n          <li>\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E0A\u0E38\u0E21\u0E0A\u0E19: {{ school.community.character }}</li>\n          <li>\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E01\u0E23: {{ school.community.population }}</li>\n          <li>\u0E40\u0E14\u0E47\u0E01\u0E43\u0E19\u0E27\u0E31\u0E22\u0E40\u0E23\u0E35\u0E22\u0E19: {{ school.community.schoolAgeChildren }}</li>\n          <li>\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E2A\u0E33\u0E04\u0E31\u0E0D: {{ school.community.occupation }}</li>\n          <li>\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E15\u0E48\u0E2D\u0E04\u0E23\u0E31\u0E27\u0E40\u0E23\u0E37\u0E2D\u0E19: {{ school.community.income }}</li>\n        </ul>\n        <p class=\"card-body\" style=\"margin-top:12px;margin-bottom:0\">{{ school.community.note }}</p>\n      </div>\n\n      <div class=\"card card-gold\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D</h3>\n        <p class=\"card-body\">{{ school.community.partners }}</p>\n        <h3 class=\"card-title\" style=\"margin-top:20px\">\u0E2D\u0E32\u0E04\u0E32\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35</h3>\n        <div class=\"table-scroll\" style=\"border:none\">\n          <table class=\"tbl\" style=\"min-width:0\">\n            <tbody>\n              <tr *ngFor=\"let f of school.facilities\">\n                <td>{{ f.name }}</td>\n                <td class=\"num\">{{ f.value }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 \u2014 \u0E2A\u0E48\u0E27\u0E19\u0E40\u0E1B\u0E34\u0E14 (hero) \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E23\u0E38\u0E1B\u0E41\u0E15\u0E48\u0E25\u0E30\u0E14\u0E49\u0E32\u0E19 */\n:host { display: block; }\n\n/* ---------- \u0E2A\u0E48\u0E27\u0E19\u0E40\u0E1B\u0E34\u0E14\u0E02\u0E2D\u0E07\u0E40\u0E27\u0E47\u0E1A ---------- */\n.hero {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(155deg, var(--navy-900) 0%, var(--navy-800) 45%, var(--navy-600) 100%);\n  color: #fff;\n  padding: calc(var(--nav-h) + 74px) 0 84px;\n}\n\n/* \u0E27\u0E07\u0E01\u0E25\u0E21\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E41\u0E2A\u0E07\u0E2A\u0E2D\u0E07\u0E27\u0E07\u0E17\u0E35\u0E48\u0E25\u0E2D\u0E22\u0E0A\u0E49\u0E32 \u0E46 \u0E2D\u0E22\u0E39\u0E48\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07 */\n.hero::before,\n.hero::after {\n  content: '';\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.hero::before {\n  width: 620px; height: 620px;\n  right: -180px; top: -240px;\n  background: radial-gradient(circle, rgba(232, 196, 106, .22), transparent 62%);\n  animation: floatA 16s ease-in-out infinite;\n}\n\n.hero::after {\n  width: 520px; height: 520px;\n  left: -160px; bottom: -240px;\n  background: radial-gradient(circle, rgba(130, 173, 228, .28), transparent 65%);\n  animation: floatB 20s ease-in-out infinite;\n}\n\n/* \u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E14\u0E49\u0E27\u0E22 translate3d \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49 Safari \u0E1A\u0E19 iPad \u0E25\u0E37\u0E48\u0E19\u0E44\u0E2B\u0E25 */\n@keyframes floatA {\n  0%, 100% { transform: translate3d(0, 0, 0); }\n  50% { transform: translate3d(-26px, 30px, 0); }\n}\n\n@keyframes floatB {\n  0%, 100% { transform: translate3d(0, 0, 0); }\n  50% { transform: translate3d(30px, -24px, 0); }\n}\n\n.hero h1, .hero h2, .hero h3 { color: #fff; }\n.hero-inner { position: relative; z-index: 2; }\n\n.hero-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .13);\n  border: 1px solid rgba(255, 255, 255, .24);\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: .02em;\n  color: var(--gold-400);\n}\n\n.hero-title {\n  font-size: clamp(30px, 4.6vw, 54px);\n  line-height: 1.32;\n  margin: 20px 0 14px;\n  letter-spacing: -.01em;\n}\n\n.hero-lead {\n  font-size: clamp(16px, 1.7vw, 20px);\n  color: rgba(255, 255, 255, .86);\n  max-width: 62ch;\n  line-height: 1.85;\n}\n\n.hero-rule {\n  width: 84px; height: 4px;\n  border-radius: 4px;\n  background: var(--gold-500);\n  margin: 22px 0;\n}\n\n.hero-actions {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 32px;\n}\n\n/* ---------- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E23\u0E38\u0E1B\u0E41\u0E15\u0E48\u0E25\u0E30\u0E14\u0E49\u0E32\u0E19 ---------- */\n.dim-card {\n  display: block;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 26px;\n  box-shadow: var(--shadow-sm);\n  position: relative;\n  overflow: hidden;\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease);\n}\n\n.dim-card::before {\n  content: '';\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 5px;\n  background: linear-gradient(180deg, var(--navy-500), var(--navy-800));\n}\n\n.dim-card:active { transform: translateY(-3px); }\n\n@media (hover: hover) {\n  .dim-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }\n}\n\n.dim-num {\n  font-family: 'Noto Serif Thai', serif;\n  font-size: 40px;\n  font-weight: 700;\n  color: var(--navy-100);\n  line-height: 1;\n  margin-bottom: 6px;\n}\n\n.dim-name { font-size: 20px; font-weight: 700; color: var(--navy-900); margin-bottom: 8px; }\n.dim-desc { font-size: 15.5px; color: var(--ink-soft); margin-bottom: 14px; }\n\n.dim-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: var(--navy-600);\n  font-weight: 700;\n}\n\n/* ---------- \u0E01\u0E25\u0E48\u0E2D\u0E07\u0E22\u0E48\u0E2D\u0E22\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 ---------- */\n.vision-head { text-align: center; }\n.vision-rule { margin: 18px auto 0; }\n.skill-text { font-weight: 700; color: var(--navy-800); font-size: 17px; line-height: 1.6; }\n\n.model-letter {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 21px;\n  font-weight: 700;\n  font-family: 'Noto Serif Thai', serif;\n}\n\n.model-en { font-weight: 700; color: var(--navy-600); font-size: 14.5px; line-height: 1.4; }\n\n@media (max-width: 834px) {\n  .hero { padding: calc(var(--nav-h) + 56px) 0 64px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero::before, .hero::after { animation: none !important; }\n}\n\n@media print {\n  .hero {\n    background: var(--navy-900) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .dim-card { break-inside: avoid; box-shadow: none; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=home.component.js.map