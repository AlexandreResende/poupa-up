export interface Transaction {
  value: number;
  description: string;
  category: string;
  month: string;
  year: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TransactionRepositoryDataInterface extends Transaction {
  id: string;
}