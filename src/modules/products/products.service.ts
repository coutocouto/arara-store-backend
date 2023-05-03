import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productRepository: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create({ ...createProductDto });
  }

  async findAll({
    searchParams,
    page,
    take,
  }: {
    searchParams: { search: string };
    page: number;
    take: number;
  }): Promise<Product[]> {
    if (searchParams.search) {
      return await this.productRepository.findAll<Product>({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${searchParams.search}%`,
            },
            description: {
              [Op.like]: `%${searchParams.search}%`,
            },
          },
        },
        offset: +page * +take || 10,
        limit: +take,
      });
    }
    return await this.productRepository.findAll<Product>({
      offset: +page * +take || 10,
      limit: +take,
    });
  }

  async findToHomePage(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findByPk<Product>(id);
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(updateProductDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.productRepository.destroy({
      where: {
        id,
      },
    });
  }
}
