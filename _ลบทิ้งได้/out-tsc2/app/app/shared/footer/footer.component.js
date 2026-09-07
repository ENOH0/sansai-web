import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, NAV_ITEMS } from '../../data/school.data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FooterComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", item_r1.path);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r1.label);
} }
/** ท้ายหน้า — ข้อมูลติดต่อ สารบัญ และสังกัดของโรงเรียน */
export class FooterComponent {
    school = SCHOOL;
    items = NAV_ITEMS.filter(i => i.path !== '/');
    /** แปลงเป็นปีพุทธศักราช */
    year = new Date().getFullYear() + 543;
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FooterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["app-footer"]], decls: 36, vars: 14, consts: [[1, "foot"], [1, "wrap"], [1, "foot-grid"], [1, "foot-address"], [1, "foot-contact"], [4, "ngFor", "ngForOf"], [1, "foot-award"], [1, "foot-bottom"], [3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h4");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 3);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 4);
            i0.ɵɵtext(9);
            i0.ɵɵelement(10, "br");
            i0.ɵɵtext(11);
            i0.ɵɵelement(12, "br");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div")(15, "h4");
            i0.ɵɵtext(16, "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "ul");
            i0.ɵɵtemplate(18, FooterComponent_li_18_Template, 3, 2, "li", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div")(20, "h4");
            i0.ɵɵtext(21, "\u0E2A\u0E31\u0E07\u0E01\u0E31\u0E14");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "ul")(23, "li");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "li");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "li", 6);
            i0.ɵɵtext(28);
            i0.ɵɵelement(29, "br");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(31, "div", 7)(32, "span");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.school.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.school.address, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" \u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C ", ctx.school.phone, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" \u0E2D\u0E35\u0E40\u0E21\u0E25 ", ctx.school.email, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" \u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C ", ctx.school.website, " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.items);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.school.area);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.school.affiliation);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.school.award, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.school.level, " ", ctx.school.academicYear, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("\u00A9 ", ctx.year, " ", ctx.school.name, " \u2014 \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.school.philosophy);
        } }, dependencies: [CommonModule, i1.NgForOf, RouterLink], styles: ["\n\n.foot[_ngcontent-%COMP%] {\n  background: var(--navy-950);\n  color: rgba(255, 255, 255, .72);\n  padding: 48px 0 34px;\n}\n\n.foot[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { color: #fff; font-size: 17px; margin-bottom: 10px; }\n.foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: rgba(255, 255, 255, .8); }\n\n.foot-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  gap: 32px;\n}\n\n.foot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { list-style: none; margin: 0; padding: 0; font-size: 15px; }\n.foot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { margin-bottom: 7px; }\n\n.foot-address[_ngcontent-%COMP%] { font-size: 15px; line-height: 1.8; margin-bottom: 12px; }\n.foot-contact[_ngcontent-%COMP%] { font-size: 15px; margin: 0; }\n\n.foot-award[_ngcontent-%COMP%] { margin-top: 14px; color: var(--gold-400); font-weight: 700; }\n\n.foot-bottom[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, .13);\n  font-size: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n@media (max-width: 1024px) { .foot-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; } }\n@media (max-width: 834px)  { .foot-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{ selector: 'app-footer', standalone: true, imports: [CommonModule, RouterLink], template: "<footer class=\"foot\">\n  <div class=\"wrap\">\n    <div class=\"foot-grid\">\n      <div>\n        <h4>{{ school.name }}</h4>\n        <p class=\"foot-address\">\n          {{ school.address }}\n        </p>\n        <p class=\"foot-contact\">\n          \u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C {{ school.phone }}<br />\n          \u0E2D\u0E35\u0E40\u0E21\u0E25 {{ school.email }}<br />\n          \u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C {{ school.website }}\n        </p>\n      </div>\n\n      <div>\n        <h4>\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19</h4>\n        <ul>\n          <li *ngFor=\"let item of items\">\n            <a [routerLink]=\"item.path\">{{ item.label }}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div>\n        <h4>\u0E2A\u0E31\u0E07\u0E01\u0E31\u0E14</h4>\n        <ul>\n          <li>{{ school.area }}</li>\n          <li>{{ school.affiliation }}</li>\n          <li class=\"foot-award\">\n            {{ school.award }}<br />{{ school.level }} {{ school.academicYear }}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"foot-bottom\">\n      <span>\u00A9 {{ year }} {{ school.name }} \u2014 \u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E17\u0E32\u0E19</span>\n      <span>{{ school.philosophy }}</span>\n    </div>\n  </div>\n</footer>\n", styles: ["/* \u0E17\u0E49\u0E32\u0E22\u0E2B\u0E19\u0E49\u0E32 \u2014 \u0E1E\u0E37\u0E49\u0E19\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E21\u0E15\u0E31\u0E14\u0E01\u0E31\u0E1A\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19 */\n.foot {\n  background: var(--navy-950);\n  color: rgba(255, 255, 255, .72);\n  padding: 48px 0 34px;\n}\n\n.foot h4 { color: #fff; font-size: 17px; margin-bottom: 10px; }\n.foot a { color: rgba(255, 255, 255, .8); }\n\n.foot-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  gap: 32px;\n}\n\n.foot ul { list-style: none; margin: 0; padding: 0; font-size: 15px; }\n.foot li { margin-bottom: 7px; }\n\n.foot-address { font-size: 15px; line-height: 1.8; margin-bottom: 12px; }\n.foot-contact { font-size: 15px; margin: 0; }\n\n.foot-award { margin-top: 14px; color: var(--gold-400); font-weight: 700; }\n\n.foot-bottom {\n  margin-top: 34px;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, .13);\n  font-size: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n@media (max-width: 1024px) { .foot-grid { grid-template-columns: 1fr 1fr; } }\n@media (max-width: 834px)  { .foot-grid { grid-template-columns: 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/footer/footer.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=footer.component.js.map