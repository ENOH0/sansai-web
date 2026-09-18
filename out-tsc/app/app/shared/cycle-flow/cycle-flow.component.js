import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CycleFlowComponent_article_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "button", 21);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setDetailView(i_r2, "process")); });
    i0.ɵɵtext(2, "\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 21);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r4); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setDetailView(i_r2, "image")); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const s_r6 = ctx_r4.$implicit;
    const i_r2 = ctx_r4.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 " + (i_r2 + 1));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r2.detailView(i_r2) === "process");
    i0.ɵɵattribute("aria-selected", ctx_r2.detailView(i_r2) === "process");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r2.detailView(i_r2) === "image");
    i0.ɵɵattribute("aria-selected", ctx_r2.detailView(i_r2) === "image");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r6.chart ? "\u0E1C\u0E25\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19" : "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E");
} }
function CycleFlowComponent_article_1_div_11_ng_container_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const b_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(b_r7);
} }
function CycleFlowComponent_article_1_div_11_ng_container_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, CycleFlowComponent_article_1_div_11_ng_container_2_ul_3_li_1_Template, 2, 1, "li", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r6.bullets);
} }
function CycleFlowComponent_article_1_div_11_ng_container_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_ng_container_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const s_r6 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openImage(s_r6.image, s_r6.title)); });
    i0.ɵɵelement(1, "img", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", s_r6.image, i0.ɵɵsanitizeUrl)("alt", s_r6.title);
} }
function CycleFlowComponent_article_1_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CycleFlowComponent_article_1_div_11_ng_container_2_ul_3_Template, 2, 1, "ul", 22)(4, CycleFlowComponent_article_1_div_11_ng_container_2_button_4_Template, 2, 2, "button", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r6.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r6.bullets == null ? null : s_r6.bullets.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r6.image && !ctx_r2.showProcessImageTabs);
} }
function CycleFlowComponent_article_1_div_11_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 25);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_ng_template_3_ng_container_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const s_r6 = i0.ɵɵnextContext(3).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openImage(s_r6.image, s_r6.title)); });
    i0.ɵɵelement(2, "img", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", s_r6.image, i0.ɵɵsanitizeUrl)("alt", s_r6.title);
} }
function CycleFlowComponent_article_1_div_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CycleFlowComponent_article_1_div_11_ng_template_3_ng_container_0_Template, 3, 2, "ng-container", 18);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const imageView_r10 = i0.ɵɵreference(6);
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.detailView(i_r2) === "process")("ngIfElse", imageView_r10);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 33);
    i0.ɵɵelement(4, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 34);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 35);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const chartIndex_r12 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", chartIndex_r12 + 1, ". ", item_r11.label, "");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", item_r11.mean * 20, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r11.mean.toFixed(2), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00B1", item_r11.sd.toFixed(2), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.level);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 28)(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 29);
    i0.ɵɵtext(5, "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E40\u0E15\u0E47\u0E21 5 \u0E04\u0E30\u0E41\u0E19\u0E19 \u00B7 \u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E1A\u0E35\u0E48\u0E22\u0E07\u0E40\u0E1A\u0E19\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 (S.D.) \u0E01\u0E33\u0E01\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CycleFlowComponent_article_1_div_11_ng_template_5_ng_container_0_div_6_Template, 11, 7, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const chart_r13 = ctx.ngIf;
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", chart_r13.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(chart_r13.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", chart_r13.items);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_div_0_button_1_Template_button_click_0_listener() { const ctx_r14 = i0.ɵɵrestoreView(_r14); const photo_r16 = ctx_r14.$implicit; const photoIndex_r17 = ctx_r14.index; const s_r6 = i0.ɵɵnextContext(5).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openImage(photo_r16, s_r6.title + " \u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48 " + (photoIndex_r17 + 1))); });
    i0.ɵɵelement(1, "img", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r16 = ctx.$implicit;
    const photoIndex_r17 = ctx.index;
    const s_r6 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", photo_r16, i0.ɵɵsanitizeUrl)("alt", s_r6.title + " \u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48 " + (photoIndex_r17 + 1));
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_div_0_button_1_Template, 2, 2, "button", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r6.photos);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const s_r6 = i0.ɵɵnextContext(4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openImage(s_r6.image, s_r6.title)); });
    i0.ɵɵelement(1, "img", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", s_r6.image, i0.ɵɵsanitizeUrl)("alt", s_r6.title);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_div_0_Template, 2, 1, "div", 36)(1, CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_ng_template_1_Template, 2, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleImage_r19 = i0.ɵɵreference(2);
    const s_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngIf", s_r6.photos == null ? null : s_r6.photos.length)("ngIfElse", singleImage_r19);
} }
function CycleFlowComponent_article_1_div_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CycleFlowComponent_article_1_div_11_ng_template_5_ng_container_0_Template, 7, 3, "ng-container", 18)(1, CycleFlowComponent_article_1_div_11_ng_template_5_ng_template_1_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const photoView_r20 = i0.ɵɵreference(2);
    const s_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", s_r6.chart)("ngIfElse", photoView_r20);
} }
function CycleFlowComponent_article_1_div_11_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵtext(1, "\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19");
    i0.ɵɵelementEnd();
} }
function CycleFlowComponent_article_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, CycleFlowComponent_article_1_div_11_div_1_Template, 5, 8, "div", 17)(2, CycleFlowComponent_article_1_div_11_ng_container_2_Template, 5, 3, "ng-container", 18)(3, CycleFlowComponent_article_1_div_11_ng_template_3_Template, 1, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(5, CycleFlowComponent_article_1_div_11_ng_template_5_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(7, CycleFlowComponent_article_1_div_11_button_7_Template, 2, 0, "button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectedView_r21 = i0.ɵɵreference(4);
    const ctx_r4 = i0.ɵɵnextContext();
    const s_r6 = ctx_r4.$implicit;
    const i_r2 = ctx_r4.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", "cycle-detail-" + i_r2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.showProcessImageTabs && (s_r6.image || (s_r6.photos == null ? null : s_r6.photos.length) || s_r6.chart));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.showProcessImageTabs || ctx_r2.detailView(i_r2) === "details")("ngIfElse", selectedView_r21);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r2.showEvidence);
} }
function CycleFlowComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 7)(1, "button", 8);
    i0.ɵɵlistener("click", function CycleFlowComponent_article_1_Template_button_click_1_listener() { const i_r2 = i0.ɵɵrestoreView(_r1).index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggle(i_r2)); });
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 10)(5, "span", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 12);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 13);
    i0.ɵɵelement(10, "path", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CycleFlowComponent_article_1_div_11_Template, 8, 5, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r2.isOpen(i_r2));
    i0.ɵɵproperty("revealDelay", i_r2 * 110);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r2.expandAll);
    i0.ɵɵattribute("aria-expanded", ctx_r2.isOpen(i_r2))("aria-controls", "cycle-detail-" + i_r2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r2 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(s_r6.step);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r6.title);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.isOpen(i_r2));
} }
function CycleFlowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function CycleFlowComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeImage()); });
    i0.ɵɵelementStart(1, "button", 41);
    i0.ɵɵlistener("click", function CycleFlowComponent_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeImage()); });
    i0.ɵɵtext(2, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "img", 42);
    i0.ɵɵlistener("click", function CycleFlowComponent_div_2_Template_img_click_3_listener($event) { i0.ɵɵrestoreView(_r22); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const photo_r23 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", photo_r23.src, i0.ɵɵsanitizeUrl)("alt", photo_r23.alt);
} }
/**
 * วงจรการดำเนินงาน 4 ขั้น
 * ใช้กับด้านที่ 2–5 เพื่อแสดงกระบวนการทำงานที่หมุนต่อเนื่อง
 */
