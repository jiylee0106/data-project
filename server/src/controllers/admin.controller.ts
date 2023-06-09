import AdminService from "@src/services/admin.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const adminService = Container.get(AdminService);
@Service()
class AdminController {
  async putNewsController(req: Request, res: Response) {
    const result = await adminService.putNewsService(req.body);
    res.status(201).json(result);
  }

  async putVideoController(req: Request, res: Response) {
    const result = await adminService.putVideoService(req.body);
    res.status(201).json(result);
  }

  async putParticipationController(req: Request, res: Response) {
    const result = await adminService.putParticipationService(req.body);
    res.status(201).json(result);
  }

  async putCampaignController(req: Request, res: Response) {
    const result = await adminService.putCampaignService(req.body);
    res.status(201).json(result);
  }
}

export default AdminController;
