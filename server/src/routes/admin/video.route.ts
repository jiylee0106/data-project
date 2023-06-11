import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import VideoController from "@src/controllers/admin/video.controller";
import {
  PatchVideoRequestDto,
  PutVideoRequestDto,
} from "@src/dto/admin/video.dto";

const router = Router();
const videoController = Container.get(VideoController);

router.post(
  "/",
  validateBody(PutVideoRequestDto),
  videoController.putVideoController
);
router.patch("/set-current/:id", videoController.setCurrentVideoController);
router.get("/", videoController.getVideoController);
router.patch(
  "/patch/:id",
  validateBody(PatchVideoRequestDto),
  videoController.patchVideoController
);
router.delete("/:id", videoController.deleteVideoController);

export default router;
