import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter, withInMemoryScrolling, withViewTransitions
} from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // เลื่อนขึ้นบนสุดเมื่อเปลี่ยนหน้า และรองรับการกระโดดไปยัง #anchor
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      // เปลี่ยนหน้าแบบนุ่มนวล (เบราว์เซอร์ที่รองรับ)
      withViewTransitions()
    ),
    provideHttpClient(withFetch())
  ]
};
