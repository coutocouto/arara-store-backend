import { DataTypes } from 'sequelize';
import { User } from '../../users/entities/user.entity';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from '../../orders/entities/order.entity';

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
    type: DataTypes.INTEGER,
  })
  cep: number;

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
