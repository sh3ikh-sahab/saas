import Position from "../models/Position.js";
import Company from "../models/Company.js";

export const createPosition = async (positionData) => {
  const { title, department, description, salary, companyId } = positionData;

  const company = await Company.findByPk(companyId);
  if (!company) throw new Error("Company not found.");

  return await Position.create(positionData);
};

export const getPositionsByCompany = async (companyId) => {
  return await Position.findAll({ where: { companyId } });
};