import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Item } from '../../items/entities/item.entity';
import { Favorite } from '../../favorites/entities/favorite.entity';
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
    unique: true,
  })
  sku: string;

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

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataTypes.STRING,
  })
  image?: string;

  @HasMany(() => Item)
  item: Item;
}
