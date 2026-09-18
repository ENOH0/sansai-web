import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AwardSlide {
  names: string[];
  award: string;
  detail?: string;
  org?: string;
  level?: string;
  year?: string;
  photos?: string[];
}

/** สไลด์โชว์รางวัลนักเรียน เลื่อนอัตโนมัติ หยุดเมื่อชี้เมาส์หรือแตะ */
@Component({
  selector: 'app-award-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './award-slideshow.component.html',
  styleUrl: './award-slideshow.component.css'
})
export class AwardSlideshowComponent implements OnInit, OnDestroy {
  @Input() items: AwardSlide[] = [];
  @Input() title = '';
  @Input() lead = '';
  /** ระยะเวลาต่อสไลด์ (มิลลิวินาที) */
  @Input() interval = 7000;

  readonly index = signal(0);
  readonly paused = signal(false);
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    const reduce = typeof matchMedia === 'function'
      && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) this.start();
  }

  ngOnDestroy(): void { this.stop(); }

  /** ช่องใส่ภาพ 2 ช่องเสมอ ถ้ายังไม่มีรูปจะเป็นกรอบว่าง */
  slots(item: AwardSlide): (string | null)[] {
    const photos = item.photos ?? [];
    return [photos[0] ?? null, photos[1] ?? null];
  }

  go(i: number): void {
    const n = this.items.length;
    if (!n) return;
    this.index.set((i + n) % n);
  }

  next(): void { this.go(this.index() + 1); }
  prev(): void { this.go(this.index() - 1); }

  select(i: number): void { this.go(i); this.restart(); }

  hold(on: boolean): void {
    this.paused.set(on);
    if (on) this.stop(); else this.start();
  }

  private start(): void {
    this.stop();
    if (this.items.length < 2) return;
    this.timer = setInterval(() => this.next(), this.interval);
  }

  private stop(): void {
    if (this.timer !== null) { clearInterval(this.timer); this.timer = null; }
  }

  private restart(): void { if (!this.paused()) this.start(); }
}
