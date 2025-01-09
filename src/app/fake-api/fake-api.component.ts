import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-fake-api',
  templateUrl: './fake-api.component.html',
  styleUrls: ['./fake-api.component.scss']
})
export class FakeApiComponent implements OnInit {

  constructor(private productService : ProductService ) {
  }

  ngOnInit(): void {
    this.productService.getLimitsProducts()
      .subscribe(
        {
          next: (data) => {
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
