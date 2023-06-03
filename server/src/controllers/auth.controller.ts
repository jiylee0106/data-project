import AuthService from "@src/services/auth.service";
import { Request, Response } from "express";
import Container, { Service, Inject } from "typedi";

const authService = Container.get(AuthService);
@Service()
class AuthController {
  async registerController(req: Request, res: Response) {
    await authService.registerService(req.body);
  }

  async loginController(req: Request, res: Response) {}
}

export default AuthController;
