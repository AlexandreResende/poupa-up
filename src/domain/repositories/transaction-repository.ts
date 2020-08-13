import { sequelize } from "../../application/database-config";
import Transaction from "../../application/models/transaction-model"
import { Repository } from "sequelize-typescript";
import { Transaction as TransactionInterface } from "../../application/interfaces/transaction-interface";
import TransactionRepositoryInterface from "../../application/interfaces/repository-interfaces/transaction-repository-interface"
import UpdateTransactionInterface from "../../application/interfaces/update-transaction-interface";

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

  async update(id: string, updateTransactionData: UpdateTransactionInterface): Promise<{ updated: number }> {
    const [ valuesUpdated ] = await this.repository.update(updateTransactionData, { where: { id } });

    return { updated: valuesUpdated };
  }

  async remove(id: string): Promise<{ removed: number}> {
    const valuesRemoved = await this.repository.destroy({ where: { id } });

    return { removed: valuesRemoved };
  }
}