import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Company from './Company.js';

const Analytics = sequelize.define('Analytics', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  companyId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Company,
      key: 'id',
    },
  },
  type: {
    type: DataTypes.ENUM('overview', 'employees', 'departments', 'performance'),
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

Analytics.belongsTo(Company, { foreignKey: 'companyId' });
Company.hasMany(Analytics, { foreignKey: 'companyId' });

export default Analytics;