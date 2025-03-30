import Payment from "../models/Payment.js";

export const createPayment = async (userId, packageId, amount, paymentMethod, transactionId) => {
  return await Payment.create({ userId, packageId, amount, paymentMethod, transactionId });
};

export const getUserPayments = async (userId) => {
  return await Payment.findAll({ where: { userId } });
};

export const updatePaymentStatus = async (transactionId, status) => {
  return await Payment.update({ status }, { where: { transactionId } });
};