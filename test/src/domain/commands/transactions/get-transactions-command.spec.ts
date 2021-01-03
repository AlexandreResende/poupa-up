import { EventEmitter } from "events";
import { GetTransactionsCommand } from "@src/domain/commands/transactions/get-transactions-command";
import TransactionRepositoryInterface from "@src/application/interfaces/repository-interfaces/transaction-repository-interface"
import TransactionInMemoryRepository from "@test/doubles/in-memory-repository/transaction-in-memory-repository";
import TransactionFactory from "@test/doubles/factories/transaction-factory"
import { Transaction } from "@src/application/interfaces/transaction-interface";
import UserFactory from "@test/doubles/factories/user-factory";
import { UserInMemoryRepository } from "@test/doubles/in-memory-repository/user-in-memory-repository";

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface
): GetTransactionsCommand => {
  return new GetTransactionsCommand(events, transactionRepository);
};

describe("GetTransactionsCommand", () => {
  const transactionRepository = new TransactionInMemoryRepository();
  const userRepository = new UserInMemoryRepository();

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

  it("returns an array with length equals two when there is no transactions registered", async () => {
    // given
    let eventEmittedData: Transaction[];
    const expectedTransactionsLength = 2;
    const maxTransactionsToBeCreated = 2;
    const getTransactionsSuccessfullyEvent = (data: Transaction[]) => {
      eventEmittedData = data
    };

    for (let counter = 0; counter < maxTransactionsToBeCreated; counter++) {
      const user = UserFactory.create();
      const userCreated = await userRepository.create(user);

      await transactionRepository.create(TransactionFactory.create(), userCreated.id);
    }

    const events = new EventEmitter();
    events.on("getTransactionsSuccessfullyEvent", getTransactionsSuccessfullyEvent);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute();

    // then
    expect(eventEmittedData!.length).to.be.equal(expectedTransactionsLength);
  });
});