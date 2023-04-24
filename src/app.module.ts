import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ItemsModule } from './modules/items/items.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { AddressModule } from './modules/address/address.module';
import { CartsModule } from './modules/carts/carts.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './modules/firebase/firebase.service';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    OrdersModule,
    FavoritesModule,
    AddressModule,
    CartsModule,
    ItemsModule,
    ConfigModule,
    FirebaseService,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
