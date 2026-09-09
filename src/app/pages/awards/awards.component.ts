import { Component, NgZone, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
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
    CommonModule, RevealDirective,
    KpiGridComponent, PagerComponent
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent implements OnInit, OnDestroy {
  /** ภาพพื้นหลังไล่เปลี่ยน เหมือนหน้าแรก */
  readonly slides = [
    'gallery/d1/g02.jpg',
    'gallery/d1/g16.jpg',
    'gallery/d3/g06.jpg',
    'gallery/d1/g04.jpg'
  ];
  readonly current = signal(0);
  private timer?: number;
  private readonly zone = inject(NgZone);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  /* ---------- ปุ่มย้อนกลับไปหน้าที่กดเข้ามา ----------
     หน้าอื่นส่ง ?from=/dimension-1&t=1.1.8 มาให้ ปุ่มจึงพากลับไปหัวข้อเดิมได้ */
  readonly fromPath = signal('');
  readonly fromTopic = signal('');

  private readonly pageNames: Record<string, string> = {
    '/dimension-1': 'ด้านที่ 1 คุณภาพนักเรียน',
    '/dimension-2': 'ด้านที่ 2 การบริหารหลักสูตรและงานวิชาการ',
    '/dimension-3': 'ด้านที่ 3 การบริหารและการจัดการศึกษา',
    '/dimension-4': 'ด้านที่ 4 การจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ',
    '/dimension-5': 'ด้านที่ 5 ความดีเด่นของสถานศึกษา',
    '/': 'หน้าแรก'
  };

  get backLabel(): string {
    const t = this.fromTopic();
    return t ? `กลับไปหัวข้อ ${t}` : `กลับไป${this.pageNames[this.fromPath()] ?? 'หน้าก่อนหน้า'}`;
  }

  goBack(): void {
    const t = this.fromTopic();
    this.router.navigate([this.fromPath()], t ? { queryParams: { t } } : {});
  }


  ngOnInit(): void {
    const q = this.route.snapshot.queryParamMap;
    this.fromPath.set(q.get('from') ?? '');
    this.fromTopic.set(q.get('t') ?? '');

    this.zone.runOutsideAngular(() => {
      this.timer = window.setInterval(() => {
        this.zone.run(() => this.current.set((this.current() + 1) % this.slides.length));
      }, 7000);
    });
  }

  ngOnDestroy(): void {
    if (this.timer !== undefined) clearInterval(this.timer);
  }

  /** เลื่อนรางการ์ดทีละหนึ่งหน้าจอ */
  scrollRail(rail: HTMLElement, dir: number): void {
    rail.scrollBy({ left: dir * Math.max(280, rail.clientWidth * 0.8), behavior: 'smooth' });
  }

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

  /* ตัวนับปรับตามตัวกรองอีกฝั่งที่เลือกอยู่
     เช่นกด "ระดับนานาชาติ" หมวดหมู่จะโชว์เฉพาะจำนวนที่อยู่ในระดับนั้น
     หมวดที่ไม่มีเลยจะจางลงและกดไม่ได้ */
  countLevel(v: string): number {
    return this.students.filter(a => a.level === v && (!this.category || a.category === this.category)).length;
  }

  countCategory(v: string): number {
    return this.students.filter(a => a.category === v && (!this.level || a.level === this.level)).length;
  }

  open(src: string): void { this.lightbox = src; }
  close(): void { this.lightbox = null; }

  trackByName(_i: number, a: StudentAward | TeacherAward): string { return a.name + a.award; }
}
