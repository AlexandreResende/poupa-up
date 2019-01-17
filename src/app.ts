
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";

import { ExpenseRoutes } from "./expenses/expenses";
import { IncomeRoutes } from "./incomes/incomes";
import CategoryMiddleware from "./middlewares/categories.middleware";
// import CorsServices from "./services/corsServices";

class App {
  public app: express.Application;
  private incomeRoutes: IncomeRoutes = new IncomeRoutes();
  private expenseRoutes: ExpenseRoutes = new ExpenseRoutes();

  constructor() {
    this.app = express();
    this.config();
  }

  public config() {
    // const corsService = new CorsServices();
    this.app
      .use(helmet())
      .use(cors())
      // .use(corsService.appliedCorsOptions())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(CategoryMiddleware)
      .use("/incomes", this.incomeRoutes.getIncomeRoutes())
      .use("/expenses", this.expenseRoutes.getExpenseRoutes());
  }
}

export default new App().app;
