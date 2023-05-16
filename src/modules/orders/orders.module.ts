import { Module, forwardRef } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseModule } from '../../db/database.module';
import { ordersProviders } from './orders.providers';
import { orderItemsProviders } from './orderItems.providers';
import { CartsModule } from '../index.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => CartsModule)],
  controllers: [OrdersController],
  providers: [OrdersService, ...ordersProviders, ...orderItemsProviders],
})
export class OrdersModule {}
