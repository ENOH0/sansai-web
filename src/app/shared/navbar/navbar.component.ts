import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SCHOOL, NAV_ITEMS } from '../../data/school.data';

/**
 * แถบนำทางด้านบน (ตรึงอยู่บนสุดเสมอ)
 * - บน iPad แนวตั้งจะยุบเป็นปุ่มเมนู เพื่อให้พื้นที่อ่านเนื้อหาเต็มที่
 * - มีแถบแสดงความคืบหน้าการอ่านของหน้า
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly school = SCHOOL;
  readonly items = NAV_ITEMS;

  readonly open = signal(false);
  readonly scrolled = signal(false);
  readonly progress = signal(0);

  private router = inject(Router);

  constructor() {
    // ปิดเมนูอัตโนมัติเมื่อเปลี่ยนหน้า
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.close());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.scrolled.set(y > 12);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
  }

  toggle(): void { this.open.update(v => !v); }
  close(): void { this.open.set(false); }
}
