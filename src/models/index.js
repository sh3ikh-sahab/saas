import { sequelize } from "../config/database.js";
import User from "./User.js";
import Company from "./Company.js";
import Subscription from "./Subscription.js";
import Payment from "./Payment.js";
import Department from "./Department.js";
import Package from "./Package.js";
import Analytics from "./Analytics.js";
import Application from "./Application.js";
import Certification from "./Certification.js";
import Education from "./Education.js";
import Job from "./Job.js";
import Position from "./Position.js";
import Skill from "./Skill.js";
import Subtask from "./Subtask.js";
import Task from "./Task.js";


const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // Automatically updates schema
    console.log("✅ Database & tables synced.");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

syncDB();

export { sequelize, User, Company, Subscription, Payment, Department, Package, Analytics, Application, Certification, Education, Job, Position, Skill, Subtask, Task };
