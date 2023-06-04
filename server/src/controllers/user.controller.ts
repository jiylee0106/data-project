import UserService from "@src/services/user.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const userService = Container.get(UserService);
@Service()
class UserController {
  async getUserController(req: Request, res: Response) {
    const result = await userService.getUserService();
    res.status(201).json(result);
  }

  async deleteUserController(req: Request, res: Response) {
    const result = await userService.deleteUserService();
    res.status(201).json(result);
  }
}

export default UserController;
