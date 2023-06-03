import { Router } from "express";
import AuthController from "@src/controllers/auth.controller";
import { AuthResponseDto } from "@src/dto/auth.dto";
import { validateBody } from "@src/middlewares/validateDto";
import { Container } from "typedi";

const router = Router();
const authController = Container.get(AuthController);

router.post(
  "/login",
  validateBody(AuthResponseDto),
  authController.loginController
);
router.post(
  "/register",
  validateBody(AuthResponseDto),
  authController.registerController
);

export default router;
