export interface Transaction {
  id?: string;
  valueSpent: number;
  description: string;
  category: string;
  month: string;
  year: string;
  createdAt?: string;
  updatedAt?: string;
}