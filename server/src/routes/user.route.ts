import UserController from "@src/controllers/user.controller";
import { ChangePasswordRequestDto } from "@src/dto/user.dto";
import { validateJWT } from "@src/middlewares/passport";
import { validateBody } from "@src/middlewares/validateDto";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const userController = Container.get(UserController);

router.get("/", validateJWT, userController.getUserController);
router.delete("/", validateJWT, userController.deleteUserController);
router.patch(
  "/password",
  validateJWT,
  validateBody(ChangePasswordRequestDto),
  userController.changePasswordController
);

export default router;
