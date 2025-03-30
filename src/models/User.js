import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Company from "./Company.js";

const User = sequelize.define(
  "User",
  {
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
      type: DataTypes.ENUM("User", "CEO", "HR", "Manager", "Employee"),
      allowNull: false,
      defaultValue: "User",
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Company,
        key: "id",
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePicture: {
      type: DataTypes.STRING, // Store image URL
      allowNull: true,
    },
    skills: {
      type: DataTypes.JSON, // Example: ["JavaScript", "React", "Node.js"]
      allowNull: true,
    },
    education: {
      type: DataTypes.JSON, // Example: [{ degree: "BSc", field: "CS", year: "2022" }]
      allowNull: true,
    },
    experience: {
      type: DataTypes.JSON, // Example: [{ company: "ABC", role: "Dev", years: 2 }]
      allowNull: true,
    },
    certifications: {
      type: DataTypes.JSON, // Example: [{ name: "AWS Certified", year: "2023" }]
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

User.belongsTo(Company, { foreignKey: "companyId" });

export default User;