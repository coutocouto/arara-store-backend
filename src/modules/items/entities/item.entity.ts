import {
  BelongsTo,
  Column,
  Table,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from '../../products/entities/product.entity';
import { DataTypes } from 'sequelize';
import { Cart } from '../../carts/entities/cart.entity';

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
  @Column
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @Column({
    type: DataTypes.INTEGER,
  })
  quantity: number;
}
