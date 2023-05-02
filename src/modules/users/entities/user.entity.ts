import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Address } from '../../addresses/entities/address.entity';
import { Cart } from '../../carts/entities/cart.entity';
import { Favorite } from '../../favorites/entities/favorite.entity';
import { DataTypes } from 'sequelize';
import { Order } from '../../orders/entities/order.entity';

@Table
export class User extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
  })
  userName: string;

  @Column({
    type: DataTypes.STRING,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
  })
  fullName: string;

  @Column({
    type: DataTypes.STRING,
  })
  password: string;

  @HasMany(() => Address)
  addresses: Address[];

  @HasOne(() => Cart)
  cart: Cart;

  @HasOne(() => Favorite)
  favorite: Favorite;

  @HasMany(() => Order)
  order: Order[];
}
