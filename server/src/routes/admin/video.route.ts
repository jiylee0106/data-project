import { Router } from "express";
import { Container } from "typedi";
import AdminController from "@src/controllers/admin.controller";
import { validateBody } from "@src/middlewares/validateDto";
import { PatchVideoRequestDto, PutVideoRequestDto } from "@src/dto/admin.dto";

const router = Router();
const adminController = Container.get(AdminController);

router.post(
  "/video",
  validateBody(PutVideoRequestDto),
  adminController.putVideoController
);

router.patch(
  "/video",
  validateBody(PatchVideoRequestDto),
  adminController.patchVideoController
);

router.get("/video", adminController.getVideoController);

export default router;
