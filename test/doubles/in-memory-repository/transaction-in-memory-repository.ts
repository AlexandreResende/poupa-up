import TransactionRepositoryInterface from "../../../src/application/interfaces/repository-interfaces/transaction-repository-interface";
import UpdateTransactionInterface from "../../../src/application/interfaces/update-transaction-interface";
import { Transaction } from "../../../src/application/interfaces/transaction-interface"; 
import { v4 } from "uuid";

export default class TransactionInMemoryRepository implements TransactionRepositoryInterface {
  public transaction: Transaction[];

  constructor() {
    this.transaction = [];
  }

  async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = { ...transaction, id: v4() };

    this.transaction.push(newTransaction);

    return newTransaction;
  }

  async findAll(): Promise<Transaction[]> {
    return this.transaction;
  }

  async update(id: string, updateTransactionData: UpdateTransactionInterface): Promise<{ updated: number }> {
    const transactionIndex = this.transaction.findIndex((transaction) => transaction.id === id);

    if (transactionIndex === -1) {
      return { updated: 0 };
    }

    const updatedTransaction = {
      ...this.transaction[transactionIndex],
      ...updateTransactionData,
    };

    this.transaction.splice(transactionIndex, 1, updatedTransaction);

    return { updated: 1 };
  }

  async remove(id: string): Promise<{ removed: number }> {
    const transactionIndex = this.transaction.findIndex(transaction => transaction.id === id);

    if (transactionIndex === -1) {
      return { removed: 0 };
    }

    this.transaction.splice(transactionIndex, 1);

    return { removed: 1 };
  }

  async destroy(): Promise<void> {
    this.transaction = [];
  }
}