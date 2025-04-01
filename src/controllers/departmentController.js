import { Department } from "../models/index.js";

// Create a new department
export const createDepartment = async (req, res) => {
  try {
    const { name, description, employeeCount, manager } = req.body;
    const newDepartment = await Department.create({ name, description, employeeCount, manager });
    return res.status(201).json({ message: "Department created successfully", department: newDepartment });
  } catch (error) {
    console.error("Error creating department:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Get all departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    return res.status(200).json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Get department by ID
export const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    return res.status(200).json(department);
  } catch (error) {
    console.error("Error fetching department:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Update department
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, employeeCount, manager } = req.body;

    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    department.name = name || department.name;
    department.description = description || department.description;
    department.employeeCount = employeeCount || department.employeeCount;
    department.manager = manager || department.manager;

    await department.save();
    
    return res.status(200).json({ message: "Department updated successfully", department });
  } catch (error) {
    console.error("Error updating department:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Delete department
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    await department.destroy();
    
    return res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    console.error("Error deleting department:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
