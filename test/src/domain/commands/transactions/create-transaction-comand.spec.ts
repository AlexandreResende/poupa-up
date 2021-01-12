import { EventEmitter } from "events";
import TransactionInMemoryRepository from "@test/doubles/in-memory-repository/transaction-in-memory-repository";
import CreateTransactionCommand from "@src/domain/commands/transactions/create-transaction-command";
import { TransactionRepositoryInterface } from "@src/application/interfaces/repository-interfaces/transaction-repository-interface";
import { TransactionFactory } from "@test/doubles/factories/transaction-factory";
import { UserFactory } from "@test/doubles/factories/user-factory";
import { TransactionRepositoryDataInterface } from "@src/application/interfaces/transaction-interface";
import { UserInMemoryRepository } from "@test/doubles/in-memory-repository/user-in-memory-repository";

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface
): CreateTransactionCommand => {
  return new CreateTransactionCommand(events, transactionRepository);
};

describe("CreateTransactionCommand", () => {
  const transactionRepository = new TransactionInMemoryRepository();
  const userRepository = new  UserInMemoryRepository();

  afterEach(async () => {
    transactionRepository.destroy();
  });

  it("publishes the transactionSuccessfullyCreatedEvent when transaction is created", async () => {
    // given
    let eventEmittedData: TransactionRepositoryDataInterface;

    const user = UserFactory.create();
    const userCreated = await userRepository.create(user);

    const transaction = TransactionFactory.create();

    const events = new EventEmitter();

    const transactionSuccessfullyCreated = (data: TransactionRepositoryDataInterface) => {
      eventEmittedData = data;
    };

    events.on("transactionSuccessfullyCreatedEvent",  transactionSuccessfullyCreated);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute(transaction, userCreated.id);

    // then
    const { id, createdAt, updatedAt, ...rest } = eventEmittedData!;
    expect(rest).to.be.deep.equal(transaction);
  });
});