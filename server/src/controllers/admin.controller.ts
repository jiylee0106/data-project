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

  async patchCampaignController(req: Request, res: Response) {
    const result = await adminService.patchCampaignService(req.body);
    res.status(201).json(result);
  }

  async patchVideoController(req: Request, res: Response) {
    const result = await adminService.patchVideoService(req.body);
    res.status(201).json(result);
  }

  async patchParticipationController(req: Request, res: Response) {
    const result = await adminService.patchParticipationService(req.body);
    res.status(201).json(result);
  }

  async getNewsController(req: Request, res: Response) {
    const result = await adminService.getNewsService();
    res.status(201).json(result);
  }

  async getVideoController(req: Request, res: Response) {
    const result = await adminService.getVideoService();
    res.status(201).json(result);
  }

  async getParticipationController(req: Request, res: Response) {
    const result = await adminService.getParticipationService();
    res.status(201).json(result);
  }

  async getCampaignController(req: Request, res: Response) {
    const result = await adminService.getCampaignService();
    res.status(201).json(result);
  }
}

export default AdminController;
