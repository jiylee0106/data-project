import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import {
  PatchCampaignRequestDto,
  PatchParticipationRequestDto,
  PatchVideoRequestDto,
  PutCampaignRequestDto,
  PutNewsRequestDto,
  PutParticipationRequestDto,
  PutVideoRequestDto,
} from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

router.post(
  "/news",
  validateBody(PutNewsRequestDto),
  adminController.putNewsController
);
router.post(
  "/video",
  validateBody(PutVideoRequestDto),
  adminController.putVideoController
);
router.post(
  "/participation",
  validateBody(PutParticipationRequestDto),
  adminController.putParticipationController
);
router.post(
  "/campaign",
  validateBody(PutCampaignRequestDto),
  adminController.putCampaignController
);

router.patch(
  "/campaign",
  validateBody(PatchCampaignRequestDto),
  adminController.patchCampaignController
);
router.patch(
  "/video",
  validateBody(PatchVideoRequestDto),
  adminController.patchVideoController
);
router.patch(
  "/participation",
  validateBody(PatchParticipationRequestDto),
  adminController.patchParticipationController
);

router.get("/news", adminController.getNewsController);
router.get("/video", adminController.getVideoController);
router.get("/participation", adminController.getParticipationController);
router.get("/campaign", adminController.getCampaignController);

export default router;
