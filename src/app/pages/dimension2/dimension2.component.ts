import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from '../../core/models';
import { DIM2 } from '../../data/dimension2.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { SmartWheelComponent } from '../../shared/smart-wheel/smart-wheel.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { PagerComponent } from '../../shared/pager/pager.component';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dimension2',
  standalone: true,
  imports: [
    SmartWheelComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, CycleFlowComponent, DataTableComponent, CalloutComponent,
    PagerComponent, BarChartComponent
  ],
  templateUrl: './dimension2.component.html',
  styleUrl: './dimension2.component.css'
})
export class Dimension2Component {
  readonly gallery = GALLERY['d2'];
  readonly d = DIM2;

  readonly indicatorKeys = Object.keys(DIM2.indicators) as (keyof typeof DIM2.indicators)[];

  readonly courseSeries = [
    { name: 'มัธยมศึกษาตอนต้น', values: DIM2.assessment.planCount.lower, color: '#4f88d4' },
    { name: 'มัธยมศึกษาตอนปลาย', values: DIM2.assessment.planCount.upper, color: '#d4a537' },
    { name: 'รวมทั้งหมด', values: DIM2.assessment.planCount.total, color: '#132f63' }
  ];

  readonly upperRows: TableRow[] = [
    ...DIM2.curriculum.upperCourses.map(c => ({
      cells: [c.name, ...c.y.map(v => (v ? '✓' : '–'))]
    })),
    { cells: ['รวมแผนการเรียน ม.ปลาย', ...DIM2.assessment.planCount.upper.map(String)], total: true }
  ];

  readonly planRows: TableRow[] = [
    { cells: ['มัธยมศึกษาตอนต้น', ...DIM2.assessment.planCount.lower.map(String)] },
    { cells: ['มัธยมศึกษาตอนปลาย', ...DIM2.assessment.planCount.upper.map(String)] },
    { cells: ['รวมทั้งหมด', ...DIM2.assessment.planCount.total.map(String)], total: true }
  ];
}
