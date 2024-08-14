import { Component } from '@angular/core';
import { TABLE_HEAD } from '../../constants/table.constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
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
}
