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
      'Pedido Recebido',
      'Pagamento aprovado',
      'Entregue à Transportadora',
      'Entregue',
    ),
    defaultValue: 'Pedido Recebido',
  })
  statusOrder: string;

  @Column({
    type: DataTypes.ENUM('Boleto', 'Pix', 'Cartão'),
    defaultValue: null,
  })
  payment: string;

  @Column({
    type: DataTypes.STRING,
    defaultValue: null,
  })
  trackingCode: string;

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
