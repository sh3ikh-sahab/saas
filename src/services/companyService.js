import Company from "../models/Company.js";

export const createCompany = async (companyData) => {
  return await Company.create(companyData);
};

export const getAllCompanies = async () => {
  return await Company.findAll();
};