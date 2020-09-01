import { sequelize } from "../../database-config";
import TransactionModel from "../../domain/models/transaction-model"
import { Repository } from "sequelize-typescript";
import { Transaction as TransactionInterface } from "../../application/interfaces/transaction-interface";
import TransactionRepositoryInterface from "../../application/interfaces/repository-interfaces/transaction-repository-interface"
import UpdateTransactionInterface from "../../application/interfaces/update-transaction-interface";
import { fromDatabase } from "../../application/mapper/transaction-mapper";
import Transaction from "../entities/transaction-entity";

export default class TransactionRepository implements TransactionRepositoryInterface{
  public readonly repository: Repository<TransactionModel>;

  constructor() {
    this.repository = sequelize.getRepository(TransactionModel);
  }

  async create(transactionData: TransactionInterface, userId: string): Promise<Transaction> {
    return fromDatabase(await this.repository.create({ ...transactionData, userId }));
  }

  async bulkInsert(transactions: TransactionInterface[], userId: string): Promise<Transaction[]> {
    const newTransactions = transactions.map((transaction: TransactionInterface) => ({ ...transaction, userId }));

    return await this.repository.bulkCreate(newTransactions).map(fromDatabase);
  }

  async findAll(): Promise<Transaction[]> {
    return this.repository.findAll({ where: {} }).map(fromDatabase);
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