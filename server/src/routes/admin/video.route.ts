import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import { PatchVideoRequestDto, PutVideoRequestDto } from "@src/dto/admin.dto";
import VideoController from "@src/controllers/admin/video.controller";

const router = Router();
const videoController = Container.get(VideoController);

router.post(
  "/",
  validateBody(PutVideoRequestDto),
  videoController.putVideoController
);

router.patch(
  "/",
  validateBody(PatchVideoRequestDto),
  videoController.patchVideoController
);

router.get("/", videoController.getVideoController);

export default router;
