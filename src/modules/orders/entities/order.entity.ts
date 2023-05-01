import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Address } from '../../address/entities/address.entity';
import { Item } from '../../items/entities/item.entity';
import { User } from '../../users/entities/user.entity';
import { DataTypes } from 'sequelize';

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

  @Column({
    type: DataTypes.DATE,
  })
  date: Date;

  @HasMany(() => Item)
  items: Item[];

  @ForeignKey(() => Address)
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
