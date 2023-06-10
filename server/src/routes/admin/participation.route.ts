import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import { PutParticipationRequestDto } from "@src/dto/admin.dto";
import ParticipationController from "@src/controllers/admin/participation.controller";

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
  participationController.patchParticipationController
);
router.delete("/:id", participationController.deleteParticipationController);

export default router;
