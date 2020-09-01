import { Request, Response } from "express";
import { EventEmitter } from "events";
import HttpResponseHandler from "../../http-response-handler";
import Container from "@src/application/containers/container";
import ImportTransactionsCSVResponse from "./import-transactions-csv-response";
import { ImportTransactionsCSVRequest } from "./import-transactions-csv-request";

export default class ImportTransactionsCSVController {
  async handleRequest(req: Request, res: Response): Promise<void> {
    const importTransactionsCSV = async (data: { recordsInserted: number }): Promise<void> => {
      const importTransactionsCSVResponse = new ImportTransactionsCSVResponse(data.recordsInserted);

      return HttpResponseHandler.sendSuccess(res, importTransactionsCSVResponse);
    };

    const events = new EventEmitter();
    events.on("importransactionsCSVEvent", importTransactionsCSV);

    const command = Container.resolve("importTransactionsCSVCommand", events);
    const userId: string = req.headers.userId as string;
    const transactions = ImportTransactionsCSVRequest.toTransactionDomain(req.body);

    await command.execute(transactions, userId);
  }
}
