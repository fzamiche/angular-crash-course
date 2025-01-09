import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/';

  constructor(private httpClient: HttpClient) { }

  getLimitsProducts(limit: number = 5){
    const productsUrl = `${this.baseUrl}products?limit=${limit}`; // template literal syntax (backticks ``) pour concaténer des variables dans une string : https://fakestoreapi.com/products?limit=5
    return  this.httpClient.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProducts(product: ProductRepresentation){
    const productsUrl = `${this.baseUrl}products`;
    return this.httpClient.post<ProductRepresentation>(productsUrl, product);
  }
}
