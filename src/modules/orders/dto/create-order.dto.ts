import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
import { IsNotEmpty, IsString } from 'class-validator';
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
