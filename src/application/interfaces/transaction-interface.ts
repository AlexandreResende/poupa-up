export interface Transaction {
  value: number;
  description: string;
  category: string;
  month: string;
  year: string;
}

export interface TransactionRepositoryDataInterface extends Transaction {
  id: string;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
}