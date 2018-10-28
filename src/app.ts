
import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";

import { IncomeRoutes } from './incomes/incomes';
import { ExpenseRoutes } from './expenses/expenses';

class App {

  public app:express.Application;
  private incomeRoutes: IncomeRoutes = new IncomeRoutes();
  private expenseRoutes: ExpenseRoutes = new ExpenseRoutes();

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    console.log('Entered config function');
    this.app
      .use(helmet())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(this.incomeRoutes.getIncomeRoutes())
      .use(this.expenseRoutes.getExpenseRoutes());
  }
}

export default new App().app;
