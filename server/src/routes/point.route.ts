import PointController from "@src/controllers/point.controller";
import { putPointRequestDto } from "@src/dto/point.dto";
import { validateBody } from "@src/middlewares/validateDto";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const pointController = Container.get(PointController);

router.get("/", pointController.getPointController);
router.get("/logs", pointController.getPointsLogController);
router.get("/campaign", pointController.getCampaignLogController);
router.get("/daily-events", pointController.getDailyEventsLogController);
router.put(
  "/",
  validateBody(putPointRequestDto),
  pointController.putPointController
);

export default router;
