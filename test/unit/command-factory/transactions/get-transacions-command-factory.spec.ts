import Container from "@src/application/containers/container";
import { GetTransactionsCommand } from "@src/domain/commands/transactions/get-transactions-command"
import { EventEmitter } from "events";

const { expect } = require("chai");

describe("GetTransactionsCommandFactory", () => {
  it("return an instance of GetTransactionsCommand when called", () => {
    // given
    const commandName = "getTransactionsCommand";
    const events = new EventEmitter();

    // when
    const getTransactionsCommand = Container.resolve(commandName, events);

    // then
    expect(getTransactionsCommand).to.be.instanceof(GetTransactionsCommand);
  });
});