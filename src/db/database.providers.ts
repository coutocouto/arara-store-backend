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
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: 5432,
        username: process.env.POSTGRES_USER || 'root',
        password: process.env.POSTGRES_PASSWORD || 'root',
        database: process.env.POSTGRES_DATABASE || 'arara-store',
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
