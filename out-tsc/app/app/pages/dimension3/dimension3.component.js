import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM3 } from '../../data/dimension3.data';
import { SCHOOL } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { BanchuenModelComponent } from '../../shared/banchuen-model/banchuen-model.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension3Component_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function Dimension3Component_button_2_Template_button_click_0_listener() { const group_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectGroup(group_r2.key)); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r2.open() === group_r2.key);
    i0.ɵɵattribute("aria-label", group_r2.key + " " + group_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r2.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r2.title);
} }
function Dimension3Component_section_9_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function Dimension3Component_section_9_button_9_Template_button_click_0_listener() { const group_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectGroup(group_r5.key)); });
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 25);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 26);
    i0.ɵɵtext(8, "\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r6 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r5.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", group_r5.count, " \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
} }
function Dimension3Component_section_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 15)(1, "div", 4)(2, "div", 16)(3, "h2", 17);
    i0.ɵɵtext(4, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 19);
    i0.ɵɵtext(7, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 20);
    i0.ɵɵtemplate(9, Dimension3Component_section_9_button_9_Template, 9, 4, "button", 21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r2.groups);
} }
function Dimension3Component_section_10_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const indicator_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(indicator_r8);
} }
function Dimension3Component_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 27)(1, "div", 4)(2, "div", 28)(3, "button", 29);
    i0.ɵɵlistener("click", function Dimension3Component_section_10_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.backToIndex()); });
    i0.ɵɵtext(4, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "p", 30);
    i0.ɵɵtext(7, "\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 31)(11, "h3");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ol");
    i0.ɵɵtemplate(14, Dimension3Component_section_10_li_14_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const group_r9 = ctx.ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate2("", group_r9.key, " ", group_r9.title, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 ", group_r9.count, " \u0E02\u0E49\u0E2D");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.indicators[group_r9.indicatorKey]);
} }
function Dimension3Component_section_11_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "span", 48);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 49);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 50);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r11 * 70);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(l_r10.letter);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r10.en);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r10.th);
} }
function Dimension3Component_section_11_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r13 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r12.letters);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r12.group);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r12.text);
} }
function Dimension3Component_section_11_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r15 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r14.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r14.text);
} }
function Dimension3Component_section_11_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "h3", 56);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 50);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r17 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r16.text);
} }
function Dimension3Component_section_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 33)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 34);
    i0.ɵɵelementStart(3, "div", 16)(4, "h3", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 36);
    i0.ɵɵelement(10, "app-banchuen-model");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 37);
    i0.ɵɵtemplate(12, Dimension3Component_section_11_div_12_Template, 8, 4, "div", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 39);
    i0.ɵɵtemplate(14, Dimension3Component_section_11_div_14_Template, 7, 4, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 41)(16, "h3", 35);
    i0.ɵɵtext(17, "\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 42);
    i0.ɵɵtemplate(20, Dimension3Component_section_11_div_20_Template, 5, 3, "div", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 41)(22, "h3", 35);
    i0.ɵɵtext(23, "\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 44);
    i0.ɵɵtemplate(26, Dimension3Component_section_11_div_26_Template, 5, 3, "div", 45);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lead", ctx_r2.d.leadership.lead);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r2.school.model.name, " \u2014 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.school.model.tagline);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.school.model.letters);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.leadership.modelExplain);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.leadership.practices);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.leadership.groups);
} }
function Dimension3Component_section_12_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "div", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 53);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 6);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const it_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r19 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r19 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r18.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r18.text);
} }
function Dimension3Component_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 57);
    i0.ɵɵelementStart(3, "div", 39);
    i0.ɵɵtemplate(4, Dimension3Component_section_12_div_4_Template, 7, 4, "div", 58);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lead", ctx_r2.d.organization.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.organization.items);
} }
function Dimension3Component_section_13_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r21 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r20.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r20.detail);
} }
function Dimension3Component_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 33)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 61)(3, "app-cycle-flow", 62);
    i0.ɵɵelementStart(4, "div", 63);
    i0.ɵɵtemplate(5, Dimension3Component_section_13_div_5_Template, 5, 3, "div", 45);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lead", ctx_r2.d.technology.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r2.d.technology.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.technology.systems);
} }
function Dimension3Component_section_14_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "div", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 70);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 50);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r23 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ", i_r23 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r22.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r22.text);
} }
function Dimension3Component_section_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 66);
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵtemplate(4, Dimension3Component_section_14_div_4_Template, 7, 4, "div", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "app-callout", 68);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lead", ctx_r2.d.qa.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.qa.steps);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.d.qa.confidence, " ");
} }
function Dimension3Component_section_15_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const it_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r25 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r24.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r24.text);
} }
function Dimension3Component_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 33)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 71);
    i0.ɵɵelementStart(3, "div", 42);
    i0.ɵɵtemplate(4, Dimension3Component_section_15_div_4_Template, 5, 3, "div", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lead", ctx_r2.d.information.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.information.items);
} }
function Dimension3Component_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4);
    i0.ɵɵelement(2, "app-photo-gallery", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r2.gallery);
} }
function Dimension3Component_section_17_div_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r26 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r26);
} }
function Dimension3Component_section_17_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "h3", 70);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 78);
    i0.ɵɵtemplate(4, Dimension3Component_section_17_div_4_li_4_Template, 2, 1, "li", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("revealDelay", i_r28 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r27);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.d.indicators[key_r27]);
} }
function Dimension3Component_section_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4);
    i0.ɵɵelement(2, "app-section-header", 73);
    i0.ɵɵelementStart(3, "div", 39);
    i0.ɵɵtemplate(4, Dimension3Component_section_17_div_4_Template, 5, 3, "div", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelement(6, "app-pager", 76);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.indicatorKeys);
} }
export class Dimension3Component {
    gallery = GALLERY['d3'];
    d = DIM3;
    school = SCHOOL;
    indicatorKeys = Object.keys(DIM3.indicators);
    groups = [
        { key: '3.1', title: 'ภาวะผู้นำของผู้บริหาร', indicatorKey: '3.1 ภาวะผู้นำของผู้บริหาร', count: 5 },
        { key: '3.2', title: 'การพัฒนาองค์กร', indicatorKey: '3.2 การพัฒนาองค์กร', count: 6 },
        { key: '3.3', title: 'เทคโนโลยีและการสื่อสารเพื่อการศึกษา', indicatorKey: '3.3 เทคโนโลยีและการสื่อสารเพื่อการศึกษา', count: 4 },
        { key: '3.4', title: 'ระบบการประกันคุณภาพภายใน', indicatorKey: '3.4 ระบบการประกันคุณภาพภายใน', count: 3 },
        { key: '3.5', title: 'ระบบข้อมูลและสารสนเทศ', indicatorKey: '3.5 ระบบข้อมูลและสารสนเทศ', count: 4 }
    ];
    open = signal('');
    get currentGroup() { return this.groups.find(group => group.key === this.open()); }
    selectGroup(key) {
        this.open.set(key);
        setTimeout(() => document.querySelector('.d3-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    backToIndex() {
        this.open.set('');
        setTimeout(() => document.querySelector('.d3-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    static ɵfac = function Dimension3Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension3Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension3Component, selectors: [["app-dimension3"]], decls: 19, vars: 16, consts: [[3, "no", "weight", "name", "subtitle"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 1, "d3-nav"], ["type", "button", "class", "d3-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], ["class", "section d3-index", 4, "ngIf"], ["class", "section-tight d3-detail", 4, "ngIf"], ["class", "section section-alt", 4, "ngIf"], ["class", "section", 4, "ngIf"], ["type", "button", 1, "d3-nav-btn", 3, "click"], [1, "d3-nav-no"], [1, "d3-nav-tip"], [1, "section", "d3-index"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], [1, "d3-grid"], ["type", "button", "class", "d3-card", "appReveal", "zoom", 3, "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d3-card", 3, "click", "revealDelay"], [1, "d3-card-no"], [1, "d3-card-title"], [1, "d3-card-count"], [1, "d3-card-go"], [1, "section-tight", "d3-detail"], [1, "d3-detail-head"], ["type", "button", 1, "d3-back", 3, "click"], [1, "d3-detail-kicker"], [1, "d3-indicators"], [4, "ngFor", "ngForOf"], [1, "section", "section-alt"], ["num", "3.1", "title", "\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23", 3, "lead"], [1, "sec-title", 2, "font-size", "22px"], ["appReveal", "", 2, "margin-bottom", "38px"], [1, "grid", "grid-4", 2, "margin-bottom", "34px"], ["class", "card card-hover", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-2"], ["class", "card card-gold", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-4"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "card", "card-hover", 3, "revealDelay"], [1, "model-letter"], [1, "model-badge"], [1, "model-en"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "", 1, "card", "card-gold", 3, "revealDelay"], [1, "chip", "chip-gold", 2, "margin-bottom", "10px"], [1, "card-title"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], ["num", "3.2", "title", "\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23", 3, "lead"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "step-no", 2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], ["num", "3.3", "title", "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "lead"], [3, "steps"], [1, "grid", "grid-3", 2, "margin-top", "38px"], [2, "font-weight", "700", "color", "#132f63", "font-size", "16.5px", "margin-bottom", "6px"], [2, "color", "#1e4d9e", "font-weight", "700", "font-size", "18px"], ["num", "3.4", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19", 3, "lead"], [1, "grid", "grid-3"], ["label", "\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:", 2, "display", "block", "margin-top", "28px"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17.5px"], ["num", "3.5", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", 3, "lead"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 3, "items"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E17\u0E31\u0E49\u0E07 5 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-2", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23", "nextPath", "/dimension-4", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "bullets", 2, "font-size", "15.5px"]], template: function Dimension3Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "nav", 1);
            i0.ɵɵtemplate(2, Dimension3Component_button_2_Template, 5, 5, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(8, "app-kpi-grid", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, Dimension3Component_section_9_Template, 10, 1, "section", 8)(10, Dimension3Component_section_10_Template, 15, 4, "section", 9)(11, Dimension3Component_section_11_Template, 27, 7, "section", 10)(12, Dimension3Component_section_12_Template, 5, 2, "section", 11)(13, Dimension3Component_section_13_Template, 6, 3, "section", 10)(14, Dimension3Component_section_14_Template, 7, 3, "section", 11)(15, Dimension3Component_section_15_Template, 5, 2, "section", 10)(16, Dimension3Component_section_16_Template, 3, 1, "section", 11)(17, Dimension3Component_section_17_Template, 7, 1, "section", 11);
            i0.ɵɵelement(18, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.groups);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentGroup);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "3.1");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "3.2");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "3.3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "3.4");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === "3.5");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent,
            BanchuenModelComponent,
            CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d3-index[_ngcontent-%COMP%] { background: var(--paper-alt); }\n\n.d3-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.d3-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 196px;\n  padding: 22px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d3-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.d3-card-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 42px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  border-radius: 11px;\n  background: var(--navy-700);\n  font-variant-numeric: tabular-nums;\n}\n.d3-card-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d3-card-count[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d3-card-go[_ngcontent-%COMP%] { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d3-detail[_ngcontent-%COMP%] { background: var(--paper-alt); scroll-margin-top: var(--nav-h); }\n.d3-detail-head[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 18px; }\n.d3-detail-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--navy-900); font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; }\n.d3-detail-kicker[_ngcontent-%COMP%] { margin: 0 0 3px; color: var(--navy-600); font-size: 14px; font-weight: 800; letter-spacing: .06em; }\n\n.d3-back[_ngcontent-%COMP%] {\n  flex: none;\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d3-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n\n\n\n.d3-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n.d3-nav-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px;\n  height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n.d3-nav-no[_ngcontent-%COMP%] { font-variant-numeric: tabular-nums; }\n.d3-nav-btn.is-open[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d3-nav-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d3-nav-btn[_ngcontent-%COMP%]:hover { transform: scale(1.06); }\n  .d3-nav-btn[_ngcontent-%COMP%]:hover   .d3-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n.d3-indicators[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.d3-indicators[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d3-indicators[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0; padding-left: 23px; }\n.d3-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d3-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n\n@media (max-width: 900px) { .d3-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n@media (max-width: 900px) {\n  .d3-nav[_ngcontent-%COMP%] {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(247, 251, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d3-nav-btn[_ngcontent-%COMP%] { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d3-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d3-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d3-card[_ngcontent-%COMP%] { min-height: 164px; padding: 18px; }\n  .d3-detail-head[_ngcontent-%COMP%] { display: grid; gap: 12px; }\n}\n\n\n\n.model-letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 23.5px;\n  font-weight: 700;\n  font-family: 'Sarabun', sans-serif;\n}\n\n.model-en[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--navy-600);\n  font-size: 16px;\n  line-height: 1.4;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension3Component, [{
        type: Component,
        args: [{ selector: 'app-dimension3', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    BanchuenModelComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32 -->\n<nav class=\"d3-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\">\n  <button type=\"button\" class=\"d3-nav-btn\" *ngFor=\"let group of groups\"\n          [class.is-open]=\"open() === group.key\" (click)=\"selectGroup(group.key)\"\n          [attr.aria-label]=\"group.key + ' ' + group.title\">\n    <span class=\"d3-nav-no\">{{ group.key }}</span>\n    <span class=\"d3-nav-tip\">{{ group.title }}</span>\n  </button>\n</nav>\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D 5 \u0E2B\u0E21\u0E27\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section d3-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19</p>\n\n    <div class=\"d3-grid\">\n      <button type=\"button\" class=\"d3-card\" *ngFor=\"let group of groups; let i = index\"\n              appReveal=\"zoom\" [revealDelay]=\"i * 70\" (click)=\"selectGroup(group.key)\">\n        <span class=\"d3-card-no\">{{ group.key }}</span>\n        <span class=\"d3-card-title\">{{ group.title }}</span>\n        <span class=\"d3-card-count\">{{ group.count }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</span>\n        <span class=\"d3-card-go\">\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A</span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section-tight d3-detail\" *ngIf=\"currentGroup as group\">\n  <div class=\"wrap\">\n    <div class=\"d3-detail-head\">\n      <button type=\"button\" class=\"d3-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14</button>\n      <div>\n        <p class=\"d3-detail-kicker\">\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01</p>\n        <h2>{{ group.key }} {{ group.title }}</h2>\n      </div>\n    </div>\n    <div class=\"d3-indicators\">\n      <h3>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 {{ group.count }} \u0E02\u0E49\u0E2D</h3>\n      <ol>\n        <li *ngFor=\"let indicator of d.indicators[group.indicatorKey]\">{{ indicator }}</li>\n      </ol>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.1 \u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.1'\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.1\" title=\"\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\" [lead]=\"d.leadership.lead\" />\n\n    <!-- BANCHUEN Model -->\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">{{ school.model.name }} \u2014 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">{{ school.model.tagline }}</p>\n\n    <!-- \u0E42\u0E21\u0E40\u0E14\u0E25\u0E2A\u0E32\u0E21\u0E21\u0E34\u0E15\u0E34 \u0E25\u0E32\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E21\u0E38\u0E19 \u0E41\u0E15\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 -->\n    <div appReveal style=\"margin-bottom:38px\">\n      <app-banchuen-model />\n    </div>\n\n    <!-- \u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8 (\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01 school.data.ts) -->\n    <div class=\"grid grid-4\" style=\"margin-bottom:34px\">\n      <div class=\"card card-hover\" *ngFor=\"let l of school.model.letters; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div class=\"model-letter\">\n          <span class=\"model-badge\">{{ l.letter }}</span>\n          <span class=\"model-en\">{{ l.en }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ l.th }}</p>\n      </div>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-gold\" *ngFor=\"let m of d.leadership.modelExplain; let i = index\"\n           appReveal [revealDelay]=\"i * 90\">\n        <div class=\"chip chip-gold\" style=\"margin-bottom:10px\">{{ m.letters }}</div>\n        <h3 class=\"card-title\">{{ m.group }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ m.text }}</p>\n      </div>\n    </div>\n\n    <!-- \u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let p of d.leadership.practices; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <!-- 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-accent\" *ngFor=\"let g of d.leadership.groups; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ g.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ g.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.2 \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '3.2'\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.2\" title=\"\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\" [lead]=\"d.organization.lead\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let it of d.organization.items; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"step-no\" style=\"width:38px;height:38px;border-radius:11px;display:grid;\n                    place-items:center;background:#eef4fc;color:#183d80;font-weight:700;\n                    border:1px solid #d8e6f8;margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ it.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.3 \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.3'\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.3\" title=\"\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\" [lead]=\"d.technology.lead\" />\n\n    <app-cycle-flow [steps]=\"d.technology.cycle\" />\n\n    <div class=\"grid grid-3\" style=\"margin-top:38px\">\n      <div class=\"card card-accent\" *ngFor=\"let s of d.technology.systems; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div style=\"font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px\">{{ s.name }}</div>\n        <div style=\"color:#1e4d9e;font-weight:700;font-size:18px\">{{ s.detail }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.4 \u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '3.4'\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.4\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19\" [lead]=\"d.qa.lead\" />\n\n    <div class=\"grid grid-3\">\n      <div class=\"card card-hover\" *ngFor=\"let s of d.qa.steps; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ i + 1 }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ s.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ s.text }}</p>\n      </div>\n    </div>\n\n    <app-callout label=\"\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:\" style=\"display:block;margin-top:28px\">\n      {{ d.qa.confidence }}\n    </app-callout>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.5 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.5'\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.5\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\" [lead]=\"d.information.lead\" />\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let it of d.information.items; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ it.title }}</h4>\n        <p>{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E17\u0E31\u0E49\u0E07 5 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-2\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\"\n        nextPath=\"/dimension-4\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Hybrid: \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14 \u2192 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2192 \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d3-index { background: var(--paper-alt); }\n\n.d3-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.d3-card {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 196px;\n  padding: 22px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d3-card:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.d3-card-no {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 42px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  border-radius: 11px;\n  background: var(--navy-700);\n  font-variant-numeric: tabular-nums;\n}\n.d3-card-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d3-card-count { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d3-card-go { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d3-detail { background: var(--paper-alt); scroll-margin-top: var(--nav-h); }\n.d3-detail-head { display: flex; align-items: flex-start; gap: 18px; }\n.d3-detail-head h2 { margin: 0; color: var(--navy-900); font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; }\n.d3-detail-kicker { margin: 0 0 3px; color: var(--navy-600); font-size: 14px; font-weight: 800; letter-spacing: .06em; }\n\n.d3-back {\n  flex: none;\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d3-back:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n\n/* \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 \u2014 \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19 1 \u0E41\u0E25\u0E30 2 */\n.d3-nav {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n.d3-nav-btn {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px;\n  height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-nav-btn:active { transform: scale(.94); }\n.d3-nav-no { font-variant-numeric: tabular-nums; }\n.d3-nav-btn.is-open {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d3-nav-tip {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d3-nav-btn:hover { transform: scale(1.06); }\n  .d3-nav-btn:hover .d3-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n.d3-indicators {\n  padding: 18px 22px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.d3-indicators h3 { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d3-indicators ol { margin: 0; padding-left: 23px; }\n.d3-indicators li { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d3-indicators li:last-child { margin-bottom: 0; }\n\n@media (max-width: 900px) { .d3-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n@media (max-width: 900px) {\n  .d3-nav {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(247, 251, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d3-nav-btn { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d3-nav-tip { display: none; }\n}\n@media (max-width: 560px) {\n  .d3-grid { grid-template-columns: 1fr; }\n  .d3-card { min-height: 164px; padding: 18px; }\n  .d3-detail-head { display: grid; gap: 12px; }\n}\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E02\u0E2D\u0E07 BANCHUEN Model */\n.model-letter {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 23.5px;\n  font-weight: 700;\n  font-family: 'Sarabun', sans-serif;\n}\n\n.model-en {\n  font-weight: 700;\n  color: var(--navy-600);\n  font-size: 16px;\n  line-height: 1.4;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension3Component, { className: "Dimension3Component", filePath: "src/app/pages/dimension3/dimension3.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=dimension3.component.js.map