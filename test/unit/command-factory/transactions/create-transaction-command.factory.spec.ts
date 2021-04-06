import Container from "@src/application/containers/container";
import CreateTransactionCommand from "@src/domain/commands/transactions/create-transaction-command";
import { EventEmitter } from "events";

const { expect } = require("chai");

describe("CreateTransactionCommandFactory", () => {
  it("return an instance of CreateTransactionCommand when called", () => {
    // given
    const commandName = "createTransactionCommand";
    const events = new EventEmitter();

    // when
    const createTransactionCommand = Container.resolve(commandName, events);

    // then
    expect(createTransactionCommand).to.be.instanceof(CreateTransactionCommand);
  });
});