import TransactionRepository from "@src/domain/repositories/transaction-repository";
import { ImportTransactionsCSVCommand } from "@src/domain/commands/transactions/import-transactions-csv-command";
import { EventEmitter } from "events";

export default class ImportTransactionsCSVCommandFactory {
  create(events: EventEmitter) {
    const transactionRepository = new TransactionRepository();

    return new ImportTransactionsCSVCommand(events, transactionRepository);
  }
}