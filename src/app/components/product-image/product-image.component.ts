import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css'
})
export class ProductImageComponent {
  @Input() imageUrl!: string;
  @Input() alt!: string;
  isValidImage = false;

  onLoad(): void {
    this.isValidImage = true;
  }

  getPlaceholder(): string {
    return `${this.alt[0].toLocaleUpperCase() ?? ''}${this.alt[1].toLocaleUpperCase() ?? ''}`
  }
}
