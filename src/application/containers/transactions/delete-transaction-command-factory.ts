import { EventEmitter } from "events";
import DeleteTransactionCommand from "@src/domain/commands/transactions/delete-transaction-command";
import TransactionRepository from "@src/domain/repositories/transaction-repository";

export class DeleteTransactionCommandFactory {
  create(events: EventEmitter): DeleteTransactionCommand {
    const transactionRepository = new TransactionRepository();

    return new DeleteTransactionCommand(events, transactionRepository);
  }
}