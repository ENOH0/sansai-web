import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { STUDENT_AWARDS, TEACHER_AWARDS, AWARD_LEVELS, AWARD_CATEGORIES } from '../../data/awards.data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AwardsComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function AwardsComponent_button_18_Template_button_click_0_listener() { const l_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setLevel(l_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-on", ctx_r2.level === l_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", l_r2, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.countLevel(l_r2));
} }
function AwardsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function AwardsComponent_button_22_Template_button_click_0_listener() { const c_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setCategory(c_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-on", ctx_r2.category === c_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", c_r5, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.countCategory(c_r5));
} }
function AwardsComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function AwardsComponent_button_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clear()); });
    i0.ɵɵtext(1, " \u0E25\u0E49\u0E32\u0E07\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07 ");
    i0.ɵɵelementEnd();
} }
function AwardsComponent_article_28_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function AwardsComponent_article_28_button_2_Template_button_click_0_listener() { const p_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.open(p_r8)); });
    i0.ɵɵelement(1, "img", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const a_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattribute("aria-label", "\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07 " + a_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r8, i0.ɵɵsanitizeUrl)("alt", a_r9.name + " \u2014 " + a_r9.award);
} }
function AwardsComponent_article_28_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r9.detail);
} }
function AwardsComponent_article_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 26)(1, "div", 27);
    i0.ɵɵtemplate(2, AwardsComponent_article_28_button_2_Template, 2, 3, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29)(4, "div", 30)(5, "span", 31);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "h3", 32);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 33);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, AwardsComponent_article_28_p_13_Template, 2, 1, "p", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r10 % 3 * 80);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("two", a_r9.photos.length > 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", a_r9.photos);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("chip-gold", a_r9.level === "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r9.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r9.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r9.award);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", a_r9.detail);
} }
function AwardsComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 38);
    i0.ɵɵtext(1, " \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2014 \u0E25\u0E2D\u0E07\u0E25\u0E49\u0E32\u0E07\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\u0E41\u0E25\u0E49\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48 ");
    i0.ɵɵelementEnd();
} }
function AwardsComponent_article_34_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function AwardsComponent_article_34_button_2_Template_button_click_0_listener() { const p_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.open(p_r12)); });
    i0.ɵɵelement(1, "img", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const t_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵattribute("aria-label", "\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07 " + t_r13.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r12, i0.ɵɵsanitizeUrl)("alt", t_r13.name + " \u2014 " + t_r13.award);
} }
function AwardsComponent_article_34_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(t_r13.detail);
} }
function AwardsComponent_article_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 26)(1, "div", 27);
    i0.ɵɵtemplate(2, AwardsComponent_article_34_button_2_Template, 2, 3, "button", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 29)(4, "div", 30)(5, "span", 39);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "h3", 32);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 33);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, AwardsComponent_article_34_p_11_Template, 2, 1, "p", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r14 * 90);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", t_r13.photos);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(t_r13.role);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r13.award);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", t_r13.detail);
} }
function AwardsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function AwardsComponent_div_38_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementStart(1, "button", 41);
    i0.ɵɵlistener("click", function AwardsComponent_div_38_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(2, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "img", 42);
    i0.ɵɵlistener("click", function AwardsComponent_div_38_Template_img_click_3_listener($event) { i0.ɵɵrestoreView(_r15); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r2.lightbox, i0.ɵɵsanitizeUrl);
} }
/**
 * หน้ารางวัลเชิงประจักษ์
 * รวมรางวัลของนักเรียน (เล่มด้านที่ 1) และของครู (เล่มด้านที่ 3)
 * กรองตามระดับรางวัลและหมวดหมู่ได้ และแตะรูปเพื่อดูขนาดเต็ม
 */
