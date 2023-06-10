import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";

const router = Router();
const adminController = Container.get(AdminController);

router.post("/news", adminController.putNewsController);
router.post("/video", adminController.putVideoController);
router.post("/participation", adminController.putParticipationController);
router.patch("/campaign", adminController.putCampaignController);

router.get("/news", adminController.getNewsController);
router.get("/video", adminController.getVideoController);
router.get("/participation", adminController.getParticipationController);
router.get("/campaign", adminController.getCampaignController);

export default router;
