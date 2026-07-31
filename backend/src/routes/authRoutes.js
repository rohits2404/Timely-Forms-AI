import express from "express"
import { deleteAccount, getMe, login, patchPassword, patchProfile, register } from "../controllers/authController.js"
import { protect } from "../middleware/auth.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

router.get("/me", protect, getMe)
router.put("/profile", protect, patchProfile)
router.put("/password", protect, patchPassword)
router.delete("/me", protect, deleteAccount)

export default router