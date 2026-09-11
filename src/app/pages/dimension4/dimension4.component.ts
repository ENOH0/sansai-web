import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeries } from '../../core/models';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
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
    CycleFlowComponent, PagerComponent,
    LineChartComponent, SmartWheelComponent
  ],
  templateUrl: './dimension4.component.html',
  styleUrl: './dimension4.component.css'
})
export class Dimension4Component {
  readonly gallery = GALLERY['d4'];
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
