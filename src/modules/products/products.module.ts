import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from '../../db/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { SeedProducts } from '../../helpers/seeds/products.seed';
import { ProductsSeedModule } from '../../helpers/seeds/products.seed.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsSeedModule,
    SeederModule.forFeature([SeedProducts]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
})
export class ProductsModule {}
