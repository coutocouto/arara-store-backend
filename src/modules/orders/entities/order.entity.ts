import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
import { User } from '../../users/entities/user.entity';

export class Order {
  id: number;
  address: Address;
  statusPayment: string;
  statusOrder: string;
  payment: string;
  date: Date;
  items: Item[];
  user: User;
}
