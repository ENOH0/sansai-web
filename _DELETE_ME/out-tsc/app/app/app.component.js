import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import * as i0 from "@angular/core";
export class AppComponent {
    showTop = signal(false);
    onScroll() {
        this.showTop.set((window.scrollY || 0) > 600);
    }
    toTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    static ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 7, vars: 2, consts: [["type", "button", "aria-label", "\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19", 1, "to-top", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 19V5M5 12l7-7 7 7"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-navbar");
            i0.ɵɵelementStart(1, "main");
            i0.ɵɵelement(2, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "app-footer");
            i0.ɵɵelementStart(4, "button", 0);
            i0.ɵɵlistener("click", function AppComponent_Template_button_click_4_listener() { return ctx.toTop(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 1);
            i0.ɵɵelement(6, "path", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("is-on", ctx.showTop());
        } }, dependencies: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] { display: block; }\n\n\n\n.to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  z-index: 50;\n  width: 54px; height: 54px;\n  border-radius: 16px;\n  border: 1px solid var(--line);\n  background: rgba(255, 255, 255, .94);\n  color: var(--navy-700);\n  box-shadow: var(--shadow-md);\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  font-size: 22.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(12px);\n  transition: opacity .3s var(--ease), transform .3s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.to-top.is-on[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n}\n\n@media (max-width: 560px) {\n  .to-top[_ngcontent-%COMP%] { width: 48px; height: 48px; }\n}\n\n@media print {\n  .to-top[_ngcontent-%COMP%] { display: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent], template: "<app-navbar />\n<main>\n  <router-outlet />\n</main>\n<app-footer />\n\n<button class=\"to-top\" [class.is-on]=\"showTop()\" (click)=\"toTop()\"\n        type=\"button\" aria-label=\"\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\">\n  <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"\n       stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <path d=\"M12 19V5M5 12l7-7 7 7\" />\n  </svg>\n</button>\n", styles: ["/* \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07\u0E40\u0E27\u0E47\u0E1A */\n:host { display: block; }\n\n/* ---------- \u0E1B\u0E38\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 ---------- */\n.to-top {\n  position: fixed;\n  right: 20px;\n  bottom: calc(20px + env(safe-area-inset-bottom));\n  z-index: 50;\n  width: 54px; height: 54px;\n  border-radius: 16px;\n  border: 1px solid var(--line);\n  background: rgba(255, 255, 255, .94);\n  color: var(--navy-700);\n  box-shadow: var(--shadow-md);\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  font-size: 22.5px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(12px);\n  transition: opacity .3s var(--ease), transform .3s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.to-top.is-on {\n  opacity: 1;\n  pointer-events: auto;\n  transform: none;\n}\n\n@media (max-width: 560px) {\n  .to-top { width: 48px; height: 48px; }\n}\n\n@media print {\n  .to-top { display: none !important; }\n}\n"] }]
    }], null, { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=app.component.js.map