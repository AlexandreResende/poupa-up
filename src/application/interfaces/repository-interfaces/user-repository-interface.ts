import { User as UserInterface } from "@src/application/interfaces/user-interface";
import UpdateUserInterface from "@src/application/interfaces/update-user-interface";

export default interface UserRepositoryInterface {
  create(user: UserInterface): Promise<UserInterface>;
  update(id: string, updatedUser: UpdateUserInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}