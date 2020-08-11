import { Transaction } from "../transaction-interface";
import UpdateTransactionInterface from "../update-transaction-interface";

export default interface TransactionRepositoryInterface {
  create(transaction: Transaction): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  update(id: string, updatedTransaction: UpdateTransactionInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}