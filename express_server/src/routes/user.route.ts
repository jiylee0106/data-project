import UserController from "@src/controllers/user.controller";
import { ChangePasswordRequestDto } from "@src/dto/user.dto";
import { validateAdmin } from "@src/middlewares/passport/validateJWT";
import { validateBody } from "@src/middlewares/validateDto";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const userController = Container.get(UserController);

router.get("/", userController.getUserController);
router.delete("/", userController.deleteUserController);
router.patch(
  "/password",
  validateBody(ChangePasswordRequestDto),
  userController.changePasswordController
);
router.get("/users", validateAdmin, userController.getAllUsersController);
router.delete("/:id", validateAdmin, userController.deleteOtherController);

export default router;
