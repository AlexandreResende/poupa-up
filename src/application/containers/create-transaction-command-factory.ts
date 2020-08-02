import CreateTransactionCommand from "../../domain/commands/create-transaction-command";
import { EventEmitter } from "events";
import TransactionRepository from "../repositories/transaction-repository";

export default class CreateTransactionCommandFactory {
  create(events: EventEmitter) {
    const transactionRepository = new TransactionRepository();

    return new CreateTransactionCommand(events, transactionRepository);
  }
} 