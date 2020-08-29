import { Transaction as TransactionInterface } from "../transaction-interface";
import UpdateTransactionInterface from "../update-transaction-interface";
import Transaction from "../../../domain/entities/transaction-entity";

export default interface TransactionRepositoryInterface {
  create(transaction: TransactionInterface): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  update(id: string, updatedTransaction: UpdateTransactionInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}