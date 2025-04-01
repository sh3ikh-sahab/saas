import Company from "../../models/Company.js";
import { sequelize } from "../database.js";

const seedCompanies = async () => {
  await sequelize.sync(); // Ensure the database is synced

  const companies = [
    {
      id: "a1b2c3d4-5e6f-7g8h-9i10-j11k12l13m14",
      name: "Tech Corp",
      industry: "Technology",
      isActive: true,
      ceoId: "d1f3a8b4-5fcb-4e72-9c5e-3a8b9e23b1a1", // Example user ID as CEO
      website: "https://techcorp.com",
      email: "info@techcorp.com",
      phone: "+1234567890",
      address: "123 Tech Street, Silicon Valley",
      description: "A leading technology company specializing in AI solutions.",
    },
    {
      id: "b2c3d4e5-6f7g-8h9i-10j11-k12l13m14n15",
      name: "Health Solutions",
      industry: "Healthcare",
      isActive: true,
      ceoId: "d2f4a8c5-6gdb-4e83-8d5e-4b9b8e24c2b2", // Example user ID as CEO
      website: "https://healthsolutions.com",
      email: "support@healthsolutions.com",
      phone: "+1987654321",
      address: "456 Medical Avenue, New York",
      description: "Pioneering innovations in healthcare technology.",
    },
  ];

  await Company.bulkCreate(companies, { ignoreDuplicates: true });

  console.log("✅ Companies seeded successfully.");
};

export default seedCompanies;
