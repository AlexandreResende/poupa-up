import { v4 } from "uuid";
import fakerStatic from "faker";
import { TransactionRepositoryInterface } from "@src/application/interfaces/repository-interfaces/transaction-repository-interface";
import UpdateTransactionCommand from "@src/domain/commands/transactions/update-transaction-command";
import { EventEmitter } from "events";
import TransactionInMemoryRepository from "@test/doubles/in-memory-repository/transaction-in-memory-repository";
import { TransactionFactory } from "@test/doubles/factories/transaction-factory";
import { UserFactory } from "@test/doubles/factories/user-factory";
import { UserInMemoryRepository } from "@test/doubles/in-memory-repository/user-in-memory-repository";

const { expect } = require("chai");

const createCommand = (
  events: EventEmitter,
  transactionRepository: TransactionRepositoryInterface
): UpdateTransactionCommand => {
  return new UpdateTransactionCommand(events, transactionRepository);
};

describe("Unit", () => {
  describe("UpdateTransactionCommand", () => {
    const transactionRepository = new TransactionInMemoryRepository();
    const userRepository = new UserInMemoryRepository();

    afterEach(async () => {
      await transactionRepository.destroy();
    });

    it("returns updated equals one when one transaction was updated", async () => {
      // given
      let eventEmittedData: { updated: number };
      const expectedUpdatedValues = 1;
      const transaction = TransactionFactory.create();
      const updatedTransactionSuccessfully = (data: { updated: number }) => {
        eventEmittedData = data;
      };

      const user = UserFactory.create();
      const userCreated = await userRepository.create(user);

      const { id } = await transactionRepository.create(transaction, userCreated.id);
      const transactionId = id ?? v4();
      const updateTransactionData = {
        value: fakerStatic.random.number({ min: 1, max: 50 }),
        description: fakerStatic.random.word(),
      };

      const events = new EventEmitter();
      events.on("updatedTransactionSuccessfullyEvent", updatedTransactionSuccessfully);

      //when
      const command = createCommand(events, transactionRepository);
      await command.execute({ id: transactionId, updateTransactionData });

      //then
      expect(eventEmittedData!.updated).to.be.equal(expectedUpdatedValues);
    });

    it("returns updated equals zero when no transaction was updated", async () => {
      // given
      let eventEmittedData: { updated: number };
      const expectedUpdatedValues = 0;
      const updatedTransactionSuccessfully = (data: { updated: number }) => {
        eventEmittedData = data;
      };
      const id = v4();
      const updateTransactionData = {
        description: fakerStatic.random.word(),
      };

      const events = new EventEmitter();
      events.on("updatedTransactionSuccessfullyEvent", updatedTransactionSuccessfully);

      //when
      const command = createCommand(events, transactionRepository);
      await command.execute({ id, updateTransactionData });

      //then
      expect(eventEmittedData!.updated).to.be.equal(expectedUpdatedValues);
    });
  });
});
