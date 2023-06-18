import { Showcase } from './entities/showcase.entity';

export const showcasesProviders = [
  {
    provide: 'SHOWCASES_REPOSITORY',
    useValue: Showcase,
  },
];
