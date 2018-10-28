
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
      .get('/incomes/getAllIncomes', getAllIncomes)
      .get('/incomes/getMonthlyIncome/:month/:year', getMonthlyIncome)
      .post('/incomes/createIncome', createIncome)
      .put('/incomes/updateIncome', updateIncome)
      .delete('/incomes/deleteIncome', deleteIncome);
  }

  public getIncomeRoutes():Router {
    return this.incomeRouter;
  }
}
