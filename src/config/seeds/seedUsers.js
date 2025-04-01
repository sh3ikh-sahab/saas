import User from "../../models/User.js";
import { sequelize } from "../database.js";
import bcrypt from "bcrypt";

const seedUsers = async () => {
  await sequelize.sync(); // Ensure the database is synced

  const users = [
    {
      id: "d1f3a8b4-5fcb-4e72-9c5e-3a8b9e23b1a1",
      name: "John Doe",
      email: "john@example.com",
      password: await bcrypt.hash("password123", 10), // Hashed password
      role: "CEO",
      companyId: "a1b2c3d4-5e6f-7g8h-9i10-j11k12l13m14", // Example company ID
      phone: "+123456789",
      address: "123 Main St, Silicon Valley",
      profilePicture: "https://example.com/profile.jpg",
    },
    {
      id: "d2f4a8c5-6gdb-4e83-8d5e-4b9b8e24c2b2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: await bcrypt.hash("password123", 10), // Hashed password
      role: "HR",
      companyId: "b2c3d4e5-6f7g-8h9i-10j11-k12l13m14n15", // Example company ID
      phone: "+1987654321",
      address: "456 Elm St, New York",
      profilePicture: "https://example.com/jane.jpg",
    },
  ];

  await User.bulkCreate(users, { ignoreDuplicates: true });

  console.log("✅ Users seeded successfully.");
};

export default seedUsers;
