import CreateTransactionCommand from "@src/domain/commands/transactions/create-transaction-command";
import { EventEmitter } from "events";
import TransactionRepository from "@src/domain/repositories/transaction-repository";

export class CreateTransactionCommandFactory {
  create(events: EventEmitter) {
    const transactionRepository = new TransactionRepository();

    return new CreateTransactionCommand(events, transactionRepository);
  }
}