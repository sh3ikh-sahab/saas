import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Company from "./Company.js";

const Subscription = sequelize.define("Subscription", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  companyId: { type: DataTypes.UUID, allowNull: false },
  plan: { type: DataTypes.ENUM("Basic", "Premium", "Enterprise"), allowNull: false },
  status: { type: DataTypes.ENUM("Active", "Expired", "Canceled"), defaultValue: "Active" },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false },
}, { timestamps: true });

Subscription.belongsTo(Company, { foreignKey: "companyId" });
Company.hasOne(Subscription, { foreignKey: "companyId" });

export default Subscription;
