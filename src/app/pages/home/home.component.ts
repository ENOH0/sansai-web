import { Component, OnDestroy, OnInit, NgZone, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, DIMENSIONS, EVAL_LINK } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';

/** รายการในสารบัญหน้าแรก — แก้ภาพหรือข้อความได้ที่นี่ที่เดียว */
interface HomeLink {
  no: string; name: string; sub: string; weight?: number;
  path?: string; url?: string; image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly school = SCHOOL;
  private readonly zone = inject(NgZone);

  /** ภาพพื้นหลังที่ไล่เปลี่ยนในหน้าปก */
  readonly slides = [
    'gallery/d1/g08.jpg',
    'gallery/d1/g10.jpg',
    'gallery/d1/g15.jpg',
    'gallery/d3/g12.jpg',
    'gallery/d1/g16.jpg'
  ];
  readonly current = signal(0);
  private timer?: number;

  readonly links: HomeLink[] = [
    ...DIMENSIONS.map(d => ({
      no: String(d.no), name: d.name, sub: d.desc, weight: d.weight,
      path: d.path, image: `gallery/d${d.no}/g0${[6, 1, 2, 2, 7][d.no - 1]}.jpg`
    })),
    {
      no: '★', name: 'รางวัลเชิงประจักษ์',
      sub: 'รางวัลของนักเรียนและครู พร้อมภาพหลักฐานเชิงประจักษ์ ระดับนานาชาติ ระดับชาติ และระดับภูมิภาค',
      path: '/awards', image: 'gallery/d1/g02.jpg'
    },
    {
      no: '↗', name: EVAL_LINK.label,
      sub: 'แบบฟอร์มสำหรับคณะกรรมการเลือกรายการอาหารและชุดการแสดงในวันประเมิน (เปิดในแท็บใหม่)',
      url: EVAL_LINK.url, image: 'gallery/d1/g16.jpg'
    }
  ];

  ngOnInit(): void {
    // เปลี่ยนภาพพื้นหลังนอก zone เพื่อไม่ให้ Angular ตรวจสอบทั้งหน้าทุก 6 วินาที
    this.zone.runOutsideAngular(() => {
      this.timer = window.setInterval(() => {
        this.zone.run(() => this.current.set((this.current() + 1) % this.slides.length));
      }, 6000);
    });
  }

  ngOnDestroy(): void {
    if (this.timer !== undefined) clearInterval(this.timer);
  }
}
