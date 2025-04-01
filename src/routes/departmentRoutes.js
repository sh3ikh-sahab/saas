import express from "express";
import { 
    createDepartment, 
    getDepartments, 
    getDepartmentById, 
    updateDepartment, 
    deleteDepartment 
 } from "../controllers/departmentController.js";

const router = express.Router();

router.post("/", createDepartment); // Create a new department
router.get("/", getDepartments); // Get all departments
router.get("/:id", getDepartmentById); // Get department by ID
router.put("/:id", updateDepartment); // Update department
router.delete("/:id", deleteDepartment); // Delete department

export default router;
