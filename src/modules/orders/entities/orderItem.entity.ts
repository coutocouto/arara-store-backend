import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Order, Product } from '../../index.entities';

@Table
export class OrderItem extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;

  @ForeignKey(() => Order)
  orderId: number;

  @BelongsTo(() => Order)
  order: Order;

  @ForeignKey(() => Product)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
