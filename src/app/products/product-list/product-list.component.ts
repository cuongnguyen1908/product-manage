import { ProductsService } from './../products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() typeSort: string;
  products: Product[];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    console.log('Type:' + this.typeSort);
    this.products = this.productService.sortByType(this.typeSort);
  }

}
