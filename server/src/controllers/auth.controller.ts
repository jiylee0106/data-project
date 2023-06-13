import AuthService from "@src/services/auth.service";
import { NextFunction, Request, Response } from "express";
import Container, { Service } from "typedi";

const authService = Container.get(AuthService);
@Service()
class AuthController {
  async registerController(req: Request, res: Response) {
    const result = await authService.registerService(req.body, "Local");
    res.status(201).json(result);
  }

  async loginController(req: Request, res: Response) {
    const result = await authService.loginService(req.body);
    res.status(201).json(result);
  }

  async googleLoginController(req: Request, res: Response, next: NextFunction) {
    const result = await authService.googleLoginService(req, res, next);
    console.log(result);
  }

  async kakaoLoginController(req: Request, res: Response, next: NextFunction) {
    const result = await authService.kakaoLoginService(req, res, next);
    console.log(result);
  }
}

export default AuthController;
