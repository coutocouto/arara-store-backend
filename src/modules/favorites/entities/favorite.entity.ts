import { DataTypes } from 'sequelize';
import { Product } from '../../products/entities/product.entity';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Favorite extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  product: Product;
}
