import { sequelize } from "../config/database.js";
import User from "./User.js";
import Company from "./Company.js";
import Subscription from "./Subscription.js";


const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // Automatically updates schema
    console.log("✅ Database & tables synced.");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

syncDB();

export { sequelize, User, Company, Subscription };