export class AwardsComponent {
    students = STUDENT_AWARDS;
    teachers = TEACHER_AWARDS;
    levels = AWARD_LEVELS;
    categories = AWARD_CATEGORIES;
    /** ตัวกรองที่เลือกอยู่ ('' = ทั้งหมด) */
    level = '';
    category = '';
    /** รูปที่กำลังเปิดดูขนาดเต็ม (null = ปิด) */
    lightbox = null;
    kpis = [
        { value: STUDENT_AWARDS.length, unit: 'รางวัล', label: 'รางวัลนักเรียนที่มีหลักฐานภาพ', note: 'จากภาคผนวกรางวัลเชิงประจักษ์ เล่มด้านที่ 1' },
        { value: STUDENT_AWARDS.filter(a => a.level === 'ระดับนานาชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับนานาชาติ', note: 'เทเบิลเทนนิส · ชีววิทยาการแพทย์ · เทคโนโลยี' },
        { value: STUDENT_AWARDS.filter(a => a.level === 'ระดับชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับชาติ', note: 'ครอบคลุมทุกกลุ่มสาระการเรียนรู้' },
        { value: TEACHER_AWARDS.length, unit: 'รายการ', label: 'รางวัลและวิทยฐานะของครู', note: 'จากเล่มด้านที่ 3 การสร้างขวัญกำลังใจ' }
    ];
    /** รายการรางวัลนักเรียนหลังผ่านตัวกรอง */
    get filtered() {
        return this.students.filter(a => (!this.level || a.level === this.level) &&
            (!this.category || a.category === this.category));
    }
    setLevel(v) { this.level = this.level === v ? '' : v; }
    setCategory(v) { this.category = this.category === v ? '' : v; }
    clear() { this.level = ''; this.category = ''; }
    countLevel(v) { return this.students.filter(a => a.level === v).length; }
    countCategory(v) { return this.students.filter(a => a.category === v).length; }
    open(src) { this.lightbox = src; }
    close() { this.lightbox = null; }
    trackByName(_i, a) { return a.name + a.award; }
    static ɵfac = function AwardsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AwardsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AwardsComponent, selectors: [["app-awards"]], decls: 39, vars: 12, consts: [[1, "page-hero", "awards-hero"], [1, "wrap", "page-hero-inner"], [1, "page-badge"], [1, "section"], [1, "wrap"], [3, "items"], [1, "section", "section-alt"], ["kicker", "\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "title", "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "lead", "\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E21\u0E35\u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21 \u0E41\u0E15\u0E30\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 \u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48"], ["appReveal", "", 1, "filters"], [1, "filter-row"], [1, "filter-label"], ["type", "button", "class", "fchip", 3, "is-on", "click", 4, "ngFor", "ngForOf"], [1, "filter-foot"], [1, "filter-result"], ["type", "button", "class", "fclear", 3, "click", 4, "ngIf"], [1, "award-grid"], ["class", "award-card", "appReveal", "", 3, "revealDelay", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "award-empty", 4, "ngIf"], ["kicker", "\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "title", "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E41\u0E25\u0E30\u0E27\u0E34\u0E17\u0E22\u0E10\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E23\u0E39", "lead", "\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E25\u0E30\u0E01\u0E33\u0E25\u0E31\u0E07\u0E43\u0E08 \u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E01\u0E49\u0E32\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E"], [1, "award-grid", "teacher-grid"], [1, "section-tight", "section-alt"], ["prevPath", "/dimension-5", "prevName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32", "nextPath", "/", "nextName", "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"], ["class", "lightbox", 3, "click", 4, "ngIf"], ["type", "button", 1, "fchip", 3, "click"], [1, "fcount"], ["type", "button", 1, "fclear", 3, "click"], ["appReveal", "", 1, "award-card", 3, "revealDelay"], [1, "award-photos"], ["type", "button", "class", "award-photo", 3, "click", 4, "ngFor", "ngForOf"], [1, "award-body"], [1, "chip-row"], [1, "chip"], [1, "award-name"], [1, "award-title"], ["class", "award-detail", 4, "ngIf"], ["type", "button", 1, "award-photo", 3, "click"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "award-detail"], [1, "award-empty"], [1, "chip", "chip-gold"], [1, "lightbox", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14", 1, "lightbox-close", 3, "click"], ["alt", "", 3, "click", "src"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E04\u0E23\u0E39");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, " \u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E02\u0E2D\u0E07\u0E04\u0E23\u0E39 \u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E08\u0E32\u0E01\u0E20\u0E32\u0E04\u0E1C\u0E19\u0E27\u0E01\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E01\u0E33\u0E25\u0E31\u0E07\u0E43\u0E08\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "section", 3)(9, "div", 4);
            i0.ɵɵelement(10, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "section", 6)(12, "div", 4);
            i0.ɵɵelement(13, "app-section-header", 7);
            i0.ɵɵelementStart(14, "div", 8)(15, "div", 9)(16, "span", 10);
            i0.ɵɵtext(17, "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(18, AwardsComponent_button_18_Template, 4, 4, "button", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 9)(20, "span", 10);
            i0.ɵɵtext(21, "\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, AwardsComponent_button_22_Template, 4, 4, "button", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 12)(24, "span", 13);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, AwardsComponent_button_26_Template, 2, 0, "button", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 15);
            i0.ɵɵtemplate(28, AwardsComponent_article_28_Template, 14, 11, "article", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, AwardsComponent_p_29_Template, 2, 0, "p", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "section", 3)(31, "div", 4);
            i0.ɵɵelement(32, "app-section-header", 18);
            i0.ɵɵelementStart(33, "div", 19);
            i0.ɵɵtemplate(34, AwardsComponent_article_34_Template, 12, 6, "article", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "section", 20)(36, "div", 4);
            i0.ɵɵelement(37, "app-pager", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(38, AwardsComponent_div_38_Template, 4, 1, "div", 22);
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("items", ctx.kpis);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.levels);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.categories);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("\u0E41\u0E2A\u0E14\u0E07 ", ctx.filtered.length, " \u0E08\u0E32\u0E01 ", ctx.students.length, " \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.level || ctx.category);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.filtered)("ngForTrackBy", ctx.trackByName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.filtered.length);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.teachers)("ngForTrackBy", ctx.trackByName);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.lightbox);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective, SectionHeaderComponent,
            KpiGridComponent, PagerComponent], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n.awards-hero[_ngcontent-%COMP%] { background: linear-gradient(140deg, var(--navy-950), var(--navy-800) 55%, var(--navy-600)); }\n\n\n\n.filters[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 20px 22px;\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 28px;\n}\n\n.filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.filter-row[_ngcontent-%COMP%]    + .filter-row[_ngcontent-%COMP%] { margin-top: 14px; }\n\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ink-mute);\n  min-width: 92px;\n}\n\n.fchip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  \n\n  min-height: 44px;\n  padding: 0 15px;\n  border-radius: 11px;\n  border: 1px solid var(--navy-100);\n  background: #fff;\n  color: var(--ink-soft);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background .2s var(--ease), color .2s var(--ease),\n              border-color .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fchip[_ngcontent-%COMP%]:active { transform: scale(.96); }\n\n.fchip.is-on[_ngcontent-%COMP%] {\n  background: var(--navy-600);\n  border-color: var(--navy-600);\n  color: #fff;\n  box-shadow: 0 6px 16px rgba(30, 77, 158, .26);\n}\n\n.fcount[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  background: var(--navy-50);\n  color: var(--navy-700);\n  border-radius: 999px;\n  padding: 1px 8px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fchip.is-on[_ngcontent-%COMP%]   .fcount[_ngcontent-%COMP%] { background: rgba(255, 255, 255, .22); color: #fff; }\n\n@media (hover: hover) {\n  .fchip[_ngcontent-%COMP%]:hover:not(.is-on) { border-color: var(--navy-300); background: var(--navy-50); }\n}\n\n.filter-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--line);\n}\n\n.filter-result[_ngcontent-%COMP%] { font-size: 14.5px; color: var(--ink-mute); font-weight: 600; }\n\n.fclear[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: 10px;\n  border: 1px solid var(--navy-200);\n  background: #fff;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 14.5px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n.award-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 22px;\n}\n\n.teacher-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(4, minmax(0, 1fr)); }\n\n.award-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease);\n}\n\n@media (hover: hover) {\n  .award-card[_ngcontent-%COMP%]:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }\n}\n\n.award-photos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 2px;\n  background: var(--navy-50);\n}\n\n.award-photos.two[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; }\n\n.award-photo[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  background: var(--navy-50);\n  cursor: zoom-in;\n  display: block;\n  overflow: hidden;\n  aspect-ratio: 4 / 3;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.award-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform .45s var(--ease);\n}\n\n@media (hover: hover) {\n  .award-photo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] { transform: scale(1.05); }\n}\n\n.award-body[_ngcontent-%COMP%] { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px; }\n\n.award-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 1.5;\n  color: var(--navy-900);\n  margin: 4px 0 0;\n}\n\n.award-title[_ngcontent-%COMP%] { margin: 0; font-size: 15.5px; font-weight: 700; color: var(--navy-600); line-height: 1.6; }\n.award-detail[_ngcontent-%COMP%] { margin: 0; font-size: 14.5px; color: var(--ink-soft); line-height: 1.7; }\n\n.award-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  color: var(--ink-mute);\n  font-size: 16px;\n}\n\n\n\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 90;\n  background: rgba(8, 21, 47, .92);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: grid;\n  place-items: center;\n  padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom));\n  animation: _ngcontent-%COMP%_lbIn .25s var(--ease);\n  cursor: zoom-out;\n}\n\n@keyframes _ngcontent-%COMP%_lbIn { from { opacity: 0; } to { opacity: 1; } }\n\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 12px;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, .5);\n  cursor: default;\n  animation: _ngcontent-%COMP%_lbZoom .3s var(--ease);\n}\n\n@keyframes _ngcontent-%COMP%_lbZoom { from { transform: scale(.94); } to { transform: none; } }\n\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: max(18px, env(safe-area-inset-top));\n  right: 18px;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n@media (max-width: 1180px) {\n  .teacher-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 1024px) {\n  .award-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 834px) {\n  .award-grid[_ngcontent-%COMP%], .teacher-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .filter-label[_ngcontent-%COMP%] { min-width: 100%; margin-bottom: 2px; }\n  .award-photo[_ngcontent-%COMP%] { aspect-ratio: 16 / 10; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .lightbox[_ngcontent-%COMP%], .lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { animation: none !important; }\n  .award-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { transition: none !important; }\n}\n\n@media print {\n  .filters[_ngcontent-%COMP%], .lightbox[_ngcontent-%COMP%] { display: none !important; }\n  .award-card[_ngcontent-%COMP%] { break-inside: avoid; box-shadow: none; }\n  .award-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AwardsComponent, [{
        type: Component,
        args: [{ selector: 'app-awards', standalone: true, imports: [
                    CommonModule, RevealDirective, SectionHeaderComponent,
                    KpiGridComponent, PagerComponent
                ], template: "<header class=\"page-hero awards-hero\">\n  <div class=\"wrap page-hero-inner\">\n    <span class=\"page-badge\">\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C</span>\n    <h1>\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E04\u0E23\u0E39</h1>\n    <p>\n      \u0E1C\u0E25\u0E07\u0E32\u0E19\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E02\u0E2D\u0E07\u0E04\u0E23\u0E39\n      \u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E08\u0E32\u0E01\u0E20\u0E32\u0E04\u0E1C\u0E19\u0E27\u0E01\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E01\u0E33\u0E25\u0E31\u0E07\u0E43\u0E08\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3\n    </p>\n  </div>\n</header>\n\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-kpi-grid [items]=\"kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n      title=\"\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n      lead=\"\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E21\u0E35\u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21 \u0E41\u0E15\u0E30\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 \u0E41\u0E25\u0E30\u0E43\u0E0A\u0E49\u0E1B\u0E38\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\" />\n\n    <!-- \u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07 -->\n    <div class=\"filters\" appReveal>\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</span>\n        <button type=\"button\" class=\"fchip\" *ngFor=\"let l of levels\"\n                [class.is-on]=\"level === l\" (click)=\"setLevel(l)\">\n          {{ l }} <span class=\"fcount\">{{ countLevel(l) }}</span>\n        </button>\n      </div>\n\n      <div class=\"filter-row\">\n        <span class=\"filter-label\">\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48</span>\n        <button type=\"button\" class=\"fchip\" *ngFor=\"let c of categories\"\n                [class.is-on]=\"category === c\" (click)=\"setCategory(c)\">\n          {{ c }} <span class=\"fcount\">{{ countCategory(c) }}</span>\n        </button>\n      </div>\n\n      <div class=\"filter-foot\">\n        <span class=\"filter-result\">\u0E41\u0E2A\u0E14\u0E07 {{ filtered.length }} \u0E08\u0E32\u0E01 {{ students.length }} \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</span>\n        <button type=\"button\" class=\"fclear\" *ngIf=\"level || category\" (click)=\"clear()\">\n          \u0E25\u0E49\u0E32\u0E07\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\n        </button>\n      </div>\n    </div>\n\n    <!-- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 -->\n    <div class=\"award-grid\">\n      <article class=\"award-card\" *ngFor=\"let a of filtered; let i = index; trackBy: trackByName\"\n               appReveal [revealDelay]=\"(i % 3) * 80\">\n        <div class=\"award-photos\" [class.two]=\"a.photos.length > 1\">\n          <button type=\"button\" class=\"award-photo\" *ngFor=\"let p of a.photos\"\n                  (click)=\"open(p)\" [attr.aria-label]=\"'\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07 ' + a.name\">\n            <img [src]=\"p\" [alt]=\"a.name + ' \u2014 ' + a.award\" loading=\"lazy\" decoding=\"async\" />\n          </button>\n        </div>\n\n        <div class=\"award-body\">\n          <div class=\"chip-row\">\n            <span class=\"chip\" [class.chip-gold]=\"a.level === '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34'\">{{ a.level }}</span>\n            <span class=\"chip\">{{ a.category }}</span>\n          </div>\n          <h3 class=\"award-name\">{{ a.name }}</h3>\n          <p class=\"award-title\">{{ a.award }}</p>\n          <p class=\"award-detail\" *ngIf=\"a.detail\">{{ a.detail }}</p>\n        </div>\n      </article>\n    </div>\n\n    <p class=\"award-empty\" *ngIf=\"!filtered.length\">\n      \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E15\u0E32\u0E21\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01 \u2014 \u0E25\u0E2D\u0E07\u0E25\u0E49\u0E32\u0E07\u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07\u0E41\u0E25\u0E49\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48\n    </p>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E04\u0E23\u0E39 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header\n      kicker=\"\u0E40\u0E25\u0E48\u0E21\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 3 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      title=\"\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E41\u0E25\u0E30\u0E27\u0E34\u0E17\u0E22\u0E10\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E23\u0E39\"\n      lead=\"\u0E1C\u0E25\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E27\u0E31\u0E0D\u0E41\u0E25\u0E30\u0E01\u0E33\u0E25\u0E31\u0E07\u0E43\u0E08 \u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E39\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E08\u0E19\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E41\u0E25\u0E30\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E01\u0E49\u0E32\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E0A\u0E35\u0E1E\" />\n\n    <div class=\"award-grid teacher-grid\">\n      <article class=\"award-card\" *ngFor=\"let t of teachers; let i = index; trackBy: trackByName\"\n               appReveal [revealDelay]=\"i * 90\">\n        <div class=\"award-photos\">\n          <button type=\"button\" class=\"award-photo\" *ngFor=\"let p of t.photos\"\n                  (click)=\"open(p)\" [attr.aria-label]=\"'\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\u0E02\u0E2D\u0E07 ' + t.name\">\n            <img [src]=\"p\" [alt]=\"t.name + ' \u2014 ' + t.award\" loading=\"lazy\" decoding=\"async\" />\n          </button>\n        </div>\n        <div class=\"award-body\">\n          <div class=\"chip-row\"><span class=\"chip chip-gold\">{{ t.role }}</span></div>\n          <h3 class=\"award-name\">{{ t.name }}</h3>\n          <p class=\"award-title\">{{ t.award }}</p>\n          <p class=\"award-detail\" *ngIf=\"t.detail\">{{ t.detail }}</p>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n\n<section class=\"section-tight section-alt\">\n  <div class=\"wrap\">\n    <app-pager\n      prevPath=\"/dimension-5\" prevName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 5 \u0E04\u0E27\u0E32\u0E21\u0E14\u0E35\u0E40\u0E14\u0E48\u0E19\u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      nextPath=\"/\" nextName=\"\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01\" />\n  </div>\n</section>\n\n<!-- \u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 -->\n<div class=\"lightbox\" *ngIf=\"lightbox\" (click)=\"close()\">\n  <button type=\"button\" class=\"lightbox-close\" (click)=\"close()\" aria-label=\"\u0E1B\u0E34\u0E14\">\u2715</button>\n  <img [src]=\"lightbox\" alt=\"\" (click)=\"$event.stopPropagation()\" />\n</div>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C */\n:host { display: block; }\n\n.awards-hero { background: linear-gradient(140deg, var(--navy-950), var(--navy-800) 55%, var(--navy-600)); }\n\n/* ---------- \u0E15\u0E31\u0E27\u0E01\u0E23\u0E2D\u0E07 ---------- */\n.filters {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 20px 22px;\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 28px;\n}\n\n.filter-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.filter-row + .filter-row { margin-top: 14px; }\n\n.filter-label {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ink-mute);\n  min-width: 92px;\n}\n\n.fchip {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  /* \u0E2A\u0E39\u0E07 44px \u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E02\u0E2D\u0E07 Apple */\n  min-height: 44px;\n  padding: 0 15px;\n  border-radius: 11px;\n  border: 1px solid var(--navy-100);\n  background: #fff;\n  color: var(--ink-soft);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background .2s var(--ease), color .2s var(--ease),\n              border-color .2s var(--ease), transform .18s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.fchip:active { transform: scale(.96); }\n\n.fchip.is-on {\n  background: var(--navy-600);\n  border-color: var(--navy-600);\n  color: #fff;\n  box-shadow: 0 6px 16px rgba(30, 77, 158, .26);\n}\n\n.fcount {\n  font-size: 13px;\n  font-weight: 700;\n  background: var(--navy-50);\n  color: var(--navy-700);\n  border-radius: 999px;\n  padding: 1px 8px;\n  font-variant-numeric: tabular-nums;\n}\n\n.fchip.is-on .fcount { background: rgba(255, 255, 255, .22); color: #fff; }\n\n@media (hover: hover) {\n  .fchip:hover:not(.is-on) { border-color: var(--navy-300); background: var(--navy-50); }\n}\n\n.filter-foot {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--line);\n}\n\n.filter-result { font-size: 14.5px; color: var(--ink-mute); font-weight: 600; }\n\n.fclear {\n  min-height: 40px;\n  padding: 0 16px;\n  border-radius: 10px;\n  border: 1px solid var(--navy-200);\n  background: #fff;\n  color: var(--navy-700);\n  font-family: inherit;\n  font-size: 14.5px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* ---------- \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 ---------- */\n.award-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 22px;\n}\n\n.teacher-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }\n\n.award-card {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease);\n}\n\n@media (hover: hover) {\n  .award-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }\n}\n\n.award-photos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 2px;\n  background: var(--navy-50);\n}\n\n.award-photos.two { grid-template-columns: 1fr 1fr; }\n\n.award-photo {\n  border: 0;\n  padding: 0;\n  margin: 0;\n  background: var(--navy-50);\n  cursor: zoom-in;\n  display: block;\n  overflow: hidden;\n  aspect-ratio: 4 / 3;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.award-photo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  transition: transform .45s var(--ease);\n}\n\n@media (hover: hover) {\n  .award-photo:hover img { transform: scale(1.05); }\n}\n\n.award-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px; }\n\n.award-name {\n  font-size: 17px;\n  line-height: 1.5;\n  color: var(--navy-900);\n  margin: 4px 0 0;\n}\n\n.award-title { margin: 0; font-size: 15.5px; font-weight: 700; color: var(--navy-600); line-height: 1.6; }\n.award-detail { margin: 0; font-size: 14.5px; color: var(--ink-soft); line-height: 1.7; }\n\n.award-empty {\n  text-align: center;\n  padding: 40px 0;\n  color: var(--ink-mute);\n  font-size: 16px;\n}\n\n/* ---------- \u0E14\u0E39\u0E23\u0E39\u0E1B\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 ---------- */\n.lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 90;\n  background: rgba(8, 21, 47, .92);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: grid;\n  place-items: center;\n  padding: max(24px, env(safe-area-inset-top)) 24px max(24px, env(safe-area-inset-bottom));\n  animation: lbIn .25s var(--ease);\n  cursor: zoom-out;\n}\n\n@keyframes lbIn { from { opacity: 0; } to { opacity: 1; } }\n\n.lightbox img {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 12px;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, .5);\n  cursor: default;\n  animation: lbZoom .3s var(--ease);\n}\n\n@keyframes lbZoom { from { transform: scale(.94); } to { transform: none; } }\n\n.lightbox-close {\n  position: absolute;\n  top: max(18px, env(safe-area-inset-top));\n  right: 18px;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* ---------- Responsive \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A iPad ---------- */\n@media (max-width: 1180px) {\n  .teacher-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 1024px) {\n  .award-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n\n@media (max-width: 834px) {\n  .award-grid, .teacher-grid { grid-template-columns: 1fr; }\n  .filter-label { min-width: 100%; margin-bottom: 2px; }\n  .award-photo { aspect-ratio: 16 / 10; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .lightbox, .lightbox img { animation: none !important; }\n  .award-photo img { transition: none !important; }\n}\n\n@media print {\n  .filters, .lightbox { display: none !important; }\n  .award-card { break-inside: avoid; box-shadow: none; }\n  .award-grid { grid-template-columns: repeat(2, 1fr); }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AwardsComponent, { className: "AwardsComponent", filePath: "src/app/pages/awards/awards.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=awards.component.js.map