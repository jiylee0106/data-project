import UserController from "@src/controllers/user.controller";
import { validateJWT } from "@src/middlewares/passport";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const userController = Container.get(UserController);

router.get("/", validateJWT, userController.getUserController);
router.delete("/", validateJWT, userController.deleteUserController);
router.patch("/password", validateJWT, userController.changePasswordController);

export default router;
