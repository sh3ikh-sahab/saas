import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Company from './Company.js';

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  salary: {
    type: DataTypes.STRING, // Range or specific amount
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('open', 'closed', 'on-hold'),
    defaultValue: 'open',
  },
  companyId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Company,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

Job.belongsTo(Company, { foreignKey: 'companyId' });
Company.hasMany(Job, { foreignKey: 'companyId' });

export default Job;