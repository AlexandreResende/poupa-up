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
import { Transaction } from "./transaction-model";

@Table({
  tableName: "user",
  timestamps: true,
})
export default class User extends Model<User> {
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

  @HasMany(() => Transaction)
  transactions!: Transaction[]

  @AllowNull(false)
  @Column(DataType.STRING)
  createdAt!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  updatedAt!: string;
};
