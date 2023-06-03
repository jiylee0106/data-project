import { Router } from "express";
import AuthController from "@src/controllers/auth.controller";
import { AuthRequestDto } from "@src/dto/auth.dto";
import { validateBody } from "@src/middlewares/validateDto";
import { Container } from "typedi";

const router = Router();
const authController = Container.get(AuthController);

router.post(
  "/login",
  validateBody(AuthRequestDto),
  authController.loginController
);
router.post(
  "/register",
  validateBody(AuthRequestDto),
  authController.registerController
);

export default router;
