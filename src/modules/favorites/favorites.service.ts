import { Inject, Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @Inject('FAVORITES_REPOSITORY')
    private favoritesRepository: typeof Favorite,
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto) {
    return await this.favoritesRepository.create({ ...createFavoriteDto });
  }

  async findAll(): Promise<Favorite[]> {
    return await this.favoritesRepository.findAll<Favorite>();
  }

  async findOne(id: number): Promise<Favorite> {
    return await this.favoritesRepository.findByPk<Favorite>(id);
  }

  async update(
    id: number,
    updateFavoriteDto: UpdateFavoriteDto,
  ): Promise<[affectedCount: number]> {
    return await this.favoritesRepository.update(updateFavoriteDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.favoritesRepository.destroy({
      where: {
        id,
      },
    });
  }
}
