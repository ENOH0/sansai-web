import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from '../../core/models';
import { DIM2 } from '../../data/dimension2.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dimension2',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    CycleFlowComponent, DataTableComponent, CalloutComponent,
    PagerComponent, BarChartComponent
  ],
  templateUrl: './dimension2.component.html',
  styleUrl: './dimension2.component.css'
})
export class Dimension2Component {
  /* ---------- แอคคอร์เดียนหัวข้อตามแบบประเมิน ----------
     เปิดได้ทีละหัวข้อ กดหัวข้อใหม่จะปิดหัวข้อเดิมอัตโนมัติ */
  private readonly opened = signal<string[]>([]);

  private readonly indicatorKeyOf: Record<string, string> = {
    '2.1': '2.1 การพัฒนาหลักสูตรสถานศึกษา',
    '2.2': '2.2 การจัดกิจกรรมเสริมหลักสูตร',
    '2.3': '2.3 สื่อ เทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้',
    '2.4': '2.4 ระบบการวัดและประเมินผล'
  };

  readonly groups = [
    { key: '2.1', title: 'การพัฒนาหลักสูตรสถานศึกษา' },
    { key: '2.2', title: 'การจัดกิจกรรมเสริมหลักสูตร' },
    { key: '2.3', title: 'สื่อ เทคโนโลยีเพื่อการเรียนรู้ และแหล่งเรียนรู้' },
    { key: '2.4', title: 'ระบบการวัดและประเมินผล' }
  ];

  /** กดปุ่มนำทาง: เปิดหัวข้อนั้นถ้ายังปิดอยู่ แล้วเลื่อนไปหา */
  jumpTo(k: string): void {
    if (!this.isOpen(k)) this.toggle(k);
    setTimeout(() => {
      const el = document.getElementById('acc-' + k);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  /* Chrome/Safari บางเครื่องไม่เริ่มเล่นเองแม้ใส่ autoplay จึงสั่งเล่นซ้ำเมื่อพร้อม */
  playBg(v: HTMLVideoElement): void {
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => { /* ใช้ภาพ poster แทน */ });
  }

  isOpen(k: string): boolean { return this.opened().includes(k); }

  hasOpen(): boolean { return this.opened().length > 0; }

  /** ปุ่ม nav ลอย: ปิดหัวข้อย่อยและกลับสู่หน้าหลักของด้านที่ 2 */
  backToIndex(): void {
    this.opened.set([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggle(k: string): void {
    this.opened.update(v => v.includes(k) ? [] : [k]);
  }

  indicatorsOf(k: string): string[] {
    const all = DIM2.indicators as Record<string, string[]>;
    return all[this.indicatorKeyOf[k]] ?? [];
  }

  readonly gallery = GALLERY['d2'];
  readonly d = DIM2;

  readonly indicatorKeys = Object.keys(DIM2.indicators) as (keyof typeof DIM2.indicators)[];

  readonly courseSeries = [
    { name: 'มัธยมศึกษาตอนต้น', values: DIM2.assessment.planCount.lower, color: '#4f88d4' },
    { name: 'มัธยมศึกษาตอนปลาย', values: DIM2.assessment.planCount.upper, color: '#d4a537' },
    { name: 'รวมทั้งหมด', values: DIM2.assessment.planCount.total, color: '#132f63' }
  ];

  readonly upperRows: TableRow[] = [
    ...DIM2.curriculum.upperCourses.map(c => ({
      cells: [c.name, ...c.y.map(v => (v ? '✓' : '–'))]
    })),
    { cells: ['รวมแผนการเรียน ม.ปลาย', ...DIM2.assessment.planCount.upper.map(String)], total: true }
  ];

  readonly planRows: TableRow[] = [
    { cells: ['มัธยมศึกษาตอนต้น', ...DIM2.assessment.planCount.lower.map(String)] },
    { cells: ['มัธยมศึกษาตอนปลาย', ...DIM2.assessment.planCount.upper.map(String)] },
    { cells: ['รวมทั้งหมด', ...DIM2.assessment.planCount.total.map(String)], total: true }
  ];
}
