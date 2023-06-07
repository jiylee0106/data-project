import PointService from "@src/services/point.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const pointService = Container.get(PointService);
@Service()
class PointController {
  async getPointController(req: Request, res: Response) {
    const result = await pointService.getPointService(req.user!.id);
    res.status(201).json(result);
  }

  async getPointsLogController(req: Request, res: Response) {
    const result = await pointService.getAllLogService(req.user!.id);
    res.status(201).json(result);
  }

  async getCampaignLogController(req: Request, res: Response) {
    const result = await pointService.getCampaignLogService(req.user!.id);
    res.status(201).json(result);
  }

  async getDailyEventsLogController(req: Request, res: Response) {
    const result = await pointService.getDailyEventsLogService(req.user!.id);
    res.status(201).json(result);
  }

  async putPointController(req: Request, res: Response) {
    const userId = req.user!.id;
    const { action_type, method } = req.body;
    const result = await pointService.putPointService({
      userId,
      action_type,
      method,
    });
    res.status(201).json(result);
  }
}

export default PointController;
