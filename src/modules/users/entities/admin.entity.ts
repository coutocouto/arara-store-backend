import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table
export class Admin extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
  })
  fullName: string;

  @Column({
    type: DataTypes.STRING,
  })
  password: string;

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
  cpf: string;

  @Column({
    type: DataTypes.DATE,
  })
  birth: string;
}
