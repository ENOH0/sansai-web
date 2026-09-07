import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import {
  STUDENT_AWARDS, TEACHER_AWARDS, AWARD_LEVELS, AWARD_CATEGORIES,
  StudentAward, TeacherAward
} from '../../data/awards.data';
import { Kpi } from '../../core/models';

/**
 * หน้ารางวัลเชิงประจักษ์
 * รวมรางวัลของนักเรียน (เล่มด้านที่ 1) และของครู (เล่มด้านที่ 3)
 * กรองตามระดับรางวัลและหมวดหมู่ได้ และแตะรูปเพื่อดูขนาดเต็ม
 */
@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule, RevealDirective, SectionHeaderComponent,
    KpiGridComponent, PagerComponent
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {
  readonly students = STUDENT_AWARDS;
  readonly teachers = TEACHER_AWARDS;
  readonly levels = AWARD_LEVELS;
  readonly categories = AWARD_CATEGORIES;

  /** ตัวกรองที่เลือกอยู่ ('' = ทั้งหมด) */
  level = '';
  category = '';

  /** รูปที่กำลังเปิดดูขนาดเต็ม (null = ปิด) */
  lightbox: string | null = null;

  readonly kpis: Kpi[] = [
    { value: STUDENT_AWARDS.length, unit: 'รางวัล', label: 'รางวัลนักเรียนที่มีหลักฐานภาพ', note: 'จากภาคผนวกรางวัลเชิงประจักษ์ เล่มด้านที่ 1' },
    { value: STUDENT_AWARDS.filter(a => a.level === 'ระดับนานาชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับนานาชาติ', note: 'เทเบิลเทนนิส · ชีววิทยาการแพทย์ · เทคโนโลยี' },
    { value: STUDENT_AWARDS.filter(a => a.level === 'ระดับชาติ').length, unit: 'รางวัล', label: 'รางวัลระดับชาติ', note: 'ครอบคลุมทุกกลุ่มสาระการเรียนรู้' },
    { value: TEACHER_AWARDS.length, unit: 'รายการ', label: 'รางวัลและวิทยฐานะของครู', note: 'จากเล่มด้านที่ 3 การสร้างขวัญกำลังใจ' }
  ];

  /** รายการรางวัลนักเรียนหลังผ่านตัวกรอง */
  get filtered(): StudentAward[] {
    return this.students.filter(a =>
      (!this.level || a.level === this.level) &&
      (!this.category || a.category === this.category));
  }

  setLevel(v: string): void { this.level = this.level === v ? '' : v; }
  setCategory(v: string): void { this.category = this.category === v ? '' : v; }
  clear(): void { this.level = ''; this.category = ''; }

  countLevel(v: string): number { return this.students.filter(a => a.level === v).length; }
  countCategory(v: string): number { return this.students.filter(a => a.category === v).length; }

  open(src: string): void { this.lightbox = src; }
  close(): void { this.lightbox = null; }

  trackByName(_i: number, a: StudentAward | TeacherAward): string { return a.name + a.award; }
}
