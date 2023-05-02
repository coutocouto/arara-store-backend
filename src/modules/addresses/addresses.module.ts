import { Module } from '@nestjs/common';
import { AddressService } from './addresses.service';
import { AddressController } from './addresses.controller';
import { addressProviders } from './addresses.providers';
import { DatabaseModule } from '../../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [AddressService, ...addressProviders],
})
export class AddressModule {}
