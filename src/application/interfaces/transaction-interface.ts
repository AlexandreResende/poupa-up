export interface Transaction {
  id?: string;
  value: number;
  description: string;
  category: string;
  month: string;
  year: string;
  createdAt?: string;
  updatedAt?: string;
}