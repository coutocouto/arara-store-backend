import { Module } from '@nestjs/common';
import { SeedProducts } from './products.seed';

@Module({
  providers: [SeedProducts],
  exports: [SeedProducts],
})
export class ProductsSeedModule {}
