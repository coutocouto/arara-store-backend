import { Column, Model, Table } from 'sequelize-typescript';
import { Item } from '../../items/entities/item.entity';
import { DataTypes } from 'sequelize';
@Table
export class Cart extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  items: Item;
}
