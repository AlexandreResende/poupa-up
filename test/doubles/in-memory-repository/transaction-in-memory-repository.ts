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

  async update(updateTransactionData: UpdateTransactionInterface): Promise<void> {
    const { id, ...rest } = updateTransactionData;
    const transactionIndex = this.transaction.findIndex((transaction) => transaction.id === id);

    const updatedTransaction = {
      ...this.transaction[transactionIndex],
      ...rest,
    };

    this.transaction.splice(transactionIndex, 1, updatedTransaction);

    return;
  }

  async destroy(): Promise<void> {
    this.transaction = [];
  }
}