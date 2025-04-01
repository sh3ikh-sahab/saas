import User from '../models/User.js';

export const createEmployee = async (req, res) => {
  try {
    const { name, email, password, role, companyId } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'Employee already exists.' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employee
    const employee = await User.create({
      name,
      email,
      password: hashedPassword,
      role: 'Employee',
      companyId,
    });

    res.status(201).json({ message: 'Employee created successfully.', employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.findAll({ where: { role: 'Employee' } });
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
