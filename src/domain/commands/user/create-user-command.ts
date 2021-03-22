import { EventEmitter } from "events";
import { UserRepositoryInterface } from "@src/application/interfaces/repository-interfaces/user-repository-interface";
import { User as UserInterface } from "@src/application/interfaces/user-interface";

export default class CreateUserCommand {
  constructor(
    private readonly events: EventEmitter,
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(user: UserInterface) {
    const userCreated = await this.userRepository.create(user);

    this.events.emit("userRegisteredEvent", userCreated);
  }
}