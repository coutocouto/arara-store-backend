import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Address, Cart, Favorite, Order } from '../../index.entities';
import { DataTypes } from 'sequelize';

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
    unique: true,
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

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  cpf: string;

  @Column({
    type: DataTypes.DATE,
  })
  birth: string;

  @HasMany(() => Address)
  addresses: Address[];

  @HasOne(() => Cart)
  cart: Cart;

  @HasOne(() => Favorite)
  favorite: Favorite;

  @HasMany(() => Order)
  orders: Order[];
}
