import { v4 } from "uuid";
import { Table, Model, PrimaryKey, Column, Unique, DataType, Default, AllowNull, IsEmail, Index } from "sequelize-typescript";

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
};
