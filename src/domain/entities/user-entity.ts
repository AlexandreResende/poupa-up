import { UserRepositoryDataInterface as UserInterface } from "../../application/interfaces/user-interface";
import { CryptographyService } from "@src/application/services/cryptography-service";

export class User {
  public readonly id: string;
  public readonly email: string;
  public readonly password: string;
  public readonly fullName: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.fullName = user.fullName;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  doesPasswordMatch(password: string): boolean {
    const cryptographyService = new CryptographyService();
    const encryptedPassword = cryptographyService.encrypt(password);

    return this.password === encryptedPassword;
  }
}