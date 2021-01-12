import { TransactionRepositoryDataInterface as TransactionInterface } from "../../application/interfaces/transaction-interface";

export class Transaction {
  public readonly id: string;
  public readonly value: number;
  public readonly description: string;
  public readonly category: string;
  public readonly month: string;
  public readonly year: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;

  constructor(transaction: TransactionInterface) {
    this.id = transaction.id;
    this.value = transaction.value;
    this.description = transaction.description;
    this.category = transaction.category;
    this.month = transaction.month;
    this.year = transaction.year;
    this.createdAt = transaction.createdAt ?? new Date().toISOString();
    this.updatedAt = transaction.updatedAt ?? new Date().toISOString();
  }
}