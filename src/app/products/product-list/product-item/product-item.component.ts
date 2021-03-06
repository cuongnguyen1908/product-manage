import { ProductsService } from './../../products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

  }

  onSelected(){
    this.productService.productSelected.emit(this.product);
  }

}
