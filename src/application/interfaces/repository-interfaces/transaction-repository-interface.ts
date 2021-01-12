import { Transaction as TransactionInterface } from "@src/application/interfaces/transaction-interface";
import { UpdateTransactionInterface } from "@src/application/interfaces/update-transaction-interface";
import Transaction from "@src/domain/entities/transaction-entity";

export interface TransactionRepositoryInterface {
  create(transaction: TransactionInterface, userId: string): Promise<Transaction>;
  bulkInsert(transactions: TransactionInterface[], userId: string): Promise<Transaction[]>;
  findAll(): Promise<Transaction[]>;
  update(id: string, updatedTransaction: UpdateTransactionInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}