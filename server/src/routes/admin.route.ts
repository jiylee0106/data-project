import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";

const router = Router();
const adminController = Container.get(AdminController);

router.post("/news", adminController.putNewsController);
router.post("/video", adminController.putVideoController);
router.post("/participation", adminController.putParticipationController);
router.patch("/campaign", adminController.putCampaignController);

export default router;
