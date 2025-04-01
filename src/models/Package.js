import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Package = sequelize.define("Package", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  features: {
    type: DataTypes.JSON, // Array of features
    defaultValue: [],
  },
  billing: {
    type: DataTypes.STRING, // "monthly", "yearly", etc.
    allowNull: false,
    defaultValue: "monthly",
  },
  popular: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

export default Package;
