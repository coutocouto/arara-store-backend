import { Sequelize } from 'sequelize-typescript';
import {
  Admin,
  Address,
  Cart,
  Favorite,
  Image,
  Item,
  Order,
  Product,
  User,
} from '../modules/index.entities';
import { Showcase } from '../modules/products/entities/showcase.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: 'root',
        database: 'arara-store',
      });
      sequelize.addModels([
        Admin,
        Address,
        Cart,
        Favorite,
        Image,
        Item,
        Order,
        Product,
        Showcase,
        User,
      ]);
      return sequelize;
    },
  },
];
