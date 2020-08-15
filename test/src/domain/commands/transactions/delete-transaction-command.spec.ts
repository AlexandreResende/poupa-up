import DeleteTransactionCommand from "../../../../../src/domain/commands/transactions/delete-transaction-command";
import { EventEmitter } from "events";
import TransactionRepositoryInterface from "../../../../../src/application/interfaces/repository-interfaces/transaction-repository-interface";
import TransactionInMemoryRepository from "../../../../doubles/in-memory-repository/transaction-in-memory-repository"
import TransactionFactory from "../../../../doubles/factories/transaction-factory";
import { v4 } from "uuid";

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface,
  ): DeleteTransactionCommand => {
    return new DeleteTransactionCommand(events, transactionRepository);
  };

describe("DeleteTransactionCommand", () => {
  const transactionRepository = new TransactionInMemoryRepository();

  it("deletes the specified record when its id is passed", async () => {
    // given
    let eventDataEmitted: { removed: number };
    const removedTransactions = 1;
    const transaction = await transactionRepository.create(TransactionFactory.create());
    const transactionId = transaction.id;
    const transactionRemovedSuccessfully = (data: { removed: number }) => {
      eventDataEmitted = data;
    }

    const events = new EventEmitter();
    events.on("transactionRemovedSuccessfullyEvent", transactionRemovedSuccessfully);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute({ id: transactionId });

    // then
    expect(eventDataEmitted!.removed).to.be.equal(removedTransactions);
  });

  it("returns removed equals zero when no transaction was found for the given id", async () => {
    // given
    let eventDataEmitted: { removed: number };
    const removedTransactions = 0;
    const transactionRemovedSuccessfully = (data: { removed: number }) => {
      eventDataEmitted = data;
    }

    const events = new EventEmitter();
    events.on("transactionRemovedSuccessfullyEvent", transactionRemovedSuccessfully);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute({ id: v4() });

    // then
    expect(eventDataEmitted!.removed).to.be.equal(removedTransactions);
  });
});