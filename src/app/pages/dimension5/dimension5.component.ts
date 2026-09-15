import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM5 } from '../../data/dimension5.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';

@Component({
  selector: 'app-dimension5',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    CycleFlowComponent, CalloutComponent, PagerComponent
  ],
  templateUrl: './dimension5.component.html',
  styleUrl: './dimension5.component.css'
})
export class Dimension5Component {
  readonly gallery = GALLERY['d5'];
  readonly d = DIM5;
  readonly indicatorKeys = Object.keys(DIM5.indicators) as (keyof typeof DIM5.indicators)[];
  readonly criteria = DIM5.indicators['5.1 โครงการ/กิจกรรมดีเด่นของสถานศึกษา'];
  readonly open = signal<number | null>(null);
  readonly successModelHeight = signal(620);
  readonly disseminationWheelHeight = signal(700);

  /** รับความสูงจริงจากโมเดลใน iframe เพื่อไม่ให้เกิดแถบเลื่อนภายใน */
  @HostListener('window:message', ['$event'])
  resizeSuccessModel(event: MessageEvent<{ type?: string; height?: number }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;
    const height = Number(event.data.height);
    if (!Number.isFinite(height)) return;
    const fitHeight = Math.max(360, Math.min(1400, height));
    if (event.data?.type === 'd5-success-model-height') this.successModelHeight.set(fitHeight);
    if (event.data?.type === 'd5-dissemination-wheel-height') this.disseminationWheelHeight.set(fitHeight);
  }

  get currentProject() {
    const index = this.open();
    return index === null ? undefined : this.d.projects[index];
  }

  selectProject(index: number): void {
    this.open.set(index);
    setTimeout(() => document.querySelector('.d5-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  backToIndex(): void {
    this.open.set(null);
    setTimeout(() => document.querySelector('.d5-index')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  /** Safari/Chrome บางเครื่องต้องสั่งเล่นซ้ำเมื่อวิดีโอพร้อมใช้งาน */
  playBg(video: HTMLVideoElement): void {
    video.muted = true;
    const playback = video.play();
    if (playback && typeof playback.catch === 'function') playback.catch(() => { /* ใช้ poster แทน */ });
  }
}
