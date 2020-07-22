import { Request, Response, Router } from "express";
import { GetTransactionsController } from "./get-transactions-controller";

export class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();

    this.configRoutes();
  }

  private configRoutes(): void {
    this.routes
      .get("/", new GetTransactionsController().handleRequest);
  }

  public getRoutes(): Router {
    return this.routes;
  }
};
