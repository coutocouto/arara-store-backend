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
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('Images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('/product/:productId')
  async create(
    @Body() imageUrl: object | any,
    @Param('productId') productId: number,
  ) {
    return await this.imagesService.create({ productId, ...imageUrl });
  }

  @Get(':productId')
  async findAll(@Param('productId') productId: number) {
    const images = await this.imagesService.findAll(+productId);
    if (!images.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return images;
  }

  async findOne(@Param('id') id: number) {
    const product = await this.imagesService.findOne(+id);
    if (!product) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    await this.findOne(id);
    return await this.imagesService.remove(+id);
  }
}
