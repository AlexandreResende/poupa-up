import { TransactionRepositoryInterface } from "../../../src/application/interfaces/repository-interfaces/transaction-repository-interface";
import { UpdateTransactionInterface } from "../../../src/application/interfaces/update-transaction-interface";
import {
  Transaction as TransactionInterface,
  TransactionRepositoryDataInterface
} from "../../../src/application/interfaces/transaction-interface";
import { fromDatabase } from "../../../src/application/mapper/transaction-mapper";
import { v4 } from "uuid";
import { Transaction } from "../../../src/domain/entities/transaction-entity";

export default class TransactionInMemoryRepository implements TransactionRepositoryInterface {
  public transaction: Transaction[];

  constructor() {
    this.transaction = [];
  }

  async create(transaction: TransactionInterface, userId: string): Promise<Transaction> {
    const newTransaction = {
      ...transaction,
      id: v4(),
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.transaction.push(newTransaction);

    return fromDatabase(newTransaction);
  }

  async bulkInsert(transactions: TransactionInterface[], userId: string): Promise<Transaction[]> {
    const newTransactions = transactions.map(transaction => ({
      ...transaction,
      id: v4(),
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    this.transaction.concat(newTransactions);

    return newTransactions.map(fromDatabase);
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