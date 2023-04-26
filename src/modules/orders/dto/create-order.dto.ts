import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';

export class CreateOrderDto {
  id: number;
  address: Address;
  statusPayment: string;
  statusOrder: string;
  payment: string;
  date: Date;
  items: Item[];
  user: User;
}
