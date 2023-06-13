import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Product } from './product.entity';

@Table
export class ShowCase extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Product)
  productId: number;
}
