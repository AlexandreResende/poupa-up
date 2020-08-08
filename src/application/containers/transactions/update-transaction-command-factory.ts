import { EventEmitter } from "events";
import TransactionRepository from "../../repositories/transaction-repository";
import UpdateTransactionCommand from "../../../domain/commands/transactions/update-transaction-command";

export default class UpdateTransactionCommandFactory {
  create(events: EventEmitter): UpdateTransactionCommand {
    const transactionRepository = new TransactionRepository();

    return new UpdateTransactionCommand(events, transactionRepository);
  }
}