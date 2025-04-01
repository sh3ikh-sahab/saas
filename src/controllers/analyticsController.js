import User from '../models/User.js';
import Task from '../models/Task.js';

export const getEmployeePerformance = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const tasks = await Task.findAll({ where: { employeeId } });

    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const performance = {
      totalTasks: tasks.length,
      completedTasks: completedTasks.length,
      pendingTasks: tasks.length - completedTasks.length,
    };

    res.status(200).json(performance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
