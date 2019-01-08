
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getMonthlyExpense,
  updateExpense,
} from "./expenses.controller";

import { Router } from "express";
import CorsServices from "../services/corsServices";

export class ExpenseRoutes {

  public expenseRouter: Router;

  constructor() {
    this.expenseRouter = Router();
    this.routes();
  }

  public getExpenseRoutes(): Router {
    return this.expenseRouter;
  }

  private routes(): Router {
    const corsServices = new CorsServices();

    this.expenseRouter
      .options("*", corsServices.appliedCorsOptions())
      .get("/expenses/get-all-expenses", getAllExpenses)
      .get("/expenses/get-monthly-expenses/:month/:year", getMonthlyExpense)
      .post("/expenses/create", createExpense)
      .put("/expenses/update", updateExpense)
      .delete("/expenses/delete", deleteExpense);

    return this.expenseRouter;
  }
}
