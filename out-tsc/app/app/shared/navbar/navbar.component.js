import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SCHOOL, NAV_ITEMS, EVAL_LINK } from '../../data/school.data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ exact: a0 });
function NavbarComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.path)("routerLinkActiveOptions", i0.ɵɵpureFunction1(3, _c0, item_r1.path === "/"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.short);
} }
function NavbarComponent__svg_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "line", 16)(2, "line", 17)(3, "line", 18);
    i0.ɵɵelementContainerEnd();
} }
function NavbarComponent__svg_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "line", 19)(2, "line", 20);
    i0.ɵɵelementContainerEnd();
} }
function NavbarComponent_nav_18_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function NavbarComponent_nav_18_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r5.path)("routerLinkActiveOptions", i0.ɵɵpureFunction1(3, _c0, item_r5.path === "/"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.label);
} }
function NavbarComponent_nav_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 21);
    i0.ɵɵtemplate(1, NavbarComponent_nav_18_a_1_Template, 2, 5, "a", 22);
    i0.ɵɵelementStart(2, "a", 23);
    i0.ɵɵlistener("click", function NavbarComponent_nav_18_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.close()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.items);
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r3.evalLink.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.evalLink.label);
} }
/**
 * แถบนำทางด้านบน (ตรึงอยู่บนสุดเสมอ)
 * - บน iPad แนวตั้งจะยุบเป็นปุ่มเมนู เพื่อให้พื้นที่อ่านเนื้อหาเต็มที่
 * - มีแถบแสดงความคืบหน้าการอ่านของหน้า
 */
