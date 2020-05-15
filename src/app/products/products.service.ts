import { Product } from './product.model';
import { EventEmitter } from '@angular/core';
export class ProductsService {

  private products: Product[] = [
    new Product(1, 'Apple 1', 21, 19, 3, 'Green Apple abc abc abc', 10, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(2, 'Apple 2', 21, 19, 21, 'Green Apple abc abc abc', 10, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(3, 'Apple 3', 21, 19, 324, 'Green Apple abc abc abc', 10, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(4, 'Apple 4', 21, 19, 54, 'Green Apple abc abc abc', 3, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(5, 'Apple 5', 21, 19, 76, 'Green Apple abc abc abc', 21, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(6, 'Apple 6', 21, 19, 12, 'Green Apple abc abc abc', 6, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(7, 'Apple 7', 21, 19, 54, 'Green Apple abc abc abc', 7, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(8, 'Apple 8', 21, 19, 76, 'Green Apple abc abc abc', 4, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(9, 'Apple 9', 21, 19, 12, 'Green Apple abc abc abc', 5, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(10, 'Apple 10', 21, 19, 1, 'Green Apple abc abc abc', 11, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(11, 'Apple 11', 21, 19, 4, 'Green Apple abc abc abc', 32, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(12, 'Apple 12', 21, 19, 6, 'Green Apple abc abc abc', 10, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(13, 'Apple 13', 21, 19, 897, 'Green Apple abc abc abc', 0, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0'),
    new Product(14, 'Apple 14', 21, 19, 32, 'Green Apple abc abc abc', 1, 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdwatercolorfruitbatch1-544-gloy-b.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e43ceebd5fe21d7dc7faecdc5324cbe0')

  ];
  productSelected = new EventEmitter<Product>();

  getProducts() {
    return this.products.slice();
  }

  sortByType(typeSort: string) {
    if(typeSort == ''){
      const newProductList: Product[] = this.products.sort((a, b) => a.id - b.id);
      return  newProductList;
    }else if(typeSort == 'bestSell') {
      console.log('best sale work!');

      const newProductList: Product[] = this.products.sort((a, b) => b.saleNumber - a.saleNumber);
      return  newProductList.slice(0, 10);
    } else {
      console.log('stock work!');
      const newProductList: Product[] = this.products.sort((a, b) => b.stock - a.stock);
      return  newProductList.slice(0, 10);
    }
  }
}
