import { Request, Response } from "express";
import { EventEmitter } from "events";
import GetTransactionsCommandFactory from "../containers/get-transactions-command-factory";
import HttpResponseHandler from "../http-response-handler";

export default class GetTransactionsController {
  async handleRequest(_: Request, res: Response): Promise<void> {
    const getTransactionsSuccessfully = async (transactions: object[]): Promise<void> => {
      return HttpResponseHandler.sendSuccess(res, { transactions });
    };

    const events = new EventEmitter();
    events.on("getTransactionsSuccessfullyEvent", getTransactionsSuccessfully);

    const command = new GetTransactionsCommandFactory().create(events);

    await command.execute();
  }
}
