import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  payment: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  cartId: number;

  @IsNotEmpty()
  addressId: number;
}
