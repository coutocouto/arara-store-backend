import { Cart } from './entities/cart.entity';

export const cartsProviders = [
  {
    provide: 'CARTS_REPOSITORY',
    useValue: Cart,
  },
];
