import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return this.products;
  }

  getSingleProduct(prodId: string) {
    const product = this.products.find((prod) => prod.id === prodId);
    if (!product) {
      throw new NotFoundException('Could not find Product');
    }
    return { ...product };
  }
}
