import { EventEmitter } from "events";
import { UserRepositoryInterface } from "@src/application/interfaces/repository-interfaces/user-repository-interface";
import { User as UserInterface } from "@src/application/interfaces/user-interface";
import { TokenService } from "@src/application/services/token-service";

export default class LoginUserCommand {
  constructor(
    private readonly events: EventEmitter,
    private readonly userRepository: UserRepositoryInterface,
    private readonly tokenService: TokenService,
  ) {}

  async execute(user: UserInterface) {
    const userFound = await this.userRepository.findByEmail(user.email);

    if (!userFound) {
      this.events.emit('userNotFoundEvent', { message: "User not found" });

      return;
    }

    if (!userFound.doesPasswordMatch(user.password)) {
      this.events.emit('passwordDoesNotMatchEvent', { message: 'Password does not match event' });

      return;
    }

    const accessToken = await this.tokenService.generateAccessToken({});
    const refreshToken = await this.tokenService.generateRefreshToken();

    this.events.emit("userRegisteredEvent", { userFound, accessToken, refreshToken });
  }
}