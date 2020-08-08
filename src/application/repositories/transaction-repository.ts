import { sequelize } from "../database-config";
import Transaction from "../models/transaction-model"
import { Repository } from "sequelize-typescript";
import { Transaction as TransactionInterface } from "../interfaces/transaction-interface";
import TransactionRepositoryInterface from "../interfaces/repository-interfaces/transaction-repository-interface"
import UpdateTransactionInterface from "../interfaces/update-transaction-interface";

export default class TransactionRepository implements TransactionRepositoryInterface{
  public readonly repository: Repository<Transaction>;

  constructor() {
    this.repository = sequelize.getRepository(Transaction);
  }

  async create(transactionData: TransactionInterface): Promise<TransactionInterface> {
    return this.repository.create(transactionData);
  }

  async findAll(): Promise<TransactionInterface[]> {
    return this.repository.findAll({ where: {} });
  }

  async update(updateTransactionData: UpdateTransactionInterface): Promise<void> {
    const { id, ...rest } = updateTransactionData;
    
    await this.repository.update(rest, { where: { id } });

    return;
  }
}