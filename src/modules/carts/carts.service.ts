import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @Inject('CARTS_REPOSITORY')
    private cartRepository: typeof Cart,
  ) {}
  async create(createCartDto: CreateCartDto) {
    return await this.cartRepository.create({ ...createCartDto });
  }

  async findAll(): Promise<Cart[]> {
    return await this.cartRepository.findAll<Cart>({
      include: ['items', 'user'],
    });
  }

  async findOne(id: number): Promise<Cart> {
    return await this.cartRepository.findByPk<Cart>(id, {
      include: ['items', 'user'],
    });
  }

  async update(
    id: number,
    updateCartDto: UpdateCartDto,
  ): Promise<[affectedCount: number]> {
    return await this.cartRepository.update(updateCartDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.cartRepository.destroy({
      where: {
        id,
      },
    });
  }
}
