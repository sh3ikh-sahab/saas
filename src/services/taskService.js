import Task from "../models/Task.js";
import User from "../models/User.js";

export const createTask = async (taskData) => {
  const { title, description, employeeId, dueDate } = taskData;

  const employee = await User.findByPk(employeeId);
  if (!employee) throw new Error("Employee not found.");

  return await Task.create({
    title,
    description,
    employeeId,
    dueDate,
  });
};

export const getTasksByEmployee = async (employeeId) => {
  return await Task.findAll({ where: { employeeId } });
};
