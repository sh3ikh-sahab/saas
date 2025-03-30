import express from "express";
import { createNewPackage, fetchAllPackages } from "../controllers/packageController.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/", authenticate, createNewPackage); // Create a package
router.get("/", fetchAllPackages); // Get all packages

export default router;
