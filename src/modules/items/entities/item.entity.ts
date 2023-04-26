import { HasOne, Column, Table } from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
import { DataTypes, Model } from 'sequelize';

@Table
export class Item extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @HasOne((product: any) => product.id)
  product: Product;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
