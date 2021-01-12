import { EventEmitter } from "events"
import { TransactionRepositoryInterface } from "../../../application/interfaces/repository-interfaces/transaction-repository-interface"
import { UpdateTransactionInterface } from "../../../application/interfaces/update-transaction-interface"
import { BaseCommandInterface } from "../base-command-interface";

export default class UpdateTransactionCommand implements BaseCommandInterface {
  private readonly events: EventEmitter;
  private readonly transactionRepository: TransactionRepositoryInterface

  constructor(events: EventEmitter, transactionRepository: TransactionRepositoryInterface) {
    this.events = events;
    this.transactionRepository = transactionRepository;
  }

  async execute(params: { id: string, updateTransactionData: UpdateTransactionInterface }): Promise<void> {
    const { id, updateTransactionData } = params;
    const updateResult = await this.transactionRepository.update(id, updateTransactionData);

    this.events.emit("updatedTransactionSuccessfullyEvent", updateResult);
  }
}