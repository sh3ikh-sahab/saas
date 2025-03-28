import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Company from './Company.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('User', 'CEO', 'HR', 'Manager', 'Employee'),
    allowNull: false,
    defaultValue: 'User',
  },
  companyId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Company,
      key: 'id',
    },
  },
}, {
  timestamps: true,
});

User.belongsTo(Company, { foreignKey: 'companyId' });

export default User;