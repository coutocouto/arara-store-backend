import { IsNotEmpty } from 'class-validator';
import { Item } from '../../items/entities/item.entity';

export class CreateCartDto {
  @IsNotEmpty()
  items: Item[];
}
