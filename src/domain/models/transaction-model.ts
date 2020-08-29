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
  BelongsTo,
  HasOne
} from "sequelize-typescript";
import User from "./user-model";

@Table({
  tableName: "transaction",
  timestamps: true,
})
export class Transaction extends Model<Transaction> {
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Default(() => { return v4(); })
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Index
  @Column(DataType.UUID)
  userId!: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  value!: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  category!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Index
  month!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  @Index
  year!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  createdAt!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  updatedAt!: string;
};
