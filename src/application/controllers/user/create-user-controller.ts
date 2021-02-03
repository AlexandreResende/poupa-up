import { Request, Response } from "express";
import { Type, Any } from "validate-typescript";
import { Validator } from "@src/application/validator";
import { HttpResponseHandler } from "@src/application/http-response-handler";
import { EventEmitter } from "events";

export class CreateUserController {
  async handleRequest(req: Request, res: Response): Promise<void> {
    const userData = req.body as object;
    const schema = {
      username: Type(String),
      email: Type(String),
      password: Type(String)
    };
    const result = Validator.validate(schema, userData);

    if (result.isValid !== true) {
      return HttpResponseHandler.sendBadRequest(res, result);
    }

    const events = new EventEmitter();
  }
}
