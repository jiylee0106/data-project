import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import { PatchVideoRequestDto, PutVideoRequestDto } from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

router.post(
  "/",
  validateBody(PutVideoRequestDto),
  adminController.putVideoController
);

router.patch(
  "/",
  validateBody(PatchVideoRequestDto),
  adminController.patchVideoController
);

router.get("/", adminController.getVideoController);

export default router;
