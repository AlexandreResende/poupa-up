import { EventEmitter } from "events";
import { Transaction as TransactionInterface } from "../../../application/interfaces/transaction-interface";
import TransactionRepositoryInterface from "../../../application/interfaces/repository-interfaces/transaction-repository-interface";
import { BaseCommandInterface } from "../base-command-interface";

export default class CreateTransactionCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(transaction: TransactionInterface, userId: string): Promise<void> {
    const transactionCreated = await this.transactionRepository.create(transaction, userId);

    this.events.emit("transactionSuccessfullyCreatedEvent", transactionCreated);
  }
}