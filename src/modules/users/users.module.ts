import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';
import { DatabaseModule } from '../../db/database.module';
import { adminsProviders } from './admins.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, ...adminsProviders],
  exports: [UsersService, ...usersProviders],
})
export class UsersModule {}
