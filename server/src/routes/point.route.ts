import PointController from "@src/controllers/point.controller";
import { validateJWT } from "@src/middlewares/passport";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const pointController = Container.get(PointController);

router.get("/", validateJWT, pointController.getPointController);
router.put("/", validateJWT, pointController.putPointController);

export default router;
