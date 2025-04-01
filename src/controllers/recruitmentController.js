import Position from '../models/Position.js';
import Company from '../models/Company.js';

export const createPosition = async (req, res) => {
  try {
    const { title, department, description, salary, companyId } = req.body;

    // Check if company exists
    const company = await Company.findByPk(companyId);
    if (!company) return res.status(404).json({ message: 'Company not found.' });

    // Create position
    const position = await Position.create({
      title,
      department,
      description,
      salary,
      companyId,
    });

    res.status(201).json({ message: 'Position created successfully.', position });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const getPositionsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const positions = await Position.findAll({ where: { companyId } });
    res.status(200).json(positions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
