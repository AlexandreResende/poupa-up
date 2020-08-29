import { UserRepositoryDataInterface as UserInterface } from "../interfaces/user-interface";
import User from "../../domain/entities/user-entity";

interface UserToDatabaseInterface {
  email?: string;
  password?: string;
  fullName?: string;
};

export const fromDatabase = (attributes: UserInterface) => new User(attributes);

export const toDatabase = (attributes: UserToDatabaseInterface) => ({
  email: attributes.email,
  password: attributes.password,
  fullName: attributes.fullName,
});