import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import CampaignController from "@src/controllers/admin/campaign.controller";
import {
  PatchCampaignRequestDto,
  PutCampaignRequestDto,
} from "@src/dto/admin/campaign.dto";

const router = Router();
const campaignController = Container.get(CampaignController);

router.post(
  "/",
  validateBody(PutCampaignRequestDto),
  campaignController.putCampaignController
);
router.patch(
  "/",
  validateBody(PatchCampaignRequestDto),
  campaignController.patchCampaignController
);
router.get("/", campaignController.getCampaignController);
router.delete("/:id", campaignController.deleteCampaignController);

export default router;
