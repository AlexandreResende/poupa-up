import { v4 } from "uuid";
import {
  Table,
  Model,
  PrimaryKey,
  Column,
  Unique,
  DataType,
  Default,
  AllowNull,
  Index,
  ForeignKey,
} from "sequelize-typescript";
import UserModel from "./user-model";

@Table({
  tableName: "transaction",
  timestamps: true,
})
export default class InvestimentModel extends Model<InvestimentModel> {
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Default(() => { return v4(); })
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Index
  @Column(DataType.UUID)
  userId!: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  totalValue!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  amount!: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  category!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Index
  operationDate!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  createdAt!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  updatedAt!: string;
};