import { TransactionRepositoryInterface } from "../../../src/application/interfaces/repository-interfaces/transaction-repository-interface";
import { UpdateTransactionInterface } from "../../../src/application/interfaces/update-transaction-interface";
import {
  Transaction as TransactionInterface,
  TransactionRepositoryDataInterface
} from "../../../src/application/interfaces/transaction-interface";
import { fromDatabase } from "@src/application/mapper/user-mapper";
import { v4 } from "uuid";
import { Transaction } from "../../../src/domain/entities/transaction-entity";
import { UserRepositoryInterface } from "@src/application/interfaces/repository-interfaces/user-repository-interface";
import { User as UserInterface, UserRepositoryDataInterface } from "@src/application/interfaces/user-interface";
import { UpdateUserInterface } from "@src/application/interfaces/update-user-interface";
import { User } from "@src/domain/entities/user-entity";

export class UserInMemoryRepository implements UserRepositoryInterface {
  public user: User[];

  constructor() {
    this.user = [];
  }

  async create(userData: UserInterface): Promise<User> {
    const newUser = {
      ...userData,
      id: v4(),
      transactions: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const userEntity = fromDatabase(newUser) as User;

    this.user.push(userEntity);

    return userEntity;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.user.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return fromDatabase(user);
  }

  async update(id: string, updateUserData: UpdateUserInterface): Promise<{ updated: number }> {
    const transactionIndex = this.user.findIndex((transaction) => transaction.id === id);

    if (transactionIndex === -1) {
      return { updated: 0 };
    }

    Object.assign(this.user[transactionIndex], updateUserData);

    return { updated: 1 };
  }

  async remove(id: string): Promise<{ removed: number}> {
    const transactionIndex = this.user.findIndex(transaction => transaction.id === id);

    if (transactionIndex === -1) {
      return { removed: 0 };
    }

    this.user.splice(transactionIndex, 1);

    return { removed: 1 };
  }

  async destroy(): Promise<void> {
    this.user = [];
  }
}