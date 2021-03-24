import { UserRepositoryDataInterface as UserInterface } from "@src/application/interfaces/user-interface";
import { User } from "@src/domain/entities/user-entity";

interface UserToDatabaseInterface {
  email?: string;
  password?: string;
  fullName?: string;
};

export const fromDatabase = (attributes: UserInterface | null): User | null => {
  if (!attributes) {
    return null
  }

  return new User(attributes);
};

export const toDatabase = (attributes: UserToDatabaseInterface) => ({
  email: attributes.email,
  password: attributes.password,
  fullName: attributes.fullName,
});