import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import { PutVideoRequestDto } from "@src/dto/admin.dto";
import VideoController from "@src/controllers/admin/video.controller";

const router = Router();
const videoController = Container.get(VideoController);

router.post(
  "/",
  validateBody(PutVideoRequestDto),
  videoController.putVideoController
);
router.patch("/set_current/:id", videoController.setCurrentVideoController);
router.get("/", videoController.getVideoController);
router.patch("/patch/:id", videoController.patchVideoController);
router.delete("/:id", videoController.deleteVideoController);

export default router;
