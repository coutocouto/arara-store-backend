import { User } from '../../users/entities/user.entity';

export class Address {
  id: number;
  country: string;
  city: string;
  state: string;
  address: string;
  number: number;
  cep: number;
  complement?: string;
  user: User;
}
