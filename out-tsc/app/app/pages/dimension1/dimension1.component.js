import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM1 } from '../../data/dimension1.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';
import { MeterListComponent } from '../../shared/meter-list/meter-list.component';
import { OnetChartComponent } from '../../shared/onet-chart/onet-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function Dimension1Component_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r1);
} }
function Dimension1Component_li_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const a_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(a_r2);
} }
function Dimension1Component_div_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 57)(6, "span", 58);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 59);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 60);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r3.award);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r3.level);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 ", a_r3.year, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(a_r3.org);
} }
function Dimension1Component_li_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 55);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r4);
} }
export class Dimension1Component {
    gallery = GALLERY['d1'];
    d = DIM1;
    // ---- หัวข้อย่อย (ตัดเลขนำหน้าออกเพราะแสดงในกล่องตัวเลขแล้ว) ----
    onetTitle = 'ผลสัมฤทธิ์ทางการเรียนระดับชาติ (O-NET) มีพัฒนาการต่อเนื่อง 3 ปี';
    thaiTitle = 'ความสามารถในการอ่าน–เขียนภาษาไทย การสื่อสาร และการคิดคำนวณ';
    engTitle = 'ความสามารถในการใช้ภาษาอังกฤษเพื่อการสื่อสาร';
    thinkTitle = 'ความสามารถในการคิด วิเคราะห์ แก้ปัญหา และประยุกต์ใช้';
    ictTitle = 'ความสามารถในการใช้เทคโนโลยีสารสนเทศและการสื่อสาร (ICT)';
    pathTitle = 'ความพร้อมในการศึกษาต่อ การฝึกงาน หรือการทำงาน';
    electionTitle = 'การยอมรับเหตุผลและความคิดเห็นของผู้อื่น';
    healthTitle = 'การรักษาสุขภาพกายและสุขภาพจิต';
    palette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd'];
    // ---------- O-NET ม.6 ----------
    onetHeaders = [
        'สาระการเรียนรู้',
        'ร.ร. 2566', 'ประเทศ 2566', 'ต่าง',
        'ร.ร. 2567', 'ประเทศ 2567', 'ต่าง',
        'ร.ร. 2568', 'ประเทศ 2568', 'ต่าง'
    ];
    m6Rows = DIM1.section11.onet.m6.subjects.map(s => ({
        cells: [
            s.name,
            ...[0, 1, 2].flatMap(i => [
                s.school[i].toFixed(2),
                s.nation[i].toFixed(2),
                this.signed(s.school[i] - s.nation[i])
            ])
        ]
    }));
    // ---------- O-NET ม.3 ----------
    m3TrendSeries = DIM1.section11.onet.m3Trend.subjects.map((s, i) => ({
        name: s.name,
        values: s.values,
        color: this.palette[i % 5]
    }));
    m3Rows = DIM1.section11.onet.m3.subjects.map(s => ({
        cells: [
            s.name,
            ...[0, 1, 2].flatMap(i => [
                s.school[i].toFixed(2),
                s.nation[i].toFixed(2),
                this.signed(s.school[i] - s.nation[i])
            ])
        ]
    }));
    // ---------- ภาษาไทย ----------
    yearHeaders3 = ['ระดับชั้น', 'ปี 2566', 'ปี 2567', 'ปี 2568'];
    /* ใช้ชุดสี 6 สีเฉพาะกราฟนี้ เพราะมี 6 ระดับชั้น
       ถ้าใช้ชุด 5 สีเดิม ม.6 จะได้สีซ้ำกับ ม.1 จนแยกเส้นไม่ออก */
    gradePalette = ['#1e4d9e', '#d4a537', '#4f88d4', '#0f7a4d', '#8a4fbd', '#b4433a'];
    thaiSeries = [
        ...DIM1.section11.thai.rows.map((r, i) => ({
            name: r.name, values: r.values, color: this.gradePalette[i % 6]
        })),
        { name: 'ค่าเฉลี่ยรวม', values: DIM1.section11.thai.average, color: '#08152f' }
    ];
    thaiRows = [
        ...DIM1.section11.thai.rows.map(r => ({ cells: [r.name, ...r.values.map(v => v.toFixed(2))] })),
        { cells: ['ค่าเฉลี่ย', ...DIM1.section11.thai.average.map(v => v.toFixed(2))], total: true }
    ];
    // ---------- ภาษาอังกฤษ ----------
    engSeries = [{
            name: 'ระดับดีขึ้นไป (3–4)',
            values: DIM1.section11.english.grades.map(g => g.pct),
            color: '#1e4d9e'
        }];
    gradeHeaders = ['ปีการศึกษา', ...DIM1.section11.english.gradeLabels, 'ร้อยละ 3–4'];
    engRows = [
        ...DIM1.section11.english.grades.map(g => ({
            cells: [g.year, ...g.g.map(v => v.toLocaleString('th-TH')), g.pct.toFixed(2)]
        })),
        { cells: ['รวมเฉลี่ย 3 ปี', '', '', '', '', '', '', '', '', DIM1.section11.english.average.toFixed(2)], total: true }
    ];
    // ---------- คิดวิเคราะห์ ----------
    isYears = ['2566', '2567', '2568'];
    isSeries = [
        { name: 'ชั้น ม.2', values: [61, 88, 76], color: '#1e4d9e' },
        { name: 'ชั้น ม.5', values: [73, 89, 96], color: '#d4a537' }
    ];
    readSeries = [{
            name: 'ระดับดีขึ้นไป (ดีเยี่ยม + ดี)',
            values: DIM1.section11.thinking.readTotals,
            color: '#1e4d9e'
        }];
    readHeaders = [
        'ระดับชั้น',
        'ดีเยี่ยม 2566', 'ดี 2566',
        'ดีเยี่ยม 2567', 'ดี 2567',
        'ดีเยี่ยม 2568', 'ดี 2568'
    ];
    readRows = [
        ...DIM1.section11.thinking.readRows.map(r => ({
            cells: [
                r.name,
                ...[0, 1, 2].flatMap(i => [r.excellent[i].toFixed(2), r.good[i].toFixed(2)])
            ]
        })),
        {
            cells: [
                'ร้อยละระดับดีขึ้นไป',
                DIM1.section11.thinking.readTotals[0].toFixed(2), '',
                DIM1.section11.thinking.readTotals[1].toFixed(2), '',
                DIM1.section11.thinking.readTotals[2].toFixed(2), ''
            ],
            total: true
        }
    ];
    // ---------- ICT ----------
    ictSeries = [{
            name: 'รายวิชาเทคโนโลยี (ระดับ 3–4)',
            values: DIM1.section11.ict.values,
            color: '#1e4d9e'
        }];
    // ---------- การศึกษาต่อ ----------
    pathSeries = DIM1.section11.pathway.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    /* ชุดข้อมูลเดียวกันในรูปกราฟแท่ง (ตัวเลือกที่ 2 ของหัวข้อ 1.1.7) */
    pathBars = DIM1.section11.pathway.rows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    // ---------- คุณลักษณะอันพึงประสงค์ ----------
    desiredMeters = DIM1.section12.desired.rows
        .map(r => ({ name: r.name, value: r.avg }))
        .sort((a, b) => b.value - a.value);
    desiredHeaders = ['คุณลักษณะที่พึงประสงค์', 'ปี 2566', 'ปี 2567', 'ปี 2568', 'สรุปคุณภาพโดยรวม'];
    desiredRows = [
        ...DIM1.section12.desired.rows.map(r => ({
            cells: [r.name, ...r.values.map(v => v.toFixed(2)), r.avg.toFixed(2)]
        })),
        {
            cells: [
                'สรุปผลการประเมิน',
                ...DIM1.section12.desired.overall.map(v => v.toFixed(2)),
                DIM1.section12.desired.overallAvg.toFixed(2)
            ],
            total: true
        }
    ];
    overallSeries = [
        { name: 'ผลการประเมินภาพรวม', values: DIM1.section12.desired.overall, color: '#1e4d9e' },
        { name: 'ค่าเป้าหมายของโรงเรียน', values: [90, 90, 90], color: '#b4433a', dashed: true }
    ];
    // ---------- การเลือกตั้ง ----------
    electionSeries = [
        { name: 'ผู้มีสิทธิ์เลือกตั้ง', values: DIM1.section12.election.eligible, color: '#b3cdf0' },
        { name: 'ผู้มาใช้สิทธิ์', values: DIM1.section12.election.voted, color: '#1e4d9e' }
    ];
    electionPctSeries = [
        { name: 'ร้อยละผู้มาใช้สิทธิ์', values: DIM1.section12.election.votedPct, color: '#1e4d9e' },
        { name: 'เกณฑ์ร้อยละ 80', values: [80, 80, 80], color: '#b4433a', dashed: true }
    ];
    // ---------- สุขภาพ ----------
    fitSeries = DIM1.section12.health.fitRows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    bodySeries = DIM1.section12.health.bodyRows.map((r, i) => ({
        name: r.name, values: r.values, color: this.palette[i % 5]
    }));
    /* สุขภาพจิต — แสดงเป็นกราฟแท่ง เรียงลำดับ มีปัญหา → เสี่ยง → ปกติ */
    mindOrder = ['มีปัญหา', 'เสี่ยง', 'ปกติ'];
    mindColor = {
        'มีปัญหา': '#b4433a', 'เสี่ยง': '#d4a537', 'ปกติ': '#0f7a4d'
    };
    mindBars = this.mindOrder
        .map(n => DIM1.section12.health.mindRows.find(r => r.name === n))
        .filter((r) => !!r)
        .map(r => ({ name: r.name, values: r.values, color: this.mindColor[r.name] }));
    signed(v) {
        return (v >= 0 ? '+' : '') + v.toFixed(2);
    }
    static ɵfac = function Dimension1Component_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Dimension1Component)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Dimension1Component, selectors: [["app-dimension1"]], decls: 111, vars: 113, consts: [[3, "no", "weight", "name", "subtitle"], [1, "section"], [1, "wrap"], ["appReveal", "", 1, "card", "card-accent", 2, "margin-bottom", "32px"], [1, "card-body", 2, "margin", "0"], [3, "items"], [1, "section", "section-alt"], ["num", "1.1", "title", "\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23", 3, "lead"], ["appReveal", "", 1, "card", 2, "margin-bottom", "28px"], [1, "card-title"], [1, "bullets", 2, "columns", "2", "column-gap", "34px"], ["style", "break-inside:avoid", 4, "ngFor", "ngForOf"], ["num", "1.1.1", 3, "title", "lead"], [1, "stack"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", 3, "years", "subjects", "note"], [3, "caption", "headers", "rows"], ["title", "\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3", "subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], ["label", "\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:", 3, "gold"], ["title", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32", 3, "years", "subjects", "note"], ["num", "1.1.2", 3, "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "showValues", "min", "max", "height", "note"], ["num", "1.1.3", 3, "title", "lead"], [1, "grid", "grid-2", 2, "margin-bottom", "24px"], ["appReveal", "left", 1, "card"], [1, "bullets"], [4, "ngFor", "ngForOf"], ["appReveal", "right", 1, "card", "card-gold"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], [2, "margin-top", "22px"], [3, "caption", "headers", "rows", "note"], ["num", "1.1.4", 3, "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B", "subtitle", "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], ["num", "1.1.5", 3, "title", "lead"], [1, "grid", "grid-2"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "labels", "series", "min", "max", "note"], [1, "steps", 2, "margin-top", "16px"], ["class", "step-item", 4, "ngFor", "ngForOf"], ["num", "1.1.7", 3, "title", "lead"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568", 3, "labels", "series", "note"], [2, "margin-top", "24px"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32", "subtitle", "\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568", "valueFormat", "1.2-2", 3, "labels", "series", "max", "note"], ["num", "1.2", "title", "\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C", 3, "lead"], ["subtitle", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", 3, "title", "rows", "max", "note"], ["title", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21", "subtitle", "\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90)", "note", "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E42\u0E14\u0E22\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567 \u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 98.69", 3, "labels", "series", "min", "max"], ["num", "1.2.3", 3, "title", "lead"], ["title", "\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)", "valueFormat", "1.0-0", 3, "labels", "series", "note"], ["title", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07", "subtitle", "\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80", 3, "labels", "series", "min", "max"], ["num", "1.2.7", 3, "title", "lead"], ["title", "\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32", 3, "labels", "series", "showValues"], ["title", "\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "note", "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09", 3, "labels", "series", "showValues"], ["title", "\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19", "subtitle", "\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568", "valueFormat", "1.2-2", 3, "labels", "series", "max", "note"], ["title", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", "lead", "\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1", 3, "items"], [1, "section-tight", "section-alt"], ["nextPath", "/dimension-2", "nextName", "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23"], [2, "break-inside", "avoid"], [1, "step-item"], [1, "chip-row", 2, "margin-top", "8px"], [1, "chip", "chip-gold"], [1, "chip"], [2, "font-size", "14.5px", "color", "#6b7a94", "margin-top", "6px"]], template: function Dimension1Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-page-hero", 0);
            i0.ɵɵelementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "app-kpi-grid", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 6)(8, "div", 2);
            i0.ɵɵelement(9, "app-section-header", 7);
            i0.ɵɵelementStart(10, "div", 8)(11, "h3", 9);
            i0.ɵɵtext(12, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "ol", 10);
            i0.ɵɵtemplate(14, Dimension1Component_li_14_Template, 2, 1, "li", 11);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "section", 1)(16, "div", 2);
            i0.ɵɵelement(17, "app-section-header", 12);
            i0.ɵɵelementStart(18, "div", 13);
            i0.ɵɵelement(19, "app-onet-chart", 14)(20, "app-data-table", 15)(21, "app-line-chart", 16);
            i0.ɵɵelementStart(22, "app-callout", 17);
            i0.ɵɵtext(23, " \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34 \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "app-data-table", 15)(25, "app-onet-chart", 18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "section", 6)(27, "div", 2);
            i0.ɵɵelement(28, "app-section-header", 19);
            i0.ɵɵelementStart(29, "div", 13);
            i0.ɵɵelement(30, "app-line-chart", 20)(31, "app-data-table", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(32, "section", 1)(33, "div", 2);
            i0.ɵɵelement(34, "app-section-header", 21);
            i0.ɵɵelementStart(35, "div", 22)(36, "div", 23)(37, "h3", 9);
            i0.ɵɵtext(38, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "ul", 24);
            i0.ɵɵtemplate(40, Dimension1Component_li_40_Template, 2, 1, "li", 25);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "div", 26)(42, "h3", 9);
            i0.ɵɵtext(43, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "ul", 24)(45, "li");
            i0.ɵɵtext(46, "\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 19 \u0E08\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E2D\u0E1A 1,306 \u0E04\u0E19 \u0E43\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E27\u0E34\u0E0A\u0E32 TGAT \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "li");
            i0.ɵɵtext(48, "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E27\u0E31\u0E14\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 4 \u0E17\u0E31\u0E01\u0E29\u0E30 \u0E15\u0E32\u0E21\u0E01\u0E23\u0E2D\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 CEFR \u0E23\u0E30\u0E14\u0E31\u0E1A A1\u2013A2 \u0E40\u0E15\u0E47\u0E21 50 \u0E04\u0E30\u0E41\u0E19\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "li");
            i0.ɵɵtext(50, "\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 100 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A O-NET \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (\u0E2A\u0E17\u0E28.)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "li");
            i0.ɵɵtext(52, "\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07 \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 BSK 101 \u201CA-Math Crossword Kumkom Challenge 2023\u201D");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelement(53, "app-bar-chart", 27);
            i0.ɵɵelementStart(54, "div", 28);
            i0.ɵɵelement(55, "app-data-table", 29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(56, "section", 6)(57, "div", 2);
            i0.ɵɵelement(58, "app-section-header", 30);
            i0.ɵɵelementStart(59, "div", 13);
            i0.ɵɵelement(60, "app-bar-chart", 31)(61, "app-line-chart", 32)(62, "app-data-table", 15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "section", 1)(64, "div", 2);
            i0.ɵɵelement(65, "app-section-header", 33);
            i0.ɵɵelementStart(66, "div", 34);
            i0.ɵɵelement(67, "app-line-chart", 35);
            i0.ɵɵelementStart(68, "div", 26)(69, "h3", 9);
            i0.ɵɵtext(70, "\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 36);
            i0.ɵɵtemplate(72, Dimension1Component_div_72_Template, 12, 5, "div", 37);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(73, "section", 6)(74, "div", 2);
            i0.ɵɵelement(75, "app-section-header", 38)(76, "app-line-chart", 39);
            i0.ɵɵelementStart(77, "div", 40);
            i0.ɵɵelement(78, "app-bar-chart", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(79, "section", 1)(80, "div", 2);
            i0.ɵɵelement(81, "app-section-header", 42);
            i0.ɵɵelementStart(82, "div", 8)(83, "h3", 9);
            i0.ɵɵtext(84, "\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "ol", 10);
            i0.ɵɵtemplate(86, Dimension1Component_li_86_Template, 2, 1, "li", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 13);
            i0.ɵɵelement(88, "app-meter-list", 43)(89, "app-data-table", 15)(90, "app-line-chart", 44);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(91, "section", 6)(92, "div", 2);
            i0.ɵɵelement(93, "app-section-header", 45);
            i0.ɵɵelementStart(94, "div", 13);
            i0.ɵɵelement(95, "app-bar-chart", 46)(96, "app-line-chart", 47);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(97, "section", 1)(98, "div", 2);
            i0.ɵɵelement(99, "app-section-header", 48);
            i0.ɵɵelementStart(100, "div", 34);
            i0.ɵɵelement(101, "app-line-chart", 49)(102, "app-line-chart", 50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "div", 40);
            i0.ɵɵelement(104, "app-bar-chart", 51);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(105, "section", 1)(106, "div", 2);
            i0.ɵɵelement(107, "app-photo-gallery", 52);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(108, "section", 53)(109, "div", 2);
            i0.ɵɵelement(110, "app-pager", 54);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("no", ctx.d.no)("weight", ctx.d.weight)("name", ctx.d.name)("subtitle", ctx.d.subtitle);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.d.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("items", ctx.d.kpis);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.section11.lead);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.d.indicators["1.1"]);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.onetTitle)("lead", ctx.d.section11.onet.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("years", ctx.d.section11.onet.m6.years)("subjects", ctx.d.section11.onet.m6.subjects)("note", ctx.d.section11.onet.m6.conclusion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("caption", ctx.d.section11.onet.m6.caption)("headers", ctx.onetHeaders)("rows", ctx.m6Rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section11.onet.m3Trend.years)("series", ctx.m3TrendSeries)("note", ctx.d.section11.onet.m3Trend.conclusion + "  " + ctx.d.section11.onet.m3Trend.footnote);
            i0.ɵɵadvance();
            i0.ɵɵproperty("gold", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("caption", ctx.d.section11.onet.m3.caption)("headers", ctx.onetHeaders)("rows", ctx.m3Rows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("years", ctx.d.section11.onet.m3.years)("subjects", ctx.d.section11.onet.m3.subjects)("note", ctx.d.section11.onet.m3.conclusion);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.thaiTitle)("lead", ctx.d.section11.thai.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section11.thai.years)("series", ctx.thaiSeries)("showValues", false)("min", 70)("max", 95)("height", 480)("note", ctx.d.section11.thai.conclusion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("caption", ctx.d.section11.thai.caption)("headers", ctx.yearHeaders3)("rows", ctx.thaiRows);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.engTitle)("lead", ctx.d.section11.english.narrative);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.d.section11.english.activities);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("labels", ctx.d.section11.english.years)("series", ctx.engSeries)("note", ctx.d.section11.english.conclusion);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("caption", ctx.d.section11.english.caption)("headers", ctx.gradeHeaders)("rows", ctx.engRows)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx.d.section11.english.average);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.thinkTitle)("lead", ctx.d.section11.thinking.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.isYears)("series", ctx.isSeries)("note", "\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 " + ctx.d.section11.thinking.isAverage + " \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19");
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section11.thinking.years)("series", ctx.readSeries)("min", 80)("max", 100)("note", ctx.d.section11.thinking.conclusion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("caption", ctx.d.section11.thinking.readCaption)("headers", ctx.readHeaders)("rows", ctx.readRows);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.ictTitle)("lead", ctx.d.section11.ict.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section11.ict.years)("series", ctx.ictSeries)("min", 70)("max", 80)("note", ctx.d.section11.ict.conclusion);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.d.section11.ict.awards);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.pathTitle)("lead", ctx.d.section11.pathway.narrative);
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section11.pathway.years)("series", ctx.pathSeries)("note", ctx.d.section11.pathway.conclusion);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section11.pathway.years)("series", ctx.pathBars)("max", 80)("note", ctx.d.section11.pathway.conclusion);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lead", ctx.d.section12.lead);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.d.indicators["1.2"]);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", "\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19")("rows", ctx.desiredMeters)("max", 100)("note", ctx.d.section12.desired.conclusion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("caption", ctx.d.section12.desired.caption)("headers", ctx.desiredHeaders)("rows", ctx.desiredRows);
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section12.desired.years)("series", ctx.overallSeries)("min", 85)("max", 100);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.electionTitle)("lead", ctx.d.section12.election.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section12.election.years)("series", ctx.electionSeries)("note", ctx.d.section12.election.conclusion);
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section12.election.years)("series", ctx.electionPctSeries)("min", 70)("max", 100);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("title", ctx.healthTitle)("lead", ctx.d.section12.health.narrative);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section12.health.years)("series", ctx.fitSeries)("showValues", false);
            i0.ɵɵadvance();
            i0.ɵɵproperty("labels", ctx.d.section12.health.years)("series", ctx.bodySeries)("showValues", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("labels", ctx.d.section12.health.years)("series", ctx.mindBars)("max", 100)("note", ctx.d.section12.health.conclusion);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("items", ctx.gallery);
        } }, dependencies: [PhotoGalleryComponent,
            CommonModule, i1.NgForOf, RevealDirective, PageHeroComponent, SectionHeaderComponent,
            KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent,
            LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent], styles: ["\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dimension1Component, [{
        type: Component,
        args: [{ selector: 'app-dimension1', standalone: true, imports: [
                    PhotoGalleryComponent,
                    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
                    KpiGridComponent, DataTableComponent, CalloutComponent, PagerComponent,
                    LineChartComponent, BarChartComponent, MeterListComponent, OnetChartComponent
                ], template: "<app-page-hero [no]=\"d.no\" [weight]=\"d.weight\" [name]=\"d.name\" [subtitle]=\"d.subtitle\" />\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E1A\u0E17\u0E19\u0E33 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"card card-accent\" appReveal style=\"margin-bottom:32px\">\n      <p class=\"card-body\" style=\"margin:0\">{{ d.intro }}</p>\n    </div>\n    <app-kpi-grid [items]=\"d.kpis\" />\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 1.1 \u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1\" title=\"\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E32\u0E07\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\" [lead]=\"d.section11.lead\" />\n\n    <div class=\"card\" appReveal style=\"margin-bottom:28px\">\n      <h3 class=\"card-title\">\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D</h3>\n      <ol class=\"bullets\" style=\"columns:2;column-gap:34px\">\n        <li *ngFor=\"let i of d.indicators['1.1']\" style=\"break-inside:avoid\">{{ i }}</li>\n      </ol>\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.1 O-NET \u2500\u2500 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.1\" [title]=\"onetTitle\" [lead]=\"d.section11.onet.narrative\" />\n\n    <div class=\"stack\">\n      <!-- \u0E21.6 \u2014 \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E14\u0E39\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E44\u0E14\u0E49 -->\n      <app-onet-chart\n        title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.6 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\"\n        [years]=\"d.section11.onet.m6.years\"\n        [subjects]=\"d.section11.onet.m6.subjects\"\n        [note]=\"d.section11.onet.m6.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.onet.m6.caption\"\n        [headers]=\"onetHeaders\"\n        [rows]=\"m6Rows\" />\n\n      <!-- \u0E21.3 \u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23 -->\n      <app-line-chart\n        title=\"\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3\"\n        subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.onet.m3Trend.years\"\n        [series]=\"m3TrendSeries\"\n        [note]=\"d.section11.onet.m3Trend.conclusion + '  ' + d.section11.onet.m3Trend.footnote\" />\n\n      <app-callout label=\"\u0E08\u0E38\u0E14\u0E40\u0E14\u0E48\u0E19:\" [gold]=\"true\">\n        \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E04\u0E23\u0E1A 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\n        (22.39 \u2192 24.56 \u2192 26.68) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E35\u0E48 1.1.1 \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E32\u0E15\u0E34\n        \u0E02\u0E2D\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E28\u0E36\u0E01\u0E29\u0E32\u0E21\u0E35\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 3 \u0E1B\u0E35\n      </app-callout>\n\n      <app-data-table\n        [caption]=\"d.section11.onet.m3.caption\"\n        [headers]=\"onetHeaders\"\n        [rows]=\"m3Rows\" />\n\n      <app-onet-chart\n        title=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22 O-NET \u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u2014 \u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 \u00B7 \u0E41\u0E15\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E25\u0E30\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\"\n        [years]=\"d.section11.onet.m3.years\"\n        [subjects]=\"d.section11.onet.m3.subjects\"\n        [note]=\"d.section11.onet.m3.conclusion\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.2 \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22 \u2500\u2500 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.2\" [title]=\"thaiTitle\" [lead]=\"d.section11.thai.narrative\" />\n\n    <div class=\"stack\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19\u2013\u0E40\u0E02\u0E35\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E23\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.thai.years\"\n        [series]=\"thaiSeries\"\n        [showValues]=\"false\"\n        [min]=\"70\"\n        [max]=\"95\"\n        [height]=\"480\"\n        [note]=\"d.section11.thai.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.thai.caption\"\n        [headers]=\"yearHeaders3\"\n        [rows]=\"thaiRows\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.3 \u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 \u2500\u2500 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.3\" [title]=\"engTitle\" [lead]=\"d.section11.english.narrative\" />\n\n    <div class=\"grid grid-2\" style=\"margin-bottom:24px\">\n      <div class=\"card\" appReveal=\"left\">\n        <h3 class=\"card-title\">\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E25\u0E30\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E17\u0E31\u0E01\u0E29\u0E30\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n        <ul class=\"bullets\">\n          <li *ngFor=\"let a of d.section11.english.activities\">{{ a }}</li>\n        </ul>\n      </div>\n      <div class=\"card card-gold\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29</h3>\n        <ul class=\"bullets\">\n          <li>\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48 19 \u0E08\u0E32\u0E01\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E2D\u0E1A 1,306 \u0E04\u0E19 \u0E43\u0E19\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E27\u0E34\u0E0A\u0E32 TGAT \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19\u0E21\u0E31\u0E18\u0E22\u0E21\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E2D\u0E19\u0E1B\u0E25\u0E32\u0E22 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567</li>\n          <li>\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E2A\u0E2D\u0E1A\u0E27\u0E31\u0E14\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E32\u0E07\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 4 \u0E17\u0E31\u0E01\u0E29\u0E30 \u0E15\u0E32\u0E21\u0E01\u0E23\u0E2D\u0E1A\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 CEFR \u0E23\u0E30\u0E14\u0E31\u0E1A A1\u2013A2 \u0E40\u0E15\u0E47\u0E21 50 \u0E04\u0E30\u0E41\u0E19\u0E19</li>\n          <li>\u0E44\u0E14\u0E49\u0E04\u0E30\u0E41\u0E19\u0E19\u0E40\u0E15\u0E47\u0E21 100 \u0E04\u0E30\u0E41\u0E19\u0E19 \u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A O-NET \u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29 (\u0E2A\u0E17\u0E28.)</li>\n          <li>\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E2D\u0E07 \u0E01\u0E32\u0E23\u0E41\u0E02\u0E48\u0E07\u0E02\u0E31\u0E19 BSK 101 \u201CA-Math Crossword Kumkom Challenge 2023\u201D</li>\n        </ul>\n      </div>\n    </div>\n\n    <app-bar-chart\n      title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B (\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E30\u0E41\u0E19\u0E19 3\u20134)\"\n      subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n      [labels]=\"d.section11.english.years\"\n      [series]=\"engSeries\"\n      [note]=\"d.section11.english.conclusion\" />\n\n    <div style=\"margin-top:22px\">\n      <app-data-table\n        [caption]=\"d.section11.english.caption\"\n        [headers]=\"gradeHeaders\"\n        [rows]=\"engRows\"\n        [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.english.average\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.4 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u2500\u2500 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.4\" [title]=\"thinkTitle\" [lead]=\"d.section11.thinking.narrative\" />\n\n    <div class=\"stack\">\n      <app-bar-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32 IS \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n        subtitle=\"\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E21.2 \u0E41\u0E25\u0E30 \u0E21.5 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"isYears\"\n        [series]=\"isSeries\"\n        [note]=\"'\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E27\u0E21 3 \u0E1B\u0E35 \u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 ' + d.section11.thinking.isAverage + ' \u0E41\u0E2A\u0E14\u0E07\u0E16\u0E36\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E1B\u0E31\u0E0D\u0E2B\u0E32 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E04\u0E34\u0E14\u0E23\u0E34\u0E40\u0E23\u0E34\u0E48\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E23\u0E23\u0E04\u0E4C \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E31\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E2D\u0E19'\" />\n\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E48\u0E32\u0E19 \u0E04\u0E34\u0E14\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C \u0E40\u0E02\u0E35\u0E22\u0E19\u0E2A\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21 \u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\"\n        subtitle=\"\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E17\u0E38\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E0A\u0E31\u0E49\u0E19 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.thinking.years\"\n        [series]=\"readSeries\"\n        [min]=\"80\" [max]=\"100\"\n        [note]=\"d.section11.thinking.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section11.thinking.readCaption\"\n        [headers]=\"readHeaders\"\n        [rows]=\"readRows\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.5 ICT \u2500\u2500 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.5\" [title]=\"ictTitle\" [lead]=\"d.section11.ict.narrative\" />\n\n    <div class=\"grid grid-2\">\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E1C\u0E25\u0E2A\u0E31\u0E21\u0E24\u0E17\u0E18\u0E34\u0E4C\u0E23\u0E32\u0E22\u0E27\u0E34\u0E0A\u0E32\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E23\u0E30\u0E14\u0E31\u0E1A 3\u20134\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section11.ict.years\"\n        [series]=\"ictSeries\"\n        [min]=\"70\" [max]=\"80\"\n        [note]=\"d.section11.ict.conclusion\" />\n\n      <div class=\"card card-gold\" appReveal=\"right\">\n        <h3 class=\"card-title\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E14\u0E49\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35</h3>\n        <div class=\"steps\" style=\"margin-top:16px\">\n          <div class=\"step-item\" *ngFor=\"let a of d.section11.ict.awards\">\n            <h4>{{ a.name }}</h4>\n            <p>{{ a.award }}</p>\n            <div class=\"chip-row\" style=\"margin-top:8px\">\n              <span class=\"chip chip-gold\">{{ a.level }}</span>\n              <span class=\"chip\">\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 {{ a.year }}</span>\n            </div>\n            <p style=\"font-size:14.5px;color:#6b7a94;margin-top:6px\">{{ a.org }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.1.7 \u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E15\u0E48\u0E2D \u2500\u2500 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.1.7\" [title]=\"pathTitle\" [lead]=\"d.section11.pathway.narrative\" />\n\n    <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n         \u2551 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1 : \u0E01\u0E23\u0E32\u0E1F\u0E40\u0E2A\u0E49\u0E19                                  \u2551\n         \u2551 \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49 \u0E43\u0E2B\u0E49\u0E25\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E19\u0E35\u0E49\u0E16\u0E36\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 \"\u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1\"  \u2551\n         \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->\n    <app-line-chart\n      title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n      subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568\"\n      [labels]=\"d.section11.pathway.years\"\n      [series]=\"pathSeries\"\n      [note]=\"d.section11.pathway.conclusion\" />\n    <!-- \u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 1 -->\n\n    <!-- \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n         \u2551 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2 : \u0E01\u0E23\u0E32\u0E1F\u0E41\u0E17\u0E48\u0E07                                  \u2551\n         \u2551 \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49 \u0E43\u0E2B\u0E49\u0E25\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14\u0E19\u0E35\u0E49\u0E16\u0E36\u0E07\u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14 \"\u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2\"  \u2551\n         \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D -->\n    <div style=\"margin-top:24px\">\n      <app-bar-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E31\u0E49\u0E19 \u0E21.3 \u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E1A\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\"\n        subtitle=\"\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2565\u20132568\"\n        [labels]=\"d.section11.pathway.years\"\n        [series]=\"pathBars\"\n        [max]=\"80\"\n        valueFormat=\"1.2-2\"\n        [note]=\"d.section11.pathway.conclusion\" />\n    </div>\n    <!-- \u0E08\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48 2 -->\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 1.2 \u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.2\" title=\"\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\" [lead]=\"d.section12.lead\" />\n\n    <div class=\"card\" appReveal style=\"margin-bottom:28px\">\n      <h3 class=\"card-title\">\u0E15\u0E31\u0E27\u0E0A\u0E35\u0E49\u0E27\u0E31\u0E14\u0E17\u0E31\u0E49\u0E07 8 \u0E02\u0E49\u0E2D</h3>\n      <ol class=\"bullets\" style=\"columns:2;column-gap:34px\">\n        <li *ngFor=\"let i of d.indicators['1.2']\" style=\"break-inside:avoid\">{{ i }}</li>\n      </ol>\n    </div>\n\n    <div class=\"stack\">\n      <app-meter-list\n        [title]=\"'\u0E2A\u0E23\u0E38\u0E1B\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E17\u0E31\u0E49\u0E07 8 \u0E14\u0E49\u0E32\u0E19'\"\n        subtitle=\"\u0E04\u0E48\u0E32\u0E40\u0E09\u0E25\u0E35\u0E48\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [rows]=\"desiredMeters\"\n        [max]=\"100\"\n        [note]=\"d.section12.desired.conclusion\" />\n\n      <app-data-table\n        [caption]=\"d.section12.desired.caption\"\n        [headers]=\"desiredHeaders\"\n        [rows]=\"desiredRows\" />\n\n      <app-line-chart\n        title=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E2D\u0E31\u0E19\u0E1E\u0E36\u0E07\u0E1B\u0E23\u0E30\u0E2A\u0E07\u0E04\u0E4C\u0E43\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\"\n        subtitle=\"\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E23\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90)\"\n        [labels]=\"d.section12.desired.years\"\n        [series]=\"overallSeries\"\n        [min]=\"85\" [max]=\"100\"\n        note=\"\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E2A\u0E39\u0E07\u0E01\u0E27\u0E48\u0E32\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90 \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E17\u0E38\u0E01\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 \u0E42\u0E14\u0E22\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2567 \u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 98.69\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.2.3 \u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07 \u2500\u2500 -->\n<section class=\"section section-alt\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.2.3\" [title]=\"electionTitle\" [lead]=\"d.section12.election.narrative\" />\n\n    <div class=\"stack\">\n      <app-bar-chart\n        title=\"\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E41\u0E25\u0E30\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568 (\u0E2B\u0E19\u0E48\u0E27\u0E22: \u0E04\u0E19)\"\n        [labels]=\"d.section12.election.years\"\n        [series]=\"electionSeries\"\n        valueFormat=\"1.0-0\"\n        [note]=\"d.section12.election.conclusion\" />\n\n      <app-line-chart\n        title=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E43\u0E0A\u0E49\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07\"\n        subtitle=\"\u0E40\u0E17\u0E35\u0E22\u0E1A\u0E01\u0E31\u0E1A\u0E40\u0E01\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49\u0E44\u0E21\u0E48\u0E15\u0E48\u0E33\u0E01\u0E27\u0E48\u0E32\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 80\"\n        [labels]=\"d.section12.election.years\"\n        [series]=\"electionPctSeries\"\n        [min]=\"70\" [max]=\"100\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2500\u2500 1.2.7 \u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E \u2500\u2500 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-section-header num=\"1.2.7\" [title]=\"healthTitle\" [lead]=\"d.section12.health.narrative\" />\n\n    <div class=\"grid grid-2\">\n      <app-line-chart\n        title=\"\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E17\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"fitSeries\"\n        [showValues]=\"false\"\n        note=\"\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E21\u0E23\u0E23\u0E16\u0E20\u0E32\u0E1E\u0E14\u0E35\u0E21\u0E32\u0E01\u0E41\u0E25\u0E30\u0E14\u0E35\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E17\u0E38\u0E01\u0E1B\u0E35 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E25\u0E14\u0E25\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 20.28 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 12.32\" />\n\n      <app-line-chart\n        title=\"\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E08\u0E33\u0E41\u0E19\u0E01\u0E15\u0E32\u0E21\u0E40\u0E01\u0E13\u0E11\u0E4C \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"bodySeries\"\n        [showValues]=\"false\"\n        note=\"\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E31\u0E14\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E1B\u0E01\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 90.81 \u0E43\u0E19\u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2568 \u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E49\u0E27\u0E19\u0E25\u0E14\u0E25\u0E07\u0E08\u0E32\u0E01\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 16.63 \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30 5.09\" />\n    </div>\n\n    <div style=\"margin-top:24px\">\n      <app-bar-chart\n        title=\"\u0E1C\u0E25\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E08\u0E34\u0E15\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\"\n        subtitle=\"\u0E23\u0E49\u0E2D\u0E22\u0E25\u0E30\u0E02\u0E2D\u0E07\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E1B\u0E35\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32 2566\u20132568\"\n        [labels]=\"d.section12.health.years\"\n        [series]=\"mindBars\"\n        [max]=\"100\"\n        valueFormat=\"1.2-2\"\n        [note]=\"d.section12.health.conclusion\" />\n    </div>\n  </div>\n</section>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<section class=\"section\">\n  <div class=\"wrap\">\n    <app-photo-gallery\n      title=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\"\n      lead=\"\u0E20\u0E32\u0E1E\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19 \u0E08\u0E32\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\"\n      [items]=\"gallery\" />\n  </div>\n</section>\n\n<section class=\"section-tight section-alt\">\n  <div class=\"wrap\">\n    <app-pager nextPath=\"/dimension-2\" nextName=\"\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 2 \u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E27\u0E34\u0E0A\u0E32\u0E01\u0E32\u0E23\" />\n  </div>\n</section>\n", styles: ["/* \u0E2B\u0E19\u0E49\u0E32\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48 1\n   \u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32 \u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E41\u0E25\u0E30\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07\u0E17\u0E35\u0E48 src/styles.css\n   \u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49\u0E44\u0E27\u0E49\u0E43\u0E2A\u0E48\u0E2A\u0E44\u0E15\u0E25\u0E4C\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 */\n:host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Dimension1Component, { className: "Dimension1Component", filePath: "src/app/pages/dimension1/dimension1.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=dimension1.component.js.map