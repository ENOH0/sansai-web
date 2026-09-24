import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM3 } from '../../data/dimension3.data';
import { SCHOOL } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { BanchuenModelComponent } from '../../shared/banchuen-model/banchuen-model.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { AwardSlideshowComponent } from '../../shared/award-slideshow/award-slideshow.component';

@Component({
  selector: 'app-dimension3',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    BanchuenModelComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    CycleFlowComponent, CalloutComponent, PagerComponent, AwardSlideshowComponent
  ],
  templateUrl: './dimension3.component.html',
  styleUrl: './dimension3.component.css'
})
export class Dimension3Component {
  /* ความสูงจริงของโมเดลการบริหาร ที่ส่งมาจาก iframe */
  readonly adminModelHeight = signal(900);

  readonly learnModelHeight = signal(900);
  readonly digitalModelHeight = signal(1000);
  readonly banchuen35Height = signal(900);

  /** ระบบสารสนเทศ 3.5 แบ่ง 2 ฝั่ง — เลขคือลำดับใน information.systems (เริ่มที่ 1) */
  private readonly adminSystemNos = [1, 2, 4, 6, 7, 9, 10, 11, 13];
  readonly systemGroups = [
    { title: 'การบริหารจัดการ', items: DIM3.information.systems.filter((_, i) => this.adminSystemNos.includes(i + 1)) },
    { title: 'การบริหารจัดการเรียนการสอน', items: DIM3.information.systems.filter((_, i) => !this.adminSystemNos.includes(i + 1)) }
  ];
  readonly inputModelHeight = signal(1100);
  readonly dlrModelHeight = signal(1200);
  readonly leaderModelHeight = signal(900);
  readonly orgModelHeight = signal(950);
  readonly iqaModelHeight = signal(1100);
  readonly qaModelHeight = signal(920);

  @HostListener('window:message', ['$event'])
  resizeAdminModel(event: MessageEvent<{ type?: string; height?: number; top?: number; bottom?: number }>): void {
    if (typeof window === 'undefined' || event.origin !== window.location.origin) return;

    // โมเดล LEARN ขอให้หน้าหลักเลื่อนไปยังกล่องรายละเอียดที่เพิ่งเปิด
    if (event.data?.type === 'd3-learn-model-scroll') {
      const frame = document.querySelector<HTMLIFrameElement>('.d3-learn-model iframe');
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

    // โมเดลสถานศึกษาดิจิทัลเปิดหน้าต่างรายละเอียด → เลื่อนให้เห็นหัวโมเดล
    if (event.data?.type === 'd3-banchuen35-scroll') {
      document.querySelector('.d3-banchuen35-model')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (event.data?.type === 'd3-digital-model-scroll') {
      document.querySelector('.d3-digital-model')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const height = Number(event.data.height);
    if (!Number.isFinite(height)) return;
    if (event.data?.type === 'd3-banchuen35-height') this.banchuen35Height.set(Math.max(600, height));
    if (event.data?.type === 'd3-input-model-height') this.inputModelHeight.set(Math.max(600, height));
    if (event.data?.type === 'd3-dlr-model-height') this.dlrModelHeight.set(Math.max(600, height));
    if (event.data?.type === 'd3-leader-model-height') this.leaderModelHeight.set(Math.max(500, height));
    if (event.data?.type === 'd3-org-model-height') this.orgModelHeight.set(Math.max(500, height));
    if (event.data?.type === 'd3-iqa-model-height') this.iqaModelHeight.set(Math.max(500, height));
    if (event.data?.type === 'd3-qa-model-height') this.qaModelHeight.set(Math.max(400, height));
    if (event.data?.type === 'd3-digital-model-height') this.digitalModelHeight.set(Math.max(600, height));
    if (event.data?.type === 'd3-banchuen-model-height') this.adminModelHeight.set(Math.max(420, Math.min(2400, height)));
    if (event.data?.type === 'd3-learn-model-height') this.learnModelHeight.set(Math.max(620, height));
  }

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
