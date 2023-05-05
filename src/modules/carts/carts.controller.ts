import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    return await this.cartsService.create(createCartDto);
  }

  @Get()
  async findAll() {
    const carts = await this.cartsService.findAll();
    if (!carts.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return carts;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cart = await this.cartsService.findOne(+id);
    if (!cart) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return cart;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    await this.findOne(id);
    return await this.cartsService.update(+id, updateCartDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    await this.findOne(id);
    return await this.cartsService.remove(+id);
  }
}
