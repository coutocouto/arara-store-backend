import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  AddressModule,
  CartsModule,
  FavoritesModule,
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
    ItemsModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
