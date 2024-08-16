import { Component, OnInit } from '@angular/core';
import { TABLE_HEAD } from '../../../constants/table.constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../models/product.model';
import { ProductImageComponent } from '../product-image/product-image.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule, ProductImageComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  faCircleInfo = faCircleInfo;
  tableHead = TABLE_HEAD;
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  
  fetchProducts(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res.body!.data;
    });
  }

  load(): any {

  }

  dateFormat(_date: string): string {
    const date = new Date(_date);
    if (isNaN(date.getTime())) {
      return 'Fecha inválida';
    }
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
}
