import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../directives/reveal.directive';

/** ปุ่มนำทางไปด้านก่อนหน้าและด้านถัดไป */
@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent {
  @Input() prevPath = '';
  @Input() prevName = '';
  @Input() nextPath = '';
  @Input() nextName = '';
}
