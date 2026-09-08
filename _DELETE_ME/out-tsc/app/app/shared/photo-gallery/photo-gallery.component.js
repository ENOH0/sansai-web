import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PhotoGalleryComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.lead);
} }
function PhotoGalleryComponent_figure_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "figure", 8)(1, "button", 9);
    i0.ɵɵlistener("click", function PhotoGalleryComponent_figure_6_Template_button_click_1_listener() { const p_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.open(p_r3)); });
    i0.ɵɵelement(2, "img", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "figcaption", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵproperty("revealDelay", i_r4 % 4 * 70);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21: " + p_r3.caption);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", p_r3.src, i0.ɵɵsanitizeUrl)("alt", p_r3.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r3.caption);
} }
function PhotoGalleryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵlistener("click", function PhotoGalleryComponent_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.close()); });
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵtext(2, "\u2715");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 14);
    i0.ɵɵelementStart(4, "p", 15);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.lightbox.src, i0.ɵɵsanitizeUrl)("alt", ctx_r0.lightbox.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.lightbox.caption);
} }
/** แกลเลอรีภาพกิจกรรม — แตะที่ภาพเพื่อดูขนาดเต็ม */
export class PhotoGalleryComponent {
    title = 'ภาพกิจกรรม';
    lead = '';
    items = [];
    lightbox = null;
    open(p) { this.lightbox = p; }
    close() { this.lightbox = null; }
    static ɵfac = function PhotoGalleryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PhotoGalleryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PhotoGalleryComponent, selectors: [["app-photo-gallery"]], inputs: { title: "title", lead: "lead", items: "items" }, decls: 8, vars: 4, consts: [["appReveal", "", 1, "sec-head"], [1, "sec-title", 2, "font-size", "22px"], [1, "sec-rule"], ["class", "sec-lead", "style", "margin:-8px 0 22px", 4, "ngIf"], [1, "gal-grid"], ["class", "gal-item", "appReveal", "zoom", 3, "revealDelay", 4, "ngFor", "ngForOf"], ["class", "gal-lightbox", 3, "click", 4, "ngIf"], [1, "sec-lead", 2, "margin", "-8px 0 22px"], ["appReveal", "zoom", 1, "gal-item", 3, "revealDelay"], ["type", "button", 1, "gal-btn", 3, "click"], ["loading", "lazy", "decoding", "async", 1, "gal-img", 3, "src", "alt"], [1, "gal-cap"], [1, "gal-lightbox", 3, "click"], ["type", "button", "aria-label", "\u0E1B\u0E34\u0E14", 1, "gal-close"], [3, "src", "alt"], [1, "gal-lb-cap"]], template: function PhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h3", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PhotoGalleryComponent_p_4_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtemplate(6, PhotoGalleryComponent_figure_6_Template, 5, 5, "figure", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, PhotoGalleryComponent_div_7_Template, 6, 3, "div", 6);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.lead);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.lightbox);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RevealDirective], styles: ["[_nghost-%COMP%] { display: block; }\n\n.gal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n}\n\n.gal-item[_ngcontent-%COMP%] { margin: 0; }\n\n.gal-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0;\n  border: 1px solid var(--line);\n  border-radius: var(--radius-sm);\n  background: #fff;\n  cursor: zoom-in;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.gal-btn[_ngcontent-%COMP%]:active { transform: scale(.98); }\n@media (hover: hover) {\n  .gal-btn[_ngcontent-%COMP%]:hover { box-shadow: var(--shadow-md); }\n}\n\n.gal-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n  background: var(--navy-50);\n}\n\n.gal-cap[_ngcontent-%COMP%] {\n  margin: 10px 2px 0;\n  color: var(--ink-soft);\n  font-size: 15.5px;\n  line-height: 1.55;\n}\n\n\n\n.gal-lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: grid;\n  place-content: center;\n  gap: 14px;\n  padding: 28px;\n  background: rgba(8, 21, 47, .93);\n  cursor: zoom-out;\n}\n.gal-lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: min(1100px, 92vw);\n  max-height: 78vh;\n  border-radius: 10px;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .5);\n}\n.gal-lb-cap[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #e8f0ff;\n  font-size: 17px;\n  text-align: center;\n}\n.gal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px; right: 18px;\n  width: 48px; height: 48px;\n  color: #fff;\n  font-size: 22.5px;\n  border: 1px solid rgba(255,255,255,.35);\n  border-radius: 50%;\n  background: rgba(255,255,255,.12);\n  cursor: pointer;\n}\n\n@media (max-width: 1024px) { .gal-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); } }\n@media (max-width: 834px)  { .gal-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); gap: 14px; } }\n@media (max-width: 520px)  { .gal-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhotoGalleryComponent, [{
        type: Component,
        args: [{ selector: 'app-photo-gallery', standalone: true, imports: [CommonModule, RevealDirective], template: "<div class=\"sec-head\" appReveal>\n  <h3 class=\"sec-title\" style=\"font-size:22px\">{{ title }}</h3>\n  <div class=\"sec-rule\"></div>\n</div>\n<p class=\"sec-lead\" *ngIf=\"lead\" style=\"margin:-8px 0 22px\">{{ lead }}</p>\n\n<div class=\"gal-grid\">\n  <figure class=\"gal-item\" *ngFor=\"let p of items; let i = index\"\n          appReveal=\"zoom\" [revealDelay]=\"(i % 4) * 70\">\n    <button type=\"button\" class=\"gal-btn\" (click)=\"open(p)\"\n            [attr.aria-label]=\"'\u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21: ' + p.caption\">\n      <img class=\"gal-img\" [src]=\"p.src\" [alt]=\"p.caption\" loading=\"lazy\" decoding=\"async\" />\n    </button>\n    <figcaption class=\"gal-cap\">{{ p.caption }}</figcaption>\n  </figure>\n</div>\n\n<div class=\"gal-lightbox\" *ngIf=\"lightbox\" (click)=\"close()\">\n  <button type=\"button\" class=\"gal-close\" aria-label=\"\u0E1B\u0E34\u0E14\">\u2715</button>\n  <img [src]=\"lightbox.src\" [alt]=\"lightbox.caption\" />\n  <p class=\"gal-lb-cap\">{{ lightbox.caption }}</p>\n</div>\n", styles: [":host { display: block; }\n\n.gal-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n}\n\n.gal-item { margin: 0; }\n\n.gal-btn {\n  display: block;\n  width: 100%;\n  padding: 0;\n  border: 1px solid var(--line);\n  border-radius: var(--radius-sm);\n  background: #fff;\n  cursor: zoom-in;\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  transition: transform .2s var(--ease), box-shadow .2s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.gal-btn:active { transform: scale(.98); }\n@media (hover: hover) {\n  .gal-btn:hover { box-shadow: var(--shadow-md); }\n}\n\n.gal-img {\n  display: block;\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  object-fit: cover;\n  background: var(--navy-50);\n}\n\n.gal-cap {\n  margin: 10px 2px 0;\n  color: var(--ink-soft);\n  font-size: 15.5px;\n  line-height: 1.55;\n}\n\n/* \u0E14\u0E39\u0E20\u0E32\u0E1E\u0E02\u0E19\u0E32\u0E14\u0E40\u0E15\u0E47\u0E21 */\n.gal-lightbox {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  display: grid;\n  place-content: center;\n  gap: 14px;\n  padding: 28px;\n  background: rgba(8, 21, 47, .93);\n  cursor: zoom-out;\n}\n.gal-lightbox img {\n  max-width: min(1100px, 92vw);\n  max-height: 78vh;\n  border-radius: 10px;\n  box-shadow: 0 30px 70px rgba(0, 0, 0, .5);\n}\n.gal-lb-cap {\n  margin: 0;\n  color: #e8f0ff;\n  font-size: 17px;\n  text-align: center;\n}\n.gal-close {\n  position: absolute;\n  top: 18px; right: 18px;\n  width: 48px; height: 48px;\n  color: #fff;\n  font-size: 22.5px;\n  border: 1px solid rgba(255,255,255,.35);\n  border-radius: 50%;\n  background: rgba(255,255,255,.12);\n  cursor: pointer;\n}\n\n@media (max-width: 1024px) { .gal-grid { grid-template-columns: repeat(3, 1fr); } }\n@media (max-width: 834px)  { .gal-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; } }\n@media (max-width: 520px)  { .gal-grid { grid-template-columns: 1fr; } }\n"] }]
    }], null, { title: [{
            type: Input
        }], lead: [{
            type: Input
        }], items: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PhotoGalleryComponent, { className: "PhotoGalleryComponent", filePath: "src/app/shared/photo-gallery/photo-gallery.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=photo-gallery.component.js.map