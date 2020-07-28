import Transaction from "../models/transaction-model"
import { Model } from "sequelize/types"

export default class TransactionRepository {
  // private readonly repository: Model;

  // constructor() {
  //   this.repository = Transaction;
  // }

  async create(transactionData: object): Promise<object> {
    const transaction = new Transaction(transactionData);

    await transaction.save();

    return transaction;
  }
}