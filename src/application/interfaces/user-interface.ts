import { TransactionRepositoryDataInterface } from "@src/application/interfaces/transaction-interface";

export interface User {
  email: string;
  password: string;
  fullName: string;
  transactions: TransactionRepositoryDataInterface[]
  createdAt?: string;
  updatedAt?: string;
}

export interface UserRepositoryDataInterface extends User {
  id: string;
  createdAt: string;
  updatedAt: string;
}