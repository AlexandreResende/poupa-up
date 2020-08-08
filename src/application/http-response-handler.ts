import { Response } from "express";
import { StatusCodes } from "./http-status-code";

export default class HttpResponseHandler {
  private readonly response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  public static sendSuccess(response: Response, data?: {}): void {
    response.status(StatusCodes.OK).send(data);
  }

  public static sendBadRequest(response: Response, data: object) {
    response.status(StatusCodes.BAD_REQUEST).send(data);
  }

  public static sendInternalError(response: Response, error: Error): void {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: "An internal error occurred",
      error: error.message
    });
  }
}