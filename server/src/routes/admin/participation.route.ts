import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import ParticipationController from "@src/controllers/admin/participation.controller";
import {
  PatchParticipationRequestDto,
  PutParticipationRequestDto,
} from "@src/dto/admin/participation.dto";

const router = Router();
const participationController = Container.get(ParticipationController);

router.post(
  "/",
  validateBody(PutParticipationRequestDto),
  participationController.putParticipationController
);
router.patch(
  "/set_current/:id",
  participationController.setCurrentParticipationController
);
router.get("/", participationController.getParticipationController);
router.patch(
  "/patch/:id",
  validateBody(PatchParticipationRequestDto),
  participationController.patchParticipationController
);
router.delete("/:id", participationController.deleteParticipationController);

export default router;
