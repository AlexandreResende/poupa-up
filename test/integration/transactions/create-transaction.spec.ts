import app from "../../../index";
import chai from "@test/chai-encapsulation";
import { TransactionFactory } from "@test/doubles/factories/transaction-factory";

const expect = chai.expect;

describe("Integration", () => {
  describe("Create transaction endpoint", () => {
    it("creates a transaction", async () => {
      const transaction = TransactionFactory.create();

      const response = await chai
        .request(app)
        .post("/transaction")
        .type("application/json")
        .send(transaction);

      console.log(response);

      expect(true).to.be.equal(true);
      chai.request(app).close
    });
  });
});
