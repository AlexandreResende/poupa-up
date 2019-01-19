
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getMonthlyExpense,
  updateExpense,
} from "./expenses.controller";

import { Router } from "express";

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
    this.expenseRouter
      .get("/get-all-expenses", getAllExpenses)
      .get("/get-monthly-expenses/:month/:year", getMonthlyExpense)
      .post("/create", createExpense)
      .put("/update", updateExpense)
      .delete("/delete", deleteExpense);

    return this.expenseRouter;
  }
}
