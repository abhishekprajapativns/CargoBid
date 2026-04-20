const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, role } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "Email already existss" });
  }
  const hasedPassword = await bcrypt.hash(password, 10);
};
