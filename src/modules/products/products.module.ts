import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from '../../db/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedProduct } from '../../helpers/seeds/products.seed';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
})
export class ProductsModule {}
