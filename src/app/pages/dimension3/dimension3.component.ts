import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIM3 } from '../../data/dimension3.data';
import { SCHOOL } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { CycleFlowComponent } from '../../shared/cycle-flow/cycle-flow.component';
import { CalloutComponent } from '../../shared/callout/callout.component';
import { BanchuenModelComponent } from '../../shared/banchuen-model/banchuen-model.component';
import { PhotoGalleryComponent } from '../../shared/photo-gallery/photo-gallery.component';
import { GALLERY } from '../../data/gallery.data';
import { PagerComponent } from '../../shared/pager/pager.component';

@Component({
  selector: 'app-dimension3',
  standalone: true,
  imports: [
    PhotoGalleryComponent,
    BanchuenModelComponent,
    CommonModule, RevealDirective, PageHeroComponent, SectionHeaderComponent,
    KpiGridComponent, CycleFlowComponent, CalloutComponent, PagerComponent
  ],
  templateUrl: './dimension3.component.html',
  styleUrl: './dimension3.component.css'
})
export class Dimension3Component {
  readonly gallery = GALLERY['d3'];
  readonly d = DIM3;
  readonly school = SCHOOL;
  readonly indicatorKeys = Object.keys(DIM3.indicators) as (keyof typeof DIM3.indicators)[];
}
