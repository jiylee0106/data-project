import { Router } from "express";
import AuthController from "@src/controllers/auth.controller";
import { AuthDto } from "@src/dto/auth.dto";
import { validateBody } from "@src/middlewares/validateDto";
import { Container } from "typedi";

const router = Router();
const authController = Container.get(AuthController);

router.post("/login", validateBody(AuthDto), authController.loginController);
router.post(
  "/register",
  validateBody(AuthDto),
  authController.registerController
);

export default router;
