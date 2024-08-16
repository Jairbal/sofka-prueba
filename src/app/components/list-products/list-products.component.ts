import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { SearchComponent } from '../search/search.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [TableComponent, SearchComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

}
