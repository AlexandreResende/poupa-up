import { EventEmitter } from "events";
import DeleteTransactionCommand from "../../../domain/commands/transactions/delete-transaction-command";
import TransactionRepository from "../../../domain/repositories/transaction-repository";

export default class DeleteTransactionCommandFactory {
  create(events: EventEmitter): DeleteTransactionCommand {
    const transactionRepository = new TransactionRepository();

    return new DeleteTransactionCommand(events, transactionRepository);
  }
}