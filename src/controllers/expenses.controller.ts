
import {Request, Response} from 'express';
import { ExpenseService } from '../models-persistence/Expenses.model';
import {createExpenseOutput } from '../data-source/Expenses.ds';

export const getAllExpenses = async (req: Request, res: Response) => {
  const getAllExpenseResponse = await new ExpenseService().getAllExpenses();

  res.status(200).send(getAllExpenseResponse);
}

export const getMonthlyExpense = async (req: Request, res: Response) => {
  const { month, year } = req.body;
  const getMonthlyExpenseResponse = await new ExpenseService().getMonthlyExpenses(month, year);

  res.status(200).send(getMonthlyExpenseResponse);
}

export const createExpense = async (req: Request, res: Response) => {
  const createExpenseReq = req.body;
  const createExpenseResponse: createExpenseOutput = await new ExpenseService().createExpense(createExpenseReq);
  
  res.status(200).send(createExpenseResponse);
}

export const updateExpense = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateExpenseRespose = await new ExpenseService().updateExpense(id, rest)
    .catch(err => {
      throw new Error('Could not update Expense.');
    });

  res.status(200).send(updateExpenseRespose);
}

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteExpenseResponse = await new ExpenseService().deleteExpense(id);

  res.status(200).send(deleteExpenseResponse);
}
