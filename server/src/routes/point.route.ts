import PointController from "@src/controllers/point.controller";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const pointController = Container.get(PointController);

router.get("/", pointController.getPointController);
router.get("/log", pointController.getPointsLogController);
router.get("/campaign", pointController.getCampaignLogController);
router.get("/daily-events", pointController.getDailyEventsLogController);
router.put("/", pointController.putPointController);

export default router;
