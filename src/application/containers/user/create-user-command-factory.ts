import CreateUserCommand from "@src/domain/commands/user/create-user-command";
import { EventEmitter } from "events";
import UserRepository from "@src/domain/repositories/user-repository";

export class CreateUserCommandFactory {
  create(events: EventEmitter) {
    const userRepository = new UserRepository();

    return new CreateUserCommand(events, userRepository);
  }
}