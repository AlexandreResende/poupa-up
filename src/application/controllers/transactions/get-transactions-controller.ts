import { Request, Response } from "express";
import { EventEmitter } from "events";
import { HttpResponseHandler } from "@src/application/http-response-handler";
import Container from "@src/application/containers/container";

export default class GetTransactionsController {
  async handleRequest(_: Request, res: Response): Promise<void> {
    const getTransactionsSuccessfully = async (transactions: object[]): Promise<void> => {
      return HttpResponseHandler.sendSuccess(res, { transactions });
    };

    const events = new EventEmitter();
    events.on("getTransactionsSuccessfullyEvent", getTransactionsSuccessfully);

    const command = Container.resolve("getTransactionsCommand", events);

    await command.execute();
  }
}
