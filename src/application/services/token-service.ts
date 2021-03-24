import { sign, verify } from "jsonwebtoken";
import { CryptographyService } from "@src/application/services/cryptography-service";

export class TokenService {
  private readonly privateKey: string = process.env.TOKEN_PRIVATE_KEY || '';
  constructor(
    private readonly cryptographyService: CryptographyService,
    ) {
  }

  async generateAccessToken(fields: object): Promise<string> {
    return sign(fields, this.privateKey);
  }

  async validate(token: string): Promise<string | object> {
    return verify(token, this.privateKey);
  }

  async generateRefreshToken(): Promise<string> {
    const defaultRefreshTokenString = 'faker_refresh_token';

    return this.cryptographyService.encrypt(defaultRefreshTokenString);
  }
}