import { Sequelize } from 'sequelize-typescript';
import { Product } from '../modules/products/entities/product.entity';
import { Item } from '../modules/items/entities/item.entity';

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
      sequelize.addModels([Product, Item]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
