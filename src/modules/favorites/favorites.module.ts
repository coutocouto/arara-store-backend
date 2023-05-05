import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { DatabaseModule } from '../../db/database.module';
import { favoritesProviders } from './favorites.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FavoritesController],
  providers: [FavoritesService, ...favoritesProviders],
})
export class FavoritesModule {}
