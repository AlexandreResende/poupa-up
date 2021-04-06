import Container from "@src/application/containers/container";
import UpdateTransactionCommand from "@src/domain/commands/transactions/update-transaction-command";
import { EventEmitter } from "events";

const { expect } = require("chai");

describe("UpdateTransactionCommandFactory", () => {
  it("return an instance of UpdateTransactionCommand when called", () => {
    // given
    const commandName = "updateTransactionCommand";
    const events = new EventEmitter();

    // when
    const updateTransactionCommand = Container.resolve(commandName, events);

    // then
    expect(updateTransactionCommand).to.be.instanceof(UpdateTransactionCommand);
  });
});