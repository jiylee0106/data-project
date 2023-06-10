import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import {
  PatchParticipationRequestDto,
  PutParticipationRequestDto,
} from "@src/dto/admin.dto";
import ParticipationController from "@src/controllers/admin/participation.controller";

const router = Router();
const participationController = Container.get(ParticipationController);

router.post(
  "/",
  validateBody(PutParticipationRequestDto),
  participationController.putParticipationController
);

router.patch(
  "/",
  validateBody(PatchParticipationRequestDto),
  participationController.patchParticipationController
);

router.get("/", participationController.getParticipationController);

export default router;
