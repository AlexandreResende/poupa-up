
import { ICreateExpenseOutput } from "./expenses.ds";

import {Request, Response} from "express";
import { ExpenseService } from "./expenses.model";

export const getAllExpenses = async (req: Request, res: Response) => {
  const { expenses } = await new ExpenseService().getAllExpenses()
    .catch((err) => {
      res.status(500).json({
        error: `Could not retrieve all expenses ${err}`,
        expenses: null,
      });
    });

  res.status(200).json({
    error: null,
    expenses,
  });
};

export const getMonthlyExpense = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  const { expenses } = await new ExpenseService().getMonthlyExpenses(month, year)
    .catch((err) => {
      res.status(500).json({
        error: `Could not retrieve monthly expenses ${err}`,
        expenses: null,
      });
    });

  res.status(200).json({
    error: null,
    expenses,
  });
};

export const createExpense = async (req: Request, res: Response) => {
  const createExpenseReq = req.body;
  const createExpenseResponse = await new ExpenseService().createExpense(createExpenseReq)
    .catch((err) => {
      res.status(500).json({
        error: `Could not create expense ${err}`,
        expenses: null,
      });
    });

  res.status(200).json({
    error: null,
    expenses: createExpenseResponse,
  });
};

export const updateExpense = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateExpenseRespose = await new ExpenseService().updateExpense(id, rest)
    .catch((err) => {
      res.status(500).json({
        error: `Could not update Expense ${err}`,
        expenses: null,
      });
    });

  res.status(200).json({
    error: null,
    expenses: {
      updated: updateExpenseRespose[0],
    },
  });
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteExpenseResponse = await new ExpenseService().deleteExpense(id)
    .catch((err) => {
      res.status(500).json({
        error: `Could not delete expense ${err}`,
        expenses: null,
      });
    });

  res.status(200).json({
    error: null,
    expenses: {
      deleted: deleteExpenseResponse,
    },
  });
};
