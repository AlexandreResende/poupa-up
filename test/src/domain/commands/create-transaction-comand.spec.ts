import { EventEmitter } from "events";
import TransactionInMemoryRepository from "../../../doubles/in-memory-repository/transaction-in-memory-repository";
import CreateTransactionCommand from "../../../../src/domain/commands/create-transaction-command";
import TransactionRepositoryInterface from "../../../../src/application/interfaces/repository-interfaces/transaction-repository-interface"
import TransactionFactory from "../../../doubles/factories/transaction-factory";
import { Transaction } from "../../../../src/application/interfaces/transaction-interface"

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface
): CreateTransactionCommand => {
  return new CreateTransactionCommand(events, transactionRepository);
};

describe("CreateTransactionCommand", () => {
  const transactionRepository = new TransactionInMemoryRepository();

  afterEach(async () => {
    transactionRepository.destroy();
  });

  it("publish the transactionSuccessfullyCreatedEvent when transaction is created", async () => {
    // given
    let eventEmittedData: Transaction;
    const transaction = TransactionFactory.create();
    const transactionSuccessfullyCreated = (data: Transaction) => {
      console.log(data);
      eventEmittedData = data;
    };
    
    const events = new EventEmitter();
    events.on("transactionSuccessfullyCreatedEvent",  transactionSuccessfullyCreated);

    // when
    const command = createCommand(events, transactionRepository);
    await command.execute(transaction);

    // then
    const { id, ...rest } = eventEmittedData!;
    expect(rest).to.be.deep.equal(transaction);
  });
});