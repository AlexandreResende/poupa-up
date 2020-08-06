import { BaseCommandInterface } from "./base-command-interface";
import { EventEmitter } from "events";
import TransactionRepositoryInterface from "../../application/interfaces/repository-interfaces/transaction-repository-interface";

export class GetTransactionsCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(): Promise<void> {
    const transactions = await this.transactionRepository.findAll();

    this.events.emit("getTransactionsSuccessfullyEvent", transactions);
  }
}

