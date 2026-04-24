const Cargo = require("../models/Cargo");

const postCargo = async (req, res) => {
  try {
    const {
      cargoType,
      weight,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      budget,
      description,
    } = req.body;

    const newCargo = await Cargo.create({
      cargoType,
      weight,
      pickupLocation,
      deliveryLocation,
      pickupDate,
      budget,
      description,
    });

    res
      .status(201)
      .json({ message: "cargo posted successfully!", cargo: newCargo });
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

const getMyCargos = async (req, res) => {
  try {
    const cargos = await Cargo.find();
    res.status(200).json({ cargos }); // ✅ Fix 1
  } catch (error) {
    res.status(500).json({ message: "Server error!", error: error.message });
  }
};

module.exports = { postCargo, getMyCargos }; // ✅ Fix 2
