import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM3 } from '../../data/dimension3.data';
import { SCHOOL } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { BanchuenModelComponent } from '../../shared/banchuen-model/banchuen-model.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension3Component_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function Dimension3Component_button_7_Template_button_click_0_listener() { const group_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r4.key)); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 18);
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
function Dimension3Component_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function Dimension3Component_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵelementStart(1, "span", 20);
    i0.ɵɵtext(2, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtext(4, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3");
    i0.ɵɵelementEnd()();
} }
function Dimension3Component_ng_template_9_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const indicator_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(indicator_r7);
} }
function Dimension3Component_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol");
    i0.ɵɵtemplate(4, Dimension3Component_ng_template_9_div_0_li_4_Template, 2, 1, "li", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r8 = ctx.ngIf;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 ", group_r8.count, " \u0E02\u0E49\u0E2D");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[group_r8.indicatorKey]);
} }
function Dimension3Component_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, Dimension3Component_ng_template_9_div_0_Template, 5, 2, "div", 21);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.currentGroup);
} }
function Dimension3Component_section_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 24)(1, "div", 25)(2, "div", 26)(3, "p", 27);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.d.intro);
} }
function Dimension3Component_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 28)(1, "div", 25)(2, "div", 29);
    i0.ɵɵelement(3, "iframe", 30);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("height", ctx_r4.adminModelHeight(), "px");
} }
function Dimension3Component_section_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 31)(1, "div", 25)(2, "div", 32)(3, "h3", 33);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 35);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 36);
    i0.ɵɵelement(9, "app-banchuen-model");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r4.school.model.name, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.school.model.tagline);
} }
function Dimension3Component_section_14_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function Dimension3Component_section_14_button_9_Template_button_click_0_listener() { const group_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectGroup(group_r10.key)); });
    i0.ɵɵelementStart(1, "span", 42);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 44);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 45);
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
function Dimension3Component_section_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 37)(1, "div", 25)(2, "div", 32)(3, "h2", 38);
    i0.ɵɵtext(4, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 35);
    i0.ɵɵtext(7, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 39);
    i0.ɵɵtemplate(9, Dimension3Component_section_14_button_9_Template, 9, 4, "button", 40);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r4.groups);
} }
function Dimension3Component_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 46)(1, "div", 25)(2, "div", 47)(3, "button", 48);
    i0.ɵɵlistener("click", function Dimension3Component_section_15_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵtext(4, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14");
    i0.ɵɵelementEnd()()()();
} }
function Dimension3Component_section_16_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r14 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r13.text);
} }
function Dimension3Component_section_16_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "h3", 59);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 60);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r16 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r15.text);
} }
function Dimension3Component_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 31)(1, "div", 25);
    i0.ɵɵelement(2, "app-section-header", 49);
    i0.ɵɵelementContainer(3, 50);
    i0.ɵɵelementStart(4, "div", 51)(5, "h3", 52);
    i0.ɵɵtext(6, "\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, Dimension3Component_section_16_div_9_Template, 5, 3, "div", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 51)(11, "h3", 52);
    i0.ɵɵtext(12, "\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 55);
    i0.ɵɵtemplate(15, Dimension3Component_section_16_div_15_Template, 5, 3, "div", 56);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d3Indicators_r17 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.leadership.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d3Indicators_r17);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.leadership.practices);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.leadership.groups);
} }
function Dimension3Component_section_17_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 66);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 67);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 27);
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
function Dimension3Component_section_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 61)(1, "div", 25);
    i0.ɵɵelement(2, "app-section-header", 62);
    i0.ɵɵelementContainer(3, 50);
    i0.ɵɵelementStart(4, "div", 63);
    i0.ɵɵtemplate(5, Dimension3Component_section_17_div_5_Template, 7, 4, "div", 64);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d3Indicators_r17 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.organization.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d3Indicators_r17);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.organization.items);
} }
function Dimension3Component_section_18_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 77);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 78);
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
function Dimension3Component_section_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 31)(1, "div", 25);
    i0.ɵɵelement(2, "app-section-header", 68);
    i0.ɵɵelementContainer(3, 50);
    i0.ɵɵelementStart(4, "div", 69)(5, "p", 70);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 71);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 32)(10, "h2", 72);
    i0.ɵɵtext(11, "\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E19\u0E41\u0E1A\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 73);
    i0.ɵɵelement(14, "iframe", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "app-cycle-flow", 75);
    i0.ɵɵelementStart(16, "div", 76);
    i0.ɵɵtemplate(17, Dimension3Component_section_18_div_17_Template, 5, 3, "div", 56);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d3Indicators_r17 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.technology.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d3Indicators_r17);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r4.d.technology.modelName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.d.technology.modelIntro);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("height", ctx_r4.learnModelHeight(), "px");
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r4.d.technology.cycle)("showProcessImageTabs", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.technology.systems);
} }
function Dimension3Component_section_19_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 82);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 83);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 60);
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
function Dimension3Component_section_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 61)(1, "div", 25);
    i0.ɵɵelement(2, "app-section-header", 79);
    i0.ɵɵelementContainer(3, 50);
    i0.ɵɵelementStart(4, "div", 80);
    i0.ɵɵtemplate(5, Dimension3Component_section_19_div_5_Template, 7, 4, "div", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "app-callout", 81);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d3Indicators_r17 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.qa.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d3Indicators_r17);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.qa.steps);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.d.qa.confidence, " ");
} }
function Dimension3Component_section_20_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "h4");
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
function Dimension3Component_section_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 31)(1, "div", 25);
    i0.ɵɵelement(2, "app-section-header", 84);
    i0.ɵɵelementContainer(3, 50);
    i0.ɵɵelementStart(4, "div", 53);
    i0.ɵɵtemplate(5, Dimension3Component_section_20_div_5_Template, 5, 3, "div", 54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const d3Indicators_r17 = i0.ɵɵreference(10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("lead", ctx_r4.d.information.lead);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", d3Indicators_r17);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.information.items);
} }
function Dimension3Component_section_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 61)(1, "div", 25);
    i0.ɵɵelement(2, "app-photo-gallery", 85);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r4.gallery)("light", true);
} }
function Dimension3Component_section_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 61)(1, "div", 25)(2, "div", 86);
    i0.ɵɵelement(3, "app-pager", 87);
    i0.ɵɵelementEnd()()();
} }
export class Dimension3Component {
    /* ความสูงจริงของโมเดลการบริหาร ที่ส่งมาจาก iframe */
    adminModelHeight = signal(900);
    learnModelHeight = signal(900);
    resizeAdminModel(event) {
        if (typeof window === 'undefined' || event.origin !== window.location.origin)
            return;
        // โมเดล LEARN ขอให้หน้าหลักเลื่อนไปยังกล่องรายละเอียดที่เพิ่งเปิด
        if (event.data?.type === 'd3-learn-model-scroll') {
            const frame = document.querySelector('.d3-learn-model iframe');
            const top = Number(event.data.top), bottom = Number(event.data.bottom);
            if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom))
                return;
            setTimeout(() => {
                const base = frame.getBoundingClientRect().top;
                const navGap = 84;
                const elTop = base + top, elBottom = base + bottom;
                let delta = 0;
                if (elTop < navGap)
                    delta = elTop - navGap;
                else if (elBottom > window.innerHeight)
                    delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
                if (delta)
                    window.scrollBy({ top: delta, behavior: 'smooth' });
            }, 60);
            return;
        }
        const height = Number(event.data.height);
        if (!Number.isFinite(height))
            return;
        if (event.data?.type === 'd3-banchuen-model-height')
            this.adminModelHeight.set(Math.max(420, Math.min(2400, height)));
        if (event.data?.type === 'd3-learn-model-height')
            this.learnModelHeight.set(Math.max(620, height));
    }
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
    /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
    playBg(video) {
        video.muted = true;
        const playback = video.play();
        if (playback && typeof playback.catch === 'function')
            playback.catch(() => { });
    }
    static ɵfac = function Dimension3Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension3Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension3Component, selectors: [["app-dimension3"]], hostBindings: function Dimension3Component_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("message", function Dimension3Component_message_HostBindingHandler($event) { return ctx.resizeAdminModel($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 24, vars: 18, consts: [["bgv", ""], ["d3Indicators", ""], ["aria-hidden", "true", 1, "d3-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-poster.jpg", 1, "d3-video", 3, "loadedmetadata", "canplay"], ["src", "video/school.mp4", "type", "video/mp4"], [1, "d3-veil"], [3, "no", "weight", "name", "subtitle"], ["aria-label", "\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 1, "d3-nav"], ["type", "button", "class", "d3-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "d3-nav-btn d3-nav-back", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 3, "click", 4, "ngIf"], ["class", "section d3-intro", 4, "ngIf"], ["class", "section-tight", 4, "ngIf"], ["class", "section section-alt", 4, "ngIf"], ["class", "section d3-index", 4, "ngIf"], ["class", "section-tight d3-detail", 4, "ngIf"], ["class", "section", 4, "ngIf"], ["type", "button", 1, "d3-nav-btn", 3, "click"], [1, "d3-nav-no"], [1, "d3-nav-tip"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 1, "d3-nav-btn", "d3-nav-back", 3, "click"], ["aria-hidden", "true", 1, "d3-nav-no"], ["class", "assessment-indicators", "style", "margin-bottom:40px", 4, "ngIf"], [1, "assessment-indicators", 2, "margin-bottom", "40px"], [4, "ngFor", "ngForOf"], [1, "section", "d3-intro"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", "intro-glass", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [1, "section-tight"], ["appReveal", "", 1, "d3-admin-model"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/banchuen-admin-model.html`, "title", "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E1A\u0E1A\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21 BANCHUEN Model", "loading", "lazy", "scrolling", "no"], [1, "section", "section-alt"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "33.5px"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], ["appReveal", "", 2, "margin-bottom", "38px"], [1, "section", "d3-index"], [1, "sec-title"], [1, "d3-grid"], ["type", "button", "class", "d3-card", "appReveal", "zoom", 3, "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d3-card", 3, "click", "revealDelay"], [1, "d3-card-no"], [1, "d3-card-title"], [1, "d3-card-count"], [1, "d3-card-go"], [1, "section-tight", "d3-detail"], [1, "d3-detail-head"], ["type", "button", 1, "d3-back", 3, "click"], ["num", "3.1", "title", "\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23", 3, "light", "lead"], [3, "ngTemplateOutlet"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "sec-title", 2, "font-size", "22px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-4"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], [1, "section"], ["num", "3.2", "title", "\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23", 3, "light", "lead"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "step-no", 2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], [1, "card-title"], ["num", "3.3", "title", "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "light", "lead"], ["appReveal", "", 1, "model-intro", 2, "margin-bottom", "32px"], [1, "model-intro-name"], [1, "model-intro-text"], [1, "sec-title", 2, "font-size", "26px"], ["appReveal", "", 1, "d3-learn-model", 2, "margin-bottom", "38px"], ["src", i0.ɵɵtrustConstantResourceUrl `/models/school-development-model.html`, "title", "\u0E42\u0E21\u0E40\u0E14\u0E25\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 4 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19", "loading", "lazy", "scrolling", "no"], [3, "steps", "showProcessImageTabs"], [1, "grid", "grid-3", 2, "margin-top", "38px"], [2, "font-weight", "700", "color", "#132f63", "font-size", "16.5px", "margin-bottom", "6px"], [2, "color", "#1e4d9e", "font-weight", "700", "font-size", "18px"], ["num", "3.4", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19", 3, "light", "lead"], [1, "grid", "grid-3"], ["label", "\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:", 2, "display", "block", "margin-top", "28px"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17.5px"], ["num", "3.5", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", 3, "light", "lead"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 3, "items", "light"], [2, "margin-top", "34px"], ["prevPath", "/dimension-2", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23", "nextPath", "/dimension-4", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D"]], template: function Dimension3Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 2)(1, "video", 3, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension3Component_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension3Component_Template_video_canplay_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(3, "source", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-page-hero", 6);
            i0.ɵɵelementStart(6, "nav", 7);
            i0.ɵɵtemplate(7, Dimension3Component_button_7_Template, 5, 5, "button", 8)(8, Dimension3Component_button_8_Template, 5, 0, "button", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, Dimension3Component_ng_template_9_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(11, Dimension3Component_section_11_Template, 5, 1, "section", 10)(12, Dimension3Component_section_12_Template, 4, 2, "section", 11)(13, Dimension3Component_section_13_Template, 10, 2, "section", 12)(14, Dimension3Component_section_14_Template, 10, 1, "section", 13)(15, Dimension3Component_section_15_Template, 5, 0, "section", 14)(16, Dimension3Component_section_16_Template, 16, 5, "section", 12)(17, Dimension3Component_section_17_Template, 6, 4, "section", 15)(18, Dimension3Component_section_18_Template, 18, 10, "section", 12)(19, Dimension3Component_section_19_Template, 8, 5, "section", 15)(20, Dimension3Component_section_20_Template, 6, 4, "section", 12)(21, Dimension3Component_section_21_Template, 3, 2, "section", 15)(22, Dimension3Component_section_22_Template, 4, 0, "section", 15);
            i0.ɵɵelement(23, "app-home-fab");
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
            CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            CycleFlowComponent, CalloutComponent, PagerComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d3-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d3-video[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d3-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .72) 0%, rgba(8, 21, 47, .64) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n\n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n[_nghost-%COMP%]     .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item p { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n\n\n[_nghost-%COMP%]     .card .step-item h4, \n[_nghost-%COMP%]     .callout .step-item h4 { color: var(--navy-900); }\n[_nghost-%COMP%]     .card .step-item p, \n[_nghost-%COMP%]     .card .bullets > li, \n[_nghost-%COMP%]     .callout .bullets > li { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .steps::before { background: var(--gold-400); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--gold-400); }\n[_nghost-%COMP%]     .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     .callout *, \n[_nghost-%COMP%]     app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n\n\n.d3-index[_ngcontent-%COMP%] { background: transparent; padding-top: 36px; padding-bottom: 48px; }\n.d3-intro[_ngcontent-%COMP%] { padding-bottom: 28px; }\n\n.d3-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.d3-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 196px;\n  padding: 22px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d3-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.d3-card-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 42px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  border-radius: 11px;\n  background: var(--navy-700);\n  font-variant-numeric: tabular-nums;\n}\n.d3-card-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d3-card-count[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d3-card-go[_ngcontent-%COMP%] { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d3-detail[_ngcontent-%COMP%] { padding-bottom: 8px; background: transparent; scroll-margin-top: var(--nav-h); }\n.d3-detail[_ngcontent-%COMP%]    + .section[_ngcontent-%COMP%] { padding-top: 30px; }\n[_nghost-%COMP%]     app-section-header + .assessment-indicators { margin-bottom: 32px; }\n.d3-detail-head[_ngcontent-%COMP%] { margin-bottom: 12px; }\n.d3-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d3-detail-kicker[_ngcontent-%COMP%] { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n\n.d3-back[_ngcontent-%COMP%] {\n  flex: none;\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d3-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n\n\n\n.d3-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n.d3-nav-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px;\n  height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-nav-btn[_ngcontent-%COMP%]:active { transform: scale(.94); }\n.d3-nav-no[_ngcontent-%COMP%] { font-variant-numeric: tabular-nums; }\n.d3-nav-btn.is-open[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d3-nav-back[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 27px;\n  border-color: var(--gold-400);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(8, 21, 47, .42);\n}\n.d3-nav-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d3-nav-btn[_ngcontent-%COMP%]:hover { transform: scale(1.06); }\n  .d3-nav-btn[_ngcontent-%COMP%]:hover   .d3-nav-tip[_ngcontent-%COMP%] { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n.d3-indicators[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.d3-indicators[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d3-indicators[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { margin: 0; padding-left: 23px; }\n.d3-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d3-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child { margin-bottom: 0; }\n\n@media (max-width: 900px) { .d3-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n@media (max-width: 900px) {\n  .d3-nav[_ngcontent-%COMP%] {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(247, 251, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d3-nav-btn[_ngcontent-%COMP%] { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d3-nav-tip[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d3-nav[_ngcontent-%COMP%] { gap: 4px; padding: 6px 8px; }\n  .d3-nav-btn[_ngcontent-%COMP%] { width: 44px; height: 44px; font-size: 13px; }\n  .d3-nav-back[_ngcontent-%COMP%] { font-size: 23px; }\n  .d3-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d3-card[_ngcontent-%COMP%] { min-height: 164px; padding: 18px; }\n  .d3-detail-head[_ngcontent-%COMP%] { margin-bottom: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d3-video[_ngcontent-%COMP%] { display: none; }\n  .d3-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n\n\n.d3-nav[_ngcontent-%COMP%] {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}\n\n\n\n.d3-admin-model[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: var(--radius);\n  background: transparent;\n}\n.d3-admin-model[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n\n\n\n.d3-learn-model[_ngcontent-%COMP%] { width: 100%; }\n.d3-learn-model[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] { display: block; width: 100%; border: 0; background: transparent; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension3Component, [{
        type: Component,
        args: [{ selector: 'app-dimension3', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    BanchuenModelComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    CycleFlowComponent, CalloutComponent, PagerComponent
                ], template: "<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D \u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E41\u0E25\u0E30 2 -->\n<div class=\"d3-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d3-video\" autoplay muted loop playsinline preload=\"auto\" poster=\"video/school-poster.jpg\"\n    (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d3-veil\"></div>\n</div>\n\n<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E21\u0E27\u0E14\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32 -->\n<nav class=\"d3-nav\" aria-label=\"\u0E02\u0E49\u0E32\u0E21\u0E44\u0E1B\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\">\n  <button type=\"button\" class=\"d3-nav-btn\" *ngFor=\"let group of groups\" [class.is-open]=\"open() === group.key\"\n    (click)=\"selectGroup(group.key)\" [attr.aria-label]=\"group.key + ' ' + group.title\">\n    <span class=\"d3-nav-no\">{{ group.key }}</span>\n    <span class=\"d3-nav-tip\">{{ group.title }}</span>\n  </button>\n  <button type=\"button\" class=\"d3-nav-btn d3-nav-back\" *ngIf=\"open()\" (click)=\"backToIndex()\"\n    aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\">\n    <span class=\"d3-nav-no\" aria-hidden=\"true\">\u21B6</span>\n    <span class=\"d3-nav-tip\">\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3</span>\n  </button>\n</nav>\n\n<ng-template #d3Indicators>\n  <div class=\"assessment-indicators\" style=\"margin-bottom:40px\" *ngIf=\"currentGroup as group\">\n    <h3>\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 {{ group.count }} \u0E02\u0E49\u0E2D</h3>\n    <ol>\n      <li *ngFor=\"let indicator of d.indicators[group.indicatorKey]\">{{ indicator }}</li>\n    </ol>\n  </div>\n</ng-template>\n\n<section class=\"section d3-intro\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent intro-glass\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E42\u0E21\u0E40\u0E14\u0E25\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/banchuen-admin-model.html \u0E43\u0E19\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 pdcaData / pdcaDetails -->\n<section class=\"section-tight\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"d3-admin-model\" appReveal>\n      <iframe src=\"/models/banchuen-admin-model.html\"\n        title=\"\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E1A\u0E1A\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21 BANCHUEN Model\"\n        loading=\"lazy\" scrolling=\"no\" [style.height.px]=\"adminModelHeight()\"></iframe>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 BANCHUEN Model \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:33.5px\">{{ school.model.name }} </h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">{{ school.model.tagline }}</p>\n    <div appReveal style=\"margin-bottom:38px\"><app-banchuen-model /></div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D 5 \u0E2B\u0E21\u0E27\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section d3-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E19\u0E31\u0E49\u0E19</p>\n\n    <div class=\"d3-grid\">\n      <button type=\"button\" class=\"d3-card\" *ngFor=\"let group of groups; let i = index\" appReveal=\"zoom\"\n        [revealDelay]=\"i * 70\" (click)=\"selectGroup(group.key)\">\n        <span class=\"d3-card-no\">{{ group.key }}</span>\n        <span class=\"d3-card-title\">{{ group.title }}</span>\n        <span class=\"d3-card-count\">{{ group.count }} \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</span>\n        <span class=\"d3-card-go\">\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E41\u0E25\u0E30\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u203A</span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E41\u0E25\u0E30\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E2B\u0E21\u0E27\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section-tight d3-detail\" *ngIf=\"currentGroup as group\">\n  <div class=\"wrap\">\n    <div class=\"d3-detail-head\">\n      <button type=\"button\" class=\"d3-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14</button>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.1 \u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.1'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"3.1\" title=\"\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\" [lead]=\"d.leadership.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d3Indicators\"></ng-container>\n\n    <!-- \u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let p of d.leadership.practices; let i = index\" appReveal=\"left\"\n        [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <!-- 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-accent\" *ngFor=\"let g of d.leadership.groups; let i = index\" appReveal=\"zoom\"\n        [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ g.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ g.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.2 \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '3.2'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"3.2\" title=\"\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\" [lead]=\"d.organization.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d3Indicators\"></ng-container>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let it of d.organization.items; let i = index\" appReveal\n        [revealDelay]=\"i * 80\">\n        <div class=\"step-no\" style=\"width:38px;height:38px;border-radius:11px;display:grid;\n                    place-items:center;background:#eef4fc;color:#183d80;font-weight:700;\n                    border:1px solid #d8e6f8;margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ it.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.3 \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.3'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"3.3\" title=\"\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      [lead]=\"d.technology.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d3Indicators\"></ng-container>\n\n    <div class=\"model-intro\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"model-intro-name\">{{ d.technology.modelName }}</p>\n      <p class=\"model-intro-text\">{{ d.technology.modelIntro }}</p>\n    </div>\n\n    <!-- \u0E42\u0E21\u0E40\u0E14\u0E25 LEARN \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E19\u0E41\u0E1A\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49 4 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\n         \u0E41\u0E01\u0E49\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 public/models/school-development-model.html \u0E43\u0E19\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23 data -->\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\" style=\"font-size:26px\">\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E49\u0E19\u0E41\u0E1A\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25\u0E41\u0E2B\u0E48\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <div class=\"d3-learn-model\" appReveal style=\"margin-bottom:38px\">\n      <iframe src=\"/models/school-development-model.html\" title=\"\u0E42\u0E21\u0E40\u0E14\u0E25\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 4 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\"\n        loading=\"lazy\" scrolling=\"no\" [style.height.px]=\"learnModelHeight()\"></iframe>\n    </div>\n\n    <app-cycle-flow [steps]=\"d.technology.cycle\" [showProcessImageTabs]=\"true\" />\n\n    <div class=\"grid grid-3\" style=\"margin-top:38px\">\n      <div class=\"card card-accent\" *ngFor=\"let s of d.technology.systems; let i = index\" appReveal=\"zoom\"\n        [revealDelay]=\"i * 70\">\n        <div style=\"font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px\">{{ s.name }}</div>\n        <div style=\"color:#1e4d9e;font-weight:700;font-size:18px\">{{ s.detail }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.4 \u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === '3.4'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"3.4\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19\" [lead]=\"d.qa.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d3Indicators\"></ng-container>\n\n    <div class=\"grid grid-3\">\n      <div class=\"card card-hover\" *ngFor=\"let s of d.qa.steps; let i = index\" appReveal [revealDelay]=\"i * 80\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ i + 1 }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ s.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ s.text }}</p>\n      </div>\n    </div>\n\n    <app-callout label=\"\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:\" style=\"display:block;margin-top:28px\">\n      {{ d.qa.confidence }}\n    </app-callout>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.5 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === '3.5'\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"3.5\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\" [lead]=\"d.information.lead\" />\n    <ng-container [ngTemplateOutlet]=\"d3Indicators\"></ng-container>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let it of d.information.items; let i = index\" appReveal=\"left\"\n        [revealDelay]=\"i * 90\">\n        <h4>{{ it.title }}</h4>\n        <p>{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\" [items]=\"gallery\"\n      [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div style=\"margin-top:34px\">\n      <app-pager prevPath=\"/dimension-2\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\" nextPath=\"/dimension-4\"\n        nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d3-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d3-video { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d3-veil {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(180deg, rgba(8, 21, 47, .72) 0%, rgba(8, 21, 47, .64) 45%, rgba(8, 21, 47, .78) 100%);\n}\n\n/* \u0E1E\u0E37\u0E49\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-lead { color: #fff; font-weight: 600; text-shadow: 0 2px 14px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-kicker { color: #fff; font-weight: 800; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n:host ::ng-deep .steps::before { background: var(--gold-400); }\n:host ::ng-deep .step-item h4 { color: #fff; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item p { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n:host ::ng-deep .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .chip { color: #fff; border-color: rgba(255, 255, 255, .48); background: rgba(8, 21, 47, .38); text-shadow: 0 2px 10px rgba(8, 21, 47, .9); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E2D\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E36\u0E07\u0E43\u0E0A\u0E49\u0E2A\u0E35\u0E40\u0E02\u0E49\u0E21\u0E41\u0E25\u0E30\u0E44\u0E21\u0E48\u0E43\u0E2A\u0E48\u0E40\u0E07\u0E32 */\n:host ::ng-deep .card .step-item h4,\n:host ::ng-deep .callout .step-item h4 { color: var(--navy-900); }\n:host ::ng-deep .card .step-item p,\n:host ::ng-deep .card .bullets > li,\n:host ::ng-deep .callout .bullets > li { color: var(--ink-soft); }\n:host ::ng-deep .card .steps::before { background: var(--gold-400); }\n:host ::ng-deep .card .step-item::before { border-color: var(--gold-400); }\n:host ::ng-deep .card .chip { color: var(--navy-700); border-color: var(--navy-100); background: var(--navy-50); text-shadow: none; }\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep .callout *,\n:host ::ng-deep app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Hybrid: \u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 5 \u0E2B\u0E21\u0E27\u0E14 \u2192 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2192 \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d3-index { background: transparent; padding-top: 36px; padding-bottom: 48px; }\n.d3-intro { padding-bottom: 28px; }\n\n.d3-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.d3-card {\n  display: grid;\n  align-content: start;\n  gap: 9px;\n  min-height: 196px;\n  padding: 22px;\n  color: var(--ink-soft);\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-top: 4px solid var(--navy-600);\n  border-radius: var(--radius);\n  background: var(--paper);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d3-card:hover { transform: translateY(-4px); border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n}\n\n.d3-card-no {\n  display: grid;\n  place-items: center;\n  width: 50px;\n  height: 42px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 800;\n  border-radius: 11px;\n  background: var(--navy-700);\n  font-variant-numeric: tabular-nums;\n}\n.d3-card-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.d3-card-count { color: var(--ink-mute); font-size: 15px; font-weight: 600; }\n.d3-card-go { margin-top: auto; color: var(--navy-600); font-size: 15px; font-weight: 800; }\n\n.d3-detail { padding-bottom: 8px; background: transparent; scroll-margin-top: var(--nav-h); }\n.d3-detail + .section { padding-top: 30px; }\n:host ::ng-deep app-section-header + .assessment-indicators { margin-bottom: 32px; }\n.d3-detail-head { margin-bottom: 12px; }\n.d3-detail-title h2 { margin: 0; color: #fff; font-size: clamp(23px, 2.6vw, 31px); line-height: 1.3; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n.d3-detail-kicker { margin: 0 0 3px; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: .06em; text-shadow: 0 2px 12px rgba(8, 21, 47, .9); }\n\n.d3-back {\n  flex: none;\n  min-height: 44px;\n  padding: 0 15px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15.5px;\n  font-weight: 800;\n  border: 1px solid var(--navy-200);\n  border-radius: 999px;\n  background: var(--paper);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d3-back:hover { background: var(--navy-50); border-color: var(--navy-400); } }\n\n/* \u0E1B\u0E38\u0E48\u0E21\u0E19\u0E33\u0E17\u0E32\u0E07\u0E25\u0E2D\u0E22\u0E14\u0E49\u0E32\u0E19\u0E02\u0E49\u0E32\u0E07 \u2014 \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19 1 \u0E41\u0E25\u0E30 2 */\n.d3-nav {\n  position: fixed;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 60;\n  display: grid;\n  gap: 10px;\n}\n.d3-nav-btn {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: 54px;\n  height: 54px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  background: rgba(247, 251, 255, .96);\n  box-shadow: 0 8px 22px rgba(8, 21, 47, .18);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.d3-nav-btn:active { transform: scale(.94); }\n.d3-nav-no { font-variant-numeric: tabular-nums; }\n.d3-nav-btn.is-open {\n  color: #fff;\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(30, 77, 158, .42);\n}\n.d3-nav-back {\n  color: #fff;\n  font-size: 27px;\n  border-color: var(--gold-400);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 10px 26px rgba(8, 21, 47, .42);\n}\n.d3-nav-tip {\n  position: absolute;\n  right: calc(100% + 12px);\n  top: 50%;\n  transform: translateY(-50%) translateX(8px);\n  max-width: min(330px, calc(100vw - 110px));\n  padding: 8px 14px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 700;\n  line-height: 1.35;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-radius: 10px;\n  background: rgba(8, 21, 47, .94);\n  box-shadow: var(--shadow-md);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .2s var(--ease), transform .2s var(--ease);\n}\n@media (hover: hover) {\n  .d3-nav-btn:hover { transform: scale(1.06); }\n  .d3-nav-btn:hover .d3-nav-tip { opacity: 1; transform: translateY(-50%) translateX(0); }\n}\n\n.d3-indicators {\n  padding: 18px 22px;\n  border: 1px solid var(--navy-100);\n  border-left: 5px solid var(--gold-500);\n  border-radius: var(--radius-sm);\n  background: var(--navy-50);\n}\n.d3-indicators h3 { margin: 0 0 10px; color: var(--navy-800); font-size: 17px; }\n.d3-indicators ol { margin: 0; padding-left: 23px; }\n.d3-indicators li { margin-bottom: 7px; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.d3-indicators li:last-child { margin-bottom: 0; }\n\n@media (max-width: 900px) { .d3-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n@media (max-width: 900px) {\n  .d3-nav {\n    right: auto;\n    left: 50%;\n    top: auto;\n    bottom: calc(18px + env(safe-area-inset-bottom));\n    transform: translateX(-50%);\n    grid-auto-flow: column;\n    padding: 8px 10px;\n    border-radius: 999px;\n    background: rgba(247, 251, 255, .94);\n    box-shadow: 0 10px 30px rgba(8, 21, 47, .28);\n    backdrop-filter: blur(10px);\n  }\n  .d3-nav-btn { width: 48px; height: 48px; box-shadow: none; border-color: transparent; }\n  .d3-nav-tip { display: none; }\n}\n@media (max-width: 560px) {\n  .d3-nav { gap: 4px; padding: 6px 8px; }\n  .d3-nav-btn { width: 44px; height: 44px; font-size: 13px; }\n  .d3-nav-back { font-size: 23px; }\n  .d3-grid { grid-template-columns: 1fr; }\n  .d3-card { min-height: 164px; padding: 18px; }\n  .d3-detail-head { margin-bottom: 12px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .d3-video { display: none; }\n  .d3-bg { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n/* nav \u0E17\u0E38\u0E01\u0E02\u0E19\u0E32\u0E14\u0E08\u0E2D: \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E25\u0E2D\u0E22\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07 \u0E41\u0E1A\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 */\n.d3-nav {\n  right: auto;\n  left: 50%;\n  top: auto;\n  bottom: calc(18px + env(safe-area-inset-bottom));\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  max-width: calc(100vw - 28px);\n  padding: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  backdrop-filter: none;\n}\n\n/* \u0E42\u0E21\u0E40\u0E14\u0E25\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 (\u0E1D\u0E31\u0E07\u0E40\u0E1B\u0E47\u0E19 iframe) */\n.d3-admin-model {\n  overflow: hidden;\n  border-radius: var(--radius);\n  background: transparent;\n}\n.d3-admin-model iframe {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n\n/* \u0E42\u0E21\u0E40\u0E14\u0E25 LEARN \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 4 \u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 */\n.d3-learn-model { width: 100%; }\n.d3-learn-model iframe { display: block; width: 100%; border: 0; background: transparent; }\n"] }]
    }], null, { resizeAdminModel: [{
            type: HostListener,
            args: ['window:message', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension3Component, { className: "Dimension3Component", filePath: "src/app/pages/dimension3/dimension3.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=dimension3.component.js.map