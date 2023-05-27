import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  payment: string;

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
