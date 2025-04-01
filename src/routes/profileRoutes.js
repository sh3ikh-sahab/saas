import express from "express";
import { register, login, getUserProfile, updateProfile, updateProfilePicture, getCurrentUser, updateUserPassword } from "../controllers/profileController.js";
import { authenticate } from "../middleware/authenticate.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, getUserProfile); // Get user profile
router.put("/profile", authenticate, updateProfile); // Update user profile
router.put("/profile/picture", authenticate, upload.single("profilePicture"), updateProfilePicture); // Upload profile picture
router.get("/me", authenticate, getCurrentUser);
router.put("/update-password", authenticate, updateUserPassword);

export default router;
