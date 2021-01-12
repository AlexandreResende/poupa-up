import app from "../../../index";
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import { TransactionFactory } from "@test/doubles/factories/transaction-factory";

const expect = chai.expect;

describe.only("Create transaction endpoint", () => {
  it("creates a transaction", async () => {
    const transaction = TransactionFactory.create();

    const response = await chai
      .request(app)
      .post("/transaction")
      .type("application/json")
      .send(transaction);


    console.log(response);

    expect(true).to.be.equal(true);
  });
});