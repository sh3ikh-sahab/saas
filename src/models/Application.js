import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Job from './Job.js';
import User from './User.js';

const Application = sequelize.define('Application', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  jobId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Job,
      key: 'id',
    },
  },
  applicantId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  coverLetter: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  resumeUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('applied', 'reviewing', 'interview', 'rejected', 'accepted'),
    defaultValue: 'applied',
  },
}, {
  timestamps: true,
});

Application.belongsTo(Job, { foreignKey: 'jobId' });
Application.belongsTo(User, { foreignKey: 'applicantId' });
Job.hasMany(Application, { foreignKey: 'jobId' });
User.hasMany(Application, { foreignKey: 'applicantId' });

export default Application;