import ContentController from "@src/controllers/content.controller";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const contentController = Container.get(ContentController);

router.get("/video", contentController.getSelectedVideoController);
router.get(
  "/participation",
  contentController.getSelectedParticipationController
);

export default router;
