import express from "express";
import { processPayment, fetchPayments, updatePayment } from "../controllers/paymentController.js";
import {authenticate} from "../middleware/authenticate.js"; // Assuming JWT auth is required

const router = express.Router();

router.post("/", authenticate, processPayment);
router.get("/", authenticate, fetchPayments);
router.put("/", authenticate, updatePayment);

export default router;
