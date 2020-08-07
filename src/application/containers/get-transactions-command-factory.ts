import TransactionRepository from "../repositories/transaction-repository";
import { GetTransactionsCommand } from "../../domain/commands/transactions/get-transactions-command";
import { EventEmitter } from "events";

export default class GetTransactionsCommandFactory {
  create(events: EventEmitter) {
    const transactionsRepository = new TransactionRepository();

    return new GetTransactionsCommand(events, transactionsRepository);
  }
}