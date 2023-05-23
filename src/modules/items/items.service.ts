import { Inject, Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { Cart, Image, Product } from '../index.entities';
import { Op } from 'sequelize';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEMS_REPOSITORY')
    private itemRepository: typeof Item,
    @Inject('CARTS_REPOSITORY')
    private cartRepository: typeof Cart,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { id } = await this.cartRepository.findOne({
      where: {
        [Op.and]: [{ userId: createItemDto.userId }, { soldOut: false }],
      },
    });
    delete createItemDto.userId;
    createItemDto.cartId = id;
    return await this.itemRepository.create({ ...createItemDto });
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.findAll<Item>({
      include: [
        {
          model: Product,
          include: [
            {
              model: Image,
            },
          ],
        },
      ],
    });
  }

  async findOne(id: number): Promise<Item> {
    return await this.itemRepository.findByPk<Item>(id, {
      include: [
        {
          model: Product,
          include: [
            {
              model: Image,
            },
          ],
        },
      ],
    });
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
