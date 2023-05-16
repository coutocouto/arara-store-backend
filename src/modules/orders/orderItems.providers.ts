import { OrderItem } from '../index.entities';

export const orderItemsProviders = [
  {
    provide: 'ORDERITEMS_REPOSITORY',
    useValue: OrderItem,
  },
];
