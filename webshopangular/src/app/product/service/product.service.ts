import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilterTemplate } from '../model/filter-template';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private httpClient : HttpClient) { }

  listFilteredProducts(httpParams : HttpParams) : Observable<any>
  {
      return this.httpClient.get<Product>(this.baseUrl + '/product/list', { params: httpParams });
  }

  

}
