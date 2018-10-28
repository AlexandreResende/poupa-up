
import {Request, Response} from 'express';
import { IncomeService } from './incomes.model';
import { ICreateIncomeOutput } from './incomes.ds';

export const getAllIncomes = async (req: Request, res: Response) => {
  const getAllIncomeResponse = await new IncomeService().getAllIncomes();

  res.status(200).send(getAllIncomeResponse);
}

export const getMonthlyIncome = async (req: Request, res: Response) => {
  const { month, year } = req.body;
  const getMonthlyIncomeResponse = await new IncomeService().getMonthlyIncomes(month, year);

  res.status(200).send(getMonthlyIncomeResponse);
}

export const createIncome = async (req: Request, res: Response) => {
  const createIncomeReq = req.body;
  const createIncomeResponse: ICreateIncomeOutput = await new IncomeService().createIncome(createIncomeReq);
  
  res.status(200).send(createIncomeResponse);
}

export const updateIncome = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateIncomeRespose = await new IncomeService().updateIncome(id, rest)
    .catch(err => {
      throw new Error('Could not update income.');
    });

  res.status(200).send(updateIncomeRespose);
}

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteIncomeResponse = await new IncomeService().deleteIncome(id);

  res.status(200).send(deleteIncomeResponse);
}
