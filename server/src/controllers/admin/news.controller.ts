import AdminService from "@src/services/admin.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const adminService = Container.get(AdminService);
@Service()
class NewsController {
  async putNewsController(req: Request, res: Response) {
    const result = await adminService.putNewsService(req.body);
    res.status(201).json(result);
  }

  async getNewsController(req: Request, res: Response) {
    const result = await adminService.getNewsService();
    res.status(201).json(result);
  }
}

export default NewsController;
