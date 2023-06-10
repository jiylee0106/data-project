import { Router } from "express";
import { Container } from "typedi";
import { validateBody } from "@src/middlewares/validateDto";
import { PutNewsRequestDto } from "@src/dto/admin.dto";
import NewsController from "@src/controllers/admin/news.controller";

const router = Router();
const newsController = Container.get(NewsController);

router.post(
  "/",
  validateBody(PutNewsRequestDto),
  newsController.putNewsController
);

router.get("/", newsController.getNewsController);

export default router;
