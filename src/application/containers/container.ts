import { EventEmitter } from "events";
import CreateTransactionCommandFactory from "./transactions/create-transaction-command-factory";
import DeleteTransactionCommandFactory from "./transactions/delete-transaction-command-factory";
import GetTransactionsCommandFactory from "./transactions/get-transactions-command-factory";
import UpdateTransactionCommandFactory from "./transactions/update-transaction-command-factory";
import ImportTransactionsCSVCommandFactory from "./transactions/import-transactions-csv-command-factory";
import { BaseCommandInterface } from "../../domain/commands/base-command-interface";
import CommandFactoryInterface from "./command-factory-interface"

export default class Container {
  private static readonly commandFactories: { [key: string]: CommandFactoryInterface } = {
    ["createTransactionCommand"]: new CreateTransactionCommandFactory(),
    ["deleteTransactionCommand"]: new DeleteTransactionCommandFactory(),
    ["getTransactionsCommand"]: new GetTransactionsCommandFactory(),
    ["updateTransactionCommand"]: new UpdateTransactionCommandFactory(),
    ["importTransactionsCSVCommand"]: new ImportTransactionsCSVCommandFactory(),
  };

  public static resolve(commandName: string, events: EventEmitter): BaseCommandInterface {
    return this.commandFactories[commandName].create(events);
  };
}