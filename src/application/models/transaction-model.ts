import { v4 } from "uuid";
import { Table, Model, PrimaryKey, Column, Unique, DataType, Default, AllowNull } from "sequelize-typescript";

export interface TransactionAttributes {
  id?: string;
  valueSpent: number;
  description: string;
  category: string;
  month: string;
  year: string;
}
@Table({
  tableName: "transaction",
  timestamps: true,
})
export default class Transaction extends Model<Transaction> {
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Default(() => { return v4(); })
  @Column(DataType.STRING)
  id?: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  valueSpent!: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  category!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  month!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  year!: string;
};
