import {
  Table,
  Column,
  Model,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Item } from '../../items/entities/item.entity';
import { Image } from '../../index.entities';
@Table
export class Product extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  size: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  brand: string;

  @Column({
    type: DataTypes.DECIMAL,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataTypes.INTEGER,
    defaultValue: 0,
  })
  discount?: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataTypes.INTEGER,
    defaultValue: null,
  })
  inherited?: number;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  disabled: boolean;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @HasMany(() => Image)
  images: Image[];

  @HasMany(() => Item)
  items: Item[];
}
