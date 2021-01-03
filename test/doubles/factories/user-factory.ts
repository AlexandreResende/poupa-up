import fakerStatic from "faker";
import { User } from "../../../src/application/interfaces/user-interface"

export default class UserFactory {
  public static create(fields = {}): User {
    return {
      email: fakerStatic.internet.email(),
      password: fakerStatic.random.word(),
      fullName: `${fakerStatic.name.firstName()} ${fakerStatic.name.lastName()}`,
      ...fields,
    };
  }
}