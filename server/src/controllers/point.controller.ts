import PointService from "@src/services/point.service";
import { Request, Response } from "express";
import Container, { Service } from "typedi";

const pointService = Container.get(PointService);
@Service()
class PointController {
  getPointController = async (req: Request, res: Response) => {
    const result = await pointService.getPointService();
    res.status(201).json(result);
  };

  earnPointController = async (req: Request, res: Response) => {
    const result = await pointService.earnPointService();
    res.status(201).json(result);
  };
}

export default PointController;
