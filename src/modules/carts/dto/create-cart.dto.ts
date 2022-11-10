import { Item } from '../../items/entities/item.entity';

export class CreateCartDto {
  id: number;
  items: Item;
}
