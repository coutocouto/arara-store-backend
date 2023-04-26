import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { DatabaseModule } from '../../db/database.module';
import { itemsProviders } from './items.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [ItemsService, ...itemsProviders],
})
export class ItemsModule {}
