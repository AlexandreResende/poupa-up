
import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";

import { IncomeRoutes } from './routes/incomes';

class App {

  public app:express.Application;
  public incomeRoutes: IncomeRoutes = new IncomeRoutes();

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    console.log('entered config function');
    this.app
      .use(helmet())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(this.incomeRoutes.getIncomeRoutes());
  }
}

export default new App().app;
