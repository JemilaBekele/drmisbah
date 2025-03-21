const bcrypt = require("bcryptjs");
const { Users } = require("../models");
const { sign } = require("jsonwebtoken");
const { Op } = require("sequelize"); // Import Op for OR queries
require("dotenv").config(); // Load environment variables

const addUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await Users.findOne({
      where: { [Op.or]: [{ username }, { email }] },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username or Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Failed to add user" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username OR email
    const user = await Users.findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Wrong username or password" });
    }

    // Generate JWT token
    const accessToken = sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET || "importantsecret",
      { expiresIn: "1h" }
    );

    return res.json({
      token: accessToken,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const validateUser = (req, res) => {
  res.json(req.user);
};

module.exports = { addUser, loginUser, validateUser };
