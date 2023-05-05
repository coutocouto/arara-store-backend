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
} from './modules/index.module';
import { DatabaseModule } from './db/database.module';
import { SeederModule } from 'nestjs-sequelize-seeder';

@Module({
  imports: [
    AddressModule,
    CartsModule,
    FavoritesModule,
    ItemsModule,
    OrdersModule,
    ProductsModule,
    UsersModule,
    DatabaseModule,
    SeederModule.forRoot({
      // Activate this if you want to run the seeders if the table is empty in the database
      runOnlyIfTableIsEmpty: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
