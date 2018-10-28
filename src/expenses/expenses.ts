
import { Router } from 'express';
import {
  createExpense,
  deleteExpense,
  getAllExpenses,
  getMonthlyExpense,
  updateExpense
} from './expenses.controller';

export class ExpenseRoutes {

  public expenseRouter: Router;

  constructor() {
    this.expenseRouter = Router();
    this.routes();
  }

  private routes(): Router {
    this.expenseRouter
      .get('/incomes/getAllIncomes', getAllExpenses)
      .get('/incomes/getMonthlyIncome/:month/:year', getMonthlyExpense)
      .post('/incomes/createIncome', createExpense)
      .put('/incomes/updateIncome', updateExpense)
      .delete('/incomes/deleteIncome', deleteExpense);

    return this.expenseRouter;
  }

  public getExpenseRoutes():Router {
    return this.expenseRouter;
  }
}
