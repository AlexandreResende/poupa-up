import { v4 } from "uuid";
import { Table, Model, PrimaryKey, IsFloat, Column, NotEmpty, Unique, DataType, Default } from "sequelize-typescript";

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
export class Transaction extends Model implements TransactionAttributes {

  @PrimaryKey
  @Unique
  @Column(DataType.UUIDV4)
  @Default(v4())
  id?: string;

  @IsFloat
  @NotEmpty
  @Column(DataType.FLOAT)
  valueSpent!: number;

  @NotEmpty
  @Column(DataType.TEXT)
  description!: string;

  @NotEmpty
  @Column(DataType.STRING)
  category!: string;

  @NotEmpty
  @Column(DataType.STRING)
  month!: string;

  @NotEmpty
  @Column(DataType.STRING)
  year!: string;
};
