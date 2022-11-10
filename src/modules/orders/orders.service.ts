import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  create(createOrderDto: CreateOrderDto) {
    const currentMaxId = this.orders[this.orders.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const order: Order = {
      id,
      ...createOrderDto,
    };

    const orderExists = this.orders.find(
      (order) => order.id === createOrderDto.id,
    );

    if (orderExists) {
      return 'Order already exists';
    }

    this.orders.push(order);

    return order;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new EntityNotFoundError('Order was not found.');
    }

    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = this.findOne(id);

    const newOrder: Order = {
      ...order,
      ...updateOrderDto,
    };

    const findIndex = this.orders.findIndex((order) => order.id === id);
    this.orders[findIndex] = newOrder;

    return newOrder;
  }

  remove(id: number) {
    const findIndex = this.orders.findIndex((user) => user.id === id);
    this.orders.splice(findIndex, 1);
    return;
  }
}
