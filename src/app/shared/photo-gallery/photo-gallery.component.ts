import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';
import { GalleryPhoto } from '../../data/gallery.data';

/** แกลเลอรีภาพกิจกรรม — แตะที่ภาพเพื่อดูขนาดเต็ม */
@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  @Input() title = 'ภาพกิจกรรม';
  @Input() lead = '';
  @Input() items: GalleryPhoto[] = [];

  lightbox: GalleryPhoto | null = null;

  open(p: GalleryPhoto): void { this.lightbox = p; }
  close(): void { this.lightbox = null; }
}
