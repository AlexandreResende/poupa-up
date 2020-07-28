import { Request, Response } from "express";
import TransactionRepository from "../repositories/transaction-repository"

export class GetTransactionsController {
  async handleRequest(_: Request, res: Response): Promise<object> {
    const transactionRepository = new TransactionRepository();

    await transactionRepository.create({
      description: "nada",
      month: "02",
      year: "2020",
      valueSpent: -20.50,
      category: "lanche"
    });

    return res.status(200).send({ data: "Done..." });
  }
}