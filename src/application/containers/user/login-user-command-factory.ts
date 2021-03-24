import LoginUserCommand from "@src/domain/commands/user/login-user-command";
import { EventEmitter } from "events";
import UserRepository from "@src/domain/repositories/user-repository";
import { CryptographyService } from '@src/application/services/cryptography-service'
import { TokenService } from "@src/application/services/token-service";

export class LoginUserCommandFactory {
  create(events: EventEmitter) {
    const userRepository = new UserRepository();
    const cryptographyService = new CryptographyService();
    const tokenService = new TokenService(cryptographyService);

    return new LoginUserCommand(
      events,
      userRepository,
      tokenService,
    );
  }
}