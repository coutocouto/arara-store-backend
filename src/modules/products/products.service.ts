import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './entities/dto/create-product.dto';
import { UpdateProductDto } from './entities/dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

interface IOptionsParams {
  search: string;
  page: any;
  take: any;
}
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
    search,
    page = 0,
    take = 10,
  }: IOptionsParams): Promise<Product[]> {
    if (search) {
      return await this.productRepository.findAll<Product>({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${search}%`,
            },
            description: {
              [Op.like]: `%${search}%`,
            },
          },
        },
        offset: +page * +take,
        limit: +take,
      });
    }
    return await this.productRepository.findAll<Product>({
      offset: +page * +take,
      limit: +take,
    });
  }

  async findToHomePage(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findByPk<Product>(id);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<[affectedCount: number]> {
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
