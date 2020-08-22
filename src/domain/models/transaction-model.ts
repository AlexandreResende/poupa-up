import { v4 } from "uuid";
import { Table, Model, PrimaryKey, Column, Unique, DataType, Default, AllowNull, Index } from "sequelize-typescript";

@Table({
  tableName: "transaction",
  timestamps: true,
})
export default class Transaction extends Model<Transaction> {
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Default(() => { return v4(); })
  @Column(DataType.UUID)
  id!: string;

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
};
