import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Address } from '../../addresses/entities/address.entity';
import { User } from '../../users/entities/user.entity';
import { DataTypes } from 'sequelize';
import { Cart } from '../../carts/entities/cart.entity';

@Table
export class Order extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
  })
  statusPayment: string;

  @Column({
    type: DataTypes.STRING,
  })
  statusOrder: string;

  @Column({
    type: DataTypes.STRING,
  })
  payment: string;

  @ForeignKey(() => Cart)
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @ForeignKey(() => Address)
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
