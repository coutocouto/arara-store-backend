import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ItemsModule } from './modules/items/items.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { AddressModule } from './modules/addresses/addresses.module';
import { CartsModule } from './modules/carts/carts.module';
import { DatabaseModule } from './db/database.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    UsersModule,
    OrdersModule,
    ProductsModule,
    FavoritesModule,
    AddressModule,
    CartsModule,
    ItemsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
