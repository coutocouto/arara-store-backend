import { IsNotEmpty, IsString } from 'class-validator';
import { Address } from '../../addresses/entities/address.entity';
import { User } from '../../users/entities/user.entity';

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
  address: Address;

  @IsNotEmpty()
  user: User;
}
