import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "@prisma/client";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user as Pick<User, "id" | "email" | "provider">;
    next();
  });
};

export default validateToken;
