import { Sequelize } from 'sequelize-typescript';
import {
  Address,
  Cart,
  Favorite,
  Image,
  Item,
  Order,
  Product,
  User,
} from '../modules/index.entities';

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
        Address,
        Cart,
        Favorite,
        Image,
        Item,
        Order,
        Product,
        User,
      ]);
      return sequelize;
    },
  },
];
