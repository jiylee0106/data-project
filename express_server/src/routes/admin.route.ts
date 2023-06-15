import { Router } from "express";
import campaignRouter from "./admin/campaign.route";
import newsRouter from "./admin/news.route";
import participationRouter from "./admin/participation.route";
import videoRouter from "./admin/video.route";

const router = Router();

router.use("/news", newsRouter);
router.use("/video", videoRouter);
router.use("/participation", participationRouter);
router.use("/campaign", campaignRouter);

export default router;
