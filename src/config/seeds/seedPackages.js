import Package from "../../models/Package.js";
import { sequelize } from "../database.js";

const seedPackages = async () => {
  await sequelize.sync(); // Ensure the database is synced

  const packages = [
    {
      id: "pkg1",
      name: "Basic Plan",
      price: 10.99,
      description: "A starter plan for small businesses.",
      features: ["Feature A", "Feature B", "Feature C"],
      billing: "monthly",
      popular: false,
    },
    {
      id: "pkg2",
      name: "Pro Plan",
      price: 29.99,
      description: "A professional plan with advanced features.",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      billing: "monthly",
      popular: true,
    },
    {
      id: "pkg3",
      name: "Enterprise Plan",
      price: 99.99,
      description: "A full-featured enterprise plan.",
      features: ["All Features"],
      billing: "yearly",
      popular: true,
    },
  ];

  await Package.bulkCreate(packages, { ignoreDuplicates: true });

  console.log("✅ Packages seeded successfully.");
};

export default seedPackages;
