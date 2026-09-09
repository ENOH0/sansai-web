import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSeries } from '../../core/models';
import { DIM4 } from '../../data/dimension4.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { HomeFabComponent } from '../../shared/home-fab/home-fab.component';
import { PagerComponent } from '../../shared/pager/pager.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';

@Component({
  selector: 'app-dimension4',
  standalone: true,
  imports: [
    HomeFabComponent,
    PhotoGalleryComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, CycleFlowComponent, PagerComponent,
    LineChartComponent
  ],
  templateUrl: './dimension4.component.html',
  styleUrl: './dimension4.component.css'
})
export class Dimension4Component {
  readonly gallery = GALLERY['d4'];
  readonly d = DIM4;
  readonly indicatorKeys = Object.keys(DIM4.indicators) as (keyof typeof DIM4.indicators)[];

  private readonly palette = ['#1e4d9e', '#d4a537', '#4f88d4'];

  readonly outcomeSeries: LineSeries[] = DIM4.assessment.outcome.series.map((s, i) => ({
    name: s.name, values: s.values, color: this.palette[i % 3]
  }));
}
