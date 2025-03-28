import { Company } from "../models/index.js";

// Fetch all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies", error });
  }
};

// Create a new company
export const createCompany = async (req, res) => {
  const { userId, name, industry } = req.body;

  try {
    if (!userId || !name) {
      return res.status(400).json({ error: 'User ID and company name are required' });
    }

    // Check if the company name already exists
    const existingCompany = await Company.findOne({ where: { name } });
    if (existingCompany) {
      return res.status(400).json({ error: 'Company name already exists' });
    }

    // Create the new company
    const company = await Company.create({
      name,
      industry,
      ceoId: userId,
    });

    // Update the user's role to 'CEO' and associate with the new company
    await User.update(
      { role: 'CEO', companyId: company.id },
      { where: { id: userId } }
    );

    res.status(201).json({ message: 'Company created successfully', company });
  } catch (error) {
    console.error('Company Creation Error:', error);
    res.status(500).json({ error: 'Company creation failed' });
  }
};

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields (name, email, password) are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'User',
      companyId: null,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

  export const assignUserToCompany = async (req, res) => {
  const { userId, companyId, role } = req.body;

  try {
    if (!userId || !companyId || !role) {
      return res.status(400).json({ error: 'User ID, company ID, and role are required' });
    }

    // Verify that the company exists
    const company = await Company.findByPk(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Update the user's company association and role
    await User.update(
      { companyId, role },
      { where: { id: userId } }
    );

    res.status(200).json({ message: 'User assigned to company successfully' });
  } catch (error) {
    console.error('Assignment Error:', error);
    res.status(500).json({ error: 'Assignment failed' });
  }
};