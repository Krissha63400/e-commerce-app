import { Component } from '@angular/core';
import { ProductsDataService } from '../products-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{


  constructor(public productsDataService: ProductsDataService) {}

}
