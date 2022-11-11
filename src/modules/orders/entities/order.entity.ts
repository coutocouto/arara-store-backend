import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';

export class Order {
  id: number;
  address: Address;
  statusPayment: string;
  statusOrder: string;
  payment: string;
  items: Item[];
}
