import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRow } from '../../core/models';
import { RouterLink } from '@angular/router';
import { SCHOOL, DIMENSIONS } from '../../data/school.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { KpiGridComponent } from '../../shared/kpi-grid/kpi-grid.component';
import { DataTableComponent } from '../../shared/data-table/data-table.component';
import { LineChartComponent } from '../../shared/line-chart/line-chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RevealDirective,
    SectionHeaderComponent, KpiGridComponent, DataTableComponent, LineChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly school = SCHOOL;
  readonly dimensions = DIMENSIONS;

  readonly studentYears = SCHOOL.students.years;

  readonly studentSeries = [
    { name: 'มัธยมศึกษาตอนต้น', values: SCHOOL.students.rows[3].values, color: '#4f88d4' },
    { name: 'มัธยมศึกษาตอนปลาย', values: SCHOOL.students.rows[7].values, color: '#d4a537' },
    { name: 'รวมทั้งหมด', values: SCHOOL.students.rows[8].values, color: '#132f63' }
  ];

  readonly studentHeaders = ['ระดับชั้น', ...SCHOOL.students.years.map(y => 'ปี ' + y)];

  readonly studentRows: TableRow[] = SCHOOL.students.rows.map(r => ({
    cells: [r.level, ...r.values.map(v => v.toLocaleString('th-TH'))],
    total: !!r.total
  }));

  readonly staffRows: TableRow[] = SCHOOL.staff.rows.map(r => ({
    cells: [r.type, r.male || '–', r.female || '–', r.total],
    total: !!r.isTotal
  }));
}
