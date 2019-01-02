
import { Router } from 'express';
import {
  getAllIncomes,
  getMonthlyIncome,
  createIncome,
  updateIncome,
  deleteIncome
} from './incomes.controller';

export class IncomeRoutes {

  public incomeRouter: Router;

  constructor() {
    this.incomeRouter = Router();
    this.routes();
  }

  private routes(): Router {
    return this.incomeRouter
      .get('/incomes/get-all-incomes', getAllIncomes)
      .get('/incomes/get-monthly-incomes/:month/:year', getMonthlyIncome)
      .post('/incomes/create', createIncome)
      .put('/incomes/update/:id', updateIncome)
      .delete('/incomes/delete/:id', deleteIncome);
  }

  public getIncomeRoutes():Router {
    return this.incomeRouter;
  }
}
