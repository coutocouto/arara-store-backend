import { Item } from './entities/item.entity';

export const itemsProviders = [
  {
    provide: 'ITEMS_REPOSITORY',
    useValue: Item,
  },
];
