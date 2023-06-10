import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import passport from "passport";

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: User, info: any) => {
      if (err) {
        return next(err);
      }

      if (info instanceof TokenExpiredError) {
        return res.status(401).send({ message: "토큰이 만료되었습니다" });
      }

      if (!user) {
        return res.status(401).send({ message: "잘못된 토큰 형식입니다" });
      }

      req.user = user;
      return next();
    }
  )(req, res, next);
};

const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: User, info: any) => {
      if (err) {
        return next(err);
      }

      if (info instanceof TokenExpiredError) {
        return res.status(401).send({ message: "토큰이 만료되었습니다" });
      }

      if (!user) {
        return res.status(401).send({ message: "잘못된 토큰 형식입니다" });
      }

      if (user.role !== "Admin") {
        return res.status(403).send({ message: "관리자가 권한이 없습니다" });
      }

      req.user = user;
      return next();
    }
  )(req, res, next);
};

export { validateJWT, validateAdmin };
