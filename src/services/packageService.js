import Package from "../models/Package.js";

export const createPackage = async (name, price, description) => {
  return await Package.create({ name, price, description });
};

export const getAllPackages = async () => {
  return await Package.findAll();
};

export const getPackageById = async (id) => {
  return await Package.findByPk(id);
};
