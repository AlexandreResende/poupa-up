import fakerStatic from "faker";
import { Transaction } from "../../../src/application/interfaces/transaction-interface"
import months from "../../../src/common/month-representation";

export default class TransactionFactory {
  public static create(fields = {}): Transaction {
    return {
      value: fakerStatic.random.number({ min: 1, max: 50 }),
      description: fakerStatic.random.words(),
      category: fakerStatic.random.word(),
      month: fakerStatic.random.arrayElement(months),
      year: String(fakerStatic.random.number({ min: 2014, max: 2020 })),
      ...fields,
    };
  }
}