import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }

  @Post('/:productId/discount/:discount')
  async createDiscount(
    @Param('productId') productId: number,
    @Param('discount') discount: number,
  ): Promise<[Product, boolean]> {
    return await this.productsService.createDiscount({
      id: productId,
      discount,
    });
  }

  @Patch('/:productId/disable')
  async disableDiscount(
    @Param('productId') productId: number,
  ): Promise<[affectedCount: number]> {
    return await this.productsService.disableDiscount(productId);
  }

  @Get()
  async findAll(
    @Query('search') search: string,
    @Query('page') page?: number | any,
    @Query('take') take?: number | any,
    @Query('disabled') disabled?: boolean,
  ): Promise<Product[]> {
    const products = await this.productsService.findAll({
      search,
      page,
      take,
      disabled,
    });
    if (!products.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return products;
  }

  @Get('/home')
  async getForHomePage(): Promise<Product[]> {
    return await this.productsService.findToHomePage();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.findOne(+id);
    if (!product) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<[affectedCount: number]> {
    await this.findOne(id);
    return await this.productsService.update(id, updateProductDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<number> {
    await this.findOne(id);
    return await this.productsService.remove(+id);
  }
}
