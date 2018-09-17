
import {Request, Response} from 'express';
import { IncomeService } from '../models-persistence/incomes.model';
import { createIncomeOutput } from '../data-source/incomes.ds';

export const getAllIncomes = (req: Request, res:Response) => {
  res.send('getallIncomes');
}

export const getMonthlyIncome = (req: Request, res:Response) => {
  res.send('getmonthlyincome');
}

export const createIncome = async (req: Request, res:Response) => {
  const createIncomeReq = req.body;
  const createIncomeResponse: createIncomeOutput = await new IncomeService().createIncome(createIncomeReq);
  
  res.status(200).send(createIncomeResponse);
}

export const updateIncome = (req: Request, res:Response) => {
  res.send('updateincomes');
}

export const deleteIncome = (req: Request, res:Response) => {
  res.send('deleteincome');
}
