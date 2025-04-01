import User from "../models/User.js";

export const getUserById = async (id) => {
  return await User.findByPk(id);
};

export const updateUserProfile = async (userId, updateData) => {
  return await User.update(updateData, { where: { id: userId } });
};