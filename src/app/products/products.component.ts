import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  typeSort: string = '';
  selectedProduct: Product;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.productSelected.subscribe(
      (product: Product) => {
          this.selectedProduct = product;
      }
    )
  }
  onSelectAll() {
    this.typeSort = '';
  }

  onSelectBestSell() {
    this.typeSort = 'bestSell';
  }

  onSelectInStock() {
    this.typeSort = 'inStock';
  }



}
