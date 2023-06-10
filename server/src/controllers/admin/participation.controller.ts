import ParticipationService from "@src/services/admin/participation.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const participationService = Container.get(ParticipationService);
@Service()
class ParticipationController {
  async putParticipationController(req: Request, res: Response) {
    const result = await participationService.putParticipationService(req.body);
    res.status(201).json(result);
  }

  async patchParticipationController(req: Request, res: Response) {
    const result = await participationService.patchParticipationService(
      req.body.id
    );
    res.status(201).json(result);
  }

  async getParticipationController(req: Request, res: Response) {
    const result = await participationService.getParticipationService();
    res.status(201).json(result);
  }
}

export default ParticipationController;
