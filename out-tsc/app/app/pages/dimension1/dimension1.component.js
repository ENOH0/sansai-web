import { Component, inject, signal } from '@angular/core';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension1Component_section_12_button_24_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵtext(1, "\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39 ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 37);
    i0.ɵɵelement(3, "path", 38);
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_section_12_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_button_24_Template_button_click_0_listener() { const t_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.select(t_r6.key)); });
    i0.ɵɵelementStart(1, "span", 31)(2, "span", 32);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 33);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 34);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, Dimension1Component_section_12_button_24_span_8_Template, 4, 0, "span", 35);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵclassProp("is-empty", !t_r6.ready);
    i0.ɵɵproperty("disabled", !t_r6.ready)("revealDelay", i_r7 * 60);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(t_r6.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r6.note);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r6.ready);
} }
function Dimension1Component_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 19)(1, "div", 3)(2, "div", 20)(3, "h2", 21);
    i0.ɵɵtext(4, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u2014 16 \u0E02\u0E49\u0E2D \u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 23);
    i0.ɵɵtext(7, " \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E39 \u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E23\u0E32\u0E1F \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E19\u0E31\u0E49\u0E19\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E19\u0E49\u0E32 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E1B\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 24)(9, "button", 25);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.tab.set("1.1")); });
    i0.ɵɵelementStart(10, "span", 26);
    i0.ɵɵtext(11, "\u0E51.\u0E51");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 27);
    i0.ɵɵtext(13, "\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23");
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15, "8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "button", 25);
    i0.ɵɵlistener("click", function Dimension1Component_section_12_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.tab.set("1.2")); });
    i0.ɵɵelementStart(17, "span", 26);
    i0.ɵɵtext(18, "\u0E51.\u0E52");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 27);
    i0.ɵɵtext(20, "\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C");
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22, "8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(23, "div", 28);
    i0.ɵɵtemplate(24, Dimension1Component_section_12_button_24_Template, 9, 8, "button", 29);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵclassProp("is-on", ctx_r3.tab() === "1.1");
    i0.ɵɵattribute("aria-selected", ctx_r3.tab() === "1.1");
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("is-on", ctx_r3.tab() === "1.2");
    i0.ɵɵattribute("aria-selected", ctx_r3.tab() === "1.2");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r3.shown);
} }
function Dimension1Component_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "div", 40)(2, "button", 41);
    i0.ɵɵlistener("click", function Dimension1Component_div_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r8); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.backToIndex()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 42);
    i0.ɵɵelement(4, "path", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 44);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", ctx_r3.current == null ? null : ctx_r3.current.key, " \u00B7 ", ctx_r3.current == null ? null : ctx_r3.current.title, "");
} }
function Dimension1Component_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 45);
    i0.ɵɵelementStart(4, "div", 46);
    i0.ɵɵelement(5, "app-onet-chart", 47)(6, "app-data-table", 48)(7, "app-line-chart", 49);
    i0.ɵɵelementStart(8, "app-callout", 50);
    i0.ɵɵtext(9, " \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34 \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "app-data-table", 48)(11, "app-onet-chart", 51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.onetTitle)("lead", ctx_r3.d.section11.onet.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("years", ctx_r3.d.section11.onet.m6.years)("subjects", ctx_r3.d.section11.onet.m6.subjects)("note", ctx_r3.d.section11.onet.m6.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section11.onet.m6.caption)("headers", ctx_r3.onetHeaders)("rows", ctx_r3.m6Rows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section11.onet.m3Trend.years)("series", ctx_r3.m3TrendSeries)("note", ctx_r3.d.section11.onet.m3Trend.conclusion + "  " + ctx_r3.d.section11.onet.m3Trend.footnote);
    i0.ɵɵadvance();
    i0.ɵɵproperty("gold", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("caption", ctx_r3.d.section11.onet.m3.caption)("headers", ctx_r3.onetHeaders)("rows", ctx_r3.m3Rows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("years", ctx_r3.d.section11.onet.m3.years)("subjects", ctx_r3.d.section11.onet.m3.subjects)("note", ctx_r3.d.section11.onet.m3.conclusion);
} }
function Dimension1Component_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 52)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 53);
    i0.ɵɵelementStart(4, "div", 46);
    i0.ɵɵelement(5, "app-line-chart", 54)(6, "app-data-table", 48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.thaiTitle)("lead", ctx_r3.d.section11.thai.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section11.thai.years)("series", ctx_r3.thaiSeries)("showValues", false)("min", 70)("max", 95)("height", 480)("note", ctx_r3.d.section11.thai.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section11.thai.caption)("headers", ctx_r3.yearHeaders3)("rows", ctx_r3.thaiRows);
} }
function Dimension1Component_ng_container_16_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r9);
} }
function Dimension1Component_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 55);
    i0.ɵɵelementStart(4, "div", 56)(5, "div", 57)(6, "h3", 58);
    i0.ɵɵtext(7, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ul", 59);
    i0.ɵɵtemplate(9, Dimension1Component_ng_container_16_li_9_Template, 2, 1, "li", 60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 61)(11, "h3", 58);
    i0.ɵɵtext(12, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "ul", 59)(14, "li");
    i0.ɵɵtext(15, "\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 19 \u0E08\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E2D\u0E1A 1,306 \u0E04\u0E19 \u0E43\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E27\u0E34\u0E0A\u0E32 TGAT \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "li");
    i0.ɵɵtext(17, "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E27\u0E31\u0E14\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 4 \u0E17\u0E31\u0E01\u0E29\u0E30 \u0E15\u0E32\u0E21\u0E01\u0E23\u0E2D\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 CEFR \u0E23\u0E30\u0E14\u0E31\u0E1A A1\u2013A2 \u0E40\u0E15\u0E47\u0E21 50 \u0E04\u0E30\u0E41\u0E19\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "li");
    i0.ɵɵtext(19, "\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 100 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A O-NET \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (\u0E2A\u0E17\u0E28.)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "li");
    i0.ɵɵtext(21, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07 \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 BSK 101 \u201CA-Math Crossword Kumkom Challenge 2023\u201D");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelement(22, "app-bar-chart", 62);
    i0.ɵɵelementStart(23, "div", 63);
    i0.ɵɵelement(24, "app-data-table", 64);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.engTitle)("lead", ctx_r3.d.section11.english.narrative);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section11.english.activities);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("labels", ctx_r3.d.section11.english.years)("series", ctx_r3.engSeries)("note", ctx_r3.d.section11.english.conclusion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("caption", ctx_r3.d.section11.english.caption)("headers", ctx_r3.gradeHeaders)("rows", ctx_r3.engRows)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx_r3.d.section11.english.average);
} }
function Dimension1Component_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 52)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 65);
    i0.ɵɵelementStart(4, "div", 46);
    i0.ɵɵelement(5, "app-bar-chart", 66)(6, "app-line-chart", 67)(7, "app-data-table", 48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.thinkTitle)("lead", ctx_r3.d.section11.thinking.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.isYears)("series", ctx_r3.isSeries)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx_r3.d.section11.thinking.isAverage + " \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19");
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section11.thinking.years)("series", ctx_r3.readSeries)("min", 80)("max", 100)("note", ctx_r3.d.section11.thinking.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section11.thinking.readCaption)("headers", ctx_r3.readHeaders)("rows", ctx_r3.readRows);
} }
function Dimension1Component_ng_container_18_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 73)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 74)(6, "span", 75);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 76);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 77);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r10.award);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r10.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", a_r10.year, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r10.org);
} }
function Dimension1Component_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 68);
    i0.ɵɵelementStart(4, "div", 69);
    i0.ɵɵelement(5, "app-line-chart", 70);
    i0.ɵɵelementStart(6, "div", 61)(7, "h3", 58);
    i0.ɵɵtext(8, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 71);
    i0.ɵɵtemplate(10, Dimension1Component_ng_container_18_div_10_Template, 12, 5, "div", 72);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.ictTitle)("lead", ctx_r3.d.section11.ict.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section11.ict.years)("series", ctx_r3.ictSeries)("min", 70)("max", 80)("note", ctx_r3.d.section11.ict.conclusion);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section11.ict.awards);
} }
function Dimension1Component_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 52)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 78)(4, "app-line-chart", 79);
    i0.ɵɵelementStart(5, "div", 80);
    i0.ɵɵelement(6, "app-bar-chart", 81);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.pathTitle)("lead", ctx_r3.d.section11.pathway.narrative);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section11.pathway.years)("series", ctx_r3.pathSeries)("note", ctx_r3.d.section11.pathway.conclusion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section11.pathway.years)("series", ctx_r3.pathBars)("max", 80)("note", ctx_r3.d.section11.pathway.conclusion);
} }
function Dimension1Component_ng_container_20_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 88);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r11);
} }
function Dimension1Component_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 82);
    i0.ɵɵelementStart(4, "div", 83)(5, "h3", 58);
    i0.ɵɵtext(6, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "ol", 84);
    i0.ɵɵtemplate(8, Dimension1Component_ng_container_20_li_8_Template, 2, 1, "li", 85);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 46);
    i0.ɵɵelement(10, "app-meter-list", 86)(11, "app-data-table", 48)(12, "app-line-chart", 87);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.lead);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.indicators["1.2"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", "\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19")("rows", ctx_r3.desiredMeters)("max", 100)("note", ctx_r3.d.section12.desired.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section12.desired.caption)("headers", ctx_r3.desiredHeaders)("rows", ctx_r3.desiredRows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section12.desired.years)("series", ctx_r3.overallSeries)("min", 85)("max", 100);
} }
function Dimension1Component_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 52)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 89);
    i0.ɵɵelementStart(4, "div", 46);
    i0.ɵɵelement(5, "app-bar-chart", 90)(6, "app-line-chart", 91);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.electionTitle)("lead", ctx_r3.d.section12.election.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section12.election.years)("series", ctx_r3.electionSeries)("note", ctx_r3.d.section12.election.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section12.election.years)("series", ctx_r3.electionPctSeries)("min", 70)("max", 100);
} }
function Dimension1Component_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 92);
    i0.ɵɵelementStart(4, "div", 69);
    i0.ɵɵelement(5, "app-line-chart", 93)(6, "app-line-chart", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 80);
    i0.ɵɵelement(8, "app-bar-chart", 95);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("title", ctx_r3.healthTitle)("lead", ctx_r3.d.section12.health.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section12.health.years)("series", ctx_r3.fitSeries)("showValues", false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("labels", ctx_r3.d.section12.health.years)("series", ctx_r3.bodySeries)("showValues", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section12.health.years)("series", ctx_r3.mindBars)("max", 100)("note", ctx_r3.d.section12.health.conclusion);
} }
function Dimension1Component_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 96)(4, "app-kpi-grid", 6);
    i0.ɵɵelementStart(5, "div", 97)(6, "h3", 98);
    i0.ɵɵtext(7, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E39\u0E48\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "app-cycle-flow", 99);
    i0.ɵɵelementStart(10, "app-callout", 100);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "app-awards-preview", 101);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section11.excellence.narrative);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r3.excellenceKpis);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("steps", ctx_r3.d.section11.excellence.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.d.section11.excellence.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("count", 4)("light", true);
} }
function Dimension1Component_ng_container_24_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r13 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r12);
} }
function Dimension1Component_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 102);
    i0.ɵɵelementStart(4, "div", 103)(5, "h3", 58);
    i0.ɵɵtext(6, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 5);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 20)(10, "h3", 98);
    i0.ɵɵtext(11, "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(12, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 104);
    i0.ɵɵtemplate(14, Dimension1Component_ng_container_24_div_14_Template, 3, 2, "div", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "app-callout", 100);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.environment.narrative);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r3.d.section12.environment.highlight);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section12.environment.activities);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.d.section12.environment.conclusion);
} }
function Dimension1Component_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 107)(4, "app-cycle-flow", 99);
    i0.ɵɵelementStart(5, "div", 108);
    i0.ɵɵelement(6, "app-line-chart", 109)(7, "app-data-table", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "app-callout", 100);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.teamwork.narrative);
    i0.ɵɵadvance();
    i0.ɵɵproperty("steps", ctx_r3.d.section12.teamwork.cycle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labels", ctx_r3.d.section12.teamwork.years)("series", ctx_r3.teamSeries)("min", 96)("max", 100)("note", ctx_r3.d.section12.teamwork.note);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section12.teamwork.caption)("headers", ctx_r3.yearHeaders3)("rows", ctx_r3.teamRows);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.d.section12.teamwork.conclusion);
} }
function Dimension1Component_ng_container_26_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pj_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ", pj_r14.value, " ");
} }
function Dimension1Component_ng_container_26_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 113);
    i0.ɵɵtemplate(1, Dimension1Component_ng_container_26_div_5_div_1_Template, 2, 1, "div", 114);
    i0.ɵɵelementStart(2, "h3", 58);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pj_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r15 * 90);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pj_r14.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pj_r14.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pj_r14.text);
} }
function Dimension1Component_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 110);
    i0.ɵɵelementStart(4, "div", 111);
    i0.ɵɵtemplate(5, Dimension1Component_ng_container_26_div_5_Template, 6, 4, "div", 112);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "app-callout", 100);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.thaiPride.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section12.thaiPride.projects);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.d.section12.thaiPride.conclusion);
} }
function Dimension1Component_ng_container_27_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r17 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r16);
} }
function Dimension1Component_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 116);
    i0.ɵɵelementStart(4, "div", 104);
    i0.ɵɵtemplate(5, Dimension1Component_ng_container_27_div_5_Template, 3, 2, "div", 105);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "app-callout", 100);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.confidence.narrative);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section12.confidence.activities);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.d.section12.confidence.conclusion);
} }
function Dimension1Component_ng_container_28_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r18);
} }
function Dimension1Component_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 2)(2, "div", 3);
    i0.ɵɵelement(3, "app-section-header", 117);
    i0.ɵɵelementStart(4, "div", 69)(5, "div", 57)(6, "h3", 58);
    i0.ɵɵtext(7, "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "ul", 59);
    i0.ɵɵtemplate(9, Dimension1Component_ng_container_28_li_9_Template, 2, 1, "li", 60);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 118)(11, "h3", 58);
    i0.ɵɵtext(12, "\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p", 119);
    i0.ɵɵtext(14, " \u0E04\u0E23\u0E39\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E14\u0E39\u0E41\u0E25 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E32\u0E21\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E04\u0E25 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E04\u0E33\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E2B\u0E15\u0E38 \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p", 120);
    i0.ɵɵtext(16, " \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E0A\u0E38\u0E21\u0E0A\u0E19 \u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E35\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 108);
    i0.ɵɵelement(18, "app-line-chart", 121)(19, "app-data-table", 48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("light", true)("lead", ctx_r3.d.section12.safety.narrative);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.d.section12.safety.activities);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("labels", ctx_r3.d.section12.safety.years)("series", ctx_r3.safetySeries)("min", 0)("max", 70)("note", ctx_r3.d.section12.safety.conclusion);
    i0.ɵɵadvance();
    i0.ɵɵproperty("caption", ctx_r3.d.section12.safety.caption)("headers", ctx_r3.yearHeaders3)("rows", ctx_r3.safetyRows);
} }
function Dimension1Component_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 122);
    i0.ɵɵlistener("click", function Dimension1Component_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.backToIndex()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 123);
    i0.ɵɵelement(2, "path", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D");
    i0.ɵɵelementEnd()();
} }
function Dimension1Component_section_30_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 128);
    i0.ɵɵlistener("click", function Dimension1Component_section_30_button_2_Template_button_click_0_listener() { const pv_r21 = i0.ɵɵrestoreView(_r20).ngIf; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.select(pv_r21.key)); });
    i0.ɵɵelementStart(1, "span", 129);
    i0.ɵɵtext(2, "\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 130);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pv_r21 = ctx.ngIf;
    i0.ɵɵproperty("disabled", !pv_r21.ready);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", pv_r21.key, " ", pv_r21.title, "");
} }
function Dimension1Component_section_30_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 131);
    i0.ɵɵlistener("click", function Dimension1Component_section_30_button_3_Template_button_click_0_listener() { const nx_r23 = i0.ɵɵrestoreView(_r22).ngIf; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.select(nx_r23.key)); });
    i0.ɵɵelementStart(1, "span", 129);
    i0.ɵɵtext(2, "\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 130);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const nx_r23 = ctx.ngIf;
    i0.ɵɵproperty("disabled", !nx_r23.ready);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", nx_r23.key, " ", nx_r23.title, "");
} }
function Dimension1Component_section_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 124)(1, "div", 125);
    i0.ɵɵtemplate(2, Dimension1Component_section_30_button_2_Template, 5, 3, "button", 126)(3, Dimension1Component_section_30_button_3_Template, 5, 3, "button", 127);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.prevTopic);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.nextTopic);
} }
function Dimension1Component_section_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "div", 3);
    i0.ɵɵelement(2, "app-photo-gallery", 132);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r3.gallery)("light", true);
} }
export class Dimension1Component {
    route = inject(ActivatedRoute);
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
        { key: '1.1.6', group: '1.1', title: 'ความก้าวหน้าทางการเรียนตามหลักสูตรทุกกลุ่มสาระการเรียนรู้', note: 'อยู่ระหว่างรวบรวมข้อมูลจากเล่มเอกสาร', ready: false },
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
    tab = signal('1.1');
    open = signal('');
    get shown() { return this.topics.filter(t => t.group === this.tab()); }
    get currentIndex() { return this.topics.findIndex(t => t.key === this.open()); }
    get current() { return this.topics[this.currentIndex]; }
    get prevTopic() { return this.topics[this.currentIndex - 1]; }
    get nextTopic() { return this.topics[this.currentIndex + 1]; }
    select(key) {
        this.open.set(key);
        this.tab.set(key.startsWith('1.1') ? '1.1' : '1.2');
        window.scrollTo({ top: 0 });
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
        window.scrollTo({ top: 0 });
    }
    gallery = GALLERY['d1'];
    d = DIM1;
    // ---- หัวข้อย่อย (ตัดเลขนำหน้าออกเพราะแสดงในกล่องตัวเลขแล้ว) ----
    onetTitle = 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี';
    thaiTitle = 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ';
    engTitle = 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร';
    thinkTitle = 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้';
    ictTitle = 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)';
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
    m3TrendSeries = DIM1.section11.onet.m3Trend.subjects.map((s, i) => ({
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
    thaiSeries = [
        ...DIM1.section11.thai.rows.map((r, i) => ({
            name: r.name, values: r.values, color: this.gradePalette[i % 6]
        })),
        { name: 'ค่าเฉลี่ยรวม', values: DIM1.section11.thai.average, color: '#08152f' }
    ];
    thaiRows = [
        ...DIM1.section11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
        { cells: ['ค่าเฉลี่ย', ...DIM1.section11.thai.average.map(v => v.toFixed(2))], total: true }
    ];
    // ---------- ภาษาอังกฤษ ----------
    engSeries = [{
            name: 'ระดับดีขึ้นไป (3–4)',
            values: DIM1.section11.english.grades.map(g => g.pct),
            color: '#1e4d9e'
        }];
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
    // ---------- การศึกษาต่อ ----------
    pathSeries = DIM1.section11.pathway.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
    pathBars = DIM1.section11.pathway.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    // ---------- คุณลักษณะอันพึงประสงค์ ----------
    desiredMeters = DIM1.section12.desired.rows
        .map(r => ({ name: r.name, value: r.avg }))
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
    overallSeries = [
        { name: 'ผลการประเมินภาพรวม', values: DIM1.section12.desired.overall, color: '#1e4d9e' },
        { name: 'ค่าเป้าหมายของโรงเรียน', values: [90, 90, 90], color: '#b4433a', dashed: true }
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
    safetySeries = [
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension1Component, selectors: [["app-dimension1"]], decls: 36, vars: 26, consts: [["bgv", ""], [3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], ["aria-hidden", "true", 1, "d1-bg"], ["autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "auto", "poster", "video/school-poster.jpg", 1, "d1-video", 3, "loadedmetadata", "canplay"], ["src", "video/school.mp4", "type", "video/mp4"], [1, "d1-veil"], ["class", "section d1-index", 4, "ngIf"], ["class", "d1-bar", 4, "ngIf"], [4, "ngIf"], ["type", "button", "class", "d1-fab", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14", 3, "click", 4, "ngIf"], ["class", "section-tight", 4, "ngIf"], ["class", "section", 4, "ngIf"], [1, "section-tight", "section-alt"], ["nextPath", "/dimension-2", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23"], [1, "section", "d1-index"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], ["role", "tablist", 1, "d1-tabs"], ["type", "button", "role", "tab", 1, "d1-tab", 3, "click"], [1, "d1-tab-no"], [1, "d1-tab-text"], [1, "d1-grid"], ["type", "button", "class", "d1-card", "appReveal", "zoom", 3, "is-empty", "disabled", "revealDelay", "click", 4, "ngFor", "ngForOf"], ["type", "button", "appReveal", "zoom", 1, "d1-card", 3, "click", "disabled", "revealDelay"], [1, "d1-card-top"], [1, "d1-no"], [1, "d1-title"], [1, "d1-note"], ["class", "d1-go", 4, "ngIf"], [1, "d1-go"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "d1-bar"], [1, "wrap", "d1-bar-inner"], ["type", "button", 1, "d1-back", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M19 12H5M12 19l-7-7 7-7"], [1, "d1-bar-now"], ["num", "1.1.1", 3, "light", "title", "lead"], [1, "stack"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", 3, "years", "subjects", "note"], [3, "caption", "headers", "rows"], ["title", "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3", "subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], ["label", "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:", 3, "gold"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", 3, "years", "subjects", "note"], [1, "section", "section-alt"], ["num", "1.1.2", 3, "light", "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "showValues", "min", "max", "height", "note"], ["num", "1.1.3", 3, "light", "title", "lead"], [1, "grid", "grid-2", 2, "margin-bottom", "24px"], ["appReveal", "left", 1, "card"], [1, "card-title"], [1, "bullets"], [4, "ngFor", "ngForOf"], ["appReveal", "right", 1, "card", "card-gold"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], [2, "margin-top", "22px"], [3, "caption", "headers", "rows", "note"], ["num", "1.1.4", 3, "light", "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B", "subtitle", "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], ["num", "1.1.5", 3, "light", "title", "lead"], [1, "grid", "grid-2"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], [1, "steps", 2, "margin-top", "16px"], ["class", "step-item", 4, "ngFor", "ngForOf"], [1, "step-item"], [1, "chip-row", 2, "margin-top", "8px"], [1, "chip", "chip-gold"], [1, "chip"], [2, "font-size", "14.5px", "color", "#6b7a94", "margin-top", "6px"], ["num", "1.1.7", 3, "light", "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568", 3, "labels", "series", "note"], [2, "margin-top", "24px"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568", "valueFormat", "1.2-2", 3, "labels", "series", "max", "note"], ["num", "1.2", "title", "\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C", 3, "light", "lead"], ["appReveal", "", 1, "card", 2, "margin-bottom", "28px"], [1, "bullets", 2, "columns", "2", "column-gap", "34px"], ["style", "break-inside:avoid", 4, "ngFor", "ngForOf"], ["subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "rows", "max", "note"], ["title", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21", "subtitle", "\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90)", "note", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E42\u0E14\u0E22\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567 \u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 98.69", 3, "labels", "series", "min", "max"], [2, "break-inside", "avoid"], ["num", "1.2.3", 3, "light", "title", "lead"], ["title", "\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)", "valueFormat", "1.0-0", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07", "subtitle", "\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80", 3, "labels", "series", "min", "max"], ["num", "1.2.7", 3, "light", "title", "lead"], ["title", "\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32", 3, "labels", "series", "showValues"], ["title", "\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09", 3, "labels", "series", "showValues"], ["title", "\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "valueFormat", "1.2-2", 3, "labels", "series", "max", "note"], ["num", "1.1.8", "title", "\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28", 3, "light", "lead"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "44px"], [1, "sec-title", 2, "font-size", "22px"], [3, "steps"], ["label", "\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:"], ["from", "/dimension-1", "topic", "1.1.8", 3, "count", "light"], ["num", "1.2.2", "title", "\u0E15\u0E23\u0E30\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21", 3, "light", "lead"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-bottom", "30px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["num", "1.2.4", "title", "\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A \u0E21\u0E38\u0E48\u0E07\u0E21\u0E31\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E", 3, "light", "lead"], [1, "stack", 2, "margin-top", "44px"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u201C\u0E1C\u0E48\u0E32\u0E19\u201D \u0E43\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], ["num", "1.2.5", "title", "\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E19\u0E33\u0E20\u0E39\u0E21\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49", 3, "light", "lead"], [1, "grid", "grid-3"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], ["class", "chip chip-gold", "style", "margin-bottom:10px", 4, "ngIf"], [1, "chip", "chip-gold", 2, "margin-bottom", "10px"], ["num", "1.2.6", "title", "\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19", 3, "light", "lead"], ["num", "1.2.8", "title", "\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14 \u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E32\u0E07\u0E40\u0E1E\u0E28 \u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14", 3, "light", "lead"], ["appReveal", "right", 1, "card", "card-accent"], [1, "card-body"], [1, "card-body", 2, "margin-bottom", "0"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E44\u0E21\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C", "subtitle", "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E22\u0E34\u0E48\u0E07\u0E15\u0E48\u0E33\u0E22\u0E34\u0E48\u0E07\u0E14\u0E35)", 3, "labels", "series", "min", "max", "note"], ["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14", 1, "d1-fab", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], [1, "section-tight"], [1, "wrap", "d1-nav"], ["type", "button", "class", "d1-nav-btn", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "d1-nav-btn next", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "d1-nav-btn", 3, "click", "disabled"], [1, "d1-nav-lab"], [1, "d1-nav-txt"], ["type", "button", 1, "d1-nav-btn", "next", 3, "click", "disabled"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 3, "items", "light"]], template: function Dimension1Component_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "app-page-hero", 1);
            i0.ɵɵelementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "p", 5);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 7)(8, "video", 8, 0);
            i0.ɵɵlistener("loadedmetadata", function Dimension1Component_Template_video_loadedmetadata_8_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); })("canplay", function Dimension1Component_Template_video_canplay_8_listener() { i0.ɵɵrestoreView(_r1); const bgv_r2 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.playBg(bgv_r2)); });
            i0.ɵɵelement(10, "source", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, Dimension1Component_section_12_Template, 25, 7, "section", 11)(13, Dimension1Component_div_13_Template, 8, 2, "div", 12)(14, Dimension1Component_ng_container_14_Template, 12, 19, "ng-container", 13)(15, Dimension1Component_ng_container_15_Template, 7, 13, "ng-container", 13)(16, Dimension1Component_ng_container_16_Template, 25, 11, "ng-container", 13)(17, Dimension1Component_ng_container_17_Template, 8, 14, "ng-container", 13)(18, Dimension1Component_ng_container_18_Template, 11, 9, "ng-container", 13)(19, Dimension1Component_ng_container_19_Template, 7, 10, "ng-container", 13)(20, Dimension1Component_ng_container_20_Template, 13, 14, "ng-container", 13)(21, Dimension1Component_ng_container_21_Template, 7, 10, "ng-container", 13)(22, Dimension1Component_ng_container_22_Template, 9, 13, "ng-container", 13)(23, Dimension1Component_ng_container_23_Template, 13, 7, "ng-container", 13)(24, Dimension1Component_ng_container_24_Template, 17, 5, "ng-container", 13)(25, Dimension1Component_ng_container_25_Template, 10, 12, "ng-container", 13)(26, Dimension1Component_ng_container_26_Template, 8, 4, "ng-container", 13)(27, Dimension1Component_ng_container_27_Template, 8, 4, "ng-container", 13)(28, Dimension1Component_ng_container_28_Template, 20, 11, "ng-container", 13)(29, Dimension1Component_button_29_Template, 5, 0, "button", 14)(30, Dimension1Component_section_30_Template, 4, 2, "section", 15)(31, Dimension1Component_section_31_Template, 3, 2, "section", 16);
            i0.ɵɵelementStart(32, "section", 17)(33, "div", 3);
            i0.ɵɵelement(34, "app-pager", 18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(35, "app-home-fab");
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance();
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
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.open());
        } }, dependencies: [HomeFabComponent,
            PhotoGalleryComponent, AwardsPreviewComponent,
            CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
            LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.d1-tabs[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 28px; }\n\n.d1-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1 1 260px;\n  min-height: 76px;\n  padding: 12px 20px;\n  text-align: left;\n  font-family: inherit;\n  color: var(--ink-soft);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease),\n              border-color .2s var(--ease), background .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-tab[_ngcontent-%COMP%]:active { transform: scale(.98); }\n\n.d1-tab-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 52px; height: 52px;\n  flex: none;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 14px;\n  background: var(--navy-50);\n}\n\n.d1-tab-text[_ngcontent-%COMP%] { font-size: 19px; font-weight: 800; color: var(--navy-900); line-height: 1.35; }\n.d1-tab-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; margin-top: 3px; font-size: 14.5px; font-weight: 600; color: var(--ink-mute); }\n\n.d1-tab.is-on[_ngcontent-%COMP%] {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .32);\n}\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-no[_ngcontent-%COMP%] { background: rgba(255, 255, 255, .18); color: #fff; }\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-text[_ngcontent-%COMP%] { color: #fff; }\n.d1-tab.is-on[_ngcontent-%COMP%]   .d1-tab-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #cfe0fa; }\n\n\n\n.d1-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }\n\n.d1-card[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 10px;\n  padding: 20px 20px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease), border-color .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d1-card[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: translateY(-6px);\n    border-color: var(--navy-200);\n    box-shadow: var(--shadow-lg);\n  }\n  .d1-card[_ngcontent-%COMP%]:hover:not(:disabled)   .d1-go[_ngcontent-%COMP%] { color: var(--gold-600); }\n}\n\n.d1-card.is-empty[_ngcontent-%COMP%] { opacity: .55; cursor: not-allowed; }\n\n.d1-card-top[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 10px; }\n\n.d1-no[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n  font-variant-numeric: tabular-nums;\n}\n\n.d1-stat[_ngcontent-%COMP%] {\n  color: var(--navy-800);\n  font-size: 27px;\n  font-weight: 800;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.d1-stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-left: 3px; font-size: 14px; font-weight: 700; color: var(--ink-mute); }\n\n.d1-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 17px; font-weight: 800; line-height: 1.45; }\n.d1-note[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 14.5px; line-height: 1.6; }\n\n.d1-go[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n  color: var(--navy-600);\n  font-size: 14.5px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n\n\n.d1-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--nav-h);\n  z-index: 40;\n  background: rgba(255, 255, 255, .96);\n  border-bottom: 1px solid var(--line);\n  backdrop-filter: blur(10px);\n}\n.d1-bar-inner[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 18px; padding-top: 12px; padding-bottom: 12px; }\n\n.d1-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-height: 46px;\n  padding: 0 18px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  border: 1px solid var(--navy-100);\n  border-radius: 999px;\n  background: #fff;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d1-back[_ngcontent-%COMP%]:hover { background: var(--navy-50); border-color: var(--navy-300); } }\n\n.d1-bar-now[_ngcontent-%COMP%] {\n  color: var(--ink-mute);\n  font-size: 15.5px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n\n\n.d1-nav[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }\n\n.d1-nav-btn[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  padding: 18px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-nav-btn.next[_ngcontent-%COMP%] { text-align: right; }\n.d1-nav-btn[_ngcontent-%COMP%]:disabled { opacity: .45; cursor: not-allowed; }\n@media (hover: hover) { .d1-nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--shadow-md); } }\n\n.d1-nav-lab[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 14px; font-weight: 700; }\n.d1-nav-txt[_ngcontent-%COMP%] { color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n\n@media (max-width: 1180px) { .d1-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 834px) {\n  .d1-tabs[_ngcontent-%COMP%] { gap: 10px; }\n  .d1-tab[_ngcontent-%COMP%] { min-height: 68px; padding: 10px 14px; }\n  .d1-tab-text[_ngcontent-%COMP%] { font-size: 17px; }\n  .d1-bar-now[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .d1-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .d1-nav[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n\n\n\n\n.d1-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.d1-index[_ngcontent-%COMP%] { background: transparent; }\n\n.d1-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.d1-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  \n\n  background: linear-gradient(180deg, rgba(8, 21, 47, .82) 0%, rgba(8, 21, 47, .74) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n\n\n.d1-index[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n.d1-index[_ngcontent-%COMP%]   .sec-lead[_ngcontent-%COMP%] { color: #dbe6f7; }\n\n\n\n.d1-index[_ngcontent-%COMP%]   .d1-card[_ngcontent-%COMP%] { border-color: rgba(255, 255, 255, .5); box-shadow: 0 14px 34px rgba(8, 21, 47, .28); }\n.d1-index[_ngcontent-%COMP%]   .d1-tab[_ngcontent-%COMP%] { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 28px rgba(8, 21, 47, .26); }\n\n\n\n.d1-card[_ngcontent-%COMP%] { min-height: 186px; }\n.d1-card-top[_ngcontent-%COMP%] { margin-bottom: 2px; }\n\n\n\n.d1-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  \n\n  bottom: calc(96px + env(safe-area-inset-bottom));\n  z-index: 90;\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 52px;\n  padding: 0 20px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  border: 1px solid rgba(255, 255, 255, .28);\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .42);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform .18s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-fab[_ngcontent-%COMP%]:active { transform: scale(.95); }\n@media (hover: hover) {\n  .d1-fab[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(8, 21, 47, .5); }\n}\n\n@media (max-width: 560px) {\n  .d1-fab[_ngcontent-%COMP%] { right: 14px; bottom: calc(86px + env(safe-area-inset-bottom)); padding: 0 16px; font-size: 15px; }\n  .d1-fab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n\n\n@media (prefers-reduced-motion: reduce) {\n  .d1-video[_ngcontent-%COMP%] { display: none; }\n  .d1-bg[_ngcontent-%COMP%] { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n\n\n[_nghost-%COMP%]     .section, \n[_nghost-%COMP%]     .section-alt, \n[_nghost-%COMP%]     .section-tight { background: transparent; }\n\n\n\n.d1-topic-title[_ngcontent-%COMP%], \n[_nghost-%COMP%]     .sec-head > .sec-title { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n\n\n\n[_nghost-%COMP%]     .sec-lead { color: #dbe6f7; }\n[_nghost-%COMP%]     .steps { border-left-color: rgba(255, 255, 255, .28); }\n[_nghost-%COMP%]     .step-item h4 { color: #fff; }\n[_nghost-%COMP%]     .step-item p { color: #dbe6f7; }\n[_nghost-%COMP%]     .bullets > li { color: #e4ecfa; }\n[_nghost-%COMP%]     .card .bullets > li, \n[_nghost-%COMP%]     .card .step-item h4, \n[_nghost-%COMP%]     .card .step-item p { color: var(--ink-soft); }\n[_nghost-%COMP%]     .card .sec-lead { color: var(--ink-soft); }\n\n\n\n[_nghost-%COMP%]     .step-item::before { border-color: rgba(255, 255, 255, .6); }\n[_nghost-%COMP%]     .chip { border-color: rgba(255, 255, 255, .35); }\n[_nghost-%COMP%]     .card .step-item::before { border-color: var(--navy-300); }\n[_nghost-%COMP%]     .card .steps { border-left-color: var(--navy-100); }\n[_nghost-%COMP%]     .card .chip { border-color: var(--navy-100); }\n[_nghost-%COMP%]     .card-title { color: var(--navy-900); }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension1Component, [{
        type: Component,
        args: [{ selector: 'app-dimension1', standalone: true, imports: [
                    HomeFabComponent,
                    PhotoGalleryComponent, AwardsPreviewComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent, CycleFlowComponent,
                    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1A\u0E17\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E21\u0E35\u0E41\u0E15\u0E48\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E02\u0E22\u0E31\u0E1A -->\n<div class=\"d1-bg\" aria-hidden=\"true\">\n  <video #bgv class=\"d1-video\" autoplay muted loop playsinline preload=\"auto\"\n         poster=\"video/school-poster.jpg\"\n         (loadedmetadata)=\"playBg(bgv)\" (canplay)=\"playBg(bgv)\">\n    <source src=\"video/school.mp4\" type=\"video/mp4\" />\n  </video>\n  <div class=\"d1-veil\"></div>\n</div>\n\n<section class=\"section d1-index\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u2014 16 \u0E02\u0E49\u0E2D \u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">\n      \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E39 \u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E01\u0E23\u0E32\u0E1F \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E19\u0E31\u0E49\u0E19\u0E40\u0E15\u0E47\u0E21\u0E2B\u0E19\u0E49\u0E32\n      \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E1B\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B\n    </p>\n\n    <div class=\"d1-tabs\" role=\"tablist\">\n      <button type=\"button\" class=\"d1-tab\" role=\"tab\" [class.is-on]=\"tab() === '1.1'\"\n              [attr.aria-selected]=\"tab() === '1.1'\" (click)=\"tab.set('1.1')\">\n        <span class=\"d1-tab-no\">\u0E51.\u0E51</span>\n        <span class=\"d1-tab-text\">\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23<small>8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14</small></span>\n      </button>\n      <button type=\"button\" class=\"d1-tab\" role=\"tab\" [class.is-on]=\"tab() === '1.2'\"\n              [attr.aria-selected]=\"tab() === '1.2'\" (click)=\"tab.set('1.2')\">\n        <span class=\"d1-tab-no\">\u0E51.\u0E52</span>\n        <span class=\"d1-tab-text\">\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C<small>8 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14</small></span>\n      </button>\n    </div>\n\n    <div class=\"d1-grid\">\n      <button type=\"button\" class=\"d1-card\" *ngFor=\"let t of shown; let i = index\"\n              [class.is-empty]=\"!t.ready\" [disabled]=\"!t.ready\"\n              appReveal=\"zoom\" [revealDelay]=\"i * 60\" (click)=\"select(t.key)\">\n        <span class=\"d1-card-top\">\n          <span class=\"d1-no\">{{ t.key }}</span>\n        </span>\n        <span class=\"d1-title\">{{ t.title }}</span>\n        <span class=\"d1-note\">{{ t.note }}</span>\n        <span class=\"d1-go\" *ngIf=\"t.ready\">\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\n          <svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n               stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n            <path d=\"M5 12h14M12 5l7 7-7 7\" />\n          </svg>\n        </span>\n      </button>\n    </div>\n  </div>\n</section>\n\n<!-- \u0E41\u0E16\u0E1A\u0E19\u0E33\u0E17\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 -->\n<div class=\"d1-bar\" *ngIf=\"open()\">\n  <div class=\"wrap d1-bar-inner\">\n    <button type=\"button\" class=\"d1-back\" (click)=\"backToIndex()\">\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M19 12H5M12 19l-7-7 7-7\" />\n      </svg>\n      \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\n    </button>\n    <span class=\"d1-bar-now\">{{ current?.key }} \u00B7 {{ current?.title }}</span>\n  </div>\n</div>\n\n\n<!-- \u2500\u2500 1.1.1 O-NET \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.1'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.1\" [title]=\"onetTitle\" [lead]=\"d.section11.onet.narrative\" />\n\n    <div class=\"stack\">\n      <!-- \u0E21.6 \u2014 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E44\u0E14\u0E49 -->\n      <app-onet-chart\n        title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\"\n        [years]=\"d.section11.onet.m6.years\"\n        [subjects]=\"d.section11.onet.m6.subjects\"\n        [note]=\"d.section11.onet.m6.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.onet.m6.caption\"\n        [headers]=\"onetHeaders\"\n        [rows]=\"m6Rows\" />\n\n      <!-- \u0E21.3 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23 -->\n      <app-line-chart\n        title=\"\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3\"\n        subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.onet.m3Trend.years\"\n        [series]=\"m3TrendSeries\"\n        [note]=\"d.section11.onet.m3Trend.conclusion + '  ' + d.section11.onet.m3Trend.footnote\" />\n\n      <app-callout label=\"\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:\" [gold]=\"true\">\n        \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\n        (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34\n        \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35\n      </app-callout>\n\n      <app-data-table\n        [caption]=\"d.section11.onet.m3.caption\"\n        [headers]=\"onetHeaders\"\n        [rows]=\"m3Rows\" />\n\n      <app-onet-chart\n        title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\"\n        [years]=\"d.section11.onet.m3.years\"\n        [subjects]=\"d.section11.onet.m3.subjects\"\n        [note]=\"d.section11.onet.m3.conclusion\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.2 \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.2'\">\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.2\" [title]=\"thaiTitle\" [lead]=\"d.section11.thai.narrative\" />\n\n    <div class=\"stack\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.thai.years\"\n        [series]=\"thaiSeries\"\n        [showValues]=\"false\"\n        [min]=\"70\"\n        [max]=\"95\"\n        [height]=\"480\"\n        [note]=\"d.section11.thai.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.thai.caption\"\n        [headers]=\"yearHeaders3\"\n        [rows]=\"thaiRows\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.3 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.3'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.3\" [title]=\"engTitle\" [lead]=\"d.section11.english.narrative\" />\n\n    <div class=\"grid grid-2\" style=\"margin-bottom:24px\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n        <ul class=\"bullets\">\n          <li *ngFor=\"let a of d.section11.english.activities\">{{ a }}</li>\n        </ul>\n      </div>\n      <div class=\"card card-gold\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n        <ul class=\"bullets\">\n          <li>\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 19 \u0E08\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E2D\u0E1A 1,306 \u0E04\u0E19 \u0E43\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E27\u0E34\u0E0A\u0E32 TGAT \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567</li>\n          <li>\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E27\u0E31\u0E14\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 4 \u0E17\u0E31\u0E01\u0E29\u0E30 \u0E15\u0E32\u0E21\u0E01\u0E23\u0E2D\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 CEFR \u0E23\u0E30\u0E14\u0E31\u0E1A A1\u2013A2 \u0E40\u0E15\u0E47\u0E21 50 \u0E04\u0E30\u0E41\u0E19\u0E19</li>\n          <li>\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 100 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A O-NET \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (\u0E2A\u0E17\u0E28.)</li>\n          <li>\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07 \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 BSK 101 \u201CA-Math Crossword Kumkom Challenge 2023\u201D</li>\n        </ul>\n      </div>\n    </div>\n\n    <app-bar-chart\n      title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)\"\n      subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n      [labels]=\"d.section11.english.years\"\n      [series]=\"engSeries\"\n      [note]=\"d.section11.english.conclusion\" />\n\n    <div style=\"margin-top:22px\">\n      <app-data-table\n        [caption]=\"d.section11.english.caption\"\n        [headers]=\"gradeHeaders\"\n        [rows]=\"engRows\"\n        [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.english.average\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.4 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.4'\">\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.4\" [title]=\"thinkTitle\" [lead]=\"d.section11.thinking.narrative\" />\n\n    <div class=\"stack\">\n      <app-bar-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"isYears\"\n        [series]=\"isSeries\"\n        [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.thinking.isAverage + ' \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19'\" />\n\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\"\n        subtitle=\"\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.thinking.years\"\n        [series]=\"readSeries\"\n        [min]=\"80\" [max]=\"100\"\n        [note]=\"d.section11.thinking.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.thinking.readCaption\"\n        [headers]=\"readHeaders\"\n        [rows]=\"readRows\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.5 ICT \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.5'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.5\" [title]=\"ictTitle\" [lead]=\"d.section11.ict.narrative\" />\n\n    <div class=\"grid grid-2\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.ict.years\"\n        [series]=\"ictSeries\"\n        [min]=\"70\" [max]=\"80\"\n        [note]=\"d.section11.ict.conclusion\" />\n\n      <div class=\"card card-gold\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35</h3>\n        <div class=\"steps\" style=\"margin-top:16px\">\n          <div class=\"step-item\" *ngFor=\"let a of d.section11.ict.awards\">\n            <h4>{{ a.name }}</h4>\n            <p>{{ a.award }}</p>\n            <div class=\"chip-row\" style=\"margin-top:8px\">\n              <span class=\"chip chip-gold\">{{ a.level }}</span>\n              <span class=\"chip\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ a.year }}</span>\n            </div>\n            <p style=\"font-size:14.5px;color:#6b7a94;margin-top:6px\">{{ a.org }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.1.7 \u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.7'\">\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.7\" [title]=\"pathTitle\" [lead]=\"d.section11.pathway.narrative\" />\n\n    <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n         \u2551 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1 : \u0E01\u0E23\u0E32\u0E1F\u0E40\u0E2A\u0E49\u0E19                                  \u2551\n         \u2551 \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49 \u0E43\u0E2B\u0E49\u0E25\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E19\u0E35\u0E49\u0E16\u0E36\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 \"\u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1\"  \u2551\n         \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->\n    <app-line-chart\n      title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568\"\n      [labels]=\"d.section11.pathway.years\"\n      [series]=\"pathSeries\"\n      [note]=\"d.section11.pathway.conclusion\" />\n    <!-- \u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1 -->\n\n    <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n         \u2551 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2 : \u0E01\u0E23\u0E32\u0E1F\u0E41\u0E17\u0E48\u0E07                                  \u2551\n         \u2551 \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49 \u0E43\u0E2B\u0E49\u0E25\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E19\u0E35\u0E49\u0E16\u0E36\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 \"\u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2\"  \u2551\n         \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->\n    <div style=\"margin-top:24px\">\n      <app-bar-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568\"\n        [labels]=\"d.section11.pathway.years\"\n        [series]=\"pathBars\"\n        [max]=\"80\"\n        valueFormat=\"1.2-2\"\n        [note]=\"d.section11.pathway.conclusion\" />\n    </div>\n    <!-- \u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2 -->\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 1.2 \u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<ng-container *ngIf=\"open() === '1.2.1'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2\" title=\"\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\" [lead]=\"d.section12.lead\" />\n\n    <div class=\"card\" appReveal style=\"margin-bottom:28px\">\n      <h3 class=\"card-title\">\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D</h3>\n      <ol class=\"bullets\" style=\"columns:2;column-gap:34px\">\n        <li *ngFor=\"let i of d.indicators['1.2']\" style=\"break-inside:avoid\">{{ i }}</li>\n      </ol>\n    </div>\n\n    <div class=\"stack\">\n      <app-meter-list\n        [title]=\"'\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19'\"\n        subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [rows]=\"desiredMeters\"\n        [max]=\"100\"\n        [note]=\"d.section12.desired.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section12.desired.caption\"\n        [headers]=\"desiredHeaders\"\n        [rows]=\"desiredRows\" />\n\n      <app-line-chart\n        title=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\"\n        subtitle=\"\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90)\"\n        [labels]=\"d.section12.desired.years\"\n        [series]=\"overallSeries\"\n        [min]=\"85\" [max]=\"100\"\n        note=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E42\u0E14\u0E22\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567 \u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 98.69\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.3 \u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.3'\">\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.3\" [title]=\"electionTitle\" [lead]=\"d.section12.election.narrative\" />\n\n    <div class=\"stack\">\n      <app-bar-chart\n        title=\"\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)\"\n        [labels]=\"d.section12.election.years\"\n        [series]=\"electionSeries\"\n        valueFormat=\"1.0-0\"\n        [note]=\"d.section12.election.conclusion\" />\n\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\"\n        subtitle=\"\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80\"\n        [labels]=\"d.section12.election.years\"\n        [series]=\"electionPctSeries\"\n        [min]=\"70\" [max]=\"100\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.7 \u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.7'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.7\" [title]=\"healthTitle\" [lead]=\"d.section12.health.narrative\" />\n\n    <div class=\"grid grid-2\">\n      <app-line-chart\n        title=\"\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"fitSeries\"\n        [showValues]=\"false\"\n        note=\"\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32\" />\n\n      <app-line-chart\n        title=\"\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"bodySeries\"\n        [showValues]=\"false\"\n        note=\"\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09\" />\n    </div>\n\n    <div style=\"margin-top:24px\">\n      <app-bar-chart\n        title=\"\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"mindBars\"\n        [max]=\"100\"\n        valueFormat=\"1.2-2\"\n        [note]=\"d.section12.health.conclusion\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n\n<!-- \u2500\u2500 1.1.8 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.1.8'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.1.8\" title=\"\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19 \u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E40\u0E28\u0E29 \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\"\n                        [lead]=\"d.section11.excellence.narrative\" />\n    <app-kpi-grid [items]=\"excellenceKpis\" />\n    <div class=\"sec-head\" style=\"margin-top:44px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E39\u0E48\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <app-cycle-flow [steps]=\"d.section11.excellence.cycle\" />\n    <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section11.excellence.conclusion }}</app-callout>\n\n    <app-awards-preview [count]=\"4\" from=\"/dimension-1\" topic=\"1.1.8\" [light]=\"true\" />\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.2 \u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.2'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.2\" title=\"\u0E15\u0E23\u0E30\u0E2B\u0E19\u0E31\u0E01\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E32\u0E01\u0E23\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\"\n                        [lead]=\"d.section12.environment.narrative\" />\n    <div class=\"card card-gold\" appReveal style=\"margin-bottom:30px\">\n      <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E14\u0E48\u0E19</h3>\n      <p class=\"card-body\" style=\"margin:0\">{{ d.section12.environment.highlight }}</p>\n    </div>\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let a of d.section12.environment.activities; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 70\">\n        <h4>{{ a }}</h4>\n      </div>\n    </div>\n    <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section12.environment.conclusion }}</app-callout>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.4 \u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.4'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.4\" title=\"\u0E17\u0E33\u0E07\u0E32\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E21 \u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A \u0E21\u0E38\u0E48\u0E07\u0E21\u0E31\u0E48\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E\"\n                        [lead]=\"d.section12.teamwork.narrative\" />\n    <app-cycle-flow [steps]=\"d.section12.teamwork.cycle\" />\n    <div class=\"stack\" style=\"margin-top:44px\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19 \u201C\u0E1C\u0E48\u0E32\u0E19\u201D \u0E43\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.teamwork.years\"\n        [series]=\"teamSeries\"\n        [min]=\"96\" [max]=\"100\"\n        [note]=\"d.section12.teamwork.note\" />\n      <app-data-table\n        [caption]=\"d.section12.teamwork.caption\"\n        [headers]=\"yearHeaders3\"\n        [rows]=\"teamRows\" />\n    </div>\n    <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section12.teamwork.conclusion }}</app-callout>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.5 \u0E04\u0E27\u0E32\u0E21\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.5'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.5\" title=\"\u0E20\u0E32\u0E04\u0E20\u0E39\u0E21\u0E34\u0E43\u0E08\u0E43\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E17\u0E22\u0E41\u0E25\u0E30\u0E19\u0E33\u0E20\u0E39\u0E21\u0E34\u0E1B\u0E31\u0E0D\u0E0D\u0E32\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19\u0E44\u0E1B\u0E43\u0E0A\u0E49\"\n                        [lead]=\"d.section12.thaiPride.narrative\" />\n    <div class=\"grid grid-3\">\n      <div class=\"card card-hover\" *ngFor=\"let pj of d.section12.thaiPride.projects; let i = index\"\n           appReveal [revealDelay]=\"i * 90\">\n        <div class=\"chip chip-gold\" style=\"margin-bottom:10px\" *ngIf=\"pj.value\">\n          \u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 {{ pj.value }}\n        </div>\n        <h3 class=\"card-title\">{{ pj.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ pj.text }}</p>\n      </div>\n    </div>\n    <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section12.thaiPride.conclusion }}</app-callout>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.6 \u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.6'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.6\" title=\"\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E43\u0E19\u0E15\u0E19\u0E40\u0E2D\u0E07 \u0E41\u0E25\u0E30\u0E21\u0E35\u0E40\u0E08\u0E15\u0E04\u0E15\u0E34\u0E17\u0E35\u0E48\u0E14\u0E35\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\"\n                        [lead]=\"d.section12.confidence.narrative\" />\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let a of d.section12.confidence.activities; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 70\">\n        <h4>{{ a }}</h4>\n      </div>\n    </div>\n    <app-callout label=\"\u0E2A\u0E23\u0E38\u0E1B\u0E1C\u0E25:\">{{ d.section12.confidence.conclusion }}</app-callout>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u2500\u2500 1.2.8 \u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14\u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02 \u2500\u2500 -->\n<ng-container *ngIf=\"open() === '1.2.8'\">\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header [light]=\"true\" num=\"1.2.8\" title=\"\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E08\u0E32\u0E01\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14 \u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E17\u0E32\u0E07\u0E40\u0E1E\u0E28 \u0E41\u0E25\u0E30\u0E2D\u0E1A\u0E32\u0E22\u0E21\u0E38\u0E02\u0E17\u0E38\u0E01\u0E0A\u0E19\u0E34\u0E14\"\n                        [lead]=\"d.section12.safety.narrative\" />\n    <div class=\"grid grid-2\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23</h3>\n        <ul class=\"bullets\">\n          <li *ngFor=\"let a of d.section12.safety.activities\">{{ a }}</li>\n        </ul>\n      </div>\n      <div class=\"card card-accent\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</h3>\n        <p class=\"card-body\">\n          \u0E04\u0E23\u0E39\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E04\u0E23\u0E39\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E39\u0E41\u0E25\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07\n          \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 \u0E14\u0E39\u0E41\u0E25 \u0E41\u0E25\u0E30\u0E43\u0E2B\u0E49\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E32\u0E21\u0E2A\u0E20\u0E32\u0E1E\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E04\u0E25\n          \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E04\u0E33\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E2B\u0E15\u0E38 \u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\n        </p>\n        <p class=\"card-body\" style=\"margin-bottom:0\">\n          \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07 \u0E0A\u0E38\u0E21\u0E0A\u0E19 \u0E41\u0E25\u0E30\u0E20\u0E32\u0E04\u0E35\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\n          \u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E20\u0E32\u0E1E\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\n        </p>\n      </div>\n    </div>\n\n    <div class=\"stack\" style=\"margin-top:44px\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1E\u0E24\u0E15\u0E34\u0E01\u0E23\u0E23\u0E21\u0E44\u0E21\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\"\n        subtitle=\"\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E22\u0E34\u0E48\u0E07\u0E15\u0E48\u0E33\u0E22\u0E34\u0E48\u0E07\u0E14\u0E35)\"\n        [labels]=\"d.section12.safety.years\"\n        [series]=\"safetySeries\"\n        [min]=\"0\" [max]=\"70\"\n        [note]=\"d.section12.safety.conclusion\" />\n      <app-data-table\n        [caption]=\"d.section12.safety.caption\"\n        [headers]=\"yearHeaders3\"\n        [rows]=\"safetyRows\" />\n    </div>\n  </div>\n</section>\n</ng-container>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 \u0E2D\u0E22\u0E39\u0E48\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E19\u0E2A\u0E38\u0E14 -->\n<button type=\"button\" class=\"d1-fab\" *ngIf=\"open()\" (click)=\"backToIndex()\"\n        aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\">\n  <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n       stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n    <path d=\"M19 12H5M12 19l-7-7 7-7\" />\n  </svg>\n  <span>\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D</span>\n</button>\n\n<!-- \u0E44\u0E1B\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 / \u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B -->\n<section class=\"section-tight\" *ngIf=\"open()\">\n  <div class=\"wrap d1-nav\">\n    <button type=\"button\" class=\"d1-nav-btn\" *ngIf=\"prevTopic as pv\" [disabled]=\"!pv.ready\" (click)=\"select(pv.key)\">\n      <span class=\"d1-nav-lab\">\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32</span>\n      <span class=\"d1-nav-txt\">{{ pv.key }} {{ pv.title }}</span>\n    </button>\n    <button type=\"button\" class=\"d1-nav-btn next\" *ngIf=\"nextTopic as nx\" [disabled]=\"!nx.ready\" (click)=\"select(nx.key)\">\n      <span class=\"d1-nav-lab\">\u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B</span>\n      <span class=\"d1-nav-txt\">{{ nx.key }} {{ nx.title }}</span>\n    </button>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\" *ngIf=\"!open()\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\"\n      [items]=\"gallery\"\n      [light]=\"true\" />\n  </div>\n</section>\n\n<section class=\"section-tight section-alt\">\n  <div class=\"wrap\">\n    <app-pager nextPath=\"/dimension-2\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\" />\n  </div>\n</section>\n\n<!-- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 -->\n<app-home-fab />\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d1-tabs { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 28px; }\n\n.d1-tab {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex: 1 1 260px;\n  min-height: 76px;\n  padding: 12px 20px;\n  text-align: left;\n  font-family: inherit;\n  color: var(--ink-soft);\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease),\n              border-color .2s var(--ease), background .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-tab:active { transform: scale(.98); }\n\n.d1-tab-no {\n  display: grid;\n  place-items: center;\n  width: 52px; height: 52px;\n  flex: none;\n  color: var(--navy-700);\n  font-size: 21px;\n  font-weight: 800;\n  border-radius: 14px;\n  background: var(--navy-50);\n}\n\n.d1-tab-text { font-size: 19px; font-weight: 800; color: var(--navy-900); line-height: 1.35; }\n.d1-tab-text small { display: block; margin-top: 3px; font-size: 14.5px; font-weight: 600; color: var(--ink-mute); }\n\n.d1-tab.is-on {\n  border-color: var(--navy-600);\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 28px rgba(30, 77, 158, .32);\n}\n.d1-tab.is-on .d1-tab-no { background: rgba(255, 255, 255, .18); color: #fff; }\n.d1-tab.is-on .d1-tab-text { color: #fff; }\n.d1-tab.is-on .d1-tab-text small { color: #cfe0fa; }\n\n/* ---------- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 ---------- */\n.d1-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }\n\n.d1-card {\n  display: grid;\n  align-content: start;\n  gap: 10px;\n  padding: 20px 20px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease), border-color .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.d1-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .d1-card:hover:not(:disabled) {\n    transform: translateY(-6px);\n    border-color: var(--navy-200);\n    box-shadow: var(--shadow-lg);\n  }\n  .d1-card:hover:not(:disabled) .d1-go { color: var(--gold-600); }\n}\n\n.d1-card.is-empty { opacity: .55; cursor: not-allowed; }\n\n.d1-card-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }\n\n.d1-no {\n  padding: 5px 12px;\n  color: #fff;\n  font-size: 14.5px;\n  font-weight: 800;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n  font-variant-numeric: tabular-nums;\n}\n\n.d1-stat {\n  color: var(--navy-800);\n  font-size: 27px;\n  font-weight: 800;\n  line-height: 1;\n  font-variant-numeric: tabular-nums;\n}\n.d1-stat small { margin-left: 3px; font-size: 14px; font-weight: 700; color: var(--ink-mute); }\n\n.d1-title { color: var(--navy-900); font-size: 17px; font-weight: 800; line-height: 1.45; }\n.d1-note { color: var(--ink-mute); font-size: 14.5px; line-height: 1.6; }\n\n.d1-go {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 2px;\n  color: var(--navy-600);\n  font-size: 14.5px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n/* ---------- \u0E41\u0E16\u0E1A\u0E19\u0E33\u0E17\u0E32\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 ---------- */\n.d1-bar {\n  position: sticky;\n  top: var(--nav-h);\n  z-index: 40;\n  background: rgba(255, 255, 255, .96);\n  border-bottom: 1px solid var(--line);\n  backdrop-filter: blur(10px);\n}\n.d1-bar-inner { display: flex; align-items: center; gap: 18px; padding-top: 12px; padding-bottom: 12px; }\n\n.d1-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  min-height: 46px;\n  padding: 0 18px;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  border: 1px solid var(--navy-100);\n  border-radius: 999px;\n  background: #fff;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n@media (hover: hover) { .d1-back:hover { background: var(--navy-50); border-color: var(--navy-300); } }\n\n.d1-bar-now {\n  color: var(--ink-mute);\n  font-size: 15.5px;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* ---------- \u0E1B\u0E38\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32 / \u0E02\u0E49\u0E2D\u0E16\u0E31\u0E14\u0E44\u0E1B ---------- */\n.d1-nav { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }\n\n.d1-nav-btn {\n  display: grid;\n  gap: 5px;\n  padding: 18px 22px;\n  text-align: left;\n  font-family: inherit;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-nav-btn.next { text-align: right; }\n.d1-nav-btn:disabled { opacity: .45; cursor: not-allowed; }\n@media (hover: hover) { .d1-nav-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: var(--shadow-md); } }\n\n.d1-nav-lab { color: var(--ink-mute); font-size: 14px; font-weight: 700; }\n.d1-nav-txt { color: var(--navy-800); font-size: 16.5px; font-weight: 800; line-height: 1.45; }\n\n@media (max-width: 1180px) { .d1-grid { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 834px) {\n  .d1-tabs { gap: 10px; }\n  .d1-tab { min-height: 68px; padding: 10px 14px; }\n  .d1-tab-text { font-size: 17px; }\n  .d1-bar-now { display: none; }\n}\n@media (max-width: 560px) {\n  .d1-grid { grid-template-columns: 1fr; }\n  .d1-nav { grid-template-columns: 1fr; }\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* \u0E15\u0E23\u0E36\u0E07\u0E01\u0E31\u0E1A\u0E08\u0E2D\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01 \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E44\u0E21\u0E48\u0E02\u0E22\u0E31\u0E1A */\n.d1-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.d1-index { background: transparent; }\n\n.d1-video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.d1-veil {\n  position: absolute;\n  inset: 0;\n  /* \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E49\u0E32\u0E22 rgba() \u0E04\u0E37\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E36\u0E1A 0\u20131 \u0E25\u0E14\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2B\u0E47\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E0A\u0E31\u0E14\u0E02\u0E36\u0E49\u0E19 */\n  background: linear-gradient(180deg, rgba(8, 21, 47, .82) 0%, rgba(8, 21, 47, .74) 45%, rgba(8, 21, 47, .88) 100%);\n}\n\n/* \u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.d1-index .sec-title { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n.d1-index .sec-lead { color: #dbe6f7; }\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E22\u0E31\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E32\u0E27\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E07\u0E48\u0E32\u0E22\u0E1A\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.d1-index .d1-card { border-color: rgba(255, 255, 255, .5); box-shadow: 0 14px 34px rgba(8, 21, 47, .28); }\n.d1-index .d1-tab { border-color: rgba(255, 255, 255, .5); box-shadow: 0 12px 28px rgba(8, 21, 47, .26); }\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E2A\u0E39\u0E07\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E21\u0E35\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27 */\n.d1-card { min-height: 186px; }\n.d1-card-top { margin-bottom: 2px; }\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1B\u0E38\u0E48\u0E21\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A\u0E41\u0E1A\u0E1A\u0E25\u0E2D\u0E22 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.d1-fab {\n  position: fixed;\n  right: 20px;\n  /* \u0E27\u0E32\u0E07\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E19\u0E2A\u0E38\u0E14 \u0E41\u0E25\u0E30\u0E40\u0E1C\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E1A\u0E08\u0E2D iPad */\n  bottom: calc(96px + env(safe-area-inset-bottom));\n  z-index: 90;\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 52px;\n  padding: 0 20px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  border: 1px solid rgba(255, 255, 255, .28);\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .42);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform .18s var(--ease), box-shadow .2s var(--ease);\n}\n.d1-fab:active { transform: scale(.95); }\n@media (hover: hover) {\n  .d1-fab:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(8, 21, 47, .5); }\n}\n\n@media (max-width: 560px) {\n  .d1-fab { right: 14px; bottom: calc(86px + env(safe-area-inset-bottom)); padding: 0 16px; font-size: 15px; }\n  .d1-fab span { display: none; }\n}\n\n/* iPad \u0E1B\u0E23\u0E30\u0E2B\u0E22\u0E31\u0E14\u0E41\u0E1A\u0E15 \u2014 \u0E16\u0E49\u0E32\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E25\u0E14\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 \u0E43\u0E2B\u0E49\u0E2B\u0E22\u0E38\u0E14\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E1E\u0E19\u0E34\u0E48\u0E07\u0E41\u0E17\u0E19 */\n@media (prefers-reduced-motion: reduce) {\n  .d1-video { display: none; }\n  .d1-bg { background: var(--navy-900) url('/video/school-poster.jpg') center/cover; }\n}\n\n/* \u0E17\u0E38\u0E01\u0E2A\u0E48\u0E27\u0E19\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E08\u0E36\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A\u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E2A\u0E27\u0E48\u0E32\u0E07 */\n:host ::ng-deep .section,\n:host ::ng-deep .section-alt,\n:host ::ng-deep .section-tight { background: transparent; }\n\n/* \u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E22\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E40\u0E02\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E2D\u0E07 */\n.d1-topic-title,\n:host ::ng-deep .sec-head > .sec-title { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n\n/* \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n:host ::ng-deep .sec-lead { color: #dbe6f7; }\n:host ::ng-deep .steps { border-left-color: rgba(255, 255, 255, .28); }\n:host ::ng-deep .step-item h4 { color: #fff; }\n:host ::ng-deep .step-item p { color: #dbe6f7; }\n:host ::ng-deep .bullets > li { color: #e4ecfa; }\n:host ::ng-deep .card .bullets > li,\n:host ::ng-deep .card .step-item h4,\n:host ::ng-deep .card .step-item p { color: var(--ink-soft); }\n:host ::ng-deep .card .sec-lead { color: var(--ink-soft); }\n\n/* \u0E08\u0E38\u0E14\u0E01\u0E25\u0E21\u0E02\u0E2D\u0E07\u0E44\u0E17\u0E21\u0E4C\u0E44\u0E25\u0E19\u0E4C\u0E41\u0E25\u0E30\u0E1B\u0E49\u0E32\u0E22\u0E0A\u0E34\u0E1B\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E19\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E4C\u0E14 */\n:host ::ng-deep .step-item::before { border-color: rgba(255, 255, 255, .6); }\n:host ::ng-deep .chip { border-color: rgba(255, 255, 255, .35); }\n:host ::ng-deep .card .step-item::before { border-color: var(--navy-300); }\n:host ::ng-deep .card .steps { border-left-color: var(--navy-100); }\n:host ::ng-deep .card .chip { border-color: var(--navy-100); }\n:host ::ng-deep .card-title { color: var(--navy-900); }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension1Component, { className: "Dimension1Component", filePath: "src/app/pages/dimension1/dimension1.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=dimension1.component.js.map