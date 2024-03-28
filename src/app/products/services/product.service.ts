import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { PRODUCT_CONSTANTS } from '../constants/product-constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProductList(limit: number): Observable<ProductModel[]> {
    // Define http params
    const params = new HttpParams().set('limit', limit.toString());

    // Make the http request with adding the http params
    return this.httpClient.get<ProductModel[]>(
      PRODUCT_CONSTANTS.GET_PRODUCT_LIST_ENDPOINT,
      {
        params,
      }
    );
  }
}
