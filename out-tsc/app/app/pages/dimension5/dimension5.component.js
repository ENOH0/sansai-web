import { Component } from '@angular/core';
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
import { PagerComponent } from '../../shared/pager/pager.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension5Component_ng_container_7_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(o_r1);
} }
function Dimension5Component_ng_container_7_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(n_r2);
} }
function Dimension5Component_ng_container_7_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28)(1, "h3", 20);
    i0.ɵɵtext(2, "\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29);
    i0.ɵɵtemplate(4, Dimension5Component_ng_container_7_div_16_span_4_Template, 2, 1, "span", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", p_r3.partners);
} }
function Dimension5Component_ng_container_7_ng_container_17_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "h3", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const gi_r5 = ctx.index;
    i0.ɵɵproperty("revealDelay", gi_r5 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r4.text);
} }
function Dimension5Component_ng_container_7_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 32)(2, "h3", 23);
    i0.ɵɵtext(3, "\u0E01\u0E32\u0E23\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E31\u0E49\u0E07 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 33);
    i0.ɵɵtemplate(6, Dimension5Component_ng_container_7_ng_container_17_div_6_Template, 5, 3, "div", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const p_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", p_r3.subjectGroups);
} }
function Dimension5Component_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 1)(2, "div", 2);
    i0.ɵɵelement(3, "app-section-header", 17);
    i0.ɵɵelementStart(4, "app-callout", 18);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 19)(7, "h3", 20);
    i0.ɵɵtext(8, "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "ol", 21);
    i0.ɵɵtemplate(10, Dimension5Component_ng_container_7_li_10_Template, 2, 1, "li", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 22)(12, "h3", 23);
    i0.ɵɵtext(13, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "app-cycle-flow", 25);
    i0.ɵɵtemplate(16, Dimension5Component_ng_container_7_div_16_Template, 5, 1, "div", 26)(17, Dimension5Component_ng_container_7_ng_container_17_Template, 7, 1, "ng-container", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const pi_r6 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("section-alt", pi_r6 % 2 === 0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("num", p_r3.no)("title", p_r3.name)("lead", p_r3.summary);
    i0.ɵɵadvance();
    i0.ɵɵproperty("gold", true);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", p_r3.royal, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", p_r3.objectives);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("steps", p_r3.cycle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r3.partners == null ? null : p_r3.partners.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", p_r3.subjectGroups == null ? null : p_r3.subjectGroups.length);
} }
function Dimension5Component_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "h3", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 37);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r8 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r7.text);
} }
function Dimension5Component_div_19_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r9);
} }
function Dimension5Component_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "h3", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 21);
    i0.ɵɵtemplate(4, Dimension5Component_div_19_li_4_Template, 2, 1, "li", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r10 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r10.d.indicators[key_r10]);
} }
export class Dimension5Component {
    gallery = GALLERY['d5'];
    d = DIM5;
    indicatorKeys = Object.keys(DIM5.indicators);
    static ɵfac = function Dimension5Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension5Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension5Component, selectors: [["app-dimension5"]], decls: 24, vars: 12, consts: [[3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [4, "ngFor", "ngForOf"], [1, "section", "section-alt"], ["kicker", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19", 3, "title", "lead"], [1, "grid", "grid-4"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", "lead", "\u0E20\u0E32\u0E1E\u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", 3, "items"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 4, "ngFor", "ngForOf"], ["label", "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38:", 2, "display", "block", "margin-top", "24px"], [2, "margin-top", "34px"], ["prevPath", "/dimension-4", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D", "nextPath", "/", "nextName", "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"], [3, "num", "title", "lead"], ["label", "\u0E17\u0E35\u0E48\u0E21\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23:", 2, "display", "block", "margin-bottom", "30px", 3, "gold"], ["appReveal", "", 1, "card", 2, "margin-bottom", "34px"], [1, "card-title"], [1, "bullets"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], [3, "steps"], ["class", "card card-gold", "appReveal", "", "style", "margin-top:34px", 4, "ngIf"], [4, "ngIf"], ["appReveal", "", 1, "card", "card-gold", 2, "margin-top", "34px"], [1, "chip-row", 2, "margin-top", "12px"], ["class", "chip chip-gold", 4, "ngFor", "ngForOf"], [1, "chip", "chip-gold"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "grid", "grid-2"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17.5px"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], ["appReveal", "", 1, "card"]], template: function Dimension5Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, Dimension5Component_ng_container_7_Template, 18, 11, "ng-container", 6);
            i0.ɵɵelementStart(8, "section", 7)(9, "div", 2);
            i0.ɵɵelement(10, "app-section-header", 8);
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵtemplate(12, Dimension5Component_div_12_Template, 5, 3, "div", 10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "section", 1)(14, "div", 2);
            i0.ɵɵelement(15, "app-photo-gallery", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "section", 1)(17, "div", 2);
            i0.ɵɵelement(18, "app-section-header", 12);
            i0.ɵɵtemplate(19, Dimension5Component_div_19_Template, 5, 2, "div", 13);
            i0.ɵɵelementStart(20, "app-callout", 14);
            i0.ɵɵtext(21, " \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E19\u0E27\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E14\u0E33\u0E23\u0E34\u0E02\u0E2D\u0E07\u0E1E\u0E23\u0E30\u0E1A\u0E32\u0E17\u0E2A\u0E21\u0E40\u0E14\u0E47\u0E08\u0E1E\u0E23\u0E30\u0E40\u0E08\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E31\u0E27\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E17\u0E35\u0E48 9 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 15);
            i0.ɵɵelement(23, "app-pager", 16);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.d.projects);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.d.dissemination.title)("lead", ctx.d.dissemination.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.dissemination.channels);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.indicatorKeys);
        } }, dependencies: [PhotoGalleryComponent,
            CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension5Component, [{
        type: Component,
        args: [{ selector: 'app-dimension5', standalone: true, imports: [
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E17\u0E31\u0E49\u0E07 3 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<ng-container *ngFor=\"let p of d.projects; let pi = index\">\n  <section class=\"section\" [class.section-alt]=\"pi % 2 === 0\">\n    <div class=\"wrap\">\n      <app-section-header\n        [num]=\"p.no\"\n        [title]=\"p.name\"\n        [lead]=\"p.summary\" />\n\n      <app-callout label=\"\u0E17\u0E35\u0E48\u0E21\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23:\" [gold]=\"true\" style=\"display:block;margin-bottom:30px\">\n        {{ p.royal }}\n      </app-callout>\n\n      <div class=\"card\" appReveal style=\"margin-bottom:34px\">\n        <h3 class=\"card-title\">\u0E27\u0E31\u0E15\u0E16\u0E38\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C</h3>\n        <ol class=\"bullets\">\n          <li *ngFor=\"let o of p.objectives\">{{ o }}</li>\n        </ol>\n      </div>\n\n      <div class=\"sec-head\" appReveal>\n        <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19</h3>\n        <div class=\"sec-rule\"></div>\n      </div>\n\n      <app-cycle-flow [steps]=\"p.cycle\" />\n\n      <!-- \u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32 (\u0E40\u0E09\u0E1E\u0E32\u0E30 5.1) -->\n      <div class=\"card card-gold\" *ngIf=\"p.partners?.length\" appReveal style=\"margin-top:34px\">\n        <h3 class=\"card-title\">\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E36\u0E01\u0E29\u0E32</h3>\n        <div class=\"chip-row\" style=\"margin-top:12px\">\n          <span class=\"chip chip-gold\" *ngFor=\"let n of p.partners\">{{ n }}</span>\n        </div>\n      </div>\n\n      <!-- 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30 (\u0E40\u0E09\u0E1E\u0E32\u0E30 5.2) -->\n      <ng-container *ngIf=\"p.subjectGroups?.length\">\n        <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n          <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E32\u0E23\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E25\u0E34\u0E28\u0E04\u0E23\u0E1A\u0E17\u0E31\u0E49\u0E07 8 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E30\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49</h3>\n          <div class=\"sec-rule\"></div>\n        </div>\n        <div class=\"grid grid-2\">\n          <div class=\"card card-hover\" *ngFor=\"let g of p.subjectGroups; let gi = index\"\n               appReveal [revealDelay]=\"gi * 70\">\n            <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ g.name }}</h3>\n            <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ g.text }}</p>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </section>\n</ng-container>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E01\u0E32\u0E23\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19\"\n      [title]=\"d.dissemination.title\"\n      [lead]=\"d.dissemination.lead\" />\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-accent\" *ngFor=\"let c of d.dissemination.channels; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ c.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ c.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"card\" *ngFor=\"let key of indicatorKeys\" appReveal>\n      <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n      <ol class=\"bullets\">\n        <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n      </ol>\n    </div>\n\n    <app-callout label=\"\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38:\" style=\"display:block;margin-top:24px\">\n      \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E19\u0E33\u0E40\u0E2A\u0E19\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E15\u0E32\u0E21\u0E41\u0E19\u0E27\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E14\u0E33\u0E23\u0E34\u0E02\u0E2D\u0E07\u0E1E\u0E23\u0E30\u0E1A\u0E32\u0E17\u0E2A\u0E21\u0E40\u0E14\u0E47\u0E08\u0E1E\u0E23\u0E30\u0E40\u0E08\u0E49\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E31\u0E27\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E17\u0E35\u0E48 9 \u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E31\u0E0A\u0E01\u0E32\u0E25\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\n      \u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19\n    </app-callout>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-4\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D\"\n        nextPath=\"/\" nextName=\"\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\" />\n    </div>\n  </div>\n</section>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension5Component, { className: "Dimension5Component", filePath: "src/app/pages/dimension5/dimension5.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=dimension5.component.js.map