import express from "express";
import { createPosition, getPositionsByCompany } from "../controllers/recruitmentController.js";

const router = express.Router();

router.post("/", createPosition);
router.get("/:companyId", getPositionsByCompany);

export default router;
