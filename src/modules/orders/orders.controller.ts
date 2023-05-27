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
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    const orders = await this.ordersService.findAll();
    if (!orders.length) {
      throw new HttpException('NO CONTENT', HttpStatus.NO_CONTENT);
    }
    return orders;
  }

  @Get(':userId')
  async findAllByUserId(@Param('userId') userId: string) {
    const order = await this.ordersService.findAllByUserId(+userId);
    if (!order) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(+id, updateOrderDto);
  }
}
