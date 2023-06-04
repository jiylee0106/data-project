import UserController from "@src/controllers/user.controller";
import { Router } from "express";
import Container from "typedi";

const router = Router();
const userController = Container.get(UserController);

router.get("/", userController.getUserController);
router.delete("/", userController.deleteUserController);

export default router;
