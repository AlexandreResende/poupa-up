import { Request, Response } from "express";
import { EventEmitter } from "events";
import HttpResponseHandler from "../../http-response-handler";
import Container from "@src/application/containers/container";
import ImportTransactionsCSVResponse from "./import-transactions-csv-response";

export default class ImportTransactionsCSVController {
  async handleRequest(_: Request, res: Response): Promise<void> {
    const importTransactionsCSV = async (data: { recordsInserted: number }): Promise<void> => {
      const importTransactionsCSVResponse = new ImportTransactionsCSVResponse(data.recordsInserted);

      return HttpResponseHandler.sendSuccess(res, importTransactionsCSVResponse);
    };

    const events = new EventEmitter();
    events.on("importransactionsCSVEvent", importTransactionsCSV);

    const command = Container.resolve("importTransactionsCSVCommand", events);

    await command.execute();
  }
}
