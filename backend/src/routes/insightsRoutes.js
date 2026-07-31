import { Router } from "express";
import {
  insights,
  inbox,
} from "../controllers/insightsController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.use(protect);

router.get("/insights", insights);
router.get("/inbox", inbox);

export default router;