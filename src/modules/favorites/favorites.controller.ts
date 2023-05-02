import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  async create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return await this.favoritesService.create(createFavoriteDto);
  }

  @Get()
  async findAll() {
    const favorites = await this.favoritesService.findAll();
    if (!favorites.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return favorites;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const favorite = await this.favoritesService.findOne(+id);
    if (!favorite) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return favorite;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFavoriteDto: UpdateFavoriteDto,
  ) {
    await this.findOne(id);
    return await this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.findOne(id);
    return await this.favoritesService.remove(+id);
  }
}
