import express from "express";
import companyRoutes from "./companyRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import profileRoutes from "./profileRoutes.js";
import departmentRoutes from "./departmentRoutes.js";
import packageRoutes from "./packageRoutes.js";

const router = express.Router();
router.use("/company", companyRoutes);
router.use("/payments", paymentRoutes);
router.use("/users", profileRoutes);
router.use("/departments", departmentRoutes);
router.use("/package", packageRoutes);

export default router;
