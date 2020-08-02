import { Transaction } from "../transaction-interface";

export default interface TransactionRepositoryInterface {
  create(transaction: Transaction): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
}