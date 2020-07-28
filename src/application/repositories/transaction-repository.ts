import { sequelize } from "../database-config";
import Transaction from "../models/transaction-model"
import { Repository } from "sequelize-typescript";

export default class TransactionRepository {
  public readonly repository: Repository<Transaction>;

  constructor() {
    this.repository = sequelize.getRepository(Transaction);
  }

  async create(transactionData: object): Promise<object> {
    return this.repository.create(transactionData);
  }
}