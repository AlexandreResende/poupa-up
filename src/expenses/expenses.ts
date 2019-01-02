
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
      .get('/expenses/get-all-expenses', getAllExpenses)
      .get('/expenses/get-monthly-expenses/:month/:year', getMonthlyExpense)
      .post('/expenses/create', createExpense)
      .put('/expenses/update', updateExpense)
      .delete('/expenses/delete', deleteExpense);

    return this.expenseRouter;
  }

  public getExpenseRoutes():Router {
    return this.expenseRouter;
  }
}
