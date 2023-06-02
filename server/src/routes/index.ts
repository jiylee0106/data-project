import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import pointRouter from "./point.route";
import collectionRouter from "./collection.route";
const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/point", pointRouter);
router.use("/collection", collectionRouter);

export default router;
