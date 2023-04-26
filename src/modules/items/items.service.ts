import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY')
    private itemRepository: typeof Item,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemRepository.create({ ...createItemDto });
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.findAll<Item>();
  }

  async findOne(id: number): Promise<Item> {
    return await this.itemRepository.findByPk<Item>(id);
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<any> {
    return await this.itemRepository.update(updateItemDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.itemRepository.destroy({
      where: {
        id,
      },
    });
  }
}
