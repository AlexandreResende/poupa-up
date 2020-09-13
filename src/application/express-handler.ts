import HttpResponseHandler from "@src/application/http-response-handler";
import { NextFunction, Response, Request } from "express";

export const expressHandler = (controller: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      return HttpResponseHandler.sendInternalError(res, error);
    }
  };
};
