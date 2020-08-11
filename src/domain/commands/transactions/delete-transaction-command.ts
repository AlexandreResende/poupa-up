import { EventEmitter } from "events";
import TransactionRepositoryInterface from "../../../application/interfaces/repository-interfaces/transaction-repository-interface";

export default class DeleteTransactionCommand {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;
  
  constructor(events: EventEmitter,transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(id: string) {
    const result = await this.transactionRepository.remove(id);

    this.events.emit("transactionRemovedSuccessfullyEvent", result);
  }
}