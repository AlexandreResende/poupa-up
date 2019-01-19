
import {Request, Response} from "express";
import { IncomeService } from "./incomes.model";

export const getAllIncomes = async (req: Request, res: Response) => {
  try {
    const { incomes } = await new IncomeService().getAllIncomes();

    res.status(200).json({
      error: null,
      incomes,
    });
  } catch (err) {

    res.status(500).json({
      error: `Could not retrieve all incomes ${err}`,
      incomes: null,
    });
  }
};

export const getMonthlyIncome = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  try {
    const { incomes } = await new IncomeService().getMonthlyIncomes(month, year);

    res.status(200).json({
      error: null,
      incomes,
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not retrieve monthly incomes ${err}`,
      incomes: null,
    });
  }
};

export const createIncome = async (req: Request, res: Response) => {
  const createIncomeReq = req.body;
  try {
    const createIncomeResponse = await new IncomeService().createIncome(createIncomeReq);

    res.status(200).json({
      error: null,
      income: createIncomeResponse,
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not create income ${err}`,
      income: null,
    });
  }
};

export const updateIncome = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  try {
    const updateIncomeRespose = await new IncomeService().updateIncome(id, rest);

    res.status(200).json({
      error: null,
      income: {
        updated: updateIncomeRespose[0],
      },
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not update income ${err}`,
      income: null,
    });
  }
};

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deleteIncomeResponse = await new IncomeService().deleteIncome(id);

    res.status(200).json({
      error: null,
      income: {
        deleted: deleteIncomeResponse,
      },
    });
  } catch (err) {
    res.status(500).json({
      error: `Could not delete income ${err}`,
      income: null,
    });
  }
};
