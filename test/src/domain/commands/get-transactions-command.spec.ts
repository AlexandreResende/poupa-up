import { EventEmitter } from "events";
import { GetTransactionsCommand } from "../../../../src/domain/commands/get-transactions-command";
import TransactionRepositoryInterface from "../../../../src/application/interfaces/repository-interfaces/transaction-repository-interface"
import TransactionInMemoryRepository from "../../../doubles/in-memory-repository/transaction-in-memory-repository";
import TransactionFactory from "../../../doubles/factories/transaction-factory"
import { Transaction } from "../../../../src/application/interfaces/transaction-interface";

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface
): GetTransactionsCommand => {
  return new GetTransactionsCommand(events, transactionRepository);
};

describe("GetTransactionsCommand", () => {
  const transactionRepository = new TransactionInMemoryRepository();

  afterEach(async () => {
    await transactionRepository.destroy();
  });

  it("returns an empty array when there is no transactions registered", async () => {
    // given
    let eventEmittedData: Transaction[];
    const expectedTransactionsLength = 0;
    const getTransactionsSuccessfullyEvent = (data: Transaction[]) => {
      eventEmittedData = data
    };

    const events = new EventEmitter();
    events.on("getTransactionsSuccessfullyEvent", getTransactionsSuccessfullyEvent);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute();

    // then
    expect(eventEmittedData!.length).to.be.equal(expectedTransactionsLength);
  });
});