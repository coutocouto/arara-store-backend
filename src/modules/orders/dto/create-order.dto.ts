import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsOptional()
  payment?: string;

  @IsNumber()
  @IsNotEmpty()
  shippingPrice: number;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  cartId: number;

  @IsNotEmpty()
  addressId: number;
}
