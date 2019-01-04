
import { ICreateIncomeOutput, IGetIncomesOutput } from "./incomes.ds";

import {Request, Response} from "express";
import { IncomeService } from "./incomes.model";

export const getAllIncomes = async (req: Request, res: Response) => {
  const { incomes } = await new IncomeService().getAllIncomes()
    .catch((err) => {
      res.status(500).json({
        error: `Could not retrieve all incomes ${err}`,
        incomes: null,
      });
    });

  res.status(200).json({
    error: null,
    incomes,
  });
};

export const getMonthlyIncome = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  const { incomes } = await new IncomeService().getMonthlyIncomes(month, year)
    .catch((err) => {
      res.status(500).json({
        error: `Could not retrieve monthly incomes ${err}`,
        incomes: null,
      });
    });

  res.status(200).json({
    error: null,
    incomes,
  });
};

export const createIncome = async (req: Request, res: Response) => {
  const createIncomeReq = req.body;
  const createIncomeResponse = await new IncomeService().createIncome(createIncomeReq)
    .catch((err) => {
      res.status(500).json({
        error: `Could not create income ${err}`,
        income: null,
      });
    });

  res.status(200).json({
    error: null,
    income: createIncomeResponse,
  });
};

export const updateIncome = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateIncomeRespose = await new IncomeService().updateIncome(id, rest)
    .catch((err) => {
      res.status(500).json({
        error: `Could not update income ${err}`,
        income: null,
      });
    });

  res.status(200).json({
    error: null,
    income: {
      updated: updateIncomeRespose[0],
    },
  });
};

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteIncomeResponse = await new IncomeService().deleteIncome(id)
    .catch((err) => {
      res.status(500).json({
        error: `Could not delete income ${err}`,
        income: null,
      });
    });

  res.status(200).json({
    error: null,
    income: {
      deleted: deleteIncomeResponse,
    },
  });
};
