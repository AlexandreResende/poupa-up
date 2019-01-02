
import {Request, Response} from 'express';
import { IncomeService } from './incomes.model';
import { ICreateIncomeOutput } from './incomes.ds';

export const getAllIncomes = async (req: Request, res: Response) => {
  const getAllIncomeResponse = await new IncomeService().getAllIncomes()
    .catch(err => {
      throw new Error(`Could not retrieve all incomes ${err}`);
    });

  res.status(200).send(getAllIncomeResponse);
}

export const getMonthlyIncome = async (req: Request, res: Response) => {
  const { month, year } = req.params;
  const getMonthlyIncomeResponse = await new IncomeService().getMonthlyIncomes(month, year)
    .catch(err => {
      throw new Error(`Could not retrieve monthly incomes ${err}`);
    });

  res.status(200).send(getMonthlyIncomeResponse);
}

export const createIncome = async (req: Request, res: Response) => {
  const createIncomeReq = req.body;
  const createIncomeResponse: ICreateIncomeOutput = await new IncomeService().createIncome(createIncomeReq)
    .catch(err => {
      throw new Error(`Could not create income ${err}`);
    });
  
  res.status(200).send(createIncomeResponse);
}

export const updateIncome = async (req: Request, res: Response) => {
  const { id, ...rest } = req.body;
  const updateIncomeRespose = await new IncomeService().updateIncome(id, rest)
    .catch(err => {
      throw new Error(`Could not update income ${err}`);
    });

  res.status(200).send({ updated: updateIncomeRespose[0] });
}

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.body;
  const deleteIncomeResponse = await new IncomeService().deleteIncome(id)
    .catch(err => {
      throw new Error(`Could not delete income ${err}`);
    });

  res.status(200).send(deleteIncomeResponse);
}
