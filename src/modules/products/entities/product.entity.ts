import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Item } from '../../items/entities/item.entity';
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
  })
  name: string;

  @Column({
    type: DataTypes.STRING,
  })
  description: string;

  @Column({
    type: DataTypes.STRING,
  })
  color: string;

  @Column({
    type: DataTypes.STRING,
  })
  size: string;

  @Column({
    type: DataTypes.STRING,
  })
  brand: string;

  @Column
  price: number;

  @Column({
    type: DataTypes.INTEGER,
  })
  discount?: number;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;

  @Column
  image?: string;

  @HasMany(() => Item)
  item: Item;
}
