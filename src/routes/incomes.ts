
import { Router } from 'express';
import {
  getAllIncomes,
  getMonthlyIncome,
  createIncome,
  updateIncome,
  deleteIncome
} from '../controllers/incomes.controller';


const router:Router = Router();

router.get('/incomes/getAllIncomes', getAllIncomes);

router.get('/incomes/getMonthlyIncome', getMonthlyIncome);

router.post('/incomes/createIncome', createIncome);

router.put('/incomes/updateIncome', updateIncome);

router.delete('/incomes/deleteIncome', deleteIncome);

export const incomeRoutes: Router = router;
