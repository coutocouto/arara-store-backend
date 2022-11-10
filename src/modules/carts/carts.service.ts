import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from '../../errors/not-found.error';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {
  private carts: Cart[];
  create(createCartDto: CreateCartDto) {
    const currentMaxId = this.carts[this.carts.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const cart: Cart = {
      id,
      ...createCartDto,
    };

    const cartExist = this.carts.find((cart) => cart.id === createCartDto.id);

    if (cartExist) {
      return 'Cart already exists';
    }

    this.carts.push(cart);

    return cart;
  }

  findAll() {
    return this.carts;
  }

  findOne(id: number) {
    const cart = this.carts.find((cart) => cart.id === id);

    if (!cart) {
      throw new EntityNotFoundError('Cart was not found.');
    }

    return cart;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    const cart = this.findOne(id);

    const newCart: Cart = {
      ...cart,
      ...updateCartDto,
    };

    const findIndex = this.carts.findIndex((cart) => cart.id === id);
    this.carts[findIndex] = newCart;

    return newCart;
  }

  remove(id: number) {
    const findIndex = this.carts.findIndex((user) => user.id === id);
    this.carts.splice(findIndex, 1);
    return;
  }
}
