import Task from '../models/Task.js';
import Employee from '../models/User.js';

export const createTask = async (req, res) => {
  try {
    const { title, description, employeeId, dueDate } = req.body;

    // Find employee
    const employee = await Employee.findByPk(employeeId);
    if (!employee) return res.status(404).json({ message: 'Employee not found.' });

    // Create task
    const task = await Task.create({
      title,
      description,
      employeeId,
      dueDate,
    });

    res.status(201).json({ message: 'Task created successfully.', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const getTasksByEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const tasks = await Task.findAll({ where: { employeeId } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
