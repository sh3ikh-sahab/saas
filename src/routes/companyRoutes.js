import express from "express";
import { getCompanies, createCompany, registerCompany } from "../controllers/companyController.js";

const router = express.Router();

router.get("/", getCompanies);
router.post("/", createCompany);
router.post("/", registerCompany);

export default router; // ✅ Ensure default export
