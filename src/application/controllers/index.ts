import { Router } from "express";
import { expressHandler } from "../express-handler";
import GetTransactionsController from "./get-transactions-controller";
import CreateTransactionController from "./create-transaction-controller";

export class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();

    this.configRoutes();
  }

  private configRoutes(): void {
    this.routes
      .get("/transaction", expressHandler(new GetTransactionsController().handleRequest))
      .post('/transaction', expressHandler(new CreateTransactionController().handleRequest));
  }

  public getRoutes(): Router {
    return this.routes;
  }
};
