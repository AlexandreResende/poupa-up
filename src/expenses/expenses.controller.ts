
import { ICreateExpenseOutput } from "./expenses.ds";

import {Request, Response} from "express";
import { ExpenseService } from "./expenses.model";

export const getAllExpenses = async (req: Request, res: Response) => {
  const getAllExpenseResponse = await new ExpenseService().getAllExpenses()
    .catch((err) => {
      throw new Error(`Could not retrieve all expenses ${err}`);
    });

  res.status(200).send(getAllExpenseResponse);
};

export const getMonthlyExpense = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  const getMonthlyExpenseResponse = await new ExpenseService().getMonthlyExpenses(month, year)
    .catch((err) => {
      throw new Error(`Could not retrieve monthly expenses ${err}`);
    });

  res.status(200).send(getMonthlyExpenseResponse);
};

export const createExpense = async (req: Request, res: Response) => {
  const createExpenseReq = req.body;
  const createExpenseResponse: ICreateExpenseOutput = await new ExpenseService().createExpense(createExpenseReq)
    .catch((err) => {
      throw new Error(`Could not create expense ${err}`);
    });

  res.status(200).send(createExpenseResponse);
};

export const updateExpense = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateExpenseRespose = await new ExpenseService().updateExpense(id, rest)
    .catch((err) => {
      throw new Error(`Could not update Expense ${err}`);
    });

  res.status(200).send({ updated: updateExpenseRespose[0] });
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteExpenseResponse = await new ExpenseService().deleteExpense(id)
    .catch((err) => {
      throw new Error(`Could not delete expense ${err}`);
    });

  res.status(200).send({ deleted: deleteExpenseResponse });
};
