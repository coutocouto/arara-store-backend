import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { cartsProviders } from './carts.providers';
import { DatabaseModule } from '../../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CartsController],
  providers: [CartsService, ...cartsProviders],
  exports: [CartsService, ...cartsProviders],
})
export class CartsModule {}
