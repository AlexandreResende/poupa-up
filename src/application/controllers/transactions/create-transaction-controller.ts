import { Request, Response } from "express";
import { EventEmitter } from "events";
import { Type, Any } from "validate-typescript";
import { Validator } from "@src/application/validator";
import { HttpResponseHandler } from "@src/application/http-response-handler";
import { Transaction as TransactionInterface } from "@src/application/interfaces/transaction-interface";
import Container from "@src/application/containers/container";
import months from "@src/common/month-representation";

export class CreateTransactionController {
  async handleRequest (req: Request, res: Response): Promise<void> {
    const userId: string = req.headers.userId as string;
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

    await command.execute(transaction, userId);
  }
}
