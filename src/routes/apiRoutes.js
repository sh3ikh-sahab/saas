import express from "express";
import authRoutes from "./authRoutes.js";
import companyRoutes from "./companyRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import userRoutes from "./userRoutes.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/company", companyRoutes);
router.use("/payments", paymentRoutes);
router.use("/users", userRoutes);

export default router;
