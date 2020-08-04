import fakerStatic from "faker";
import { Transaction } from "../../../src/application/interfaces/transaction-interface"

export default class TransactionFactory {
  public static create(fields = {}): Transaction {
    return {
      valueSpent: fakerStatic.random.number({ min: 1, max: 50 }),
      description: fakerStatic.random.words(),
      category: fakerStatic.random.word(),
      month: fakerStatic.random.arrayElement(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]),
      year: String(fakerStatic.random.number({ min: 2014, max: 2020 })),
      ...fields,
    }
  }
}