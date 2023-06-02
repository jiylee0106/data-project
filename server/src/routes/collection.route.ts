import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:species");
router.put("/");

export default router;
