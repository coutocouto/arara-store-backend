import { Admin } from './entities/admin.entity';

export const adminsProviders = [
  {
    provide: 'ADMINS_REPOSITORY',
    useValue: Admin,
  },
];
