import Transaction from "../../domain/entities/transaction-entity";
import {
  TransactionRepositoryDataInterface as TransactionRepositoryInterface
} from "../../application/interfaces/transaction-interface";

interface TransactionToDatabase {
  value?: number;
  description?: string;
  category?: string;
  month?: string;
  year?: string;
}

export const fromDatabase = (attributes: TransactionRepositoryInterface) => new Transaction(attributes);

export const toDatabase = (attributes: TransactionToDatabase) => ({
  value: attributes.value ?? undefined,
  description: attributes.description ?? undefined,
  category: attributes.category ?? undefined,
  month: attributes.month ?? undefined,
  year: attributes.year ?? undefined,
});