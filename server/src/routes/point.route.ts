import PointController from "@src/controllers/point.controller";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const pointController = Container.get(PointController);

router.get("/", pointController.getPointController);
router.put("/", pointController.earnPointController);

export default router;