export class CycleFlowComponent {
    _steps = [];
    openIndex = signal(null);
    showEvidence = false;
    /** แสดงปุ่มสลับเนื้อหากระบวนการและรูปภาพในแต่ละขั้น */
    showProcessImageTabs = false;
    detailViews = signal({});
    photoLightbox = signal(null);
    /** แสดงรายละเอียดทุกขั้นทันที (ใช้เฉพาะหน้าที่ต้องการอ่านพร้อมกัน) */
    expandAll = false;
    set steps(value) {
        this._steps = value ?? [];
        this.openIndex.set(null);
        this.detailViews.set({});
    }
    get steps() { return this._steps; }
    isOpen(index) { return this.expandAll || this.openIndex() === index; }
    /** เปิดได้ทีละขั้น เพื่อให้ดูข้อมูลบน iPad ได้กระชับ */
    toggle(index) {
        if (this.expandAll)
            return;
        this.openIndex.update(open => open === index ? null : index);
    }
    detailView(index) { return this.detailViews()[index] ?? 'details'; }
    setDetailView(index, view) {
        this.detailViews.update(views => ({ ...views, [index]: view }));
    }
    openImage(src, alt) {
        if (src)
            this.photoLightbox.set({ src, alt });
    }
    closeImage() { this.photoLightbox.set(null); }
    static ɵfac = function CycleFlowComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CycleFlowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CycleFlowComponent, selectors: [["app-cycle-flow"]], inputs: { showEvidence: "showEvidence", showProcessImageTabs: "showProcessImageTabs", expandAll: "expandAll", steps: "steps" }, decls: 3, vars: 4, consts: [["selectedView", ""], ["imageView", ""], ["photoView", ""], ["singleImage", ""], [1, "cycle"], ["class", "cycle-step", "appReveal", "zoom", 3, "is-open", "revealDelay", 4, "ngFor", "ngForOf"], ["class", "cycle-lightbox", "role", "dialog", "aria-modal", "true", "aria-label", "\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21", 3, "click", 4, "ngIf"], ["appReveal", "zoom", 1, "cycle-step", 3, "revealDelay"], ["type", "button", 1, "cycle-head", 3, "click", "disabled"], [1, "cycle-no"], [1, "cycle-head-text"], [1, "chip", "cycle-chip"], [1, "cycle-title"], ["width", "30", "height", "30", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "cycle-chevron"], ["d", "m6 9 6 6 6-6"], ["class", "cycle-detail", 3, "id", 4, "ngIf"], [1, "cycle-detail", 3, "id"], ["class", "cycle-tabs", "role", "tablist", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["type", "button", "class", "cycle-evidence", "title", "\u0E23\u0E2D\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19", 4, "ngIf"], ["role", "tablist", 1, "cycle-tabs"], ["type", "button", "role", "tab", 1, "cycle-tab", 3, "click"], [4, "ngIf"], ["type", "button", "class", "cycle-photo-button", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "cycle-photo-button", 3, "click"], ["loading", "lazy", 1, "cycle-photo", 3, "src", "alt"], ["loading", "lazy", 1, "cycle-photo", "cycle-process-photo", 3, "src", "alt"], [1, "cycle-chart"], [1, "cycle-chart-note"], ["class", "cycle-chart-row", 4, "ngFor", "ngForOf"], [1, "cycle-chart-row"], [1, "cycle-chart-label"], ["aria-hidden", "true", 1, "cycle-chart-track"], [1, "cycle-chart-value"], [1, "cycle-chart-level"], ["class", "cycle-photos", 4, "ngIf", "ngIfElse"], [1, "cycle-photos"], ["type", "button", "class", "cycle-photo-button", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "title", "\u0E23\u0E2D\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19", 1, "cycle-evidence"], ["role", "dialog", "aria-modal", "true", "aria-label", "\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21", 1, "cycle-lightbox", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21", 1, "cycle-lightbox-close", 3, "click"], [3, "click", "src", "alt"]], template: function CycleFlowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵtemplate(1, CycleFlowComponent_article_1_Template, 12, 10, "article", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, CycleFlowComponent_div_2_Template, 4, 2, "div", 6);
        } if (rf & 2) {
            i0.ɵɵclassProp("all-expanded", ctx.expandAll);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.steps);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.photoLightbox());
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective], styles: ["\r\n\n\r\n[_nghost-%COMP%] { display: block; }\r\n\r\n.cycle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 28px;\n  row-gap: 56px;\n  align-items: start;\n}\n\r\n.cycle-step[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background: var(--paper);\r\n  border: 1px solid var(--line);\r\n  border-radius: var(--radius);\r\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n  \n\n  overflow: visible;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease);\n}\n.cycle-step.is-open[_ngcontent-%COMP%] { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n\r\n\n\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(2) { border-top-color: var(--navy-500); }\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(3) { border-top-color: var(--navy-400); }\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 30px;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 108px;\n  padding: 18px 20px;\n  color: inherit;\n  text-align: left;\n  font-family: inherit;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cycle-head[_ngcontent-%COMP%]:active { background: var(--navy-50); }\n.all-expanded[_ngcontent-%COMP%]   .cycle-head[_ngcontent-%COMP%] { cursor: default; }\n.all-expanded[_ngcontent-%COMP%]   .cycle-chevron[_ngcontent-%COMP%] { display: none; }\n.cycle-head-text[_ngcontent-%COMP%] { display: grid; gap: 6px; min-width: 0; }\n\r\n.cycle-no[_ngcontent-%COMP%] {\r\n  width: 38px; height: 38px;\r\n  border-radius: 11px;\r\n  display: grid; place-items: center;\r\n  background: var(--navy-50);\r\n  color: var(--navy-700);\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  border: 1px solid var(--navy-100);\n}\n\r\n.cycle-step[_ngcontent-%COMP%]:nth-child(4)   .cycle-no[_ngcontent-%COMP%] {\r\n  background: #fdf6e6;\r\n  color: var(--gold-600);\r\n  border-color: #f2e2b8;\r\n}\r\n\r\n.cycle-chip[_ngcontent-%COMP%] { justify-self: start; }\n.cycle-title[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.cycle-chevron[_ngcontent-%COMP%] { color: var(--navy-500); transition: transform .22s var(--ease); }\n.cycle-step.is-open[_ngcontent-%COMP%]   .cycle-chevron[_ngcontent-%COMP%] { transform: rotate(180deg); }\n\n.cycle-detail[_ngcontent-%COMP%] { padding: 0 20px 22px 72px; container-type: inline-size; animation: _ngcontent-%COMP%_cycleDetailIn .24s var(--ease) both; }\n.cycle-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n.cycle-tabs[_ngcontent-%COMP%] { display: flex; gap: 8px; margin: 0 0 14px; }\n.cycle-tab[_ngcontent-%COMP%] {\n  min-height: 36px; padding: 5px 14px; border: 1px solid var(--navy-200); border-radius: 999px;\n  background: var(--navy-50); color: var(--navy-800); font: inherit; font-size: 14px; font-weight: 800; cursor: pointer;\n}\n.cycle-tab.is-active[_ngcontent-%COMP%] { border-color: var(--navy-700); background: var(--navy-700); color: #fff; }\n@media (hover: hover) { .cycle-tab[_ngcontent-%COMP%]:not(.is-active):hover { background: var(--navy-100); } }\n\n.cycle-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\r\n  padding-left: 20px;\r\n  font-size: 17.5px;\r\n  color: var(--ink-soft);\r\n}\r\n.cycle-detail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 5px; }\n.cycle-photo[_ngcontent-%COMP%] { display:block; width:100%; max-height:260px; margin-top:16px; object-fit:cover; border:1px solid var(--navy-100); border-radius:12px; box-shadow:0 6px 16px rgba(20,47,91,.12); }\n.cycle-photo-button[_ngcontent-%COMP%] { display: block; width: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; }\n.cycle-photo-button[_ngcontent-%COMP%]   .cycle-photo[_ngcontent-%COMP%] { pointer-events: none; }\n.cycle-process-photo[_ngcontent-%COMP%] { max-height: none; margin-top: 0; object-fit: contain; }\n.cycle-photos[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n.cycle-photos[_ngcontent-%COMP%]   .cycle-photo[_ngcontent-%COMP%] { aspect-ratio: 4 / 3; margin-top: 0; }\n.cycle-chart[_ngcontent-%COMP%] { padding: 18px; border: 1px solid var(--navy-100); border-radius: 14px; background: var(--navy-50); }\n.cycle-chart[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { margin: 0; color: var(--navy-900); font-size: 18px; line-height: 1.35; }\n.cycle-chart-note[_ngcontent-%COMP%] { margin: 5px 0 16px !important; color: var(--ink-mute) !important; font-size: 14px !important; }\n.cycle-chart-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(170px, 1.2fr) minmax(120px, 1fr) 92px 78px; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid var(--navy-100); }\n.cycle-chart-label[_ngcontent-%COMP%] { color: var(--ink-soft); font-size: 14px; font-weight: 700; line-height: 1.4; }\n.cycle-chart-track[_ngcontent-%COMP%] { height: 11px; overflow: hidden; border-radius: 999px; background: #dce8f6; }\n.cycle-chart-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--navy-500), var(--gold-500)); }\n.cycle-chart-value[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 15px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }\n.cycle-chart-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: var(--ink-mute); font-size: 12px; font-weight: 700; }\n.cycle-chart-level[_ngcontent-%COMP%] { color: var(--navy-700); font-size: 13px; font-weight: 800; text-align: right; }\n\n\n\n@container (max-width: 540px) {\n  .cycle-chart[_ngcontent-%COMP%] { padding: 14px; }\n  .cycle-chart-row[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr) 82px; gap: 6px 10px; }\n  .cycle-chart-track[_ngcontent-%COMP%] { grid-column: 1 / -1; grid-row: 2; }\n  .cycle-chart-level[_ngcontent-%COMP%] { text-align: right; }\n}\n.cycle-evidence[_ngcontent-%COMP%] {\n  min-height: 40px;\n  margin-top: 16px;\n  padding: 8px 18px;\n  color: var(--navy-800);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 2px solid var(--gold-500);\n  border-radius: 999px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(154, 105, 0, .2);\n  cursor: pointer;\n}\n.cycle-evidence[_ngcontent-%COMP%]:active { transform: scale(.97); }\n@media (hover: hover) { .cycle-evidence[_ngcontent-%COMP%]:hover { background: #fffaf0; } }\n\n.cycle-lightbox[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px;\n  background: rgba(8, 21, 47, .9); cursor: zoom-out;\n}\n.cycle-lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { max-width: 100%; max-height: 88vh; border-radius: 10px; background: #fff; cursor: default; }\n.cycle-lightbox-close[_ngcontent-%COMP%] {\n  position: absolute; top: 16px; right: 16px; display: grid; place-items: center; width: 48px; height: 48px;\n  border: 0; border-radius: 50%; background: #fff; color: var(--navy-900); font-size: 22px; cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_cycleDetailIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\r\n\n\r\n.cycle-step[_ngcontent-%COMP%]::after {\r\n  content: '\u203A';\r\n  position: absolute;\r\n  right: -16px; top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 42px;\n  color: var(--navy-300);\r\n  line-height: 1;\r\n  z-index: 2;\r\n  font-weight: 700;\r\n}\r\n.cycle-step[_ngcontent-%COMP%]:last-child::after { display: none; }\n\n\n\n.cycle-step[_ngcontent-%COMP%]:nth-child(2)::after { display: none; }\n\r\n\n\n@media (max-width: 834px) {\n  .cycle[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 20px; }\n  .cycle-step[_ngcontent-%COMP%]::after { display: none; }\n  .cycle-step[_ngcontent-%COMP%]:nth-child(2)::after { display: none; }\n}\n\n@media (max-width: 560px) {\n  .cycle-head[_ngcontent-%COMP%] { min-height: 94px; padding: 15px; gap: 10px; }\n  .cycle-title[_ngcontent-%COMP%] { font-size: 17px; }\n  .cycle-detail[_ngcontent-%COMP%] { padding: 0 15px 18px; }\n  .cycle-photos[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .cycle-chart[_ngcontent-%COMP%] { padding: 14px; }\n  .cycle-chart-row[_ngcontent-%COMP%] { grid-template-columns: 1fr 82px; gap: 6px 10px; }\n  .cycle-chart-track[_ngcontent-%COMP%] { grid-column: 1 / -1; grid-row: 2; }\n  .cycle-chart-level[_ngcontent-%COMP%] { text-align: right; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cycle-chevron[_ngcontent-%COMP%] { transition: none; }\n  .cycle-detail[_ngcontent-%COMP%] { animation: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CycleFlowComponent, [{
        type: Component,
        args: [{ selector: 'app-cycle-flow', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"cycle\" [class.all-expanded]=\"expandAll\">\n  <article class=\"cycle-step\" *ngFor=\"let s of steps; let i = index\"\n           [class.is-open]=\"isOpen(i)\" appReveal=\"zoom\" [revealDelay]=\"i * 110\">\n    <button type=\"button\" class=\"cycle-head\" (click)=\"toggle(i)\" [disabled]=\"expandAll\"\n            [attr.aria-expanded]=\"isOpen(i)\" [attr.aria-controls]=\"'cycle-detail-' + i\">\n      <span class=\"cycle-no\">{{ i + 1 }}</span>\n      <span class=\"cycle-head-text\">\n        <span class=\"chip cycle-chip\">{{ s.step }}</span>\n        <span class=\"cycle-title\">{{ s.title }}</span>\n      </span>\n      <svg class=\"cycle-chevron\" width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\"\n           stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"m6 9 6 6 6-6\" />\n      </svg>\n    </button>\n    <div class=\"cycle-detail\" *ngIf=\"isOpen(i)\" [id]=\"'cycle-detail-' + i\">\n      <div class=\"cycle-tabs\" *ngIf=\"showProcessImageTabs && (s.image || s.photos?.length || s.chart)\" role=\"tablist\" [attr.aria-label]=\"'\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 ' + (i + 1)\">\n        <button type=\"button\" class=\"cycle-tab\" role=\"tab\" [class.is-active]=\"detailView(i) === 'process'\"\n          [attr.aria-selected]=\"detailView(i) === 'process'\" (click)=\"setDetailView(i, 'process')\">\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23</button>\n        <button type=\"button\" class=\"cycle-tab\" role=\"tab\" [class.is-active]=\"detailView(i) === 'image'\"\n          [attr.aria-selected]=\"detailView(i) === 'image'\" (click)=\"setDetailView(i, 'image')\">{{ s.chart ? '\u0E1C\u0E25\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19' : '\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E' }}</button>\n      </div>\n      <ng-container *ngIf=\"!showProcessImageTabs || detailView(i) === 'details'; else selectedView\">\n        <p>{{ s.text }}</p>\n        <ul *ngIf=\"s.bullets?.length\"><li *ngFor=\"let b of s.bullets\">{{ b }}</li></ul>\n        <button type=\"button\" *ngIf=\"s.image && !showProcessImageTabs\" class=\"cycle-photo-button\" (click)=\"openImage(s.image, s.title)\">\n          <img class=\"cycle-photo\" [src]=\"s.image\" [alt]=\"s.title\" loading=\"lazy\">\n        </button>\n      </ng-container>\n      <ng-template #selectedView>\n        <ng-container *ngIf=\"detailView(i) === 'process'; else imageView\">\n          <button type=\"button\" class=\"cycle-photo-button\" (click)=\"openImage(s.image, s.title)\">\n            <img class=\"cycle-photo cycle-process-photo\" [src]=\"s.image\" [alt]=\"s.title\" loading=\"lazy\">\n          </button>\n        </ng-container>\n      </ng-template>\n      <ng-template #imageView>\n        <ng-container *ngIf=\"s.chart as chart; else photoView\">\n          <section class=\"cycle-chart\" [attr.aria-label]=\"chart.title\">\n            <h4>{{ chart.title }}</h4>\n            <p class=\"cycle-chart-note\">\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E40\u0E15\u0E47\u0E21 5 \u0E04\u0E30\u0E41\u0E19\u0E19 \u00B7 \u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E1A\u0E35\u0E48\u0E22\u0E07\u0E40\u0E1A\u0E19\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 (S.D.) \u0E01\u0E33\u0E01\u0E31\u0E1A\u0E17\u0E38\u0E01\u0E02\u0E49\u0E2D</p>\n            <div class=\"cycle-chart-row\" *ngFor=\"let item of chart.items; let chartIndex = index\">\n              <span class=\"cycle-chart-label\">{{ chartIndex + 1 }}. {{ item.label }}</span>\n              <div class=\"cycle-chart-track\" aria-hidden=\"true\"><span [style.width.%]=\"item.mean * 20\"></span></div>\n              <span class=\"cycle-chart-value\">{{ item.mean.toFixed(2) }} <small>\u00B1{{ item.sd.toFixed(2) }}</small></span>\n              <span class=\"cycle-chart-level\">{{ item.level }}</span>\n            </div>\n          </section>\n        </ng-container>\n        <ng-template #photoView>\n          <div class=\"cycle-photos\" *ngIf=\"s.photos?.length; else singleImage\">\n            <button type=\"button\" class=\"cycle-photo-button\" *ngFor=\"let photo of s.photos; let photoIndex = index\"\n              (click)=\"openImage(photo, s.title + ' \u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48 ' + (photoIndex + 1))\">\n              <img class=\"cycle-photo\" [src]=\"photo\" [alt]=\"s.title + ' \u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48 ' + (photoIndex + 1)\" loading=\"lazy\">\n            </button>\n          </div>\n          <ng-template #singleImage>\n            <button type=\"button\" class=\"cycle-photo-button\" (click)=\"openImage(s.image, s.title)\">\n              <img class=\"cycle-photo\" [src]=\"s.image\" [alt]=\"s.title\" loading=\"lazy\">\n            </button>\n          </ng-template>\n        </ng-template>\n      </ng-template>\n      <button type=\"button\" class=\"cycle-evidence\" *ngIf=\"showEvidence\" title=\"\u0E23\u0E2D\u0E41\u0E19\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\">\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19</button>\n    </div>\n  </article>\n</div>\n\n<div class=\"cycle-lightbox\" *ngIf=\"photoLightbox() as photo\" (click)=\"closeImage()\" role=\"dialog\" aria-modal=\"true\" aria-label=\"\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\">\n  <button type=\"button\" class=\"cycle-lightbox-close\" (click)=\"closeImage()\" aria-label=\"\u0E1B\u0E34\u0E14\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21\">\u2715</button>\n  <img [src]=\"photo.src\" [alt]=\"photo.alt\" (click)=\"$event.stopPropagation()\">\n</div>\n", styles: ["/* \u0E27\u0E07\u0E08\u0E23\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E07\u0E32\u0E19 4 \u0E02\u0E31\u0E49\u0E19\r\n   \u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19 \u2192 \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23 \u2192 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A \u2192 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\r\n:host { display: block; }\r\n\r\n.cycle {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  column-gap: 28px;\n  row-gap: 56px;\n  align-items: start;\n}\n\r\n.cycle-step {\r\n  position: relative;\r\n  background: var(--paper);\r\n  border: 1px solid var(--line);\r\n  border-radius: var(--radius);\r\n  box-shadow: var(--shadow-sm);\n  border-top: 4px solid var(--navy-600);\n  /* \u0E43\u0E2B\u0E49\u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E22\u0E37\u0E48\u0E19\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E01\u0E25\u0E32\u0E07\u0E44\u0E14\u0E49 */\n  overflow: visible;\n  transition: border-color .2s var(--ease), box-shadow .2s var(--ease);\n}\n.cycle-step.is-open { border-color: var(--navy-300); box-shadow: var(--shadow-md); }\n\r\n/* \u0E44\u0E25\u0E48\u0E40\u0E09\u0E14\u0E2A\u0E35\u0E08\u0E32\u0E01\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E21\u0E44\u0E1B\u0E2D\u0E48\u0E2D\u0E19 \u0E41\u0E25\u0E49\u0E27\u0E08\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E2A\u0E35\u0E17\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E02\u0E31\u0E49\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E15\u0E48\u0E2D\u0E22\u0E2D\u0E14 */\r\n.cycle-step:nth-child(2) { border-top-color: var(--navy-500); }\r\n.cycle-step:nth-child(3) { border-top-color: var(--navy-400); }\r\n.cycle-step:nth-child(4) { border-top-color: var(--gold-500); }\n\n.cycle-head {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 30px;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  min-height: 108px;\n  padding: 18px 20px;\n  color: inherit;\n  text-align: left;\n  font-family: inherit;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.cycle-head:active { background: var(--navy-50); }\n.all-expanded .cycle-head { cursor: default; }\n.all-expanded .cycle-chevron { display: none; }\n.cycle-head-text { display: grid; gap: 6px; min-width: 0; }\n\r\n.cycle-no {\r\n  width: 38px; height: 38px;\r\n  border-radius: 11px;\r\n  display: grid; place-items: center;\r\n  background: var(--navy-50);\r\n  color: var(--navy-700);\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  border: 1px solid var(--navy-100);\n}\n\r\n.cycle-step:nth-child(4) .cycle-no {\r\n  background: #fdf6e6;\r\n  color: var(--gold-600);\r\n  border-color: #f2e2b8;\r\n}\r\n\r\n.cycle-chip { justify-self: start; }\n.cycle-title { color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.38; }\n.cycle-chevron { color: var(--navy-500); transition: transform .22s var(--ease); }\n.cycle-step.is-open .cycle-chevron { transform: rotate(180deg); }\n\n.cycle-detail { padding: 0 20px 22px 72px; container-type: inline-size; animation: cycleDetailIn .24s var(--ease) both; }\n.cycle-detail p { font-size: 17.5px; color: var(--ink-soft); margin: 0; }\n.cycle-tabs { display: flex; gap: 8px; margin: 0 0 14px; }\n.cycle-tab {\n  min-height: 36px; padding: 5px 14px; border: 1px solid var(--navy-200); border-radius: 999px;\n  background: var(--navy-50); color: var(--navy-800); font: inherit; font-size: 14px; font-weight: 800; cursor: pointer;\n}\n.cycle-tab.is-active { border-color: var(--navy-700); background: var(--navy-700); color: #fff; }\n@media (hover: hover) { .cycle-tab:not(.is-active):hover { background: var(--navy-100); } }\n\n.cycle-detail ul {\n  margin: 8px 0 0;\r\n  padding-left: 20px;\r\n  font-size: 17.5px;\r\n  color: var(--ink-soft);\r\n}\r\n.cycle-detail li { margin-bottom: 5px; }\n.cycle-photo { display:block; width:100%; max-height:260px; margin-top:16px; object-fit:cover; border:1px solid var(--navy-100); border-radius:12px; box-shadow:0 6px 16px rgba(20,47,91,.12); }\n.cycle-photo-button { display: block; width: 100%; padding: 0; border: 0; background: transparent; cursor: zoom-in; }\n.cycle-photo-button .cycle-photo { pointer-events: none; }\n.cycle-process-photo { max-height: none; margin-top: 0; object-fit: contain; }\n.cycle-photos { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }\n.cycle-photos .cycle-photo { aspect-ratio: 4 / 3; margin-top: 0; }\n.cycle-chart { padding: 18px; border: 1px solid var(--navy-100); border-radius: 14px; background: var(--navy-50); }\n.cycle-chart h4 { margin: 0; color: var(--navy-900); font-size: 18px; line-height: 1.35; }\n.cycle-chart-note { margin: 5px 0 16px !important; color: var(--ink-mute) !important; font-size: 14px !important; }\n.cycle-chart-row { display: grid; grid-template-columns: minmax(170px, 1.2fr) minmax(120px, 1fr) 92px 78px; align-items: center; gap: 10px; padding: 8px 0; border-top: 1px solid var(--navy-100); }\n.cycle-chart-label { color: var(--ink-soft); font-size: 14px; font-weight: 700; line-height: 1.4; }\n.cycle-chart-track { height: 11px; overflow: hidden; border-radius: 999px; background: #dce8f6; }\n.cycle-chart-track span { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--navy-500), var(--gold-500)); }\n.cycle-chart-value { color: var(--navy-900); font-size: 15px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }\n.cycle-chart-value small { color: var(--ink-mute); font-size: 12px; font-weight: 700; }\n.cycle-chart-level { color: var(--navy-700); font-size: 13px; font-weight: 800; text-align: right; }\n\n/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E40\u0E14\u0E2A\u0E01\u0E4C\u0E17\u0E47\u0E2D\u0E1B\u0E2D\u0E32\u0E08\u0E41\u0E04\u0E1A\u0E41\u0E21\u0E49 viewport \u0E01\u0E27\u0E49\u0E32\u0E07 \u0E08\u0E36\u0E07\u0E2D\u0E34\u0E07\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E42\u0E14\u0E22\u0E15\u0E23\u0E07 */\n@container (max-width: 540px) {\n  .cycle-chart { padding: 14px; }\n  .cycle-chart-row { grid-template-columns: minmax(0, 1fr) 82px; gap: 6px 10px; }\n  .cycle-chart-track { grid-column: 1 / -1; grid-row: 2; }\n  .cycle-chart-level { text-align: right; }\n}\n.cycle-evidence {\n  min-height: 40px;\n  margin-top: 16px;\n  padding: 8px 18px;\n  color: var(--navy-800);\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 800;\n  border: 2px solid var(--gold-500);\n  border-radius: 999px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(154, 105, 0, .2);\n  cursor: pointer;\n}\n.cycle-evidence:active { transform: scale(.97); }\n@media (hover: hover) { .cycle-evidence:hover { background: #fffaf0; } }\n\n.cycle-lightbox {\n  position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: 24px;\n  background: rgba(8, 21, 47, .9); cursor: zoom-out;\n}\n.cycle-lightbox img { max-width: 100%; max-height: 88vh; border-radius: 10px; background: #fff; cursor: default; }\n.cycle-lightbox-close {\n  position: absolute; top: 16px; right: 16px; display: grid; place-items: center; width: 48px; height: 48px;\n  border: 0; border-radius: 50%; background: #fff; color: var(--navy-900); font-size: 22px; cursor: pointer;\n}\n\n@keyframes cycleDetailIn {\n  from { opacity: 0; transform: translateY(-8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\r\n/* \u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E02\u0E31\u0E49\u0E19 */\r\n.cycle-step::after {\r\n  content: '\u203A';\r\n  position: absolute;\r\n  right: -16px; top: 50%;\r\n  transform: translateY(-50%);\r\n  font-size: 42px;\n  color: var(--navy-300);\r\n  line-height: 1;\r\n  z-index: 2;\r\n  font-weight: 700;\r\n}\r\n.cycle-step:last-child::after { display: none; }\n\n/* \u0E02\u0E31\u0E49\u0E19 2 \u2192 3 \u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E16\u0E27 \u0E08\u0E36\u0E07\u0E43\u0E0A\u0E49\u0E25\u0E39\u0E01\u0E28\u0E23\u0E40\u0E09\u0E35\u0E22\u0E07\u0E25\u0E07\u0E0B\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E41\u0E16\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B */\n.cycle-step:nth-child(2)::after { display: none; }\n\r\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u2014 \u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E07\u0E21\u0E32\u0E17\u0E35\u0E25\u0E30\u0E02\u0E31\u0E49\u0E19 */\n@media (max-width: 834px) {\n  .cycle { grid-template-columns: 1fr; gap: 20px; }\n  .cycle-step::after { display: none; }\n  .cycle-step:nth-child(2)::after { display: none; }\n}\n\n@media (max-width: 560px) {\n  .cycle-head { min-height: 94px; padding: 15px; gap: 10px; }\n  .cycle-title { font-size: 17px; }\n  .cycle-detail { padding: 0 15px 18px; }\n  .cycle-photos { grid-template-columns: 1fr; }\n  .cycle-chart { padding: 14px; }\n  .cycle-chart-row { grid-template-columns: 1fr 82px; gap: 6px 10px; }\n  .cycle-chart-track { grid-column: 1 / -1; grid-row: 2; }\n  .cycle-chart-level { text-align: right; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cycle-chevron { transition: none; }\n  .cycle-detail { animation: none; }\n}\n"] }]
    }], null, { showEvidence: [{
            type: Input
        }], showProcessImageTabs: [{
            type: Input
        }], expandAll: [{
            type: Input
        }], steps: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CycleFlowComponent, { className: "CycleFlowComponent", filePath: "src/app/shared/cycle-flow/cycle-flow.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=cycle-flow.component.js.map