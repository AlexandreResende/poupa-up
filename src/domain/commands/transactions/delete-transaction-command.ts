import { EventEmitter } from "events";
import { TransactionRepositoryInterface } from "../../../application/interfaces/repository-interfaces/transaction-repository-interface";
import { BaseCommandInterface } from "../base-command-interface";

export default class DeleteTransactionCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface;

  constructor(events: EventEmitter,transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(params: { id: string }) {
    const { id } = params;
    const result = await this.transactionRepository.remove(id);

    this.events.emit("transactionRemovedSuccessfullyEvent", result);
  }
}