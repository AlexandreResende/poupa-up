import { EventEmitter } from "events";
import { UserRepositoryInterface } from "@src/application/interfaces/repository-interfaces/user-repository-interface";
import { User as UserInterface } from "@src/application/interfaces/user-interface";

export default class CreateUserCommand {
  constructor(
    private readonly events: EventEmitter,
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(user: UserInterface): Promise<void | boolean> {
    const userRecord = await this.userRepository.findByEmail(user.email);

    if (!userRecord) {
      return this.events.emit("emailAlreadyUsedEvent", { email: user.email });
    }

    const userCreated = await this.userRepository.create(user);

    this.events.emit("userRegisteredEvent", userCreated);
  }
}