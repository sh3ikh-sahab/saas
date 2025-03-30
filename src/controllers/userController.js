import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { getUserById, updateUserProfile } from "../services/userService.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "User", // Default role
      companyName: null, // No company association initially
    });

    res.status(201).json({ message: "User registered successfully.", user });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ error: "Registration failed." });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "email, and password are required." });
    }
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// ✅ Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

// ✅ Update User Profile
export const updateProfile = async (req, res) => {
  try {
    const { name, phone, address, skills, education, experience, certifications } = req.body;
    const updateData = { name, phone, address, skills, education, experience, certifications };

    await updateUserProfile(req.user.id, updateData);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Profile update failed" });
  }
};

// ✅ Update Profile Picture
export const updateProfilePicture = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const profilePictureUrl = `/uploads/profile_pictures/${req.file.filename}`;
    await updateUserProfile(req.user.id, { profilePicture: profilePictureUrl });

    res.status(200).json({ message: "Profile picture updated", profilePicture: profilePictureUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile picture" });
  }
};