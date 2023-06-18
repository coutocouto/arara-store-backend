import { Module, forwardRef } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from '../../db/database.module';
import { ImagesModule } from '../index.module';
import { showcasesProviders } from './showcase.providers';

@Module({
  imports: [DatabaseModule, forwardRef(() => ImagesModule)],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders, ...showcasesProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
