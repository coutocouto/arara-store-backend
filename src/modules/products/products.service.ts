import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';
import { Image } from '../index.entities';
import { CreateImageDto } from '../images/dto/create-image.dto';

interface IOptionsParams {
  search: string;
  page: any;
  take: any;
}
@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: typeof Product,
    @Inject('IMAGES_REPOSITORY')
    private imagesRepository: typeof Image,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productsRepository.create({
      ...createProductDto,
    });
    await this.createImages({
      productId: product.id,
      images: createProductDto.images,
    });
    return product;
  }

  async findAll({
    search,
    page = 0,
    take = 10,
  }: IOptionsParams): Promise<Product[]> {
    if (search) {
      return await this.productsRepository.findAll<Product>({
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
        include: ['images'],
        offset: +page * +take,
        limit: +take,
      });
    }
    return await this.productsRepository.findAll<Product>({
      include: ['images'],
      offset: +page * +take,
      limit: +take,
    });
  }

  async findToHomePage(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findByPk<Product>(id, {
      include: ['images'],
    });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<[affectedCount: number]> {
    return await this.productsRepository.update(updateProductDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    const deleted = await this.productsRepository.destroy({
      where: {
        id,
      },
    });
    if (deleted > 0) {
      await this.removeImages(id);
    }
    return deleted;
  }

  async createImages({ productId, images }: CreateImageDto) {
    const createImageDto = images.map((imageUrl: string) => {
      return { productId, imageUrl };
    });
    return await this.imagesRepository.bulkCreate(createImageDto);
  }

  async removeImages(productId: number): Promise<number> {
    return await this.imagesRepository.destroy({
      where: {
        productId,
      },
    });
  }
}
