import express from "express";
import { createTask, getTasksByEmployee } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/:employeeId", getTasksByEmployee);

export default router;
