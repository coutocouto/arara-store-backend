import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Cart } from '../index.entities';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
    @Inject('CARTS_REPOSITORY')
    private cartsRepository: typeof Cart,
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    return await this.ordersRepository.create({ ...createOrderDto });
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
      include: ['address', 'cart', 'user'],
    });
  }

  async findAllByUserId(userId: number): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>({
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
