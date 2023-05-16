import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  statusPayment: string;

  @IsString()
  @IsNotEmpty()
  statusOrder: string;

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
