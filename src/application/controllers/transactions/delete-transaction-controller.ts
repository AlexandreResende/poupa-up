import { Request, Response } from "express";
import { EventEmitter } from "events";
import HttpResponseHandler from "../../http-response-handler";
import DeleteTransactionCommandFactory from "../../containers/transactions/delete-transaction-command-factory";

export default class DeleteTransactionController {
  async handleRequest(req: Request, res: Response) {
    const id = req.params.id;
    const transactionRemovedSuccessfully = (data: { removed: number }) => {
      return HttpResponseHandler.sendSuccess(res, data);
    }

    const events = new EventEmitter();
    events.on("transactionRemovedSuccessfullyEvent", transactionRemovedSuccessfully);

    const command = new DeleteTransactionCommandFactory().create(events);
    await command.execute(id);
  }
}