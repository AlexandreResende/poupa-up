import Container from "@src/application/containers/container";
import DeleteTransactionCommand from "@src/domain/commands/transactions/delete-transaction-command"
import { EventEmitter } from "events";

const { expect } = require("chai");

describe("DeleteTransactionCommandFactory", () => {
  it("return an instance of DeleteTransactionCommand when called", () => {
    // given
    const commandName = "deleteTransactionCommand";
    const events = new EventEmitter();

    // when
    const deleteTransactionCommand = Container.resolve(commandName, events);

    // then
    expect(deleteTransactionCommand).to.be.instanceof(DeleteTransactionCommand);
  });
});