import {
  BelongsTo,
  Column,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
import { DataTypes } from 'sequelize';

@Table
export class Item extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
