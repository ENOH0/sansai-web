import { Component } from '@angular/core';
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
import { PagerComponent } from '../../shared/pager/pager.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension3Component_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 39);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 40);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r2 * 70);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(l_r1.letter);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r1.en);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r1.th);
} }
function Dimension3Component_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 42);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r4 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r3.letters);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r3.group);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(m_r3.text);
} }
function Dimension3Component_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r6 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r5.text);
} }
function Dimension3Component_div_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "h3", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r8 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r7.text);
} }
function Dimension3Component_div_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 4);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const it_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r10 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r10 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r9.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r9.text);
} }
function Dimension3Component_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 50);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r12 * 70);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r11.detail);
} }
function Dimension3Component_div_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 52);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 40);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r14 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ", i_r14 + 1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r13.text);
} }
function Dimension3Component_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const it_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r16 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r15.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(it_r15.text);
} }
function Dimension3Component_div_64_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const it_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(it_r17);
} }
function Dimension3Component_div_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "h3", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ol", 54);
    i0.ɵɵtemplate(4, Dimension3Component_div_64_li_4_Template, 2, 1, "li", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const key_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵproperty("revealDelay", i_r19 * 80);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(key_r18);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r19.d.indicators[key_r18]);
} }
export class Dimension3Component {
    gallery = GALLERY['d3'];
    d = DIM3;
    school = SCHOOL;
    indicatorKeys = Object.keys(DIM3.indicators);
    static ɵfac = function Dimension3Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension3Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension3Component, selectors: [["app-dimension3"]], decls: 67, vars: 25, consts: [[3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [1, "section", "section-alt"], ["num", "3.1", "title", "\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23", 3, "lead"], ["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], [1, "sec-lead", 2, "margin", "-8px 0 24px"], ["appReveal", "", 2, "margin-bottom", "38px"], [1, "grid", "grid-4", 2, "margin-bottom", "34px"], ["class", "card card-hover", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-2"], ["class", "card card-gold", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["appReveal", "", 1, "sec-head", 2, "margin-top", "52px"], [1, "steps"], ["class", "step-item", "appReveal", "left", 3, "revealDelay", 4, "ngFor", "ngForOf"], [1, "grid", "grid-4"], ["class", "card card-accent", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["num", "3.2", "title", "\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23", 3, "lead"], ["class", "card card-hover", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["num", "3.3", "title", "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", 3, "lead"], [3, "steps"], [1, "grid", "grid-3", 2, "margin-top", "38px"], ["num", "3.4", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19", 3, "lead"], [1, "grid", "grid-3"], ["label", "\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:", 2, "display", "block", "margin-top", "28px"], ["num", "3.5", "title", "\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28", 3, "lead"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3", 3, "items"], ["kicker", "\u0E2A\u0E23\u0E38\u0E1B", "title", "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E17\u0E31\u0E49\u0E07 5 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", "lead", "\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32"], ["class", "card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf"], [2, "margin-top", "34px"], ["prevPath", "/dimension-2", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23", "nextPath", "/dimension-4", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D"], ["appReveal", "zoom", 1, "card", "card-hover", 3, "revealDelay"], [1, "model-letter"], [1, "model-badge"], [1, "model-en"], [1, "card-body", 2, "margin", "0", "font-size", "15.5px"], ["appReveal", "", 1, "card", "card-gold", 3, "revealDelay"], [1, "chip", "chip-gold", 2, "margin-bottom", "10px"], [1, "card-title"], ["appReveal", "left", 1, "step-item", 3, "revealDelay"], ["appReveal", "zoom", 1, "card", "card-accent", 3, "revealDelay"], [1, "card-title", 2, "font-size", "17px"], ["appReveal", "", 1, "card", "card-hover", 3, "revealDelay"], [1, "step-no", 2, "width", "38px", "height", "38px", "border-radius", "11px", "display", "grid", "place-items", "center", "background", "#eef4fc", "color", "#183d80", "font-weight", "700", "border", "1px solid #d8e6f8", "margin-bottom", "12px"], [2, "font-weight", "700", "color", "#132f63", "font-size", "16.5px", "margin-bottom", "6px"], [2, "color", "#1e4d9e", "font-weight", "700", "font-size", "18px"], [1, "chip", 2, "margin-bottom", "10px"], [1, "card-title", 2, "font-size", "17.5px"], ["appReveal", "", 1, "card", 3, "revealDelay"], [1, "bullets", 2, "font-size", "15.5px"], [4, "ngFor", "ngForOf"]], template: function Dimension3Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 6)(8, "div", 2);
            i0.ɵɵelement(9, "app-section-header", 7);
            i0.ɵɵelementStart(10, "div", 8)(11, "h3", 9);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p", 11);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 12);
            i0.ɵɵelement(17, "app-banchuen-model");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 13);
            i0.ɵɵtemplate(19, Dimension3Component_div_19_Template, 8, 4, "div", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 15);
            i0.ɵɵtemplate(21, Dimension3Component_div_21_Template, 7, 4, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 17)(23, "h3", 9);
            i0.ɵɵtext(24, "\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(25, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 18);
            i0.ɵɵtemplate(27, Dimension3Component_div_27_Template, 5, 3, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 17)(29, "h3", 9);
            i0.ɵɵtext(30, "\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 20);
            i0.ɵɵtemplate(33, Dimension3Component_div_33_Template, 5, 3, "div", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "section", 1)(35, "div", 2);
            i0.ɵɵelement(36, "app-section-header", 22);
            i0.ɵɵelementStart(37, "div", 15);
            i0.ɵɵtemplate(38, Dimension3Component_div_38_Template, 7, 4, "div", 23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "section", 6)(40, "div", 2);
            i0.ɵɵelement(41, "app-section-header", 24)(42, "app-cycle-flow", 25);
            i0.ɵɵelementStart(43, "div", 26);
            i0.ɵɵtemplate(44, Dimension3Component_div_44_Template, 5, 3, "div", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(45, "section", 1)(46, "div", 2);
            i0.ɵɵelement(47, "app-section-header", 27);
            i0.ɵɵelementStart(48, "div", 28);
            i0.ɵɵtemplate(49, Dimension3Component_div_49_Template, 7, 4, "div", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "app-callout", 29);
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "section", 6)(53, "div", 2);
            i0.ɵɵelement(54, "app-section-header", 30);
            i0.ɵɵelementStart(55, "div", 18);
            i0.ɵɵtemplate(56, Dimension3Component_div_56_Template, 5, 3, "div", 19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "section", 1)(58, "div", 2);
            i0.ɵɵelement(59, "app-photo-gallery", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "section", 1)(61, "div", 2);
            i0.ɵɵelement(62, "app-section-header", 32);
            i0.ɵɵelementStart(63, "div", 15);
            i0.ɵɵtemplate(64, Dimension3Component_div_64_Template, 5, 3, "div", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 34);
            i0.ɵɵelement(66, "app-pager", 35);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.leadership.lead);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.school.model.name, " \u2014 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.school.model.tagline);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.school.model.letters);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.leadership.modelExplain);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.leadership.practices);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.leadership.groups);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.organization.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.organization.items);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.technology.lead);
            i0.ɵɵadvance();
            i0.ɵɵproperty("steps", ctx.d.technology.cycle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.technology.systems);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.qa.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.qa.steps);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.d.qa.confidence, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.information.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.d.information.items);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.indicatorKeys);
        } }, dependencies: [PhotoGalleryComponent,
            BanchuenModelComponent,
            CommonModule, i1.NgForOf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n\n\n.model-letter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge[_ngcontent-%COMP%] {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 23.5px;\n  font-weight: 700;\n  font-family: 'Sarabun', sans-serif;\n}\n\n.model-en[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--navy-600);\n  font-size: 16px;\n  line-height: 1.4;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension3Component, [{
        type: Component,
        args: [{ selector: 'app-dimension3', standalone: true, imports: [
                    PhotoGalleryComponent,
                    BanchuenModelComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.1 \u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.1\" title=\"\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\" [lead]=\"d.leadership.lead\" />\n\n    <!-- BANCHUEN Model -->\n    <div class=\"sec-head\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">{{ school.model.name }} \u2014 \u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <p class=\"sec-lead\" style=\"margin:-8px 0 24px\">{{ school.model.tagline }}</p>\n\n    <!-- \u0E42\u0E21\u0E40\u0E14\u0E25\u0E2A\u0E32\u0E21\u0E21\u0E34\u0E15\u0E34 \u0E25\u0E32\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2B\u0E21\u0E38\u0E19 \u0E41\u0E15\u0E30\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 -->\n    <div appReveal style=\"margin-bottom:38px\">\n      <app-banchuen-model />\n    </div>\n\n    <!-- \u0E04\u0E27\u0E32\u0E21\u0E2B\u0E21\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E17\u0E31\u0E49\u0E07 8 (\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01 school.data.ts) -->\n    <div class=\"grid grid-4\" style=\"margin-bottom:34px\">\n      <div class=\"card card-hover\" *ngFor=\"let l of school.model.letters; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div class=\"model-letter\">\n          <span class=\"model-badge\">{{ l.letter }}</span>\n          <span class=\"model-en\">{{ l.en }}</span>\n        </div>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ l.th }}</p>\n      </div>\n    </div>\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-gold\" *ngFor=\"let m of d.leadership.modelExplain; let i = index\"\n           appReveal [revealDelay]=\"i * 90\">\n        <div class=\"chip chip-gold\" style=\"margin-bottom:10px\">{{ m.letters }}</div>\n        <h3 class=\"card-title\">{{ m.group }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ m.text }}</p>\n      </div>\n    </div>\n\n    <!-- \u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E41\u0E19\u0E27\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E15\u0E32\u0E21\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 5 \u0E02\u0E49\u0E2D</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let p of d.leadership.practices; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ p.title }}</h4>\n        <p>{{ p.text }}</p>\n      </div>\n    </div>\n\n    <!-- 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 -->\n    <div class=\"sec-head\" style=\"margin-top:52px\" appReveal>\n      <h3 class=\"sec-title\" style=\"font-size:22px\">\u0E01\u0E32\u0E23\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E48\u0E32\u0E19 4 \u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23</h3>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"grid grid-4\">\n      <div class=\"card card-accent\" *ngFor=\"let g of d.leadership.groups; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 90\">\n        <h3 class=\"card-title\" style=\"font-size:17px\">{{ g.name }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ g.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.2 \u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.2\" title=\"\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\" [lead]=\"d.organization.lead\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card card-hover\" *ngFor=\"let it of d.organization.items; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"step-no\" style=\"width:38px;height:38px;border-radius:11px;display:grid;\n                    place-items:center;background:#eef4fc;color:#183d80;font-weight:700;\n                    border:1px solid #d8e6f8;margin-bottom:12px\">{{ i + 1 }}</div>\n        <h3 class=\"card-title\">{{ it.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0\">{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.3 \u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.3\" title=\"\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E23\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\" [lead]=\"d.technology.lead\" />\n\n    <app-cycle-flow [steps]=\"d.technology.cycle\" />\n\n    <div class=\"grid grid-3\" style=\"margin-top:38px\">\n      <div class=\"card card-accent\" *ngFor=\"let s of d.technology.systems; let i = index\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n        <div style=\"font-weight:700;color:#132f63;font-size:16.5px;margin-bottom:6px\">{{ s.name }}</div>\n        <div style=\"color:#1e4d9e;font-weight:700;font-size:18px\">{{ s.detail }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.4 \u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.4\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E20\u0E32\u0E22\u0E43\u0E19\" [lead]=\"d.qa.lead\" />\n\n    <div class=\"grid grid-3\">\n      <div class=\"card card-hover\" *ngFor=\"let s of d.qa.steps; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <div class=\"chip\" style=\"margin-bottom:10px\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ i + 1 }}</div>\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ s.title }}</h3>\n        <p class=\"card-body\" style=\"margin:0;font-size:15.5px\">{{ s.text }}</p>\n      </div>\n    </div>\n\n    <app-callout label=\"\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:\" style=\"display:block;margin-top:28px\">\n      {{ d.qa.confidence }}\n    </app-callout>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 3.5 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"3.5\" title=\"\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E2A\u0E32\u0E23\u0E2A\u0E19\u0E40\u0E17\u0E28\" [lead]=\"d.information.lead\" />\n\n    <div class=\"steps\">\n      <div class=\"step-item\" *ngFor=\"let it of d.information.items; let i = index\"\n           appReveal=\"left\" [revealDelay]=\"i * 90\">\n        <h4>{{ it.title }}</h4>\n        <p>{{ it.text }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E2A\u0E23\u0E38\u0E1B\"\n      title=\"\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E17\u0E31\u0E49\u0E07 5 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\"\n      lead=\"\u0E15\u0E32\u0E21\u0E41\u0E1A\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E16\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\" />\n\n    <div class=\"grid grid-2\">\n      <div class=\"card\" *ngFor=\"let key of indicatorKeys; let i = index\"\n           appReveal [revealDelay]=\"i * 80\">\n        <h3 class=\"card-title\" style=\"font-size:17.5px\">{{ key }}</h3>\n        <ol class=\"bullets\" style=\"font-size:15.5px\">\n          <li *ngFor=\"let it of d.indicators[key]\">{{ it }}</li>\n        </ol>\n      </div>\n    </div>\n\n    <div style=\"margin-top:34px\">\n      <app-pager\n        prevPath=\"/dimension-2\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\"\n        nextPath=\"/dimension-4\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 4 \u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E17\u0E35\u0E48\u0E40\u0E19\u0E49\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E33\u0E04\u0E31\u0E0D\" />\n    </div>\n  </div>\n</section>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E02\u0E2D\u0E07 BANCHUEN Model */\n.model-letter {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n\n.model-badge {\n  width: 44px; height: 44px;\n  border-radius: 12px;\n  background: var(--navy-700);\n  color: #fff;\n  display: grid; place-items: center;\n  font-size: 23.5px;\n  font-weight: 700;\n  font-family: 'Sarabun', sans-serif;\n}\n\n.model-en {\n  font-weight: 700;\n  color: var(--navy-600);\n  font-size: 16px;\n  line-height: 1.4;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension3Component, { className: "Dimension3Component", filePath: "src/app/pages/dimension3/dimension3.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=dimension3.component.js.map