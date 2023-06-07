import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import pointRouter from "./point.route";
import collectionRouter from "./collection.route";
import { validateJWT } from "@src/middlewares/passport";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", validateJWT, userRouter);
router.use("/point", validateJWT, pointRouter);
router.use("/collection", validateJWT, collectionRouter);

export default router;
