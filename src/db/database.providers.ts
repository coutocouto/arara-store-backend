import { Sequelize } from 'sequelize-typescript';
import { Product } from '../modules/products/entities/product.entity';
import { Item } from '../modules/items/entities/item.entity';
import { Address } from '../modules/addresses/entities/address.entity';
import { Cart } from '../modules/carts/entities/cart.entity';
import { Favorite } from '../modules/favorites/entities/favorite.entity';
import { Order } from '../modules/orders/entities/order.entity';
import { User } from '../modules/users/entities/user.entity';

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
        Item,
        Order,
        Product,
        User,
      ]);
      return sequelize;
    },
  },
];
