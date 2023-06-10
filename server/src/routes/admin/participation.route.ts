import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import {
  PatchParticipationRequestDto,
  PutParticipationRequestDto,
} from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

router.post(
  "/",
  validateBody(PutParticipationRequestDto),
  adminController.putParticipationController
);

router.patch(
  "/",
  validateBody(PatchParticipationRequestDto),
  adminController.patchParticipationController
);

router.get("/", adminController.getParticipationController);

export default router;
