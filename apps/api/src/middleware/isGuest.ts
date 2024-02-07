import { NextFunction, Request, Response } from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    return res
      .status(400)
      .json({ error: "You must be logged out!", success: false });
  }
  next();
};

export default isAuthenticated;
