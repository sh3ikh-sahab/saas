import Position from "../../models/Position.js";
import { sequelize } from "../database.js";

const seedPositions = async () => {
  await sequelize.sync(); // Ensure the database is synced

  const positions = [
    {
      id: "pos1",
      title: "Software Engineer",
      department: "Engineering",
      description: "Develop and maintain software applications.",
      salary: 75000.00,
      companyId: "a1b2c3d4-5e6f-7g8h-9i10-j11k12l13m14", // Example company ID
    },
    {
      id: "pos2",
      title: "Marketing Manager",
      department: "Marketing",
      description: "Lead marketing campaigns and brand strategy.",
      salary: 60000.00,
      companyId: "b2c3d4e5-6f7g-8h9i-10j11-k12l13m14n15", // Example company ID
    },
  ];

  await Position.bulkCreate(positions, { ignoreDuplicates: true });

  console.log("✅ Positions seeded successfully.");
};

export default seedPositions;
