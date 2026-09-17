import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from '../../core/models';
import { DIM2 } from '../../data/dimension2.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
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
    CommonModule, RevealDirective, PageHeroComponent,
    CycleFlowComponent, DataTableComponent, CalloutComponent,
    PagerComponent, BarChartComponent
  ],
  templateUrl: './dimension2.component.html',
  styleUrl: './dimension2.component.css'
})
export class Dimension2Component {
  readonly continuityModelHeight = signal(960);
  readonly flexibleModelHeight = signal(980);
  readonly diversityPdcaHeight = signal(1000);

  @HostListener('window:message', ['$event'])
  resizeDiversityModel(event: MessageEvent<{ type?: string; height?: number }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;
    if (event.data?.type === 'd2-diversity-pdca-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.diversityPdcaHeight.set(Math.max(620, Math.min(2400, h)));
      return;
    }
    if (event.data?.type === 'd2-flexible-model-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.flexibleModelHeight.set(Math.max(620, Math.min(2000, h)));
      return;
    }
    if (event.data?.type !== 'd2-continuity-model-height') return;
    const height = Number(event.data.height);
    if (Number.isFinite(height)) this.continuityModelHeight.set(Math.max(620, Math.min(2400, height)));
  }

  /* ---------- แอคคอร์เดียนหัวข้อตามแบบประเมิน ----------
     เปิดได้ทีละหัวข้อ กดหัวข้อใหม่จะปิดหัวข้อเดิมอัตโนมัติ */
  private readonly opened = signal<string[]>([]);
  readonly competencyOpen = signal(false);

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
  /**
   * เลื่อนหัวข้อที่กดมาไว้ใต้ navbar เสมอ
   * ใช้การคำนวณตำแหน่งเอง แทน scrollIntoView เพราะ scrollIntoView
   * ไม่รู้จักความสูงของ navbar หัวข้อจึงถูกแถบบนบังทุกครั้ง
   */
  private scrollToHead(k: string): void {
    setTimeout(() => {
      const el = document.getElementById('acc-' + k);
      if (!el) return;
      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10
      ) || 68;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 14;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 70);
  }

  jumpTo(k: string): void {
    if (!this.isOpen(k)) this.toggle(k);
    else this.scrollToHead(k);
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
    if (k !== '2.2' || this.isOpen('2.2')) this.competencyOpen.set(false);
    this.opened.update(v => v.includes(k) ? [] : [k]);
    /* หัวข้อที่เปิดอยู่ก่อนหน้าถูกยุบ ความสูงหน้าจึงเปลี่ยน
       ถ้าไม่เลื่อนตาม หัวข้อที่เพิ่งกดจะกระเด็นไปอยู่คนละที่ */
    this.scrollToHead(k);
  }

  toggleCompetency(): void {
    this.competencyOpen.update(open => !open);
  }

  indicatorsOf(k: string): string[] {
    const all = DIM2.indicators as Record<string, string[]>;
    return all[this.indicatorKeyOf[k]] ?? [];
  }

  /** รูปประกอบของกิจกรรมนั้น ๆ (กิจกรรมที่ยังไม่มีภาพหลักฐานจะไม่แสดงรูป) */
  photosOf(item: { photos?: { src: string; caption: string }[] }) { return item.photos ?? []; }

  /* ---------- ดูภาพขนาดเต็ม ----------
     ดักคลิกที่ระดับหน้า ทำให้ทุกภาพในหน้านี้กดดูเต็มจอได้ */
  readonly zoom = signal<{ src: string; cap: string } | null>(null);

  @HostListener('click', ['$event'])
  onImageClick(ev: MouseEvent): void {
    const el = ev.target as HTMLElement | null;
    if (!el || el.tagName !== 'IMG') return;
    if (el.closest('app-photo-gallery') || el.closest('.d2-zoom')) return;
    const img = el as HTMLImageElement;
    const src = img.currentSrc || img.src;
    if (!src) return;
    ev.preventDefault();
    this.zoom.set({ src, cap: img.alt || '' });
  }

  @HostListener('document:keydown.escape')
  closeZoom(): void { this.zoom.set(null); }

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
      cells: [c.name, ...c.y.map((v, yearIndex) =>
        'specialYears' in c && c.specialYears?.includes(yearIndex) ? 'พิเศษ*' : (v ? '✓' : '–')
      )]
    })),
    { cells: ['รวมแผนการเรียน ม.ปลาย', ...DIM2.assessment.planCount.upper.map(String)], total: true }
  ];

  readonly planRows: TableRow[] = [
    { cells: ['มัธยมศึกษาตอนต้น', ...DIM2.assessment.planCount.lower.map(String)] },
    { cells: ['มัธยมศึกษาตอนปลาย', ...DIM2.assessment.planCount.upper.map(String)] },
    { cells: ['รวมทั้งหมด', ...DIM2.assessment.planCount.total.map(String)], total: true }
  ];
}
