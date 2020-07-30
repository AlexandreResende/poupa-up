import { sequelize } from "../database-config";
import Transaction from "../models/transaction-model"
import { Repository } from "sequelize-typescript";
import { Transaction as TransactionInterface } from "../../transaction-interface"; 

export default class TransactionRepository {
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
}