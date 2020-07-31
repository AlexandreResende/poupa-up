import { Response } from "express";
import { StatusCodes } from "./http-status-code";

export default class HttpResponseHandler {
  private readonly response: Response;

  constructor(response: Response) {
    this.response = response;
  }

  sendSuccess(data: object) {
    return this.response.status(StatusCodes.OK).send(data);
  }
}