import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';
import { STUDENT_AWARDS } from '../../data/awards.data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AwardsPreviewComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵelementStart(2, "span", 11)(3, "span", 12);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 13);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("queryParams", ctx_r2.params)("revealDelay", i_r2 * 70);
    i0.ɵɵattribute("data-level", a_r1.level);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background-image", "url(" + a_r1.photos[0] + ")");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("chip-gold", a_r1.level === "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r1.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r1.award);
} }
/**
 * ตัวอย่างรางวัลแบบย่อ พร้อมปุ่มไปหน้ารางวัลทั้งหมด
 * นำไปวางในหน้าไหนก็ได้ เพียงส่ง from (เส้นทางของหน้านั้น) เพื่อให้ปุ่มย้อนกลับพากลับมาถูกที่
 */
export class AwardsPreviewComponent {
    /** จำนวนตัวอย่างที่แสดง */
    count = 4;
    /** เส้นทางของหน้าที่วางตัวอย่างนี้ เช่น /dimension-1 */
    from = '';
    /** หัวข้อย่อยที่กำลังเปิดอยู่ เช่น 1.1.8 เพื่อให้กลับมาเปิดหัวข้อเดิม */
    topic = '';
    /** true = วางบนพื้นภาพหรือวิดีโอ ตัวหนังสือจะเป็นสีขาว */
    light = false;
    /** เลือกรางวัลระดับสูงสุดมาโชว์ก่อน เพื่อให้ตัวอย่างน่าสนใจ */
    get samples() {
        const order = ['ระดับนานาชาติ', 'ระดับชาติ', 'ระดับภูมิภาค'];
        return [...STUDENT_AWARDS]
            .sort((a, b) => order.indexOf(a.level) - order.indexOf(b.level))
            .slice(0, this.count);
    }
    get total() { return STUDENT_AWARDS.length; }
    get params() {
        const p = {};
        if (this.from)
            p['from'] = this.from;
        if (this.topic)
            p['t'] = this.topic;
        return p;
    }
    static ɵfac = function AwardsPreviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AwardsPreviewComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AwardsPreviewComponent, selectors: [["app-awards-preview"]], inputs: { count: "count", from: "from", topic: "topic", light: "light" }, decls: 13, vars: 6, consts: [[1, "ap"], [1, "ap-head"], [1, "ap-title"], [1, "ap-sub"], ["routerLink", "/awards", 1, "ap-all", 3, "queryParams"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "ap-grid"], ["class", "ap-card", "routerLink", "/awards", "appReveal", "zoom", 3, "queryParams", "revealDelay", 4, "ngFor", "ngForOf"], ["routerLink", "/awards", "appReveal", "zoom", 1, "ap-card", 3, "queryParams", "revealDelay"], ["aria-hidden", "true", 1, "ap-photo"], [1, "ap-body"], [1, "chip"], [1, "ap-name"], [1, "ap-award"]], template: function AwardsPreviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
            i0.ɵɵtext(4, "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4);
            i0.ɵɵtext(8, " \u0E14\u0E39\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(9, "svg", 5);
            i0.ɵɵelement(10, "path", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵtemplate(12, AwardsPreviewComponent_a_12_Template, 9, 10, "a", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("on-media", ctx.light);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("\u0E41\u0E2A\u0E14\u0E07 ", ctx.samples.length, " \u0E08\u0E32\u0E01 ", ctx.total, " \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48\u0E21\u0E35\u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21");
            i0.ɵɵadvance();
            i0.ɵɵproperty("queryParams", ctx.params);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.samples);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink, RevealDirective], styles: ["[_nghost-%COMP%] { display: block; margin-top: 38px; }\n\n.ap-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.ap-title[_ngcontent-%COMP%] { margin: 0; color: var(--navy-900); font-size: 22px; font-weight: 800; }\n.ap-sub[_ngcontent-%COMP%] { margin: 6px 0 0; color: var(--ink-mute); font-size: 15.5px; }\n\n\n\n.ap-head.on-media[_ngcontent-%COMP%]   .ap-title[_ngcontent-%COMP%] { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n.ap-head.on-media[_ngcontent-%COMP%]   .ap-sub[_ngcontent-%COMP%] { color: #dbe6f7; }\n\n.ap-all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 48px;\n  padding: 0 20px;\n  color: var(--navy-900);\n  font-size: 16px;\n  font-weight: 800;\n  text-decoration: none;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--gold-400), var(--gold-500));\n  box-shadow: 0 10px 26px rgba(212, 165, 55, .38);\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.ap-all[_ngcontent-%COMP%]:active { transform: scale(.96); }\n@media (hover: hover) {\n  .ap-all[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(212, 165, 55, .5); }\n}\n\n.ap-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }\n\n.ap-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, .5);\n  border-radius: 18px;\n  background: var(--paper);\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .22);\n  overflow: hidden;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.ap-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .ap-card[_ngcontent-%COMP%]:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(8, 21, 47, .32); }\n}\n\n\n\n.ap-card[data-level=\"\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34\"][_ngcontent-%COMP%] { box-shadow: 0 0 0 2px var(--gold-500), 0 18px 40px rgba(8, 21, 47, .3); }\n\n.ap-photo[_ngcontent-%COMP%] {\n  display: block;\n  height: 158px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--navy-50);\n}\n\n.ap-body[_ngcontent-%COMP%] { display: grid; align-content: start; gap: 7px; padding: 16px 18px 18px; }\n.ap-name[_ngcontent-%COMP%] { color: var(--navy-900); font-size: 17px; font-weight: 800; line-height: 1.4; }\n.ap-award[_ngcontent-%COMP%] {\n  color: var(--navy-600);\n  font-size: 15.5px;\n  font-weight: 700;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n@media (max-width: 1180px) { .ap-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 560px) { .ap-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AwardsPreviewComponent, [{
        type: Component,
        args: [{ selector: 'app-awards-preview', standalone: true, imports: [CommonModule, RouterLink, RevealDirective], template: "<div class=\"ap\">\n  <div class=\"ap-head\" [class.on-media]=\"light\">\n    <div>\n      <h3 class=\"ap-title\">\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E40\u0E0A\u0E34\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E31\u0E01\u0E29\u0E4C\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19</h3>\n      <p class=\"ap-sub\">\u0E41\u0E2A\u0E14\u0E07 {{ samples.length }} \u0E08\u0E32\u0E01 {{ total }} \u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E35\u0E48\u0E21\u0E35\u0E20\u0E32\u0E1E\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E43\u0E19\u0E40\u0E25\u0E48\u0E21</p>\n    </div>\n    <a class=\"ap-all\" routerLink=\"/awards\" [queryParams]=\"params\">\n      \u0E14\u0E39\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M5 12h14M12 5l7 7-7 7\" />\n      </svg>\n    </a>\n  </div>\n\n  <div class=\"ap-grid\">\n    <a class=\"ap-card\" *ngFor=\"let a of samples; let i = index\"\n       routerLink=\"/awards\" [queryParams]=\"params\"\n       appReveal=\"zoom\" [revealDelay]=\"i * 70\"\n       [attr.data-level]=\"a.level\">\n      <span class=\"ap-photo\" [style.background-image]=\"'url(' + a.photos[0] + ')'\" aria-hidden=\"true\"></span>\n      <span class=\"ap-body\">\n        <span class=\"chip\" [class.chip-gold]=\"a.level === '\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34'\">{{ a.level }}</span>\n        <span class=\"ap-name\">{{ a.name }}</span>\n        <span class=\"ap-award\">{{ a.award }}</span>\n      </span>\n    </a>\n  </div>\n</div>\n", styles: [":host { display: block; margin-top: 38px; }\n\n.ap-head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.ap-title { margin: 0; color: var(--navy-900); font-size: 22px; font-weight: 800; }\n.ap-sub { margin: 6px 0 0; color: var(--ink-mute); font-size: 15.5px; }\n\n/* \u0E27\u0E32\u0E07\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E20\u0E32\u0E1E\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D */\n.ap-head.on-media .ap-title { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .65); }\n.ap-head.on-media .ap-sub { color: #dbe6f7; }\n\n.ap-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 48px;\n  padding: 0 20px;\n  color: var(--navy-900);\n  font-size: 16px;\n  font-weight: 800;\n  text-decoration: none;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--gold-400), var(--gold-500));\n  box-shadow: 0 10px 26px rgba(212, 165, 55, .38);\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.ap-all:active { transform: scale(.96); }\n@media (hover: hover) {\n  .ap-all:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(212, 165, 55, .5); }\n}\n\n.ap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }\n\n.ap-card {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, .5);\n  border-radius: 18px;\n  background: var(--paper);\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .22);\n  overflow: hidden;\n  transition: transform .24s var(--ease), box-shadow .24s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.ap-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .ap-card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(8, 21, 47, .32); }\n}\n\n/* \u0E44\u0E25\u0E48\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25 */\n.ap-card[data-level=\"\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E19\u0E32\u0E19\u0E32\u0E0A\u0E32\u0E15\u0E34\"] { box-shadow: 0 0 0 2px var(--gold-500), 0 18px 40px rgba(8, 21, 47, .3); }\n\n.ap-photo {\n  display: block;\n  height: 158px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--navy-50);\n}\n\n.ap-body { display: grid; align-content: start; gap: 7px; padding: 16px 18px 18px; }\n.ap-name { color: var(--navy-900); font-size: 17px; font-weight: 800; line-height: 1.4; }\n.ap-award {\n  color: var(--navy-600);\n  font-size: 15.5px;\n  font-weight: 700;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n@media (max-width: 1180px) { .ap-grid { grid-template-columns: repeat(2, 1fr); } }\n@media (max-width: 560px) { .ap-grid { grid-template-columns: 1fr; } }\n"] }]
    }], null, { count: [{
            type: Input
        }], from: [{
            type: Input
        }], topic: [{
            type: Input
        }], light: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AwardsPreviewComponent, { className: "AwardsPreviewComponent", filePath: "src/app/shared/awards-preview/awards-preview.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=awards-preview.component.js.map