
import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getMonthlyIncome,
  updateIncome,
} from "./incomes.controller";

import { Router } from "express";

export class IncomeRoutes {

  public incomeRouter: Router;

  constructor() {
    this.incomeRouter = Router();
    this.routes();
  }

  public getIncomeRoutes(): Router {
    return this.incomeRouter;
  }

  private routes(): Router {
    return this.incomeRouter
      .get("/get-all-incomes", getAllIncomes)
      .get("/get-monthly-incomes/:month/:year", getMonthlyIncome)
      .post("/create", createIncome)
      .put("/update", updateIncome)
      .delete("/delete", deleteIncome);
  }
}
