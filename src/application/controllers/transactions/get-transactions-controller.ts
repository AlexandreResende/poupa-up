import { Request, Response } from "express";
import { EventEmitter } from "events";
import GetTransactionsCommandFactory from "../../containers/transactions/get-transactions-command-factory";
import HttpResponseHandler from "../../http-response-handler";
import Container from "../../containers/container";

export default class GetTransactionsController {
  async handleRequest(_: Request, res: Response): Promise<void> {
    const getTransactionsSuccessfully = async (transactions: object[]): Promise<void> => {
      return HttpResponseHandler.sendSuccess(res, { transactions });
    };

    const events = new EventEmitter();
    events.on("getTransactionsSuccessfullyEvent", getTransactionsSuccessfully);

    const command = Container.resolve("getTransactionsComand", events);

    await command.execute();
  }
}
