import { EventEmitter } from "events";
import { Transaction as TransactionInterface } from "../../application/interfaces/transaction-interface";
import TransactionRepositoryInterface from "../../application/interfaces/repository-interfaces/transaction-repository-interface";

export default class CreateTransactionCommand {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(transaction: TransactionInterface): Promise<void> {
    const transactionCreated = await this.transactionRepository.create(transaction);

    this.events.emit("transactionSuccessfullyCreatedEvent", transactionCreated);
  }
}