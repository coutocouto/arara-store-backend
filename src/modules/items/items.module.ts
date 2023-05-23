import { Module, forwardRef } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { DatabaseModule } from '../../db/database.module';
import { itemsProviders } from './items.providers';
import { CartsModule } from '../index.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => CartsModule)],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders],
})
export class ItemsModule {}
