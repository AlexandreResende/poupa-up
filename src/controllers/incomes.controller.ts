
import {Request, Response} from 'express';

export const getAllIncomes = (req: Request, res:Response) => {
  res.send('getallIncomes');
}

export const getMonthlyIncome = (req: Request, res:Response) => {
  res.send('getmonthlyincome');
}

export const createIncome = (req: Request, res:Response) => {
  res.send('createincome');
}

export const updateIncome = (req: Request, res:Response) => {
  res.send('updateincomes');
}

export const deleteIncome = (req: Request, res:Response) => {
  res.send('deleteincome');
}