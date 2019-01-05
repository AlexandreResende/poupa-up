
import {Request, Response} from "express";
import { ExpenseService } from "./expenses.model";

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const { expenses } = await new ExpenseService().getAllExpenses();

    res.status(200).json({
      error: null,
      expenses,
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not retrieve all expenses ${err}`,
      expenses: null,
    });
  }
};

export const getMonthlyExpense = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  try {
    const { expenses } = await new ExpenseService().getMonthlyExpenses(month, year);

    res.status(200).json({
      error: null,
      expenses,
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not retrieve monthly expenses ${err}`,
      expenses: null,
    });
  }
};

export const createExpense = async (req: Request, res: Response) => {
  const createExpenseReq = req.body;
  try {
    const createExpenseResponse = await new ExpenseService().createExpense(createExpenseReq);

    res.status(200).json({
      error: null,
      expenses: createExpenseResponse,
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not create expense ${err}`,
      expenses: null,
    });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  try {
    const updateExpenseRespose = await new ExpenseService().updateExpense(id, rest);

    res.status(200).json({
      error: null,
      expenses: {
        updated: updateExpenseRespose[0],
      },
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not update Expense ${err}`,
      expenses: null,
    });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deleteExpenseResponse = await new ExpenseService().deleteExpense(id);

    res.status(200).json({
      error: null,
      expenses: {
        deleted: deleteExpenseResponse,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not delete expense ${err}`,
      expenses: null,
    });
  }
};
