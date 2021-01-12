import { UserRepositoryDataInterface as UserInterface } from "../../application/interfaces/user-interface";

export class User {
  public readonly id: string;
  public readonly email: string;
  public readonly password: string;
  public readonly fullName: string;
  public readonly createdAt: string;
  public readonly updatedAt: string;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.fullName = user.fullName;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}