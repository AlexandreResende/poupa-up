import Container from "@src/application/containers/container";
import { ImportTransactionsCSVCommand } from "@src/domain/commands/transactions/import-transactions-csv-command";
import { EventEmitter } from "events";

const { expect } = require("chai");

describe.only("ImportTransactionsCSVCommandFactory", () => {
  it("return an instance of ImportTransactionsCSVCommand when called", () => {
    // given
    const commandName = "importTransactionsCSVCommand";
    const events = new EventEmitter();

    // when
    const importTransactionsCSVCommand = Container.resolve(commandName, events);

    // then
    expect(importTransactionsCSVCommand).to.be.instanceof(ImportTransactionsCSVCommand);
  });
});