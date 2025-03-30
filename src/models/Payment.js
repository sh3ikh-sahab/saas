import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import User from "./User.js";
import Package from "./Package.js";

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  packageId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Package,
      key: "id",
    },
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.ENUM("Bank", "Easypaisa", "JazzCash"),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "failed"),
    defaultValue: "pending",
  },
  transactionId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

// Associations
User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });

Package.hasMany(Payment, { foreignKey: "packageId" });
Payment.belongsTo(Package, { foreignKey: "packageId" });

export default Payment;
