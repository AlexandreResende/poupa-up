import { Request, Response } from "express";
import { Type } from "validate-typescript";
import { Validator } from "@src/application/validator";
import { HttpResponseHandler } from "@src/application/http-response-handler";
import { EventEmitter } from "events";
import Container from "@src/application/containers/container";
import { User as UserInterface } from "@src/application/interfaces/user-interface";

export class LoginUserController {
  async handleRequest(req: Request, res: Response): Promise<void> {
    const userData = req.body as { email: string, password: string };
    const schema = {
      email: Type(String),
      password: Type(String),
    };
    const result = Validator.validate(schema, userData);

    if (result.isValid !== true) {
      return HttpResponseHandler.sendBadRequest(res, result);
    }

    const userLogged = (data: UserInterface) => {
      return HttpResponseHandler.sendSuccess(res, data);
    };
    const userNotFound = (data: { message: string }) => {
      return HttpResponseHandler.sendNotFound(res, data);
    };

    const events = new EventEmitter();
    events.on("userLoggedEvent", userLogged);
    events.on("userNotFoundEvent", userNotFound);

    const command = Container.resolve("LoginUserCommand", events);

    await command.execute(userData);
  }
}
