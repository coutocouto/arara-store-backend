import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Address, Cart, User } from '../../index.entities';

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
  addressId?: number;

  @BelongsTo(() => Address)
  address?: Address;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
