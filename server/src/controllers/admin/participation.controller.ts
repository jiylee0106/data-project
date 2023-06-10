import AdminService from "@src/services/admin.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const adminService = Container.get(AdminService);
@Service()
class ParticipationController {
  async putParticipationController(req: Request, res: Response) {
    const result = await adminService.putParticipationService(req.body);
    res.status(201).json(result);
  }

  async patchParticipationController(req: Request, res: Response) {
    const result = await adminService.patchParticipationService(req.body.id);
    res.status(201).json(result);
  }

  async getParticipationController(req: Request, res: Response) {
    const result = await adminService.getParticipationService();
    res.status(201).json(result);
  }
}

export default ParticipationController;
