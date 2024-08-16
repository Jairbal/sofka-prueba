import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { IProduct } from '../../models/product.model';
import { IResponse } from '../../models/response.model';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { MessageService } from './message.service';

export type EntityResponseType = HttpResponse<IResponse<IProduct[]>>
export type EntityResponseIdType = HttpResponse<boolean>

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getProducts(): Observable<EntityResponseType> {
    return this.http.get<IResponse<IProduct[]>>("/bp/products", { observe: 'response' });
  }

  submitProduct(productData: any): Observable<any> {
    productData.date_release = new Date(productData.date_release).toISOString();
    productData.date_revision = new Date(productData.date_revision).toISOString();
    return this.http.post('/bp/products', productData);
  }


  isValidId(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const id = control.value;
      return this.http.get<any>(`/bp/products/verification/${id}`).pipe(
        map(({result}) => (result) ? null : {isValidId: true})
      )
    }
  }
}
