import { Router } from "express";
import { expressHandler } from "../express-handler";
import { GetTransactionsController } from "@src/application/controllers/transactions/get-transactions-controller";
import { CreateTransactionController } from "@src/application/controllers/transactions/create-transaction-controller";
import { UpdateTransactionController } from "@src/application/controllers/transactions/update-transaction-controller";
import { DeleteTransactionController } from "@src/application/controllers/transactions/delete-transaction-controller";

export class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();

    this.configRoutes();
  }

  private configRoutes(): void {
    this.routes
      .get("/transaction", expressHandler(new GetTransactionsController().handleRequest))
      .post("/transaction", expressHandler(new CreateTransactionController().handleRequest))
      .put("/transaction/:id", expressHandler(new UpdateTransactionController().handleRequest))
      .delete("/transaction/:id", expressHandler(new DeleteTransactionController().handleRequest));
  }

  public getRoutes(): Router {
    return this.routes;
  }
};
