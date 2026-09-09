import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
/** ปุ่มกลับหน้าแรกแบบลอย ใช้ร่วมกันทุกหน้าด้าน */
export class HomeFabComponent {
    static ɵfac = function HomeFabComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeFabComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeFabComponent, selectors: [["app-home-fab"]], decls: 6, vars: 0, consts: [["routerLink", "/", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01", 1, "home-fab"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.3", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M3 10.5 12 3l9 7.5"], ["d", "M5 9.6V20h14V9.6"]], template: function HomeFabComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 1);
            i0.ɵɵelement(2, "path", 2)(3, "path", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01");
            i0.ɵɵelementEnd()();
        } }, dependencies: [RouterLink], styles: ["\n\n.home-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 20px;\n  bottom: calc(24px + env(safe-area-inset-bottom));\n  z-index: 92;\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 52px;\n  padding: 0 20px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, .26);\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .42);\n  -webkit-tap-highlight-color: transparent;\n  transition: transform .18s var(--ease), box-shadow .2s var(--ease);\n}\n.home-fab[_ngcontent-%COMP%]:active { transform: scale(.95); }\n@media (hover: hover) {\n  .home-fab[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(8, 21, 47, .5); }\n}\n\n\n\n@media (max-width: 900px) {\n  .home-fab[_ngcontent-%COMP%] { bottom: calc(84px + env(safe-area-inset-bottom)); }\n}\n\n@media (max-width: 560px) {\n  .home-fab[_ngcontent-%COMP%] { left: 14px; padding: 0 15px; font-size: 15px; }\n  .home-fab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n@media print { .home-fab[_ngcontent-%COMP%] { display: none !important; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeFabComponent, [{
        type: Component,
        args: [{ selector: 'app-home-fab', standalone: true, imports: [RouterLink], template: `
    <a class="home-fab" routerLink="/" aria-label="กลับหน้าแรก">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.6V20h14V9.6" />
      </svg>
      <span>หน้าแรก</span>
    </a>
  `, styles: ["/* \u0E1B\u0E38\u0E48\u0E21\u0E25\u0E2D\u0E22\u0E21\u0E38\u0E21\u0E0B\u0E49\u0E32\u0E22\u0E25\u0E48\u0E32\u0E07 \u2014 \u0E44\u0E21\u0E48\u0E0A\u0E19\u0E01\u0E31\u0E1A\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E02\u0E36\u0E49\u0E19\u0E1A\u0E19\u0E2A\u0E38\u0E14\u0E41\u0E25\u0E30\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E21\u0E38\u0E21\u0E02\u0E27\u0E32 */\n.home-fab {\n  position: fixed;\n  left: 20px;\n  bottom: calc(24px + env(safe-area-inset-bottom));\n  z-index: 92;\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 52px;\n  padding: 0 20px;\n  color: #fff;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  text-decoration: none;\n  border: 1px solid rgba(255, 255, 255, .26);\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--navy-800), var(--navy-600));\n  box-shadow: 0 12px 30px rgba(8, 21, 47, .42);\n  -webkit-tap-highlight-color: transparent;\n  transition: transform .18s var(--ease), box-shadow .2s var(--ease);\n}\n.home-fab:active { transform: scale(.95); }\n@media (hover: hover) {\n  .home-fab:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(8, 21, 47, .5); }\n}\n\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07\u0E02\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E21\u0E35\u0E41\u0E16\u0E1A\u0E19\u0E33\u0E17\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E25\u0E32\u0E07\u0E02\u0E2D\u0E1A\u0E25\u0E48\u0E32\u0E07 \u0E08\u0E36\u0E07\u0E22\u0E01\u0E1B\u0E38\u0E48\u0E21\u0E19\u0E35\u0E49\u0E02\u0E36\u0E49\u0E19\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22 */\n@media (max-width: 900px) {\n  .home-fab { bottom: calc(84px + env(safe-area-inset-bottom)); }\n}\n\n@media (max-width: 560px) {\n  .home-fab { left: 14px; padding: 0 15px; font-size: 15px; }\n  .home-fab span { display: none; }\n}\n\n@media print { .home-fab { display: none !important; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeFabComponent, { className: "HomeFabComponent", filePath: "src/app/shared/home-fab/home-fab.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=home-fab.component.js.map