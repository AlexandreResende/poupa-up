import { Response } from "express";
import { StatusCodes } from "./http-status-code";

export default class HttpResponseHandler {
  private readonly response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  public static async sendSuccess(response: Response, data: object): Promise<void> {
    response.status(StatusCodes.OK).send(data);
  }

  public static async sendInternalError(response: Response, error: Error): Promise<void> {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: "An internal error occurred",
      error: error.message
    });
  }
}