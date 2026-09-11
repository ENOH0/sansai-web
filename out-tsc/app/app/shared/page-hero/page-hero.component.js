import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
/** ส่วนหัวของหน้าด้านที่ 1–5 แสดงเลขด้าน ชื่อด้าน และน้ำหนักประจำด้าน */
export class PageHeroComponent {
    no = '';
    weight = '';
    name = '';
    subtitle = '';
    static ɵfac = function PageHeroComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PageHeroComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageHeroComponent, selectors: [["app-page-hero"]], inputs: { no: "no", weight: "weight", name: "name", subtitle: "subtitle" }, decls: 6, vars: 3, consts: [[1, "page-hero"], [1, "wrap", "page-hero-inner"]], template: function PageHeroComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 ", ctx.no, " ", ctx.name, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.subtitle);
        } }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n.page-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(140deg, var(--navy-900), var(--navy-700) 60%, var(--navy-600));\n  color: #fff;\n  padding: calc(var(--nav-h) + 54px) 0 56px;\n}\n\n\n\n.page-hero[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: repeating-linear-gradient(115deg, rgba(255, 255, 255, .05) 0 2px, transparent 2px 22px);\n  opacity: .5;\n  pointer-events: none;\n}\n\n.page-hero-inner[_ngcontent-%COMP%] { position: relative; z-index: 2; }\n\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: clamp(29px, 3.6vw, 47px);\n  margin: 12px 0 10px;\n}\n\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .85);\n  max-width: 74ch;\n  margin: 0;\n}\n\n.page-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, .14);\n  border: 1px solid rgba(255, 255, 255, .26);\n  color: var(--gold-400);\n  font-weight: 700;\n  font-size: 15.5px;\n  padding: 7px 15px;\n  border-radius: 999px;\n}\n\n.page-weight[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-left: 8px;\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: rgba(232, 196, 106, .16);\n  border: 1px solid rgba(232, 196, 106, .4);\n  color: var(--gold-400);\n  font-size: 15px;\n  font-weight: 700;\n}\n\n@media print {\n  .page-hero[_ngcontent-%COMP%] {\n    background: var(--navy-900) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeroComponent, [{
        type: Component,
        args: [{ selector: 'app-page-hero', standalone: true, imports: [CommonModule], template: "<header class=\"page-hero\">\n  <div class=\"wrap page-hero-inner\">\n    <h1>\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 {{ no }} {{ name }}</h1>\n    <p>{{ subtitle }}</p>\n  </div>\n</header>\n", styles: ["/* \u0E2A\u0E48\u0E27\u0E19\u0E2B\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\u20135 */\n:host { display: block; }\n\n.page-hero {\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(140deg, var(--navy-900), var(--navy-700) 60%, var(--navy-600));\n  color: #fff;\n  padding: calc(var(--nav-h) + 54px) 0 56px;\n}\n\n/* \u0E25\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E41\u0E22\u0E07\u0E1A\u0E32\u0E07 \u0E46 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E21\u0E34\u0E15\u0E34\u0E43\u0E2B\u0E49\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07 */\n.page-hero::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: repeating-linear-gradient(115deg, rgba(255, 255, 255, .05) 0 2px, transparent 2px 22px);\n  opacity: .5;\n  pointer-events: none;\n}\n\n.page-hero-inner { position: relative; z-index: 2; }\n\n.page-hero h1 {\n  color: #fff;\n  font-size: clamp(29px, 3.6vw, 47px);\n  margin: 12px 0 10px;\n}\n\n.page-hero p {\n  color: rgba(255, 255, 255, .85);\n  max-width: 74ch;\n  margin: 0;\n}\n\n.page-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(255, 255, 255, .14);\n  border: 1px solid rgba(255, 255, 255, .26);\n  color: var(--gold-400);\n  font-weight: 700;\n  font-size: 15.5px;\n  padding: 7px 15px;\n  border-radius: 999px;\n}\n\n.page-weight {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-left: 8px;\n  padding: 7px 14px;\n  border-radius: 999px;\n  background: rgba(232, 196, 106, .16);\n  border: 1px solid rgba(232, 196, 106, .4);\n  color: var(--gold-400);\n  font-size: 15px;\n  font-weight: 700;\n}\n\n@media print {\n  .page-hero {\n    background: var(--navy-900) !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n}\n"] }]
    }], null, { no: [{
            type: Input
        }], weight: [{
            type: Input
        }], name: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PageHeroComponent, { className: "PageHeroComponent", filePath: "src/app/shared/page-hero/page-hero.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=page-hero.component.js.map