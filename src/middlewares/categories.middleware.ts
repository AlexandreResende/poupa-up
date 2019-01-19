
import { NextFunction, Request, Response } from "express";

import Category from "../enums/categories";

const categoryMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.indexOf("create") !== -1) {
    if (Object.keys(Category).indexOf(req.body.category) === -1) {
      return res.status(400).json({
        error: `Invalid ${req.body.category} category passed to application`,
      });
    }
  }
  next();
};

export default categoryMiddleware;
