import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
import { Product } from '../../products/entities/product.entity';

export class Order {
  id: number;
  products: Product;
  address: Address;
  status: string;
  payment: string;
  items: Item[];
}
