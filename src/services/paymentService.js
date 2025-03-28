import Payment from "../models/Payment.js";

export const createPayment = async (userId, amount, transactionId) => {
  return await Payment.create({ userId, amount, transactionId });
};

export const getUserPayments = async (userId) => {
  return await Payment.findAll({ where: { userId } });
};

export const updatePaymentStatus = async (transactionId, status) => {
  return await Payment.update({ status }, { where: { transactionId } });
};
