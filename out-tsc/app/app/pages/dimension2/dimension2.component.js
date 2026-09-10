import { Component, signal } from '@angular/core';
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
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ["\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19", "2566", "2567", "2568"];
const _c1 = () => ["\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19", "\u0E1B\u0E35 2566", "\u0E1B\u0E35 2567", "\u0E1B\u0E35 2568"];
function Dimension2Component_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function Dimension2Component_button_6_Template_button_click_0_listener() { const g_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.jumpTo(g_r4.key)); });
    i0.ɵɵelementStart(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r4.isOpen(g_r4.key));
    i0.ɵɵattribute("aria-label", g_r4.key + " " + g_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r4.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r4.title);
} }
function Dimension2Component_div_35_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r6);
} }
function Dimension2Component_div_35_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r8 * 110);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r7.year);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r7.text);
} }
function Dimension2Component_div_35_li_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r9);
} }
function Dimension2Component_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40)(4, "h4");
    i0.ɵɵtext(5, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, Dimension2Component_div_35_li_7_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "app-cycle-flow", 42);
    i0.ɵɵelementStart(9, "div", 43)(10, "h3", 15);
    i0.ɵɵtext(11, "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 44);
    i0.ɵɵtemplate(14, Dimension2Component_div_35_div_14_Template, 5, 3, "div", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 33);
    i0.ɵɵelement(16, "app-bar-chart", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 47)(18, "div", 48)(19, "h3", 49);
    i0.ɵɵtext(20, "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "ol", 50);
    i0.ɵɵtemplate(22, Dimension2Component_div_35_li_22_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 51);
    i0.ɵɵelement(24, "app-data-table", 52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "app-callout", 53);
    i0.ɵɵtext(26, " \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E14\u0E49\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E33\u0E19\u0E27\u0E19 4 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19\u2013\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (CEP) \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E (Health Sciences Program) \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST) \u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19 (Chinese Special Program: CSP) ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.curriculum.lead);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorsOf("2.1"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.curriculum.cycle);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.curriculum.timeline);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r4.d.curriculum.courseYears)("series", ctx_r4.courseSeries);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.curriculum.lowerCourses);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("headers", i0.ɵɵpureFunction0(10, _c0))("rows", ctx_r4.upperRows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("gold", true);
} }
function Dimension2Component_div_47_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r10);
} }
function Dimension2Component_div_47_div_19_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r11);
} }
function Dimension2Component_div_47_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58);
    i0.ɵɵtext(2, "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 49);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 59);
    i0.ɵɵtemplate(6, Dimension2Component_div_47_div_19_li_6_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r13 * 80);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(g_r12.subject);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", g_r12.items);
} }
function Dimension2Component_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40)(4, "h4");
    i0.ɵɵtext(5, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, Dimension2Component_div_47_li_7_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 55)(9, "h3", 49);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 11);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(13, "app-cycle-flow", 42);
    i0.ɵɵelementStart(14, "div", 43)(15, "h3", 15);
    i0.ɵɵtext(16, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 31);
    i0.ɵɵtemplate(19, Dimension2Component_div_47_div_19_Template, 7, 3, "div", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.activities.lead);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorsOf("2.2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.d.activities.flagship.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.activities.flagship.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.activities.cycle);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.activities.groups);
} }
function Dimension2Component_div_59_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r14);
} }
function Dimension2Component_div_59_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r16 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r15.detail);
} }
function Dimension2Component_div_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40)(4, "h4");
    i0.ɵɵtext(5, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, Dimension2Component_div_59_li_7_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "app-cycle-flow", 42);
    i0.ɵɵelementStart(9, "div", 60);
    i0.ɵɵtemplate(10, Dimension2Component_div_59_div_10_Template, 5, 3, "div", 61);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.media.lead);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorsOf("2.3"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.media.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.media.resources);
} }
function Dimension2Component_div_71_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r17);
} }
function Dimension2Component_div_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 40)(4, "h4");
    i0.ɵɵtext(5, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ol");
    i0.ɵɵtemplate(7, Dimension2Component_div_71_li_7_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "app-cycle-flow", 42);
    i0.ɵɵelementStart(9, "div", 65);
    i0.ɵɵelement(10, "app-data-table", 66);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.assessment.lead);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorsOf("2.4"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.assessment.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("caption", ctx_r4.d.assessment.planCount.caption)("headers", i0.ɵɵpureFunction0(6, _c1))("rows", ctx_r4.planRows);
} }
function Dimension2Component_div_79_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r18);
} }
function Dimension2Component_div_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67)(1, "h3", 68);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 69);
    i0.ɵɵtemplate(4, Dimension2Component_div_79_li_4_Template, 2, 1, "li", 41);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("revealDelay", i_r20 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r19);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[key_r19]);
} }
export class Dimension2Component {
    /* ---------- แอคคอร์เดียนหัวข้อตามแบบประเมิน ----------
       เปิดได้ทีละหัวข้อ กดหัวข้อใหม่จะปิดหัวข้อเดิมอัตโนมัติ */
    opened = signal([]);
    indicatorKeyOf = {
        '2.1': '2.1 การพัฒนาหลักสูตรสถานศึกษา',
        '2.2': '2.2 การจัดกิจกรรมเสริมหลักสูตร',
        '2.3': '2.3 สื่อ เทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้',
        '2.4': '2.4 ระบบการวัดและประเมินผล'
    };
    groups = [
        { key: '2.1', title: 'การพัฒนาหลักสูตรสถานศึกษา' },
        { key: '2.2', title: 'การจัดกิจกรรมเสริมหลักสูตร' },
        { key: '2.3', title: 'สื่อ เทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้' },
        { key: '2.4', title: 'ระบบการวัดและประเมินผล' }
    ];
    /** กดปุ่มนำทาง: เปิดหัวข้อนั้นถ้ายังปิดอยู่ แล้วเลื่อนไปหา */
    jumpTo(k) {
        if (!this.isOpen(k))
            this.toggle(k);
        setTimeout(() => {
            const el = document.getElementById('acc-' + k);
            if (el)
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
    }
    /* Chrome/Safari บางเครื่องไม่เริ่มเล่นเองแม้ใส่ autoplay จึงสั่งเล่นซ้ำเมื่อพร้อม */
    playBg(v) {
        v.muted = true;
        const p = v.play();
        if (p && typeof p.catch === 'function')
            p.catch(() => { });
    }
    isOpen(k) { return this.opened().includes(k); }
    toggle(k) {
        this.opened.update(v => v.includes(k) ? [] : [k]);
    }
    indicatorsOf(k) {
        const all = DIM2.indicators;
        return all[this.indicatorKeyOf[k]] ?? [];
    }
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension2Component, selectors: [["app-dimension2"]], decls: 83, vars: 30, consts: [["bgv", ""], ["aria-hidden", "true", 1, "d2-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-center-poster.jpg", 1, "d2-video", 3, "loadedmetadata", "canplay"], ["src", "video/school-center.mp4", "type", "video/mp4"], [1, "d2-veil"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D", 1, "d2-nav"], ["type", "button", "class", "d2-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], [3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [1, "section", "section-alt"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 26px"], ["appReveal", ""], [1, "section", "acc-sec"], ["type", "button", "id", "acc-2.1", 1, "acc-head", 3, "click"], [1, "acc-no"], [1, "acc-text"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "acc-chev"], ["d", "M6 9l6 6 6-6"], ["class", "acc-body", 4, "ngIf"], ["type", "button", "id", "acc-2.2", 1, "acc-head", 3, "click"], ["type", "button", "id", "acc-2.3", 1, "acc-head", 3, "click"], ["type", "button", "id", "acc-2.4", 1, "acc-head", 3, "click"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2", 3, "items", "light"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], [1, "grid", "grid-2"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-1", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "nextPath", "/dimension-3", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32"], ["type", "button", 1, "d2-nav-btn", 3, "click"], [1, "d2-nav-no"], [1, "d2-nav-tip"], [1, "acc-body"], [1, "acc-lead"], [1, "acc-ind"], [4, "ngFor", "ngForOf"], [3, "steps"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["title", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23/\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "valueFormat", "1.0-0", "note", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 26 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132567 \u0E40\u0E1B\u0E47\u0E19 27 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)", 3, "labels", "series"], [1, "grid", "grid-2", 2, "margin-top", "24px"], ["appReveal", "left", 1, "card"], [1, "card-title"], [1, "bullets"], ["appReveal", "right"], ["caption", "\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22", 3, "headers", "rows"], ["label", "\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29:", 2, "display", "block", "margin-top", "22px", 3, "gold"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-bottom", "32px"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "chip", 2, "margin-bottom", "12px"], [1, "bullets", 2, "margin-top", "8px"], [1, "grid", "grid-3", 2, "margin-top", "38px"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [2, "font-weight", "700", "color", "#132f63", "font-size", "16.5px", "margin-bottom", "6px"], [2, "color", "#1e4d9e", "font-weight", "700", "font-size", "19px"], [2, "margin-top", "38px"], ["note", "\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E43\u0E2B\u0E49\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E36\u0E07\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E25\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32", 3, "caption", "headers", "rows"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"]], template: function Dimension2Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "video", 2, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension2Component_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension2Component_Template_video_canplay_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(3, "source", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nav", 5);
            i0.ɵɵtemplate(6, Dimension2Component_button_6_Template, 5, 5, "button", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "app-page-hero", 7);
            i0.ɵɵelementStart(8, "section", 8)(9, "div", 9)(10, "div", 10)(11, "p", 11);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "app-kpi-grid", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "section", 13)(15, "div", 9)(16, "div", 14)(17, "h3", 15);
            i0.ɵɵtext(18, "SMART Student \u2014 \u0E27\u0E07\u0E25\u0E49\u0E2D ACTIVITY");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 17);
            i0.ɵɵtext(21, " \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 18);
            i0.ɵɵelement(23, "app-smart-wheel");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "section", 19)(25, "div", 9)(26, "button", 20);
            i0.ɵɵlistener("click", function Dimension2Component_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggle("2.1")); });
            i0.ɵɵelementStart(27, "span", 21);
            i0.ɵɵtext(28, "2.1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span", 22);
            i0.ɵɵtext(30, "\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32");
            i0.ɵɵelementStart(31, "small");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(33, "svg", 23);
            i0.ɵɵelement(34, "path", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(35, Dimension2Component_div_35_Template, 27, 11, "div", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(36, "section", 19)(37, "div", 9)(38, "button", 26);
            i0.ɵɵlistener("click", function Dimension2Component_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggle("2.2")); });
            i0.ɵɵelementStart(39, "span", 21);
            i0.ɵɵtext(40, "2.2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "span", 22);
            i0.ɵɵtext(42, "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23");
            i0.ɵɵelementStart(43, "small");
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(45, "svg", 23);
            i0.ɵɵelement(46, "path", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(47, Dimension2Component_div_47_Template, 20, 6, "div", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(48, "section", 19)(49, "div", 9)(50, "button", 27);
            i0.ɵɵlistener("click", function Dimension2Component_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggle("2.3")); });
            i0.ɵɵelementStart(51, "span", 21);
            i0.ɵɵtext(52, "2.3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span", 22);
            i0.ɵɵtext(54, "\u0E2A\u0E37\u0E48\u0E2D \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
            i0.ɵɵelementStart(55, "small");
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(57, "svg", 23);
            i0.ɵɵelement(58, "path", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(59, Dimension2Component_div_59_Template, 11, 4, "div", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(60, "section", 19)(61, "div", 9)(62, "button", 28);
            i0.ɵɵlistener("click", function Dimension2Component_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggle("2.4")); });
            i0.ɵɵelementStart(63, "span", 21);
            i0.ɵɵtext(64, "2.4");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "span", 22);
            i0.ɵɵtext(66, "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25");
            i0.ɵɵelementStart(67, "small");
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(69, "svg", 23);
            i0.ɵɵelement(70, "path", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(71, Dimension2Component_div_71_Template, 11, 7, "div", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(72, "section", 8)(73, "div", 9);
            i0.ɵɵelement(74, "app-photo-gallery", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "section", 13)(76, "div", 9);
            i0.ɵɵelement(77, "app-section-header", 30);
            i0.ɵɵelementStart(78, "div", 31);
            i0.ɵɵtemplate(79, Dimension2Component_div_79_Template, 5, 3, "div", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "div", 33);
            i0.ɵɵelement(81, "app-pager", 34);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(82, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.groups);
            i0.ɵɵadvance();
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(13);
            i0.ɵɵclassProp("is-open", ctx.isOpen("2.1"));
            i0.ɵɵattribute("aria-expanded", ctx.isOpen("2.1"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.indicatorsOf("2.1").length, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isOpen("2.1"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-open", ctx.isOpen("2.2"));
            i0.ɵɵattribute("aria-expanded", ctx.isOpen("2.2"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.indicatorsOf("2.2").length, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isOpen("2.2"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-open", ctx.isOpen("2.3"));
            i0.ɵɵattribute("aria-expanded", ctx.isOpen("2.3"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.indicatorsOf("2.3").length, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isOpen("2.3"));
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-open", ctx.isOpen("2.4"));
            i0.ɵɵattribute("aria-expanded", ctx.isOpen("2.4"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.indicatorsOf("2.4").length, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isOpen("2.4"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery)("light", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.indicatorKeys);
        } }, dependencies: [HomeFabComponent,
            SmartWheelComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, DataTableComponent, CalloutComponent,
            PagerComponent, BarChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.acc-sec[_ngcontent-%COMP%] { padding-top: 0; padding-bottom: 0; background: transparent; }\n.acc-sec[_ngcontent-%COMP%]:first-of-type { padding-top: 28px; }\n\n.acc-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  width: 100%;\n  \n\n  min-height: 76px;\n  margin-bottom: 14px;\n  padding: 14px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.acc-head[_ngcontent-%COMP%]:active { transform: scale(.99); }\n@media (hover: hover) {\n  .acc-head[_ngcontent-%COMP%]:hover { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.acc-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: none;\n  width: 62px; height: 52px;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 13px;\n  background: var(--navy-50);\n  font-variant-numeric: tabular-nums;\n}\n\n.acc-text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--navy-900);\n  font-size: 20px;\n  font-weight: 800;\n  line-height: 1.35;\n}\n.acc-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: var(--ink-mute);\n  font-size: 14.5px;\n  font-weight: 600;\n}\n\n.acc-chev[_ngcontent-%COMP%] { flex: none; color: var(--navy-500); transition: transform .25s var(--ease); }\n\n.acc-head.is-open[_ngcontent-%COMP%] {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .3);\n}\n.acc-head.is-open[_ngcontent-%COMP%]   .acc-no[_ngcontent-%COMP%] { background: rgba(255, 255, 255, .18); color: #fff; }\n.acc-head.is-open[_ngcontent-%COMP%]   .acc-text[_ngcontent-%COMP%] { color: #fff; }\n.acc-head.is-open[_ngcontent-%COMP%]   .acc-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #cfe0fa; }\n.acc-head.is-open[_ngcontent-%COMP%]   .acc-chev[_ngcontent-%COMP%] { color: #fff; transform: rotate(180deg); }\n\n\n\n.acc-body[_ngcontent-%COMP%] {\n  padding: 6px 4px 40px;\n  animation: _ngcontent-%COMP%_accOpen .32s var(--ease) both;\n}\n\n@keyframes _ngcontent-%COMP%_accOpen {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.acc-lead[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  color: var(--ink-soft);\n  font-size: 18px;\n  line-height: 1.9;\n}\n\n\n\n.acc-ind[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  padding: 20px 24px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.acc-ind[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--navy-800);\n  font-size: 16.5px;\n  font-weight: 800;\n}\n.acc-ind[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0; padding-left: 22px; }\n.acc-ind[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  color: var(--ink-soft);\n  font-size: 16px;\n  line-height: 1.75;\n}\n.acc-ind[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n\n@media (max-width: 834px) {\n  .acc-head[_ngcontent-%COMP%] { gap: 13px; padding: 12px 16px; min-height: 68px; }\n  .acc-no[_ngcontent-%COMP%] { width: 54px; height: 46px; font-size: 18px; }\n  .acc-text[_ngcontent-%COMP%] { font-size: 17.5px; }\n  .acc-ind[_ngcontent-%COMP%] { padding: 16px 18px; }\n}\n\n@media print {\n  .acc-body[_ngcontent-%COMP%] { display: block !important; animation: none; }\n  .acc-chev[_ngcontent-%COMP%] { display: none; }\n}\n\n\n\n.d2-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n\n.d2-nav-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px; height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  transition: transform .18s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d2-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n\n.d2-nav-no[_ngcontent-%COMP%] { font-size: 15.5px; font-weight: 800; font-variant-numeric: tabular-nums; }\n\n.d2-nav-btn.is-open[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n\n\n\n.d2-nav-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  white-space: nowrap;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d2-nav-btn[_ngcontent-%COMP%]:hover { transform: scale(1.06); }\n  .d2-nav-btn[_ngcontent-%COMP%]:hover   .d2-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n\n\n@media (max-width: 900px) {\n  .d2-nav[_ngcontent-%COMP%] {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(255, 255, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d2-nav-btn[_ngcontent-%COMP%] { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d2-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n\n@media print { .d2-nav[_ngcontent-%COMP%] { display: none !important; } }\n\n\n\n.d2-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d2-video[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n\n.d2-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  \n\n  background: linear-gradient(180deg, rgba(8, 21, 47, .84) 0%, rgba(8, 21, 47, .76) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n\n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n[_nghost-%COMP%]     .card .sec-lead { color: var(--ink-soft); }\n\n\n\n.acc-head[_ngcontent-%COMP%] { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 30px rgba(8, 21, 47, .26); }\n.acc-lead[_ngcontent-%COMP%] { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n\n@media (prefers-reduced-motion: reduce) {\n  .d2-video[_ngcontent-%COMP%] { display: none; }\n  .d2-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n\n\n[_nghost-%COMP%]     .steps { border-left-color: rgba(255, 255, 255, .28); }\n[_nghost-%COMP%]     .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item p { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item::before { border-color: rgba(255, 255, 255, .6); }\n[_nghost-%COMP%]     .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n\n\n[_nghost-%COMP%]     .card .step-item h4, \n[_nghost-%COMP%]     .callout .step-item h4, \n[_nghost-%COMP%]     .acc-ind .step-item h4 { color: var(--navy-900); }\n[_nghost-%COMP%]     .card .step-item p, \n[_nghost-%COMP%]     .card .bullets > li, \n[_nghost-%COMP%]     .callout .bullets > li, \n[_nghost-%COMP%]     .acc-ind li { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .steps { border-left-color: var(--navy-100); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--navy-300); }\n[_nghost-%COMP%]     .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     .callout *, \n[_nghost-%COMP%]     .acc-ind *, \n[_nghost-%COMP%]     app-cycle-flow * { text-shadow: none !important; filter: none !important; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension2Component, [{
        type: Component,
        args: [{ selector: 'app-dimension2', standalone: true, imports: [
                    HomeFabComponent,
                    SmartWheelComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, DataTableComponent, CalloutComponent,
                    PagerComponent, BarChartComponent
                ], template: "<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E21\u0E35\u0E41\u0E15\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E02\u0E22\u0E31\u0E1A -->\n<div class=\"d2-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d2-video\" autoplay muted loop playsinline preload=\"auto\"\n         poster=\"video/school-center-poster.jpg\"\n         (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school-center.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d2-veil\"></div>\n</div>\n\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22 \u0E01\u0E14\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E44\u0E2B\u0E19\u0E01\u0E47\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32 -->\n<nav class=\"d2-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\">\n  <button type=\"button\" class=\"d2-nav-btn\" *ngFor=\"let g of groups\"\n          [class.is-open]=\"isOpen(g.key)\" (click)=\"jumpTo(g.key)\"\n          [attr.aria-label]=\"g.key + ' ' + g.title\">\n    <span class=\"d2-nav-no\">{{ g.key }}</span>\n    <span class=\"d2-nav-tip\">{{ g.title }}</span>\n  </button>\n</nav>\n<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E27\u0E07\u0E25\u0E49\u0E2D SMART Student \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">SMART Student \u2014 \u0E27\u0E07\u0E25\u0E49\u0E2D ACTIVITY</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 26px\">\n      \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23\n      \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\n    </p>\n    <div appReveal>\n      <app-smart-wheel />\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.1 \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section acc-sec\">\n  <div class=\"wrap\">\n    <button type=\"button\" class=\"acc-head\" id=\"acc-2.1\" [class.is-open]=\"isOpen('2.1')\"\n            [attr.aria-expanded]=\"isOpen('2.1')\" (click)=\"toggle('2.1')\">\n      <span class=\"acc-no\">2.1</span>\n      <span class=\"acc-text\">\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32<small>{{ indicatorsOf('2.1').length }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</small></span>\n      <svg class=\"acc-chev\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M6 9l6 6 6-6\" />\n      </svg>\n    </button>\n\n    <div class=\"acc-body\" *ngIf=\"isOpen('2.1')\">\n      <p class=\"acc-lead\">{{ d.curriculum.lead }}</p>\n\n      <div class=\"acc-ind\">\n        <h4>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h4>\n        <ol>\n          <li *ngFor=\"let i of indicatorsOf('2.1')\">{{ i }}</li>\n        </ol>\n      </div>\n\n\n    <app-cycle-flow [steps]=\"d.curriculum.cycle\" />\n\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let t of d.curriculum.timeline; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 110\">\n        <h4>{{ t.year }}</h4>\n        <p>{{ t.text }}</p>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-bar-chart\n        title=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23/\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E2D\u0E19\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.curriculum.courseYears\"\n        [series]=\"courseSeries\"\n        valueFormat=\"1.0-0\"\n        note=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E27\u0E21\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01 26 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132567 \u0E40\u0E1B\u0E47\u0E19 27 \u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)\" />\n    </div>\n\n    <div class=\"grid grid-2\" style=\"margin-top:24px\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let c of d.curriculum.lowerCourses\">{{ c }}</li>\n        </ol>\n      </div>\n      <div appReveal=\"right\">\n        <app-data-table\n          caption=\"\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22\"\n          [headers]=\"['\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19', '2566', '2567', '2568']\"\n          [rows]=\"upperRows\" />\n      </div>\n    </div>\n\n    <app-callout label=\"\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29:\" [gold]=\"true\" style=\"display:block;margin-top:22px\">\n      \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E44\u0E14\u0E49\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E14\u0E49\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E33\u0E19\u0E27\u0E19 4 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48\n      \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E15\u0E49\u0E19 \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E2B\u0E49\u0E2D\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19\u2013\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (CEP) \u0E41\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22\n      \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E (Health Sciences Program) \u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 (IST)\n      \u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E20\u0E32\u0E29\u0E32\u0E08\u0E35\u0E19 (Chinese Special Program: CSP)\n    </app-callout>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.2 \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section acc-sec\">\n  <div class=\"wrap\">\n    <button type=\"button\" class=\"acc-head\" id=\"acc-2.2\" [class.is-open]=\"isOpen('2.2')\"\n            [attr.aria-expanded]=\"isOpen('2.2')\" (click)=\"toggle('2.2')\">\n      <span class=\"acc-no\">2.2</span>\n      <span class=\"acc-text\">\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23<small>{{ indicatorsOf('2.2').length }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</small></span>\n      <svg class=\"acc-chev\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M6 9l6 6 6-6\" />\n      </svg>\n    </button>\n\n    <div class=\"acc-body\" *ngIf=\"isOpen('2.2')\">\n      <p class=\"acc-lead\">{{ d.activities.lead }}</p>\n\n      <div class=\"acc-ind\">\n        <h4>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h4>\n        <ol>\n          <li *ngFor=\"let i of indicatorsOf('2.2')\">{{ i }}</li>\n        </ol>\n      </div>\n\n\n    <div class=\"card card-gold\" appReveal style=\"margin-bottom:32px\">\n      <h3 class=\"card-title\">{{ d.activities.flagship.name }}</h3>\n      <p class=\"card-body\" style=\"margin:0\">{{ d.activities.flagship.text }}</p>\n    </div>\n\n    <app-cycle-flow [steps]=\"d.activities.cycle\" />\n\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let g of d.activities.groups; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"chip\" style=\"margin-bottom:12px\">\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</div>\n        <h3 class=\"card-title\">{{ g.subject }}</h3>\n        <ul class=\"bullets\" style=\"margin-top:8px\">\n          <li *ngFor=\"let it of g.items\">{{ it }}</li>\n        </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.3 \u0E2A\u0E37\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section acc-sec\">\n  <div class=\"wrap\">\n    <button type=\"button\" class=\"acc-head\" id=\"acc-2.3\" [class.is-open]=\"isOpen('2.3')\"\n            [attr.aria-expanded]=\"isOpen('2.3')\" (click)=\"toggle('2.3')\">\n      <span class=\"acc-no\">2.3</span>\n      <span class=\"acc-text\">\u0E2A\u0E37\u0E48\u0E2D \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E41\u0E25\u0E30\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49<small>{{ indicatorsOf('2.3').length }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</small></span>\n      <svg class=\"acc-chev\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M6 9l6 6 6-6\" />\n      </svg>\n    </button>\n\n    <div class=\"acc-body\" *ngIf=\"isOpen('2.3')\">\n      <p class=\"acc-lead\">{{ d.media.lead }}</p>\n\n      <div class=\"acc-ind\">\n        <h4>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h4>\n        <ol>\n          <li *ngFor=\"let i of indicatorsOf('2.3')\">{{ i }}</li>\n        </ol>\n      </div>\n\n\n    <app-cycle-flow [steps]=\"d.media.cycle\" />\n\n    <div class=\"grid grid-3\" style=\"margin-top:38px\">\n      <div class=\"card card-accent\" *ngFor=\"let r of d.media.resources; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div style=\"font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px\">{{ r.name }}</div>\n        <div style=\"color:#1e4d9e;font-weight:700;font-size:19px\">{{ r.detail }}</div>\n      </div>\n    </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 2.4 \u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section acc-sec\">\n  <div class=\"wrap\">\n    <button type=\"button\" class=\"acc-head\" id=\"acc-2.4\" [class.is-open]=\"isOpen('2.4')\"\n            [attr.aria-expanded]=\"isOpen('2.4')\" (click)=\"toggle('2.4')\">\n      <span class=\"acc-no\">2.4</span>\n      <span class=\"acc-text\">\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25<small>{{ indicatorsOf('2.4').length }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</small></span>\n      <svg class=\"acc-chev\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M6 9l6 6 6-6\" />\n      </svg>\n    </button>\n\n    <div class=\"acc-body\" *ngIf=\"isOpen('2.4')\">\n      <p class=\"acc-lead\">{{ d.assessment.lead }}</p>\n\n      <div class=\"acc-ind\">\n        <h4>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h4>\n        <ol>\n          <li *ngFor=\"let i of indicatorsOf('2.4')\">{{ i }}</li>\n        </ol>\n      </div>\n\n\n    <app-cycle-flow [steps]=\"d.assessment.cycle\" />\n\n    <div style=\"margin-top:38px\">\n      <app-data-table\n        [caption]=\"d.assessment.planCount.caption\"\n        [headers]=\"['\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19', '\u0E1B\u0E35 2566', '\u0E1B\u0E35 2567', '\u0E1B\u0E35 2568']\"\n        [rows]=\"planRows\"\n        note=\"\u0E04\u0E27\u0E32\u0E21\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E43\u0E2B\u0E49\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E44\u0E14\u0E49\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E36\u0E07\u0E19\u0E33\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E0A\u0E48\u0E27\u0E22\u0E25\u0E14\u0E20\u0E32\u0E23\u0E30\u0E07\u0E32\u0E19\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E25\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E40\u0E27\u0E25\u0E32\" />\n    </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\"\n      [items]=\"gallery\"\n      [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-1\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        nextPath=\"/dimension-3\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E2D\u0E04\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E14\u0E35\u0E22\u0E19\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.acc-sec { padding-top: 0; padding-bottom: 0; background: transparent; }\n.acc-sec:first-of-type { padding-top: 28px; }\n\n.acc-head {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  width: 100%;\n  /* 76px \u0E41\u0E15\u0E30\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E1A\u0E19 iPad */\n  min-height: 76px;\n  margin-bottom: 14px;\n  padding: 14px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.acc-head:active { transform: scale(.99); }\n@media (hover: hover) {\n  .acc-head:hover { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.acc-no {\n  display: grid;\n  place-items: center;\n  flex: none;\n  width: 62px; height: 52px;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 13px;\n  background: var(--navy-50);\n  font-variant-numeric: tabular-nums;\n}\n\n.acc-text {\n  flex: 1;\n  color: var(--navy-900);\n  font-size: 20px;\n  font-weight: 800;\n  line-height: 1.35;\n}\n.acc-text small {\n  display: block;\n  margin-top: 4px;\n  color: var(--ink-mute);\n  font-size: 14.5px;\n  font-weight: 600;\n}\n\n.acc-chev { flex: none; color: var(--navy-500); transition: transform .25s var(--ease); }\n\n.acc-head.is-open {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .3);\n}\n.acc-head.is-open .acc-no { background: rgba(255, 255, 255, .18); color: #fff; }\n.acc-head.is-open .acc-text { color: #fff; }\n.acc-head.is-open .acc-text small { color: #cfe0fa; }\n.acc-head.is-open .acc-chev { color: #fff; transform: rotate(180deg); }\n\n/* ---------- \u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E01\u0E32\u0E07\u0E2D\u0E2D\u0E01 ---------- */\n.acc-body {\n  padding: 6px 4px 40px;\n  animation: accOpen .32s var(--ease) both;\n}\n\n@keyframes accOpen {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.acc-lead {\n  margin: 0 0 22px;\n  color: var(--ink-soft);\n  font-size: 18px;\n  line-height: 1.9;\n}\n\n/* \u0E01\u0E25\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 */\n.acc-ind {\n  margin-bottom: 32px;\n  padding: 20px 24px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.acc-ind h4 {\n  margin: 0 0 10px;\n  color: var(--navy-800);\n  font-size: 16.5px;\n  font-weight: 800;\n}\n.acc-ind ol { margin: 0; padding-left: 22px; }\n.acc-ind li {\n  margin-bottom: 7px;\n  color: var(--ink-soft);\n  font-size: 16px;\n  line-height: 1.75;\n}\n.acc-ind li:last-child { margin-bottom: 0; }\n\n@media (max-width: 834px) {\n  .acc-head { gap: 13px; padding: 12px 16px; min-height: 68px; }\n  .acc-no { width: 54px; height: 46px; font-size: 18px; }\n  .acc-text { font-size: 17.5px; }\n  .acc-ind { padding: 16px 18px; }\n}\n\n@media print {\n  .acc-body { display: block !important; animation: none; }\n  .acc-chev { display: none; }\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d2-nav {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n\n.d2-nav-btn {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px; height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  transition: transform .18s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d2-nav-btn:active { transform: scale(.94); }\n\n.d2-nav-no { font-size: 15.5px; font-weight: 800; font-variant-numeric: tabular-nums; }\n\n.d2-nav-btn.is-open {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n\n/* \u0E1B\u0E49\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D \u0E42\u0E1C\u0E25\u0E48\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E0A\u0E35\u0E49\u0E14\u0E49\u0E27\u0E22\u0E40\u0E21\u0E32\u0E2A\u0E4C (\u0E08\u0E2D\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49) */\n.d2-nav-tip {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  white-space: nowrap;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d2-nav-btn:hover { transform: scale(1.06); }\n  .d2-nav-btn:hover .d2-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E30\u0E08\u0E2D\u0E40\u0E25\u0E47\u0E01 \u2014 \u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E16\u0E1A\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\u0E25\u0E48\u0E32\u0E07\u0E08\u0E2D \u0E44\u0E21\u0E48\u0E1A\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 */\n@media (max-width: 900px) {\n  .d2-nav {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(255, 255, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d2-nav-btn { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d2-nav-tip { display: none; }\n}\n\n@media print { .d2-nav { display: none !important; } }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d2-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d2-video { width: 100%; height: 100%; object-fit: cover; display: block; }\n\n.d2-veil {\n  position: absolute;\n  inset: 0;\n  /* \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E49\u0E32\u0E22 rgba() \u0E04\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E36\u0E1A 0\u20131 \u0E25\u0E14\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E0A\u0E31\u0E14\u0E02\u0E36\u0E49\u0E19 */\n  background: linear-gradient(180deg, rgba(8, 21, 47, .84) 0%, rgba(8, 21, 47, .76) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n/* \u0E17\u0E38\u0E01\u0E2A\u0E48\u0E27\u0E19\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E19\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n:host ::ng-deep .card .sec-lead { color: var(--ink-soft); }\n\n/* \u0E41\u0E16\u0E1A\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E22\u0E31\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E32\u0E27 \u0E08\u0E36\u0E07\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22\u0E1A\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.acc-head { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 30px rgba(8, 21, 47, .26); }\n.acc-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n\n@media (prefers-reduced-motion: reduce) {\n  .d2-video { display: none; }\n  .d2-bg { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n/* ---------- \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D ---------- */\n:host ::ng-deep .steps { border-left-color: rgba(255, 255, 255, .28); }\n:host ::ng-deep .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item p { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item::before { border-color: rgba(255, 255, 255, .6); }\n:host ::ng-deep .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n/* \u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E40\u0E02\u0E49\u0E21\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E32\u0E27 */\n:host ::ng-deep .card .step-item h4,\n:host ::ng-deep .callout .step-item h4,\n:host ::ng-deep .acc-ind .step-item h4 { color: var(--navy-900); }\n:host ::ng-deep .card .step-item p,\n:host ::ng-deep .card .bullets > li,\n:host ::ng-deep .callout .bullets > li,\n:host ::ng-deep .acc-ind li { color: var(--ink-soft); }\n:host ::ng-deep .card .steps { border-left-color: var(--navy-100); }\n:host ::ng-deep .card .step-item::before { border-color: var(--navy-300); }\n:host ::ng-deep .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep .callout *,\n:host ::ng-deep .acc-ind *,\n:host ::ng-deep app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension2Component, { className: "Dimension2Component", filePath: "src/app/pages/dimension2/dimension2.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=dimension2.component.js.map