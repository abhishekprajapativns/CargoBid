const mongoose = require("mongoose");

const cargoSchema = new mongoose.Schema(
  {
    cargoType: { type: String, required: true },
    weight: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    deliveryLocation: { type: String, required: true },
    pickupDate: { type: String, required: true },
    budget: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true },
);

const Cargo = mongoose.model("Cargo", cargoSchema);
module.exports = Cargo;
