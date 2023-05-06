import { Module, forwardRef } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { DatabaseModule } from '../../db/database.module';
import { ImagesModule } from '../index.module';
import { ImagesService } from '../images/images.service';
console.log('🚀 ~ file: products.module.ts:7 ~ ImagesModule:', ImagesModule);

@Module({
  imports: [DatabaseModule, forwardRef(() => ImagesModule)],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
