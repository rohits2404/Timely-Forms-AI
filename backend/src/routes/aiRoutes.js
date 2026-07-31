import { Router } from "express";
import {
  generateForm,
  generateValidation,
  improveQuestion,
  formSummary,
} from "../controllers/aiController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.use(protect);

router.post("/generate-form", generateForm);
router.post("/generate-validation", generateValidation);
router.post("/improve-question", improveQuestion);
router.post("/form-summary", formSummary);

export default router;