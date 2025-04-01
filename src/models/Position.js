import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Company from './Company.js';

const Position = sequelize.define('Position', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
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

Position.belongsTo(Company, { foreignKey: 'companyId' });
Company.hasMany(Position, { foreignKey: 'companyId' });

export default Position;