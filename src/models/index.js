import { sequelize } from "../config/database.js";
import User from "./User.js";
import Company from "./Company.js";
import Subscription from "./Subscription.js";
import Payment from "./Payment.js";
import Department from "./Department.js";
import Package from "./Package.js";



const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // Automatically updates schema
    console.log("✅ Database & tables synced.");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

syncDB();

export { sequelize, User, Company, Subscription, Payment, Department, Package };
