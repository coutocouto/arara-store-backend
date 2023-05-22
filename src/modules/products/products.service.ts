import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';
import { Image } from '../index.entities';
import { CreateImageDto } from '../images/dto/create-image.dto';

interface IOptionsParams {
  search?: string;
  page?: number | any;
  take?: number | any;
  disabled?: boolean;
}

interface IDiscountParams {
  id: number;
  discount: any;
}
@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: typeof Product,
    @Inject('IMAGES_REPOSITORY')
    private imagesRepository: typeof Image,
  ) { }

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

  async createDiscount({
    id,
    discount,
  }: IDiscountParams): Promise<[Product, boolean]> {
    const { dataValues: product } = await this.findOne(+id);

    if (!product.disabled) {
      product.disabled = true;
      await this.update(id, product);
    }

    // DESABILITA OUTROS DESCONTOS (NÃO LEMBRO SE VAI PODE TER MAIS DE UM DESCONTO ATIVO, SE FOR PODER E SÓ TIRAR ESSE BLOCO)
    this.productsRepository.update(
      { disabled: true },
      {
        where: {
          inherited: id,
        },
      },
    );

    product.disabled = false;
    product.discount = discount;
    product.inherited = id;
    delete product.id;
    delete product.createdAt;
    delete product.updatedAt;

    return await this.productsRepository.findOrCreate({
      where: {
        [Op.and]: [{ inherited: id }, { discount }],
      },
      defaults: {
        ...product,
      },
    });
  }

  async findAll({
    search,
    page = 0,
    take = 10,
    disabled = false,
  }: IOptionsParams): Promise<Product[]> {
    if (search) {
      return await this.productsRepository.findAll<Product>({
        where: {
          disabled,
          [Op.or]: {
            name: {
              [Op.like]: `%${search}%`,
            },
            description: {
              [Op.like]: `%${search}%`,
            },
          },
        },
        include: ['images', 'items'],
        offset: +page * +take,
        limit: +take,
      });
    }
    return await this.productsRepository.findAll<Product>({
      where: {
        disabled,
      },
      include: ['images', 'items'],
      offset: +page * +take,
      limit: +take,
    });
  }

  async findToHomePage(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findByPk<Product>(id, {
      include: ['images', 'items'],
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

  async disableDiscount(id: number): Promise<[affectedCount: number]> {
    const product = await this.findOne(+id);

    const productUpdated = await this.productsRepository.update(
      { disabled: true },
      {
        where: {
          id,
        },
      },
    );

    await this.enableOrDisableFather(product);

    return productUpdated;
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

  private async createImages({ productId, images }: CreateImageDto) {
    const createImageDto = images.map((imageUrl: string) => {
      return { productId, imageUrl };
    });
    return await this.imagesRepository.bulkCreate(createImageDto);
  }

  private async removeImages(productId: number): Promise<number> {
    return await this.imagesRepository.destroy({
      where: {
        productId,
      },
    });
  }

  private async enableOrDisableFather(product: Product): Promise<boolean> {
    // PARA CASO DE INCONSISTÊNCIA NOS DADOS EU VALIDO
    const { count } = await this.productsRepository.findAndCountAll({
      where: {
        [Op.and]: [{ inherited: product.inherited }, { disabled: false }],
      },
    });

    if (count === 0) {
      await this.update(product.inherited, { disabled: false });
      return true;
    }
    return false;
  }
}
