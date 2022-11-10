import { Product } from '../../products/entities/product.entity';

export class CreateItemDto {
  product: Product;
  quantity: number;
}
