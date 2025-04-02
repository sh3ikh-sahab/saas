import express from "express";
import { getEmployeePerformance } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/employee/:employeeId", getEmployeePerformance);

export default router;