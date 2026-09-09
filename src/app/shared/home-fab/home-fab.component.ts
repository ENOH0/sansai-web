import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** ปุ่มกลับหน้าแรกแบบลอย ใช้ร่วมกันทุกหน้าด้าน */
@Component({
  selector: 'app-home-fab',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="home-fab" routerLink="/" aria-label="กลับหน้าแรก">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.6V20h14V9.6" />
      </svg>
      <span>หน้าแรก</span>
    </a>
  `,
  styleUrl: './home-fab.component.css'
})
export class HomeFabComponent {}
