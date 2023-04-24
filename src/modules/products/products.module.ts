import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, FirebaseService],
})
export class ProductsModule {}
