import { Router } from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import pointRouter from "./point.route";
import collectionRouter from "./collection.route";
import adminRouter from "./admin.route";
import contentRouter from "./content.route";
import {
  validateAdmin,
  validateJWT,
} from "@src/middlewares/passport/validateJWT";
const router = Router();

router.use("/auth", authRouter);
router.use("/content", contentRouter);
router.use("/user", validateJWT, userRouter);
router.use("/point", validateJWT, pointRouter);
router.use("/collection", validateJWT, collectionRouter);
router.use("/admin", validateAdmin, adminRouter);

export default router;
