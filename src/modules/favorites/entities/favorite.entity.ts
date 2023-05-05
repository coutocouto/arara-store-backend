import { DataTypes } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Table
export class Favorite extends Model {
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

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
