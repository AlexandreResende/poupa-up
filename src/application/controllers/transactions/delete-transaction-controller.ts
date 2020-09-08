import { Request, Response } from "express";
import { EventEmitter } from "events";
import HttpResponseHandler from "@src/application/http-response-handler";
import Container from "@src/application/containers/container";

export default class DeleteTransactionController {
  async handleRequest(req: Request, res: Response) {
    const id = req.params.id;
    const transactionRemovedSuccessfully = (data: { removed: number }) => {
      return HttpResponseHandler.sendSuccess(res, data);
    }

    const events = new EventEmitter();
    events.on("transactionRemovedSuccessfullyEvent", transactionRemovedSuccessfully);

    const command = Container.resolve("deleteTransactionCommand", events);

    await command.execute({ id });
  }
}