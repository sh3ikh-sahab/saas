import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js"; // Import your Sequelize instance

const Department = sequelize.define("Department", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Generates a unique ID
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 255], // Min length 2, max 255
    },
  },
  description: {
    type: DataTypes.TEXT, // Long text
    allowNull: true,
  },
  employeeCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Default employee count is 0
  },
  manager: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Automatically set creation date
  },
});

export default Department;
