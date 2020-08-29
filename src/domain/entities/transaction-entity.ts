import { TransactionRepositoryDataInterface as TransactionInterface } from "../../application/interfaces/transaction-interface";

export default class Transaction {
  public readonly id: String;
  public readonly value: Number;
  public readonly description: String;
  public readonly category: String;
  public readonly month: String;
  public readonly year: String;
  public readonly createdAt: String;
  public readonly updatedAt: String;

  constructor(transaction: TransactionInterface) {
    this.id = transaction.id;
    this.value = transaction.value;
    this.description = transaction.description;
    this.category = transaction.category;
    this.month = transaction.month;
    this.year = transaction.year;
    this.createdAt = transaction.createdAt ?? "";
    this.updatedAt = transaction.updatedAt ?? "";
  }
}