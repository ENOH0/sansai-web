import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function StairShowcaseComponent_div_0_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.lead);
} }
function StairShowcaseComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "h3", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StairShowcaseComponent_div_0_div_1_p_3_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.lead);
} }
function StairShowcaseComponent_div_0_li_3_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(s_r2.text);
} }
function StairShowcaseComponent_div_0_li_3_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1, "\u0E23\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E02\u0E31\u0E49\u0E19\u0E19\u0E35\u0E49");
    i0.ɵɵelementEnd();
} }
function StairShowcaseComponent_div_0_li_3_div_8_figure_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "figure", 21);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const s_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r3, i0.ɵɵsanitizeUrl)("alt", s_r2.title);
} }
function StairShowcaseComponent_div_0_li_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, StairShowcaseComponent_div_0_li_3_div_8_figure_1_Template, 2, 2, "figure", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", s_r2.photos);
} }
function StairShowcaseComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 9)(1, "div", 10)(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h4", 12);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, StairShowcaseComponent_div_0_li_3_p_6_Template, 2, 1, "p", 13)(7, StairShowcaseComponent_div_0_li_3_p_7_Template, 2, 0, "p", 14)(8, StairShowcaseComponent_div_0_li_3_div_8_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "span", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵstyleProp("--rise", i_r4);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-empty", !s_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.no);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(s_r2.title || "\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 " + s_r2.no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r2.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !s_r2.text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", s_r2.photos == null ? null : s_r2.photos.length);
} }
function StairShowcaseComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, StairShowcaseComponent_div_0_div_1_Template, 4, 2, "div", 2);
    i0.ɵɵelementStart(2, "ol", 3);
    i0.ɵɵtemplate(3, StairShowcaseComponent_div_0_li_3_Template, 10, 9, "li", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.steps);
} }
/** แสดงผลงานแบบขั้นบันได 4 ขั้น — ขั้นที่สูงขึ้นคือการพัฒนาที่ก้าวหน้าขึ้น */
export class StairShowcaseComponent {
    steps = [];
    title = '';
    lead = '';
    static ɵfac = function StairShowcaseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StairShowcaseComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StairShowcaseComponent, selectors: [["app-stair-showcase"]], inputs: { steps: "steps", title: "title", lead: "lead" }, decls: 1, vars: 1, consts: [["class", "stair", 4, "ngIf"], [1, "stair"], ["class", "stair-head", 4, "ngIf"], [1, "stair-track"], ["class", "stair-step", 3, "--rise", 4, "ngFor", "ngForOf"], [1, "stair-head"], [1, "stair-title"], ["class", "stair-lead", 4, "ngIf"], [1, "stair-lead"], [1, "stair-step"], [1, "stair-card"], [1, "stair-no"], [1, "stair-name"], ["class", "stair-text", 4, "ngIf"], ["class", "stair-text stair-placeholder", 4, "ngIf"], ["class", "stair-photos", 4, "ngIf"], ["aria-hidden", "true", 1, "stair-riser"], [1, "stair-text"], [1, "stair-text", "stair-placeholder"], [1, "stair-photos"], ["class", "stair-photo", 4, "ngFor", "ngForOf"], [1, "stair-photo"], ["loading", "lazy", 3, "src", "alt"]], template: function StairShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StairShowcaseComponent_div_0_Template, 4, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.steps.length);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".stair-head[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.stair-title[_ngcontent-%COMP%] { margin: 0; color: #fff; font-size: 23px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.stair-lead[_ngcontent-%COMP%] { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.stair-track[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.stair-step[_ngcontent-%COMP%] { position: relative; display: flex; flex-direction: column; justify-content: flex-end; }\n\n\n\n.stair-step[_ngcontent-%COMP%] { padding-bottom: calc(var(--rise) * 26px); }\n\n.stair-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 20px 20px 18px;\n  border: 1px solid rgba(255, 255, 255, .6);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .95);\n  box-shadow: 0 16px 36px rgba(8, 21, 47, .25);\n}\n.stair-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n  background: linear-gradient(90deg, var(--navy-600), var(--gold-500));\n}\n.stair-card.is-empty[_ngcontent-%COMP%] { background: rgba(255, 255, 255, .84); }\n\n.stair-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  margin-bottom: 12px;\n  color: #fff;\n  font-size: 21px;\n  font-weight: 700;\n  border-radius: 14px;\n  background: linear-gradient(140deg, var(--navy-800), var(--navy-500));\n  box-shadow: 0 10px 18px -10px rgba(10, 30, 66, .85);\n}\n\n.stair-name[_ngcontent-%COMP%] { margin: 0 0 6px; color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.4; }\n.stair-text[_ngcontent-%COMP%] { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.stair-placeholder[_ngcontent-%COMP%] { color: var(--ink-mute); font-style: italic; }\n\n.stair-photos[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }\n.stair-photo[_ngcontent-%COMP%] { margin: 0; border-radius: 10px; overflow: hidden; }\n.stair-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n\n\n\n.stair-riser[_ngcontent-%COMP%] {\n  height: calc(var(--rise) * 26px);\n  margin: 0 auto;\n  border-left: 2px dashed rgba(255, 255, 255, .45);\n}\n\n@media (max-width: 900px) {\n  .stair-track[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .stair-step[_ngcontent-%COMP%] { padding-bottom: 0; }\n  .stair-riser[_ngcontent-%COMP%] { display: none; }\n}\n@media (max-width: 560px) {\n  .stair-track[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StairShowcaseComponent, [{
        type: Component,
        args: [{ selector: 'app-stair-showcase', standalone: true, imports: [CommonModule], template: "<div class=\"stair\" *ngIf=\"steps.length\">\n  <div class=\"stair-head\" *ngIf=\"title\">\n    <h3 class=\"stair-title\">{{ title }}</h3>\n    <p class=\"stair-lead\" *ngIf=\"lead\">{{ lead }}</p>\n  </div>\n\n  <ol class=\"stair-track\">\n    <li class=\"stair-step\" *ngFor=\"let s of steps; let i = index\"\n      [style.--rise]=\"i\">\n      <div class=\"stair-card\" [class.is-empty]=\"!s.title\">\n        <span class=\"stair-no\">{{ s.no }}</span>\n        <h4 class=\"stair-name\">{{ s.title || '\u0E02\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48 ' + s.no }}</h4>\n        <p class=\"stair-text\" *ngIf=\"s.text\">{{ s.text }}</p>\n        <p class=\"stair-text stair-placeholder\" *ngIf=\"!s.text\">\u0E23\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E02\u0E31\u0E49\u0E19\u0E19\u0E35\u0E49</p>\n\n        <div class=\"stair-photos\" *ngIf=\"s.photos?.length\">\n          <figure class=\"stair-photo\" *ngFor=\"let p of s.photos\">\n            <img [src]=\"p\" [alt]=\"s.title\" loading=\"lazy\">\n          </figure>\n        </div>\n      </div>\n      <span class=\"stair-riser\" aria-hidden=\"true\"></span>\n    </li>\n  </ol>\n</div>\n", styles: [".stair-head { margin-bottom: 20px; }\n.stair-title { margin: 0; color: #fff; font-size: 23px; font-weight: 800; line-height: 1.35;\n  text-shadow: 0 2px 14px rgba(6, 18, 44, .85); }\n.stair-lead { margin: 6px 0 0; color: #dbe6f7; font-size: 16.5px; line-height: 1.6;\n  text-shadow: 0 2px 12px rgba(6, 18, 44, .85); }\n\n.stair-track {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.stair-step { position: relative; display: flex; flex-direction: column; justify-content: flex-end; }\n\n/* \u0E02\u0E31\u0E49\u0E19\u0E25\u0E48\u0E32\u0E07\u0E2A\u0E38\u0E14\u0E22\u0E01\u0E15\u0E31\u0E27\u0E19\u0E49\u0E2D\u0E22 \u0E02\u0E31\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E22\u0E01\u0E2A\u0E39\u0E07\u0E02\u0E36\u0E49\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E22 \u0E46 \u0E08\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E1A\u0E31\u0E19\u0E44\u0E14 */\n.stair-step { padding-bottom: calc(var(--rise) * 26px); }\n\n.stair-card {\n  position: relative;\n  padding: 20px 20px 18px;\n  border: 1px solid rgba(255, 255, 255, .6);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .95);\n  box-shadow: 0 16px 36px rgba(8, 21, 47, .25);\n}\n.stair-card::before {\n  content: '';\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 4px;\n  border-radius: 18px 18px 0 0;\n  background: linear-gradient(90deg, var(--navy-600), var(--gold-500));\n}\n.stair-card.is-empty { background: rgba(255, 255, 255, .84); }\n\n.stair-no {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  margin-bottom: 12px;\n  color: #fff;\n  font-size: 21px;\n  font-weight: 700;\n  border-radius: 14px;\n  background: linear-gradient(140deg, var(--navy-800), var(--navy-500));\n  box-shadow: 0 10px 18px -10px rgba(10, 30, 66, .85);\n}\n\n.stair-name { margin: 0 0 6px; color: var(--navy-900); font-size: 19px; font-weight: 800; line-height: 1.4; }\n.stair-text { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.65; }\n.stair-placeholder { color: var(--ink-mute); font-style: italic; }\n\n.stair-photos { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }\n.stair-photo { margin: 0; border-radius: 10px; overflow: hidden; }\n.stair-photo img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }\n\n/* \u0E40\u0E2A\u0E49\u0E19\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07\u0E43\u0E15\u0E49\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E25\u0E39\u0E01\u0E15\u0E31\u0E49\u0E07\u0E02\u0E2D\u0E07\u0E1A\u0E31\u0E19\u0E44\u0E14 */\n.stair-riser {\n  height: calc(var(--rise) * 26px);\n  margin: 0 auto;\n  border-left: 2px dashed rgba(255, 255, 255, .45);\n}\n\n@media (max-width: 900px) {\n  .stair-track { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .stair-step { padding-bottom: 0; }\n  .stair-riser { display: none; }\n}\n@media (max-width: 560px) {\n  .stair-track { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, { steps: [{
            type: Input
        }], title: [{
            type: Input
        }], lead: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StairShowcaseComponent, { className: "StairShowcaseComponent", filePath: "src/app/shared/stair-showcase/stair-showcase.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=stair-showcase.component.js.map