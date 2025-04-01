import Package from "../models/Package.js";

export const createPackage = async (name, price, description, features, billing, popular) => {
  return await Package.create({ name, price, description, features, billing, popular });
};

export const getAllPackages = async () => {
  return await Package.findAll();
};

export const getPackageById = async (id) => {
  return await Package.findByPk(id);
};
