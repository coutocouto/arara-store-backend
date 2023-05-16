import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order, User } from '../../index.entities';

@Table
export class Address extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
  })
  country: string;

  @Column({
    type: DataTypes.STRING,
  })
  city: string;

  @Column({
    type: DataTypes.STRING,
  })
  state: string;

  @Column({
    type: DataTypes.STRING,
  })
  address: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  number: number;

  @Column({
    type: DataTypes.STRING,
  })
  cep: string;

  @Column({
    type: DataTypes.STRING,
  })
  complement?: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Order)
  orders: Order[];
}
