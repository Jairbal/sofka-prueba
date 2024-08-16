import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';

export const routes: Routes = [
    {path: '', component: ListProductsComponent},
    {path: 'add-product', component: AddProductFormComponent}
];
