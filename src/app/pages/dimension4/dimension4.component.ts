import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeries } from '../../core/models';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';
import { SmartWheelComponent } from '../../shared/smart-wheel/smart-wheel.component';

@Component({
  selector: 'app-dimension4',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    PagerComponent,
    LineChartComponent, SmartWheelComponent
  ],
  templateUrl: './dimension4.component.html',
  styleUrl: './dimension4.component.css'
})
export class Dimension4Component {
  /* ความสูงจริงของโมเดล PDCAR ที่ส่งมาจาก iframe ทำให้ไม่มีแถบเลื่อนซ้อน */
  readonly pdcarModelHeight = signal(900);
  readonly designModelHeight = signal(760);
  readonly designStepsHeight = signal(900);
  readonly assessmentModelHeight = signal(760);
  readonly assessmentCycleHeight = signal(820);

  /** เลื่อนหน้าหลักให้เห็นหน้าต่างรายละเอียดที่เปิดใน iframe (iframe สูงเท่าเนื้อหา เลื่อนเองไม่ได้) */
  private scrollParentTo(selector: string, data: { top?: number; bottom?: number }): void {
    const frame = document.querySelector<HTMLIFrameElement>(selector);
    const top = Number(data.top), bottom = Number(data.bottom);
    if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom)) return;
    const base = frame.getBoundingClientRect().top;
    const elTop = base + top, elBottom = base + bottom, navGap = 84;
    let delta = 0;
    if (elTop < navGap) delta = elTop - navGap;
    else if (elBottom > window.innerHeight) delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
    if (delta) window.scrollBy({ top: delta, behavior: 'smooth' });
  }

  @HostListener('window:message', ['$event'])
  resizePdcarModel(event: MessageEvent<{ type?: string; height?: number; group?: string }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;
    /* ปุ่ม "ดูข้อมูลเพิ่มเติม" ในโมเดล PDCAR ขอให้เปิดหัวข้อ 4.1–4.4 */
    if (event.data?.type === 'd4-pdcar-open-group') {
      const key = event.data.group;
      const group = this.groups.find(g => g.key === key);
      if (group) this.selectGroup(group.key);
      return;
    }
    /* โมเดลการวัดและประเมินผลการเรียนรู้ (4.3) */
    if (event.data?.type === 'd4-assessment-model-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.assessmentModelHeight.set(Math.max(700, h));
      return;
    }
    if (event.data?.type === 'd4-assessment-cycle-height') {
      const h = Number((event.data as { height?: number }).height);
      if (Number.isFinite(h)) this.assessmentCycleHeight.set(Math.max(700, h));
      return;
    }

    if (event.data?.type === 'd4-assessment-model-scroll') {
      this.scrollParentTo('iframe[src="/models/assessment-model.html"]', event.data as { top?: number; bottom?: number });
      return;
    }
    /* โมเดลขั้นตอนการออกแบบการจัดการเรียนรู้ 8 ขั้น (4.1) */
    if (event.data?.type === 'd4-design-steps-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.designStepsHeight.set(Math.max(700, h));
      return;
    }
    if (event.data?.type === 'd4-design-steps-scroll') {
      this.scrollParentTo('iframe[src="/models/learning-design-steps-model.html"]', event.data as { top?: number; bottom?: number });
      return;
    }
    /* โมเดลการออกแบบการจัดการเรียนรู้ (4.1) */
    if (event.data?.type === 'd4-design-model-height') {
      const h = Number(event.data.height);
      if (Number.isFinite(h)) this.designModelHeight.set(Math.max(700, h));
      return;
    }
    if (event.data?.type === 'd4-design-model-scroll') {
      const frame = document.querySelector<HTMLIFrameElement>('iframe[src^="/models/learning-design-model.html"]');
      const top = Number((event.data as { top?: number }).top), bottom = Number((event.data as { bottom?: number }).bottom);
      if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom)) return;
      const base = frame.getBoundingClientRect().top;
      const elTop = base + top, elBottom = base + bottom, navGap = 84;
      let delta = 0;
      if (elTop < navGap) delta = elTop - navGap;
      else if (elBottom > window.innerHeight) delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
      if (delta) window.scrollBy({ top: delta, behavior: 'smooth' });
      return;
    }
    if (event.data?.type !== 'd4-pdcar-model-height') return;
    const height = Number(event.data.height);
    if (Number.isFinite(height)) this.pdcarModelHeight.set(Math.max(620, height));
  }

  readonly gallery = GALLERY['d4'];

  /* ── หัวข้อ 4.4: คลังหลักฐานและภาพขนาดเต็ม ── */
  readonly d44Filter = signal('');
  readonly d44Lightbox = signal<{ src: string; caption: string } | null>(null);
  d44Docs() {
    const f = this.d44Filter();
    return f ? DIM4.useResults.library.filter(x => x.category === f) : DIM4.useResults.library;
  }
  d44Count(category: string): number {
    return DIM4.useResults.library.filter(x => x.category === category).length;
  }
  scrollToD44(index: number): void {
    document.getElementById('d44-step-' + index)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  readonly d = DIM4;
  readonly indicatorKeys = Object.keys(DIM4.indicators) as (keyof typeof DIM4.indicators)[];

  readonly groups = [
    { key: '4.1', title: 'การออกแบบการจัดการเรียนรู้', indicatorKey: '4.1 การออกแบบการจัดการเรียนรู้', count: 5 },
    { key: '4.2', title: 'การจัดการเรียนรู้และการจัดการชั้นเรียน', indicatorKey: '4.2 การจัดการเรียนรู้และการจัดการชั้นเรียน', count: 8 },
    { key: '4.3', title: 'การวัดและประเมินผลการเรียนรู้', indicatorKey: '4.3 การวัดและประเมินผลการเรียนรู้', count: 5 },
    { key: '4.4', title: 'การนำผลการประเมินไปใช้', indicatorKey: '4.4 การนำผลการประเมินไปใช้', count: 4 }
  ] as const;

  readonly open = signal<(typeof this.groups)[number]['key'] | ''>('');

  get currentGroup() { return this.groups.find(group => group.key === this.open()); }

  selectGroup(key: (typeof this.groups)[number]['key']): void {
    this.open.set(key);
    setTimeout(() => document.querySelector('.d4-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  backToIndex(): void {
    this.open.set('');
    setTimeout(() => document.querySelector('.d4-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
  playBg(video: HTMLVideoElement): void {
    video.muted = true;
    const playback = video.play();
    if (playback && typeof playback.catch === 'function') playback.catch(() => { /* ใช้ poster แทน */ });
  }

  private readonly palette = ['#1e4d9e', '#d4a537', '#4f88d4'];

  readonly outcomeSeries: LineSeries[] = DIM4.assessment.outcome.series.map((s, i) => ({
    name: s.name, values: s.values, color: this.palette[i % 3]
  }));
}
