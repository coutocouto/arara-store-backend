import { Address } from '../../address/entities/address.entity';
import { Cart } from '../../carts/entities/cart.entity';
import { Favorite } from '../../favorites/entities/favorite.entity';

export class User {
  id: number;
  userName: string;
  email: string;
  fullName: string;
  password: string;
  cart: Cart;
  favorite: Favorite;
}
