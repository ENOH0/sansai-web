import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SCHOOL, EVAL_LINK } from '../../data/school.data';

interface WelcomeButton {
  label: string;
  sub: string;
  icon: 'calendar' | 'video' | 'dashboard' | 'food' | 'map';
  /** ลิงก์ในเว็บ (เช่น /dashboard) หรือลิงก์ภายนอก (https://...) · เว้นว่าง = ยังไม่มีข้อมูล */
  link: string;
  main?: boolean;
}

/**
 * หน้าต้อนรับกรรมการ — วิดีโอวนลูปแบบภาพพักหน้าจอ
 * แตะหน้าจอแล้วเปิดเมนู 5 ปุ่ม · ไม่มีการแตะนาน 90 วินาที กลับเป็นภาพพักหน้าจอเอง
 */
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('cover') private cover?: ElementRef<HTMLVideoElement>;
  readonly school = SCHOOL;
  readonly menuOpen = signal(false);
  readonly videoOpen = signal(false);

  /** แก้ชื่อ/ลิงก์ปุ่มได้ที่นี่ */
  readonly buttons: WelcomeButton[] = [
    { label: 'กำหนดการ', sub: 'Schedule', icon: 'calendar', link: '/models/evaluation-schedule.html' },
    { label: 'VDO', sub: 'วิดีโอนำเสนอ', icon: 'video', link: '' },
    { label: 'Dashboard', sub: 'ข้อมูล 5 ด้าน', icon: 'dashboard', link: '/dashboard', main: true },
    { label: 'อาหาร', sub: 'เลือกอาหารและการแสดง', icon: 'food', link: EVAL_LINK.url },
    { label: 'ผังโรงเรียน', sub: 'แผนผัง 3 มิติ', icon: 'map', link: '/models/school-map-3d.html' }
  ];

  private idle?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    document.documentElement.classList.add('is-welcome');
  }

  ngAfterViewInit(): void {
    const v = this.cover?.nativeElement;
    if (!v) return;
    v.muted = true;   // iPad ยอมเล่นอัตโนมัติเฉพาะวิดีโอที่ปิดเสียง
    this.playCover();
    document.addEventListener('visibilitychange', this.onVisible);
  }

  /** iPad โหมดประหยัดพลังงานอาจไม่เล่นเอง — ลองเล่นใหม่เมื่อแตะจอหรือกลับมาที่แท็บ */
  private playCover(): void {
    const v = this.cover?.nativeElement;
    if (v && v.paused) v.play().catch(() => { /* แสดงภาพนิ่ง poster แทน */ });
  }

  private readonly onVisible = () => { if (!document.hidden) this.playCover(); };

  ngOnDestroy(): void {
    document.removeEventListener('visibilitychange', this.onVisible);
    document.documentElement.classList.remove('is-welcome');
    clearTimeout(this.idle);
  }

  /** ลิงก์ภายนอก หรือไฟล์ .html ในเว็บ (เช่น ผังโรงเรียน 3 มิติ) ใช้ href แทน routerLink */
  isExternal(link: string): boolean {
    return /^https?:\/\//.test(link) || link.endsWith('.html');
  }

  targetOf(link: string): string {
    if (link.includes('youtube.com/embed/')) return '_self';
    return /^https?:\/\//.test(link) ? '_blank' : '_self';
  }

  /** แตะหน้าปก: เปิดเมนู — ต้องไม่ return false (Angular จะ preventDefault ทำให้ลิงก์ในเมนูกดไม่ได้) */
  onCoverTap(): void {
    if (!this.menuOpen()) this.openMenu();
  }

  openMenu(): void {
    this.menuOpen.set(true);
    this.resetIdle();
  }

  closeMenu(event?: Event): void {
    event?.stopPropagation();
    this.videoOpen.set(false);
    this.menuOpen.set(false);
    clearTimeout(this.idle);
  }

  openVideo(event: Event): void {
    event.stopPropagation();
    clearTimeout(this.idle);
    this.videoOpen.set(true);
  }

  closeVideo(event?: Event): void {
    event?.stopPropagation();
    this.videoOpen.set(false);
    this.resetIdle();
  }

  @HostListener('document:pointerdown')
  @HostListener('document:keydown')
  resetIdle(): void {
    this.playCover();
    if (!this.menuOpen()) return;
    clearTimeout(this.idle);
    this.idle = setTimeout(() => this.menuOpen.set(false), 90000);
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.videoOpen()) this.closeVideo();
    else this.closeMenu();
  }
}
