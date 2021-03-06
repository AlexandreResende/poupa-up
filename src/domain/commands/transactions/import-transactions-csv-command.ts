import { BaseCommandInterface } from "@src/domain/commands/base-command-interface";
import { EventEmitter } from "events";
import { TransactionRepositoryInterface } from "@src/application/interfaces/repository-interfaces/transaction-repository-interface";
import { Transaction as TransactionInterface } from "@src/application/interfaces/transaction-interface";

export class ImportTransactionsCSVCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(transactions: TransactionInterface[], userId: string): Promise<void> {
    const transactionsInserted = await this.transactionRepository.bulkInsert(transactions, userId);

    this.events.emit("importTransactionsCSVCommand", transactionsInserted);
  }
}