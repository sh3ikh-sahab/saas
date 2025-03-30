import { createPayment, getUserPayments, updatePaymentStatus } from "../services/paymentService.js";

export const processPayment = async (req, res) => {
  try {
    const { packageId, amount, paymentMethod, transactionId } = req.body;
    const userId = req.user.id; // Assuming user is authenticated

    const payment = await createPayment(userId, packageId, amount, paymentMethod, transactionId);
    res.status(201).json({ message: "Payment request created", payment });
  } catch (error) {
    res.status(500).json({ error: "Failed to create payment request" });
  }
};

export const fetchPayments = async (req, res) => {
  try {
    const userId = req.user.id;
    const payments = await getUserPayments(userId);
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch payments" });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const { transactionId, status } = req.body;
    await updatePaymentStatus(transactionId, status);
    res.status(200).json({ message: "Payment status updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update payment status" });
  }
};
