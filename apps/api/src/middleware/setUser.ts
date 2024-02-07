import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../prisma/prisma";

type JWTPayload = {
  user_id: string;
  email: string;
  iat: number;
  exp: number;
};

const setUser = async (req: Request, res: Response, next: NextFunction) => {
  // get cookie
  const authorizationCookie: string | undefined =
    req.cookies && req.cookies["Authorization"];

  if (authorizationCookie && authorizationCookie.startsWith("Bearer ")) {
    const token = authorizationCookie.split(" ")[1];

    // get user from token
    try {
      const decoded = jwt.verify(
        token,
        process.env.TOKEN_KEY || ""
      ) as JWTPayload;

      const user = await prisma.user.findFirst({
        where: { id: decoded["user_id"] || "" },
      });

      req.user = user;
    } catch (e) {
      req.user = null;
    }
  }
  next();
};

export default setUser;
