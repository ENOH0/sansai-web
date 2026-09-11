import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension4Component_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function Dimension4Component_button_7_Template_button_click_0_listener() { const group_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r4.key)); });
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 15);
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
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function Dimension4Component_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 15);
    i0.ɵɵtext(4, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4");
    i0.ɵɵelementEnd()();
} }
function Dimension4Component_section_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19)(2, "div", 20)(3, "p", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.d.intro);
} }
function Dimension4Component_section_10_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function Dimension4Component_section_10_button_9_Template_button_click_0_listener() { const group_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r8.key)); });
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 32);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 33);
    i0.ɵɵtext(8, "\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r9 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r8.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r8.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", group_r8.count, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
} }
function Dimension4Component_section_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 22)(1, "div", 19)(2, "div", 23)(3, "h2", 24);
    i0.ɵɵtext(4, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 26);
    i0.ɵɵtext(7, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 27);
    i0.ɵɵtemplate(9, Dimension4Component_section_10_button_9_Template, 9, 4, "button", 28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r4.groups);
} }
function Dimension4Component_section_11_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const indicator_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(indicator_r11);
} }
function Dimension4Component_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 34)(1, "div", 19)(2, "div", 35)(3, "button", 36);
    i0.ɵɵlistener("click", function Dimension4Component_section_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵtext(4, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "p", 37);
    i0.ɵɵtext(7, "\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 38)(11, "h3");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ol");
    i0.ɵɵtemplate(14, Dimension4Component_section_11_li_14_Template, 2, 1, "li", 39);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const group_r12 = ctx.ngIf;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate2("", group_r12.key, " ", group_r12.title, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 ", group_r12.count, " \u0E02\u0E49\u0E2D");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[group_r12.indicatorKey]);
} }
function Dimension4Component_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 40)(1, "div", 19);
    i0.ɵɵelement(2, "app-section-header", 41)(3, "app-cycle-flow", 42);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.design.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.design.cycle);
} }
function Dimension4Component_section_13_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 48);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 21);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r14 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r14 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r13.text);
} }
function Dimension4Component_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19);
    i0.ɵɵelement(2, "app-section-header", 43);
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵtemplate(4, Dimension4Component_section_13_div_4_Template, 7, 4, "div", 45);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.classroom.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.classroom.practices);
} }
function Dimension4Component_section_14_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r16 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r15.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r15.text);
} }
function Dimension4Component_section_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 40)(1, "div", 19);
    i0.ɵɵelement(2, "app-section-header", 49);
    i0.ɵɵelementStart(3, "div", 50);
    i0.ɵɵtemplate(4, Dimension4Component_section_14_div_4_Template, 5, 3, "div", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "app-line-chart", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.assessment.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.assessment.points);
    i0.ɵɵadvance();
    i0.ɵɵproperty("title", ctx_r4.d.assessment.outcome.caption)("labels", ctx_r4.d.assessment.outcome.years)("series", ctx_r4.outcomeSeries)("min", 50)("max", 100)("note", ctx_r4.d.assessment.outcome.note);
} }
function Dimension4Component_section_15_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60)(1, "div", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 63);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r18 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ", i_r18 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r17.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r17.text);
} }
function Dimension4Component_section_15_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64)(1, "h3", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65)(4, "span", 66);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 67);
    i0.ɵɵtext(8, "\u2192");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 68);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementStart(12, "span", 69);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "span", 70);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p", 71);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const e_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r20 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(e_r19.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(6, 7, e_r19.from, "1.2-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 10, e_r19.to, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r19.unit);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("+", i0.ɵɵpipeBind2(16, 13, e_r19.to - e_r19.from, "1.2-2"), "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(e_r19.note);
} }
function Dimension4Component_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19);
    i0.ɵɵelement(2, "app-section-header", 54);
    i0.ɵɵelementStart(3, "div", 55);
    i0.ɵɵtemplate(4, Dimension4Component_section_15_div_4_Template, 7, 4, "div", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 23)(6, "h3", 57);
    i0.ɵɵtext(7, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 25);
    i0.ɵɵelementStart(9, "p", 58);
    i0.ɵɵtext(10, "\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 44);
    i0.ɵɵtemplate(12, Dimension4Component_section_15_div_12_Template, 19, 16, "div", 59);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.useResults.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.steps);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.useResults.evidence);
} }
function Dimension4Component_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18)(1, "div", 19);
    i0.ɵɵelement(2, "app-photo-gallery", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r4.gallery)("light", true);
} }
function Dimension4Component_section_17_div_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r21 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r21);
} }
function Dimension4Component_section_17_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "h3", 78);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 79);
    i0.ɵɵtemplate(4, Dimension4Component_section_17_div_4_li_4_Template, 2, 1, "li", 39);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("revealDelay", i_r23 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r22);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[key_r22]);
} }
function Dimension4Component_section_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 40)(1, "div", 19);
    i0.ɵɵelement(2, "app-section-header", 73);
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵtemplate(4, Dimension4Component_section_17_div_4_Template, 5, 3, "div", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelement(6, "app-pager", 76);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorKeys);
} }
export class Dimension4Component {
    gallery = GALLERY['d4'];
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension4Component, selectors: [["app-dimension4"]], decls: 19, vars: 15, consts: [["bgv", ""], ["aria-hidden", "true", 1, "d4-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-center-poster.jpg", 1, "d4-video", 3, "loadedmetadata", "canplay"], ["src", "video/school-center.mp4", "type", "video/mp4"], [1, "d4-veil"], [3, "no", "weight", "name", "subtitle"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 1, "d4-nav"], ["type", "button", "class", "d4-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "d4-nav-btn d4-nav-back", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 3, "click", 4, "ngIf"], ["class", "section", 4, "ngIf"], ["class", "section d4-index", 4, "ngIf"], ["class", "section-tight d4-detail", 4, "ngIf"], ["class", "section section-alt", 4, "ngIf"], ["type", "button", 1, "d4-nav-btn", 3, "click"], [1, "d4-nav-no"], [1, "d4-nav-tip"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 1, "d4-nav-btn", "d4-nav-back", 3, "click"], ["aria-hidden", "true", 1, "d4-nav-no"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [1, "section", "d4-index"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], [1, "d4-grid"], ["type", "button", "class", "d4-card", "appReveal", "zoom", 3, "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d4-card", 3, "click", "revealDelay"], [1, "d4-card-no"], [1, "d4-card-title"], [1, "d4-card-count"], [1, "d4-card-go"], [1, "section-tight", "d4-detail"], [1, "d4-detail-head"], ["type", "button", 1, "d4-back", 3, "click"], [1, "d4-detail-kicker"], [1, "d4-indicators"], [4, "ngFor", "ngForOf"], [1, "section", "section-alt"], ["num", "4.1", "title", "\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "light", "lead"], [3, "steps"], ["num", "4.2", "title", "\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "light", "lead"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], [1, "card-title"], ["num", "4.3", "title", "\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49", 3, "light", "lead"], [1, "steps", 2, "margin-bottom", "38px"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["subtitle", "\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "labels", "series", "min", "max", "note"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["num", "4.4", "title", "\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49", 3, "light", "lead"], [1, "grid", "grid-4", 2, "margin-bottom", "34px"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-lead"], ["class", "card card-gold", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17px"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "", 1, "card", "card-gold", 3, "revealDelay"], [2, "display", "flex", "align-items", "baseline", "gap", "14px", "margin", "14px 0 8px"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "29px", "font-weight", "700", "color", "#6b7a94"], [2, "font-size", "22px", "color", "#82ade4"], [2, "font-family", "'Sarabun',sans-serif", "font-size", "36px", "font-weight", "700", "color", "#132f63"], [2, "font-size", "16px", "color", "#6b7a94", "margin-left", "4px"], [1, "up", 2, "margin-left", "auto"], [1, "card-body", 2, "margin", "0", "font-size", "15px"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4", 3, "items", "light"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "light"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-3", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "nextPath", "/dimension-5", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "bullets", 2, "font-size", "15.5px"]], template: function Dimension4Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "video", 2, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension4Component_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension4Component_Template_video_canplay_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(3, "source", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-page-hero", 5);
            i0.ɵɵelementStart(6, "nav", 6);
            i0.ɵɵtemplate(7, Dimension4Component_button_7_Template, 5, 5, "button", 7)(8, Dimension4Component_button_8_Template, 5, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, Dimension4Component_section_9_Template, 5, 1, "section", 9)(10, Dimension4Component_section_10_Template, 10, 1, "section", 10)(11, Dimension4Component_section_11_Template, 15, 4, "section", 11)(12, Dimension4Component_section_12_Template, 4, 3, "section", 12)(13, Dimension4Component_section_13_Template, 5, 3, "section", 9)(14, Dimension4Component_section_14_Template, 6, 9, "section", 12)(15, Dimension4Component_section_15_Template, 13, 4, "section", 9)(16, Dimension4Component_section_16_Template, 3, 2, "section", 9)(17, Dimension4Component_section_17_Template, 7, 2, "section", 12);
            i0.ɵɵelement(18, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.groups);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
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
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.NgIf, i1.DecimalPipe, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            CycleFlowComponent, PagerComponent,
            LineChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d4-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d4-video[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d4-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .84) 0%, rgba(8, 21, 47, .76) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n[_nghost-%COMP%]     .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .step-item h4, \n[_nghost-%COMP%]     .step-item p, \n[_nghost-%COMP%]     .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n\n\n[_nghost-%COMP%]     .card .step-item h4 { color: var(--navy-900); }\n[_nghost-%COMP%]     .card .step-item p, \n[_nghost-%COMP%]     .card .bullets > li { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n\n\n.d4-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }\n.d4-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 164px;\n  padding: 18px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d4-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) { .d4-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); } }\n.d4-card-no[_ngcontent-%COMP%] {\n  display: grid; place-items: center; width: 50px; height: 42px;\n  color: #fff; font-size: 18px; font-weight: 800; border-radius: 11px;\n  background: var(--navy-700); font-variant-numeric: tabular-nums;\n}\n.d4-card-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d4-card-count[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d4-card-go[_ngcontent-%COMP%] { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d4-detail[_ngcontent-%COMP%] { background: transparent; scroll-margin-top: var(--nav-h); }\n.d4-detail-head[_ngcontent-%COMP%] { display: grid; gap: 12px; }\n.d4-detail-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d4-detail-kicker[_ngcontent-%COMP%] { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n.d4-back[_ngcontent-%COMP%] {\n  flex: none; min-height: 44px; padding: 0 15px; color: var(--navy-700);\n  font-family: inherit; font-size: 15.5px; font-weight: 800;\n  border: 1px solid var(--navy-200); border-radius: 999px; background: var(--paper);\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d4-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n.d4-indicators[_ngcontent-%COMP%] { margin-top: 18px; padding: 18px 22px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--navy-50); }\n.d4-indicators[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d4-indicators[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0; padding-left: 23px; }\n.d4-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d4-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n\n\n\n.d4-nav[_ngcontent-%COMP%] { position: fixed; right: 18px; top: 50%; transform: translateY(-50%); z-index: 60; display: grid; gap: 10px; }\n.d4-nav-btn[_ngcontent-%COMP%] {\n  position: relative; display: grid; place-items: center; width: 54px; height: 54px;\n  color: var(--navy-700); font-family: inherit; font-size: 15px; font-weight: 800;\n  border: 1px solid var(--line); border-radius: 50%; background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18); cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.d4-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n.d4-nav-no[_ngcontent-%COMP%] { font-variant-numeric: tabular-nums; }\n.d4-nav-btn.is-open[_ngcontent-%COMP%] { color: #fff; border-color: var(--navy-600); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(30, 77, 158, .42); }\n.d4-nav-back[_ngcontent-%COMP%] { color: #fff; font-size: 27px; border-color: var(--gold-400); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(8, 21, 47, .42); }\n.d4-nav-tip[_ngcontent-%COMP%] {\n  position: absolute; right: calc(100% + 12px); top: 50%; transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px)); padding: 8px 14px; color: #fff; font-size: 14.5px; font-weight: 700; line-height: 1.35;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md); opacity: 0; pointer-events: none; transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) { .d4-nav-btn[_ngcontent-%COMP%]:hover { transform: scale(1.06); } .d4-nav-btn[_ngcontent-%COMP%]:hover   .d4-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); } }\n\n@media (max-width: 900px) {\n  .d4-nav[_ngcontent-%COMP%] { right: auto; left: 50%; top: auto; bottom: calc(18px + env(safe-area-inset-bottom)); transform: translateX(-50%); grid-auto-flow: column; padding: 8px 10px; border-radius: 999px; background: rgba(247, 251, 255, .94); box-shadow: 0 10px 30px rgba(8, 21, 47, .28); backdrop-filter: blur(10px); }\n  .d4-nav-btn[_ngcontent-%COMP%] { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d4-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d4-nav[_ngcontent-%COMP%] { gap: 4px; padding: 6px 8px; }\n  .d4-nav-btn[_ngcontent-%COMP%] { width: 44px; height: 44px; font-size: 13px; }\n  .d4-nav-back[_ngcontent-%COMP%] { font-size: 23px; }\n  .d4-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d4-card[_ngcontent-%COMP%] { min-height: 152px; padding: 17px; }\n  .d4-detail-head[_ngcontent-%COMP%] { display: grid; gap: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d4-video[_ngcontent-%COMP%] { display: none; }\n  .d4-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n\n\n.d4-nav[_ngcontent-%COMP%] {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension4Component, [{
        type: Component,
        args: [{ selector: 'app-dimension4', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    CycleFlowComponent, PagerComponent,
                    LineChartComponent
                ], template: "<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 -->\n<div class=\"d4-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d4-video\" autoplay muted loop playsinline preload=\"auto\"\n         poster=\"video/school-center-poster.jpg\"\n         (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school-center.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d4-veil\"></div>\n</div>\n\n<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- nav \u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14 \u0E41\u0E25\u0E30\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E49\u0E32\u0E22\u0E2A\u0E38\u0E14 -->\n<nav class=\"d4-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\">\n  <button type=\"button\" class=\"d4-nav-btn\" *ngFor=\"let group of groups\"\n          [class.is-open]=\"open() === group.key\" (click)=\"selectGroup(group.key)\"\n          [attr.aria-label]=\"group.key + ' ' + group.title\">\n    <span class=\"d4-nav-no\">{{ group.key }}</span>\n    <span class=\"d4-nav-tip\">{{ group.title }}</span>\n  </button>\n  <button type=\"button\" class=\"d4-nav-btn d4-nav-back\" *ngIf=\"open()\"\n          (click)=\"backToIndex()\" aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\">\n    <span class=\"d4-nav-no\" aria-hidden=\"true\">\u21B6</span>\n    <span class=\"d4-nav-tip\">\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4</span>\n  </button>\n</nav>\n\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D 4 \u0E2B\u0E21\u0E27\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section d4-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19</p>\n    <div class=\"d4-grid\">\n      <button type=\"button\" class=\"d4-card\" *ngFor=\"let group of groups; let i = index\"\n              appReveal=\"zoom\" [revealDelay]=\"i * 70\" (click)=\"selectGroup(group.key)\">\n        <span class=\"d4-card-no\">{{ group.key }}</span>\n        <span class=\"d4-card-title\">{{ group.title }}</span>\n        <span class=\"d4-card-count\">{{ group.count }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</span>\n        <span class=\"d4-card-go\">\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A</span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section-tight d4-detail\" *ngIf=\"currentGroup as group\">\n  <div class=\"wrap\">\n    <div class=\"d4-detail-head\">\n      <button type=\"button\" class=\"d4-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14</button>\n      <div>\n        <p class=\"d4-detail-kicker\">\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01</p>\n        <h2>{{ group.key }} {{ group.title }}</h2>\n      </div>\n    </div>\n    <div class=\"d4-indicators\">\n      <h3>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 {{ group.count }} \u0E02\u0E49\u0E2D</h3>\n      <ol><li *ngFor=\"let indicator of d.indicators[group.indicatorKey]\">{{ indicator }}</li></ol>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.1 \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '4.1'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.1\" title=\"\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.design.lead\" />\n    <app-cycle-flow [steps]=\"d.design.cycle\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.2 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '4.2'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.2\" title=\"\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E0A\u0E31\u0E49\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19\" [lead]=\"d.classroom.lead\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let p of d.classroom.practices; let i = index\"\n           appReveal [revealDelay]=\"i * 70\">\n        <div style=\"width:38px;height:38px;border-radius:11px;display:grid;place-items:center;\n                    background:#eef4fc;color:#183d80;font-weight:700;border:1px solid #d8e6f8;\n                    margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ p.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ p.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.3 \u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '4.3'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.3\" title=\"\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\" [lead]=\"d.assessment.lead\" />\n\n    <div class=\"steps\" style=\"margin-bottom:38px\">\n      <div class=\"step-item\" *ngFor=\"let p of d.assessment.points; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <app-line-chart\n      [title]=\"d.assessment.outcome.caption\"\n      subtitle=\"\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E1C\u0E25\u0E17\u0E35\u0E48\u0E19\u0E33\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n      [labels]=\"d.assessment.outcome.years\"\n      [series]=\"outcomeSeries\"\n      [min]=\"50\" [max]=\"100\"\n      [note]=\"d.assessment.outcome.note\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 4.4 \u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '4.4'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"4.4\" title=\"\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49\" [lead]=\"d.useResults.lead\" />\n\n    <div class=\"grid grid-4\" style=\"margin-bottom:34px\">\n      <div class=\"card card-accent\" *ngFor=\"let s of d.useResults.steps; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ i + 1 }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ s.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ s.text }}</p>\n      </div>\n    </div>\n\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E19\u0E33\u0E1C\u0E25\u0E44\u0E1B\u0E43\u0E0A\u0E49</h3>\n      <div class=\"sec-rule\"></div>\n      <p class=\"sec-lead\">\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E1A\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E01\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566 \u0E41\u0E25\u0E30 2568 \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E04\u0E23\u0E39\u0E19\u0E33\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E1B\u0E23\u0E31\u0E1A\u0E41\u0E1C\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</p>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-gold\" *ngFor=\"let e of d.useResults.evidence; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ e.label }}</h3>\n        <div style=\"display:flex;align-items:baseline;gap:14px;margin:14px 0 8px\">\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:29px;font-weight:700;color:#6b7a94\">\n            {{ e.from | number: '1.2-2' }}\n          </span>\n          <span style=\"font-size:22px;color:#82ade4\">\u2192</span>\n          <span style=\"font-family:'Sarabun',sans-serif;font-size:36px;font-weight:700;color:#132f63\">\n            {{ e.to | number: '1.2-2' }}<span style=\"font-size:16px;color:#6b7a94;margin-left:4px\">{{ e.unit }}</span>\n          </span>\n          <span class=\"up\" style=\"margin-left:auto\">+{{ (e.to - e.from) | number: '1.2-2' }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15px\">{{ e.note }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\"\n      [items]=\"gallery\" [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section section-alt\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\"\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E17\u0E31\u0E49\u0E07 4 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-3\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n        nextPath=\"/dimension-5\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d4-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d4-video { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d4-veil {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .84) 0%, rgba(8, 21, 47, .76) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n/* \u0E1E\u0E37\u0E49\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E2D\u0E01\u0E01\u0E23\u0E2D\u0E1A\u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n:host ::ng-deep .steps::before { background: var(--gold-400); }\n:host ::ng-deep .step-item h4,\n:host ::ng-deep .step-item p,\n:host ::ng-deep .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E40\u0E07\u0E32 */\n:host ::ng-deep .card .step-item h4 { color: var(--navy-900); }\n:host ::ng-deep .card .step-item p,\n:host ::ng-deep .card .bullets > li { color: var(--ink-soft); }\n:host ::ng-deep .card .steps::before { background: var(--gold-400); }\n:host ::ng-deep .card .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Hybrid: \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 4 \u0E2B\u0E21\u0E27\u0E14 \u2192 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2192 \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d4-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }\n.d4-card {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 164px;\n  padding: 18px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d4-card:active { transform: scale(.985); }\n@media (hover: hover) { .d4-card:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); } }\n.d4-card-no {\n  display: grid; place-items: center; width: 50px; height: 42px;\n  color: #fff; font-size: 18px; font-weight: 800; border-radius: 11px;\n  background: var(--navy-700); font-variant-numeric: tabular-nums;\n}\n.d4-card-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d4-card-count { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d4-card-go { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d4-detail { background: transparent; scroll-margin-top: var(--nav-h); }\n.d4-detail-head { display: grid; gap: 12px; }\n.d4-detail-head h2 { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d4-detail-kicker { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n.d4-back {\n  flex: none; min-height: 44px; padding: 0 15px; color: var(--navy-700);\n  font-family: inherit; font-size: 15.5px; font-weight: 800;\n  border: 1px solid var(--navy-200); border-radius: 999px; background: var(--paper);\n  cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d4-back:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n.d4-indicators { margin-top: 18px; padding: 18px 22px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--navy-50); }\n.d4-indicators h3 { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d4-indicators ol { margin: 0; padding-left: 23px; }\n.d4-indicators li { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d4-indicators li:last-child { margin-bottom: 0; }\n\n/* nav \u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 \u2014 \u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 */\n.d4-nav { position: fixed; right: 18px; top: 50%; transform: translateY(-50%); z-index: 60; display: grid; gap: 10px; }\n.d4-nav-btn {\n  position: relative; display: grid; place-items: center; width: 54px; height: 54px;\n  color: var(--navy-700); font-family: inherit; font-size: 15px; font-weight: 800;\n  border: 1px solid var(--line); border-radius: 50%; background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18); cursor: pointer; -webkit-tap-highlight-color: transparent;\n}\n.d4-nav-btn:active { transform: scale(.94); }\n.d4-nav-no { font-variant-numeric: tabular-nums; }\n.d4-nav-btn.is-open { color: #fff; border-color: var(--navy-600); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(30, 77, 158, .42); }\n.d4-nav-back { color: #fff; font-size: 27px; border-color: var(--gold-400); background: linear-gradient(135deg, var(--navy-800), var(--navy-600)); box-shadow: 0 10px 26px rgba(8, 21, 47, .42); }\n.d4-nav-tip {\n  position: absolute; right: calc(100% + 12px); top: 50%; transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px)); padding: 8px 14px; color: #fff; font-size: 14.5px; font-weight: 700; line-height: 1.35;\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-radius: 10px; background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md); opacity: 0; pointer-events: none; transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) { .d4-nav-btn:hover { transform: scale(1.06); } .d4-nav-btn:hover .d4-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); } }\n\n@media (max-width: 900px) {\n  .d4-nav { right: auto; left: 50%; top: auto; bottom: calc(18px + env(safe-area-inset-bottom)); transform: translateX(-50%); grid-auto-flow: column; padding: 8px 10px; border-radius: 999px; background: rgba(247, 251, 255, .94); box-shadow: 0 10px 30px rgba(8, 21, 47, .28); backdrop-filter: blur(10px); }\n  .d4-nav-btn { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d4-nav-tip { display: none; }\n}\n@media (max-width: 560px) {\n  .d4-nav { gap: 4px; padding: 6px 8px; }\n  .d4-nav-btn { width: 44px; height: 44px; font-size: 13px; }\n  .d4-nav-back { font-size: 23px; }\n  .d4-grid { grid-template-columns: 1fr; }\n  .d4-card { min-height: 152px; padding: 17px; }\n  .d4-detail-head { display: grid; gap: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d4-video { display: none; }\n  .d4-bg { background: var(--navy-900) url('/video/school-center-poster.jpg') center/cover; }\n}\n\n/* nav \u0E17\u0E38\u0E01\u0E02\u0E19\u0E32\u0E14\u0E08\u0E2D: \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E25\u0E2D\u0E22\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 */\n.d4-nav {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension4Component, { className: "Dimension4Component", filePath: "src/app/pages/dimension4/dimension4.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=dimension4.component.js.map