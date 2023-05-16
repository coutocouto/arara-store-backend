import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateItemDto {
  @IsInt()
  @Min(0)
  @Max(9999999)
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @Min(0)
  @Max(9999999)
  @IsNotEmpty()
  cartId: number;

  @IsInt()
  @Min(0)
  @Max(9999999)
  @IsNotEmpty()
  quantity: number;
}
