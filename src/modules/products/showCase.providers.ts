import { ShowCase } from './entities/showCase.entity';

export const showCasesProviders = [
  {
    provide: 'SHOWCASES_REPOSITORY',
    useValue: ShowCase,
  },
];
