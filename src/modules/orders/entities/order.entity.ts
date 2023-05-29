import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Address, Cart, User } from '../../index.entities';

@Table
export class Order extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.ENUM(
      'Aguardando pagamento',
      'Aguardando aprovação',
      'Pagamento Efetuado',
    ),
    defaultValue: 'Aguardando pagamento',
  })
  statusPayment: string;

  @Column({
    type: DataTypes.ENUM(
      'Aguardando pagamento',
      'Pagamento aprovado',
      'Em envio',
      'Entregue',
    ),
    defaultValue: 'Aguardando pagamento',
  })
  statusOrder: string;

  @Column({
    type: DataTypes.ENUM('Boleto', 'Pix', 'Débito', 'Crédito'),
    defaultValue: null,
  })
  payment: string;

  @Column({
    type: DataTypes.DECIMAL,
    allowNull: false,
  })
  shippingPrice: number;

  @ForeignKey(() => Cart)
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @ForeignKey(() => Address)
  addressId?: number;

  @BelongsTo(() => Address)
  address?: Address;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
