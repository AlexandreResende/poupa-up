import { Router } from "express";
import { expressHandler } from "../express-handler";
import { GetTransactionsController } from "@src/application/controllers/transactions/get-transactions-controller";
import { CreateTransactionController } from "@src/application/controllers/transactions/create-transaction-controller";
import { UpdateTransactionController } from "@src/application/controllers/transactions/update-transaction-controller";
import { DeleteTransactionController } from "@src/application/controllers/transactions/delete-transaction-controller";
import { CreateUserController } from "./user/create-user-controller";
import cors from 'cors';

export class Routes {
  public routes: Router;

  constructor() {
    this.routes = Router();

    this.configRoutes();
  }

  private configRoutes(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
      ],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: "http://localhost:8080",
      preflightContinue: false,
    };

    this.routes
      .use(cors(options))
      .get("/transaction", expressHandler(new GetTransactionsController().handleRequest))
      .post("/transaction", expressHandler(new CreateTransactionController().handleRequest))
      .put("/transaction/:id", expressHandler(new UpdateTransactionController().handleRequest))
      .delete("/transaction/:id", expressHandler(new DeleteTransactionController().handleRequest))
      .post("/user", expressHandler(new CreateUserController().handleRequest));

    this.routes.options("*", cors(options));
  }

  public getRoutes(): Router {
    return this.routes;
  }
};
