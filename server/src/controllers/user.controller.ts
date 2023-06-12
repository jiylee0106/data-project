import UserService from "@src/services/user.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const userService = Container.get(UserService);
@Service()
class UserController {
  async getUserController(req: Request, res: Response) {
    const { email, role } = req.user!;
    res.status(200).json({ email, role });
  }

  async deleteUserController(req: Request, res: Response) {
    const result = await userService.deleteUserService(req.user!.id);
    res.status(200).json(result);
  }

  async changePasswordController(req: Request, res: Response) {
    const result = await userService.changePasswordService(
      req.user!.id,
      req.body.password
    );
    res.status(201).json(result);
  }

  async getAllUsersController(req: Request, res: Response) {
    const result = await userService.getAllUsersService();
    res.status(200).json(result);
  }
}

export default UserController;
