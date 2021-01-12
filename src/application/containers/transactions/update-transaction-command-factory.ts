import { EventEmitter } from "events";
import TransactionRepository from "@src/domain/repositories/transaction-repository";
import UpdateTransactionCommand from "@src/domain/commands/transactions/update-transaction-command";

export class UpdateTransactionCommandFactory {
  create(events: EventEmitter): UpdateTransactionCommand {
    const transactionRepository = new TransactionRepository();

    return new UpdateTransactionCommand(events, transactionRepository);
  }
}