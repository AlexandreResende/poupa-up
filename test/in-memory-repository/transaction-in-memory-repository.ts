import { Transaction } from "../../src/application/interfaces/transaction-interface"; 
import { v4 } from "uuid";

export default class TransactionInMemoryReposiroty {
  public transaction: Transaction[];

  constructor() {
    this.transaction = [];
  }

  async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = { ...transaction, id: v4() };

    this.transaction.push(newTransaction);

    return newTransaction;
  }

  async destroy(): Promise<void> {
    this.transaction = [];
  }
}