import { Routes } from '@angular/router';

/**
 * แต่ละด้านแยกเป็นหน้าของตัวเอง และโหลดแบบ lazy
 * ทำให้เปิดหน้าแรกได้เร็วบน iPad และแก้ไขทีละด้านได้สะดวก
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'โรงเรียนสันทรายวิทยาคม — รางวัลพระราชทาน'
  },
  {
    path: 'dimension-1',
    loadComponent: () => import('./pages/dimension1/dimension1.component').then(m => m.Dimension1Component),
    title: 'ด้านที่ 1 คุณภาพนักเรียน'
  },
  {
    path: 'dimension-2',
    loadComponent: () => import('./pages/dimension2/dimension2.component').then(m => m.Dimension2Component),
    title: 'ด้านที่ 2 การบริหารหลักสูตรและงานวิชาการ'
  },
  {
    path: 'dimension-3',
    loadComponent: () => import('./pages/dimension3/dimension3.component').then(m => m.Dimension3Component),
    title: 'ด้านที่ 3 การบริหารและการจัดการศึกษา'
  },
  {
    path: 'dimension-4',
    loadComponent: () => import('./pages/dimension4/dimension4.component').then(m => m.Dimension4Component),
    title: 'ด้านที่ 4 การจัดการเรียนรู้ที่เน้นผู้เรียนเป็นสำคัญ'
  },
  {
    path: 'dimension-5',
    loadComponent: () => import('./pages/dimension5/dimension5.component').then(m => m.Dimension5Component),
    title: 'ด้านที่ 5 ความดีเด่นของสถานศึกษา'
  },
  {
    path: 'awards',
    loadComponent: () => import('./pages/awards/awards.component').then(m => m.AwardsComponent),
    title: 'รางวัลเชิงประจักษ์ของนักเรียนและครู'
  },
  { path: '**', redirectTo: '' }
];
