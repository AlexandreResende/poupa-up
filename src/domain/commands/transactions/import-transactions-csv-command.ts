import { BaseCommandInterface } from "../base-command-interface";
import { EventEmitter } from "events";
import TransactionRepositoryInterface from "../../../application/interfaces/repository-interfaces/transaction-repository-interface";
import { Transaction as TransactionInterface } from "../../../application/interfaces/transaction-interface";

export class ImportTransactionsCSVCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(transactions: TransactionInterface[]): Promise<void> {
    const transactionsInserted = await this.transactionRepository.bulkInsert(transactions);

    this.events.emit("importransactionsCSVEvent", transactionsInserted);
  }
}

