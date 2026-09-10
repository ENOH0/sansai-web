import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM5 } from '../../data/dimension5.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension5Component_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function Dimension5Component_button_7_Template_button_click_0_listener() { const i_r4 = i0.ɵɵrestoreView(_r3).index; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectProject(i_r4)); });
    i0.ɵɵelementStart(1, "span", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r4.open() === i_r4);
    i0.ɵɵattribute("aria-label", project_r6.no + " " + project_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r6.no);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r6.name);
} }
function Dimension5Component_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function Dimension5Component_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵtext(2, "\u21B6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 21);
    i0.ɵɵtext(4, "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5");
    i0.ɵɵelementEnd()();
} }
function Dimension5Component_section_15_article_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 35)(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const criterion_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r9 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r9 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(criterion_r8);
} }
function Dimension5Component_section_15_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function Dimension5Component_section_15_button_17_Template_button_click_0_listener() { const i_r11 = i0.ɵɵrestoreView(_r10).index; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.selectProject(i_r11)); });
    i0.ɵɵelementStart(1, "span", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 40);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 41);
    i0.ɵɵtext(8, "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r11 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r12.no);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r12.summary);
} }
function Dimension5Component_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 24)(1, "div", 10)(2, "div", 25)(3, "p", 26);
    i0.ɵɵtext(4, "5.1 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23/\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2", 27);
    i0.ɵɵtext(6, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 4 \u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "div", 28);
    i0.ɵɵelementStart(8, "p", 29);
    i0.ɵɵtext(9, "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07 3 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 30);
    i0.ɵɵtemplate(11, Dimension5Component_section_15_article_11_Template, 5, 3, "article", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 32)(13, "h2", 27);
    i0.ɵɵtext(14, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 33);
    i0.ɵɵtemplate(17, Dimension5Component_section_15_button_17_Template, 9, 4, "button", 34);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r4.criteria);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.projects);
} }
function Dimension5Component_section_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 42)(1, "div", 10)(2, "div", 43)(3, "button", 44);
    i0.ɵɵlistener("click", function Dimension5Component_section_16_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.backToIndex()); });
    i0.ɵɵtext(4, "\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 3 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "p", 45);
    i0.ɵɵtext(7, "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const project_r14 = ctx.ngIf;
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate2("", project_r14.no, " ", project_r14.name, "");
} }
function Dimension5Component_ng_container_17_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(o_r15);
} }
function Dimension5Component_ng_container_17_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(n_r16);
} }
function Dimension5Component_ng_container_17_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "h3", 49);
    i0.ɵɵtext(2, "\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 56);
    i0.ɵɵtemplate(4, Dimension5Component_ng_container_17_div_16_span_4_Template, 2, 1, "span", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r17 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", p_r17.partners);
} }
function Dimension5Component_ng_container_17_ng_container_17_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61)(1, "h3", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r18 = ctx.$implicit;
    const gi_r19 = ctx.index;
    i0.ɵɵproperty("revealDelay", gi_r19 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r18.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r18.text);
} }
function Dimension5Component_ng_container_17_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 32)(2, "h3", 52);
    i0.ɵɵtext(3, "\u0E01\u0E32\u0E23\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E31\u0E49\u0E07 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 59);
    i0.ɵɵtemplate(6, Dimension5Component_ng_container_17_ng_container_17_div_6_Template, 5, 3, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const p_r17 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", p_r17.subjectGroups);
} }
function Dimension5Component_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 9)(2, "div", 10);
    i0.ɵɵelement(3, "app-section-header", 46);
    i0.ɵɵelementStart(4, "app-callout", 47);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 48)(7, "h3", 49);
    i0.ɵɵtext(8, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ol", 50);
    i0.ɵɵtemplate(10, Dimension5Component_ng_container_17_li_10_Template, 2, 1, "li", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 25)(12, "h3", 52);
    i0.ɵɵtext(13, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "app-cycle-flow", 53);
    i0.ɵɵtemplate(16, Dimension5Component_ng_container_17_div_16_Template, 5, 1, "div", 54)(17, Dimension5Component_ng_container_17_ng_container_17_Template, 7, 1, "ng-container", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const p_r17 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("num", p_r17.no)("title", p_r17.name)("lead", p_r17.summary);
    i0.ɵɵadvance();
    i0.ɵɵproperty("gold", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", p_r17.royal, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", p_r17.objectives);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("steps", p_r17.cycle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r17.partners == null ? null : p_r17.partners.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r17.subjectGroups == null ? null : p_r17.subjectGroups.length);
} }
function Dimension5Component_section_18_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68)(1, "h3", 69);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r21 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r20.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r20.text);
} }
function Dimension5Component_section_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 64)(1, "div", 10);
    i0.ɵɵelement(2, "app-section-header", 65);
    i0.ɵɵelementStart(3, "div", 66);
    i0.ɵɵtemplate(4, Dimension5Component_section_18_div_4_Template, 5, 3, "div", 67);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("light", true)("title", ctx_r4.d.dissemination.title)("lead", ctx_r4.d.dissemination.lead);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.dissemination.channels);
} }
function Dimension5Component_section_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9)(1, "div", 10);
    i0.ɵɵelement(2, "app-photo-gallery", 70);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r4.gallery)("light", true);
} }
function Dimension5Component_section_20_div_3_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r22 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r22);
} }
function Dimension5Component_section_20_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76)(1, "h3", 62);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 50);
    i0.ɵɵtemplate(4, Dimension5Component_section_20_div_3_li_4_Template, 2, 1, "li", 51);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r23 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r23);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.d.indicators[key_r23]);
} }
function Dimension5Component_section_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9)(1, "div", 10);
    i0.ɵɵelement(2, "app-section-header", 71);
    i0.ɵɵtemplate(3, Dimension5Component_section_20_div_3_Template, 5, 2, "div", 72);
    i0.ɵɵelementStart(4, "app-callout", 73);
    i0.ɵɵtext(5, " \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E19\u0E27\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E14\u0E33\u0E23\u0E34\u0E02\u0E2D\u0E07\u0E1E\u0E23\u0E30\u0E1A\u0E32\u0E17\u0E2A\u0E21\u0E40\u0E14\u0E47\u0E08\u0E1E\u0E23\u0E30\u0E40\u0E08\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E31\u0E27\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E17\u0E35\u0E48 9 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 74);
    i0.ɵɵelement(7, "app-pager", 75);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.indicatorKeys);
} }
export class Dimension5Component {
    gallery = GALLERY['d5'];
    d = DIM5;
    indicatorKeys = Object.keys(DIM5.indicators);
    criteria = DIM5.indicators['5.1 โครงการ/กิจกรรมดีเด่นของสถานศึกษา'];
    open = signal(null);
    get currentProject() {
        const index = this.open();
        return index === null ? undefined : this.d.projects[index];
    }
    selectProject(index) {
        this.open.set(index);
        setTimeout(() => document.querySelector('.d5-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    backToIndex() {
        this.open.set(null);
        setTimeout(() => document.querySelector('.d5-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
    /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
    playBg(video) {
        video.muted = true;
        const playback = video.play();
        if (playback && typeof playback.catch === 'function')
            playback.catch(() => { });
    }
    static ɵfac = function Dimension5Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension5Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension5Component, selectors: [["app-dimension5"]], decls: 22, vars: 14, consts: [["bgv", ""], ["aria-hidden", "true", 1, "d5-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-poster.jpg", 1, "d5-video", 3, "loadedmetadata", "canplay"], ["src", "video/school.mp4", "type", "video/mp4"], [1, "d5-veil"], [3, "no", "weight", "name", "subtitle"], ["aria-label", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", 1, "d5-nav"], ["type", "button", "class", "d5-nav-btn", 3, "is-open", "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "d5-nav-btn d5-nav-back", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", 3, "click", 4, "ngIf"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], ["class", "section d5-index", 4, "ngIf"], ["class", "section-tight d5-detail", 4, "ngIf"], [4, "ngIf"], ["class", "section section-alt", 4, "ngIf"], ["class", "section", 4, "ngIf"], ["type", "button", 1, "d5-nav-btn", 3, "click"], [1, "d5-nav-no"], [1, "d5-nav-tip"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", 1, "d5-nav-btn", "d5-nav-back", 3, "click"], ["aria-hidden", "true", 1, "d5-nav-no"], [1, "section", "d5-index"], ["appReveal", "", 1, "sec-head"], [1, "sec-kicker"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead"], [1, "d5-criteria"], ["class", "d5-criterion", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "d5-project-grid"], ["type", "button", "class", "d5-project-card", "appReveal", "zoom", 3, "revealDelay", "click", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "d5-criterion", 3, "revealDelay"], [1, "d5-criterion-no"], ["type", "button", "appReveal", "zoom", 1, "d5-project-card", 3, "click", "revealDelay"], [1, "d5-project-no"], [1, "d5-project-name"], [1, "d5-project-summary"], [1, "d5-project-go"], [1, "section-tight", "d5-detail"], [1, "d5-detail-head"], ["type", "button", 1, "d5-back", 3, "click"], [1, "d5-detail-kicker"], [3, "light", "num", "title", "lead"], ["label", "\u0E17\u0E35\u0E48\u0E21\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23:", 2, "display", "block", "margin-bottom", "30px", 3, "gold"], ["appReveal", "", 1, "card", 2, "margin-bottom", "34px"], [1, "card-title"], [1, "bullets"], [4, "ngFor", "ngForOf"], [1, "sec-title", 2, "font-size", "22px"], [3, "steps"], ["class", "card card-gold", "appReveal", "", "style", "margin-top:34px", 4, "ngIf"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-top", "34px"], [1, "chip-row", 2, "margin-top", "12px"], ["class", "chip chip-gold", 4, "ngFor", "ngForOf"], [1, "chip", "chip-gold"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], [1, "section", "section-alt"], ["kicker", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19", 3, "light", "title", "lead"], [1, "grid", "grid-4"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", "lead", "\u0E20\u0E32\u0E1E\u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", 3, "items", "light"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 4, "ngFor", "ngForOf"], ["label", "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38:", 2, "display", "block", "margin-top", "24px"], [2, "margin-top", "34px"], ["prevPath", "/dimension-4", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D", "nextPath", "/", "nextName", "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"], ["appReveal", "", 1, "card"]], template: function Dimension5Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "video", 2, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension5Component_Template_video_loadedmetadata_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension5Component_Template_video_canplay_1_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(3, "source", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "app-page-hero", 5);
            i0.ɵɵelementStart(6, "nav", 6);
            i0.ɵɵtemplate(7, Dimension5Component_button_7_Template, 5, 5, "button", 7)(8, Dimension5Component_button_8_Template, 5, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 9)(10, "div", 10)(11, "div", 11)(12, "p", 12);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(14, "app-kpi-grid", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(15, Dimension5Component_section_15_Template, 18, 2, "section", 14)(16, Dimension5Component_section_16_Template, 10, 2, "section", 15)(17, Dimension5Component_ng_container_17_Template, 18, 10, "ng-container", 16)(18, Dimension5Component_section_18_Template, 5, 4, "section", 17)(19, Dimension5Component_section_19_Template, 3, 2, "section", 18)(20, Dimension5Component_section_20_Template, 8, 1, "section", 18);
            i0.ɵɵelement(21, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.projects);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() !== null);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentProject);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.currentProject);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open() === null);
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d5-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d5-video[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d5-veil[_ngcontent-%COMP%] { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8, 21, 47, .82), rgba(8, 21, 47, .74) 45%, rgba(8, 21, 47, .88)); }\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n[_nghost-%COMP%]     .sec-head > .sec-title, \n[_nghost-%COMP%]     .sec-kicker, \n[_nghost-%COMP%]     .sec-lead { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n[_nghost-%COMP%]     .sec-lead { font-weight: 600; }\n[_nghost-%COMP%]     .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n[_nghost-%COMP%]     .steps { border-left-color: rgba(255,255,255,.28); }\n[_nghost-%COMP%]     .step-item h4, \n[_nghost-%COMP%]     .step-item p, \n[_nghost-%COMP%]     .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8,21,47,.9); }\n[_nghost-%COMP%]     .step-item::before { border-color: rgba(255,255,255,.6); }\n[_nghost-%COMP%]     .chip { color:#fff; border-color:rgba(255,255,255,.48); background:rgba(8,21,47,.38); text-shadow:0 2px 10px rgba(8,21,47,.9); }\n[_nghost-%COMP%]     .card .step-item h4 { color: var(--navy-900); }\n[_nghost-%COMP%]     .card .step-item p, \n[_nghost-%COMP%]     .card .bullets > li { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .steps { border-left-color: var(--navy-100); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--navy-300); }\n[_nghost-%COMP%]     .card .chip { color:var(--navy-700); border-color:var(--navy-100); background:var(--navy-50); text-shadow:none; }\n[_nghost-%COMP%]     .card *, \n[_nghost-%COMP%]     .chart-card *, \n[_nghost-%COMP%]     .table-scroll *, \n[_nghost-%COMP%]     .callout *, \n[_nghost-%COMP%]     app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n\n\n.d5-criteria[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }\n.d5-criterion[_ngcontent-%COMP%] { display: grid; grid-template-columns: 44px 1fr; gap: 13px; align-items: start; padding: 18px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--paper); box-shadow: var(--shadow-sm); }\n.d5-criterion-no[_ngcontent-%COMP%] { display:grid; place-items:center; width:42px; height:42px; color:#fff; font-weight:800; border-radius:11px; background:var(--navy-700); }\n.d5-criterion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin:0; color:var(--ink-soft); font-size:16px; line-height:1.65; }\n.d5-project-grid[_ngcontent-%COMP%] { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:28px; }\n.d5-project-card[_ngcontent-%COMP%] { display:grid; align-content:start; gap:10px; min-height:225px; padding:20px; text-align:left; font-family:inherit; border:1px solid var(--line); border-top:4px solid var(--navy-600); border-radius:var(--radius); background:var(--paper); box-shadow:var(--shadow-sm); cursor:pointer; -webkit-tap-highlight-color:transparent; transition:transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease); }\n.d5-project-card[_ngcontent-%COMP%]:active { transform:scale(.985); }\n@media (hover:hover) { .d5-project-card[_ngcontent-%COMP%]:hover { transform:translateY(-4px); border-color:var(--navy-300); box-shadow:var(--shadow-md); } }\n.d5-project-no[_ngcontent-%COMP%] { display:grid; place-items:center; width:52px; height:42px; color:#fff; font-size:18px; font-weight:800; border-radius:11px; background:var(--navy-700); }\n.d5-project-name[_ngcontent-%COMP%] { color:var(--navy-900); font-size:18.5px; font-weight:800; line-height:1.38; }\n.d5-project-summary[_ngcontent-%COMP%] { color:var(--ink-soft); font-size:15.5px; line-height:1.62; }\n.d5-project-go[_ngcontent-%COMP%] { margin-top:auto; color:var(--navy-600); font-size:15px; font-weight:800; }\n\n.d5-detail[_ngcontent-%COMP%] { background:transparent; scroll-margin-top:var(--nav-h); }\n.d5-detail-head[_ngcontent-%COMP%] { display:flex; align-items:flex-start; gap:18px; }\n.d5-detail-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin:0; color:#fff; font-size:clamp(23px,2.6vw,31px); line-height:1.3; text-shadow:0 3px 18px rgba(8,21,47,.9); }\n.d5-detail-kicker[_ngcontent-%COMP%] { margin:0 0 3px; color:#fff; font-size:14px; font-weight:800; letter-spacing:.06em; text-shadow:0 2px 12px rgba(8,21,47,.9); }\n.d5-back[_ngcontent-%COMP%] { flex:none; min-height:44px; padding:0 15px; color:var(--navy-700); font-family:inherit; font-size:15.5px; font-weight:800; border:1px solid var(--navy-200); border-radius:999px; background:var(--paper); cursor:pointer; -webkit-tap-highlight-color:transparent; }\n@media (hover:hover) { .d5-back[_ngcontent-%COMP%]:hover { background:var(--navy-50); border-color:var(--navy-400); } }\n\n\n\n.d5-nav[_ngcontent-%COMP%] { position:fixed; right:18px; top:50%; transform:translateY(-50%); z-index:60; display:grid; gap:10px; }\n.d5-nav-btn[_ngcontent-%COMP%] { position:relative; display:grid; place-items:center; width:54px; height:54px; color:var(--navy-700); font-family:inherit; font-size:15px; font-weight:800; border:1px solid var(--line); border-radius:50%; background:rgba(247,251,255,.96); box-shadow:0 8px 22px rgba(8,21,47,.18); cursor:pointer; -webkit-tap-highlight-color:transparent; }\n.d5-nav-btn[_ngcontent-%COMP%]:active { transform:scale(.94); }\n.d5-nav-no[_ngcontent-%COMP%] { font-variant-numeric:tabular-nums; }\n.d5-nav-btn.is-open[_ngcontent-%COMP%] { color:#fff; border-color:var(--navy-600); background:linear-gradient(135deg,var(--navy-800),var(--navy-600)); box-shadow:0 10px 26px rgba(30,77,158,.42); }\n.d5-nav-back[_ngcontent-%COMP%] { color:#fff; font-size:27px; border-color:var(--gold-400); background:linear-gradient(135deg,var(--navy-800),var(--navy-600)); box-shadow:0 10px 26px rgba(8,21,47,.42); }\n.d5-nav-tip[_ngcontent-%COMP%] { position:absolute; right:calc(100% + 12px); top:50%; transform:translateY(-50%) translateX(8px); max-width:min(330px,calc(100vw - 110px)); padding:8px 14px; color:#fff; font-size:14.5px; font-weight:700; line-height:1.35; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; border-radius:10px; background:rgba(8,21,47,.94); box-shadow:var(--shadow-md); opacity:0; pointer-events:none; transition:opacity .2s var(--ease),transform .2s var(--ease); }\n@media (hover:hover) { .d5-nav-btn[_ngcontent-%COMP%]:hover { transform:scale(1.06); } .d5-nav-btn[_ngcontent-%COMP%]:hover   .d5-nav-tip[_ngcontent-%COMP%] { opacity:1; transform:translateY(-50%) translateX(0); } }\n\n@media (max-width:900px) { .d5-nav[_ngcontent-%COMP%] { right:auto; left:50%; top:auto; bottom:calc(18px + env(safe-area-inset-bottom)); transform:translateX(-50%); grid-auto-flow:column; padding:8px 10px; border-radius:999px; background:rgba(247,251,255,.94); box-shadow:0 10px 30px rgba(8,21,47,.28); backdrop-filter:blur(10px); } .d5-nav-btn[_ngcontent-%COMP%] { width:48px; height:48px; box-shadow:none; border-color:transparent; } .d5-nav-tip[_ngcontent-%COMP%] { display:none; } .d5-project-grid[_ngcontent-%COMP%] { grid-template-columns:1fr; gap:20px; } }\n@media (max-width:560px) { .d5-nav[_ngcontent-%COMP%] { gap:4px; padding:6px 8px; } .d5-nav-btn[_ngcontent-%COMP%] { width:44px; height:44px; font-size:13px; } .d5-nav-back[_ngcontent-%COMP%] { font-size:23px; } .d5-criteria[_ngcontent-%COMP%] { grid-template-columns:1fr; } .d5-detail-head[_ngcontent-%COMP%] { display:grid; gap:12px; } }\n@media (prefers-reduced-motion:reduce) { .d5-video[_ngcontent-%COMP%] { display:none; } .d5-bg[_ngcontent-%COMP%] { background:var(--navy-900) url('/video/school-poster.jpg') center/cover; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension5Component, [{
        type: Component,
        args: [{ selector: 'app-dimension5', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
                ], template: "<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 -->\n<div class=\"d5-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d5-video\" autoplay muted loop playsinline preload=\"auto\"\n         poster=\"video/school-poster.jpg\"\n         (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d5-veil\"></div>\n</div>\n\n<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- nav \u0E25\u0E2D\u0E22: \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E49\u0E32\u0E22\u0E2A\u0E38\u0E14 -->\n<nav class=\"d5-nav\" aria-label=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\">\n  <button type=\"button\" class=\"d5-nav-btn\" *ngFor=\"let project of d.projects; let i = index\"\n          [class.is-open]=\"open() === i\" (click)=\"selectProject(i)\"\n          [attr.aria-label]=\"project.no + ' ' + project.name\">\n    <span class=\"d5-nav-no\">{{ project.no }}</span>\n    <span class=\"d5-nav-tip\">{{ project.name }}</span>\n  </button>\n  <button type=\"button\" class=\"d5-nav-btn d5-nav-back\" *ngIf=\"open() !== null\"\n          (click)=\"backToIndex()\" aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\">\n    <span class=\"d5-nav-no\" aria-hidden=\"true\">\u21B6</span>\n    <span class=\"d5-nav-tip\">\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5</span>\n  </button>\n</nav>\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E36\u0E07\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E39 -->\n<section class=\"section d5-index\" *ngIf=\"open() === null\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <p class=\"sec-kicker\">5.1 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23/\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32</p>\n      <h2 class=\"sec-title\">\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 4 \u0E02\u0E49\u0E2D</h2>\n      <div class=\"sec-rule\"></div>\n      <p class=\"sec-lead\">\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07 3 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D</p>\n    </div>\n    <div class=\"d5-criteria\">\n      <article class=\"d5-criterion\" *ngFor=\"let criterion of criteria; let i = index\" appReveal [revealDelay]=\"i * 70\">\n        <span class=\"d5-criterion-no\">{{ i + 1 }}</span><p>{{ criterion }}</p>\n      </article>\n    </div>\n\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h2 class=\"sec-title\">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <div class=\"d5-project-grid\">\n      <button type=\"button\" class=\"d5-project-card\" *ngFor=\"let project of d.projects; let i = index\"\n              appReveal=\"zoom\" [revealDelay]=\"i * 80\" (click)=\"selectProject(i)\">\n        <span class=\"d5-project-no\">{{ project.no }}</span>\n        <span class=\"d5-project-name\">{{ project.name }}</span>\n        <span class=\"d5-project-summary\">{{ project.summary }}</span>\n        <span class=\"d5-project-go\">\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u203A</span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<section class=\"section-tight d5-detail\" *ngIf=\"currentProject as project\">\n  <div class=\"wrap\">\n    <div class=\"d5-detail-head\">\n      <button type=\"button\" class=\"d5-back\" (click)=\"backToIndex()\">\u2039 \u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21 3 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23</button>\n      <div><p class=\"d5-detail-kicker\">\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01</p><h2>{{ project.no }} {{ project.name }}</h2></div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<ng-container *ngIf=\"currentProject as p\">\n  <section class=\"section\">\n    <div class=\"wrap\">\n      <app-section-header [light]=\"true\"\n        [num]=\"p.no\"\n        [title]=\"p.name\"\n        [lead]=\"p.summary\" />\n\n      <app-callout label=\"\u0E17\u0E35\u0E48\u0E21\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23:\" [gold]=\"true\" style=\"display:block;margin-bottom:30px\">\n        {{ p.royal }}\n      </app-callout>\n\n      <div class=\"card\" appReveal style=\"margin-bottom:34px\">\n        <h3 class=\"card-title\">\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let o of p.objectives\">{{ o }}</li>\n        </ol>\n      </div>\n\n      <div class=\"sec-head\" appReveal>\n        <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19</h3>\n        <div class=\"sec-rule\"></div>\n      </div>\n\n      <app-cycle-flow [steps]=\"p.cycle\" />\n\n      <!-- \u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 (\u0E40\u0E09\u0E1E\u0E32\u0E30 5.1) -->\n      <div class=\"card card-gold\" *ngIf=\"p.partners?.length\" appReveal style=\"margin-top:34px\">\n        <h3 class=\"card-title\">\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32</h3>\n        <div class=\"chip-row\" style=\"margin-top:12px\">\n          <span class=\"chip chip-gold\" *ngFor=\"let n of p.partners\">{{ n }}</span>\n        </div>\n      </div>\n\n      <!-- 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30 (\u0E40\u0E09\u0E1E\u0E32\u0E30 5.2) -->\n      <ng-container *ngIf=\"p.subjectGroups?.length\">\n        <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n          <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E32\u0E23\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E31\u0E49\u0E07 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h3>\n          <div class=\"sec-rule\"></div>\n        </div>\n        <div class=\"grid grid-2\">\n          <div class=\"card card-hover\" *ngFor=\"let g of p.subjectGroups; let gi = index\"\n               appReveal [revealDelay]=\"gi * 70\">\n            <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ g.name }}</h3>\n            <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ g.text }}</p>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E01\u0E32\u0E23\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\" *ngIf=\"open() === null\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\"\n      kicker=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19\"\n      [title]=\"d.dissemination.title\"\n      [lead]=\"d.dissemination.lead\" />\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-accent\" *ngFor=\"let c of d.dissemination.channels; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ c.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ c.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"open() === null\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      [items]=\"gallery\" [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"open() === null\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"card\" *ngFor=\"let key of indicatorKeys\" appReveal>\n      <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n      <ol class=\"bullets\">\n        <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n      </ol>\n    </div>\n\n    <app-callout label=\"\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38:\" style=\"display:block;margin-top:24px\">\n      \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E19\u0E27\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E14\u0E33\u0E23\u0E34\u0E02\u0E2D\u0E07\u0E1E\u0E23\u0E30\u0E1A\u0E32\u0E17\u0E2A\u0E21\u0E40\u0E14\u0E47\u0E08\u0E1E\u0E23\u0E30\u0E40\u0E08\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E31\u0E27\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E17\u0E35\u0E48 9 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\n      \u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19\n    </app-callout>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-4\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D\"\n        nextPath=\"/\" nextName=\"\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d5-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n.d5-video { width: 100%; height: 100%; object-fit: cover; display: block; }\n.d5-veil { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8, 21, 47, .82), rgba(8, 21, 47, .74) 45%, rgba(8, 21, 47, .88)); }\n\n/* \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E27\u0E48\u0E32\u0E07 \u0E2A\u0E48\u0E27\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E07\u0E32 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n:host ::ng-deep .sec-head > .sec-title,\n:host ::ng-deep .sec-kicker,\n:host ::ng-deep .sec-lead { color: #fff; text-shadow: 0 3px 18px rgba(8, 21, 47, .9); }\n:host ::ng-deep .sec-lead { font-weight: 600; }\n:host ::ng-deep .sec-rule { background: var(--gold-400); box-shadow: 0 2px 12px rgba(8, 21, 47, .72); }\n:host ::ng-deep .steps { border-left-color: rgba(255,255,255,.28); }\n:host ::ng-deep .step-item h4,\n:host ::ng-deep .step-item p,\n:host ::ng-deep .bullets > li { color: #fff; font-weight: 600; text-shadow: 0 2px 12px rgba(8,21,47,.9); }\n:host ::ng-deep .step-item::before { border-color: rgba(255,255,255,.6); }\n:host ::ng-deep .chip { color:#fff; border-color:rgba(255,255,255,.48); background:rgba(8,21,47,.38); text-shadow:0 2px 10px rgba(8,21,47,.9); }\n:host ::ng-deep .card .step-item h4 { color: var(--navy-900); }\n:host ::ng-deep .card .step-item p,\n:host ::ng-deep .card .bullets > li { color: var(--ink-soft); }\n:host ::ng-deep .card .steps { border-left-color: var(--navy-100); }\n:host ::ng-deep .card .step-item::before { border-color: var(--navy-300); }\n:host ::ng-deep .card .chip { color:var(--navy-700); border-color:var(--navy-100); background:var(--navy-50); text-shadow:none; }\n:host ::ng-deep .card *,\n:host ::ng-deep .chart-card *,\n:host ::ng-deep .table-scroll *,\n:host ::ng-deep .callout *,\n:host ::ng-deep app-cycle-flow * { text-shadow: none !important; filter: none !important; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E19\u0E33\u0E17\u0E32\u0E07: 4 \u0E40\u0E01\u0E13\u0E11\u0E4C \u2192 3 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d5-criteria { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }\n.d5-criterion { display: grid; grid-template-columns: 44px 1fr; gap: 13px; align-items: start; padding: 18px; border: 1px solid var(--navy-100); border-left: 5px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--paper); box-shadow: var(--shadow-sm); }\n.d5-criterion-no { display:grid; place-items:center; width:42px; height:42px; color:#fff; font-weight:800; border-radius:11px; background:var(--navy-700); }\n.d5-criterion p { margin:0; color:var(--ink-soft); font-size:16px; line-height:1.65; }\n.d5-project-grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:28px; }\n.d5-project-card { display:grid; align-content:start; gap:10px; min-height:225px; padding:20px; text-align:left; font-family:inherit; border:1px solid var(--line); border-top:4px solid var(--navy-600); border-radius:var(--radius); background:var(--paper); box-shadow:var(--shadow-sm); cursor:pointer; -webkit-tap-highlight-color:transparent; transition:transform .22s var(--ease), box-shadow .22s var(--ease), border-color .22s var(--ease); }\n.d5-project-card:active { transform:scale(.985); }\n@media (hover:hover) { .d5-project-card:hover { transform:translateY(-4px); border-color:var(--navy-300); box-shadow:var(--shadow-md); } }\n.d5-project-no { display:grid; place-items:center; width:52px; height:42px; color:#fff; font-size:18px; font-weight:800; border-radius:11px; background:var(--navy-700); }\n.d5-project-name { color:var(--navy-900); font-size:18.5px; font-weight:800; line-height:1.38; }\n.d5-project-summary { color:var(--ink-soft); font-size:15.5px; line-height:1.62; }\n.d5-project-go { margin-top:auto; color:var(--navy-600); font-size:15px; font-weight:800; }\n\n.d5-detail { background:transparent; scroll-margin-top:var(--nav-h); }\n.d5-detail-head { display:flex; align-items:flex-start; gap:18px; }\n.d5-detail-head h2 { margin:0; color:#fff; font-size:clamp(23px,2.6vw,31px); line-height:1.3; text-shadow:0 3px 18px rgba(8,21,47,.9); }\n.d5-detail-kicker { margin:0 0 3px; color:#fff; font-size:14px; font-weight:800; letter-spacing:.06em; text-shadow:0 2px 12px rgba(8,21,47,.9); }\n.d5-back { flex:none; min-height:44px; padding:0 15px; color:var(--navy-700); font-family:inherit; font-size:15.5px; font-weight:800; border:1px solid var(--navy-200); border-radius:999px; background:var(--paper); cursor:pointer; -webkit-tap-highlight-color:transparent; }\n@media (hover:hover) { .d5-back:hover { background:var(--navy-50); border-color:var(--navy-400); } }\n\n/* nav \u0E25\u0E2D\u0E22 */\n.d5-nav { position:fixed; right:18px; top:50%; transform:translateY(-50%); z-index:60; display:grid; gap:10px; }\n.d5-nav-btn { position:relative; display:grid; place-items:center; width:54px; height:54px; color:var(--navy-700); font-family:inherit; font-size:15px; font-weight:800; border:1px solid var(--line); border-radius:50%; background:rgba(247,251,255,.96); box-shadow:0 8px 22px rgba(8,21,47,.18); cursor:pointer; -webkit-tap-highlight-color:transparent; }\n.d5-nav-btn:active { transform:scale(.94); }\n.d5-nav-no { font-variant-numeric:tabular-nums; }\n.d5-nav-btn.is-open { color:#fff; border-color:var(--navy-600); background:linear-gradient(135deg,var(--navy-800),var(--navy-600)); box-shadow:0 10px 26px rgba(30,77,158,.42); }\n.d5-nav-back { color:#fff; font-size:27px; border-color:var(--gold-400); background:linear-gradient(135deg,var(--navy-800),var(--navy-600)); box-shadow:0 10px 26px rgba(8,21,47,.42); }\n.d5-nav-tip { position:absolute; right:calc(100% + 12px); top:50%; transform:translateY(-50%) translateX(8px); max-width:min(330px,calc(100vw - 110px)); padding:8px 14px; color:#fff; font-size:14.5px; font-weight:700; line-height:1.35; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; border-radius:10px; background:rgba(8,21,47,.94); box-shadow:var(--shadow-md); opacity:0; pointer-events:none; transition:opacity .2s var(--ease),transform .2s var(--ease); }\n@media (hover:hover) { .d5-nav-btn:hover { transform:scale(1.06); } .d5-nav-btn:hover .d5-nav-tip { opacity:1; transform:translateY(-50%) translateX(0); } }\n\n@media (max-width:900px) { .d5-nav { right:auto; left:50%; top:auto; bottom:calc(18px + env(safe-area-inset-bottom)); transform:translateX(-50%); grid-auto-flow:column; padding:8px 10px; border-radius:999px; background:rgba(247,251,255,.94); box-shadow:0 10px 30px rgba(8,21,47,.28); backdrop-filter:blur(10px); } .d5-nav-btn { width:48px; height:48px; box-shadow:none; border-color:transparent; } .d5-nav-tip { display:none; } .d5-project-grid { grid-template-columns:1fr; gap:20px; } }\n@media (max-width:560px) { .d5-nav { gap:4px; padding:6px 8px; } .d5-nav-btn { width:44px; height:44px; font-size:13px; } .d5-nav-back { font-size:23px; } .d5-criteria { grid-template-columns:1fr; } .d5-detail-head { display:grid; gap:12px; } }\n@media (prefers-reduced-motion:reduce) { .d5-video { display:none; } .d5-bg { background:var(--navy-900) url('/video/school-poster.jpg') center/cover; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension5Component, { className: "Dimension5Component", filePath: "src/app/pages/dimension5/dimension5.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=dimension5.component.js.map