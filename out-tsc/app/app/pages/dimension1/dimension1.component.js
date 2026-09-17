import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DIM1 } from '../../data/dimension1.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { AwardsPreviewComponent } from '../../shared/awards-preview/awards-preview.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import { MeterListComponent } from '../../shared/meter-list/meter-list.component';
import { OnetChartComponent } from '../../shared/onet-chart/onet-chart.component';
import { StudentQualityWheelComponent } from '../../shared/student-quality-wheel/student-quality-wheel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ text: a0 });
function Dimension1Component_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 26)(1, "div", 23)(2, "div", 27)(3, "p", 28);
    i0.ɵɵtext(4, "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E27\u0E48\u0E32");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6, "\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 28);
    i0.ɵɵtext(8, "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E36\u0E07\u0E21\u0E38\u0E48\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 \u0E21\u0E35\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E19\u0E30\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E21\u0E35\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E41\u0E25\u0E30\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35 \u0E21\u0E35\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E27\u0E30\u0E17\u0E35\u0E48\u0E14\u0E35 \u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E17\u0E31\u0E01\u0E29\u0E30\u0E14\u0E49\u0E32\u0E19\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 \u0E17\u0E31\u0E01\u0E29\u0E30\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E41\u0E25\u0E30\u0E2D\u0E32\u0E0A\u0E35\u0E1E \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E27\u0E34\u0E08\u0E32\u0E23\u0E13\u0E0D\u0E32\u0E13 \u0E21\u0E35\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25 \u0E21\u0E35\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E30\u0E1A\u0E1A \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 28);
    i0.ɵɵtext(10, "\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D ");
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12, "\u201C\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u201D \u0E17\u0E35\u0E48\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "p", 28);
    i0.ɵɵtext(14, "\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E40\u0E23\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E48\u0E32 ");
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16, "\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E37\u0E2D\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E \u0E04\u0E37\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15 \u0E07\u0E2D\u0E01\u0E07\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E07\u0E14\u0E07\u0E32\u0E21\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E2A\u0E37\u0E1A\u0E44\u0E1B");
    i0.ɵɵelementEnd()()()()();
} }
function Dimension1Component_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 29)(1, "div", 23)(2, "div", 30);
    i0.ɵɵelement(3, "iframe", 31);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r1.studentQualityModelHeight(), "px");
} }
function Dimension1Component_section_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 32)(1, "div", 23)(2, "div", 33)(3, "h2", 34);
    i0.ɵɵtext(4, "ACADEMIC MODEL");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 35);
    i0.ɵɵelementStart(6, "p", 36);
    i0.ɵɵtext(7, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u2014 \u0E41\u0E15\u0E30\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(8, "app-student-quality-wheel", 37);
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_ng_container_10_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function Dimension1Component_ng_container_10_button_8_Template_button_click_0_listener() { const t_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(t_r7.key)); });
    i0.ɵɵelementStart(1, "span", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-current", ctx_r1.open() === t_r7.key)("is-empty", !t_r7.ready);
    i0.ɵɵproperty("disabled", !t_r7.ready);
    i0.ɵɵattribute("aria-label", t_r7.key + " " + t_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r7.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r7.title);
} }
function Dimension1Component_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 38);
    i0.ɵɵlistener("click", function Dimension1Component_ng_container_10_Template_button_click_1_listener() { const g_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectGroup(g_r5.key)); });
    i0.ɵɵelementStart(2, "span", 39);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 40);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 41)(7, "div", 42);
    i0.ɵɵtemplate(8, Dimension1Component_ng_container_10_button_8_Template, 5, 8, "button", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-on", ctx_r1.tab() === g_r5.key);
    i0.ɵɵattribute("aria-label", g_r5.key + " " + g_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.title);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-open", ctx_r1.tab() === g_r5.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.topicsOf(g_r5.key));
} }
function Dimension1Component_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function Dimension1Component_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backToIndex()); });
    i0.ɵɵelementStart(1, "span", 46);
    i0.ɵɵtext(2, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 40);
    i0.ɵɵtext(4, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1");
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_section_12_div_17_button_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1, "\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39 ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 65);
    i0.ɵɵelement(3, "path", 66);
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_section_12_div_17_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_div_17_button_1_Template_button_click_0_listener() { const t_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.select(t_r11.key)); });
    i0.ɵɵelementStart(1, "span", 59)(2, "span", 60);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 62);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, Dimension1Component_section_12_div_17_button_1_span_8_Template, 4, 0, "span", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵclassProp("is-empty", !t_r11.ready);
    i0.ɵɵproperty("disabled", !t_r11.ready)("revealDelay", i_r12 * 60);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r11.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r11.note);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r11.ready);
} }
function Dimension1Component_section_12_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, Dimension1Component_section_12_div_17_button_1_Template, 9, 8, "button", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.topicsOf("1.1"));
} }
function Dimension1Component_section_12_div_26_button_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1, "\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39 ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 65);
    i0.ɵɵelement(3, "path", 66);
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_section_12_div_26_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 58);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_div_26_button_1_Template_button_click_0_listener() { const t_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.select(t_r14.key)); });
    i0.ɵɵelementStart(1, "span", 59)(2, "span", 60);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 61);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 62);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, Dimension1Component_section_12_div_26_button_1_span_8_Template, 4, 0, "span", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    i0.ɵɵclassProp("is-empty", !t_r14.ready);
    i0.ɵɵproperty("disabled", !t_r14.ready)("revealDelay", i_r15 * 60);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r14.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r14.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r14.note);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r14.ready);
} }
function Dimension1Component_section_12_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, Dimension1Component_section_12_div_26_button_1_Template, 9, 8, "button", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.topicsOf("1.2"));
} }
function Dimension1Component_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 47)(1, "div", 23)(2, "div", 33)(3, "h2", 34);
    i0.ɵɵtext(4, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 48);
    i0.ɵɵtext(7, " \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14 1.1 \u0E2B\u0E23\u0E37\u0E2D 1.2 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E22\u0E48\u0E2D\u0E22 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E23\u0E32\u0E1F \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 49)(9, "div", 50)(10, "button", 51);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleTab("1.1")); });
    i0.ɵɵelementStart(11, "span", 52);
    i0.ɵɵtext(12, "1.1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 53);
    i0.ɵɵtext(14, "\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23");
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(17, Dimension1Component_section_12_div_17_Template, 2, 1, "div", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 55)(19, "button", 51);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleTab("1.2")); });
    i0.ɵɵelementStart(20, "span", 52);
    i0.ɵɵtext(21, "1.2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 53);
    i0.ɵɵtext(23, "\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C");
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25, "8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(26, Dimension1Component_section_12_div_26_Template, 2, 1, "div", 54);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-on", ctx_r1.tab() === "1.1");
    i0.ɵɵattribute("aria-selected", ctx_r1.tab() === "1.1")("aria-expanded", ctx_r1.tab() === "1.1");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.tab() === "1.1");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-on", ctx_r1.tab() === "1.2");
    i0.ɵɵattribute("aria-selected", ctx_r1.tab() === "1.2")("aria-expanded", ctx_r1.tab() === "1.2");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.tab() === "1.2");
} }
function Dimension1Component_section_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 67)(1, "div", 23)(2, "button", 68);
    i0.ɵɵlistener("click", function Dimension1Component_section_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backToIndex()); });
    i0.ɵɵtext(3, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1");
    i0.ɵɵelementEnd()()();
} }
function Dimension1Component_ng_template_14_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70)(1, "h3");
    i0.ɵɵtext(2, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol")(4, "li");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const topic_r17 = ctx.ngIf;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(topic_r17.title);
} }
function Dimension1Component_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, Dimension1Component_ng_template_14_div_0_Template, 6, 1, "div", 69);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.current);
} }
function Dimension1Component_ng_template_16_ng_container_1_p_1_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paragraph_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(paragraph_r18.text);
} }
function Dimension1Component_ng_template_16_ng_container_1_p_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const paragraph_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(paragraph_r18.text);
} }
function Dimension1Component_ng_template_16_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, Dimension1Component_ng_template_16_ng_container_1_p_1_strong_1_Template, 2, 1, "strong", 72)(2, Dimension1Component_ng_template_16_ng_container_1_p_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paragraph_r18 = ctx.$implicit;
    const normalNarrative_r19 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", paragraph_r18.strong)("ngIfElse", normalNarrative_r19);
} }
function Dimension1Component_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, Dimension1Component_ng_template_16_ng_container_1_p_1_Template, 4, 2, "p", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const text_r20 = i0.ɵɵnextContext().text;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", text_r20);
} }
function Dimension1Component_ng_template_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const text_r20 = i0.ɵɵnextContext().text;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(text_r20);
} }
function Dimension1Component_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵtemplate(1, Dimension1Component_ng_template_16_ng_container_1_Template, 2, 1, "ng-container", 72)(2, Dimension1Component_ng_template_16_ng_template_2_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const text_r20 = ctx.text;
    const singleNarrative_r21 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", text_r20[0] == null ? null : text_r20[0].text)("ngIfElse", singleNarrative_r21);
} }
function Dimension1Component_ng_container_18_p_5_strong_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paragraph_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(paragraph_r22.text);
} }
function Dimension1Component_ng_container_18_p_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const paragraph_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate(paragraph_r22.text);
} }
function Dimension1Component_ng_container_18_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtemplate(1, Dimension1Component_ng_container_18_p_5_strong_1_Template, 2, 1, "strong", 72)(2, Dimension1Component_ng_container_18_p_5_ng_template_2_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const paragraph_r22 = ctx.$implicit;
    const normalParagraph_r23 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", paragraph_r22.strong)("ngIfElse", normalParagraph_r23);
} }
function Dimension1Component_ng_container_18_app_bar_chart_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-bar-chart", 89);
} if (rf & 2) {
    const chart_r24 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", chart_r24.title)("subtitle", chart_r24.subtitle)("labels", ctx_r1.d.section11.onet.m6.years)("series", chart_r24.series)("max", 60)("valueFontSize", 12)("note", chart_r24.note);
} }
function Dimension1Component_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 74);
    i0.ɵɵelementStart(4, "div", 75);
    i0.ɵɵtemplate(5, Dimension1Component_ng_container_18_p_5_Template, 4, 2, "p", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainer(6, 76);
    i0.ɵɵelementStart(7, "div", 77)(8, "div", 78)(9, "div", 79)(10, "span");
    i0.ɵɵtext(11, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "h3");
    i0.ɵɵtext(13, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p");
    i0.ɵɵtext(15, "\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E17\u0E35\u0E48\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E21\u0E35\u0E04\u0E30\u0E41\u0E19\u0E19\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 80)(17, "div", 81);
    i0.ɵɵtext(18, "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 A \u00B7 \u0E01\u0E23\u0E32\u0E1F 3 \u0E43\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 82);
    i0.ɵɵtemplate(20, Dimension1Component_ng_container_18_app_bar_chart_20_Template, 1, 7, "app-bar-chart", 83);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(21, "app-onet-chart", 84)(22, "app-data-table", 85)(23, "app-bar-chart", 86);
    i0.ɵɵelementStart(24, "app-callout", 87);
    i0.ɵɵtext(25, " \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34 \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "app-data-table", 85)(27, "app-onet-chart", 88);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.onetTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.d.section11.onet.narrative);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngForOf", ctx_r1.onetHighlights);
    i0.ɵɵadvance();
    i0.ɵɵproperty("years", ctx_r1.d.section11.onet.m6.years)("subjects", ctx_r1.d.section11.onet.m6.subjects)("evidenceLinks", ctx_r1.onetEvidenceLinks)("note", ctx_r1.d.section11.onet.m6.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section11.onet.m6.caption)("headers", ctx_r1.onetHeaders)("rows", ctx_r1.m6Rows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r1.d.section11.onet.m3Trend.years)("series", ctx_r1.m3TrendBars)("showEvidence", true)("note", ctx_r1.d.section11.onet.m3Trend.conclusion + "  " + ctx_r1.d.section11.onet.m3Trend.footnote);
    i0.ɵɵadvance();
    i0.ɵɵproperty("gold", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("caption", ctx_r1.d.section11.onet.m3.caption)("headers", ctx_r1.onetHeaders)("rows", ctx_r1.m3Rows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("years", ctx_r1.d.section11.onet.m3.years)("subjects", ctx_r1.d.section11.onet.m3.subjects)("evidenceLinks", ctx_r1.onetEvidenceLinks)("note", ctx_r1.d.section11.onet.m3.conclusion);
} }
function Dimension1Component_ng_container_19_article_14_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r26 = ctx.$implicit;
    const activity_r27 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r26, i0.ɵɵsanitizeUrl)("alt", activity_r27.title);
} }
function Dimension1Component_ng_container_19_article_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 102)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 103);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_19_article_14_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r27 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r27.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r27.images);
} }
function Dimension1Component_ng_container_19_article_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 105)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const award_r28 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(award_r28.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", award_r28.image, i0.ɵɵsanitizeUrl)("alt", award_r28.title);
} }
function Dimension1Component_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 90)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 91);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 77);
    i0.ɵɵelement(7, "app-bar-chart", 93)(8, "app-data-table", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 94)(10, "div", 95)(11, "h3", 96);
    i0.ɵɵtext(12, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 97);
    i0.ɵɵtemplate(14, Dimension1Component_ng_container_19_article_14_Template, 5, 2, "article", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 99)(16, "h3", 96);
    i0.ɵɵtext(17, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 100);
    i0.ɵɵtemplate(19, Dimension1Component_ng_container_19_article_19_Template, 4, 3, "article", 101);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.thaiTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(15, _c0, ctx_r1.d.section11.thai.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section11.thai.years)("series", ctx_r1.thaiBars)("max", 100)("valueFontSize", 10)("note", ctx_r1.d.section11.thai.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section11.thai.caption)("headers", ctx_r1.yearHeaders3)("rows", ctx_r1.thaiRows);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.thaiActivities);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.thaiAwards);
} }
function Dimension1Component_ng_container_20_article_12_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r30 = ctx.$implicit;
    const activity_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r30, i0.ɵɵsanitizeUrl)("alt", activity_r31.title);
} }
function Dimension1Component_ng_container_20_article_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 102)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 103);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_20_article_12_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r31.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r31.images);
} }
function Dimension1Component_ng_container_20_article_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 105)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const award_r32 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(award_r32.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", award_r32.image, i0.ɵɵsanitizeUrl)("alt", award_r32.title);
} }
function Dimension1Component_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 106);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelement(6, "app-bar-chart", 107);
    i0.ɵɵelementStart(7, "div", 108)(8, "div", 95)(9, "h3", 96);
    i0.ɵɵtext(10, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 97);
    i0.ɵɵtemplate(12, Dimension1Component_ng_container_20_article_12_Template, 5, 2, "article", 98);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 99)(14, "h3", 96);
    i0.ɵɵtext(15, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 100);
    i0.ɵɵtemplate(17, Dimension1Component_ng_container_20_article_17_Template, 4, 3, "article", 101);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 109);
    i0.ɵɵelement(19, "app-data-table", 110);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.engTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(14, _c0, ctx_r1.d.section11.english.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r1.d.section11.english.years)("series", ctx_r1.engSeries)("note", ctx_r1.d.section11.english.conclusion);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.englishActivities);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.englishAwards);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("caption", ctx_r1.d.section11.english.caption)("headers", ctx_r1.gradeHeaders)("rows", ctx_r1.engRows)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx_r1.d.section11.english.average);
} }
function Dimension1Component_ng_container_21_article_14_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r33 = ctx.$implicit;
    const activity_r34 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r33, i0.ɵɵsanitizeUrl)("alt", activity_r34.title);
} }
function Dimension1Component_ng_container_21_article_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 102)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 103);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_21_article_14_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r34 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r34.title);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("d1-photos-3", activity_r34.images.length === 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", activity_r34.images);
} }
function Dimension1Component_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 90)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 111);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 77);
    i0.ɵɵelement(7, "app-bar-chart", 112)(8, "app-line-chart", 113)(9, "app-data-table", 85);
    i0.ɵɵelementStart(10, "div", 114)(11, "h3", 96);
    i0.ɵɵtext(12, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14 \u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 97);
    i0.ɵɵtemplate(14, Dimension1Component_ng_container_21_article_14_Template, 5, 4, "article", 98);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.thinkTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c0, ctx_r1.d.section11.thinking.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.isYears)("series", ctx_r1.isSeries)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx_r1.d.section11.thinking.isAverage + " \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19");
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r1.d.section11.thinking.years)("series", ctx_r1.readSeries)("min", 80)("max", 100)("note", ctx_r1.d.section11.thinking.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section11.thinking.readCaption)("headers", ctx_r1.readHeaders)("rows", ctx_r1.readRows);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.thinkingActivities);
} }
function Dimension1Component_ng_container_22_div_13_div_12_figure_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r35 = ctx.$implicit;
    const a_r36 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", photo_r35, i0.ɵɵsanitizeUrl)("alt", a_r36.name);
} }
function Dimension1Component_ng_container_22_div_13_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126);
    i0.ɵɵtemplate(1, Dimension1Component_ng_container_22_div_13_div_12_figure_1_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", a_r36.photos);
} }
function Dimension1Component_ng_container_22_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 120)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 121)(6, "span", 122);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 123);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 124);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, Dimension1Component_ng_container_22_div_13_div_12_Template, 2, 1, "div", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r36 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r36.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r36.award);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r36.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", a_r36.year, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r36.org);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r36.photos == null ? null : a_r36.photos.length);
} }
function Dimension1Component_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 115);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 116)(7, "div");
    i0.ɵɵelement(8, "app-bar-chart", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 99)(10, "h3", 96);
    i0.ɵɵtext(11, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 118);
    i0.ɵɵtemplate(13, Dimension1Component_ng_container_22_div_13_Template, 13, 6, "div", 119);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.ictTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c0, ctx_r1.d.section11.ict.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("labels", ctx_r1.d.section11.ict.years)("series", ctx_r1.ictSeries)("note", ctx_r1.d.section11.ict.conclusion);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.d.section11.ict.awards);
} }
function Dimension1Component_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 90)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 127);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 77);
    i0.ɵɵelement(7, "app-bar-chart", 128)(8, "app-data-table", 85);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.curriculumProgressTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(13, _c0, ctx_r1.d.section11.curriculumProgress.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section11.curriculumProgress.years)("series", ctx_r1.curriculumProgressBars)("max", 100)("valueFontSize", 9)("note", ctx_r1.d.section11.curriculumProgress.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section11.curriculumProgress.caption)("headers", ctx_r1.curriculumProgressHeaders)("rows", ctx_r1.curriculumProgressRows);
} }
function Dimension1Component_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 90)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 129);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 130)(7, "figure");
    i0.ɵɵelement(8, "img", 131);
    i0.ɵɵelementStart(9, "figcaption");
    i0.ɵɵtext(10, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D \u0E21.3");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "figure");
    i0.ɵɵelement(12, "img", 132);
    i0.ɵɵelementStart(13, "figcaption");
    i0.ɵɵtext(14, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D \u0E21.6");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.pathTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, ctx_r1.d.section11.pathway.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
} }
function Dimension1Component_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 133);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 134);
    i0.ɵɵelement(7, "app-meter-list", 135)(8, "app-data-table", 85);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(11, _c0, ctx_r1.d.section12.lead));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", "\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19")("rows", ctx_r1.desiredMeters)("max", 100)("note", ctx_r1.d.section12.desired.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section12.desired.caption)("headers", ctx_r1.desiredHeaders)("rows", ctx_r1.desiredRows);
} }
function Dimension1Component_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 90)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 136);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 77);
    i0.ɵɵelement(7, "app-bar-chart", 137)(8, "app-line-chart", 138);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.electionTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(12, _c0, ctx_r1.d.section12.election.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.election.years)("series", ctx_r1.electionSeries)("note", ctx_r1.d.section12.election.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r1.d.section12.election.years)("series", ctx_r1.electionPctSeries)("min", 70)("max", 100);
} }
function Dimension1Component_ng_container_27_article_17_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r37 = ctx.$implicit;
    const activity_r38 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r37, i0.ɵɵsanitizeUrl)("alt", activity_r38.title);
} }
function Dimension1Component_ng_container_27_article_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 147)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_27_article_17_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r39 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r38.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r38.images);
} }
function Dimension1Component_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 139);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 116)(7, "div");
    i0.ɵɵelement(8, "app-bar-chart", 140);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div");
    i0.ɵɵelement(10, "app-bar-chart", 141);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 142);
    i0.ɵɵelement(12, "app-bar-chart", 143);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "section", 144)(14, "h3");
    i0.ɵɵtext(15, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E14\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 145);
    i0.ɵɵtemplate(17, Dimension1Component_ng_container_27_article_17_Template, 5, 3, "article", 146);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r1.healthTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(16, _c0, ctx_r1.d.section12.health.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.health.years)("series", ctx_r1.fitSeries)("showValues", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.health.years)("series", ctx_r1.bodySeries)("showValues", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.health.years)("series", ctx_r1.mindBars)("max", 100)("note", ctx_r1.d.section12.health.conclusion);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.healthActivities);
} }
function Dimension1Component_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 149);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelement(6, "app-kpi-grid", 150);
    i0.ɵɵelementStart(7, "div", 151)(8, "h3", 152);
    i0.ɵɵtext(9, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E39\u0E48\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "app-cycle-flow", 153);
    i0.ɵɵelementStart(12, "app-callout", 154);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "app-awards-preview", 155);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(9, _c0, ctx_r1.d.section11.excellence.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.excellenceKpis);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("steps", ctx_r1.d.section11.excellence.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.d.section11.excellence.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("count", 4)("light", true);
} }
function Dimension1Component_ng_container_29_article_16_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r40 = ctx.$implicit;
    const activity_r41 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r40, i0.ɵɵsanitizeUrl)("alt", activity_r41.title);
} }
function Dimension1Component_ng_container_29_article_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 147)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_29_article_16_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r41 = ctx.$implicit;
    const i_r42 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r42 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r41.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r41.images);
} }
function Dimension1Component_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 156);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 157)(7, "h3", 96);
    i0.ɵɵtext(8, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 158);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 33)(12, "h3", 152);
    i0.ɵɵtext(13, "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 145);
    i0.ɵɵtemplate(16, Dimension1Component_ng_container_29_article_16_Template, 5, 3, "article", 146);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "app-callout", 159);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c0, ctx_r1.d.section12.environment.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.d.section12.environment.highlight);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.environmentActivities);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.d.section12.environment.conclusion);
} }
function Dimension1Component_ng_container_30_figure_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementStart(2, "figcaption");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const plan_r43 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", plan_r43.image, i0.ɵɵsanitizeUrl)("alt", plan_r43.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(plan_r43.title);
} }
function Dimension1Component_ng_container_30_article_21_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r44 = ctx.$implicit;
    const activity_r45 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r44, i0.ɵɵsanitizeUrl)("alt", activity_r45.title);
} }
function Dimension1Component_ng_container_30_article_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 147)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_30_article_21_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r46 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r45.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r45.images);
} }
function Dimension1Component_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 160);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelement(6, "app-cycle-flow", 161);
    i0.ɵɵelementStart(7, "div", 162);
    i0.ɵɵelement(8, "app-line-chart", 163)(9, "app-data-table", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h2", 164);
    i0.ɵɵtext(11, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "article", 165)(13, "h3");
    i0.ɵɵtext(14, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E38\u0E01\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, "\u0E40\u0E19\u0E49\u0E19\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E01\u0E25\u0E38\u0E48\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E07\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 166);
    i0.ɵɵtemplate(18, Dimension1Component_ng_container_30_figure_18_Template, 4, 3, "figure", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "section", 167)(20, "div", 145);
    i0.ɵɵtemplate(21, Dimension1Component_ng_container_30_article_21_Template, 5, 3, "article", 146);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "app-callout", 154);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c0, ctx_r1.d.section12.teamwork.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r1.d.section12.teamwork.cycle)("expandAll", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.teamwork.years)("series", ctx_r1.teamSeries)("min", 96)("max", 100)("note", ctx_r1.d.section12.teamwork.note);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section12.teamwork.caption)("headers", ctx_r1.yearHeaders3)("rows", ctx_r1.teamRows);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r1.teamworkCurriculumPlans);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.studentDevelopmentActivities);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.d.section12.teamwork.conclusion);
} }
function Dimension1Component_ng_container_31_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 174);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pj_r47 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ", pj_r47.value, " ");
} }
function Dimension1Component_ng_container_31_div_7_div_6_figure_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 177);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r48 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r48, i0.ɵɵsanitizeUrl);
} }
function Dimension1Component_ng_container_31_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 175)(1, "div", 176);
    i0.ɵɵtemplate(2, Dimension1Component_ng_container_31_div_7_div_6_figure_2_Template, 2, 1, "figure", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E31\u0E28\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 workshop \u0E15\u0E2D\u0E01\u0E25\u0E32\u0E22\u0E40\u0E07\u0E34\u0E19 \u0E13 \u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E2A\u0E32\u0E23 \u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.muenSanWorkshopImages);
} }
function Dimension1Component_ng_container_31_div_7_div_7_figure_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 178);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r49 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r49, i0.ɵɵsanitizeUrl);
} }
function Dimension1Component_ng_container_31_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 175)(1, "div", 176);
    i0.ɵɵtemplate(2, Dimension1Component_ng_container_31_div_7_div_7_figure_2_Template, 2, 1, "figure", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E13 \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21 \u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.khokNongNaImages);
} }
function Dimension1Component_ng_container_31_div_7_div_8_section_1_figure_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 181);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r50 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r50, i0.ɵɵsanitizeUrl);
} }
function Dimension1Component_ng_container_31_div_7_div_8_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 175)(1, "div", 176);
    i0.ɵɵtemplate(2, Dimension1Component_ng_container_31_div_7_div_8_section_1_figure_2_Template, 2, 1, "figure", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activitySet_r51 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activitySet_r51.images);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activitySet_r51.caption);
} }
function Dimension1Component_ng_container_31_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 179);
    i0.ɵɵtemplate(1, Dimension1Component_ng_container_31_div_7_div_8_section_1_Template, 5, 2, "section", 180);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.thaiMusicActivitySets);
} }
function Dimension1Component_ng_container_31_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 170);
    i0.ɵɵtemplate(1, Dimension1Component_ng_container_31_div_7_div_1_Template, 2, 1, "div", 171);
    i0.ɵɵelementStart(2, "h3", 96);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 158);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, Dimension1Component_ng_container_31_div_7_div_6_Template, 5, 1, "div", 172)(7, Dimension1Component_ng_container_31_div_7_div_7_Template, 5, 1, "div", 172)(8, Dimension1Component_ng_container_31_div_7_div_8_Template, 2, 1, "div", 173);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pj_r47 = ctx.$implicit;
    const i_r52 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r52 * 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pj_r47.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pj_r47.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pj_r47.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r52 === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r52 === 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r52 === 2);
} }
function Dimension1Component_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 168);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 82);
    i0.ɵɵtemplate(7, Dimension1Component_ng_container_31_div_7_Template, 9, 7, "div", 169);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "app-callout", 154);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c0, ctx_r1.d.section12.thaiPride.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.d.section12.thaiPride.projects);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.d.section12.thaiPride.conclusion);
} }
function Dimension1Component_ng_container_32_article_7_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r53 = ctx.$implicit;
    const activity_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r53, i0.ɵɵsanitizeUrl)("alt", activity_r54.title);
} }
function Dimension1Component_ng_container_32_article_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 147)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 183);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_32_article_7_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r54 = ctx.$implicit;
    const i_r55 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r55 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r54.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r54.images);
} }
function Dimension1Component_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 182);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 145);
    i0.ɵɵtemplate(7, Dimension1Component_ng_container_32_article_7_Template, 5, 3, "article", 146);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "app-callout", 154);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c0, ctx_r1.d.section12.confidence.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.confidenceActivities);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.d.section12.confidence.conclusion);
} }
function Dimension1Component_ng_container_33_article_21_figure_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure");
    i0.ɵɵelement(1, "img", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const image_r56 = ctx.$implicit;
    const activity_r57 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", image_r56, i0.ɵɵsanitizeUrl)("alt", activity_r57.title);
} }
function Dimension1Component_ng_container_33_article_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 147)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 148);
    i0.ɵɵtemplate(4, Dimension1Component_ng_container_33_article_21_figure_4_Template, 2, 2, "figure", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const activity_r57 = ctx.$implicit;
    const i_r58 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r58 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activity_r57.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", activity_r57.images);
} }
function Dimension1Component_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 73)(2, "div", 23);
    i0.ɵɵelement(3, "app-section-header", 184);
    i0.ɵɵelementContainer(4, 92)(5, 76);
    i0.ɵɵelementStart(6, "div", 185);
    i0.ɵɵelement(7, "app-bar-chart", 186)(8, "app-data-table", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 187)(10, "div", 188)(11, "h3", 96);
    i0.ɵɵtext(12, "\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 189);
    i0.ɵɵtext(14, " \u0E04\u0E23\u0E39\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E14\u0E39\u0E41\u0E25 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E32\u0E21\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E04\u0E25 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E04\u0E33\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E2B\u0E15\u0E38 \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p", 190);
    i0.ɵɵtext(16, " \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E0A\u0E38\u0E21\u0E0A\u0E19 \u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E35\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 191)(18, "h3");
    i0.ɵɵtext(19, "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 145);
    i0.ɵɵtemplate(21, Dimension1Component_ng_container_33_article_21_Template, 5, 3, "article", 146);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const d1Indicator_r25 = i0.ɵɵreference(15);
    const d1Narrative_r29 = i0.ɵɵreference(17);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Narrative_r29)("ngTemplateOutletContext", i0.ɵɵpureFunction1(13, _c0, ctx_r1.d.section12.safety.narrative));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d1Indicator_r25);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r1.d.section12.safety.years)("series", ctx_r1.safetyBars)("max", 100)("valueFontSize", 10)("note", ctx_r1.d.section12.safety.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r1.d.section12.safety.caption)("headers", ctx_r1.yearHeaders3)("rows", ctx_r1.safetyRows);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r1.safetyActivities);
} }
function Dimension1Component_section_34_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 196);
    i0.ɵɵlistener("click", function Dimension1Component_section_34_button_2_Template_button_click_0_listener() { const pv_r60 = i0.ɵɵrestoreView(_r59).ngIf; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(pv_r60.key)); });
    i0.ɵɵelementStart(1, "span", 197);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 198);
    i0.ɵɵtext(4, "\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pv_r60 = ctx.ngIf;
    i0.ɵɵproperty("disabled", !pv_r60.ready);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", pv_r60.key, " ", pv_r60.title, "");
} }
function Dimension1Component_section_34_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 199);
    i0.ɵɵlistener("click", function Dimension1Component_section_34_button_3_Template_button_click_0_listener() { const nx_r62 = i0.ɵɵrestoreView(_r61).ngIf; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(nx_r62.key)); });
    i0.ɵɵelementStart(1, "span", 197);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 198);
    i0.ɵɵtext(4, "\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const nx_r62 = ctx.ngIf;
    i0.ɵɵproperty("disabled", !nx_r62.ready);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", nx_r62.key, " ", nx_r62.title, "");
} }
function Dimension1Component_section_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 192)(1, "div", 193);
    i0.ɵɵtemplate(2, Dimension1Component_section_34_button_2_Template, 5, 3, "button", 194)(3, Dimension1Component_section_34_button_3_Template, 5, 3, "button", 195);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("only-next", !ctx_r1.prevTopic && !!ctx_r1.nextTopic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.prevTopic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.nextTopic);
} }
function Dimension1Component_section_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 73)(1, "div", 23);
    i0.ɵɵelement(2, "app-photo-gallery", 200);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.gallery)("light", true);
} }
function Dimension1Component_div_40_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 205);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const z_r64 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(z_r64.cap);
} }
function Dimension1Component_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 201);
    i0.ɵɵlistener("click", function Dimension1Component_div_40_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeZoom()); });
    i0.ɵɵelementStart(1, "button", 202);
    i0.ɵɵtext(2, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 203);
    i0.ɵɵtemplate(4, Dimension1Component_div_40_p_4_Template, 2, 1, "p", 204);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const z_r64 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", z_r64.src, i0.ɵɵsanitizeUrl)("alt", z_r64.cap);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", z_r64.cap);
} }
export class Dimension1Component {
    route = inject(ActivatedRoute);
    studentQualityModelHeight = signal(620);
    resizeStudentQualityModel(event) {
        if (typeof window === 'undefined' || event.origin !== window.location.origin)
            return;
        if (event.data?.type === 'd1-student-quality-model-height') {
            const height = Number(event.data.height);
            if (Number.isFinite(height))
                this.studentQualityModelHeight.set(Math.max(560, Math.min(4200, height)));
            return;
        }
        if (event.data?.type === 'd1-student-quality-open-topic' && event.data.topic && this.topics.some(topic => topic.key === event.data.topic)) {
            this.select(event.data.topic);
        }
    }
    /* ---------- ดูภาพขนาดเต็ม ----------
       ใช้การดักคลิกที่ระดับหน้า (event delegation) แทนการใส่ (click) ทีละรูป
       ทำให้ทุกภาพในทุกหัวข้อย่อยกดดูเต็มจอได้ โดยไม่ต้องแก้เทมเพลตทีละจุด */
    zoom = signal(null);
    onImageClick(ev) {
        const el = ev.target;
        if (!el || el.tagName !== 'IMG')
            return;
        // app-photo-gallery มีตัวดูภาพของตัวเองอยู่แล้ว และไม่ดักซ้ำในชั้นดูภาพเต็ม
        if (el.closest('app-photo-gallery') || el.closest('.d1-zoom'))
            return;
        const img = el;
        const src = img.currentSrc || img.src;
        if (!src)
            return;
        ev.preventDefault();
        this.zoom.set({ src, cap: img.alt || '' });
    }
    closeZoom() { this.zoom.set(null); }
    /** เปิดหัวข้อเดิมอัตโนมัติเมื่อกลับมาจากหน้ารางวัล (?t=1.1.8) */
    ngOnInit() {
        const t = this.route.snapshot.queryParamMap.get('t');
        if (t && this.topics.some(x => x.key === t))
            this.open.set(t);
    }
    /* ---------- สารบัญตัวชี้วัด 16 ข้อ ตามแบบประเมิน ----------
       กด "เปิดดู" ที่การ์ดเพื่อแสดงเนื้อหาของข้อนั้น กดย้อนกลับเพื่อกลับมาที่สารบัญ
       ตัว key ใช้อ้างอิงกับบล็อกเนื้อหาในไฟล์ .html */
    topics = [
        { key: '1.1.1', group: '1.1', title: 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี', note: 'คณิตศาสตร์ ม.3 เพิ่มขึ้นรวม 3 ปี', ready: true },
        { key: '1.1.2', group: '1.1', title: 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ', note: 'ค่าเฉลี่ยผลการคัดกรองระดับดี ปี 2568', ready: true },
        { key: '1.1.3', group: '1.1', title: 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร', note: 'ผลการเรียนเฉลี่ยเพิ่มขึ้นต่อเนื่อง', ready: true },
        { key: '1.1.4', group: '1.1', title: 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้', note: 'ผลการประเมินการอ่าน คิดวิเคราะห์ ระดับดีขึ้นไป', ready: true },
        { key: '1.1.5', group: '1.1', title: 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)', note: 'ผลสัมฤทธิ์รายวิชาเทคโนโลยีระดับ 3–4', ready: true },
        { key: '1.1.6', group: '1.1', title: 'ผู้เรียนมีความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้', note: 'ผลการเรียนระดับดีขึ้นไป (เกรด 3–4) เพิ่มเป็นร้อยละ 74.07', ready: true },
        { key: '1.1.7', group: '1.1', title: 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน', note: 'ม.3 ที่ศึกษาต่อในสถานศึกษาเดิม ปี 2568', ready: true },
        { key: '1.1.8', group: '1.1', title: 'ความรู้ความสามารถรอบด้าน ความสามารถพิเศษ และผลงานเป็นเลิศ', note: 'รางวัลเชิงประจักษ์ที่มีภาพหลักฐาน', ready: true },
        { key: '1.2.1', group: '1.2', title: 'คุณธรรม จริยธรรม ค่านิยม และจิตสำนึกถึงประโยชน์ส่วนรวม', note: 'ผลประเมินคุณลักษณะอันพึงประสงค์ ปี 2567', ready: true },
        { key: '1.2.2', group: '1.2', title: 'ตระหนักและมีส่วนร่วมในการอนุรักษ์ทรัพยากรธรรมชาติและสิ่งแวดล้อม', note: 'ได้รับพระราชทานป้ายสนองพระราชดำริ ปี 2567', ready: true },
        { key: '1.2.3', group: '1.2', title: 'ยอมรับเหตุผลและความคิดเห็นของผู้อื่น', note: 'ผู้มาใช้สิทธิ์เลือกตั้งสภานักเรียน ปี 2568', ready: true },
        { key: '1.2.4', group: '1.2', title: 'ทำงานเป็นทีม มีความรับผิดชอบ มุ่งมั่น และทำงานอย่างมีประสิทธิภาพ', note: 'ผ่านการประเมินกิจกรรมลูกเสือ ปี 2568', ready: true },
        { key: '1.2.5', group: '1.2', title: 'ภาคภูมิใจในความเป็นไทยและนำภูมิปัญญาท้องถิ่นไปใช้', note: 'จากกิจกรรมทัศนศึกษาแหล่งเรียนรู้จังหวัดเชียงใหม่', ready: true },
        { key: '1.2.6', group: '1.2', title: 'มั่นใจในตนเอง และมีเจตคติที่ดีต่อการเรียน', note: 'กิจกรรมหลักที่ส่งเสริมความมั่นใจในตนเอง', ready: true },
        { key: '1.2.7', group: '1.2', title: 'รักษาสุขภาพกายและสุขภาพจิตได้', note: 'นักเรียนที่มีผลสุขภาพจิตปกติ ปี 2568', ready: true },
        { key: '1.2.8', group: '1.2', title: 'ปลอดภัยจากสารเสพติด ปัญหาทางเพศ และอบายมุขทุกชนิด', note: 'พฤติกรรมไม่พึงประสงค์ลดลงจาก 59.63%', ready: true }
    ];
    groups = [
        { key: '1.1', title: 'ผลสัมฤทธิ์ทางวิชาการ' },
        { key: '1.2', title: 'คุณลักษณะที่พึงประสงค์' }
    ];
    /** เริ่มต้นให้เห็นเพียง 2 หมวดหลัก แล้วค่อยเผยข้อย่อยเมื่อกรรมการเลือก */
    tab = signal('');
    open = signal('');
    get shown() { return this.topics.filter(t => t.group === this.tab()); }
    topicsOf(group) { return this.topics.filter(t => t.group === group); }
    get currentIndex() { return this.topics.findIndex(t => t.key === this.open()); }
    get current() { return this.topics[this.currentIndex]; }
    get prevTopic() { return this.topics[this.currentIndex - 1]; }
    get nextTopic() { return this.topics[this.currentIndex + 1]; }
    select(key) {
        this.open.set(key);
        this.tab.set(key.startsWith('1.1') ? '1.1' : '1.2');
        window.scrollTo({ top: 0 });
    }
    toggleTab(group) {
        this.tab.update(current => current === group ? '' : group);
    }
    /** ปุ่มนำทางลอย: กลับไปหน้ารายการของหมวดที่เลือกเสมอ */
    selectGroup(group) {
        // แสดงรายการย่อยของหมวดที่เลือกเสมอ แล้วเลื่อนไปยังรายการนั้นโดยตรง
        // (รอให้ Angular วาดหน้าสารบัญก่อน จึงหา element สำหรับเลื่อนได้)
        this.open.set('');
        this.tab.set(group);
        window.setTimeout(() => {
            document.getElementById(`d1-group-${group.replace('.', '-')}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 60);
    }
    /* Chrome/Safari บางเครื่องไม่เริ่มเล่นเองแม้ใส่ autoplay
       จึงสั่งเล่นซ้ำเมื่อวิดีโอพร้อม และกลืน error ถ้าเบราว์เซอร์ยังปฏิเสธ */
    playBg(v) {
        v.muted = true;
        const p = v.play();
        if (p && typeof p.catch === 'function')
            p.catch(() => { });
    }
    backToIndex() {
        this.open.set('');
        this.tab.set('');
        window.setTimeout(() => {
            document.querySelector('.d1-student-quality-model')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 60);
    }
    gallery = GALLERY['d1'];
    d = DIM1;
    // ---- หัวข้อย่อย (ตัดเลขนำหน้าออกเพราะแสดงในกล่องตัวเลขแล้ว) ----
    onetTitle = 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี';
    thaiTitle = 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ';
    engTitle = 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร';
    thinkTitle = 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้';
    ictTitle = 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)';
    curriculumProgressTitle = 'ผู้เรียนมีความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้';
    pathTitle = 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน';
    electionTitle = 'การยอมรับเหตุผลและความคิดเห็นของผู้อื่น';
    healthTitle = 'การรักษาสุขภาพกายและสุขภาพจิต';
    palette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd'];
    // ---------- O-NET ม.6 ----------
    onetHeaders = [
        'สาระการเรียนรู้',
        'ร.ร. 2566', 'ประเทศ 2566', 'ต่าง',
        'ร.ร. 2567', 'ประเทศ 2567', 'ต่าง',
        'ร.ร. 2568', 'ประเทศ 2568', 'ต่าง'
    ];
    onetEvidenceLinks = [
        { label: 'รายงาน 2566', href: '/evidence/1.1.1/onet/onet-2566.pdf' },
        { label: 'รายงาน 2567', href: '/evidence/1.1.1/onet/onet-2567.pdf' },
        { label: 'รายงาน 2568', href: '/evidence/1.1.1/onet/onet-2568.pdf' }
    ];
    /** ผลงานเด่น O-NET: คัดเฉพาะรายวิชา/ระดับชั้นที่สูงกว่าค่าเฉลี่ยประเทศครบ 3 ปี
     * ตัวเลขถอดจากหลักฐาน M3_ไทย, M6_ไทย และ M6_สังคมฯ ที่แนบโดยโรงเรียน */
    onetHighlights = [
        {
            title: 'ม.3 ภาษาไทย',
            subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
            series: [
                { name: 'ระดับโรงเรียน', values: [54.87, 56.52, 49.22], color: '#57c878' },
                { name: 'ระดับประเทศ', values: [37.35, 34.40, 33.92], color: '#f0b48f' }
            ],
            note: 'สูงกว่าระดับประเทศ +17.52, +22.12 และ +15.30 คะแนนตามลำดับ'
        },
        {
            title: 'ม.6 ภาษาไทย',
            subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
            series: [
                { name: 'ระดับโรงเรียน', values: [45.23, 47.41, 46.73], color: '#123b82' },
                { name: 'ระดับประเทศ', values: [40.78, 42.21, 40.32], color: '#93bce3' }
            ],
            note: 'สูงกว่าระดับประเทศ +4.45, +5.20 และ +6.41 คะแนนตามลำดับ'
        },
        {
            title: 'ม.6 สังคมศึกษา',
            subtitle: 'สูงกว่าระดับประเทศต่อเนื่อง 3 ปี',
            series: [
                { name: 'ระดับโรงเรียน', values: [34.65, 39.11, 39.12], color: '#ee5c91' },
                { name: 'ระดับประเทศ', values: [33.09, 35.77, 36.96], color: '#e9df4e' }
            ],
            note: 'สูงกว่าระดับประเทศ +1.56, +3.34 และ +2.16 คะแนนตามลำดับ'
        }
    ];
    m6Rows = DIM1.section11.onet.m6.subjects.map(s => ({
        cells: [
            s.name,
            ...[0, 1, 2].flatMap(i => [
                s.school[i].toFixed(2),
                s.nation[i].toFixed(2),
                this.signed(s.school[i] - s.nation[i])
            ])
        ]
    }));
    // ---------- O-NET ม.3 ----------
    m3TrendBars = DIM1.section11.onet.m3Trend.subjects.map((s, i) => ({
        name: s.name,
        values: s.values,
        color: this.palette[i % 5]
    }));
    m3Rows = DIM1.section11.onet.m3.subjects.map(s => ({
        cells: [
            s.name,
            ...[0, 1, 2].flatMap(i => [
                s.school[i].toFixed(2),
                s.nation[i].toFixed(2),
                this.signed(s.school[i] - s.nation[i])
            ])
        ]
    }));
    // ---------- ภาษาไทย ----------
    yearHeaders3 = ['ระดับชั้น', 'ปี 2566', 'ปี 2567', 'ปี 2568'];
    /* ใช้ชุดสี 6 สีเฉพาะกราฟนี้ เพราะมี 6 ระดับชั้น
       ถ้าใช้ชุด 5 สีเดิม ม.6 จะได้สีซ้ำกับ ม.1 จนแยกเส้นไม่ออก */
    gradePalette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd', '#b4433a'];
    thaiBars = [
        ...DIM1.section11.thai.rows.map((r, i) => ({
            name: r.name, values: r.values, color: this.gradePalette[i % 6]
        })),
        { name: 'ค่าเฉลี่ยรวม', values: DIM1.section11.thai.average, color: '#08152f' }
    ];
    thaiRows = [
        ...DIM1.section11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
        { cells: ['ค่าเฉลี่ย', ...DIM1.section11.thai.average.map(v => v.toFixed(2))], total: true }
    ];
    thaiActivities = [
        'กิจกรรมการพัฒนาทักษะการพูดในที่ประชุมชน',
        'การฝึกปฏิบัติหน้าที่ผู้ประกาศข่าว ณ สถานีวิทยุมหาวิทยาลัยเกษตรศาสตร์แม่โจ้',
        'กิจกรรมวันสุนทรภู่',
        'กิจกรรมการประกวดบันทึกรักการอ่าน',
        'การประกวดจัดทำสื่ออิเล็กทรอนิกส์จากหนังสือสารานุกรมไทยฉบับเยาวชนฯ',
        'การจัดกิจกรรมการเรียนรู้แบบ Active Learning กลุ่มสาระการเรียนรู้คณิตศาสตร์',
        'การใช้โปรแกรมทางคณิตศาสตร์ประยุกต์ใช้ร่วมกับการจัดการเรียนการสอน',
        'กิจกรรมการแข่งขันคณิตคิดเลขเร็ว',
        'กิจกรรมการแข่งขัน Battle of the Numbers',
        'การเตรียมความพร้อมในการแข่งขัน Battle of the Numbers และตอบปัญหาทางคณิตศาสตร์',
        'การเตรียมความพร้อมผู้เรียนเพื่อเข้าการทดสอบระดับชาติ',
        'ค่าย Math Summer Camp และค่ายพัฒนานวัตกรรมด้านคณิตศาสตร์เพื่อยอดสู่โครงงานคณิตศาสตร์'
    ].map((title, index) => ({
        title,
        images: [
            `/evidence/1.1.2/thai-activities/${String(index * 2 + 1).padStart(2, '0')}.jpg`,
            `/evidence/1.1.2/thai-activities/${String(index * 2 + 2).padStart(2, '0')}.jpg`
        ]
    })).filter((_, index) => index !== 6);
    thaiAwards = [
        {
            title: 'โรงเรียนสันทรายวิทยาคมขอแสดงความยินดีกับนักเรียนที่ผ่านการคัดเลือกเป็นตัวแทนประเทศไทยเข้าแข่งขันคณิตคิดเร็วในระดับนานาชาติ ประจำปี 2569 ระหว่างวันที่ 21–24 เมษายน 2569 ณ โรงเรียน Pancabudi เมืองเมดาน ประเทศอินโดนีเซีย',
            image: '/evidence/1.1.2/thai-awards/04-international-mental-math.png'
        },
        {
            title: 'รางวัลจากการประกวดจัดทำสื่ออิเล็กทรอนิกส์จากหนังสือสารานุกรมไทยสำหรับเยาวชนฯ',
            image: '/evidence/1.1.2/thai-activities/09.jpg'
        },
        {
            title: 'ผลงานรางวัลจากกิจกรรมการใช้โปรแกรมทางคณิตศาสตร์ประยุกต์ร่วมกับการจัดการเรียนการสอน',
            image: '/evidence/1.1.2/thai-activities/13.jpg'
        },
        {
            title: 'ผลงานรางวัลจากกิจกรรมการแข่งขันคณิตคิดเลขเร็ว',
            image: '/evidence/1.1.2/thai-activities/16.jpg'
        }
    ];
    environmentActivities = [
        'โครงการงานสวนพฤกษศาสตร์โรงเรียน',
        'กิจกรรมสื่อสารสู่ฝุ่น ขยายความรู้และการแก้ไขปัญหาฝุ่น PM2.5 ให้แก่โรงเรียนในอำเภอสันทราย',
        'กิจกรรมการเรียนรู้เทคโนโลยี AI เพื่อสิ่งแวดล้อม ร่วมกับ AiroTEC มหาวิทยาลัยราชภัฏเชียงใหม่',
        'กิจกรรมประกวดห้องเรียนสะอาด และพิธีมอบธงห้องเรียนสะอาดประจำเดือน',
        'กิจกรรมเวรทำความสะอาดพื้นที่รับผิดชอบ',
        'กิจกรรมคัดแยกขยะของคณะสี',
        'กิจกรรมคัดแยกขยะร่วมกับชุมชนในวันสำคัญ และกิจกรรมจิตอาสาพัฒนาแหล่งน้ำและสวนสาธารณะร่วมกับเทศบาลตำบลสันทรายหลวง'
    ].map((title, index) => ({
        title,
        images: [
            `/evidence/1.2.2/environment-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
            `/evidence/1.2.2/environment-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
        ]
    }));
    teamworkCurriculumPlans = [
        'แผนการเรียนธุรกิจ',
        'แผนการเรียนคหกรรม',
        'แผนการเรียนศิลปะ',
        'แผนการเรียนวิทย์',
        'แผนการเรียนภาษาญี่ปุ่น',
        'แผนการเรียนกีฬา',
        'แผนการเรียนภาษาจีน',
        'แผนการเรียนภาษาจีน-ภาษาอังกฤษ'
    ].map((title, index) => ({
        title,
        image: `/evidence/1.2.4/curriculum-activities/${String(index + 1).padStart(2, '0')}.png`
    }));
    studentDevelopmentActivities = [
        'กิจกรรมพัฒนาสมรรถนะ (วิชาการและอาชีพ)',
        'กิจกรรมชุมนุม และกิจกรรม 1 คน 1 ความสามารถ',
        'กิจกรรมค่ายพักแรมลูกเสือ – เนตรนารี - ยุวกาชาด',
        'กิจกรรมอบรมนักศึกษาวิชาทหาร',
        'กิจกรรมค่ายเยาวชนอาสาป้องกันและบรรเทาสาธารณภัย และกิจกรรมบำเพ็ญประโยชน์',
        'กิจกรรมกีฬาสี',
        'กิจกรรมทัศนศึกษา',
        'กิจกรรมส่งเสริมประชาธิปไตยในโรงเรียน'
    ].map((title, index) => ({
        title,
        images: [
            `/evidence/1.2.4/student-development-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
            `/evidence/1.2.4/student-development-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
        ]
    }));
    confidenceActivities = [
        'นักเรียนร่วมกับครูวางแผนจัดกิจกรรมการเรียนรู้และกิจกรรมเสริมหลักสูตรในรายวิชาต่าง ๆ',
        'จัดการเรียนรู้เชิงรุกที่เน้นให้นักเรียนกล้าคิด กล้าทำ กล้าแสดงออก นำเสนอหน้าชั้นเรียน และอภิปรายร่วมกับครูอย่างมีเหตุผล',
        'โครงการศึกษาแหล่งเรียนรู้ภายในและภายนอกโรงเรียน ทัศนศึกษา และการออกฝึกงานในสถานประกอบการ',
        'กิจกรรม TOUR & LEARN นักเรียนสัมภาษณ์นักท่องเที่ยวชาวต่างชาติ',
        'การเรียนรู้แบบโครงงานในรายวิชาโรงเรียนมาตรฐานสากล (IS1–IS3) พร้อมนำผลไปใช้บริการสังคม',
        'กิจกรรม TO BE NUMBER ONE เพื่อวางรากฐานการพัฒนาศักยภาพและบุคลิกภาพความมั่นใจในตนเอง'
    ].map((title, index) => ({
        title,
        images: Array.from({ length: 3 }, (_, imageIndex) => `/evidence/1.2.6/confidence-activities/${String(index * 3 + imageIndex + 1).padStart(2, '0')}.png`)
    }));
    healthActivities = [
        'ให้บริการชั่งน้ำหนักและวัดส่วนสูงนักเรียน',
        'ให้บริการร่วมกับศูนย์สุขภาพชุมชน ต.หนองหาร ในการฉีดวัคซีนป้องกันโรคมะเร็งปากมดลูก (HPV) นักเรียนชั้น ม.1- ม.6',
        'ให้บริการร่วมกับสำนักงานเทศบาลแม่โจ้ ตรวจคัดกรองและแก้ไขความผิดปกติทางสายตา ให้กับนักเรียน ครูและบุคลากรทางการศึกษา',
        'บริการตรวจสุขภาพประจำปีร่วมกับคณะเทคนิคการแพทย์ มหาวิทยาลัยเชียงใหม่',
        'รับการตรวจสุขภาพ และการตรวจสอบภาชนะ'
    ].map((title, index) => ({
        title,
        images: [
            `/evidence/1.2.7/health-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
            `/evidence/1.2.7/health-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
        ]
    }));
    safetyActivities = [
        'โครงการสร้างค่านิยมและปลูกฝังคุณลักษณะที่พึงประสงค์ที่ดีกับผู้เรียน',
        'โครงการเสริมสร้างภูมิคุ้มกันแห่งความเสี่ยงของผู้เรียน TO BE NUMBER ONE',
        'โครงการเยี่ยมบ้านนักเรียน และกิจกรรมระบบดูแลช่วยเหลือนักเรียน',
        'กิจกรรมสถานศึกษาสีขาวปลอดยาเสพติดและอบายมุข และกิจกรรมเฝ้าระวังยาเสพติด',
        'กิจกรรมสร้างสุขห่างไกลยาเสพติด และกิจกรรมให้ความรู้เกี่ยวกับยาเสพติด',
        'กิจกรรม TO BE NUMBER ONE CHALLENGE และการแข่งขันกีฬาต้านยาเสพติด',
        'กิจกรรมลูก ส.ค. มีวินัย ห่างไกลอบายมุข (สารวัตรนักเรียน) และกิจกรรมค่ายปรับพฤติกรรม',
        'กิจกรรมรณรงค์ป้องกันและแก้ไขปัญหายาเสพติดในและนอกสถานศึกษา และการตรวจปัสสาวะนักเรียนกลุ่มเสี่ยง'
    ].map((title, index) => ({
        title,
        images: [
            `/evidence/1.2.8/safety-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
            `/evidence/1.2.8/safety-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
        ]
    }));
    muenSanWorkshopImages = [
        '/evidence/1.2.5/muen-san-workshop/01.png',
        '/evidence/1.2.5/muen-san-workshop/02.png'
    ];
    khokNongNaImages = [
        '/evidence/1.2.5/khok-nong-na/01.png',
        '/evidence/1.2.5/khok-nong-na/02.png'
    ];
    thaiMusicActivitySets = [
        {
            images: ['/evidence/1.2.5/thai-music/01.png', '/evidence/1.2.5/thai-music/02.png'],
            caption: 'ภาพประกอบการทำการจัดการเรียนการสอนกิจกรรมพัฒนาผู้เรียนชุมนุมดนตรีพื้นเมืองดนตรีไทย ณ ห้องปฏิบัติการดนตรี โรงเรียนสันทรายวิทยาคม อำเภอเมือง จังหวัดเชียงใหม่'
        }
    ];
    // ---------- ภาษาอังกฤษ ----------
    engSeries = [{
            name: 'ระดับดีขึ้นไป (3–4)',
            values: DIM1.section11.english.grades.map(g => g.pct),
            color: '#1e4d9e'
        }];
    englishActivities = DIM1.section11.english.activities.map((title, index) => ({
        title,
        images: [
            `/evidence/1.1.3/english-activities/${String(index * 2 + 1).padStart(2, '0')}.png`,
            `/evidence/1.1.3/english-activities/${String(index * 2 + 2).padStart(2, '0')}.png`
        ]
    }));
    /** ภาพกิจกรรมท้ายหัวข้อ 1.1.4 · ไฟล์อยู่ที่ public/evidence/1.1.4/activities/ */
    thinkingActivities = [
        {
            title: 'การอบรมเชิงปฏิบัติการ "ครูแกนนำการจัดการเรียนรู้ด้วยกระบวนการสืบค้นและการนำเสนอผลงาน"',
            images: [1, 2, 3].map(n => `/evidence/1.1.4/activities/training-0${n}.jpg`)
        },
        {
            title: 'การนำเสนอผลงาน เรื่อง พลังสำคัญในการต่อยอดความคิดสร้างสรรค์และพัฒนาศักยภาพของผู้เรียน',
            images: [1, 2].map(n => `/evidence/1.1.4/activities/presentation-0${n}.jpg`)
        },
        {
            title: 'การนำเสนอนวัตกรรม ผลงานจากการศึกษาค้นคว้าด้วยตนเอง (Independent Study : IS) และการประกวดโครงงานจากหนังสือสารานุกรมไทยสำหรับเยาวชนฯ',
            images: [1, 2, 3].map(n => `/evidence/1.1.4/activities/is-innovation-0${n}.jpg`)
        },
        {
            title: 'การนำเสนอรอบคัดเลือก สุดยอดนวัตกรรมทางสังคม ครั้งที่ 2 (SK Social Innovation Award 2026)',
            images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/sk-social-innovation-0${n}.jpg`)
        },
        {
            title: 'การนำเสนอนวัตกรรม “การศึกษาค้นคว้าด้วยตนเอง” และการประกวดโครงงานจากหนังสือสารานุกรมไทยฯ',
            images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/is-project-0${n}.jpg`)
        },
        {
            title: 'โครงงานด้านสิ่งแวดล้อม เรื่อง Interactive Video YouTube สร้างจิตสำนึกด้านสิ่งแวดล้อม',
            images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/env-interactive-video-0${n}.jpg`)
        },
        {
            title: 'กลุ่มสาระการเรียนรู้วิทยาศาสตร์และเทคโนโลยี จัดกิจกรรมการนำเสนอผลงานโครงงานและนวัตกรรม',
            images: [1, 2, 3, 4].map(n => `/evidence/1.1.4/activities/sci-project-0${n}.jpg`)
        }
    ];
    englishAwards = [
        {
            title: 'สอบได้ลำดับที่ 19 จากผู้เข้าสอบ 1,306 คน ในโครงการทดสอบความรู้วิชา TGAT ระดับชั้นมัธยมศึกษาตอนปลาย ปีการศึกษา 2567',
            image: '/evidence/1.1.3/english-awards/01-tgat.png'
        },
        {
            title: 'ผลการสอบวัดระดับความสามารถทางภาษาอังกฤษ 4 ทักษะ ตามกรอบมาตรฐานสากล CEFR ระดับ A1–A2 เต็ม 50 คะแนน',
            image: '/evidence/1.1.3/english-awards/02-cefr.png'
        },
        {
            title: 'ได้คะแนนเต็ม 100 คะแนน ในการทดสอบ O-NET รายวิชาภาษาอังกฤษ (สทศ.)',
            image: '/evidence/1.1.3/english-awards/03-onet.png'
        }
    ];
    gradeHeaders = ['ปีการศึกษา', ...DIM1.section11.english.gradeLabels, 'ร้อยละ 3–4'];
    engRows = [
        ...DIM1.section11.english.grades.map(g => ({
            cells: [g.year, ...g.g.map(v => v.toLocaleString('th-TH')), g.pct.toFixed(2)]
        })),
        { cells: ['รวมเฉลี่ย 3 ปี', '', '', '', '', '', '', '', '', DIM1.section11.english.average.toFixed(2)], total: true }
    ];
    // ---------- คิดวิเคราะห์ ----------
    isYears = ['2566', '2567', '2568'];
    isSeries = [
        { name: 'ชั้น ม.2', values: [61, 88, 76], color: '#1e4d9e' },
        { name: 'ชั้น ม.5', values: [73, 89, 96], color: '#d4a537' }
    ];
    readSeries = [{
            name: 'ระดับดีขึ้นไป (ดีเยี่ยม + ดี)',
            values: DIM1.section11.thinking.readTotals,
            color: '#1e4d9e'
        }];
    readHeaders = [
        'ระดับชั้น',
        'ดีเยี่ยม 2566', 'ดี 2566',
        'ดีเยี่ยม 2567', 'ดี 2567',
        'ดีเยี่ยม 2568', 'ดี 2568'
    ];
    readRows = [
        ...DIM1.section11.thinking.readRows.map(r => ({
            cells: [
                r.name,
                ...[0, 1, 2].flatMap(i => [r.excellent[i].toFixed(2), r.good[i].toFixed(2)])
            ]
        })),
        {
            cells: [
                'ร้อยละระดับดีขึ้นไป',
                DIM1.section11.thinking.readTotals[0].toFixed(2), '',
                DIM1.section11.thinking.readTotals[1].toFixed(2), '',
                DIM1.section11.thinking.readTotals[2].toFixed(2), ''
            ],
            total: true
        }
    ];
    // ---------- ICT ----------
    ictSeries = [{
            name: 'รายวิชาเทคโนโลยี (ระดับ 3–4)',
            values: DIM1.section11.ict.values,
            color: '#1e4d9e'
        }];
    // ---------- ความก้าวหน้าตามหลักสูตร ----------
    curriculumProgressBars = DIM1.section11.curriculumProgress.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % this.palette.length]
    }));
    curriculumProgressHeaders = ['กลุ่มสาระการเรียนรู้', 'ปี 2566', 'ปี 2567', 'ปี 2568'];
    curriculumProgressRows = [
        ...DIM1.section11.curriculumProgress.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
        { cells: ['รวมเฉลี่ย', ...DIM1.section11.curriculumProgress.average.map(v => v.toFixed(2))], total: true }
    ];
    // ---------- การศึกษาต่อ ----------
    /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
    pathBars = DIM1.section11.pathway.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    // ---------- คุณลักษณะอันพึงประสงค์ ----------
    desiredMeterColors = ['#ff5b7f', '#ff9f43', '#f9c74f', '#35c77a', '#16b9d4', '#4e7cff', '#9b6bff', '#ed6aa5'];
    desiredMeters = DIM1.section12.desired.rows
        .map((r, index) => ({ name: r.name, value: r.avg, color: this.desiredMeterColors[index % this.desiredMeterColors.length] }))
        .sort((a, b) => b.value - a.value);
    desiredHeaders = ['คุณลักษณะที่พึงประสงค์', 'ปี 2566', 'ปี 2567', 'ปี 2568', 'สรุปคุณภาพโดยรวม'];
    desiredRows = [
        ...DIM1.section12.desired.rows.map(r => ({
            cells: [r.name, ...r.values.map(v => v.toFixed(2)), r.avg.toFixed(2)]
        })),
        {
            cells: [
                'สรุปผลการประเมิน',
                ...DIM1.section12.desired.overall.map(v => v.toFixed(2)),
                DIM1.section12.desired.overallAvg.toFixed(2)
            ],
            total: true
        }
    ];
    // ---------- การเลือกตั้ง ----------
    electionSeries = [
        { name: 'ผู้มีสิทธิ์เลือกตั้ง', values: DIM1.section12.election.eligible, color: '#b3cdf0' },
        { name: 'ผู้มาใช้สิทธิ์', values: DIM1.section12.election.voted, color: '#1e4d9e' }
    ];
    electionPctSeries = [
        { name: 'ร้อยละผู้มาใช้สิทธิ์', values: DIM1.section12.election.votedPct, color: '#1e4d9e' },
        { name: 'เกณฑ์ร้อยละ 80', values: [80, 80, 80], color: '#b4433a', dashed: true }
    ];
    // ---------- สุขภาพ ----------
    fitSeries = DIM1.section12.health.fitRows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    bodySeries = DIM1.section12.health.bodyRows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    /* สุขภาพจิต — แสดงเป็นกราฟแท่ง เรียงลำดับ มีปัญหา → เสี่ยง → ปกติ */
    mindOrder = ['มีปัญหา', 'เสี่ยง', 'ปกติ'];
    mindColor = {
        'มีปัญหา': '#b4433a', 'เสี่ยง': '#d4a537', 'ปกติ': '#0f7a4d'
    };
    mindBars = this.mindOrder
        .map(n => DIM1.section12.health.mindRows.find(r => r.name === n))
        .filter((r) => !!r)
        .map(r => ({ name: r.name, values: r.values, color: this.mindColor[r.name] }));
    // ---------- ข้อมูลสำหรับตัวชี้วัดที่เพิ่มใหม่ ----------
    excellenceKpis = DIM1.section11.excellence.stats.map(x => ({
        value: x.value, unit: x.unit, label: x.label, note: ''
    }));
    teamSeries = DIM1.section12.teamwork.rows.map((r, i) => ({
        name: r.name,
        values: r.values.map(v => (v === null ? NaN : v)),
        color: this.gradePalette[i % 6]
    }));
    teamRows = DIM1.section12.teamwork.rows.map(r => ({
        cells: [r.name, ...r.values.map(v => (v === null ? '—' : v.toFixed(2)))]
    }));
    safetyBars = [
        { name: 'ภาพรวมทั้งโรงเรียน', values: DIM1.section12.safety.riskPct, color: '#b4433a' },
        ...DIM1.section12.safety.byLevel.map((r, i) => ({
            name: r.name, values: r.values, color: this.gradePalette[i % 6]
        }))
    ];
    safetyRows = [
        ...DIM1.section12.safety.byLevel.map(r => ({
            cells: [r.name, ...r.values.map(v => v.toFixed(2))]
        })),
        { cells: ['รวมทั้งโรงเรียน', ...DIM1.section12.safety.riskPct.map(v => v.toFixed(2))], total: true }
    ];
    signed(v) {
        return (v >= 0 ? '+' : '') + v.toFixed(2);
    }
    static ɵfac = function Dimension1Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension1Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension1Component, selectors: [["app-dimension1"]], hostBindings: function Dimension1Component_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("message", function Dimension1Component_message_HostBindingHandler($event) { return ctx.resizeStudentQualityModel($event); }, false, i0.ɵɵresolveWindow)("click", function Dimension1Component_click_HostBindingHandler($event) { return ctx.onImageClick($event); })("keydown.escape", function Dimension1Component_keydown_escape_HostBindingHandler() { return ctx.closeZoom(); }, false, i0.ɵɵresolveDocument);
        } }, decls: 41, vars: 30, consts: [["bgv", ""], ["d1Indicator", ""], ["d1Narrative", ""], ["singleNarrative", ""], ["normalNarrative", ""], ["normalParagraph", ""], [3, "no", "weight", "name", "subtitle"], ["class", "section d1-intro", 4, "ngIf"], ["class", "section d1-student-quality-model", 4, "ngIf"], ["class", "section d1-quality-wheel", 4, "ngIf"], ["aria-hidden", "true", 1, "d1-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-poster.jpg", 1, "d1-video", 3, "loadedmetadata", "canplay"], ["src", "video/school.mp4", "type", "video/mp4"], [1, "d1-veil"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 1, "d1-side-nav"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "d1-side-nav-btn d1-side-nav-back", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 3, "click", 4, "ngIf"], ["class", "section d1-index", 4, "ngIf"], ["class", "section-tight d1-detail-head", 4, "ngIf"], [4, "ngIf"], ["class", "section-tight", 4, "ngIf"], ["class", "section", 4, "ngIf"], [1, "section-tight", "section-alt"], [1, "wrap"], ["nextPath", "/dimension-2", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23"], ["class", "d1-zoom", "role", "dialog", "aria-modal", "true", 3, "click", 4, "ngIf"], [1, "section", "d1-intro"], ["appReveal", "", 1, "card", "card-accent", "intro-glass", 2, "margin-bottom", "32px"], [2, "text-indent", "2em"], [1, "section", "d1-student-quality-model"], ["appReveal", "", 1, "d1-student-quality-model-frame"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/student-quality-overview.html?v=20260916-6`, "title", "\u0E42\u0E21\u0E40\u0E14\u0E25\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "loading", "lazy", "scrolling", "no"], [1, "section", "d1-quality-wheel"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead"], ["appReveal", ""], ["type", "button", 1, "d1-side-nav-btn", 3, "click"], [1, "d1-side-nav-no"], [1, "d1-side-nav-tip"], [1, "d1-side-subnav"], [1, "d1-side-subnav-inner"], ["type", "button", "class", "d1-side-nav-btn is-sub", 3, "is-current", "is-empty", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "d1-side-nav-btn", "is-sub", 3, "click", "disabled"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 1, "d1-side-nav-btn", "d1-side-nav-back", 3, "click"], ["aria-hidden", "true", 1, "d1-side-nav-no"], [1, "section", "d1-index"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], ["role", "tablist", 1, "d1-tabs"], ["id", "d1-group-1-1", 1, "d1-tab-group"], ["type", "button", "role", "tab", 1, "d1-tab", 3, "click"], [1, "d1-tab-no"], [1, "d1-tab-text"], ["class", "d1-grid", 4, "ngIf"], ["id", "d1-group-1-2", 1, "d1-tab-group"], [1, "d1-grid"], ["type", "button", "class", "d1-card", "appReveal", "zoom", 3, "is-empty", "disabled", "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d1-card", 3, "click", "disabled", "revealDelay"], [1, "d1-card-top"], [1, "d1-no"], [1, "d1-title"], [1, "d1-note"], ["class", "d1-go", 4, "ngIf"], [1, "d1-go"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "section-tight", "d1-detail-head"], ["type", "button", 1, "d1-back", 3, "click"], ["class", "assessment-indicators assessment-indicators--single", 4, "ngIf"], [1, "assessment-indicators", "assessment-indicators--single"], ["appReveal", "", 1, "d1-narrative"], [4, "ngIf", "ngIfElse"], [1, "section"], ["num", "1.1.1", 3, "light", "title"], ["appReveal", "", 1, "d1-onet-narrative"], [3, "ngTemplateOutlet"], [1, "stack"], ["appReveal", "", 1, "d1-onet-highlight"], [1, "d1-onet-highlight-head"], [1, "d1-onet-option", "d1-onet-option--row"], [1, "d1-onet-option-label"], [1, "grid", "grid-3"], ["valueFormat", "1.2-2", 3, "title", "subtitle", "labels", "series", "max", "valueFontSize", "note", 4, "ngFor", "ngForOf"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", "evidenceLabel", "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25 O-NET", 3, "years", "subjects", "evidenceLinks", "note"], [3, "caption", "headers", "rows"], ["title", "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3", "subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "showEvidence", "note"], ["label", "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:", 3, "gold"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", "evidenceLabel", "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25 O-NET", 3, "years", "subjects", "evidenceLinks", "note"], ["valueFormat", "1.2-2", 3, "title", "subtitle", "labels", "series", "max", "valueFontSize", "note"], [1, "section", "section-alt"], ["num", "1.1.2", 3, "light", "title"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "max", "valueFontSize", "note"], [1, "grid", "grid-2", 2, "margin-top", "24px"], ["appReveal", "left", 1, "card"], [1, "card-title"], [1, "d1-english-activities"], ["class", "d1-english-activity", 4, "ngFor", "ngForOf"], ["appReveal", "right", 1, "card", "card-gold"], [1, "d1-english-awards"], ["class", "d1-english-award", 4, "ngFor", "ngForOf"], [1, "d1-english-activity"], [1, "d1-english-photos"], ["loading", "lazy", 3, "src", "alt"], [1, "d1-english-award"], ["num", "1.1.3", 3, "light", "title"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], [1, "grid", "grid-2", 2, "margin-bottom", "24px"], [2, "margin-top", "22px"], [3, "caption", "headers", "rows", "note"], ["num", "1.1.4", 3, "light", "title"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B", "subtitle", "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], ["appReveal", "", 1, "card"], ["num", "1.1.5", 3, "light", "title"], [1, "grid", "grid-2"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], [1, "steps", 2, "margin-top", "16px"], ["class", "step-item", 4, "ngFor", "ngForOf"], [1, "step-item"], [1, "chip-row", 2, "margin-top", "8px"], [1, "chip", "chip-gold"], [1, "chip"], [2, "font-size", "14.5px", "color", "#6b7a94", "margin-top", "6px"], ["class", "d1-tech-award-photos", 4, "ngIf"], [1, "d1-tech-award-photos"], ["num", "1.1.6", 3, "light", "title"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E40\u0E01\u0E23\u0E14 3\u20134)", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "max", "valueFontSize", "note"], ["num", "1.1.7", 3, "light", "title"], ["appReveal", "", 1, "d1-pathway-images"], ["src", "/evidence/1.1.7/pathway-m3-infographic.png", "alt", "\u0E2D\u0E34\u0E19\u0E42\u0E1F\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E21.3"], ["src", "/evidence/1.1.7/pathway-m6.jpg", "alt", "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E21.6"], ["num", "1.2.1", "title", "\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21 \u0E41\u0E25\u0E30\u0E08\u0E34\u0E15\u0E2A\u0E33\u0E19\u0E36\u0E01\u0E16\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E27\u0E21", 3, "light"], [1, "stack", "d1-desired-meter"], ["subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "rows", "max", "note"], ["num", "1.2.3", 3, "light", "title"], ["title", "\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)", "valueFormat", "1.0-0", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07", "subtitle", "\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80", 3, "labels", "series", "min", "max"], ["num", "1.2.7", 3, "light", "title"], ["title", "\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32", 3, "labels", "series", "showValues"], ["title", "\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09", 3, "labels", "series", "showValues"], [2, "margin-top", "24px"], ["title", "\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "valueFormat", "1.2-2", 3, "labels", "series", "max", "note"], ["appReveal", "", 1, "d1-health-activities"], [1, "d1-environment-activities"], ["class", "d1-environment-activity", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "left", 1, "d1-environment-activity", 3, "revealDelay"], [1, "d1-environment-photos"], ["num", "1.1.8", "title", "\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28", 3, "light"], [3, "items"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "44px"], [1, "sec-title", 2, "font-size", "22px"], [3, "steps"], ["label", "\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:", 2, "display", "block", "margin-top", "24px"], ["from", "/dimension-1", "topic", "1.1.8", 3, "count", "light"], ["num", "1.2.2", "title", "\u0E15\u0E23\u0E30\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21", 3, "light"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-bottom", "30px"], [1, "card-body", 2, "margin", "0"], ["label", "\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:"], ["num", "1.2.4", "title", "\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A \u0E21\u0E38\u0E48\u0E07\u0E21\u0E31\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E", 3, "light"], [3, "steps", "expandAll"], [1, "stack", 2, "margin-top", "44px"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u201C\u0E1C\u0E48\u0E32\u0E19\u201D \u0E43\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], ["appReveal", "", 1, "d1-student-development-title"], ["appReveal", "", 1, "d1-teamwork-curriculum"], [1, "d1-teamwork-plan-grid"], ["appReveal", "", 1, "d1-student-development"], ["num", "1.2.5", "title", "\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E19\u0E33\u0E20\u0E39\u0E21\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49", 3, "light"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], ["class", "chip chip-gold", "style", "margin-bottom:10px", 4, "ngIf"], ["class", "d1-muen-san-workshop", 4, "ngIf"], ["class", "d1-thai-music-activities", 4, "ngIf"], [1, "chip", "chip-gold", 2, "margin-bottom", "10px"], [1, "d1-muen-san-workshop"], [1, "d1-muen-san-photos"], ["alt", "\u0E17\u0E31\u0E28\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E2A\u0E32\u0E23", "loading", "lazy", 3, "src"], ["alt", "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32", "loading", "lazy", 3, "src"], [1, "d1-thai-music-activities"], ["class", "d1-muen-san-workshop", 4, "ngFor", "ngForOf"], ["alt", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E14\u0E19\u0E15\u0E23\u0E35\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E14\u0E19\u0E15\u0E23\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07", "loading", "lazy", 3, "src"], ["num", "1.2.6", "title", "\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "light"], [1, "d1-confidence-photos"], ["num", "1.2.8", "title", "\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14 \u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E32\u0E07\u0E40\u0E1E\u0E28 \u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14", 3, "light"], [1, "stack", "d1-safety-chart"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E44\u0E21\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C", "subtitle", "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E22\u0E34\u0E48\u0E07\u0E15\u0E48\u0E33\u0E22\u0E34\u0E48\u0E07\u0E14\u0E35)", 3, "labels", "series", "max", "valueFontSize", "note"], [1, "d1-safety-support"], ["appReveal", "", 1, "card", "card-accent"], [1, "card-body"], [1, "card-body", 2, "margin-bottom", "0"], ["appReveal", "", 1, "d1-safety-activities"], [1, "section-tight"], [1, "wrap", "d1-nav"], ["type", "button", "class", "d1-nav-btn", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "d1-nav-btn next", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "d1-nav-btn", 3, "click", "disabled"], [1, "d1-nav-txt"], [1, "d1-nav-lab"], ["type", "button", 1, "d1-nav-btn", "next", 3, "click", "disabled"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 3, "items", "light"], ["role", "dialog", "aria-modal", "true", 1, "d1-zoom", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21", 1, "d1-zoom-close"], [3, "src", "alt"], ["class", "d1-zoom-cap", 4, "ngIf"], [1, "d1-zoom-cap"]], template: function Dimension1Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "app-page-hero", 6);
            i0.ɵɵtemplate(1, Dimension1Component_section_1_Template, 17, 0, "section", 7)(2, Dimension1Component_section_2_Template, 4, 2, "section", 8)(3, Dimension1Component_section_3_Template, 9, 0, "section", 9);
            i0.ɵɵelementStart(4, "div", 10)(5, "video", 11, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension1Component_Template_video_loadedmetadata_5_listener() { i0.ɵɵrestoreView(_r1); const bgv_r3 = i0.ɵɵreference(6); return i0.ɵɵresetView(ctx.playBg(bgv_r3)); })("canplay", function Dimension1Component_Template_video_canplay_5_listener() { i0.ɵɵrestoreView(_r1); const bgv_r3 = i0.ɵɵreference(6); return i0.ɵɵresetView(ctx.playBg(bgv_r3)); });
            i0.ɵɵelement(7, "source", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "nav", 14);
            i0.ɵɵtemplate(10, Dimension1Component_ng_container_10_Template, 9, 8, "ng-container", 15)(11, Dimension1Component_button_11_Template, 5, 0, "button", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, Dimension1Component_section_12_Template, 27, 10, "section", 17)(13, Dimension1Component_section_13_Template, 4, 0, "section", 18)(14, Dimension1Component_ng_template_14_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(16, Dimension1Component_ng_template_16_Template, 4, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(18, Dimension1Component_ng_container_18_Template, 28, 24, "ng-container", 19)(19, Dimension1Component_ng_container_19_Template, 20, 17, "ng-container", 19)(20, Dimension1Component_ng_container_20_Template, 20, 16, "ng-container", 19)(21, Dimension1Component_ng_container_21_Template, 15, 19, "ng-container", 19)(22, Dimension1Component_ng_container_22_Template, 14, 11, "ng-container", 19)(23, Dimension1Component_ng_container_23_Template, 9, 15, "ng-container", 19)(24, Dimension1Component_ng_container_24_Template, 15, 7, "ng-container", 19)(25, Dimension1Component_ng_container_25_Template, 9, 13, "ng-container", 19)(26, Dimension1Component_ng_container_26_Template, 9, 14, "ng-container", 19)(27, Dimension1Component_ng_container_27_Template, 18, 18, "ng-container", 19)(28, Dimension1Component_ng_container_28_Template, 15, 11, "ng-container", 19)(29, Dimension1Component_ng_container_29_Template, 19, 9, "ng-container", 19)(30, Dimension1Component_ng_container_30_Template, 24, 19, "ng-container", 19)(31, Dimension1Component_ng_container_31_Template, 10, 8, "ng-container", 19)(32, Dimension1Component_ng_container_32_Template, 10, 8, "ng-container", 19)(33, Dimension1Component_ng_container_33_Template, 22, 15, "ng-container", 19)(34, Dimension1Component_section_34_Template, 4, 4, "section", 20)(35, Dimension1Component_section_35_Template, 3, 2, "section", 21);
            i0.ɵɵelementStart(36, "section", 22)(37, "div", 23);
            i0.ɵɵelement(38, "app-pager", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(39, "app-home-fab");
            i0.ɵɵtemplate(40, Dimension1Component_div_40_Template, 5, 3, "div", 25);
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.groups);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.5");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.6");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.7");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.7");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.1.8");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.5");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.6");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "1.2.8");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.zoom());
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent, AwardsPreviewComponent,
            CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
            LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent, StudentQualityWheelComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d1-intro[_ngcontent-%COMP%] { padding-bottom: 28px; }\n.d1-index[_ngcontent-%COMP%] { padding-top: 36px; }\n.assessment-indicators--single[_ngcontent-%COMP%] { margin-bottom: 30px; }\n\n\n\n.d1-student-quality-model[_ngcontent-%COMP%] { padding-top: 4px; padding-bottom: 0; }\n.d1-student-quality-model-frame[_ngcontent-%COMP%] { overflow: hidden; background: transparent; }\n.d1-student-quality-model-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] { display: block; width: 100%; border: 0; background: transparent; }\n.d1-quality-wheel[_ngcontent-%COMP%] { padding-top: 18px; }\n\n\n\n[_nghost-%COMP%]     .d1-desired-meter .meter-track { height: 14px; background: rgba(255,255,255,.26); box-shadow: inset 0 0 0 1px rgba(255,255,255,.24); }\n[_nghost-%COMP%]     .d1-desired-meter .meter-fill { box-shadow: 0 3px 10px rgba(17,45,100,.22); }\n[_nghost-%COMP%]     .d1-desired-meter .meter-name { font-weight: 800; }\n\n\n\n[_nghost-%COMP%]     .d1-safety-chart .axis-text { font-size: 11px; }\n\n\n\n.d1-tabs[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 20px; }\n.d1-tab-group[_ngcontent-%COMP%] { display: grid; gap: 14px; scroll-margin-top: 18px; }\n\n.d1-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 64px;\n  padding: 9px 16px;\n  text-align: left;\n  font-family: inherit;\n  color: var(--ink-soft);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease),\n              border-color .2s var(--ease), background .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-tab[_ngcontent-%COMP%]:active { transform: scale(.98); }\n\n.d1-tab-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 46px; height: 46px;\n  flex: none;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 14px;\n  background: var(--navy-50);\n}\n\n.d1-tab-text[_ngcontent-%COMP%] { font-size: 18px; font-weight: 800; color: var(--navy-900); line-height: 1.35; }\n.d1-tab-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; margin-top: 3px; font-size: 14.5px; font-weight: 600; color: var(--ink-mute); }\n\n.d1-tab.is-on[_ngcontent-%COMP%] {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .32);\n}\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-no[_ngcontent-%COMP%] { background: rgba(255, 255, 255, .18); color: #fff; }\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-text[_ngcontent-%COMP%] { color: #fff; }\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #cfe0fa; }\n\n\n\n.d1-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }\n\n.d1-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 7px;\n  padding: 14px 16px 16px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease), border-color .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d1-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: translateY(-6px);\n    border-color: var(--navy-200);\n    box-shadow: var(--shadow-lg);\n  }\n  .d1-card[_ngcontent-%COMP%]:hover:not(:disabled)   .d1-go[_ngcontent-%COMP%] { color: var(--gold-600); }\n}\n\n.d1-card.is-empty[_ngcontent-%COMP%] { opacity: .55; cursor: not-allowed; }\n\n.d1-card-top[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 10px; }\n\n.d1-no[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n  font-variant-numeric: tabular-nums;\n}\n\n.d1-stat[_ngcontent-%COMP%] {\n  color: var(--navy-800);\n  font-size: 27px;\n  font-weight: 800;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.d1-stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-left: 3px; font-size: 14px; font-weight: 700; color: var(--ink-mute); }\n\n.d1-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 16px; font-weight: 800; line-height: 1.42; }\n.d1-note[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 14px; line-height: 1.5; }\n\n.d1-go[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n  color: var(--navy-600);\n  font-size: 14.5px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n\n\n.d1-nav[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }\n.d1-nav.only-next[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] { grid-column: 2; }\n\n.d1-nav-btn[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  padding: 18px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-nav-btn.next[_ngcontent-%COMP%] { text-align: right; }\n.d1-nav-btn[_ngcontent-%COMP%]:disabled { opacity: .45; cursor: not-allowed; }\n@media (hover: hover) { .d1-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--shadow-md); } }\n\n.d1-nav-lab[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 14px; font-weight: 700; }\n.d1-nav-txt[_ngcontent-%COMP%] { color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n\n\n\n.d1-side-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  z-index: 60;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: calc(100vw - 28px);\n}\n\n.d1-side-nav-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: var(--navy-700);\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  transition: transform .18s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-side-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n.d1-side-nav-btn[_ngcontent-%COMP%]:disabled { opacity: .52; cursor: not-allowed; }\n.d1-side-nav-no[_ngcontent-%COMP%] { font-size: 14.5px; font-weight: 800; font-variant-numeric: tabular-nums; }\n.d1-side-nav-btn.is-on[_ngcontent-%COMP%], \n.d1-side-nav-btn.is-current[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d1-side-nav-back[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 27px;\n  border-color: var(--gold-400);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(8, 21, 47, .42);\n}\n.d1-side-nav-btn.is-sub[_ngcontent-%COMP%] { width: 44px; height: 44px; margin-left: 0; }\n.d1-side-subnav[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 1 auto;\n  width: 0;\n  grid-template-columns: minmax(0, 1fr);\n  opacity: 0;\n  transform: translateX(-12px);\n  transform-origin: left center;\n  overflow: hidden;\n  transition: width .28s var(--ease), opacity .2s var(--ease), transform .28s var(--ease);\n}\n.d1-side-subnav.is-open[_ngcontent-%COMP%] { width: min(380px, calc(100vw - 132px)); opacity: 1; transform: translateX(0); }\n.d1-side-subnav-inner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n  grid-auto-flow: column;\n  grid-template-rows: 44px;\n  grid-auto-columns: 44px;\n  min-width: 0;\n  min-height: 0;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.d1-side-nav-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(360px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n\n.d1-detail-head[_ngcontent-%COMP%] { padding-bottom: 0; }\n.d1-back[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d1-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n@media (hover: hover) {\n  .d1-side-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) { transform: scale(1.06); }\n  .d1-side-nav-btn[_ngcontent-%COMP%]:hover   .d1-side-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n@media (max-width: 1180px) { .d1-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 834px) {\n  .d1-tabs[_ngcontent-%COMP%] { gap: 10px; }\n  .d1-tab[_ngcontent-%COMP%] { min-height: 68px; padding: 10px 14px; }\n  .d1-tab-text[_ngcontent-%COMP%] { font-size: 17px; }\n}\n@media (max-width: 900px) {\n  .d1-side-nav-btn[_ngcontent-%COMP%], .d1-side-nav-btn.is-sub[_ngcontent-%COMP%] { width: 44px; height: 44px; margin-left: 0; box-shadow: none; border-color: transparent; }\n  .d1-side-subnav[_ngcontent-%COMP%] { width: 0; grid-template-columns: minmax(0, 1fr); }\n  .d1-side-subnav-inner[_ngcontent-%COMP%] { grid-auto-flow: column; grid-template-rows: 44px; gap: 4px; }\n  .d1-side-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d1-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d1-nav[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n\n\n\n\n.d1-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.d1-index[_ngcontent-%COMP%] { background: transparent; }\n\n.d1-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.d1-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  \n\n  background: linear-gradient(180deg, rgba(8, 21, 47, .72) 0%, rgba(8, 21, 47, .64) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n\n\n.d1-index[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d1-index[_ngcontent-%COMP%]   .sec-lead[_ngcontent-%COMP%] { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n\n\n\n.d1-index[_ngcontent-%COMP%]   .d1-card[_ngcontent-%COMP%] { border-color: rgba(255, 255, 255, .5); box-shadow: 0 14px 34px rgba(8, 21, 47, .28); }\n.d1-index[_ngcontent-%COMP%]   .d1-tab[_ngcontent-%COMP%] { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 28px rgba(8, 21, 47, .26); }\n\n\n\n.d1-card[_ngcontent-%COMP%] { min-height: 142px; }\n.d1-card-top[_ngcontent-%COMP%] { margin-bottom: 2px; }\n\n\n\n.d1-onet-narrative[_ngcontent-%COMP%], \n.d1-narrative[_ngcontent-%COMP%] { margin: 0 0 26px; }\n.d1-onet-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.d1-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #fff;\n  font-size: 18px;\n  line-height: 1.75;\n  text-align: left;\n  text-indent: 2em;\n  text-shadow: 0 2px 12px rgba(8, 21, 47, .9);\n}\n.d1-onet-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, \n.d1-narrative[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n.d1-onet-narrative[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #fff; font-weight: 800; }\n\n\n\n.d1-pathway-images[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 22px;\n}\n.d1-pathway-images[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n  display: grid;\n  gap: 9px;\n  overflow: hidden;\n  color: var(--navy-800);\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n}\n.d1-pathway-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; height: auto; }\n.d1-pathway-images[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] { padding: 0 14px 13px; }\n\n\n\n.d1-english-activities[_ngcontent-%COMP%] { display: grid; gap: 22px; margin-top: 18px; }\n.d1-english-activity[_ngcontent-%COMP%] { padding-bottom: 22px; border-bottom: 1px solid var(--line); }\n.d1-english-activity[_ngcontent-%COMP%]:last-child { padding-bottom: 0; border-bottom: 0; }\n.d1-english-activity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0 0 11px; color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n.d1-english-photos[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n.d1-english-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { min-width: 0; margin: 0; overflow: hidden; border: 1px solid var(--navy-100); border-radius: 10px; background: var(--navy-50); }\n.d1-english-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.d1-english-awards[_ngcontent-%COMP%] { display: grid; gap: 22px; margin-top: 18px; }\n.d1-english-award[_ngcontent-%COMP%] { padding-bottom: 22px; border-bottom: 1px solid var(--gold-200); }\n.d1-english-award[_ngcontent-%COMP%]:last-child { padding-bottom: 0; border-bottom: 0; }\n.d1-english-award[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0 0 11px; color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n.d1-english-award[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; max-height: 300px; object-fit: cover; border: 1px solid var(--gold-200); border-radius: 10px; }\n.d1-english-photos.d1-photos-3[_ngcontent-%COMP%] { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n@media (max-width: 560px) { .d1-english-photos[_ngcontent-%COMP%], .d1-english-photos.d1-photos-3[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n\n\n.d1-environment-activities[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; margin-top:18px; }\n.d1-environment-activity[_ngcontent-%COMP%] { min-width:0; padding:18px; border:1px solid var(--navy-100); border-radius:14px; background:#fff; box-shadow:0 8px 20px rgba(20,47,91,.08); }\n.d1-environment-activity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { min-height:48px; margin:0 0 12px; color:var(--navy-800); font-size:17px; font-weight:800; line-height:1.45; }\n.d1-environment-photos[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }\n.d1-environment-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:var(--navy-50); }\n.d1-environment-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display:block; width:100%; height:130px; object-fit:cover; }\n@media (max-width:700px) { .d1-environment-activities[_ngcontent-%COMP%] { grid-template-columns:1fr; } .d1-environment-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height:155px; } }\n\n\n\n.d1-confidence-photos[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:9px; }\n.d1-confidence-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:var(--navy-50); }\n.d1-confidence-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display:block; width:100%; height:118px; object-fit:cover; }\n@media (max-width:700px) { .d1-confidence-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height:145px; } }\n@media (max-width:460px) { .d1-confidence-photos[_ngcontent-%COMP%] { grid-template-columns:1fr; } .d1-confidence-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height:180px; } }\n\n\n\n.d1-student-development-title[_ngcontent-%COMP%] { margin:34px 0 16px; color:#fff; font-size:28px; font-weight:900; line-height:1.3; letter-spacing:.01em; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-teamwork-curriculum[_ngcontent-%COMP%] { margin-top:0; padding:22px; border:1px solid var(--navy-100); border-radius:16px; background:#fff; box-shadow:0 8px 20px rgba(20,47,91,.08); }\n.d1-teamwork-curriculum[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin:0; color:#082b62; font-size:21px; font-weight:900; line-height:1.4; text-shadow:none; }\n.d1-teamwork-curriculum[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin:4px 0 18px; color:#27466f; font-size:16px; font-weight:700; text-shadow:none; }\n.d1-teamwork-plan-grid[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }\n.d1-teamwork-plan-grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:11px; background:#fff; }\n.d1-teamwork-plan-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display:block; width:100%; height:125px; object-fit:cover; }\n.d1-teamwork-plan-grid[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] { padding:9px 10px; color:var(--navy-800); font-size:15px; font-weight:800; line-height:1.35; }\n@media (max-width:900px) { .d1-teamwork-plan-grid[_ngcontent-%COMP%] { grid-template-columns:repeat(2,minmax(0,1fr)); } }\n@media (max-width:560px) { .d1-teamwork-plan-grid[_ngcontent-%COMP%] { grid-template-columns:1fr; } .d1-teamwork-plan-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height:165px; } }\n.d1-student-development[_ngcontent-%COMP%] { margin-top:30px; }\n.d1-muen-san-workshop[_ngcontent-%COMP%] { margin-top:16px; }\n.d1-muen-san-photos[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }\n.d1-muen-san-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; }\n.d1-muen-san-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display:block; width:100%; height:130px; object-fit:cover; }\n.d1-muen-san-workshop[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin:10px 0 0; color:#173d71; font-size:14px; font-weight:700; line-height:1.5; }\n.d1-thai-music-activities[_ngcontent-%COMP%]    > .d1-muen-san-workshop[_ngcontent-%COMP%]    + .d1-muen-san-workshop[_ngcontent-%COMP%] { margin-top:18px; padding-top:18px; border-top:1px solid var(--navy-100); }\n.d1-health-activities[_ngcontent-%COMP%] { margin-top:34px; }\n.d1-health-activities[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] { margin:0 0 16px; color:#fff; font-size:24px; font-weight:900; line-height:1.4; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-safety-support[_ngcontent-%COMP%] { margin-top:34px; }\n.d1-safety-support[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] { max-width:780px; }\n.d1-safety-activities[_ngcontent-%COMP%] { margin-top:30px; }\n.d1-safety-activities[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] { margin:0 0 16px; color:#fff; font-size:24px; font-weight:900; line-height:1.4; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-tech-award-photos[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; margin-top:12px; }\n.d1-tech-award-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:#fff; }\n.d1-tech-award-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display:block; width:100%; height:130px; object-fit:cover; }\n.d1-tech-award-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:only-child { grid-column:1 / -1; }\n@media (max-width:560px) { .d1-tech-award-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height:170px; } }\n\n\n\n.d1-onet-highlight[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px solid rgba(212, 165, 55, .75);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 16px 38px rgba(8, 21, 47, .24);\n}\n.d1-onet-highlight-head[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.d1-onet-highlight-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 4px 10px;\n  color: var(--navy-800);\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: var(--gold-100);\n}\n.d1-onet-highlight[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 8px 0 5px; color: var(--navy-900); font-size: clamp(20px, 2.3vw, 28px); line-height: 1.25; }\n.d1-onet-highlight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: var(--ink-mute); font-size: 15.5px; line-height: 1.55; }\n.d1-onet-option[_ngcontent-%COMP%] { margin-top: 22px; }\n.d1-onet-option-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 12px;\n  padding: 5px 10px;\n  color: var(--navy-800);\n  font-size: 14px;\n  font-weight: 800;\n  border-radius: 8px;\n  background: var(--navy-50);\n}\n.d1-onet-option--row[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 18px; }\n\n\n[_nghost-%COMP%]     .d1-onet-option--row .chart-card { min-height: 430px; }\n[_nghost-%COMP%]     .d1-onet-option--row .chart-svg { min-height: 270px; }\n\n\n\n.d1-onet-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 2px 2px 14px;\n  scrollbar-color: var(--navy-300) transparent;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n}\n.d1-onet-scroll-track[_ngcontent-%COMP%] { display: flex; gap: 18px; width: max-content; }\n.d1-onet-scroll-track[_ngcontent-%COMP%]    > app-bar-chart[_ngcontent-%COMP%] {\n  display: block;\n  flex: 0 0 min(720px, calc(100vw - 100px));\n  scroll-snap-align: start;\n}\n[_nghost-%COMP%]     .d1-onet-option--scroll .chart-card { min-height: 490px; }\n[_nghost-%COMP%]     .d1-onet-option--scroll .chart-svg { min-height: 300px; }\n@media (max-width: 560px) { .d1-onet-highlight[_ngcontent-%COMP%] { padding: 16px; } }\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  .d1-video[_ngcontent-%COMP%] { display: none; }\n  .d1-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n\n\n\n.d1-topic-title[_ngcontent-%COMP%], \n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n\n\n\n[_nghost-%COMP%]     .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n\n\n[_nghost-%COMP%]     .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item p { color: #ffffff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .bullets > li { color: #ffffff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .card .bullets > li, \n[_nghost-%COMP%]     .card .step-item h4, \n[_nghost-%COMP%]     .card .step-item p { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .sec-lead { color: var(--ink-soft); }\n\n\n\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     .callout *, \n[_nghost-%COMP%]     app-cycle-flow * {\n  text-shadow: none !important;\n  filter: none !important;\n}\n\n\n\n[_nghost-%COMP%]     .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .card .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n[_nghost-%COMP%]     .card-title { color: var(--navy-900); }\n\n\n\n\n\n[_nghost-%COMP%]     img { cursor: zoom-in; }\n\n.d1-zoom[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 240;\n  display: grid;\n  place-content: center;\n  gap: 14px;\n  padding: 28px;\n  padding-top: max(28px, env(safe-area-inset-top));\n  padding-bottom: max(28px, env(safe-area-inset-bottom));\n  background: rgba(8, 21, 47, .93);\n  cursor: zoom-out;\n  animation: _ngcontent-%COMP%_d1ZoomIn .18s var(--ease);\n}\n.d1-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: min(1200px, 94vw);\n  max-height: 80vh;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .5);\n}\n.d1-zoom-cap[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: min(1200px, 94vw);\n  color: #e8f0ff;\n  font-size: 17px;\n  line-height: 1.7;\n  text-align: center;\n}\n.d1-zoom-close[_ngcontent-%COMP%] {\n  position: fixed;\n  top: max(16px, env(safe-area-inset-top));\n  right: max(16px, env(safe-area-inset-right));\n  width: 48px;\n  height: 48px;\n  border: 0;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  background: rgba(255, 255, 255, .16);\n  cursor: pointer;\n}\n@keyframes _ngcontent-%COMP%_d1ZoomIn { from { opacity: 0; } to { opacity: 1; } }\n@media (prefers-reduced-motion: reduce) { .d1-zoom[_ngcontent-%COMP%] { animation: none; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension1Component, [{
        type: Component,
        args: [{ selector: 'app-dimension1', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent, AwardsPreviewComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
                    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent, StudentQualityWheelComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1A\u0E17\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section d1-intro\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent intro-glass\" appReveal style=\"margin-bottom:32px\">\n      <p style=\"text-indent: 2em;\">\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E27\u0E48\u0E32<strong>\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\n          \u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19</strong></p>\n      <p style=\"text-indent: 2em;\">\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E36\u0E07\u0E21\u0E38\u0E48\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 \u0E21\u0E35\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E19\u0E30\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\n        \u0E21\u0E35\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21\n        \u0E41\u0E25\u0E30\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35 \u0E21\u0E35\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E27\u0E30\u0E17\u0E35\u0E48\u0E14\u0E35 \u0E17\u0E31\u0E01\u0E29\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21 \u0E17\u0E31\u0E01\u0E29\u0E30\u0E14\u0E49\u0E32\u0E19\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E41\u0E25\u0E30\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\n        \u0E17\u0E31\u0E01\u0E29\u0E30\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E41\u0E25\u0E30\u0E2D\u0E32\u0E0A\u0E35\u0E1E \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E27\u0E34\u0E08\u0E32\u0E23\u0E13\u0E0D\u0E32\u0E13 \u0E21\u0E35\u0E40\u0E2B\u0E15\u0E38\u0E1C\u0E25 \u0E21\u0E35\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E30\u0E1A\u0E1A\n        \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E2D\u0E37\u0E48\u0E19</p>\n      <p style=\"text-indent: 2em;\">\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D <strong>\u201C\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u201D\n          \u0E17\u0E35\u0E48\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E48\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08</strong></p>\n      <p style=\"text-indent: 2em;\">\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E40\u0E23\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E48\u0E32 <strong>\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E38\u0E01\u0E04\u0E19\u0E04\u0E37\u0E2D\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E2D\u0E19\u0E32\u0E04\u0E15\n          \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\n          \u0E04\u0E37\u0E2D\u0E1E\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E25\u0E47\u0E14\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15 \u0E07\u0E2D\u0E01\u0E07\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E07\u0E14\u0E07\u0E32\u0E21\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E2A\u0E31\u0E07\u0E04\u0E21\u0E2A\u0E37\u0E1A\u0E44\u0E1B</strong></p>\n    </div>\n  </div>\n</section>\n\n<!-- \u0E42\u0E21\u0E40\u0E14\u0E25\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19: \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/student-quality-overview.html -->\n<section class=\"section d1-student-quality-model\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"d1-student-quality-model-frame\" appReveal>\n      <iframe src=\"/models/student-quality-overview.html?v=20260916-6\" title=\"\u0E42\u0E21\u0E40\u0E14\u0E25\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\" loading=\"lazy\" scrolling=\"no\"\n        [style.height.px]=\"studentQualityModelHeight()\"></iframe>\n    </div>\n  </div>\n</section>\n\n<!-- \u0E27\u0E07\u0E25\u0E49\u0E2D\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19: \u0E2A\u0E23\u0E38\u0E1B\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 1.1 \u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D -->\n<section class=\"section d1-quality-wheel\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">ACADEMIC MODEL</h2>\n      <div class=\"sec-rule\"></div>\n      <p class=\"sec-lead\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u2014 \u0E41\u0E15\u0E30\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14</p>\n    </div>\n    <app-student-quality-wheel appReveal></app-student-quality-wheel>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E21\u0E35\u0E41\u0E15\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E02\u0E22\u0E31\u0E1A -->\n<div class=\"d1-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d1-video\" autoplay muted loop playsinline preload=\"auto\" poster=\"video/school-poster.jpg\"\n    (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d1-veil\"></div>\n</div>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E25\u0E31\u0E01\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E36\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19 -->\n<nav class=\"d1-side-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\">\n  <ng-container *ngFor=\"let g of groups\">\n    <button type=\"button\" class=\"d1-side-nav-btn\" [class.is-on]=\"tab() === g.key\" (click)=\"selectGroup(g.key)\"\n      [attr.aria-label]=\"g.key + ' ' + g.title\">\n      <span class=\"d1-side-nav-no\">{{ g.key }}</span>\n      <span class=\"d1-side-nav-tip\">{{ g.title }}</span>\n    </button>\n    <div class=\"d1-side-subnav\" [class.is-open]=\"tab() === g.key\">\n      <div class=\"d1-side-subnav-inner\">\n        <button type=\"button\" class=\"d1-side-nav-btn is-sub\" *ngFor=\"let t of topicsOf(g.key)\"\n          [class.is-current]=\"open() === t.key\" [class.is-empty]=\"!t.ready\" [disabled]=\"!t.ready\"\n          (click)=\"select(t.key)\" [attr.aria-label]=\"t.key + ' ' + t.title\">\n          <span class=\"d1-side-nav-no\">{{ t.key }}</span>\n          <span class=\"d1-side-nav-tip\">{{ t.title }}</span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n  <button type=\"button\" class=\"d1-side-nav-btn d1-side-nav-back\" *ngIf=\"open()\" (click)=\"backToIndex()\"\n    aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\">\n    <span class=\"d1-side-nav-no\" aria-hidden=\"true\">\u21B6</span>\n    <span class=\"d1-side-nav-tip\">\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1</span>\n  </button>\n</nav>\n\n<section class=\"section d1-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\n      \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14 1.1 \u0E2B\u0E23\u0E37\u0E2D 1.2 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E22\u0E48\u0E2D\u0E22 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E23\u0E32\u0E1F \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\n    </p>\n\n    <div class=\"d1-tabs\" role=\"tablist\">\n      <div id=\"d1-group-1-1\" class=\"d1-tab-group\">\n        <button type=\"button\" class=\"d1-tab\" role=\"tab\" [class.is-on]=\"tab() === '1.1'\"\n          [attr.aria-selected]=\"tab() === '1.1'\" [attr.aria-expanded]=\"tab() === '1.1'\" (click)=\"toggleTab('1.1')\">\n          <span class=\"d1-tab-no\">1.1</span>\n          <span class=\"d1-tab-text\">\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23<small>8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14</small></span>\n        </button>\n        <div class=\"d1-grid\" *ngIf=\"tab() === '1.1'\">\n          <button type=\"button\" class=\"d1-card\" *ngFor=\"let t of topicsOf('1.1'); let i = index\"\n            [class.is-empty]=\"!t.ready\" [disabled]=\"!t.ready\" appReveal=\"zoom\" [revealDelay]=\"i * 60\"\n            (click)=\"select(t.key)\">\n            <span class=\"d1-card-top\"><span class=\"d1-no\">{{ t.key }}</span></span>\n            <span class=\"d1-title\">{{ t.title }}</span>\n            <span class=\"d1-note\">{{ t.note }}</span>\n            <span class=\"d1-go\" *ngIf=\"t.ready\">\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\n              <svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"\n                stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                <path d=\"M5 12h14M12 5l7 7-7 7\" />\n              </svg>\n            </span>\n          </button>\n        </div>\n      </div>\n      <div id=\"d1-group-1-2\" class=\"d1-tab-group\">\n        <button type=\"button\" class=\"d1-tab\" role=\"tab\" [class.is-on]=\"tab() === '1.2'\"\n          [attr.aria-selected]=\"tab() === '1.2'\" [attr.aria-expanded]=\"tab() === '1.2'\" (click)=\"toggleTab('1.2')\">\n          <span class=\"d1-tab-no\">1.2</span>\n          <span class=\"d1-tab-text\">\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C<small>8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14</small></span>\n        </button>\n        <div class=\"d1-grid\" *ngIf=\"tab() === '1.2'\">\n          <button type=\"button\" class=\"d1-card\" *ngFor=\"let t of topicsOf('1.2'); let i = index\"\n            [class.is-empty]=\"!t.ready\" [disabled]=\"!t.ready\" appReveal=\"zoom\" [revealDelay]=\"i * 60\"\n            (click)=\"select(t.key)\">\n            <span class=\"d1-card-top\"><span class=\"d1-no\">{{ t.key }}</span></span>\n            <span class=\"d1-title\">{{ t.title }}</span>\n            <span class=\"d1-note\">{{ t.note }}</span>\n            <span class=\"d1-go\" *ngIf=\"t.ready\">\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\n              <svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"\n                stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n                <path d=\"M5 12h14M12 5l7 7-7 7\" />\n              </svg>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 \u0E27\u0E32\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E2D\u0E07\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D -->\n<section class=\"section-tight d1-detail-head\" *ngIf=\"open()\">\n  <div class=\"wrap\">\n    <button type=\"button\" class=\"d1-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1</button>\n  </div>\n</section>\n\n<ng-template #d1Indicator>\n  <div class=\"assessment-indicators assessment-indicators--single\" *ngIf=\"current as topic\">\n    <h3>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h3>\n    <ol>\n      <li>{{ topic.title }}</li>\n    </ol>\n  </div>\n</ng-template>\n\n<!-- \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D: \u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07 -->\n<ng-template #d1Narrative let-text=\"text\">\n  <div class=\"d1-narrative\" appReveal>\n    <!-- \u0E16\u0E49\u0E32 narrative \u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E22\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32 [{ text: '...' }] \u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E25\u0E30\u0E22\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32; \u0E16\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E01\u0E47\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E32\u0E21\u0E40\u0E14\u0E34\u0E21 -->\n    <ng-container *ngIf=\"text[0]?.text; else singleNarrative\">\n      <p *ngFor=\"let paragraph of text\">\n        <strong *ngIf=\"paragraph.strong; else normalNarrative\">{{ paragraph.text }}</strong>\n        <ng-template #normalNarrative>{{ paragraph.text }}</ng-template>\n      </p>\n    </ng-container>\n    <ng-template #singleNarrative>\n      <p>{{ text }}</p>\n    </ng-template>\n  </div>\n</ng-template>\n\n<!-- \u2500\u2500 1.1.1 O-NET \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.1'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.1\" [title]=\"onetTitle\" />\n      <div class=\"d1-onet-narrative\" appReveal>\n        <p *ngFor=\"let paragraph of d.section11.onet.narrative\">\n          <strong *ngIf=\"paragraph.strong; else normalParagraph\">{{ paragraph.text }}</strong>\n          <ng-template #normalParagraph>{{ paragraph.text }}</ng-template>\n        </p>\n      </div>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack\">\n        <div class=\"d1-onet-highlight\" appReveal>\n          <div class=\"d1-onet-highlight-head\">\n            <span>\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19</span>\n            <h3>\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35</h3>\n            <p>\u0E04\u0E31\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E17\u0E35\u0E48\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E21\u0E35\u0E04\u0E30\u0E41\u0E19\u0E19\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32</p>\n          </div>\n          <!-- \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 A: \u0E16\u0E49\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A B \u0E43\u0E2B\u0E49\u0E25\u0E1A\u0E1A\u0E25\u0E47\u0E2D\u0E01 .d1-onet-option--row \u0E19\u0E35\u0E49\u0E17\u0E31\u0E49\u0E07\u0E1A\u0E25\u0E47\u0E2D\u0E01 -->\n          <div class=\"d1-onet-option d1-onet-option--row\">\n            <div class=\"d1-onet-option-label\">\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 A \u00B7 \u0E01\u0E23\u0E32\u0E1F 3 \u0E43\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07</div>\n            <div class=\"grid grid-3\">\n              <app-bar-chart *ngFor=\"let chart of onetHighlights\" [title]=\"chart.title\" [subtitle]=\"chart.subtitle\"\n                [labels]=\"d.section11.onet.m6.years\" [series]=\"chart.series\" [max]=\"60\" valueFormat=\"1.2-2\"\n                [valueFontSize]=\"12\" [note]=\"chart.note\" />\n            </div>\n          </div>\n        </div>\n\n        <!-- \u0E21.6 \u2014 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E44\u0E14\u0E49 -->\n        <app-onet-chart title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n          subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\" [years]=\"d.section11.onet.m6.years\"\n          [subjects]=\"d.section11.onet.m6.subjects\" evidenceLabel=\"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25 O-NET\"\n          [evidenceLinks]=\"onetEvidenceLinks\" [note]=\"d.section11.onet.m6.conclusion\" />\n\n        <app-data-table [caption]=\"d.section11.onet.m6.caption\" [headers]=\"onetHeaders\" [rows]=\"m6Rows\" />\n\n        <!-- \u0E21.3 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23 -->\n        <app-bar-chart title=\"\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3\" subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n          [labels]=\"d.section11.onet.m3Trend.years\" [series]=\"m3TrendBars\" [showEvidence]=\"true\"\n          [note]=\"d.section11.onet.m3Trend.conclusion + '  ' + d.section11.onet.m3Trend.footnote\" />\n\n        <app-callout label=\"\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:\" [gold]=\"true\">\n          \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\n          (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34\n          \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35\n        </app-callout>\n\n        <app-data-table [caption]=\"d.section11.onet.m3.caption\" [headers]=\"onetHeaders\" [rows]=\"m3Rows\" />\n\n        <app-onet-chart title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n          subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\" [years]=\"d.section11.onet.m3.years\"\n          [subjects]=\"d.section11.onet.m3.subjects\" evidenceLabel=\"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25 O-NET\"\n          [evidenceLinks]=\"onetEvidenceLinks\" [note]=\"d.section11.onet.m3.conclusion\" />\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.2 \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.2'\">\n  <section class=\"section section-alt\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.2\" [title]=\"thaiTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.thai.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack\">\n        <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\"\n          subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"d.section11.thai.years\" [series]=\"thaiBars\"\n          [max]=\"100\" [valueFontSize]=\"10\" [note]=\"d.section11.thai.conclusion\" />\n\n        <app-data-table [caption]=\"d.section11.thai.caption\" [headers]=\"yearHeaders3\" [rows]=\"thaiRows\" />\n      </div>\n\n      <div class=\"grid grid-2\" style=\"margin-top:24px\">\n        <div class=\"card\" appReveal=\"left\">\n          <h3 class=\"card-title\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C</h3>\n          <div class=\"d1-english-activities\">\n            <article class=\"d1-english-activity\" *ngFor=\"let activity of thaiActivities\">\n              <h4>{{ activity.title }}</h4>\n              <div class=\"d1-english-photos\">\n                <figure *ngFor=\"let image of activity.images\">\n                  <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n                </figure>\n              </div>\n            </article>\n          </div>\n        </div>\n        <div class=\"card card-gold\" appReveal=\"right\">\n          <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07</h3>\n          <div class=\"d1-english-awards\">\n            <article class=\"d1-english-award\" *ngFor=\"let award of thaiAwards\">\n              <h4>{{ award.title }}</h4>\n              <img [src]=\"award.image\" [alt]=\"award.title\" loading=\"lazy\">\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.3 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.3'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.3\" [title]=\"engTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.english.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"d.section11.english.years\" [series]=\"engSeries\"\n        [note]=\"d.section11.english.conclusion\" />\n\n      <div class=\"grid grid-2\" style=\"margin-bottom:24px\">\n        <div class=\"card\" appReveal=\"left\">\n          <h3 class=\"card-title\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n          <div class=\"d1-english-activities\">\n            <article class=\"d1-english-activity\" *ngFor=\"let activity of englishActivities\">\n              <h4>{{ activity.title }}</h4>\n              <div class=\"d1-english-photos\">\n                <figure *ngFor=\"let image of activity.images\">\n                  <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n                </figure>\n              </div>\n            </article>\n          </div>\n        </div>\n        <div class=\"card card-gold\" appReveal=\"right\">\n          <h3 class=\"card-title\">\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n          <div class=\"d1-english-awards\">\n            <article class=\"d1-english-award\" *ngFor=\"let award of englishAwards\">\n              <h4>{{ award.title }}</h4>\n              <img [src]=\"award.image\" [alt]=\"award.title\" loading=\"lazy\">\n            </article>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"margin-top:22px\">\n        <app-data-table [caption]=\"d.section11.english.caption\" [headers]=\"gradeHeaders\" [rows]=\"engRows\"\n          [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.english.average\" />\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.4 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.4'\">\n  <section class=\"section section-alt\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.4\" [title]=\"thinkTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.thinking.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack\">\n        <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n          subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"isYears\" [series]=\"isSeries\"\n          [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.thinking.isAverage + ' \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19'\" />\n\n        <app-line-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\"\n          subtitle=\"\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"d.section11.thinking.years\" [series]=\"readSeries\"\n          [min]=\"80\" [max]=\"100\" [note]=\"d.section11.thinking.conclusion\" />\n\n        <app-data-table [caption]=\"d.section11.thinking.readCaption\" [headers]=\"readHeaders\" [rows]=\"readRows\" />\n\n        <div class=\"card\" appReveal>\n          <h3 class=\"card-title\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E04\u0E34\u0E14 \u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E1C\u0E25\u0E07\u0E32\u0E19</h3>\n          <div class=\"d1-english-activities\">\n            <article class=\"d1-english-activity\" *ngFor=\"let activity of thinkingActivities\">\n              <h4>{{ activity.title }}</h4>\n              <div class=\"d1-english-photos\" [class.d1-photos-3]=\"activity.images.length === 3\">\n                <figure *ngFor=\"let image of activity.images\">\n                  <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n                </figure>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.5 ICT \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.5'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.5\" [title]=\"ictTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.ict.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"grid grid-2\">\n        <div>\n          <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n            subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"d.section11.ict.years\" [series]=\"ictSeries\"\n [note]=\"d.section11.ict.conclusion\" />\n        </div>\n\n        <div class=\"card card-gold\" appReveal=\"right\">\n          <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35</h3>\n          <div class=\"steps\" style=\"margin-top:16px\">\n            <div class=\"step-item\" *ngFor=\"let a of d.section11.ict.awards\">\n              <h4>{{ a.name }}</h4>\n              <p>{{ a.award }}</p>\n              <div class=\"chip-row\" style=\"margin-top:8px\">\n                <span class=\"chip chip-gold\">{{ a.level }}</span>\n                <span class=\"chip\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ a.year }}</span>\n              </div>\n              <p style=\"font-size:14.5px;color:#6b7a94;margin-top:6px\">{{ a.org }}</p>\n              <div class=\"d1-tech-award-photos\" *ngIf=\"a.photos?.length\">\n                <figure *ngFor=\"let photo of a.photos\">\n                  <img [src]=\"photo\" [alt]=\"a.name\" loading=\"lazy\">\n                </figure>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.6 \u0E04\u0E27\u0E32\u0E21\u0E01\u0E49\u0E32\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E32\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.6'\">\n  <section class=\"section section-alt\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.6\" [title]=\"curriculumProgressTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.curriculumProgress.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack\">\n        <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E40\u0E01\u0E23\u0E14 3\u20134)\"\n          subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [labels]=\"d.section11.curriculumProgress.years\"\n          [series]=\"curriculumProgressBars\" [max]=\"100\" [valueFontSize]=\"9\"\n          [note]=\"d.section11.curriculumProgress.conclusion\" />\n        <app-data-table [caption]=\"d.section11.curriculumProgress.caption\" [headers]=\"curriculumProgressHeaders\"\n          [rows]=\"curriculumProgressRows\" />\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.7 \u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.7'\">\n  <section class=\"section section-alt\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.7\" [title]=\"pathTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.pathway.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"d1-pathway-images\" appReveal>\n        <figure>\n          <img src=\"/evidence/1.1.7/pathway-m3-infographic.png\" alt=\"\u0E2D\u0E34\u0E19\u0E42\u0E1F\u0E01\u0E23\u0E32\u0E1F\u0E34\u0E01\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E21.3\" />\n          <figcaption>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D \u0E21.3</figcaption>\n        </figure>\n        <figure>\n          <img src=\"/evidence/1.1.7/pathway-m6.jpg\" alt=\"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E21.6\" />\n          <figcaption>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D \u0E21.6</figcaption>\n        </figure>\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 1.2 \u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<ng-container *ngIf=\"open() === '1.2.1'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.1\" title=\"\u0E04\u0E38\u0E13\u0E18\u0E23\u0E23\u0E21 \u0E08\u0E23\u0E34\u0E22\u0E18\u0E23\u0E23\u0E21 \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21 \u0E41\u0E25\u0E30\u0E08\u0E34\u0E15\u0E2A\u0E33\u0E19\u0E36\u0E01\u0E16\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E27\u0E21\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.lead }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack d1-desired-meter\">\n        <app-meter-list [title]=\"'\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19'\"\n          subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\" [rows]=\"desiredMeters\" [max]=\"100\"\n [note]=\"d.section12.desired.conclusion\" />\n\n        <app-data-table [caption]=\"d.section12.desired.caption\" [headers]=\"desiredHeaders\" [rows]=\"desiredRows\" />\n\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.3 \u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.3'\">\n  <section class=\"section section-alt\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.3\" [title]=\"electionTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.election.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"stack\">\n        <app-bar-chart title=\"\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n          subtitle=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)\"\n          [labels]=\"d.section12.election.years\" [series]=\"electionSeries\" valueFormat=\"1.0-0\"\n          [note]=\"d.section12.election.conclusion\" />\n\n        <app-line-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\" subtitle=\"\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80\"\n          [labels]=\"d.section12.election.years\" [series]=\"electionPctSeries\" [min]=\"70\" [max]=\"100\" />\n      </div>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.7 \u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.7'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.7\" [title]=\"healthTitle\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.health.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n\n      <div class=\"grid grid-2\">\n        <div>\n          <app-bar-chart title=\"\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\" subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n            [labels]=\"d.section12.health.years\" [series]=\"fitSeries\" [showValues]=\"false\"\n            note=\"\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32\" />\n        </div>\n\n        <div>\n          <app-bar-chart title=\"\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\" subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n            [labels]=\"d.section12.health.years\" [series]=\"bodySeries\" [showValues]=\"false\"\n            note=\"\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09\" />\n        </div>\n      </div>\n\n      <div style=\"margin-top:24px\">\n        <app-bar-chart title=\"\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\" subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n          [labels]=\"d.section12.health.years\" [series]=\"mindBars\" [max]=\"100\" valueFormat=\"1.2-2\"\n          [note]=\"d.section12.health.conclusion\" />\n      </div>\n      <section class=\"d1-health-activities\" appReveal>\n        <h3>\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E14\u0E49\u0E32\u0E19\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E</h3>\n        <div class=\"d1-environment-activities\">\n          <article class=\"d1-environment-activity\" *ngFor=\"let activity of healthActivities; let i = index\" appReveal=\"left\"\n            [revealDelay]=\"i * 70\">\n            <h4>{{ activity.title }}</h4>\n            <div class=\"d1-environment-photos\">\n              <figure *ngFor=\"let image of activity.images\">\n                <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n              </figure>\n            </div>\n          </article>\n        </div>\n      </section>\n    </div>\n  </section>\n</ng-container>\n\n\n<!-- \u2500\u2500 1.1.8 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.8'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.1.8\"\n        title=\"\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section11.excellence.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <app-kpi-grid [items]=\"excellenceKpis\" />\n      <div class=\"sec-head\" style=\"margin-top:44px\" appReveal>\n        <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E39\u0E48\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28</h3>\n        <div class=\"sec-rule\"></div>\n      </div>\n      <app-cycle-flow [steps]=\"d.section11.excellence.cycle\" />\n      <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\" style=\"display:block;margin-top:24px\">{{ d.section11.excellence.conclusion\n        }}</app-callout>\n\n      <app-awards-preview [count]=\"4\" from=\"/dimension-1\" topic=\"1.1.8\" [light]=\"true\" />\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.2 \u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.2'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.2\"\n        title=\"\u0E15\u0E23\u0E30\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.environment.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <div class=\"card card-gold\" appReveal style=\"margin-bottom:30px\">\n        <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ d.section12.environment.highlight }}</p>\n      </div>\n      <div class=\"sec-head\" appReveal>\n        <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23</h3>\n        <div class=\"sec-rule\"></div>\n      </div>\n      <div class=\"d1-environment-activities\">\n        <article class=\"d1-environment-activity\" *ngFor=\"let activity of environmentActivities; let i = index\" appReveal=\"left\"\n          [revealDelay]=\"i * 70\">\n          <h4>{{ activity.title }}</h4>\n          <div class=\"d1-environment-photos\">\n            <figure *ngFor=\"let image of activity.images\">\n              <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n            </figure>\n          </div>\n        </article>\n      </div>\n      <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section12.environment.conclusion }}</app-callout>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.4 \u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.4'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.4\"\n        title=\"\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A \u0E21\u0E38\u0E48\u0E07\u0E21\u0E31\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.teamwork.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <app-cycle-flow [steps]=\"d.section12.teamwork.cycle\" [expandAll]=\"true\" />\n      <div class=\"stack\" style=\"margin-top:44px\">\n        <app-line-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u201C\u0E1C\u0E48\u0E32\u0E19\u201D \u0E43\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\" subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n          [labels]=\"d.section12.teamwork.years\" [series]=\"teamSeries\" [min]=\"96\" [max]=\"100\"\n          [note]=\"d.section12.teamwork.note\" />\n        <app-data-table [caption]=\"d.section12.teamwork.caption\" [headers]=\"yearHeaders3\" [rows]=\"teamRows\" />\n      </div>\n      <h2 class=\"d1-student-development-title\" appReveal>\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19</h2>\n      <article class=\"d1-teamwork-curriculum\" appReveal>\n        <h3>\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E38\u0E01\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32</h3>\n        <p>\u0E40\u0E19\u0E49\u0E19\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E01\u0E25\u0E38\u0E48\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E07\u0E32\u0E19</p>\n        <div class=\"d1-teamwork-plan-grid\">\n          <figure *ngFor=\"let plan of teamworkCurriculumPlans\">\n            <img [src]=\"plan.image\" [alt]=\"plan.title\" loading=\"lazy\">\n            <figcaption>{{ plan.title }}</figcaption>\n          </figure>\n        </div>\n      </article>\n      <section class=\"d1-student-development\" appReveal>\n        <div class=\"d1-environment-activities\">\n          <article class=\"d1-environment-activity\" *ngFor=\"let activity of studentDevelopmentActivities; let i = index\"\n            appReveal=\"left\" [revealDelay]=\"i * 70\">\n            <h4>{{ activity.title }}</h4>\n            <div class=\"d1-environment-photos\">\n              <figure *ngFor=\"let image of activity.images\">\n                <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n              </figure>\n            </div>\n          </article>\n        </div>\n      </section>\n      <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\" style=\"display:block;margin-top:24px\">{{ d.section12.teamwork.conclusion\n        }}</app-callout>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.5 \u0E04\u0E27\u0E32\u0E21\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.5'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.5\" title=\"\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E19\u0E33\u0E20\u0E39\u0E21\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.thaiPride.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <div class=\"grid grid-3\">\n        <div class=\"card card-hover\" *ngFor=\"let pj of d.section12.thaiPride.projects; let i = index\" appReveal\n          [revealDelay]=\"i * 90\">\n          <div class=\"chip chip-gold\" style=\"margin-bottom:10px\" *ngIf=\"pj.value\">\n            \u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 {{ pj.value }}\n          </div>\n          <h3 class=\"card-title\">{{ pj.name }}</h3>\n          <p class=\"card-body\" style=\"margin:0\">{{ pj.text }}</p>\n          <div *ngIf=\"i === 0\" class=\"d1-muen-san-workshop\">\n            <div class=\"d1-muen-san-photos\">\n              <figure *ngFor=\"let image of muenSanWorkshopImages\">\n                <img [src]=\"image\" alt=\"\u0E17\u0E31\u0E28\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E2A\u0E32\u0E23\" loading=\"lazy\">\n              </figure>\n            </div>\n            <p>\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E31\u0E28\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 workshop \u0E15\u0E2D\u0E01\u0E25\u0E32\u0E22\u0E40\u0E07\u0E34\u0E19 \u0E13 \u0E0A\u0E38\u0E21\u0E0A\u0E19\u0E2B\u0E21\u0E37\u0E48\u0E19\u0E2A\u0E32\u0E23 \u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48</p>\n          </div>\n          <div *ngIf=\"i === 1\" class=\"d1-muen-san-workshop\">\n            <div class=\"d1-muen-san-photos\">\n              <figure *ngFor=\"let image of khokNongNaImages\">\n                <img [src]=\"image\" alt=\"\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32\" loading=\"lazy\">\n              </figure>\n            </div>\n            <p>\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E17\u0E33\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E13 \u0E41\u0E2B\u0E25\u0E48\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E42\u0E04\u0E01\u0E2B\u0E19\u0E2D\u0E07\u0E19\u0E32 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21 \u0E2D\u0E33\u0E40\u0E20\u0E2D\u0E40\u0E21\u0E37\u0E2D\u0E07 \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48</p>\n          </div>\n          <div *ngIf=\"i === 2\" class=\"d1-thai-music-activities\">\n            <section *ngFor=\"let activitySet of thaiMusicActivitySets\" class=\"d1-muen-san-workshop\">\n              <div class=\"d1-muen-san-photos\">\n                <figure *ngFor=\"let image of activitySet.images\">\n                  <img [src]=\"image\" alt=\"\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E14\u0E19\u0E15\u0E23\u0E35\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E14\u0E19\u0E15\u0E23\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07\" loading=\"lazy\">\n                </figure>\n              </div>\n              <p>{{ activitySet.caption }}</p>\n            </section>\n          </div>\n        </div>\n      </div>\n      <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\" style=\"display:block;margin-top:24px\">{{ d.section12.thaiPride.conclusion\n        }}</app-callout>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.6 \u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.6'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.6\" title=\"\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.confidence.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <div class=\"d1-environment-activities\">\n        <article class=\"d1-environment-activity\" *ngFor=\"let activity of confidenceActivities; let i = index\" appReveal=\"left\"\n          [revealDelay]=\"i * 70\">\n          <h4>{{ activity.title }}</h4>\n          <div class=\"d1-confidence-photos\">\n            <figure *ngFor=\"let image of activity.images\">\n              <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n            </figure>\n          </div>\n        </article>\n      </div>\n      <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\" style=\"display:block;margin-top:24px\">{{ d.section12.confidence.conclusion }}</app-callout>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.8 \u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14\u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.8'\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\" num=\"1.2.8\" title=\"\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14 \u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E32\u0E07\u0E40\u0E1E\u0E28 \u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14\" />\n      <ng-container [ngTemplateOutlet]=\"d1Narrative\"\n        [ngTemplateOutletContext]=\"{ text: d.section12.safety.narrative }\"></ng-container>\n      <ng-container [ngTemplateOutlet]=\"d1Indicator\"></ng-container>\n      <div class=\"stack d1-safety-chart\">\n        <app-bar-chart title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E44\u0E21\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\"\n          subtitle=\"\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E22\u0E34\u0E48\u0E07\u0E15\u0E48\u0E33\u0E22\u0E34\u0E48\u0E07\u0E14\u0E35)\" [labels]=\"d.section12.safety.years\"\n          [series]=\"safetyBars\" [max]=\"100\" [valueFontSize]=\"10\" [note]=\"d.section12.safety.conclusion\" />\n        <app-data-table [caption]=\"d.section12.safety.caption\" [headers]=\"yearHeaders3\" [rows]=\"safetyRows\" />\n      </div>\n      <div class=\"d1-safety-support\">\n        <div class=\"card card-accent\" appReveal>\n          <h3 class=\"card-title\">\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</h3>\n          <p class=\"card-body\">\n            \u0E04\u0E23\u0E39\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07\n            \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E14\u0E39\u0E41\u0E25 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E32\u0E21\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E04\u0E25\n            \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E04\u0E33\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E2B\u0E15\u0E38 \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\n          </p>\n          <p class=\"card-body\" style=\"margin-bottom:0\">\n            \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E0A\u0E38\u0E21\u0E0A\u0E19 \u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E35\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\n            \u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\n          </p>\n        </div>\n      </div>\n      <section class=\"d1-safety-activities\" appReveal>\n        <h3>\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23</h3>\n        <div class=\"d1-environment-activities\">\n          <article class=\"d1-environment-activity\" *ngFor=\"let activity of safetyActivities; let i = index\" appReveal=\"left\"\n            [revealDelay]=\"i * 70\">\n            <h4>{{ activity.title }}</h4>\n            <div class=\"d1-environment-photos\">\n              <figure *ngFor=\"let image of activity.images\">\n                <img [src]=\"image\" [alt]=\"activity.title\" loading=\"lazy\">\n              </figure>\n            </div>\n          </article>\n        </div>\n      </section>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u0E44\u0E1B\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 / \u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B -->\n<section class=\"section-tight\" *ngIf=\"open()\">\n  <div class=\"wrap d1-nav\" [class.only-next]=\"!prevTopic && !!nextTopic\">\n    <button type=\"button\" class=\"d1-nav-btn\" *ngIf=\"prevTopic as pv\" [disabled]=\"!pv.ready\" (click)=\"select(pv.key)\">\n      <span class=\"d1-nav-txt\">{{ pv.key }} {{ pv.title }}</span>\n      <span class=\"d1-nav-lab\">\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32</span>\n    </button>\n    <button type=\"button\" class=\"d1-nav-btn next\" *ngIf=\"nextTopic as nx\" [disabled]=\"!nx.ready\"\n      (click)=\"select(nx.key)\">\n      <span class=\"d1-nav-txt\">{{ nx.key }} {{ nx.title }}</span>\n      <span class=\"d1-nav-lab\">\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B</span>\n    </button>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\" [items]=\"gallery\"\n      [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section-tight section-alt\">\n  <div class=\"wrap\">\n    <app-pager nextPath=\"/dimension-2\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\" />\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n\n<!-- \u0E0A\u0E31\u0E49\u0E19\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21: \u0E41\u0E15\u0E30\u0E17\u0E35\u0E48\u0E20\u0E32\u0E1E\u0E43\u0E14\u0E01\u0E47\u0E44\u0E14\u0E49\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14 \u0E41\u0E15\u0E30\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E14 Esc \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14 -->\n<div class=\"d1-zoom\" *ngIf=\"zoom() as z\" (click)=\"closeZoom()\" role=\"dialog\" aria-modal=\"true\">\n  <button type=\"button\" class=\"d1-zoom-close\" aria-label=\"\u0E1B\u0E34\u0E14\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\">&#10005;</button>\n  <img [src]=\"z.src\" [alt]=\"z.cap\" />\n  <p class=\"d1-zoom-cap\" *ngIf=\"z.cap\">{{ z.cap }}</p>\n</div>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u0E25\u0E14\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1A\u0E17\u0E19\u0E33\u0E01\u0E31\u0E1A\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D */\n.d1-intro { padding-bottom: 28px; }\n.d1-index { padding-top: 36px; }\n.assessment-indicators--single { margin-bottom: 30px; }\n\n/* \u0E42\u0E21\u0E40\u0E14\u0E25\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E1D\u0E31\u0E07\u0E08\u0E32\u0E01\u0E44\u0E1F\u0E25\u0E4C HTML \u0E41\u0E22\u0E01 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A */\n.d1-student-quality-model { padding-top: 4px; padding-bottom: 0; }\n.d1-student-quality-model-frame { overflow: hidden; background: transparent; }\n.d1-student-quality-model-frame iframe { display: block; width: 100%; border: 0; background: transparent; }\n.d1-quality-wheel { padding-top: 18px; }\n\n/* \u0E02\u0E49\u0E2D 1.2.1: \u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E41\u0E16\u0E1A\u0E2A\u0E14\u0E43\u0E2A\u0E43\u0E2B\u0E49\u0E41\u0E22\u0E01\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35 */\n:host ::ng-deep .d1-desired-meter .meter-track { height: 14px; background: rgba(255,255,255,.26); box-shadow: inset 0 0 0 1px rgba(255,255,255,.24); }\n:host ::ng-deep .d1-desired-meter .meter-fill { box-shadow: 0 3px 10px rgba(17,45,100,.22); }\n:host ::ng-deep .d1-desired-meter .meter-name { font-weight: 800; }\n\n/* \u0E02\u0E49\u0E2D 1.2.8: \u0E25\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E43\u0E19\u0E01\u0E23\u0E32\u0E1F\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E41\u0E25\u0E30\u0E1B\u0E49\u0E32\u0E22\u0E1B\u0E35\u0E0A\u0E19\u0E01\u0E31\u0E19 */\n:host ::ng-deep .d1-safety-chart .axis-text { font-size: 11px; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d1-tabs { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 20px; }\n.d1-tab-group { display: grid; gap: 14px; scroll-margin-top: 18px; }\n\n.d1-tab {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 64px;\n  padding: 9px 16px;\n  text-align: left;\n  font-family: inherit;\n  color: var(--ink-soft);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease),\n              border-color .2s var(--ease), background .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-tab:active { transform: scale(.98); }\n\n.d1-tab-no {\n  display: grid;\n  place-items: center;\n  width: 46px; height: 46px;\n  flex: none;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 14px;\n  background: var(--navy-50);\n}\n\n.d1-tab-text { font-size: 18px; font-weight: 800; color: var(--navy-900); line-height: 1.35; }\n.d1-tab-text small { display: block; margin-top: 3px; font-size: 14.5px; font-weight: 600; color: var(--ink-mute); }\n\n.d1-tab.is-on {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .32);\n}\n.d1-tab.is-on .d1-tab-no { background: rgba(255, 255, 255, .18); color: #fff; }\n.d1-tab.is-on .d1-tab-text { color: #fff; }\n.d1-tab.is-on .d1-tab-text small { color: #cfe0fa; }\n\n/* ---------- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 ---------- */\n.d1-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }\n\n.d1-card {\n  display: grid;\n  align-content: start;\n  gap: 7px;\n  padding: 14px 16px 16px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease), border-color .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d1-card:hover:not(:disabled) {\n    transform: translateY(-6px);\n    border-color: var(--navy-200);\n    box-shadow: var(--shadow-lg);\n  }\n  .d1-card:hover:not(:disabled) .d1-go { color: var(--gold-600); }\n}\n\n.d1-card.is-empty { opacity: .55; cursor: not-allowed; }\n\n.d1-card-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }\n\n.d1-no {\n  padding: 5px 12px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n  font-variant-numeric: tabular-nums;\n}\n\n.d1-stat {\n  color: var(--navy-800);\n  font-size: 27px;\n  font-weight: 800;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.d1-stat small { margin-left: 3px; font-size: 14px; font-weight: 700; color: var(--ink-mute); }\n\n.d1-title { color: var(--navy-900); font-size: 16px; font-weight: 800; line-height: 1.42; }\n.d1-note { color: var(--ink-mute); font-size: 14px; line-height: 1.5; }\n\n.d1-go {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n  color: var(--navy-600);\n  font-size: 14.5px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n/* ---------- \u0E1B\u0E38\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 / \u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B ---------- */\n.d1-nav { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }\n.d1-nav.only-next .next { grid-column: 2; }\n\n.d1-nav-btn {\n  display: grid;\n  gap: 5px;\n  padding: 18px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-nav-btn.next { text-align: right; }\n.d1-nav-btn:disabled { opacity: .45; cursor: not-allowed; }\n@media (hover: hover) { .d1-nav-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--shadow-md); } }\n\n.d1-nav-lab { color: var(--ink-mute); font-size: 14px; font-weight: 700; }\n.d1-nav-txt { color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n\n/* \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1: \u0E40\u0E23\u0E34\u0E48\u0E21\u0E14\u0E49\u0E27\u0E22 1.1/1.2 \u0E41\u0E25\u0E49\u0E27\u0E40\u0E1C\u0E22\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E15\u0E32\u0E21\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 */\n.d1-side-nav {\n  position: fixed;\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  z-index: 60;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  max-width: calc(100vw - 28px);\n}\n\n.d1-side-nav-btn {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: var(--navy-700);\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  transition: transform .18s var(--ease), background .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-side-nav-btn:active { transform: scale(.94); }\n.d1-side-nav-btn:disabled { opacity: .52; cursor: not-allowed; }\n.d1-side-nav-no { font-size: 14.5px; font-weight: 800; font-variant-numeric: tabular-nums; }\n.d1-side-nav-btn.is-on,\n.d1-side-nav-btn.is-current {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d1-side-nav-back {\n  color: #fff;\n  font-size: 27px;\n  border-color: var(--gold-400);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(8, 21, 47, .42);\n}\n.d1-side-nav-btn.is-sub { width: 44px; height: 44px; margin-left: 0; }\n.d1-side-subnav {\n  display: grid;\n  flex: 0 1 auto;\n  width: 0;\n  grid-template-columns: minmax(0, 1fr);\n  opacity: 0;\n  transform: translateX(-12px);\n  transform-origin: left center;\n  overflow: hidden;\n  transition: width .28s var(--ease), opacity .2s var(--ease), transform .28s var(--ease);\n}\n.d1-side-subnav.is-open { width: min(380px, calc(100vw - 132px)); opacity: 1; transform: translateX(0); }\n.d1-side-subnav-inner {\n  display: grid;\n  gap: 4px;\n  grid-auto-flow: column;\n  grid-template-rows: 44px;\n  grid-auto-columns: 44px;\n  min-width: 0;\n  min-height: 0;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.d1-side-nav-tip {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(360px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n\n.d1-detail-head { padding-bottom: 0; }\n.d1-back {\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d1-back:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n@media (hover: hover) {\n  .d1-side-nav-btn:hover:not(:disabled) { transform: scale(1.06); }\n  .d1-side-nav-btn:hover .d1-side-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n@media (max-width: 1180px) { .d1-grid { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 834px) {\n  .d1-tabs { gap: 10px; }\n  .d1-tab { min-height: 68px; padding: 10px 14px; }\n  .d1-tab-text { font-size: 17px; }\n}\n@media (max-width: 900px) {\n  .d1-side-nav-btn, .d1-side-nav-btn.is-sub { width: 44px; height: 44px; margin-left: 0; box-shadow: none; border-color: transparent; }\n  .d1-side-subnav { width: 0; grid-template-columns: minmax(0, 1fr); }\n  .d1-side-subnav-inner { grid-auto-flow: column; grid-template-rows: 44px; gap: 4px; }\n  .d1-side-nav-tip { display: none; }\n}\n@media (max-width: 560px) {\n  .d1-grid { grid-template-columns: 1fr; }\n  .d1-nav { grid-template-columns: 1fr; }\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* \u0E15\u0E23\u0E36\u0E07\u0E01\u0E31\u0E1A\u0E08\u0E2D\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E44\u0E21\u0E48\u0E02\u0E22\u0E31\u0E1A */\n.d1-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.d1-index { background: transparent; }\n\n.d1-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.d1-veil {\n  position: absolute;\n  inset: 0;\n  /* \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E49\u0E32\u0E22 rgba() \u0E04\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E36\u0E1A 0\u20131 \u0E25\u0E14\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E0A\u0E31\u0E14\u0E02\u0E36\u0E49\u0E19 */\n  background: linear-gradient(180deg, rgba(8, 21, 47, .72) 0%, rgba(8, 21, 47, .64) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n/* \u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.d1-index .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d1-index .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E22\u0E31\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E32\u0E27\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22\u0E1A\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.d1-index .d1-card { border-color: rgba(255, 255, 255, .5); box-shadow: 0 14px 34px rgba(8, 21, 47, .28); }\n.d1-index .d1-tab { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 28px rgba(8, 21, 47, .26); }\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E39\u0E07\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E21\u0E35\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27 */\n.d1-card { min-height: 142px; }\n.d1-card-top { margin-bottom: 2px; }\n\n/* \u0E1A\u0E17\u0E19\u0E33 O-NET: \u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14 */\n.d1-onet-narrative,\n.d1-narrative { margin: 0 0 26px; }\n.d1-onet-narrative p,\n.d1-narrative p {\n  margin: 0 0 10px;\n  color: #fff;\n  font-size: 18px;\n  line-height: 1.75;\n  text-align: left;\n  text-indent: 2em;\n  text-shadow: 0 2px 12px rgba(8, 21, 47, .9);\n}\n.d1-onet-narrative p:last-child,\n.d1-narrative p:last-child { margin-bottom: 0; }\n.d1-onet-narrative strong { color: #fff; font-weight: 800; }\n\n/* \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E20\u0E32\u0E1E\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E23\u0E32\u0E1F\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D 1.1.7 */\n.d1-pathway-images {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n  margin-top: 22px;\n}\n.d1-pathway-images figure {\n  margin: 0;\n  display: grid;\n  gap: 9px;\n  overflow: hidden;\n  color: var(--navy-800);\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n}\n.d1-pathway-images img { display: block; width: 100%; height: auto; }\n.d1-pathway-images figcaption { padding: 0 14px 13px; }\n\n/* \u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u0E02\u0E49\u0E2D 1.1.3 */\n.d1-english-activities { display: grid; gap: 22px; margin-top: 18px; }\n.d1-english-activity { padding-bottom: 22px; border-bottom: 1px solid var(--line); }\n.d1-english-activity:last-child { padding-bottom: 0; border-bottom: 0; }\n.d1-english-activity h4 { margin: 0 0 11px; color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n.d1-english-photos { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n.d1-english-photos figure { min-width: 0; margin: 0; overflow: hidden; border: 1px solid var(--navy-100); border-radius: 10px; background: var(--navy-50); }\n.d1-english-photos img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.d1-english-awards { display: grid; gap: 22px; margin-top: 18px; }\n.d1-english-award { padding-bottom: 22px; border-bottom: 1px solid var(--gold-200); }\n.d1-english-award:last-child { padding-bottom: 0; border-bottom: 0; }\n.d1-english-award h4 { margin: 0 0 11px; color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n.d1-english-award img { display: block; width: 100%; max-height: 300px; object-fit: cover; border: 1px solid var(--gold-200); border-radius: 10px; }\n.d1-english-photos.d1-photos-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n@media (max-width: 560px) { .d1-english-photos, .d1-english-photos.d1-photos-3 { grid-template-columns: 1fr; } }\n\n/* \u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21 \u0E02\u0E49\u0E2D 1.2.2 */\n.d1-environment-activities { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; margin-top:18px; }\n.d1-environment-activity { min-width:0; padding:18px; border:1px solid var(--navy-100); border-radius:14px; background:#fff; box-shadow:0 8px 20px rgba(20,47,91,.08); }\n.d1-environment-activity h4 { min-height:48px; margin:0 0 12px; color:var(--navy-800); font-size:17px; font-weight:800; line-height:1.45; }\n.d1-environment-photos { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }\n.d1-environment-photos figure { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:var(--navy-50); }\n.d1-environment-photos img { display:block; width:100%; height:130px; object-fit:cover; }\n@media (max-width:700px) { .d1-environment-activities { grid-template-columns:1fr; } .d1-environment-photos img { height:155px; } }\n\n/* \u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E02\u0E49\u0E2D 1.2.6 */\n.d1-confidence-photos { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:9px; }\n.d1-confidence-photos figure { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:var(--navy-50); }\n.d1-confidence-photos img { display:block; width:100%; height:118px; object-fit:cover; }\n@media (max-width:700px) { .d1-confidence-photos img { height:145px; } }\n@media (max-width:460px) { .d1-confidence-photos { grid-template-columns:1fr; } .d1-confidence-photos img { height:180px; } }\n\n/* \u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19\u0E43\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 \u0E02\u0E49\u0E2D 1.2.4 */\n.d1-student-development-title { margin:34px 0 16px; color:#fff; font-size:28px; font-weight:900; line-height:1.3; letter-spacing:.01em; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-teamwork-curriculum { margin-top:0; padding:22px; border:1px solid var(--navy-100); border-radius:16px; background:#fff; box-shadow:0 8px 20px rgba(20,47,91,.08); }\n.d1-teamwork-curriculum h3 { margin:0; color:#082b62; font-size:21px; font-weight:900; line-height:1.4; text-shadow:none; }\n.d1-teamwork-curriculum > p { margin:4px 0 18px; color:#27466f; font-size:16px; font-weight:700; text-shadow:none; }\n.d1-teamwork-plan-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }\n.d1-teamwork-plan-grid figure { min-width:0; margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:11px; background:#fff; }\n.d1-teamwork-plan-grid img { display:block; width:100%; height:125px; object-fit:cover; }\n.d1-teamwork-plan-grid figcaption { padding:9px 10px; color:var(--navy-800); font-size:15px; font-weight:800; line-height:1.35; }\n@media (max-width:900px) { .d1-teamwork-plan-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }\n@media (max-width:560px) { .d1-teamwork-plan-grid { grid-template-columns:1fr; } .d1-teamwork-plan-grid img { height:165px; } }\n.d1-student-development { margin-top:30px; }\n.d1-muen-san-workshop { margin-top:16px; }\n.d1-muen-san-photos { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; }\n.d1-muen-san-photos figure { margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; }\n.d1-muen-san-photos img { display:block; width:100%; height:130px; object-fit:cover; }\n.d1-muen-san-workshop > p { margin:10px 0 0; color:#173d71; font-size:14px; font-weight:700; line-height:1.5; }\n.d1-thai-music-activities > .d1-muen-san-workshop + .d1-muen-san-workshop { margin-top:18px; padding-top:18px; border-top:1px solid var(--navy-100); }\n.d1-health-activities { margin-top:34px; }\n.d1-health-activities > h3 { margin:0 0 16px; color:#fff; font-size:24px; font-weight:900; line-height:1.4; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-safety-support { margin-top:34px; }\n.d1-safety-support .card { max-width:780px; }\n.d1-safety-activities { margin-top:30px; }\n.d1-safety-activities > h3 { margin:0 0 16px; color:#fff; font-size:24px; font-weight:900; line-height:1.4; text-shadow:0 2px 8px rgba(0,0,0,.45); }\n.d1-tech-award-photos { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:9px; margin-top:12px; }\n.d1-tech-award-photos figure { margin:0; overflow:hidden; border:1px solid var(--navy-100); border-radius:9px; background:#fff; }\n.d1-tech-award-photos img { display:block; width:100%; height:130px; object-fit:cover; }\n.d1-tech-award-photos figure:only-child { grid-column:1 / -1; }\n@media (max-width:560px) { .d1-tech-award-photos img { height:170px; } }\n\n/* \u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19 O-NET \u2014 \u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E41\u0E25\u0E30\u0E16\u0E49\u0E2D\u0E22\u0E04\u0E33\u0E08\u0E32\u0E01\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 */\n.d1-onet-highlight {\n  padding: 22px;\n  border: 1px solid rgba(212, 165, 55, .75);\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 16px 38px rgba(8, 21, 47, .24);\n}\n.d1-onet-highlight-head { margin-bottom: 20px; }\n.d1-onet-highlight-head > span {\n  display: inline-flex;\n  padding: 4px 10px;\n  color: var(--navy-800);\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: var(--gold-100);\n}\n.d1-onet-highlight h3 { margin: 8px 0 5px; color: var(--navy-900); font-size: clamp(20px, 2.3vw, 28px); line-height: 1.25; }\n.d1-onet-highlight p { margin: 0; color: var(--ink-mute); font-size: 15.5px; line-height: 1.55; }\n.d1-onet-option { margin-top: 22px; }\n.d1-onet-option-label {\n  display: inline-flex;\n  margin-bottom: 12px;\n  padding: 5px 10px;\n  color: var(--navy-800);\n  font-size: 14px;\n  font-weight: 800;\n  border-radius: 8px;\n  background: var(--navy-50);\n}\n.d1-onet-option--row .grid { grid-template-columns: 1fr; gap: 18px; }\n/* \u0E41\u0E1A\u0E1A A: \u0E40\u0E23\u0E35\u0E22\u0E07\u0E40\u0E15\u0E47\u0E21\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E14\u0E49\u0E0A\u0E31\u0E14\u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19 */\n:host ::ng-deep .d1-onet-option--row .chart-card { min-height: 430px; }\n:host ::ng-deep .d1-onet-option--row .chart-svg { min-height: 270px; }\n\n/* \u0E41\u0E1A\u0E1A B: \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E1A\u0E19 iPad \u0E44\u0E14\u0E49\u0E0A\u0E31\u0E14 \u0E41\u0E25\u0E30\u0E1B\u0E31\u0E14\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E43\u0E19\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\u0E44\u0E14\u0E49 */\n.d1-onet-scroll {\n  overflow-x: auto;\n  padding: 2px 2px 14px;\n  scrollbar-color: var(--navy-300) transparent;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n}\n.d1-onet-scroll-track { display: flex; gap: 18px; width: max-content; }\n.d1-onet-scroll-track > app-bar-chart {\n  display: block;\n  flex: 0 0 min(720px, calc(100vw - 100px));\n  scroll-snap-align: start;\n}\n:host ::ng-deep .d1-onet-option--scroll .chart-card { min-height: 490px; }\n:host ::ng-deep .d1-onet-option--scroll .chart-svg { min-height: 300px; }\n@media (max-width: 560px) { .d1-onet-highlight { padding: 16px; } }\n\n/* iPad \u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14\u0E41\u0E1A\u0E15 \u2014 \u0E16\u0E49\u0E32\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E25\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 \u0E43\u0E2B\u0E49\u0E2B\u0E22\u0E38\u0E14\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E1E\u0E19\u0E34\u0E48\u0E07\u0E41\u0E17\u0E19 */\n@media (prefers-reduced-motion: reduce) {\n  .d1-video { display: none; }\n  .d1-bg { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n/* \u0E17\u0E38\u0E01\u0E2A\u0E48\u0E27\u0E19\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E08\u0E36\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n\n/* \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E2D\u0E07 */\n.d1-topic-title,\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n:host ::ng-deep .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n/* \u0E40\u0E2A\u0E49\u0E19\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E30\u0E27\u0E07\u0E41\u0E2B\u0E27\u0E19\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E02\u0E2D\u0E07 step \u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E17\u0E2D\u0E07 \u0E42\u0E14\u0E22\u0E04\u0E07\u0E41\u0E01\u0E19\u0E01\u0E25\u0E32\u0E07\u0E2A\u0E35\u0E02\u0E32\u0E27 */\n:host ::ng-deep .steps::before { background: var(--gold-400); }\n:host ::ng-deep .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item p { color: #ffffff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .bullets > li { color: #ffffff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .card .bullets > li,\n:host ::ng-deep .card .step-item h4,\n:host ::ng-deep .card .step-item p { color: var(--ink-soft); }\n:host ::ng-deep .card .sec-lead { color: var(--ink-soft); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14/\u0E01\u0E23\u0E2D\u0E1A\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E36\u0E07\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E40\u0E07\u0E32 */\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep .callout *,\n:host ::ng-deep app-cycle-flow * {\n  text-shadow: none !important;\n  filter: none !important;\n}\n\n/* \u0E08\u0E38\u0E14\u0E01\u0E25\u0E21\u0E02\u0E2D\u0E07\u0E44\u0E17\u0E21\u0E4C\u0E44\u0E25\u0E19\u0E4C\u0E41\u0E25\u0E30\u0E1B\u0E49\u0E32\u0E22\u0E0A\u0E34\u0E1B\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E19\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E4C\u0E14 */\n:host ::ng-deep .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n:host ::ng-deep .card .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .card .steps::before { background: var(--gold-400); }\n:host ::ng-deep .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n:host ::ng-deep .card-title { color: var(--navy-900); }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* \u0E1A\u0E2D\u0E01\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E27\u0E48\u0E32\u0E01\u0E14\u0E44\u0E14\u0E49 (\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E21\u0E35\u0E1B\u0E38\u0E48\u0E21\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27) */\n:host ::ng-deep img { cursor: zoom-in; }\n\n.d1-zoom {\n  position: fixed;\n  inset: 0;\n  z-index: 240;\n  display: grid;\n  place-content: center;\n  gap: 14px;\n  padding: 28px;\n  padding-top: max(28px, env(safe-area-inset-top));\n  padding-bottom: max(28px, env(safe-area-inset-bottom));\n  background: rgba(8, 21, 47, .93);\n  cursor: zoom-out;\n  animation: d1ZoomIn .18s var(--ease);\n}\n.d1-zoom img {\n  max-width: min(1200px, 94vw);\n  max-height: 80vh;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .5);\n}\n.d1-zoom-cap {\n  margin: 0;\n  max-width: min(1200px, 94vw);\n  color: #e8f0ff;\n  font-size: 17px;\n  line-height: 1.7;\n  text-align: center;\n}\n.d1-zoom-close {\n  position: fixed;\n  top: max(16px, env(safe-area-inset-top));\n  right: max(16px, env(safe-area-inset-right));\n  width: 48px;\n  height: 48px;\n  border: 0;\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n  background: rgba(255, 255, 255, .16);\n  cursor: pointer;\n}\n@keyframes d1ZoomIn { from { opacity: 0; } to { opacity: 1; } }\n@media (prefers-reduced-motion: reduce) { .d1-zoom { animation: none; } }\n"] }]
    }], null, { resizeStudentQualityModel: [{
            type: HostListener,
            args: ['window:message', ['$event']]
        }], onImageClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], closeZoom: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension1Component, { className: "Dimension1Component", filePath: "src/app/pages/dimension1/dimension1.component.ts", lineNumber: 37 }); })();
//# sourceMappingURL=dimension1.component.js.map