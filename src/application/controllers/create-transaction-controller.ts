import { Request, Response } from "express";
import { EventEmitter } from "events";
import { Type, Any } from "validate-typescript";
import Validator from "../validator";
import HttpResponseHandler from "../http-response-handler";
import { Transaction as TransactionInterface } from "../interfaces/transaction-interface";
import CreateTransactionCommandFactory from "../containers/create-transaction-command-factory";

export default class CreateTransactionController {
  async handleRequest (req: Request, res: Response): Promise<void> {
    const transaction = req.body;
    const schema = {
      valueSpent: Type(Number),
      description: Type(String),
      category: Type(String),
      month: Any(["01", "012", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]),
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

    const command = new CreateTransactionCommandFactory().create(events);
    await command.execute(transaction);
  }
}
