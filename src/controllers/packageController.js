import { createPackage, getAllPackages, getPackageById } from "../services/packageService.js";

export const createNewPackage = async (req, res) => {
  try {
    const { name, price, description, features, billing, popular } = req.body;
    const newPackage = await createPackage(name, price, description, features, billing, popular);
    res.status(201).json({ message: "Package created successfully", package: newPackage });
  } catch (error) {
    res.status(500).json({ error: "Failed to create package" });
  }
};

export const fetchAllPackages = async (req, res) => {
  try {
    const packages = await getAllPackages();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};
