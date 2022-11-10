import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  create(createItemDto: CreateItemDto) {
    const currentMaxId = this.items[this.items.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const item: Item = {
      id,
      ...createItemDto,
    };

    const itemExist = this.items.find(
      (item) => item.product === createItemDto.product,
    );

    const findIndex = this.items.findIndex(
      (user) => user.product === createItemDto.product,
    );

    if (itemExist) {
      this.items[findIndex].quantity += 1;
    } else {
      this.items.push(item);
    }

    return item;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    const item = this.items.find((item) => item.id === id);

    if (!item) {
      throw new EntityNotFoundError('item was not found.');
    }

    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    const item = this.findOne(id);

    const newItem: Item = {
      ...item,
      ...updateItemDto,
    };

    const findIndex = this.items.findIndex((user) => user.id === id);
    this.items[findIndex] = newItem;

    return newItem;
  }

  remove(id: number) {
    const findIndex = this.items.findIndex((item) => item.id === id);
    this.items.splice(findIndex, 1);
    return;
  }
}
