import { sequelize } from "../../database-config";
import UserModel from "../../domain/models/user-model"
import { Repository } from "sequelize-typescript";
import { User as UserInterface, UserRepositoryDataInterface } from "@src/application/interfaces/user-interface";
import { UserRepositoryInterface } from "../../application/interfaces/repository-interfaces/user-repository-interface"
import { UpdateUserInterface } from "../../application/interfaces/update-user-interface";

export default class UserRepository implements UserRepositoryInterface{
  public readonly repository: Repository<UserModel>;

  constructor() {
    this.repository = sequelize.getRepository(UserModel);
  }

  async create(userData: UserInterface): Promise<UserRepositoryDataInterface> {
    return this.repository.create(userData);
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