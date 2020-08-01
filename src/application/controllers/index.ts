import { Router } from "express";
import GetTransactionsController from "./get-transactions-controller";
import { expressHandler } from "../express-handler";

export class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();

    this.configRoutes();
  }

  private configRoutes(): void {
    this.routes
      .get("/", expressHandler(new GetTransactionsController().handleRequest));
  }

  public getRoutes(): Router {
    return this.routes;
  }
};
