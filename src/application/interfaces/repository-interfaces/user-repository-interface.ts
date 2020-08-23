import { User } from "../user-interface";
import UpdateUserInterface from "../update-user-interface";

export default interface UserRepositoryInterface {
  create(user: User): Promise<User>;
  update(id: string, updatedUser: UpdateUserInterface): Promise<{ updated: number }>;
  remove(id: string): Promise<{ removed: number }>;
}