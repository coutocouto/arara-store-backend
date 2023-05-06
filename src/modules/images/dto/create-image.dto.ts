import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  // @IsNotEmpty()
  productId: number;

  // @IsNotEmpty()
  images: Array<string>;
}
