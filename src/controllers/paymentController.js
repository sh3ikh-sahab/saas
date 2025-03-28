import { createPayment, getUserPayments, updatePaymentStatus } from "../services/paymentService.js";

export const processPayment = async (req, res) => {
  try {
    const { amount, transactionId } = req.body;
    const userId = req.user.id; // Assuming user is authenticated

    const payment = await createPayment(userId, amount, transactionId);
    res.status(201).json({ message: "Payment created", payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchPayments = async (req, res) => {
  try {
    const userId = req.user.id;
    const payments = await getUserPayments(userId);
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const { transactionId, status } = req.body;
    await updatePaymentStatus(transactionId, status);
    res.status(200).json({ message: "Payment status updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
