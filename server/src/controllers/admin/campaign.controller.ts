import AdminService from "@src/services/admin.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const adminService = Container.get(AdminService);
@Service()
class CampaignController {
  async putCampaignController(req: Request, res: Response) {
    const result = await adminService.putCampaignService(req.body);
    res.status(201).json(result);
  }

  async patchCampaignController(req: Request, res: Response) {
    const result = await adminService.patchCampaignService(req.body);
    res.status(201).json(result);
  }

  async getCampaignController(req: Request, res: Response) {
    const result = await adminService.getCampaignService();
    res.status(201).json(result);
  }
}

export default CampaignController;
