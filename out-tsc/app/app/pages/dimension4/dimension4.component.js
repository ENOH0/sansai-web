import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { SmartWheelComponent } from '../../shared/smart-wheel/smart-wheel.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension4Component_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function Dimension4Component_button_7_Template_button_click_0_listener() { const group_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r4.key)); });
    i0.ɵɵelementStart(1, "span", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r4.open() === group_r4.key);
    i0.ɵɵattribute("aria-label", group_r4.key + " " + group_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r4.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r4.title);
} }
function Dimension4Component_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function Dimension4Component_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵelementStart(1, "span", 21);
    i0.ɵɵtext(2, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4");
    i0.ɵɵelementEnd()();
} }
function Dimension4Component_ng_template_9_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const indicator_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(indicator_r7);
} }
function Dimension4Component_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol");
    i0.ɵɵtemplate(4, Dimension4Component_ng_template_9_div_0_li_4_Template, 2, 1, "li", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r8 = ctx.ngIf;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 ", group_r8.count, " \u0E02\u0E49\u0E2D");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[group_r8.indicatorKey]);
} }
function Dimension4Component_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, Dimension4Component_ng_template_9_div_0_Template, 5, 2, "div", 22);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.currentGroup);
} }
function Dimension4Component_section_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 25)(1, "div", 26)(2, "div", 27)(3, "p", 28);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.d.intro);
} }
function Dimension4Component_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 29)(1, "div", 26)(2, "div", 30);
    i0.ɵɵelement(3, "iframe", 31);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r4.pdcarModelHeight(), "px");
} }
function Dimension4Component_section_13_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function Dimension4Component_section_13_button_9_Template_button_click_0_listener() { const group_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r10.key)); });
    i0.ɵɵelementStart(1, "span", 40);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 41);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 42);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 43);
    i0.ɵɵtext(8, "\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r11 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r10.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", group_r10.count, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
} }
function Dimension4Component_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 32)(1, "div", 26)(2, "div", 33)(3, "h2", 34);
    i0.ɵɵtext(4, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 36);
    i0.ɵɵtext(7, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 37);
    i0.ɵɵtemplate(9, Dimension4Component_section_13_button_9_Template, 9, 4, "button", 38);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r4.groups);
} }
function Dimension4Component_section_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 44)(1, "div", 26)(2, "div", 45)(3, "button", 46);
    i0.ɵɵlistener("click", function Dimension4Component_section_14_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵtext(4, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14");
    i0.ɵɵelementEnd()()()();
} }
function Dimension4Component_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 47)(1, "div", 26);
    i0.ɵɵelement(2, "app-section-header", 48);
    i0.ɵɵelementContainer(3, 49);
    i0.ɵɵelementStart(4, "div", 50);
    i0.ɵɵelement(5, "iframe", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 30);
    i0.ɵɵelement(7, "iframe", 52);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d4Indicators_r13 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.design.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d4Indicators_r13);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r4.designStepsHeight(), "px");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r4.designModelHeight(), "px");
} }
function Dimension4Component_section_16_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 28);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r15 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r15 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r14.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r14.text);
} }
function Dimension4Component_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 53)(1, "div", 26);
    i0.ɵɵelement(2, "app-section-header", 54);
    i0.ɵɵelementContainer(3, 49);
    i0.ɵɵelementStart(4, "div", 55)(5, "h3", 56);
    i0.ɵɵtext(6, "ACTIVITY MODEL");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 36);
    i0.ɵɵtext(9, " \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 57);
    i0.ɵɵelement(11, "app-smart-wheel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 58);
    i0.ɵɵtemplate(13, Dimension4Component_section_16_div_13_Template, 7, 4, "div", 59);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d4Indicators_r13 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.classroom.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d4Indicators_r13);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.classroom.practices);
} }
function Dimension4Component_section_17_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r17 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r16.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r16.text);
} }
function Dimension4Component_section_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 47)(1, "div", 26);
    i0.ɵɵelement(2, "app-section-header", 63);
    i0.ɵɵelementContainer(3, 49);
    i0.ɵɵelementStart(4, "div", 64);
    i0.ɵɵtemplate(5, Dimension4Component_section_17_div_5_Template, 5, 3, "div", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "app-line-chart", 66);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d4Indicators_r13 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.assessment.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d4Indicators_r13);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.assessment.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r4.d.assessment.outcome.caption)("labels", ctx_r4.d.assessment.outcome.years)("series", ctx_r4.outcomeSeries)("min", 50)("max", 100)("note", ctx_r4.d.assessment.outcome.note);
} }
function Dimension4Component_section_18_ng_container_14_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 90);
    i0.ɵɵtext(1, "\u2192");
    i0.ɵɵelementEnd();
} }
function Dimension4Component_section_18_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 86);
    i0.ɵɵlistener("click", function Dimension4Component_section_18_ng_container_14_Template_button_click_1_listener() { const i_r20 = i0.ɵɵrestoreView(_r19).index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.scrollToD44(i_r20)); });
    i0.ɵɵelementStart(2, "span", 87);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 88);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, Dimension4Component_section_18_ng_container_14_span_6_Template, 2, 0, "span", 89);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const s_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    const last_r22 = ctx.last;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r20 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r21.short);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r22);
} }
function Dimension4Component_section_18_article_16_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105)(1, "span", 106);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const b_r23 = ctx.$implicit;
    const j_r24 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(j_r24 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r23.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r23.text);
} }
function Dimension4Component_section_18_article_16_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103);
    i0.ɵɵtemplate(1, Dimension4Component_section_18_article_16_div_11_div_1_Template, 7, 3, "div", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r25.blocks);
} }
function Dimension4Component_section_18_article_16_ol_12_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r26 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r26);
} }
function Dimension4Component_section_18_article_16_ol_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 107);
    i0.ɵɵtemplate(1, Dimension4Component_section_18_article_16_ol_12_li_1_Template, 2, 1, "li", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r25.flow);
} }
function Dimension4Component_section_18_article_16_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pt_r27 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(pt_r27);
} }
function Dimension4Component_section_18_article_16_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r25.highlight);
} }
function Dimension4Component_section_18_article_16_figure_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "figure")(1, "button", 109);
    i0.ɵɵlistener("click", function Dimension4Component_section_18_article_16_figure_22_Template_button_click_1_listener() { const ph_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.d44Lightbox.set(ph_r29)); });
    i0.ɵɵelement(2, "img", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "figcaption");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ph_r29 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21: " + ph_r29.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ph_r29.src, i0.ɵɵsanitizeUrl)("alt", ph_r29.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ph_r29.caption);
} }
function Dimension4Component_section_18_article_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 91)(1, "header", 92)(2, "span", 93);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "p", 94);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3", 95);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "p", 96);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, Dimension4Component_section_18_article_16_div_11_Template, 2, 1, "div", 97)(12, Dimension4Component_section_18_article_16_ol_12_Template, 2, 1, "ol", 98);
    i0.ɵɵelementStart(13, "ul", 99);
    i0.ɵɵtemplate(14, Dimension4Component_section_18_article_16_li_14_Template, 2, 1, "li", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, Dimension4Component_section_18_article_16_p_15_Template, 2, 1, "p", 100);
    i0.ɵɵelementStart(16, "div", 101)(17, "strong");
    i0.ɵɵtext(18, "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 102);
    i0.ɵɵtemplate(22, Dimension4Component_section_18_article_16_figure_22_Template, 5, 4, "figure", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r25 = ctx.$implicit;
    const i_r30 = ctx.index;
    i0.ɵɵproperty("id", "d44-step-" + i_r30);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i_r30 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(s_r25.short);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r25.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r25.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r25.blocks.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r25.flow.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", s_r25.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r25.highlight);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(s_r25.result);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", s_r25.photos);
} }
function Dimension4Component_section_18_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 111)(1, "h3", 112);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 113)(4, "span", 114);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 115);
    i0.ɵɵtext(8, "\u2192");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 116);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementStart(12, "span", 117);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "span", 118);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p", 119);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const e_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r32 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r31.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 7, e_r31.from, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 10, e_r31.to, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r31.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", i0.ɵɵpipeBind2(16, 13, e_r31.to - e_r31.from, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r31.note);
} }
function Dimension4Component_section_18_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 83);
    i0.ɵɵlistener("click", function Dimension4Component_section_18_button_33_Template_button_click_0_listener() { const c_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.d44Filter.set(c_r34)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r34 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-on", ctx_r4.d44Filter() === c_r34);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r34, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d44Count(c_r34));
} }
function Dimension4Component_section_18_li_35_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const doc_r35 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", doc_r35.year, " \u00B7 ");
} }
function Dimension4Component_section_18_li_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span", 120);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 121);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 122);
    i0.ɵɵtemplate(6, Dimension4Component_section_18_li_35_ng_container_6_Template, 2, 1, "ng-container", 123);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const doc_r35 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(doc_r35.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(doc_r35.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", doc_r35.year);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E2B\u0E19\u0E49\u0E32 ", doc_r35.page, " ");
} }
function Dimension4Component_section_18_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 53)(1, "div", 26);
    i0.ɵɵelement(2, "app-section-header", 68);
    i0.ɵɵelementContainer(3, 49);
    i0.ɵɵelementStart(4, "div", 69);
    i0.ɵɵelement(5, "img", 70);
    i0.ɵɵelementStart(6, "div", 71)(7, "p", 72);
    i0.ɵɵtext(8, "\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h3", 73);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 74);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 75);
    i0.ɵɵtemplate(14, Dimension4Component_section_18_ng_container_14_Template, 7, 3, "ng-container", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 76);
    i0.ɵɵtemplate(16, Dimension4Component_section_18_article_16_Template, 23, 11, "article", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 33)(18, "h3", 78);
    i0.ɵɵtext(19, "\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "div", 35);
    i0.ɵɵelementStart(21, "p", 79);
    i0.ɵɵtext(22, "\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 58);
    i0.ɵɵtemplate(24, Dimension4Component_section_18_div_24_Template, 19, 16, "div", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 81)(26, "h3", 62);
    i0.ɵɵtext(27, "\u0E04\u0E25\u0E31\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 82)(29, "button", 83);
    i0.ɵɵlistener("click", function Dimension4Component_section_18_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r18); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.d44Filter.set("")); });
    i0.ɵɵtext(30, " \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, Dimension4Component_section_18_button_33_Template, 4, 4, "button", 84);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "ul", 85);
    i0.ɵɵtemplate(35, Dimension4Component_section_18_li_35_Template, 8, 4, "li", 24);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d4Indicators_r13 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.useResults.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d4Indicators_r13);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r4.d.useResults.heroImage, i0.ɵɵsanitizeUrl)("alt", ctx_r4.d.useResults.heroCaption);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.d.useResults.tagline);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.useResults.intro);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.steps);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.steps);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.evidence);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("is-on", ctx_r4.d44Filter() === "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.d.useResults.library.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.libraryCategories);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d44Docs());
} }
function Dimension4Component_section_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 53)(1, "div", 26);
    i0.ɵɵelement(2, "app-photo-gallery", 124);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r4.gallery)("light", true);
} }
function Dimension4Component_section_20_div_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r36 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r36);
} }
function Dimension4Component_section_20_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 129)(1, "h3", 130);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 131);
    i0.ɵɵtemplate(4, Dimension4Component_section_20_div_4_li_4_Template, 2, 1, "li", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r37 = ctx.$implicit;
    const i_r38 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("revealDelay", i_r38 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r37);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[key_r37]);
} }
function Dimension4Component_section_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 47)(1, "div", 26);
    i0.ɵɵelement(2, "app-section-header", 125);
    i0.ɵɵelementStart(3, "div", 58);
    i0.ɵɵtemplate(4, Dimension4Component_section_20_div_4_Template, 5, 3, "div", 126);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 127);
    i0.ɵɵelement(6, "app-pager", 128);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorKeys);
} }
function Dimension4Component_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 132);
    i0.ɵɵlistener("click", function Dimension4Component_div_21_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.d44Lightbox.set(null)); });
    i0.ɵɵelementStart(1, "button", 133);
    i0.ɵɵtext(2, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 134);
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const lb_r40 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", lb_r40.src, i0.ɵɵsanitizeUrl)("alt", lb_r40.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(lb_r40.caption);
} }
export class Dimension4Component {
    /* ความสูงจริงของโมเดล PDCAR ที่ส่งมาจาก iframe ทำให้ไม่มีแถบเลื่อนซ้อน */
    pdcarModelHeight = signal(900);
    designModelHeight = signal(760);
    designStepsHeight = signal(900);
    /** เลื่อนหน้าหลักให้เห็นหน้าต่างรายละเอียดที่เปิดใน iframe (iframe สูงเท่าเนื้อหา เลื่อนเองไม่ได้) */
    scrollParentTo(selector, data) {
        const frame = document.querySelector(selector);
        const top = Number(data.top), bottom = Number(data.bottom);
        if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom))
            return;
        const base = frame.getBoundingClientRect().top;
        const elTop = base + top, elBottom = base + bottom, navGap = 84;
        let delta = 0;
        if (elTop < navGap)
            delta = elTop - navGap;
        else if (elBottom > window.innerHeight)
            delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
        if (delta)
            window.scrollBy({ top: delta, behavior: 'smooth' });
    }
    resizePdcarModel(event) {
        if (typeof window === 'undefined' || event.origin !== window.location.origin)
            return;
        /* ปุ่ม "ดูข้อมูลเพิ่มเติม" ในโมเดล PDCAR ขอให้เปิดหัวข้อ 4.1–4.4 */
        if (event.data?.type === 'd4-pdcar-open-group') {
            const key = event.data.group;
            const group = this.groups.find(g => g.key === key);
            if (group)
                this.selectGroup(group.key);
            return;
        }
        /* โมเดลขั้นตอนการออกแบบการจัดการเรียนรู้ 8 ขั้น (4.1) */
        if (event.data?.type === 'd4-design-steps-height') {
            const h = Number(event.data.height);
            if (Number.isFinite(h))
                this.designStepsHeight.set(Math.max(700, h));
            return;
        }
        if (event.data?.type === 'd4-design-steps-scroll') {
            this.scrollParentTo('iframe[src="/models/learning-design-steps-model.html"]', event.data);
            return;
        }
        /* โมเดลการออกแบบการจัดการเรียนรู้ (4.1) */
        if (event.data?.type === 'd4-design-model-height') {
            const h = Number(event.data.height);
            if (Number.isFinite(h))
                this.designModelHeight.set(Math.max(700, h));
            return;
        }
        if (event.data?.type === 'd4-design-model-scroll') {
            const frame = document.querySelector('iframe[src="/models/learning-design-model.html"]');
            const top = Number(event.data.top), bottom = Number(event.data.bottom);
            if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom))
                return;
            const base = frame.getBoundingClientRect().top;
            const elTop = base + top, elBottom = base + bottom, navGap = 84;
            let delta = 0;
            if (elTop < navGap)
                delta = elTop - navGap;
            else if (elBottom > window.innerHeight)
                delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
            if (delta)
                window.scrollBy({ top: delta, behavior: 'smooth' });
            return;
        }
        if (event.data?.type !== 'd4-pdcar-model-height')
            return;
        const height = Number(event.data.height);
        if (Number.isFinite(height))
            this.pdcarModelHeight.set(Math.max(620, Math.min(2200, height)));
    }
    gallery = GALLERY['d4'];
    /* ── หัวข้อ 4.4: คลังหลักฐานและภาพขนาดเต็ม ── */
    d44Filter = signal('');
    d44Lightbox = signal(null);
    d44Docs() {
        const f = this.d44Filter();
        return f ? DIM4.useResults.library.filter(x => x.category === f) : DIM4.useResults.library;
    }
    d44Count(category) {
        return DIM4.useResults.library.filter(x => x.category === category).length;
    }
    scrollToD44(index) {
        document.getElementById('d44-step-' + index)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    d = DIM4;
    indicatorKeys = Object.keys(DIM4.indicators);
    groups = [
        { key: '4.1', title: 'การออกแบบการจัดการเรียนรู้', indicatorKey: '4.1 การออกแบบการจัดการเรียนรู้', count: 5 },
        { key: '4.2', title: 'การจัดการเรียนรู้และการจัดการชั้นเรียน', indicatorKey: '4.2 การจัดการเรียนรู้และการจัดการชั้นเรียน', count: 8 },
        { key: '4.3', title: 'การวัดและประเมินผลการเรียนรู้', indicatorKey: '4.3 การวัดและประเมินผลการเรียนรู้', count: 5 },
        { key: '4.4', title: 'การนำผลการประเมินไปใช้', indicatorKey: '4.4 การนำผลการประเมินไปใช้', count: 4 }
    ];
    open = signal('');
    get currentGroup() { return this.groups.find(group => group.key === this.open()); }
    selectGroup(key) {
        this.open.set(key);
        setTimeout(() => document.querySelector('.d4-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    backToIndex() {
        this.open.set('');
        setTimeout(() => document.querySelector('.d4-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
    playBg(video) {
        video.muted = true;
        const playback = video.play();
        if (playback && typeof playback.catch === 'function')
            playback.catch(() => { });
    }
    palette = ['#1e4d9e', '#d4a537', '#4f88d4'];
    outcomeSeries = DIM4.assessment.outcome.series.map((s, i) => ({
        name: s.name, values: s.values, color: this.palette[i % 3]
    }));
    static ɵfac = function Dimension4Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension4Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension4Component, selectors: [["app-dimension4"]], hostBindings: function Dimension4Component_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("message", function Dimension4Component_message_HostBindingHandler($event) { return ctx.resizePdcarModel($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 23, vars: 17, consts: [["bgv", ""], ["d4Indicators", ""], ["aria-hidden", "true", 1, "d4-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-center-poster.jpg", 1, "d4-video", 3, "loadedmetadata", "canplay"], ["src", "video/school-center.mp4", "type", "video/mp4"], [1, "d4-veil"], [3, "no", "weight", "name", "subtitle"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 1, "d4-nav"], ["type", "button", "class", "d4-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "d4-nav-btn d4-nav-back", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 3, "click", 4, "ngIf"], ["class", "section d4-intro", 4, "ngIf"], ["class", "section-tight", 4, "ngIf"], ["class", "section d4-index", 4, "ngIf"], ["class", "section-tight d4-detail", 4, "ngIf"], ["class", "section section-alt", 4, "ngIf"], ["class", "section", 4, "ngIf"], ["class", "d44-lightbox", 3, "click", 4, "ngIf"], ["type", "button", 1, "d4-nav-btn", 3, "click"], [1, "d4-nav-no"], [1, "d4-nav-tip"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 1, "d4-nav-btn", "d4-nav-back", 3, "click"], ["aria-hidden", "true", 1, "d4-nav-no"], ["class", "assessment-indicators", "style", "margin-bottom:40px", 4, "ngIf"], [1, "assessment-indicators", 2, "margin-bottom", "40px"], [4, "ngFor", "ngForOf"], [1, "section", "d4-intro"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", "intro-glass", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [1, "section-tight"], ["appReveal", "", 1, "d4-pdcar"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/pdcar-quality-learning.html`, "title", "\u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 PDCAR", "loading", "lazy", "scrolling", "no"], [1, "section", "d4-index"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], [1, "d4-grid"], ["type", "button", "class", "d4-card", "appReveal", "zoom", 3, "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d4-card", 3, "click", "revealDelay"], [1, "d4-card-no"], [1, "d4-card-title"], [1, "d4-card-count"], [1, "d4-card-go"], [1, "section-tight", "d4-detail"], [1, "d4-detail-head"], ["type", "button", 1, "d4-back", 3, "click"], [1, "section", "section-alt"], ["num", "4.1", "title", "\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "light", "lead"], [3, "ngTemplateOutlet"], ["appReveal", "", 1, "d4-pdcar", 2, "margin-bottom", "28px"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/learning-design-steps-model.html`, "title", "MODEL \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 8 \u0E02\u0E31\u0E49\u0E19", "scrolling", "no"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/learning-design-model.html`, "title", "MODEL \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 4 \u0E02\u0E31\u0E49\u0E19", "scrolling", "no"], [1, "section"], ["num", "4.2", "title", "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "light", "lead"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "8px"], [1, "sec-title", 2, "font-size", "28px"], ["appReveal", "", 2, "margin-bottom", "34px"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], [1, "card-title"], ["num", "4.3", "title", "\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "light", "lead"], [1, "steps", 2, "margin-bottom", "38px"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["subtitle", "\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "labels", "series", "min", "max", "note"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["num", "4.4", "title", "\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49", 3, "light", "lead"], ["appReveal", "", 1, "d44-hero"], ["loading", "lazy", 1, "d44-hero-img", 3, "src", "alt"], [1, "d44-hero-copy"], [1, "d44-hero-kicker"], [1, "d44-hero-title"], [1, "d44-hero-text"], ["appReveal", "", 1, "d44-flow"], [1, "d44-cards"], ["class", "card d44-card", "appReveal", "", 3, "id", 4, "ngFor", "ngForOf"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-lead"], ["class", "card card-gold", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "d44-library"], ["role", "group", "aria-label", "\u0E01\u0E23\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E15\u0E32\u0E21\u0E2B\u0E21\u0E27\u0E14", 1, "d44-filters"], ["type", "button", 1, "d44-filter", 3, "click"], ["type", "button", "class", "d44-filter", 3, "is-on", "click", 4, "ngFor", "ngForOf"], [1, "d44-docs"], ["type", "button", 1, "d44-flow-step", 3, "click"], [1, "d44-flow-no"], [1, "d44-flow-name"], ["class", "d44-flow-arrow", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "d44-flow-arrow"], ["appReveal", "", 1, "card", "d44-card", 3, "id"], [1, "d44-card-head"], [1, "d44-card-no"], [1, "d44-card-kicker"], [1, "card-title", "d44-card-title"], [1, "card-body", "d44-lead"], ["class", "d44-blocks", 4, "ngIf"], ["class", "d44-steps", 4, "ngIf"], [1, "d44-points"], ["class", "d44-highlight", 4, "ngIf"], [1, "d44-result"], [1, "d44-photos"], [1, "d44-blocks"], ["class", "d44-block", 4, "ngFor", "ngForOf"], [1, "d44-block"], [1, "d44-block-no"], [1, "d44-steps"], [1, "d44-highlight"], ["type", "button", 3, "click"], ["loading", "lazy", 3, "src", "alt"], ["appReveal", "", 1, "card", "card-gold", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], [2, "display", "flex", "align-items", "baseline", "gap", "14px", "margin", "14px 0 8px"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "29px", "font-weight", "700", "color", "#6b7a94"], [2, "font-size", "22px", "color", "#82ade4"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "36px", "font-weight", "700", "color", "#132f63"], [2, "font-size", "16px", "color", "#6b7a94", "margin-left", "4px"], [1, "up", 2, "margin-left", "auto"], [1, "card-body", 2, "margin", "0", "font-size", "15px"], [1, "d44-doc-cat"], [1, "d44-doc-title"], [1, "d44-doc-meta"], [4, "ngIf"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 3, "items", "light"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "light"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-3", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "nextPath", "/dimension-5", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"], [1, "d44-lightbox", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14", 1, "d44-lb-close"], [3, "src", "alt"]], template: function Dimension4Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "video", 3, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension4Component_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension4Component_Template_video_canplay_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(3, "source", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-page-hero", 6);
            i0.ɵɵelementStart(6, "nav", 7);
            i0.ɵɵtemplate(7, Dimension4Component_button_7_Template, 5, 5, "button", 8)(8, Dimension4Component_button_8_Template, 5, 0, "button", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, Dimension4Component_ng_template_9_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(11, Dimension4Component_section_11_Template, 5, 1, "section", 10)(12, Dimension4Component_section_12_Template, 4, 2, "section", 11)(13, Dimension4Component_section_13_Template, 10, 1, "section", 12)(14, Dimension4Component_section_14_Template, 5, 0, "section", 13)(15, Dimension4Component_section_15_Template, 8, 7, "section", 14)(16, Dimension4Component_section_16_Template, 14, 4, "section", 15)(17, Dimension4Component_section_17_Template, 7, 10, "section", 14)(18, Dimension4Component_section_18_Template, 36, 15, "section", 15)(19, Dimension4Component_section_19_Template, 3, 2, "section", 15)(20, Dimension4Component_section_20_Template, 7, 2, "section", 14)(21, Dimension4Component_div_21_Template, 6, 3, "div", 16);
            i0.ɵɵelement(22, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.groups);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentGroup);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "4.1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "4.2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "4.3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "4.4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.d44Lightbox());
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.DecimalPipe, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            PagerComponent,
            LineChartComponent, SmartWheelComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d4-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d4-video[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d4-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .74) 0%, rgba(8, 21, 47, .66) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n[_nghost-%COMP%]     .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .step-item h4, \n[_nghost-%COMP%]     .step-item p, \n[_nghost-%COMP%]     .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n\n\n[_nghost-%COMP%]     .card .step-item h4 { color: var(--navy-900); }\n[_nghost-%COMP%]     .card .step-item p, \n[_nghost-%COMP%]     .card .bullets > li { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n\n\n.d4-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }\n.d4-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 164px;\n  padding: 18px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d4-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) { .d4-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); } }\n.d4-card-no[_ngcontent-%COMP%] {\n  display: grid; place-items: center; width: 50px; height: 42px;\n  color: #fff; font-size: 18px; font-weight: 800; border-radius: 11px;\n  background: var(--navy-700); font-variant-numeric: tabular-nums;\n}\n.d4-card-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d4-card-count[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d4-card-go[_ngcontent-%COMP%] { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d4-intro[_ngcontent-%COMP%] { padding-bottom: 28px; }\n.d4-index[_ngcontent-%COMP%] { padding-top: 36px; padding-bottom: 48px; }\n.d4-detail[_ngcontent-%COMP%] { padding-bottom: 8px; background: transparent; scroll-margin-top: var(--nav-h); }\n.d4-detail[_ngcontent-%COMP%]    + .section[_ngcontent-%COMP%] { padding-top: 30px; }\n[_nghost-%COMP%]     app-section-header + .assessment-indicators { margin-bottom: 32px; }\n.d4-detail-head[_ngcontent-%COMP%] { margin-bottom: 12px; }\n.d4-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d4-detail-kicker[_ngcontent-%COMP%] { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n.d4-back[_ngcontent-%COMP%] {\n  flex: none; min-height: 44px; padding: 0 15px; color: var(--navy-700);\n  font-family: inherit; font-size: 15.5px; font-weight: 800;\n  border: 1px solid var(--navy-200); border-radius: 999px; background: var(--paper);\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d4-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n.d4-indicators[_ngcontent-%COMP%] { margin-top: 18px; padding: 18px 22px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--navy-50); }\n.d4-indicators[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d4-indicators[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0; padding-left: 23px; }\n.d4-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d4-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n\n\n\n.d4-nav[_ngcontent-%COMP%] { position: fixed; right: 18px; top: 50%; transform: translateY(-50%); z-index: 60; display: grid; gap: 10px; }\n.d4-nav-btn[_ngcontent-%COMP%] {\n  position: relative; display: grid; place-items: center; width: 54px; height: 54px;\n  color: var(--navy-700); font-family: inherit; font-size: 15px; font-weight: 800;\n  border: 1px solid var(--line); border-radius: 50%; background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18); cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.d4-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n.d4-nav-no[_ngcontent-%COMP%] { font-variant-numeric: tabular-nums; }\n.d4-nav-btn.is-open[_ngcontent-%COMP%] { color: #fff; border-color: var(--navy-600); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(30, 77, 158, .42); }\n.d4-nav-back[_ngcontent-%COMP%] { color: #fff; font-size: 27px; border-color: var(--gold-400); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(8, 21, 47, .42); }\n.d4-nav-tip[_ngcontent-%COMP%] {\n  position: absolute; right: calc(100% + 12px); top: 50%; transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px)); padding: 8px 14px; color: #fff; font-size: 14.5px; font-weight: 700; line-height: 1.35;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md); opacity: 0; pointer-events: none; transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) { .d4-nav-btn[_ngcontent-%COMP%]:hover { transform: scale(1.06); } .d4-nav-btn[_ngcontent-%COMP%]:hover   .d4-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); } }\n\n@media (max-width: 900px) {\n  .d4-nav[_ngcontent-%COMP%] { right: auto; left: 50%; top: auto; bottom: calc(18px + env(safe-area-inset-bottom)); transform: translateX(-50%); grid-auto-flow: column; padding: 8px 10px; border-radius: 999px; background: rgba(247, 251, 255, .94); box-shadow: 0 10px 30px rgba(8, 21, 47, .28); backdrop-filter: blur(10px); }\n  .d4-nav-btn[_ngcontent-%COMP%] { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d4-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d4-nav[_ngcontent-%COMP%] { gap: 4px; padding: 6px 8px; }\n  .d4-nav-btn[_ngcontent-%COMP%] { width: 44px; height: 44px; font-size: 13px; }\n  .d4-nav-back[_ngcontent-%COMP%] { font-size: 23px; }\n  .d4-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d4-card[_ngcontent-%COMP%] { min-height: 152px; padding: 17px; }\n  .d4-detail-head[_ngcontent-%COMP%] { margin-bottom: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d4-video[_ngcontent-%COMP%] { display: none; }\n  .d4-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n\n\n.d4-nav[_ngcontent-%COMP%] {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}\n\n\n\n\n\n.d4-pdcar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: var(--radius);\n  background: transparent;\n}\n.d4-pdcar[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n\n\n\n.d44-hero[_ngcontent-%COMP%] {\n  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);\n  overflow: hidden; margin-bottom: 26px;\n  border-radius: var(--radius); background: var(--paper); box-shadow: var(--shadow-md);\n}\n.d44-hero-img[_ngcontent-%COMP%] { display: block; width: 100%; height: 100%; min-height: 260px; object-fit: cover; }\n.d44-hero-copy[_ngcontent-%COMP%] { padding: 28px 30px; border-top: 4px solid var(--gold-500); }\n.d44-hero-kicker[_ngcontent-%COMP%] { margin: 0 0 6px; color: var(--navy-600); font-size: 14px; font-weight: 800; letter-spacing: .04em; }\n.d44-hero-title[_ngcontent-%COMP%] { margin: 0 0 12px; color: var(--navy-900); font-size: 24px; font-weight: 800; line-height: 1.4; }\n.d44-hero-text[_ngcontent-%COMP%] { margin: 0; color: var(--ink-soft); font-size: 16.5px; line-height: 1.75; }\n\n.d44-flow[_ngcontent-%COMP%] {\n  display: flex; align-items: stretch; justify-content: center; gap: 8px; flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.d44-flow-step[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px; min-height: 56px; padding: 10px 18px 10px 10px;\n  border: 1px solid rgba(255, 255, 255, .6); border-radius: 999px; cursor: pointer;\n  background: rgba(255, 255, 255, .94); color: var(--navy-900); font: inherit; font-size: 16px; font-weight: 800;\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .25);\n  transition: transform .2s var(--ease);\n}\n.d44-flow-no[_ngcontent-%COMP%] {\n  display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;\n  background: var(--navy-700); color: #fff; font-size: 17px;\n}\n.d44-flow-arrow[_ngcontent-%COMP%] { align-self: center; color: var(--gold-400); font-size: 24px; font-weight: 800; text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n@media (hover: hover) { .d44-flow-step[_ngcontent-%COMP%]:hover { transform: translateY(-3px); } }\n\n.d44-cards[_ngcontent-%COMP%] { display: grid; gap: 22px; margin-bottom: 40px; }\n.d44-card[_ngcontent-%COMP%] { scroll-margin-top: calc(var(--nav-h) + 16px); border-top: 4px solid var(--navy-600); }\n.d44-card[_ngcontent-%COMP%]:nth-child(2) { border-top-color: var(--gold-500); }\n.d44-card[_ngcontent-%COMP%]:nth-child(3) { border-top-color: var(--navy-400); }\n.d44-card[_ngcontent-%COMP%]:nth-child(4) { border-top-color: var(--gold-600); }\n.d44-card-head[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }\n.d44-card-no[_ngcontent-%COMP%] {\n  flex: 0 0 auto; display: grid; place-items: center; width: 50px; height: 50px; border-radius: 15px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-500)); color: #fff; font-size: 23px; font-weight: 800;\n}\n.d44-card-kicker[_ngcontent-%COMP%] { margin: 0; color: var(--gold-600); font-size: 14px; font-weight: 800; }\n.d44-card-title[_ngcontent-%COMP%] { margin: 0; font-size: 21px; }\n.d44-lead[_ngcontent-%COMP%] { margin: 0 0 16px; }\n\n.d44-blocks[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 16px; }\n.d44-block[_ngcontent-%COMP%] { position: relative; padding: 16px 16px 14px; border-radius: 14px; background: var(--navy-50); border: 1px solid var(--navy-100); }\n.d44-block-no[_ngcontent-%COMP%] { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--gold-500); color: #fff; font-size: 14px; font-weight: 800; }\n.d44-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 8px 0 4px; color: var(--navy-800); font-size: 16px; font-weight: 800; }\n.d44-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: var(--ink-soft); font-size: 15px; line-height: 1.6; }\n\n.d44-steps[_ngcontent-%COMP%] { counter-reset: d44; display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 16px; padding: 0; list-style: none; }\n.d44-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-increment: d44; flex: 1 1 170px; position: relative; padding: 12px 14px 12px 46px;\n  border-radius: 12px; background: #fff8e8; border: 1px solid var(--gold-400);\n  color: var(--navy-900); font-size: 15px; font-weight: 700; line-height: 1.45;\n}\n.d44-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: counter(d44); position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%;\n  background: var(--gold-500); color: #fff; font-size: 13px;\n}\n\n.d44-points[_ngcontent-%COMP%] { margin: 0 0 16px; padding-left: 22px; color: var(--ink-soft); font-size: 16px; line-height: 1.7; }\n.d44-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin: 4px 0; }\n.d44-points[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker { color: var(--gold-500); }\n\n.d44-highlight[_ngcontent-%COMP%] {\n  margin: 0 0 16px; padding: 14px 18px; border-radius: 14px;\n  background: linear-gradient(120deg, var(--navy-800), var(--navy-600)); color: #fff;\n  font-size: 17px; font-weight: 700; line-height: 1.6;\n}\n.d44-result[_ngcontent-%COMP%] { margin-bottom: 18px; padding: 14px 18px; border-left: 4px solid var(--gold-500); border-radius: 4px 12px 12px 4px; background: var(--paper-alt); }\n.d44-result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--navy-800); font-size: 15.5px; }\n.d44-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 4px 0 0; color: var(--ink-soft); font-size: 15.5px; line-height: 1.7; }\n\n.d44-photos[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 12px; }\n.d44-photos[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] { margin: 0; min-width: 0; }\n.d44-photos[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block; width: 100%; padding: 0; border: 1px solid var(--navy-100); border-radius: 10px;\n  overflow: hidden; background: var(--navy-50); cursor: zoom-in;\n}\n.d44-photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.d44-photos[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] { margin-top: 6px; color: var(--ink-mute); font-size: 13.5px; line-height: 1.45; }\n\n.d44-library[_ngcontent-%COMP%] { margin-top: 34px; }\n.d44-filters[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 16px; }\n.d44-filter[_ngcontent-%COMP%] {\n  min-height: 44px; padding: 0 16px; border-radius: 999px; cursor: pointer;\n  border: 1px solid var(--navy-100); background: var(--navy-50); color: var(--navy-800);\n  font: inherit; font-size: 15px; font-weight: 700;\n}\n.d44-filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { margin-left: 4px; color: var(--ink-mute); font-weight: 600; }\n.d44-filter.is-on[_ngcontent-%COMP%] { background: var(--navy-700); border-color: var(--navy-700); color: #fff; }\n.d44-filter.is-on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--gold-400); }\n@media (hover: hover) { .d44-filter[_ngcontent-%COMP%]:not(.is-on):hover { background: var(--navy-100); } }\n.d44-docs[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 0; padding: 0; list-style: none; }\n.d44-docs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }\n.d44-doc-cat[_ngcontent-%COMP%] { color: var(--gold-600); font-size: 12.5px; font-weight: 800; }\n.d44-doc-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 16px; font-weight: 700; line-height: 1.45; }\n.d44-doc-meta[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 13.5px; }\n\n.d44-lightbox[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center;\n  gap: 12px; padding: 24px; background: rgba(8, 21, 47, .9);\n}\n.d44-lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { max-width: 100%; max-height: 80vh; border-radius: 10px; background: #fff; }\n.d44-lightbox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 900px; margin: 0; color: #fff; font-size: 16px; text-align: center; }\n.d44-lb-close[_ngcontent-%COMP%] { position: absolute; top: 16px; right: 16px; width: 48px; height: 48px; border: 0; border-radius: 50%; background: #fff; color: var(--navy-900); font-size: 20px; cursor: pointer; }\n\n@media (max-width: 900px) {\n  .d44-hero[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d44-hero-img[_ngcontent-%COMP%] { min-height: 0; aspect-ratio: 16 / 9; }\n  .d44-blocks[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d44-docs[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d44-flow-arrow[_ngcontent-%COMP%] { display: none; }\n}\n@media (prefers-reduced-motion: reduce) { .d44-flow-step[_ngcontent-%COMP%] { transition: none; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension4Component, [{
        type: Component,
        args: [{ selector: 'app-dimension4', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    PagerComponent,
                    LineChartComponent, SmartWheelComponent
                ], template: "<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 -->\n<div class=\"d4-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d4-video\" autoplay muted loop playsinline preload=\"auto\" poster=\"video/school-center-poster.jpg\"\n    (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school-center.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d4-veil\"></div>\n</div>\n\n<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- nav \u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14 \u0E41\u0E25\u0E30\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E49\u0E32\u0E22\u0E2A\u0E38\u0E14 -->\n<nav class=\"d4-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\">\n  <button type=\"button\" class=\"d4-nav-btn\" *ngFor=\"let group of groups\" [class.is-open]=\"open() === group.key\"\n    (click)=\"selectGroup(group.key)\" [attr.aria-label]=\"group.key + ' ' + group.title\">\n    <span class=\"d4-nav-no\">{{ group.key }}</span>\n    <span class=\"d4-nav-tip\">{{ group.title }}</span>\n  </button>\n  <button type=\"button\" class=\"d4-nav-btn d4-nav-back\" *ngIf=\"open()\" (click)=\"backToIndex()\"\n    aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\">\n    <span class=\"d4-nav-no\" aria-hidden=\"true\">\u21B6</span>\n    <span class=\"d4-nav-tip\">\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4</span>\n  </button>\n</nav>\n\n<ng-template #d4Indicators>\n  <div class=\"assessment-indicators\" style=\"margin-bottom:40px\" *ngIf=\"currentGroup as group\">\n    <h3>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 {{ group.count }} \u0E02\u0E49\u0E2D</h3>\n    <ol>\n      <li *ngFor=\"let indicator of d.indicators[group.indicatorKey]\">{{ indicator }}</li>\n    </ol>\n  </div>\n</ng-template>\n\n<section class=\"section d4-intro\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent intro-glass\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 (PDCAR) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/pdcar-quality-learning.html \u0E43\u0E19\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 pdcaData -->\n<section class=\"section-tight\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"d4-pdcar\" appReveal>\n      <iframe src=\"/models/pdcar-quality-learning.html\"\n        title=\"\u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 PDCAR\" loading=\"lazy\" scrolling=\"no\"\n        [style.height.px]=\"pdcarModelHeight()\"></iframe>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E27\u0E07\u0E25\u0E49\u0E2D SMART Student \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D 4 \u0E2B\u0E21\u0E27\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section d4-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19</p>\n    <div class=\"d4-grid\">\n      <button type=\"button\" class=\"d4-card\" *ngFor=\"let group of groups; let i = index\" appReveal=\"zoom\"\n        [revealDelay]=\"i * 70\" (click)=\"selectGroup(group.key)\">\n        <span class=\"d4-card-no\">{{ group.key }}</span>\n        <span class=\"d4-card-title\">{{ group.title }}</span>\n        <span class=\"d4-card-count\">{{ group.count }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</span>\n        <span class=\"d4-card-go\">\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A</span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section-tight d4-detail\" *ngIf=\"currentGroup as group\">\n  <div class=\"wrap\">\n    <div class=\"d4-detail-head\">\n      <button type=\"button\" class=\"d4-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14</button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.1 \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '4.1'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.1\" title=\"\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.design.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d4Indicators\"></ng-container>\n    <!-- \u0E42\u0E21\u0E40\u0E14\u0E25\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 8 \u0E02\u0E31\u0E49\u0E19 \u00B7 \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/learning-design-steps-model.html \u0E43\u0E19\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 content -->\n    <div class=\"d4-pdcar\" appReveal style=\"margin-bottom:28px\">\n      <iframe src=\"/models/learning-design-steps-model.html\" title=\"MODEL \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 8 \u0E02\u0E31\u0E49\u0E19\"\n        scrolling=\"no\" [style.height.px]=\"designStepsHeight()\"></iframe>\n    </div>\n\n    <!-- \u0E42\u0E21\u0E40\u0E14\u0E25\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 4 \u0E02\u0E31\u0E49\u0E19 \u00B7 \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/learning-design-model.html \u0E43\u0E19\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 content -->\n    <div class=\"d4-pdcar\" appReveal>\n      <iframe src=\"/models/learning-design-model.html\" title=\"MODEL \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 4 \u0E02\u0E31\u0E49\u0E19\"\n        scrolling=\"no\" [style.height.px]=\"designModelHeight()\"></iframe>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.2 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '4.2'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.2\" title=\"\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\"\n      [lead]=\"d.classroom.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d4Indicators\"></ng-container>\n\n    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ACTIVITY MODEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n    <div class=\"sec-head\" appReveal style=\"margin-top:8px\">\n      <h3 class=\"sec-title\" style=\"font-size:28px\">ACTIVITY MODEL</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\n      \u0E01\u0E23\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E22\u0E36\u0E14\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 8 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E35\u0E48\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E07\u0E08\u0E23\n      \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u0E25\u0E07\u0E21\u0E37\u0E2D\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25 \u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\n    </p>\n    <div appReveal style=\"margin-bottom:34px\"><app-smart-wheel /></div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let p of d.classroom.practices; let i = index\" appReveal\n        [revealDelay]=\"i * 70\">\n        <div style=\"width:38px;height:38px;border-radius:11px;display:grid;place-items:center;\n                    background:#eef4fc;color:#183d80;font-weight:700;border:1px solid #d8e6f8;\n                    margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ p.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ p.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.3 \u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '4.3'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.3\" title=\"\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.assessment.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d4Indicators\"></ng-container>\n\n    <div class=\"steps\" style=\"margin-bottom:38px\">\n      <div class=\"step-item\" *ngFor=\"let p of d.assessment.points; let i = index\" appReveal=\"left\"\n        [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <app-line-chart [title]=\"d.assessment.outcome.caption\"\n      subtitle=\"\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n      [labels]=\"d.assessment.outcome.years\" [series]=\"outcomeSeries\" [min]=\"50\" [max]=\"100\"\n      [note]=\"d.assessment.outcome.note\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.4 \u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '4.4'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.4\" title=\"\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49\" [lead]=\"d.useResults.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d4Indicators\"></ng-container>\n\n    <!-- \u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48 1 \u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01 -->\n    <div class=\"d44-hero\" appReveal>\n      <img class=\"d44-hero-img\" [src]=\"d.useResults.heroImage\" [alt]=\"d.useResults.heroCaption\" loading=\"lazy\">\n      <div class=\"d44-hero-copy\">\n        <p class=\"d44-hero-kicker\">\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49</p>\n        <h3 class=\"d44-hero-title\">{{ d.useResults.tagline }}</h3>\n        <p class=\"d44-hero-text\">{{ d.useResults.intro }}</p>\n      </div>\n    </div>\n\n    <!-- \u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48 2 \u0E41\u0E1C\u0E19\u0E20\u0E32\u0E1E\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23 -->\n    <div class=\"d44-flow\" appReveal>\n      <ng-container *ngFor=\"let s of d.useResults.steps; let i = index; let last = last\">\n        <button type=\"button\" class=\"d44-flow-step\" (click)=\"scrollToD44(i)\">\n          <span class=\"d44-flow-no\">{{ i + 1 }}</span>\n          <span class=\"d44-flow-name\">{{ s.short }}</span>\n        </button>\n        <span class=\"d44-flow-arrow\" *ngIf=\"!last\" aria-hidden=\"true\">\u2192</span>\n      </ng-container>\n    </div>\n\n    <!-- \u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 4 \u0E43\u0E1A -->\n    <div class=\"d44-cards\">\n      <article class=\"card d44-card\" *ngFor=\"let s of d.useResults.steps; let i = index\" [id]=\"'d44-step-' + i\" appReveal>\n        <header class=\"d44-card-head\">\n          <span class=\"d44-card-no\">{{ i + 1 }}</span>\n          <div>\n            <p class=\"d44-card-kicker\">{{ s.short }}</p>\n            <h3 class=\"card-title d44-card-title\">{{ s.title }}</h3>\n          </div>\n        </header>\n        <p class=\"card-body d44-lead\">{{ s.lead }}</p>\n\n        <div class=\"d44-blocks\" *ngIf=\"s.blocks.length\">\n          <div class=\"d44-block\" *ngFor=\"let b of s.blocks; let j = index\">\n            <span class=\"d44-block-no\">{{ j + 1 }}</span>\n            <h4>{{ b.label }}</h4>\n            <p>{{ b.text }}</p>\n          </div>\n        </div>\n\n        <ol class=\"d44-steps\" *ngIf=\"s.flow.length\">\n          <li *ngFor=\"let f of s.flow\">{{ f }}</li>\n        </ol>\n\n        <ul class=\"d44-points\">\n          <li *ngFor=\"let pt of s.points\">{{ pt }}</li>\n        </ul>\n\n        <p class=\"d44-highlight\" *ngIf=\"s.highlight\">{{ s.highlight }}</p>\n\n        <div class=\"d44-result\">\n          <strong>\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19</strong>\n          <p>{{ s.result }}</p>\n        </div>\n\n        <div class=\"d44-photos\">\n          <figure *ngFor=\"let ph of s.photos\">\n            <button type=\"button\" (click)=\"d44Lightbox.set(ph)\" [attr.aria-label]=\"'\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21: ' + ph.caption\">\n              <img [src]=\"ph.src\" [alt]=\"ph.caption\" loading=\"lazy\">\n            </button>\n            <figcaption>{{ ph.caption }}</figcaption>\n          </figure>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19</h3>\n      <div class=\"sec-rule\"></div>\n      <p class=\"sec-lead\">\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568\n        \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</p>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-gold\" *ngFor=\"let e of d.useResults.evidence; let i = index\" appReveal\n        [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ e.label }}</h3>\n        <div style=\"display:flex;align-items:baseline;gap:14px;margin:14px 0 8px\">\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:29px;font-weight:700;color:#6b7a94\">\n            {{ e.from | number: '1.2-2' }}\n          </span>\n          <span style=\"font-size:22px;color:#82ade4\">\u2192</span>\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:36px;font-weight:700;color:#132f63\">\n            {{ e.to | number: '1.2-2' }}<span style=\"font-size:16px;color:#6b7a94;margin-left:4px\">{{ e.unit }}</span>\n          </span>\n          <span class=\"up\" style=\"margin-left:auto\">+{{ (e.to - e.from) | number: '1.2-2' }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15px\">{{ e.note }}</p>\n      </div>\n    </div>\n\n    <!-- \u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E25\u0E31\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 -->\n    <div class=\"card d44-library\" appReveal>\n      <h3 class=\"card-title\">\u0E04\u0E25\u0E31\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49</h3>\n      <div class=\"d44-filters\" role=\"group\" aria-label=\"\u0E01\u0E23\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E15\u0E32\u0E21\u0E2B\u0E21\u0E27\u0E14\">\n        <button type=\"button\" class=\"d44-filter\" [class.is-on]=\"d44Filter() === ''\" (click)=\"d44Filter.set('')\">\n          \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 <span>{{ d.useResults.library.length }}</span>\n        </button>\n        <button type=\"button\" class=\"d44-filter\" *ngFor=\"let c of d.useResults.libraryCategories\"\n          [class.is-on]=\"d44Filter() === c\" (click)=\"d44Filter.set(c)\">\n          {{ c }} <span>{{ d44Count(c) }}</span>\n        </button>\n      </div>\n      <ul class=\"d44-docs\">\n        <li *ngFor=\"let doc of d44Docs()\">\n          <span class=\"d44-doc-cat\">{{ doc.category }}</span>\n          <span class=\"d44-doc-title\">{{ doc.title }}</span>\n          <span class=\"d44-doc-meta\">\n            <ng-container *ngIf=\"doc.year\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ doc.year }} \u00B7 </ng-container>\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E2B\u0E19\u0E49\u0E32 {{ doc.page }}\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\" [items]=\"gallery\"\n      [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section section-alt\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" kicker=\"\u0E2A\u0E23\u0E38\u0E1B\" title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\" appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager prevPath=\"/dimension-3\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\" nextPath=\"/dimension-5\"\n        nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<!-- \u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D 4.4 -->\n<div class=\"d44-lightbox\" *ngIf=\"d44Lightbox() as lb\" (click)=\"d44Lightbox.set(null)\">\n  <button type=\"button\" class=\"d44-lb-close\" aria-label=\"\u0E1B\u0E34\u0E14\">\u2715</button>\n  <img [src]=\"lb.src\" [alt]=\"lb.caption\">\n  <p>{{ lb.caption }}</p>\n</div>\n\n<app-home-fab />", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d4-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d4-video { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d4-veil {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .74) 0%, rgba(8, 21, 47, .66) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n/* \u0E1E\u0E37\u0E49\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E2D\u0E01\u0E01\u0E23\u0E2D\u0E1A\u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n:host ::ng-deep .steps::before { background: var(--gold-400); }\n:host ::ng-deep .step-item h4,\n:host ::ng-deep .step-item p,\n:host ::ng-deep .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E40\u0E07\u0E32 */\n:host ::ng-deep .card .step-item h4 { color: var(--navy-900); }\n:host ::ng-deep .card .step-item p,\n:host ::ng-deep .card .bullets > li { color: var(--ink-soft); }\n:host ::ng-deep .card .steps::before { background: var(--gold-400); }\n:host ::ng-deep .card .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Hybrid: \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14 \u2192 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2192 \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d4-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }\n.d4-card {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 164px;\n  padding: 18px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d4-card:active { transform: scale(.985); }\n@media (hover: hover) { .d4-card:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); } }\n.d4-card-no {\n  display: grid; place-items: center; width: 50px; height: 42px;\n  color: #fff; font-size: 18px; font-weight: 800; border-radius: 11px;\n  background: var(--navy-700); font-variant-numeric: tabular-nums;\n}\n.d4-card-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d4-card-count { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d4-card-go { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d4-intro { padding-bottom: 28px; }\n.d4-index { padding-top: 36px; padding-bottom: 48px; }\n.d4-detail { padding-bottom: 8px; background: transparent; scroll-margin-top: var(--nav-h); }\n.d4-detail + .section { padding-top: 30px; }\n:host ::ng-deep app-section-header + .assessment-indicators { margin-bottom: 32px; }\n.d4-detail-head { margin-bottom: 12px; }\n.d4-detail-title h2 { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d4-detail-kicker { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n.d4-back {\n  flex: none; min-height: 44px; padding: 0 15px; color: var(--navy-700);\n  font-family: inherit; font-size: 15.5px; font-weight: 800;\n  border: 1px solid var(--navy-200); border-radius: 999px; background: var(--paper);\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d4-back:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n.d4-indicators { margin-top: 18px; padding: 18px 22px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--navy-50); }\n.d4-indicators h3 { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d4-indicators ol { margin: 0; padding-left: 23px; }\n.d4-indicators li { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d4-indicators li:last-child { margin-bottom: 0; }\n\n/* nav \u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 \u2014 \u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 */\n.d4-nav { position: fixed; right: 18px; top: 50%; transform: translateY(-50%); z-index: 60; display: grid; gap: 10px; }\n.d4-nav-btn {\n  position: relative; display: grid; place-items: center; width: 54px; height: 54px;\n  color: var(--navy-700); font-family: inherit; font-size: 15px; font-weight: 800;\n  border: 1px solid var(--line); border-radius: 50%; background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18); cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.d4-nav-btn:active { transform: scale(.94); }\n.d4-nav-no { font-variant-numeric: tabular-nums; }\n.d4-nav-btn.is-open { color: #fff; border-color: var(--navy-600); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(30, 77, 158, .42); }\n.d4-nav-back { color: #fff; font-size: 27px; border-color: var(--gold-400); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(8, 21, 47, .42); }\n.d4-nav-tip {\n  position: absolute; right: calc(100% + 12px); top: 50%; transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px)); padding: 8px 14px; color: #fff; font-size: 14.5px; font-weight: 700; line-height: 1.35;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md); opacity: 0; pointer-events: none; transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) { .d4-nav-btn:hover { transform: scale(1.06); } .d4-nav-btn:hover .d4-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); } }\n\n@media (max-width: 900px) {\n  .d4-nav { right: auto; left: 50%; top: auto; bottom: calc(18px + env(safe-area-inset-bottom)); transform: translateX(-50%); grid-auto-flow: column; padding: 8px 10px; border-radius: 999px; background: rgba(247, 251, 255, .94); box-shadow: 0 10px 30px rgba(8, 21, 47, .28); backdrop-filter: blur(10px); }\n  .d4-nav-btn { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d4-nav-tip { display: none; }\n}\n@media (max-width: 560px) {\n  .d4-nav { gap: 4px; padding: 6px 8px; }\n  .d4-nav-btn { width: 44px; height: 44px; font-size: 13px; }\n  .d4-nav-back { font-size: 23px; }\n  .d4-grid { grid-template-columns: 1fr; }\n  .d4-card { min-height: 152px; padding: 17px; }\n  .d4-detail-head { margin-bottom: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d4-video { display: none; }\n  .d4-bg { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n/* nav \u0E17\u0E38\u0E01\u0E02\u0E19\u0E32\u0E14\u0E08\u0E2D: \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E25\u0E2D\u0E22\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 */\n.d4-nav {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E42\u0E21\u0E40\u0E14\u0E25\u0E27\u0E07\u0E08\u0E23 PDCAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* \u0E27\u0E32\u0E07\u0E17\u0E31\u0E1A\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 \u0E2A\u0E35\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E16\u0E39\u0E01\u0E1B\u0E23\u0E31\u0E1A\u0E43\u0E2B\u0E49\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E42\u0E21\u0E40\u0E14\u0E25\u0E40\u0E2D\u0E07 */\n.d4-pdcar {\n  overflow: hidden;\n  border-radius: var(--radius);\n  background: transparent;\n}\n.d4-pdcar iframe {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.4 \u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d44-hero {\n  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);\n  overflow: hidden; margin-bottom: 26px;\n  border-radius: var(--radius); background: var(--paper); box-shadow: var(--shadow-md);\n}\n.d44-hero-img { display: block; width: 100%; height: 100%; min-height: 260px; object-fit: cover; }\n.d44-hero-copy { padding: 28px 30px; border-top: 4px solid var(--gold-500); }\n.d44-hero-kicker { margin: 0 0 6px; color: var(--navy-600); font-size: 14px; font-weight: 800; letter-spacing: .04em; }\n.d44-hero-title { margin: 0 0 12px; color: var(--navy-900); font-size: 24px; font-weight: 800; line-height: 1.4; }\n.d44-hero-text { margin: 0; color: var(--ink-soft); font-size: 16.5px; line-height: 1.75; }\n\n.d44-flow {\n  display: flex; align-items: stretch; justify-content: center; gap: 8px; flex-wrap: wrap;\n  margin-bottom: 30px;\n}\n.d44-flow-step {\n  display: flex; align-items: center; gap: 10px; min-height: 56px; padding: 10px 18px 10px 10px;\n  border: 1px solid rgba(255, 255, 255, .6); border-radius: 999px; cursor: pointer;\n  background: rgba(255, 255, 255, .94); color: var(--navy-900); font: inherit; font-size: 16px; font-weight: 800;\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .25);\n  transition: transform .2s var(--ease);\n}\n.d44-flow-no {\n  display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;\n  background: var(--navy-700); color: #fff; font-size: 17px;\n}\n.d44-flow-arrow { align-self: center; color: var(--gold-400); font-size: 24px; font-weight: 800; text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n@media (hover: hover) { .d44-flow-step:hover { transform: translateY(-3px); } }\n\n.d44-cards { display: grid; gap: 22px; margin-bottom: 40px; }\n.d44-card { scroll-margin-top: calc(var(--nav-h) + 16px); border-top: 4px solid var(--navy-600); }\n.d44-card:nth-child(2) { border-top-color: var(--gold-500); }\n.d44-card:nth-child(3) { border-top-color: var(--navy-400); }\n.d44-card:nth-child(4) { border-top-color: var(--gold-600); }\n.d44-card-head { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }\n.d44-card-no {\n  flex: 0 0 auto; display: grid; place-items: center; width: 50px; height: 50px; border-radius: 15px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-500)); color: #fff; font-size: 23px; font-weight: 800;\n}\n.d44-card-kicker { margin: 0; color: var(--gold-600); font-size: 14px; font-weight: 800; }\n.d44-card-title { margin: 0; font-size: 21px; }\n.d44-lead { margin: 0 0 16px; }\n\n.d44-blocks { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 16px; }\n.d44-block { position: relative; padding: 16px 16px 14px; border-radius: 14px; background: var(--navy-50); border: 1px solid var(--navy-100); }\n.d44-block-no { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--gold-500); color: #fff; font-size: 14px; font-weight: 800; }\n.d44-block h4 { margin: 8px 0 4px; color: var(--navy-800); font-size: 16px; font-weight: 800; }\n.d44-block p { margin: 0; color: var(--ink-soft); font-size: 15px; line-height: 1.6; }\n\n.d44-steps { counter-reset: d44; display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 16px; padding: 0; list-style: none; }\n.d44-steps li {\n  counter-increment: d44; flex: 1 1 170px; position: relative; padding: 12px 14px 12px 46px;\n  border-radius: 12px; background: #fff8e8; border: 1px solid var(--gold-400);\n  color: var(--navy-900); font-size: 15px; font-weight: 700; line-height: 1.45;\n}\n.d44-steps li::before {\n  content: counter(d44); position: absolute; left: 12px; top: 50%; transform: translateY(-50%);\n  display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%;\n  background: var(--gold-500); color: #fff; font-size: 13px;\n}\n\n.d44-points { margin: 0 0 16px; padding-left: 22px; color: var(--ink-soft); font-size: 16px; line-height: 1.7; }\n.d44-points li { margin: 4px 0; }\n.d44-points li::marker { color: var(--gold-500); }\n\n.d44-highlight {\n  margin: 0 0 16px; padding: 14px 18px; border-radius: 14px;\n  background: linear-gradient(120deg, var(--navy-800), var(--navy-600)); color: #fff;\n  font-size: 17px; font-weight: 700; line-height: 1.6;\n}\n.d44-result { margin-bottom: 18px; padding: 14px 18px; border-left: 4px solid var(--gold-500); border-radius: 4px 12px 12px 4px; background: var(--paper-alt); }\n.d44-result strong { color: var(--navy-800); font-size: 15.5px; }\n.d44-result p { margin: 4px 0 0; color: var(--ink-soft); font-size: 15.5px; line-height: 1.7; }\n\n.d44-photos { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 12px; }\n.d44-photos figure { margin: 0; min-width: 0; }\n.d44-photos button {\n  display: block; width: 100%; padding: 0; border: 1px solid var(--navy-100); border-radius: 10px;\n  overflow: hidden; background: var(--navy-50); cursor: zoom-in;\n}\n.d44-photos img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.d44-photos figcaption { margin-top: 6px; color: var(--ink-mute); font-size: 13.5px; line-height: 1.45; }\n\n.d44-library { margin-top: 34px; }\n.d44-filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 16px; }\n.d44-filter {\n  min-height: 44px; padding: 0 16px; border-radius: 999px; cursor: pointer;\n  border: 1px solid var(--navy-100); background: var(--navy-50); color: var(--navy-800);\n  font: inherit; font-size: 15px; font-weight: 700;\n}\n.d44-filter span { margin-left: 4px; color: var(--ink-mute); font-weight: 600; }\n.d44-filter.is-on { background: var(--navy-700); border-color: var(--navy-700); color: #fff; }\n.d44-filter.is-on span { color: var(--gold-400); }\n@media (hover: hover) { .d44-filter:not(.is-on):hover { background: var(--navy-100); } }\n.d44-docs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin: 0; padding: 0; list-style: none; }\n.d44-docs li { display: flex; flex-direction: column; gap: 2px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 12px; background: #fff; }\n.d44-doc-cat { color: var(--gold-600); font-size: 12.5px; font-weight: 800; }\n.d44-doc-title { color: var(--navy-900); font-size: 16px; font-weight: 700; line-height: 1.45; }\n.d44-doc-meta { color: var(--ink-mute); font-size: 13.5px; }\n\n.d44-lightbox {\n  position: fixed; inset: 0; z-index: 1000; display: flex; flex-direction: column; align-items: center; justify-content: center;\n  gap: 12px; padding: 24px; background: rgba(8, 21, 47, .9);\n}\n.d44-lightbox img { max-width: 100%; max-height: 80vh; border-radius: 10px; background: #fff; }\n.d44-lightbox p { max-width: 900px; margin: 0; color: #fff; font-size: 16px; text-align: center; }\n.d44-lb-close { position: absolute; top: 16px; right: 16px; width: 48px; height: 48px; border: 0; border-radius: 50%; background: #fff; color: var(--navy-900); font-size: 20px; cursor: pointer; }\n\n@media (max-width: 900px) {\n  .d44-hero { grid-template-columns: 1fr; }\n  .d44-hero-img { min-height: 0; aspect-ratio: 16 / 9; }\n  .d44-blocks { grid-template-columns: 1fr; }\n  .d44-docs { grid-template-columns: 1fr; }\n  .d44-flow-arrow { display: none; }\n}\n@media (prefers-reduced-motion: reduce) { .d44-flow-step { transition: none; } }\n"] }]
    }], null, { resizePdcarModel: [{
            type: HostListener,
            args: ['window:message', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension4Component, { className: "Dimension4Component", filePath: "src/app/pages/dimension4/dimension4.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=dimension4.component.js.map