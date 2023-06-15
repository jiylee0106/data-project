import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import NewsController from "@src/controllers/admin/news.controller";
import {
  PatchNewsRequestDto,
  PutNewsRequestDto,
} from "@src/dto/admin/news.dto";

const router = Router();
const newsController = Container.get(NewsController);

router.post(
  "/",
  validateBody(PutNewsRequestDto),
  newsController.putNewsController
);
router.get("/", newsController.getNewsController);
router.patch(
  "/:id",
  validateBody(PatchNewsRequestDto),
  newsController.patchNewsController
);
router.delete("/:id", newsController.deleteNewsController);

export default router;
