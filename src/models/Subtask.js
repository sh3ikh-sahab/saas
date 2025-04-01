import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Task from './Task.js';

const Subtask = sequelize.define('Subtask', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  taskId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Task,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Subtask.belongsTo(Task, { foreignKey: 'taskId' });
Task.hasMany(Subtask, { foreignKey: 'taskId' });

export default Subtask;