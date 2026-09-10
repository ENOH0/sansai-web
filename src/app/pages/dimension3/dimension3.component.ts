import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM3 } from '../../data/dimension3.data';
import { SCHOOL } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { BanchuenModelComponent } from '../../shared/banchuen-model/banchuen-model.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';

@Component({
  selector: 'app-dimension3',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    BanchuenModelComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
  ],
  templateUrl: './dimension3.component.html',
  styleUrl: './dimension3.component.css'
})
export class Dimension3Component {
  readonly gallery = GALLERY['d3'];
  readonly d = DIM3;
  readonly school = SCHOOL;
  readonly indicatorKeys = Object.keys(DIM3.indicators) as (keyof typeof DIM3.indicators)[];

  readonly groups = [
    { key: '3.1', title: 'ภาวะผู้นำของผู้บริหาร', indicatorKey: '3.1 ภาวะผู้นำของผู้บริหาร', count: 5 },
    { key: '3.2', title: 'การพัฒนาองค์กร', indicatorKey: '3.2 การพัฒนาองค์กร', count: 6 },
    { key: '3.3', title: 'เทคโนโลยีและการสื่อสารเพื่อการศึกษา', indicatorKey: '3.3 เทคโนโลยีและการสื่อสารเพื่อการศึกษา', count: 4 },
    { key: '3.4', title: 'ระบบการประกันคุณภาพภายใน', indicatorKey: '3.4 ระบบการประกันคุณภาพภายใน', count: 3 },
    { key: '3.5', title: 'ระบบข้อมูลและสารสนเทศ', indicatorKey: '3.5 ระบบข้อมูลและสารสนเทศ', count: 4 }
  ] as const;

  readonly open = signal<(typeof this.groups)[number]['key'] | ''>('');

  get currentGroup() { return this.groups.find(group => group.key === this.open()); }

  selectGroup(key: (typeof this.groups)[number]['key']): void {
    this.open.set(key);
    setTimeout(() => document.querySelector('.d3-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  backToIndex(): void {
    this.open.set('');
    setTimeout(() => document.querySelector('.d3-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
  playBg(video: HTMLVideoElement): void {
    video.muted = true;
    const playback = video.play();
    if (playback && typeof playback.catch === 'function') playback.catch(() => { /* ใช้ poster แทน */ });
  }
}
