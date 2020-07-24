import {  FLOAT, TEXT, STRING, UUIDV4, Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize-config";
import { v4 } from "uuid";

interface TransactionAttributes {
  id?: string;
  valueSpent: number;
  description: string;
  category: string;
  month: string;
  year: string;
}

export class Transaction extends Model<TransactionAttributes> implements TransactionAttributes {
  public id?: string;
  public valueSpent: number;
  public description: string;
  public category: string;
  public month: string;
  public year: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  constructor(params: TransactionAttributes) {
    super();
    this.id = params.id;
    this.valueSpent = params.valueSpent;
    this.description = params.description;
    this.category = params.category;
    this.month = params.month;
    this.year = params.year;
  }
};

Transaction.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: () => { return v4(); },
      autoIncrement: false,
      primaryKey: true
    },
    valueSpent: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    month: DataTypes.STRING,
    year: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "transaction",
  }
);
