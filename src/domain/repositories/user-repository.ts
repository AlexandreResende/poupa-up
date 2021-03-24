import { sequelize } from "../../database-config";
import UserModel from "../../domain/models/user-model"
import { Repository } from "sequelize-typescript";
import { User as UserInterface } from "@src/application/interfaces/user-interface";
import { UserRepositoryInterface } from "../../application/interfaces/repository-interfaces/user-repository-interface"
import { UpdateUserInterface } from "../../application/interfaces/update-user-interface";
import { fromDatabase } from "@src/application/mapper/user-mapper";
import { User } from "@src/domain/entities/user-entity";

export default class UserRepository implements UserRepositoryInterface{
  public readonly repository: Repository<UserModel>;

  constructor() {
    this.repository = sequelize.getRepository(UserModel);
  }

  async create(userData: UserInterface): Promise<User | null> {
    const createdUser = await this.repository.create(userData)

    return fromDatabase(createdUser);
  }

  async  findByEmail(email: string): Promise<User | null> {
    return fromDatabase(await this.repository.findOne({ where: { email: email } }));
  }

  async update(id: string, updateUserData: UpdateUserInterface): Promise<{ updated: number }> {
    const [ valuesUpdated ] = await this.repository.update(updateUserData, { where: { id } });

    return { updated: valuesUpdated };
  }

  async remove(id: string): Promise<{ removed: number}> {
    const valuesRemoved = await this.repository.destroy({ where: { id } });

    return { removed: valuesRemoved };
  }
}