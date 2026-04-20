const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, role } =
      req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already existss" });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hasedPassword,
      phoneNumber,
      role,
    });

    res
      .status(201)
      .json({ message: "User register successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

module.exports = { register };
