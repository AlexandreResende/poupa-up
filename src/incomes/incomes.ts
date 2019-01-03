
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
      .get("/incomes/get-all-incomes", getAllIncomes)
      .get("/incomes/get-monthly-incomes/:month/:year", getMonthlyIncome)
      .post("/incomes/create", createIncome)
      .put("/incomes/update", updateIncome)
      .delete("/incomes/delete", deleteIncome);
  }
}
