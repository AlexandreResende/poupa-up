import { Request, Response } from "express";
import Validator from "../../validator";
import { Type, Any, Optional } from "validate-typescript";
import months from "../../../common/month-representation"
import { HttpResponseHandler } from "@src/application/http-response-handler";
import { EventEmitter } from "events";
import Container from "../../containers/container";

export default class UpdateTransactionController {
  async handleRequest(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const updateTransactionData = req.body;
    const schema = {
      value: Optional(Type(Number)),
      description: Optional(Type(String)),
      category: Optional(Type(String)),
      month: Optional(Any(months)),
      year: Optional(Type(String))
    };
    const updatedTransactionSuccessfully = (data: object) => {
      return HttpResponseHandler.sendSuccess(res, data);
    };
    const result = Validator.validate(schema, updateTransactionData);

    if (result.isValid !== true) {
      return HttpResponseHandler.sendBadRequest(res, result);
    }

    const events = new EventEmitter();
    events.on("updatedTransactionSuccessfullyEvent", updatedTransactionSuccessfully);

    const command = Container.resolve("updateTransactionCommand", events);
    await command.execute({ id, updateTransactionData });
  }
}