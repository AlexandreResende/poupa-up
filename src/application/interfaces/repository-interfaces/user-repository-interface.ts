import { User as UserInterface, UserRepositoryDataInterface } from "@src/application/interfaces/user-interface";
import { UpdateUserInterface } from "@src/application/interfaces/update-user-interface";
import { User } from "@src/domain/entities/user-entity";

export interface UserRepositoryInterface {
  create(user: UserInterface): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, updatedUser: UpdateUserInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}