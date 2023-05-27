import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Cart, Item, Product, Image } from '../index.entities';

@Injectable()
export class OrdersService {
  private includedFields: any[];
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
    @Inject('CARTS_REPOSITORY')
    private cartsRepository: typeof Cart,
  ) {
    this.includedFields = [
      'address',
      'user',
      {
        model: Cart,
        include: [
          {
            model: Item,
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
          },
        ],
      },
    ];
  }

  async create(createOrderDto: CreateOrderDto) {
    return await this.ordersRepository.create({ ...createOrderDto });
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: this.includedFields,
    });
  }

  async findAllByUserId(userId: number): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: this.includedFields,
      where: { userId },
    });
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findByPk<Order>(id, {
      include: ['address', 'cart', 'user'],
    });
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<[affectedCount: number]> {
    return await this.ordersRepository.update(updateOrderDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.ordersRepository.destroy({
      where: {
        id,
      },
    });
  }
}
