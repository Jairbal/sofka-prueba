import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../../constants/api.constants';
import { IProduct } from '../../models/product.model';
import { IResponse } from '../../models/response.model';

export type EntityResponseType = HttpResponse<IResponse<IProduct[]>>

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<EntityResponseType> {
    return this.http.get<IResponse<IProduct[]>>("/bp/products", { observe: 'response' });
  }
}
