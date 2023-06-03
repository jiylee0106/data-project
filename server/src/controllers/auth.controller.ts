import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
class AuthController {
  async registerController(req: Request, res: Response) {
    console.log(req.body);
  }

  async loginController(req: Request, res: Response) {}
}

export default AuthController;
