import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
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

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  address: Address;

  @IsNotEmpty()
  items: Item[];

  @IsNotEmpty()
  user: User;
}
