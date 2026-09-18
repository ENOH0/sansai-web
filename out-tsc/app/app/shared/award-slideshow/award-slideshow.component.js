import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AwardSlideshowComponent_div_0_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.lead);
} }
function AwardSlideshowComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "h3", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AwardSlideshowComponent_div_0_div_1_p_3_Template, 2, 1, "p", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.lead);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_figure_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure", 30);
    i0.ɵɵelement(1, "img", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const photo_r3 = ctx.ngIf;
    const item_r4 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", photo_r3, i0.ɵɵsanitizeUrl)("alt", item_r4.award);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r5 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48 ", s_r5 + 1, "");
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_figure_1_Template, 2, 2, "figure", 28)(2, AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_div_2_Template, 3, 1, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const src_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", src_r6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !src_r6);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.level);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", item_r4.year, "");
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const n_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(n_r7);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.detail);
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 37)(1, "span", 38);
    i0.ɵɵtext(2, "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E21\u0E2D\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r4.org, " ");
} }
function AwardSlideshowComponent_div_0_ng_container_3_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 15)(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17);
    i0.ɵɵtemplate(4, AwardSlideshowComponent_div_0_ng_container_3_article_1_ng_container_4_Template, 3, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 18)(6, "div", 19);
    i0.ɵɵtemplate(7, AwardSlideshowComponent_div_0_ng_container_3_article_1_span_7_Template, 2, 1, "span", 20)(8, AwardSlideshowComponent_div_0_ng_container_3_article_1_span_8_Template, 2, 1, "span", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 22);
    i0.ɵɵtemplate(10, AwardSlideshowComponent_div_0_ng_container_3_article_1_span_10_Template, 2, 1, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "div", 24);
    i0.ɵɵelementStart(12, "h4", 25);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, AwardSlideshowComponent_div_0_ng_container_3_article_1_p_14_Template, 2, 1, "p", 26)(15, AwardSlideshowComponent_div_0_ng_container_3_article_1_p_15_Template, 4, 1, "p", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const item_r4 = ctx_r7.$implicit;
    const i_r9 = ctx_r7.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r9 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.slots(item_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r4.level);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.year);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r4.names);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.award);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.detail);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r4.org);
} }
function AwardSlideshowComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AwardSlideshowComponent_div_0_ng_container_3_article_1_Template, 16, 8, "article", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r9 === ctx_r1.index());
} }
function AwardSlideshowComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function AwardSlideshowComponent_div_0_button_8_Template_button_click_0_listener() { const i_r11 = i0.ɵɵrestoreView(_r10).index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.select(i_r11)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-on", i_r11 === ctx_r1.index());
    i0.ɵɵattribute("aria-label", "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48 " + (i_r11 + 1))("aria-selected", i_r11 === ctx_r1.index());
} }
function AwardSlideshowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("mouseenter", function AwardSlideshowComponent_div_0_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hold(true)); })("mouseleave", function AwardSlideshowComponent_div_0_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hold(false)); })("focusin", function AwardSlideshowComponent_div_0_Template_div_focusin_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hold(true)); })("focusout", function AwardSlideshowComponent_div_0_Template_div_focusout_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hold(false)); });
    i0.ɵɵtemplate(1, AwardSlideshowComponent_div_0_div_1_Template, 4, 2, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, AwardSlideshowComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5)(5, "button", 6);
    i0.ɵɵlistener("click", function AwardSlideshowComponent_div_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.prev(); return i0.ɵɵresetView(ctx_r1.select(ctx_r1.index())); });
    i0.ɵɵtext(6, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtemplate(8, AwardSlideshowComponent_div_0_button_8_Template, 1, 4, "button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 9);
    i0.ɵɵlistener("click", function AwardSlideshowComponent_div_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.next(); return i0.ɵɵresetView(ctx_r1.select(ctx_r1.index())); });
    i0.ɵɵtext(10, "\u203A");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.items);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.items);
} }
/** สไลด์โชว์รางวัลนักเรียน เลื่อนอัตโนมัติ หยุดเมื่อชี้เมาส์หรือแตะ */
export class AwardSlideshowComponent {
    items = [];
    title = '';
    lead = '';
    /** ระยะเวลาต่อสไลด์ (มิลลิวินาที) */
    interval = 7000;
    index = signal(0);
    paused = signal(false);
    timer = null;
    ngOnInit() {
        const reduce = typeof matchMedia === 'function'
            && matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce)
            this.start();
    }
    ngOnDestroy() { this.stop(); }
    /** ช่องใส่ภาพ 2 ช่องเสมอ ถ้ายังไม่มีรูปจะเป็นกรอบว่าง */
    slots(item) {
        const photos = item.photos ?? [];
        return [photos[0] ?? null, photos[1] ?? null];
    }
    go(i) {
        const n = this.items.length;
        if (!n)
            return;
        this.index.set((i + n) % n);
    }
    next() { this.go(this.index() + 1); }
    prev() { this.go(this.index() - 1); }
    select(i) { this.go(i); this.restart(); }
    hold(on) {
        this.paused.set(on);
        if (on)
            this.stop();
        else
            this.start();
    }
    start() {
        this.stop();
        if (this.items.length < 2)
            return;
        this.timer = setInterval(() => this.next(), this.interval);
    }
    stop() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    restart() { if (!this.paused())
        this.start(); }
    static ɵfac = function AwardSlideshowComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AwardSlideshowComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AwardSlideshowComponent, selectors: [["app-award-slideshow"]], inputs: { items: "items", title: "title", lead: "lead", interval: "interval" }, decls: 1, vars: 1, consts: [["class", "aw-slides", 3, "mouseenter", "mouseleave", "focusin", "focusout", 4, "ngIf"], [1, "aw-slides", 3, "mouseenter", "mouseleave", "focusin", "focusout"], ["class", "aw-head", 4, "ngIf"], ["aria-live", "polite", 1, "aw-stage"], [4, "ngFor", "ngForOf"], [1, "aw-controls"], ["type", "button", "aria-label", "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32", 1, "aw-arrow", 3, "click"], ["role", "tablist", 1, "aw-dots"], ["type", "button", "class", "aw-dot", 3, "is-on", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E16\u0E31\u0E14\u0E44\u0E1B", 1, "aw-arrow", 3, "click"], [1, "aw-head"], [1, "aw-title"], ["class", "aw-lead", 4, "ngIf"], [1, "aw-lead"], ["class", "aw-card", 4, "ngIf"], [1, "aw-card"], ["aria-hidden", "true", 1, "aw-index"], [1, "aw-photos"], [1, "aw-body"], [1, "aw-tags"], ["class", "aw-tag aw-tag-level", 4, "ngIf"], ["class", "aw-tag", 4, "ngIf"], [1, "aw-names"], ["class", "aw-name", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "aw-rule"], [1, "aw-award"], ["class", "aw-detail", 4, "ngIf"], ["class", "aw-org", 4, "ngIf"], ["class", "aw-photo", 4, "ngIf"], ["class", "aw-photo aw-photo-empty", 4, "ngIf"], [1, "aw-photo"], ["loading", "lazy", 3, "src", "alt"], [1, "aw-photo", "aw-photo-empty"], [1, "aw-tag", "aw-tag-level"], [1, "aw-tag"], [1, "aw-name"], [1, "aw-detail"], [1, "aw-org"], [1, "aw-org-label"], ["type", "button", 1, "aw-dot", 3, "click"]], template: function AwardSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AwardSlideshowComponent_div_0_Template, 11, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.items.length);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: ["\n\n.aw-slides[_ngcontent-%COMP%] { position: relative; }\n\n.aw-head[_ngcontent-%COMP%] { margin-bottom: 18px; }\n.aw-title[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: 24px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.aw-lead[_ngcontent-%COMP%] { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.aw-stage[_ngcontent-%COMP%] { position: relative; }\n\n.aw-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);\n  gap: 26px;\n  padding: 26px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 24px;\n  background:\n    radial-gradient(120% 130% at 100% 0%, rgba(212, 165, 55, .16) 0%, rgba(212, 165, 55, 0) 46%),\n    linear-gradient(150deg, #0e2a5c 0%, #163a76 52%, #0b1f45 100%);\n  box-shadow: 0 26px 60px rgba(6, 18, 44, .45);\n  animation: _ngcontent-%COMP%_awIn .5s cubic-bezier(.22, .78, .3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_awIn { from { opacity: 0; transform: translateY(14px) scale(.99); } to { opacity: 1; transform: none; } }\n\n\n\n.aw-index[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -22px;\n  right: 14px;\n  color: rgba(255, 255, 255, .07);\n  font-size: 150px;\n  font-weight: 800;\n  line-height: 1;\n  pointer-events: none;\n}\n\n\n\n.aw-photos[_ngcontent-%COMP%] { display: grid; grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 12px; }\n.aw-photo[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .22);\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .06);\n}\n.aw-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.aw-photo-empty[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 4 / 3;\n  color: rgba(255, 255, 255, .55);\n  font-size: 13.5px;\n  font-weight: 700;\n  border-style: dashed;\n}\n\n\n\n.aw-body[_ngcontent-%COMP%] { position: relative; z-index: 1; align-self: center; }\n\n.aw-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }\n.aw-tag[_ngcontent-%COMP%] {\n  padding: 5px 13px;\n  color: #dce7f8;\n  font-size: 14px;\n  font-weight: 800;\n  border: 1px solid rgba(255, 255, 255, .26);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n}\n.aw-tag-level[_ngcontent-%COMP%] { color: #1c2b4d; border-color: transparent; background: linear-gradient(120deg, var(--gold-400), var(--gold-500)); }\n\n.aw-names[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; margin: 0 0 12px; }\n.aw-name[_ngcontent-%COMP%] { color: #fff; font-size: 30px; font-weight: 800; line-height: 1.24; letter-spacing: .2px; }\n\n.aw-rule[_ngcontent-%COMP%] { width: 64px; height: 4px; margin-bottom: 14px; border-radius: 4px;\n  background: linear-gradient(90deg, var(--gold-400), var(--gold-500)); }\n\n.aw-award[_ngcontent-%COMP%] { margin: 0 0 8px; color: #ffe9b8; font-size: 21px; font-weight: 800; line-height: 1.5; }\n.aw-detail[_ngcontent-%COMP%] { margin: 0 0 12px; color: #dbe6f7; font-size: 17.5px; line-height: 1.72; }\n\n.aw-org[_ngcontent-%COMP%] { margin: 0; color: #c2d3ee; font-size: 16px; line-height: 1.6; }\n.aw-org-label[_ngcontent-%COMP%] { display: block; color: rgba(255, 255, 255, .55); font-size: 13.5px; font-weight: 800; letter-spacing: .4px; }\n\n\n\n.aw-controls[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 18px; }\n.aw-arrow[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1;\n  border: 1px solid rgba(255, 255, 255, .3);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .1);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.aw-dots[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 9px; }\n.aw-dot[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .34);\n  cursor: pointer;\n  transition: background .25s var(--ease), transform .25s var(--ease);\n}\n.aw-dot.is-on[_ngcontent-%COMP%] { background: var(--gold-500); transform: scale(1.3); }\n\n@media (hover: hover) {\n  .aw-arrow[_ngcontent-%COMP%]:hover { background: var(--gold-500); border-color: var(--gold-500); color: #1c2b4d; }\n  .aw-dot[_ngcontent-%COMP%]:hover { background: rgba(255, 255, 255, .6); }\n}\n\n@media (max-width: 900px) {\n  .aw-card[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 20px; padding: 20px; }\n  .aw-photos[_ngcontent-%COMP%] { grid-template-rows: auto auto; }\n  .aw-name[_ngcontent-%COMP%] { font-size: 25px; }\n  .aw-index[_ngcontent-%COMP%] { font-size: 110px; top: -14px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .aw-card[_ngcontent-%COMP%] { animation: none; }\n  .aw-dot[_ngcontent-%COMP%] { transition: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AwardSlideshowComponent, [{
        type: Component,
        args: [{ selector: 'app-award-slideshow', standalone: true, imports: [CommonModule], template: "<div class=\"aw-slides\" *ngIf=\"items.length\"\n  (mouseenter)=\"hold(true)\" (mouseleave)=\"hold(false)\"\n  (focusin)=\"hold(true)\" (focusout)=\"hold(false)\">\n\n  <div class=\"aw-head\" *ngIf=\"title\">\n    <h3 class=\"aw-title\">{{ title }}</h3>\n    <p class=\"aw-lead\" *ngIf=\"lead\">{{ lead }}</p>\n  </div>\n\n  <div class=\"aw-stage\" aria-live=\"polite\">\n    <ng-container *ngFor=\"let item of items; let i = index\">\n      <article class=\"aw-card\" *ngIf=\"i === index()\">\n\n        <span class=\"aw-index\" aria-hidden=\"true\">{{ i + 1 }}</span>\n\n        <div class=\"aw-photos\">\n          <ng-container *ngFor=\"let src of slots(item); let s = index\">\n            <figure class=\"aw-photo\" *ngIf=\"src as photo\">\n              <img [src]=\"photo\" [alt]=\"item.award\" loading=\"lazy\">\n            </figure>\n            <div class=\"aw-photo aw-photo-empty\" *ngIf=\"!src\">\n              <span>\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48 {{ s + 1 }}</span>\n            </div>\n          </ng-container>\n        </div>\n\n        <div class=\"aw-body\">\n          <div class=\"aw-tags\">\n            <span class=\"aw-tag aw-tag-level\" *ngIf=\"item.level\">{{ item.level }}</span>\n            <span class=\"aw-tag\" *ngIf=\"item.year\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ item.year }}</span>\n          </div>\n\n          <p class=\"aw-names\">\n            <span class=\"aw-name\" *ngFor=\"let n of item.names\">{{ n }}</span>\n          </p>\n\n          <div class=\"aw-rule\" aria-hidden=\"true\"></div>\n\n          <h4 class=\"aw-award\">{{ item.award }}</h4>\n          <p class=\"aw-detail\" *ngIf=\"item.detail\">{{ item.detail }}</p>\n\n          <p class=\"aw-org\" *ngIf=\"item.org\">\n            <span class=\"aw-org-label\">\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E21\u0E2D\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25</span>\n            {{ item.org }}\n          </p>\n        </div>\n      </article>\n    </ng-container>\n  </div>\n\n  <div class=\"aw-controls\">\n    <button type=\"button\" class=\"aw-arrow\" (click)=\"prev(); select(index())\" aria-label=\"\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\">\u2039</button>\n    <div class=\"aw-dots\" role=\"tablist\">\n      <button type=\"button\" class=\"aw-dot\" *ngFor=\"let item of items; let i = index\"\n        [class.is-on]=\"i === index()\" (click)=\"select(i)\"\n        [attr.aria-label]=\"'\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48 ' + (i + 1)\" [attr.aria-selected]=\"i === index()\"></button>\n    </div>\n    <button type=\"button\" class=\"aw-arrow\" (click)=\"next(); select(index())\" aria-label=\"\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E16\u0E31\u0E14\u0E44\u0E1B\">\u203A</button>\n  </div>\n</div>\n", styles: ["/* \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E19\u0E31\u0E01\u0E01\u0E35\u0E2C\u0E32 \u2014 \u0E20\u0E32\u0E1E 2 \u0E23\u0E39\u0E1B\u0E27\u0E32\u0E07\u0E0B\u0E49\u0E2D\u0E19\u0E1A\u0E19-\u0E25\u0E48\u0E32\u0E07 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E02\u0E27\u0E32 */\n.aw-slides { position: relative; }\n\n.aw-head { margin-bottom: 18px; }\n.aw-title { margin: 0; color: #fff; font-size: 24px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.aw-lead { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.aw-stage { position: relative; }\n\n.aw-card {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);\n  gap: 26px;\n  padding: 26px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 24px;\n  background:\n    radial-gradient(120% 130% at 100% 0%, rgba(212, 165, 55, .16) 0%, rgba(212, 165, 55, 0) 46%),\n    linear-gradient(150deg, #0e2a5c 0%, #163a76 52%, #0b1f45 100%);\n  box-shadow: 0 26px 60px rgba(6, 18, 44, .45);\n  animation: awIn .5s cubic-bezier(.22, .78, .3, 1) both;\n}\n@keyframes awIn { from { opacity: 0; transform: translateY(14px) scale(.99); } to { opacity: 1; transform: none; } }\n\n/* \u0E40\u0E25\u0E02\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E2A\u0E44\u0E25\u0E14\u0E4C\u0E15\u0E31\u0E27\u0E43\u0E2B\u0E0D\u0E48\u0E08\u0E32\u0E07 \u0E46 \u0E41\u0E1A\u0E1A\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E40\u0E2A\u0E37\u0E49\u0E2D */\n.aw-index {\n  position: absolute;\n  top: -22px;\n  right: 14px;\n  color: rgba(255, 255, 255, .07);\n  font-size: 150px;\n  font-weight: 800;\n  line-height: 1;\n  pointer-events: none;\n}\n\n/* \u2500\u2500 \u0E20\u0E32\u0E1E 2 \u0E23\u0E39\u0E1B \u0E1A\u0E19-\u0E25\u0E48\u0E32\u0E07 \u2500\u2500 */\n.aw-photos { display: grid; grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 12px; }\n.aw-photo {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .22);\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .06);\n}\n.aw-photo img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n.aw-photo-empty {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 4 / 3;\n  color: rgba(255, 255, 255, .55);\n  font-size: 13.5px;\n  font-weight: 700;\n  border-style: dashed;\n}\n\n/* \u2500\u2500 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 \u2500\u2500 */\n.aw-body { position: relative; z-index: 1; align-self: center; }\n\n.aw-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }\n.aw-tag {\n  padding: 5px 13px;\n  color: #dce7f8;\n  font-size: 14px;\n  font-weight: 800;\n  border: 1px solid rgba(255, 255, 255, .26);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n}\n.aw-tag-level { color: #1c2b4d; border-color: transparent; background: linear-gradient(120deg, var(--gold-400), var(--gold-500)); }\n\n.aw-names { display: flex; flex-direction: column; gap: 2px; margin: 0 0 12px; }\n.aw-name { color: #fff; font-size: 30px; font-weight: 800; line-height: 1.24; letter-spacing: .2px; }\n\n.aw-rule { width: 64px; height: 4px; margin-bottom: 14px; border-radius: 4px;\n  background: linear-gradient(90deg, var(--gold-400), var(--gold-500)); }\n\n.aw-award { margin: 0 0 8px; color: #ffe9b8; font-size: 21px; font-weight: 800; line-height: 1.5; }\n.aw-detail { margin: 0 0 12px; color: #dbe6f7; font-size: 17.5px; line-height: 1.72; }\n\n.aw-org { margin: 0; color: #c2d3ee; font-size: 16px; line-height: 1.6; }\n.aw-org-label { display: block; color: rgba(255, 255, 255, .55); font-size: 13.5px; font-weight: 800; letter-spacing: .4px; }\n\n/* \u2500\u2500 \u0E1B\u0E38\u0E48\u0E21\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21 \u2500\u2500 */\n.aw-controls { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 18px; }\n.aw-arrow {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1;\n  border: 1px solid rgba(255, 255, 255, .3);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .1);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.aw-dots { display: flex; align-items: center; gap: 9px; }\n.aw-dot {\n  width: 11px;\n  height: 11px;\n  padding: 0;\n  border: 0;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .34);\n  cursor: pointer;\n  transition: background .25s var(--ease), transform .25s var(--ease);\n}\n.aw-dot.is-on { background: var(--gold-500); transform: scale(1.3); }\n\n@media (hover: hover) {\n  .aw-arrow:hover { background: var(--gold-500); border-color: var(--gold-500); color: #1c2b4d; }\n  .aw-dot:hover { background: rgba(255, 255, 255, .6); }\n}\n\n@media (max-width: 900px) {\n  .aw-card { grid-template-columns: 1fr; gap: 20px; padding: 20px; }\n  .aw-photos { grid-template-rows: auto auto; }\n  .aw-name { font-size: 25px; }\n  .aw-index { font-size: 110px; top: -14px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .aw-card { animation: none; }\n  .aw-dot { transition: none; }\n}\n"] }]
    }], null, { items: [{
            type: Input
        }], title: [{
            type: Input
        }], lead: [{
            type: Input
        }], interval: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AwardSlideshowComponent, { className: "AwardSlideshowComponent", filePath: "src/app/shared/award-slideshow/award-slideshow.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=award-slideshow.component.js.map