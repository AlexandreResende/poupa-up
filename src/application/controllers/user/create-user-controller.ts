import { Request, Response } from "express";
import { Type } from "validate-typescript";
import { Validator } from "@src/application/validator";
import { HttpResponseHandler } from "@src/application/http-response-handler";
import { EventEmitter } from "events";
import Container from "@src/application/containers/container";
import { User as UserInterface } from "@src/application/interfaces/user-interface";

export class CreateUserController {
  async handleRequest(req: Request, res: Response): Promise<void> {
    const userData = req.body as object;
    const schema = {
      username: Type(String),
      email: Type(String),
      password: Type(String),
      fullName: Type(String),
    };
    const result = Validator.validate(schema, userData);

    if (result.isValid !== true) {
      return HttpResponseHandler.sendBadRequest(res, result);
    }

    const userRegistered = (data: UserInterface) => {
      return HttpResponseHandler.sendSuccess(res, data);
    };
    const emailAlreadyUsed = (data: { email: string}) => {
      return HttpResponseHandler.sendForbidden(res, data);
    }

    const events = new EventEmitter();
    events.on("userRegisteredEvent", userRegistered);
    events.on("emailAlreadyUsedEvent", emailAlreadyUsed);

    const command = Container.resolve("createUserCommand", events);

    await command.execute(userData);
  }
}
