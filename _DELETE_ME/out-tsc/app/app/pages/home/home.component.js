import { Component, NgZone, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, DIMENSIONS, EVAL_LINK } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ({ $implicit: a0 });
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-image", "url(" + s_r1 + ")");
    i0.ɵɵclassProp("is-on", ctx_r2.current() === i_r2);
} }
function HomeComponent_ng_container_29_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function HomeComponent_ng_container_29_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 25);
    i0.ɵɵtemplate(1, HomeComponent_ng_container_29_a_1_ng_container_1_Template, 1, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const l_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    i0.ɵɵnextContext();
    const card_r7 = i0.ɵɵreference(31);
    i0.ɵɵproperty("routerLink", l_r5.path)("revealDelay", i_r6 * 70);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", card_r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, l_r5));
} }
function HomeComponent_ng_container_29_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function HomeComponent_ng_container_29_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 27);
    i0.ɵɵtemplate(1, HomeComponent_ng_container_29_a_2_ng_container_1_Template, 1, 0, "ng-container", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const l_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    i0.ɵɵnextContext();
    const card_r7 = i0.ɵɵreference(31);
    i0.ɵɵproperty("href", l_r5.url, i0.ɵɵsanitizeUrl)("revealDelay", i_r6 * 70);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", card_r7)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, l_r5));
} }
function HomeComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, HomeComponent_ng_container_29_a_1_Template, 2, 6, "a", 23)(2, HomeComponent_ng_container_29_a_2_Template, 2, 6, "a", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const l_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r5.path);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r5.url);
} }
function HomeComponent_ng_template_30_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01 ", l_r8.weight, " \u0E04\u0E30\u0E41\u0E19\u0E19");
} }
function HomeComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
    i0.ɵɵelementStart(1, "span", 29)(2, "span", 30)(3, "span", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, HomeComponent_ng_template_30_span_5_Template, 2, 1, "span", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 34);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 35);
    i0.ɵɵtext(11, "\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39 ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(12, "svg", 36);
    i0.ɵɵelement(13, "path", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const l_r8 = ctx.$implicit;
    i0.ɵɵstyleProp("background-image", "url(" + l_r8.image + ")");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(l_r8.no);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", l_r8.weight);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r8.sub);
} }
export class HomeComponent {
    school = SCHOOL;
    zone = inject(NgZone);
    /** ภาพพื้นหลังที่ไล่เปลี่ยนในหน้าปก */
    slides = [
        'gallery/d1/g08.jpg',
        'gallery/d1/g10.jpg',
        'gallery/d1/g15.jpg',
        'gallery/d3/g12.jpg',
        'gallery/d1/g16.jpg'
    ];
    current = signal(0);
    timer;
    links = [
        ...DIMENSIONS.map(d => ({
            no: String(d.no), name: d.name, sub: d.desc, weight: d.weight,
            path: d.path, image: `gallery/d${d.no}/g0${[6, 1, 2, 2, 7][d.no - 1]}.jpg`
        })),
        {
            no: '★', name: 'รางวัลเชิงประจักษ์',
            sub: 'รางวัลของนักเรียนและครู พร้อมภาพหลักฐานเชิงประจักษ์ ระดับนานาชาติ ระดับชาติ และระดับภูมิภาค',
            path: '/awards', image: 'gallery/d1/g02.jpg'
        },
        {
            no: '↗', name: EVAL_LINK.label,
            sub: 'แบบฟอร์มสำหรับคณะกรรมการเลือกรายการอาหารและชุดการแสดงในวันประเมิน (เปิดในแท็บใหม่)',
            url: EVAL_LINK.url, image: 'gallery/d1/g16.jpg'
        }
    ];
    ngOnInit() {
        // เปลี่ยนภาพพื้นหลังนอก zone เพื่อไม่ให้ Angular ตรวจสอบทั้งหน้าทุก 6 วินาที
        this.zone.runOutsideAngular(() => {
            this.timer = window.setInterval(() => {
                this.zone.run(() => this.current.set((this.current() + 1) % this.slides.length));
            }, 6000);
        });
    }
    ngOnDestroy() {
        if (this.timer !== undefined)
            clearInterval(this.timer);
    }
    static ɵfac = function HomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 32, vars: 7, consts: [["card", ""], ["aria-hidden", "true", 1, "cover-bg"], [1, "cover-media"], ["class", "cover-slide", 3, "is-on", "background-image", 4, "ngFor", "ngForOf"], [1, "cover-veil"], [1, "cover"], [1, "cover-inner"], [1, "cover-eyebrow"], [1, "cover-title"], [1, "cover-rule"], [1, "cover-sub"], ["routerLink", "/dimension-1", 1, "cover-cta"], ["href", "#contents", "aria-label", "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E14\u0E39\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D", 1, "cover-scroll"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M12 5v14M5 12l7 7 7-7"], ["id", "contents", 1, "section", "contents"], [1, "wrap"], ["appReveal", "", 1, "sec-head"], [1, "sec-title"], [1, "sec-rule"], [1, "toc"], [4, "ngFor", "ngForOf"], [1, "cover-slide"], ["class", "toc-card", "appReveal", "zoom", 3, "routerLink", "revealDelay", 4, "ngIf"], ["class", "toc-card", "target", "_blank", "rel", "noopener", "appReveal", "zoom", 3, "href", "revealDelay", 4, "ngIf"], ["appReveal", "zoom", 1, "toc-card", 3, "routerLink", "revealDelay"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener", "appReveal", "zoom", 1, "toc-card", 3, "href", "revealDelay"], ["aria-hidden", "true", 1, "toc-photo"], [1, "toc-body"], [1, "toc-top"], [1, "toc-no"], ["class", "toc-weight", 4, "ngIf"], [1, "toc-name"], [1, "toc-sub"], [1, "toc-go"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "toc-weight"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵtemplate(2, HomeComponent_div_2_Template, 1, 4, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 5)(5, "div", 6)(6, "p", 7);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1", 8);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "div", 9);
            i0.ɵɵelementStart(11, "p", 10);
            i0.ɵɵtext(12);
            i0.ɵɵelement(13, "br");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 11);
            i0.ɵɵtext(16, "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "a", 12)(18, "span");
            i0.ɵɵtext(19, "\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(20, "svg", 13);
            i0.ɵɵelement(21, "path", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "section", 15)(23, "div", 16)(24, "div", 17)(25, "h2", 18);
            i0.ɵɵtext(26, "\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 20);
            i0.ɵɵtemplate(29, HomeComponent_ng_container_29_Template, 3, 2, "ng-container", 21);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(30, HomeComponent_ng_template_30_Template, 14, 6, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.slides);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.school.award, " \u00B7 ", ctx.school.level, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.school.name);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 ", ctx.school.academicYear, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.school.area, " ");
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.links);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, RouterLink, RevealDirective], styles: ["\n\n.cover[_ngcontent-%COMP%] {\n  position: relative;\n  \n\n  min-height: 100svh;\n  display: grid;\n  place-items: center;\n  padding: calc(var(--nav-h) + 40px) 24px 96px;\n  overflow: hidden;\n  isolation: isolate;\n}\n\n\n\n\n.cover-bg[_ngcontent-%COMP%] { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.cover-media[_ngcontent-%COMP%] { position: absolute; inset: 0; }\n\n.cover-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transform: scale(1.06);\n  transition: opacity 1.6s var(--ease), transform 7s linear;\n}\n.cover-slide.is-on[_ngcontent-%COMP%] { opacity: 1; transform: scale(1); }\n\n\n\n.cover-veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  \n\n\n\n  background:\n    linear-gradient(180deg, rgba(8, 21, 47, .62) 0%, rgba(8, 21, 47, .48) 45%, rgba(8, 21, 47, .68) 100%),\n    radial-gradient(ellipse at 50% 46%, rgba(8, 21, 47, .12), rgba(8, 21, 47, .58) 78%);\n}\n\n.cover-inner[_ngcontent-%COMP%] {\n  max-width: 940px;\n  text-align: center;\n  color: #fff;\n}\n\n.cover-eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  color: var(--gold-400);\n  font-size: clamp(14.5px, 1.6vw, 18px);\n  font-weight: 700;\n  letter-spacing: .12em;\n  animation: _ngcontent-%COMP%_coverRise .9s var(--ease) both;\n}\n\n.cover-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-family: 'Sarabun', sans-serif;\n  font-size: clamp(45px, 7.4vw, 98.5px);\n  font-weight: 700;\n  line-height: 1.08;\n  letter-spacing: -.01em;\n  text-shadow: 0 4px 30px rgba(0, 0, 0, .35);\n  animation: _ngcontent-%COMP%_coverRise .9s .12s var(--ease) both;\n}\n\n.cover-rule[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 4px;\n  margin: 28px auto;\n  border-radius: 2px;\n  background: linear-gradient(90deg, var(--gold-400), var(--gold-600));\n  animation: _ngcontent-%COMP%_coverRise .9s .24s var(--ease) both;\n}\n\n.cover-sub[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 640px;\n  color: #d9e5f8;\n  font-size: clamp(17px, 1.9vw, 20px);\n  line-height: 1.85;\n  animation: _ngcontent-%COMP%_coverRise .9s .36s var(--ease) both;\n}\n\n.cover-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 56px;\n  margin-top: 38px;\n  padding: 0 40px;\n  color: var(--navy-900);\n  font-size: 19px;\n  font-weight: 800;\n  text-decoration: none;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--gold-400), var(--gold-500));\n  box-shadow: 0 14px 34px rgba(212, 165, 55, .34);\n  animation: _ngcontent-%COMP%_coverRise .9s .48s var(--ease) both;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.cover-cta[_ngcontent-%COMP%]:active { transform: scale(.97); }\n@media (hover: hover) {\n  .cover-cta[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(212, 165, 55, .45); }\n}\n\n.cover-scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: max(26px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  display: grid;\n  justify-items: center;\n  gap: 6px;\n  color: #cfe0fa;\n  font-size: 14.5px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-decoration: none;\n  animation: _ngcontent-%COMP%_coverRise .9s .7s var(--ease) both;\n}\n.cover-scroll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_coverBob 2.2s ease-in-out infinite; }\n\n@keyframes _ngcontent-%COMP%_coverRise {\n  from { opacity: 0; transform: translateY(26px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n@keyframes _ngcontent-%COMP%_coverBob {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(6px); }\n}\n\n\n\n\n\n.contents[_ngcontent-%COMP%] { background: transparent; }\n.contents[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .6); }\n\n.toc[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 22px;\n}\n\n.toc-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  text-decoration: none;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  transition: transform .26s var(--ease), box-shadow .26s var(--ease), border-color .26s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.toc-card[_ngcontent-%COMP%]:active { transform: scale(.985); }\n@media (hover: hover) {\n  .toc-card[_ngcontent-%COMP%]:hover { transform: translateY(-6px); border-color: var(--navy-200); box-shadow: var(--shadow-lg); }\n  .toc-card[_ngcontent-%COMP%]:hover   .toc-photo[_ngcontent-%COMP%] { transform: scale(1.06); }\n  .toc-card[_ngcontent-%COMP%]:hover   .toc-go[_ngcontent-%COMP%] { color: var(--gold-600); }\n}\n\n.toc-photo[_ngcontent-%COMP%] {\n  display: block;\n  height: 168px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--navy-100);\n  transition: transform .5s var(--ease);\n}\n\n.toc-body[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: 8px;\n  padding: 20px 22px 22px;\n}\n\n.toc-top[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n\n.toc-no[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  color: #fff;\n  font-family: 'Sarabun', sans-serif;\n  font-size: 21.5px;\n  font-weight: 700;\n  border-radius: 11px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n}\n\n.toc-weight[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  color: var(--navy-800);\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 999px;\n  background: var(--navy-50);\n}\n\n.toc-name[_ngcontent-%COMP%] {\n  color: var(--navy-900);\n  font-size: 21.5px;\n  font-weight: 800;\n  line-height: 1.35;\n}\n\n.toc-sub[_ngcontent-%COMP%] {\n  color: var(--ink-soft);\n  font-size: 16px;\n  line-height: 1.65;\n}\n\n.toc-go[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 4px;\n  color: var(--navy-600);\n  font-size: 16px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n\n\n@media (max-width: 900px) { .toc[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); } }\n\n\n\n@media (max-width: 834px) {\n  .toc[_ngcontent-%COMP%] { gap: 16px; }\n  .toc-photo[_ngcontent-%COMP%] { height: 140px; }\n  .toc-body[_ngcontent-%COMP%] { padding: 16px 18px 18px; }\n  .toc-name[_ngcontent-%COMP%] { font-size: 19px; }\n}\n\n@media (max-width: 560px) {\n  .toc[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .toc-photo[_ngcontent-%COMP%] { height: 160px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cover-eyebrow[_ngcontent-%COMP%], .cover-title[_ngcontent-%COMP%], .cover-rule[_ngcontent-%COMP%], .cover-sub[_ngcontent-%COMP%], .cover-cta[_ngcontent-%COMP%], .cover-scroll[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .cover-slide[_ngcontent-%COMP%] { transition: opacity .4s linear; transform: none; }\n  .cover-scroll[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { animation: none !important; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', standalone: true, imports: [CommonModule, RouterLink, RevealDirective], template: "<!-- \u0E20\u0E32\u0E1E\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07 \u0E15\u0E23\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D\u0E15\u0E25\u0E2D\u0E14\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E19\u0E49\u0E32 -->\n<div class=\"cover-bg\" aria-hidden=\"true\">\n  <div class=\"cover-media\">\n    <div class=\"cover-slide\" *ngFor=\"let s of slides; let i = index\"\n         [class.is-on]=\"current() === i\" [style.background-image]=\"'url(' + s + ')'\"></div>\n  </div>\n  <div class=\"cover-veil\"></div>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"cover\">\n  <div class=\"cover-inner\">\n    <p class=\"cover-eyebrow\">{{ school.award }} \u00B7 {{ school.level }}</p>\n    <h1 class=\"cover-title\">{{ school.name }}</h1>\n    <div class=\"cover-rule\"></div>\n    <p class=\"cover-sub\">\n      \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32 {{ school.academicYear }}<br />\n      {{ school.area }}\n    </p>\n    <a class=\"cover-cta\" routerLink=\"/dimension-1\">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1</a>\n  </div>\n\n  <a class=\"cover-scroll\" href=\"#contents\" aria-label=\"\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E14\u0E39\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\">\n    <span>\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D</span>\n    <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n         stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n      <path d=\"M12 5v14M5 12l7 7 7-7\" />\n    </svg>\n  </a>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section contents\" id=\"contents\">\n  <div class=\"wrap\">\n    <div class=\"sec-head\" appReveal>\n      <h2 class=\"sec-title\">\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D</h2>\n      <div class=\"sec-rule\"></div>\n    </div>\n\n    <div class=\"toc\">\n      <ng-container *ngFor=\"let l of links; let i = index\">\n        <a class=\"toc-card\" *ngIf=\"l.path\" [routerLink]=\"l.path\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n          <ng-container *ngTemplateOutlet=\"card; context: { $implicit: l }\" />\n        </a>\n        <a class=\"toc-card\" *ngIf=\"l.url\" [href]=\"l.url\" target=\"_blank\" rel=\"noopener\"\n           appReveal=\"zoom\" [revealDelay]=\"i * 70\">\n          <ng-container *ngTemplateOutlet=\"card; context: { $implicit: l }\" />\n        </a>\n      </ng-container>\n    </div>\n  </div>\n</section>\n\n<ng-template #card let-l>\n  <span class=\"toc-photo\" [style.background-image]=\"'url(' + l.image + ')'\" aria-hidden=\"true\"></span>\n  <span class=\"toc-body\">\n    <span class=\"toc-top\">\n      <span class=\"toc-no\">{{ l.no }}</span>\n      <span class=\"toc-weight\" *ngIf=\"l.weight\">\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01 {{ l.weight }} \u0E04\u0E30\u0E41\u0E19\u0E19</span>\n    </span>\n    <span class=\"toc-name\">{{ l.name }}</span>\n    <span class=\"toc-sub\">{{ l.sub }}</span>\n    <span class=\"toc-go\">\u0E40\u0E1B\u0E34\u0E14\u0E14\u0E39\n      <svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n           stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n        <path d=\"M5 12h14M12 5l7 7-7 7\" />\n      </svg>\n    </span>\n  </span>\n</ng-template>\n", styles: ["/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E01 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n.cover {\n  position: relative;\n  /* 100svh \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D\u0E1E\u0E2D\u0E14\u0E35\u0E1A\u0E19 iPad \u0E44\u0E21\u0E48\u0E42\u0E14\u0E19\u0E41\u0E16\u0E1A\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E01\u0E34\u0E19 */\n  min-height: 100svh;\n  display: grid;\n  place-items: center;\n  padding: calc(var(--nav-h) + 40px) 24px 96px;\n  overflow: hidden;\n  isolation: isolate;\n}\n\n/* \u0E15\u0E23\u0E36\u0E07\u0E44\u0E27\u0E49\u0E01\u0E31\u0E1A\u0E08\u0E2D \u0E20\u0E32\u0E1E\u0E08\u0E36\u0E07\u0E40\u0E15\u0E47\u0E21\u0E08\u0E2D\u0E15\u0E25\u0E2D\u0E14\u0E41\u0E21\u0E49\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E25\u0E07\u0E14\u0E39\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\n   z-index \u0E15\u0E34\u0E14\u0E25\u0E1A \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E41\u0E15\u0E48\u0E22\u0E31\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E48\u0E07 */\n.cover-bg { position: fixed; inset: 0; z-index: -1; background: var(--navy-900); }\n\n.cover-media { position: absolute; inset: 0; }\n\n.cover-slide {\n  position: absolute;\n  inset: 0;\n  background-size: cover;\n  background-position: center;\n  opacity: 0;\n  transform: scale(1.06);\n  transition: opacity 1.6s var(--ease), transform 7s linear;\n}\n.cover-slide.is-on { opacity: 1; transform: scale(1); }\n\n/* \u0E21\u0E48\u0E32\u0E19\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E21 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E02\u0E32\u0E27\u0E2D\u0E48\u0E32\u0E19\u0E0A\u0E31\u0E14\u0E17\u0E38\u0E01\u0E20\u0E32\u0E1E */\n.cover-veil {\n  position: absolute;\n  inset: 0;\n  /* \u2500\u2500 \u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E21\u0E02\u0E2D\u0E07\u0E21\u0E48\u0E32\u0E19 \u2500\u2500 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E49\u0E32\u0E22\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30 rgba() \u0E04\u0E37\u0E2D\u0E04\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E17\u0E36\u0E1A 0\u20131\n     0 = \u0E43\u0E2A \u0E44\u0E21\u0E48\u0E21\u0E35\u0E21\u0E48\u0E32\u0E19 \u00B7 1 = \u0E17\u0E36\u0E1A\u0E2A\u0E19\u0E34\u0E17 \u0E22\u0E34\u0E48\u0E07\u0E40\u0E25\u0E02\u0E19\u0E49\u0E2D\u0E22\u0E22\u0E34\u0E48\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E0A\u0E31\u0E14\u0E02\u0E36\u0E49\u0E19\n     \u0E16\u0E49\u0E32\u0E25\u0E14\u0E41\u0E25\u0E49\u0E27\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E02\u0E32\u0E27\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2D\u0E48\u0E32\u0E19\u0E22\u0E32\u0E01 \u0E43\u0E2B\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E31\u0E1A\u0E17\u0E35\u0E25\u0E30 .05 */\n  background:\n    linear-gradient(180deg, rgba(8, 21, 47, .62) 0%, rgba(8, 21, 47, .48) 45%, rgba(8, 21, 47, .68) 100%),\n    radial-gradient(ellipse at 50% 46%, rgba(8, 21, 47, .12), rgba(8, 21, 47, .58) 78%);\n}\n\n.cover-inner {\n  max-width: 940px;\n  text-align: center;\n  color: #fff;\n}\n\n.cover-eyebrow {\n  margin: 0 0 22px;\n  color: var(--gold-400);\n  font-size: clamp(14.5px, 1.6vw, 18px);\n  font-weight: 700;\n  letter-spacing: .12em;\n  animation: coverRise .9s var(--ease) both;\n}\n\n.cover-title {\n  margin: 0;\n  color: #fff;\n  font-family: 'Sarabun', sans-serif;\n  font-size: clamp(45px, 7.4vw, 98.5px);\n  font-weight: 700;\n  line-height: 1.08;\n  letter-spacing: -.01em;\n  text-shadow: 0 4px 30px rgba(0, 0, 0, .35);\n  animation: coverRise .9s .12s var(--ease) both;\n}\n\n.cover-rule {\n  width: 96px;\n  height: 4px;\n  margin: 28px auto;\n  border-radius: 2px;\n  background: linear-gradient(90deg, var(--gold-400), var(--gold-600));\n  animation: coverRise .9s .24s var(--ease) both;\n}\n\n.cover-sub {\n  margin: 0 auto;\n  max-width: 640px;\n  color: #d9e5f8;\n  font-size: clamp(17px, 1.9vw, 20px);\n  line-height: 1.85;\n  animation: coverRise .9s .36s var(--ease) both;\n}\n\n.cover-cta {\n  display: inline-flex;\n  align-items: center;\n  min-height: 56px;\n  margin-top: 38px;\n  padding: 0 40px;\n  color: var(--navy-900);\n  font-size: 19px;\n  font-weight: 800;\n  text-decoration: none;\n  border-radius: 999px;\n  background: linear-gradient(135deg, var(--gold-400), var(--gold-500));\n  box-shadow: 0 14px 34px rgba(212, 165, 55, .34);\n  animation: coverRise .9s .48s var(--ease) both;\n  transition: transform .22s var(--ease), box-shadow .22s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.cover-cta:active { transform: scale(.97); }\n@media (hover: hover) {\n  .cover-cta:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(212, 165, 55, .45); }\n}\n\n.cover-scroll {\n  position: absolute;\n  bottom: max(26px, env(safe-area-inset-bottom));\n  left: 50%;\n  transform: translateX(-50%);\n  display: grid;\n  justify-items: center;\n  gap: 6px;\n  color: #cfe0fa;\n  font-size: 14.5px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-decoration: none;\n  animation: coverRise .9s .7s var(--ease) both;\n}\n.cover-scroll svg { animation: coverBob 2.2s ease-in-out infinite; }\n\n@keyframes coverRise {\n  from { opacity: 0; transform: translateY(26px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n@keyframes coverBob {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(6px); }\n}\n\n/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */\n/* \u0E1E\u0E37\u0E49\u0E19\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E47\u0E19\u0E20\u0E32\u0E1E\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E17\u0E35\u0E48\u0E15\u0E23\u0E36\u0E07\u0E2D\u0E22\u0E39\u0E48 */\n.contents { background: transparent; }\n.contents .sec-title { color: #fff; text-shadow: 0 2px 18px rgba(8, 21, 47, .6); }\n\n.toc {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 22px;\n}\n\n.toc-card {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  text-decoration: none;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: #fff;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  transition: transform .26s var(--ease), box-shadow .26s var(--ease), border-color .26s var(--ease);\n  -webkit-tap-highlight-color: transparent;\n}\n.toc-card:active { transform: scale(.985); }\n@media (hover: hover) {\n  .toc-card:hover { transform: translateY(-6px); border-color: var(--navy-200); box-shadow: var(--shadow-lg); }\n  .toc-card:hover .toc-photo { transform: scale(1.06); }\n  .toc-card:hover .toc-go { color: var(--gold-600); }\n}\n\n.toc-photo {\n  display: block;\n  height: 168px;\n  background-size: cover;\n  background-position: center;\n  background-color: var(--navy-100);\n  transition: transform .5s var(--ease);\n}\n\n.toc-body {\n  display: grid;\n  align-content: start;\n  gap: 8px;\n  padding: 20px 22px 22px;\n}\n\n.toc-top { display: flex; align-items: center; gap: 10px; }\n\n.toc-no {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  color: #fff;\n  font-family: 'Sarabun', sans-serif;\n  font-size: 21.5px;\n  font-weight: 700;\n  border-radius: 11px;\n  background: linear-gradient(135deg, var(--navy-700), var(--navy-500));\n}\n\n.toc-weight {\n  padding: 5px 11px;\n  color: var(--navy-800);\n  font-size: 14px;\n  font-weight: 700;\n  border-radius: 999px;\n  background: var(--navy-50);\n}\n\n.toc-name {\n  color: var(--navy-900);\n  font-size: 21.5px;\n  font-weight: 800;\n  line-height: 1.35;\n}\n\n.toc-sub {\n  color: var(--ink-soft);\n  font-size: 16px;\n  line-height: 1.65;\n}\n\n.toc-go {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 4px;\n  color: var(--navy-600);\n  font-size: 16px;\n  font-weight: 800;\n  transition: color .2s var(--ease);\n}\n\n/* iPad \u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19 (1180px) \u0E22\u0E31\u0E07\u0E44\u0E14\u0E49 3 \u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C \u0E40\u0E2B\u0E47\u0E19\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D\u0E40\u0E01\u0E37\u0E2D\u0E1A\u0E04\u0E23\u0E1A\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E14\u0E35\u0E22\u0E27 */\n@media (max-width: 900px) { .toc { grid-template-columns: repeat(2, 1fr); } }\n\n/* iPad \u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07 \u2014 2 \u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C \u0E22\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E4C\u0E14\u0E25\u0E07\u0E40\u0E25\u0E47\u0E01\u0E19\u0E49\u0E2D\u0E22 */\n@media (max-width: 834px) {\n  .toc { gap: 16px; }\n  .toc-photo { height: 140px; }\n  .toc-body { padding: 16px 18px 18px; }\n  .toc-name { font-size: 19px; }\n}\n\n@media (max-width: 560px) {\n  .toc { grid-template-columns: 1fr; }\n  .toc-photo { height: 160px; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .cover-eyebrow, .cover-title, .cover-rule, .cover-sub, .cover-cta, .cover-scroll {\n    animation: none !important;\n  }\n  .cover-slide { transition: opacity .4s linear; transform: none; }\n  .cover-scroll svg { animation: none !important; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=home.component.js.map