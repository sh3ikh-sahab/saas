import Task from "../models/Task.js";

export const getEmployeePerformance = async (employeeId) => {
  const tasks = await Task.findAll({ where: { employeeId } });

  const completedTasks = tasks.filter((task) => task.status === "completed");

  return {
    totalTasks: tasks.length,
    completedTasks: completedTasks.length,
    pendingTasks: tasks.length - completedTasks.length,
  };
};