import express from "express";
import companyRoutes from "./companyRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import profileRoutes from "./profileRoutes.js";
import departmentRoutes from "./departmentRoutes.js";
import packageRoutes from "./packageRoutes.js";
import employeeRoutes from "./employeeRoutes.js";
import taskRoutes from "./taskRoutes.js";
import recruitmentRoutes from "./recruitmentRoutes.js";
import analyticsRoutes from "./analyticsRoutes.js";


const router = express.Router();
router.use("/company", companyRoutes);
router.use("/payments", paymentRoutes);
router.use("/users", profileRoutes);
router.use("/departments", departmentRoutes);
router.use("/package", packageRoutes);
router.use("/employees", employeeRoutes);
router.use("/tasks", taskRoutes);
router.use("/recruitment", recruitmentRoutes);
router.use("/analytics", analyticsRoutes);

export default router;
