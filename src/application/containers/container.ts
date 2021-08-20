import { EventEmitter } from "events";
import { CreateTransactionCommandFactory } from "@src/application/containers/transactions/create-transaction-command-factory";
import { DeleteTransactionCommandFactory } from "@src/application/containers/transactions/delete-transaction-command-factory";
import { GetTransactionsCommandFactory } from "@src/application/containers/transactions/get-transactions-command-factory";
import { UpdateTransactionCommandFactory } from "@src/application/containers/transactions/update-transaction-command-factory";
import { ImportTransactionsCSVCommandFactory } from "@src/application/containers/transactions/import-transactions-csv-command-factory";
import { BaseCommandInterface } from "@src/domain/commands/base-command-interface";
import { CommandFactoryInterface } from "@src/application/containers/command-factory-interface";
import { CreateUserCommandFactory } from "@src/application/containers/user/create-user-command-factory";
import { LoginUserCommandFactory } from "@src/application/containers/user/login-user-command-factory";

export default class Container {
  private static readonly commandFactories:  Record<string, CommandFactoryInterface> = {
    ["createTransactionCommand"]: new CreateTransactionCommandFactory(),
    ["deleteTransactionCommand"]: new DeleteTransactionCommandFactory(),
    ["getTransactionsCommand"]: new GetTransactionsCommandFactory(),
    ["updateTransactionCommand"]: new UpdateTransactionCommandFactory(),
    ["importTransactionsCSVCommand"]: new ImportTransactionsCSVCommandFactory(),
    ["createUserCommand"]: new CreateUserCommandFactory(),
    ["loginUserCommand"]: new LoginUserCommandFactory(),
  };

  public static resolve(commandName: string, events: EventEmitter): BaseCommandInterface {
    return this.commandFactories[commandName].create(events);
  };
}