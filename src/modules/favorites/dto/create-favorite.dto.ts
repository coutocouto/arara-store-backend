import { IsNotEmpty } from 'class-validator';
import { Product } from '../../products/entities/product.entity';

export class CreateFavoriteDto {
  @IsNotEmpty()
  product: Product;
}
