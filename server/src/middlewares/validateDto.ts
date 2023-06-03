import { validateOrReject } from "class-validator";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";

const validateBody = <T extends object>(type: new () => T): RequestHandler => {
  return async (req, res, next) => {
    const dtoInstance = plainToClass(type, req.body);
    try {
      await validateOrReject(dtoInstance, { whitelist: true });
      next();
    } catch (error) {
      throw { status: 403, message: "유효하지 않은 요청입니다" };
    }
  };
};

export { validateBody };
