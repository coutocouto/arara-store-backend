import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/database.module';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { imagesProviders } from './images.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ImagesController],
  providers: [ImagesService, ...imagesProviders],
  exports: [ImagesService, ...imagesProviders],
})
export class ImagesModule {}
