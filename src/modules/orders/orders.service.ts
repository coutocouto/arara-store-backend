import { Inject, Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
  ) {}

  async create(CreateOrderDto: CreateOrderDto) {
    return await this.ordersRepository.create({ ...CreateOrderDto });
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.findAll<Order>();
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findByPk<Order>(id);
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
