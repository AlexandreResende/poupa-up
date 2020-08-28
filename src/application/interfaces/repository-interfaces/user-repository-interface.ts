import { User as UserInterface } from "../user-interface";
import UpdateUserInterface from "../update-user-interface";

export default interface UserRepositoryInterface {
  create(user: UserInterface): Promise<UserInterface>;
  update(id: string, updatedUser: UpdateUserInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}