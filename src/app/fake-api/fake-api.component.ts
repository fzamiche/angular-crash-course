import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/api/products/product.service";

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
          }
        }
      );
  }

}
