import PointService from "@src/services/point.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const pointService = Container.get(PointService);
@Service()
class PointController {
  getPointController = async (req: Request, res: Response) => {
    const result = await pointService.getPointService(req.user!.id);
    res.status(201).json(result);
  };

  putPointController = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const { points, action_type, method } = req.body;
    const result = await pointService.putPointService({
      userId,
      points,
      action_type,
      method,
    });
    res.status(201).json(result);
  };
}

export default PointController;
