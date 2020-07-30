import { BaseCommandInterface } from "./base-command-interface";
import { EventEmitter } from "events";
import TransactionRepository from "../../application/repositories/transaction-repository";

export class GetTransactionsCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepository;

  constructor(events: EventEmitter, transactionRepository: TransactionRepository) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(): Promise<void> {
    const transactions = await this.transactionRepository.findAll();

    this.events.emit("getTransactionsSuccessfullyEvent", transactions);
  }
}

