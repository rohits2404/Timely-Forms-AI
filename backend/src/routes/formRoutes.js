import express from "express"
import { protect } from "../middleware/auth.js"
import { createForm, deleteForm, duplicateForm, getForm, getForms, publishForm, updateForm } from "../controllers/formController.js"

const router = express.Router()

router.use(protect)

router.route("/").get(getForms).post(createForm)
router.route("/:id").get(getForm).put(updateForm).delete(deleteForm)
router.post("/:id/publish", publishForm)
router.post("/:id/duplicate", duplicateForm)

export default router