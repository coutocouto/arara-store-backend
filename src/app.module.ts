import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import {
  AddressModule,
  CartsModule,
  FavoritesModule,
  ImagesModule,
  ItemsModule,
  OrdersModule,
  ProductsModule,
  UsersModule,
  AuthModule,
} from './modules/index.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [
    AddressModule,
    CartsModule,
    FavoritesModule,
    ImagesModule,
    ItemsModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
