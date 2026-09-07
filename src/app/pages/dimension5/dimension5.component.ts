import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM5 } from '../../data/dimension5.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { PagerComponent } from '../../shared/pager/pager.component';

@Component({
  selector: 'app-dimension5',
  standalone: true,
  imports: [
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
  ],
  templateUrl: './dimension5.component.html',
  styleUrl: './dimension5.component.css'
})
export class Dimension5Component {
  readonly d = DIM5;
  readonly indicatorKeys = Object.keys(DIM5.indicators) as (keyof typeof DIM5.indicators)[];
}
