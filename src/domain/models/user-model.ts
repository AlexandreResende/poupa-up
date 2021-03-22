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
  IsEmail,
  Index,
  HasMany
} from "sequelize-typescript";
import TransactionModel from "./transaction-model";
import InvestimentModel from "./investiment-model";

@Table({
  tableName: "user",
  timestamps: true,
})
export default class UserModel extends Model<UserModel> {
  @PrimaryKey
  @Unique
  @AllowNull(false)
  @Default(() => { return v4(); })
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @IsEmail
  @Column(DataType.STRING)
  @Index
  email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  fullName!: string;

  @HasMany(() => InvestimentModel)
  investiments!: InvestimentModel[]

  @AllowNull(true)
  @Default(() => { return new Date(); })
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(true)
  @Default(() => { return new Date(); })
  @Column(DataType.DATE)
  updatedAt!: Date;
};
