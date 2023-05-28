import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Cart, Item, Product, Image } from '../index.entities';

@Injectable()
export class OrdersService {
  private includeFields: any[];
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
    @Inject('CARTS_REPOSITORY')
    private cartsRepository: typeof Cart,
  ) {
    this.includeFields = [
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
    const order = await this.ordersRepository.create({ ...createOrderDto });

    await this.closeCart(createOrderDto.cartId);

    return order;
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: this.includeFields,
    });
  }

  async findAllByUserId(userId: number): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: this.includeFields,
      where: { userId },
    });
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findByPk<Order>(id, {
      include: this.includeFields,
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

  private async closeCart(id: number) {
    return await this.cartsRepository.update(
      {
        soldOut: true,
      },
      {
        where: {
          id,
        },
      },
    );
  }
}
