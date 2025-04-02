import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createEmployee = async (employeeData) => {
  const { name, email, password, role, companyId } = employeeData;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error("Employee already exists.");

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({
    name,
    email,
    password: hashedPassword,
    role: "Employee",
    companyId,
  });
};

export const getAllEmployees = async () => {
  return await User.findAll({ where: { role: "Employee" } });
};
