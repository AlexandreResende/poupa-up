import { Request, Response } from "express";

export class GetTransactionsController {
  handleRequest(_: Request, res: Response): object {
    return res.status(200).send({ data: "Done..." });
  }
}