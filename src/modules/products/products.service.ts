import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const currentMaxId = this.products[this.products.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const product: Product = {
      id,
      ...createProductDto,
    };

    const productExists = this.products.find(
      (product) => product.name === createProductDto.name,
    );

    if (productExists) {
      return 'Product already exists';
    }

    this.products.push(product);

    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new EntityNotFoundError('Product was not found.');
    }

    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);

    const newProduct: Product = {
      ...product,
      ...updateProductDto,
    };

    const findIndex = this.products.findIndex((product) => product.id === id);
    this.products[findIndex] = newProduct;

    return newProduct;
  }

  remove(id: number) {
    const findIndex = this.products.findIndex((product) => product.id === id);
    this.products.splice(findIndex, 1);
    return;
  }
}
