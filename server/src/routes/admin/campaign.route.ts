import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import {
  PatchCampaignRequestDto,
  PutCampaignRequestDto,
} from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

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

router.get("/campaign", adminController.getCampaignController);

export default router;
