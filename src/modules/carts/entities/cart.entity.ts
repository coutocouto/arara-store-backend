import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
import { DataTypes } from 'sequelize';
import { User } from '../../users/entities/user.entity';
@Table
export class Cart extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Item)
  items: Item[];
}
