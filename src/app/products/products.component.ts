import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductRepresentation} from "../services/api/models/product-representation";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products: ProductRepresentation[] = [];

  constructor(private productService : ProductService ) {
  }

  ngOnInit(): void {
    this.productService.getLimitsProducts()
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log(data);
          },
          error: (error: HttpErrorResponse) => {
            if(error.error instanceof ErrorEvent){
              console.error('An error occurred:', error.error.message);
            }else {
              console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
            }
          }
        }
      );
  }

}
