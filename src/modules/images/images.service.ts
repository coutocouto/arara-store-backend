import { Inject, Injectable } from '@nestjs/common';
import { Image } from '../index.entities';

@Injectable()
export class ImagesService {
  constructor(
    @Inject('IMAGES_REPOSITORY')
    private imagesRepository: typeof Image,
  ) {}

  async create(createImageDto: {
    productId: number;
    imageUrl: string;
  }): Promise<Image> {
    return await this.imagesRepository.create({ ...createImageDto });
  }

  async findAll(productId: number): Promise<Image[]> {
    return await this.imagesRepository.findAll<Image>({
      where: {
        productId,
      },
    });
  }

  async findOne(id: number): Promise<Image> {
    return await this.imagesRepository.findByPk<Image>(id);
  }

  async remove(id: number): Promise<number> {
    return await this.imagesRepository.destroy({
      where: {
        id,
      },
    });
  }
}
