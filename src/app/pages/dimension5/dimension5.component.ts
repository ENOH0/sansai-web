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
import { AwardSlideshowComponent } from '../../shared/award-slideshow/award-slideshow.component';
import { StairShowcaseComponent } from '../../shared/stair-showcase/stair-showcase.component';

@Component({
  selector: 'app-dimension5',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    CycleFlowComponent, CalloutComponent, PagerComponent,
    AwardSlideshowComponent, StairShowcaseComponent
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
  resizeSuccessModel(event: MessageEvent<{ type?: string; height?: number; top?: number; bottom?: number }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;

    // โมเดลขอให้หน้าหลักเลื่อนไปยังกิ่งที่เพิ่งกาง (iframe เลื่อนเองไม่ได้เพราะสูงเท่าเนื้อหา)
    if (event.data?.type === 'd5-success-model-scroll') {
      const frame = document.querySelector<HTMLIFrameElement>('.d5-success-model-frame iframe');
      const top = Number(event.data.top), bottom = Number(event.data.bottom);
      if (!frame || !Number.isFinite(top) || !Number.isFinite(bottom)) return;
      setTimeout(() => {
        const base = frame.getBoundingClientRect().top;
        const navGap = 84;
        const elTop = base + top, elBottom = base + bottom;
        let delta = 0;
        if (elTop < navGap) delta = elTop - navGap;
        else if (elBottom > window.innerHeight) delta = Math.min(elBottom - window.innerHeight + 16, elTop - navGap);
        if (delta) window.scrollBy({ top: delta, behavior: 'smooth' });
      }, 60);
      return;
    }

    const height = Number(event.data.height);
    if (!Number.isFinite(height)) return;
    const minHeight = Math.max(360, height);
    if (event.data?.type === 'd5-success-model-height') this.successModelHeight.set(minHeight);   // ไม่จำกัดความสูง ไม่งั้นเนื้อหาส่วนล่างถูกตัด
    if (event.data?.type === 'd5-dissemination-wheel-height') this.disseminationWheelHeight.set(Math.min(1400, minHeight));
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
