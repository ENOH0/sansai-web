import { Component, HostListener, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function StairShowcaseComponent_div_0_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.lead);
} }
function StairShowcaseComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "h3", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StairShowcaseComponent_div_0_div_1_p_3_Template, 2, 1, "p", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.lead);
} }
function StairShowcaseComponent_div_0_li_3_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 21);
    i0.ɵɵelement(1, "img", 22)(2, "span", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", s_r4.photos[0], i0.ɵɵsanitizeUrl)("alt", s_r4.title);
} }
function StairShowcaseComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10)(1, "button", 11);
    i0.ɵɵlistener("click", function StairShowcaseComponent_div_0_li_3_Template_button_click_1_listener() { const i_r3 = i0.ɵɵrestoreView(_r2).index; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.open(i_r3)); });
    i0.ɵɵelement(2, "span", 12);
    i0.ɵɵelementStart(3, "span", 13)(4, "span", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, StairShowcaseComponent_div_0_li_3_span_6_Template, 3, 2, "span", 15);
    i0.ɵɵelementStart(7, "span", 16);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 17);
    i0.ɵɵtext(10, "\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E40\u0E15\u0E47\u0E21 ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(11, "svg", 18);
    i0.ɵɵelement(12, "path", 19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "span", 20)(14, "i");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵstyleProp("--rise", i_r3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 " + s_r4.no + " " + s_r4.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(s_r4.no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r4.photos == null ? null : s_r4.photos.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r4.title || "\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 " + s_r4.no);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r4.no);
} }
function StairShowcaseComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, StairShowcaseComponent_div_0_div_1_Template, 4, 2, "div", 3);
    i0.ɵɵelementStart(2, "ol", 4);
    i0.ɵɵtemplate(3, StairShowcaseComponent_div_0_li_3_Template, 16, 7, "li", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.steps);
} }
function StairShowcaseComponent_div_1_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r6.text);
} }
function StairShowcaseComponent_div_1_div_14_figure_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure", 38);
    i0.ɵɵelement(1, "img", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const s_r6 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r7, i0.ɵɵsanitizeUrl)("alt", s_r6.title);
} }
function StairShowcaseComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵtemplate(1, StairShowcaseComponent_div_1_div_14_figure_1_Template, 2, 2, "figure", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r6 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r6.photos);
} }
function StairShowcaseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵlistener("click", function StairShowcaseComponent_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵlistener("click", function StairShowcaseComponent_div_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 26);
    i0.ɵɵlistener("click", function StairShowcaseComponent_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 27);
    i0.ɵɵelement(4, "path", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div", 29)(6, "span", 30);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div")(9, "p", 31);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h4", 32);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(13, StairShowcaseComponent_div_1_p_13_Template, 2, 1, "p", 33)(14, StairShowcaseComponent_div_1_div_14_Template, 2, 1, "div", 34);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r6 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(s_r6.no);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ", s_r6.no, " \u0E08\u0E32\u0E01 ", ctx_r0.steps.length, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r6.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r6.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r6.photos == null ? null : s_r6.photos.length);
} }
/** แสดงผลงานแบบขั้นบันได 4 ขั้น — การ์ดแสดงเฉพาะชื่อ กดแล้วเปิดดูรูปเต็มพร้อมรายละเอียด */
export class StairShowcaseComponent {
    steps = [];
    title = '';
    lead = '';
    openIndex = signal(null);
    get current() {
        const i = this.openIndex();
        return i === null ? null : this.steps[i] ?? null;
    }
    open(i) { this.openIndex.set(i); }
    close() { this.openIndex.set(null); }
    onEsc() { this.close(); }
    static ɵfac = function StairShowcaseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StairShowcaseComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StairShowcaseComponent, selectors: [["app-stair-showcase"]], hostBindings: function StairShowcaseComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function StairShowcaseComponent_keydown_escape_HostBindingHandler() { return ctx.onEsc(); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { steps: "steps", title: "title", lead: "lead" }, decls: 2, vars: 2, consts: [["class", "stair", 4, "ngIf"], ["class", "stair-modal", 3, "click", 4, "ngIf"], [1, "stair"], ["class", "stair-head", 4, "ngIf"], [1, "stair-track"], ["class", "stair-step", 3, "--rise", 4, "ngFor", "ngForOf"], [1, "stair-head"], [1, "stair-title"], ["class", "stair-lead", 4, "ngIf"], [1, "stair-lead"], [1, "stair-step"], ["type", "button", 1, "stair-card", 3, "click"], ["aria-hidden", "true", 1, "stair-beam"], [1, "stair-medal"], [1, "stair-medal-no"], ["class", "stair-frame", 4, "ngIf"], [1, "stair-name"], [1, "stair-more"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], ["aria-hidden", "true", 1, "stair-pedestal"], [1, "stair-frame"], ["loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "stair-shine"], [1, "stair-modal", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "stair-modal-box", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14", 1, "stair-modal-close", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.6", "stroke-linecap", "round", "aria-hidden", "true"], ["d", "M6 6l12 12M18 6L6 18"], [1, "stair-modal-head"], [1, "stair-no"], [1, "stair-modal-kicker"], [1, "stair-modal-title"], ["class", "stair-modal-text", 4, "ngIf"], ["class", "stair-modal-photos", 4, "ngIf"], [1, "stair-modal-text"], [1, "stair-modal-photos"], ["class", "stair-modal-photo", 4, "ngFor", "ngForOf"], [1, "stair-modal-photo"], [3, "src", "alt"]], template: function StairShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StairShowcaseComponent_div_0_Template, 4, 2, "div", 0)(1, StairShowcaseComponent_div_1_Template, 15, 6, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.steps.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.current);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".stair-head[_ngcontent-%COMP%] { margin-bottom: 22px; }\n.stair-title[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: 24px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.stair-lead[_ngcontent-%COMP%] { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.stair-track[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  align-items: end;\n  margin: 0;\n  padding: 24px 0 0;\n  list-style: none;\n}\n.stair-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: calc(var(--rise) * 52px);\n}\n\n\n\n.stair-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  align-content: start;\n  gap: 13px;\n  width: 100%;\n  min-height: 336px;\n  padding: 30px 20px 20px;\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n  border: 1px solid rgba(232, 196, 106, .45);\n  border-radius: 20px;\n  background:\n    radial-gradient(120% 80% at 50% 0%, rgba(232, 196, 106, .22) 0%, rgba(232, 196, 106, 0) 55%),\n    linear-gradient(170deg, #143a77 0%, #0e2a5c 55%, #0a1d40 100%);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, .06) inset,\n    0 18px 40px rgba(6, 18, 44, .5),\n    0 0 26px rgba(232, 196, 106, .12);\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\n.stair-beam[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -60%;\n  left: 50%;\n  width: 150%;\n  height: 130%;\n  transform: translateX(-50%);\n  pointer-events: none;\n  background: radial-gradient(45% 45% at 50% 40%, rgba(255, 233, 184, .3) 0%, rgba(255, 233, 184, 0) 70%);\n}\n\n\n\n.stair-medal[_ngcontent-%COMP%] {\n  position: relative;\n  justify-self: center;\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: conic-gradient(from 210deg, #f6dd9c, #d4a537 25%, #b3862a 50%, #f0d089 75%, #d4a537);\n  box-shadow: 0 8px 18px -8px rgba(0, 0, 0, .8), 0 0 18px rgba(232, 196, 106, .45);\n}\n.stair-medal[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: 5px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, .55);\n}\n.stair-medal-no[_ngcontent-%COMP%] { position: relative; color: #3b2a06; font-size: 22px; font-weight: 800; line-height: 1; }\n\n\n\n.stair-frame[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  padding: 7px;\n  border-radius: 12px;\n  background: linear-gradient(150deg, #f6dd9c, #d4a537 45%, #b3862a);\n  box-shadow: 0 12px 26px rgba(0, 0, 0, .42);\n}\n.stair-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 124px;\n  object-fit: contain;\n  border-radius: 7px;\n  background: #fff;\n}\n.stair-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 45%;\n  height: 100%;\n  transform: skewX(-18deg);\n  pointer-events: none;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .45), rgba(255, 255, 255, 0));\n  animation: _ngcontent-%COMP%_stairShine 5.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_stairShine {\n  0%, 62% { left: -60%; }\n  86%, 100% { left: 115%; }\n}\n\n.stair-name[_ngcontent-%COMP%] { color: #fff; font-size: 18px; font-weight: 800; line-height: 1.45; text-wrap: balance; }\n\n.stair-more[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: auto;\n  padding-top: 4px;\n  color: var(--gold-400);\n  font-size: 15.5px;\n  font-weight: 800;\n}\n\n\n\n.stair-pedestal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 74%;\n  height: calc(var(--rise) * 52px);\n  margin: 0 auto;\n  border-radius: 0 0 8px 8px;\n  background: linear-gradient(180deg, rgba(232, 196, 106, .3) 0, rgba(14, 42, 92, .55) 22%, rgba(8, 24, 54, .35) 100%);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35);\n}\n.stair-pedestal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgba(255, 255, 255, .22);\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 800;\n}\n.stair-step[_ngcontent-%COMP%]:first-child   .stair-pedestal[_ngcontent-%COMP%] { display: none; }\n\n@media (hover: hover) {\n  .stair-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-7px);\n    border-color: rgba(232, 196, 106, .85);\n    box-shadow:\n      0 0 0 1px rgba(255, 255, 255, .08) inset,\n      0 28px 56px rgba(6, 18, 44, .58),\n      0 0 40px rgba(232, 196, 106, .3);\n  }\n  .stair-card[_ngcontent-%COMP%]:hover   .stair-more[_ngcontent-%COMP%] { color: #ffe9b8; }\n}\n.stair-card[_ngcontent-%COMP%]:active { transform: scale(.99); }\n\n\n\n.stair-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: grid;\n  place-items: center;\n  padding: 24px 16px;\n  background: rgba(6, 18, 44, .74);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n  animation: _ngcontent-%COMP%_stairFade .2s ease both;\n}\n.stair-modal-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(780px, 100%);\n  max-height: 88vh;\n  overflow: auto;\n  padding: 28px 28px 26px;\n  border: 1px solid rgba(232, 196, 106, .5);\n  border-radius: 22px;\n  background: linear-gradient(170deg, #ffffff 0%, #f6f9ff 100%);\n  box-shadow: 0 30px 70px rgba(6, 18, 44, .55), 0 0 40px rgba(232, 196, 106, .18);\n  animation: _ngcontent-%COMP%_stairPop .28s cubic-bezier(.22, .78, .3, 1) both;\n}\n.stair-modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: var(--navy-800);\n  cursor: pointer;\n  border: 1px solid var(--navy-200);\n  border-radius: 50%;\n  background: #fff;\n}\n.stair-modal-head[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; margin: 0 44px 14px 0; }\n.stair-modal-head[_ngcontent-%COMP%]   .stair-medal[_ngcontent-%COMP%] { justify-self: start; }\n.stair-modal-kicker[_ngcontent-%COMP%] { margin: 0; color: var(--gold-600); font-size: 14.5px; font-weight: 800; letter-spacing: .3px; }\n.stair-modal-title[_ngcontent-%COMP%] { margin: 2px 0 0; color: var(--navy-900); font-size: 23px; font-weight: 800; line-height: 1.4; }\n.stair-modal-text[_ngcontent-%COMP%] { margin: 0 0 18px; color: var(--ink); font-size: 18px; line-height: 1.8; }\n.stair-modal-photos[_ngcontent-%COMP%] { display: grid; gap: 12px; }\n.stair-modal-photo[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  border-radius: 14px;\n  overflow: hidden;\n  background: linear-gradient(150deg, #f6dd9c, #d4a537 45%, #b3862a);\n  box-shadow: 0 14px 30px rgba(6, 18, 44, .25);\n}\n.stair-modal-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; height: auto; border-radius: 8px; background: #fff; }\n\n@keyframes _ngcontent-%COMP%_stairFade { from { opacity: 0 } to { opacity: 1 } }\n@keyframes _ngcontent-%COMP%_stairPop { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }\n\n@media (max-width: 900px) {\n  .stair-track[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .stair-step[_ngcontent-%COMP%] { padding-bottom: 0; }\n  .stair-pedestal[_ngcontent-%COMP%] { display: none; }\n  .stair-card[_ngcontent-%COMP%] { min-height: 0; }\n  .stair-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { height: 150px; }\n}\n@media (max-width: 560px) { .stair-track[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n@media (prefers-reduced-motion: reduce) {\n  .stair-card[_ngcontent-%COMP%] { transition: none; }\n  .stair-shine[_ngcontent-%COMP%] { animation: none; display: none; }\n  .stair-modal[_ngcontent-%COMP%], .stair-modal-box[_ngcontent-%COMP%] { animation: none; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StairShowcaseComponent, [{
        type: Component,
        args: [{ selector: 'app-stair-showcase', standalone: true, imports: [CommonModule], template: "<div class=\"stair\" *ngIf=\"steps.length\">\n  <div class=\"stair-head\" *ngIf=\"title\">\n    <h3 class=\"stair-title\">{{ title }}</h3>\n    <p class=\"stair-lead\" *ngIf=\"lead\">{{ lead }}</p>\n  </div>\n\n  <ol class=\"stair-track\">\n    <li class=\"stair-step\" *ngFor=\"let s of steps; let i = index\" [style.--rise]=\"i\">\n      <button type=\"button\" class=\"stair-card\" (click)=\"open(i)\"\n        [attr.aria-label]=\"'\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ' + s.no + ' ' + s.title\">\n        <span class=\"stair-beam\" aria-hidden=\"true\"></span>\n\n        <span class=\"stair-medal\">\n          <span class=\"stair-medal-no\">{{ s.no }}</span>\n        </span>\n\n        <span class=\"stair-frame\" *ngIf=\"s.photos?.length\">\n          <img [src]=\"s.photos![0]\" [alt]=\"s.title\" loading=\"lazy\">\n          <span class=\"stair-shine\" aria-hidden=\"true\"></span>\n        </span>\n\n        <span class=\"stair-name\">{{ s.title || '\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ' + s.no }}</span>\n\n        <span class=\"stair-more\">\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E40\u0E15\u0E47\u0E21\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\"\n            stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14M12 5l7 7-7 7\" /></svg>\n        </span>\n      </button>\n      <span class=\"stair-pedestal\" aria-hidden=\"true\"><i>{{ s.no }}</i></span>\n    </li>\n  </ol>\n</div>\n\n<!-- \u0E01\u0E25\u0E48\u0E2D\u0E07\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E40\u0E15\u0E47\u0E21\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 -->\n<div class=\"stair-modal\" *ngIf=\"current as s\" (click)=\"close()\">\n  <div class=\"stair-modal-box\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n    <button type=\"button\" class=\"stair-modal-close\" (click)=\"close()\" aria-label=\"\u0E1B\u0E34\u0E14\">\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\"\n        stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M6 6l12 12M18 6L6 18\" /></svg>\n    </button>\n\n    <div class=\"stair-modal-head\">\n      <span class=\"stair-no\">{{ s.no }}</span>\n      <div>\n        <p class=\"stair-modal-kicker\">\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 {{ s.no }} \u0E08\u0E32\u0E01 {{ steps.length }}</p>\n        <h4 class=\"stair-modal-title\">{{ s.title }}</h4>\n      </div>\n    </div>\n\n    <p class=\"stair-modal-text\" *ngIf=\"s.text\">{{ s.text }}</p>\n\n    <div class=\"stair-modal-photos\" *ngIf=\"s.photos?.length\">\n      <figure class=\"stair-modal-photo\" *ngFor=\"let p of s.photos\">\n        <img [src]=\"p\" [alt]=\"s.title\">\n      </figure>\n    </div>\n  </div>\n</div>\n", styles: [".stair-head { margin-bottom: 22px; }\n.stair-title { margin: 0; color: #fff; font-size: 24px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.stair-lead { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.stair-track {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  align-items: end;\n  margin: 0;\n  padding: 24px 0 0;\n  list-style: none;\n}\n.stair-step {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: calc(var(--rise) * 52px);\n}\n\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.stair-card {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  align-content: start;\n  gap: 13px;\n  width: 100%;\n  min-height: 336px;\n  padding: 30px 20px 20px;\n  text-align: center;\n  cursor: pointer;\n  overflow: hidden;\n  border: 1px solid rgba(232, 196, 106, .45);\n  border-radius: 20px;\n  background:\n    radial-gradient(120% 80% at 50% 0%, rgba(232, 196, 106, .22) 0%, rgba(232, 196, 106, 0) 55%),\n    linear-gradient(170deg, #143a77 0%, #0e2a5c 55%, #0a1d40 100%);\n  box-shadow:\n    0 0 0 1px rgba(255, 255, 255, .06) inset,\n    0 18px 40px rgba(6, 18, 44, .5),\n    0 0 26px rgba(232, 196, 106, .12);\n  transition: transform .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* \u0E25\u0E33\u0E41\u0E2A\u0E07\u0E2A\u0E1B\u0E2D\u0E15\u0E44\u0E25\u0E17\u0E4C\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 */\n.stair-beam {\n  position: absolute;\n  top: -60%;\n  left: 50%;\n  width: 150%;\n  height: 130%;\n  transform: translateX(-50%);\n  pointer-events: none;\n  background: radial-gradient(45% 45% at 50% 40%, rgba(255, 233, 184, .3) 0%, rgba(255, 233, 184, 0) 70%);\n}\n\n/* \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E40\u0E25\u0E02\u0E02\u0E31\u0E49\u0E19 */\n.stair-medal {\n  position: relative;\n  justify-self: center;\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: conic-gradient(from 210deg, #f6dd9c, #d4a537 25%, #b3862a 50%, #f0d089 75%, #d4a537);\n  box-shadow: 0 8px 18px -8px rgba(0, 0, 0, .8), 0 0 18px rgba(232, 196, 106, .45);\n}\n.stair-medal::after {\n  content: '';\n  position: absolute;\n  inset: 5px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, .55);\n}\n.stair-medal-no { position: relative; color: #3b2a06; font-size: 22px; font-weight: 800; line-height: 1; }\n\n/* \u0E01\u0E23\u0E2D\u0E1A\u0E23\u0E39\u0E1B\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 */\n.stair-frame {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  padding: 7px;\n  border-radius: 12px;\n  background: linear-gradient(150deg, #f6dd9c, #d4a537 45%, #b3862a);\n  box-shadow: 0 12px 26px rgba(0, 0, 0, .42);\n}\n.stair-frame img {\n  display: block;\n  width: 100%;\n  height: 124px;\n  object-fit: contain;\n  border-radius: 7px;\n  background: #fff;\n}\n.stair-shine {\n  position: absolute;\n  top: 0;\n  left: -60%;\n  width: 45%;\n  height: 100%;\n  transform: skewX(-18deg);\n  pointer-events: none;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .45), rgba(255, 255, 255, 0));\n  animation: stairShine 5.5s ease-in-out infinite;\n}\n@keyframes stairShine {\n  0%, 62% { left: -60%; }\n  86%, 100% { left: 115%; }\n}\n\n.stair-name { color: #fff; font-size: 18px; font-weight: 800; line-height: 1.45; text-wrap: balance; }\n\n.stair-more {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: auto;\n  padding-top: 4px;\n  color: var(--gold-400);\n  font-size: 15.5px;\n  font-weight: 800;\n}\n\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u0E41\u0E17\u0E48\u0E19\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A (\u0E02\u0E32\u0E1A\u0E31\u0E19\u0E44\u0E14) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.stair-pedestal {\n  position: relative;\n  width: 74%;\n  height: calc(var(--rise) * 52px);\n  margin: 0 auto;\n  border-radius: 0 0 8px 8px;\n  background: linear-gradient(180deg, rgba(232, 196, 106, .3) 0, rgba(14, 42, 92, .55) 22%, rgba(8, 24, 54, .35) 100%);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .35);\n}\n.stair-pedestal i {\n  position: absolute;\n  top: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgba(255, 255, 255, .22);\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 800;\n}\n.stair-step:first-child .stair-pedestal { display: none; }\n\n@media (hover: hover) {\n  .stair-card:hover {\n    transform: translateY(-7px);\n    border-color: rgba(232, 196, 106, .85);\n    box-shadow:\n      0 0 0 1px rgba(255, 255, 255, .08) inset,\n      0 28px 56px rgba(6, 18, 44, .58),\n      0 0 40px rgba(232, 196, 106, .3);\n  }\n  .stair-card:hover .stair-more { color: #ffe9b8; }\n}\n.stair-card:active { transform: scale(.99); }\n\n/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \u0E01\u0E25\u0E48\u0E2D\u0E07\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E40\u0E15\u0E47\u0E21 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.stair-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 60;\n  display: grid;\n  place-items: center;\n  padding: 24px 16px;\n  background: rgba(6, 18, 44, .74);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n  animation: stairFade .2s ease both;\n}\n.stair-modal-box {\n  position: relative;\n  width: min(780px, 100%);\n  max-height: 88vh;\n  overflow: auto;\n  padding: 28px 28px 26px;\n  border: 1px solid rgba(232, 196, 106, .5);\n  border-radius: 22px;\n  background: linear-gradient(170deg, #ffffff 0%, #f6f9ff 100%);\n  box-shadow: 0 30px 70px rgba(6, 18, 44, .55), 0 0 40px rgba(232, 196, 106, .18);\n  animation: stairPop .28s cubic-bezier(.22, .78, .3, 1) both;\n}\n.stair-modal-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  color: var(--navy-800);\n  cursor: pointer;\n  border: 1px solid var(--navy-200);\n  border-radius: 50%;\n  background: #fff;\n}\n.stair-modal-head { display: flex; align-items: center; gap: 14px; margin: 0 44px 14px 0; }\n.stair-modal-head .stair-medal { justify-self: start; }\n.stair-modal-kicker { margin: 0; color: var(--gold-600); font-size: 14.5px; font-weight: 800; letter-spacing: .3px; }\n.stair-modal-title { margin: 2px 0 0; color: var(--navy-900); font-size: 23px; font-weight: 800; line-height: 1.4; }\n.stair-modal-text { margin: 0 0 18px; color: var(--ink); font-size: 18px; line-height: 1.8; }\n.stair-modal-photos { display: grid; gap: 12px; }\n.stair-modal-photo {\n  margin: 0;\n  padding: 8px;\n  border-radius: 14px;\n  overflow: hidden;\n  background: linear-gradient(150deg, #f6dd9c, #d4a537 45%, #b3862a);\n  box-shadow: 0 14px 30px rgba(6, 18, 44, .25);\n}\n.stair-modal-photo img { display: block; width: 100%; height: auto; border-radius: 8px; background: #fff; }\n\n@keyframes stairFade { from { opacity: 0 } to { opacity: 1 } }\n@keyframes stairPop { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }\n\n@media (max-width: 900px) {\n  .stair-track { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .stair-step { padding-bottom: 0; }\n  .stair-pedestal { display: none; }\n  .stair-card { min-height: 0; }\n  .stair-frame img { height: 150px; }\n}\n@media (max-width: 560px) { .stair-track { grid-template-columns: 1fr; } }\n\n@media (prefers-reduced-motion: reduce) {\n  .stair-card { transition: none; }\n  .stair-shine { animation: none; display: none; }\n  .stair-modal, .stair-modal-box { animation: none; }\n}\n"] }]
    }], null, { steps: [{
            type: Input
        }], title: [{
            type: Input
        }], lead: [{
            type: Input
        }], onEsc: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StairShowcaseComponent, { className: "StairShowcaseComponent", filePath: "src/app/shared/stair-showcase/stair-showcase.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=stair-showcase.component.js.map