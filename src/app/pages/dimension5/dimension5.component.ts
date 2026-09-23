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
  readonly banchuenHeight = signal(820);
  readonly factorsHeight = signal(640);
  readonly gearsHeight = signal(440);
  readonly banchuenOpen = signal(false);
  private banchuenIndex: number | null = null;

  /** รับความสูงจริงจากโมเดลใน iframe เพื่อไม่ให้เกิดแถบเลื่อนภายใน */
  @HostListener('window:message', ['$event'])
  resizeSuccessModel(event: MessageEvent<{ type?: string; height?: number; top?: number; bottom?: number }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;

    // กดการ์ดกิจกรรมในโมเดลปัจจัยและกลไก → เปิดวงล้อ BANCHUEN ของกิจกรรมนั้น แล้วเลื่อนไปหา
    if (event.data?.type === 'd5-banchuen-open') {
      const index = Number((event.data as { index?: number }).index);
      if (!Number.isFinite(index)) return;

      // กดการ์ดกิจกรรมเดิมซ้ำ = ปิดวงล้อกลับไปซ่อนเหมือนเดิม
      if (this.banchuenOpen() && this.banchuenIndex === index) {
        this.closeBanchuen();
        return;
      }

      this.banchuenIndex = index;
      this.banchuenOpen.set(true);
      // iframe เพิ่งถูกสร้าง จึงส่งซ้ำหลายจังหวะจนกว่าจะพร้อมรับข้อความ
      const send = () => {
        const frame = document.querySelector<HTMLIFrameElement>('.d5-banchuen iframe');
        frame?.contentWindow?.postMessage({ type: 'd5-banchuen-open', index }, window.location.origin);
        return frame;
      };
      [0, 250, 600, 1200].forEach(ms => setTimeout(send, ms));
      setTimeout(() => {
        document.querySelector('.d5-banchuen-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }

    // เปลี่ยนแท็บกิจกรรมในวงล้อ BANCHUEN → ให้เฟืองด้านบนเรืองแสงตามกิจกรรมที่เลือก
    if (event.data?.type === 'd5-banchuen-tab') {
      const index = Number((event.data as { index?: number }).index);
      if (!Number.isFinite(index)) return;
      this.banchuenIndex = index;
      this.syncGears(index);
      return;
    }

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
    if (event.data?.type === 'd5-dissemination-wheel-height') this.disseminationWheelHeight.set(Math.min(2600, minHeight));
    if (event.data?.type === 'd5-factors-height') this.factorsHeight.set(minHeight);
    if (event.data?.type === 'd5-gears-height') this.gearsHeight.set(minHeight);
    if (event.data?.type === 'd5-banchuen-height') this.banchuenHeight.set(minHeight);
  }

  closeBanchuen(): void {
    this.banchuenOpen.set(false);
    this.banchuenIndex = null;
    this.syncGears(-1);
    setTimeout(() => this.gearsFrame()?.closest('.d5-success-model')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  private gearsFrame(): HTMLIFrameElement | null {
    return document.querySelector<HTMLIFrameElement>('iframe[src*="d5-mechanism-gears"]');
  }

  private syncGears(index: number): void {
    this.gearsFrame()?.contentWindow?.postMessage({ type: 'd5-gears-select', index }, window.location.origin);
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
