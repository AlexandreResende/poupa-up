
import {
  createIncome,
  deleteIncome,
  getAllIncomes,
  getMonthlyIncome,
  updateIncome,
} from "./incomes.controller";

import { Router } from "express";
import CorsServices from "../services/corsServices";

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
    const corsServices = new CorsServices();

    return this.incomeRouter
      .options("*", corsServices.appliedCorsOptions())
      .get("/incomes/get-all-incomes", getAllIncomes)
      .get("/incomes/get-monthly-incomes/:month/:year", getMonthlyIncome)
      .post("/incomes/create", createIncome)
      .put("/incomes/update", updateIncome)
      .delete("/incomes/delete", deleteIncome);
  }
}
