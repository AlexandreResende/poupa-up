import { Request, Response } from "express";
import { EventEmitter } from "events";
import { Type, Any } from "validate-typescript";
import Validator from "../../validator";
import HttpResponseHandler from "../../http-response-handler";
import { Transaction as TransactionInterface } from "../../interfaces/transaction-interface";
import Container from "../../containers/container";
import months from "../../../common/month-representation";

export default class CreateTransactionController {
  async handleRequest (req: Request, res: Response): Promise<void> {
    const transaction = req.body;
    const schema = {
      value: Type(Number),
      description: Type(String),
      category: Type(String),
      month: Any(months),
      year: Type(String),
    };
    const result = Validator.validate(schema, transaction);

    if (result.isValid !== true) {
      return HttpResponseHandler.sendBadRequest(res, result);
    }

    const transactionSuccessfullyCreated = (data: TransactionInterface) => {
      return HttpResponseHandler.sendSuccess(res, data);
    };

    const events = new EventEmitter();
    events.on("transactionSuccessfullyCreatedEvent", transactionSuccessfullyCreated);

    const command = Container.resolve("createTransactionCommand", events);

    await command.execute(transaction);
  }
}
