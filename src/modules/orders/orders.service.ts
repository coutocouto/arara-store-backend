import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Cart, OrderItem } from '../index.entities';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
    @Inject('ORDERITEMS_REPOSITORY')
    private orderItemsRepository: typeof OrderItem,
    @Inject('CARTS_REPOSITORY')
    private cartsRepository: typeof Cart,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = await this.ordersRepository.create({ ...createOrderDto });
    await this.createOrderItems(order);

    return order;
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: ['address', 'cart', 'user', 'orderItems'],
    });
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findByPk<Order>(id, {
      include: ['address', 'cart', 'user', 'orderItems'],
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

  async createOrderItems(order: Order) {
    const { items } = await this.cartsRepository.findByPk(+order.cartId, {
      include: ['items'],
    });
    const createOrderItemDto = [];
    for (const item of items) {
      createOrderItemDto.push({
        quantity: item.quantity,
        productId: item.productId,
        orderId: order.id,
      });
    }
    await this.orderItemsRepository.bulkCreate(createOrderItemDto);
  }
}
