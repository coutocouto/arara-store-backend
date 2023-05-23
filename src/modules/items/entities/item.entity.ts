import {
  BelongsTo,
  Column,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Cart, Product } from '../../index.entities';
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

  @ForeignKey(() => Cart)
  @Column({
    allowNull: true,
  })
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
