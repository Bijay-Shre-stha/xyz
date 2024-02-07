import { NextFunction, Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    return next();
  }

  return res
    .status(401)
    .json({ error: "You must be logged in!", success: false });
};

export default isAuthenticated;