export class NavbarComponent {
    school = SCHOOL;
    items = NAV_ITEMS;
    evalLink = EVAL_LINK;
    open = signal(false);
    scrolled = signal(false);
    progress = signal(0);
    router = inject(Router);
    constructor() {
        // ปิดเมนูอัตโนมัติเมื่อเปลี่ยนหน้า
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe(() => this.close());
    }
    onScroll() {
        const y = window.scrollY || document.documentElement.scrollTop;
        this.scrolled.set(y > 12);
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        this.progress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    }
    toggle() { this.open.update(v => !v); }
    close() { this.open.set(false); }
    static ɵfac = function NavbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 19, vars: 15, consts: [[1, "nav"], [1, "wrap-wide", "nav-inner"], ["routerLink", "/", 1, "brand", 3, "click"], ["src", "school-logo.png", "alt", "\u0E15\u0E23\u0E32\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21", 1, "brand-mark"], [1, "brand-text"], [1, "brand-name"], [1, "brand-sub"], [1, "nav-links"], ["class", "nav-link", "routerLinkActive", "is-active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 1, "nav-link", 3, "href"], ["type", "button", "aria-label", "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39", 1, "nav-toggle", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round"], [4, "ngIf"], [1, "progress"], ["class", "nav-drawer", 4, "ngIf"], ["routerLinkActive", "is-active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["x1", "3", "y1", "7", "x2", "21", "y2", "7"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "17", "x2", "21", "y2", "17"], ["x1", "5", "y1", "5", "x2", "19", "y2", "19"], ["x1", "19", "y1", "5", "x2", "5", "y2", "19"], [1, "nav-drawer"], ["class", "nav-link", "routerLinkActive", "is-active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 1, "nav-link", 3, "click", "href"], ["routerLinkActive", "is-active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.close(); });
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span", 4)(5, "span", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "nav", 7);
            i0.ɵɵtemplate(10, NavbarComponent_a_10_Template, 2, 5, "a", 8);
            i0.ɵɵelementStart(11, "a", 9);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "button", 10);
            i0.ɵɵlistener("click", function NavbarComponent_Template_button_click_13_listener() { return ctx.toggle(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(14, "svg", 11);
            i0.ɵɵtemplate(15, NavbarComponent__svg_ng_container_15_Template, 4, 0, "ng-container", 12)(16, NavbarComponent__svg_ng_container_16_Template, 3, 0, "ng-container", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(17, "div", 13);
            i0.ɵɵtemplate(18, NavbarComponent_nav_18_Template, 4, 3, "nav", 14);
        } if (rf & 2) {
            i0.ɵɵclassProp("is-scrolled", ctx.scrolled());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.school.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.school.award, " \u00B7 ", ctx.school.level, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance();
            i0.ɵɵproperty("href", ctx.evalLink.url, i0.ɵɵsanitizeUrl);
            i0.ɵɵattribute("aria-label", ctx.evalLink.label);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.evalLink.short);
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-expanded", ctx.open());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.progress(), "%");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.open());
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterLink, RouterLinkActive], styles: ["\n\r\n.nav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0; left: 0; right: 0;\r\n  z-index: 60;\r\n  height: var(--nav-h);\r\n  background: #fff;\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\r\n  backdrop-filter: saturate(180%) blur(14px);\r\n  border-bottom: 1px solid var(--line);\r\n  transition: box-shadow .3s var(--ease), background .3s var(--ease);\r\n  padding-top: env(safe-area-inset-top);\r\n}\r\n\r\n.nav.is-scrolled[_ngcontent-%COMP%] {\r\n  box-shadow: var(--shadow-sm);\r\n  background: #fff;\n}\r\n\r\n.nav-inner[_ngcontent-%COMP%] {\r\n  height: var(--nav-h);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n\n\r\n.brand[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; min-width: 0; }\r\n\r\n.brand-mark[_ngcontent-%COMP%] {\r\n  width: 44px; height: 44px;\r\n  flex: none;\r\n  display: block;\r\n  object-fit: contain;\r\n}\r\n\r\n.brand-text[_ngcontent-%COMP%] { line-height: 1.25; min-width: 0; }\r\n.brand-name[_ngcontent-%COMP%] { font-weight: 700; color: var(--navy-900); font-size: 18px; white-space: nowrap; }\r\n.brand-sub[_ngcontent-%COMP%] { font-size: 13px; color: var(--ink-mute); letter-spacing: .02em; white-space: nowrap; }\r\n\r\n\n\r\n.nav-links[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; margin-left: auto; }\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \n\r\n  min-height: 44px;\r\n  padding: 0 14px;\r\n  border-radius: 11px;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  color: var(--ink-soft);\r\n  white-space: nowrap;\r\n  transition: background .2s var(--ease), color .2s var(--ease), transform .2s var(--ease);\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:active { transform: scale(.96); }\r\n\r\n.nav-link.is-active[_ngcontent-%COMP%] {\r\n  background: var(--navy-600);\r\n  color: #fff;\r\n  box-shadow: 0 4px 14px rgba(30, 77, 158, .3);\r\n}\r\n\r\n\n\r\n@media (hover: hover) {\r\n  .nav-link[_ngcontent-%COMP%]:hover:not(.is-active) { background: var(--navy-50); color: var(--navy-700); }\r\n}\r\n\r\n\n\r\n.nav-toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n  margin-left: auto;\r\n  width: 46px; height: 46px;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--line);\r\n  background: #fff;\r\n  color: var(--navy-800);\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.nav-drawer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: calc(var(--nav-h) + env(safe-area-inset-top));\r\n  left: 0; right: 0;\r\n  z-index: 55;\r\n  background: #fff;\r\n  border-bottom: 1px solid var(--line);\r\n  box-shadow: var(--shadow-md);\r\n  padding: 12px 24px 18px;\r\n  display: grid;\r\n  gap: 6px;\r\n  transform-origin: top center;\r\n  animation: _ngcontent-%COMP%_drawerIn .28s var(--ease) both;\r\n  max-height: calc(100vh - var(--nav-h) - 20px);\r\n  overflow-y: auto;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_drawerIn {\r\n  from { opacity: 0; transform: translateY(-10px); }\r\n  to { opacity: 1; transform: none; }\r\n}\r\n\r\n.nav-drawer[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n  min-height: 52px;\r\n  font-size: 18px;\r\n}\r\n\r\n\n\r\n.progress[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: calc(var(--nav-h) + env(safe-area-inset-top));\r\n  left: 0;\r\n  height: 3px;\r\n  z-index: 61;\r\n  background: linear-gradient(90deg, var(--navy-500), var(--gold-500));\r\n  transition: width .1s linear;\r\n}\r\n\r\n\n\r\n\r\n\n\r\n@media (max-width: 1400px) {\r\n  .nav-links[_ngcontent-%COMP%] { display: none; }\r\n  .nav-toggle[_ngcontent-%COMP%] { display: inline-flex; }\r\n}\r\n\r\n@media (max-width: 834px) {\r\n  .brand-sub[_ngcontent-%COMP%] { display: none; }\r\n}\r\n\r\n@media print {\r\n  .nav[_ngcontent-%COMP%], .nav-drawer[_ngcontent-%COMP%], .progress[_ngcontent-%COMP%] { display: none !important; }\r\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: "<header class=\"nav\" [class.is-scrolled]=\"scrolled()\">\n  <div class=\"wrap-wide nav-inner\">\n    <a class=\"brand\" routerLink=\"/\" (click)=\"close()\">\n      <img class=\"brand-mark\" src=\"school-logo.png\" alt=\"\u0E15\u0E23\u0E32\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E2A\u0E31\u0E19\u0E17\u0E23\u0E32\u0E22\u0E27\u0E34\u0E17\u0E22\u0E32\u0E04\u0E21\" />\n      <span class=\"brand-text\">\n        <span class=\"brand-name\">{{ school.name }}</span>\n        <span class=\"brand-sub\">{{ school.award }} \u00B7 {{ school.level }}</span>\n      </span>\n    </a>\n\n    <nav class=\"nav-links\">\n      <a *ngFor=\"let item of items\"\n         class=\"nav-link\"\n         [routerLink]=\"item.path\"\n         routerLinkActive=\"is-active\"\n         [routerLinkActiveOptions]=\"{ exact: item.path === '/' }\">{{ item.short }}</a>\n\n      <a class=\"nav-link\" [href]=\"evalLink.url\" target=\"_blank\" rel=\"noopener\"\n         [attr.aria-label]=\"evalLink.label\">{{ evalLink.short }}</a>\n    </nav>\n\n    <button class=\"nav-toggle\" type=\"button\"\n            (click)=\"toggle()\"\n            [attr.aria-expanded]=\"open()\"\n            aria-label=\"\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n           stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\">\n        <ng-container *ngIf=\"!open()\">\n          <line x1=\"3\" y1=\"7\" x2=\"21\" y2=\"7\" />\n          <line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" />\n          <line x1=\"3\" y1=\"17\" x2=\"21\" y2=\"17\" />\n        </ng-container>\n        <ng-container *ngIf=\"open()\">\n          <line x1=\"5\" y1=\"5\" x2=\"19\" y2=\"19\" />\n          <line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\" />\n        </ng-container>\n      </svg>\n    </button>\n  </div>\n</header>\n\n<div class=\"progress\" [style.width.%]=\"progress()\"></div>\n\n<nav class=\"nav-drawer\" *ngIf=\"open()\">\n  <a *ngFor=\"let item of items\"\n     class=\"nav-link\"\n     [routerLink]=\"item.path\"\n     routerLinkActive=\"is-active\"\n     [routerLinkActiveOptions]=\"{ exact: item.path === '/' }\"\n     (click)=\"close()\">{{ item.label }}</a>\n\n  <a class=\"nav-link\" [href]=\"evalLink.url\" target=\"_blank\" rel=\"noopener\"\n     (click)=\"close()\">{{ evalLink.label }}</a>\n</nav>\n", styles: ["/* \u0E41\u0E16\u0E1A\u0E19\u0E33\u0E17\u0E32\u0E07\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 \u2014 \u0E15\u0E23\u0E36\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E19\u0E2A\u0E38\u0E14\u0E40\u0E2A\u0E21\u0E2D\u0E15\u0E32\u0E21\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49 */\r\n.nav {\r\n  position: fixed;\r\n  top: 0; left: 0; right: 0;\r\n  z-index: 60;\r\n  height: var(--nav-h);\r\n  background: #fff;\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\r\n  backdrop-filter: saturate(180%) blur(14px);\r\n  border-bottom: 1px solid var(--line);\r\n  transition: box-shadow .3s var(--ease), background .3s var(--ease);\r\n  padding-top: env(safe-area-inset-top);\r\n}\r\n\r\n.nav.is-scrolled {\r\n  box-shadow: var(--shadow-sm);\r\n  background: #fff;\n}\r\n\r\n.nav-inner {\r\n  height: var(--nav-h);\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n/* ---------- \u0E15\u0E23\u0E32\u0E41\u0E25\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 ---------- */\r\n.brand { display: flex; align-items: center; gap: 12px; min-width: 0; }\r\n\r\n.brand-mark {\r\n  width: 44px; height: 44px;\r\n  flex: none;\r\n  display: block;\r\n  object-fit: contain;\r\n}\r\n\r\n.brand-text { line-height: 1.25; min-width: 0; }\r\n.brand-name { font-weight: 700; color: var(--navy-900); font-size: 18px; white-space: nowrap; }\r\n.brand-sub { font-size: 13px; color: var(--ink-mute); letter-spacing: .02em; white-space: nowrap; }\r\n\r\n/* ---------- \u0E40\u0E21\u0E19\u0E39 ---------- */\r\n.nav-links { display: flex; align-items: center; gap: 4px; margin-left: auto; }\r\n\r\n.nav-link {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* \u0E2A\u0E39\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22 44px \u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E02\u0E2D\u0E07 Apple */\r\n  min-height: 44px;\r\n  padding: 0 14px;\r\n  border-radius: 11px;\r\n  font-size: 17px;\r\n  font-weight: 600;\r\n  color: var(--ink-soft);\r\n  white-space: nowrap;\r\n  transition: background .2s var(--ease), color .2s var(--ease), transform .2s var(--ease);\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.nav-link:active { transform: scale(.96); }\r\n\r\n.nav-link.is-active {\r\n  background: var(--navy-600);\r\n  color: #fff;\r\n  box-shadow: 0 4px 14px rgba(30, 77, 158, .3);\r\n}\r\n\r\n/* \u0E40\u0E2D\u0E1F\u0E40\u0E1F\u0E01\u0E15\u0E4C hover \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E21\u0E35\u0E40\u0E21\u0E32\u0E2A\u0E4C \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E04\u0E49\u0E32\u0E07\u0E1A\u0E19\u0E08\u0E2D\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A */\r\n@media (hover: hover) {\r\n  .nav-link:hover:not(.is-active) { background: var(--navy-50); color: var(--navy-700); }\r\n}\r\n\r\n/* ---------- \u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E08\u0E2D\u0E41\u0E04\u0E1A ---------- */\r\n.nav-toggle {\r\n  display: none;\r\n  margin-left: auto;\r\n  width: 46px; height: 46px;\r\n  border-radius: 12px;\r\n  border: 1px solid var(--line);\r\n  background: #fff;\r\n  color: var(--navy-800);\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.nav-drawer {\r\n  position: fixed;\r\n  top: calc(var(--nav-h) + env(safe-area-inset-top));\r\n  left: 0; right: 0;\r\n  z-index: 55;\r\n  background: #fff;\r\n  border-bottom: 1px solid var(--line);\r\n  box-shadow: var(--shadow-md);\r\n  padding: 12px 24px 18px;\r\n  display: grid;\r\n  gap: 6px;\r\n  transform-origin: top center;\r\n  animation: drawerIn .28s var(--ease) both;\r\n  max-height: calc(100vh - var(--nav-h) - 20px);\r\n  overflow-y: auto;\r\n}\r\n\r\n@keyframes drawerIn {\r\n  from { opacity: 0; transform: translateY(-10px); }\r\n  to { opacity: 1; transform: none; }\r\n}\r\n\r\n.nav-drawer .nav-link {\r\n  justify-content: flex-start;\r\n  min-height: 52px;\r\n  font-size: 18px;\r\n}\r\n\r\n/* ---------- \u0E41\u0E16\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E04\u0E37\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 ---------- */\r\n.progress {\r\n  position: fixed;\r\n  top: calc(var(--nav-h) + env(safe-area-inset-top));\r\n  left: 0;\r\n  height: 3px;\r\n  z-index: 61;\r\n  background: linear-gradient(90deg, var(--navy-500), var(--gold-500));\r\n  transition: width .1s linear;\r\n}\r\n\r\n/* iPad \u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\u0E25\u0E07\u0E21\u0E32 \u2014 \u0E22\u0E38\u0E1A\u0E40\u0E21\u0E19\u0E39\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E38\u0E48\u0E21 */\r\n/* \u0E22\u0E38\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E21\u0E19\u0E39\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48 1400px \u0E25\u0E07\u0E21\u0E32 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21 iPad \u0E17\u0E38\u0E01\u0E23\u0E38\u0E48\u0E19\u0E17\u0E31\u0E49\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E30\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19\r\n   (iPad Pro 12.9 \u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19 = 1366px) \u0E40\u0E21\u0E19\u0E39 8 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E08\u0E36\u0E07\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1A\u0E35\u0E22\u0E14\u0E01\u0E31\u0E19\u0E1A\u0E19\u0E41\u0E16\u0E1A\u0E40\u0E14\u0E35\u0E22\u0E27 */\r\n@media (max-width: 1400px) {\r\n  .nav-links { display: none; }\r\n  .nav-toggle { display: inline-flex; }\r\n}\r\n\r\n@media (max-width: 834px) {\r\n  .brand-sub { display: none; }\r\n}\r\n\r\n@media print {\r\n  .nav, .nav-drawer, .progress { display: none !important; }\r\n}\r\n"] }]
    }], () => [], { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/navbar/navbar.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=navbar.component.js.map